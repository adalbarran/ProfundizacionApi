import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../State/consumo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 public characters: any;
  constructor(private rmapi : ConsumoApiService) {}

  ngOnInit() {
    this.rmapi.getPlanetas().subscribe(
      (data)=>{
        console.log(data);
        this.characters = data;
        localStorage.setItem('Planetas', JSON.stringify(data.result))
      }
    )
  }
}
