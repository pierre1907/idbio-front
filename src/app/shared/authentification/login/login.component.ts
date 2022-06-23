import { Component, OnInit } from '@angular/core';
import {Users} from "../../models/users";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentifiaction.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:Users={
    login:"",
    password:""
  };
  page:string="";

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private authServ:AuthentificationService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.page=params["page"]);
  }

  onFormSubmit(){
    this.authServ.getUserLoginAndPassword(this.model).subscribe(users=>{
      if(users.length>0){
        if(this.page=="accueil"){
          //gerer la redirection de l'utilisateur apres sa connexion

        }
        this.router.navigateByUrl("");
      }

    })
  }

}
