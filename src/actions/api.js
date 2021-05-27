import axios from "axios";

const baseUrl = "http://localhost:3001/";

const config = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
};

export default {
  companyData(url = baseUrl + "companies/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
};
