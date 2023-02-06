<template>
  <div class="benefit-box">
    <h4 class="title">Наши преимущества</h4>

    <div class="row mt-4">
      <div class="col-md-3">
        <div class="delivery-box">
          <img src="@/assets/images/fast-delivery-1.png" alt="fast-delivery" />
          <h6 class="delivery-text">Быстрая доставка</h6>
        </div>
      </div>
      <div class="col-md-3">
        <div class="delivery-box">
          <img src="@/assets/images/fast-delivery-2.png" alt="fast-delivery" />
          <h6 class="delivery-text">Доставим в любую точку города и области</h6>
        </div>
      </div>
      <div class="col-md-3">
        <div class="delivery-box">
          <img src="@/assets/images/fast-delivery-3.png" alt="fast-delivery" />
          <h6 class="delivery-text">Ежедневные отправки</h6>
        </div>
      </div>
      <div class="col-md-3">
        <div class="delivery-box">
          <img src="@/assets/images/fast-delivery-4.png" alt="fast-delivery" />
          <h6 class="delivery-text">Собственный склад</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "the-benefits",
};
</script>

<style scoped>
.benefit-box {
  margin-top: 200px;
}

.delivery-box {
  background: #f6f6f6;
  border-radius: 12px;
  padding: 20px 16px;
  height: 160px;
}

.delivery-text {
  font-size: 16px;
  font-weight: 700;
}

.title {
  font-size: 24px;
  font-weight: 800;
  text-align: left;
}
</style>
