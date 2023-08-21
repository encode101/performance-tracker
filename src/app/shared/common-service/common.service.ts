import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}
  getData() {
    return 'This is the data you were looking for';
  }
  getUsersList() {
    return this.http.get('http://localhost:3000/users');
  }
  addReviews(data: any) {
    return this.http.post('http://localhost:3000/reviews', data);
  }
  getReviews() {
    return this.http.get('http://localhost:3000/reviews');
  }
  deleteReview(id: number) {
    return this.http.delete('http://localhost:3000/reviews/' + id);
  }
}
