<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                tableData2: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>

# Table 表格
用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

----

### 基础表格
基础的表格展示用法。

<div class="demo-block">
    <xc-table :data="tableData" style="width: 100%">
        <xc-table-column
            prop="date"
            width="180"
            label="日期">
        </xc-table-column>
        <xc-table-column
            prop="name"
            width="180"
            label="姓名">
        </xc-table-column>
        <xc-table-column
            prop="address"
            label="地址">
        </xc-table-column>
    </xc-table>
</div>

::: demo
```html

<template>
   <xc-table :data="tableData" style="width: 100%" height="250">
        <xc-table-column
            prop="date"
            width="180"
            label="日期">
        </xc-table-column>
        <xc-table-column
            prop="name"
            width="180"
            label="姓名">
        </xc-table-column>
        <xc-table-column
            prop="address"
            label="地址">
        </xc-table-column>
    </xc-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>

```
:::


### 带边框表格

<div class="demo-block">
    <xc-table :data="tableData" style="width: 100%" border>
        <xc-table-column
            prop="date"
            width="180"
            label="日期">
        </xc-table-column>
        <xc-table-column
            prop="name"
            width="180"
            label="姓名">
        </xc-table-column>
        <xc-table-column
            prop="address"
            label="地址">
        </xc-table-column>
    </xc-table>
</div>


### 固定表头
纵向内容过多时，可选择固定表头。

<div class="demo-block">
    <xc-table :data="tableData2" style="width: 100%" height="230" border>
        <xc-table-column
            prop="date"
            width="180"
            label="日期">
        </xc-table-column>
        <xc-table-column
            prop="name"
            width="180"
            label="姓名">
        </xc-table-column>
        <xc-table-column
            prop="address"
            label="地址">
        </xc-table-column>
    </xc-table>
</div>


::: demo
```html

<template>
   <xc-table :data="tableData2" style="width: 100%" height="230" border>
        <xc-table-column
            prop="date"
            width="180"
            label="日期">
        </xc-table-column>
        <xc-table-column
            prop="name"
            width="180"
            label="姓名">
        </xc-table-column>
        <xc-table-column
            prop="address"
            label="地址">
        </xc-table-column>
    </xc-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData2: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>

```
:::


### Table Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | --------- | --------- |
| data | 显示的数据 | array | — | — |
| height | 固定表头 | string/number | — | — |


### Table-column Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | --------- | --------- |
| label | 显示的标题 | string | — | — |
| prop | 对应列内容的字段名，也可以使用 property 属性 | string | — | — |
| width | 对应列的宽度 | string | — | — |
| align | 对齐方式	 | string | left/center/right | left |