<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex class="px-2" xs12 sm6 md4 v-for="meetup in meetups" :key="meetup.id">
        <v-card color="accent" height="250px" class="white--text my-3">
          <v-layout row fill-height>
            <v-flex xs7 class="pa-2">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{ meetup.title }}</div>
                  <div class="my-2"><span class="date black--text">{{ meetup.date | date }}</span></div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn outline  router :to="'/meetups/' + meetup.id">View Details <v-icon>arrow_right_alt</v-icon>
                </v-btn>
              </v-card-actions>
            </v-flex>
            <v-flex xs5>
              <v-card-media height="100%" :src="meetup.imageUrl"></v-card-media>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .date{
    border-bottom: 2px solid #333;
    padding-bottom: 0.2em;
  }
</style>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>


