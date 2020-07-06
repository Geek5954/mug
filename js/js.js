$('.textcenter').click(function(e){
  $($('.texts')[($(this).index())]).toggleClass('active');
});
$('.rightcontent').click(function(e){
  $($('.rightcontenttext')[($(this).index())]).toggleClass('active');
});