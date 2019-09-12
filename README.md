# Ruby Red Salon

Links for Ruby Red Full Stack Project
Front End
•	https://enbacon.github.io/Ruby-Red-Salon/
•	https://github.com/enbacon/Ruby-Red-Salon
Back End
•	https://powerful-beyond-68228.herokuapp.com/
•	https://github.com/enbacon/Ruby-Red
Front-end Technologies Used

•	HTML5
•	CSS
•	SASS
•	Bootstrap
•	AJAX
•	jQuery
•	Handlebars
Back-end Technologies Used

•	HTML5
•	CSS
•	SASS
•	AJAX
•	jQuery
•	SQL
•	PostgreSQL
•	Ruby
•	Rail
Planning:
Front-end Repository
o	Wireframes: https://imgur.com/a/AgPC6MG
Back-end Repository
o	Entity Relationship Diagram: https://imgur.com/gallery/8ptt920
The idea of having a database to store nail polishes was a result of a love of nail polishes and being able to use them to express feelings when one might potentially be stuck dressing in all black. Also, the act of painting one’s nails can be meditative and the color variety, finish options, and combinations is quite fun. It also seemed like it had potential to be an aesthetically fun project with a variety of colors on the page.
A few wireframes and some ERDs helped formulate this project. Although a “Version Two” wireframe was never drawn out, I feel that this project resembles exactly what that wireframe would have been. The in between version (between version one and version three) was not immediately clear, but through the process of executing version one with version three in mind, version two was created and deployed.
User Stories:
•	As a user, I want to sign up for an account.
•	As a user, I want to login to my account.
•	As a user, I want the app to automatically sign me in after signing up for an account.
•	As a user, I want to be able to look at all of the nail polishes, including those that are not my own.
•	As a user, I want to be able to update one of my nail polishes.
•	As a user, I want to be able to delete one of my nail polishes.
•	As a user, I want to be able to select a color that accurately represents the nail polish I am adding.
•	As a user, I should not be able to edit or delete another client’s nail polish.
•	As a user, I want to be able to change my password.
•	As a user, I want to be able to log out of my account.
Development Process and Problem Solving
•	Get the back-end, Ruby-Red, built.
•	Without being certain of Rails’ plural version of “nail polish”, an inflections initializer had to be written.
•	Scaffold the required nail polish resources using rails, and then write curl scripts for the end points of the resources.
•	Set the controller to be an “OpenRead” controller so that in version three, individuals without an account will be able to see what polish colors a salon has available.
•	Relationship macros were added to user and nail polishes.
•	With the curl scripts and code working, it was time to deploy.

•	The front-end, Ruby-Red-Salon started with user sign up, authentication, change password, and sign out options.
•	Curl scripts were written for the nail polish requests and tested in the command line.
•	Polish API calls were written, followed by the events and the user interface jQuery.
•	Html content had to be added so there would be buttons to make calls to the api, and containers for the polishes to be displayed.
Difficulties faced
•	The desire to show all nail polishes combined with the desire to only allow the logged in user to update or delete their own nail polishes, posed a challenge considering how to use handlebars to make buttons for the appropriate colors.
•	Other challenges included
•	Styling is always a challenge but allows for great learning opportunities. This project utilized bootstrap a great deal for styling.

Goals for Future Versions and Unsolved Issues
Goals for Future Versions
o	Create a many to many relationship.
o	Allow users to “favorite” nail polish colors.
o	Allow users the choice to display all nail polishes, just their favorite nail polishes, or the favorite nail polishes of a friend.
o	Add something to the right side of the “Signed In Home Page” so that it does not look so bare before displaying all of the nail polishes.
o	Add glitter boolean option for each polish.
o	Glitter means a matte finish is not possible while no glitter means the polish can have a matte finish.
o	Continue to refactor and make the code as clean as possible.
Unsolved Issues
o	There is a small white line on the right side of the Sign In modal.
o	The “Update polish” and “Remove polish” buttons could be a bit more refined.
o	The navbar has not quite convinced me that it is styled or arranged properly. Although not technically an unsolved issue, there is always room for improvement.
