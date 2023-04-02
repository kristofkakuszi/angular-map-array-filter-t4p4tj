import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operator/mergeMap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  map = new Map<String, String>();

  map1 = new Map<String, String>();
  mergedMap = new Map<String, String>();
  predefinedKeys = ['AA', 'BB'];
  constructor() {
    this.map.set('AA', 'sss');
    this.map.set('BB', 'sss');
    this.map.set('CC', 'sss');
    this.map.set('DD', 'sss');
    this.map.set('EE', 'sss');

    this.map1.set('AA2', 'sss');
    this.map1.set('BB2', 'sss');
    this.map1.set('CC2', 'sss');
    this.map1.set('DD2', 'sss');

    this.mergedMap = new Map(
      [
        ...Array.from(this.map.entries()),
        ...Array.from(this.map1.entries()),
      ].filter(([key]) => {
        return this.predefinedKeys.indexOf(key.toString()) > -1;
      })
    );

    this.mergedMap.forEach((value: string, key: string) => {
      console.log(key, value);
    });

    //NYAMNYAM

    console.log('hello');
    console.log('asfasfsaf');

    //https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d#:~:text=many%20other%20languages.-,.map(),-Let%20me%20explain

    var officers = [
      { id: 20, name: 'Captain Piett' },
      { id: 24, name: 'General Veers' },
      { id: 56, name: 'Admiral Ozzel' },
      { id: 88, name: 'Commander Jerjerrod' },
    ];

    // What you need
    //[20, 24, 56, 88]

    var officerss = officers.map((x) => x.id); //officers IDs
    console.log(officerss);

    //https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d#:~:text=the%20original%20array.-,.reduce(),-Just%20like%20.map
    var pilots = [
      {
        id: 10,
        name: 'Poe Dameron',
        years: 14,
      },
      {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
      },
      {
        id: 41,
        name: 'Tallissan Lintra',
        years: 16,
      },
      {
        id: 99,
        name: 'Ello Asty',
        years: 22,
      },
    ];

    const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0); //pilots age
    console.log(totalYears);

    //https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d#:~:text=from%20an%20array.-,.filter(),-What%20if%20you
    var pilotsa = [
      {
        id: 2,
        name: 'Wedge Antilles',
        faction: 'Rebels',
      },
      {
        id: 8,
        name: 'Ciena Ree',
        faction: 'Empire',
      },
      {
        id: 40,
        name: 'Iden Versio',
        faction: 'Empire',
      },
      {
        id: 66,
        name: 'Thane Kyrell',
        faction: 'Rebels',
      },
    ];

    var findPilotsFaction = pilotsa.filter((x) => x.faction === 'Rebels');
    console.log(findPilotsFaction);

    const rebels = pilotsa.filter((pilot) => pilot.faction === 'Rebels');
    const empire = pilotsa.filter((pilot) => pilot.faction === 'Empire');
    console.log(rebels);
  }

  getKeys(map) {
    return Array.from(map.keys());
  }
}
