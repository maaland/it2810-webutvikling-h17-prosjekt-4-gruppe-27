### Beskrivelse

Vi ønsker å lage en forenklet norsk versjon av den populære nettsiden glassdoor.com.

Applikasjonen viser en oversikt over selskaper i Norge som tilbyr internships/sommerjobber til studenter, hvor man kan legge inn sine egne, og lese andre studenters erfaringer som sommerstudent i selskapet. F.eks. kan man se at Bekk har en gjennomsnittsrating på 4.5/5, og 7 kommentarer med efaringer fra tidligere sommerstudenter. Man skal kunne søke på bedriftsnavn, sortere på rating, antall kommentarer, og filtrere på studieretning. Man skal måtte være logget inn for å kunne legge til firmaer, og skrive reviews om firmaer.



### Data

Vi ønsker kun brukergenerert data i vår løsning. Reviews av firmaer skal være skrevet av virkelige employees.

Alle datamodeller og forklaringer om API, finner du under mappe `backend/README.md`.


### Sidevisning

Prosjektet har disse sidene.

#### 1. Companies Page

En side som viser alle selskaper, med funksjonalitet for filtrering og sortering.

#### 2. Company Detail

Inneholder detaljert informasjon om et enkelt selskap, inkludert gjennomsnittsrating, antall reviews og selve reviewsene for firmaet. 

#### 3. Dashboard

Det første man ser når man går inn på siden. Har funksjonalitet for søk etter firma, og visning av mest populære firmaer. Søket skal sende brukeren direkte til et spesifikt selskap. 


### Implementasjons plan

Vi planlegger å jobbe i iterasjoner, hvor vi alltid har et fungerende produkt, og så legger vi på funksjonalitet for hver iterasjon. Vi skal ha testbasert utvikling.

#### ~~Iterasjon: 0~~

~~Gå igjennom angular.io tutorial og bli kjent med angular~~

#### ~~Iterasjon: 1~~

~~Endre tour of heroes-applikasjonen fra tutorial til Glassdoor.no (endre navn, attributter osv.)~~

#### ~~Iterasjon: 2~~

~~Legg til stjerneannmeldelser og tekstfelt for kommentarer, og logo på hvert selskap.~~

#### ~~Iterasjon: 3~~

~~Legg til støtte for flere stjerneannmeldinger (gjennomsnitt) og støtte for flere kommentarer.~~

#### ~~Iterasjon: 4~~

~~Støtte for at en bruker kan legge til flere bedrifter.~~

#### ~~Iterasjon: 5~~

~~Backend: implementer databasen basert på hva vi har sett som behov.~~

#### ~~Iterasjon: 6~~

~~Tillate sortering og filtrering på antall kommentarer, gjennomsnitsstjerner osv.~~

#### ~~Iterasjon: 7~~

~~Front-end-delen av login (min side)~~

#### ~~Iterasjon: 8~~

~~Knytte kommentarer til bruker med mock-data~~

#### ~~Iterasjon: 9~~

~~Back-end-delen av login (erstatte mock-data)~~

#### Iterasjon: 10 og utover

Se an hvordan vi ligger an og legg til funksjonalitet.



### Valg av løsning

Angular på front-end og node.js på back-end. Vi har foreløpig ikke bestemt oss for hvilken type database vi ønsker å bruke, dette vil vi se litt an mtp. behov, men gruppa har tidligere erfaring med bl.a. MongoDB og Firebase. 


### Branches

'master'-branchen har fungerende kode med tilhørende tester. Her legges kun produksjonskode, iterativt.
'dev'-branchen har fungerende kode med tester, hvor ulike 'features' legges til fra utspringende 'feature-brancher'. Når man er klar med en iterasjon merges denne branchen inn i 'master'.
feature branches lages for ny funksjonalitet.
