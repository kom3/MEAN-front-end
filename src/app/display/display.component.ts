import { Component, OnInit } from '@angular/core';
import axios from'axios';


var namearray=new Array()
var agearray=new Array()


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }



  getData(){

      axios.get('http://localhost:4000/person/')
      .then(function (response) {
      
       var datalist=JSON.stringify(response.data)
       var obj=JSON.parse(datalist)
        
       for(var i=0;i<obj.length;i++){
       
       if(obj[i].name ==("" || undefined) && obj[i].age ==(null || undefined))
       {
       
        continue
      }
        namearray.push(obj[i].name)
        agearray.push(obj[i].age)
       

        document.getElementById("namedump").innerHTML +="<br>"+namearray[i]
        document.getElementById("agedump").innerHTML +="<br>"+agearray[i]  
      }
        
  
     
       
       
       
       
      })
      .catch(function (error) {
       
        console.log(error);
      })
      .finally(function () {
       
      }); 
      

  } 

  clearTable(){

    document.getElementById("namedump").innerHTML =""
    document.getElementById("agedump").innerHTML =""
    
    

}

  ngOnInit() {
  }

}
