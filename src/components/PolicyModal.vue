<script setup lang="ts">
import { Modal } from 'bootstrap'
import { ref, onMounted } from 'vue'

// Modal
const modalRef = ref()
const policyModal = ref()
onMounted(() => {
  policyModal.value = new Modal(modalRef.value)
  // eventModal.value.show()
})
const showPolicyModal = (index: number) => {
  nowIndex.value = index
  policyModal.value.show()
}
defineExpose({
  showPolicyModal,
})

// event
const { policyList } = defineProps<{
  policyList: {
    imgUrl: string
    tag: string
    title: string
    content: {
      subtitle: string
      text: string
    }[]
  }[]
}>()
const nowIndex = ref(0)
</script>

<template>
  <div
    class="modal fade"
    id="policyModal"
    tabindex="-1"
    aria-labelledby="policyModalLabel"
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0 ps-12">
          <p class="modal-title h2 fw-bold" id="exampleModalLabel">政策議題</p>
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
            <div class="col-lg-5">
              <img
                class="img-fluid mb-3 rounded-6"
                :src="policyList[nowIndex].imgUrl"
                alt=""
              />
              <p class="mb-2">
                {{ policyList[nowIndex].title }}
              </p>
              <div class="mb-4 mb-lg-0">
                分享
                <button class="h3 text-primary border-0 bg-white p-0 ms-4">
                  <i class="bi bi-facebook"></i>
                </button>
                <button class="h3 text-primary border-0 bg-white p-0 ms-4">
                  <i class="bi bi-instagram"></i>
                </button>
                <button class="h3 text-primary border-0 bg-white p-0 ms-4">
                  <i class="bi bi-line"></i>
                </button>
                <button class="h3 text-primary border-0 bg-white p-0 ms-4">
                  <i class="bi bi-twitter"></i>
                </button>
              </div>
            </div>
            <div class="col-lg-7">
              <h2 class="h2 text-primary fw-bold mb-10">
                {{ policyList[nowIndex].title }}
              </h2>
              <div class="pb-8 mb-16">
                <template
                  v-for="item in policyList[nowIndex].content"
                  :key="index"
                >
                  <p class="h5 fw-bold mb-2">{{ item.subtitle }}</p>
                  <p class="fs-1 mb-6">{{ item.text }}</p>
                </template>
              </div>
              <div class="bg-light rounded rounded-3 p-3">
                <div class="fw-bold mb-4">更多政策議題</div>
                <div class="row">
                  <template v-for="(item, index) in policyList" :key="index">
                    <div class="col-6 col-lg-4" v-if="nowIndex !== index">
                      <div class="cursor-pointer" @click="nowIndex = index">
                        <img
                          class="listImg img-object-fit img-fluid rounded rounded-2 mb-3"
                          :src="item.imgUrl"
                          alt=""
                        />
                        <p>{{ item.title }}</p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listImg {
  height: 134px;
}
</style>
