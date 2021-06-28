<template>
  <v-row align="center" style="height: 100vh;">
    <v-col align="center">
      <v-card class="pa-5 text-center" raised max-width="380" shaped>
        <div class="ma-10">
          <v-avatar color="primary">
            <v-icon>mdi-lock</v-icon>
          </v-avatar>
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
        >
          <v-text-field
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

          <v-text-field
            outlined
            rounded
            aria-label="password"
            v-model="form_data.password"
            :rules="[required]"
            placeholder="Password"
            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show_password ? 'text' : 'password'"
            name="password"
            label="Password"
            clearable
            @click:append="show_password = !show_password"
          />

          <v-btn
            @click.prevent="userLogin"
            rounded
            block
            :loading="loading"
            :disabled="!valid"
          >Login
          </v-btn>

          <v-card-actions>
            <v-row class="subtitle-1 mt-5" justify="space-between">
              <v-col align="left">
                <nuxt-link to="#!" :class="textStyle"
                           class="text-decoration-none body-2">
                  <p>Forget Password?</p>
                </nuxt-link>
              </v-col>
              <v-col align="right">
                <!--                <nuxt-link to="signup" class="white&#45;&#45;text text-decoration-none body-2">-->
                <nuxt-link to="signup"
                           :class="textStyle"
                           class="text-decoration-none body-2">
                  <p>Sign Up</p>
                </nuxt-link>
              </v-col>
            </v-row>
          </v-card-actions>
          <!--          <v-container class="ma-5">-->
          <!--            <p class="float-right">Dont have account?-->
          <!--              <nuxt-link class="blue&#45;&#45;text" to="signup">Sign Up</nuxt-link>-->
          <!--            </p>-->
          <!--          </v-container>-->

        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import rules from "../../mixins/rules";

export default {
  name: "login",
  mixins: [rules],
  data() {
    return {
      valid: false,
      loading: false,
      error: false,
      error_message: '',
      form_data: {
        email: '',
        password: '',
      },
      show_password: false,
      textStyle: {'black--text': !this.$vuetify.theme.dark, 'white--text': this.$vuetify.theme.dark,},
    }
  },
  methods: {
    async userLogin() {
      this.loading = true
      this.error = false
      this.error_message = ''

      try {
        let response = await this.$auth.loginWith('local', {data: this.form_data})
        console.log(response)
        this.loading = false
      } catch (err) {
        console.log(err.response.data)
        this.error = true
        this.error_message = err.response.data.message
        this.loading = false
      }
    }
  },
  layout: "auth",
  head: {
    title: 'Login'
  },
  middleware: 'islogged_redirect'
}
</script>

<style scoped>
</style>
