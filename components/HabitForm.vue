<template>
  <form @submit.prevent="handleSubmit" class="mb-6 flex items-center gap-2">
    <input
      v-model="name"
      type="text"
      placeholder="Enter a new habit..."
      class="w-full p-3 border border-gray-300 rounded-sm"
    />
    <button
      type="submit"
      class="w-full p-3 bg-purple-500 text-white rounded-sm"
    >
      Add Habit
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useHabitStore } from '~/stores/habits'

const name = ref('')
const habitStore = useHabitStore()

const handleSubmit = async () => {
  if (name.value.trim()) {
    await habitStore.addHabit(name.value)
    name.value = ''
  }
}
</script>
