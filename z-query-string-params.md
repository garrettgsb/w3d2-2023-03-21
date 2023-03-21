
Query string params:
  * Appear at the end of the URL, after the path
  * Start with a "?"
  * Keys and values are separated from each other with "="
  * Key-value pairs are separated with "&"
  * Appear in Express as `request.query`

http://localhost:3000/set?newCounterValue=600&username=garrett&sortOrder=date_asc


Sometimes, links in emails and stuff will have extra things tacked on the end,
so that when you click the link, the server knows a bunch of stuff about who
you are and where you clicked it. They're usually alot more verbose than this,
but you can imagine `marketing_id` mapping to some piece of data that says
"this ID matches this email sent to this address."

garrett.com/blog/express-and-bread-and-stuff?marketing_id=1234


The main use for query string params is for searches. If you copy-paste this link,
you'll see not just the same search page that I did, but you'll perform the same search.
(NB: Fictional example-- We didn't check how Amazon actually performs searches)

amazon.ca/search?q=shoes


What you _don't_ want to do is send sensitive or large payloads-- like passwords
or 5000-word essays-- in the query string params. Better to send them in the
body of POST requests. You wouldn't want this URL in your browser history:

dropbox.com/login?password=hunter2
