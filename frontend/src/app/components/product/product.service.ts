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
  //POST
  create(product: Product): Observable<Product> {
    //fazendo requisição http post chamando o this.baseUrl ( "http://localhost:3001/products") e passando a url e o body da requsição 
    return this.http.post<Product>(this.baseUrl, product);
  }

  //Buscando uma lista de recurso e tendo como retorno um Observable do tipo Product[] (Array de products)
  //GET
  read(): Observable<Product[]>{
     //fazendo requisição http get chamando o this.baseUrl ( "http://localhost:3001/products")
      return this.http.get<Product[]>(this.baseUrl);
  }

  //Buscando uma um produto pelo id tendo como retorno um Observable do tipo Product
  //GET by ID
  readById(id: string): Observable<Product> {
    //fazendo requisição http get by id chamando o this.baseUrl ( "http://localhost:3001/products/{id}") passando o id
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  } 


  //Atualizando uma um produto tendo como retorno um Observable do tipo Product
  //PUT
  update(product: Product): Observable<Product> {
    //fazendo requisição http get by id chamando o this.baseUrl ( "http://localhost:3001/products/{id}") passando o id e o body
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  } 


  
}
