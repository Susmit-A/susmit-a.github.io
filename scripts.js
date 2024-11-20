$(function(){
    // Include header.html
    $.get("header.html", function(data){
      $("header").replaceWith(data);
    });
  });

  $(function(){
    // Include header.html
    $.get("footer.html", function(data){
      $("footer").replaceWith(data);
    });
  });


  $(function() {
    $("#header-placeholder").load("header.html", function() {
        // access control allow origin
      // Execute the active link highlighting script here
      var path = window.location.pathname;
      var page = path.split("/").pop();
    //   console.log('Current page:', page);

      var links = $('nav a.nav-link');
    //   console.log('Nav links found:', links.length);

      links.each(function() {
        var href = $(this).attr('href');
        // console.log('Link href:', href);
        if (href === page) {
          $(this).addClass('active');
        //   console.log('Active link:', $(this));
        }
      });
    });
  });
  