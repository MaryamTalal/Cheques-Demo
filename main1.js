window.addEventListener("load", () => {
    let commentCol = document.querySelectorAll(".page .body #document tr td:last-child")
    let commentColDiv = document.querySelectorAll(".page .body #document tr td:last-child div")
    commentCol.forEach((comment, i) => {
        comment.addEventListener("click", (e) => {
            commentColDiv[i].focus()
        })
    })


    let acceptCol = document.querySelectorAll(".page .body #document tr td:nth-child(4)")
    let acceptColBtn = document.querySelectorAll(".page .body #document tr button")
    acceptColBtn.forEach((acceptBtn) => {
        console.log(acceptBtn.children[0])
        acceptBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            acceptBtn.classList.toggle("checked")
            if (acceptBtn.children[0].classList.contains("fa-x")) {
                acceptBtn.children[0].classList.replace("fa-x", "fa-check")
            }
            else {
                acceptBtn.children[0].classList.replace("fa-check", "fa-x")
            }

        })
    })
    acceptCol.forEach((acceptBtn, i) => {
        acceptBtn.addEventListener("click", (e) => {
            acceptColBtn[i].click()
        })
    })


    let commentCol2 = document.querySelectorAll(".page #supporting-document table tr:last-child td:first-child")
    let commentColDiv2 = document.querySelectorAll(".page #supporting-document table td:first-child div[contenteditable='true']")
    commentCol2.forEach((comment, i) => {
        comment.addEventListener("click", (e) => {
            commentColDiv2[i].focus()
        })
    })



    let pages = document.getElementsByClassName("page")
    //let previousBtn = document.getElementById("previousBtn")
    //let nextBtn = document.getElementById("nextBtn")
    //let navItems = document.getElementsByClassName("process-item")
    //let pageNo = 1
    //console.log(pages[0])
    // previousBtn.addEventListener("click", (e) => {
    //     console.log("fuck")
    //     if (pageNo != 1) {
    //         pages[pageNo - 1].classList.add("hidden")
    //         navItems[pageNo - 1].classList.remove("active")
    //         pageNo--;
    //         navItems[pageNo - 1].classList.add("active")
    //         pages[pageNo - 1].classList.remove("hidden")
    //         if (nextBtn.classList.contains("disabled")) {
    //             nextBtn.classList.remove("disabled")
    //         }
    //         if (pageNo == 1) {
    //             previousBtn.classList.add("disabled")
    //         }
    //         else if (previousBtn.classList.contains("disabled")) {
    //             previousBtn.classList.remove("disabled")
    //         }

    //     }
    // })
    // nextBtn.addEventListener("click", (e) => {
    //     if (pageNo < pages.length) {

    //         pages[pageNo - 1].classList.add("hidden")
    //         navItems[pageNo - 1].classList.remove("active")
    //         pageNo++;
    //         navItems[pageNo - 1].classList.add("active")
    //         pages[pageNo - 1].classList.remove("hidden")
    //         if (previousBtn.classList.contains("disabled")) {
    //             previousBtn.classList.remove("disabled")
    //         }
    //         if (pageNo == pages.length) {
    //             nextBtn.classList.add("disabled")
    //         }
    //         else if (nextBtn.classList.contains("disabled")) {
    //             nextBtn.classList.remove("disabled")
    //         }
    //     }

    // })

    let filter1 = document.getElementById("page-1-filter")
    let clear1 = document.getElementById("page-1-clear")
    filter1.addEventListener("click",(e)=>{
       if(document.querySelectorAll("input[type='date']")[0].value != "" && document.querySelectorAll("input[type='date']")[1].value != "")
            document.getElementsByClassName("page-2")[0].classList.remove("hidden");
    })
    clear1.addEventListener("click",(e)=>{
        document.getElementsByClassName("page-2")[0].classList.add("hidden");
        document.querySelectorAll("input[type='date']")[0].value = ""
        document.querySelectorAll("input[type='date']")[1].value = ""
        console.log(document.querySelectorAll(".list-header"))
        document.querySelectorAll(".list-header").forEach((list)=>{
            list.value = ""
        })
        document.querySelectorAll(".list-body").forEach((list)=>{
            list.classList.add("hidden")
        })
    })

    let submitted = document.getElementById("submitted")
    let received = document.getElementById("received")
    received.addEventListener("click",(e)=>{
        received.children[1].classList.remove("d-none");
        submitted.children[1].classList.add("d-none");
        document.getElementsByClassName("page-3")[0].classList.add("hidden");
        document.getElementsByClassName("page-3")[1].classList.add("hidden");
        console.log(document.querySelectorAll(".page-2 .list-header"))
        document.querySelectorAll(".page-2 input").forEach((list)=>{
            list.value = ""
        })
        document.querySelectorAll(".page-2 .list-body").forEach((list)=>{
            list.classList.add("hidden")
        })

        

    })
    submitted.addEventListener("click",(e)=>{
        received.children[1].classList.add("d-none");
        submitted.children[1].classList.remove("d-none");
        document.getElementsByClassName("page-3")[0].classList.add("hidden");
        document.getElementsByClassName("page-3")[1].classList.add("hidden");
        console.log(document.querySelectorAll(".page-2 .list-header"))
        document.querySelectorAll(".page-2 input").forEach((list)=>{
            list.value = ""
        })
        document.querySelectorAll(".page-2 .list-body").forEach((list)=>{
            list.classList.add("hidden")
        })

    })

    let filter2 = document.getElementById("page-2-filter")
    let clear2 = document.getElementById("page-2-clear")
    filter2.addEventListener("click",(e)=>{
       if(!submitted.children[1].classList.contains("d-none"))
            document.getElementsByClassName("page-3")[0].classList.remove("hidden");
        else if(!received.children[1].classList.contains("d-none"))
            document.getElementsByClassName("page-3")[1].classList.remove("hidden");
    })
    clear2.addEventListener("click",(e)=>{
        document.getElementsByClassName("page-3")[0].classList.add("hidden");
        document.getElementsByClassName("page-3")[1].classList.add("hidden");
        console.log(document.querySelectorAll(".page-2 .list-header"))
        document.querySelectorAll(".page-2 input").forEach((list)=>{
            list.value = ""
        })
        document.querySelectorAll(".page-2 .list-body").forEach((list)=>{
            list.classList.add("hidden")
        })
    })
    





    let lists = document.querySelectorAll(".list")
    lists.forEach((list) => {
        list.addEventListener("click", (e) => {
            e.preventDefault();
            list.children[1].classList.toggle("hidden")
            if (e.target.tagName.toLowerCase() == "div" && e.target.classList.contains("list-item")) {
                list.children[0].value = e.target.innerText
            }

        })
    })



    let page_1_filter = document.getElementById("page-1-filter")
    page_1_filter.addEventListener("click", (e) => {

        
    })



        // let inputList = document.querySelectorAll(".list input")
        // inputList.forEach((list) => {
        //     list.addEventListener("click", (e) => {
        //         e.preventDefault();
        //         console.log(e)
        //     })
        // })


        console.log(lists)
        // lists.forEach((list)=>{
        //     list.addEventListener("click",(e)=>{
        //         console.log(e)
        //     })
        // })
    })