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



                $.ajax('http://api.tvmaze.com/search/shows?q=' + search_string, {
                    method: "GET",
                    dataType: "json"
                })

                //After the data comes back, use this function
                    .done(
                        function (data) {
                            $('#showsList').empty();
                            //Add the name
                            // $('#name').append(data.name);
                            //Add the episodes
                            data.forEach(function (result) {
                                $('#showsList').append('<tr>'+
                                    '<td>' + result.show.name + '</td>' +
                                    '<td>' + result.show.genres[0] + '</td>' +
                                    '<td>' + result.show.officialSite + '</td>' +
                                    +' </tr>')
                            })
                        })

            // $.ajax('http://api.tvmaze.com/singlesearch/shows?q=' + search_string + '&embed=episodes', {
            //     method: "GET",
            //     dataType: "json"
            // })
            //
            // //After the data comes back, use this function
            //     .done(
            //         function (data) {
            //             //Add the name
            //             $('#name').append(data.name);
            //             //Add the episodes
            //             data._embedded.episodes.forEach(function (episode) {
            //                 $('#episodeList').append('<tr>'+
            //                     '<td>' + episode.season + '</td>' +
            //                     '<td>' + episode.number + '</td>' +
            //                     '<td>' + episode.name + '</td>' +
            //                     '<td>' + episode.summary + '</td>' +
            //                     +' </tr>')
            //             })
            //         })

        });

    }
)
