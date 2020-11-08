import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    private heroeService:HeroesService
  ) {

   }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    console.log(termino);

    this.router.navigate(['/heroebuscado',termino]);
  }

}
