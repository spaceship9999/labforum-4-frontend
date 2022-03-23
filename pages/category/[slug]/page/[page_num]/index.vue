<template>

</template>

<script>
export default {
  name: "CategoryPage",
  setup() {
    const route = useRoute()
    const app = useNuxtApp()
    const ppp = ref(20)

    async function getCategoryData() {
      const cat_datalist = await app.$axios.get('/api/category/' + route.params.slug + '?page=' +
          route.params.page_num + '&post_per_page=' + ppp.value)
          .then( (response) => {

            return response.data
          })
          .catch(({ response }) => {
            if (response.status === 404) {
              throwError({
                statusCode: 404,
                statusMessage: `Page not found.`,
              })
            }
          })
    }

    getCategoryData()
  }
}
</script>

<style scoped>

</style>