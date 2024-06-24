function loader() {
  var tl = gsap.timeline();
  tl.from(".line h1,.line h2", {
    y: 150,
    stagger: 0.1,
  });

  tl.to(".loader", {
    opacity: 0,
    delay: 1.8,
  });
  gsap.from(".linepart", {
    opacity: 0,
    duration: 1,
    onStart: function () {
      var timer = document.querySelector(".linepart h5");
      var count = 0;
      setInterval(function () {
        if (count < 100) count++;
        timer.textContent = count;
      }, 25);
    },
  });
  gsap.to(".line h2", {
    opacity: 0,
    repeat: -1,
    duration: 1.5,
  });
  tl.to(".loader", {
    display: "none",
  });
  gsap.from(".page1", {
    y: 1000,
    opacity: 0,
    delay: 3,
  });
  tl.from(".nav", {
    y: -100,
    // stagger:.1,
    opacity: 0,
  });
  tl.from(".one,.two,.three,.four", {
    y: 150,
    stagger: 0.1,
  });
}
loader();

function cursor() {
  window.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.clientX,
      y: dets.clientY,
      opacity: 1,
    });
  });
}
cursor();
Shery.makeMagnet(".magnet", {});

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241529912187108},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
}

sheryAnimation()
var img=document.querySelector('.video img')
var video=document.querySelector('.video video')
var videodiv=document.querySelector(".video")
videodiv.addEventListener("mouseenter",function(){
  videodiv.addEventListener("mousemove",function(dets){
      gsap.to(".cursor",{
        display:"none"
      })
      gsap.to(".videocursor",{
        left:dets.x - 470,
        top:dets.y - 200
      })
    })
    
    videodiv.addEventListener("click",function(){
    var flag=0;
    if(flag==0){
      video.play();
      video.style.opacity=1;
      img.style.opacity=0;
      flag=1;
    }
    else{
      img.style.opacity=1;
      video.style.opacity=0;
      video.pause()
      flag=0;
    }
  })
})
videodiv.addEventListener("mouseleave",function(){
  gsap.to(".cursor",{
    display:"initial"
  })
  gsap.to(".videocursor",{
    top:"-10%",
    right:"15%"
  })
})

function flaganime(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      x:dets.clientX,
      y:dets.clientY
    })
  })
  document.querySelector("#hover").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
      opacity:1
    })
  })
  document.querySelector("#hover").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
      opacity:0
    })
  })
}
flaganime()
// gsap.to('.main h1',{
//   onStart:function(){
//       $('h1').textillate({ in: { effect: 'fadeIn' } });
//   }
// })

// var texth1=document.querySelector("#texth1")
// var texth2=document.querySelector("#texth2")
// var tl2=gsap.timeline()

// var clutter1="";
// texth1.textContent.split("")
// .forEach(function(e){
//     if(e==="") clutter1+=`<span>$nbsp;</span>`
//     clutter1+=`<span>${e}</span>`;
// })
// texth1.addEventListener("mouseover",function(){
//   gsap.to('#texth1>span',{
//     opacity:0,
//     stagger:.2
//   })
// })
// var clutter2="";
// texth2.textContent.split("")
// .forEach(function(e){
//     if(e==="") clutter2+=`<span>$nbsp;</span>`
//     clutter2+=`<span>${e}</span>`;
// })

gsap.from("#page3 h1",{
  transform:"translateY(100%)",
  scrollTrigger:{
    scroller:'body',
    trigger:'.page3-heading',
    start:'top 70%',

  }
})
gsap.from(".page4 h1",{
  transform:"translateY(100%)",
  scrollTrigger:{
    scroller:'body',
    trigger:'.page4-heading',
    start:'top 70%',

  }
})
gsap.from(".contact h1",{
  transform:"translateY(100%)",
  scrollTrigger:{
    scroller:'body',
    trigger:'.contact-heading',
    start:'top 70%',

  }
})