<template>
  <h1 class="row-title">dialog</h1>
  <div class="row">
    <C-button @click="btnClick">dialog 1</C-button>
    <C-button>dialog 2</C-button>
  </div>

  <CDialog
    title="dialog111"
    top="300px"
    v-model:visible="visible"
    @close="closeHandle"
  >
    <h1>dialog</h1>

    <template #footer>
      <C-button @click="closeHandle">取消</C-button>
      <C-button>确定</C-button>
    </template>
  </CDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const btnClick = () => {
  visible.value = true
}

const closeHandle = () => {
  visible.value = false
}
</script>
