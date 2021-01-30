const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // api 表示代理路径
    createProxyMiddleware({
      // target 目标服务器的地址，实际地址以项目为准
      target: " http://localhost:4000/",
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      pathRewrite: {
        "^api": "",
      },
    })
  );
};
