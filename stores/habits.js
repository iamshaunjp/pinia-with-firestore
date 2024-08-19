import { defineStore } from 'pinia'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export const useHabitStore = defineStore('habitStore', {
  state: () => ({
    habits: [],
  }),
  actions: {
    // fetching all habits
    async fetchHabits() {
      const { $db } = useNuxtApp()

      const snapshot = await getDocs(collection($db, 'habits'))
      this.habits = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    },

    // adding new habits
    async addHabit(name) {
      const { $db } = useNuxtApp()

      const habit = {
        name,
        completions: [],
        streak: 0,
      }

      // add habit in firebase
      const docRef = await addDoc(collection($db, 'habits'), habit)

      // add habit to pinia store 
      this.habits.push({ id: docRef.id, ...habit })
    },

    // updating habits
    

    // deleting habits
    

    // completing a daily habit
    

    // calculate habit streak

  }
})
