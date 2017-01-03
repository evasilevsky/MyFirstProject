import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
listofresults: string[];
  constructor() { 
    this.listofresults=[]; 
    this.generatelistofresults();

   }
   generatelistofresults() {
         for(let i=0;i<100;i++){
        if(i%3===0&&i%5===0){
         this.listofresults.push('fizzbuzz')
       }
       else if(i%3===0){
         this.listofresults.push('fizz')
       }
        else if(i%5===0){
         this.listofresults.push('buzz')
       }
      
       else{ 
         this.listofresults.push(i.toString());
        }
     }
   }

  ngOnInit() {
  }

}
