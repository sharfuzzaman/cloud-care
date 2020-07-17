$(document).ready(function() {
    $(".ttsInput input").prop({checked:true});
    var inputValue;
        audioFile = $('.audio');
    function playButton() {
        $('#playButtonWeb').css("display", "block")
        $('.playCommon').css("display", "none")
    }
    function pauseAudion() {
        audioFile.trigger('pause');
    }

    $("#playButtonWeb").click(function() {
        $('.loading').css("display", "block")
        $("#playButtonWeb").css("display", "none")
        var audioSrc = $('audio').attr('src');
        if (audioSrc == null) {
            playAudio();
            $('#replayButtonWeb').click();
        }
        else {
            audioFile.trigger('play');
            timeUpdate();
            $('.loading').css("display", "none")
            $('.playCommon').css("display", "block")
            $('#playpauseButtonWeb').css("display", "none")
        }
        
    })

    $("#pauseButtonWeb").click(function() {
        audioFile.trigger('pause');
        $('#playpauseButtonWeb').css("display", "block")
        $(this).css("display", "none")
    })
    $("#playpauseButtonWeb").click(function() {
        audioFile.trigger('play');
        timeUpdate();
        $(this).css("display", "none")
        $('#pauseButtonWeb').css("display", "block")
    })
    $("#stopButtonWeb").click(function() {
        var audio = document.getElementById('audio');
            audio.addEventListener('timeupdate', function () {
                var _currentTime = parseFloat(audio.currentTime);
            }, false);
        audioFile.prop("currentTime","0");
        audioFile.trigger('pause');
        playButton();
    })
    $("#replayButtonWeb").click(function() {
        audioFile.prop("currentTime","0");
        audioFile.trigger('play');
        timeUpdate();
    })
    function timeUpdate() {
        var audio = document.getElementById("audio");
        audio.addEventListener('timeupdate', function(event) {
        totalDuration = $('#audio')[0].duration,
            currentTime = parseFloat(audio.currentTime);
            if(totalDuration == currentTime) {
                playButton();
            }
        })
    }
    function srcClear() {
        var audiovalue = $('audio').attr('src');
        $('audio').removeAttr('src')
        playButton();
        $('.inputError, .inputInValid').css("display","none")
    }
    $('.list-unstyled .v, .list-unstyled .v1').click(function() {
        srcClear();

    })
    function radioInactive() {
        $(".ttsInput input").prop({checked:false})
        $('.container').css("opacity", ".5")
    }

    function playAudio(inputValue, service, voice) {
        var value = $('.bigDataWrapper p, .ttsConnect button').text()
            // correctedContent = value.replace(/Try Out/g, "").replace(/Schedule a Consultation/g, "")
            correctedContent = value;
            inputLength = $(".ttsInput textarea").val().length;
            inputText = $(".ttsInput textarea").val()
            letter = /[^\x00-\x7F]+/g;
        if(inputLength == 0) {
            inputValue = correctedContent;
            $('#inputType').addClass("static")
            $('#inputType').removeClass("dynamic")
        }
        else {
            inputValue = $(".ttsInput textarea").val();
            $('#inputType').addClass("dynamic")
            $('#inputType').removeClass("static")
        }
        if (inputLength > 300) {
            $('.inputError').css("display","block")
        }
        if (inputText.match(letter)) {
            $('.inputInValid').css("display", "block")
        }
        else {
            $('.inputInValid').css("display", "none")
        }
        if($('.ttsInput input').prop("checked") == false){
            if (inputLength == 0) {
                $(".ttsInput input").prop({checked:true})
            }
        }
        var value1 = inputValue;
            value2 = $( ".ttsService .selected" ).text();
            value3 = $( ".ttsVoice .selected" ).text();
        if(inputValue != '' && inputLength <= 300 && !(inputText.match(letter))) {
            var ttsServiceValue = $(".ttsService .selected").attr("data-id");
                ttsVoiceValue = $(".ttsVoice .selected").attr("data-id");
                inputTypeValue = $('#inputType').attr('class');
        $.ajax({
                type: "POST",
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                processData: false,
                url: "https://tts.qburst.build/tts",
                data: JSON.stringify({
                        "inputText": inputValue,
                        "provider": ttsServiceValue,
                        "voicetype": ttsVoiceValue,
                        "inputType": inputTypeValue
                        }),
                success: function (response) {
                    var audioResponse = response.audio_path;
                    $('.audio').attr('src',"https://tts.qburst.build" + audioResponse);
                    audioFile.trigger('play'); 
                    if($(".ttsInput textarea").val().length <= 300) {
                        $(".loading").css("display", "none")
                        $("#pauseButtonWeb, #stopButtonWeb, #replayButtonWeb").css("display", "block")
                        timeUpdate()
                    }
                },
                error: function (response) {
                    alert("error")
                }
            });
            
        }
        else {
            $('.loading').css("display", "none")
            $("#playButtonWeb").css("display", "block")
        }

    }
    $(".ttsInput textarea").bind('paste', function() {
        radioInactive()
    });	
    $(".ttsInput textarea").keyup(function() {
        radioInactive()
    })
    $(".ttsInput textarea").keyup(function(){
        srcClear();
        var currentText = $(this).val();
        if(currentText.length == 0) {
            $(".ttsInput input").prop({checked:true})
            $('.container').css("opacity", "1")
        }
    });
    $('.container').click(function() {
        srcClear();
    })
    $('.ttsInput textarea').click(function() {
        $('.inputError, .inputInValid').css("display","none")
    })

    $('input').click(function(){
        if($(this).prop("checked") == true){
            $('.container').css("opacity", "1")
            $('textarea').val('')
        }
    });

    /*dropdown scripts*/
    $(window).click(function() {
        $('.list-unstyled').removeClass('drop');
        $('.list-unstyled li:not(:first-child)').css("display", "none");
    });

    $('.list-unstyled').click(function(event){
        event.stopPropagation();
    });
    $(".ttsService").on( "click", function() {
        $('.ttsVoice li:not(.initial)').css("display", "none")
        $(this).toggleClass('drop');
        $('.ttsVoice').removeClass('drop');
        $('.serviceError').css("display", "none")
    });
    $(".ttsVoice").on( "click", function() {
        $('.ttsService li:not(.init)').css("display", "none");
        $(this).toggleClass('drop');
        $('.ttsService').removeClass('drop');
        $('.voiceError').css("display", "none")
    });
    $(".ttsService").on("click", ".init", function() {
        $(this).closest(".ttsService").children('li:not(.init)').toggle();
    });

    var allOption = $(".ttsService").children('li:not(.init)');
    $(".ttsService").on("click", "li:not(.init)", function() {
        allOption.removeClass('selected');
        $(this).addClass('selected');
        $(".ttsService").children('.init').html($(this).html());
        allOption.toggle();
    });
    $(".ttsVoice").on("click", ".initial", function() {
        $(this).closest(".ttsVoice").children('li:not(.initial)').toggle();
    });

    var allOptions = $(".ttsVoice").children('li:not(.initial)');
    $(".ttsVoice").on("click", "li:not(.initial)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $(".ttsVoice").children('.initial').html($(this).html());
        allOptions.toggle();
    });
})