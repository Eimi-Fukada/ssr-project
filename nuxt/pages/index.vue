<template>
  <div>
    <div class="title">this is a ssr page</div>
    <button @click="handleClick" class="button">click me</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
import "~/assets/css/index.less";

const appConfig = useAppConfig();
const route = useRoute();

const { data } = await useFetch("/api/renderhtml", { method: "post" });
console.log("data==", data.value);
const handleClick = () => {
  console.log("hello ssr project==");
};
</script>
