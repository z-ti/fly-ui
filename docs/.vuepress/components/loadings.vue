<template>
  <div class="demo">
    <fly-title>常用loading</fly-title>
    <div class="loading-items">
      <div class="loading-item" v-for="item in loadItems" :key="item" @click="copyLoading(item)">
        <FlyLoading :type="item"></FlyLoading>
      </div>
    </div>
  </div>
</template>

<script>
import FlyTitle from "./base/Title.vue";
import FlyLoading from "./core/loading.vue";
export default {
  name: "loadings-demo",
  components: {
    FlyTitle,
    FlyLoading
  },
  data() {
    return {
      loadItems: []
    };
  },
  mounted() {
    this.loadItems = Array.from({length: 12}).map((_, index) => index + 1)
  },
  methods: {
    copyLoading (item) {
        if(!item) return;
        const selection = window.getSelection();
        selection.removeAllRanges();
        let selectedText = `<FlyLoading :type="${item}" />`
        navigator.clipboard.writeText(selectedText);
        selection.removeAllRanges();
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variable.styl';

.loading-items {
  display: flex;
  flex-wrap: wrap;
  border-bottom: solid 1px $cyan;
  border-right: solid 1px $cyan;
  .loading-item {
    width: calc(100% / 3);
    height: 200px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    // justify-content: center;
    border-left: solid 1px $cyan;
    border-top: solid 1px $cyan;
  }
}
</style>