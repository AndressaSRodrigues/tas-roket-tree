import { Routes } from '@angular/router';
import { DisplayTreesComponent } from './components/display-trees/display-trees.component';

export const routes: Routes = [
    { path: '', redirectTo: '/trees', pathMatch: 'full' },
    { path: 'trees', component: DisplayTreesComponent }
];
