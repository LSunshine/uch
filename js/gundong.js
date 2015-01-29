// JavaScript Document
// 第一个左右滚动
 function DY_scroll(wraper,prev,next,img,speed,or)
 { 
  var wraper = $(wraper);
  var prev = $(prev);
  var next = $(next);
  var img = $(img).find('ul');
  var w = img.find('li').outerWidth(true);
  var s = speed;
  next.click(function()
       {
        img.animate({'margin-left':-w},function()
                  {
                   img.find('li').eq(0).appendTo(img);
                   img.css({'margin-left':0});
                   });
        });
  prev.click(function()
       {
        img.find('li:last').prependTo(img);
        img.css({'margin-left':-w});
        img.animate({'margin-left':0});
        });
  if (or == true)
  {
   ad = setInterval(function() { next.click();},s*2000);
   wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*2000);});

  }
 }
 DY_scroll('.img-scroll','.prev','.next','.img-list',3,true);// true为自动播放，不加此参数或false就默认不自动
// 第二个左右滚动 
  function DY_scroll1(wraper1,prev1,next1,img1,speed1,or1)
 { 
  var wraper1 = $(wraper1);
  var prev1 = $(prev1);
  var next1 = $(next1);
  var img1 = $(img1).find('ul');
  var w = img1.find('li').outerWidth(true);
  var s = speed1;
  next1.click(function()
       {
        img1.animate({'margin-left':-w},function()
                  {
                   img1.find('li').eq(0).appendTo(img1);
                   img1.css({'margin-left':0});
                   });
        });
  prev1.click(function()
       {
        img1.find('li:last').prependTo(img1);
        img1.css({'margin-left':-w});
        img1.animate({'margin-left':0});
        });
  if (or1 == true)
  {
   ad1 = setInterval(function() { next1.click();},s*2000);
   wraper1.hover(function(){clearInterval(ad1);},function(){ad1 = setInterval(function() { next1.click();},s*2000);});

  }
 }
 DY_scroll1('.img-scroll1','.prev1','.next1','.img-list1',3,true);

// 第三个左右滚动 
  function DY_scroll2(wraper2,prev2,next2,img2,speed2,or2)
 { 
  var wraper2 = $(wraper2);
  var prev2 = $(prev2);
  var next2 = $(next2);
  var img2 = $(img2).find('ul');
  var w = img2.find('li').outerWidth(true);
  var s = speed2;
  next2.click(function()
       {
        img2.animate({'margin-left':-w},function()
                  {
                   img2.find('li').eq(0).appendTo(img2);
                   img2.css({'margin-left':0});
                   });
        });
  prev2.click(function()
       {
        img2.find('li:last').prependTo(img2);
        img2.css({'margin-left':-w});
        img2.animate({'margin-left':0});
        });
  if (or2 == true)
  {
   ad2 = setInterval(function() { next2.click();},s*2000);
   wraper2.hover(function(){clearInterval(ad2);},function(){ad2 = setInterval(function() { next2.click();},s*2000);});

  }
 }
 DY_scroll2('.img-scroll2','.prev2','.next2','.img-list2',3,true);

// 第四个左右滚动  
  function DY_scroll3(wraper3,prev3,next3,img3,speed3,or3)
 { 
  var wraper3 = $(wraper3);
  var prev3 = $(prev3);
  var next3 = $(next3);
  var img3 = $(img3).find('ul');
  var w = img3.find('li').outerWidth(true);
  var s = speed3;
  next3.click(function()
       {
        img3.animate({'margin-left':-w},function()
                  {
                   img3.find('li').eq(0).appendTo(img3);
                   img3.css({'margin-left':0});
                   });
        });
  prev3.click(function()
       {
        img3.find('li:last').prependTo(img3);
        img3.css({'margin-left':-w});
        img3.animate({'margin-left':0});
        });
  if (or3 == true)
  {
   ad3 = setInterval(function() { next3.click();},s*2000);
   wraper3.hover(function(){clearInterval(ad3);},function(){ad3 = setInterval(function() { next3.click();},s*2000);});

  }
 }
 DY_scroll3('.img-scroll3','.prev3','.next3','.img-list3',3,true);

// 第五个左右滚动  
  function DY_scroll4(wraper4,prev4,next4,img4,speed4,or4)
 { 
  var wraper4 = $(wraper4);
  var prev4 = $(prev4);
  var next4 = $(next4);
  var img4 = $(img4).find('ul');
  var w = img4.find('li').outerWidth(true);
  var s = speed4;
  next4.click(function()
       {
        img4.animate({'margin-left':-w},function()
                  {
                   img4.find('li').eq(0).appendTo(img4);
                   img4.css({'margin-left':0});
                   });
        });
  prev4.click(function()
       {
        img4.find('li:last').prependTo(img4);
        img4.css({'margin-left':-w});
        img4.animate({'margin-left':0});
        });
  if (or4 == true)
  {
   ad4 = setInterval(function() { next4.click();},s*2000);
   wraper4.hover(function(){clearInterval(ad4);},function(){ad4 = setInterval(function() { next4.click();},s*2000);});

  }
 }
 DY_scroll4('.img-scroll4','.prev4','.next4','.img-list4',3,true);
 // 第六个左右滚动  
  function DY_scroll5(wraper5,prev5,next5,img5,speed5,or5)
 { 
  var wraper5 = $(wraper5);
  var prev5 = $(prev5);
  var next5 = $(next5);
  var img5 = $(img5).find('ul');
  var w = img5.find('li').outerWidth(true);
  var s = speed5;
  next5.click(function()
       {
        img5.animate({'margin-left':-w},function()
                  {
                   img5.find('li').eq(0).appendTo(img5);
                   img5.css({'margin-left':0});
                   });
        });
  prev5.click(function()
       {
        img5.find('li:last').prependTo(img5);
        img5.css({'margin-left':-w});
        img5.animate({'margin-left':0});
        });
  if (or5 == true)
  {
   ad5 = setInterval(function() { next5.click();},s*2000);
   wraper5.hover(function(){clearInterval(ad5);},function(){ad5 = setInterval(function() { next5.click();},s*2000);});

  }
 }
 DY_scroll5('.img-scroll5','.prev5','.next5','.img-list5',3,false);
  // 第七个左右滚动  
  function DY_scroll6(wraper6,prev6,next6,img6,speed6,or6)
 { 
  var wraper6 = $(wraper6);
  var prev6 = $(prev6);
  var next6 = $(next6);
  var img6 = $(img6).find('ul');
  var w = img6.find('li').outerWidth(true);
  var s = speed6;
  next6.click(function()
       {
        img6.animate({'margin-left':-w},function()
                  {
                   img6.find('li').eq(0).appendTo(img6);
                   img6.css({'margin-left':0});
                   });
        });
  prev6.click(function()
       {
        img6.find('li:last').prependTo(img6);
        img6.css({'margin-left':-w});
        img6.animate({'margin-left':0});
        });
  if (or6 == true)
  {
   ad6 = setInterval(function() { next6.click();},s*2000);
   wraper6.hover(function(){clearInterval(ad6);},function(){ad6 = setInterval(function() { next6.click();},s*2000);});

  }
 }
 DY_scroll6('.img-scroll6','.prev6','.next6','.img-list6',4,true);
   // 第八个左右滚动  
  function DY_scroll7(wraper7,prev7,next7,img7,speed7,or7)
 { 
  var wraper7 = $(wraper7);
  var prev7 = $(prev7);
  var next7 = $(next7);
  var img7 = $(img7).find('ul');
  var w = img7.find('li').outerWidth(true);
  var s = speed7;
  next7.click(function()
       {
        img7.animate({'margin-left':-w},function()
                  {
                   img7.find('li').eq(0).appendTo(img7);
                   img7.css({'margin-left':0});
                   });
        });
  prev7.click(function()
       {
        img7.find('li:last').prependTo(img7);
        img7.css({'margin-left':-w});
        img7.animate({'margin-left':0});
        });
  if (or7 == true)
  {
   ad7 = setInterval(function() { next7.click();},s*2000);
   wraper7.hover(function(){clearInterval(ad7);},function(){ad7 = setInterval(function() { next7.click();},s*2000);});

  }
 }
 DY_scroll7('.img-scroll7','.prev7','.next7','.img-list7',4,true);
    // 第九个左右滚动  
function DY_scroll8(wraper8,prev8,next8,img8,speed8,or8)
 { 
  var wraper8 = $(wraper8);
  var prev8 = $(prev8);
  var next8 = $(next8);
  var im8 = $(img8);
  var img8 = $(img8).find('ul');
  var h = img8.outerHeight(true);
  var s = speed8;
  next8.click(function()
       {
	    
        im8.find('ul').eq(0).animate({'margin-top':-h},function()
                  {
					im8.find('ul').eq(0).css({'margin-top':0});
					im8.find('ul').eq(0).appendTo(im8);
					
                   });
				   
        });
  prev8.click(function()
       {
        img8.find('ul:last').prependTo(img8);
        img8.css({'margin-top':-5*h});
        img8.animate({'margin-top':0});
        });
  if (or8 == true)
  {
   ad8 = setInterval(function() { next8.click();},s*1000);
   wraper8.hover(function(){clearInterval(ad8);},function(){ad8 = setInterval(function() { next8.click();},s*2000);});

  }
 }
 DY_scroll8('.img-scroll8','.prev8','.next8','.img-list8',4,true);
 
 function DY_scroll10(wraper10,prev10,next10,img10,speed10,or10)
 { 
  var wraper10 = $(wraper10);
  var prev10 = $(prev10);
  var next10 = $(next10);
  var img10 = $(img10).find('ul');
  var w = img10.find('li').outerWidth(true);
  var s = speed10;
  next10.click(function()
       {
        img10.animate({'margin-left':-w},function()
                  {
                   img10.find('li').eq(0).appendTo(img10);
                   img10.css({'margin-left':0});
                   });
        });
  prev10.click(function()
       {
        img10.find('li:last').prependTo(img10);
        img10.css({'margin-left':-w});
        img10.animate({'margin-left':0});
        });
  if (or10 == true)
  {
   ad10 = setInterval(function() { next10.click();},s*2000);
   wraper10.hover(function(){clearInterval(ad10);},function(){ad10 = setInterval(function() { next10.click();},s*2000);});

  }
 }
 DY_scroll10('.img-scroll10','.prev10','.next10','.img-list10',4,true);
 
 function DY_scroll11(wraper11,prev11,next11,img11,speed11,or11)
 { 
  var wraper11= $(wraper11);
  var prev11 = $(prev11);
  var next11 = $(next11);
  var img11 = $(img11).find('ul');
  var w = img11.find('li').outerWidth(true);
  var s = speed11;
  next11.click(function()
       {
        img11.animate({'margin-left':-w},function()
                  {
                   img11.find('li').eq(0).appendTo(img11);
                   img11.css({'margin-left':0});
                   });
        });
  prev11.click(function()
       {
        img11.find('li:last').prependTo(img11);
        img11.css({'margin-left':-w});
        img11.animate({'margin-left':0});
        });
  if (or11 == true)
  {
   ad11 = setInterval(function() { next11.click();},s*2000);
   wraper11.hover(function(){clearInterval(ad11);},function(){ad11 = setInterval(function() { next11.click();},s*2000);});

  }
 }
 DY_scroll11('.img-scroll5-5','.prev5-5','.next5-5','.img-list5-5',4,false);