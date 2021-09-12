import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //Injeção da dependencia Router via construtor para poder usar na classe ou metodo
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routeUrl: '/products'
  
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
   //chamando a rota '/products/create' ou seja navega para a tela de create
   this.router.navigate(['/products/create'])
  }

}
