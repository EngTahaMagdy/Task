import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
doLike=0;
do:boolean=false;
//localStorage.setItem('data',do);

  constructor() { }

  ngOnInit(): void {
    
    localStorage.setItem('data',JSON.stringify(this.do));
  }
  likes()
  {
   // let xb=JSON.parse(localStorage.getItem('data'));

    //alert(typeof((xb)))
    this.do=!this.do;
    if(this.do==true)
    {
      this.doLike+=1;
      this.do=true;
      localStorage.setItem('data',JSON.stringify(this.do));


    }else
    {
      this.doLike-=1;
      this.do=false;
      localStorage.setItem('data',JSON.stringify(this.do));

    }
    

    
  }

}
