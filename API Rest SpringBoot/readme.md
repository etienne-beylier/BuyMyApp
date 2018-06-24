## Using MySQL in Spring Boot via Spring Data JPA and Hibernate

### Build and run

#### Configurations

Open the `application.properties` file and set your own configurations.

#### Prerequisites

- Java 8
- Maven > 3.0

#### From terminal

Go on the project's root folder, then type:

    $ mvn spring-boot:run

#### From Eclipse (Spring Tool Suite)

Import as *Existing Maven Project* and run it as *Spring Boot App*.


### Usage

- Run the application and go on http://localhost:8080/
- Use the following urls to invoke controllers methods and see the interactions
  with the database:
  
	Method for user:
	/user/all 														"Return Json"
	/user/create?password=<password>&name=<name>
	/user/delete?id=<id>
	/user/update?id=<id>&password=<password>&name=<name>
	/user/get-by-name?name=<name>
	
	
	Method for itemshop:
	/itemshop/all														"Return Json"
	/itemshop/create?name=<name>&username=<username>
	/itemshop/delete?id=<id>
	/itemshop/update?id=<id>&name=<name>&username=<username>
	/itemshop/get-by-name?name=<name>
	
	
	
	Method for itembasket:
	/itembasket/all 														"Return Json"
	/itembasket/create?name=<name>&username=<username>
	/itembasket/delete?id=<id>
	/itembasket/update?id=<id>&name=<name>&username=<username>
	/itembasket/get-by-name?name=<name>