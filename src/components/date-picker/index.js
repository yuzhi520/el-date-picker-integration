import YzDatePicker from './src/picker/date-picker';

/* istanbul ignore next */
YzDatePicker.install = function install(Vue) {
  Vue.component(YzDatePicker.name, YzDatePicker);
};

export default YzDatePicker;
