<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="accent">
          <v-layout row>
            <v-flex xs12 md6>
              <v-card-media height="100%" :src="meetup.imageUrl"></v-card-media>
            </v-flex>
            <v-flex xs12 md6 class="pa-2">
              <v-card-title class="primary--text font-weight-bold" primary-title>
                <div>
                  <div class="headline">{{ meetup.title }}</div>
                  <div class="my-2"><span class="date black--text">{{ meetup.date | date }}</span> | {{ meetup.location }}</div>
                </div>
              </v-card-title>
              <v-card-text>
                <p>{{ meetup.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn outline router to="/meetups/1">Register
                </v-btn>
              </v-card-actions>
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
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
