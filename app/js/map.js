function yMap() {
  if (!document.querySelector('#map')) {
    return false;
  }

  setTimeout(function () {
    const elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src =
      '//api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7b776c65a098e46069b95318588334144a317ce5ae1ec1ac9b5fb50e2d7fa554&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false&onload=getYaMap';
    document.getElementsByTagName('body')[0].appendChild(elem);
  }, 2000);
}

yMap();
