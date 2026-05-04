export const loginUser = (email, password) => {
  if (email === "test@gmail.com" && password === "123456") {
    localStorage.setItem("user", JSON.stringify({ name: "Test User", email }));
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem("user"));
};