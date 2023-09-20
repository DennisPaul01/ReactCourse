import axios from "axios";

const BASE_URL = "https://64a300c7b45881cc0ae5fbf7.mockapi.io/api/";

const api = axios.create({
  baseURL: BASE_URL,
});

const resourceApi = (resource) => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: (id) => api.get(`/${resource}/${id}`),
    create: (data) => api.post(`/${resource}`, data),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: (id) => api.delete(`/${resource}/${id}`),
  };
};

const tutorApi = resourceApi("tutors");
const citiesApi = resourceApi("cities");
const facultiesApi = resourceApi("faculties");
const phoneApi = resourceApi("contacts");
// const getAllFaculties = () => api.get("/faculties");
// const getFaculty = (id) => api.get(`/faculties/${id}`);
// const addFaculty = (faculty)=>api.post("/faculties",faculty)

export { tutorApi, citiesApi, facultiesApi };
