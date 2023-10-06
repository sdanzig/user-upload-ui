import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="fileInput.click()">Upload File</button>
    <input #fileInput type="file" style="display: none" (change)="onFileChange($event)">
    <div *ngIf="uploading">
      Uploading...
    </div>
  `,
  styles: [`
    button {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
    }
  `]
})
export class AppComponent {
  uploading = false;

  constructor(private userService: UserService) {}

  onFileChange(event: any) {
    if (event.target.files.length === 0) {
      console.log("No file selected");
      return;
    }
  
    this.uploading = true;
    
    const file = event.target.files[0];
    this.userService.uploadFile(file).subscribe({
      next: () => {
        this.uploading = false;
        console.log('Upload successful');
        event.target.value = null;
      },
      error: () => {
        this.uploading = false;
        console.log('Upload failed');
        event.target.value = null;
      }
    });
  }
}
