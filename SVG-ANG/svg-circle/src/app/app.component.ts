import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  color = 'pink';
  size= 30;
  constructor() { }

  hello() {
    console.log('hello');
    this.color = 'green';
  }
  changeColor() {
      return this.color;
  }  

  minuseSize(){
    this.size -= 1;
  }

  plusSize(){
    this.size+= 1;
  }
  
  getSize(){
    let result = this.size + 'px' ;
    return result;
  }

  moveItem(evt){

  }
      
  ngOnInit() {

    

  }
}
