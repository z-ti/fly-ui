<template>
  <div 
    :class="['fly-input', `fly-input-${type}`, disabled ? 'fly-input__disabled' : '']" 
  >
   <input 
    type="text" 
    class="fly-input__inner"
    :value="value"
    :maxlength="maxlength"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInput"
   />
   <FlyIcon 
      type="refresh" 
      color="#80766e" 
      class="icon"
      v-if="clearable && showIcon"
      @click.native="onClear"
   />
  </div>
</template>

<script>
import FlyIcon from "./icon.vue";

export default {
  name: "Input",
  components: {
    FlyIcon
  },
  props: {
    type: {
      type: String
    },
    value: {
      type: String
    },
    maxlength: {
      type: Number
    },
    minlength: {
      type: Number
    },
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showIcon() {
      return Boolean(this.value)
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onClear() {
      this.$emit('input', '')
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../styles/variable.styl';
.fly-input {
  border: solid 1px $green;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  &__disabled {
    opacity: 0.4;
    input {
       cursor: not-allowed;
    }
  }
  &__inner {
    width: 200px;
    padding: 10px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .icon {
    position: absolute;
    right: 8px;
    cursor: pointer;
  }
}
</style>
