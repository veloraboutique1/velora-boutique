const categories = {

    "bridal-trays": 20,
    "bridal-mirrors": 17,
    "bridal-sunglasses": 4,
    "bridal-slippers": 2,
    "parasols": 2,
    "hand-fans": 17,

    "flower-bouquets": 10,
    "satin-bouquets": 9,

    "embroidered-headbands": 7,
    "embroidered-phone-cases": 3,
    "embroidered-hair-brushes": 2,

    "wedding-handkerchiefs": 11,
    "brooches": 3,
    "wedding-pens": 3,
    "satin-ribbons": 1,
    "incense-burners": 0,

    "wedding-invitations": 9,
    "Wedding-fingerprint-frames": 23,
    "custom-event-signs": 2,

    "party-favors": 10,
    "newborn-Celebration-favors": 44,
    "personalized-water-bottles": 9,

    "graduation-caps": 7,
    "graduation-sashes": 16

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
