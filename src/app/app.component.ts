import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  word = 'hello how are you';
  today= Date();
  capString(item:String)
  {
         return item.toUpperCase();
  }
  user={
    name: 'anil',
    age: 28
  }
}
