import {Context, Middleware} from "@nuxt/types";

const middleWare: Middleware = ({ $auth, redirect, }: Context) => {
  $auth.loggedIn && redirect('/')
}

export default middleWare
