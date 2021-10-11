import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChapterTwoComponentComponent } from './chapter-two-component/chapter-two-component.component';
import { ChapterOneComponentComponent } from './chapter-one-component/chapter-one-component.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component'
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserLogServiceComponent } from './add-user-log-service/add-user-log-service.component';

import { Util } from './models/util';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { DataService } from './services/data.service';


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
  { path: 'chapter8', component: AddUserLogServiceComponent },
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
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [Util],
  bootstrap: [AppComponent]
})
export class AppModule { }