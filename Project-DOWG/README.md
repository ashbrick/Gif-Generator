# Daily Gif Generator

Daily Gif Generator is a single page app that let's you enter a day of the week in order to receive random 
gifs based on the day. You can then scroll through, left and right, to change the random gif being displayed.

If you click the URL> button below the gif window, then it will display the url of the gif currently being viewed.


## Installation

No installation necessary. Just cut and paste the following url into your browser and start searching for random daily gifs.

```bash
[Live link] (https://ashbrick.github.io/Project-DOWG/)
```


## Technologies Used

The following were used to create Daily Gif Generator:
* HTML
* CSS, Flexbox
* Javascript
* AJAX
* jQuery
* GIPHY API


## Approach 
I wanted to create an app that was simple and easy to use without much explanation, so I kept the page pretty plain aside from 
an input field, and 2 buttons: search and url.

The random gif generator uses a carousel element to display one gif at a time in the middle of the page. This is supposed to cut 
down on the amount of decision-making that you have to do when choosing a gif. If you don't like the first one that pops up, 
then you can scroll to the next image. 

Once you find the gif you want, you can click the rotating url button below the gif to reveal its url. The url can be copied and
pasted at your convenience. If you click the url button again, the url disappears.


## Technical Details

**Search Parameters**
Initially, my plan was to create specific search parameters based on pre-chosen keywords associated with each day of the week. 
I couldn't figure out how to get my if/else statements or my switch statements to work so I ultimately just simplified it by 
allowing the user to type in a day of the week and returning the raw results from that search.

**For Loops and Randomizing**
I used a For loop along with Math.floor and Math.random to filter through the array of objects that the API provided.
Both techniques were used in creating the carousel using jQuery, as well as the right and left scroll button functions.

**UI Module**
Creating the carousel was challenging. After being able to filter through the GIPHY API data, I thought I needed to create a 
whole new function. So I tried to model it after the Corgi Carousel morning exercise. However, the code I'd written to loop through 
the data was all that I needed to construct the carousel so I ended up using that to build the left and right scroll buttons which 
are what ultimately give the carousel its functionality.

**URL Toggle Button**
As an additional piece of information and to give the app a bit more character, I included a url button that toggles between showing
the url and hiding it. This was done by appending the url property from the gif object being displayed in the carousel to the div
that the url button is attached to. Then I added animation to make the button rotate 360 degrees when you hover over it with the cursor.


## Unsolved Problems

**CSS & Buttons**
I never quite figured out how to manipulate CSS for the url button. It doesn't shrink as much as I wanted it to. The other elements
shrink pretty smoothly while dragging the browser window inward. The url button is responsive to a point but doesn't shrink all the 
way down like it should.


