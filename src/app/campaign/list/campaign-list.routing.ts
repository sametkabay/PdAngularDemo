import { Routes } from '@angular/router';

import { ListComponent } from './campaign-list.component';

export const ListRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'campaign',
        component: ListComponent
    }]
}
];
