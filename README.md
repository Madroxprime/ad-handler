# ad-handler
ad-handler is a tool designed to pass a single instance of an [activedirectory](https://github.com/gheeres/node-activedirectory) object to other modules in a project.

# Usage

Once ad-handler has been called with ad settings ...
```javascript
const ad = require('ad-handler')(settings);
```

you can call it in later modules with to get the same instance of ad with ...

```javascript
const ad = require('ad-handler')();
```