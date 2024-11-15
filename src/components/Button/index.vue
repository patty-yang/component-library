<template>
  <button
    class="c-button"
    :class="{
      [`c-button--${type}`]: type,
      [`c-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled || loading,
      'is-circle': circle
    }"
    :disabled="disabled"
  >
    <CIcon v-if="loading" icon="spinner" spin />
    <CIcon v-if="icon" :icon="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
defineOptions({
  name: 'CButton'
})

interface Props {
  type?: string
  plain?: boolean
  round?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: string
  size?: 'large' | 'default' | 'small'
  circle?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'default',
  plain: false,
  round: false,
  disabled: false,
  loading: false,
  size: 'default',
  circle: false
})
</script>
