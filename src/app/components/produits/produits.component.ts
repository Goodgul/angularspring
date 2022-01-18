import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  listedeproduite:any;
  isDisabled: boolean = false;
  isDisabled1: boolean = false;


 produithtml={

    titre: '',
    discription: '',
   
  }




  constructor( private ServicesService:ServicesService) { }
  ngOnInit(): void {
    this.getProduit1();
    this.isDisabled1=true;
  }
getProduit1(){

  this.ServicesService.getproduit().subscribe(data=> {
    this.listedeproduite = data;
    console.log(this.listedeproduite)

})}



    saveproduits(produit:any){
    
      console.log(produit.value)
      let data = produit.value
      this.ServicesService.saveproduit(data).subscribe(data=> {
        console.log("You have been registered!")
        this.getProduit1();
        produit.reset();

      })
    }

    suprimer(produit:any){
    
    
      this.ServicesService.supprimerProduit(produit.id).subscribe(data=> {
        console.log("produit est supprimer")
        this.getProduit1();
      })
    }


    redireger(produit:any){
      this.produithtml=produit;
      this.isDisabled=!  this.isDisabled;
      this.isDisabled1=!  this.isDisabled1;


    }

modifier(produit:any){
this.ServicesService.modifierProduit(this.produithtml).subscribe(data=>{
 
  console.log("produit est modifier");
  this.isDisabled=!  this.isDisabled;
  this.isDisabled1=!  this.isDisabled1;
  produit.reset();

})

}



  }
  





