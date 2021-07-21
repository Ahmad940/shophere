import {Vue, Component} from "nuxt-property-decorator";

@Component({
  name: 'rules',
  data() {
    return {
      required: (value: string) => !!value || 'Required.',
      switchValidator: (v: any) => !!v || 'Must accept terms and condition',
      min: (v: string) => v.length >= 8 || 'Min 8 characters',
      emailRules: (v: string) => /.+@.+\..+/.test(v) || 'Invalid e-mail',
      phoneValidation: (v: any) => v?.length === 11 || 'Number must be 11 digits',
      passwordMatch: (value: string, password: string) => value === password || 'Password does not match'
    }
  }
})
export default class extends Vue{

}


