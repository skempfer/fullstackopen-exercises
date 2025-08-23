# Exercise 0.4: New note diagram

The following diagram shows the sequence of events when creating a new note in the app.

```mermaid
sequenceDiagram
    participant Browser
    participant Server
    participant Database

    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Server->>Database: Save note
    Database-->>Server: OK
    Server-->>Browser: Redirect to /notes
    Browser->>Server: HTTP GET /notes
    Server-->>Browser: HTML page with notes
    Browser->>Server: HTTP GET main.css
    Server-->>Browser: main.css
    Browser->>Server: HTTP GET main.js
    Server-->>Browser: main.js
    Browser->>Server: HTTP GET data.json
    Server-->>Browser: data.json (with new note)
