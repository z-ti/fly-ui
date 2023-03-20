<template>
  <div class="demo">
    <!-- <h2>📌 古典色</h2> -->
    <fly-title>古典色</fly-title>
    <div class="card-items">
      <div
        class="card"
        v-for="color in classicalColors"
        :key="color.key"
        :class="{
          dark: ['雪白', '铅灰'].includes(color.key),
          border: color.key == '雪白',
        }"
        :style="{ backgroundColor: color.value }"
      >
        <span class="txt">{{ color.key }}</span>
        <span class="value">{{ color.value }}</span>
      </div>
    </div>
    <!-- <h2>📌 基础色</h2> -->
		<fly-title>基础色</fly-title>
    <div class="card-items">
      <div
        class="card circle"
        v-for="color in normalColors"
        :key="color.key"
        :style="{ backgroundColor: color.value }"
      >
        <span class="txt">{{ color.key }}</span>
        <span class="value">{{ color.value }}</span>
      </div>
    </div>
    <!-- <h2>📌 时尚色</h2> -->
		<fly-title>时尚色</fly-title>
    <div class="card-items">
      <div
        class="hexagon"
        v-for="color in fashionColors"
        :key="color.key"
        :style="{ backgroundColor: color.value }"
      >
        <span class="txt">{{ color.key }}</span>
        <span class="value">{{ color.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import colors from "./variable.js";
import flyTitle from "./base/Title.vue";
export default {
  name: "demo",
  components: {
    flyTitle,
  },
  data() {
    return {
      classicalColors: [],
      normalColors: [],
      fashionColors: [],
    };
  },
  mounted() {
    Object.keys(colors.classical).forEach((key) => {
      this.classicalColors.push({
        key,
        value: colors.classical[key],
      });
    });

    Object.keys(colors.normal).forEach((key) => {
      this.normalColors.push({
        key,
        value: colors.normal[key],
      });
    });

    Object.keys(colors.fashion).forEach((key) => {
      this.fashionColors.push({
        key,
        value: colors.fashion[key],
      });
    });
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/variable.styl';

.card-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    width: calc(25% - 8px);
    padding-top: calc(25% - 8px);
    height: 0;
    color: $white;
    border-radius: 6px;
    margin-bottom: 8px;
    position: relative;

    &.circle {
      border-radius: 50%;
      box-shadow: 3px 6px 8px 0px #a39096;
    }

    &:hover {
      .value {
        font-weight: bold;
      }
    }

    &.dark {
      color: $black;
    }

    &.border {
      border: 1px solid $grey1;
    }

    .txt {
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
    }

    .value {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%);
      transition: font-weight 0.3s ease-in;
    }
  }

  .hexagon {
    width: 16%;
    padding-top: 16%;
    position: relative;
    text-align: center;
    margin: 4% 3%;
    color: $white;

    &:hover {
      .value {
        font-weight: bold;
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      transform: rotate(135deg);
    }

    .txt {
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
    }

    .value {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%);
      transition: font-weight 0.3s ease-in;
    }
  }
}

h2 {
  &::before {
    border-left: none !important;
  }
}
</style>