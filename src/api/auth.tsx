// src/api/auth.ts
export interface LoginResponse {
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async ({ email, password }: LoginPayload): Promise<LoginResponse> => {
  await new Promise(r => setTimeout(r, 500));
  if (email === "admin@test.com" && password === "password") {
    return { token: "fake-jwt-token" };
  }
  throw new Error("Invalid credentials");
};
