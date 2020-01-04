import { Component, OnInit} from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

import { Event } from '../event.model';
import { EventsService } from '../events.service';
import { AlertController, PopoverController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { HomePage } from '../home.page';
import { PopmenuComponent } from './popmenu/popmenu.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  segmentButton: string;
  selector = true;
  event: Event = this.eventsService.getEvent('01');
  showSkill = false;

  // alaert controller
  // tslint:disable-next-line: max-line-length
  constructor(private eventsService: EventsService, private activatedRoute: ActivatedRoute, private alertController: AlertController, private router: Router, public popoverController: PopoverController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('EventId')) {
        // redirect
        return;
      }
      const eventId = paramMap.get('EventId');
      console.log(eventId);
      this.event = this.eventsService.getEvent(eventId);
    });
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    if ( event.detail.value === 'details') {
        this.selector = false;
    }
   }
   onDropDown() {
     this.showSkill = !this.showSkill;
     console.log(this.showSkill);
   }

// popover
async present(ev: any) {
  const popover = await this.popoverController.create({
    component: PopmenuComponent,
    event: ev,
    animated: false,
    // translucent: true,
  });
  return await popover.present();
}

}
