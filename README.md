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
* scss &

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
