# ltgchallenge
This is a calculator

# Features
- AC - Allows you to start over
- Digits are limited to 8 max
- Perform mathematical calculation without pressing equal sign
- Switch between the two themes available
- Responsive design

## Setup
Clone this repo to your desktop and run `npm install` to install all the dependencies.

You might want to look into `webpack.config.js` to make changes to the port you want to use and set up.

---

## Usage
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run  `npm devServer` to start the application. You will then be able to access it at localhost:3300

---

## Build
Once you are done with your edit, you can run  `npm build` to build the application. The app is configured for chunk split, css min/tree-shaking and your build will be located inside the docs folder of your root dir. The css and javascript are inserted dynamically at build with new hashes for browser cache bursting

---

## Summary & Overview
The MVC technique is adopted. The JS folder structure `app/assets/scripts/` have two main folder, the model folder and the view folder. The `App.js` serves as the controller. 
- The `index.js` inside view folder exports all the important script to the controller. 
- `Base.js` collects few clickable elements and distribute it within the view folder
- `Navigation.js` exports a class that adjust the application view.
- `Entry.js` exports a class that controls the application display. Collects events, passses it to the `model/Calculator.js` for storage, logic processing and finally collects the report for display on the screen.
- The `model/_calcUtility.js` handles all utilized functions used by `model/Calculator.js`.
- The `model/Calculator` recieves all is input from `Entry.js`, filter the entry, stores it, performs mathematical operations on the entry, makes it available via three channels (i) Memory Channel (ii) Before Logic (iii) After Logic.
Only one of the three channel is passed depending on the state of the application.

---
