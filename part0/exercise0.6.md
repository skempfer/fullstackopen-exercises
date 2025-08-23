
# Exercise 0.6: New note in SPA

The following diagram shows what happens when adding a new note in the SPA.

```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (JSON with new note)
    Server-->>Browser: { "message": "note created" }
    Note right of Browser: Browser updates the UI without reloading the page
