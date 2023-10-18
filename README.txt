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

加粗需要在前后都留一个空格

外链播放相关——
禁止自动播放：src链接后加&autoplay=0
最高画质：同上加&high_quality=1

图片相关——
没摸索出本地相对路径加图片怎么搞，目前是使用base64编码
形式：
![Crying...][all] 
[all]:data:image/png;base64,iVBORw0...... （base64编码）

网站参考：https://c.runoob.com/front-end/59/