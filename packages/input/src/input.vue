<template>
    <div
        class="xc-input"
        :class="[
           {
                'is-disabled': disabled
           }
        ]"
    >
        <input type="text"
            :data-keyboard="keyboard"
            class="xc-input__inner"
            v-bind="$props"
            v-model="currentValue" />
    </div>
</template>

<script>
    export default {
        name: 'XcInput',

        props: {
            value: [String, Number],
            placeholder: String,
            disabled: Boolean,
            keyboard: String
        },

        computed: {
            currentValue: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }
            }
        }
    }
</script>