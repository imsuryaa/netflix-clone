# Netflix Clone - React and Firebase

App Link --> [Netflix Clone](https://netflix-clone-1c922.web.app).

## To run this project

Clone the repo, and run `npm install` in root directory to install dependencies in the project.

Type `npm start` in CLI to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Screenshots for reference

![Home](https://user-images.githubusercontent.com/45379824/120157745-f627c980-c210-11eb-96df-4bf76c989388.PNG)

![Capture1](https://user-images.githubusercontent.com/45379824/120157812-0770d600-c211-11eb-9c59-4f7fd88e32fb.PNG)

![Capture2](https://user-images.githubusercontent.com/45379824/120157909-253e3b00-c211-11eb-8269-2ec1379eedec.PNG)

![Capture3](https://user-images.githubusercontent.com/45379824/120158272-8f56e000-c211-11eb-9240-ed3426df5d68.PNG)

## Firebase deployment
In the project root directory, Follow the commands/ Steps

- `firebase login`
- `firebase init`
- Choose `Hosting: Configure and deploy Firebase Hosting sites`
- Press `Use an existing project` (You need create project in your Firebase Console before)
- Select your project in the list
- What do you want to use as your public directory? 
  - Type `build` to replace the public directory folder
- Configure as a single-page app (rewrite all urls to /index.html)?
  - Type `yes`
- Type `npm run build`
- Type `firebase deploy` to deploy the project into firebase
