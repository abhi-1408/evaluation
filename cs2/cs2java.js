
async function loadimage(item = "nature", page = "1") {
    var data = await fetch('https://pixabay.com/api/?key=' + config.apiKey + '&q=' + item + '&page=' + page + '&pretty=true').then(res => res.json())
    return data
    // const myHeaders = new Headers();

    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Authorization', '563492ad6f917000010000015f905370a6a04eb2b74ea73589fb3414');
    // var data = await fetch('https://api.pexels.com/v1/search?query=' + item,
    //     {
    //         method: 'GET',
    //         mode: 'cors',
    //         // credentials: 'include',
    //         // headers: {
    //         //     'Access-Control-Allow-Origin': '*',
    //         //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //         //     "Authorization": 'Bearer 563492ad6f917000010000015f905370a6a04eb2b74ea73589fb3414'
    //         // }
    //         headers: {
    //             'Authentication': 'Bearer 563492ad6f917000010000015f905370a6a04eb2b74ea73589fb3414',
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }

    //     }).then(res => console.log('got res', res))
    //     .catch(err => console.log('erros', err))


    // console.log('data is ', data)
    // return data
}


var searchbut = document.getElementById('search')
searchbut.addEventListener('click', async () => {

    let res = await loadimage()

    console.log('res is', res)
    applydata(res)

})


function applydata(data) {

    let cont = document.getElementById('contents')
    cont.innerHTML = ''
    console.log('in child', data, cont)
    data.hits.map((ele, ind) => {
        if (ind < 9) {
            r1 = document.createElement('div')
            // r1.textContent = ele['id']
            r1.classList.add('icon_dim')
            // r1.innerHTML = '<img src=' + ele['previewURL'] + '>'
            r2 = document.createElement('img')
            r2.src = ele['previewURL']
            r1.appendChild(r2)
            cont.appendChild(r1)

        }
        // let img = document.createElement('img')
        // img.src = ele['pageURL']
        // img.classList.add('icon_dim')
    })
    prev = 1
    next = 10
    applyPage(data.total)
}


function applydata1(data) {

    let cont = document.getElementById('contents')
    cont.innerHTML = ''
    console.log('in child', data, cont)
    data.hits.map((ele, ind) => {
        if (ind < 9) {
            r1 = document.createElement('div')
            // r1.textContent = ele['id']
            r1.classList.add('icon_dim')
            // r1.innerHTML = '<img src=' + ele['previewURL'] + '>'
            r2 = document.createElement('img')
            r2.src = ele['previewURL']
            r1.appendChild(r2)
            cont.appendChild(r1)

        }
        // let img = document.createElement('img')
        // img.src = ele['pageURL']
        // img.classList.add('icon_dim')
    })
    // applyPage(data.total)
}

// var testing = document.getElementById('testing')
// testing.addEventListener('click', test)

function test() {
    console.log('test clicked')
    applyPage(100)
}

async function disp(page) {
    search = document.getElementById('search_item')
    console.log('search', search.value)
    console.log('page chg', page.target.id)
    res = await loadimage(search.value, page.target.id)
    applydata(res)

}


async function disp1(page) {
    search = document.getElementById('search_item')
    console.log('search', search.value)
    console.log('page chg', page)
    res = await loadimage(search.value, page)
    applydata1(res)

}

async function disp2(page) {
    search = document.getElementById('search_item')
    console.log('search', search.value)
    console.log('page chg', page.target.id)
    res = await loadimage(search.value, page.target.id)
    applydata1(res)

}

var pageSize = 10
var totalPage
var prev = 1
var next = 10

function nextpages(e) {
    if (e.target.id == 'next') {
        prev = prev + 1
        next = next + 1
    }
    else {
        if (prev > 1) {
            prev = prev - 1
            next = next - 1
        }

    }

    let p1 = document.getElementById('page')
    p1.innerHTML = ''
    var b1 = document.createElement('button')
    b1.textContent = '<'
    b1.id = 'prev'
    b1.addEventListener('click', (e) => nextpages(e))
    p1.appendChild(b1)
    for (let i = prev; i < totalPage; i++) {
        if (i <= next) {

            var b = document.createElement('button')
            b.textContent = i
            b.id = i
            b.addEventListener('click', (e) => disp2(e))
            p1.appendChild(b)
        }
        else {
            break
        }

    }

    var b2 = document.createElement('button')
    b2.textContent = '>'
    b2.id = 'next'
    b2.addEventListener('click', (e) => nextpages(e))
    p1.appendChild(b2)
    disp1(next)
}

function applyPage(total = 100) {
    totalPage = Math.floor(total / pageSize)
    let p1 = document.getElementById('page')
    p1.innerHTML = ''
    var b1 = document.createElement('button')
    b1.textContent = '<'
    b1.id = "prev"
    b1.addEventListener('click', (e) => nextpages(e))
    p1.appendChild(b1)
    for (let i = 1; i < totalPage; i++) {
        if (i <= 10) {

            var b = document.createElement('button')
            b.textContent = i
            b.id = i
            b.addEventListener('click', (e) => disp(e))
            p1.appendChild(b)
        }
        else {
            break
        }

    }

    var b2 = document.createElement('button')
    b2.textContent = '>'
    b2.id = "next"
    b2.addEventListener('click', (e) => nextpages(e))
    p1.appendChild(b2)
}


var timeout
function updateResult() {

    search = document.getElementById('search_item')
    console.log('search value is:', search.value)
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
        console.log('executing after debounced by 2sec')
        let specific_data = await loadimage(search.value)
        applydata(specific_data)

    }, 2000)


}