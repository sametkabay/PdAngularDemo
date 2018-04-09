import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivitiesComponent } from './activities.component';
import { ActivitiesRoutes } from './activities.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ActivitiesRoutes),
        FormsModule
    ],
    declarations: [ActivitiesComponent]
})

export class ActivitiesModule {}
