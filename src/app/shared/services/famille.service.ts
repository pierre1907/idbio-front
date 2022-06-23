import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "./authentifiaction.service";
import {Observable} from "rxjs";

const APIURL=`http://localhost:3306/exploitantsFamille`;

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  constructor(
    private http:HttpClient,
    private authServ: AuthentificationService
  ) { }

  getExploitantFamilial():Observable<FamilleService[]>{
    return this.http.get<FamilleService[]>(APIURL);
  }




}
