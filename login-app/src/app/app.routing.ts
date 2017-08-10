import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import { AllowAccess } from './service/allowAccess';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AllowAccess] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent, canActivate: [AllowAccess]},
    { path: 'contact', component: ContactComponent, canActivate: [AllowAccess]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);