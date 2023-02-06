<template>
  <div>
    <input
      :value="from.address"
      type="text"
      class="form-control input"
      placeholder="Откуда"
      aria-describedby="basic-addon1"
    />
    <div class="span-box">
      <span
        v-for="city in cities"
        :key="city.id"
        @click="$emit('setFromCity', city)"
        :class="from.id === city.id ? 'active-city' : 'city'"
      >
        {{ city.address }}
      </span>
    </div>
  </div>

  <img src="@/assets/images/arrow-left-right.png" class="arrow" />

  <div>
    <input
      :value="to.address"
      type="text"
      class="form-control input"
      placeholder="Куда"
      aria-describedby="basic-addon1"
    />
    <div class="span-box">
      <span
        v-for="city in cities"
        :key="city.id"
        class="city"
        @click="$emit('setToCity', city)"
        :class="to.id === city.id ? 'active-city' : 'city'"
      >
        {{ city.address }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-inputs",
  props: ["cities", "from", "to"],
};
</script>

<style scoped>
.input {
  height: 48px;
  width: 350px;
}

.city {
  background: #f6f6f6;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
}

.active-city {
  background: #ef363c;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
}

.span-box {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  max-width: 350px;
}

.arrow {
  width: 24px;
  height: 24px;
  margin-top: 12px;
}
</style>
