//using jQuery we can get all elements with the class of 'question' and attach a click event
$('.question').on('click', function(e) {
    e.preventDefault(); //prevent the normal behavior of a link 
    //this is the thing that was clicked. so we save it as a variable so we can use over and over.
	  var self = $(this);
  
    //uncomment line 8 to check and see what this is in the console
    //console.log($(this));
    
   //add a class to the thing that was clicked to style it differently with CSS 
    self.toggleClass("active");
  
    //self now the thing that was clicked. go the the next element in the DOM,
    //which is the answer div and tell jQuery to slideDown the hidden question.
	  self.next().slideToggle(350);
});

//click the question again to close or click close to close.
$('.answer .close').on('click', function(e) {
  e.preventDefault();
  
  //find the answer div and slide it up, which is the parent of the close button
	$(this).parent().slideUp(350);
});
 