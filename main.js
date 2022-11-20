window.addEventListener("load", () => {
    //Dropdown list behavior 
    //Collapsing and choosing
    let lists = document.querySelectorAll(".list")
    if (lists) {
        lists.forEach((list) => {
            list.addEventListener("click", (e) => {
                e.preventDefault();
                list.children[2].children[0].classList.toggle("hidden")
                if (e.target.tagName.toLowerCase() == "div" && e.target.classList.contains("list-item")) {
                    list.children[0].children[0].value = e.target.innerText.trim()
                }
            })
        })
    }

    //To avoid undefined errors and to clarify which part of the code this is from
    let serviceName = window.location.href.split("/")[3].split(".")[0].toUpperCase()
    console.log(serviceName)
    if (serviceName == "DASHBOARD") {
        let filter1 = document.getElementById("page-1-filter")
        if (filter1) {
            filter1.addEventListener("click", (e) => {
                if (document.querySelectorAll("input[type='date']")[0].value != "" && document.querySelectorAll("input[type='date']")[1].value != "")
                    document.getElementsByClassName("page")[2].classList.remove("hidden");
            })
        }
        let clear1 = document.getElementById("page-1-clear")
        if (clear1) {
            clear1.addEventListener("click", (e) => {
                //clear2.click();
                document.getElementsByClassName("page")[2].classList.add("hidden");
                document.querySelectorAll("input[type='date']")[0].value = ""
                document.querySelectorAll("input[type='date']")[1].value = ""
                document.querySelectorAll(".list-header").forEach((list) => {
                    list.value = ""
                })
                document.querySelectorAll(".list-body").forEach((list) => {
                    list.classList.add("hidden")
                })
            })
        }



        let filter2 = document.getElementById("page-2-filter")
        if (filter2) {
            filter2.addEventListener("click", (e) => {
                if (!submitted.children[1].classList.contains("hidden"))
                    document.getElementsByClassName("page")[3].classList.remove("hidden");
                else if (!received.children[1].classList.contains("hidden"))
                    document.getElementsByClassName("page")[4].classList.remove("hidden");
            })
        }
        let clear2 = document.getElementById("page-2-clear")
        if (clear2) {
            clear2.addEventListener("click", (e) => {
                document.getElementsByClassName("page")[3].classList.add("hidden");
                document.getElementsByClassName("page")[4].classList.add("hidden");
                document.querySelectorAll(".page-2 input").forEach((list) => {
                    list.value = ""
                })
                document.querySelectorAll(".page-2 .list-body").forEach((list) => {
                    list.classList.add("hidden")
                })
            })
        }




        let received = document.getElementById("received")
        if (received) {
            received.addEventListener("click", (e) => {
                received.children[1].classList.remove("hidden");
                submitted.children[1].classList.add("hidden");
                received.children[0].classList.add("text-primary");
                submitted.children[0].classList.remove("text-primary");
                document.getElementsByClassName("page")[3].classList.add("hidden");
                document.getElementsByClassName("page")[4].classList.add("hidden");
                document.getElementsByClassName("page")[2].querySelectorAll("input").forEach((list) => {
                    list.value = ""
                })
                document.getElementsByClassName("page")[2].querySelectorAll(".list-body").forEach((list) => {
                    list.classList.add("hidden")
                })



            })
        }
        let submitted = document.getElementById("submitted")
        if (submitted) {
            submitted.addEventListener("click", (e) => {
                received.children[1].classList.add("hidden");
                submitted.children[1].classList.remove("hidden");
                received.children[0].classList.remove("text-primary");
                submitted.children[0].classList.add("text-primary");
                document.getElementsByClassName("page")[3].classList.add("hidden");
                document.getElementsByClassName("page")[4].classList.add("hidden");
                document.getElementsByClassName("page")[2].querySelectorAll("input").forEach((list) => {
                    list.value = ""
                })
                document.getElementsByClassName("page")[2].querySelectorAll(".list-body").forEach((list) => {
                    list.classList.add("hidden")
                })

            })
        }
    }
    else if (serviceName == "CHEQUESUBMITTED") {
        let acceptBtns = document.querySelectorAll(".uncheck")
        acceptBtns.forEach((acceptBtn) => {
            acceptBtn.addEventListener("click", (e) => {
                e.stopPropagation()
                acceptBtn.classList.toggle("uncheck")
                if (acceptBtn.children[0].classList.contains("fa-x")) {
                    acceptBtn.children[0].classList.replace("fa-x", "fa-check")
                    acceptBtn.classList.replace("border-danger", "border-success")
                    acceptBtn.children[0].classList.replace("text-danger", "text-success")
                }
                else {
                    acceptBtn.children[0].classList.replace("fa-check", "fa-x")
                    acceptBtn.classList.replace("border-success", "border-danger")
                    acceptBtn.children[0].classList.replace("text-success", "text-danger")
                }

            })
        })
        let acceptCol = document.querySelectorAll(".page .body #document tr td:nth-child(4)")
        acceptCol.forEach((acceptBtn, i) => {
            acceptBtn.addEventListener("click", (e) => {
                acceptColBtn[i].click()
            })
        })
        let addCheques = document.querySelectorAll(".addCheque");
        let chequeBody = document.getElementsByClassName("cheque-body")[0];
        let chequeBodyCleanClone = chequeBody.cloneNode(true)
        let page2 = document.getElementsByClassName("page-2")[0]
        document.addEventListener("click",function(e){
            console.log(e.target.parentNode.parentNode.parentNode)
            if(e.target.classList.contains('addCheque')){
                let chequeBodyClone = chequeBodyCleanClone.cloneNode(true)
                e.target.parentNode.parentNode.parentNode.insertBefore(chequeBodyClone, e.target.parentNode.parentNode.nextSibling);
             }
             if(e.target.classList.contains('delCheque')){
                e.target.parentNode.parentNode.remove()
            
             }
         });

        let accountCheck = document.getElementById("accountCheck")
        accountCheck.addEventListener("click", (e) => {
            e.stopPropagation();
            e.target.parentNode.parentNode.parentNode.children[4].children[0].classList.remove("hidden")
            console.log()
        })


        let amountNumber = document.getElementById("amount1")
        let amountWord = document.getElementById("amount2")
        amountNumber.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                console.log(amountNumber.value)
                amountWord.innerText = `ONLY ${humanize(amountNumber.value)}`
            }
        })


        let isEndorsed = document.getElementById("isEndorsed");
        isEndorsed.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.children[2].classList.toggle("hidden")
            e.target.parentNode.parentNode.parentNode.children[17].classList.toggle("hidden")
            console.log(e.target.parentNode.parentNode.parentNode.children[17])
        })


        let pages = document.querySelectorAll(".page");
        let processItem = document.querySelectorAll(".process-item")
        console.log(processItem)
        let index = 1;
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")
        btn1.addEventListener("click", (e) => {
            if (index != 1) {
                pages[index].classList.add("hidden");
                processItem[index-1].classList.remove("bg-primary", "text-light")
                index--;
                pages[index].classList.remove("hidden");
                processItem[index-1].classList.add("bg-primary", "text-light")
                window.scrollTo(0,0)
                if (index == 1) {
                    btn1.innerText = "Back to the Bank"
                }
            }
        })
        btn2.addEventListener("click", (e) => {
            if (index < pages.length - 2) {
                pages[index].classList.add("hidden");
                processItem[index-1].classList.remove("bg-primary", "text-light")
                index++;
                pages[index].classList.remove("hidden");
                processItem[index-1].classList.add("bg-primary", "text-light")
                window.scrollTo(0,0)
                if (index != 1) {
                    btn1.innerText = "Back"
                }
            }
        })
    }

})

function humanize(num) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];

    var numString = num.toString();

    if (num < 0) throw new Error('Negative numbers are not supported.');

    if (num === 0) return 'zero';

    //the case of 1 - 20
    if (num < 20) {
        return ones[num];
    }

    if (numString.length === 2) {
        return tens[numString[0]] + ' ' + ones[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return ones[numString[0]] + ' hundred';
        else
            return ones[numString[0]] + ' hundred and ' + humanize(+(numString[1] + numString[2]));
    }

    if (numString.length === 4) {
        var end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return ones[numString[0]] + ' thousand';
        if (end < 100) return ones[numString[0]] + ' thousand and ' + humanize(end);
        return ones[numString[0]] + ' thousand ' + humanize(end);
    }
}