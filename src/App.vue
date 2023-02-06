<template>
  <div>
    <div class="container">
      <the-header />
    </div>
    <the-carousel />
    <div class="container">
      <package-tabs />
      <!-- <div style="position: absolute; margin-top: -80px; z-index: 1">
        <div class="d-flex">
          <div class="active-box">Рассчитать стоимость</div>
          <div class="box">Вызвать курьера</div>
          <div class="box">Отследить посылку</div>
        </div>
        <div
          class="d-flex"
          style="
            gap: 12px;
            background: #ffffff;
            border-radius: 0px 12px 12px 12px;
            padding: 20px 30px;
            align-items: flex-start;
          "
        >
          <div>
            <input
              :value="from.address"
              type="text"
              class="form-control"
              placeholder="Откуда"
              aria-describedby="basic-addon1"
              style="height: 48px; width: 350px"
            />
            <div
              style="
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 8px;
                max-width: 350px;
              "
            >
              <span
                v-for="city in cities"
                :key="city.id"
                @click="from = city"
                :class="from.id === city.id ? 'active-city' : 'city'"
              >
                {{ city.address }}
              </span>
            </div>
          </div>

          <img
            src="./assets/images/arrow-left-right.png"
            style="width: 24px; height: 24px; margin-top: 12px"
          />

          <div>
            <input
              :value="to.address"
              type="text"
              class="form-control"
              placeholder="Куда"
              aria-describedby="basic-addon1"
              style="height: 48px; width: 350px"
            />
            <div
              style="
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 8px;
                max-width: 350px;
              "
            >
              <span
                v-for="city in cities"
                :key="city.id"
                class="city"
                @click="to = city"
                :class="to.id === city.id ? 'active-city' : 'city'"
              >
                {{ city.address }}
              </span>
            </div>
          </div>

          <button type="button" class="calculate-btn" @click="calculateCost">
            Рассчитать стоимость
          </button>
        </div>

        <div style="display: flex;  padding: 20px 30px; justify-content: space-between" v-if="Object.keys(cost).length > 0">
          <div style="display: flex; gap: 12px;">
            <div>
              <img src='./assets/icons/distance-icon.svg' />
              <span class="ms-2">Расстояние: {{cost.distance}} км </span>
            </div>
            <div>
              <img src='./assets/icons/clock-icon.svg' />
              <span class="ms-2">Время: {{cost.time}} ч </span>
            </div>
            <div >
              <img src='./assets/icons/tenge-icon.svg' />
              <span class="ms-2">Стоимость: {{cost.distance}} т </span>
            </div>
          </div>

          <button type='button' class='reset-btn' @click="resetCost">Сбросить</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/Header.vue";
import TheCarousel from "@/components/Carousel.vue";
import PackageTabs from "@/components/PackageTabs.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheCarousel,
    PackageTabs
  },
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");

#app {
  font-family: "Mulish", sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
