<template>
  <div>
    <ul class="space-y-4">
      <li 
        class="bg-white px-3 py-2 rounded-sm" 
        v-for="habit in habits" 
        :key="habit.id"
      >
        <div class="flex items-center justify-between mb-4">
          <p class="text-purple-500 font-bold">{{ habit.name }}</p>
          <button class="text-gray-800">Delete</button>
        </div>

        <div class="flex items-center">
          <input 
            type="checkbox" 
            class="mr-2 accent-purple-500"
          />
          <p class="text-sm text-gray-500">I did this today.</p>
        </div>

        <p class="text-sm text-gray-500 mt-2">Current Streak: {{ habit.streak }} days.</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
  // props
  const props = defineProps({
    habits: Array,
  })
</script>