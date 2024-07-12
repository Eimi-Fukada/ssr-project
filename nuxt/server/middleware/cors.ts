export default defineEventHandler((event) => {
  // 检查请求来源是否在允许的列表中
  const origin = event.node.req.headers.origin || "*";
  event.node.res.setHeader("Access-Control-Allow-Origin", origin);
  event.node.res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  event.node.res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  event.node.res.setHeader("Access-Control-Max-Age", "86400"); // Cache for 1 day

  // 如果这是一个预检请求（OPTIONS），则直接返回200状态码
  if (event.node.req.method === "OPTIONS") {
    event.node.res.writeHead(200);
    event.node.res.end();
    return false;
  }
});
