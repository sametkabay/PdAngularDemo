import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './Services/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      }, {
        path: '',
        loadChildren: './userpage/user.module#UserModule',
        canActivate: [AuthGuard]
      }, {
        path: '',
        loadChildren: './activities/activities.module#ActivitiesModule',
        canActivate: [AuthGuard]
      }, {
        path: '',
        loadChildren: './campaign/list/campaign-list.module#ListModule',
        canActivate: [AuthGuard]
      }, {
        path: '',
        loadChildren: './campaign/edit/campaign-edit.module#EditModule',
        canActivate: [AuthGuard]
      }, {
        path: '',
        loadChildren: './campaign/create/campaign-create.module#CreateModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: './login/login.module#LoginModule'
    }]
  },
];
