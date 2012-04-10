function doWork() {
    $.ajax(
        {
            url: 'Home/Boo',
            beforeSend: function () {
                $('#result').html('');

                $('#progress').fadeIn();

                setProgress(0);
                increaseProgress(0);
            },
            complete: function () {
                $('#progress').fadeOut();
            }
        }
    )
        .done(function (o) { $('#result').html(o.Message); });
    }

    function increaseProgress(initialProgress) {
        var timeout = 300;
        setTimeout(function () {
            if ($('#progress').is(':hidden') ) return;
            setProgress(initialProgress);
            increaseProgress(initialProgress + 20);
        }, timeout);
}

function setProgress(progress) {
    $('#progress').width(progress + "%");
    
//    $('#progress').html(progress);
}


$(document).ready(function () {
    $('#progress').hide();
    $('#ourButton').click(function () {
        doWork();
    });

    document.add('p').html(window.uri );
    $('.nav li').addClass('active');
});
