import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getEpisode(id: number): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/episode/${id}`);
  }

  getEpisodes(params?: {
    count?: number,
    page?: number
  }): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/episode`, {params});
  }
}
