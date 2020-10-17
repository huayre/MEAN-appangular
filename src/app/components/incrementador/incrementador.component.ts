import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent{

  
 @Input() progreso:number = 80;
 @Input() ColorBtn:string = 'btn btn-danger'
 @Output() ValorSalidaHijo = new EventEmitter<number>(); 
   
  get getPorcentaje()
  {
    return `${ this.progreso }%`;
  }

  cambiarValor(valor:number)
  {
    if(this.progreso>=100 && valor>=0)
    { 
      this.ValorSalidaHijo.emit(100);
      this.progreso=100;
    }
    else
    {
      if(this.progreso<=0 && valor<=0)
    {
      this.progreso=0;
      this.ValorSalidaHijo.emit(0);
    }else
    {
      this.progreso=this.progreso+valor;
      this.ValorSalidaHijo.emit(this.progreso);
    }
      
    }   
   
  }

  valorInput(valor:number)
  {
   if(valor>=100)
   {
     this.ValorSalidaHijo.emit(100);
   }else{
     if(valor<=0){
      this.ValorSalidaHijo.emit(0);
     }
     else
     {
       this.ValorSalidaHijo.emit(valor);
     }

   }

  }

}
