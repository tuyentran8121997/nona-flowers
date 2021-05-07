function render(data){
	var html = '<div class="commentBox"><div class="leftPanelImg"><img src="../Images/2.jpg"></div><div class="rightPanel"><span style="font-weight:700;font-size:1.2rem;">'+data.name+'</span><span style="margin-left:10px;font-size:12px;" class="date">'+data.date+'</span><p style="margin-top:10px;">'+data.body+'</p></div><div class="clearfix"></div>';

	$('#comment').append(html);
}
$(document).ready(function(){
	var comment = [];
	if(!localStorage.commentData){
		localStorage.commentData = [];
	}else{
		comment = JSON.parse(localStorage.commentData);
	}

	for(var i=0; i<comment.length;i++){
		render(comment[i]);
	}
	$('#addComment').click(function(){
		let name = document.getElementById("name").value;
		let email = document.getElementById("email").value;
		let bodyText = document.getElementById("bodyText").value;

		if (name == "" || email == "" || bodyText == "" ) {
			return
		}

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yyyy = today.getFullYear();
		today = mm + '/' + dd + '/' + yyyy;

		var addObj = {
			"name":$('#name').val(),
			"date":today,
			"body":$('#bodyText').val(),
		};
		comment.push(addObj);
		localStorage.commentData = JSON.stringify(comment);
		render(addObj);
	});
});

