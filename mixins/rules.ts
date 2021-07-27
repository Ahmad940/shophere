import {Vue, Component} from "nuxt-property-decorator";

@Component({
  name: 'rules',
  data() {
    return {
      fieldRequired: (value: string) => !!value || 'Required.',
      combobox: (value: any) => !!value?.name || 'Required.',
      switchValidator: (v: any) => !!v || 'Must accept terms and condition',
      min: (v: string) => v.length >= 8 || 'Min 8 characters',
      emailRules: (v: string) => /.+@.+\..+/.test(v) || 'Invalid e-mail',
      phoneValidation: (v: any) => v?.length === 11 || 'Number must be 11 digits',
      passwordMatch: (value: string, password: string) => value === password || 'Password does not match',
      genderRule: (value: string) => (value == 'male' || value == 'female') || 'Gender must be selected',
      uploadFileVal : (value: any) => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    }
  }
})
export default class extends Vue{

}


