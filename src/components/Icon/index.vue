<template>
  <i class="c-icon" :class="{ [`c-icon-${type}`]: type }">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { computed, ref } from 'vue'

interface Props extends FontAwesomeIconProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  color?: string
}
const props = defineProps<Props>()

defineOptions({
  name: 'CIcon'
})
const color = ref('red')
// 过滤 type 不传入 font-awesome-icon 的属性
const filterProps = computed(() => {
  const { type, ...rest } = props
  return rest
})
</script>
