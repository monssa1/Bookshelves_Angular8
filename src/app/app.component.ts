import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBMB3Hjh1rt9IZQZjuyshWlI3rmUF84wcQ',
      authDomain: 'bookshelves-983a6.firebaseapp.com',
      databaseURL: 'https://bookshelves-983a6.firebaseio.com',
      projectId: 'bookshelves-983a6',
      storageBucket: 'bookshelves-983a6.appspot.com',
      messagingSenderId: '283748827041',
      appId: '1:283748827041:web:42ac074ce6a759d273d5e0',
      measurementId: 'G-J1HK2ZPQ4P'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
