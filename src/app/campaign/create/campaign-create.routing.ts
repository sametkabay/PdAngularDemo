import { Routes } from '@angular/router';

import { CreateComponent } from './campaign-create.component';

export const CreateRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'campaign/create',
        component: CreateComponent
    }]
}
];
