<template>
  <div class="container py-10">
    <h1 class="sr-only">Labforum Homepage</h1>
    <CategoryButton></CategoryButton>
    <div class="grid grid-cols-4 py-10 gap-20">
      <div class="col-span-4 lg:col-span-2">
        <h2 class="text-2xl uppercase font-bold">Categories</h2>
        <NuxtLink></NuxtLink>
      </div>
      <div class="col-span-4 lg:col-span-2">
        <h2 class="text-2xl uppercase font-bold">Featured Posts</h2>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryButton from "../components/CategoryButton";
export default {
  components: {CategoryButton},
  layout: 'default'
}
</script>