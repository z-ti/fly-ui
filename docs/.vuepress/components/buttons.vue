<template>
  <div class="demo">

    <fly-title>基本类型</fly-title>
    <Example component="buttons" block="block1">
      <div class="btn-items">
        <fly-btn @click="onClick">基础按钮</fly-btn>
        <fly-btn type="major">主要按钮</fly-btn>
        <fly-btn type="minor">次要按钮</fly-btn>
        <fly-btn type="success">成功按钮</fly-btn>
        <fly-btn type="error">失败按钮</fly-btn>
        <fly-btn type="warn">警告按钮</fly-btn>
      </div>
    </Example>

		<fly-title>加载状态</fly-title>
    <Example component="buttons" block="block2">
      <div class="btn-items">
        <fly-btn loading>基础按钮</fly-btn>
        <fly-btn type="major" loading>主要按钮</fly-btn>
        <fly-btn type="minor" loading>次要按钮</fly-btn>
        <fly-btn type="error" loading>失败按钮</fly-btn>
        <fly-btn type="warn" loading>警告按钮</fly-btn>
      </div>
    </Example>

		<fly-title>禁用状态</fly-title>
    <Example component="buttons" block="block3">
      <div class="btn-items">
        <fly-btn disabled>基础按钮</fly-btn>
        <fly-btn type="major" disabled>主要按钮</fly-btn>
        <fly-btn type="minor" disabled>次要按钮</fly-btn>
        <fly-btn type="success" disabled>成功按钮</fly-btn>
        <fly-btn type="error" disabled>失败按钮</fly-btn>
        <fly-btn type="warn" disabled>警告按钮</fly-btn>
      </div>
    </Example>

    <fly-title>表现形式</fly-title>
    <Example component="buttons" block="block4">
      <div class="btn-items">
        <fly-btn dress="round">基础按钮</fly-btn>
        <fly-btn dress="dashed">基础按钮</fly-btn>
        <fly-btn dress="dotted">基础按钮</fly-btn>
        <fly-btn dress="round dashed">基础按钮</fly-btn>
        <fly-btn dress="round dotted">基础按钮</fly-btn>
        <fly-btn dress="round dashed" color="cyan">主色按钮</fly-btn>
      </div>
    </Example>
     <!-- <fly-btn dress="round dashed" color="green">次色按钮</fly-btn>
        <fly-btn dress="round dashed" color="green1">绿色按钮</fly-btn>
        <fly-btn dress="round dashed" color="red">红色按钮</fly-btn>
        <fly-btn dress="round dashed" color="yellow">黄色按钮</fly-btn> -->
    <!-- <sub-title>文档说明</sub-title> -->
  </div>
</template>

<script>
import FlyTitle from "./base/Title.vue";
import Example from "./base/Example.vue";
// import SubTitle from "./base/subtitle.vue";
import FlyBtn from "./core/button.vue";

export default {
  name: "buttons-demo",
  components: {
    FlyTitle,
    // SubTitle,
    FlyBtn,
    Example
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    onClick() {
      console.log('按钮')
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variable.styl';

.btn-items {
  text-align: center;
  .fly-btn {
    margin-right: 10px;
    margin-bottom: 12px;
  }
}
</style>