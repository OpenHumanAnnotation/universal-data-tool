// @flow
import React, { useState, useMemo, useRef, useEffect, useCallback } from "react"
import { HeaderContext } from "../Header"
import StartingPage from "../StartingPage"
import OHAEditor from "../OHAEditor"
import { makeStyles } from "@material-ui/core/styles"
import ErrorToasts from "../ErrorToasts"
import useErrors from "../../utils/use-errors.js"
import useFileHandler from "../../utils/file-handlers"
import download from "in-browser-download"
import toUDTCSV from "../../utils/to-udt-csv.js"
import Amplify, { Auth, Storage } from "aws-amplify"
import config from "../LocalStorageApp/AWSconfig"
import isEmpty from "../../utils/isEmpty"
import { setIn } from "seamless-immutable"
import ErrorBoundary from "../ErrorBoundary"
import useEventCallback from "use-event-callback"
import usePreventNavigation from "../../utils/use-prevent-navigation"

const useStyles = makeStyles({
  empty: {
    textAlign: "center",
    padding: 100,
    color: "#666",
    fontSize: 28,
  },
})

const randomId = () => Math.random().toString().split(".")[1]

export default () => {
  const c = useStyles()
  const {
    file,
    changeFile,
    openFile,
    openUrl,
    makeSession,
    recentItems,
    changeRecentItems,
  } = useFileHandler()
  usePreventNavigation(Boolean(file))
  const [errors, addError] = useErrors()

  const [selectedBrush, setSelectedBrush] = useState("complete")

  const onCreateTemplate = useEventCallback((template) => {
    changeFile({
      fileName: "unnamed",
      content: template.oha,
      id: randomId(),
      mode: "local-storage",
    })
  })

  const openRecentItem = useEventCallback((item) => changeFile(item))
  const onClickHome = useEventCallback(() => changeFile(null))
  const onDownload = useEventCallback((format) => {
    if (!file) return
    const outputName = (file.sessionId || file.fileName) + ".udt." + format
    if (format === "json") {
      download(JSON.stringify(file.content), outputName)
    } else if (format === "csv") {
      download(toUDTCSV(file.content), outputName)
    }
  })

  const inSession = file && file.mode === "server"
  const [sessionBoxOpen, changeSessionBoxOpen] = useState(false)
  const [authConfig, changeAuthConfig] = useState(null)
  const [user, changeUser] = useState(null)

  const logoutUser = () => {
    Auth.signOut()
      .then(() => {
        changeUser(null)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (isEmpty(user) && isEmpty(authConfig)) {
      try {
        Amplify.configure(config)

        Auth.currentAuthenticatedUser()
          .then((tryUser) => {
            changeUser(tryUser)
            changeAuthConfig(config)
          })
          .catch((err) => {
            changeAuthConfig(config)
          })
      } catch (err) {
        changeAuthConfig(null)
      }
    }
  }, [])

  const onJoinSession = useCallback(async (sessionName) => {
    await openUrl(sessionName)
  }, [])

  const onLeaveSession = useEventCallback(() =>
    changeFile({
      ...file,
      mode: "local-storage",
      id: randomId(),
      fileName: "unnamed",
    })
  )

  async function fetchAnImage(element) {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"
    var response
    if (typeof element.imageUrl !== "undefined") {
      response = await fetch(proxyUrl + element.imageUrl).catch((error) => {
        console.log("Looks like there was a problem: \n", error)
      })
    } else {
      response = await fetch(proxyUrl + element.videoUrl, {
        method: "GET",
        headers: {
          "X-Requested-With": "xmlhttprequest",
        },
      }).catch((error) => {
        console.log("Looks like there was a problem: \n", error)
      })
    }
    const blob = await response.blob()
    return blob
  }

  function UpdateAWSStorage() {
    let index
    for (let y = 0; y < recentItems.length; y++) {
      if (
        file !== "undefined" &&
        file.fileName !== "undefined" &&
        typeof recentItems[y].fileName !== "undefined" &&
        recentItems[y].fileName === file.fileName
      )
        index = y
    }
    if (typeof index !== "undefined") {
      var json = JSON.stringify(recentItems[index])

      Storage.put(`${file.fileName}/`, null, {
        level: "private",
      }).catch((err) => console.log(err))

      Storage.put(`${file.fileName}/annotations/annotations.json`, json, {
        level: "private",
      }).catch((err) => console.log(err))

      recentItems[index].content.taskData.forEach(async (element) => {
        try {
          const blob = await fetchAnImage(element)
          let imageOrVideoName
          if (typeof element.imageUrl !== "undefined") {
            imageOrVideoName = element.imageUrl.match(
              `\\/([^\\/\\\\&\\?]*\\.([a-zA-Z0-9]*))(\\?|$)`
            )
          } else {
            imageOrVideoName = element.videoUrl.match(
              `\\/([^\\/\\\\&\\?]*\\.([a-zA-Z0-9]*))(\\?|$)`
            )
          }

          var pathToFile = `${file.fileName}/data/${imageOrVideoName[1]}`
          Storage.put(pathToFile, blob, {
            level: "private",
          }).catch((err) => console.log(err))
        } catch (err) {
          console.log(err)
        }
      })
    }
  }
  function hasChanged(objectOfRef, objectToCheck) {
    // Vérifie si la donnée existe dans l'objet d'origine
    if(typeof objectToCheck === "undefined")  return false
    if(typeof objectToCheck.content === "undefined")  return false
    if(typeof objectToCheck.content.taskData === "undefined") return false
    if(typeof objectToCheck.content.taskData[0] === "undefined") return false
    
    // Vérifie si l'objet de référence est initialisé
    if(typeof objectOfRef === "undefined") return true
    if(typeof objectOfRef.content === "undefined") return true
    if(typeof objectOfRef.content.taskData === "undefined") return true
    
    //Vérifie si les deux diffèrent sur le premier point à regarder
     if(objectToCheck.content.taskData !== objectOfRef.content.taskData) return true
    
     //Vérifie si le second point existe
    if(typeof objectToCheck.content.taskOutput === "undefined") return false
    if(typeof objectToCheck.content.taskOutput[0] === "undefined") return false

    //Vérifie si l'objet de référence possède le second point
    if(typeof objectOfRef.content.taskOutput === "undefined") return true

    //Vérifie si les deux sont différents
    if(objectToCheck.content.taskOutput !== objectOfRef.content.taskOutput) return true

    //Comportement par défaut
    return false
  }

  const lastObjectRef = useRef([])
  useEffect(() => {
    console.log("UseEffect est trigger")
    console.log(file)
    if (!isEmpty(authConfig)) { 
      if (!hasChanged(lastObjectRef.current, file)) return
      console.log("J'ai changé")
      lastObjectRef.current = file
      UpdateAWSStorage()
    }
  }, [recentItems])

  return (
    <>
      <HeaderContext.Provider
        value={{
          title: file
            ? file.mode === "local-storage"
              ? file.fileName
              : file.url
            : "unnamed",
          recentItems,
          changeRecentItems,
          onClickTemplate: onCreateTemplate,
          onClickHome,
          onOpenFile: openFile,
          onOpenRecentItem: openRecentItem,
          inSession,
          sessionBoxOpen,
          changeSessionBoxOpen,
          onJoinSession,
          onLeaveSession,
          onCreateSession: makeSession,
          fileOpen: Boolean(file),
          onDownload,
          authConfig,
          onUserChange: (userToSet) => changeUser(userToSet),
          user: user,
          logoutUser: logoutUser,
          onChangeSelectedBrush: setSelectedBrush,
          selectedBrush,
        }}
      >
        {!file ? (
          <StartingPage
            onFileDrop={openFile}
            onOpenTemplate={onCreateTemplate}
            recentItems={recentItems}
            onOpenRecentItem={openRecentItem}
            onClickOpenSession={() => changeSessionBoxOpen(true)}
            onAuthConfigured={(config) => changeAuthConfig(config)}
            user={user}
            logoutUser={logoutUser}
          />
        ) : (
          <ErrorBoundary>
            <OHAEditor
              file={file}
              key={file.id}
              {...file}
              selectedBrush={selectedBrush}
              inSession={inSession}
              oha={file.content}
              onChangeOHA={(newOHA) => {
                changeFile(setIn(file, ["content"], newOHA))
              }}
              onChangeFile={changeFile}
              authConfig
              user={user}
              recentItems={recentItems}
            />
          </ErrorBoundary>
        )}
      </HeaderContext.Provider>
      <ErrorToasts errors={errors} />
    </>
  )
}
