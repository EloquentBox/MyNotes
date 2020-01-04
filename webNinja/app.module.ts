import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule, Routes } from '@angular/router';
import { FindYrNinjaPipe } from './find-yr-ninja.pipe';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'directory/:ninja', component: DirectoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FindYrNinjaPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    CommonModule,
    FormsModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
