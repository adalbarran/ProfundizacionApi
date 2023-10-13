import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../State/consumo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private rmapi : ConsumoApiService) {}

  ngOnInit(): void {
    this.rmapi.getPlanetas().subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('Planetas', JSON.stringify(data.result))
      }
    )
  }
}
