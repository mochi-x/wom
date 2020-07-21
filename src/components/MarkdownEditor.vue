<template>
  <div class='markdown-editor'>
    <textarea
      class='markdown-editor__textarea'
      v-model='inputText'
    />
  </div>
</template>
<script>
export default {
  props: {
    reset: Boolean,
  },
  data() {
    return {
      inputText: null,
    };
  },
  watch: {
    inputText() {
      this.$emit('emitInputText', this.inputText);
    },
    reset(to, from) {
      if (to && !from) {
        this.inputText = '';
        this.$emit('emitReset');
      }
    },
  },
};
</script>
<style scoped>
.markdown-editor {
  padding: 20px 20px 20px 20px;
  height: 100vh;
}
.markdown-editor__textarea {
  resize: none;
  outline: none;
  width: 100%;
  height: calc(100vh - 110px);
}
.markdown-editor__textarea::-webkit-scrollbar {
  display: none;
}
</style>
