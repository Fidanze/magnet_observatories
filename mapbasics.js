var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
ymaps.ready(printall);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [observers[149].Lat, observers[149].Long], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
}

function printall () {
	// Создадим метку.
	var places = [];

	for(i=0;i<150;i++){
	places[i]= new ymaps.Placemark([Number(observers[i].Lat), Number(observers[i].Long)], 
		{
			balloonContentHeader: 'IAGA: '+observers[i].IAGA,
			balloonContentBody: 'Name: '+observers[i].Name+'<br>Country: '+observers[i].Country+'<br>Lat: '
			+observers[i].Lat+'<br>Long: '+observers[i].Long+'<br>Alt: '+ observers[i].Alt
			+'<br>Zone: '+observers[i].Zone,
		})
	if(places[i].click==true) {
		places.getMap();
	}
		myMap.geoObjects.add(places[i]);
	};
};
