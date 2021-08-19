import {startCase, upperFirst} from "lodash";

export default {
  computed: {
    getFullName() {
      return startCase(this.$auth.user.firstName + " " + this.$auth.user.lastName)
    },
    getFirstName() {
      return upperFirst(this.$auth.user.firstName)
    },
    getLastName() {
      return upperFirst(this.$auth.user.lastName)
    },
    getGender() {
      return upperFirst(this.$auth.user.gender)
    },
    getEmail() {
      return upperFirst(this.$auth.user.email)
    },
    getDob() {
      return this.$auth.user.dob
    },
  }
}
