<template>
  <div class='inputPath'>
    <input
      type='text'
      :placeholder="placeholder"
      @input='$emit("emitInputPath", $event.target.value)'
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      placeholder: '保存したいPathを入力してください',
    };
  },
};
</script>
<style scoped>
.inputPath input {
  outline: none;
  padding: 10px;
  background-color: rgba(227, 227, 227, 0.4);
  border-radius: 10px;
  width: 100%;
  font-size: 12px;
}
</style>
