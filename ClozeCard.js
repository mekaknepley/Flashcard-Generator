function ClozeCard(fullText, cloze) {
	if(this instanceof ClozeCard) {
		if (fullText.indexOf(cloze) != -1) {
	    	this.fullText = fullText;
	    	this.cloze = cloze;
	    	this.partial = fullText.replace(cloze, "...");
		}
		else {
			console.log("Invalid cloze format: \"" + cloze + "\" not contained in \"" + fullText + "\"");
		}
	}
	else {
    	return new ClozeCard(fullText, cloze);
  	}
}

module.exports = ClozeCard;