<template>
  <h1 class="row-title">普通 Icon</h1>
  <div class="row">
    <CIcon icon="house" />
    <CIcon icon="user" />
    <CIcon icon="cog" />
    <CIcon icon="search" />
    <CIcon icon="envelope" />
  </div>

  <h1 class="row-title">不同大小的 Icon</h1>
  <div class="row">
    <CIcon icon="house" size="xs" />
    <CIcon icon="user" size="sm" />
    <CIcon icon="cog" size="lg" />
    <CIcon icon="search" size="xl" />
    <CIcon icon="envelope" size="2xl" />
  </div>

  <h1 class="row-title">旋转 Icon</h1>
  <div class="row">
    <CIcon icon="house" rotation="90" />
    <CIcon icon="house" rotation="180" />
    <CIcon icon="user" rotation="270" />
    <CIcon icon="cog" rotation="270" />
    <CIcon icon="envelope" rotation="270" />
  </div>

  <h1 class="row-title">动画</h1>
  <div class="row">
    <CIcon icon="house" rotation="90" beat />
    <CIcon icon="house" rotation="180" spin />
    <CIcon icon="user" rotation="270" shake />
    <CIcon icon="cog" rotation="270" fade />
    <CIcon icon="envelope" rotation="270" spinPulse />
  </div>

  <h1 class="row-title">自定义type</h1>
  <div class="row">
    <CIcon icon="house" type="primary" />
    <CIcon icon="user" type="success" />
    <CIcon icon="cog" type="warning" />
    <CIcon icon="search" type="danger" />
    <CIcon icon="envelope" type="info" />
  </div>
</template>
