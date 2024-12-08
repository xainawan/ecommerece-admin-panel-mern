
## ⚠️ Before you start

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create .env file in both **client** and **server**.
4. Contents of **client/.env**:

```
REACT_APP_BASE_URL="http://localhost:5001"
```

5. Contents of **server/.env**:

```
MONGODB_URL="XXXXXXXXXXXXXXXXXXXXXXXXX"
PORT=5001
```

5. Open terminal and run `npm install` or `yarn install` in both **client** & **server**.

6. Create new account in [MongoDB](https://mongodb.com/ "MongoDB").

7. From dashboard Create New Project > Create New Cluster > Click Connect and Make sure you add current ip address to be able to connect to this database.

![Setup MongoDB](/.github/images/step_mongodb1.jpg "Setup MongoDB")

**NOTE:** Make Sure you type same email in `VITE_APP_EMAILJS_RECIEVER` in `.env`

8. Once, MONGODB is configured, copy your **MONGODB URL** to `MONGODB_URL`.

![Copy MONGODB_URL](/.github/images/step_mongodb2.png "Copy MONGODB_URL")

9. Now, open `server/index.js` and uncomment imports and other lines to **insert data** into MongoDB.
   **NOTE:** Make sure to comment them after running first time to avoid duplicate values in database.

10. Now app is fully configured :+1: and you can start using this app using `npm run dev` or `yarn run dev` for server and `npm start` or `yarn start` for client.

**NOTE:** Make sure you don't share these keys publicaly.

## :fire: Features

- Supports both **Dark** and **Light** Theme.
- **Mobile Responsive** Layout.
- Built-in **5+ Fully Customizable Scenes** including:
  1. Products
  2. Customers
  3. Transactions
  4. Geography
- Easy to customize **6+ charts** with theme support including:
  1. Overview
  2. Daily
  3. Monthly
  4. Breakdown
  5. Admin
  6. Performance
- **4+ Customizable Pages** with full theming support including:
  1. Dashboard
  2. Client Facing
  3. Sales
  4. Management
- **15+ Components** which are easy-to-use and fully customizable.
