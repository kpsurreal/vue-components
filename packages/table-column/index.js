import XcTableColumn from '../table/src/table-column';

XcTableColumn.install = function(Vue) {
  Vue.component(XcTableColumn.name, XcTableColumn);
};

export default XcTableColumn;