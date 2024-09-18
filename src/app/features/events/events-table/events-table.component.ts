import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { VeselkaEvent } from '../../../data/model/veselka-event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'va-events-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.scss'
})
export class EventsTableComponent {

  @Input() events: VeselkaEvent[] = [];

  displayedColumns = ['date', 'name', 'description'];

}
