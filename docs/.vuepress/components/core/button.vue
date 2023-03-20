<template>
  <button 
    :class="clsnames" 
    @click="onClick"
  >
    <span class="fly-icon-loading" v-if="loading"></span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: 'default',
      validator(val) {
        return ['major', 'minor', 'success', 'error', 'warn', 'default'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    dress: {
      type: String,
      default: '',
      validator(val) {
        let dressItems = val.split(' ')
        return dressItems.some(d => ['', 'round', 'dashed', 'dotted'].includes(d))
      }
    },
    color: {
      type: String,
      default: '',
      validator(val) {
        return ['', 'cyan', 'green', 'green1', 'red', 'yellow'].includes(val)
      }
    },
  },
  computed: {
    clsnames() {
      const prefix = 'fly-btn'
      const { type, disabled, dress, loading, color } = this
      let classNames = {
        [`${prefix}`]: true,
        [`${prefix}-${type}`]: type,
        [`${prefix}-disabled`]: disabled,
        [`${prefix}-loading`]: loading,
      }
      // [`${prefix}-${dress}`]: dress,
      if(dress) {
        let dressItems = dress.split(' ')
        dressItems.forEach(d => {
          classNames[`${prefix}-${d}`] = d
        });
      }
      // type状态未默认情况下， color才生效
      if(['', 'default'].includes(type)) {
        classNames[`${prefix}--${color}`] = color
      }
      return classNames
    }
  },
  methods: {
    onClick(e) {
      const { disabled, loading } = this
      if(!disabled && !loading) {
        this.$emit('click', e)
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../styles/variable.styl';
.fly-btn {
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid $grey1;
    color: $black;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 10px 16px;
    font-size: 14px;
    border-radius: 2px;
    &-major {
      background-color: $cyan;
      border-color: $cyan;
      color: $white;
    }
    &-minor {
      background-color: $green;
      border-color: $green;
      color: $white;
    }
    &-success {
      background-color: $green1;
      border-color: $green1;
      color: $white;
    }
    &-error {
      background-color: $red;
      border-color: $red;
      color: $white;
    }
    &-warn {
      background-color: $yellow;
      border-color: $yellow;
      color: $white;
    }
    &-disabled {
      opacity: .4;
      cursor: not-allowed;
    }
    &-loading {
      opacity: .7;
      cursor: default;
    }
    &-round {
      border-radius: 18px;
    }
    &-dashed {
      border-style: dashed;
    }
    &-dotted {
      border-style: dotted;
    }
    &--cyan {
      border-color: $cyan;
      color: $cyan;
    }
    &--green {
      border-color: $green;
      color: $green;
    }
    &--green1 {
      border-color: $green1;
      color: $green1;
    }
    &--red {
      border-color: $red;
      color: $red;
    }
    &--yellow {
      border-color: $yellow;
      color: $yellow;
    }
    .fly-icon-loading {
      display: inline-block;
      font-size: 14px;
      animation: rotating 1s infinite linear;
    }
}
@keyframes rotating {
  100% {
    transform: rotate(360deg);
  }
}
</style>
