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
