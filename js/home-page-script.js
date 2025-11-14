function handleLoginRedirect()
{
    const loginButton = document.getElementById("login-button");

    loginButton.onclick = function()
    {
        window.location.href = "./pages/login-page.html";
    }
}

window.onload = handleLoginRedirect;