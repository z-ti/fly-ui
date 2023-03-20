<template>
  <div class="demo">
    <fly-title>input用法</fly-title>
    <div class="input-items">
      <fly-input 
        v-model="inputVal"
        :maxlength="10"
        placeholder="请输入"
        clearable
      >
       <!-- :disabled="true" -->
      </fly-input>
    </div>
  </div>
</template>

<script>
import FlyTitle from "./base/Title.vue";
import FlyInput from "./core/input.vue";

export default {
  name: "inputs-demo",
  components: {
    FlyTitle,
    FlyInput
  },
  data() {
    return {
      inputVal: ''
    };
  },
  mounted() {
    
  },
  watch: {
    inputVal(val) {
      console.log('监听', val)
    }
  },
  methods: {
    
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variable.styl';

.input-items {
  
}
</style>