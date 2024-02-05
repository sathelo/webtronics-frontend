import { defineStore } from "pinia";
import type { TLogin } from "./auth.types";

export const useAuthStore = defineStore("auth", () => {
  const authenticated = ref(false);

  async function authenticateUser(user: TLogin) {
    const admin: TLogin = { userName: "admin", password: "admin" };

    if (user.userName === admin.userName && user.password === admin.password) {
      const dataResponse = await Promise.resolve({
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      }); // TODO: Изменить на реальный запрос
      const token = useCookie("token");
      token.value = dataResponse?.accessToken;
      authenticated.value = true;
      return dataResponse;
    }

    throw new Error("Error Authentication!");
  }

  return { authenticated, authenticateUser };
});
