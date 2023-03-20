import toast from '../toast.vue'

const install = (Vue) => {
  let ToastC = Vue.extend(toast)
  let instance = new ToastC()
  instance.$mount(document.createElement('div'))
  document.body.append(instance.$el)
  Vue.prototype.$toast = (msg, duration = 1000, effect = 'fade') => {
    instance.message = msg 
    instance.visible = true
    instance.effect = effect
    setTimeout(() => {
      instance.visible = false
    }, duration)
  }
}
export default {
  install
}