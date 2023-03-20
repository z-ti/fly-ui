<template>
  <transition :name="effect">
    <div 
      class="fly-toast" 
      :class="[`fly-toast__${effect}`]"
      v-show="show || visible">
        {{message}}
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    effect: {
      type: String,
      default: 'fade'
    },
    message: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    
  },
  methods: {
    onShow() {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, this.duration)
    }
  }
};
</script>
<style lang="stylus" scoped>
.fly-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
  padding: 0 20px;
  &__slide {
    transform: translateX(0);
    left: initial;
    right: 20px;
    
  }
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-out;
}

.slide-enter {
  transform: translateX(50px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
