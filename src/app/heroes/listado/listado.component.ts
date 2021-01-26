import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Superman','Mazinger Z'];
  heroeBorrado: string = '';

  borrarHeroe(){

    this.heroeBorrado = this.heroes.shift() || '';//Se pone el or por si es undefined. Si no se pone el or da error.

  }


}

