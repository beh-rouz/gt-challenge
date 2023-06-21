import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_BASE_URL } from './api-base-url.token';
import { Response, Purchase, Venues } from '../interfaces';

@Injectable()
export class DataAccessService {

  constructor(
    @Inject(API_BASE_URL) private _apiBaseUrl: string,
    private _http: HttpClient
  ) {}

  getVenues() {
    return this._http.get<Response<Venues>>(`${this._apiBaseUrl}/b/631aee46a1610e63862444c0`);
  }

  getPurchaseData() {
    return this._http.get<Response<Purchase>>(`${this._apiBaseUrl}/b/6311b2fde13e6063dc979a31`);
  }
}
