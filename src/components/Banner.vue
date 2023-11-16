<script setup lang="ts"></script>

<template>
  <div class="d-flex flex-column align-items-center mt-8 mt-lg-16">
    <h2
      class="title display-1 text-primaryGrandient text-mantou text-center lh-1 mb-4"
      data-aos="fade-down"
      data-aos-offset="0"
    >
      台灣的明天<br class="d-lg-none" />
      喵先鋪路
    </h2>
    <div
      class="d-flex flex-column flex-md-row align-items-center mb-3"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-offset="0"
    >
      <div
        class="px-4 py-3 me-3 rounded rounded-4 bg-textPrimary text-white h3 fw-bold"
      >
        2024 立委參選人
      </div>
      <div class="d-flex shadow-sm px-4 py-3 rounded rounded-4">
        <div
          class="title-num me-3 h2 text-white fw-bold bg-primaryGrandient rounded-circle d-flex justify-content-center align-items-center"
        >
          3
        </div>
        <p class="h1 text-primary fw-bold">喵立翰 Miao Li-Han</p>
      </div>
    </div>
    <img
      class="bannerImg mt-4"
      src="../assets/images/banner.png"
      alt=""
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-offset="0"
    />
    <div
      class="bg-primary display-3 text-white text-mantou w-100 overflow-hidden d-flex py-1"
    >
      <div class="marquee-content" v-for="item in 2" :key="item">
        <span class="me-4">為喵星人，護台灣！</span>
        <span class="me-4">從喵的眼中，看見台灣</span>
        <span class="me-4">喵的未來，人的希望</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-num {
  height: 50px;
  width: 50px;
}
.bannerImg {
  width: 723px;
}
@media (max-width: 768px) {
  .bannerImg {
    width: 343px;
  }
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
