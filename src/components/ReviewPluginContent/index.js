import React, { useState } from "react"
import Recoil, { useRecoilValue } from "recoil"
import useEventCallback from "use-event-callback"
import { Tabs, Tab, Box, colors, styled } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/Settings"
import RateReviewIcon from "@material-ui/icons/RateReview"
import CreateIcon from "@material-ui/icons/Create"
import PollIcon from "@material-ui/icons/Poll"
import Settings from "./Settings"
import Analytics from "./Analytics"
import Review from "./Review"
import Label from "./Label"
import AdminSettings from "./AdminSettings"
import { activeDatasetAtom, userAtom } from "udt-review-hooks"

const tabs = [
  { name: "Settings", roles: ["admin"] },
  { name: "Review", roles: ["admin", "reviewer"] },
  { name: "Label", roles: ["admin", "reviewer", "labeler"] },
  { name: "Analytics", roles: ["admin", "reviewer", "labeler"] },
]

const getIcon = (s) => {
  switch (s.toLowerCase()) {
    case "settings": {
      return <SettingsIcon className="icon" />
    }
    case "review": {
      return <RateReviewIcon className="icon" />
    }
    case "label": {
      return <CreateIcon className="icon" />
    }
    case "analytics": {
      return <PollIcon className="icon" />
    }
    default: {
      return null
    }
  }
}

export const ReviewPluginContent = () => {
  const user = useRecoilValue(userAtom)
  const [tab, setTab] = useState("review")
  const onChangeTab = useEventCallback((e, newTab) => {
    setTab(newTab)
  })
  const activeDataset = Recoil.useRecoilValue(activeDatasetAtom)

  if (!activeDataset) return <AdminSettings />

  return (
    <Box>
      <Tabs variant="fullWidth" onChange={onChangeTab} value={tab}>
        {tabs
          .filter((tab) => tab.roles.includes(user.role.toLowerCase()))
          .map((tab) => (
            <Tab
              key={tab.name}
              icon={getIcon(tab.name)}
              label={tab.name}
              value={tab.name.toLowerCase()}
            />
          ))}
      </Tabs>
      {tab === "settings" && <Settings />}
      {tab === "review" && <Review />}
      {tab === "label" && <Label />}
      {tab === "analytics" && <Analytics />}
    </Box>
  )
}

export default ReviewPluginContent
