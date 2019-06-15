<template>
  <v-container fluid>
    <v-layout row class="mb-3">
      <v-flex xs-12>
        <h2 class="secondary--text text-xs-center">Create a Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                box
                color="secondary"
                name="title"
                label="Title"
                id="title"
                v-model="title"
                :rules="[rules.required]"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                box
                color="secondary"
                name="location"
                label="location"
                id="location"
                v-model="location"
                :rules="[rules.required]"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                box
                color="secondary"
                name="imageUrl"
                label="Image URL"
                id="imageUrl"
                v-model="imageUrl"
                :rules="[rules.required]"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-img :src="imageUrl" class="mb-3"></v-img>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                box
                color="secondary"
                name="description"
                label="Description"
                id="description"
                v-model="description"
                :rules="[rules.required]"
              >
              </v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h3 class="mb-3">Choose a date and time</h3>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm3 offset-sm3>
              <v-date-picker :rules="[rules.required]" v-model="date"></v-date-picker>

            </v-flex>
            <v-flex xs12 sm3>
              <v-time-picker format="24hr" :rules="[rules.required]" v-model="time"></v-time-picker>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              {{dateTime}}
              <v-btn @click="submit" :disabled="!valid" class="secondary">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: null,
      time: null,
      valid: true,
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  computed: {
    dateTime () {
      return this.$moment.utc(this.date + ' ' + this.time)
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        const meetupData = {
          title: this.title,
          location: this.location,
          description: this.description,
          imageUrl: this.imageUrl,
          date: this.dateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
}
</script>
