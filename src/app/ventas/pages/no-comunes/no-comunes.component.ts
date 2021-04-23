import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})


export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Macario"
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  };

  cambiarPersona() {

    this.nombre = "Julieta";
    this.genero = "femenino";

  }

  //i18nPlural
  clientes: string[] = ["Maria", "Pedro", "Juan", "Ramiro", "Jose"];
  clintesMapa = {
    '=0': "no tenemos ningun cliente esperando",
    '=1': "tenemos un cliente esperando",
    'other': "tenemos # clientes esperando"
  };

  borrarCliente() {

    this.clientes.pop();

  }

  //keyvalue pipe

  persona = {
    nombre: "Macario",
    edad: 35,
    direccion: "NYC, NY"
  };


  //json pipe

  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Robin",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: false
    }
  ];

  //async pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("Tenemos data de promesa!");
    }, 3500);

  });

}
