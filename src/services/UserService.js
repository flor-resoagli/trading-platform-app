import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  findByUsername(username) {
    return http.get(`/users/name/${username}`);
  }
}

export default new UserDataService();