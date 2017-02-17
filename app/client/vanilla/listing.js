export default init

import '../scss/aptscroll.scss'

function init() {
    const url = '/list'
    let main = document.getElementById('main-properties')
    let row = main.querySelector('.row')

    main.hidden = false

    let req = fetch(url, null, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
        })
    }).then(res => res.json())

    req.then((res) => {
        console.log(res)
        let frag = build(res.listings)
        row.appendChild(frag)
    })

}

function build(list) {
    let frag = document.createDocumentFragment()

    list.map(createApt)
        .forEach(el => frag.appendChild(el))
    
    return frag
}

function createApt({id, name, summary, picture_url}) {
    let col = document.createElement('div')

    let card = document.createElement('div')
    let card__body = document.createElement('div')

    let card__image = document.createElement('div')
    let image = document.createElement('img')

    let card__title = document.createElement('h3')
    let aptName = document.createTextNode(name)

    let card__body__text = document.createElement('div')
    let aptText = document.createTextNode(summary)

    let card__action = document.createElement('div')
    let button = document.createElement('a')
    let buttonText = document.createTextNode('Pogledaj')    
    

    col.className = 'col col-xs-12 col-sm-4 col-lg-3 col--feature col-padd-sm'
    card.className = 'card'
    card__body.className = 'card__body'
    card__image.className = 'card__image'
    image.src = picture_url
    card__title.className = 'card__title'
    card__body__text.className = 'card__body__text'
    card__action.className = 'card__action'
    button.className = 'btn btn--primary'
    button.href = 'https://www.airbnb.com/rooms/' + id
    

    col.appendChild(card)
        card.appendChild(card__body)

            card__body.appendChild(card__image)
                card__image.appendChild(image)

            card__body.appendChild(card__title)
                card__title.appendChild(aptName)
                
            card__body.appendChild(card__body__text)
                card__body__text.appendChild(aptText)

            card__body.appendChild(card__action)
                card__action.appendChild(button)
                    button.appendChild(buttonText)

    
    return col
}

{/*<div class="col col-sm-2 col--feature col-padd-sm">
    <div class="card">
        <div class="card__body">
            <div class="card__image">
                <img src="img/small.jpg" alt="">
            </div>
            <h3 class="card__title">
                Property #1
            </h3>
            <p class="card__body__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis, enim a accumsan fermentum, lectus sapien condimentum
                lacus, at vehicula diam diam vel dolor.
            </p>
            <div class="card__action">
                <button class="btn btn--primary">
                    Find More
                </button>
            </div>
        </div>
    </div>
</div>*/}


