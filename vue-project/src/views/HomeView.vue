<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
</script>

<template>
  <div>
    <TresCanvas clear-color="#82DBC5" window-size>
      <TresPerspectiveCamera :position="[0, 0, 12]" :look-at="[1, 1, 1]" />
      <OrbitControls />
      <Suspense>
        <GLTFModel path="/person.gltf" draco />
      </Suspense>
      <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
    </TresCanvas>
  </div>
</template>
