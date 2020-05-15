import RecognizeFileExtension from "../../utils/RecognizeFileExtension"
import Amplify, { Storage } from "aws-amplify"
import isEmpty from "../../utils/isEmpty"

async function setUrl(result, configImport) {
  if (configImport.loadProjectIsSelected) {
    if (RecognizeFileExtension(result) === "Image") {
      return { imageUrl: `${result}` }
    } else if (RecognizeFileExtension(result) === "Video") {
      return { videoUrl: `${result}` }
    } else if (RecognizeFileExtension(result) === "Audio") {
      return { audioUrl: `${result}` }
    } else if (RecognizeFileExtension(result) === "PDF") {
      return { pdfUrl: `${result}` }
    }
  } else {
    if (
      RecognizeFileExtension(result) === configImport.typeOfFileToLoad &&
      configImport.typeOfFileToLoad === "Image"
    ) {
      return { imageUrl: `${result}` }
    } else if (
      RecognizeFileExtension(result) === configImport.typeOfFileToLoad &&
      configImport.typeOfFileToLoad === "Video"
    ) {
      return { videoUrl: `${result}` }
    } else if (
      RecognizeFileExtension(result) === configImport.typeOfFileToLoad &&
      configImport.typeOfFileToLoad === "Audio"
    ) {
      return { audioUrl: `${result}` }
    } else if (
      RecognizeFileExtension(result) === configImport.typeOfFileToLoad &&
      configImport.typeOfFileToLoad === "PDF"
    ) {
      return { pdfUrl: `${result}` }
    } else if (
      RecognizeFileExtension(result) === configImport.typeOfFileToLoad &&
      configImport.typeOfFileToLoad === "Texte"
    ) {
      return { textUrl: `${result}` }
    }
  }
}
export default async (result, folderToFetch, configImport, authConfig) => {
  Amplify.configure(authConfig)
  var samples = []
  for (let i = 0; i < result.length; i++) {
    if (result[i].key.match(`(${folderToFetch}/data).*(\\.).*`)) {
      await Storage.get(result[i].key, {
        expires: 24 * 60 * 60 * 2000,
        level: "private",
      })
        .then(async (result) => {
          var url = await setUrl(result, configImport)
          if (!isEmpty(url)) samples.push(url)
        })
        .catch((err) => {
          console.log("error getting link for s3 image", err)
          return null
        })
    }
  }
  return samples
}
