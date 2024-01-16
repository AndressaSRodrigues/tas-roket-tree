import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor(private http: HttpClient) { }

  fetchTreeLocation(treeId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/location/${treeId}`);
  }
}
