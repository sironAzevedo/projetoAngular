import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DialogMensageComponent } from './shered/components/dialog-mensage/dialog-mensage.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shered/shared.module';
import {BrowserAnimationsModule,  NoopAnimationsModule
} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DialogMensageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,    
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogMensageComponent]
})
export class AppModule { }
