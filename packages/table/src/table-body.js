export default {
    name: 'XcTableBody',

    render (h) {
        return (
            <table
            class="xc-table__body"
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
                <tbody>
                    {
                        this._l ( this.data, ( row, $index ) =>
                            <tr>
                                {
                                    this._l ( this.columns, column =>
                                        <td>
                                            <div class="cell">{ row[column.prop] }</div>
                                        </td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    },

    props: {
        store: {
            required: true
        }
    },

    computed: {
        columns() {
            return this.store.states.columns;
        },
        data() {
            return this.store.states.data;
        }
    }
}