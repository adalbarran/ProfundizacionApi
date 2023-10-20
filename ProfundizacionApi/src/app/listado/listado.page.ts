import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  public pelicula : any;
  constructor( private router: Router) { }

  ngOnInit() {
    
    const peliculas = localStorage.getItem('Films');
    if (peliculas == null){

    } 
    else{
      this.pelicula = JSON.parse(peliculas);

    }

  }
volver(){
  this.router.navigateByUrl('/');
}
}
