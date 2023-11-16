<script setup lang="ts">
import { Modal } from 'bootstrap'
import { ref, onMounted } from 'vue'

// Modal
const emailModalRef = ref()
const emailModal = ref()
onMounted(() => {
  emailModal.value = new Modal(emailModalRef.value)
  emailModalRef.value.addEventListener('hidden.bs.modal', () => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      suggestion: '',
    }
    isSend.value = false
  })
})
const showEmailModal = () => {
  emailModal.value.show()
}
defineExpose({
  showEmailModal,
})

// list
const formData = ref({
  name: '',
  email: '',
  phone: '',
  suggestion: '',
})
const isSend = ref(false)
</script>

<template>
  <div
    class="modal fade"
    id="emailModal"
    tabindex="-1"
    aria-labelledby="emailModalLabel"
    aria-hidden="true"
    ref="emailModalRef"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0 ps-12">
          <p class="modal-title h2 fw-bold" id="exampleModalLabel">
            民眾服務信箱
          </p>
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
              <div
                class="bg-bg3 rounded-6 pt-8 ps-8 d-flex flex-column justify-content-between h-100"
              >
                <h4 class="h2 fw-bold mb-4 lh-base">
                  分享您的想法<br />一同為我們的未來打造更美好！
                </h4>
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    class="contact-logo w-100"
                    src="../assets/images/email.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <template v-if="!isSend">
                <form class="mt-4 mt-lg-0">
                  <div class="mb-4">
                    <label for="name" class="form-label fw-bold fs-1">
                      您的姓名
                    </label>
                    <input
                      type="text"
                      class="form-control bg-bg3"
                      id="name"
                      placeholder="姓名"
                      v-model="formData.name"
                    />
                  </div>
                  <div class="mb-4">
                    <label for="email" class="form-label fw-bold fs-1">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control bg-bg3"
                      id="email"
                      placeholder="email"
                      v-model="formData.email"
                    />
                  </div>
                  <div class="mb-4">
                    <label for="phone" class="form-label fw-bold fs-1">
                      手機
                    </label>
                    <input
                      type="tel"
                      class="form-control bg-bg3"
                      id="phone"
                      placeholder="手機號碼"
                      v-model="formData.phone"
                    />
                  </div>
                  <div class="mb-4">
                    <label for="suggestion" class="form-label fw-bold fs-1">
                      您的建言
                    </label>
                    <textarea
                      class="form-control bg-bg3"
                      placeholder="輸入内容"
                      id="suggestion"
                      v-model="formData.suggestion"
                    ></textarea>
                  </div>
                  <button
                    class="btn btn-primary text-white w-100"
                    @click="isSend = true"
                  >
                    送出意見
                  </button>
                </form>
              </template>
              <div
                class="h-100 d-flex flex-column justify-content-center align-items-center"
                v-else
              >
                <p class="h3 fw-bold mb-8">感謝您的意見</p>
                <img
                  class="donateSuccess-img img-fluid mb-8"
                  src="../assets/images/contact-success.png"
                  alt=""
                />
                <button class="btn btn-light px-24" @click="emailModal.hide()">
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
}
.donateSuccess-img {
  width: 187px;
}
</style>
