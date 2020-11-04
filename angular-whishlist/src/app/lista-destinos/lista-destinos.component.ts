import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos:DestinoViaje[];
  constructor() {
    this.destinos = [];
   }

  ngOnInit(): void {
  }

  guardar(nombre:string,url:string):boolean{
    this.destinos.push(new DestinoViaje(nombre,url));
    console.log(this.destinos);
    return false; // para que no recargue toda la pagina
  }

  elegido(d:DestinoViaje){
    this.destinos.forEach(function(x){x.setSelected(false)}) // Desmarcamos como elegidos a todos los demas
    d.setSelected(true); // Marcamos el que emitio el evento, o el que corresponde al parametro recibido

  }

}
