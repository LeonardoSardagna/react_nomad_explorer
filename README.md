# Nomad Navigator - Frontend

Nomad Navigator is a web application designed to facilitate the management and organization of trips, whether for work or leisure. This application allows users to create trips, invite participants, organize activities, and save important links related to the trip. This project is the frontend part of the application, developed using React with TypeScript, TailwindCSS, React Router, and Axios. It communicates with a backend developed in Java(https://github.com/LeonardoSardagna/java_nomad_explorer.git).

## Key Features

### Register Next Trip

        Create a new trip by specifying the destination, start and end dates, and inviting participants.
        
### Invite Participants

        After registering the trip, invited participants receive an invitation email. By clicking on the confirmation link, they can confirm their participation in the trip.
    
### Organize Activities
    
        The trip creator can add planned activities for each day of the trip, including the title, date, and time of the activities.
    
### Save Important Links
    
        Participants can add useful links related to the trip, such as accommodation reservations, places of interest, etc.

## Technologies Used

    React: Library for building user interfaces.
    TypeScript: Superset of JavaScript for increased code safety and robustness.
    TailwindCSS: CSS framework for fast and efficient styling.
    React Router: Library for route management and navigation.
    Axios: Library for making HTTP requests to the backend.

## Installation and Running

    Clone the Repository:

```bash
git clone https://github.com/LeonardoSardagna/react_nomad_explorer.git
```

    Install Dependencies:

```bash
cd react_nomad_explorer
npm install
```

Configure Environment Variables:

    Create a .env file at the root of the project and add your environment variables (e.g., backend URL).

Run the Application:

```bash
npm start
```
