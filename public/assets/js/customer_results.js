$(document).ready(function() {

    console.log('ready');

    $(".modal_box").hide();
    var modal_index;

     $(".info").on("click", function(e) {
        e.preventDefault();

        var index = $(this).data().id
        console.log("id is", index);
        index = "#" + index;
        $(index).show();
    });

     $(".cancel").on("click", function(e) {
        e.preventDefault();
        console.log("clicked");
        $(".modal").hide();

<<<<<<< HEAD
    });


})
=======

})
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
