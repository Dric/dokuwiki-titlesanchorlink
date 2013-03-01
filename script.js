jQuery(function () {
	jQuery(':header').each(function(){
		var id = jQuery(this).attr('id');
		var name = jQuery(this).text();
		jQuery(this).css('position', 'relative');
		jQuery(this).append('<a title="Link to '+name+'" id="anchor__'+id+'" class="__anchor" href="#'+id+'"><img src="'+DOKU_BASE+'lib/plugins/titlesanchorlink/images/anchor.png" class="__anchor_icon" /></a>');
	});
	jQuery(':header').mouseover(function() {
		var id = jQuery(this).attr('id');
    jQuery('#anchor__'+id).show();
  }).mouseout(function(){
    var id = jQuery(this).attr('id');
    jQuery('#anchor__'+id).hide();
  });
});