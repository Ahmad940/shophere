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
          color="blue"
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
    <v-card flat
        max-width="775"
        class="mx-auto">
        <v-card-text>
          <h1><b>My info</b></h1>  

          <!--profile image          -->
          <v-img              
            src="https://lh3.googleusercontent.com/_-i4N6RIKYPxSkCD10vj1sDFWSdjSP-r2K1M8iQGBgxnT6cJ41nXoSedBWZtEy_JdykH_ikD0KWlrLdoP1YhN4e0n0cS7Nc9oiGcPeFVLkkVMEigkEIGnaYm0cPGHgTd37SZc8nz4xzFtS3oEwn0sYT5E5Nb7Ex5o4VeTRadpmYgXVz9ZN8CaM43gyBz4jW_gjGBNqF11juEM_Yik82bDHKKfLRyuLGxehDmPRTzQGnIAm8Bg32ijA92iE7umpCt7PKDcR5SlWPOn98wGQ9pVm3yHvDMN20mfLmCZIirB57J372NtE0OL1nj0JhhxosfaAgknrOf3SrkIPGIDkSqSXgDBY0wciCQov4TXsoHNEphzdI5Z6hbVlCy6E1x08Nc1J9eCr1KjF3CScqfwvJvSUCpV8x3Eo51Xj2X-D4OSliCr6XTLpMxHfw6uZC5ANqHOUvGsRxkk5rtYYCG1KWkwE7dFXJu4AqatwuM_Lti8xueXXQUm5F33ZagRUfVxS6ZeH0lYNjaTJ1VhY6NKB5gQfKnhq6MESDMrgBZOEeUXOpGlQs4Np_pG4mAJdNmzdZUF_FVsL-kDbz_l5H9eYTupDIHp_Q_ElAmitG8kORr2Yt4uxF4gU1urLQE-j1nLX_XaxsSoZRUOZa5gwoStEr384Ynyti3X6KRuO_ilOhNYdC3eywYDTuohjZj8CNkdW2QCrrPoVOkcAX0-Dq6ud1tXSXx=w277-h208-no?authuser=0"   
              height="300px" dark >
            <v-row class="fill-height">
                <v-card-title class="white--text pl-12 pt-12">
                    <div class="text-h4 pl-12 pt-12">
                    Presh cassey
                    </div>
                </v-card-title>
            </v-row>
          </v-img>

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

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>(234) 555-6789</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
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
            <!-- button -->
          <v-row align="center" justify="space-around">
            <v-btn
              tile
              color="success">
                <v-icon left>
                  mdi-pencil
                </v-icon>
                  Edit
            </v-btn>
            <v-btn
              depressed
              color="error">
              <v-icon left>
                mdi-trash
              </v-icon>
              Delete account
            </v-btn>               
          </v-row>
              
        </v-card-text>
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
     <v-card flat 
     max-width="400"
     tile>
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
