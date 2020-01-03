import {
  Component
} from '@angular/core';

import {
  EventsService
} from './events.service';
import {
  Event
} from './event.model';
import {
  Router
} from '@angular/router';
import {
  ModalController
} from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  find = false;
  // for starring an event
  star = false;
  // for fitering
  filter = false;
  cssClass = '';
  filterMenu = '';
  events: Event[] = this.eventService.getAllEvents();
  constructor(private eventService: EventsService, private router: Router, private modalCtrl: ModalController) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.find = false;
  }
  createEvent() {
    this.router.navigateByUrl('/createEvent');
  }

  // modal filter
   filterEvents() {
      // this.modalCtrl.create({
      //   component: FilterComponent, showBackdrop: false,
      //   cssClass: 'filtermodal'
      // }).then(modal => {
      //   modal.present();
      // });
      this.filter = !this.filter;
      if (this.filter) {
        this.cssClass = 'block-input';
      } else {
        this.cssClass = '';
      }
  }

  filterMenuSelection(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail.value);
    this.filterMenu = event.detail.value;
  }
  // searchbar
  setSearch() {
    this.find = !this.find;
  }
// star event
  starEvent() {
    this.star = ! this.star;
  }
  }



