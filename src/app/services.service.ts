import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {


url="http://localhost:8089/etablissementBiblios"


  constructor(private http: HttpClient) { }


  getproduit(){
    return this.http.get(this.url); 

  }
  saveproduit(produit:any){

    return this.http.post("http://localhost:8089/produits",produit);
  }
  supprimerProduit(idproduit:any){

    return this.http.delete("http://localhost:8089/produits/"+idproduit)
  }
  modifierProduit(produithtml :any){

    return this.http.patch("http://localhost:8089/produits/"+produithtml.id,produithtml)
  }
}
