import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar' 
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TvshowComponent } from './tvshow/tvshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TvshowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatCardModule, 
    MatFormFieldModule, MatInputModule, MatButtonModule,MatIconModule,
    FormsModule, ReactiveFormsModule
  ],  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
