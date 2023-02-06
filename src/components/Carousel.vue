<template>
  <div id="carouselExample" class="carousel slide carousel-background">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-box">
          <div class="carousel-text-box">
            <h4>Внутригородская доставка</h4>
            <p class="carousel-text">
              Курьерская служба Exline предлагает Вашему вниманию услуги по
              внутригородской доставке отправлений во всех областных центрах
              Республики Казахстан
            </p>

            <button class="more-btn">Подробнее</button>
          </div>
          <div class="img-container">
            <img class="top" src="../assets/images/car.png" alt="" />
            <img class="bottom" src="../assets/images/ellipse.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev no-opacity"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="prev" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next no-opacity"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="next" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "the-carousel",
};
</script>

<style scoped>
.carousel-background {
  background: #f6f6f6;
}

.carousel-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.carousel-text-box {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 300px;
}

.carousel-text {
  max-width: 500px;
  text-align: left;
}

.more-btn {
  width: 200px;
  background: #ef363c;
  color: #ffffff;
  font-size: 14px;
  /*font-weight: 700; */
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
}

.no-opacity {
  opacity: 1;
}

.img-container {
  position: relative;
}

.img-container .top {
  position: absolute;
  top: 0;
  left: -200px;
  z-index: 1;
}

.prev {
  background-image: url("../assets/images/arrow-left.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #ef363c;
  color: #ffffff;
  padding: 6px 5px;
  border-radius: 12px;
  width: 36px;
  height: 36px;
}

.next {
  background-image: url("../assets/images/arrow-right.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #ef363c;
  color: #ffffff;
  padding: 6px 5px;
  border-radius: 12px;
  width: 36px;
  height: 36px;
}
</style>
