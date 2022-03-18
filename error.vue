<template>
  <SiteIcons></SiteIcons>
  <div class="w-screen h-screen bg-black ">
    <div class="galaxy"></div>
    <div class="container w-full h-full">
      <div class="flex flex-col items-center justify-center w-full h-full">
        <h1 class="text-9xl font-bold text-white mb-8">{{error.statusCode}}</h1>
        <h2 class="text-white font-bold text-3xl">{{error.statusMessage}}</h2>
        <article class="mt-10 text-white text-center">
          <p v-if="error.statusCode === '404'">
            We think you are lost. Why don't you look around our site?
          </p>
          <template v-if="error.statusCode === '403' || error.statusCode === '401'">
            You aren't allowed here...
          </template>
        </article>
        <a href="/" class="bg-purple-600 hover:bg-purple-700
        focus:ring focus:ring-white
        text-white z-[500] text-center font-bolc p-5 min-w-[300px] rounded-xl mt-10">
          Visit our homepage
        </a>
        <svg class="fill-white w-24">
          <use xlink:href="#labforum-logo"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
</script>
<script>
export default {
  name: "error.vue",

}
</script>

<style scoped>
.galaxy {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 25vw 36vh 2px 0px #fff,14vw -19vh 3px 1px #fff,-28vw 25vh 0px 0px #fff,23vw -5vh 2px 1px #fff,14vw -2vh 3px 0px #fff,-34vw -1vh 0px 1px #fff,-31vw -12vh 2px 2px #fff,-35vw -50vh 1px 1px #fff,-13vw -7vh 2px 3px #fff,-46vw 1vh 2px 2px #fff,-33vw 39vh 1px 2px #fff,-6vw 26vh 0px 2px #fff,0vw 35vh 2px 1px #fff,-6vw 7vh 1px 2px #fff,11vw -46vh 3px 1px #fff,-27vw -21vh 2px 1px #fff,-11vw 5vh 2px 2px #fff,-40vw 22vh 1px 1px #fff,13vw 37vh 3px 3px #fff,38vw 31vh 3px 1px #fff,-14vw -45vh 0px 1px #fff,-30vw 40vh 1px 0px #fff,-29vw -9vh 2px 2px #fff,-8vw -10vh 0px 0px #fff,6vw 0vh 0px 2px #fff,-17vw -48vh 1px 3px #fff,-50vw -13vh 2px 1px #fff,-39vw 8vh 3px 1px #fff,-38vw -2vh 2px 1px #fff,-21vw -33vh 0px 2px #fff,-25vw 10vh 3px 0px #fff,43vw -8vh 1px 0px #fff,-17vw -26vh 0px 3px #fff,-38vw -33vh 1px 0px #fff,41vw 50vh 1px 1px #fff,-35vw 21vh 2px 2px #fff,-10vw 28vh 3px 1px #fff,-30vw 42vh 2px 1px #fff,30vw 14vh 0px 1px #fff,5vw 19vh 0px 2px #fff,-25vw -26vh 3px 2px #fff,19vw -38vh 0px 1px #fff,11vw -12vh 1px 1px #fff,-50vw -14vh 3px 3px #fff,43vw -31vh 3px 1px #fff,9vw -43vh 3px 3px #fff,45vw -29vh 1px 2px #fff,-41vw 38vh 2px 0px #fff,-43vw 28vh 0px 2px #fff,-16vw 31vh 2px 3px #fff,27vw 23vh 0px 1px #fff,30vw -34vh 2px 1px #fff,-10vw 18vh 1px 3px #fff,-1vw 11vh 1px 1px #fff,-25vw 23vh 0px 3px #fff,-35vw 7vh 1px 2px #fff,-35vw -11vh 1px 1px #fff,27vw 30vh 3px 0px #fff,25vw 31vh 0px 2px #fff,7vw 13vh 2px 2px #fff,18vw 32vh 0px 0px #fff,-29vw -26vh 3px 3px #fff,11vw -6vh 3px 1px #fff,-3vw -44vh 0px 1px #fff,16vw -48vh 1px 1px #fff,-36vw -5vh 0px 2px #fff,-30vw -46vh 2px 2px #fff,16vw 28vh 3px 3px #fff,21vw -12vh 3px 1px #fff,-48vw -45vh 3px 2px #fff,16vw -32vh 1px 2px #fff,13vw 50vh 3px 3px #fff,23vw -13vh 3px 2px #fff,27vw 40vh 1px 3px #fff,2vw 13vh 2px 1px #fff,32vw -37vh 1px 3px #fff,-29vw -41vh 0px 1px #fff,28vw -26vh 2px 1px #fff,39vw -16vh 1px 0px #fff,-33vw -37vh 1px 0px #fff,23vw 25vh 1px 1px #fff,24vw 21vh 0px 2px #fff,-20vw -11vh 0px 3px #fff,-27vw -1vh 3px 1px #fff,-29vw 4vh 2px 2px #fff,32vw -22vh 0px 2px #fff,44vw -26vh 3px 0px #fff,22vw -27vh 2px 3px #fff,-19vw 34vh 3px 2px #fff,-20vw -31vh 0px 3px #fff,37vw -39vh 1px 1px #fff,-22vw 24vh 1px 3px #fff,26vw -7vh 1px 1px #fff,-33vw 48vh 0px 2px #fff,-42vw 15vh 1px 3px #fff,-31vw -7vh 2px 3px #fff,25vw -27vh 1px 3px #fff,-44vw 26vh 3px 0px #fff,5vw -26vh 2px 2px #fff,-2vw 28vh 1px 0px #fff;
}
</style>