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