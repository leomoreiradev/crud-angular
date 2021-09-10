//Modelo de produto para receber os dados
export interface Product {
    id?: number // o simbolo "?" significa que esse atributo é opcional
    name: string
    price?: number
}

