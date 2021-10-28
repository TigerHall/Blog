# TigerHall 的笔记本

## 功能介绍：

- 部分地球化学及大数据文献阅读
- 整理了一些地化笔记
- 地球化学外文书籍翻译

## 推荐阅读：

> [Dupal 笔记](Page/Notes/Dupal异常)

> [大数据文献](Page/Paper/地学大数据)

> [未施工翻译](Page/Books/海洋地球化学)

目前准备更新 Dupal 异常

## 使用提示

- 手机（屏幕较小）用户可点击屏幕左下角的 **侧边栏** 按钮，调出侧边目录栏查看各篇文章。

- 侧边栏顶部有 **搜索栏** ，可模糊搜索，到达你想要的内容。

## 更新摘要：

1. 创建了 Blog 页面
1. 定制侧边栏
1. 修改目录
1. 整理文件目录
1. 优化技术呈现路线

!> 目前内容还未核实，欢迎提出校对

## 本项目使用技术

开源项目 [docsify](https://github.com/docsifyjs/docsify/) 以及广大互联网上的公开资源

国内链接：

[![头像图片超链接](./assect/pic/head.jpg?small)](https://tigerhall.gitee.io)

#### Click to preview

<div class="demo-theme-preview">
  <a data-theme="vue">vue.css</a>
  <a data-theme="buble">buble.css</a>
  <a data-theme="dark">dark.css</a>
  <a data-theme="pure">pure.css</a>
</div>

<style>
  .demo-theme-preview a {
    padding-right: 10px;
  }

  .demo-theme-preview a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>

<script>
  var preview = Docsify.dom.find('.demo-theme-preview');
  var themes = Docsify.dom.findAll('[rel="stylesheet"]');

  preview.onclick = function (e) {
    var title = e.target.getAttribute('data-theme');

    themes.forEach(function (theme) {
      theme.disabled = theme.title !== title;
    });
  };
</script>

<br>

<!-- 访问量等信息 -->
<span id="busuanzi_container_site_pv" style='display:none'>
▶👀 总访问量：<span id="busuanzi_value_site_pv"></span> 次
</span>
<br>
<span id="busuanzi_container_site_uv" style='display:none'>
▶🚴‍♂️ 总访客数：<span id="busuanzi_value_site_uv"></span> 人
</span>
<br>
<span id="sitetime">
⏱️
</span>

<br>
<br>
