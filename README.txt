避免自己每次都忘记的步骤提醒：
1.文件夹下开cmd
2.hugo server 测试效果
3.hugo -D 生成public
4.git add . 添加变化
5.git commit -m "爱填啥填啥" 生成commit
6.git push

*push没成功测试ssh：ssh -T git@github.com

还有一点小细节——
空格：&nbsp;
换行：<br>
 
**有时候<br>莫名其妙换两行就用<p>

加粗需要在前后都留一个空格（现在好像不是

外链播放相关——
禁止自动播放：src链接后加&autoplay=0
最高画质：同上加&high_quality=1

.md 预设frontmatter相关——
APlayer设置，这里默认网易云
为了编写时的渲染效率，最后再添加
audio:
  type: song/list/album  单曲/歌单/专辑
  id: 1821726196 看网址的编号串
为了方便seo，尽量把description填多一点
自动生成不同文件夹的默认.md
hugo new 文件夹名/文件名.md
例如:
hugo new blog/blog-post.md
hugo new life/test.md
每个文件夹的frontmatter可以自定义，在archetypes/文件夹里修改

图片相关——
没摸索出本地相对路径加图片怎么搞，目前是使用base64编码
形式：
![Crying...][all] 
[all]:data:image/png;base64,iVBORw0...... （base64编码）
网站参考：https://c.runoob.com/front-end/59/

更新：
把图片放进本地static/img文件夹
参考十一月总结，插入形式：
<p><img style="box-shadow: 12px 12px 2px 1px rgba(129,164,71,.2);" src="/img/snow.jpg" alt="NoUmbrella">
<br>

