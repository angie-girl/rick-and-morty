import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter(id: number): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/character/${id}`);
  }

  getCharacters(params?: {
    count?: number,
    page?: number
  }): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/character`, {params});
  }
}
