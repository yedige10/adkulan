<template>
  <div class="mt-5">
    <h4 class="title">Нам доверяют</h4>

    <div class="row">
      <div class="col-md-3" v-for="partner in partners" :key="partner.id">
        <img :src="partner.path" :alt="partner.alt" />
      </div>
    </div>
  </div>
</template>
<script>
import MicrosoftLogo from "@/assets/images/microsoft.png";
import TechodomLogo from "@/assets/images/technodom.png";
import ZepterLogo from "@/assets/images/zepter.png";
import PhilipLogo from "@/assets/images/philip.png";
import KaztransLogo from "@/assets/images/kaztrans.png";
import KaspiLogo from "@/assets/images/kaspi.png";
import GazpromLogo from "@/assets/images/gazprom.png";
import AstanamotorsLogo from "@/assets/images/astanaMotors.png";

export default {
  name: "the-partners",
  data() {
    return {
      partners: [
        { id: 1, path: TechodomLogo, alt: "TechodomLogo" },
        { id: 2, path: KaspiLogo, alt: "KaspiLogo" },
        { id: 3, path: AstanamotorsLogo, alt: "AstanamotorsLogo" },
        { id: 4, path: ZepterLogo, alt: "ZepterLogo" },
        { id: 5, path: GazpromLogo, alt: "GazpromLogo" },
        { id: 6, path: PhilipLogo, alt: "PhilipLogo" },
        { id: 7, path: KaztransLogo, alt: "KaztransLogo" },
        { id: 8, path: MicrosoftLogo, alt: "MicrosoftLogo" },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 800;
  text-align: left;
}

.full-width {
  width: 100%;
}
</style>
