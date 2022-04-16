const siteMap = () => {
  const points = [
    {
      title: 'Футура',
      lat: 35.6890,
      lng: 139.690,
    },
    {
      title: 'Шаверма',
      lat: 35.6790,
      lng: 139.682,
    },
    {
      title: 'Франк',
      lat: 35.6850,
      lng: 139.689,
    },
    {
      title: 'Ginza',
      lat: 35.6822,
      lng: 139.699,
    },
  ];

  const createCustomPopup = (point) => {
    const card = document.querySelector('#card').content;
    const popupElement = card.cloneNode(true);

    popupElement.querySelector('.popup__title').textContent = point.title;
    popupElement.querySelector('.popup__text--address').textContent = `Коорднаты ${point.lat}, ${point.lng}`;

    return popupElement;
  };

  const map = L.map('map-canvas')
    .setView({
      lat:35.6894,
      lng:139.692,}, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mapIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  points.forEach((point) => {
    const {lat, lng} = point;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        mapIcon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(createCustomPopup(point));
  });
};
export {siteMap};
