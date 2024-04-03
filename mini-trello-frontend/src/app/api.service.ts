import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCards(listId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lists/${listId}/cards`);
  }

  createCard(listId: number, cardTitle: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/lists/${listId}/cards`, {
      title: cardTitle,
    });
  }

  deleteCard(cardId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cards/${cardId}`);
  }
}
