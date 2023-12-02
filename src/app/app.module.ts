import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CognitiveAssesmentComponent } from './cognitive-assesment/cognitive-assesment.component';
import { MotorAssesmentComponent } from './motor-assesment/motor-assesment.component';
import { AnalyticalReprtComponent } from './analytical-reprt/analytical-reprt.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegistrationComponent,
    LoginComponent,
    FileUploadComponent,
    DashboardComponent,
    CognitiveAssesmentComponent,
    MotorAssesmentComponent,
    AnalyticalReprtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
