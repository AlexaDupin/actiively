# Actiively

Full-stack activity discovery platform built with React, Node.js, Express, PostgreSQL, and JWT authentication.

Actiively helps users find sports and artistic activities based on keyword, ZIP code, availability, level, and gender. Organizations can create an account, manage their profile, and publish activities.

[Live demo](https://actiively-front.onrender.com/)  

Try searching with ZIP code `75`.

## Preview

<img width="750" height="444" alt="Actiively search results page" src="https://github.com/user-attachments/assets/57db436d-fa37-403d-bc24-f260d59793f0" />

## Project context

Actiively was built as a 4-week full-stack JavaScript capstone project at O'Clock.

The team delivered a working MVP through weekly sprints, daily stand-ups, Gitflow, feature branches, pull requests, and final end-to-end testing.

I worked as Product Owner and Frontend Developer in a team of 4 developers.

## MVP features

### Visitors

- Search activities by keyword and ZIP code
- Filter results by availability, level, and gender
- View detailed activity pages with schedule, price, location, and organization contact information

### Organizations

- Sign up and log in
- Manage an organization profile
- Create, edit, and delete activities
- View all activities linked to the organization account

## My role

### Product ownership and planning

- Proposed the original product idea
- Helped define the MVP scope, user stories, routes, and user flows
- Kept the team aligned on the user problem and core product goal
- Created responsive wireframes for the results and filter experience
- Created mock activity data so frontend work could start before the API was complete

### Frontend development and API integration

- Built responsive React pages for key user flows
- Connected React views to the Express API with Axios
- Used React Router for dynamic pages and navigation
- Implemented mobile navigation for smaller screens

### Authentication and protected flows

- Implemented frontend JWT login handling
- Sent JWT tokens in Axios headers for protected organization requests
- Collaborated with the backend developer on the token-based authentication flow
- Contributed to authenticated organization actions such as activity management

### Team delivery and QA

- Worked in weekly Agile sprints from product definition to final testing
- Used Gitflow with feature branches and pull requests
- Coordinated frontend work with backend progress
- Participated in end-to-end testing before final delivery
- Helped debug integration issues across the frontend and API

## Tech stack

### Frontend

- React
- React Router
- Axios
- React Hook Form
- CSS and SCSS
- Semantic UI

### Backend

- Node.js
- Express
- PostgreSQL
- JWT
- bcrypt
- Joi
- Sqitch

## Technical highlights

- React single-page application connected to a REST API
- PostgreSQL database with direct SQL queries
- JWT-protected organization routes
- Password hashing with bcrypt
- Parameterized SQL queries to reduce SQL injection risk
- Responsive desktop and mobile experience
- Complete visitor and organization flows delivered as an MVP

## Demo

### Search with multiple filters

Search for judo in Paris, for beginners, female, on Thursday.

https://user-images.githubusercontent.com/79219750/213878111-d9074079-4fab-40b8-91ab-96ed2ef15089.mp4

### Organization login on mobile

Log in as a judo association on mobile.

https://user-images.githubusercontent.com/79219750/213880290-a1d2f55e-30ea-4953-bc56-34cbcc492725.mp4

### Editing an activity on mobile

Edit an activity and update its schedule on mobile.

https://user-images.githubusercontent.com/79219750/213878789-14e10df9-90e4-468b-8e7b-bab3aa2b9299.mp4

## Run locally

Clone the repository.

```bash
git clone https://github.com/AlexaDupin/actiively.git
cd actiively
```

Start the backend.

```bash
cd Back
yarn
nodemon index.js
```

Start the frontend.

```bash
cd Front
yarn
yarn start
```

## What I learned

Actiively gave me practical experience building software in a team.

I learned how to work in Agile sprints, clarify MVP scope, coordinate frontend and backend work, use Gitflow, test complete user flows, and deliver a working full-stack application under a tight deadline.
