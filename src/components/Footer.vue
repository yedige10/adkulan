<template>
  <div class="footer mt-4">
    <div class="container p-5">
      <div class="columns">
        <div class="column">
          <img src="@/assets/images/logo.png" />
        </div>
        <div class="column">
          <div class="social-medias">
            <img src="@/assets/icons/instagram.svg" />
            <img src="@/assets/icons/youtube.svg" />
            <img src="@/assets/icons/facebook.svg" />
          </div>
        </div>
        <div class="column text">
          <p>© Все права защищены 2023</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-footer",
};
</script>

<style scoped>
.footer {
  background: #f6f6f6;
}

.columns {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}

.column {
  flex: 33.33%;
}

.social-medias {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.text{
  font-size: 14px;
}
</style>
