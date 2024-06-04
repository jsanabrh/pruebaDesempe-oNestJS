## Run the project

Step-by-step to start the project

### Install necessary dependencies and enter the project folder

After cloning the repository

cd prueba-desempe-o-nestjs
npm install

## Create, configure, and save the .env file

In the root of the project, create the .env file where we will copy and paste the following environment variables for the correct execution of the program

create account in website VERCEL and register, in storage copy env.file and paste your dates in the .env file

PORT = 5432

POSTGRES_USER=

POSTGRES_HOST=

POSTGRES_PASSWORD=

POSTGRES_DATABASE="verceldb"

## Configure Postman

We will open the local Postman and import the 'PruebaDesempeño.postman_collection.json' file, which is in the 'postman' folder, to load the request collection and test our endpoints.

## Start the app and acces the endpoint documentation

After following the previous steps, the next step is to run the application to begin testing our endpoints and to view the documentation in our Swagger.

npm run start

We access the route to view the Swagger documentation
---> http://localhost:3000/api/docs

