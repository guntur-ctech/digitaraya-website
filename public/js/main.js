var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$('.carousel').carousel({
  interval: 6000
})

// DIGITARAYA
$(function() {
  //$('#program-manager').hide()
  //$('#it-administrator').hide()
  //$('#partnership-officer').hide()
  // $('#startup-relation-officer').hide()
  // $('#program-officer').hide()
  $('#partnership-manager').hide()
  $('#operations-manager').hide()

  $(".pos1").click(function() {
    // $('#partnership-officer, #program-manager, #startup-relation-officer, #program-officer').fadeOut(500,() => {
    $('#operations-manager').fadeOut(500, () => {
      $('#partnership-manager').fadeIn(300)
    })
  })

  $(".pos2").click(function() {
    $('#partnership-manager').fadeOut(500, () => {
      $('#operations-manager').fadeIn(300)
    })
  })
})

// DIGITARASA
/*$(function() {           
  // $('#head-of-accelerator').hide()
  $('#head-of-business-development').hide()
  $('#project-manager').hide()

  $(".career1").click(function() { 
    // $("#partnership-manager").show()
    $('#head-of-business-development, #project-manager').fadeOut(500,() => {
      $('#head-of-accelerator').fadeIn(300)
    })
  })

  $(".career2").click(function() { 
    // $("#partnership-manager").show()
    $('#head-of-accelerator, #project-manager').fadeOut(500,() => {
      $('#head-of-business-development').fadeIn(300)
    })
  })

  $(".career3").click(function() { 
    // $("#partnership-manager").show()
    $('#head-of-business-development, #head-of-accelerator').fadeOut(500,() => {
      $('#project-manager').fadeIn(300)
    })
  })

  $(".pos2").click(function() { 
      // $("#partnership-officer").show()
      $('#partnership-manager, #program-manager, #startup-relation-officer, #program-officer').fadeOut(500,() => {
        $('#partnership-officer').fadeIn(300)
      })
  })

  $(".pos3").click(function() { 
      // $("#program-manager").show()
      $('#partnership-officer, #partnership-manager, #startup-relation-officer, #program-officer').fadeOut(500,() => {
        $('#program-manager').fadeIn(300)
      })
  })

  $(".pos4").click(function() { 
      // $("#startup-relation-officer").show()
      $('#program-manager, #partnership-officer, #partnership-manager, #program-officer').fadeOut(500,() => {
        $('#startup-relation-officer').fadeIn(300)
      })
  })

  $(".pos5").click(function() { 
      // $("#program-officer").show()
      $('#startup-relation-officer, #program-manager, #partnership-officer, #partnership-manager').fadeOut(500,() => {
        $('#program-officer').fadeIn(300)
      })
  })
})*/

setTimeout(function() {
  $(document).ready(function() {
    $("#campaignPopup").modal('show');
  });
}, 2500);

console.log('%cWhat are you looking for?', 'color: white; font-size: 18px; font-weight: bold;');

}
/*
     FILE ARCHIVED ON 16:13:49 Dec 21, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:38:34 Apr 03, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 80.939
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.057
  RedisCDXSource: 0.661
  esindex: 0.007
  LoadShardBlock: 64.15 (3)
  PetaboxLoader3.datanode: 63.298 (4)
  load_resource: 103.113
  PetaboxLoader3.resolve: 60.623
*/