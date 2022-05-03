<template>
  <div class="demo">
    <h2>📌 例子</h2>
    <div class="card-items">
        <div class="card" 
            v-for="color in colorItems" 
            :key="color.key" 
            :class="{dark: ['雪白', '铅灰'].includes(color.key), border: color.key == '雪白'}"
            :style="{ backgroundColor: color.value }">
            <span class="txt">{{color.key}}</span>
            <span class="value">{{color.value}}</span>
        </div>
    </div>
  </div>
</template>

<script>
  import colors from './variable.js'
  export default {
    name: 'demo',
    data() {
      return {
          colorItems: []
      }
    },
    mounted() {
        Object.keys(colors).forEach(key => {
            this.colorItems.push({
                key,
                value: colors[key]
            })
        })
       
    }
  }
</script>

<style lang="stylus" scoped>
   @import '../styles/variable.styl'
   .card-items {
       display: flex; 
       flex-wrap: wrap;
       justify-content: space-between;
       .card {
           width: calc(25% - 8px);
           padding-top: 25%; 
           height: 0;
           color: $white;
           border-radius: 6px;
           margin-bottom: 8px;
           position: relative;
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
                transition: font-weight .3s ease-in;
            }
        }
    }
   h2 {
       &::before {
               border-left: none !important;
        }
   }
</style>