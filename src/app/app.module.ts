import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TasksControllerService} from '../app/Services/api/tasksController.service';
import { HttpClientModule} from "@angular/common/http";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatSlideToggleModule,
  MatInputModule,
  MatRadioModule,
  MatDialogModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MytasksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [TasksControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
