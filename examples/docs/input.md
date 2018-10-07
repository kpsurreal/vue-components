<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>

# Input 输入框
通过鼠标或键盘输入字符

----

### 基础用法

<div class="demo-block">
    <xc-input v-model="input" placeholder="请输入内容"></xc-input>
</div>

### 禁用状态

<div class="demo-block">
    <xc-input 
        v-model="input" 
        placeholder="请输入内容" 
        :disabled="true">
    </xc-input>
</div>

### 带输入建议
根据输入内容提供对应的输入建议

<div class="demo-block">
    <xc-autocomplete></xc-autocomplete>
</div>