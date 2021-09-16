import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { MiningComponent } from './mining/mining.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'covid', component: CovidComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mining', component: MiningComponent },
  { path: 'hello/:id', component: HelloComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
