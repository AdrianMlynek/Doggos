import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Image} from './image';
import { Observable, Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  readonly ROOT_URL = 'https://dog.ceo/api/breeds/image/random/8';
  randomDog: Observable<Image>;
  URL: string;
  images: string[8];

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<Image>(this.ROOT_URL).subscribe(val => this.images = val.message);
  }
  onClick(){
    this.http.get<Image>(this.ROOT_URL).subscribe(val => this.images = val.message);
  }
  
}
