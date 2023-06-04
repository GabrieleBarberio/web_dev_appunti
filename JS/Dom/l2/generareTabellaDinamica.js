const $tbody = document.querySelector("#tbody");
const $errorDiv = document.querySelector("#error");

const state = {
    posts: [],
}

const generateTableRowHTML = (post) => {
    return `
    <tr> 
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
    </tr>
    `
}


const fetchData = async () => { //void func senza return
    try { 
        const response = await fetch("https://jsonplaceholder.typicode.com/posts") //fetch con un solo param fa una chiamata get, secondo param obj
        // const result = 
        state.posts = await response.json() 
    } catch (error) {
        console.error(error);
        renderError(error.message);
    } 
}

const renderError = (message) => {
    $errorDiv.innerHTML = message;
    $errorDiv.classList.add("active")
}

const clearError = () => {
    $errorDiv.innerHTML = "";
    $errorDiv.classList.remove("active");
}

const renderData = () => {
    const HTML = state.posts.map((post) => {
        return generateTableRowHTML(post)
    }).join("");

    $tbody.innerHTML = HTML;
}

const init = async () => {
    await fetchData();
    renderData();
}

init();
