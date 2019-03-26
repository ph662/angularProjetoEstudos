import { Component } from '@angular/core';


/*
Tudo que formos criar ao longo do curso ficará dentro de "app",
 em que há app.component.ts

Classe Ts que declara o componente, 
o decorator @Componente possui metadados para declarar o componente

selector: nome do componente que sera usado fora daqui como se fosse html (usado em index.html)
templateUrl: link para o html
styleUrls: link para o css


Pra todo esse processo funcionar, o angular usar o 
webpack(encapsulado pelo angular CLI), module bundler
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto do Phelipe';
}
