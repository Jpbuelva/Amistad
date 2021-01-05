import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ContactoEntity } from 'src/app/models/contacto-entity';
import { DataService } from '../../../service/data.service';
import { ContactoEditComponent } from '../contacto-edit/contacto-edit.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ContactoBorrarComponent } from '../contacto-borrar/contacto-borrar.component';
import { ToasterService } from '../../../shared/toaster.service';
 
@Component({
  selector: 'app-contac-list',
  templateUrl: './contac-list.component.html',
  styleUrls: ['./contac-list.component.css']
})
export class ContacListComponent implements OnInit {
  displayedColumns: string[] = ['identificacion', 'nombre', 'celular', 'fechacumple', 'opciones'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource = new MatTableDataSource<ContactoEntity>();
  constructor(
    public dataservice: DataService,
    public toaster: ToasterService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getContacto();
  }

  getContacto() {
   
    this.dataSource = new MatTableDataSource<ContactoEntity>(this.dataservice.get());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  agregar() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    const dialogRef = this.dialog.open(ContactoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getContacto();
    });
  }

  editar(element: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.data = element;
    const dialogRef = this.dialog.open(ContactoEditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getContacto();
    });
  }

  eliminar(cli: any) {
    const dialogRef = this.dialog.open(ContactoBorrarComponent, {
      width: '500px',
      data: {
        id: cli.identificacion,
        titulo: '¿Desea eliminar el contacto "' + cli.nombre + '"?',
        dato: 'Si continua no podra recuperar los cambios.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.id > 0) {
        this.dataservice.remove(cli);
        this.toaster.toast('Se ha eliminado correctamente', 'sucess');
        this.getContacto();

      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

 