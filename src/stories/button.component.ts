import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Botón reutilizable con diferentes configuraciones.
 * 
 * Este componente permite personalizar el estilo, tamaño y color de fondo del botón,
 * además de emitir un evento cuando el usuario hace clic en él.
 */
@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /**
   * ¿Es este el botón principal de la página? 
   * Si es `true`, se aplica el estilo principal.
   */
  @Input() primary = false;

  /**
   * Color de fondo del botón.
   * 
   * Si no se proporciona, el color de fondo por defecto se usará.
   */
  @Input() backgroundColor?: string;

  /**
   * Tamaño del botón.
   * 
   * Los valores posibles son: 'small', 'medium', 'large'.
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Contenido del botón.
   * 
   * Este texto será mostrado dentro del botón.
   * 
   * @example 'Click Me'
   */
  @Input() label = 'Button';

  /**
   * Emite el evento cuando el botón es clickeado.
   */
  @Output() onClick = new EventEmitter<Event>();

  /**
   * Calcula las clases CSS a aplicar según las propiedades del botón.
   */
  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
