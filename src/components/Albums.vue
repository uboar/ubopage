<template>
  <v-alert border="left" colored-border :color="albumData.albumColor" elevation="2">
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header hide-actions ripple>
          <v-col>
            <v-row>
              <h1>{{ albumData.albumName }}</h1>
            </v-row>
            <v-row>
              <h5>{{ albumData.releaseDate }}</h5>
            </v-row>
          </v-col>
          <v-container>{{ albumData.albumDescription }}</v-container>
          <v-spacer></v-spacer>
          <v-avatar rounded size="150"
            ><img :src="albumData.albumArtUrl"
          /></v-avatar>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-banner
            ><v-btn
              block
              outlined
              :color="albumData.albumColor"
              :href="albumData.downloadUrl"
              target="_blank"
              >ALBUM DOWNLOAD</v-btn
            ></v-banner
          >
          <v-list-item-group>
            <div
              v-for="(item, index) in albumData.songList"
              :key="item.downloadUrl"
            >
              <v-list-item @click="songClicked(index)" v-model="selectedList">
                <v-chip outlined label disabled :color="albumData.albumColor">{{
                  ("00" + (index + 1)).slice(-2)
                }}</v-chip
                ><v-col align-self="center">{{ item.songName }}</v-col
                ><v-icon>mdi-play</v-icon></v-list-item
              >
              <v-divider inset></v-divider>
            </div>
          </v-list-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-alert>
</template>

<style scoped lang="sass">
$chip-padding: 100px
</style>

<script>
export default {
  name: "Albums",

  components: {},
  props: {
    album: Object,
  },

  mounted: function () {
    if (this.album != null) {
      this.albumData = this.album;
    }
  },
  methods: {
    songClicked: function (index) {
      console.log(this.selectedList);
      this.selectedList = [];
      this.$emit("updateMusicData", {
        color: this.albumData.albumColor,
        index: index,
        albumName: this.albumData.albumName,
        albumArtUrl: this.albumData.albumArtUrl,
        currentPlayList: this.albumData.songList,
      });
    },
  },
  data: () => ({
    selectedList: [],
    albumData: {
      albumName: "とりあえずなんか書いとけ",
      releaseDate: "20XX/XX/XX",
      albumColor: "#009688",
      downloadUrl: "https://1drv.ms/u/s!Ah9aQE8ok168khbRmMt6uDYq2M-3?e=qXGm4r",
      albumDescription:
        "ここにアルバムの説明が入りますよここにアルバムの説明が入りますよここにアルバムの説明が入りますよここにアルバムの説明が入りますよここにアルバムの説明が入りますよここにアルバムの説明が入りますよ",
      albumArtUrl:
        "https://textsampleofmusic.files.wordpress.com/2021/07/pxl_20210627_035207979_2.jpg?w=1024",
      songList: [
        {
          songName: "とりあえずなんか書いとけ1",
          songUrl:
            "https://dl.dropboxusercontent.com/s/ogjo8u6o9ubc3fq/01.%20%E5%A5%BD%E3%81%8D%E3%81%AA%E6%9B%B2%E7%B9%8B%E3%81%84%E3%81%A7%E9%87%8D%E3%81%AD%E3%81%9F%E3%82%89AI%E3%81%8D%E3%82%8A%E3%81%9F%E3%82%93%E9%81%94%E3%81%8C%E6%AD%8C%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%E3%81%A3%E3%81%A6%E3%83%9E%E3%82%B8%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F%EF%BC%81.mp3",
          songDescription: "とりあえずなんか書いとけ1",
        },
        {
          songName: "とりあえずなんか書いとけ2",
          songUrl:
            "https://dl.dropboxusercontent.com/s/uoa48ion81gg8mv/02.%20THE%20POWER%20OF%20TERRY%28Uncut%20Ver%29.mp3",
          songDescription: "とりあえずなんか書いとけ2",
        },
      ],
    },
  }),
};
</script>
