import { Component, OnInit } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-spline-animation',
  standalone: true,
  imports: [],
  templateUrl: './spline-animation.component.html',
  styleUrl: './spline-animation.component.css'
})
export class SplineAnimationComponent implements OnInit{

 constructor() {}

 ngOnInit(): void {
 // make sure you have a canvas in the body
 const canvas: any = document.getElementById('canvas3d');


 // start the application and load the scene
 const spline = new Application(canvas);
 spline.load('https://prod.spline.design/fqC3J-FyEY51DKOl/scene.splinecode');
 }
 
}
