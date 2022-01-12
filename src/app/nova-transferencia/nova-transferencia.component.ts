import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransfeir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    //confirma button pres
    console.log('Solicitada nova tranferência');

    //atribui valores
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransfeir.emit(valorEmitir);

    //limpa campos
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
