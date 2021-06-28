import Vue from 'vue'

export default Vue.extend({
  name: 'rules',
  data() {
    return {
      required: (value: string) => !!value || 'Required.',
      min: (v: string) => v.length >= 8 || 'Min 8 characters',
      emailRules: (v: string) => /.+@.+\..+/.test(v) || 'Invalid e-mail',
    }
  }
})
