import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {

  const firebaseConfig = {
    apiKey: "AIzaSyA51muqVNTA6CDom67K8lIQSWqsz5Je3QM",
    authDomain: "piniafirestore.firebaseapp.com",
    projectId: "piniafirestore",
    storageBucket: "piniafirestore.appspot.com",
    messagingSenderId: "475584835245",
    appId: "1:475584835245:web:9874e9d64e04399784a024"
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  return {
    provide: {
      firebaseApp: app,
      db,
    },
  }

})

// const { $db } = useNuxtApp()