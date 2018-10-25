$(function() {
	$("#overviewNav").click(function() { showSection("#overview"); });
	$("#knowledgeNav").click(function() { showSection("#knowledge"); });
	$("#experienceNav").click(function() { showSection("#experience"); });
	$("#educationNav").click(function() { showSection("#education"); });
	$("#resumeNav").click(function() { showSection("#resume"); });
	$("#contactNav").click(function() { showSection("#contact"); });
	showSection("#overview");
});

function hideAll()
{
	hideSection("#overview");
	hideSection("#knowledge");
	hideSection("#experience");
	hideSection("#education");
	hideSection("#resume");
	hideSection("#contact");
}

function hideSection(sectionId)
{
	$(sectionId + 'Nav').parent().attr('class', '');
	$(sectionId).hide();
}

function showSection(sectionId)
{
	$("#navbarCollapse").removeClass("in").addClass("collapse");
	hideAll();
	$(sectionId + 'Nav').parent().attr("class", "active");
	$(sectionId).show();
}

