const $table = document.querySelector("#table");
const $prev = document.querySelector("#prev");
const $next = document.querySelector("#next");


const state = {
    posts: [], // copia di rendering
    _posts: [], // copia di cache
    paginationInfo: {
        page: 3,
        totalPages: 1,
        limit: 10,
        hasPrevPage: false,
        hasNextPage: false,
    }
};

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("remove-row")) {
        const id = target.dataset.id;
        state.posts = state.posts.filter((post) => post.id != id);
        renderHTML();
    }
}) 

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(response.ok){
            const data = await response.json();
            state.posts = data;
            state._posts = data;
        }else{
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
}


const manipulateData = () => {
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.page - 1);    
    state.posts = [...state._posts].splice(startIndex, state.paginationInfo.limit)
    state.paginationInfo.totalPages = Math.ceil(state._posts.length / state.paginationInfo.limit);
    state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1 ;
    state.paginationInfo.hasNextPage = state.paginationInfo.page < state.paginationInfo.limit ;

    if(!state.paginationInfo.hasNextPage){
        $next.setAttribute("disabled", true)
    }else{
        $next.removeAttribute("disabled")
    }

    if(!state.paginationInfo.hasPrevPage){
        $prev.setAttribute("disabled", true)
    }else{
        $prev.removeAttribute("disabled")
    }
}

const getData = async () => {
     await fetchData();
     manipulateData();
}

const generateTemplateHTML = (post) => {
    return `
        <tr>
            <td>${post.id}</td>
            <td>${post.userId}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td>
                <button class="remove-row" data-id="${post.id}">
                delete
                </button>
            </td>
        </tr>
    `
}

const renderHTML = () => {
    const HTML = state.posts.map((post) => generateTemplateHTML(post)).join("")
    $table.innerHTML = HTML;
}

const setEventListener = () => {
    $next.addEventListener("click", () => {
        state.paginationInfo.page += 1;
        manipulateData();
        renderHTML();
    })
    $prev.addEventListener("click", () => {
        state.paginationInfo.page -= 1;
        manipulateData();
        renderHTML();
    })
}

const init = async () => {
    await getData();
    renderHTML();
    setEventListener(); 
}

init();
