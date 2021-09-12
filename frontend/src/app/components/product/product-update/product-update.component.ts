import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product 

  constructor(private productService: ProductService, 
              private router: Router, 
              private route: ActivatedRoute 
  ) { }

  //Chamado quando o component se inicia
  ngOnInit(): void {
    //Pegando o id da rota (+) na frente do this.route.snapshot.paramMap.get('id') converte pra number
    const id = +this.route.snapshot.paramMap.get('id')
    //Fazendo chamando readById do service para buscar pelo id 
    this.productService.readById(id).subscribe(product => {
        //Preenchendo a variavel this.product com o product que vem da api
        this.product = product
    })
  }

  updateProduct(): void {
    //Chamando o update do service para atualizar o product
    this.productService.update(this.product).subscribe( () => {
      //lançando msg de sucesso
       this.productService.showMessage('produto atualizado com sucesso')
       //Redirecionando para '/products'
       this.router.navigate(['/products'])
    })

  }

  cancel(): void {
     //Redirecionando para '/products'
    this.router.navigate(['/products'])
  }

}
