<template>
  <div>
    <h2 class="text-2xl uppercase font-bold">Featured Categories</h2>
    <NuxtLink :to="'/category/' + category.slug"
              class="block p-4 border-2 rounded-lg overflow-hidden border-solid border-blue-500 relative
                    after:absolute after:inset-y-0 after:left-0 after:w-2 after:bg-blue-500 my-4"
              v-for="category in featured_list">
      <h3 class="text-lg mb-2">
        {{category.name}}
      </h3>
      <span>{{category.introduction}}</span>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(['category_list'])
const featured_list = computed(() => {
  return props.category_list.filter((e) => e.is_featured === 1)
})

</script>
<script>
export default {
  name: "LandingFeaturedCategories",
}
</script>

<style scoped>

</style>