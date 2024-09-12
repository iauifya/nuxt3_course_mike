const dialogRef = ref(null)
export const dialogData = reactive({
  title: "",
  content: "",
  confirm: {
    btnName: "",
    onComplete: () => {},
  },
  cancel: {
    btnName: "",
    onComplete: () => {},
  }
})

export const useDialog = () => {
  const open = (option) => {
    if(option){
      dialogData.title = option.title || '預設 title'
      dialogData.content = option.content || '預設 title'
      dialogData.confirm = option.confirm
      dialogData.cancel = option.cancel
      dialogData.confirm.btnName = option.confirm.btnName || 'O'
      dialogData.cancel.btnName = option.cancel.btnName || 'X'
    }
    dialogRef.value.showModal()
  }
  const close = (type) => {
    if(dialogData[type].onComplete){
      dialogData[type].onComplete();
    }
    dialogRef.value.close();
  }
  onMounted(()=>{
    dialogRef.value = document.querySelector('#dialog')
  })
  return {open,close};
};
