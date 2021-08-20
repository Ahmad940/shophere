<template>
  <v-container>
    <p class="text-center display-2 pa-5">Check out</p>
    <v-form ref="forms">
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <v-text-field
            name="name"
            outlined
            :value="getFirstName"
            label="First Name"
            :rule="[fieldRequired]"
            dense
          />
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-text-field
            name="name"
            outlined
            :value="getLastName"
            label="Last Name"
            :rule="[fieldRequired]"
            dense
          />
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-text-field
            name="name"
            outlined
            :rule="[fieldRequired]"
            :value="getEmail"
            label="Email Address"
            dense
          />
        </v-col>


        <v-col cols="12" md="6" sm="12">
          <v-text-field
            name="name"
            outlined
            label="Phone Number"
            :rule="[fieldRequired]"
            v-model="formData.phone"
            dense
          />
        </v-col>

        <v-col sm="12">
          <v-textarea
            outlined
            label="Shipping Address"
            v-model="formData.address"
            dense
            height="80"
            :rule="[fieldRequired]"
          />
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-text-field
            name="name"
            outlined
            :rule="[fieldRequired]"
            label="Zip/Postal Code"
            v-model="formData.zipCode"
            dense
          />
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-text-field
            name="name"
            outlined
            :rule="[fieldRequired]"
            label="State"
            v-model="formData.state"
            dense
          />
        </v-col>
      </v-row>
    </v-form>
    <paystack
      :amount="this.nairaToKobo(this.TOTAL)"
      :email="getEmail"
      paystackkey="pk_test_3b1b09aaf1e7eea8e9640b1a964b48c323bec47d"
      :reference="genReference"
      :callback="callback"
      :close="close"
      :embed="false"
      :channels="['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer']"
    >
      <v-btn :color="secondaryColor" dark>Check Out</v-btn>
    </paystack>
  </v-container>
</template>


<script>
import {mapActions, mapGetters, mapState} from "vuex";
import user from '@/mixins/user'
import paystack from 'vue-paystack'
import rules from "@/mixins/rules";

export default {
  name: "index",
  mixins: [user, rules],
  components: {paystack},
  data: () => ({
    formData: {
      zipCode: '',
      phone: '',
      address: '',
      state: '',
    }
  }),
  computed: {
    ...mapState('modules/meta', ['appUrl', 'appname', 'secondaryColor', 'primaryColor', 'pay_key']),
    ...mapGetters('modules/carts', ['CARTS', 'LOADING', 'TOTAL']),
    genReference() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },
  methods: {
    ...mapActions('modules/carts', ['fetchCarts']),
    callback: async function (response) {
      // console.log(response)
      const data = {...this.formData}
      data.firstName = this.getFirstName
      data.lastName = this.getLastName
      data.email = this.getEmail

      try {
        await this.$axios.$delete('/carts/check')
        await this.fetchCarts()
        await this.$router.push('/cart')
      } catch (e) {
        console.log(e.response)
        console.log(e.message)
      }

      console.log()
    },
    close: function () {
      console.log("Payment closed")
    },
    nairaToKobo (amount){
    return (amount * 100).toFixed(0)
  },
    created() {
      this.fetchCarts()
    }
  },

  created() {
  },

}


</script>

<style scoped>

</style>
