<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <div>
        <v-footer color="secondary" app padless>
          <router-link to="/">
            <v-btn color="white" text rounded> トップに戻る </v-btn>
          </router-link>
        </v-footer>
      </div>
    </v-main>
  </v-app>
</template>

<style>
.v-application {
  font-family: "Murecho" !important;
}

a {
  text-decoration: none;
}
</style>

<script>
export default {
  name: "App",

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
