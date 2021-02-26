import React, { useEffect, useState } from "react"
import SimpleDialog from "../SimpleDialog"
import DataTable from "react-data-table-component"
import useActiveDatasetManager from "../../hooks/use-active-dataset-manager"
import isEmpty from "lodash/isEmpty"
import datasetManagerCognito from "udt-dataset-managers/dist/CognitoDatasetManager"
import useAuth from "../../utils/auth-handlers/use-auth"
import { useTranslation } from "react-i18next"
import { TextField, Grid, IconButton } from "@material-ui/core"
import WarningHeader from "./warning-header"
import initConfigExport from "./init-config-export"
import SettingDialog from "./interface-setting-export.js"
import createAssets from "./create-assets"
import { setIn } from "seamless-immutable"
import {
  Settings as SettingsIcon,
  Storage as StorageIcon,
} from "@material-ui/icons/"

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

export default ({ open, onClose }) => {
  const [dm, setDm] = useState()
  const { authConfig } = useAuth()
  const [projects, setProjects] = useState()
  const [activeDatasetManager] = useActiveDatasetManager()
  const [nameProjectToCreate, setNameProjectToCreate] = useState("")
  const [nameProjectExist, setNameProjectExist] = useState(false)
  const [currentDataset, setCurrentDataset] = useState()
  const { t } = useTranslation()
  const columns = [{ name: t("projects"), selector: "folder", sortable: true }]
  const expandedAnnotationsColumns = [
    { name: t("annotations"), selector: "annotation" },
    { name: t("last-modified"), selector: "lastModified", sortable: true },
  ]
  const ExpandedRow = ({ data }) => {
    const { rowAnnotations } = data
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
          noDataComponent={t("has-samples-folder")}
          pagination={rowAnnotations.length > 10}
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 25, 50, 100, 200]}
          customStyles={customStyles}
        />
      </>
    )
  }
  const [refreshInterface, setRefreshInterface] = useState(false)
  const [configExport, setConfigExport] = useState(initConfigExport)

  const getCurrentDataset = async () => {
    if (currentDataset) return currentDataset
    setCurrentDataset(await activeDatasetManager.getDataset())
    setRefreshInterface(true)
    return currentDataset
  }

  const getProjectName = () => {
    if (!currentDataset) return
    if (!currentDataset.name) return
    if (currentDataset.name === "New undefined Dataset") {
      setNameProjectToCreate("")
      return ""
    }
    setNameProjectToCreate(currentDataset.name)
    return currentDataset.name
  }

  const getProjects = async () => {
    if (!open) return
    if (!dm) return
    if (!(await dm.isReady())) return
    var dataFolder = Array.from(await dm.getProjects())

    var data = await Promise.all(
      dataFolder.map(async (obj, index) => {
        const folder = obj
        const rowAnnotationsContent = await dm.getListSamples({
          projectName: obj,
        })
        return {
          id: `${index}`,
          folder: folder,
          rowAnnotations: rowAnnotationsContent.map((obj) => {
            return {
              annotation: obj.split("/samples/")[1],
            }
          }),
          rowAnnotationsUrl: rowAnnotationsContent,
          isSelected: false,
        }
      })
    )
    setProjects(data)
  }
  useEffect(() => {
    if (!open) return
    if (!authConfig) return
    if (!dm) setDm(new datasetManagerCognito({ authConfig }))
    // eslint-disable-next-line
  }, [dm, open, authConfig])

  useEffect(() => {
    if (!open) return
    getCurrentDataset()
    getProjectName()
    // eslint-disable-next-line
  }, [open, refreshInterface])

  useEffect(() => {
    if (!open) return
    getProjects()
    // eslint-disable-next-line
  }, [open, dm])

  useEffect(() => {
    if (!projects) return
    var exist = false
    for (var i = 0; i < projects.length; i++)
      if (projects[i].folder === nameProjectToCreate) exist = true
    setNameProjectExist(exist)
  }, [nameProjectToCreate, projects])

  const handleCreateProject = async () => {
    if (!currentDataset) return
    var dataset = currentDataset

    dataset = await dataset.setIn(["name"], nameProjectToCreate)

    if (nameProjectExist) await dm.removeSamplesFolder(nameProjectToCreate)
    if (nameProjectExist && configExport.typeAssetExport === "withProxy")
      await dm.removeAssetsFolder(nameProjectToCreate)
    if (configExport.typeAssetExport === "withProxy") {
      dataset = await renameAllSamples(dataset)
      await createAssets(dataset, configExport, dm)
    }
    await dm.setDataset(dataset)
    await activeDatasetManager.setDataset(dataset)
    onClose()
  }

  const renameAllSamples = async (dataset) => {
    var samples = await Promise.all(
      await dataset.samples.map(async (sample, index, samples) => {
        return await dm.addNamesToSample(sample, index, samples)
      })
    )
    return (dataset = await setIn(dataset, ["samples"], samples))
  }

  return (
    <SimpleDialog
      title={t("export-project")}
      open={open}
      onClose={onClose}
      actions={[
        {
          text: t("create-project"),
          onClick: () => {
            handleCreateProject()
          },
        },
      ]}
    >
      {
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={0} justify="center">
            <WarningHeader
              nameProjectToCreate={nameProjectToCreate}
              nameProjectExist={nameProjectExist}
            />
          </Grid>
          <Grid container item xs={12} spacing={0} justify="center">
            <TextField
              id="ProjectName"
              label={t("project-name")}
              variant="outlined"
              onChange={(event) => {
                setNameProjectToCreate(event.target.value)
              }}
              value={nameProjectToCreate}
            />
            <IconButton
              onClick={() => {
                setConfigExport({
                  ...configExport,
                  contentDialogBoxIsSetting: !configExport.contentDialogBoxIsSetting,
                })
              }}
            >
              {configExport.contentDialogBoxIsSetting ? (
                <StorageIcon id="StorageIcon" />
              ) : (
                <SettingsIcon id="SettingIcon" />
              )}
            </IconButton>
          </Grid>
          <Grid container item xs={12} spacing={0} justify="center">
            {!configExport.contentDialogBoxIsSetting ? (
              !isEmpty(projects) && (
                <DataTable
                  expandableRows
                  expandableRowsComponent={<ExpandedRow />}
                  dense
                  noHeader
                  noTableHead
                  columns={columns}
                  selectableRowSelected={(row) => row.isSelected}
                  data={projects}
                  pagination={projects.length > 10}
                  paginationPerPage={10}
                  paginationRowsPerPageOptions={[10, 20, 25, 50, 100, 200]}
                />
              )
            ) : (
              <SettingDialog
                configExport={configExport}
                setConfigExport={setConfigExport}
              />
            )}
          </Grid>
        </Grid>
      }
    </SimpleDialog>
  )
}
