import {
  Injectable
} from '@angular/core';
import {
  Event
} from './event.model'
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: Event[] = [{
      id: '101',
      name: 'Gundecha Cleaning',
      category: 'Environmental CAre',
      scope: 'people',
      date: '10-12-2013',
      location: 'Pune,MAharashtra',
      head: 'Akshay Jindal',
      description: 'your example looks like ionic/angular 1 … i am working with ionic2 I cannot figure out how to display a working menu item button without using the pages array. If i could hard-code each menu item that would be great, but i need an example because i can’t get it working',
      skills: ['puntuality', 'dedication', 'hardwork', 'perseverance', 'animal lover']
    },
    {
      id: '102',
      name: 'Pet Adoption Camp',
      category: 'Animal welfare',
      scope: 'globe',
      date: '19-12-2013',
      location: 'Mumbai,MAharashtra',
      head: 'Samrath Singh',
      description: 'I know this might be a really basic question but i’m getting started with ionic2 and a bit stumped…<br>I have built an app using the sidemenu starter template, added a few pages, but I want to make my sidemenu look nicer with some nice ionicons. But I simply cannot figure it out and googling is getting me nowhere.',
      skills: ['puntuality', 'dedication', 'hardwork', 'perseverance', 'animal lover'],
    },
    {
      id: '102',
      name: 'forge Camp',
      category: 'Animal welfare',
      scope: 'globe',
      date: '19-12-2013',
      location: 'Mumbai,MAharashtra',
      head: 'Samrath Singh',
      description: 'I know this might be a really basic question but i’m getting started with ionic2 and a bit stumped…<br>I have built an app using the sidemenu starter template, added a few pages, but I want to make my sidemenu look nicer with some nice ionicons. But I simply cannot figure it out and googling is getting me nowhere.',
      skills: ['puntuality', 'dedication', 'hardwork', 'perseverance', 'animal lover'],
    },
    {
      id: '102',
      name: 'Pet Adoption Camp',
      category: 'Animal welfare',
      scope: 'globe',
      date: '19-12-2013',
      location: 'Mumbai,MAharashtra',
      head: 'Samrath Singh',
      description: 'I know this might be a really basic question but i’m getting started with ionic2 and a bit stumped…<br>I have built an app using the sidemenu starter template, added a few pages, but I want to make my sidemenu look nicer with some nice ionicons. But I simply cannot figure it out and googling is getting me nowhere.',
      skills: ['puntuality', 'dedication', 'hardwork', 'perseverance', 'animal lover'],
    },
    {
      id: '102',
      name: 'Pet Adoption Camp',
      category: 'Animal welfare',
      scope: 'globe',
      date: '19-12-2013',
      location: 'Mumbai,MAharashtra',
      head: 'Samrath Singh',
      description: 'I know this might be a really basic question but i’m getting started with ionic2 and a bit stumped…<br>I have built an app using the sidemenu starter template, added a few pages, but I want to make my sidemenu look nicer with some nice ionicons. But I simply cannot figure it out and googling is getting me nowhere.',
      skills: ['puntuality', 'dedication', 'hardwork', 'perseverance', 'animal lover'],
    },
  ];
  constructor() {}

  getAllEvents() {
    // returns the coipies of the array
    return [...this.events];
  }

  getEvent(id: string) {
    return {
      ...this.events.find(events => {
        return events.id === id;
      })
    };
  }
}