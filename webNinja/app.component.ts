import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 homeTitle = 'Welcome to the homepage...';
 ninja = {
   name: 'Yoshi',
   belt: 'black'
 };
 uberNinja = {
   name: 'ryu',
   belt: 'red'
 };
 yell(e) {
   alert('I am yelling');
 }
}

