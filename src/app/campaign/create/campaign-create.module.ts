import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateComponent } from './campaign-create.component';
import { CreateRoutes } from './campaign-create.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CreateRoutes),
        FormsModule
    ],
    declarations: [CreateComponent]
})

export class CreateModule {}
