# User Upload UI

## Description

This Angular application serves as a front-end UI for uploading CSV files containing user data to a REST API, running by default on port 4200, and due to CORS protection, it must run on that port. The server-side application runs on `http://localhost:8080`. After the upload, a snackbar notification will display the upload status.

## Requirements

- Angular 16.2.0
- @angular/material 16.2.7
- @ngrx/store 16.3.0
- Other dependencies are listed in `package.json`

## Running the Application

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    ng serve
    ```

## User Interface

The UI consists of a single page with a button for uploading CSV files. The uploaded file is sent to a server running at `http://localhost:8080`.

## Snackbar Notifications

- **Success**: If the upload is successful, a notification will appear indicating so.
- **Failure**: If the upload fails, the error message will be displayed in the notification.

## Running Tests

Run the unit tests with the following command:

```bash
ng test
