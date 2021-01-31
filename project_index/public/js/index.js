$(document).on('ready', function() {

    var store_name = "";

    // 가게 클릭 (자주가는)
    $('.table_body_fre').click(function(){
      var tr = $(this);
      var strname = tr.find('td:eq(0)').text();
      store_name = strname;
      $('.modal-wrapper-addWorker').toggleClass('open');
      $('.modal_shopname').empty();
      $('.modal_shopname').append('<text>' + store_name + ' 정보 </text>');

    });

    // 가까운 가게
    $('.table_body_near').click(function(){
      var tr = $(this);
      var strname = tr.find('td:eq(0)').text();
      store_name = strname;
      $('.modal-wrapper-addWorker').toggleClass('open');
      $('.modal_shopname').empty();
      $('.modal_shopname').append('<text>' + store_name + ' 정보 </text>');
    });


    $(document).on('click','.btn-close-addWorker',function(e){
      $('.modal-wrapper-addWorker').toggleClass('open');
      $('#service').toggleClass('blur-it');
  
      store_name = "";
  
    });


    // 쇼핑하기 클릭
    $('#goShop').click(function(){
      location.href="shop?shopname=" + store_name;
    });

});