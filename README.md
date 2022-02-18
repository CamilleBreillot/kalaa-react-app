# kalaa-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and a Rails backend API

### About this project

A food collection reporting app for store manager and corporate cocial responsibility manager

### Built With

- Ruby on Rails
- React

## Getting Started
### Installation
1. Backend api is located in another repo. Go to [kalaa api app] (https://github.com/CamilleBreillot/kalaa-api-app).
- Clone the repo to your desktop
- Navigate to the kalaa-api-app folder
- Install all dependencies needed for the Rails API:
 ```sh
   bundle install
   ```
 - Create database, run migrations and build seed
 ```sh
   rails db:create db:migrate db:seed
   ```
- Start server (it will run on localhost:3000):
 ```sh
   rails s
   ```
2. Then clone the current repo to your desktop (SPA React app is located in this folder)
- Navigate to the kalaa-react-app folder
- Install all dependencies needed for the react app:
 ```sh
   npm install
   ```
- Start server (it will run on localhost:2000:
 ```sh
   npm start
   ```
- Open [http://localhost:2000](http://localhost:2000) to view it in your browser.

## Features
## Choices made
## Improvements


