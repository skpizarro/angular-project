import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';

export class DestinoViaje{
    public servicios: string[]
    private selected :boolean;
    constructor(public nombre:string,public url:string){
        this.servicios = ['Piscina','Desayuno','Almuerzo','Cena','Barra libre']
    }

    isSelected():boolean{
        return this.selected;
    }

    setSelected(s:boolean){
        return this.selected = s;
    }
}