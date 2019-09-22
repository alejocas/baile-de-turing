import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations:[LayoutComponent],
    imports: [MaterialModule,FlexLayoutModule],
    exports: [LayoutComponent],
    providers:[MediaMatcher]
})
export class LayoutModule {}
