// const start = new Date('2022-01-10');
// const end = Date.now();
// const diffInMs = end - start;
// const diffInDays = Math.floor(diffInMs / 86400000);
// console.log(diffInDays);

let startDate = new Date('2022-10-01');
let daysDifference = 0;
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("day");
setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10? "0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10? "0" : "") + currentTime.getSeconds();
    let timeDifference = currentTime.getTime() - startDate.getTime();
    let newDaysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    if (newDaysDifference > daysDifference) {
        daysDifference = newDaysDifference;
        // console.log('Số ngày từ 1/10/2022 đến ngày hiện tại là: ' + daysDifference + ' ngày');
        day.innerHTML=daysDifference + ' days';
      }
}, 1000);



var elements = document.querySelectorAll('.typing');
var texts = ["Start Day", "01.", "10.", "2022", "Hoàng Viet & HoaMie"];
var currentIndex = 0; // Index của phần tử hiện tại trong danh sách texts
var charIndex = 0; // Index của ký tự hiện tại trong phần tử hiện tại

function typeText() {
    if (currentIndex < elements.length) {
        var element = elements[currentIndex];
        var text = texts[currentIndex];

        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Thời gian delay giữa các ký tự
        } else {
            currentIndex++;
            charIndex = 0;
            setTimeout(typeText, 1000); // Thời gian delay giữa các từ hoặc câu
        }
    }
}

typeText();



    var button = document.querySelector(".seen");
    button.addEventListener("click" , function(){
        location.href = "./loichuc.html";
    })

    // var form = document.getElementById('emailForm');

    // form.addEventListener('click', function(e) {
    //     e.prevenDefault();
    //     var hoamie = document.getElementById("to").value 
    //     var chude = document.getElementById("subject").value
    //     var mess = document.getElementById("message").value


    //     console.log(hoamie);
    //     console.log(chude);
    //     console.log(mess);

    //     fetch("http://localhost:9000/send/create-user" , {
    //         method: 'POST' ,
    //         body:JSON.stringify({
    //             title: hoamie ,
    //             chude: chude,
    //             loinhan: mess
    //         }),
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //           },
    //     })
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(data){
    //         console.log(data);
    //     })
        
    // })



