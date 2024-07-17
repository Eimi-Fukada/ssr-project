export default defineEventHandler(async (event) => {
  const { req, res } = event.node;
  // 获取请求参数
  const query = getQuery(event);

  return {
    status: 1,
    msg: `html-success + ${query?.id || ""}`,
  };
});
