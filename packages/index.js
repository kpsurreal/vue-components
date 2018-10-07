import XcButton from './button';
import XcRow from './row';
import XcCol from './col';
import XcCheckbox from './checkbox'
import XcCheckboxGroup from './checkbox-group'
import XcRadio from './radio'
import XcRadioGroup from './radio-group'
import XcInput from './input'
import XcTabs from './tabs'
import XcTabPane from './tab-pane'
import XcDialog from './dialog'
import XcTable from './table'
import XcTableColumn from './table-column'
import XcAutocomplete from './autocomplete'

const components = [
    XcButton, XcRow, XcCol, XcCheckbox, XcCheckboxGroup, XcRadio, XcRadioGroup, XcTabs, XcTabPane, XcDialog, XcTable, XcTableColumn, XcInput, XcAutocomplete
]

const install = function (Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    install,
    XcButton,
    XcRow,
    XcCol,
    XcCheckbox,
    XcCheckboxGroup,
    XcRadio,
    XcRadioGroup,
    XcTabs,
    XcTabPane,
    XcDialog,
    XcTable,
    XcTableColumn,
    XcInput,
    XcAutocomplete
  };