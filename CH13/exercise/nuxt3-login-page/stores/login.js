import { defineStore } from "pinia";
export const useLogingStore = defineStore("login", () => {
  const router = useRouter();
  const cookie = useCookie('auth',{
    //host指向未設定
    // 在把這裡改成.nuxt3demo.com
    domain: "172.20.64.1"
  })

  const error_message = ref({
    username: "",
    password: "",
  });

  const isLoading = ref(false);

  const handleLoading = () => (isLoading.value = !isLoading.value);

  const sendLoginAuth = async ({ username, password }) => {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      // https://vue-lessons-api.vercel.app
      const res = await $fetch("https://vue-lessons-api.vercel.app/auth/login", {
        method: "POST",
        body: { username, password },
      });
      console.log('res:',res)
      // save token
      cookie.value = {
        token: res.data.token
      }
      router.replace("/");
    } catch (error) {
      const { username } = error.response._data.error_message;
      error_message.value = {
        username,
        password: "password error",
      };
    } finally {
      isLoading.value = false;
    }
  };

  const checkAuth = async () => {
    // https://vue-lessons-api.vercel.app
    // if(!cookie.value) return
    try{
      await $fetch("https://vue-lessons-api.vercel.app/testToken", {
        method: "POST",
        headers: {
          Authorization: cookie.value?.token
        }
      });
      console.log('驗證成功!')
    } catch(error){
      router.replace('/login')
      cookie.value = null //清掉cookie
    }
    
  };

  return {
    isLoading,
    handleLoading,
    sendLoginAuth,
    checkAuth,
    error_message,
  };
});
