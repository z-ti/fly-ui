<template>
  <div class="demo">
    <fly-title>radio用法</fly-title>
    <div class="radio-items">
      <fly-radio></fly-radio>
    </div>
  </div>
</template>

<script>
import FlyTitle from "./base/Title.vue";
import FlyRadio from "./core/radio.vue";

export default {
  name: "radio-demo",
  components: {
    FlyTitle,
    FlyRadio
  },
  data() {
    return {
      radioVal: ''
    };
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variable.styl';

.radio-items {
  
}
</style>