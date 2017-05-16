$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var nameInput = $("#name");
    var speciesInput = $("#species");
    var ageInput = $("#age");
    var temperInput = $("#temper");
    var genderInput = $("#gender");
    var descriptionInput = $("#description");
    var imageInput = $("#image");
    var availableInput = $("#available");
    var cmsForm = $("#cms");
    var fosterSelect = $("#foster");
    // Adding an event listener for when the form is submitted
    $(cmsForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;
    var postId;
    var authorId;
    var petId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;

    // If we have this section in our url, we pull out the post id from the url
    // In '?post_id=1', postId is 1
    if (url.indexOf("?post_id=") !== -1) {
        postId = url.split("=")[1];
        getPostData(postId, "post");
    }
    // Otherwise if we have an author_id in our url, preset the author select box to be our Author
    else if (url.indexOf("?author_id=") !== -1) {
        authorId = url.split("=")[1];
    }

    // Getting the authors, and their posts
    getAuthors();

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        // if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
        //  return;
        //}
        // Constructing a newPost object to hand to the database
        var newPost = {
            userName: fosterHomeInput
                .val()
                .trim(),
            fosterParents: fosterParentsInput
                .val()
                .trim(),
            address: addressInput
                .val()
                .trim(),
            county: countyInput
                .val()
                .trim(),
            contact: contactInput
                .val()
                .trim(),
            email: emailInput
                .val()
                .trim(),
            hours: hoursInput
                .val()
                .trim(),
            website: websiteInput
                .val()
                .trim(),
            image: imageInput
                .val()
                .trim(),
            image2: imageInput2
                .val()
                .trim(),
            image3: imageInput3
                .val()
                .trim(),
            active: activeInput
                .val()
                .trim(),
            AccountId: authorSelect.val()
        };

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        } else {
            submitPost(newPost);
        }
    }

    // Submits a new post and brings user to blog page upon completion
    function submitPost(post) {
        $.post("/api/posts", post, function() {
            window.location.href = "/blog?author_id=" + authorId;
        });
    }

    // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
    function getPostData(id, type) {
        var queryUrl;
        switch (type) {
            case "post":
                queryUrl = "/api/posts/" + id;
                break;
            case "author":
                queryUrl = "/api/authors/" + id;
                break;
            default:
                return;
        }
        $.get(queryUrl, function(data) {
            if (data) {
                console.log(data.AccountId || data.id);
                // If this post exists, prefill our cms forms with its data
                //titleInput.val(data.title);
                //bodyInput.val(data.body);
                fosterHomeInput.val(data.userName);
                fosterParentsInput.val(data.fosterParents);
                addressInput.val(data.address);
                countyInput.val(data.county);
                contactInput.val(data.contact);
                emailInput.val(data.email);
                hoursInput.val(data.hours);
                websiteInput.val(data.website);
                imageInput.val(data.image);
                imageInput2.val(data.image2);
                imageInput3.val(data.image3);
                activeInput.val(data.active);
                authorId = data.AccountId || data.id;
                // If we have a post with this id, set a flag for us to know to update the post
                // when we hit submit
                updating = true;
            }
        });
    }

    // A function to get Authors and then render our list of Authors
    function getAuthors() {
        $.get("/api/authors", renderAuthorList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderAuthorList(data) {
        if (!data.length) {
            window.location.href = "/authors";
        }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createAuthorRow(data[i]));
        }
        authorSelect.empty();
        console.log(rowsToAdd);
        console.log(authorSelect);
        authorSelect.append(rowsToAdd);
        authorSelect.val(authorId);
    }

    // Creates the author options in the dropdown
    function createAuthorRow(author) {
        var listOption = $("<option>");
        listOption.attr("value", author.id);
        listOption.text(author.name);
        return listOption;
    }

    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
        $.ajax({
                method: "PUT",
                url: "/api/posts",
                data: post
            })
            .done(function() {
                window.location.href = "/blog?author_id=" + authorId;
            });
    }
});