import modal from './modal'

export default {
  install(Vue) {
    Vue.prototype.$modal = modal
  }
}
