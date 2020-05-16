import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';


const routes: Routes = [
  { path:'', component:IndexComponent,
    children:[
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'header', component:HeaderComponent},
      { path:'footer', component:FooterComponent},
      { path:'home', component:HomeComponent},
      
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
