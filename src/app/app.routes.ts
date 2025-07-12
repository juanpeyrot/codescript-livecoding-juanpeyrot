import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'manufacturers',
		loadComponent: () => import('../app/manufacturers/pages/manufacturers-page/manufacturers-page.component'),
	},
	{
		path: '**',
		redirectTo: 'manufacturers',
	}
];
