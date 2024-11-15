<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRequest } from './hooks'

const fetchData = () => {
  const data = Array.from({ length: 10 }, (v, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`
  }))

  return new Promise((res) => {
    setTimeout(() => {
      res({
        code: 200,
        data: {
          records: data,
          total: data.length
        }
      })
    }, 1000)
  })
}
const { loading, run, data } = useRequest(fetchData, {
  manual: false
})

const fn = () => {
  run()
}
</script>

<template>
  <!-- <button @click="fn">btn</button>
  <div>{{ loading ? 'loading~' : 'end' }}</div>
  <div v-for="item in data?.records" :key="item.id">{{ item.name }}</div> -->
  <nav class="nav">
    <router-link to="/icon">icon</router-link>
    <router-link to="/button">button</router-link>
    <router-link to="/dialog">dialog</router-link>
  </nav>
  <div class="displayarea">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>
