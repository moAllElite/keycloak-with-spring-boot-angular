import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../models/School";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SchoolCrudService {
  Host:string = 'http://localhost:8090/'
  constructor(protected http: HttpClient,) { }

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

  saveSchool(school:School){
    return  this.http.post(
      `http://localhost:8090/api/schools`,school,
      {
        headers: {
          'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhMFNyN210Qks1NE9JaExRYzJ0ckZPMWtENXpUTEh1VHlhUExtRkpKS0FVIn0.eyJleHAiOjE3MTMwNDY2MDgsImlhdCI6MTcxMzA0NjMwOCwianRpIjoiYjA1MDk0MzUtZGM0Yy00MmIyLWE5NTgtZmJlOWU3YWNkODk5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9sZWFybi1yZWFsbSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI4YjNkNTNiMi1jODc3LTRkYjgtOWFmZC04NDI3Y2NlZWY2MjgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzY2hvb2wtYXBwIiwic2Vzc2lvbl9zdGF0ZSI6IjYwMDhhZDY2LTk2MmItNDgxNi1hMWE0LTIzNzM2ZDA5YjQ0ZSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWxlYXJuLXJlYWxtIiwiQURNSU4iLCJ1bWFfYXV0aG9yaXphdGlvbiIsIlVTRVIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiI2MDA4YWQ2Ni05NjJiLTQ4MTYtYTFhNC0yMzczNmQwOWI0NGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJhYmRlbCBkaWFnbmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkaXJlY3RldXIiLCJnaXZlbl9uYW1lIjoiYWJkZWwiLCJmYW1pbHlfbmFtZSI6ImRpYWduZSIsImVtYWlsIjoiZGlyZWN0ZXVyQGdtYWlsLmNvbSJ9.JHzouQvs6kBLnSoCU8MHE7P95p316h6m2FHr-DlU3OB0L5V0LRciKFBpnflJbCKGA07tjeIvuxL214C6Gsa_UnpSbw6PQMwG6fbgRBee9tKTtxu1GBHQUazXV943nnSSjCxq2iOzVUcpFpYKqewBL83a77zGrMt6ZlgFp8ueqnLvkmg7bNb96z_ApYmiFfYrfKZ1enuUCbnE6JSVIG1dgOTHVB2byrLwV5rLBYCFkQURN6W6ojRoeA0xLO4MlGg2cdVEpp3Qyc261Y4riXCMy9YzD_yBMctGPPK0hHymo2kwxp0KyshDkei7fGL4Muam44noO18g1mdMPYfdRyURMg'
        }
      }
      );
  }
}
