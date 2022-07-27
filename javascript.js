




var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#convert_text")

var instructions = $("#instructions")

var content = ''



recognition.continuous = true

// recognition is started


recognition.onstart = function() {

 instructions.text(" [ التعرف على الصوت قيد التشغيل  ] ")

}


recognition.onspeechend = function() {

 instructions.text(" [ غير نشط ] ")

}


recognition.onerror = function() {

 instruction.text(" [ حاول مجدداً ] ")

}

$("#click_to_convert").click(function(event) {

 recognition.start()

})


recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
    recognition.lang = 'ar';
    convert_text.innerHTML = transcript;
});
