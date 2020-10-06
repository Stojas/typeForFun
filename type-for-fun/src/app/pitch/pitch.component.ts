import { Component, OnInit } from '@angular/core';
declare var Snap: any;
declare var mina: any; 
@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
      const s = Snap('#snap');
      console.log("SNAP", s);
      var rect = s.rect(0, 0, 350, 500);
      rect.attr({
        fill: "#32a846"
      })

      var line1 = s.line(5, 5, 345, 5);
      line1.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line2 = s.line(345, 5, 345, 495);
      line2.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line3 = s.line(345, 495, 5, 495);
      line3.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line4 = s.line( 5, 495, 5, 5);
      line4.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var circle = s.circle( 175, 250, 25);
      circle.attr({
        stroke: "white",
        strokeWidth: 2,
        fill: "#32a846"
      })

      var line5 = s.line( 5, 249, 345, 249);
      line5.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line6 = s.line( 75, 5, 75, 75);
      line6.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line7 = s.line( 75, 75, 275, 75);
      line7.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line8 = s.line( 275, 75, 275, 5);
      line8.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line9 = s.line( 75, 495, 75, 425);
      line9.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line10 = s.line( 75, 425, 275, 425);
      line10.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var line11 = s.line( 275, 425, 275, 495);
      line11.attr({
        stroke: "white",
        strokeWidth: 2
      })

      var player1 = s.circle( 175, 10, 8);
      player1.attr({
        fill: "#ffcc00",
        style: "cursor: pointer"
      })

      var player2 = s.circle( 50, 50, 8);
      player2.attr({
        fill: "#6699ff"
      })

      var player3 = s.circle( 140, 50, 8);
      player3.attr({
        fill: "#6699ff"
      })

      var player4 = s.circle( 210, 50, 8);
      player4.attr({
        fill: "#6699ff"
      })

      var player5 = s.circle( 300, 50, 8);
      player5.attr({
        fill: "#6699ff"
      })

      var player6 = s.circle( 50, 150, 8);
      player6.attr({
        fill: "#00cc00"
      })

      var player7 = s.circle( 140, 150, 8);
      player7.attr({
        fill: "#00cc00"
      })

      var player8 = s.circle( 210, 150, 8);
      player8.attr({
        fill: "#00cc00"
      })

      var player9 = s.circle( 300, 150, 8);
      player9.attr({
        fill: "#00cc00"
      })

      var player10 = s.circle( 150, 230, 8);
      player10.attr({
        fill: "#ff5050"
      })

      var player11 = s.circle( 200, 230, 8);
      player11.attr({
        fill: "#ff5050"
      })

      var player12 = s.circle( 175, 490, 8);
      player12.attr({
        fill: "#ffcc00"
      })

      var player13 = s.circle( 50, 450, 8);
      player13.attr({
        fill: "#6699ff"
      })

      var player14 = s.circle( 140, 450, 8);
      player14.attr({
        fill: "#6699ff"
      })

      var player15 = s.circle( 210, 450, 8);
      player15.attr({
        fill: "#6699ff"
      })

      var player16 = s.circle( 300, 450, 8);
      player16.attr({
        fill: "#6699ff"
      })

      var player17 = s.circle( 50, 350, 8);
      player17.attr({
        fill: "#00cc00"
      })

      var player18 = s.circle( 140, 350, 8);
      player18.attr({
        fill: "#00cc00"
      })

      var player19 = s.circle( 210, 350, 8);
      player19.attr({
        fill: "#00cc00"
      })

      var player20 = s.circle( 300, 350, 8);
      player20.attr({
        fill: "#00cc00"
      })

      var player21 = s.circle( 150, 270, 8);
      player21.attr({
        fill: "#ff5050",
        
      })

      var player22 = s.circle( 200, 270, 8);
      player22.attr({
        fill: "#ff5050"
      })

      player1.mouseover(function(){
        console.log("MouseOVER", player1);
        this.animate({r: 11}, 500)
      }).mouseout(function() {
        this.animate({
          r: 8
        }, 500);
      })
  }
}
