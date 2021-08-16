<template>
    <div>
        <div id="playContainer">
            <h1 id="playListTitle">Your playlist:</h1>
            <h2>{{playListEmpty}}</h2>
            <!--This iterates through the songlist and populates the webpage-->
            <div @click="clickPlayList(song.id)" id="indPlayTracks" v-for="song in thePlayList" :key="song.id"> 
                <h3 id="title">{{song.title}}</h3>
                <h3 id="artist">By: {{song.artist}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlayList",
        computed: {
            //Gets playlist info from the store
            thePlayList() {
                return this.$store.state.playList;
            },
            //Getter function for empty list notification *extra* 
            playListEmpty() {
                return this.$store.getters.playListEmptyMessage;
            }
        },
        methods: {
            //Passes the clickedId info back to store
            clickPlayList(clickedPlayID) {
                this.$store.commit('sendToSongList', clickedPlayID);
            }
        }
    }
</script>

<style scoped>
#indPlayTracks {
        cursor: pointer;
        height: 8vh;
        width: 35vw;
        background-color: #00B2CA;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 1px black solid;
        border-radius: 10px;
    }

    #indPlayTracks:active {
        background-color: #0594a7;
    }

    h3 {
        color: black;
    }

    #title {
        grid-column: 1;
        margin-left: 1vw;
    }

    #artist {
        grid-column: 2;
    }

    #playListTitle {
        text-align: center;
    }

</style>