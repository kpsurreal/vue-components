<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                outerVisible: false,
                innerVisible:  false,
                radio2: 3
            }
        },
        methods: {
            handleClose(done) {
                let result = confirm("确定关闭吗？");
                if(result) done();
            },
            open() {},
            close() {}
        }
    };
</script>

# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

----

### 基础用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。

<div class="demo-block">
    <xc-button type="text" @click="dialogVisible = true">点击打开 Dialog</xc-button>
    <xc-dialog
        title="提示"
        @open="open"
        @close="close"
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        align="center"
        width="50%">
        <div>
            <xc-button keyboard="1">演示按钮</xc-button>
            <xc-button keyboard="2">演示按钮</xc-button>
            <xc-button keyboard="3">演示按钮</xc-button>
            <xc-button keyboard="4">演示按钮</xc-button>
        </div>
        <div style="margin-top: 20px">
            <xc-input placeholder="请输入内容" keyboard="5"></xc-input>
        </div>
        <div style="margin-top: 20px">
            <xc-radio-group v-model="radio2" keyboard="6">
                <xc-radio :label="3">备选项</xc-radio>
                <xc-radio :label="6">备选项</xc-radio>
                <xc-radio :label="9">备选项</xc-radio>
                <xc-radio :label="12" disabled>备选项</xc-radio>
            </xc-radio-group>
        </div>
        <span slot="footer" class="dialog-footer">
        <xc-button type="warning" @click="dialogVisible = false" keyboard="7">确 定</xc-button>
  </span>
    </xc-dialog>
</div>

::: demo
```html

<template>
   <xc-button type="text" @click="dialogVisible = true">点击打开 Dialog</xc-button>
    <xc-dialog
        title="提示"
        @open="open"
        @close="close"
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        align="center"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
        <xc-button @click="dialogVisible = false">取 消</xc-button>
        <xc-button type="primary" @click="dialogVisible = false">确 定</xc-button>
  </span>
    </xc-dialog>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false
            }
        },
        methods: {
            handleClose(done) {
                let result = confirm("确定关闭吗？");
                if(result) done();
            },
            open() {},
            close() {}
        }
    };
</script>

```
:::

### 嵌套的 Dialog
如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。

<div class="demo-block">
    <xc-button type="text" @click="outerVisible = true">点击打开外层 Dialog</xc-button>
    <xc-dialog title="外层 Dialog" :visible.sync="outerVisible">
        <xc-button keyboard="1">演示按钮</xc-button>
        <xc-button keyboard="2">演示按钮</xc-button>
        <xc-button keyboard="3">演示按钮</xc-button>
        <xc-button keyboard="4">演示按钮</xc-button>
        <xc-dialog
            width="30%"
            title="内层 Dialog"
            append-to-body
            :visible.sync="innerVisible">
                <xc-button keyboard="1">演示按钮</xc-button>
                <xc-button keyboard="2">演示按钮</xc-button>
        </xc-dialog>
        <span slot="footer" class="dialog-footer">
            <xc-button @click="outerVisible = false">取 消</xc-button>
            <xc-button type="primary" @click="innerVisible = true">打开内层 Dialog</xc-button>
        </span>
    </xc-dialog>
</div>

::: demo
```html

<template>
    <xc-button type="text" @click="outerVisible = true">点击打开外层 Dialog</xc-button>
    <xc-dialog title="外层 Dialog" :visible.sync="outerVisible">
        <xc-dialog
       width="30%"
       title="内层 Dialog"
       append-to-body
       :visible.sync="innerVisible">
        </xc-dialog>
        <span slot="footer" class="dialog-footer">
            <xc-button @click="outerVisible = false">取 消</xc-button>
            <xc-button type="primary" @click="innerVisible = true">打开内层 Dialog</xc-button>
        </span>
    </xc-dialog>
</template>

<script>
    export default {
        data() {
            return {
                outerVisible: false,
                innerVisible:  false
            }
        }
    };
</script>

```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | --------- | --------- |
| visible | 是否显示 Dialog，支持 .sync 修饰符| boolean | — | false |
| title | Dialog 的标题,也可通过具名 slot 传入 | string |  —  |  —  |
| top  | Dialog CSS 中的 margin-top 值 | string | — | 15vh |
| width  | Dialog 的宽度 | string | — |  50%  |
| modal  | 是否需要遮罩层 | boolean | — |  true  |
| lock-scroll  | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | — |  true  |
| show-close  | 是否显示关闭按钮 | boolean | — |  true  |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog | boolean | — |  true  |
| before-close  | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — |  —  |

### Slot
| name | 说明 |
| ------ | ------ |
| — | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |

### Events
| 事件名称 | 说明 | 回调参数 
| ------ | ------ | ------ |
| close | Dialog 关闭的回调 | — |
| open | Dialog 打开的回调 | — |

