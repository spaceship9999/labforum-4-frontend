<template>
  <div class="relative max-w-[200px]">
    <button class="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 w-full rounded-lg text-left"
            @click="toggleButton">
      Categories
    </button>
    <ul :class="{'hidden' : !buttonToggled}"
        @focusout="toggleButton"
        class="absolute mt-2 left-0 w-[350px] shadow-2xl ring-1 ring-black ring-opacity-5 rounded-md overflow-hidden bg-white">
      <li>
        <form class="px-4 py-2" method="get">
          <input type="text" class="w-full" v-model="category" placeholder="Search Categories">
        </form>
      </li>
      <ClientOnly>
        <li v-for="category in filtered_category">
          <NuxtLink :to="'/category/' + category.slug" class="block px-4 py-2 hover:bg-gray-500 hover:text-white">
            {{category.name}}
          </NuxtLink>
        </li>
      </ClientOnly>
    </ul>
  </div>
</template>

<script setup>
const listing = await useNuxtApp().$axios.get('/api/categories')
const category_list = ref(await listing.data)
const buttonToggled = ref(false)
const category = ref('')
const filtered_category = ref(category_list.value)

watch(category, async (newVal) => {
  filtered_category.value = category_list.value.filter((e) => {
    return e.name.toLowerCase().indexOf(newVal.toLowerCase()) !== -1
  })
})
//Update API when button is toggled
watch(buttonToggled, async () => {
  const listing = await useNuxtApp().$axios.get('/api/categories')
  category_list.value = await listing.data
  filtered_category.value = category_list.value
})

function hideMenu() {
  buttonToggled.value = false
}
function toggleButton() {
  buttonToggled.value = !buttonToggled.value
}
</script>
<script>
export default {
  name: "CategoryButton",
}
</script>

<style scoped>

</style>