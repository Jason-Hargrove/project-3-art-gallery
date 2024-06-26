# Search the Metropolitan Museum of Art
This app lets users search for works of art at the Metropolitan Museum of Art using their Application Programming Interface. It also has the ability to create, read, update, and destroy ads inside the app.

## Features
- Search for artworks using the Metropolitan Museum of Art API.
- View details of individual artworks.
- Create, read, update, and delete ads within the application.

## Edge Cases and Known Bugs
- **Broken Image Icon**: If the API does not return an image, a broken image icon is displayed. This will be fixed in a future update.

## Installation and Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/project-3-art-gallery.git
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root directory and add your MongoDB URI:
    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    ```
4. Start the application:
    ```sh
    npm start
    ```

## Project Improvements

- **LinkedIn Integration**: I would like to see an image of my project in the Featured section on LinkedIn. I've tried several ways of setting meta properties with the Open Graph Protocol, but nothing has worked yet. I even used LinkedIn's [recommendations](https://www.linkedin.com/help/linkedin/answer/46687/making-your-website-shareable-on-linkedin?lang=en).

# This Is Me

![jasonhargroveart.com](https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/1470089724453-O1WN2E2YQHVPXJVRD7YQ/About+The+Artist-1.jpg?format=1000w)

Hey there! 👋 I'm Jason, a visual artist turned full-stack developer. I'm passionate about blending creativity and technology to craft unique digital experiences. From designing sleek user interfaces to streamlining processes with automation, I'm all about turning challenges into intuitive solutions.

With a continuous thirst for learning and a knack for creative problem-solving, I'm committed to delivering impactful results that exceed expectations. My background as a visual artist gives me a unique perspective in software engineering, allowing me to approach projects with creativity and innovation.

# Links
- [__GitHub Repo__](https://github.com/Jason-Hargrove/project-3-art-gallery.git)
- [__This Project on Heroku__](https://project-3-art-gallery-234e4bca97cc.herokuapp.com/)
- [__My Portfolio__](https://jason-hargrove-portfolio-5abbf0f5084c.herokuapp.com/)
- [__My Personal Website__](http://www.jasonhargroveart.com/)

## Future Updates

- Implement a default image or placeholder when the API does not return an image to avoid displaying a broken image icon.