<template>
    <div class="xc-table"
        :class="[{
            'xc-table--border': border
        }]"
    >
        <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
        <div class="xc-table__header-wrapper" ref="headerWrapper">
            <table-header
                ref="tableHeader"
                :store="store"
                :border="border"
                :style="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }">>
            </table-header>
        </div>
        <div class="xc-table__body-wrapper" ref="bodyWrapper" :style="[bodyHeight]">
            <table-body
                :style="{ width: bodyWidth }"
                :store="store">
            </table-body>
        </div>
    </div>
</template>

<script>
    import TableStore from './table-store';
    import TableLayout from './table-layout';
    import TableHeader from './table-header'
    import TableBody from './table-body'

    export default {
        name: 'XcTable',

        components: {
            TableHeader,
            TableBody
        },

        props: {
            data: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            height: [String, Number],
            border: Boolean
        },

        watch: {
            data: {
                immediate: true,
                handler(val) {
                    this.store.commit('setData', val);
                    if (this.$ready) {
                        this.$nextTick(() => {
                            this.doLayout();
                        });
                    }
                }
            }
        },

        computed: {
            columns() {
                return this.store.states.columns;
            },
            bodyWidth() {
                const { bodyWidth } = this.layout;
                return bodyWidth ? bodyWidth + 'px' : '';
            },
            bodyHeight() {
                let style = {};

                if ( this.height ) {
                    style = {
                        height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
                    }
                }

                return style;
            }
        },

        methods: {
            doLayout() {
                this.layout.update();
                this.$nextTick(() => {
                    if ( this.height ) {
                        this.layout.setHeight(this.height);
                    }
                })
            }
        },

        mounted() {
            this.doLayout();
        },

        data() {
            const store = new TableStore( this, {} )
            const layout = new TableLayout({
                store,
                table: this
            });
            return {
                store,
                layout
            }
        }
    }
</script>