<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app class="primary" dark>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          Dev Meetup
        </router-link>
      </v-toolbar-title>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link"><v-icon left dark>{{ item.icon }}</v-icon> {{ item.title }}</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <main class="mt-5">
      <router-view class="mt-4"></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {
          icon: 'group',
          title: 'View Meetups',
          link: '/meetups'
        },
        {
          icon: 'room',
          title: 'Organize Meetup',
          link: '/meetup/new'
        },
        {
          icon: 'person',
          title: 'Profile',
          link: '/profile'
        },
        {
          icon: 'face',
          title: 'Sign up',
          link: '/signup'
        },
        {
          icon: 'lock_open',
          title: 'Sign in',
          link: '/signin'
        }
      ]
    }
  },
  name: 'App'
}
</script>
