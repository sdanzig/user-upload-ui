import { Component } from '@angular/core';
import { UserService } from './user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploading = false;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

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
      error: (error: HttpErrorResponse) => {
        this.uploading = false;
        let errMsg = 'Upload failed';
        if (error.error && error.error.message) {
          errMsg = error.error.message; // Get message from the server
        }
        this.showSnackBar(errMsg, true); // Pass a new argument to indicate failure
        event.target.value = null;
      }
    });
  }

  showSnackBar(message: string, isError: boolean = false) {
    const panelClass = isError ? ['snack-bar-error'] : [];

    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass
    });
  }
}
