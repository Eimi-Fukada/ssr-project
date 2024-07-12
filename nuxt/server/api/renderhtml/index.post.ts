export default defineEventHandler(async (event) => {
  const { req, res } = event.node;
  // 获取请求参数
  const query = getQuery(event);

  return {
    code: 0,
    data: {},
    msg: "success",
  };
});
