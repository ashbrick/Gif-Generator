
$(()=>{

//===============================================
//                 VARIABLES
//===============================================

    const $userInput = $('input[type="text"]').val().toLowerCase();

    const chooseDay =()=>{
            const $monQuery = "coffee+tired+grumpy";
            const $tueQuery = "tacos";
            const $wedQuery = "humpday+wednesday";
            const $thuQuery = "friday+eve";
            const $friQuery = "dance";
            const $satQuery = "party";
            const $sunQuery = "rest+relax+sleep";

            if($userInput == 'monday'){
                let $userInput = $monQuery;
            } else if ($userInput == 'tuesday'){
                let $userInput = $tueQuery;
            } else if ($userInput == 'wednesday'){
                let $userInput = $wedQuery;
            } else if ($userInput == 'thursday'){
                let $userInput = $thuQuery;
            } else if ($userInput == 'friday'){
                let $userInput = $friQuery;
            } else if ($userInput == 'saturday'){
                let $userInput = $satQuery;
            }else if ($userInput == 'sunday'){
                let $userInput = $sunQuery;
            };
    }
//===============================================
//                  FUNCTIONS: for Buttons
//===============================================

    $('#findGifs').on('click', (event) =>{
        const $userInput = $('input[type="text"]').val().toLowerCase()
        // chooseDay();


        // console.log($userInput)
        event.preventDefault();
        $('form').trigger('reset');


//===============================================
//                  AJAX & DATA
//===============================================

/* ajaxRequest syntax learned from https://www.youtube.com/watch?v=pfdP26jPvEk */
        var ajaxRequest = $.get(`http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&limit=25&q=${$userInput}`);

        ajaxRequest.done((response)=>{
            console.log("success got data", response); //checking to see if able to access the data

            let i = Math.floor(Math.random()*25)
            //set response(data) to a variable to make it easier to handle (especially because otherwise it would be data.data which can be confusing -- the response is a bunch of gifs so setting the variable as "gifs")
            var $gifs = response.data

            $('#carousel-box').empty();
            $('#carousel-box').append("<img src=' "+$gifs[i].images.original.url+" ' style='height: 350px; width: 350px;'/>" )

            console.log(i)

        });
    }) //closing for on click function on line 24

}) //DOM onload closing














/* ============================================
===============================================
                        AJAX NOTES
===============================================
===============================================

/////////////// GENERAL INFO & testing//////////////////////////

const api = "http://api.giphy.com/v1/gifs/search?" //url to api

const apiKey = "&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal

var query = "&q=coffee"

search query path: /v1/gifs/search

q=coffee

url= api + apiKey + query
http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=coffee

//-->experimenting with different keywords to see if I can get the data to populate and trying to decide how I want to filter the search for each day while keeping it simple

1. try coffee and tired
http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=coffee+tired
-total count returned: 13,360

2. try coffe, tired, grumpy motivation
http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=coffee+tired+grumpy+motivation
-total count returned: 17,288

3. try coffee
http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=coffee
-total count: 16,298



/////////////////////////////
1st ATTEMPT at creating the ajax request and grabbing the data
/////////////////////////////
    Note: decided to start over because I couldn't get it to work. Tried a different syntax that made more sense to me

    $.ajax({ //need to add the var for userinput in place of query so that the day of the week corresponds with the search parameters
        url: `http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&limit=1&q=${$userInput}`,
    }).then(
        (data)=>{
            // let $data = data.data
            // $('#title').html(data.data[""].title);
            // $('#url').html(data.data[0].images.original.url);
            $('#url').html(data.data[0].images.original.url);
            // $('#rating').html(data.data[].rating);

    //========== CONSOLE LOGS to test AJAX data retrieval ==========================

            // console.log(data.data[0].title)
            // console.log(data.data[0].images.original.url)
            // console.log(data.data[0].rating)
            // console.log(data.data[4].images.original.url)
            // console.log(data.data[0].images)
            // console.log(data.data[]) //gave me an error, didn't understand the empty brackets
            // console.log(data.data) //showed nothing in console, and no errors
            console.log($data)

        //ended up not needing a for loop, didn't make sense for what I was trying to do. Since I could get it done without a for loop I took this out to keep the code more DRY
            // for(let i=0; i<data.data.length; i++) {
            //     ($('<li>')).append(data.data[0]);
            //     const $li = $('li').html('img src= data.data[i].embed_url')
            //     $('#carousel-list').append($li)
            // };


        }),
        (error)=>{
            console.log('Error');
        };
    })

*/



/*=============================================
===============================================
              FUNCTIONALITY NOTES
===============================================
===============================================

-when user enters day of the week and clicks the FIND GIFS button, the carousel will display 25 gifs based on the keywords for that day of the week

Keywords
Monday: coffee, tired, grumpy, motivation
Tuesday: tacos
Wednesday: humpday,
Thursday: friday eve
Friday: dance,
Saturday: party
Sunday: rest, sleep, relax

/////////////////////////////// Explanation for removing daySearch function

-Decided to use a switch statement for this (Thank you, Jordan Morales):
    if user input is Monday, return "this url" as the query parameters
    const daySearch = ()=>{
        if($userInput == monday){
        // if($userInput == monday){
            let $userInput = $monQuery;
        };
        daySearch();
    }

    ////////////////////////// The Switch Statement Attempt
    Note: couldn't figure out where to put it so went back to if/else

    const whatDay = () =>{

        const $userInput = $('input[type="text"]').val().toLowerCase();

            const $monQuery = "coffee+tired+grumpy";
            const $tueQuery = "tacos";
            const $wedQuery = "humpday+wednesday";
            const $thuQuery = "friday+eve";
            const $friQuery = "dance";
            const $satQuery = "party";
            const $sunQuery = "rest+relax+sleep";

        switch ($userInput) {
            case 'monday':
                $userInput = $monQuery;
                break;
            case 'tuesday':
                $userInput = $tueQuery;
                break;
            case 'wednesday':
                $userInput = $wedQuery;
                break;
            case 'thursday':
                $userInput = $thuQuery;
                break;
            case 'friday':
                $userInput = $friQuery;
                break;
            case 'saturday':
                $userInput = $satQuery;
                break;
            case 'sunday':
                $userInput = $sunQuery;
                break;
            default:
                $userInput;
        };
    }

/////////////////////////////// Explanation for removing my raondom num generator

-took this out of my current AJAX statement because I didn't need it to generate a random number (Dan helped to clarify things for me). Instead I just kept the Math.floor(Math.random) part above in order to randomly grab a gif from the ones generated based on $userInput

generate random number from gifs returned
const randNumGen = () =>{
    for(i=0; i<=5;i++){

    }
}

//////////////////////////////// Explanation for removing my for/in loop

-original pseudo-code: create a for/in statement to loop through properties of an object (response is an object)

    Ended up not needing it to filter through properties since I'm randomly picking 1 gif

*/


/*=============================================
===============================================
              TESTING
===============================================
===============================================

1. "Data" isn't being recognized, nor is "images" so I'm having a hard time getting the specific data I need

    $.ajax({ //need to add the var for userinput in place of query so that the day of the week corresponds with the search parameters
        url: `http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=monday`,
    }).then(
        (data)=>{
            // $('#title').html(data.data[i].title);
            $('#url').html(data.data[i].images.original.url);
            // $('#rating').html(data.data[].rating);
            // console.log(data.data[0].title)
            console.log(data)
            // console.log(data.data[0].rating)

            for(let i=0; i<data.data.length; i++) {
                ($('<li>')).append(data.data[data]);
                const $li = $('li').html('img src= data.data[i].embed_url')
                $('#carousel-list').append($li)
            };

    EXPLANATION:
        -I switched my syntax to see if it would help me to understand it better. After watching a YouTube video about the different syntax and how it was used it helped!

        -I also wasn't calling the data correctly. So instead of referring to the gifs as 'img src= data.data[i].embed_url', I went deeper into the API and grabbed a different property buried within $gifs[i].images.original and got it to work FINALLY!
*/
