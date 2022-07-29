const setOfWords = ["My name is Amir, and I am an Engineer", "I have done 4 years Bacholers Degree", "Ok Please Increase your Speed"]
    let btn = document.getElementById('btn');
    function myFun() {
        let textareaDisability = document.getElementById("myWords");
        if (textareaDisability.hasAttribute('disabled')) {
            textareaDisability.removeAttribute('disabled');
            btn.innerText = "Done";
            console.log(btn);
        }
        else {
            textareaDisability.setAttribute('disabled', "");
            btn.innerText = "Start";
            console.log(btn);
        }
        let random = Math.floor(Math.random() * 3);
        // let text = document.createTextNode(setOfWords[random])
        // let html = document.createElement('p');
        // html.appendChild(text);
        // html.innerText = setOfWords[random];
        // let hClass = document.querySelector(".hClass");
        // hClass.insertAdjacentElement("afterend", html);
        let msg = document.getElementById("msg").innerText = setOfWords[random]
    }