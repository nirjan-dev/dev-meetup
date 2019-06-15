import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/ZnP9cnjIn60slvybF_34lby1uMk=/0x0:2000x1125/1200x675/filters:focal(840x403:1160x723)/cdn.vox-cdn.com/uploads/chorus_image/image/58203557/171109_06_49_10_5DSR4201.0.jpg',
        id: '1',
        title: 'Meetup in New york',
        date: new Date(),
        description: 'This is going to be a great meetup filled with wonderful memories and stuff',
        location: 'Kathmandu'
      },
      {
        imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/55425108.jpg?sharp=10&vib=20&w=1200',
        id: '2',
        title: 'Meetup in London',
        date: new Date(),
        description: 'This is going to be a great meetup filled with wonderful memories and stuff',
        location: 'Kathmandu'
      }
    ],
    user: {
      id: '1',
      registeredMeetups: ['1', '2']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'adsad'
      }
      // reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetupId === meetup.id
        })
      }
    }
  }
})
