import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `<input type="file" (change)="onFileChange($event)">`
})
export class AppComponent {
  constructor(private userService: UserService) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.userService.uploadFile(file).subscribe({
      next: () => console.log('Upload successful'),
      error: () => console.log('Upload failed')
    });
  }
}
