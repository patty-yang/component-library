<template>
  <div class="c-tooltip" v-on="outerEvents">
    <!-- 触发的元素 -->
    <div class="c-tooltip__trigger" ref="triggerRef" v-on="events">
      <slot />
    </div>
    <!-- 要显示的内容 -->
    <div class="c-tooltip__popper" ref="popperRef" v-if="isOpen">
      <slot name="content">
        {{ content }}
      </slot>
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { createPopper } from '@popperjs/core'

import type { Instance, Placement } from '@popperjs/core'

import { useTimeout } from '@/hooks'

const { registerTimeout, cancelTimeout } = useTimeout()

interface TooltipProps {
  content: string
  placement?: Placement
  trigger?: string
  manual?: boolean
  openDelay?: number
  closeDelay?: number
}
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
  trigger: 'hover',
  manual: false,
  openDelay: 0,
  closeDelay: 0
})
// 提示框是否需要显示
// 创建具体的 popper 实例
// popper 是通过 createPopper 创建的
// popper 实例是在 isOpen 为 true 的时候创建的

const triggerRef = ref<HTMLElement>()
const popperRef = ref<HTMLElement>()

const emit = defineEmits(['visible-change'])

let popperInstance: Instance | null = null

const isOpen = ref(false)

const open = () => {
  registerTimeout(() => {
    isOpen.value = true
    emit('visible-change', true)
  }, props.openDelay)
}
const close = () => {
  registerTimeout(() => {
    isOpen.value = false
    emit('visible-change', false)
  }, props.closeDelay)
}

const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 6]
      }
    }
  ]
}))

watch(
  isOpen,
  (newVal) => {
    if (newVal) {
      if (triggerRef.value && popperRef.value) {
        popperInstance = createPopper(
          triggerRef.value as HTMLElement,
          popperRef.value as HTMLElement,
          popperOptions.value
        )
      } else {
        popperInstance?.destroy()
      }
    }
  },
  {
    flush: 'post'
  }
)

const events = reactive<Record<string, any>>({})
const outerEvents = reactive<Record<string, any>>({})

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = () => (isOpen.value ? close() : open())
  }
}

// 只有在用户不需要自定义处理的时候，才绑定事件
if (!props.manual) {
  attachEvents()
}

defineExpose({
  open,
  close
})
</script>
