import http from "../http-common";

class SecurityDataService {
  getAll() {
    return http.get("/securities");
  }

  get(id) {
    return http.get(`/securities/${id}`);
  }

  create(data) {
    return http.post("/securities", data);
  }

}

export default new SecurityDataService();