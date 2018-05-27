$.extend({
	myajax:function(option){
		$.ajax({
			type:option.type||"get",
			url:option.url,
			data:option.data||null,
			cache:option.cache||false,
			success:function(data){
				if(data){
					if(option.success) option.success(data);
				}
			},
			beforeSend:function(xhr){
				if(option.beforeSend) option.beforeSend(xhr);
				$("#loading").show()
			},
			error:function(e){
				if(option.error) option.error(xhr);
				console.log(e)
			},
			complete:function(){
				if(option.complete) option.error(complete);
				$("#loading").hide()
				
				
			}
		});
	}
})
