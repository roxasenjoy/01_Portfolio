// Portfolio Item Filter
        // Récuper les éléments portant la class Portfolio-filter
const   FilterContainer  = document.querySelector(".portfolio-filter"),
        //Récupere les enfants de la class portfolio-filter
        filterBtns = FilterContainer.children,
        //Récupere la taille
        totalFilterBtn  = filterBtns.length,
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        totalPortfolioItem = portfolioItems.length;

    // Boucle sur tous les éléments
    for(let i=0; i<totalFilterBtn; i++){
        //A chaque clique on reset les class et on met la class active sur l'élément cliqué
        filterBtns[i].addEventListener("click", function(){
            FilterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k < totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }

                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }

        });
    }



    /* Portflio Light */
    const   lightbox = document.querySelector(".lightbox"),
            lightboxImg = lightbox.querySelector(".lightbox-img"),
            lightboxClose = lightbox.querySelector(".lightbox-close")
            lightboxText = lightbox.querySelector(".caption-text"),
            lightboxCounter = lightbox.querySelector(".caption-counter");

    let     itemIndex = 0;

    for(let i=0; i<totalPortfolioItem; i++){
        portfolioItems[i].addEventListener("click", function(){
            itemIndex=i;
            changeItem()
            toggleLightbox();
        });
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }

    function changeItem(){
        imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML = (itemIndex+1) + " / " + totalPortfolioItem;
    }

    function nextItem(){
        if(itemIndex === totalPortfolioItem-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }

        changeItem();
    }

    function prevItem(){
        if(itemIndex === 0){
            itemIndex = totalPortfolioItem-1;
        }
        else{
            itemIndex--;
        }

        changeItem();
    }

    // Close Lightbox
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightboxClose || event.target === lightbox){
            toggleLightbox();
        }
    })

