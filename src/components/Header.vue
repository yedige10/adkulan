<template>
    <nav class="navbar navbar-expand-lg" style="background: #ffffff">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="../assets/images/logo.png" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link link" aria-current="page" href="#">Главная</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">Наши преимущества</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">История Exline</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">Нам доверяют</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">Контакты</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#"><div class="vr hr"></div></a>
              </li>
              <li class="nav-item">
                <a class="nav-link contact-link" href="#">info@exline.kz</a>
              </li>
              <li class="nav-item">
                <a class="nav-link contact-link" href="#">+7 (777) 707 87 77</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>

export default {
    name: 'the-header'
}
</script>

<style scoped>
.link {
    color: #000000;
    font-size: 14px;
}

.contact-link{
    color: #583899;
    font-size: 14px;
}

</style>
