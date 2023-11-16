<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const targetScrollTop =
      document.body.clientWidth > 576
        ? section.offsetTop - 75
        : section.offsetTop
    window.scrollTo({ top: targetScrollTop, behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-sm-top">
    <div class="container-fluid">
      <a
        class="navbar-brand text-primary fw-bold d-flex align-items-center"
        href="#"
      >
        <img class="logoImg me-2" src="../assets/images/logo.png" alt="" />
        喵立翰 Miao Li-Han
      </a>
      <div class="d-none d-lg-block">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button
              class="nav-link text-textPrimary"
              @click="scrollToSection('Advocate')"
            >
              候選人主張
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link text-textPrimary"
              @click="scrollToSection('Events')"
            >
              最新活動
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link text-textPrimary"
              @click="scrollToSection('PolicyIssues')"
            >
              政策議題
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link text-textPrimary"
              @click="scrollToSection('Contact')"
            >
              小額捐款
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link text-textPrimary"
              @click="scrollToSection('Contact')"
            >
              民眾服務信箱
            </button>
          </li>
        </ul>
      </div>
      <div class="d-none d-sm-block">
        <ul class="list-unstyled d-flex flex-row">
          <li class="p-2">
            <a class="nav-link text-primary" href="#">
              <i class="h2 bi bi-facebook"></i>
            </a>
          </li>
          <li class="p-2">
            <a class="nav-link text-primary" href="#">
              <i class="h2 bi bi-instagram"></i>
            </a>
          </li>
          <li class="p-2">
            <a class="nav-link text-primary" href="#">
              <i class="h2 bi bi-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="fixed-bottom d-flex text-center bg-bg1 d-lg-none">
    <button
      class="navBottomBtn btn btn-link text-textPrimary link-underline link-underline-opacity-0 px-0 py-4"
      @click="scrollToSection('Advocate')"
    >
      <div class="h4"><i class="bi bi-person-fill"></i></div>
      候選人主張
    </button>
    <button
      class="navBottomBtn btn btn-link text-textPrimary link-underline link-underline-opacity-0 px-0 py-4"
      @click="scrollToSection('Events')"
    >
      <div class="h4"><i class="bi bi-list-task"></i></div>
      最新活動
    </button>
    <button
      class="navBottomBtn btn btn-link text-textPrimary link-underline link-underline-opacity-0 px-0 py-4"
      @click="scrollToSection('PolicyIssues')"
    >
      <div class="h4"><i class="bi bi-chat-quote-fill"></i></div>
      政策議題
    </button>
    <button
      class="navBottomBtn btn btn-link text-textPrimary link-underline link-underline-opacity-0 px-0 py-4"
      @click="scrollToSection('Contact')"
    >
      <div class="h4"><i class="bi bi-coin"></i></div>
      小額捐款
    </button>
    <button
      class="navBottomBtn btn btn-link text-textPrimary link-underline link-underline-opacity-0 px-0 py-4"
      @click="scrollToSection('Contact')"
    >
      <div class="h4"><i class="bi bi-envelope"></i></div>
      服務信箱
    </button>
  </div>
</template>

<style scoped>
.logoImg {
  height: 43px;
}
.navBottomBtn {
  width: 20%;
  font-size: 10px;
}
</style>
