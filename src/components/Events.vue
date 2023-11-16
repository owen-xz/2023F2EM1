<script setup lang="ts">
import EventModal from './EventModal.vue'
import { ref } from 'vue'
import eventImage1 from '../assets/images/event1.png'
import eventImage2 from '../assets/images/event2.png'
import eventImage3 from '../assets/images/event3.png'

const eventList = ref([
  {
    imgUrl: eventImage1,
    createDate: '2023/12/24',
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    content:
      '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
  },
  {
    imgUrl: eventImage2,
    createDate: '2023/12/20',
    title: '收容所模特兒大比拼！',
    content:
      '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
  },
  {
    imgUrl: eventImage3,
    createDate: '2023/12/26',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content:
      '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
  },
])

const eventModalRef = ref()
const showEventModal = (index: number) => {
  eventModalRef.value.showEventModal(index)
}
</script>

<template>
  <div class="p-16 px-4 px-lg-16" id="Events">
    <div class="d-flex flex-column align-items-center">
      <div class="text-center" data-aos="fade-up">
        <span
          class="rounded rounded-3 bg-textPrimary text-white fw-bold px-3 py-2"
        >
          LATEST EVENTS
        </span>
        <div class="text-mantou text-primaryGrandient display-3 mb-10">
          最新活動
        </div>
      </div>
      <div class="row" data-aos="fade-up">
        <div class="col-lg-6">
          <div class="cursor-pointer mb-6 mb-lg-0" @click="showEventModal(2)">
            <img
              class="img-fluid rounded rounded-6 mb-3"
              :src="eventList[2].imgUrl"
              :alt="eventList[2].title"
            />
            <div>
              <p class="fs-3 text-secondary">{{ eventList[2].createDate }}</p>
              <h5 class="h5 fw-bold my-2">{{ eventList[2].title }}</h5>
              <p>{{ eventList[2].content }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="list-unstyled">
            <li
              class="cursor-pointer d-flex mb-6"
              v-for="(items, index) in eventList"
              :key="index"
              @click="showEventModal(index)"
            >
              <img
                class="listImg img-object-fit img-fluid rounded rounded-2 me-3"
                :src="items.imgUrl"
                :alt="items.title"
              />
              <div>
                <p class="fs-3 text-secondary">{{ items.createDate }}</p>
                <h5 class="fs-2 fw-bold my-2">{{ items.title }}</h5>
                <p class="listContent">{{ items.content }}</p>
              </div>
            </li>
          </ul>
          <button class="btn btn-light border-pill fw-bold">
            <div class="d-flex align-items-center">
              查看更多<span class="ms-2 h2"
                ><i class="bi bi-arrow-right"></i
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <EventModal ref="eventModalRef" :eventList="eventList" />
  </div>
</template>

<style lang="scss" scoped>
.listImg {
  height: 134px;
  width: 201px;
}
@media (max-width: 768px) {
  .listImg {
    height: 112px;
    width: 109px;
  }
}
.listContent {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
