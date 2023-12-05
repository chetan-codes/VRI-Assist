import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CognitiveAssessmentComponent } from './cognitive-assessment/cognitive-assessment.component';
import { MotorAssessmentComponent } from './motor-assessment/motor-assessment.component';
import { AnalyticalReportComponent } from './analytical-report/analytical-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegistrationComponent,
    LoginComponent,
    FileUploadComponent,
    DashboardComponent,
    CognitiveAssessmentComponent,
    MotorAssessmentComponent,
    AnalyticalReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
