# 经纬度距离转球面距离问题

## Haversine公式

大致原理就是根据两个坐标的经纬度点和球心，三点定圆，计算圆心到两个点的距离，然后根据球面三角函数公式计算出球面距离。

半正矢公式(haversine equation)用于计算两经纬度点的距离，公式为：

$$
d = 2r \, argsin(\sqrt{\sin^2(\frac{lat2-lat1}{2})+\cos(lat1)\cos(lat2)\sin^2(\frac{lon2-lon1}{2})})
$$

python实现

```python
import numpy as np
def haversine(lon1, lat1, lon2, lat2):
    lon1, lat1, lon2, lat2 = map(np.radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = np.sin(dlat/2.0)**2 + np.cos(lat1) *np.cos(lat2)* np.sin(dlon/2.0)**2
    c = 2 *np.arcsin(np.sqrt(a))
    return c* 6367 * 1000
```

## 安装sklearn

实际上的包名 scikit-learn

```cmd
conda create -n sklearn-env -c conda-forge scikit-learn
conda activate sklearn-env
```
