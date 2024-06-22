# TWEB-Project: The Pundit Pub

## Web Technologies Course Project

ThePunditPub è un progetto sviluppato per il corso di IUMTWEB, parte di Tecnologie Web. Fornisce una piattaforma interattiva per gli appassionati di calcio, offrendo aggiornamenti in tempo reale, statistiche delle partite e una community per la discussione.

### Prerequisiti

Prima di iniziare, assicurati di avere installato [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) sul tuo sistema. Questo progetto richiede anche che [IntelliJ](https://www.jetbrains.com/idea/download/) sia configurato per gestire il server PostgreSQL.

### Passaggi per l'esecuzione

1. **Installazione delle dipendenze npm**

   Apri il terminale e naviga nella directory del progetto. Installa le dipendenze npm per ciascun server e per il client con i seguenti comandi:

   ```sh
   cd Mongoserver/
   npm install
   cd MainServer/
   npm install
   cd client/
   npm install
   ```

2. **Avvio dei server Express**

   Per avviare i server Express, esegui questi comandi in terminali separati:

   ```sh
   # Nel primo terminale
   cd MainServer
   npm run dev

   # Nel secondo terminale
   cd MongoServer
   npm run dev
   ```

3. **Avvio del server PostgreSQL**

   Utilizza IntelliJ per avviare il server PostgreSQL seguendo la configurazione del progetto.

4. **Avvio del client**

   Per avviare l'interfaccia client, torna alla directory principale del progetto e poi naviga nella cartella del client per eseguire il comando di avvio:

   ```sh
   cd Client/
   npm start
   ```
5. **Accesso all'applicazione**

   Una volta avviato il client, apri il browser e collegati all'indirizzo [http://localhost:3002](http://localhost:3002) per accedere all'applicazione.

6. **Bonus-Utilizzo di configurazione compound per velocizzare le procedure di avvio dei server
    a)_NodeJS Client collocato su IUMTWEB/solution/client puntante a bin/www_
    b)_NodeJS Main server collocato su IUMTWEB/solution/Mainserver puntante a Mainserver/app.js_
    c)_NodeJS Mongo server collocato su IUMTWEB/solution/Mongoserver puntante a Mongoserver/app.js_
    d)_Spring boot server puntante al file SpringbootServerApplication nell'app java.server.postgres_

Divertitevi su The Pundit Pub!



   
