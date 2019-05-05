const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  // response.send(request.body)
  response.redirect('https://jackhack-2019.firebaseapp.com/show2.html?id='+request.body.note_id)
})
