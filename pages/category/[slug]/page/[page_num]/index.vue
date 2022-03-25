<template>

</template>

<script>
import {useUserStore} from "../../../../../stores/useUserStore";


export default {
  name: "CategoryPage",
  async setup() {
    const user = useUserStore();
    const route = useRoute();
    const { ssrContext } = useNuxtApp()

    if(user.isLoggedIn) {
      user.setAuthHeader()
    }


    const category_req = await useNuxtApp().$axios.get('/api/category/' + route.params.slug)
    const category_data = await category_req.data

    return {
      user,
      category_data,
    }
  }
}
</script>

<style scoped>

</style>