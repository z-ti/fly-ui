<template>
  <div class="demo">
    <fly-title>常用图标</fly-title>
    <div class="icon-items">
      <div class="icon-item" v-for="item in iconItems" :key="item.key" @click="copyIcon(item)">
        <!-- <span :class="`fly-icon-${item.key}`" :title="item.label"></span> -->
        <FlyIcon :type="item.key" color="#1ba784"></FlyIcon>
      </div>
    </div>
  </div>
</template>

<script>
import variable from "./variable.js";
import FlyTitle from "./base/Title.vue";
import FlyIcon from "./core/icon.vue";
export default {
  name: "icons-demo",
  components: {
    FlyTitle,
    FlyIcon
  },
  data() {
    return {
      iconItems: []
    };
  },
  mounted() {
    Object.keys(variable.icons).forEach(key => {
      this.iconItems.push({
        key,
        label: variable.icons[key]
      })
    })
    console.log(this.iconItems,11)
    let len = this.iconItems.length
    let rest = 6 - len % 6
    if(rest !== 6) {
      while(rest) {
        this.iconItems.push({})
        rest--
      }
    }
  },
  methods: {
    copyIcon (item) {
        if(!item.key) return;
        const selection = window.getSelection();
        selection.removeAllRanges();
        let selectedText = `<FlyIcon type="${item.key}" color="#1ba784"></FlyIcon>`
        navigator.clipboard.writeText(selectedText);
        selection.removeAllRanges();
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variable.styl';

.icon-items {
  display: flex;
  flex-wrap: wrap;
  border-bottom: solid 1px $cyan;
  border-right: solid 1px $cyan;
  .icon-item {
    width: calc(100% / 6);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: solid 1px $cyan;
    border-top: solid 1px $cyan;
    [class^=fly-icon-] { 
      cursor: pointer;
      font-size: 40px;
      transition: all 0.25s linear;
      &:hover {
        color: $violet1;
        transform: scale(1.2);
      }
    }
  }
}
</style>