//project structure
FlightBookingBackend/
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   ├── env.js
│   │   └── swagger.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   ├── user/
│   │   ├── flight/
│   │   ├── booking/
│   │   └── payment/
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── utils/
│   │   ├── jwt.js
│   │   └── response.js
│   │
│   └── prisma/
│       └── schema.prisma
│
├── tests/
│
├── .env
├── package.json
└── README.md

//packages for the project

npm init -y
npm install express prisma @prisma/client
npm install jsonwebtoken bcrypt zod dotenv
npm install swagger-ui-express swagger-jsdoc
npm install helmet cors express-rate-limit
npm install --save-dev nodemon jest supertest

*helmet package helps to secure express apps by setting http headers response. It is basically a middleware which adds or removes headers in the http according to the security standards. 

*swagger helps for api documentation, basically provides ui like thing instead of manually going for postman.

*prisma for object relational mapping, no need for writing sql query in the traditional way.

*rate-limit for rate llimiting, so a single user cannot spam the api continuosly which might lead for server crash

*nodemon for server automatic reload, only for dev dependency.

*bcrypt and zod for password hashing and validation.

*jest and supertest for unit and integration tests.

** PROJECT OVERVIEW – Flight Booking Backend API
** What This Project Does

This is a REST API backend for a Flight Booking System.

It allows:

Users to register & login

Admins to manage flights

Users to search flights

Users to book flights

Users to make payments

Users to view booking history

Admin to manage users & bookings

This backend can later connect to:

React frontend

Mobile app

Third-party booking system

** ROLES IN THE SYSTEM

We will have 2 main roles:

** USER

Can:

Register

Login

Search flights

Book flights

Cancel booking

Make payment

View booking history

** ADMIN

Can:

Add flights

Update flights

Delete flights

View all users

View all bookings

Manage flight status

** How the System Works (High Level Flow)

Let’s see real-world flow:

 1. User Registration

User → Register → Password hashed → Saved in DB

 2. Login

User → Login → Verify password → Generate JWT → Send token

Token is used for:

Booking

Viewing profile

Payment

 3. Search Flights

User sends:

GET /flights?from=Bangalore&to=Delhi&date=2026-03-01

Backend:

Query database

Return available flights

 4. Booking

User sends:

POST /bookings

Backend:

Validate flight

Check seats available

Create booking

Reduce seat count

 5. Payment

User:

POST /payment

Backend:

Verify booking

Simulate payment

Update booking status

 COMPLETE PROJECT STRUCTURE (FINAL)

Here is the complete industry-level structure:

FlightBookingBackend/
│
├── src/
│   ├── server.js
│   ├── app.js
│
│   ├── config/
│   │   ├── env.js
│   │   ├── swagger.js
│   │   └── prisma.js
│
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.service.js
│   │   │   ├── auth.route.js
│   │   │   └── auth.schema.js
│   │   │
│   │   ├── user/
│   │   │   ├── user.controller.js
│   │   │   ├── user.service.js
│   │   │   └── user.route.js
│   │   │
│   │   ├── flight/
│   │   │   ├── flight.controller.js
│   │   │   ├── flight.service.js
│   │   │   ├── flight.route.js
│   │   │   └── flight.schema.js
│   │   │
│   │   ├── booking/
│   │   │   ├── booking.controller.js
│   │   │   ├── booking.service.js
│   │   │   ├── booking.route.js
│   │   │   └── booking.schema.js
│   │   │
│   │   └── payment/
│   │       ├── payment.controller.js
│   │       ├── payment.service.js
│   │       └── payment.route.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── role.middleware.js
│   │   ├── validate.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── response.js
│   │   └── asyncHandler.js
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── client.js
│   │
│   └── routes.js
│
├── tests/
│
├── .env
├── package.json
├── README.md
└── jest.config.js