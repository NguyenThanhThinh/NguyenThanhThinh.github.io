
(function () {

  $("#lunrsearchresults").on('click', '#btnx', function () {
    $('#lunrsearchresults').hide(1000);
    $("body").removeClass("modal-open");
  });

  console.log(`%c
  Contact :
  E: thanhthinhcntt@gmail.com
  `, 'background: #4caf50; color: #fff; font-size: 32px;');

  var options = {
    classname: 'topnav',
    id: 'MagicMenu'
  };
  var nanobar = new Nanobar(options);
  nanobar.go(30);
  nanobar.go(76);
  nanobar.go(100);

})();
