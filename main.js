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
        received.children[1].style.width = `${received.children[0].offsetWidth+30}px`
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
        submitted.children[1].style.width = `${submitted.children[0].offsetWidth+30}px`
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

    // let commentCol = document.querySelectorAll(".page .body #document tr td:last-child")
    // let commentColDiv = document.querySelectorAll(".page .body #document tr td:last-child div")
    // commentCol.forEach((comment, i) => {
    //     comment.addEventListener("click", (e) => {
    //         commentColDiv[i].focus()
    //     })
    // })


    // let acceptCol = document.querySelectorAll(".page .body #document tr td:nth-child(4)")
    // let acceptColBtn = document.querySelectorAll(".page .body #document tr button")
    // acceptColBtn.forEach((acceptBtn) => {
    //     console.log(acceptBtn.children[0])
    //     acceptBtn.addEventListener("click", (e) => {
    //         e.stopPropagation()
    //         acceptBtn.classList.toggle("checked")
    //         if (acceptBtn.children[0].classList.contains("fa-x")) {
    //             acceptBtn.children[0].classList.replace("fa-x", "fa-check")
    //         }
    //         else {
    //             acceptBtn.children[0].classList.replace("fa-check", "fa-x")
    //         }

    //     })
    // })
    // acceptCol.forEach((acceptBtn, i) => {
    //     acceptBtn.addEventListener("click", (e) => {
    //         acceptColBtn[i].click()
    //     })
    // })


    // let commentCol2 = document.querySelectorAll(".page #supporting-document table tr:last-child td:first-child")
    // let commentColDiv2 = document.querySelectorAll(".page #supporting-document table td:first-child div[contenteditable='true']")
    // commentCol2.forEach((comment, i) => {
    //     comment.addEventListener("click", (e) => {
    //         commentColDiv2[i].focus()
    //     })
    // })



    // let pages = document.getElementsByClassName("page")
    // let previousBtn = document.getElementById("previousBtn")
    // let nextBtn = document.getElementById("nextBtn")
    // let navItems = document.getElementsByClassName("process-item")
    // let pageNo = 1
    // if (previousBtn) {
    //     previousBtn.addEventListener("click", (e) => {
    //         if (pageNo != 1) {
    //             pages[pageNo - 1].classList.add("hidden")
    //             navItems[pageNo - 1].classList.remove("active")
    //             pageNo--;
    //             navItems[pageNo - 1].classList.add("active")
    //             pages[pageNo - 1].classList.remove("hidden")
    //             if (nextBtn.classList.contains("disabled")) {
    //                 nextBtn.classList.remove("disabled")
    //             }
    //             if (pageNo == 1) {
    //                 previousBtn.classList.add("disabled")
    //             }
    //             else if (previousBtn.classList.contains("disabled")) {
    //                 previousBtn.classList.remove("disabled")
    //             }

    //         }
    //     })
    // }
    // if (nextBtn) {
    //     nextBtn.addEventListener("click", (e) => {
    //         if (pageNo < pages.length) {

    //             pages[pageNo - 1].classList.add("hidden")
    //             navItems[pageNo - 1].classList.remove("active")
    //             pageNo++;
    //             navItems[pageNo - 1].classList.add("active")
    //             pages[pageNo - 1].classList.remove("hidden")
    //             if (previousBtn.classList.contains("disabled")) {
    //                 previousBtn.classList.remove("disabled")
    //             }
    //             if (pageNo == pages.length) {
    //                 nextBtn.classList.add("disabled")
    //             }
    //             else if (nextBtn.classList.contains("disabled")) {
    //                 nextBtn.classList.remove("disabled")
    //             }
    //         }

    //     })
    // }

    // let filter1 = document.getElementById("page-1-filter")
    // let clear1 = document.getElementById("page-1-clear")
    // if (filter1) {
    //     filter1.addEventListener("click", (e) => {
    //         if (document.querySelectorAll("input[type='date']")[0].value != "" && document.querySelectorAll("input[type='date']")[1].value != "")
    //             document.getElementsByClassName("page-2")[0].classList.remove("hidden");
    //     })
    // }
    // if (clear1) {
    //     clear1.addEventListener("click", (e) => {
    //         document.getElementsByClassName("page-2")[0].classList.add("hidden");
    //         document.querySelectorAll("input[type='date']")[0].value = ""
    //         document.querySelectorAll("input[type='date']")[1].value = ""
    //         document.querySelectorAll(".list-header").forEach((list) => {
    //             list.value = ""
    //         })
    //         document.querySelectorAll(".list-body").forEach((list) => {
    //             list.classList.add("hidden")
    //         })
    //     })
    // }

    // let submitted = document.getElementById("submitted")
    // let received = document.getElementById("received")
    // if (received) {
    //     received.addEventListener("click", (e) => {
    //         received.children[1].classList.remove("d-none");
    //         submitted.children[1].classList.add("d-none");
    //         document.getElementsByClassName("page-3")[0].classList.add("hidden");
    //         document.getElementsByClassName("page-3")[1].classList.add("hidden");
    //         document.querySelectorAll(".page-2 input").forEach((list) => {
    //             list.value = ""
    //         })
    //         document.querySelectorAll(".page-2 .list-body").forEach((list) => {
    //             list.classList.add("hidden")
    //         })



    //     })
    // }
    // if (submitted) {
    //     submitted.addEventListener("click", (e) => {
    //         received.children[1].classList.add("d-none");
    //         submitted.children[1].classList.remove("d-none");
    //         document.getElementsByClassName("page-3")[0].classList.add("hidden");
    //         document.getElementsByClassName("page-3")[1].classList.add("hidden");
    //         document.querySelectorAll(".page-2 input").forEach((list) => {
    //             list.value = ""
    //         })
    //         document.querySelectorAll(".page-2 .list-body").forEach((list) => {
    //             list.classList.add("hidden")
    //         })

    //     })
    // }

    // let filter2 = document.getElementById("page-2-filter")
    // let clear2 = document.getElementById("page-2-clear")
    // if (filter2) {
    //     filter2.addEventListener("click", (e) => {
    //         if (!submitted.children[1].classList.contains("d-none"))
    //             document.getElementsByClassName("page-3")[0].classList.remove("hidden");
    //         else if (!received.children[1].classList.contains("d-none"))
    //             document.getElementsByClassName("page-3")[2].classList.remove("hidden");
    //     })
    // }
    // if (clear2) {
    //     clear2.addEventListener("click", (e) => {
    //         document.getElementsByClassName("page-3")[0].classList.add("hidden");
    //         document.getElementsByClassName("page-3")[2].classList.add("hidden");
    //         document.querySelectorAll(".page-2 input").forEach((list) => {
    //             list.value = ""
    //         })
    //         document.querySelectorAll(".page-2 .list-body").forEach((list) => {
    //             list.classList.add("hidden")
    //         })
    //     })
    // }










    // let page_1_filter = document.getElementById("page-1-filter")
    // if (page_1_filter) {
    //     page_1_filter.addEventListener("click", (e) => {


    //     })
    // }



    // let inputList = document.querySelectorAll(".list input")
    // inputList.forEach((list) => {
    //     list.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         console.log(e)
    //     })
    // })


    // lists.forEach((list)=>{
    //     list.addEventListener("click",(e)=>{
    //         console.log(e)
    //     })
    // })
})