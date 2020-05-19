// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import UniversalDataViewer from "./"

storiesOf("UniversalDataViewer", module)
  .add("NLP", () => (
    <UniversalDataViewer
      onSaveTaskOutputItem={action("onSaveTaskOutputItem")}
      hideHeader
      dataset={{
        interface: {
          type: "text_entity_recognition",
          description: "Label words or phrases as food or hat.",
          overlapAllowed: false,
          labels: [
            {
              id: "food",
              displayName: "Food",
              description: "Edible item.",
            },
            {
              id: "hat",
              displayName: "Hat",
              description: "Something worn on the head.",
            },
          ],
        },
        samples: [
          {
            document:
              "This strainer makes a great hat, I'll wear it while I serve spaghetti!",
            annotation: {
              entities: [
                { label: "hat", text: "strainer", start: 5, end: 13 },
                { label: "food", text: "spaghetti", start: 59, end: 68 },
              ],
            },
          },
        ],
      }}
    />
  ))
  .add("Data Entry", () => (
    <UniversalDataViewer
      onSaveTaskOutputItem={action("onSaveTaskOutputItem")}
      hideHeader
      dataset={{
        interface: {
          type: "data_entry",
          description: "",
          surveyjs: {
            pages: [
              {
                name: "page1",
                elements: [
                  {
                    type: "radiogroup",
                    name: "group_letter",
                    title: "Group Letter",
                    choices: [
                      {
                        value: "A",
                        text: "A",
                      },
                      {
                        value: "B",
                        text: "B",
                      },
                      {
                        value: "C",
                        text: "C",
                      },
                    ],
                  },
                  {
                    type: "text",
                    name: "feedback",
                    title: "Feedback",
                  },
                ],
              },
            ],
          },
        },
        samples: [
          {
            description: "Cucumber",
            annotation: {
              group_letter: "A",
              feedback: "this is some feedback",
            },
          },
        ],
      }}
    />
  ))
  .add("Audio Transcription", () => (
    <UniversalDataViewer
      onSaveTaskOutputItem={action("onSaveTaskOutputItem")}
      hideHeader
      dataset={{
        interface: {
          type: "audio_transcription",
          description: "",
        },
        samples: [
          {
            audioUrl: "https://html5tutorial.info/media/vincent.mp3",
            annotation: "starry starry night",
          },
        ],
      }}
    />
  ))
  .add("Composite", () => (
    <UniversalDataViewer
      onSaveTaskOutputItem={action("onSaveTaskOutputItem")}
      hideHeader
      dataset={{
        interface: {
          type: "composite",
          fields: [
            {
              fieldName: "Field1",
              interface: {
                type: "data_entry",
                surveyjs: {
                  pages: [
                    {
                      name: "page1",
                      elements: [
                        {
                          type: "text",
                          name: "question1",
                          title: "First Interface Question",
                        },
                      ],
                    },
                  ],
                },
              },
            },
            {
              fieldName: "Field2",
              interface: {
                type: "image_segmentation",
                labels: ["valid", "invalid"],
                regionTypesAllowed: ["bounding-box"],
              },
            },
          ],
        },
        samples: [
          {
            imageUrl:
              "https://s3.amazonaws.com/asset.workaround.online/example-jobs/eng_diagram1.png",
            annotation: {
              Field1: {
                question1: "Included output",
              },
            },
          },
          {
            imageUrl:
              "https://s3.amazonaws.com/asset.workaround.online/example-jobs/eng_diagram2.png",
          },
          {
            imageUrl:
              "https://s3.amazonaws.com/asset.workaround.online/example-jobs/eng_diagram3.png",
          },
        ],
      }}
    />
  ))
  .add("Composite No Output", () => (
    <UniversalDataViewer
      onSaveTaskOutputItem={action("onSaveTaskOutputItem")}
      hideHeader
      dataset={{
        interface: {
          type: "composite",
          fields: [
            {
              fieldName: "textfield",
              interface: {
                type: "data_entry",
                surveyjs: {
                  questions: [
                    {
                      name: "value",
                      type: "text",
                      title: "What is the value of textfield?",
                    },
                  ],
                },
              },
            },
            {
              fieldName: "labelfield",
              interface: {
                type: "data_entry",
                surveyjs: {
                  questions: [
                    {
                      name: "value",
                      type: "radiogroup",
                      title: "Which of the following is the labelfield?",
                      choices: ["Example Option 1", "Example Option 2"],
                    },
                  ],
                },
              },
            },
            {
              fieldName: "interest",
              interface: {
                type: "image_segmentation",
                description:
                  'Completely surround the "interest" with a bounding box.',
                regionTypesAllowed: ["bounding-box"],
              },
            },
          ],
        },
        samples: [
          {
            customId: "images/img1.jpg",
            imageUrl:
              "http://localhost:3702/app/api/download/63d525ea-cad4-495b-8c5d-eb44173a4238",
          },
        ],
      }}
    />
  ))
  .add("Undefined Interface Type", () => <UniversalDataViewer />)
