import React from "react";
const vision = require("@google-cloud/vision");

export default function Gcloud() {
  async function quickstart() {
    // Imports the Google Cloud client library

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    const [result] = await client.labelDetection("./image.jpg");
    const labels = result.labelAnnotations;
    console.log("Labels:");
    labels.forEach((label) => console.log(label.description));
  }
  return <div></div>;
}
