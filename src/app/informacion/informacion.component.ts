import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  constructor(){}
  ngOnInit(): void{    
  }
  deducibles=[{name:'Vivienda',img:'assets/vivienda.jpeg'},{name:'Educacion',img:'assets/educacion.jpg'}, {name:'Salud',img:'assets/salud.jpg'}];
  imagenes=['assets/vivienda.jpeg','assets/educacion.jpg','assets/salud.jpg'];
  deducibles1=['Vivienda','Educacion','Salud'];
  informacion(){
    alert('Esta es informacion adicional');
  }

  borrarDeducible(deducible: any){
    for(let i=0;i<this.deducibles.length;i++)
    {
      if(deducible==this.deducibles[i]){
        this.deducibles.splice(i,1);
      }
    }
  }
}
