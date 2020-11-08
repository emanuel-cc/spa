import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroebuscado',
  templateUrl: './heroebuscado.component.html'
})
export class HeroebuscadoComponent implements OnInit {
 @Input() heroes:any[] = [];
 @Input() index:number;
  constructor( 
    private heroeService:HeroesService,
    private router:Router,
    private activateRoute:ActivatedRoute
     ) { 
       /*this.activateRoute.params.subscribe( params =>{
         this.heroe = this.heroeService.buscarHeroes( params['termino'] );
         console.log("Heroe Encontrado");
         console.log(this.heroe);
       } )*/
     }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params =>{
      console.log(params['termino']);
      this.heroes = this.heroeService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    })
  }

  verHeroe(){
    console.log(this.index);
    this.router.navigate( ['/heroe', this.index] );
  }

}
