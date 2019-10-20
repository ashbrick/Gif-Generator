
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

    // const index = []
//===============================================
//                  FUNCTIONS
//===============================================

    $('form').on('click', (event) =>{
        const $userInput = $('input[type="text"]').val().toLowerCase();
        console.log($userInput)
        event.preventDefault();
        $('form').trigger('reset');


    // if user input is Monday, return "this url" as the query parameters
    const daySearch = ()=>{
        if($userInput == monday){
        // if($userInput == monday){
            $userInput == $monQuery;
        };
    }



//===============================================
//                  AJAX & DATA
//===============================================

    $.ajax({ //need to add the var for userinput in place of query so that the day of the week corresponds with the search parameters
        url: `http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=${$userInput}`,
    }).then(
        (data)=>{
            // $('#title').html(data.data[""].title);
            $('#url').html(data.data[0].images.original.url);
            // $('#rating').html(data.data[].rating);
            // console.log(data.data[0].title)
            // console.log(data.data[0].images.original.url)
            // console.log(data.data[0].rating)
            // console.log(data.data[4].images.original.url)
            console.log(data.data[0].images)




            for(let i=0; i<data.data.length; i++) {
                ($('<li>')).append(data.data[0]);
                const $li = $('li').html('img src= data.data[i].embed_url')
                $('#carousel-list').append($li)
            };


        }),
        (error)=>{
            console.log('Error');
        };
    })








})



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
