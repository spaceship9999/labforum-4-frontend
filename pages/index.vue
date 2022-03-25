<template>
  <div class="container py-10">
    <h1 class="sr-only">Labforum Homepage</h1>
    <CategoryButton v-bind:category_list="category_list"></CategoryButton>
    <div class="grid grid-cols-4 py-10 gap-20">
      <div class="col-span-4 lg:col-span-2">
       <LandingFeaturedCategories v-bind:category_list="category_list"></LandingFeaturedCategories>
      </div>
      <div class="col-span-4 lg:col-span-2">
        <h2 class="text-2xl uppercase font-bold">Highly-hitted Posts</h2>
      </div>
    </div>
  </div>
</template>
<script>
import {useUserStore} from "../stores/useUserStore";
import CategoryButton from "../components/CategoryButton";
import LandingFeaturedCategories from "../components/LandingFeaturedCategories";
import {usePageDataStore} from "../stores/usePageDataStore";
export default {
  components: {CategoryButton, LandingFeaturedCategories},
  layout: 'default',
  async setup() {
    const user_store = useUserStore()
    const page_data_store = usePageDataStore()
    const categories_avail = ref([])
    const category_list = computed(() => categories_avail.value)

    if(user_store.isLoggedIn) {
      user_store.setAuthHeader()
    }
    await page_data_store.loadCategories()
    categories_avail.value = page_data_store.categories

    user_store.$subscribe(() => {
      categories_avail.value = page_data_store.categories
    })
    return {
      category_list
    }
  }
}
</script>