<template>
  <nav class="nav">
    <router-link to="/icon">icon</router-link>
    <router-link to="/button">button</router-link>
    <router-link to="/dialog">dialog</router-link>
    <router-link to="/collapse">collapse</router-link>
    <router-link to="/tooltip">tooltip</router-link>
  </nav>
  <div class="displayarea">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
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
