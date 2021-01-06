import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactoEntity } from 'src/app/models/contacto-entity';

@Component({
  selector: 'app-modal-detalles',
  templateUrl: './modal-detalles.component.html',
  styleUrls: ['./modal-detalles.component.css']
})
export class ModalDetallesComponent implements OnInit {
  displayedColumns: string[] = ['identificacion', 'nombre', 'celular', 'fechacumple' ];

  dataSource;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: ContactoEntity,
    public dialogRef: MatDialogRef<ModalDetallesComponent>) {
    this.dataSource = data;
  }

  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
  }
}
 