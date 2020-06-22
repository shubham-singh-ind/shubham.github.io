$(document).ready(function(){
    $(".cases").html("Loading...");
    $.ajax({
        url: 'https://api.covid19api.com/summary',
        method: 'GET',
        success: function( result ) {
            global = result.Global;
            $("#new-recovered").html(global.NewRecovered);
            $("#new-death").html(global.NewDeaths);
            $("#new-confirmed").html(global.NewConfirmed);
            $("#total-recovered").html(global.TotalRecovered);
            $("#total-death").html(global.TotalDeaths);                                                            
            $("#total-confirmed").html(global.TotalConfirmed);                                                            
        }
    })
})