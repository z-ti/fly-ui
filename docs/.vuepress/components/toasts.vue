<template>
  <div class="demo">
    <fly-title>toast用法</fly-title>
    <div class="toast-items">
      <fly-btn @click="onClick">点我提示</fly-btn>
      <!-- <fly-toast ref="toast" effect="slide" message="成功了"></fly-toast> -->
    </div>
  </div>
</template>

<script>
import FlyTitle from "./base/Title.vue";
import FlyBtn from "./core/button.vue";
import FlyToast from "./core/toast.vue";
import Vue from 'vue'
import Toast from '../components/core/toast/index.js'
Vue.use(Toast)
export default {
  name: "loadings-demo",
  components: {
    FlyTitle,
    FlyBtn,
    FlyToast
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    onClick() {
      this.$toast('哈哈哈')
      // this.$refs['toast'].onShow()
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variable.styl';

.toast-items {
  
}
</style>