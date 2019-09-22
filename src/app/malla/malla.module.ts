import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MallaComponent } from './malla.component';
@NgModule({
    declarations:[MallaComponent],
    imports: [MaterialModule,FlexLayoutModule],
    exports: [MallaComponent],
    providers:[]
})
export class MallaModule {}
