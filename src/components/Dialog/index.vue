<template>
  <transition name="c-dialog-fade">
    <div v-show="visible" class="c-dialog_wrapper">
      <div
        class="c-dialog"
        :style="{
          width,
          top
        }"
      >
        <div class="c-dialog_header">
          <slot name="title">
            <span class="c-dialog_title">{{ title }}</span>
          </slot>
          <C-button
            v-if="showClose"
            class="c-dialog_headerbtn"
            @click="clickHandle"
          >
            <C-icon icon="xmark"></C-icon>
          </C-button>
        </div>

        <div class="c-dialog_body">
          <slot />
        </div>

        <div class="c-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import type { IProps, IEmits } from './types'
defineOptions({
  name: 'CDialog'
})

withDefaults(defineProps<IProps>(), {
  visible: false,
  title: '提示',
  width: '50%',
  top: '15vh',
  showClose: true
})

const emits = defineEmits<IEmits>()

const clickHandle = () => {
  emits('close')
}
</script>
