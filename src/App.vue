<template>
  <v-app>
    <v-main>
      <MainLinks/>
    </v-main>
  </v-app>
</template>

<style>
.v-application{
    font-family: 'Murecho' !important;
}
</style>

<script>
import MainLinks from "./components/MainLinks.vue"

export default {
  name: "App",

  components: {
    MainLinks,
  },

  data: () => ({
    //
  }),
};
</script>
