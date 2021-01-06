import { ModalDetallesComponent } from './../modal-detalles/modal-detalles.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router, RouterModule } from '@angular/router';
import { ContactoEntity } from 'src/app/models/contacto-entity';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cantidad: number;
  cumple = 0;
  contactos: ContactoEntity[];

  constructor(
    private router: Router,
    private dataService: DataService,
    public dialog: MatDialog) {
    this.CantidadContacto();
    // this.Cumple();

  }
  ngOnInit(): void {

  }


  redirec() {
    this.router.navigate(['/Contacto']);
  }

  CantidadContacto() {
    const data = this.dataService.get();
    this.cantidad = data.length;
    this.contactos = [];
    if (data != null) {
      for (const item of data) {

        const dateCumple = new Date(item.fechacumple);
        const dateActual = new Date();
    
        if (( dateActual.getFullYear() - dateCumple.getFullYear()) > 0) {
          if (dateCumple.getUTCMonth() === dateActual.getUTCMonth()) {
            if (dateCumple.getUTCDate() === dateActual.getUTCDate()) {
              console.log(item);
              this.contactos.push(item);
              this.cumple++;
            }
          }
        }
      }
    }
  }

  detalle() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.data = this.contactos;
    const dialogRef = this.dialog.open(ModalDetallesComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}



