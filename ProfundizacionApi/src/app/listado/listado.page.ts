import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  public pelicula : any;
  constructor() { }

  ngOnInit() {
    
    const peliculas = localStorage.getItem('Films');
    if (peliculas == null){

    } 
    else{
      this.pelicula = JSON.parse(peliculas);

    }

  }

}
