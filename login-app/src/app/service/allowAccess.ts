import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AllowAccess implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('statut')== "logged") {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        console.log('you need to login to acces this')
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}