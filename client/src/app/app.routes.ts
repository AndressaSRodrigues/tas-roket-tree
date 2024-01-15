import { Routes } from '@angular/router';
import { DisplayTreesComponent } from './components/display-trees/display-trees.component';
import { TreeDetailsComponent } from './components/tree-details/tree-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/trees', pathMatch: 'full' },
    { path: 'trees', component: DisplayTreesComponent },
    { path: 'tree/:id', component: TreeDetailsComponent }
];
