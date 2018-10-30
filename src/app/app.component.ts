import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBiptXtAZPsUC-M_vLkEnNkeBYwtGbuAFg",
      authDomain: "chem-inventory.firebaseapp.com",
      databaseURL: "https://chem-inventory.firebaseio.com",
      projectId: "chem-inventory",
      storageBucket: "chem-inventory.appspot.com",
      messagingSenderId: "73301455131"
    };
    firebase.initializeApp(config);
  }
  title = 'ang-chem-inventory';
}
