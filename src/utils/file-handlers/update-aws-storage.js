import { Storage } from "aws-amplify"
import isEmpty from "../isEmpty"
import jsonHandler from "./recent-items-handler"
export default (file) => {
  async function fetchAFile(element) {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"
    var response
    var url
    if (jsonHandler.getSampleUrl(element) !== undefined)
      url = proxyUrl + jsonHandler.getSampleUrl(element)
    response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Requested-With": "xmlhttprequest",
      },
    }).catch((error) => {
      console.log("Looks like there was a problem: \n", error)
    })
    const blob = await response.blob()
    return blob
  }

  function fileNameExist(file) {
    if (file !== "undefined" && file.fileName !== "undefined") return true

    return false
  }

  function createOrReplaceProjectFile(file) {
    Storage.put(`${file.fileName}/`, null, {
      level: "private",
    }).catch((err) => console.log(err))
  }

  function createOrReplaceAnnotations(file, json) {
    Storage.put(`${file.fileName}/annotations/annotations.json`, json, {
      level: "private",
    }).catch((err) => console.log(err))
  }

  function createOrReplaceImages(file) {
    if (!isEmpty(file.content.taskData)) {
      file.content.taskData.forEach(async (element) => {
        try {
          const blob = await fetchAFile(element)
          let imageOrVideoName = jsonHandler.getSampleName(element)

          var pathToFile = `${file.fileName}/data/${imageOrVideoName}`
          Storage.put(pathToFile, blob, {
            level: "private",
          }).catch((err) => console.log(err))
        } catch (err) {
          console.log(err)
        }
      })
    }
  }

  if (fileNameExist(file)) {
    var json = JSON.stringify(file)
    createOrReplaceProjectFile(file)
    createOrReplaceAnnotations(file, json)
    createOrReplaceImages(file)
  }
}
