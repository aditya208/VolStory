import { Component, OnInit } from '@angular/core';
import { EventsService } from '../home/events.service';
import { Event } from '../home/event.model';
@Component({
  selector: 'app-mystory',
  templateUrl: './mystory.page.html',
  styleUrls: ['./mystory.page.scss'],
})
export class MystoryPage implements OnInit {

  events: Event[] = this.eventService.getAllEvents();
  constructor(private eventService: EventsService) {}

  showEv = false;
  showEh = false;
  ngOnInit() {
  }
  showEV() {
    this.showEv = !this.showEv;
  }
  
  showEH() {
    this.showEh = !this.showEh;
  }
  
}
