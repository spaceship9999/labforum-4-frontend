<template>
  <div>
    {{profileStore.username}}
  </div>
</template>

<script>
import { useProfileStore } from '~/stores/useProfileStore'
export default {
  name: "profile",
  setup() {
    const user = useUserStore()
    const profileStore = useProfileStore()
    const details = user.getUserDetails()

    return {
      user, details, profileStore
    }
  }
}
</script>

<style scoped>

</style>