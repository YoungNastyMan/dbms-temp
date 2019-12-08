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
        event.preventDefault();
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
        $.ajax({
            url: 'http://localhost:5000/user/updateUser',
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                user
            }),
            success: (data) => {
                alert(data.status);
            }
        });
    });

    $('#bookDelete').on('submit', (event) => {
        event.preventDefault();
        // var inputs = $('#userDelete :input');
        var values = {
            seller: $(event.currentTarget).find('[name=username]').val(),
            title: $(event.currentTarget).find('[name=title]').val()
        };
        // alert(values.seller);
        // alert(values.title);
        $.ajax({
            url: 'http://localhost:5000/book/deleteBook',
            type: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify(values),
            success: (data) => {
                alert(data.status);
            }
        });

    });

    $('#bookUpdateBySeller').on('submit', (event) => {
        event.preventDefault();
        // var values = {
        //     username: $(event.currentTarget).find('[name=title]').val(),
        //     first_name: $(event.currentTarget).find('[name=first_name]').val()
        // };
        var book = {
            'seller': $(event.currentTarget).find('[name=id]').val(),
            'title': $(event.currentTarget).find('[name=title]').val(),
            'categories': $(event.currentTarget).find('[name=categories]').val(),
            'publisher': $(event.currentTarget).find('[name=publisher]').val(),
            'price': $(event.currentTarget).find('[name=price]').val(),
            'publishedYear': $(event.currentTarget).find('[name=publishedYear]').val(),
            'pagecount': $(event.currentTarget).find('[name=pagecount]').val()
        }

        // alert("AA");
        // alert(book.seller);
        // alert(book.title);
        // alert(book.categories);
        // alert(book.publisher);
        // alert(book.price);
        // alert(book.publishedYear);
        // alert(book.pagecount);


        $.ajax({
            url: 'http://localhost:5000/book/updateBook',
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                'seller': $(event.currentTarget).find('[name=id]').val(),
                'title': $(event.currentTarget).find('[name=title]').val(),
                'categories': $(event.currentTarget).find('[name=categories]').val(),
                'publisher': $(event.currentTarget).find('[name=publisher]').val(),
                'price': {
                    amount: $(event.currentTarget).find('[name=price]').val()
                },
                'publishedYear': $(event.currentTarget).find('[name=publishedYear]').val(),
                'pagecount': $(event.currentTarget).find('[name=pagecount]').val()
            }),
            success: (data) => {
                alert(data.status);
            }
        });
    });

    $('#bookCreateBySeller').on('submit', (event) => {
        event.preventDefault();
        // var values = {
        //     username: $(event.currentTarget).find('[name=title]').val(),
        //     first_name: $(event.currentTarget).find('[name=first_name]').val()
        // };
        var book = {
            'seller': $(event.currentTarget).find('[name=id]').val(),
            'title': $(event.currentTarget).find('[name=title]').val(),
            'author': $(event.currentTarget).find('[name=author]').val(),
            'categories': $(event.currentTarget).find('[name=categories]').val(),
            'publisher': $(event.currentTarget).find('[name=publisher]').val(),
            'publishedDate': $(event.currentTarget).find('[name=publishedYear]').val(),
            'price': { amount: $(event.currentTarget).find('[name=price]').val() },
            'language': $(event.currentTarget).find('[name=language]').val(),
            'pagecount': $(event.currentTarget).find('[name=pagecount]').val(),
        }

        // alert(book.seller);
        // alert(book.title);
        // alert(book.author);
        // alert(book.categories);
        // alert(book.publisher);
        // alert(book.publishedDate);
        // alert(book.price.amount);
        // alert(book.language);
        // alert(book.pagecount);


        $.ajax({
            url: 'http://localhost:5000/book/addBook',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                'seller': $(event.currentTarget).find('[name=id]').val(),
                'title': $(event.currentTarget).find('[name=title]').val(),
                'authors': [$(event.currentTarget).find('[name=author]').val()],
                'categories': $(event.currentTarget).find('[name=categories]').val(),
                'publisher': $(event.currentTarget).find('[name=publisher]').val(),
                'publishedDate': $(event.currentTarget).find('[name=publishedYear]').val(),
                'price': { amount: $(event.currentTarget).find('[name=price]').val() },
                'language': $(event.currentTarget).find('[name=language]').val(),
                'pagecount': $(event.currentTarget).find('[name=pagecount]').val(),
            }),
            success: (data) => {
                alert(data.status);
            }
        });
    });

    $('#register').on('submit', (event) => {
        event.preventDefault();

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
        $.ajax({
            url: 'http://localhost:5000/user/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                'username': $(event.currentTarget).find('[name=username]').val(),
                'first_name': $(event.currentTarget).find('[name=first_name]').val(),
                'last_name': $(event.currentTarget).find('[name=last_name]').val(),
                'password': $(event.currentTarget).find('[name=password]').val(),
                'usertype': $(event.currentTarget).find('[name=usertype]').val(),
                'address': {
                    'address': $(event.currentTarget).find('[name=address]').val(),
                    'pincode': $(event.currentTarget).find('[name=pincode]').val(),
                    'city': $(event.currentTarget).find('[name=city]').val(),
                    'state': $(event.currentTarget).find('[name=state]').val(),
                    'country': $(event.currentTarget).find('[name=country]').val()
                }
            }),
            success: (data) => {
                alert(data.status);
            }
        });
    });

});