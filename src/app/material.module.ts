import { NgModule } from '@angular/core';
import {MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
} from '@angular/material';
@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule
    ],
})
export class MaterialModule { }
