import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // Import it up here

@Injectable({
  providedIn: "root"
})
export class DataService {
  private url = "http://localhost:7777/api/login";
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("https://reqres.in/api/users");
  }

  logmeIn(user: object) {
    // console.log("Login  :", user);
    return this.http.post(this.url, user);
  }
}
