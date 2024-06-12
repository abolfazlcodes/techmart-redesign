const gulp = require("gulp"),
  replace = require("gulp-replace"),
  rename = require("gulp-rename"),
  svgmin = require("gulp-svgmin"),
  wrap = require("gulp-wrap"),
  fs = require("fs");
const svg_files_folder = "./icons-svg",
  dest_folder = "../src/app/_components/icons/",
  jsx_template = "./icon-template.txt";

let icons_component_list = [];

// در این تسک ما ابتدا تمام اتریبیوت های تگ svg را پاک میکنیم و بعد خود تگ svg را پاک میکنیم
// در مرحله بعد کانتت ی ک تا الان در اختیار داریم درون تپملیت ی ک خودمون در فایل icon-template.txt قرار میدهیم
// در مرحله بعد تک تک svg های ساخته شده را به آرایه میفرستیم و در مرحله اخر به ادرس مورد نظر در پروژه اضافه میکنیم
// در تسک دوم (icons_components_main) کامپوننت های ساخته شده را در یک فایل یکجا اکسپورت میکنیم
gulp.task("icons_components", function () {
  return gulp
    .src([svg_files_folder + "/*.svg"])
    .pipe(
      svgmin({
        multipass: true,
        full: true,

        // https://github.com/svg/svgo/tree/master/plugins
        // https://github.com/svg/svgo#built-in-plugins
        plugins: [
          {
            name: "cleanupIDs",
            params: { remove: true, minify: true },
          },
          "removeDoctype",
          "removeComments",
          "removeTitle",
          "removeDimensions",
          "collapseGroups",
          {
            name: "cleanupNumericValues",
            params: { floatPrecision: 4 },
          },
          {
            name: "convertColors",
            params: { names2hex: true, rgb2hex: true },
          },
          "removeStyleElement",
          "removeEmptyContainers",
          {
            name: "removeAttrs",
            params: {
              attrs: [
                "(filter|fill|stroke|fill-rule|stroke-linecap|stroke-linejoin|stroke-width|transform|style|class|data.*)",
                "svg:(width|height)",
              ],
            },
          },
          "removeUselessDefs",
        ],
      })
    )
    .pipe(replace(/<\/?svg(.*?)>/g, ""))
    .pipe(wrap({ src: jsx_template }))
    .pipe(
      rename(function (path) {
        icons_component_list.push(path.basename);
        path.extname = ".tsx";
      })
    )
    .pipe(gulp.dest(dest_folder + "/src"));
});

gulp.task("icons_component_main", function (cb) {
  return fs.writeFile(
    dest_folder + "/icons.ts",
    "/* GENERATED FILE */\n\n" +
      icons_component_list
        .map((item) => {
          let module_name = (
            item.charAt(0).toUpperCase() + item.substr(1)
          ).replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
          });

          return `export { default as Icon${module_name} } from './src/${item}';`;
        })
        .join("\n"),
    cb
  );
});

gulp.task("default", gulp.series("icons_components", "icons_component_main"));
