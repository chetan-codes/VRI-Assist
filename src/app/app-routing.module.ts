import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CognitiveAssessmentComponent } from './cognitive-assessment/cognitive-assessment.component';
import { MotorAssessmentComponent } from './motor-assessment/motor-assessment.component';
import { AnalyticalReportComponent } from './analytical-report/analytical-report.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Set LandingPageComponent as initial route
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'file_upload', component: FileUploadComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cognitive_assesment', component: CognitiveAssessmentComponent },
  { path: 'motor_assesment', component: MotorAssessmentComponent },
  { path: 'analytical_report', component: AnalyticalReportComponent },
  // Other routes for different components
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
