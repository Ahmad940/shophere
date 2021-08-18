<!--static content--->
<template>
  <!-- <div id="app"> -->
  <!-- <v-app id="inspire"> -->
  <!--  <v-card height = "100vh">-->
  <!-- <v-toolbar
      flat
      color="orange"
      dark>
      <v-toolbar-title>My Profile</v-toolbar-title>
    </v-toolbar> -->

  <!-- first tab -->
  <!--    <v-tabs vertical>-->
  <!--      <v-tab>-->
  <!--        <v-icon left>-->
  <!--          mdi-account-->
  <!--        </v-icon>-->
  <!--        My info-->
  <!--      </v-tab>-->
  <!--       second tab-->
  <!--      <v-tab>-->
  <!--        <v-icon left>-->
  <!--          mdi-heart-->
  <!--        </v-icon>-->
  <!--        My favourite-->
  <!--      </v-tab>-->
  <!---->
  <!--       third tab-->
  <!--      <v-tab>-->
  <!--        <v-icon left>-->
  <!--          mdi-cart-->
  <!--        </v-icon>-->
  <!--        My orders-->
  <!--      </v-tab>-->
  <!---->
  <!--       forth tab-->
  <!--      <v-tab>-->
  <!--        <v-icon left>-->
  <!--          mdi-bell-->
  <!--        </v-icon>-->
  <!--        <v-badge color="blue" content="3">-->
  <!--          Notifications-->
  <!--        </v-badge>-->
  <!--      </v-tab>-->

  <!-- fifth tab -->
  <!--      <v-tab>-->
  <!--        <v-icon left>-->
  <!--          mdi-card-->
  <!--        </v-icon>-->
  <!--        My Payment-->
  <!--      </v-tab>-->
  <!---->
  <!--        my info details  -->
  <!--      <v-tab-item>-->
  <v-card class="mx-auto" max-width="1000" height="100vh" tile>
    <v-img
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    ></v-img>
    <v-row style="margin:2.5%;position:absolute; top: 130px">
      <v-list-item>
        <v-list-item-avatar size="100">
          <img
            :src="$auth.user.gender == 'male' ? '/avatar/mavater.png' : '/avatar/favater.png'"
            alt="John"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mt-8" style="margin-top:20px;"
          >{{ getFullName }}
          </v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list two-line>
        <!--            <v-list-item>-->
        <!--              <v-list-item-icon>-->
        <!--                <v-icon color="indigo">-->
        <!--                  mdi-phone-->
        <!--                </v-icon>-->
        <!--              </v-list-item-icon>-->

        <!--              <v-list-item-content>-->
        <!--                <v-list-item-title>(234) 555-1234</v-list-item-title>-->
        <!--                <v-list-item-subtitle>Mobile</v-list-item-subtitle>-->
        <!--              </v-list-item-content>-->
        <!--            </v-list-item>-->

        <!--            <v-divider inset></v-divider>-->

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-email
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ getEmail }}</v-list-item-title>
            <v-list-item-subtitle>Email</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-email
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ getGender }}</v-list-item-title>
            <v-list-item-subtitle>Gender</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-calendar
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ getDob }}</v-list-item-title>
            <v-list-item-subtitle>Date of birth</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-row>
  </v-card>
  <!--      </v-tab-item>-->
  <!---->
  <!--        my favourite  -->
  <!--      <v-tab-item>-->
  <!--        <v-card flat>-->
  <!--          <v-card-text>-->
  <!-- content -->
  <!--            <p>add anything</p>-->
  <!--          </v-card-text>-->
  <!--        </v-card>-->
  <!--      </v-tab-item>-->

  <!-- orders details -->
  <!--      <v-tab-item>-->
  <!--        <v-card flat max-width="400" tile>-->
  <!--          <v-card-text>-->
  <!--             content-->
  <!--            <v-list-item>-->
  <!--              <v-list-item-content>-->
  <!--                <v-list-item-title>Sneakers</v-list-item-title>-->
  <!--                <v-list-item-subtitle>Pending </v-list-item-subtitle>-->
  <!--              </v-list-item-content>-->
  <!--            </v-list-item>-->
  <!---->
  <!--            <v-list-item>-->
  <!--              <v-list-item-content>-->
  <!--                <v-list-item-title>Generator</v-list-item-title>-->
  <!--                <v-list-item-subtitle>Recieved </v-list-item-subtitle>-->
  <!--              </v-list-item-content>-->
  <!--            </v-list-item>-->
  <!--          </v-card-text>-->
  <!--        </v-card>-->
  <!--      </v-tab-item>-->
  <!---->
  <!--       notification details -->
  <!--      <v-tab-item>-->
  <!--        <v-card flat max-width="450" class="mx-auto">-->
  <!--          <v-card-text>-->
  <!-- content -->
  <!--            <v-list three-line>-->
  <!--              <template v-for="(item, index) in items">-->
  <!--                <v-subheader-->
  <!--                  v-if="item.header"-->
  <!--                  :key="item.header"-->
  <!--                  v-text="item.header"-->
  <!--                ></v-subheader>-->
  <!---->
  <!--                <v-divider-->
  <!--                  v-else-if="item.divider"-->
  <!--                  :key="index"-->
  <!--                  :inset="item.inset"-->
  <!--                ></v-divider>-->
  <!---->
  <!--                <v-list-item v-else :key="item.title">-->
  <!--                  <v-list-item-avatar>-->
  <!--                    <v-img :src="item.avatar"></v-img>-->
  <!--                  </v-list-item-avatar>-->
  <!---->
  <!--                  <v-list-item-content>-->
  <!--                    <v-list-item-title v-html="item.title"></v-list-item-title>-->
  <!--                    <v-list-item-subtitle-->
  <!--                      v-html="item.subtitle"-->
  <!--                    ></v-list-item-subtitle>-->
  <!--                  </v-list-item-content>-->
  <!--                </v-list-item>-->
  <!--              </template>-->
  <!--            </v-list>-->
  <!--          </v-card-text>-->
  <!--        </v-card>-->
  <!--      </v-tab-item>-->
  <!---->
  <!--       payment details -->
  <!--      <v-tab-item>-->
  <!--        <v-card flat>-->
  <!--          <v-card-text>-->
  <!--             content -->
  <!--            <p>add anything</p>-->
  <!--          </v-card-text>-->
  <!--        </v-card>-->
  <!--      </v-tab-item>-->
  <!--    </v-tabs>-->
  <!--  </v-card>-->
  <!-- </v-app> -->
  <!-- </div> -->
</template>

<script>
import {startCase, upperFirst} from 'lodash'

export default {
  name: "profile",
  data: () => ({}),
  computed: {
    getFullName() {
      return startCase(this.$auth.user.firstName + " " + this.$auth.user.lastName)
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
  },
};
</script>

<style scoped></style>
