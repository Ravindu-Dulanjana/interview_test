import axios from "axios";

const API_URL = "https://mditest.elifeamerica.com/";

const register = async (userData) => {
  const res = await axios.get(API_URL + `api/v1/email/check/${userData.email}`);

  if (!res.data.result.exist) {
    const response = await axios.post(API_URL + "api/v1/register", userData);

    return response.data;
  }

  throw new Error("Email Already Exist");
};
const login = async (userData) => {
  const response = await axios.post(API_URL + "oauth/token", userData);

  if (response.data) {
    localStorage.setItem(
      "user_token",
      JSON.stringify(response.data.access_token)
    );
  }
  return response.data.access_token;
};

const getUser = async (userData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${userData}`,
    },
  };
  const response = await axios.get(API_URL + "api/v1/auth/user", config);
  console.log(response.data.result.patient);
  return response.data.result.patient;
};

const updateData = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);
  const response = await axios.put(
    API_URL + "api/v1/profile",
    userData,
    config
  );
  console.log(response.data);
  return response.data.result.patient;
};

const uploadFile = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);
  const response = await axios.post(
    API_URL + "api/v1/profile/avatar",
    data,
    config
  );
  console.log(response.data.result.patient);
  return response.data.result.patient;
};

const logout = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "api/v1/logout", config);
  localStorage.removeItem("user_token");
  return;
};

const authService = {
  register,
  logout,
  login,
  getUser,
  updateData,
  uploadFile,
};

export default authService;
