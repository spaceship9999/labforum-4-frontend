<template>
  <div class="overflow-hidden">
    <div class="h-[280px] bg-emerald-400/80">
      <div class="container h-full flex items-center">
        <h1 class="text-xl lg:text-4xl font-semibold text-grey">{{ category_data.name }}</h1>
      </div>
    </div>
    <div class="container py-10">
      <div class="grid grid-cols-4 gap-4 lg:gap-10">
        <NuxtLink :to="'/thread/' + post.slug"
            class="col-span-4 md:col-span-2 py-12 px-8 shadow-xl shadow-purple-400 border-2 rounded-2xl bg-white
                  transition hover:scale-110 duration-300"
             :class="{'lg:col-span-1' : (index % 6) === 0 || (index % 6) === 5 ,
             'lg:col-span-2' : (index % 6) === 2 || (index % 6) === 3 ,
              'lg:col-span-3' : (index % 6) === 1 || (index % 6) === 4 }"
             v-for="(post, index) in posts">
          <h2 class="text-2xl lg:text-3xl">
            {{post.data.title}}
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>

</template>

<script>
import {useUserStore} from "../../../../../stores/useUserStore";

export default {
  name: "CategoryPage",
  async setup() {
    const user = useUserStore();
    const route = useRoute();
    const { ssrContext } = useNuxtApp()
    const posts = ref([])

    if(user.isLoggedIn) {
      user.setAuthHeader()
    }

    const category_req = await useNuxtApp().$axios.get('/api/category/' + route.params.slug)
    const category_data = await category_req.data
    posts.value = category_data.posts.data

    return {
      user,
      category_data,
      posts
    }
  }
}
</script>

<style scoped>

</style>