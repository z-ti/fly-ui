<template>
  <span 
    :class="`fly-icon-${type}`" 
    :style="{
      color: color
    }"
  >
  </span>
</template>

<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      require: true
    },
    color: {
      type: String,
      default: '#000'
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>
