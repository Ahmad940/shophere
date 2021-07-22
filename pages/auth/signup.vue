<template>
  <v-row align="center" style="height: 100vh;">
    <v-col align="center">
      <v-card class="pa-5 text-center fade" raised max-width="800" shaped>
        <div class="ma-10">
          <v-avatar color="orange">
            <v-icon color="white">mdi-lock</v-icon>
          </v-avatar>

          <v-card-title class="d-flex justify-center">Sign Up</v-card-title>
        </div>

        <v-alert
          dense
          v-show="error"
          type="error"
          dismissible
        >
          {{ error_message }}
        </v-alert>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row>
            <v-col md="6" sm="6" xs="12" cols="12">
              <v-text-field
                name="firstName"
                type="text"
                dense
                aria-label="first name"
                v-model="form_data.firstName"
                label="First Name"
                :rules="[required]"
                outlined
                rounded
                placeholder="First Name"
                append-icon='mdi-email'
                clearable
              />
            </v-col>


            <v-col md="6" sm="6" xs="12" cols="12">
              <v-text-field
                dense
                name="lastName"
                type="text"
                aria-label="last name"
                v-model="form_data.lastName"
                label="Last Name"
                :rules="[required]"
                outlined
                rounded
                placeholder="Last Name"
                append-icon='mdi-email'
                clearable
              />
            </v-col>

            <v-col md="6" sm="6" xs="12" cols="12">
              <v-combobox
                outlined
                rounded
                dense
                :rules="[genderRule]"
                name="gender"
                v-model="form_data.gender"
                :items="gender"
                clearable
                label="Gender"></v-combobox>
            </v-col>

            <v-col md="6" sm="6" xs="12" cols="12">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="form_data.dob"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="form_data.dob"
                    label="Picker in dialog"
                    prepend-icon="mdi-calendar"
                    readonly
                    outlined
                    :rules="[required]"
                    dense
                    rounded
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="form_data.dob"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="modal = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(form_data.dob)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>

            <v-col md="6" sm="6" xs="12" cols="12">
              <v-text-field
                dense
                name="phone"
                type="number"
                aria-label="mobile number"
                v-model="form_data.phone"
                label="Mobile Number"
                :rules="[required, phoneValidation]"
                outlined
                rounded
                placeholder="Mobile Number"
                append-icon='mdi-email'
                clearable
              />
            </v-col>

            <v-col md="6" xs="12" cols="12" sm="6">
              <v-text-field
                dense
                name="email"
                type="email"
                aria-label="email"
                v-model="form_data.email"
                label="Email"
                :rules="[required, emailRules]"
                outlined
                rounded
                placeholder="Email Address"
                append-icon='mdi-email'
                clearable
              />
            </v-col>

            <v-col md="6" xs="12" cols="12" sm="6">
              <v-text-field
                dense
                outlined
                rounded
                aria-label="password"
                v-model="form_data.password"
                :rules="[required, min]"
                placeholder="Password"
                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show_password ? 'text' : 'password'"
                name="password"
                label="Password"
                clearable
                @click:append="show_password = !show_password"
              />
            </v-col>

            <v-col md="6" xs="12" cols="12" sm="6">
              <v-text-field
                outlined
                dense
                rounded
                aria-label="password"
                v-model="form_data.password1"
                :rules="[required, min, passwordMatch(form_data.password1, form_data.password)]"
                placeholder="Password"
                :append-icon="show_password1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show_password1 ? 'text' : 'password'"
                name="password"
                label="Repeat Password"
                clearable
                @click:append="show_password1 = !show_password1"
              />
            </v-col>
          </v-row>

          <!--            <v-col cols="12" xs="12" class="pt-0 d-flex justify-center">-->
          <v-switch
            dense
            v-model="tos"
            :rules="[switchValidator]"
            label="Accept terms and condition"
          ></v-switch>

          <v-btn
            @click.prevent="signupHandler"
            color="orange"
            rounded
            block
            :loading="loading"
            :disabled="!valid"
          >Sign Up
          </v-btn>
          <v-card-actions>
            <v-row class="subtitle-1 mt-5" justify="space-between">
              <v-col align="left">
                <!--                <nuxt-link to="#!" :class="textStyle"-->
                <!--                           class="text-decoration-none body-2">-->
                <!--                  <p>Forget Password?</p>-->
                <!--                </nuxt-link>-->
              </v-col>
              <v-col align="right">

                <nuxt-link to="login"
                           :class="textStyle"
                           class="text-decoration-none body-2">
                  <p>Login</p>
                </nuxt-link>
              </v-col>
            </v-row>
          </v-card-actions>

        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import rules from "../../mixins/rules";
import {Component, Vue} from 'nuxt-property-decorator'
import { Report, Notify } from "notiflix"

@Component({
  head: {
    title: 'SignUp'
  },
  layout: "auth",
  mixins: [rules],
  auth: false,
  middleware: 'islogged_redirect',
})
export default class Signup extends Vue {
  valid = false
  loading = false
  error = false
  error_message = ''
  tos = false
  gender = ['male', 'female']
  modal = false
  form_data = {
    firstName: '',
    lastName: '',
    gender: '',
    dob: null,
    phone: '',
    email: '',
    password: '',
    password1: '',
  }
  show_password = false
  show_password1 = false
  textStyle = {'black--text': !this.$vuetify.theme.dark, 'white--text': this.$vuetify.theme.dark,}


  $refs!: {
    form: HTMLFormElement
  }

  async signupHandler() {
    console.log(this.form_data)
    if (!this.$refs.form.validate()) return;

    this.loading = true
    this.error = false
    this.error_message = ''

    this.$axios.$post('/auth/register', this.form_data)
      .then((payload) => {
        console.log(payload)
        this.$auth.setUserToken(payload.token)
        this.$auth.fetchUser()
        this.loading = false

        this.$router.push('/')

        Report.success(
          'Success',
          '"Your account was successfully created', 'Ok');
      })
      .catch((err) => {
        this.error = true
        this.error_message = err.response.data.message
        console.log(err.message)
        this.loading = false
      })
  }
}
</script>

<style scoped>

</style>
