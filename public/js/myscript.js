$(document).ready(function () {
    $("#myform").submit(function () {
        var search = $("#books").val();
        if (search == '') {
            alert("Enter some values");
        }
        else {
            var url = '';
            var img = '';
            var title = '';
            var author = '';

            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

                for (i = 0; i < response.items.length; i++) {
                    title = $('<h5 class = "center-align white-text">' + response.items[i].volumeInfo.title + '</h5');
                }
            });
        }
    });
    $('#userDelete').on('submit', (event) => {
        event.preventDefault();
        // var inputs = $('#userDelete :input');
        var values = { username: $(event.currentTarget).find('[name=username]').val() };
        // alert("DBA");
        // alert(values.username);
        // $.each($('#myForm').serializeArray(), function(i, field) {
        //     values[field.name] = field.value;
        // });

        // alert(values[username]);

        // alert($(event.currentTarget).find('[name=username]').val());
        $.ajax({
            url: 'http://localhost:5000/user/deleteUser',
            type: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify({ username: $(event.currentTarget).find('[name=username]').val() }),
            success: (data) => {
                alert(data.message);
            }
        });
    });
    $('#userUpdateByAdmin').on('submit', (event) => {
        // event.preventDefault();
        var values = {
            username: $(event.currentTarget).find('[name=username]').val(),
            first_name: $(event.currentTarget).find('[name=first_name]').val()
        };
        var user = {
            'username': $(event.currentTarget).find('[name=username]').val(),
            'first_name': $(event.currentTarget).find('[name=first_name]').val(),
            'last_name': $(event.currentTarget).find('[name=last_name]').val(),
            'password': $(event.currentTarget).find('[name=password]').val(),
            'address': {
                'address': $(event.currentTarget).find('[name=address]').val(),
                'pincode': $(event.currentTarget).find('[name=pincode]').val(),
                'city': $(event.currentTarget).find('[name=city]').val(),
                'state': $(event.currentTarget).find('[name=state]').val(),
                'country': $(event.currentTarget).find('[name=country]').val()
            }
        }
        // alert("UBA");
        // alert(user.username);
        // alert(user.first_name);
        // alert(user.address.country);
        $.ajax({
            url: 'http://localhost:5000/user/updateUser',
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ user }),
            success: (data) => {
                alert(data.status);
            }
        });
    });
});