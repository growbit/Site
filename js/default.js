// $(document).ready(function () {
// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > 101) {
// 			$('.nav-container').addClass("f-nav logosmall");
// 			alert($(this).attr('.nav-container'))
// 		} else {
// 			$('.nav-container').removeClass("f-nav logosmall");
// 		}
// 	});
// 	$("a.anchor").anchorAnimate({offset:60});
// });
$(function () {
	// $('.nav-container').addClass("f-nav logosmall");
	var lastId,
	topMenu = $(".nav"),
	topMenuHeight = topMenu.outerHeight()+44,

    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    	var item = $($(this).attr("href"));
    	if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
	var href = $(this).attr("href"),
	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	$('html, body').stop().animate({ 
		scrollTop: offsetTop
	}, 800);
	e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   if (fromTop > 159) {	
   	$('.nav-container').addClass("f-nav logosmall");
   } else {
   	$('.nav-container').removeClass("f-nav logosmall");
   }

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
   	if ($(this).offset().top < fromTop)
   		return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
   	lastId = id;
       // Set/remove active class
       menuItems
       .parent().removeClass("active")
       .end().filter("[href=#"+id+"]").parent().addClass("active");
     }                   
   });
});
