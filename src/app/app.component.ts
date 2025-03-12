import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TabMenuModule, 
    ButtonModule, 
    TableModule, 
    InputTextModule, 
    CalendarModule, 
    FormsModule, 
    CardModule, 
    DividerModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nuevo Proyecto';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Messages', icon: 'pi pi-inbox' }
    ];
  }

  value: string = '';
  date1: Date = new Date();
}
