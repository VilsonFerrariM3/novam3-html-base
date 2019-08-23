let mix = require("laravel-mix");

mix
  .js("resources/assets/js/app.js", "public/js")
  .sass("resources/assets/css/app.scss", "public/css")
  .sourceMaps()
  .browserSync({
    proxy: "http://127.0.0.1:4000",
    files: ["public/**/*.php"]
  });
