import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackBar: MatSnackBar) { }


  toast( messagge: string, dato: any) {
    switch (dato) {
      case 'sucess':
        this.showSnackbar(messagge, 'sucess');
        break;
      case 'info':
        this.showSnackbar(messagge, 'info');
        break;
      case 'danger':
        this.showSnackbar(messagge, 'danger');
        break;
      case 'alert':
        this.showSnackbar(messagge, 'alert');
        break;

      default:
        break;
    }

  }

  private showSnackbar(content, option: string) {
    const sb = this.snackBar.open(content, 'X', {
      duration: 3000,
      panelClass: option,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',

    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }
}


