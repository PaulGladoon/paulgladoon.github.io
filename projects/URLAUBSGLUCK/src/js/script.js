$(function() {
  $('.bxslider').bxSlider();

  function grid() {
              var $grid = $('.grid');
              $grid.imagesLoaded(function () {
                  $grid.masonry({
                      itemSelector: '.grid-item',
                      columnWidth: function( containerWidth ) {
                          return (containerWidth / 3 - 10)
                      },
                      gutterWidth: 10
                  });
              });
          }

          function search() {
              $('.discover').find('div').remove();
              var $searchKey = $('.search__field').val();

              $.ajax({
                  url: 'https://pixabay.com/api/?key=2951867-b6c9b6e94df5c4f7988c7fd24&q=' + $searchKey + '&image_type=all' + '&category=people',
                  dataType: 'jsonp',
                  success: function (data) {

                      var $html = $('#container').html();
                      var $content = tmpl($html, data);
                      $('.discover').append($content);
                      grid();
                  },
                  error: function () {
                      alert('Error!');
                  }
              });
          }

          search();

          $('.search__button').on('click', function (e) {
              e.preventDefault();
              search();
              $('.search__field').val('');
          })
      }
  );
