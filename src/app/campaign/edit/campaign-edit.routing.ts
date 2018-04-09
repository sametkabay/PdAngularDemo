import { Routes } from '@angular/router';

import { EditComponent } from './campaign-edit.component';

export const EditRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'campaign/edit/:id',
        component: EditComponent
    }]
}
];
