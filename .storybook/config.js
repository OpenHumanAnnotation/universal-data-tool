import React from "react"
import { configure, addDecorator } from "@storybook/react"
import Theme from "../src/components/Theme"

export const themeDecorator = (storyFn) => {
  // TODO wrap w/ theme
  return React.createElement(Theme, {}, storyFn())
}

function loadStories() {
  addDecorator(themeDecorator)
  const importAll = (r) => r.keys().map(r)
  importAll(require.context("../src/components", true, /\.story\.js$/))
}

configure(loadStories, module)
