# kpeil-speedtype
kpeil's implementation of ut-ifed speedtype
v0.1.0 "lesson 1"

Scripts:
test - fails
babel - will run babel-cli with babel-preset-es2015 into js-babel. Not used in
        HTML, just for initial verification / debug that es2015 gets transpiled
browserify - will transpile and bundle (just once per call) into
             js-bundle/bundle.js for static use in HTML.
watchify - same as browserify, but with auto-rebundle while running: with this,
           won't need to manually call browserify.
start - webpack doing the same as watchify, but with dev server on
        localhost:3000
clean - cleans up outputs of babel, browserify, watchify and webpack. Autocalled
        post install (for comfy clean runs whenever).
uninstall - clean + rm node_modules
