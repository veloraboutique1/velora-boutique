const categories = {

    "bridal-trays": 0,
    "bridal-mirrors": 0,
    "bridal-sunglasses": 0,
    "bridal-slippers": 0,
    "parasols": 0,
    "hand-fans": 0,

    "flower-bouquets": 0,
    "satin-bouquets": 0,

    "embroidered-headbands": 0,
    "embroidered-phone-cases": 0,
    "embroidered-hair-brushes": 0,

    "wedding-handkerchiefs": 0,
    "brooches": 0,
    "wedding-pens": 0,
    "satin-ribbons": 0,
    "incense-burners": 0,

    "wedding-invitations": 0,
    "fingerprint-frames": 0,
    "custom-event-signs": 0,

    "party-favors": 0,
    "newborn-favors": 0,
    "personalized-water-bottles": 0,

    "graduation-caps": 0,
    "graduation-sashes": 0

};


const container = document.getElementById("products-container");
const buttons = document.querySelectorAll(".category-btn");

function loadProducts(category) {

    container.classList.add("fade-out");

    setTimeout(() => {

        let images = [];

        for (let i = 1; i <= categories[category]; i++) {

            images.push(`assets/products/${category}/${i}.jpeg`);

        }

        // ===== حطه هنا =====
        if (images.length === 0) {

            container.innerHTML = `
                <div class="empty-products">

                    <h2>Coming Soon ✨</h2>

                    <p>
                        This collection is currently being prepared.<br>
                        Stay tuned for beautiful new arrivals.
                    </p>

                </div>
            `;

            container.classList.remove("fade-out");
            container.classList.add("fade-in");

            return;
        }
        // ===================

        let html = "";

        images.forEach(image => {

            html += `
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="product-item">
                        <img src="${image}" alt="">
                    </div>
                </div>
            `;

        });

        container.innerHTML = html;

        container.classList.remove("fade-out");

        container.classList.add("fade-in");

    }, 200);

}


buttons.forEach(button => {

    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        loadProducts(this.dataset.category);

        const productsSection = document.getElementById("products");

window.scrollTo({
    top: productsSection.offsetTop - 60,
    behavior: "smooth"
});

    });

});

loadProducts("boxes");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.addEventListener("click", function(e){

    if(e.target.matches(".product-item img")){

        lightbox.classList.add("show");
        lightboxImg.src = e.target.src;

    }

});

document.querySelector(".close-lightbox").onclick = function(){

    lightbox.classList.remove("show");

}

lightbox.onclick = function(e){

    if(e.target === lightbox){

        lightbox.classList.remove("show");

    }

}