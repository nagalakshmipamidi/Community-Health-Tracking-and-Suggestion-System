 The software consists of several key features designed to help users track their weight and fitness journeys effectively.

Frontend Overview
The frontend of the application is built using React and Tailwind CSS, providing a responsive and user-friendly interface. The application consists of five main screens:

Login Screen: Users can log into their accounts using their email and password.

Signup Screen: New users can create an account by providing their email, name, and password.

Community Page: After logging in, users are directed to the Community Page, where they can view all the weight loss and fitness journeys uploaded by other users. Each journey displays a brief overview, and users can click on "See Details" to view more information about a specific journey.

Profile Page: On the Profile Page, users can manage their personal information. They have the option to update their name, enter their height and weight, and calculate their Body Mass Index (BMI) by clicking the "Calculate BMI" button. Users can also select their preferred exercise routines and activity levels. A button is provided to update these details.

Journey Management: New users have the option to add their own journey by clicking on the "Add Journey" button. This opens a popup where they can fill in details such as uploading before and after images, a description of their journey, target BMI, target timeframe, preferred exercises, and their progress in percentage. After reviewing the details, users can submit their journey. Once a journey is added, the "Add Journey" option is replaced with a "Show Journey" option, allowing users to view their submitted journey.

Backend Overview
The backend of the application is developed using Node.js and Express, with MongoDB as the database. The backend handles user authentication, journey management, and data retrieval through several routes:

User Schema and Routes:

User Creation: Users are created using their email, name, and password. The password is securely hashed before being stored in the database.
JWT Token: Upon successful login, a JWT token is generated and set in the browser for authentication. This token is used to secure private routes and ensure that only authenticated users can access certain features.
Logout Route: A route is provided for users to log out, which clears the JWT token from the browser.
Journey Management Routes:

Add Journey: Users can add a new journey, which is then stored in the database.
Update User Details: Users can update their personal information, such as their name, height, weight, and fitness preferences.
Community Route:

Get All Users: A route is available to retrieve all users and their journeys, which are displayed on the Community Page for all users to view.
Overall, this weight tracking software provides a comprehensive platform for users to track their fitness journeys, share their progress with the community, and stay motivated to achieve their fitness goals. The use of the MERN stack ensures a seamless user experience, with secure authentication and efficient data management.