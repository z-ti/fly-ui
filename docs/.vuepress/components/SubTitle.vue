<template>
  <div class="sub-title-warpper">
    <span class="sub-title-img"></span>
    <span class="sub-title">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    title: {
        type: String,
        default: '标题'
    }
  }
};
</script>
<style lang="stylus" scoped>
.sub-title-warpper {
  margin-bottom: 15px;
  font-weight: bold;
  color: black;
  font-size: 20px;
  margin-top: 20px;
  .sub-title-img {
   background-image: url('/img/small-animal.jpeg');
   background-size: 100% 100%;
   background-repeat: no-repeat;
   display: inline-block;
   width: 16px;
   height: 15px;
   line-height: 15px;
   margin-bottom: -1px;
  }
  .sub-title {
    font-size: 17px;
    display: inline-block;
    margin-left: 2px;
    color: rgb(72, 179, 120);
  }
}
</style>
