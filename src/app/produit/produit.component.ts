import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  class="4SAE"
  subject = "Angular"
  color = "red";
  onClick(){
    
    return alert("Vous avez cliquer !!!");
  }
}
