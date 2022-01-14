import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any [];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar (transferencia: any) {
    this.lapidar(transferencia);
    
    this.listaTransferencia.push(transferencia);
  }

  private lapidar (transferencia) {
    transferencia.data = new Date();
  }
}
