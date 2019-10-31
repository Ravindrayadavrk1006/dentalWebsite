var slideIndex=0;
function showSlides()
{
    var i;
    var slides=document.getElementsByClassName("mySlides");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length)
        slideIndex=1;
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,3000);
}
var arrayImage=['images/21.jpg','images/7.jpg'];
    var arrayComment=['"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos accusantium corrupti corporis deserunt, cupiditate facilis, sit libero iusto fugiat aspernatur saepe harum natus error, reiciendis eum. Nisi, quis autem. Consequatur"','"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos accusantium corrupti corporis deserunt, cupiditate facilis, sit libero iusto fugiat aspernatur saepe harum natus error, reiciendis eum. Nisi, quis autem. Consequatur"']
    var arrayName=['Ravindra','Inshallah'];
    var arrayRelation=['Dental Patient','Dental Patient']
    var i=0;
function commentFun()
{
//    for( i=0;i<arrayImage.length;++i)
//    {
       document.getElementById('commentImage').src=arrayImage[i];
       document.getElementById('comment').innerHTML=arrayComment[i];
       document.getElementById('commenterName').innerHTML=arrayName[i];
       document.getElementById('commenterRelation').innerHTML=arrayRelation[i]; 
//    }
   if(i==arrayImage.length-1)
   {
       i=0;
   }
   ++i;

   setTimeout(commentFun,3000);
}