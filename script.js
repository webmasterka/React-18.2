var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'https://eplakaty.pl/img/towary/1/2016_10/15084.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
    },
    {
        id: 3,
        title: 'Skazani na Shawshank',
        desc: 'The Shawshank Redemption',
        img: 'http://stephenking.pl/wp-content/uploads/2015/07/Skazani-na-Shawshank-1994-plakat.jpg'
    },
    {
        id: 4,
        title: 'Nietykalni',
        desc: 'Intouchables',
        img: 'https://ssl-gfx.filmweb.pl/po/33/90/583390/7752240.3.jpg'
    },
    {
        id: 5,
        title: 'Zielona mila',
        desc: 'The Green Mile',
        img: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.3.jpg'
    },
    {
        id: 6,
        title: 'Ojciec chrzestny',
        desc: 'The Godfather',
        img: 'https://ssl-gfx.filmweb.pl/po/10/89/1089/7196615.3.jpg'
    }   
  ];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));