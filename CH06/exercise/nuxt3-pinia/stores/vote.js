import { defineStore } from "pinia";
export const useVoteStore = defineStore('vote',()=>{
    // 是否送出狀態控制
    const isLoad = ref(false);

    // data資料初始化
    const voteList = ref({})

    // 寫入 | 更新 data 
    const setVoteList = (list)=>{
        voteList.value = list
    }

    // 送出投票
    const voteSend = async (type) => {
        // 避免連續點擊的處理機制
        if (isLoad.value) return;
        isLoad.value = true;
        try {
        const res = await $fetch("https://vue-lessons-api.vercel.app/vote/add", {
            method: "POST",
            body: { type },
        });
        console.log('res',res)
        // 因回傳的資料格式與get api一樣，所以可以直接這樣寫取回資料做更新
        // voteList.value = res //更新資料寫法一
        setVoteList(res); //更新資料寫法二
        alert("投票完成");
        } catch (error) {
            alert("暫時無法投票");
        } finally {
            isLoad.value = false;
        }
    };

    return { isLoad, voteList, setVoteList, voteSend };
})