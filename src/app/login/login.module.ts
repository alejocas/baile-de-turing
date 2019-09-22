import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import{ RouterModule } from "@angular/router";
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginService } from './shared/login.service';
import { MockDataService } from '../common/mockData.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations:[LoginComponent],
    imports: [MaterialModule,FormsModule,FlexLayoutModule, CommonModule, BrowserModule],
    exports: [RouterModule,LoginComponent],
    providers:[LoginService,MockDataService]
})
export class LoginModule { }
