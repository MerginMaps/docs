<template>
  <a :href="href" target="_blank" rel="noopener">
    <span v-if="svgRaw" v-html="svgRaw" />
  </a>
</template>

<script>
import { defineComponent } from "vue";

import githubSvg from "/socials/github.svg?raw";
import linkedinSvg from "/socials/linkedin.svg?raw";
import slackSvg from "/socials/slack.svg?raw";
import blueskySvg from "/socials/bluesky.svg?raw";
import facebookSvg from "/socials/facebook.svg?raw";
import youtubeSvg from "/socials/youtube.svg?raw";
import mastodonSvg from "/socials/mastodon.svg?raw";

export default defineComponent({
  props: { icon: { type: String, required: true } },
  computed: {
    href() {
      const mapper = {
        github: "https://github.com/MerginMaps",
        linkedin: "https://www.linkedin.com/company/mergin-maps/",
        bluesky: "https://bsky.app/profile/merginmaps.bsky.social",
        slack: "https://merginmaps.com/community/join",
        facebook: "https://www.facebook.com/profile.php?id=61564969364057",
        youtube: "https://www.youtube.com/@merginmaps",
        mastodon: "https://fosstodon.org/@merginmaps",
      };

      return mapper[this.icon];
    },
    svgRaw() {
      const icons = {
        github: githubSvg,
        linkedin: linkedinSvg,
        slack: slackSvg,
        facebook: facebookSvg,
        bluesky: blueskySvg,
        youtube: youtubeSvg,
        mastodon: mastodonSvg,
      };
      return icons[this.icon] || null;
    },
  },
});
</script>

<style lang="scss" scoped>
span {
  font-size: 1.5rem;
}
a {
  color: inherit;
}
</style>
