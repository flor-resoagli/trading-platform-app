import http from "../http-common";

class OrderDataService {
  getAll() {
    return http.get("/orders");
  }

  get(id) {
    return http.get(`/orders/${id}`);
  }

  create(data) {
    return http.post("/orders", data);
  }

  findByUserId(id) {
    return http.get(`/orders/user/${id}`);
  }

  findByType(type) {
    return http.get(`/orders/type/${type}`);
  }
}

export default new OrderDataService();