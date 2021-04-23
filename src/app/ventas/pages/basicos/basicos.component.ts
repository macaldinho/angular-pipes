import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'macario';
  nombreUpper: string = 'MACARIO'
  nombreCompleto: string = 'MaCaRiO hERnAnDeZ';

  fecha: Date = new Date();
}
