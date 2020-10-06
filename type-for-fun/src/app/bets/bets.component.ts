import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
declare var Snap: any;
declare var mina: any; 
@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetsComponent implements OnInit {

  public tempArray = [
    {
      team1: "Liverpool FC",
      team2: "Arsenal FC",
      win1: "2,02",
      draw: "3,4",
      win2: "3,2"
    },
    {
      team1: "West Ham United",
      team2: "Norwich",
      win1: "2,5",
      draw: "3,1",
      win2: "2,8"
    },
    {
      team1: "Manchester United",
      team2: "Manchester City",
      win1: "2,9",
      draw: "3,5",
      win2: "1,98"
    },
    {
      team1: "Swansea",
      team2: "Everton",
      win1: "2,4",
      draw: "2,9",
      win2: "1,76"
    },
    {
      team1: "Crystal Palace",
      team2: "Tottenham",
      win1: "3,5",
      draw: "3,4",
      win2: "1,56"
    },
    {
      team1: "Wolves",
      team2: "Brighton",
      win1: "2,2",
      draw: "2,9",
      win2: "3,4"
    },
    {
      team1: "Leeds",
      team2: "Newcastle",
      win1: "2,4",
      draw: "3",
      win2: "2,4"
    }
  ]

 

  constructor() { }

  ngOnInit() {
  }

  openTeams(fixture){
    console.log("Fixture", fixture)
  }
}
