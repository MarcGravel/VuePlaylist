<template>
    <div id="body">
        <div id="songListContainer">
            <SongList />
        </div>
        <div id="playListContainer">
            <PlayList />
        </div>
    </div>
</template>

<script>
import SongList from './SongList.vue'
import PlayList from './PlayList.vue'

    export default {
        name: "PageBody",
        components: {
            SongList,
            PlayList
        }
    }
</script>

<style scoped>
    #body {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    #songListContainer {
        grid-column: 1;
        height: fit-content;
        width: 45vw;
        background-color: #1D4E89;
        color: white;
        display: grid;
        justify-items: center;
        padding-bottom: 5vh;
        border-radius: 50px;
    }

    #playListContainer {
        grid-column: 2;
        height: fit-content;
        width: 45vw;
        background-color: #1D4E89;
        color: white;
        display: grid;
        justify-items: center;
        padding-bottom: 5vh;
        border-radius: 50px;
    }
</style>