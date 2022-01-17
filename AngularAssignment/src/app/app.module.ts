import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChapterTwoComponentComponent } from './FirstAssignment/chapter-two-component/chapter-two-component.component';
import { ChapterOneComponentComponent } from './FirstAssignment/chapter-one-component/chapter-one-component.component';
import { UserListComponent } from './FirstAssignment/user-list/user-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component'
import { AddUserComponent } from './FirstAssignment/add-user/add-user.component';
import { AddUserLogServiceComponent } from './FirstAssignment/add-user-log-service/add-user-log-service.component';

import { Util } from './models/util';
import { UsersListComponent } from './FirstAssignment/users-list/users-list.component';
import { UserComponent } from './FirstAssignment/user/user.component';
import { DataService } from './services/data.service';
import { Chapter8Component } from './FirstAssignment/chapter8/chapter8.component';
import { UserErrorComponent } from './FirstAssignment/user-error/user-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonDirective } from './_directives/common.directive';

import { _sharedVariables } from './_services/_sharedVariables';
import { ChapterOneComponent } from './SecondAssignment/chapter-one/chapter-one.component';
import { ChaptertwoComponent } from './SecondAssignment/chaptertwo/chaptertwo.component';
import { ChapterthreeComponent } from './SecondAssignment/chapterthree/chapterthree.component';
import { ChapterfourComponent } from './SecondAssignment/chapterfour/chapterfour.component';
import { ChapterfiveComponent } from './SecondAssignment/chapterfive/chapterfive.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '1/chapter1', component: ChapterOneComponentComponent },
  { path: '1/chapter2', component: ChapterTwoComponentComponent },
  { path: '1/chapter3', component: UserListComponent },
  { path: '1/chapter4', component: AddUserComponent },
  { path: '1/chapter5', component: AddUserLogServiceComponent },
  { path: '1/chapter6', component: AddUserLogServiceComponent },
  { path: '1/user-list', component: UsersListComponent },
  { path: '1/add-user', component: AddUserLogServiceComponent },
  { path: '1/user/:id', component: UserComponent },
  { path: '1/chapter8', component: Chapter8Component },

  /*SecondChapter Routes will mode module wise later*/ 
  { path: '2/chapter1', component: ChapterOneComponent },
  { path: '2/chapter2', component: ChaptertwoComponent },
  { path: '2/chapter3', component: ChapterthreeComponent },
  { path: '2/chapter4', component: ChapterfourComponent },
  { path: '2/chapter5', component: ChapterfiveComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    ChapterTwoComponentComponent,
    ChapterOneComponentComponent,
    UserListComponent,
    NavBarComponent,
    HomeComponent,
    AddUserComponent,
    AddUserLogServiceComponent,
    UsersListComponent,
    UserComponent,
    Chapter8Component,
    UserErrorComponent,
    ChapterOneComponent,
    ChaptertwoComponent,
    ChapterthreeComponent,
    ChapterfourComponent,
    ChapterfiveComponent,
    LoginComponent,
    CommonDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    ReactiveFormsModule
  ],
  providers: [Util,_sharedVariables],
  bootstrap: [AppComponent]
})
export class AppModule { }
