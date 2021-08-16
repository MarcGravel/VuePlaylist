<template>
    <div>
        <div id="listContainer">
            <h1 id="songListTitle">Song List:</h1>
            <h2>{{songListEmpty}}</h2>
            <!--This iterates through the songlist and populates the webpage-->
            <!--There is also a click event that passes the id of the clicked object-->
            <div @click="clickList(song.id)" id="indTracks" v-for="song in theSongList" :key="song.id"> 
                <h3 id="title">{{song.title}}</h3>
                <h3 id="artist">By: {{song.artist}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SongList",
        computed: {
            //Gets songlist info from store
            theSongList() {
                return this.$store.state.songList;
            },
            //Getter function for empty list notification *extra* 
            songListEmpty() {
                return this.$store.getters.songListEmptyMessage;
            }
        },
        methods: {
            //Passes the clickedId info back to store
            clickList(clickedID) {
                this.$store.commit('sendToPlay', clickedID);
            }
        }
    }
</script>

<style scoped>
    #indTracks {
        cursor: pointer;
        height: 8vh;
        width: 35vw;
        background-color: #00B2CA;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 1px black solid;
        border-radius: 10px;
    }

    #indTracks:active {
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

    #songListTitle {
        text-align: center;
    }

</style>