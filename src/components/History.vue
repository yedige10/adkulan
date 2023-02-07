<template>
  <div class="mt-5">
    <h4 class="title">История Exline</h4>

    <div class="row mt-4">
      <div class="col-md-5">
        <div class="history-box">
          <h4 class="title">
            Курьерская компания Exline основана 31 июля 2003 года
          </h4>

          <p style="font-size: 14px">
            За время работы компания Exline заняла достойную нишу на рынке
            почтовых услуг, зарекомендовав себя как надежного партнера, которому
            доверяют свои отправления многие компании казахстанского и
            международного бизнеса
          </p>
        </div>

        <img
          src="@/assets/images/courier-1.png"
          class="full-width mt-3"
          alt="courier"
        />
      </div>

      <div class="col-md-7">
        <img
          src="@/assets/images/courier-2.png"
          alt="courier"
          class="full-width"
        />

        <div class="history-box mt-3">
          <h4 class="title">
            Курьерская компания Exline, оказывая доступные услуги всем,
            предлагает индивидуальный подход к каждому клиенту!
          </h4>

          <p style="font-size: 14px">
            Развивая свой бизнес, мы хотим быть полезными в развитие Вашего
            бизнеса! Профессиональный опыт сотрудников курьерской компании
            Exline и опыт наших партнеров дает нам право быть уверенными в том,
            что наше сотрудничество обеспечит сторонам экономию средств и
            времени! ExLine — линия надежной доставки!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "the-history",
};
</script>

<style scoped>
.history-box {
  background: #f6f6f6;
  border-radius: 12px;
  padding: 30px;
  text-align: left;
}

.title {
  font-size: 24px;
  font-weight: 800;
  text-align: left;
}

.full-width {
  width: 100%;
}
</style>
