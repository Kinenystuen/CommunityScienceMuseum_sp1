const sendmessageButton = document.getElementById('sendmessage')
const newmailButton = document.getElementById('new_mail')
const message_area = document.getElementById('message_area')
const message_area_sent = document.getElementById('message_area_sent')
message_area_sent.style.display = 'none';

sendmessageButton.addEventListener('click', function () {
    message_area.style.display = 'none';
    message_area_sent.style.display = 'block';
});

newmailButton.addEventListener('click', function () {
    message_area.style.display = 'block';
    message_area_sent.style.display = 'none';
});

message_area_sent.style.height = message_area.clientHeight + 'px';