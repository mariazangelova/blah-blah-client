var gcloud = require("gcloud")({
  keyFilename: "/maria/Downloads/service-account-key.json",
  projectId: "favorable-beach-274314",
});
var vision = gcloud.vision();

var image = "image.jpg";

vision.detectText("image.jpg", function (err, text, apiResponse) {
  // text = ['This was text found in the image']
});
