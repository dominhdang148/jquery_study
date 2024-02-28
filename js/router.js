const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocaltion();
};

const routes = {
    404: '/template/404.html',
    "/": '/template/index.html',
    "/about": "/template/about.html",
    "/contact": "/template/contact.html",
}


const handleLocaltion = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text())
    document.getElementById("main-page").innerHTML = html
}

window.onpopstate = handleLocaltion;
window.route = route;

handleLocaltion();