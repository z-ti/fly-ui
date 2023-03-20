<template>
  <!-- <div 
    class="['fly-radio']" 
  >
    radio
  </div> -->
  <div class="radio-group">
    <div 
      class="radio-item" 
      v-for="radio in radios" 
      :key="radio"
      @click="curRaio = radio"
    >
      <span 
        class="radio" 
        :class="{active: curRaio === radio}"
      >
      </span>
      {{radio}}
    </div>
  </div>
</template>

<script>

export default {
  name: "Radio",
  data() {
    return {
      curRaio: '',
      radios: ['按钮1', '按钮2', '按钮3']
    }
  },
  props: {
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    
  }
};
</script>
<style lang="stylus" scoped>
@import '../../styles/variable.styl';
// .fly-radio {
  
// }
.radio-group {
    display: flex;
    align-items: end;
    .radio-item {
        display: flex;
        align-items: center;
        height: 20px;
        margin-right: 12px;
        color: #000;
        font-size: 13px;
        margin-bottom: 6px;
        cursor: pointer;
        .radio {
            display: inline-block;
            width: 8px;
            height: 8px;
            padding: 2px;
            border: 2px solid currentColor;
            border-radius: 50%;
            background-clip: content-box;
            color: #000;
            margin-right: 4px;
            &.active {
              background-color: currentColor;
              animation: animate-radio 0.3s both;
            }
        }
    }
}
@keyframes animate-radio {
  0% {
    opacity: .5;
    transform: scale(.5);
  }
  80% {
      opacity: .8;
      transform: scale(1.1);
  }
  100% {
      opacity: 1;
      transform: scale(1);
  }
}
</style>
