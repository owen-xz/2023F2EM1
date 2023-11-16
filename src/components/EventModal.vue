<script setup lang="ts">
import { Modal } from 'bootstrap'
import { ref, onMounted } from 'vue'

// Modal
const eventModalRef = ref()
const eventModal = ref()
onMounted(() => {
  eventModal.value = new Modal(eventModalRef.value)
  // eventModal.value.show()
})
const showEventModal = (index: number) => {
  nowIndex.value = index
  eventModal.value.show()
}
defineExpose({
  showEventModal,
})

// event
const { eventList } = defineProps<{
  eventList: {
    imgUrl: string
    createDate: string
    title: string
    content: string
  }[]
}>()
const nowIndex = ref(0)
</script>

<template>
  <div
    class="modal fade"
    id="eventModal"
    tabindex="-1"
    aria-labelledby="eventModalLabel"
    aria-hidden="true"
    ref="eventModalRef"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0 ps-12">
          <p class="modal-title h2 fw-bold" id="exampleModalLabel">最新活動</p>
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
                :src="eventList[nowIndex].imgUrl"
                alt=""
              />
              <p class="mb-2">
                {{ eventList[nowIndex].title }}
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
              <h2 class="h2 text-primary fw-bold mb-2">
                {{ eventList[nowIndex].title }}
              </h2>
              <p class="fs-3 text-secondary mb-10">
                {{ eventList[nowIndex].createDate }}
              </p>
              <p class="pb-8 mb-16">{{ eventList[nowIndex].content }}</p>
              <div class="bg-light rounded rounded-3 p-3">
                <div class="fw-bold mb-4">更多活動</div>
                <div class="row">
                  <template v-for="(item, index) in eventList" :key="index">
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
