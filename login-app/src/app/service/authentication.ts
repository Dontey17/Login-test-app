import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class Authentication {
    constructor() { }

    login(username: string, password: string) {
            if(localStorage.getItem("currentUser")!= username)
            {
                console.log("Error login !");
            }
            //localStorage.setItem('currentUser',username);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}