import { Component, OnInit, Input, HostBinding, EventEmitter, Output} from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  // creamos una variable
  @Input() destino :DestinoViaje;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked : EventEmitter<DestinoViaje>;
  @Input('idx') position: number; // aveces es necesario renombrar la variable

  
  constructor() {
    this.clicked = new EventEmitter(); // inicializamos el objeto
   }

  ngOnInit(): void {
  }

  ir(){
    this.clicked.emit(this.destino) // Accion del evento hacia el compponente padre
    return false; // no renderisa toda la pagina
  }

}
