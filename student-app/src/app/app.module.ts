import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { ProfileSetupComponent } from './auth/profile/profile-setup/profile-setup.component';
import { ProfileShowComponent } from './auth/profile/profile-show/profile-show.component';
import { StudentClassEnrollComponent } from './student/student-class-enroll/student-class-enroll.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { Page404notfoundComponent } from './page404notfound/page404notfound.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { SubmissionsComponent } from './submission/submissions/submissions.component';
import { SubmissionUploadComponent } from './submission/submission-upload/submission-upload.component';
import { TestsComponent } from './test/tests/tests.component';
import { TestAttemptComponent } from './test/test-attempt/test-attempt.component';
import { GradeFilterPipe } from './test/grade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileSetupComponent,
    ProfileShowComponent,
    StudentClassEnrollComponent,
    StudentDashboardComponent,
    HeaderComponent,
    ErrorComponent,
    Page404notfoundComponent,
    SubmissionsComponent,
    SubmissionUploadComponent,
    TestsComponent,
    TestAttemptComponent,
    GradeFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent],
})
export class AppModule {}
