class TableLayout {
    constructor(options) {
        this.table = null;
        this.store = null;
        this.columns = null;
        this.bodyWidth = null;
        this.bodyHeight = null;
        this.tableHeight = null;

        for ( let name in options ) {
            if ( options.hasOwnProperty( name )  ) {
                this[name] = options[name];
            }
        }
    }

    setHeight ( value, prop = 'height' ) {
        const el = this.table.$el;
        if (typeof value === 'string' && /^\d+$/.test(value)) {
          value = Number(value);
        }
    
        this.height = value;

        if (!el) return;
        if (typeof value === 'number') {
            el.style[prop] = value + 'px';
    
            this.updateHeight();
        } else if (typeof value === 'string') {
            if (value === '') {
                el.style[prop] = '';
            }
            this.updateHeight();
        }
    }

    updateHeight () {
        const height = this.tableHeight = this.table.$el.clientHeight;
        const noData = !this.table.data || this.table.data.length === 0;
        const { headerWrapper } = this.table.$refs;
        
        const headerHeight = this.headerHeight = headerWrapper.offsetHeight;
        const bodyHeight = height - headerHeight;

        if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
                this.bodyHeight = bodyHeight;
        }
        
    }

    update () {
        const columns = this.table.columns;
        const bodyWidth = this.table.$el.clientWidth;
        let bodyMinWidth = 0;

        const flattenColumns = [];
        columns.forEach((column) => {
            flattenColumns.push(column);
        })

        let flexColumns = flattenColumns.filter((column) => typeof column.width !== 'number');

        if (flexColumns.length > 0 ) {
            flattenColumns.forEach((column) => {
                bodyMinWidth += column.width || 80;
            });
            if(bodyMinWidth <= bodyWidth) {
                const totalFlexWidth = bodyWidth - bodyMinWidth;

                if (flexColumns.length === 1) {
                    flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
                }else{
                    const allColumnsWidth = flexColumns.reduce((prev, column) => prev + (column.minWidth || 80), 0);
                    const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
                    let noneFirstWidth = 0;

                    flexColumns.forEach((column, index) => {
                        if (index === 0) return;
                        const flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
                        noneFirstWidth += flexWidth;
                        column.realWidth = (column.minWidth || 80) + flexWidth;
                    });

                    flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
                }
            }else{
                flexColumns.forEach(function(column) {
                    column.realWidth = column.minWidth;
                });
            }

            this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
        }
    }
}

export default TableLayout;