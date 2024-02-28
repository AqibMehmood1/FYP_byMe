
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://6562eae0ee04015769a6a26c.mockapi.io/fyp/employee';
  private apiUrl2 = 'https://6562eae0ee04015769a6a26c.mockapi.io/fyp/project';
  private apiUrl3 = 'https://64e32ae1bac46e480e784caa.mockapi.io/gourps';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2);
  }
  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl3);
  }

}
