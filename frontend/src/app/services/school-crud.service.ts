import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../models/School";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolCrudService {
  Host:string = 'http://localhost:8090/'
  constructor(private http: HttpClient,) { }

  getAllSchools():Observable<School[]>{
    return  this.http.get<School[]>(
      `${this.Host}api/schools`,
    );
  }

  getSChoolById(id:number):Observable<School>{
    return  this.http.get<School>(`${this.Host}api/schools/find-by?id=${id}`,)
  }

  deleteById(id: number | undefined):void {
    this.http.delete(`${this.Host}api/schools/${id}`)
  }
}
