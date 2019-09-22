import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { RoutesModule } from './routes/routes.module';
import { AuthGuard } from './login/guards/auth.guards';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    LoginModule,
    RoutesModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports:[
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    LoginModule,
    RoutesModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
