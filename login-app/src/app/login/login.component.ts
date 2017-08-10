import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Authentication } from '../service/authentication';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: Authentication,
        ) { }

    ngOnInit() {
        // reset login status
        localStorage.setItem("statut", "not logged in");
        console.log(localStorage.getItem('currentUser'));
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        //this.loading = true;
        if (localStorage.getItem('currentUser') != this.model.username) {
          console.log('Please Register first');
          this.router.navigate(['/login'])
        }else if( localStorage.getItem('password') != this.model.password){
           console.log('Check Password');
           this.router.navigate(['/login']);
        } else {
          localStorage.setItem("statut", "logged");
        this.authenticationService.login(this.model.username, this.model.password);
         //console.log(localStorage.getItem("currentUser"))   
        this.router.navigate([this.returnUrl]);
         }      
    }
}
