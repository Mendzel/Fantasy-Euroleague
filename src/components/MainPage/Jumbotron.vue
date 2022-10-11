<template>
  <div class="jumbotron">
    <div class="jumbotron-content">
      <h1 class="jumbotron-title">Fantasy Euroleague</h1>
      <p class="jumbotron-description">
        This is a demo page for educational purposes only
      </p>
      <Button class="jumbotron-button p-button-danger" label="Login" @click="this.$router.push('/login')" />
      <Button class="jumbotron-button p-button-success" label="Go to app" @click="this.$router.push('/home')" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.jumbotron {
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("https://i.imgur.com/nfVmi3t.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
      background-image: url("https://i.imgur.com/fvqPl5j.jpg");
  }

  &-title, &-description {
    color: white;
  }

  &-content {
      width: fit-content;
      padding: 20px;
      border-radius: 10px;
      background: rgba($color: #000000, $alpha: 0.9);
  }

  &-button {
    margin: 50px 5px 0 5px !important;
    width: 120px;
  }
}
</style>
