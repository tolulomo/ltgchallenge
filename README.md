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
