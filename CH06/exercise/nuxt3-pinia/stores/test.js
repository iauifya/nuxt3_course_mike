import { defineStore } from "pinia";
//從vote store取出資料到test store
export const useTestStore = defineStore("test", () => {
    const voteStore = useVoteStore()

    const testToVoteList = computed(()=>voteStore.voteList) //這裡利用computed來取值

    return { testToVoteList }

})