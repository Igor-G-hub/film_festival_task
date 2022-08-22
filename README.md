## App name: Film festival app

App builded with node v16.17.0
yarn v1.22.19
npm v8.15.0
React 18.2.0

Used Mock Service Worker v0.44.2

Project flow on Github:

    master──────────────────────────────────────────────│──master
        └── develop───────────────────│───develop───────│
                └── other branches────│

To start the application run this commands:

run npm or yarn install

run "npx msw init ./public" to set mockServiceWorker for mocking APIs (msw dependency is included in package.json file)

Mock Service Worker configuration is set in mocks folder inside src folder. For quick testing mocking rest apis configure inside "checkApiRequestValidation" function

In root folder there is .env file which contains env variable REACT_APP_API_TYPE default set to REACT_APP_API_TYPE="mockingApi" for using mocking apis provided from Mock Service Worker. To switch off from MSW assign another string value to REACT_APP_API_TYPE variable. For example REACT_APP_API_TYPE="prod"

run npm start or yarn start to start the app

open http://localhost:3000 to view it in your browser

Folder structure of project:

![image](https://user-images.githubusercontent.com/77465794/186028275-49dd4e42-56a6-4945-bc47-37108c303dfc.png)
