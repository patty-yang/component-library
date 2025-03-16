<template>
  <h1 class="row-title">折叠面板</h1>
  <div class="row">
    <c-collapse v-model="openedValue" @change="handleChange">
      <c-collapse-item name="a" title="标题1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ut!
      </c-collapse-item>
      <c-collapse-item name="b" title="标题2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minus!
      </c-collapse-item>
      <c-collapse-item disabled name="c" title="标题3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est
        aperiam error odit, dolores incidunt?
      </c-collapse-item>
    </c-collapse>
  </div>

  <h1 class="row-title">手风琴模式</h1>
  <div class="row">
    <c-collapse v-model="openedValue" accordion @change="handleChange">
      <c-collapse-item name="a" title="标题1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ut!
      </c-collapse-item>
      <c-collapse-item name="b" title="标题2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minus!
      </c-collapse-item>
      <c-collapse-item disabled name="c" title="标题3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est
        aperiam error odit, dolores incidunt?
      </c-collapse-item>
    </c-collapse>
  </div>

  <h1 class="row-title">自定义标题</h1>
  <div class="row">
    <c-collapse v-model="openedValue" accordion @change="handleChange">
      <c-collapse-item name="a">
        <template #title>
          <div>
            <c-icon class="header-angle" icon="angle-right" />
            <span>标题1</span>
          </div>
        </template>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ut!
      </c-collapse-item>
      <c-collapse-item name="b" title="标题2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minus!
      </c-collapse-item>
      <c-collapse-item disabled name="c" title="标题3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est
        aperiam error odit, dolores incidunt?
      </c-collapse-item>
    </c-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openedValue = ref(['a'])

const handleChange = (value: string[]) => {
  console.log(value)
}
</script>
