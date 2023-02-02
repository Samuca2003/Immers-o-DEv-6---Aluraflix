var listaFilmes = ["https://s2.glbimg.com/zyaaSEbf4qZ6BNkc778luqyVhkE=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/r/0/u4CVkTSpKCAj94NO5G1w/05cul-200-dvd2-d30-img01.jpg", "https://br.web.img3.acsta.net/pictures/210/571/21057125_20131112201221324.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg/240px-The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg", "https://upload.wikimedia.org/wikipedia/pt/5/5a/Spiderwick_chronicles_poster.jpg", "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG"];

var listaNomeFilmes = ["Hobbit uma jornada inesperada", "Hobbit a desolação de smaug", "Hobbit a batalha dos cinco exercécitos", "crônicas de spiderwick", "Matrix"];
// listaFilmes[0] = "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg";
// listaFilmes[1] = "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg"; 
// listaFilmes[2] = "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";
contador = 0;
while ( contador < listaFilmes.length) {  
      document.write('<img src=' + listaFilmes[contador] + '> ' );
      document.write('<h1>' + listaNomeFilmes[contador] + '</h1>');

      contador++;
    
    
}