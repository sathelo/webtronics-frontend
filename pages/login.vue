<template>
  <div class="login">
    <div class="login__content">
      <h1 class="login__title">Login</h1>

      <div class="login__forms">
        <div class="form login__form">
          <label class="form__label" for="userName">Username</label>
          <input
            v-model="user.userName"
            type="text"
            class="form__input"
            placeholder="Enter Username"
            name="userName"
            required
          />
        </div>

        <div class="form login__form">
          <label class="form__label" for="password">Password</label>
          <input
            v-model="user.password"
            :type="viewPassword ? 'text' : 'password'"
            class="form__input"
            placeholder="Enter Password"
            name="password"
            required
          />
          <nuxt-icon
            @click="viewPassword = !viewPassword"
            :name="viewPassword ? 'view' : 'no-view'"
            class="form__ico"
            :class="`form__ico_${viewPassword ? 'no-' : ''}view`"
          />
        </div>
      </div>

      <button @click="login" class="login__button">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import type { TLogin } from "~/store/auth.types";

const user = ref<TLogin>({
  userName: "",
  password: "",
});

const router = useRouter();
const authStore = useAuthStore();
const { authenticateUser } = authStore;
const viewPassword = ref(false);

const login = async () => {
  try {
    await authenticateUser(user.value);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  } catch (e) {
    console.log(`Authentication failed. See ${e}`);
  }
};
</script>

<style lang="scss" scoped>
.login {
  @include flex-properties(flex, center, center);
  width: 100%;
  height: 100%;

  &__content {
    @include flex-properties(flex, center, center);
    flex-direction: column;
    background: var(--dark);
    border-radius: 20px 0 20px 0;
    padding: 30px;

    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__forms {
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__button {
    border: 1px solid var(--light);
    will-change: opacity;
    transition: opacity 0.1s ease-in-out;
    padding: 5px 20px;

    &:hover {
      opacity: 0.8;
    }
  }

  .form {
    @include flex-properties(flex, center, space-between);

    &__label {
      margin-right: 10px;
    }

    &__input {
      width: 100%;
      max-width: 100px;
    }

    &__ico {
      margin-left: 5px;
      cursor: pointer;
    }
  }
}
</style>
