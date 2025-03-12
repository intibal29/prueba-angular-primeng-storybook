import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule],
  templateUrl: './app.component.html',  // Aquí usamos templateUrl con el archivo HTML externo
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nuevo-proyecto';
  cars = [
    { brand: 'Toyota', year: 2020 },
    { brand: 'Honda', year: 2021 },
    { brand: 'Ford', year: 2022 }
  ];
}
