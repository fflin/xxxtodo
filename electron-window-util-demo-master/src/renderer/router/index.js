import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      // component: require('../components/LandingPage').default
      component: ()=>import('../components/Main')
    },
    {
      path: '/landing',
      name: 'landing',
      // component: require('../components/LandingPage').default
      component: ()=>import('../components/Landing')
    },
    {
      path: '/win1',
      name: 'win1',
      // component: require('../components/LandingPage').default
      component: ()=>import('../components/win1')
    },
    {
      path: '/win2',
      name: 'win2',
      // component: require('../components/LandingPage').default
      component: ()=>import('../components/win2')
    },
    {
      path: '/win3',
      name: 'win3',
      // component: require('../components/LandingPage').default
      component: ()=>import('../components/win3')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
