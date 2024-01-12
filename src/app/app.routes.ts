import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProfilComponent } from './profil/profil.component';
import { MessageComponent } from './message/message.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'main',component: MainComponent,},
    { path: 'profil',component: ProfilComponent,},
    { path: 'message',component: MessageComponent,},
    { path: '', redirectTo: '/register', pathMatch: 'full' },


];
