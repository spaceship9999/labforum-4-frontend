<template>
  <div v-if="!userStore.loggedIn"
       v-bind:class="{'block' : dialogToggled, 'hidden': !dialogToggled}"
       class="absolute inset-0 w-full h-full bg-black/40 flex items-center z-50">
    <div class="container bg-white login-modal p-5 rounded-lg md:max-w-[500px] max-w-full">
      <div class="flex justify-end">
        <button class="w-8 h-8 rounded-full bg-red-200" @click="dialogToggled = false">&times;</button>
      </div>
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form method="post" action="/api/auth/login" v-on:submit.prevent="submitLogin">
        <div class="mb-2">
          <label for="email" class="block">Username / Email</label>
          <input type="text" id="email" class="block border-2 p-2 rounded-sm w-full"
                 v-model="username"
                 name="email">
        </div>
        <div class="mb-2">
          <label for="password" class="block">Password</label>
          <input type="password" id="password" class="block border-2 p-2 rounded-sm w-full"
                 v-model="password"
                 name="email">
        </div>
        <button class="mt-4 p-4 bg-purple-700 text-white rounded-lg w-full">Login</button>
      </form>
      <div class="flex flex-col justify-between my-4">
        <div>
          <h2 class="text-xl font-bold mb-4">Don't have an account? <NuxtLink to="/signup" class="underline">Sign me up now.</NuxtLink></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps([
  'isDialogToggled'
])
const emit = defineEmits([
  'update:isDialogToggled'
]);
const username = ref('');
const password = ref('')
const user = useUser()
const userStore = user.user;
const dialogToggled = computed({
  get() {
    return props.isDialogToggled
  },
  set(val) {
    emit('update:isDialogToggled', val)
  }
})

function submitLogin() {
  user.login(username, password)
  dialogToggled.value = false
}

</script>
<script>
export default {
  name: "LoginForm"
}
</script>

<style scoped>

</style>