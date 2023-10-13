import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/content/blog/blog.component';
import { AboutComponent } from './components/content/about/about.component';
import { AdminComponent } from './components/users/admin/admin.component';
import { LoginComponent } from './components/users/login/login.component';

const routes: Routes = [
  {path: '',component:BlogComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
