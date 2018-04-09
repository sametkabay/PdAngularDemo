import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './campaign-list.component';
import { ListRoutes } from './campaign-list.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ListRoutes),
        FormsModule
    ],
    declarations: [ListComponent]
})

export class ListModule {}
