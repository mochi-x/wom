<template>
  <div class='top'>
    <div class='top__dragspace' />
    <div class='top__main'>
      <input-path @emitInputPath='savePath' />
      <markdown-editor
        :reset='isActive.resetMarkdown'
        @emitInputText='saveText'
        @emitReset='active("resetMarkdown")'
      />
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor.vue';
import InputPath from '@/components/InputPath.vue';
import moment from 'moment';

const fs = window.require('fs');

export default {
  name: 'Home',
  components: {
    MarkdownEditor,
    InputPath,
  },
  data() {
    return {
      isActive: {
        resetMarkdown: false,
      },
      inputText: null,
      inputPath: null,
    };
  },
  methods: {
    active(target) {
      this.isActive[target] = !this.isActive[target];
    },
    saveText(inputText) {
      this.inputText = inputText;
    },
    savePath(inputPath) {
      this.inputPath = inputPath;
    },
    outputMarkdown(event) {
      // enter+crlの場合保存処理
      if (event.key === 'Enter' && event.ctrlKey) {
        fs.writeFileSync(this.inputPath + this.generateFilename(), this.inputText);
        this.active('resetMarkdown');
      }
    },
    generateFilename() {
      const now = moment();
      const formated = now.format('YYYYMMDD_HHmmss');
      return `${formated}.md`;
    },
  },
  mounted() {
    this.generateFilename();
    document.addEventListener('keyup', this.outputMarkdown);
  },
  destroyed() {
    document.removeEventListener('keyup', this.outputMarkdown);
  },
};
</script>

<style scoped>
.top {
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}
.top__dragspace {
  height: 25px;
  -webkit-app-region: drag;
  -webkit-user-select: none;
}
.top__main {
  padding: 0 10px 10px 10px;
}
</style>
