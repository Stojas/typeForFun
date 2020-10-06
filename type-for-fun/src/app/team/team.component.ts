import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements OnInit {

  teamSelect: string = "team";
  host: boolean = true;
  team1 = [
    {
      name: 'Andrew',
      lastName: 'Robertson',
      position: 'GK',
      rank: '75'
    },
    {
      name: 'Rio',
      lastName: 'Ferdinand',
      position: 'CO',
      rank: '90'
    },
    {
      name: 'Raul',
      lastName: 'Garcia',
      position: 'CO',
      rank: '79'
    },
    {
      name: 'Joshua',
      lastName: 'Green',
      position: 'PO',
      rank: '68'
    },
    {
      name: 'King',
      lastName: 'Preston',
      position: 'LO',
      rank: '80'
    },
    {
      name: 'J.K.',
      lastName: 'Kante',
      position: 'DP',
      rank: '91'
    },
    {
      name: 'Jan',
      lastName: 'Bednarek',
      position: 'SPO',
      rank: '75'
    },
    {
      name: 'Mo',
      lastName: 'Salah',
      position: 'PP',
      rank: '90'
    },
    {
      name: 'Eden',
      lastName: 'Hazard',
      position: 'LP',
      rank: '93'
    },
    {
      name: 'Leo',
      lastName: 'Messi',
      position: 'N',
      rank: '95'
    },
    {
      name: 'Cristiano',
      lastName: 'Ronaldo',
      position: 'N',
      rank: '95'
    }
  ]
  team2 = [
    {
      name: 'Jacek',
      lastName: 'Grochowski',
      position: 'GK',
      rank: '77'
    },
    {
      name: 'John',
      lastName: 'Terry',
      position: 'CO',
      rank: '91'
    },
    {
      name: 'Garcia',
      lastName: 'Raul',
      position: 'CO',
      rank: '88'
    },
    {
      name: 'Joshua',
      lastName: 'Green',
      position: 'PO',
      rank: '68'
    },
    {
      name: 'Dani',
      lastName: 'Alves',
      position: 'LO',
      rank: '88'
    },
    {
      name: 'Easy',
      lastName: 'Peasy',
      position: 'DP',
      rank: '88'
    },
    {
      name: 'Toni',
      lastName: 'Kross',
      position: 'SPO',
      rank: '87'
    },
    {
      name: 'Frank',
      lastName: 'Ribery',
      position: 'PP',
      rank: '90'
    },
    {
      name: 'Zbigniew',
      lastName: 'Boniek',
      position: 'LP',
      rank: '91'
    },
    {
      name: 'Robert',
      lastName: 'Lewandowski',
      position: 'N',
      rank: '93'
    },
    {
      name: 'Ristiano',
      lastName: 'Conaldo',
      position: 'N',
      rank: '95'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  changeTeamOrPitch(value: string){
    this.teamSelect = value;
  }



  teamChange(event){
    this.host = event;

  }

}
