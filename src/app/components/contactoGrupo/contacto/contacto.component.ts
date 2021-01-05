import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorStateMatcher1 } from '../../../service/ErrorStateMatcher1';
import { DataService } from '../../../service/data.service';
import { ContactoEntity } from '../../../models/contacto-entity';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formAgregar: FormGroup;
  matcher = new ErrorStateMatcher1();

  constructor(   
    private datePipe: DatePipe,
    formBuilder: FormBuilder,
    public dataService: DataService,
    public dialogRef: MatDialogRef<ContactoComponent>) {
    this.formAgregar = formBuilder.group({
      identificacion: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]],
      nombre: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]],
      direccion: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]],
      celular: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]],
      fechacumple: ['', [Validators.maxLength(50), Validators.required, Validators.pattern(/^(?!\s).*$/)]]
    });
  
  }

  onSubmit() { 
    const dato: ContactoEntity = {
      identificacion: this.formAgregar.value.identificacion,
      nombre: this.formAgregar.value.nombre,
      celular: this.formAgregar.value.celular,
      direccion: this.formAgregar.value.direccion,
      fechacumple: this.datePipe.transform(this.formAgregar.value.fechacumple, 'yyyy-MM-dd')
    };
    this.dataService.add(dato);
    this.onClose();
  }
 
  ngOnInit() {
  }
  hasError(nombreControl: string, validacion: string) {
    const control = this.formAgregar.get(nombreControl);
    return control.hasError(validacion);
  }

  onClose() {

    this.dialogRef.close();
  }
}
