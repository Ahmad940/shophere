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

        <v-form>
          <v-text-field
            name="firstName"
            v-model="form_data.firstName"
            label="First Name"
            outlined
            rounded
            placeholder="First Name"
            append-icon='mdi-email'
            clearable
          />

          <v-text-field
            name="middleName"
            v-model="form_data.middleName"
            label="Middle Name"
            outlined
            hint="Optional"
            rounded
            placeholder="Middle Name"
            append-icon='mdi-email'
            clearable
          />

          <v-text-field
            name="lastName"
            v-model="form_data.lastName"
            label="Last Name"
            outlined
            rounded
            placeholder="Last Name"
            append-icon='mdi-email'
            clearable
          />

          <v-text-field
            name="firstName"
            v-model="form_data.firstName"
            label="First Name"
            outlined
            rounded
            placeholder="First Name"
            append-icon='mdi-email'
            clearable
          />

          <v-text-field
            name="email"
            type="email"
            v-model="form_data.email"
            label="Email"
            outlined
            rounded
            placeholder="Email Address"
            append-icon='mdi-email'
            clearable
          />

          <v-text-field
            outlined
            rounded
            v-model="form_data.password"
            placeholder="Password"
            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show_password ? 'text' : 'password'"
            name="password"
            label="Password"
            clearable
            @click:append="show_password = !show_password"
          />
          <v-btn
            @click="handleSignUp"
            rounded
            block
            :loading="loading"
            :disabled="!form_data.email || !form_data.password"
          >Sign Up
          </v-btn>

          <v-container class="ma-5">
            <p class="float-right">Already have account?
              <nuxt-link class="blue--text" to="login">Sign In</nuxt-link>
            </p>
          </v-container>

        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "signup",
  layout: "auth",
  data() {
    return {
      loading: false,
      error: false,
      error_message: '',
      form_data: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
      },
      show_password: false,
    }
  },
  methods: {
    async handleSignUp() {

    }
  },
  head: {
    title: 'Sign Up'
  },
  auth: false,
  middleware: 'islogged_redirect'
}
</script>

<style scoped>

</style>
