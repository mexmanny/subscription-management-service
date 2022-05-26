# Subscription Management Service

This is a simple application that fetches mocked subscription information to keep track of multiple subscriptions. It displays price, frequency(monthly or annual), description of a subscription, when the subscription got created and when it was last updated. It allows you to edit existing subscriptions, add new ones, and delete any ones you choose to delete.

# Versions currently being used for this project:

NPM Version 8.9.0
Node Version 18.2.0

# How To Run

In the project directory, you can run:

### `npm install`

This will install all dependencies pertaining to the server backend

Next you can run:

### `cd client`

### `npm install`

This will install all dependencies necessary for the react application

Once this is completed you should be able to run the below command to run both the backend server and the react client concurrently:

### `npm run both`

If all works correctly the application should load on localhost:3000 and you should be able to start looking into the list of subscriptions provided.

# Testing Process

You can run the following commands to run scenarios that have been included in App.test.js file:

# From Main Directory

### `cd client`

### `npm run test`
