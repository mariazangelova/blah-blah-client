# What is blah blah cube

The app has the following three features using speech recognition:

1. Word story - a random word is fetched from WordsAPI. The user can see the definition of the word if it is unfamiliar. Then the recording can begin. The story is up to the user - anything related to the given word. Transcription is provided along with the most repeated word and relevant synonyms.

2. Picture story - a random picture is fetched from Unsplash API. The user can see the description of the picture along with several labels provided from Google Vision API. Recording, transcription & review is the same as for the Word Story.

3. Upload & Guess - the user can upload an image from their device. The image is sent for analysis to Google Vision API. After starting recording, the user has to guess what labels would Google for the image. When the recording is stopped, all the words that match Google's suggestions will be presented.

## Technology

[React Speech Recognition](https://github.com/mariazangelova/blah-blah-client/blob/master/src/components/SpeechRecognition.js)

[Google Vision API](https://github.com/mariazangelova/blah-blah-server/blob/master/index.js) - This is linked to the server repo.

[React Images Upload](https://github.com/mariazangelova/blah-blah-client/blob/master/src/components/UploadImage.js)

[Dialogflow ChatBot](https://github.com/mariazangelova/blah-blah-client/blob/master/src/components/Chat.js)

## Server-repo

Express server used for the purposes of Google Vision API authorisation. [Click here for more details](https://github.com/mariazangelova/blah-blah-server/)
