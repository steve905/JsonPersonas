import { Component, OnInit } from '@angular/core';
import { CountryService } from '../api/persona.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  personas: any[] = [];
  errorMensage = '';
  filtro: any[] = [];
  filteredProducts: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(){
    this.countryService.obtenerPersonas().subscribe(
        data => {
          this.personas = data;
        },  err => this.errorMensage = err as any
      );
      console.log(this.personas)
  }

}
