import firebase from 'firebase'

//dotenvに変更
if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: 'AIzaSyBFnBThpFt1n6oyBxtzSikixIdPVp1uYc8',
      authDomain: 'tedxnagoyau-connect.firebaseapp.com',
      projectId: 'tedxnagoyau-connect',
      storageBucket: 'tedxnagoyau-connect.appspot.com',
      messagingSenderId: '581360756105',
      appId: '1:581360756105:web:1ad8c87b496007457ead58',
      measurementId: 'G-MD8TGZNVQ1'
    }
  )
}

export default firebase
