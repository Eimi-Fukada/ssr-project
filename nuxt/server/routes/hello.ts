export default defineEventHandler(async (event) => {
  const { req, res } = event.node;
  // const body = await readBody(event);

  const query = getQuery(event);

  return {
    status: 1,
    msg: `success + ${query?.id} `,
  };
});
