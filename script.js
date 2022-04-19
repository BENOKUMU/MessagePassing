const msg_list = document.getElementById("send-messages");
const msg_input = document.getElementById("message-input");
const no_msg = document.getElementById("no-msg");

function sendMessage() {
    linode = document.createElement("li");
    textnode = document.createTextNode(msg_input.value);

    linode.appendChild(textnode);

    msg_list.appendChild(linode);

    msg_input.value = '';

    msg_list.removeChild(no_msg);
};