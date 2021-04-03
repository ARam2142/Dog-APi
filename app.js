const button = document.getElementById('btn');

const getData = () => {
    const xml = new XMLHttpRequest();

    xml.open("GET", 'https://dog.ceo/api/breeds/image/random', true);
    console.log(xml)

    xml.onload= function() {
        if (this.status === 200) {
            console.log("Ready to go")
        } else {
            console.log("there was a problem")
        }

        const responseText = JSON.parse(this.responseText);
        console.log(responseText)
        //let output = `<img src="${responseText.message}" class="card-img-top" alt="Doggy-style" id="photo">`;
        document.getElementById('photo').src = responseText.message;


    }

    xml.send();

    // const photo = document.getElementById('photo');

    //let request = new Request('https://dog.ceo/api/breeds/image/random');

    // fetch('https://dog.ceo/api/breeds/image/random')
    //     .then(function(res) {
    //         return res.json()
    //     })
    //     .then(function(data) {
    //         console.log(data)
    //         let output;
    //         // <img src="${data.message}" class="card-img-top" alt="Doggy-style" id="photo">

            
    //     })
}

button.addEventListener('click', getData)