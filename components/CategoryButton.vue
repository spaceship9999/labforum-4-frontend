<template>
  <div class="relative max-w-[200px]">
    <button class="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 w-full rounded-lg text-left"
            @click="toggleButton">
      Categories
    </button>
    <ClientOnly>
    <ul :class="{'hidden' : !buttonToggled}"
        @focusout="toggleButton"
        class="absolute z-30 mt-2 left-0 w-[350px] shadow-2xl ring-1 ring-black ring-opacity-5 rounded-md overflow-hidden bg-white">
      <li>
        <form class="px-4 py-2" method="get">
          <input type="text" class="w-full" v-model="category" placeholder="Search Categories">
        </form>
      </li>
      <li v-for="category in filtered_category">
        <NuxtLink :to="'/category/' + category.slug" class="block px-4 py-2 hover:bg-gray-500 hover:text-white">
          {{category.name}}
        </NuxtLink>
      </li>
    </ul>
    </ClientOnly>
  </div>
</template>

<script setup>
import { usePageDataStore } from "../stores/usePageDataStore";

const listing = usePageData()
await listing.loadCategories()

const listing_store = usePageDataStore()

const category_list = ref([])
const buttonToggled = ref(false)
const category = ref('')
const filtered_category = computed(
    () => category_list.value.filter((e) => e.name.toLowerCase().indexOf(category.value.toLowerCase()) !== -1 )
)

//Binding it to store and mounted changes
listing_store.$subscribe(() => {
  category_list.value = listing_store.categories
})
onMounted((e) => {
  category_list.value = listing_store.categories
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