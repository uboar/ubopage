<template>
  <v-row>
    <v-col />
    <v-col align-self="center" md="12">
      <h1>UBO-MUSICS(テスト運用中)</h1>
      <VueGlow
        :color="$vuetify.theme.themes.dark.primary"
        elevation="10"
        v-if="renderMusicPlayer"
      >
        <v-audio-player
          :src="musicSourceLink"
          :track-title="musicTitle"
          :track-subtitle="musicSubTitle"
          :compact="$vuetify.breakpoint.smAndDown"
          :autoplay="false"
          :album-art="musicCoverLink"
          allow-previous
          allow-next
          @next-audio="nextSrc()"
          @previous-audio="prevSrc()"
        ></v-audio-player>
        <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header> この曲の情報 </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ songDescription }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </VueGlow>
      <br />
      <v-divider></v-divider>
      <br />
      <v-layout style="height: 65vh">
        <v-flex style="overflow: auto">
          <v-card elevation="16">
            <v-banner>
              <h3>ALBUM LIST</h3>
            </v-banner>
            <Albums @updateMusicData="updateMusicData" v-bind:album="ubomez"></Albums>
            <Albums @updateMusicData="updateMusicData" v-bind:album="nicodo"></Albums>
          </v-card>
        </v-flex>
      </v-layout>
    </v-col>
    <v-col />
  </v-row>
</template>

<style scoped>
</style>

<script>
import VueGlow from "vue-glow";
import VAudioPlayer from "@woodydark/vuetify-audio-player";
import Albums from "./Albums.vue";

import UBOMEZ from "../data/albums/ubomez.json";
import nicodo from "../data/albums/nicodo.json";

export default {
  name: "MusicPlayer",

  components: {
    VAudioPlayer,
    VueGlow,
    Albums,
  },

  methods: {
    updateMusicData(data) {
      this.currentPlayList = data.currentPlayList;
      this.index = data.index;
      this.musicSubTitle = this.currentPlayList[this.index].songName;
      this.musicSourceLink = this.currentPlayList[this.index].songUrl;
      this.songDescription = this.currentPlayList[this.index].songDescription;
      this.musicTitle = data.albumName;
      this.musicCoverLink = data.albumArtUrl;
      this.$vuetify.theme.themes.dark.primary = data.color;
    },
    nextSrc() {
      var nextIndex;
      if (this.index >= this.currentPlayList.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = this.index + 1;
      }
      this.updateMusicData({
        currentPlayList: this.currentPlayList,
        index: nextIndex,
        albumName: this.musicTitle,
        albumArtUrl: this.musicCoverLink,
        color: this.$vuetify.theme.themes.dark.primary,
      });
    },
    prevSrc() {
      var prevIndex;
      if (this.index <= 0) {
        prevIndex = this.currentPlayList.length - 1;
      } else {
        prevIndex = this.index - 1;
      }
      this.updateMusicData({
        currentPlayList: this.currentPlayList,
        index: prevIndex,
        albumName: this.musicTitle,
        albumArtUrl: this.musicCoverLink,
        color: this.$vuetify.theme.themes.dark.primary,
      });
    },
  },

  mounted: function () {
    this.$vuetify.theme.themes.dark.primary = "#707070";
  },
  data: () => ({
    musicTitle: "選択されていません",
    musicSubTitle: "選択されていません",
    musicSourceLink: "",
    musicCoverLink: "",
    renderMusicPlayer: true,
    songDescription: "",
    currentPlayList: {},
    index: 0,

    ubomez: UBOMEZ,
    nicodo: nicodo,
  }),
};
</script>
