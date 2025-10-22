const CLIENT_ID = '81528737345-5e89meouh1ldq7685puh3h3mkd731dl3.apps.googleusercontent.com';

window.onload = function() {
    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse
    });
};

    function initGoogle() {

        google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCredentialResponse, 
        });

        google.accounts.id.renderButton(
            document.getElementById("googleLoginBtn"),
            { 
                theme: "outline", 
                text: "continue_with",
                size: "large", 
                width: "300",
                shape: "pill"
            } 
        );
    }
    window.onload = initGoogle;

function handleCredentialResponse(response) {
    console.log("JWT: " + response.credential);
    document.getElementById("loginText").innerText = "Hai effettuato l'accesso con successo!";
}