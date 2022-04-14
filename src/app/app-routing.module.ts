import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoogleMapsModule } from '@angular/google-maps'

import { MainComponent } from './main/main.component';
import { FrNewsComponent } from './fr-news/fr-news.component';
import { FrNewsAllComponent } from './fr-news-all/fr-news-all.component';
import { FrReportComponent } from './fr-report/fr-report.component';
import { FrEventsComponent } from './fr-events/fr-events.component';
import { AFrReportsComponent } from './a-fr-reports/a-fr-reports.component';
import { AFrAccountsComponent } from './a-fr-accounts/a-fr-accounts.component';
import { AFrInfoComponent } from './a-fr-info/a-fr-info.component';
import { AFrEventsComponent } from './a-fr-events/a-fr-events.component';
import { ArNewsComponent } from './ar-news/ar-news.component';
import { ArReportComponent } from './ar-report/ar-report.component';
import { FrAddAdminsComponent } from './fr-add-admins/fr-add-admins.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FrForgotPasswordComponent } from './fr-forgot-password/fr-forgot-password.component';
import { FrVerifyEmailComponent } from './fr-verify-email/fr-verify-email.component';
import { FrLoginComponent } from './fr-login/fr-login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'fr-news', component: FrNewsComponent },
  { path: 'fr-news-all', component: FrNewsAllComponent },
  { path: 'fr-report', component: FrReportComponent },
  { path: 'fr-events', component: FrEventsComponent },
  { path: 'a-fr-reports', component: AFrReportsComponent },
  { path: 'a-fr-accounts', component: AFrAccountsComponent },
  { path: 'a-fr-info', component: AFrInfoComponent },
  { path: 'a-fr-events', component: AFrEventsComponent },
  { path: 'ar-news', component: ArNewsComponent },
  { path: 'ar-report', component: ArReportComponent },
  { path: 'sign-in', component:  FrLoginComponent},
  { path: 'add-admin', component: FrAddAdminsComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
  { path: 'forgot-password', component: FrForgotPasswordComponent },
  { path: 'verify-email-address', component: FrVerifyEmailComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),GoogleMapsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }