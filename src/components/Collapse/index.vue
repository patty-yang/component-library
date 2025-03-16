<template>
  <div class="c-collapse">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import { collapseContextKey } from './config'

defineOptions({
  name: 'CCollapse'
})

interface Props {
  modelValue: string[]
  accordion?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ['']
})

const activeNames = ref(props.modelValue)

const handleItemClick = (name: string) => {
  if (props.accordion) {
    activeNames.value = [name]
  } else {
    const index = activeNames.value.indexOf(name)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(name)
    }
  }
  emit('update:modelValue', activeNames.value)
  emit('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})

const emit = defineEmits(['update:modelValue', 'change'])
</script>
