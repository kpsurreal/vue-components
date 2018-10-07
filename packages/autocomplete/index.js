import XcAutocomplete from './src/autocomplete.vue'

XcAutocomplete.install = function(Vue) {
    Vue.compoennt('XcAutocomplete', XcAutocomplete.name);
}

export default XcAutocomplete;