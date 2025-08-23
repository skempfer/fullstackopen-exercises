# Exercise 0.5: SPA

The following diagram shows the sequence of events when opening the Single Page App version.

```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Browser: HTML page
    Browser->>Server: HTTP GET main.css
    Server-->>Browser: main.css
    Browser->>Server: HTTP GET spa.js
    Server-->>Browser: spa.js
    Browser->>Server: HTTP GET data.json
    Server-->>Browser: data.json (notes)
    Note right of Browser: Browser executes JS and renders notes dynamically
