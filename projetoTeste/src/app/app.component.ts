import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object = [];

  constructor(photoService: PhotoService) {

    photoService
      .listFromUser('flavio')
      .subscribe(
        photos => {
          console.log(photos[0].likes);//tipagem vindo da nova interface
          this.photos = photos
        },
        err => console.log(err)
      );
  }

}
