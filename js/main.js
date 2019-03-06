//Run jQuery after the document is fully loaded.
$(document).ready(
    //The function that does the stuff.
    function () {
        $('input#submit_btn').click(function(event){
            event.preventDefault();
            console.log("Submit button clicked");
            let search_string = $('input#search_text').val();
            console.log(search_string);

            console.log("Input was: " + search_string);

            $.ajax('http://api.tvmaze.com/singlesearch/shows?q=' + search_string + '&embed=episodes', {
                method: "GET",
                dataType: "json"
            })

            //After the data comes back, use this function
                .done(
                    function (data) {
                        //Add the name
                        $('#name').append(data.name);
                        //Add the episodes
                        data._embedded.episodes.forEach(function (episode) {
                            $('#episodeList').append('<tr>'+
                                '<td>' + episode.season + '</td>' +
                                '<td>' + episode.number + '</td>' +
                                '<td>' + episode.name + '</td>' +
                                '<td>' + episode.summary + '</td>' +
                                +' </tr>')
                        })
                    })

        });

        // let search_string = $('input#search_text').val();
        // console.log(search_string);



        // let search_string = "test";


        // let test_str = "City";

        // var search_string = $('input#search_text').val();
        // console.log(search_string);

        //Make the AJAX call
        // $.ajax('http://api.tvmaze.com/singlesearch/shows?q=the+magicians&embed=episodes', {
        //     method: "GET",
        //     dataType: "json"
        // })
        // $.ajax('http://api.tvmaze.com/singlesearch/shows?q=' + test_str + '&embed=episodes', {
        //     method: "GET",
        //     dataType: "json"
        // })


    }
)
