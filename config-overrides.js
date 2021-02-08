const {
  override,
  useBabelRc,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
//const { resolve } = require("path"); //改别名
const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, ".", dir);
// }

module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc(),
  // addWebpackAlias({
  //   //改别名
  //   "@": resolve("src"),
  // }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    page: path.resolve(__dirname, "src/page"),
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
