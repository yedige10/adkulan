<template>
  <div class="d-flex box-track">
    <input
      type="text"
      class="form-control input"
      placeholder="Откуда"
      aria-describedby="basic-addon1"
    />

    <button type="button" class="btn" @click="alert('Отследить посылку')">
      Отследить посылку
    </button>
  </div>
</template>

<script>
export default {
  name: "package-track",
};
</script>

<style scoped>
.input {
  height: 48px;
  width: 580px;
}

.box-track {
  gap: 12px;
  background: #ffffff;
  border-radius: 0px 12px 12px 12px;
  padding: 20px 30px;
  align-items: flex-start;
  border-radius: 0px 12px 12px 12px; 
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.btn {
  width: 440px;
  height: 48px;
  background: #ef363c;
  color: #ffffff;
  font-size: 16px;
  /*font-weight: 700; */
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
}
</style>
