import React, { useEffect, useRef, useState, useCallback } from "react"
import SimpleDialog from "../SimpleDialog"
import DataTable from "react-data-table-component"
import useDataset from "../../hooks/use-dataset"
import isEmpty from "lodash/isEmpty"
import datasetManagerCognito from "udt-dataset-managers/dist/CognitoDatasetManager"
import useAuth from "../../utils/auth-handlers/use-auth"
import setTypeOfFileToLoadAndDisable from "./set-type-of-file-to-load-and-disable"
import initConfigImport from "./init-config-import"
import datasetHasChanged from "../../utils//dataset-helper/get-files-differences"
import setUrl from "./set-url"
import { setIn } from "seamless-immutable"
import {
  Settings as SettingsIcon,
  Storage as StorageIcon,
} from "@material-ui/icons/"
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
  FormLabel,
  IconButton,
  Grid,
} from "@material-ui/core/"

const selectedStyle = { color: "DodgerBlue" }

const expandedAssetsColumns = [
  { name: "Assets", selector: "assets", sortable: true },
  { name: "Last Modified", selector: "lastModified", sortable: true },
]

const expandedAnnotationsColumns = [
  { name: "Annotations", selector: "annotation" },
  { name: "Last Modified", selector: "lastModified", sortable: true },
]

const columns = [{ name: "Projects", selector: "folder", sortable: true }]

const customStyles = {
  headCells: {
    style: {
      paddingLeft: "10px",
      "font-weight": "bold",
    },
  },
  cells: {
    style: {
      paddingLeft: "25px",
    },
  },
}

const ExpandedRow = ({ data }) => {
  const { rowAssets, rowAnnotations } = data
  return (
    <>
      <DataTable
        style={{
          boxSizing: "border-box",
          paddingLeft: "50px",
          paddingRight: "10px",
        }}
        dense
        striped
        noHeader
        columns={expandedAnnotationsColumns}
        data={rowAnnotations}
        noDataComponent='Make sure the project has "samples" folder'
        pagination={rowAnnotations.length > 10}
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 25, 50, 100, 200]}
        customStyles={customStyles}
      />
      <DataTable
        style={{
          boxSizing: "border-box",
          paddingLeft: "50px",
          paddingRight: "10px",
        }}
        dense
        striped
        noHeader
        columns={expandedAssetsColumns}
        data={rowAssets}
        noDataComponent={'Make sure the project has "data" folder'}
        pagination={rowAssets.length > 10}
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 25, 50, 100, 200]}
        customStyles={customStyles}
      />
    </>
  )
}

export default ({ open, onClose, onAddSamples }) => {
  const [dm, setDm] = useState(null)
  const [oldData] = useDataset()
  const { authConfig } = useAuth()
  const [projects, setProjects] = useState()
  const [projectToFetch, setProjectToFetch] = useState()
  const [configImport, setConfigImport] = useState(initConfigImport(oldData))
  const lastObjectRef = useRef({})

  const hasProjectStarted = useCallback(() => {
    if (!open) return
    if (
      isEmpty(oldData) ||
      (isEmpty(oldData.interface) && isEmpty(oldData.samples))
    )
      return false
    return true
  }, [oldData, open])

  useEffect(() => {
    if (oldData === lastObjectRef.current) return
    var configToSet = configImport
    const changes = datasetHasChanged(lastObjectRef.current, oldData)
    if (changes.interface.type || changes.samples) {
      configToSet = setTypeOfFileToLoadAndDisable(configToSet, oldData)
    }
    setConfigImport({
      ...configToSet,
      projectStarted: hasProjectStarted(),
    })
    console.log("changes")
    console.log(configImport)
    lastObjectRef.current = oldData
  }, [oldData, configImport, setConfigImport, hasProjectStarted])

  const handleRowSelected = (whatsChanging) => {
    if (!open) return
    if (!isEmpty(whatsChanging.selectedRows[0])) {
      setProjectToFetch(whatsChanging.selectedRows[0])
      setProjects((prevState) =>
        prevState.map((row) => {
          if (whatsChanging.selectedRows[0].id === row.id) {
            row.isSelected = true
          } else {
            row.isSelected = false
          }
          return row
        })
      )
    } else {
      setProjectToFetch("")
    }
  }

  const loadAssetsOrAnnotations = () => {
    setConfigImport({
      ...configImport,
      loadAssetsIsSelected: !configImport.loadAssetsIsSelected,
    })
  }

useEffect(() => {
  if (!open) return
  if (!authConfig) return
  if (!dm) setDm(new datasetManagerCognito({ authConfig }))
}, [open, authConfig, dm])

  const getProjects = async () => {
    if (!open) return
    if (!dm) return
    if (!(await dm.isReady())) return
    var dataFolder = Array.from(await dm.getProjects())

    var data = await Promise.all(
      dataFolder.map(async (obj, index) => {
        const folder = obj
        var isSelected = false
        const rowAnnotationsContent = await dm.getListSamples({
          projectName: obj,
        })
        const rowAssetsContent = await dm.getListAssets({
          projectName: obj,
        })
        if (projectToFetch && projectToFetch.folder === folder)
          isSelected = true
        return {
          id: `${index}`,
          folder: folder,
          rowAnnotations: rowAnnotationsContent.map((obj) => {
            return {
              annotation: obj.split("/samples/")[1],
            }
          }),
          rowAssets: rowAssetsContent.map((obj) => {
            return {
              assets: obj.split("/assets/")[1],
            }
          }),
          rowAnnotationsUrl: rowAnnotationsContent,
          rowAssetsUrl: rowAssetsContent,
          isSelected: isSelected,
        }
      })
    )
    setProjects(data)
  }
  const setProject = async () => {
    if (!open) return
    if (!dm) return
    if (!(await dm.isReady())) return
    if (!projectToFetch) return
    dm.setProject(projectToFetch.folder)
  }
  useEffect(() => {
    if (!open) return
    if (!authConfig) return
    if (!dm) setDm(new datasetManagerCognito({ authConfig }))
  }, [open, authConfig, dm])

  useEffect(() => {
    if (!open) return
    getProjects()
    // eslint-disable-next-line
  }, [dm, open])

  useEffect(() => {
    if (!open) return
    setProject()
    // eslint-disable-next-line
  }, [projectToFetch, open])
  const createJsonFromAsset = async () => {
    var jsons = await Promise.all(
      projectToFetch.rowAssetsUrl.map(async (obj) => {
        var url = await dm.getDataUrl(obj.split("/assets/")[1])
        var json = setUrl(url, configImport)
        if (json) json = setIn(json, ["_id"], obj.split("/assets/")[1])
        return json
      })
    )
    onAddSamples(jsons)
  }

  const createJsonFromAnnotation = async () => {
    var jsons = await dm.readJSONAllSample(projectToFetch.rowAnnotationsUrl)
    onAddSamples(jsons)
  }

  const handleAddSample = async () => {
    if (!projectToFetch) return
    if (configImport.loadAssetsIsSelected) {
      createJsonFromAsset()
    } else {
      createJsonFromAnnotation()
    }
  }

  return (
    <SimpleDialog
      title="Select Project"
      open={open}
      onClose={onClose}
      actions={[
        {
          text: "Take samples from project",
          onClick: () => {
            handleAddSample()
          },
        },
      ]}
    >
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0} justify="center">
          {configImport.loadAssetsIsSelected ? (
            <Button
              style={selectedStyle}
              onClick={loadAssetsOrAnnotations}
              disabled
            >
              Load Assets
            </Button>
          ) : (
            <Button onClick={loadAssetsOrAnnotations}>Load Assets</Button>
          )}
          {configImport.loadAssetsIsSelected ? (
            <Button onClick={loadAssetsOrAnnotations}>Load Annotations</Button>
          ) : (
            <Button
              style={selectedStyle}
              onClick={loadAssetsOrAnnotations}
              disabled
            >
              Load Annotations
            </Button>
          )}
          <IconButton
            onClick={() => {
              setConfigImport({
                ...configImport,
                contentDialogBoxIsSetting: !configImport.contentDialogBoxIsSetting,
              })
            }}
          >
            {configImport.contentDialogBoxIsSetting ? (
              <StorageIcon></StorageIcon>
            ) : (
              <SettingsIcon></SettingsIcon>
            )}
          </IconButton>
        </Grid>

        {!configImport.contentDialogBoxIsSetting ? (
          !isEmpty(projects) && (
            <Grid container item xs={12} spacing={0} justify="center">
              <DataTable
                expandableRows
                expandableRowsComponent={<ExpandedRow />}
                selectableRows
                selectableRowsHighlight
                selectableRowsNoSelectAll
                selectableRowsComponent={Radio}
                dense
                noHeader
                noTableHead
                columns={columns}
                onSelectedRowsChange={handleRowSelected}
                selectableRowSelected={(row) => row.isSelected}
                data={projects}
                pagination={projects.length > 10}
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 20, 25, 50, 100, 200]}
              />
            </Grid>
          )
        ) : (
          <Grid container item xs={12} spacing={0} justify="center">
            {!configImport.loadAssetsIsSelected ? (
              <FormControl component="fieldset">
                <FormLabel component="legend">Annotation processing</FormLabel>
                <RadioGroup
                  aria-label="option1"
                  onChange={(event) => {
                    setConfigImport({
                      ...configImport,
                      annotationToKeep: event.target.value,
                    })
                  }}
                >
                  <FormControlLabel
                    value="both"
                    control={<Radio />}
                    label="Keep both annotations"
                    checked={configImport.annotationToKeep === "both"}
                  />
                  <FormControlLabel
                    value="incoming"
                    control={<Radio />}
                    label="Keep incoming annotations"
                    checked={configImport.annotationToKeep === "incoming"}
                  />
                  <FormControlLabel
                    value="current"
                    control={<Radio />}
                    label="Keep current annotations"
                    checked={configImport.annotationToKeep === "current"}
                  />
                </RadioGroup>
              </FormControl>
            ) : (
              <FormControl component="fieldset">
                <FormLabel component="legend">Choose file type</FormLabel>
                <RadioGroup
                  aria-label="option2"
                  onChange={(event) => {
                    setConfigImport({
                      ...configImport,
                      typeOfFileToLoad: event.target.value,
                    })
                  }}
                >
                  <FormControlLabel
                    value="Image"
                    control={<Radio />}
                    label="Load image file"
                    disabled={configImport.typeOfFileToDisable.Image}
                    checked={configImport.typeOfFileToLoad === "Image"}
                  />
                  <FormControlLabel
                    value="Video"
                    control={<Radio />}
                    label="Load video file"
                    disabled={configImport.typeOfFileToDisable.Video}
                    checked={configImport.typeOfFileToLoad === "Video"}
                  />
                  <FormControlLabel
                    value="Audio"
                    control={<Radio />}
                    label="Load audio file"
                    disabled={configImport.typeOfFileToDisable.Audio}
                    checked={configImport.typeOfFileToLoad === "Audio"}
                  />
                  <FormControlLabel
                    value="PDF"
                    control={<Radio />}
                    label="Load PDF file"
                    disabled={configImport.typeOfFileToDisable.PDF}
                    checked={configImport.typeOfFileToLoad === "PDF"}
                  />
                  <FormControlLabel
                    value="Texte"
                    control={<Radio />}
                    label="Load texte file"
                    disabled={configImport.typeOfFileToDisable.Texte}
                    checked={configImport.typeOfFileToLoad === "Texte"}
                  />
                </RadioGroup>
              </FormControl>
            )}
          </Grid>
        )}
      </Grid>
    </SimpleDialog>
  )
}
