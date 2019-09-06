import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '@frontend/nili-eat-common';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpClient: HttpClient) {}

  handshake() {
    return this.httpClient.get(apiUrl("handshake"));
  }
}
