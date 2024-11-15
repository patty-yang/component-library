<template>
  <h1 class="row-title">Buttons</h1>
  <div class="row">
    <CButton ref="btnRef" @click="handleClick">默认按钮</CButton>
    <CButton type="primary">主要按钮</CButton>
    <CButton type="success">成功按钮</CButton>
    <CButton type="warning">警告按钮</CButton>
    <CButton type="info">信息按钮</CButton>
    <CButton type="danger">危险按钮</CButton>
  </div>

  <div class="row">
    <CButton plain>默认按钮</CButton>
    <CButton type="primary" plain>主要按钮</CButton>
    <CButton type="success" plain>成功按钮</CButton>
    <CButton type="warning" plain>警告按钮</CButton>
    <CButton type="info" plain>信息按钮</CButton>
    <CButton type="danger" plain>危险按钮</CButton>
  </div>

  <div class="row">
    <CButton round>圆角按钮</CButton>
    <CButton type="primary" round>主要按钮</CButton>
    <CButton type="success" round>成功按钮</CButton>
    <CButton type="warning" round>警告按钮</CButton>
    <CButton type="info" round>信息按钮</CButton>
    <CButton type="danger" round>危险按钮</CButton>
  </div>

  <div class="row">
    <CButton round disabled>禁用按钮</CButton>
    <CButton type="primary" round disabled>主要按钮</CButton>
    <CButton type="success" round disabled>成功按钮</CButton>
    <CButton type="warning" round disabled>警告按钮</CButton>
    <CButton type="info" round disabled>信息按钮</CButton>
    <CButton type="danger" round disabled>危险按钮</CButton>
  </div>

  <div class="row">
    <CButton round loading>加载中</CButton>
    <CButton type="primary" round loading>主要按钮</CButton>
    <CButton type="success" round loading>成功按钮</CButton>
    <CButton type="warning" round loading>警告按钮</CButton>
    <CButton type="info" round loading>信息按钮</CButton>
    <CButton type="danger" round loading>危险按钮</CButton>
  </div>

  <div class="row">
    <CButton round loading>加载中</CButton>
    <CButton icon="search" type="primary" round>主要按钮</CButton>
    <CButton icon="edit" type="success" round>成功按钮</CButton>
    <CButton icon="edit" type="warning" round>警告按钮</CButton>
    <CButton icon="info" type="info" round>信息按钮</CButton>
    <CButton icon="close" type="danger" round>危险按钮</CButton>
  </div>


  <div class="row">
    <CButton type="primary" size="small">small</CButton>
    <CButton type="primary" size="default">default</CButton>
    <CButton type="primary" size="large">large</CButton>
  </div>

  <div class="row">
    <CButton size="large" circle>🀄️</CButton>
    <CButton type="primary" circle>
      <CIcon icon="search" />
    </CButton>
    <CButton type="success" circle>1</CButton>
    <CButton type="warning" circle>2</CButton>
    <CButton type="info" circle>3</CButton>
    <CButton type="danger" circle>4</CButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CButton from '@/components/Button/index.vue';
const btnRef = ref<InstanceType<typeof CButton>>()
const handleClick = () => {
  console.log(btnRef.value)
}
</script>
<style scoped></style>
