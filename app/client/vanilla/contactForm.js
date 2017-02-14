let contactForm

export default function init() {
    console.log('init form')
    contactForm = document.getElementById('contact-form')
    contactForm.addEventListener('submit', submit)
}

function submit(event) {
    event.preventDefault()
    let inputs = Array.from(contactForm.querySelectorAll('[name]'))
        
    if (inputs.filter(el => el.value).length < 3) {
        throw new Error('All inputs required')
    }

    let sendData = inputs.reduce(appendInputValue, {})

    let send = fetch('/api/send/email', {
        method: 'POST',
        body: JSON.stringify(sendData)
    })

    send.then((res) => {
        console.log(res)
    })

    
}

function fetch(url, { method, body}) {
    let xhr = new XMLHttpRequest()

    xhr.method = method
    xhr.open(method, url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Accept', 'application/json')

    xhr.send(body)

    return new Promise(function(resolve, reject) {
        xhr.onload  = function() {
            resolve(xhr.response)
        }
        xhr.onerror = function() {
            reject(JSON.parse(xhr.responseData))
        }
    })
}

function appendInputValue(current, next) {
    let name

    if (next.value) {
        name = next.getAttribute('name')
        current[name] = next.value
    }

    return current
}

