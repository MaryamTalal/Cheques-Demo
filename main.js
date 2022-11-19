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
            if(acceptBtn.children[0].classList.contains("fa-x")){
                acceptBtn.children[0].classList.replace("fa-x","fa-check")
            }
            else{
                acceptBtn.children[0].classList.replace("fa-check","fa-x")
            }

        })
    })
    acceptCol.forEach((acceptBtn, i) => {
        acceptBtn.addEventListener("click", (e) => {
            acceptColBtn[i].click()
        })
    })
    

    let commentCol2 = document.querySelectorAll(".page #supporting-documen table tr:last-child td:first-child")
    let commentColDiv2 = document.querySelectorAll(".page #supporting-documen table td:first-child div[contenteditable='true']")
    commentCol2.forEach((comment, i) => {
        comment.addEventListener("click", (e) => {
            commentColDiv2[i].focus()
        })
    })



    let pages = document.getElementsByClassName("page")
    let previousBtn = document.getElementById("previousBtn")
    let nextBtn = document.getElementById("nextBtn")
    let chkStatusButtn = document.getElementById("chkStatusButtn")
    let navItems = document.getElementsByClassName("process-item")
    let pageNo = 1
    let accountStatusDIV  = document.getElementById("accountStatusDIV");
    accountStatusDIV.style.display = "none";
    console.log(pages[0])
    previousBtn.addEventListener("click",(e)=>{
        console.log("fuck")
        if(pageNo != 1){
            pages[pageNo-1].classList.add("hidden")
            navItems[pageNo-1].classList.remove("active")
            pageNo--;
            navItems[pageNo-1].classList.add("active")
            pages[pageNo-1].classList.remove("hidden")
            if (nextBtn.classList.contains("disabled")) {
                nextBtn.classList.remove("disabled")
            }
            if(pageNo == 1){
                previousBtn.classList.add("disabled")
            }
            else if (previousBtn.classList.contains("disabled")) {
                previousBtn.classList.remove("disabled")
            }
            
        }
    })
    nextBtn.addEventListener("click",(e)=>{
        if(pageNo < pages.length){
            
            pages[pageNo-1].classList.add("hidden")
            navItems[pageNo-1].classList.remove("active")
            pageNo++;
            navItems[pageNo-1].classList.add("active")
            pages[pageNo-1].classList.remove("hidden")
            if (previousBtn.classList.contains("disabled")) {
                previousBtn.classList.remove("disabled")
            }
            if(pageNo == pages.length){
                nextBtn.classList.add("disabled")
            }
            else if (nextBtn.classList.contains("disabled")) {
                nextBtn.classList.remove("disabled")
            }
        }
        
    })
    chkStatusButtn.addEventListener("click",(e)=>{
        if (accountStatusDIV.style.display === "none") {
            accountStatusDIV.style.display = "block";
          } else {
            accountStatusDIV.style.display = "none";
          }
    })


    let UVCheck = document.getElementById("UVCheck")
    let UVList = document.getElementById("UVList")
    UVCheck.addEventListener("click",()=>{
        UVList.disabled = !UVList.disabled 
    })

    let lists = document.querySelectorAll(".list")
    lists.forEach((list) => {
        list.addEventListener("click", (e) => {
            console.log(list.children)
            e.preventDefault();
            list.children[2].classList.toggle("hidden")
            if (e.target.tagName.toLowerCase() == "div" && e.target.classList.contains("list-item")) {
                list.children[0].value = e.target.innerText
            }

        })
    })

    let dropdowns = document.querySelectorAll(".dropdown")
    dropdowns.forEach((dropdown)=>{
        dropdown.addEventListener("click",(e)=>{
            if(e.target.tagName.toLowerCase()=="button"){
                dropdown.c
            }
        })
    })
})