# Javascript Ticket Challenge


The volleyball Federation decided to use an online selling platform for the next season, and our company has been chosen for implementing that.

# Requirements

In this challenge, you are going to develop a **responsive web application** to show stadium seats
randomly to user and user can select a seat and but a ticket. after buying the ticket
you should show **another page** that shows the ticket id to the user.



# APIs
Base URL: https://ticket-challange.herokuapp.com

* `GET /map`


Get the list of map ids.
You should use this endpoint to get the list and choose one of the stadium maps randomly

* `GET /map/<map_id>`


Get map detail and show seats

in the response: 1 means reserved, and 0 means seat available to buy


* `POST /map/<map_id>/ticket`


Buy ticket


`x` and `y` are Seat coordinates in the request



# Implementation details

Try to write your code as **reusable** and **readable** as possible.
Also, don't forget to **document your code** and clear the reasons for all your decisions in the code.

It is more valuable to us that the project comes with unit tests

Please don't use any CSS framework (like bootstrap, material, ...)

Don't forget that many stadium seats are available (around 100k) so try to implement your code in a way that could show it smoothly.
If your solution does not sample enough for implementing fast, you can just describe it in your documents.

Please fork this repository and add your code to that. Don't forget that your commits are so important.
So be sure that you're committing your code often with a proper commit message.
