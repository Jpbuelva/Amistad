import { Injectable } from '@angular/core';
import { ContactoEntity } from '../models/contacto-entity';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  contactos: ContactoEntity[];
  constructor() { }


  get(): ContactoEntity[] {
    if (localStorage.getItem('contactos') === null) {
      this.contactos = [];
    } else {
      this.contactos = JSON.parse(localStorage.getItem('contactos'));
    }
    return this.contactos;
  }
  getBy(contact: ContactoEntity): ContactoEntity[] {
    if (localStorage.getItem('contactos') === null) {
      this.contactos = [];
    } else {
      for (let i = 0; this.contactos.length; i++) {
        if (contact.identificacion === this.contactos[i].identificacion) {
          this.contactos.push(this.contactos[i]);
        }
      }
    }
    return this.contactos;
  }
  add(contact: ContactoEntity) {
    let contactos;

    if (localStorage.getItem('contactos') === null) {
      contactos = [];
      contactos.unshift(contact);
      localStorage.setItem('contactos', JSON.stringify(contactos));
    } else {
      contactos = JSON.parse(localStorage.getItem('contactos'));
      contactos.unshift(contact);
      localStorage.setItem('contactos', JSON.stringify(contactos));
    }
  }


  remove(contact: ContactoEntity) {
    for (let i = 0; this.contactos.length; i++) {
      if (contact.identificacion === this.contactos[i].identificacion) {
        this.contactos.splice(i, 1);
        localStorage.setItem('contactos', JSON.stringify(this.contactos));
        break;
      }
    }

  }
  update(contact: ContactoEntity) {

    for (let i = 0; this.contactos.length; i++) {
      if (contact.identificacion === this.contactos[i].identificacion) {
        this.contactos[i].nombre = contact.nombre;
        this.contactos[i].celular = contact.celular;
        this.contactos[i].fechacumple = contact.fechacumple;
        localStorage.setItem('contactos', JSON.stringify(this.contactos));
        break;
      }
    }

  }

  
}
