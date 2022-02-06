<template>
  <v-row>
    <v-col />
    <v-col align-self="center" md="6">
      <h1>UBO-MUSICS</h1>

      <VueGlow color="white" elevation="10">
        <v-audio-player
          :src="this.$musicSourceLink"
          :track-title="this.$musicTitle"
          :track-subtitle="this.$musicSubTitle"
          allow-previous
          allow-next
          :compact="$vuetify.breakpoint.smAndDown"
          :autoplay="false"
          :album-art="this.$musicCoverLink"
          @next-audio="nextSrc()"
          @previous-audio="prevSrc()"
          prev-track-icon="mdi-skip-previous"
          next-track-icon="mdi-skip-next"
          back-forward-icon="mdi-rewind-5"
          fast-forward-icon="fast-forward-5"
          play-icon="mdi-play"
          pause-icon="mdi-pause"
          mute-volume-icon="mdi-volume-off"
          low-volume-icon="mdi-volume-low"
          medium-volume-icon="mdi-volume-medium"
          high-volume-icon="mdi-volume-high"
        ></v-audio-player>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> この曲の詳細 </v-expansion-panel-header>
            <v-expansion-panel-content> </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </VueGlow>
    </v-col>
    <v-col />
  </v-row>
</template>

<style scoped>
</style>

<script>
import VueGlow from "vue-glow";
import VAudioPlayer from "@woodydark/vuetify-audio-player";

export default {
  name: "MusicPlayer",

  components: {
    VAudioPlayer,
    VueGlow,
  },

  data: () => ({}),
};
</script>
