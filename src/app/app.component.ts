import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabMenuModule,ButtonModule,TableModule,InputTextModule, CalendarModule, FormsModule],  // Incluye FormsModule y CalendarModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nuevo-proyecto';
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Dashboard', icon: 'pi pi-home' },
          { label: 'Transactions', icon: 'pi pi-chart-line' },
          { label: 'Products', icon: 'pi pi-list' },
          { label: 'Messages', icon: 'pi pi-inbox' }
      ]
  }
  value: string | undefined;
  date1: Date = new Date();  // Inicializa la propiedad 'date'
  date2: Date = new Date();  // Inicializa la propiedad 'date'
  date3: Date = new Date();  // Inicializa la propiedad 'date'
}
