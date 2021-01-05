import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactoEntity } from 'src/app/models/contacto-entity';
import { DataService } from 'src/app/service/data.service';
import { ErrorStateMatcher1 } from 'src/app/service/ErrorStateMatcher1';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-contacto-edit',
  templateUrl: './contacto-edit.component.html',
  styleUrls: ['./contacto-edit.component.css']
})
export class ContactoEditComponent implements OnInit {
  formUpdate: FormGroup;
  selectedDate: Date;
  DATA: ContactoEntity;
  matcher = new ErrorStateMatcher1();
  constructor(
    @Inject(MAT_DIALOG_DATA) data: ContactoEntity,
    private toaster: ToasterService,
    formBuilder: FormBuilder,
    private datePipe: DatePipe,
    public dataService: DataService,
    public dialogRef: MatDialogRef<ContactoEditComponent>) {

    this.formUpdate = formBuilder.group({
      identificacion: [{ value: '', disabled: true }, [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]],
      nombre: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]],
      direccion: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]],
      celular: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]],
      fechacumple: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]]
    });
    this.DATA = data;
    this.getContacto(this.DATA);
  }

  ngOnInit() {
  }


  getContacto(data: any) {
    var d = new Date(data.fechacumple);
    d.setDate(d.getDate() + 1);
    data.fechacumple = this.datePipe.transform(d.setDate(d.getDate() + 1), 'yyyy-MM-dd');
    this.formUpdate.patchValue(data);

  }


  onSubmit() {
    const dato: ContactoEntity = {
      identificacion: this.DATA.identificacion,
      nombre: this.formUpdate.value.nombre,
      celular: this.formUpdate.value.celular,
      direccion: this.formUpdate.value.direccion,
      fechacumple: this.datePipe.transform(this.formUpdate.value.fechacumple, 'yyyy-MM-dd')
    };
    this.dataService.update(dato);
    this.toaster.toast('Correcto!!!', 'sucess');

    this.onClose();
  }

  hasError(nombreControl: string, validacion: string) {
    const control = this.formUpdate.get(nombreControl);
    return control.hasError(validacion);
  }

  onClose() {
    this.dialogRef.close();
  }

}
