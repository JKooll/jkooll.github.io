# 开发过程中遇到的问题
## 软件版本号
https://baike.baidu.com/item/软件版本号/

## 给网站添加manifest.json文件的方法
```html
<link rel="manifest" href="manifest.json">
```
https://segmentfault.com/a/1190000007754136

## 网站使用HTTPS
- Let's Encrypt

- apache2开启模块
sudo a2enmod rewrite

- 参考
https://laravel-china.org/articles/2766/lets-encrypt-the-site-of-the-encrypted-tour
https://www.cnblogs.com/vincentfu/p/5721374.html

## 搜索引擎链接提交入口
- https://ziyuan.baidu.com/linksubmit/url
- http://info.so.360.cn/site_submit.html
- http://fankui.help.sogou.com/index.php/web/web/index?type=4
- https://www.bing.com/toolbox/submit-site-url
- https://www.google.com/intl/zh-CN/submit_content.html

## 安卓设备上使用chrome远程调试功能
http://wiki.jikexueyuan.com/project/chrome-devtools/remote-debugging-on-android.html

## 升级npm和node
```bash
npm -g install npm@next
```
```bash
npm cache clean -f
npm install -g n
n stable
```

https://segmentfault.com/a/1190000009025883

## virtual box 开启虚拟机电脑蓝屏
virtual box和Hyper-V冲突，关闭Hyper-V即可
但是使用Docker需要开启Hyper-V

http://blog.csdn.net/shouldnotappearcalm/article/details/54974075

## MS Word每页设置单独页码
通过布局 => 分隔符 => 下一页，将每页隔离成单节，然后就可以设置单独页码

https://support.office.com/zh-cn/article/%E5%88%A0%E9%99%A4%E6%88%96%E6%9B%B4%E6%94%B9%E9%A1%B5%E7%9C%89%E6%88%96%E5%8D%95%E4%B8%AA%E9%A1%B5%E9%9D%A2%E4%B8%8A%E7%9A%84%E9%A1%B5%E8%84%9A-a9b6c963-a3e1-4de1-9142-ca1be1dba7ff

## SVG整体任意自动缩放
https://www.douban.com/note/271260021/

## tp5 打印sql语句
```php
db('db_name')->getlastsql();
User::get(1);
```

http://www.zhaisui.com/article/46.html

## Sublime -- 更换换行符
http://wenda.reqianduan.com/question/58

## Apache -- 创建虚拟目录和虚拟主机
http://www.cnblogs.com/lzrabbit/archive/2013/03/05/2944804.html

## Apache -- 隐藏目录结构
1. 在根目录下添加默认页面 -- index.html index.php
2. 修改apache配置文件 -- httpd.conf
Options Indexes (FollowSymLinks)
 //删除Indexs/或者改为  Options FollowSymLinks MultiViews

## Apache -- 更改虚拟配置
1. 修改httpd.conf或apache2.conf
2. 修改sites-enabled.conf