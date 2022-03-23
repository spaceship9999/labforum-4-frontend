<script setup>
const { ssrContext } = useNuxtApp()
const router = useRouter()
const route = useRoute()

if (ssrContext) {
  const { res, url } = ssrContext;
  res.writeHead(302, {
    Location: url + '/page/1'
  })
  res.end()
}
router.push(route.path + '/page/1')
</script>
