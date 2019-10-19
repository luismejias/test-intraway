import { RouterModule, Routes } from '@angular/router'
import { OneComponentComponent } from './components/one-component/one-component.component';
import { TwoComponentComponent } from './components/two-component/two-component.component';
import { ThreeComponentComponent } from './components/three-component/three-component.component';

const APP_ROUTES: Routes = [
    { path: 'one', component: OneComponentComponent },
    { path: 'two', component: TwoComponentComponent },
    { path: 'three', component: ThreeComponentComponent },      
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);