<template>
  <div class="bg-white">
    <div class="container">
      <div class="flex py-4 items-center">
        <NuxtLink to="/" class="text-blue-500 w-[150px] h-[50px]" aria-label="Labforum">
          <svg class="w-[150px] h-[50px]"  fill="#005cff" aria-label="Labforum logo">
            <use xlink:href="#labforum-logo"></use>
            <title>Labforum</title>
          </svg>
        </NuxtLink>
        <div class="ml-auto">
          <!-- Not logged in -->
          <button
              @click="dialogToggled = true"
              v-if="!userStore.loggedIn">Login</button>
          <!-- Logged in -->
          <div class="relative" v-else>
            <button role="button" aria-label="More">
              <svg class="w-8 h-8">
                <use xlink:href="#more-icon"></use>
                <title>More icon</title>
              </svg>
            </button>
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <NuxtLink to="/profile" class="text-gray-700 block px-4 py-2 text-sm flex flex-col items-center" role="menuitem" tabindex="-1" id="menu-item-0">
                  <svg style="width: 48px;height: 48px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                  </svg>
                  <div class="text-center">
                    {{userStore.username}}
                    <span class="role block mt-2" v-for="role in profileStore.role">
                      {{role.name}}
                    </span>

                  </div>
                </NuxtLink>
                <NuxtLink to="/settings" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Settings</NuxtLink>
                <form method="GET" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                          @click.prevent="logout"
                          role="menuitem" tabindex="-1" id="menu-item-3">Log out</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LoginForm v-if="!userStore.loggedIn" v-model:isDialogToggled="dialogToggled"></LoginForm>
  </div>
</template>

<script>
import { useUserStore } from '~/stores/useUserStore'
import { useProfileStore } from '~/stores/useProfileStore'
export default {
  name: "Header",
  setup() {
    const userStore = useUserStore()
    const profileStore = useProfileStore()
    const user = useUser()
    const dialogToggled = ref(false)

    function logout() {
      user.logout()
    }
    return {
      userStore,
      profileStore,
      dialogToggled,
      logout
    }
  }
}
</script>

<style scoped>

</style>