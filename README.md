Help Desk Ticket Support System

NOTE\*\*\*\*
Since Heroku no longer offers a free tier, I've used Render to upload the backend server. However because I am using the free tier of Render, the service shuts down the server after 15 mins of inactivity

https://docs.render.com/free

MVP

Front-end

Implemented with React

- On the main page of the app, end users of the service should be able to submit support
  ticket requests.

- Necessary fields include name, email, photo / attachment, and a
  description of the problem they are experiencing.

Back-end

Implemented with node, express, axios

- On a separate page, the backend admin panel, support staff should be able to see a list
  summary of each ticket, including status.

- They should be able to drill down into the ticket and respond to a request, as well as update the status of the ticket.

- Possible statuses are “new”, “in progress”, and “resolved”
