<template>
  <div class="section">
    <div class="has-text-centered">
      <a href="https://profile.codersrank.io/user/mubaidr" target="_blank">
        <img
          src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?branding=false&widget=summary&username=mubaidr&badges=3&show-avatar=false&show-header=false"
        />
      </a>
    </div>

    <br />
    <br />
    <br />

    <div class="columns">
      <div class="column is-2">
        <h2 class="title is-3">
          {{ sections.skills.title }}
        </h2>
      </div>

      <div class="column is-10">
        <div v-for="skill in sections.skills.lists" :key="skill.title">
          <p class="title is-4">
            {{ skill.title }}
          </p>
          <p class="tags">
            <span
              v-for="item in skill.list"
              :key="item.title"
              class="tag is-link is-light is-medium"
            >
              {{ item.title }}
            </span>
          </p>
          <br />
        </div>

        <!--
        <br />

        <a
          href="https://www.freecodecamp.org/mubaidr/front-end-certification"
          title="Verify this certification"
          target="_blank"
        >
          <img src="/static/docs/front-end.jpg" />
        </a>
        <a
          href="https://www.freecodecamp.org/mubaidr/back-end-certification"
          title="Verify this certification"
          target="_blank"
        >
          <img src="/static/docs/back-end.jpg" />
        </a> -->
      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="has-text-centered">
      <a href="https://profile.codersrank.io/user/mubaidr" target="_blank">
        <img
          src="https://cr-skills-chart-widget.azurewebsites.net/api/api?branding=false&username=mubaidr&height=32"
        />
      </a>
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
<style>
/* .certifications {
  width: 100%;
  text-align: center;
}

.certifications a {
  display: inline-block;
  max-width: 320px;
}

.certifications img {
  width: 100%;
  height: auto;
  margin-bottom: 21px;
  -webkit-filter: grayscale(0.5);
  filter: grayscale(0.5);
  transition: filter 0.5s ease-out;
  border-radius: 4px;
}

.certifications img:hover {
  filter: grayscale(0);
  -webkit-filter: grayscale(0);
}

@media only screen and (max-width: 480px) {
  .certifications a {
    max-width: 100%;
  }
} */
</style>
