export default {
    name: 'XcTableHeader',

    render (h) {
        return (
            <table
                class="xc-table__header"
                cellspacing="0"
                cellpadding="0"
                border="0">
                <colgroup>
                    {
                        this._l ( this.columns, columns => 
                            <col 
                                width={ columns.realWidth }
                            />
                        )
                    }
                </colgroup>
                <thead>
                    <tr>
                        {
                            this._l ( this.columns, columns =>
                                <th>
                                    <div class="cell">{ columns.label }</div>
                                </th>
                            )
                        }
                    </tr>
                </thead>
            </table>
        )
    },
    props: {
        store: {
            required: true
        },
        border: Boolean,
    },

    computed: {
        columns() {
            return this.store.states.columns;
        }
    }
}