import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  model: any = {};
    loading = false;

    constructor(
        private router: Router, 
       // private snackBar: MdSnackBar
        ) { }

    

    register() {
        ;
        if (localStorage.getItem("currentUser")== this.model.username) {
            console.log('user already exists'!);
            this.router.navigate(['/register'])
        } else{
        console.log('registred');
        localStorage.setItem('currentUser',this.model.username);
        localStorage.setItem('password',this.model.password);

        console.log(this.model.username);
        this.router.navigate(['/login']);
        }
    	

        //this.snackBar.open('Message archived');
        /*this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}