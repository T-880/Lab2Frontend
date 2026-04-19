# REST-baserad webbtjänst – Frontend

## Beskrivning

Detta projekt är en fristående frontend-applikation som konsumerar en REST-baserad webbtjänst byggd i Node.js, Express och MySQL.

Applikationen låter användaren visa, lägga till och ta bort arbetserfarenheter genom att kommunicera med ett backend-API via Fetch API.

Projektet är en del av en uppgift där fokus ligger på att förstå hur frontend och backend kommunicerar via REST och HTTP-metoder.

---

## Funktioner

- **Visa arbetserfarenheter**  
  Hämtar och visar alla poster från API:et.

- **Lägg till arbetserfarenhet**  
  Användaren kan fylla i ett formulär och skicka data till API:et .

- **Ta bort arbetserfarenhet**  
  Varje post kan tas bort direkt från listan.

- **Validering i JavaScript**  
  Kontroll av att alla fält är ifyllda innan data skickas till servern.

---

## Teknologier

- HTML
- JavaScript 
- Fetch API
- REST API (kopplad till Node.js + Express backend)

---

## Sidor

- index.html – visar alla arbetserfarenheter
- add.html – formulär för att lägga till ny post
- about.html – information om projektet

---

## Kommunikation med API

Applikationen använder följande endpoints:

- GET /api/workexperience – hämtar alla poster  
- POST /api/workexperience – skapar ny post  
- DELETE /api/workexperience/:id – tar bort post  

API körs lokalt på:
http://localhost:3000

---

## Validering

Innan data skickas till API kontrolleras att inga fält är tomma.  
Om validering misslyckas visas ett felmeddelande och ingen request skickas.

---

## Syfte

Syftet med projektet är att förstå hur en frontend-applikation kan kommunicera med en backend via REST API och hur CRUD-operationer kan implementeras med Fetch API.

---

## Körning av projektet

1. Starta backend-servern från https://github.com/T-880/Lab2Backend:
node server.js

2. Öppna frontend i webbläsaren:
index.html
