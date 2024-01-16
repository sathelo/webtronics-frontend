<template>
  <div class="profile" :class="{ profile_edit: editMode }">
    <img :src="user.background" alt="background" class="profile__background" />

    <a href="/" class="profile__back">На главную</a>
    <button class="profile__edit">Редактировать профиль</button>

    <div class="profile__info">
      <img :src="user.avatar" alt="avatar" class="profile__avatar" />

      <div class="profile__details">
        <h2 class="profile__name">{{ user.name }}</h2>
        <h2 class="profile__surname">{{ user.surname }}</h2>
      </div>

      <a-space direction="vertical" :size="12" class="profile__birthday">
        <a-date-picker v-model:value="value1" />
      </a-space>

      <a-select-option value="lucy" class="profile__city">lucy</a-select-option>

      <div class="profile__ribbon ribbon">
        <h1 class="ribbon__title">My news</h1>
        <article
          v-for="(post, postIndex) in user.posted"
          :key="postIndex"
          class="ribbon__post"
        >
          <h2 class="ribbon__post-title">{{ post.title }}</h2>
          <p class="ribbon__post-text">{{ post.body }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Dayjs } from "dayjs";

const editMode = ref(false);

const value1 = ref<Dayjs>();

const user = {
  background:
    "https://wallbox.ru/wallpapers/main2/201817/abstrakcia-patna-akvarel.jpg",
  avatar:
    "https://kritikanstvo.ru/movies/c/cruelintentions/images/cruelintentions_122963.jpg",
  name: "Test",
  surname: "Testers",
  posted: [
    {
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
  ],
};
</script>

<style lang="scss" scoped>
.profile {
  @include flex-properties(flex, center, center);
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__background {
    width: 100vw;
    height: 28vw;
    object-fit: cover;
    object-position: center center;
    user-select: none;
  }

  &__back {
    position: absolute;
    top: 2vw;
    left: 2vw;
    background: var(--light);
    font-size: 2vw;
    padding: 1vw 2vw;
    border-radius: 10vw;
  }

  &__edit {
    position: absolute;
    top: 2vw;
    right: 2vw;
    background: var(--light);
    font-size: 2vw;
    padding: 1vw 2vw;
    border-radius: 10vw;
  }

  &__info {
    @include flex-properties(flex, center, center);
    position: relative;
    flex-direction: column;
    top: -5vw;
    width: 100%;
    background: var(--light);
    border-radius: 6vw 6vw 0 0;
  }

  &__avatar {
    position: relative;
    top: -14vw;
    border: 1.2vw solid var(--light);
    border-radius: 50%;
    width: 100%;
    max-width: 30vw;
    height: 30vw;
    object-fit: cover;
    object-position: center center;
    user-select: none;
    margin-bottom: -14vw;
  }

  &__details {
    @include flex-properties(flex);
    margin-bottom: 2vw;

    & > *:not(:last-child) {
      margin-right: 0.8vw;
    }
  }

  &__ribbon {
    @include flex-properties(flex, flex-start);
    flex-direction: column;
    padding: 0 4.5vw;

    & > *:not(:last-child) {
      margin-bottom: 1.6vw;
    }
  }
}
</style>
