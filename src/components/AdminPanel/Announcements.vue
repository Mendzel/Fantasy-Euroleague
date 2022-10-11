<template>
  <div class="announcements">
    <div class="announcements-column">
      <div class="announcements-header">New Announcement</div>

      <div class="announcements-column-form">
        <span class="p-float-label">
          <InputText
            id="news-title"
            class="announcements-column-form-input"
            type="text"
            v-model="title"
          />
          <label for="news-title">Title</label>
        </span>
        <Dropdown
          v-model="color"
          :options="selectColors"
          optionLabel="title"
          optionValue="value"
          placeholder="Pick a Color"
          class="announcements-column-form-input"
        ></Dropdown>
        <label for="news-content">News Content</label>
        <Editor
          v-model="message"
          id="news-content"
          editorStyle="height: 200px"
          class="announcements-column-form-input"
        ></Editor>
        <Button label="Send" @click.stop="sendForm()" class="p-button-success"></Button>
      </div>
    </div>

    <div class="announcements-column">
      <div class="announcements-header">Active announcements</div>
      <div class="announcements-column-newses">
        <News
          v-for="news in newsesToShow"
          :title="news.title"
          :color="news.color"
          :message="news.message"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { adminStore } from "@/stores/adminData"
import News from "@/components/AdminPanel/News.vue"

const adminData = adminStore()
const selectColors = adminData.newsColors
const newsesToShow = adminData.newses
let title = ref("")
let color = ref("")
let message = ref("")

function sendForm() {
  adminData.addNews(title.value, color.value, message.value)
  title.value = ""
  color.value = ""
  message.value = ""
}
</script>

<style lang="scss">
.announcements {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;

  &-header {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }

  &-column {
    display: flex;
    flex-direction: column;
    width: 50%;
    color: white;

    &-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;

      &-input {
        width: 40vw;
        margin: 15px;
      }
    }

    &-newses {
      width: 100%;
      padding: 5px;
    }
  }
}

@media screen and (max-width: 520px) {
  .announcements {
    flex-direction: column;

    &-header {
      margin: 10px 0;
    }

    &-column {
      width: 100%;

      &-form {
        margin-bottom: 20px;
        
        &-input {
          width: 80vw;
        }
      }
    }
  }
}
</style>
