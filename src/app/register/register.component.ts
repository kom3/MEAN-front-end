import { Component, OnInit } from '@angular/core';
import axios from 'axios';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  age:any=""
  username:any=""
  enteredAge(event){

   this.age=event.target.value
   // console.log(event.target.value)
  }

  enteredUname(event){
    this.username=event.target.value
    //console.log(event.target.value)

  }

  sendData(){


      
    axios.post('http://localhost:4000/person/add', {
      name: this.username,
      age: this.age
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   


  }

  ngOnInit() {
  }

}
