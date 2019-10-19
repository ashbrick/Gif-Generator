
$(()=>{

    $.ajax({ //need to add the variables for query, user input, figure out others
        url: "http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=coffee",
    }).then(
        (data)=>{
            data.data[0].title;
            data.data[0].images.original.url;
            data.data[0].rating;
            // console.log(data.data[0].title)
            // console.log(data)
            console.log(data.data[0].rating)
        },
        (error)=>{
            console.log('Error');
        }
    );









})



/* ============================================
                        AJAX NOTES
===============================================

/////////////// GENERAL INFO & testing//////////////////////////

const api = "http://api.giphy.com/v1/gifs/search?" //url to api

const apiKey = "&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal

var query = "&q=coffee"

search query path: /v1/gifs/search

q=coffee

url= api + apiKey + query
http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=coffee

//-->experimenting with different keywords to see if I can get the data to populate

1. try coffee and tired


////////////////////////////////////////////////////////////////////
*/

/*=============================================
              FUNCTIONALITY NOTES
=============================================

-when user enters day of the week and clicks the FIND GIFS button, the carousel will display 25 gifs based on the keywords for that day of the week

Keywords
Monday:
Tuesday:
Wednesday:
Thursday:
Friday:
Saturday:
Sunday:


*/
