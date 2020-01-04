import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  homeTitle = 'Welcome to the homepage...';
 classes = {blue: true, red: false, underline: true};
 test = false;
 ninjas = [
   { name: 'yoshi', belt: 'black' },
   { name: 'ryu', belt: 'red' },
   { name: 'mojo', belt: 'yellow' }
 ];
}


