<script setup>
const store = useLogingStore()
const cookie = useCookie('auth')
const auth1 = cookie.value?.token
onMounted(() => {
  store.checkAuth()

  setInterval(() => {
    const auth2 = useCookie('auth')
    if(auth1 !== auth2.value?.token){
      window.location.reload()
    }
  }, 100);
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  background-color: #f1e4db;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
