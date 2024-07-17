<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import { createSSRApp, onMounted } from 'vue'
import axios from 'axios'

const getInfo = async () => {
  const { data } = await axios({
    method: 'post',
    url: 'http://localhost:3000/api/renderhtml',
    data: {
      id: 1
    }
  })
  // createSSRApp(data).mount('#app')
  console.log('res======', data)
}

onMounted(() => {
  getInfo()
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
