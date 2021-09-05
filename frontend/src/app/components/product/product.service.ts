import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar' // 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //url base
  baseUrl = "http://localhost:3001/products"

  //Intetando MatSnackBar(Balão de msg) e  HttpClient atraves do construtor
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    //Chamando o snackBar.open(mensagem, action, {configuracoes}) 
     this.snackBar.open((msg), 'X', {
       duration: 3000,
       horizontalPosition: "right",
       verticalPosition:"top"
     })
  }

  //Criando um recurso e tendo como retorno um Observable do tipo Product
  create(product: Product): Observable<Product> {
    //fazendo requisição http post passando a url e o body da requsição
    return this.http.post<Product>(this.baseUrl, product);
  }
}
