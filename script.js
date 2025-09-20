const squirrels = [
    { 
        id: 1, 
        name: "Суслик - покоритель Енисея", 
        coordinates: [56.006234, 92.870033],
        address: "Центральная набережная.",
        description: "Этот первый бронзовый суслик установлен на Центральной набережной Красноярска, смотрит на Коммунальный мост и великий Енисей. Этот суслик – еще совсем ребенок, полный мечтаний и веры в новое. Скульптор изобразил суслика в бумажном кораблике и тельняшке, символизируя его стремление стать в будущем капитаном корабля."
    },
    { 
        id: 2, 
        name: "Суслик - борец", 
        coordinates: [55.989746, 92.87874],
        address: "Предмостная площадь.",
        description: "На Ярыгинской набережной стало ещё ярче – к нам присоединился Силач Яр! Этот суслик – настоящий чемпион по духу. Яр вдохновляет всех на подвиги – от утренней пробежки до больших побед на ковре! Благодарим за поддержку и участие в жизни наших героев директора Академии борьбы Аркадия Вячеславовича Кривошеева, а также инструкторов Антона Сучкова и Даниила Боднара. Вместе мы делаем набережную местом силы и вдохновения!"
    },
    { 
        id: 3, 
        name: "Суслик - страж", 
        coordinates: [56.023516, 92.8596],
        address: "ул. Степана Разина, 51. Часовня Параскевы Пятницы.",
        description: 'Cуслик Страж — хранитель горизонтов! На вершине Красноярского взгорья, у самой часовни Параскевы Пятницы, где когда-то вдохновлялся великий художник Василий Суриков, теперь стоит бронзовый Страж — суслик с подзорной трубой и буквой "С" на ней. Он зорко вглядывается вдаль, словно продолжая дело тех, кто веками любовался этим видом.'
    },
    { 
        id: 4, 
        name: "Суслик - космонавт", 
        coordinates: [56.055449, 92.967947],
        address: "Сквер Космонавтов.",
        description: 'В Красноярске приземлился новый герой — четвёртый бронзовый суслик! И не просто суслик, а настоящий покоритель космоса! В скафандре, с серьёзным взглядом и готовностью к межгалактическим приключениям, он теперь встречает гостей в сквере Космонавтов. Имя ему — Назар'
    },
    { 
        id: 5, 
        name: "Суслик - футболист", 
        coordinates: [56.006772, 92.876019],
        address: "Центральная набережная.",
        description: 'Бронзовая фигурка суслика-футболиста установлена на Центральной набережной. Скульптуру установил футбольный клуб "Енисей". Суслика назвали Финт, теперь он является талисманом команды. Каждый болельщик имеет возможность приехать перед игрой, потереть Финтика на победу и отправиться на стадион, чтобы болеть за любимую команду - маленькая, но добрая традиция, которая подарит каждому из нас веру в хорошее!'
    },
    { 
        id: 6, 
        name: "Суслик - художник", 
        coordinates: [56.012981, 92.852185],
        address: "Сквер им В.И. Сурикова.",
        description: 'Первый суслик-девочка по имени Сури теперь украшает сквер имени Василия Сурикова. Сури - художница, в лапках она держит кисть и "рисует" портрет великого живописца.'
    },
    { 
        id: 7, 
        name: "Суслик под зонтиком", 
        coordinates: [56.116868, 92.919246],
        address: "Парк Солнечная поляна.",
        description: 'Новая жительница Рая символизирует самый молодой район города. Она мило расположилась под зонтиком на полянке, имя ей выбрали малыши микрорайона.'
    },
    { 
        id: 8, 
        name: "Суслик - Обрада", 
        coordinates: [56.021687, 92.980086],
        address: "набережная им. Х.М. Совмена.",
        description: 'Шестой суслик Обрада – казачка. Такое имя ей дали воспитанники Детского дома имени Х. М. Совмена.'
    },
    { 
        id: 9, 
        name: "Суслик - чтец", 
        coordinates: [56.017291, 92.851191],
        address: "Сквер им. Юдина.",
        description: 'В сквере им. Юдина поселился новый бронзовый суслик по имени Афоня. Он устроился на книге прямо напротив мурала Геннадия Васильевича. Его имя связано с усадьбой Юдина на Афонтовой горе, где хранилась знаменитая библиотека. Как и Юдин, Афоня теперь тоже любит читать.'
    },
    { 
        id: 10, 
        name: "Суслики молодожены", 
        coordinates: [56.013311, 92.894032],
        address: "Площадь Мира.",
        description: 'Бронзовая фигурка сусликов-молодожёнов, установленная на площади Мира возле памятника командора Н.П. Резанова, символизирует любовь и верность. Этот монумент отражает стремление города укреплять семейные ценности. В скором времени скульптура станет популярным местом для фотосессий молодожёнов и влюблённых пар.'
    }
];


ymaps.ready(initMap);

function initMap() {
    const myMap = new ymaps.Map('map', {
        center: [56.010563, 92.852572],
        zoom: 12
    });


    squirrels.forEach(squirrel => {
        const placemark = new ymaps.Placemark(
            squirrel.coordinates,
            {
                balloonContentHeader: squirrel.name,
                balloonContentBody: `
                    <p>${squirrel.address}</p>
                    <p>${squirrel.description}</p>
                `,
                balloonContentFooter: 'Бронзовый суслик'
            }
        );

        myMap.geoObjects.add(placemark);
    });


    const startSelect = document.getElementById('start-point');
    const endSelect = document.getElementById('end-point');
    
    squirrels.forEach(squirrel => {
        const option = document.createElement('option');
        option.value = squirrel.id;
        option.textContent = squirrel.name;
        
        startSelect.appendChild(option.cloneNode(true));
        endSelect.appendChild(option);
    });

    let currentRoute = null;

    // Обработка маршрута
    document.getElementById('build-route').addEventListener('click', function() {
        const startId = startSelect.value;
        const endId = endSelect.value;
        const routeType = document.querySelector('input[name="route-type"]:checked').value;
        
        if (!startId || !endId) {
            alert('Пожалуйста, выберите начальную и конечную точки маршрута');
            return;
        }
        
        if (startId === endId) {
            alert('Начальная и конечная точки не должны совпадать');
            return;
        }
        
        const startSquirrel = squirrels.find(s => s.id == startId);
        const endSquirrel = squirrels.find(s => s.id == endId);
        

        if (currentRoute) {
            myMap.geoObjects.remove(currentRoute);
        }
        

        let routingMode = 'pedestrian';
        let routeTypeName = 'Пешеходный';
        
        if (routeType === 'auto') {
            routingMode = 'auto';
            routeTypeName = 'Автомобильный';
        } else if (routeType === 'bicycle') {
            routingMode = 'bicycle';
            routeTypeName = 'Велосипедный';
        }
        
  
        currentRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [
                startSquirrel.coordinates,
                endSquirrel.coordinates
            ],
            params: {
                routingMode: routingMode
            }
        }, {
            boundsAutoApply: true
        });
        

        myMap.geoObjects.add(currentRoute);
        
 
        document.getElementById('route-type-info').textContent = `Тип маршрута: ${routeTypeName}`;
        
        // Подписка на событие обновления маршрута
        currentRoute.model.events.add('requestsuccess', function() {
            const activeRoute = currentRoute.getActiveRoute();
            if (activeRoute) {
                const distance = activeRoute.properties.get('distance');
                const time = activeRoute.properties.get('duration');

                document.getElementById('route-distance').textContent = 
                    `Расстояние: ${Math.round(distance.value / 1000 * 100) / 100} км`;
                    
                let timeText;
                if (time.value < 3600) {
                    timeText = `${Math.round(time.value / 60)} минут`;
                } else {
                    const hours = Math.floor(time.value / 3600);
                    const minutes = Math.round((time.value % 3600) / 60);
                    timeText = `${hours} час ${minutes} минут`;
                }
                
                document.getElementById('route-time').textContent = `Время в пути: ${timeText}`;
                
                document.getElementById('route-info').classList.add('active');
            }
        });
        
        currentRoute.model.events.add('requestfail', function() {
            alert('Не удалось построить маршрут. Попробуйте другие точки или тип маршрута.');
        });
    });
    
    // Очистка маршрута
    document.getElementById('clear-route').addEventListener('click', function() {
        if (currentRoute) {
            myMap.geoObjects.remove(currentRoute);
            currentRoute = null;
            
            startSelect.value = '';
            endSelect.value = '';
            
            document.getElementById('route-info').classList.remove('active');
        }
    });
    
    // Изменение типа маршрута
    document.querySelectorAll('input[name="route-type"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (currentRoute) {
                document.getElementById('clear-route').click();
            }
        });
    });
}