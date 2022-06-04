<template>
  <h2
    data-tool="mdnice编辑器"
    class="title-warpper"
  >
    <span
      class="title-inner"
      >
      <slot></slot>
    </span>
  </h2>
</template>

<script>
export default {
  name: "flyTitle",
  props: {
    title: {
        type: String,
        default: '标题'
    }
  }
};
</script>
<style lang="stylus" scoped>
.title-warpper {
  font-weight: bold;
  color: black;
  font-size: 22px;
  text-align: center;
  background-image: url('/img/animal.jpeg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 50px;
  margin-top: 1em;
  margin-bottom: 10px;
  .title-inner {
    display: inline-block;
    height: 38px;
    line-height: 42px;
    color: rgb(72, 179, 120);
    background-position: left center;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-size: 63px;
    margin-top: 38px;
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
