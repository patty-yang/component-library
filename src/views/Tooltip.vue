<template>
  <h1 class="row-title">不同方向</h1>
  <div class="row">
    <c-tooltip
      @visible-change="handleVisibleChange"
      content="this is top content"
      placement="top"
    >
      <c-button type="primary">top</c-button>
    </c-tooltip>
    <c-tooltip
      @visible-change="handleVisibleChange"
      content="this is right content"
      placement="right"
    >
      <c-button type="warning">right</c-button>
    </c-tooltip>
    <c-tooltip
      @visible-change="handleVisibleChange"
      content="this is bottom content"
      placement="bottom"
    >
      <c-button type="danger">bottom</c-button>
    </c-tooltip>
    <c-tooltip
      @visible-change="handleVisibleChange"
      content="this is left content"
      placement="left"
      trigger="click"
    >
      <c-button type="info">left,点我</c-button>
    </c-tooltip>
  </div>
  <h1 class="row-title">手动触发</h1>
  <div class="row">
    <c-tooltip
      ref="tooltipRef"
      content="this is top content"
      placement="top"
      manual
    >
      <c-button type="primary" @click="handleVisibleChange(true)"
        >显示
      </c-button>
      <c-button type="primary" @click="handleVisibleChange(false)"
        >隐藏
      </c-button>
    </c-tooltip>
  </div>

  <h1 class="row-title">延迟触发</h1>
  <div class="row">
    <c-tooltip
      content="this is top content"
      placement="top"
      :open-delay="1000"
      :close-delay="1000"
    >
      <c-button type="primary">top</c-button>
    </c-tooltip>
    <c-tooltip
      content="this is right content"
      placement="right"
      :open-delay="1000"
      :close-delay="1000"
    >
      <c-button type="warning">right</c-button>
    </c-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CTooltip from '@/components/Tooltip/index.vue'

const tooltipRef = ref<InstanceType<typeof CTooltip>>()
const handleVisibleChange = (visible: boolean) => {
  if (visible) {
    tooltipRef.value!.open()
  } else {
    tooltipRef.value!.close()
  }
}
</script>
