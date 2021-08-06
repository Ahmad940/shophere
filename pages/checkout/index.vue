<template>
    <div class="checkoutPage">
        <div class="card">
            <p>Total:  <b>N10</b></p>
            <button v-on:click="placeOrder">
                CHECKOUT
            </button>
        </div>
        
    </div>
</template>



<script>
export default {
  name: "index",


 methods: {
    placeOrder() {
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-92c3a3aa7ab3ce0aae5173fbc22a7417-X",
        tx_ref: "new-sale"+ new Date(),
        amount: 10,
        currency: "NGN",
        country: "NG",
        payment_options: "card",
        customer: {
          email: "abdrhmnsaeed@gmail.com",
          phone_number: "+2348120793414",
          name: "Ibn-Saeed",
        },
        callback: function(data) {
          console.log(data);
        },
        onclose: function() {},
        customizations: {
          title: "Shophere",
          description: "Payment for items in cart",
          logo: "https://github.com/Ahmad940/shophere/blob/master/static/Shophere_logo.png",
        },
      });
    },
  },

  created() {
    if (typeof document !== `undefined`) {
      const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[0].appendChild(script);
    
  } else {
    return {
      // Do something different while window and document are not defined on the server
    };
  }
      
      },

}


</script>

<style scoped>
.card{
    margin:auto;
    width: 50%;
    text-align: center;
    background-color: rgb(238, 136, 20);
    padding: 10px 0;
}

button {
  padding: 5px;
  -webkit-appearance: none;
  border: 2px solid #41b883;
  background-color: #fff;
  color: #41b883;
  font-size: 12px;
  cursor: pointer;
}
button:hover {
  border-color: #35495e;
  color: #35495e;
  font-size: 13px;
}
button:focus {
  outline: none;
}
</style>
