import { Component } from '@angular/core';
import { UserService } from './user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <mat-card class="upload-card">
        <mat-card-header>
          <mat-card-title>
            <h1>CSV User Data Upload</h1>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content class="content">
          <p>Upload a CSV file with user data. The format should be:</p>
          <code>first name, last name, email, phone</code>
          <p>Your data will be stored securely in our database.</p>
          <button mat-raised-button color="primary" (click)="fileInput.click()">Upload File</button>
          <input #fileInput type="file" style="display: none" (change)="onFileChange($event)">
          <mat-progress-bar *ngIf="uploading" mode="indeterminate"></mat-progress-bar>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }
    .upload-card {
      text-align: center;
      max-width: 500px;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})
export class AppComponent {
  uploading = false;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  onFileChange(event: any) {
    if (event.target.files.length === 0) {
      this.showSnackBar("No file selected");
      return;
    }
  
    this.uploading = true;
    
    const file = event.target.files[0];
    this.userService.uploadFile(file).subscribe({
      next: () => {
        this.uploading = false;
        event.target.value = null;
        this.showSnackBar("Upload successful");
      },
      error: () => {
        this.uploading = false;
        this.showSnackBar("Upload failed");
        event.target.value = null;
      }
    });
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }
}
