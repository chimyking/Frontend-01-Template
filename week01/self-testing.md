# 入学自评

## 1. 编写一个 DOM 编辑器：可以自由地操作一个 iframe（空白）中的 DOM 结构，包括增、删、移动

## 2. 讲讲 position float display 各有哪些取值，它们互相之间会如何影响

### [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

- static

  默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）

- relative

  该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-\*-group, table-row, table-column, table-cell, table-caption 元素无效。

- absolute

  元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。

- fixed

  元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。

- sticky

  元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括 table-related 元素，基于 top, right, bottom, 和 left 的值进行偏移。偏移值不会影响任何其他元素的位置。

  该值总是创建一个新的层叠上下文（stacking context）。注意，一个 sticky 元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的 overflow 是 hidden, scroll, auto, 或 overlay 时），即便这个祖先不是真的滚动祖先。

### [float](https://developer.mozilla.org/zh-CN/docs/CSS/float)

float CSS 属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性（与绝对定位相反）。
使用了 float,元素将升级为块元素

不管一个元素是行内元素还是块级元素，如果被设置了浮动，那浮动元素会生成一个块级框，可以设置它的 width 和 height，因此 float 常常用于制作横向配列的菜单，可以设置大小并且横向排列。

- left

  表明元素必须浮动在其所在的块容器左侧的关键字。

- right

  表明元素必须浮动在其所在的块容器右侧的关键字。

- none

  表明元素不进行浮动的关键字。

- inline-start

  关键字，表明元素必须浮动在其所在块容器的开始一侧，在 ltr 脚本中是左侧，在 rtl 脚本中是右侧。

- inline-end

  关键字，表明元素必须浮动在其所在块容器的结束一侧，在 ltr 脚本中是右侧，在 rtl 脚本中是左侧。

那么它有什么特点呢

- 对自身的影响
  - float 元素可以形成块，如 span 元素。可以让行内元素也拥有宽和高，因为块级元素具有宽高
  - 浮动元素的位置尽量靠上
  - 尽量靠左（float:left）或右（float:right），如果那一行满足不了浮动元素的宽度要求，则元素会往下掉
- 对兄弟元素的影响
  - 不影响其他块级元素的位置
  - 影响其他块级元素的文本
  - 上面贴非 float 元素
  - 旁边贴 float 元素或者边框
- 对父级元素的影响
  - 从布局上 “消失”
  - 高度塌陷

## display

- inline
- none
- block
- inline-block
- list-item
- run-in
- table
- inline-table
- table-row-group
- table-header-group
- table-footer-group
- table-row
- table-column-group
- table-column
- table-cell
- table-caption
- inherit

## 3. JavaScript 启动后，内存中有多少个对象？如何用代码来获得这些信息

## 4. HTML 的中，如何写一个值为 “a”=‘b’ 的属性值

## 5. 编写一个快速排序代码，并且用动画演示它的过程

## 6. 知识点延伸

### 6.1 清除浮动的方法

1、针对子元素：给浮动的子元素后面再加一个元素，加上一个 clear：both 属性即可正常显示，缺点是随意添加了一个空元素，不符合代码规范

2、针对父元素：给父元素后面添加一个相邻的空元素，设置 clear 属性，但只是让后面的元素正常显示，并没有撑开父元素的高度

3、针对父元素：给父元素设置高度，可以正常显示，但扩展性不好，因为一般都是由里面的内容来撑开高度

4、针对父元素：给父元素设置 display: inline-block，可以正常显示，但父元素的 margin：auto 失效了，而且会发现上下两个部分会出现间隙

5、针对父元素：给父元素设置 overflow: hidden，可以正常显示了，但需要配合宽度，否则会默认占满一行。
方法 1：在父级结束前，添加一个子标签<div style="clear:both;"></div>
方法 2：在父级 css 属性加上入 overflow:hidden;zoom:1;或者 overflow:auto;zoom:1;

方法 3：在父级用 zoom+:after 方法，原理类似于 clear:both,利用 CSS 方式：after 在元素内部加一个 clear:both 的元素块
方法 4：对父级设置合适的高度直接撑开

1）<div style=”clear:both”></div>可以很好的解决浮动的 2，3 问题

增加了一个额外的元素，这是一个弊端，会使得 html 页面结构看起来不够简洁。

2）该方法比较好。可以很好的解决第一种浮动问题

```2

#parent:after{

content:’.’;

height:0;

visibility:hidden;

display:block;

clear:both;
}
```

3）让 overflow 设置为 hidden 或 auto

给包含浮动元素的父标签添加 css 属性。

overflow:auto;

zoom:1;<可以兼容 ie6>
————————————————
版权声明：本文为 CSDN 博主「幸福璐」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/lululul123/java/article/details/76168360

上下排列：

- 利用 clear 属性清除 float 浮动
  嵌套排列：
- 宽高固定：不推荐，不能把高度固定死，不适合做自适应的效果。
- 父元素浮动：不推荐，因为父容器浮动也会影响到后面的元素。
- overflow：hidden(BFC 规范)，如果柚子元素溢出，那么会受到影响。
- display：inline-block(BFC 规范)，不推荐，父容器会影响到后面的元素。
- 设置空标签：不推荐，会多添加一个标签。
- after 伪类：推荐，是空标签的加强版。

清除浮动的几种方法：

1）`<div style=”clear:both”></div>`可以很好的解决浮动的 2，3 问题

增加了一个额外的元素，这是一个弊端，会使得 html 页面结构看起来不够简洁。

2）该方法比较好。可以很好的解决第一种浮动问题

```s
  #parent:after{
    content:’.’;
    height:0;
    visibility:hidden;
    display:block;
    clear:both;
  }
```

3）让 overflow 设置为 hidden 或 auto

给包含浮动元素的父标签添加 css 属性。

overflow:auto;

zoom:1;<可以兼容 ie6>
————————————————
版权声明：本文为 CSDN 博主「幸福璐」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/lululul123/java/article/details/76168360

### 6.2 BFC

### 6.3 margin 重叠 及防止方法

[margin 重叠 及防止方法](https://blog.csdn.net/qq_37977455/article/details/83246332)

### 6.4 关于 position 使用一般会引发的问题

1.假如有一个默认 100%宽度的 div,一旦加上 absolute 绝对定位，该元素立马 inline-block 化，默认宽度就会自适应元素内部宽度，会导致页面的宽高塌陷。

2.由于 absolute 绝对定位的灵活性，对于普通的页面布局，有时出于省事的原因很容易造成 absolute/relative/top/left/z-index 的滥用,这样会使后期的扩展和维护造成麻烦

浮动元素会引起的问题：

1）父元素的高度无法撑开，影响与父元素的同级元素。

2）与浮动元素同级的非浮动元素（内联元素）会跟随其后。

3）若非第一个元素浮动，则该元素之前的元素也需要跟随其后，否则会影响页面的显示的结构。

[5.深入浮动原理&布局&7 种清浮动](https://blog.csdn.net/u010567918/article/details/79235360?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-7&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-7)
[CSS float 相关详解](https://www.jianshu.com/p/553dab79cb12)
