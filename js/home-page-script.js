function handleLoginRedirect()
{
    const loginButton = document.getElementById("login-button");

    loginButton.onclick = function()
    {
        window.location.href = "./pages/login-page.html";
    }

    const loginButton2 = document.getElementById("login-button2");

    loginButton2.onclick = function()
    {
        window.location.href = "./pages/login-page.html";
    }
}

window.onload = handleLoginRedirect;