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
              (2022/2/13)新音源配布ページのテスト運用開始
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>おすすめ</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-carousel
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
        <templete v-if="i.isRouterLink">
          <router-link :to="i.href">
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
          </router-link>
        </templete>
        <template v-else>
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
        </template>
        <br />
      </div>
    </v-col>
    <v-col />
  </v-row>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>

<script>
import VueGlow from "vue-glow";
import linksData from "../data/links.json";
import slidesData from "../data/slides.json";

export default {
  name: "MainLinks",

  components: {
    VueGlow,
  },

  data: () => ({
    recommendPanel: 1,
    links: linksData,
    slides: slidesData,
  }),
};
</script>
