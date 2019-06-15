<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large router class="secondary" to="/meetups">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large router class="secondary" to="/meetups/new">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout class="my-3">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
              style="cursor:pointer"
              v-for="meetup in meetups"
              :key="meetup.id"
              :src="meetup.imageUrl"
              @click="loadMeetup(meetup.id)"
            >
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <h3>Join our awesome Meetup</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      loadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .title{
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2rem;
    padding: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

