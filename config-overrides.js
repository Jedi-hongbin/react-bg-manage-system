const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const { resolve } = require("path"); //改别名

module.exports = override(
  addWebpackAlias({
    //改别名
    "@": resolve("src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    //改主题颜色
    // 默认：⬇️
    // @blue-base: #1890ff;
    // @blue-6: @blue-base;
    // @primary-color: @blue-6;
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#51f",
      },
    },
  })
);
