import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    //template- para escrever o template aqui mesmo
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    title='Projeto do Phelipe';
    @Input() description="";
    @Input() url="";

}