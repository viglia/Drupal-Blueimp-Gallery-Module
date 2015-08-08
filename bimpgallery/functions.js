(function ($) {
  Drupal.behaviors.bimpgalleryModule = {
    attach: function(context, settings) {
		

		$("body",context).append(
		'<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">\
		    <div class="slides"></div>\
		    <h3 class="title"></h3>\
		    <a class="prev">‹</a>\
		    <a class="next">›</a>\
		    <a class="close">×</a>\
		    <a class="play-pause"></a>\
		    <ol class="indicator"></ol>\
		</div>'
		);


		$(".field-name-field-image:has(.blueimp-img)").each(function(index){
				$(this).css("max-width","none !important");
				$(this).css("width","100%");

				$(this).find(".field-item").each(function(index){
					$(this).css("display","inline-block");
					$(this).css("margin","5px");
				}
			
			);//end each
			}
			
		);//end each

	
		$(".field-type-image").each(function( index ) {

			    $(this).find(".blueimp-img").click(function(){

				var imgArr = $(this).closest(".field-type-image").find(".blueimp-img").map(function() {
				  return $(this).attr("src").replace(/styles\/[A-Z-a-z0-9]*\/public\//g,"");
				})

				var options = {};
				options['container'] = '#blueimp-gallery';
				options['index'] = $(this).closest(".field-type-image").find(".blueimp-img").index($(this));
				for (var x in Drupal.settings.bimpgallery) {
				  options[x] = Drupal.settings.bimpgallery[x];
				}

			    	blueimp.Gallery(imgArr,options);

				});


		});//end field-type-image

    }//end attach
  }//end drupal.behavior
})(jQuery);

