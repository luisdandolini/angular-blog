import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeiMHbpng8w8Ss4h87ydMIZfAttu69RIl2RQ&usqp=CAU";

  contentTitle:string = "NOVO HOMEM DE FERRO";

  contentDescription:string = "Nunca haverá outro Tony Stark, mas isso não significa que não possa haver um novo Homem de Ferro. O Gavião Arqueiro, interpretado por Jeremy Renner mostrou seu substituto ideal de Tony Stark, vivido por Robert Doweny Jr dentro do universo dos jovens vingadores.";

  constructor() { }

  ngOnInit(): void {
  }

}
