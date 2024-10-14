import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  @Input() type: string = 'success';
  @Input() message: string = '';
  @Input() show: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  setting() {
    let icon = 'fa fa-check-circle'; // Default icon for success
    let className = ''; // Default class for success

    switch (this.type) {
      case 'success':
        icon = 'fa fa-check-circle'; // Icon for success
        className = 'text-green-500 bg-green-200'; // Class for success
        break;
      case 'warn':
        icon = 'fa fa-exclamation-triangle'; // Icon for warning
        className = 'text-yellow-500 bg-yellow-200'; // Class for warning
        break;
      case 'error':
        icon = 'fa fa-times-circle'; // Icon for error
        className = 'text-red-500 bg-red-200'; // Class for error
        break;
      case 'info':
        icon = 'fa fa-info-circle'; // Icon for info
        className = 'text-blue-500 bg-blue-200'; // Class for info
        break;
      default:
        icon = 'fa fa-bell'; // Default icon for undefined types
        className = 'text-gray-500 bg-gray-200'; // Default class for undefined types
        break;
    }

    return {
      icon,
      className,
    };
  }
}
