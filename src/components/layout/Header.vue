<template>
  <div class="hero is-large is-link">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          {{ info.name }}
        </h1>
        <h2 class="subtitle is-3">
          {{ info.title }}
        </h2>

        <br />

        <div>
          <a
            v-for="profile in info.profiles"
            :key="profile.title"
            :href="profile.url"
            target="_blank"
            rel="noreferrer"
          >
            <button class="button is-light is-outlined">
              {{ profile.icon }} {{ profile.title }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['info']),
  },
}
</script>

<style scoped>
.button {
  margin-right: 0.5em;
}
</style>
