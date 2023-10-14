import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../State/consumo-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 public movie: any;
  constructor(private rmapi : ConsumoApiService, private router: Router) {}

  ngOnInit() {
    this.rmapi.getFilms().subscribe(
      (data)=>{
        console.log(data);
        this.movie = data;
        localStorage.setItem('Films', JSON.stringify(data.result))
      }
    )
  }
  detalle(pelicula:any){
    console.log('Pelicula seleccionada', pelicula)
    localStorage.setItem('Films', JSON.stringify(pelicula))

    this.router.navigateByUrl('/listado');
  }
}
