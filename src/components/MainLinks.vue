<template>
  <v-row>
    <v-col />
    <v-col align-self="center" md="6">
      <h1>UBO-LINKS</h1>
      <br />
      <VueGlow color="white" elevation="10">
        <v-expansion-panels focusable accordion v-model="recommendPanel">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>お知らせ</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              とりあえず何か書いとけ
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>おすすめ</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-carousel
                cycle
                height="360"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet :color="slide.backColor" height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                      <div v-if="slide.type === 'niconico'">
                        <script
                          type="application/javascript"
                          v-bind:src="
                            'https://embed.nicovideo.jp/watch/' +
                            slide.contents +
                            '/script?w=640&h=360'
                          "
                        ></script>
                      </div>
                      <div v-else v-html="slide.contents"></div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </VueGlow>
      <br />
      <v-divider></v-divider>
      <br />
      <div v-for="i in links" :key="i">
        <VueGlow :color="i.color" elevation="10">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  v-if="hover"
                  :color="i.color"
                  block
                  class="transition-fast-in-fast-out"
                  x-large
                  v-bind="attrs"
                  v-on="on"
                  :href="i.href"
                >
                  <v-icon large :style="i.style">
                    {{ i.icon }}
                  </v-icon>
                  <h1 v-bind:style="i.style">{{ i.text }}</h1>
                </v-btn>
                <v-btn
                  v-else
                  :color="i.color"
                  block
                  outlined
                  class="transition-fast-in-fast-out"
                  x-large
                  v-bind="attrs"
                  v-on="on"
                  :href="i.href"
                >
                  <v-icon large :style="i.style">
                    {{ i.icon }}
                  </v-icon>
                  <h1 v-bind:style="i.style">{{ i.text }}</h1>
                </v-btn>
              </v-hover>
            </template>
            <span>{{ i.tooltip }}</span>
          </v-tooltip>
        </VueGlow>
        <br />
      </div>
    </v-col>
    <v-col />
  </v-row>
</template>

<style scoped>
</style>

<script>
import VueGlow from "vue-glow";

export default {
  name: "App",

  components: {
    VueGlow,
  },

  data: () => ({
    recommendPanel: 1,
    links: [
      {
        icon: "mdi-file-music-outline",
        color: "purple",
        text: "音源配布",
        href: "https://uboar.page.link/music",
        style: "text-shadow: 0 0 1px purple, 0 0 3px purple; font-weight: 300;",
        tooltip: "音源をダウンロードできるページに移動します。ゆくゆくは本ページと合体出来たらいいな～って思ってます。",
      },
      {
        icon: "mdi-television-classic",
        color: "#CFD8DC",
        text: "ニコニコ動画",
        href: "https://www.nicovideo.jp/user/21791951",
        style: "text-shadow: 0 0 1px #CFD8DC, 0 0 3px #CFD8DC; font-weight: 300;",
        tooltip: "ニコニコ動画のユーザーページに移動します。フォローしてね。",
      },
      {
        icon: "mdi-youtube",
        color: "red",
        text: "youtube",
        href: "https://www.youtube.com/channel/UCfvuOsT-WvbAomxhffNAlNg",
        style: "text-shadow: 0 0 1px red, 0 0 3px red; font-weight: 300;",
        tooltip: "Youtubeのチャンネルページに移動します。登録してね。",
      },
      {
        icon: "mdi-post-outline",
        color: "#3F51B5",
        text: "はてなブログ",
        href: "https://uboar.hatenablog.com",
        style: "text-shadow: 0 0 1px #3F51B5, 0 0 3px #3F51B5; font-weight: 300;",
        tooltip: "文字を書きます。こちらも放置ぎみ。",
      },
      {
        icon: "mdi-twitter",
        color: "cyan",
        text: "twitter",
        href: "https://twitter.com/_uboar_",
        style: "text-shadow: 0 0 1px cyan, 0 0 3px cyan; font-weight: 300;",
        tooltip: "Twitterのユーザーページに移動します。",
      },
      {
        icon: "mdi-soundcloud",
        color: "orange",
        text: "soundcloud",
        href: "https://soundcloud.com/user-151411473",
        style: "text-shadow: 0 0 1px orange, 0 0 3px orange; font-weight: 300;",
        tooltip:
          "Soundcloudのチャンネルページに移動します。あんまり使ってません。",
      },
    ],
    slides: [
      {
        type: "niconico",
        contents: "sm39491085",
        backColor: "light-blue lighten-5",
      },
      {
        type: "niconico",
        contents: "sm38976250",
        backColor: "amber lighten-3",
      },
      {
        type: "niconico",
        contents: "sm38340785",
        backColor: "green accent-2",
      },
    ],
  }),
};
</script>
