var chars = "abcdefghijklmnopqrstuvwxyz"

function handleEncrypt() {
	// body...
	var plaintext = normalize(getById("plainText").value);
	if (validate(plaintext, 'Please enter some plaintext.')) return;
    var key = normalize(getById("key").value);
    var pc = normalize(getById("pc").value);
    if (validate(key, 'Please enter key.')) return;
    else getById("cipherText").value = Encrypt(plaintext, key, pc);
}

function Encrypt(plaintext, key, pc){
	var klen = key.length;
	if(pc == "") pc = "x";

	while (plaintext.length % klen !=0){
		plaintext += pc.charAt(0);
	}

	var colLength = plaintext.length / klen;
	var ciphertext = "";
	k=0;

	for(i=0;i<klen;i++){
		while (k<26){
			t = key.indexOf(chars.charAt(k));
			arrkw = key.split("");
			arrkw[t] = "_";
			key = arrkw.join("");
			if(t>=0) break; else k++;
		}
		for(j=0;j<colLength; j++)
			ciphertext += plaintext.charAt(j*klen+t);
	}
	return ciphertext;
}

function validate(text, message) {
    if (text.length < 1) {
        alert(message);
    }
}

function getById(id) {
    return document.getElementById(id);
}

function normalize(value) {
    return value.toLowerCase().replace(/[^a-z]/g, "");
}