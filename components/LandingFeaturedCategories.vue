<template>
  <div>
    <h2 class="text-2xl uppercase font-bold">Featured Categories</h2>
    <NuxtLink :to="'/category/' + category.slug"
              class="block p-4 border-2 rounded-lg overflow-hidden border-solid border-blue-500 relative
                    after:absolute after:inset-y-0 after:left-0 after:w-2 after:bg-blue-500 my-4"
              v-for="category in category_list">
      <h3 class="text-lg mb-2">
        {{category.name}}
      </h3>
      <span>{{category.introduction}}</span>
    </NuxtLink>
  </div>
</template>

<script setup>
import { usePageDataStore } from "../stores/usePageDataStore";

const use_page_data = usePageData()
const category_list = ref([])
await use_page_data.loadCategories()

const page_data_store = usePageDataStore()

//Binding it to store changes and mounted state
page_data_store.$subscribe(() => {
  category_list.value = page_data_store.categories.filter((e) => e.is_featured === 1)
})
onMounted((e) => {
  category_list.value = page_data_store.categories.filter((e) => e.is_featured === 1)
})


</script>
<script>
export default {
  name: "LandingFeaturedCategories",
}
</script>

<style scoped>

</style>