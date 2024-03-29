import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocation(id: number): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/location/${id}`);
  }

  getLocations(params?: {
    count?: number,
    page?: number
  }): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/location`, {params});
  }
}
