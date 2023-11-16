<script setup lang="ts">
import { Modal } from 'bootstrap'
import { ref, onMounted } from 'vue'

// Modal
const donateModalRef = ref()
const donateModal = ref()
onMounted(() => {
  donateModal.value = new Modal(donateModalRef.value)
  donateModalRef.value.addEventListener('hidden.bs.modal', () => {
    isDonate.value = false
    selectedDonateIndex.value = null
  })
})
const showDonateModal = () => {
  donateModal.value.show()
}
defineExpose({
  showDonateModal,
})

// list
const donateList = ref([
  {
    name: '喵星人之友',
    price: '600',
    quantity: '9,957',
  },
  {
    name: '喵星大使',
    price: '6,000',
    quantity: '2,000',
  },
  {
    name: '喵星傳奇',
    price: '60,000',
    quantity: '999',
  },
])
const selectedDonateIndex = ref(null as null | number)
const isDonate = ref(false)
</script>

<template>
  <div
    class="modal fade"
    id="donateModal"
    tabindex="-1"
    aria-labelledby="donateModalLabel"
    aria-hidden="true"
    ref="donateModalRef"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0 ps-12">
          <p class="modal-title h2 fw-bold" id="exampleModalLabel">小額捐款</p>
          <button
            class="bg-white border-0 h2"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="bi bi-x-circle-fill"></i>
          </button>
        </div>
        <div class="modal-body p-6 p-lg-12 pt-0">
          <div class="row">
            <div class="col-lg-7">
              <div class="bg-bg2 rounded-6 p-8 mb-4 mb-lg-0">
                <h4 class="h2 text-primary fw-bold mb-4 lh-base">
                  您的小筆捐款<br />是每隻毛孩未來的大大動力！
                </h4>
                <p>目前小額贊助總金額</p>
                <p class="h2 fw-bold">987,655,873</p>
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    class="contact-logo"
                    src="../assets/images/contact1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <template v-if="!isDonate">
                <p class="h5 fw-bold mb-4">捐款方案</p>
                <ul class="list-unstyled">
                  <li
                    class="cursor-pointer d-flex justify-content-between align-items-center border border-2 rounded-4 px-4 py-6 mb-4"
                    :class="{ 'border-primary': selectedDonateIndex === index }"
                    v-for="(item, index) in donateList"
                    :key="index"
                    @click="selectedDonateIndex = index"
                  >
                    <div class="h5 fw-bold text-primary">{{ item.name }}</div>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      NT$
                      <span class="ms-2 me-6 h4 fw-bold">{{ item.price }}</span>
                      <span class="fs-3 text-secondary"
                        >已有 {{ item.quantity }} 人贊助</span
                      >
                    </div>
                  </li>
                  <li
                    class="cursor-pointer border border-2 rounded-4 p-4 mb-4"
                    :class="{
                      'border-primary':
                        selectedDonateIndex === donateList.length,
                    }"
                    @click="selectedDonateIndex = donateList.length"
                  >
                    <div class="h5 fw-bold text-primary mb-2">自定贊助金額</div>
                    <div
                      class="bg-light rounded-2 ps-4 d-flex align-items-center"
                    >
                      NT$
                      <input
                        class="form-control bg-transparent ms-2"
                        type="text"
                        placeholder="輸入金額"
                      />
                    </div>
                  </li>
                </ul>
                <button
                  class="btn btn-primary text-white w-100"
                  @click="isDonate = true"
                >
                  前往捐款
                </button>
              </template>
              <div
                class="h-100 d-flex flex-column justify-content-center align-items-center"
                v-else
              >
                <p class="h3 fw-bold mb-8">感謝您的捐款</p>
                <img
                  class="donateSuccess-img img-fluid mb-8"
                  src="../assets/images/contact-success.png"
                  alt=""
                />
                <button class="btn btn-light px-24" @click="donateModal.hide()">
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-logo {
  width: 336px;
  max-width: 100%;
}
.donateSuccess-img {
  width: 187px;
}
</style>
