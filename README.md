# Majornomics Frontend

Majornomics is a web-based interface for exploring postsecondary programs, comparing outcomes, and visualizing data related to tuition costs, job prospects, and program trends (Focusing on Canadian Universities Only for now).

The application is built with React and TypeScript. It interacts with the backend API to retrieve program data, institutional information, and recommendations.

---

## Key Features

- Search interface for finding university programs.
- Recommendation system UI for program comparisons.
- Modular component structure using reusable UI elements.
- Minimal state logic contained at the component level.
- API-driven content.

---

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Axios or Fetch for API integration

---

## Running the Project

Install dependencies:
**npm install**

Start development server:
**npm run dev**

Build for production:
**npm run build**

Preview production build:
**npm run preview**

---

## Environment Variables

Create a `.env` file with:

MONGO_URI = <"Mongo DB URI">

---

## Frontend–Backend Interaction

The frontend communicates with the backend via REST endpoints for:

- Fetching university programs
- Retrieving recommendation results
- Loading seed or dummy data

Requests are made through standard HTTP endpoints exposed by the backend.

- The backend repo can be found here: https://github.com/Ujk768/ase-backend.git

---

## Notes

- All actual data should come from the backend unless running in offline mode using `dummydata.ts`.


