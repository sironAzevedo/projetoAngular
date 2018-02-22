import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { TextLengthPipe } from './pipes/text-length.pipe';
import { MaterialModule } from '../+shered/angular.module';
import { SnackBarComponentComponent } from './components/snack-bar-component/snack-bar-component.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [ 
        FormsModule,
        CommonModule,        
        ReactiveFormsModule,
        TextLengthPipe,
        MaterialModule
    ],
    declarations: [
        TextLengthPipe,
        SnackBarComponentComponent        
    ],
    entryComponents: [
        
    ],
})
export class SharedModule { }
