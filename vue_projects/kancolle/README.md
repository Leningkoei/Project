# kancolle

##  node modules
***
```
npm install [-g] [moldules name] [params]
```
-   less
-   less-loader
-   nanoid

##  dir
***
```
|-- kankolle
    |-- node_modules/
    |-- public/
    |-- src/
    |   |-- assets/
    |   |-- scripts/
    |   |   |-- mixin_test/     -- mixin_test 的共享配置;
    |   |   |-- plugin_test/    -- 通过插件配置全局配置项和 Vue.prototype, 可传参;
    |   |-- components/
    |   |   |-- ref_test/       -- 标签的 ref 属性, 标识 template 中的元素;
    |   |   |-- props_test/     -- template 中调用子组件时可以传递参数;
    |   |   |-- mixin_test/     -- 配置2个组件共享配置项, 可以全局混入;
    |   |   |-- scoped_test/    -- style 中的属性名, 设置后可以使 style 绑定该组件;
    |   |   |-- todo_list/      -- todo list;
    |   |-- App.vue
    |   |-- main.js
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- README.md
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
