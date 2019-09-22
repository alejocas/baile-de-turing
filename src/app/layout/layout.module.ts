import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { RoutesModule } from '../routes/routes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations:[LayoutComponent],
    imports: [MaterialModule,FlexLayoutModule, RoutesModule],
    exports: [LayoutComponent],
    providers:[MediaMatcher]
})
export class LayoutModule {}
