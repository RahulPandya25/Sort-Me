import { Component, OnInit } from "@angular/core";
import { element } from "protractor";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  arraySize: number;
  givenArray: Array<number>;
  newArray: Array<number>;

  generateRandomArray = function(arraySize: number) {
    return Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * arraySize)
    );
  };

  setHeightofBars = function() {
    let bars = document.getElementsByClassName("bar");
    console.log(bars);
    for (let i = 0; i < bars.length; i++) {
      // todo: continue from here
      // bars[i].style.height = `${this.givenArray[i] * 10}px`;
    }
  };

  ngOnInit() {
    this.arraySize = 20;
    this.givenArray = this.generateRandomArray(this.arraySize);
    this.setHeightofBars();
  }
}
