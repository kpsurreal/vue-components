import Vue from 'vue';

const TableStore = function ( table, initialState = {} ) {
    if (!table) {
        throw new Error('Table is required.');
    }
    this.table = table;

    this.states = {
        columns: [],
        data: null
    }

    for ( let prop in initialState ) {
        if ( initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop) ) {
            this.states[prop] = initialState[prop];
        }
    }
}

TableStore.prototype.mutations = {
    setData(states, data) {
        states.data = data;
    },
    insertColumn( states, column ) {
        states.columns.push(column)
    }
}

TableStore.prototype.commit = function ( name, ...args ) {
    const mutations = this.mutations;
    if ( mutations[name] ) {
        mutations[name].apply( this, [this.states].concat(args) )
    } else {
        throw new Error(`Action not found: ${name}`);
    }
}

export default TableStore;