$(document).ready(function() {
  const apiServer = "http://localhost:5000";

  $("#userDelete").on("submit", event => {
    event.preventDefault();
    $.ajax({
      url: apiServer + "/user/deleteUser",
      type: "DELETE",
      contentType: "application/json",
      data: JSON.stringify({
        username: $(event.currentTarget)
          .find("[name=username]")
          .val()
      }),
      success: data => {
        alert(data.message);
      }
    });
  });

  $("#userUpdateByAdmin").on("submit", event => {
    event.preventDefault();
    const user = {
      username: $(event.currentTarget)
        .find("[name=username]")
        .val(),
      first_name: $(event.currentTarget)
        .find("[name=first_name]")
        .val(),
      last_name: $(event.currentTarget)
        .find("[name=last_name]")
        .val(),
      password: $(event.currentTarget)
        .find("[name=password]")
        .val(),
      address: {
        address: $(event.currentTarget)
          .find("[name=address]")
          .val(),
        pincode: $(event.currentTarget)
          .find("[name=pincode]")
          .val(),
        city: $(event.currentTarget)
          .find("[name=city]")
          .val(),
        state: $(event.currentTarget)
          .find("[name=state]")
          .val(),
        country: $(event.currentTarget)
          .find("[name=country]")
          .val()
      }
    };
    $.ajax({
      url: apiServer + "/user/updateUser",
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify({
        user
      }),
      success: data => {
        alert(data.status);
      }
    });
  });

  $("#bookDelete").on("submit", event => {
    event.preventDefault();
    // var inputs = $('#userDelete :input');
    var values = {
      seller: $(event.currentTarget)
        .find("[name=username]")
        .val(),
      title: $(event.currentTarget)
        .find("[name=title]")
        .val()
    };
    // alert(values.seller);
    // alert(values.title);
    $.ajax({
      url: apiServer + "/book/deleteBook",
      type: "DELETE",
      contentType: "application/json",
      data: JSON.stringify(values),
      success: data => {
        alert(data.status);
      }
    });
  });

  $("#bookUpdateBySeller").on("submit", event => {
    event.preventDefault();
    // var values = {
    //     username: $(event.currentTarget).find('[name=title]').val(),
    //     first_name: $(event.currentTarget).find('[name=first_name]').val()
    // };
    var book = {
      seller: $(event.currentTarget)
        .find("[name=id]")
        .val(),
      title: $(event.currentTarget)
        .find("[name=title]")
        .val(),
      categories: $(event.currentTarget)
        .find("[name=categories]")
        .val(),
      publisher: $(event.currentTarget)
        .find("[name=publisher]")
        .val(),
      price: $(event.currentTarget)
        .find("[name=price]")
        .val(),
      publishedYear: $(event.currentTarget)
        .find("[name=publishedYear]")
        .val(),
      pagecount: $(event.currentTarget)
        .find("[name=pagecount]")
        .val()
    };

    // alert('AA');
    // alert(book.seller);a
    // alert(book.title);
    // alert(book.categories);
    // alert(book.publisher);
    // alert(book.price);
    // alert(book.publishedYear);
    // alert(book.pagecount);

    $.ajax({
      url: apiServer + "/book/updateBook",
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify({
        seller: $(event.currentTarget)
          .find("[name=id]")
          .val(),
        title: $(event.currentTarget)
          .find("[name=title]")
          .val(),
        categories: $(event.currentTarget)
          .find("[name=categories]")
          .val(),
        publisher: $(event.currentTarget)
          .find("[name=publisher]")
          .val(),
        price: {
          amount: $(event.currentTarget)
            .find("[name=price]")
            .val()
        },
        publishedYear: $(event.currentTarget)
          .find("[name=publishedYear]")
          .val(),
        pagecount: $(event.currentTarget)
          .find("[name=pagecount]")
          .val()
      }),
      success: data => {
        alert(data.status);
      }
    });
  });

  $("#bookCreateBySeller").on("submit", event => {
    event.preventDefault();
    // var values = {
    //     username: $(event.currentTarget).find('[name=title]').val(),
    //     first_name: $(event.currentTarget).find('[name=first_name]').val()
    // };
    var book = {
      seller: $(event.currentTarget)
        .find("[name=id]")
        .val(),
      title: $(event.currentTarget)
        .find("[name=title]")
        .val(),
      author: $(event.currentTarget)
        .find("[name=author]")
        .val(),
      categories: $(event.currentTarget)
        .find("[name=categories]")
        .val(),
      publisher: $(event.currentTarget)
        .find("[name=publisher]")
        .val(),
      publishedDate: $(event.currentTarget)
        .find("[name=publishedYear]")
        .val(),
      price: {
        amount: $(event.currentTarget)
          .find("[name=price]")
          .val()
      },
      language: $(event.currentTarget)
        .find("[name=language]")
        .val(),
      pagecount: $(event.currentTarget)
        .find("[name=pagecount]")
        .val()
    };

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
      url: apiServer + "/book/addBook",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        seller: $(event.currentTarget)
          .find("[name=id]")
          .val(),
        title: $(event.currentTarget)
          .find("[name=title]")
          .val(),
        authors: [
          $(event.currentTarget)
            .find("[name=author]")
            .val()
        ],
        categories: $(event.currentTarget)
          .find("[name=categories]")
          .val(),
        publisher: $(event.currentTarget)
          .find("[name=publisher]")
          .val(),
        publishedDate: $(event.currentTarget)
          .find("[name=publishedYear]")
          .val(),
        price: {
          amount: $(event.currentTarget)
            .find("[name=price]")
            .val()
        },
        language: $(event.currentTarget)
          .find("[name=language]")
          .val(),
        pagecount: $(event.currentTarget)
          .find("[name=pagecount]")
          .val()
      }),
      success: data => {
        alert(data.status);
      }
    });
  });

  $("#register").on("submit", event => {
    event.preventDefault();

    const user = {
      username: $(event.currentTarget)
        .find("[name=username]")
        .val(),
      first_name: $(event.currentTarget)
        .find("[name=first_name]")
        .val(),
      last_name: $(event.currentTarget)
        .find("[name=last_name]")
        .val(),
      password: $(event.currentTarget)
        .find("[name=password]")
        .val(),
      address: {
        address: $(event.currentTarget)
          .find("[name=address]")
          .val(),
        pincode: $(event.currentTarget)
          .find("[name=pincode]")
          .val(),
        city: $(event.currentTarget)
          .find("[name=city]")
          .val(),
        state: $(event.currentTarget)
          .find("[name=state]")
          .val(),
        country: $(event.currentTarget)
          .find("[name=country]")
          .val()
      }
    };
    $.ajax({
      url: apiServer + "/user/register",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        username: $(event.currentTarget)
          .find("[name=username]")
          .val(),
        first_name: $(event.currentTarget)
          .find("[name=first_name]")
          .val(),
        last_name: $(event.currentTarget)
          .find("[name=last_name]")
          .val(),
        usertype: $(event.currentTarget)
          .find("[name=usertype]")
          .val(),
        password: $(event.currentTarget)
          .find("[name=password]")
          .val(),
        address: {
          address: $(event.currentTarget)
            .find("[name=address]")
            .val(),
          pincode: $(event.currentTarget)
            .find("[name=pincode]")
            .val(),
          city: $(event.currentTarget)
            .find("[name=city]")
            .val(),
          state: $(event.currentTarget)
            .find("[name=state]")
            .val(),
          country: $(event.currentTarget)
            .find("[name=country]")
            .val()
        }
      }),
      success: data => {
        alert(data.status);
        setTimeout(2000, () => {
          window.location = "/";
        });
      }
    });
  });

  //Search for books.
  $("#searchForm").on("submit", e => {
    e.preventDefault();

    const searchTerm = $(e.currentTarget)
      .find("[name=searchText]")
      .val();
    $.get(apiServer + "/book/search?q=" + searchTerm, res => {
      const searchContainer = $("#searchResultsContainer");
      $.each(res, (i, book) => {
        const thumbnail = book["image"]
          ? book["image"]["thumbnail"]
          : "/images/books.jpg";
        const markup = `<div class="col-sm-2 my-2"><div data-id=${book._id} class="card book">
         <img class="card-img-top" src="${thumbnail}">
          <div class="card-body"><h6 class="card-subtitle">${
            book.title
          }</h6><p class="mb-2 text-muted card-text">${book.authors.join(
          ", "
        )}</p></div></div></div>`;
        searchContainer.append(markup);
      });
      $('.book').on("click", e => {
        e.preventDefault();
        window.location = '/books?id=' + $(e.currentTarget).attr('data-id');
      })
    });
  });

  //Login form
  $("#loginForm").on("submit", e => {
    e.preventDefault();

    const username = $(e.currentTarget)
      .find("[name=username]")
      .val();
    const password = $(e.currentTarget)
      .find("[name=password]")
      .val();
    $.ajax({
      url: "/login",
      method: "post",
      data: { username: username, password: password },
      error: err => {
        alert("Login failed. Please try again.");
      },
      success: (user) => {
        if(user.usertype === 'admin'
            || user.usertype === 'seller'
            || user.usertype === 'moderator') {
          window.location = "/loginSuccess";
        } else {
          window.location = "/loginSuccess";
        }
      }
    });
  });
});
