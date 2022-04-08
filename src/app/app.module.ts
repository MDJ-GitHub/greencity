import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {WebcamModule} from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { FrNewsComponent } from './fr-news/fr-news.component';
import { FrReportComponent } from './fr-report/fr-report.component';
import { AFrReportsComponent } from './a-fr-reports/a-fr-reports.component';
import { AFrAccountsComponent } from './a-fr-accounts/a-fr-accounts.component';
import { AFrInfoComponent } from './a-fr-info/a-fr-info.component';
import { AFrEventsComponent } from './a-fr-events/a-fr-events.component';
import { FrEventsComponent } from './fr-events/fr-events.component';
import { FrProfileComponent } from './fr-profile/fr-profile.component';
import { FrLoginComponent } from './fr-login/fr-login.component';
import { ArNewsComponent } from './ar-news/ar-news.component';
import { ArReportComponent } from './ar-report/ar-report.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    

    
    FrNewsComponent,
    FrReportComponent,
    AFrReportsComponent,
    AFrAccountsComponent,
    AFrInfoComponent,
    AFrEventsComponent,
    FrEventsComponent,
    FrProfileComponent,
    FrLoginComponent,
    ArNewsComponent,
    ArReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WebcamModule,
    HttpClientModule,
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
