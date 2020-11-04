import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';

export class DestinoViaje{
    nombre:string;
    imagenUrl:string;
    constructor(n:string,u:string){
        this.nombre = n;
        this.imagenUrl=u;
    }
}