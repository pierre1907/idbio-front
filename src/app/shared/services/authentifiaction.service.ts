import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Users} from "../models/users";
import {StorageService} from "./storage.service";

const APIURL=`http://localhost:3306/users`;

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  isLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor(
    private http:HttpClient,
    private stoServ:StorageService
  ) { }

  getUserLoginAndPassword(user:Users):Observable<Users[]>{
    const user$= this.http.get<Users[]>(`${APIURL}?login=${user.login}&password=${user.password}`);
    user$.subscribe(users=>{
      if(users.length>0){
        this.stoServ.saveUser(users[0]);
        this.isLogin.next(true);
      }
    })
    return user$;
  }

  logout(){
    this.stoServ.removeUser();
  }

  getUserStorage():Users|null{
    return this.stoServ.getUser();
  }

  addUser(user:Users):Observable<Users>{
    return this.http.post<Users>(`${APIURL}`,user);
  }
}
