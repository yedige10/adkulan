<template>
  <div class="box">
    <div class="d-flex">
      <div
        :class="
          tab === 'delivery' ? 'active-tab active-delivery-border' : 'tab'
        "
        @click="tab = 'delivery'"
      >
        Рассчитать стоимость
      </div>
      <div
        :class="tab === 'courier' ? 'active-tab ' : 'tab'"
        @click="tab = 'courier'"
      >
        Вызвать курьера
      </div>
      <div
        :class="tab === 'track' ? 'active-tab active-track-border' : 'tab'"
        @click="tab = 'track'"
      >
        Отследить посылку
      </div>
    </div>

      <package-cost v-if="tab === 'delivery'" />
      <package-courier v-if="tab === 'courier'" />
      <package-track v-if="tab === 'track'" />
  </div>
</template>

<script>
import PackageCost from "@/components/Tabs/PackageCost.vue";
import PackageCourier from "@/components/Tabs/PackageCourier.vue";
import PackageTrack from "@/components/Tabs/PackageTrack.vue";

export default {
  name: "package-tabs",
  components: {
    PackageCost,
    PackageCourier,
    PackageTrack,
  },
  data() {
    return {
      tab: "delivery",
    };
  },
};
</script>
<style scoped>
.box {
  position: absolute;
  margin-top: -80px;
  z-index: 1;
  cursor: pointer;
}


.tab {
  padding: 15px 20px;
  color: #000000;
  font-weight: 700;
}

.active-tab {
  background: #ffffff;
  padding: 15px 20px;
  color: #ef363c;
  font-weight: 700;
  /*box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;*/
}

.active-delivery-border {
  border-radius: 12px 0px 0px 0px;
}

.active-track-border {
  border-radius: 0px 12px 0px 0px;
}
</style>
