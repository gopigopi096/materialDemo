import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent}
];

export const HomeRoutes = RouterModule.forChild(routes);
