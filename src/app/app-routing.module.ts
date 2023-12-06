import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './modules/users/users-list/users-list.component';
import { AddUserComponent } from './modules/users/add-user/add-user.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'user-list', component: UsersListComponent},
  { path: 'user-add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
