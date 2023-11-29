import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CognitiveAssessmentComponent } from './cognitive-assesment/cognitive-assesment.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Set LandingPageComponent as initial route
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'file_upload', component: FileUploadComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cognitive-assesment', component: CognitiveAssessmentComponent },
  // Other routes for different components
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
