<script setup lang="ts">
import { ref } from 'vue'
import DonateModal from './DonateModal.vue'
import EmailModal from './EmailModal.vue'

const donateModal = ref()
const showDonateModal = () => {
  donateModal.value.showDonateModal()
}

const emailModal = ref()
const showEmailModal = () => {
  emailModal.value.showEmailModal()
}
</script>

<template>
  <div
    class="d-flex flex-column flex-md-row justify-content-center text-white p-16 px-4 px-lg-16"
    id="Contact"
  >
    <div
      class="px-6 py-10 p-xl-24 bg-primary rounded-8 mx-3 mb-6 mb-md-0"
      data-aos="fade-up"
    >
      <h5 class="display-5 text-mantou mb-4">小額支持喵喵</h5>
      <p class="h5 mb-6">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
      <div class="row justify-content-between align-items-center">
        <div class="col-7 col-lg-6">
          <button
            class="btn btn-light d-flex align-items-center fw-bold"
            @click="showDonateModal"
          >
            小額捐款<span class="ms-2 h3"
              ><i class="bi bi-arrow-right"></i
            ></span>
          </button>
        </div>
        <div class="col-5 col-lg-6">
          <img class="img-fluid" src="../assets/images/contact1.png" alt="" />
        </div>
      </div>
    </div>
    <div
      class="px-6 py-10 p-xl-24 bg-textPrimary rounded-8 mx-3"
      data-aos="fade-up"
    >
      <h5 class="display-5 text-mantou mb-4">民眾服務信箱</h5>
      <p class="h5 mb-6">
        親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
      </p>
      <div class="row justify-content-between align-items-center">
        <div class="col-7 col-lg-6">
          <button
            class="btn btn-light d-flex align-items-center fw-bold"
            @click="showEmailModal"
          >
            填寫表單<span class="ms-2 h3"
              ><i class="bi bi-arrow-right"></i
            ></span>
          </button>
        </div>
        <div class="col-5 col-lg-6">
          <img class="img-fluid" src="../assets/images/contact2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <DonateModal ref="donateModal" />
  <EmailModal ref="emailModal" />
</template>

<style scoped></style>
