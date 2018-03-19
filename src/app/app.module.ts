import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatGridListModule } from '@angular/material';
import { MatTableModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NewRegisterPromotionComponent } from './new-register-promotion/new-register-promotion.component';
import { SearchComponent } from './search/search.component';
import { UploadBaseComponent } from './upload-base/upload-base.component';
import { UploadBaseSisComponent } from './upload-base-sis/upload-base-sis.component';
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { NewRegisterSoloComponent } from './new-register-solo/new-register-solo.component';
import { SearchInboundComponent } from './search-inbound/search-inbound.component';

import { GeneralService } from './services/general.service';
import { AppConfig } from './services/constants';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    NewRegisterPromotionComponent,
    SearchComponent,
    SearchInboundComponent,
    UploadBaseComponent,
    UploadBaseSisComponent,
    LoginComponent,
    SearchResultsComponent,
    NewRegisterComponent,
    NewRegisterSoloComponent,
    ModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [AppConfig, GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
