<template>
  <div>我是演示对话框！</div>
</template>

<script>
export default {
  data() {
    return {
      dialogOptions: {
        title: '对话框演示标题'
      }
    }
  },

  methods: {
    dialogClickButton(button) {
      console.log('对话框按下的按钮：')
      console.log(button)
    }
  }
}
</script>
