# CRUD with Express

## Learning Outcomes

[ ] Review: Make an Express app from scratch

[ ] What's a resource?
[ ] What's CRUD/BREAD mean?
[ ] What is REST?

[ ] GET requests are for requesting to _view_ information
[ ] POST requests are for requesting to _change_ information
[ ] Request-response cycle: Every request _must_ get a response

[ ] HTML forms: The most standard way to make POST requests
[ ] Dev tools: How to use the network tab

[ ] How to do HTTP redirects in Express

## Express Review

* Setting up an Express server from scratch
* Making a few routes
* Server-side state

## CRUD (Or... BREAD)

* What's CRUD stand for?
* What are the two reasons that we aren't going to use CRUD in this lecture?


## Resources

* What's a resource?
* Let's make up a bunch of resources
* Resources and routing

## Let's build a BREAD app

* Setting up initial server state
* Setting up GET routes
* Building a form
* Setting up POST routes

  ### What's a resource?

  Your resources tend to be the "nouns" in your app: You might think of them as different variations on the concept of "Users" (representations of people/agents) and "Posts" (things that Users create and interact with). Although that's a vast simplification, it has surprisingly broad explanatory power: Many things are just a type of Post:

  * Pin - Post, but it's an image
  * Gram - Post, but it's an image
  * Classified ad - Post, specifically for buying/selling/dating/etc. something
  * Tweet - Post, but only 280 characters (or something)
  * Article, message, etc.: Many things map onto this "post" concept straightforwardly

  What would it mean to do BREAD stuff to these things? Can you browse classifieds? What about read one? Edit, add, delete? Are there any actions that you might want to take that don't fit into one of those categories?

  ### REST: Doing BREAD stuff to resources

  So given that many apps can be thought of as simply combining two well-known patterns (i.e. Doing BREAD stuff to Resources), we can often apply one common routing convention to do most of our routing (using a `users` resource as an example):

  Browse - `GET /users`
  Read   - `GET /users/:id`
  Edit   - `POST /users/:id`
  Add    - `POST /users`
  Delete - `POST /users/:id/delete` (or `DELETE /users/:id` if available)
