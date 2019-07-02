A CRUD application for todo lists.

How to test on local machine:

* Clone the repository using git clone <ssh>

Without docker:
* Run `npm install`
* `npm run migrate` to create migrations in your database
* `npm run start:dev` to run the application

With Docker:
* Run the following commands to setup on your machine:
 	* docker-compose build : Builds services
	* docker-compose up  : starts services

* Other commands that might be of help:
	* docker ps : lists running containers
	* docker exec -it <container-id> /bin/sh `<command>`
	* docker-compose down : stops services

Built with: 
* node/express
* postgres
* sequelize

Tested with:
* supertest
