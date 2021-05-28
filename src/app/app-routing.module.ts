import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {path:'experiencia', component: ExperienciaComponent},
  {path:'formacao', component: FormacaoComponent},
  {path:'info', component: InfoComponent},
  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
