import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar' // 
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //url base
  baseUrl = "http://localhost:3001/products"

  //Intetando MatSnackBar(Balão de msg) e  HttpClient atraves do construtor
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //Parametro isError: boolean = false (false por padrao) , para verificar se true ou false
  showMessage(msg: string, isError: boolean = false): void {
    //Chamando o snackBar.open(mensagem, action, {configuracoes}) 
     this.snackBar.open((msg), 'X', {
       duration: 3000,
       horizontalPosition: "right",
       verticalPosition:"top",
       panelClass: isError ? ['msg-error'] : ['msg-success'] //Se acontecer um erro retornar true para IsError e muda o ccs para ['msg-error']
     })
  }

  //Criando um recurso e tendo como retorno um Observable do tipo Product
  //POST
  create(product: Product): Observable<Product> {
    //fazendo requisição http post chamando o this.baseUrl ( "http://localhost:3001/products") e passando a url e o body da requsição 
    return this.http.post<Product>(this.baseUrl, product).pipe(
      //Chama o obj e retorna o proprio obj
      map(obj => obj),
      //Caso na chamada ocorra um erro é chamado o errorhandler
      catchError( e => this.erroHandler(e) )
    );
  }

  //Buscando uma lista de recurso e tendo como retorno um Observable do tipo Product[] (Array de products)
  //GET
  read(): Observable<Product[]>{
     //fazendo requisição http get chamando o this.baseUrl ( "http://localhost:3001/products")
      return this.http.get<Product[]>(this.baseUrl).pipe(
        //Chama o obj e retorna o proprio obj
        map(obj => obj),
        //Caso na chamada ocorra um erro é chamado o errorhandler
        catchError( e => this.erroHandler(e) )
      );
  }

  //Buscando uma um produto pelo id tendo como retorno um Observable do tipo Product
  //GET by ID
  readById(id: number): Observable<Product> {
    //fazendo requisição http get by id chamando o this.baseUrl ( "http://localhost:3001/products/{id}") passando o id
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      //Chama o obj e retorna o proprio obj
      map(obj => obj),
      //Caso na chamada ocorra um erro é chamado o errorhandler
      catchError( e => this.erroHandler(e) )
    );
  } 


  //Atualizando um produto tendo como retorno um Observable do tipo Product
  //PUT
  update(product: Product): Observable<Product> {
    //fazendo requisição http get by id chamando o this.baseUrl ( "http://localhost:3001/products/{id}") passando o id e o body
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      //Chama o obj e retorna o proprio obj
      map(obj => obj),
      //Caso na chamada ocorra um erro é chamado o errorhandler
      catchError( e => this.erroHandler(e) )
    );
  } 

  //Deletando um product 
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      //Chama o obj e retorna o proprio obj
      map(obj => obj),
      //Caso na chamada ocorra um erro é chamado o errorhandler
      catchError( e => this.erroHandler(e) )
    );
  } 

  erroHandler(e: any): Observable<any> {
    //Mostra a mensagem de erro
    this.showMessage('Ocorreu um erro', true)
    //retorna um observable vazio
    return EMPTY;
  }

  
}
