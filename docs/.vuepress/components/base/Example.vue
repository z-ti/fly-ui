<template>
  <div class="example" tabindex="0" @keydown.esc="toggleCodeContainer">
    <div class="toolbar">
      <!-- <a-tooltip title="复制代码">
        <a-icon type="copy" @click="copySource" />
      </a-tooltip>
      <a-tooltip title="查看代码，或者按ESC。">
        <a-icon type="code" @click="toggleCodeContainer" />
      </a-tooltip> -->
      <span class="popup__copy--success" :class="{active: isToast}">复制成功</span>
      <span class="fly-icon-copy" title="复制代码"  @click="copyToClip"></span>
      <span class="fly-icon-open" title="查看代码" @click="toggleCodeContainer"></span>
    </div>
    <div v-if="component" class="component-container">
      <!-- <component :is="$slots.default" /> -->
      <slot/>
    </div>
    <code-transition>
      <div v-show="showCode" class="code-container">
        <div class="p-15">
          <!-- <slot /> -->
          <div v-html="code" ref="code"></div>
        </div>
      </div>
    </code-transition>
  </div>
</template>
<script>
import CodeTransition from './CodeTransition.vue'
import Prism from 'prismjs';

export default {
  components: { CodeTransition },
  props: {
    component: String,
    block: String,

  },
  data () {
    return {
      showCode: false,
      code: null,
      isToast: false
    }
  },
  mounted() {
    let reg = new RegExp(`([\\s\\S]*)block="${this.block}">\n([\\s\\S]*?)<\/Example>([\\s\\S]*)`, 'm')
    let rawStr = require(`!!raw-loader!../${this.component}.vue`).default
    let source = rawStr.replace(reg, '$2')
    // console.log(22, source)
    this.source = source
    this.code = this.highlightCode(source)
  },
  methods: {
    copySource () {
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.value = decodeURIComponent(this.source)
      input.select()
      document.execCommand('Copy')
      input.remove()

      // this.$message.success('复制成功')
    },
    copyToClip () {
        if(!this.showCode) {
          this.showCode = true
        }
        this.isToast = true
        setTimeout(() => {
          this.isToast = false
        }, 1000)
        this.$nextTick(() => {
          let el = this.$refs['code']
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(el);
          selection.removeAllRanges();
          selection.addRange(range);
          let selectedText = selection.toString();
          navigator.clipboard.writeText(selectedText);
          selection.removeAllRanges();
        })
    },
    highlightCode(content) {
      const lang = 'markup'
      const html = Prism.highlight(content, Prism.languages[lang], lang)
      return `<pre v-pre class="language-vue"><code>${html}</code></pre>`
    },
    toggleCodeContainer () {
      this.showCode = !this.showCode
    },
  },
}
</script>
<style lang="stylus">
.example {
  margin-top: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:hover {
    box-shadow: 0 0 5px #ccc;
  }

  > div + div {
    border-top: 1px solid;
    border-color: inherit;
  }

  .toolbar {
    padding: 15px;
    text-align: right;
    position: relative;
    .anticon {
      margin-left: 5px;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  // 组件示例
  .component-container {
    padding: 15px;
  }

  // 组件代码
  .code-container {
    position: relative;

    .p-15 {
      padding: 15px;
      // white-space: pre-line;
      .language-vue {
        padding: 20px 0 0;
      }
    }

    .language-vue {
      margin: 0;
    }

    .hide-code {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 10px;
      background-color: black;
    }
  }
}
[class*=" fly-icon-"], [class^=fly-icon-] {
  cursor: pointer;
}
.popup__copy--success {
    color: #6236ff;
    font-size: 12px;
    transform: scale(0.9);
    position: absolute;
    top: -6px;
    right: 20px;
    z-index: 1;
    /* transition: all 1s ease-in-out; */
    display: none;
    &.active {
        display: block;
        animation: animate-top 1s linear;
    }
    @keyframes animate-top {
      15% {
          top: -14px;
          opacity: 1;
      }
      45% {
          top: -16px;
          opacity: 0.9;
      }
      95% {
          top: -20px;
          opacity: 0.1;
      }
      100% {
          opacity: 0;
      }
    }
}

</style>
