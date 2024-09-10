<script setup>
// const config = useRuntimeConfig();
// console.log(config); //只有存放在config.public的能在client端可以存取到

// if (process.server) { 
//   console.log("server token:", config.token);
// }
//同樣也有
// process.client

// 適用情境，要取得token，而不能在client端被暴露時，在server階段是可以取到資料的
// const config = useRuntimeConfig();
// //使用refresh機制，network會發送打api的資訊，只是一樣會取不到token的資料，會顯示undefined
// const { data, refresh } = await useFetch(`${config.public.apiUrl}/api/banner`, {
//   headers: {
//     Authorization: `Bearer ${config.token}`,
//   },
// });
// console.log('data',data.value)
console.log('env',process.env.ENV)
console.log('WEB_URL',process.env.WEB_URL)
console.log('TOKEN',process.env.TOKEN)
</script>

<template>
  <div>
    <h2 @click="refresh">首頁</h2>
  </div>
</template>

<style scoped></style>
