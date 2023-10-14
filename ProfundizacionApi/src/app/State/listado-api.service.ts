import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoApiService {

  private peliculas: BehaviorSubject<any> = new BehaviorSubject(null);

  private pelicula : BehaviorSubject<any> = new BehaviorSubject(null);
  // get
  public obtenerPersonajes(){
    return this.peliculas.asObservable();

  }
  // set
  public personajesValue(peliculas: any){
    this.peliculas.next(peliculas);
  }


  constructor() {

    


  }




}
