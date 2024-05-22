# Full stack web sandbox

Empty setup for starting up simple web applications

_TODO: use Docker_

## Environment setup (macOS):

### Frontend:

-  Node:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

`nvm install 20` _(or newer version)_

- Angular CLI: `npm install -g @angular/cli`

### Backend:

- Java: download from website

- Intellij IDEA: download from website

- SDKMAN: `curl -s "https://get.sdkman.io" | bash`

- Gradle: `sdk install gradle`

## Running:

- Frontend: `ng serve --open`

- Backend:

    - open build.gradle as project in Intellij IDEA
    - `./gradlew bootRun`