import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

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

import { _sharedVariables } from './_services/_sharedVariables';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chapter1', component: ChapterOneComponentComponent },
  { path: 'chapter2', component: ChapterTwoComponentComponent },
  { path: 'chapter3', component: UserListComponent },
  { path: 'chapter4', component: AddUserComponent },
  { path: 'chapter5', component: AddUserLogServiceComponent },
  { path: 'chapter6', component: AddUserLogServiceComponent },
  { path: 'user-list', component: UsersListComponent },
  { path: 'add-user', component: AddUserLogServiceComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'chapter8', component: Chapter8Component },
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
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [Util,_sharedVariables],
  bootstrap: [AppComponent]
})
export class AppModule { }
