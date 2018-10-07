import objectAssign from '../../../src/utils/merge';

const defaults = {
    default: {
        order: ''
    }
}

const getDefaultColumn = function(type, options) {
    const column = {};

    objectAssign(column, defaults[type || 'default']);

    Object.keys(options).forEach(name => {
        const value = options[name];
        if(typeof value !== 'undefined') {
            column[name] = value;
        }
    })

    if ( !column.minWidth ) {
        column.minWidth = 80;
    }

    column.realWidth = column.width || column.minWidth;

    return column;
}

const DEFAULT_RENDER_CELL = function(h, { row, column }) {
    
}

export default {
    name: 'XcTableColumn',

    props: {
        type: {
            type: String,
            default: 'default'
        },
        label: String,
        prop: String,
        width: {},
        minWidth: {}
    },

    created() {
        this.$options.render = h => h('div', this.$slots.default);

        let type = this.type;

        let width = this.width;
        if ( width !== undefined ) {
            width = parseInt(width, 10);
            if ( isNaN(width) ) {
                width = null;
            }
        }

        let minWidth = this.minWidth;
        if( minWidth !== undefined ) {
            minWidth = parseInt(minWidth, 10);
            if( isNaN(minWidth) ) {
                minWidth = 80;
            }
        }

        let column = getDefaultColumn( type, {
            label: this.label,
            prop: this.prop,
            width,
            minWidth
        })

        this.columnConfig = column;
    },

    mounted() {
        const parent = this.$parent;
        let columnIndex;
        columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
        parent.store.commit( 'insertColumn', this.columnConfig )
    }
}