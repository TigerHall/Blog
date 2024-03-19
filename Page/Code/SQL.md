# SQL代码小计

## PostgreSQL常用（shell）

```shell
# 列出数据库
\l
# 进入数据库
\c 数据库名

# 查看架构
\dn
# 查看有那些数据表
\dt my_schema.my_table
# 查看数据表结构
\d *.*

# q退出多行结果
# 多列可以使用修饰模式查看数据表结构
\x

# 注意Schema 修饰：在 shell 中，如果您没有使用 schema 修饰，直接输入 \d 命令，它只会显示当前数据库中不使用 schema 修饰的关系（表、视图、索引、序列）。如果您的表使用了 schema 修饰，您需要在 \d 命令后面加上表名，例如：\d my_schema.my_table。
```

```shell
# 官方说明
一般性
  \bind [PARAM]...       set query parameters
  \copyright             显示PostgreSQL的使用和发行许可条款
  \crosstabview [COLUMNS] execute query and display result in crosstab
  \errverbose            以最冗长的形式显示最近的错误消息
  \g [(OPTIONS)] [FILE]  execute query (and send result to file or |pipe);
                         \g with no arguments is equivalent to a semicolon
  \gdesc                 描述查询结果，而不执行它
  \gexec                 执行策略，然后执行其结果中的每个值
  \gset [PREFIX]         execute query and store result in psql variables
  \gx [(OPTIONS)] [FILE] 就像\g,但强制扩展输出模式
  \q                     退出 psql
  \watch [[i=]SEC] [c=N] execute query every SEC seconds, up to N times

帮助
  \? [commands]          显示反斜线命令的帮助
  \? options             显示 psql 命令行选项的帮助
  \? variables           显示特殊变量的帮助
  \h [NAME]              SQL命令语法上的说明，用*显示全部命令的语法说明

查询缓存区
  \e [FILE] [LINE]       使用外部编辑器编辑查询缓存区(或文件)
  \ef [FUNCNAME [LINE]]  使用外部编辑器编辑函数定义
  \ev [VIEWNAME [LINE]]  用外部编辑器编辑视图定义
  \p                     显示查询缓存区的内容
  \r                     重置(清除)查询缓存区
  \w 文件                将查询缓存区的内容写入文件

输入/输出
  \copy ...              执行 SQL COPY，将数据流发送到客户端主机
  \echo [-n] [STRING]    将字符串写到标准输出(-n表示没有换行符)
  \i 文件                从文件中执行命令
  \ir FILE               与 \i类似, 但是相对于当前脚本的位置
  \o [文件]              将全部查询结果写入文件或 |管道
  \qecho [-n] [STRING]   将字符串写入\o输出流(-n表示无换行)
  \warn [-n] [STRING]    将字符串写入标准错误(-n 表示无换行)

条件
  \if EXPR               开始条件块
  \elif EXPR             当前条件块内的备选方案
  \else                  当前条件块内的最终备选方案
  \endif                 条件块的结尾

资讯性
  (选项: S = 显示系统对象, + = 其余的详细信息)
  \d[S+]                 列出表,视图和序列
  \d[S+]  名称           描述表，视图，序列，或索引
  \da[S]  [模式]         列出聚合函数
  \dA[+]  [模式]         列出访问方法
  \dAc[+] [AMPTRN [TYPEPTRN]]  列出运算符
  \dAf[+] [AMPTRN [TYPEPTRN]]  列出运算符集合
  \dAo[+] [AMPTRN [OPFPTRN]]   列出运算符集合
  \dAp[+] [AMPTRN [OPFPTRN]]   列出运算符集合所支持的功能
  \db[+]  [模式]         列出表空间
  \dc[S+] [模式]         列表转换
  \dconfig[+] [PATTERN]  list configuration parameters
  \dC[+]  [模式]         列出类型强制转换
  \dd[S]  [模式]         显示没有在别处显示的对象描述
  \dD[S+] [模式]         列出共同值域
  \ddp    [模式]         列出默认权限
  \dE[S+] [模式]         列出引用表
  \des[+] [模式]         列出外部服务器
  \det[+] [模式]         列出引用表
  \deu[+] [模式]         列出用户映射
  \dew[+] [模式]         列出外部数据封装器
  \df[anptw][S+] [FUNCPTRN [TYPEPTRN ...]]
                         列出 [only agg/normal/procedure/trigger/window] 函数
  \dF[+]  [模式]         列出文本搜索配置
  \dFd[+] [模式]         列出文本搜索字典
  \dFp[+] [模式]         列出文本搜索解析器
  \dFt[+] [模式]         列出文本搜索模版
  \dg[S+] [模式]         列出角色
  \di[S+] [模式]         列出索引
  \dl[+]                 list large objects, same as \lo_list
  \dL[S+] [模式]         列出所有过程语言
  \dm[S+] [模式]         列出所有物化视图
  \dn[S+] [模式]         列出所有模式
  \do[S+] [OPPTRN [TYPEPTRN [TYPEPTRN]]]
                         列出运算符
  \dO[S+] [模式]         列出所有校对规则
  \dp[S]  [PATTERN]      list table, view, and sequence access privileges
  \dP[itn+] [PATTERN]    列出[仅表/索引]分区关系[n=nested]
  \drds [ROLEPTRN [DBPTRN]] list per-database role settings
  \drg[S] [PATTERN]      list role grants
  \dRp[+] [模式]         列出复制发布
  \dRs[+] [模式]         列出复制订阅
  \ds[S+] [模式]         列出序列
  \dt[S+] [模式]         列出表
  \dT[S+] [模式]         列出数据类型
  \du[S+] [模式]         列出角色
  \dv[S+] [模式]         列出视图
  \dx[+]  [模式]         列出扩展
  \dX     [PATTERN]      列出扩展统计信息
  \dy[+]  [PATTERN]      列出所有事件触发器
  \l[+]   [模式]         列出所有数据库
  \sf[+]  FUNCNAME       显示一个函数的定义
  \sv[+]  VIEWNAME       显示一个视图的定义
  \z[S]   [PATTERN]      same as \dp

大对象
  \lo_export LOBOID FILE write large object to file
  \lo_import FILE [COMMENT]
                         read large object from file
  \lo_list[+]            list large objects
  \lo_unlink LOBOID      delete a large object

格式化
  \a                     在非对齐模式和对齐模式之间切换
  \C [字符串]            设置表的标题，或如果没有的标题就取消
  \f [字符串]            显示或设定非对齐模式查询输出的字段分隔符
  \H                     切换HTML输出模式 (目前是 关闭)
  \pset [NAME [VALUE]]   设置表输出选项
                         (border|columns|csv_fieldsep|expanded|fieldsep|
                         fieldsep_zero|footer|format|linestyle|null|
                         numericlocale|pager|pager_min_lines|recordsep|
                         recordsep_zero|tableattr|title|tuples_only|
                         unicode_border_linestyle|unicode_column_linestyle|
                         unicode_header_linestyle
  \t [开|关]             只显示记录 (目前是关闭)
  \T [字符串]            设置HTML <表格>标签属性, 或者如果没有的话取消设置
  \x [on|off|auto]       切换扩展输出模式(目前是 关闭)

连接
  \c[onnect] {[DBNAME|- USER|- HOST|- PORT|-] | conninfo}
                         连接到新数据库（当前是"zjlab"）
  \conninfo              显示当前连接的相关信息
  \encoding [编码名称]   显示或设定客户端编码
  \password [USERNAME]   安全地为用户更改口令

操作系统
  \cd [目录]             更改目前的工作目录
  \getenv PSQLVAR ENVVAR fetch environment variable
  \setenv NAME [VALUE]   设置或清空环境变量
  \timing [开|关]        切换命令计时开关 (目前是关闭)
  \! [命令]              在 shell中执行命令或启动一个交互式shell

变量
  \prompt [文本] 名称    提示用户设定内部变量
  \set [名称 [值数]]     设定内部变量，若无参数则列出全部变量
  \unset 名称            清空(删除)内部变量
```

## 创建表

```sql
CREATE TABLE 表名 (
    列名1 数据类型1,
    列名2 数据类型2,
    ...
);

-- 插入数据
INSERT INTO 表名 (列名1, 列名2, ...) VALUES (值1, 值2, ...);
-- 查看所有架构
SELECT * FROM information_schema.schemata;
-- 更新数据
UPDATE 表名
SET 列名1 = 值1, 列名2 = 值2, ...
WHERE 条件;
-- 删除数据
DELETE FROM 表名 WHERE 条件;

-- 查询数据
SELECT 列名1, 列名2, ...
FROM 表名
WHERE 条件;

```
