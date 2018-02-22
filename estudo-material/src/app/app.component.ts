import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Cliente } from './modal-cliente/modal-cliente';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { DialogMensageComponent } from './shered/components/dialog-mensage/dialog-mensage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  assetDepositForm: FormGroup;
  destroy$ = new Subject();
  clientes: Cliente[] = [];
  canAdd = false;
  mensage: string = 'Já exeiste cliente cadastrado com esse email';
  onDeleteLegalvehicle = new EventEmitter<string>();
  emailClientDuplicated = false;

  opcoes = [
    { id: '1', name: 'MASCULINO' },
    { id: '2', name: 'FEMININO' },
    { id: '3', name: 'OUTRO' }
  ];

  formDialogRef: MatDialogRef<DialogMensageComponent> | null = null;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.assetDepositForm = this.formBuilder.group({
      nomeCliente: [''],
      emailCliente: ['', Validators.required],
      sexoCliente: ['']
    });
  }

  add() {
    const formValues = this.assetDepositForm.value;
    const cliente = {
      nomeCliente: formValues.nomeCliente,
      emailCliente: formValues.emailCliente,
      sexoCliente: formValues.sexoCliente
    } as Cliente;

    this.clientes.push(cliente);
    this.resetCliente();
    this.openSnackBar();
    this.canAdd = false;
  }

  clear() {
    if (this.clientes.length > 0) {
      this.clientes = [];
    }
  }

  deleteItem(emailCliente: string) {
    const cliente = this.clientes.find(item => item.emailCliente === emailCliente) || {} as Cliente;
    const index: number = this.clientes.indexOf(cliente);
    if (index !== -1) {
      this.clientes.splice(index, 1);
    }
  }

  verifyAddClient(event: KeyboardEvent) {
    const formValues = this.assetDepositForm.value;
    const nomeCliente = formValues.nomeCliente;
    const emailCliente = formValues.emailCliente;
    const sexoCliente = formValues.sexoCliente;
    const compareName = (cliente: Cliente) => {
      return cliente.emailCliente.toLowerCase() === emailCliente.toLowerCase();
    };

    if (emailCliente && this.clientes.some(compareName)) {
      this.emailClientDuplicated = true;
      this.canAdd = false;
      this.openDialog();
    } else if (nomeCliente && emailCliente && sexoCliente) {
      this.emailClientDuplicated = false;
      this.canAdd = true;
    } else {
      this.emailClientDuplicated = false;
      this.canAdd = false;
    }
  }

  openDialog() {
    const formValues = this.assetDepositForm.value;
    const emailCliente = formValues.emailCliente;
    this.formDialogRef = this.dialog.open(DialogMensageComponent, {
      data: { mensage: this.mensage, emailCliente: emailCliente.toLowerCase() }
    });
  }

  openSnackBar() {
    this.snackBar.open("Yes i am Coming", "Ok", {
      duration: 1000,
    });
  }

  resetCliente() {
    this.assetDepositForm.controls.nomeCliente.reset();
    this.assetDepositForm.controls.emailCliente.reset();
    this.assetDepositForm.controls.sexoCliente.reset();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }





}
