const removeClasses = (array, className) => {
    for (var i = 0; i < array.length; i++) {
        array[i].classList.remove(className);
    }
};

const contactsMapCollection = [
    {
        coordinate: [44.01363099999999, 44.56721607461302],
        id: 'main-office'
    }
];

const contactsListMapCollection = [
    {
        coordinate: [44.01363099999999, 44.56721607461302],
        id: 'main-office'
    },
    {
        coordinate: [44.16205050000001, 44.78223157458179],
        id: 'mart-office'
    }
];

async function initMap(id) {
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapCenterLocation } = ymaps3;

    const mapEl = document.getElementById(id);

    const isContactsListMap = id === 'contacts-list-map';

    const contactsListMapCenter =
        window.innerWidth <= 768
            ? [44.073381446307614, 44.624760323327415]
            : [44.15165903419824, 44.624760323327415];
    const contactsMapCenter =
        window.innerWidth <= 768
            ? [43.98969076310273, 44.5033927883371]
            : [43.71974672265624, 44.381373579680876];

    const markersCollection = isContactsListMap ? contactsListMapCollection : contactsMapCollection;

    const map = new YMap(mapEl, {
        location: {
            center: isContactsListMap ? contactsListMapCenter : contactsMapCenter,
            zoom: 10
        },
        behaviors: ['drag']
    });

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

    markersCollection.forEach((el, idx) => {
        let content = document.createElement('div');
        content.classList.add('marker', el.type);
        content.insertAdjacentHTML(
            'beforeend',
            `
					<svg width='69' height='80' viewBox='0 0 69 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_2430_11018)'>
                        <path d='M44.084 33.3336C44.084 35.2172 43.522 37.0585 42.4689 38.6247C41.4159 40.1909 39.9192 41.4116 38.1681 42.1324C36.4169 42.8533 34.4901 43.0419 32.6311 42.6744C30.7721 42.3069 29.0645 41.3999 27.7242 40.0679C26.384 38.736 25.4713 37.039 25.1015 35.1916C24.7317 33.3441 24.9215 31.4292 25.6468 29.689C26.3722 27.9487 27.6005 26.4613 29.1765 25.4148C30.7524 24.3683 32.6053 23.8098 34.5007 23.8098C37.0423 23.8098 39.4799 24.8132 41.2771 26.5992C43.0743 28.3853 44.084 30.8077 44.084 33.3336ZM58.2194 56.9383L34.5007 80.0002L10.8203 56.9717C6.12053 52.3157 2.91612 46.3789 1.61253 39.9126C0.308939 33.4462 0.964756 26.7409 3.49699 20.645C6.02923 14.5492 10.3241 9.3368 15.8381 5.66742C21.3521 1.99805 27.8375 0.0365944 34.4735 0.0312609C41.1096 0.0259274 47.5982 1.97695 53.1181 5.63746C58.6381 9.29797 62.9414 14.5034 65.4836 20.5952C68.0257 26.687 68.6925 33.3913 67.3994 39.8597C66.1063 46.3282 62.9116 52.2748 58.2194 56.9383ZM53.6674 33.3336C53.6674 29.5663 52.5432 25.8837 50.4372 22.7513C48.3311 19.6189 45.3377 17.1775 41.8355 15.7359C38.3332 14.2942 34.4794 13.917 30.7615 14.652C27.0435 15.3869 23.6283 17.201 20.9478 19.8649C18.2673 22.5287 16.4419 25.9227 15.7023 29.6176C14.9628 33.3124 15.3423 37.1423 16.793 40.6228C18.2437 44.1033 20.7003 47.0781 23.8523 49.1711C27.0042 51.2641 30.7099 52.3812 34.5007 52.3812C39.584 52.3812 44.4591 50.3744 48.0536 46.8023C51.648 43.2302 53.6674 38.3853 53.6674 33.3336Z' fill='#E7158B'/>
                        </g>
                        <defs>
                        <clipPath id='clip0_2430_11018'>
                        <rect width='69' height='80' fill='white'/>
                        </clipPath>
                        </defs>
                    </svg>
                  `
        );
        content.dataset.office = el.id;

        if (idx === 0) {
            content.classList.add('_is-active');
            document.querySelector(`[data-office-name="${el.id}"]`) &&
                document.querySelector(`[data-office-name="${el.id}"]`).classList.add('_is-active');
        }

        const marker = new YMapMarker({ coordinates: el.coordinate, draggable: false }, content);
        map.addChild(marker);
    });

    if (isContactsListMap) {
        mapEl.addEventListener('click', function (e) {
            if (e.target.closest('.marker')) {
                const mark = e.target.closest('.marker');
                const office = document.querySelector(`[data-office-name="${mark.dataset.office}"]`);

                removeClasses(mapEl.querySelectorAll('.marker'), '_is-active');
                removeClasses(document.querySelectorAll('.contacts__list-item'), '_is-active');
                mark.classList.add('_is-active');
                office && office.classList.add('_is-active');
            }
        });
    }
}

document.getElementById('contacts-map') && initMap('contacts-map');
document.getElementById('contacts-list-map') && initMap('contacts-list-map');
