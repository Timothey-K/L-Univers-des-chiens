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

      ///ARTICLES RECENTS
      let articlesRecents = data.site.articlesRecents;
      console.log(articlesRecents);
      let dateArticlesRecents = articlesRecents[0].datePublication;
      console.log(dateArticlesRecents);
      let categorieArticlesRecents = articlesRecents[0].categorie;
      console.log(categorieArticlesRecents);
      let illustrationArticlesRecents = articlesRecents[0].illustration;
      console.log(illustrationArticlesRecents);

      let containerArticlesRecents = document.getElementById('other-articles');
      afficherArticlesRecents(data, containerArticlesRecents);

      // MEMBRES EQUIPES
      let auteursEquipes = data.site.auteursEquipes;
      // console.log(auteursEquipes);
      
      let nomMembresEquipes = data.site.auteursEquipe[0].nomAuteur;
      console.log(nomMembresEquipes);
      let specialisationMembresEquipes = data.site.auteursEquipe[0].specialisation;
      console.log(specialisationMembresEquipes);
      let bioMembresEquipes = data.site.auteursEquipe[0].bio;
      console.log(bioMembresEquipes);

      let containerMembresEquipes = document.getElementById('team');
      afficherMembresEquipes(data, containerMembresEquipes);
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
    </div>`;
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
       <img class="imageVedette" src="${illustration}">
      </div>
      <div>
       <h1>${article}</h1>
       <h2>${categorie} - ${date}</h2>
       <p>${resume}</p>
      </div>`;

      container.insertAdjacentHTML("beforeend", elementArticleVedette)
}

function afficherArticlesRecents(data, container) {
  let articlesRecents = data.site.articlesRecents;

  articlesRecents.forEach(article => {

    let dateArticlesRecents = article.datePublication;
    let categorieArticlesRecents = article.categorie;
    let illustrationArticlesRecents = article.illustration; 
    let articleTitle = article.titreArticle;
    
    let elementArticlesRecents = 
    `<div class="all-articles">
      <img class="imageArticle" src="${illustrationArticlesRecents}">
    <div id="articlesRecents">
      <h1>${articleTitle}</h1>
      <h2>${categorieArticlesRecents} - ${dateArticlesRecents}</h2>
      <a class="button primary" href="#">Lire l'article</a>
    </div>
    </div>`;
    console.log(elementArticlesRecents);

    container.insertAdjacentHTML("beforeend", elementArticlesRecents)

    });
}

function afficherMembresEquipes(data, container) {
  
      let auteursEquipe = data.site.auteursEquipe;

    auteursEquipe.forEach(equipe => {
      let nomMembresEquipes = equipe.nomAuteur;
      let specialisationMembresEquipes = equipe.specialisation;
      let bioMembresEquipes = equipe.bio;

      let elementMembresEquipes = 
      `<div>
       <div class="membres-equipes">
         <img class="avatar" src="https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg" alt="avatar chien cool">
         <h3>${nomMembresEquipes}</h3>
         <p>${specialisationMembresEquipes}</p>
         <p>${bioMembresEquipes}<br></p>
       </div>
       </div>`
      
      container.insertAdjacentHTML("beforeend", elementMembresEquipes)

   });

}