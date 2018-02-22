import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-mensage',
  templateUrl: './dialog-mensage.component.html',
  styleUrls: ['./dialog-mensage.component.scss']
})
export class DialogMensageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogMensageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onNoClick(): void {
    console.log('quero fechar o dialog');
    this.dialogRef.close();
  }

}
