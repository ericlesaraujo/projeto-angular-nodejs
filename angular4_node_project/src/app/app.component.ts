import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pimeira aplicação Angular 4';
  tasks = [];
  task="";
  add(){
	this.tasks.push(this.task);
	this.task="";
  }
}
