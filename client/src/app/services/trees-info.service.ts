import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tree } from '../interfaces/trees.interface';

@Injectable({
  providedIn: 'root'
})

export class TreesInfoService {

  constructor(private http: HttpClient) { }

  fetchTrees(): Observable<Tree[]> {
    return this.http.get<Tree[]>('http://localhost:3000/');
  }

  fetchTreeDetails(treeId: number): Observable<Tree> {
    return this.http.get<Tree>(`http://localhost:3000/${treeId}`)
  }
}
