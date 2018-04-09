import { Routes } from '@angular/router';

import { ActivitiesComponent } from './activities.component';

export const ActivitiesRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'activities',
        component: ActivitiesComponent
    }]
}
];
