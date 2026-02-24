import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Flight Booking API",
      version: "1.0.0",
    },
  },
  apis: ["./src/modules/**/*.js"],
};

const specs = swaggerJsDoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};