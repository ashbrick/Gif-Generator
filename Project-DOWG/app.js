
$(()=>{

    $.ajax({ //need to add the variables for query, user input, figure out others
        url: "http://api.giphy.com/v1/gifs/search?&api_key=jl0KBxJT91RtqFEeeJapgitK8gMWZDal&q=coffee",
    }).then(
        (data)=>{
            data.data[0];
            console.log(data.data[0])
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

////////////////////////////////////////////////////////////////////
*/
