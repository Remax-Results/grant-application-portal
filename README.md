
# Results Foundation Application Management Portal
  
## Description

  This software collects applications for the RE/MAX Results Foundation grant and gives the Results Foundation staff the ability to organize, review and present incoming applications. 

  The client side of the applicaiton allows applicants to log in or register their and their orgnaization's information if they have not registered already. From login on the client side, users may fill out and submit a grant application form. Once they have submitted a form, they will be directed to a page that will notify them that their applicaiton was recieved and provide them information about the current grant window.  

## Screen Shots

## Installation

### Instructions
1. Fork and clone the repository from gitHub
2. Create a database named `results` in postgreSQL
3. Copy the queries in database.sql into a postreSQL management app like pgAdmin or Postico
4. From terminal, navigate to the repo folder
5. Enter `npm install` at the command line
6. Create a .env file in the root folder 
7. Assign a password in the .env using `SERVER_SESSION_SECRET=[yourpasswordhere]`
8. At the command line, enter 'npm run server'
9. Open another terminal window, and navigate to the repo folder
10. At the command line, enter 'npm run client'
11. Open the application at `localhost:3000`

## Built With
- HTML
- CSS
- javascript
- node.js
- express
- passport
- postgreSQL
- React
- Redux
- Redux Saga Middleware
- SweetAlert
- React-Bootstrap
- Styled Components
- Moment



## Acknowledgment

 This application was initially desinged as a the final project by Team Results Foundation of the Vatti Chorot of Prime Digital Academy (Class of February '22). 

 ### Team Results Foundation
- Julian Booher
- Lara Lesar
- Steven Maloney
- Jordan Newberry

We would like to thank our client Blaire Molitor for her direction and support in making this project.

We would like to also thank Prime Digital Academy, our colleagues in the Vatti Cohort, and our primary insructor, Mary Mosman.

## Support

If you have suggestions or issues, please reach out via email to: steven.maloney@gmail.com