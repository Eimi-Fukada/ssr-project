export default defineEventHandler(async (event) => {
  const { req, res } = event.node;

  const query = getQuery(event);

  return {
    status: 1,
    msg: `html-success + ${query?.id}`,
  };
});
