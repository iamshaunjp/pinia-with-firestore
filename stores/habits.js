import { defineStore } from 'pinia'
import { collection, addDoc } from 'firebase/firestore'

export const useHabitStore = defineStore('habitStore', {
  state: () => ({
    habits: [],
  }),
  actions: {
    // fetching all habits
    

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
