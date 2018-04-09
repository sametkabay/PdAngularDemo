import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditComponent } from './campaign-edit.component';
import { EditRoutes } from './campaign-edit.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(EditRoutes),
        FormsModule
    ],
    declarations: [EditComponent]
})

export class EditModule {}
