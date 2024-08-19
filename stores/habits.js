import { defineStore } from 'pinia'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'

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
    async updateHabit(id, updates) {
      const { $db } = useNuxtApp()

      // update in firebase
      const habitRef = doc($db, 'habits', id)
      await updateDoc(habitRef, updates)

      // update pinia store
      const index = this.habits.findIndex((habit) => habit.id === id)
      if (index !== -1) {
        this.habits[index] = { ...this.habits[index], ...updates }
      }
    },
    

    // deleting habits
    async deleteHabit(id) {
      const { $db } = useNuxtApp()

      // delete in firebase
      const docRef = doc($db, 'habits', id)
      await deleteDoc(docRef)

      // delete from pinia store
      this.habits = this.habits.filter(habit => habit.id !== id)
    },

    // completing a daily habit
    

    // calculate habit streak

  }
})
