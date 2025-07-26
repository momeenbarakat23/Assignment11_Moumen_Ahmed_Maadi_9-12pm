import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
 popupImg:any="";
 removePopUp():void {
  document.getElementById("popup")?.classList.add("d-none");
}
openPopUp():void{
  document.getElementById("popup")?.classList.remove("d-none")

}


getImg(e:Event):void{
const getimg=e.target as HTMLImageElement
this.popupImg=getimg.getAttribute("valu")?.toString()
}


}

