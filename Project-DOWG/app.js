
$(()=>{

//===============================================
//                 VARIABLES
//===============================================
    // var $dayOfWeek = ()

    const $userInput = $('input[type="text"]').val().toLowerCase();

    const $monQuery = "coffee+tired+grumpy"
    const $tueQuery = "tacos"
    const $wedQuery = "humpday+wednesday"
    const $thuQuery = "friday+eve"
    const $friQuery = "dance"
    const $satQuery = "party"
    const $sunQuery = "rest+relax+sleep"

//===============================================
//                  FUNCTIONS
//===============================================

    $('#findGifs').on('click', (event) =>{
        const $userInput = $('input[type="text"]').val().toLowerCase();
        // console.log($userInput)
        event.preventDefault();
        $('form').trigger('reset');


        // if user input is Monday, return "this url" as the query parameters
        const daySearch = ()=>{
            if($userInput == monday){
            // if($userInput == monday){
                let $userInput = $monQuery;
            };
            daySearch();
        }


//===============================================
//                  AJAX & DATA
//===============================================

/* ajaxRequest syntax learned from https://www.youtube.com/watch?v=pfdP26jPvEk */
        var ajaxRequest = $.get(`http://api.giphy.com/v1/gifs/random?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&limit=10&q=${$userInput}`);

        ajaxRequest.done((response)=>{
            console.log("success got data", response); //checking to see if able to access the data

            //set response(data) to a variable to make it easier to handle (especially because otherwise it would be data.data which can be confusing -- the response is a bunch of gifs so setting the variable as "gifs")

            // const randNumGen = () =>{
            //     for(i=0; i<3;i++){
            //     }
            // }

            // let i = Math.floor(Math.random()*3)


            var $gifs = response.data

            // let $('#carousel-list') = [];


            //create a for/in statement to loop through properties of an object (response is an object)
            //set size for gifs inside of image source
            for(i in $gifs){
                $('#carousel-list').empty();
                $('#carousel-list').append("<img src=' "+$gifs.images.original.url+" ' style='height: 350px; width: 350px;'/>" )
            }



        });
    }) //closing for on click function on line 24

}) //DOM onload closing

//======================== 1st attempt, couldn't get it to work so trying a different syntax

    // $.ajax({ //need to add the var for userinput in place of query so that the day of the week corresponds with the search parameters
    //     url: `http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&limit=1&q=${$userInput}`,
    // }).then(
    //     (data)=>{
    //         // let $data = data.data
    //         // $('#title').html(data.data[""].title);
    //         // $('#url').html(data.data[0].images.original.url);
    //         $('#url').html(data.data[0].images.original.url);
    //         // $('#rating').html(data.data[].rating);
    //
    // //========== CONSOLE LOGS to test AJAX data retrieval ==========================
    //
    //         // console.log(data.data[0].title)
    //         // console.log(data.data[0].images.original.url)
    //         // console.log(data.data[0].rating)
    //         // console.log(data.data[4].images.original.url)
    //         // console.log(data.data[0].images)
    //         // console.log(data.data[]) //gave me an error, didn't understand the empty brackets
    //         // console.log(data.data) //showed nothing in console, and no errors
    //         console.log($data)
    //
    //
    //
    //         // for(let i=0; i<data.data.length; i++) {
    //         //     ($('<li>')).append(data.data[0]);
    //         //     const $li = $('li').html('img src= data.data[i].embed_url')
    //         //     $('#carousel-list').append($li)
    //         // };
    //
    //
    //     }),
    //     (error)=>{
    //         console.log('Error');
    //     };
    // })












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

////////////////////////////////////////////////////////////////////
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


*/


/*=============================================
===============================================
              TESTING
===============================================
===============================================

1. Data isn't being recognized, nor is images so I'm having a hard time getting the specific data I need

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
*/
