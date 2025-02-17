import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileSetupComponent } from './auth/profile/profile-setup/profile-setup.component';
import { ProfileShowComponent } from './auth/profile/profile-show/profile-show.component';
import { Page404notfoundComponent } from './page404notfound/page404notfound.component';
import { TeacherClassroomSelectComponent } from './teacher/teacher-classroom-select/teacher-classroom-select.component';
import { TeacherClassroomComponent } from './teacher/teacher-classroom/teacher-classroom.component';
import { TeacherClassroomUpdateComponent } from './teacher/teacher-classroom-update/teacher-classroom-update.component';
import { SubmissionCreateComponent } from './submission/submission-create/submission-create.component';
import { SubmissionsComponent } from './submission/submissions/submissions.component';
import { SubmissionShowComponent } from './submission/submission-show/submission-show.component';
import { TestCreateComponent } from './test/test-create/test-create.component';
import { TestShowComponent } from './test/test-show/test-show.component';
import { TestsComponent } from './test/tests/tests.component';
import { GradeBookComponent } from './teacher/grade-book/grade-book.component';

const routes: Routes = [
  { path: '', component: TeacherDashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileShowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/create',
    component: ProfileSetupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/edit/:userId',
    component: ProfileSetupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'classroom/:classId',
    component: TeacherClassroomComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'classroom-edit/:classId',
    component: TeacherClassroomUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'classroom-select',
    component: TeacherClassroomSelectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'submission-create/:classId/:className',
    component: SubmissionCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'submission-edit/:subId',
    component: SubmissionCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'submission/:subId',
    component: SubmissionShowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'submissions/:classId',
    component: SubmissionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'test-create/:classId/:className',
    component: TestCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'test-edit/:testId',
    component: TestCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'test/:testId',
    component: TestShowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tests/:classId',
    component: TestsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'grade-book/:classId',
    component: GradeBookComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: Page404notfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
