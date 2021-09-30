<template>
  <div>
    <img :src="$withBase('/slack.svg')" alt="Join Community">
    <span>
      <a href='https://merginmaps.com/community/join' target="_blank" rel="noopener noreferrer">
        Join
      </a>
      our community chat and
      <a href='https://merginmaps.com/community/join' target="_blank" rel="noopener noreferrer">
        ask
      </a>
      questions!
    </span>
  </div>
</template>

<style scoped>
div {
  margin-left: 20px;
  width: 100%;
  display: flex;
}

img {
  border: none;
  height: 48px;
}

span {
  margin-top: 15px;
  margin-left: 10px;
}

</style>