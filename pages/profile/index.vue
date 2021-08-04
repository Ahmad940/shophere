<!--static content--->
<template>
<div id="app">
  <v-app id="inspire">
    <v-card>
      <v-toolbar
        flat
        color="orange"
        dark>
        <v-toolbar-title>My Profile</v-toolbar-title>
      </v-toolbar>
      
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
        <v-badge
          color="green"
          content="3" >
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
          <v-card flat>
            <v-card-text>
              <!-- content -->
              <p><b>My info</b></p>
              
              
              <v-divider></v-divider>
              <p><b>My Address</b></p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        
<!--        my favourite  -->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <!-- content -->

            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- orders details -->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
           <!-- content -->

            </v-card-text>
          </v-card>
        </v-tab-item>

<!-- notification details -->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
           <!-- content -->
        <v-card
          max-width="450"
          class="mx-auto" >
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

              <v-list-item
                v-else
                :key="item.title"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
            </v-card-text>
          </v-card>
        </v-tab-item>

<!-- payment details -->
                <v-tab-item>
          <v-card flat>
            <v-card-text>
           <!-- content -->

            </v-card-text>
          </v-card>
        </v-tab-item>


      </v-tabs>
    </v-card>
  </v-app>
</div>
              
</template>

<script>
export default {
  name: "profile"
  
}

new Vue({
  el: '#app',
  vuetify: new Vuetify(),

  data: () => ({
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Successful order',
          subtitle: `<span class="text--primary">Jesse oli</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Come recieve your order',
          subtitle: `<span class="text--primary">from Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Hey weve got a new product',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have kaduna recommendations? Have you ever been?',
        },
      ],
    }),
  
})
</script>

<style scoped>

</style>
