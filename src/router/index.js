import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CreateMeetup from '@/components/meetup/CreateMeetup'
import Meetups from '@/components/meetup/Meetups'
import Meetup from '@/components/meetup/Meetup'
import Profile from '@/components/user/Profile'
import Signin from '@/components/user/Signin'
import Signup from '@/components/user/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
