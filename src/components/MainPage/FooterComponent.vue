<template>
  <div class="footer">
    <h1 class="footer-title">Created by</h1>
    <div class="footer-container">
      <div class="footer-container-creator">
        <p class="footer-container-creator-name">Konrad Mendzelewski</p>
        <p class="footer-container-creator-spec">Frontend Dev</p>
        <div class="footer-container-creator-icon-container">
          <a href="https://www.linkedin.com/in/konrad-mendzelewski-7b17ba18a/?locale=en_US">
            <img
              class="footer-container-creator-icon"
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
              alt="LinkedIn Icon"
            />
          </a>
          <a href="https://github.com/Mendzel">
            <img
              class="footer-container-creator-icon"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub Icon"
            />
          </a>
        </div>
      </div>

      <div class="footer-container-creator">
        <p class="footer-container-creator-name">Łukasz Kiełkowski</p>
        <p class="footer-container-creator-spec">Backend Dev</p>
        <div class="footer-container-creator-icon-container">
          <a href="https://www.linkedin.com/in/lukasz-kielkowski/">
            <img
              class="footer-container-creator-icon"
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
              alt="LinkedIn Icon"
            />
          </a>
          <a href="https://github.com/Kieleq">
            <img
              class="footer-container-creator-icon"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub Icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "@/styles/colors.scss";

.footer {
  background-color: $primary;
  text-align: center;
  padding: 30px 0 20px 0;

  &-container {
    display: flex;
    justify-content: space-around;

    &-creator {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-name {
        font-size: 20px;
        font-weight: bold;
        margin: 5px;
      }

      &-spec {
        font-size: 15px;
        font-weight: bold;
        margin: 5px 0 15px 0;
      }

      &-icon {
        width: 40px;

        &-container {
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
}
</style>
