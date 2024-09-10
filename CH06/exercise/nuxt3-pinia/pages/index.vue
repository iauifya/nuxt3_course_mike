<script setup>
import { storeToRefs } from 'pinia'
const store = useVoteStore()
const testStore = useTestStore()
const { isLoad,voteList } = storeToRefs(store) //ref、computed適用
const { voteSend } = store //reactive、函式不適用storeToRefs

//列表api在這裡接
await useAsyncData("getVote", async () => {
  const res = await $fetch("https://vue-lessons-api.vercel.app/vote/list");
  // 把接回來的資料塞進store中
  store.setVoteList(res)
  return res;
});
</script>

<template>
  <div class="vote_app">
    <!-- 先從store取到testStore，在從testStore取到頁面上 -->
    <p>{{ testStore.testToVoteList }}</p> 
    <h1>投票列表</h1>
    <div class="box_list">
      <VoteCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vote_app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }
}
.box_list {
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card {
  width: 140px;
  height: 200px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card_info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 100px;
    }
  }
}
</style>
