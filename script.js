function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      
      ////// HERO
      let containerHero = document.getElementById('hero');
      afficherHero(data, containerHero);
      ///ARTICLE RECENTS
      let articlesRecents = data.site.articlesRecents;
      console.log(articlesRecents);
      let dateArticlesRecents = articlesRecents[0].datePublication;
      console.log(dateArticlesRecents);
      let categorieArticlesRecents = articlesRecents[0].categorie;
      console.log(categorieArticlesRecents);
      let illustrationArticlesRecents = articlesRecents[0].illustration;
      console.log(illustrationArticlesRecents);

      ///ARTICLE VEDETTE
      let article = data.site.articleEnVedette.titreArticle;
      console.log(article);
      let date = data.site.articleEnVedette.datePublication;
      console.log(date);
      let resume = data.site.articleEnVedette.resume;
      console.log(resume);
      let categorie = data.site.articleEnVedette.categorie;
      console.log(categorie);
      let illustration = data.site.articleEnVedette.illustration;
      console.log(illustration);

      let containerArticleVedette = document.getElementById('article-vedette');
      afficherArticleVedette(data, containerArticleVedette);

      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

 function afficherHero(data, container){
  let nom = data.site.nomSite; 
  let slogan = data.site.slogan; 
  let elementHero = `
    <div class="titles">
      <p>${nom}</p>
      <h1>${slogan}</h1>
    </div>
    <div id="categories">
      <div class="categorie">
          <h2>Nom du Thème</h2>
          <p>Description</p>
      </div>
    </div>
  `;
  container.insertAdjacentHTML("beforeend",elementHero)
  
 }

function afficherArticleVedette(data, container) {
      let article = data.site.articleEnVedette.titreArticle;
      let date = data.site.articleEnVedette.datePublication;
      let resume = data.site.articleEnVedette.resume;
      let categorie = data.site.articleEnVedette.categorie;
      let illustration = data.site.articleEnVedette.illustration;

      let elementArticleVedette =`
      <div>
       <img src="${illustration}">
       <h1>${article}</h1>
       <h2>${categorie} - ${date}</h2>
       <p>${resume}</p>
      </div>`;

      container.insertAdjacentHTML("beforeend", elementArticleVedette)
}

function afficherArticleRecents(data, container) {
  
}