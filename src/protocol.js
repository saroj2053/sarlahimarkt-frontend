export const api = "https://sarlahimarkt.onrender.com/api/v1";

export const getBearerToken = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return user?.token;
};
