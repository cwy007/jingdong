# jingdong

移动端项目：京东到家

## Project setup

```shell
npm install
npm run serve
npm run build
npm run lint
```

## stylesheets

* 1rem == 1 * html 元素的 font-size
* BEM 命名: block__element--modifier 语义化的css编码

## npm packages

```shell
npm i -S normalize.css
```

## js code snippet

```js
➜  code-for-project git:(cwy-branch) ✗ node
Welcome to Node.js v12.16.2.
// Returns a string consisting of the elements of the object repeated count times.
> 'js'.repeat(5)
'jsjsjsjsjs'

```

## 参考

* [Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

* flex container
  * _flex-direction_
  * _flex-wrap_
  * **flex-flow**
  * justify-content
  * align-items
  * align-content

* flex item
  * order
  * _flex-grow_
  * _flex-shrink_
  * _flex-basis_
  * **flex**
  * align-self

> flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size），设置元素的初始长度

* [https://www.iconfont.cn/](https://www.iconfont.cn/)
* scss 中 `&` 符号的作用

```scss
// scss
  .position {
    // ...
    &__icon {
      // ...
    }
    .position__notice {
      // ...
    }
  }

// scss 编译后生成的 css
.position {
  // ...
}
.position__icon {
  // ...
}
.position .position__notice {
  // ...
}
```

* css hack 避免图片下面内容的抖动

```scss
.banner {
  height: 0;
  overflow: hidden;
  // padding 的值为百分数时，是相对于容器的宽度 width 来计算的
  padding-bottom: 25.4%; // 这里 25.4% 是通过容器的 height/width 计算得到的
  &__img {
    width: 100%;
  }
}
```

* 组件的 [name](https://cn.vuejs.org/v2/api/#name) 属性会显示在 Vue.js devtools 这个浏览器插件中，方便调试
* [Trigger KeyDown event in older browsers with JS](https://stackoverflow.com/questions/65454502/trigger-keydown-event-in-older-browsers-with-js)
* [KeyboardEvent值（keyCodes，metaKey等）](https://blog.csdn.net/cunqu9743/article/details/107000814)

  ```js
  setTimeout(() => {
    key = "f12"
    keyCode = "123"
    window.dispatchEvent(new KeyboardEvent('keydown', {
        key, keyCode,
    }));
  }, 3000)
  ```

* [www.fastmock.site](https://www.fastmock.site/#/projects/6581)
* async route

  ```js
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  ```

* [watchEffect 它立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数](https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#watcheffect)
* transform, transform-origin
