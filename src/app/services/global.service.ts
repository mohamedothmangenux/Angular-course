import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  base_url = 'https://jsonplaceholder.typicode.com';
  components: any;
  constructor(private http: HttpClient) {
    this.components = {
      posts: '/posts/'
    };
  }

  getData(component) {
    const url = this.base_url + this.components[component];
    return this.http.get(url);
  }
  CreateData(component, data) {
    const url = this.base_url + this.components[component];
    return this.http.post(url , data);
  }
  UpdateData(component, id, data) {
    const url = this.base_url + this.components[component];
    return this.http.put(url + +id , data);
  }
  DeleteData(component, id) {
    const url = this.base_url + this.components[component];
    return this.http.delete(url + id);
  }
}
