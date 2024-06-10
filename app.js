const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active")
  })
})

// Burada ilk olarak toggles adında bir değişken tanımlıyoruz daha sonra query selectorall ile  classı.faq - toggle erişiyoruz 

// Daha sonra toggles değişkenin forech ile dmbüyoruz donucegımız şeyin adınıda toggle tanımlıyoruz bunu bir atama olay ifadesi ekliyoruz addevent ile click yani tıklama olayı gerçekleştiğinde diyoruz.

//   toggle.parentNode derken yani üst düğme git demek üst düğümde burda classı.faq olana ilk dive eriş demek gibi birşey ve toggle ile açılır kapanır active ekle 

