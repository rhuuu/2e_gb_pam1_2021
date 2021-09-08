import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gasolinaPreco: number
  etanolPreco: number
  resposta = ''
  imgErro = 'Não consegui usar imagem pelo GitPod'

  constructor() {}

  verificar(){
    if (this.etanolPreco - this.gasolinaPreco == this.etanolPreco * 0.3) {
      this.resposta = 'Tanto faz'
    }
    if (this.etanolPreco - this.gasolinaPreco > this.etanolPreco * 0.3){
      this.resposta = 'A gasolina é mais vantajosa'
    }
    if(this.etanolPreco - this.gasolinaPreco < this.etanolPreco * 0.3){
      this.resposta = 'O etanol é mais vantajoso'
    }
  }
}
