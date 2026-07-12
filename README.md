Favourite Student List
A React app that lets you browse a list of students and mark your favourites, built to demonstrate page navigation with React Router and shared state with the Context API.
What it does?
The app has two pages: a Student List page showing every student, and a Favourite Students page showing only the ones you've marked as favourites. You move between them instantly, without the page reloading.
On the Student List page, each student has an "Add to Favourite" button. Clicking it adds them to your favourites — and if they're already added, the button disables itself so you can't add the same student twice. On the Favourites page, each entry has a Remove button to take them back off the list. If you haven't favourited anyone yet, the page shows a friendly message instead of a blank screen.
How it works under the hood
The favourites list lives in one shared place — a Context — so both pages can read and update it without passing data back and forth manually. This is the core idea the project demonstrates: global state that stays in sync across different views.
TECH USED
React, React Router, and the Context API, styled with plain CSS.
