export default init

function init() {
    const url = '/list'

    let req = fetch(url, null, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
        })
    }).then(res => res.json())

    req.then((res) => {
        console.log(res)
    })

}