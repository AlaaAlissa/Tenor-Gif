var div_result = document.getElementById('test')
var btn = document.getElementById('btn')
var searshText = document.getElementById('searshText')
// var images = document.getElementById('img_number')
var img_number = document.getElementById('img_number')
// var imgNumber = img_number.value

btn.addEventListener('click', function(){
   var search_text = searshText.value
   var numbersimg = img_number.value
   $("#test").empty()
   if(search_text !== '' && numbersimg !== ''){
      call_api(search_text , numbersimg)

   }else {
      div_result.innerHTML = '<h3 class="error_msg">Please enter search text and number of images</h3>'
   }
})

function call_api(search , number){
   var xml = new XMLHttpRequest();
   xml.open('get' , 'https://api.tenor.com/v1/search?q='+search+'&key=K7O0P503S61E&limit='+number , true);
   xml.responseType = 'json'
   xml.send()
   xml.onreadystatechange = function(){
      if(xml.readyState === 4){
         var res = this.response.results;
         // var res_images = ''
         if(res.length >= 1){
            for( var i=0; i<res.length; i++){
               var img_src = res[i].media[0].gif.url
               var image_tag = document.createElement('img')
               image_tag.setAttribute('src',img_src)
               image_tag.setAttribute('class','images')
               div_result.append(image_tag)
               // res_images += '<img src='+img_src+' class="images" >'
               image_tag.addEventListener('mouseenter', function(){
                  $(this).css('width', '400px');
                  $(this).css('height', '400px');
               });
               image_tag.addEventListener('mouseout', function(){
                  $(this).css('width', '200px');
                  $(this).css('height', '200px');
               });
            }
            
         }else {
            div_result.innerHTML = '<h3 class="error_msg">Not found ... Please enter a new search text</h3>'
         }
         // div_result.innerHTML = res_imag
      }
      
   } 
}
    
