$(document).ready(function() {
    $(".modal").hide();

    var closest;

    $("#add-pet").on("click", function(e) {
        e.preventDefault();
        $("#add_modal").show();
    });

    $(".modal_btn").on("click", function(e) {
        $("#add_modal").hide();
        $(".edit_modal").hide();
        $("#delete_modal").hide();
        $("#edit_foster_modal").hide();

    });

    $(".edit").on("click", function(e) {
        e.preventDefault();

        var index = $(this).data().id
        console.log("id is", index);
        index = "#" + index;
        $(index).show();
    });

    $(".delete").on("click", function(e) {
        e.preventDefault();
        $("#delete_modal").show();
        var index = $(this).data().id;
        console.log("index is", index);
        $("#pet_id").val(index);
        closest = $(this).closest('.row');

    });

    $("#foster_edit").on("click", function(e) {
        e.preventDefault();
        console.log("edit_foster");
        $("#edit_foster_modal").show();

    });

    $(".cancel").on("click", function(e) {
        e.preventDefault();
        console.log("clicked");
        $(".modal").hide();

    });

    $("#confirm_del").on("click", function(e) {
            console.log("clicked");
            closest.remove();
    });
});
