# CSS笔记

```CSS
img{
    /* 令图片注释不同于正文 */
    font-style:italic;/*斜体*/

    /* 可添加模糊背景图，以达到先加载模糊图片的效果 */
    background-repeat:no-repeat;/*背景不重复*/
    background-size:cover;/*背景填充整个元素*/

    /* 令图片有形状边距，如圆形的 */
    shape-margin:1rem;/*形状边框10px*/

    /* 默认设置应对大尺寸图片等 */
    max-width:100%;/*图片最大宽度*/
    height:auto;/*图片高度自适应*/

    /* 方便文字对齐等，避免使用Block布局 */
    vertical-align:middle;/*图片垂直居中*/
}
```
