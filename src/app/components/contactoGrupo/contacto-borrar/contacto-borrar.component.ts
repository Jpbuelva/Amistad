import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contacto-borrar',
  templateUrl: './contacto-borrar.component.html',
  styleUrls: ['./contacto-borrar.component.css']
})
export class ContactoBorrarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContactoBorrarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  cancelar(): void {
    this.data.id = 0;
    this.dialogRef.close();
  }
}
