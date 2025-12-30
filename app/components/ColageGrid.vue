<template>
  <div class="parent">
    <div class="div1" />
    <div class="div2" />
    <div class="div4" />
    <div class="div5" />
    <div class="div6" />
    <div class="div7" />
    <div class="div8" />
  </div>
</template>
<style lang="scss">
.grid {
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.parent {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
  height: 550px;

  @include mobile {
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    height: 70dvh;
  }
}

.div1 {
  grid-row: span 2 / span 2;
  background-image: url('https://tts-nuxt.s3.eu-central-1.amazonaws.com/grid/hwvbus2ziaued2cy7ugi.avif');
  background-size: cover;
  background-position: top center;
}

.div2 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
  background-image: url('https://tts-nuxt.s3.eu-central-1.amazonaws.com/grid/dpdi5gsodi8lrftns8rt.avif');
  background-size: cover;
  background-position: center;
}

.div4 {
  grid-column: span 4 / span 4;
  grid-column-start: 1;
  grid-row-start: 3;
  background-image: url('https://tts-nuxt.s3.eu-central-1.amazonaws.com/grid/le4qretujxpekfkceyq4.avif');
  background-size: cover;
  background-position: center;
}

.div5 {
  grid-column: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 1;
  background-image: url('https://tts-nuxt.s3.eu-central-1.amazonaws.com/grid/hnohannq0iyzgzkkhgbe.avif');
  background-size: cover;
  background-position: center;
}

.div6 {
  grid-column-start: 4;
  grid-row-start: 2;
  background-image: url('https://tts-nuxt.s3.eu-central-1.amazonaws.com/grid/rgmcjqcrrzacf5h6lgu6.avif');
  background-size: cover;
  background-position: center;
}

.div7 {
  grid-row: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 2;
  background-image: url('https://tts-nuxt.s3.eu-central-1.amazonaws.com/grid/nuv3qevnx4ytksdhmvtu.avif');
  background-size: cover;
  background-position: center;
}

.div8 {
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
  grid-column-start: 6;
  grid-row-start: 1;
  background-image: url('https://tts-nuxt.s3.eu-central-1.amazonaws.com/grid/ymicspvehbncwt1utiwu.avif');
  background-size: cover;
  background-position: center;

  @include mobile {
    display: none;
  }
}
</style>
