import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emptyPlayMsg: "Click song list to add tracks.",
    emptySongMsg: "Click playlist tracks to return them here.",
    songList: [
      {
        title: "Burning Babylon",
        artist: "Alix Perez",
        id: 1
      },
      {
        title: "Last Jungle",
        artist: "Sub Focus",
        id: 2
      },
      {
        title: "Higher",
        artist: "Kanine",
        id: 3
      },
      {
        title: "Touch",
        artist: "Hybrid Minds",
        id: 4
      },
      {
        title: "The View",
        artist: "LSB",
        id: 5
      },
      {
        title: "On My Mind",
        artist: "Macca",
        id: 6
      },
      {
        title: "Afterthought",
        artist: "Ivy Lab",
        id: 7
      },
      {
        title: "Dreaming",
        artist: "S.P.Y",
        id: 8
      },
      {
        title: "So Many Times",
        artist: "Brookes Brothers",
        id: 9
      },
      {
        title: "Waveforms",
        artist: "Logistics",
        id: 10
      },
    ],
    playList: []
  },
  mutations: {
    //Takes in passed event and data from songlist.vue
      sendToPlay(state, clickedID) {
        //loops through the state. songlist array to match id with passed data
        for (let i=0; i < state.songList.length; i++) {
          if (state.songList[i].id == clickedID) {
            //pushes data to playList Array
            state.playList.push(state.songList[i]);
          }
        }
        //This filters the clicked song out from the songList
        state.songList = state.songList.filter(
          sl => {
            return sl.id !== clickedID;
          })  
      },
      //Takes in passed event and data from playlist.vue
      //all code below is just a reverse of the sendToPlay mutation above
      sendToSongList(state, clickedPlayID) {
        for (let i=0; i < state.playList.length; i++) {
          if (state.playList[i].id == clickedPlayID) {
            state.songList.push(state.playList[i])
          }
        }
        state.playList = state.playList.filter(
          pl => {
            return pl.id !== clickedPlayID;
          }
        )
      }

  },
  actions: {
  },
  getters: {
    //functions to return message if list is empty
    playListEmptyMessage(state) {
      if (state.playList.length == 0) {
        return state.emptyPlayMsg;
      }
    },
    songListEmptyMessage(state) {
      if (state.songList.length == 0) {
        return state.emptySongMsg;
      }
    }
  }
})
