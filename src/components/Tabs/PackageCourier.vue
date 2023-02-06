<template>
  <div class="d-flex box-courier" >
    <search-inputs
      :cities="cities"
      :from="from"
      :to="to"
      @setFromCity="setFromCity"
      @setToCity="setToCity"
    />

    <button
      type="button"
      class="calculate-btn"
      @click="alert('Вызвать курьера')"
    >
      Вызвать курьера
    </button>
  </div>
</template>

<script>
import SearchInputs from "@/components/SearchInputs.vue";
import { CITIES } from "@/utils/constants";

export default {
  name: "package-courier",
  components: {
    SearchInputs,
  },
  data() {
    return { from: "", to: "", cities: CITIES };
  },
  methods: {
    setFromCity(city) {
      this.from = city;
    },
    setToCity(city) {
      this.to = city;
    },
  },
};
</script>

<style scoped>
.box-courier {
  gap: 12px;
  background: #ffffff;
  border-radius: 0px 12px 12px 12px;
  padding: 20px 30px;
  align-items: flex-start;
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
