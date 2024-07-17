import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";

export default defineEventHandler(async (event) => {
  const { req, res } = event.node;

  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`,
  });

  const html = await renderToString(app);

  return {
    code: 200,
    data: html,
    msg: "success",
  };
});
