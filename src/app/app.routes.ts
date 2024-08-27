import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { GeojsonListComponent } from './components/geojson-list/geojson-list.component';
import { IncidentComponent } from './components/incident/incident.component';
import { AlertComponent } from './protected/alert/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { SynchronizeDataComponent } from './components/synchronize-data/synchronize-data.component';

export const routes: Routes = [
    {path:"", title:"Home", component: HomeComponent},
    {path:"login", title:"Login", component:LoginComponent},
    {path:"service", title:"Servicios", component:ServiceComponent},
    {path:"incident", title:"Incidencias", component:IncidentComponent},
    {path:"alert", title:"Alertas", component:AlertComponent, canActivate:[AuthGuard]},
    {path:"geojson-list", title:"List Servicios", component:GeojsonListComponent},
    {path:"synchronize-data", title:"Sincronizar Data", component:SynchronizeDataComponent}
];
