import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { EventsTableComponent } from "../events-table/events-table.component";
import { veselkaEvents } from '../../../data/mocks/events';
import { VeselkaEvent } from '../../../data/model/veselka-event';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [MatTabsModule, EventsTableComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent implements OnInit {

  currentDate = new Date();
  allEvents = veselkaEvents;
  futureEvents: VeselkaEvent[] = [];
  pastEvents: VeselkaEvent[] = [];

  ngOnInit(): void {
    this.futureEvents = this.allEvents.filter(event => new Date(event.date) >= this.currentDate);
    console.log(this.futureEvents)
    // this.pastEvents = this.allEvents.filter(event => new Date(event.date) < this.currentDate);
  }

}
