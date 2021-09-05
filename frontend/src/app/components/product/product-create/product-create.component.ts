import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  //Injetando a dependencia ProductService atraves do construtor para usar na classe
  //Injetando a dependencia Router atraves do construtor para usar na classe
  constructor(private productService: ProductService,
                     private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    //Chama a função que faz a requisição, quando retorna aciona o subscribe para chamar as funções 
    this.productService.create(this.product).subscribe(() => {
        //Quando chama show message aparece um toast na tela com a mensagem
        this.productService.showMessage('Produto criado!')
        //redireciona para tela de produtos
        this.router.navigate(['/products'])
    })
    
  }

  cancel(): void{
    //Quando clica em cancelar ele redireciona para tela de produtos
    this.router.navigate(['/products'])
  }


}
