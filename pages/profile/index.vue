<!--static content--->
<template>
  <!-- <div id="app"> -->
  <!-- <v-app id="inspire"> -->
  <v-card height = "100vh">
    <!-- <v-toolbar
        flat
        color="orange"
        dark>
        <v-toolbar-title>My Profile</v-toolbar-title>
      </v-toolbar> -->

    <!-- first tab -->
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        My info
      </v-tab>
      <!-- second tab -->
      <v-tab>
        <v-icon left>
          mdi-heart
        </v-icon>
        My favourite
      </v-tab>

      <!-- third tab -->
      <v-tab>
        <v-icon left>
          mdi-cart
        </v-icon>
        My orders
      </v-tab>

      <!-- forth tab -->
      <v-tab>
        <v-icon left>
          mdi-bell
        </v-icon>
        <v-badge color="blue" content="3">
          Notifications
        </v-badge>
      </v-tab>

      <!-- fifth tab -->
      <v-tab>
        <v-icon left>
          mdi-card
        </v-icon>
        My Payment
      </v-tab>

      <!--  my info details  -->
      <v-tab-item>
        <v-card class="mx-auto" max-width="1000" height = "100vh" tile>
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          ></v-img>
          <v-row style="margin:2.5%;position:absolute; top: 130px">
            <v-list-item>
              <v-list-item-avatar size="100">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="John"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="title" style="margin-top:20px;"
                  >Precious Cassy 😃</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>(234) 555-1234</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
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
                <v-list-item-title>preshcassey@example.com</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>presh,cassey@example.com</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>14 mando kaduna</v-list-item-title>
                <v-list-item-subtitle>nigeria, 800100</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          </v-row>
        </v-card>
      </v-tab-item>

      <!--  my favourite  -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <!-- content -->
            <p>add anything</p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- orders details -->
      <v-tab-item>
        <v-card flat max-width="400" tile>
          <v-card-text>
            <!-- content -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Sneakers</v-list-item-title>
                <v-list-item-subtitle>Pending </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Generator</v-list-item-title>
                <v-list-item-subtitle>Recieved </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- notification details -->
      <v-tab-item>
        <v-card flat max-width="450" class="mx-auto">
          <v-card-text>
            <!-- content -->
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- payment details -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <!-- content -->
            <p>add anything</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
  <!-- </v-app> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "profile",
  data: () => ({
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Successful order",
        subtitle: `<span class="text--primary">Jesse oli</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Come recieve your order",
        subtitle: `<span class="text--primary">from Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Hey weve got a new product",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have kaduna recommendations? Have you ever been?'
      }
    ]
  })
};
</script>

<style scoped></style>
