$(document).ready(function(){
  
  window.onActn = function(){
    actn.get({
    path: "/signatures",
    success: function(data){
      if(data[0]){
        $("#script3").val($("#script3").text().replace("...loading...",data[0]['uuid']))
      }
    }
    })
  }
  
  $("button.jsRun").click(function(e){
    e.preventDefault();
    var code = $("#"+$(e.currentTarget).data("script")).val();
    eval(code);
  })
  
  $(".tabs a.handle").click(function(e){
    e.preventDefault();
    var $a = $(e.currentTarget);
    $(".tabs a.is-active").removeClass("is-active");
    $a.addClass("is-active");
    $(".tab").toggleClass("hide")
    
  })
})