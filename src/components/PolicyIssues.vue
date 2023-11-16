<script setup lang="ts">
import Swiper from 'swiper'
import 'swiper/css'

import PolicyModal from './PolicyModal.vue'
import { onMounted, ref } from 'vue'
import policyImage1 from '../assets/images/policy1.png'
import policyImage2 from '../assets/images/policy2.png'
import policyImage3 from '../assets/images/policy3.png'

const policyList = ref([
  {
    imgUrl: policyImage1,
    tag: '喵的保障',
    title: '為毛孩子謀福利！ 推動寵物醫療保障方案',
    content: [
      {
        subtitle: '建立寵物公園',
        text: '每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。',
      },
      {
        subtitle: '推廣寵物友善商家',
        text: '鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。',
      },
      {
        subtitle: '舉辦寵物活動和工作坊',
        text: '與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。',
      },
    ],
  },
  {
    imgUrl: policyImage2,
    tag: '喵的教育',
    title: '推廣寵物飼養教育！ 讓愛更加專業',
    content: [
      {
        subtitle: '建立寵物飼養教育中心',
        text: '每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。',
      },
      {
        subtitle: '推廣寵物飼養課程',
        text: '與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。',
      },
      {
        subtitle: '製作教育資料',
        text: '出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。',
      },
    ],
  },
  {
    imgUrl: policyImage3,
    tag: '喵的福利',
    title: '打造休閒天堂！ 推廣寵物休閒與娛樂場所',
    content: [
      {
        subtitle: '設立寵物醫療基金',
        text: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用',
      },
      {
        subtitle: '提供醫療補助',
        text: '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力',
      },
      {
        subtitle: '合作動物醫院',
        text: '目前已有和超過 200 家動物醫院進行初步的合作討論',
      },
    ],
  },
])
const policyModalRef = ref()
const showPolicyModal = (index: number) => {
  policyModalRef.value.showPolicyModal(index)
}

// swiper
const swiper = ref()
const nowIndex = ref(0)
onMounted(() => {
  const getSlidesPerView = () => {
    if (document.body.clientWidth >= 768) {
      return 2
    } else if (document.body.clientWidth >= 576) {
      return 1.75
    } else {
      return 1.5
    }
  }
  const getSpaceBetween = () => {
    if (document.body.clientWidth >= 768) {
      return -25
    } else if (document.body.clientWidth >= 576) {
      return -20
    } else {
      return -15
    }
  }

  swiper.value = new Swiper('.policy-swiper', {
    slidesPerView: getSlidesPerView(),
    spaceBetween: getSpaceBetween(),
    centeredSlides: true,
    loop: true,
    on: {
      slideChange: (swiper) => {
        nowIndex.value = swiper.realIndex
      },
    },
  })
})
const slideSwiper = (page: string) => {
  if (page === 'prev') {
    swiper.value.slidePrev()
  } else if (page === 'next') {
    swiper.value.slideNext()
  }
}
</script>

<template>
  <div class="py-16 bg-bg2" id="PolicyIssues">
    <div class="d-flex flex-column align-items-center">
      <div class="text-center" data-aos="fade-up">
        <span
          class="rounded rounded-3 bg-textPrimary text-white fw-bold px-3 py-2"
        >
          POLICY ISSUES
        </span>
        <div class="text-mantou text-primaryGrandient display-3 mb-10">
          政策議題
        </div>
      </div>

      <div class="swiper policy-swiper w-100" data-aos="fade-up">
        <div class="swiper-wrapper mb-6">
          <div
            class="swiper-slide"
            v-for="(item, index) in [...policyList, ...policyList]"
            :key="index"
          >
            <div class="bg-white p-6 border-0 rounded-8">
              <div class="row align-items-center">
                <div class="col-lg-7">
                  <img
                    :src="item.imgUrl"
                    class="img-fluid rounded-6 me-6 mb-6 mb-lg-0"
                    :alt="item.title"
                  />
                </div>
                <div class="col-lg-5">
                  <span class="rounded-pill bg-bg2 fs-3 px-3 py-1">{{
                    item.tag
                  }}</span>
                  <h4 class="h5 fw-bold mt-5 mb-10 lh-base">
                    {{ item.title.split(' ')[0] }}
                    <br />
                    {{ item.title.split(' ')[1] }}
                  </h4>
                  <button
                    class="btn btn-primary text-white fw-bold"
                    @click="showPolicyModal(index % policyList.length)"
                  >
                    <div class="d-flex align-items-center">
                      查看<span class="ms-2 h3"
                        ><i class="bi bi-arrow-right"></i
                      ></span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button
            class="arrowBtn border-0 rounded-circle bg-white h4 text-primary mx-2"
            @click="slideSwiper('prev')"
          >
            <i class="bi bi-arrow-left"></i>
          </button>
          <div
            class="pageCircle border-0 rounded-circle bg-primary mx-2"
            :class="{ active: nowIndex % policyList.length === item - 1 }"
            v-for="item in policyList.length"
            :key="item"
          />
          <button
            class="arrowBtn border-0 rounded-circle bg-white h4 text-primary mx-2"
            @click="slideSwiper('next')"
          >
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
    <PolicyModal ref="policyModalRef" :policyList="policyList" />
  </div>
</template>

<style lang="scss" scoped>
.listImg {
  height: 134px;
  width: 201px;
}
.listContent {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.swiper-slide {
  &:not(.swiper-slide-active) {
    transform: scale(0.8);
  }
}

.policyCard {
  height: 281px;
}
.arrowBtn {
  width: 40px;
  height: 40px;
}
.pageCircle {
  width: 12px;
  height: 12px;
  opacity: 0.4;
  &.active {
    opacity: 1;
  }
}
</style>
