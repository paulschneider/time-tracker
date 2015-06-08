var elixir = require('laravel-elixir');

/*
 |----------------------------------------------------------------
 | Have a Drink
 |----------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic
 | Gulp tasks for your Laravel application. Elixir supports
 | several common CSS, JavaScript and even testing tools!
 |
 */

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.less("app.less")
        .scripts([
        	"vue-resource.min.js",
        	"app.js",
        	"tracker.js",
        	"new-user.js",
        	"new-project.js",
        ]);
});
