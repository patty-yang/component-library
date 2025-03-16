<template>
  <div
    :class="{
      'is-disabled': disabled
    }"
    class="c-collapse-item"
  >
    <!-- 标题 -->
    <div
      :id="`collapse-item-${name}`"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      class="c-collapse-item__header"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>

      <c-icon class="header-angle" icon="angle-right" />
    </div>
    <!-- 内容 -->
    <transition name="slide" v-on="transitionEvents">
      <div v-show="isActive" class="c-collapse-item__wrapper">
        <div :id="`collapse-item-${name}`" class="c-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { RendererElement } from 'vue'
import { computed, inject } from 'vue'
import type { CollapseContext } from './config'
import { collapseContextKey } from './config'

defineOptions({
  name: 'CCollapseItem'
})

interface Props {
  name: string
  title?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const { activeNames, handleItemClick } = inject(
  collapseContextKey
) as CollapseContext

const isActive = computed(() => activeNames.value.includes(props.name))

const handleClick = () => {
  handleItemClick(props.name)
}

const transitionEvents = {
  beforeEnter(el: RendererElement) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el: RendererElement) {
    el.style.height = el.scrollHeight + 'px'
  },
  afterEnter(el: RendererElement) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el: RendererElement) {
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },
  leave(el: RendererElement) {
    el.style.height = '0px'
  },
  afterLeave(el: RendererElement) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>
