import http from "../http-common";

class TradeDataService {
  getAll() {
    return http.get("/trades");
  }

  get(id) {
    return http.get(`/trades/${id}`);
  }

  create(data) {
    return http.post("/trades", data);
  }

}

export default new TradeDataService();