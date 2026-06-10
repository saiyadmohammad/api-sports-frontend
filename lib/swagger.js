import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Next.js App Router API",
      version: "1.0.0",
      description: "Swagger documentation for Next.js App Router",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },

  // IMPORTANT: point to your App Router API files
  apis: ["./app/api/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;