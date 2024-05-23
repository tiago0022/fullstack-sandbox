# Full stack web sandbox

Empty setup for starting up simple web applications

_TODO: use Docker_

## Environment setup (macOS)

### Frontend

-  Node:
    - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
    - `nvm install 20` _(or newer version)_
- Angular CLI: `npm install -g @angular/cli`
- On project folder: `npm install`

### Backend

- Java: download from website
- SDKMAN: `curl -s "https://get.sdkman.io" | bash`
- Gradle: `sdk install gradle`

### Database

- PostgreSQL: download from website
- Create DB with default specifications:
    - Server: localhost
    - Database: postgres 
    - Port: 5432
    - Username: postgres
- Create the app DB: `CREATE DATABASE sandbox;`
- Connect to the app DB
- Run `database/create-db.sql`

## Running

- Frontend: `ng serve --open`
- Backend: `./gradlew bootRun`