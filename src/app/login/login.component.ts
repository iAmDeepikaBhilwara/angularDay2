import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name: any={};
arr:any=[];
  constructor() { }

  ngOnInit() {
    this.arr=[0,1,2]
    this.name="Deepika";
    console.log(JSON.stringify(this.arr));
    for(let ar in this.arr){
      console.log(ar);
    }
    
    }

}
