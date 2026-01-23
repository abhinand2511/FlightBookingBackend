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