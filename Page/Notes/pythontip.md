# python 优化小笔记

如果你要对大量的三位小数的数据进行计算，你可以考虑以下的方法来减少内存消耗：

- 你可以使用numpy库，它是一个用于科学计算的Python库，它可以高效地处理多维数组和矩阵。numpy数组是一种类似于Python列表的数据结构，但是它可以存储相同类型的数据，并且占用的内存空间更小。你可以参考[numpy]或者[Python Numpy教程]来了解更多关于numpy库和numpy数组的用法和原理。
- 你可以使用np.float16这个数据类型，它可以表示一个16位的浮点数，也就是有符号的小数。它的范围是[-65504, 65504]，它的精度大约是3.3位小数。这样可以节省一半的内存空间，相比于默认的np.float64数据类型，它可以表示一个64位的浮点数，也就是有符号的小数。它的范围是[-1.8e308, 1.8e308]，它的精度大约是15.9位小数。你可以参考[Data types]或者[Python Numpy数据类型]来了解更多关于numpy数据类型的用法和原理。
- 你可以使用np.save()和np.load()函数，它们可以将numpy数组保存到文件中，并从文件中读取numpy数组。这样可以避免在内存中同时存储过多的数据，而是按需加载所需的数据。你可以参考[numpy.save]或者[Python numpy.save()用法及实例]来了解更多关于np.save()函数的用法和原理。你可以参考[numpy.load]或者[Python numpy.load()用法及实例]来了解更多关于np.load()函数的用法和原理。

## 命令行笔记

```bash
# “requirements_conda.txt”为一个txt文件，txt中的内容即为要安装的python依赖包名。

conda install --file=requirements_conda.txt
```

```bash
# 检验是否安装及当前conda的版本
conda -V

# 查看安装了哪些包
conda list

# 创建一个虚拟环境，其中env_name是自定义的虚拟环境名字，python=x.x指定python版本
conda create -n env_name python=x.x

# 查看当前存在哪些虚拟环境
conda env list 或者 conda info -e

# 进入虚拟环境
conda activate en_name 或者 source activate env_name

# 进入虚拟环境后使用如下指令可以只在当前环境中安装删除包
conda install pkg_name 
conda uninstall pkg_name
pip install pkg_name
pip uninstall pkg_name

# 退出当前虚拟环境
conda deactivate 或者 source deactivate

# 删除虚拟环境
conda remove -n env_name --all
```
