<template>
  <div class="section">
    <div class="columns">
      <div class="column is-2">
        <h2 class="title is-3">
          {{ sections.about.title }}
        </h2>
      </div>

      <div class="column is-10">
        <div class="well">
          <p v-html="sections.about.summary"></p>
          <br />
          <p v-html="sections.about.objective"></p>
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
    ...mapGetters(['sections']),
  },
}
</script>
<style></style>
