<template>
  <div class="d-flex box-cost" >
    <search-inputs
      :cities="cities"
      :from="from"
      :to="to"
      @setFromCity="setFromCity"
      @setToCity="setToCity"
    />

    <button type="button" class="calculate-btn" @click="calculateCost">
      Рассчитать стоимость
    </button>
  </div>

  <div
    style="display: flex; padding: 20px 30px; justify-content: space-between"
    v-if="Object.keys(cost).length > 0"
  >
    <div style="display: flex; gap: 12px">
      <div>
        <img src="@/assets/icons/distance-icon.svg" />
        <span class="ms-2">Расстояние: {{ cost.distance }} км </span>
      </div>
      <div>
        <img src="@/assets/icons/clock-icon.svg" />
        <span class="ms-2">Время: {{ cost.time }} ч </span>
      </div>
      <div>
        <img src="@/assets/icons/tenge-icon.svg" />
        <span class="ms-2">Стоимость: {{ cost.distance }} т </span>
      </div>
    </div>

    <button type="button" class="reset-btn" @click="resetCost">Сбросить</button>
  </div>
</template>

<script>
import { CITIES, DISTANCES } from "@/utils/constants";
import SearchInputs from "@/components/SearchInputs.vue";

export default {
  name: "package-cost",
  components: {
    SearchInputs,
  },
  data() {
    return {
      from: "",
      to: "",
      cities: CITIES,
      cost: {},
    };
  },
  methods: {
    setFromCity(city) {
      this.from = city;
    },
    setToCity(city) {
      this.to = city;
    },
    calculateCost() {
      this.cost = {};

      const distance = DISTANCES.find(
        (el) => el.from === this.from?.id && el.to === this.to?.id
      );

      if (distance) {
        this.cost.distance = distance.value;
        this.setCostTime();
        this.cost.deliveryCost = this.cost.distance * this.cost.time;
      } else {
        alert("Такого маршрута нету.");
      }
    },

    setCostTime() {
      if (this.cost.distance < 100) {
        this.cost.time = 24;
      } else if (this.cost.distance >= 100 && this.cost.distance < 500) {
        this.cost.time = 48;
      } else {
        this.cost.time = 96;
      }
    },

    resetCost() {
      this.from = "";
      this.to = "";
      this.cost = {};
    },
  },
};
</script>

<style scoped>
.box-cost {
  gap: 12px;
  background: #ffffff;
  border-radius: 0px 12px 12px 12px;
  padding: 20px 30px;
  align-items: flex-start;
  border-radius: 0px 12px 12px 12px; 
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.calculate-btn {
  width: 276px;
  height: 48px;
  background: #ef363c;
  color: #ffffff;
  font-size: 16px;
  /*font-weight: 700; */
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
}

.reset-btn {
  color: #ef363c;
  background: transparent;
  border: none;
  font-size: 16px;
}
</style>
