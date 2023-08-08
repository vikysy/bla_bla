import { FC, useEffect, useState } from 'react';
import cl from './MyMap.module.scss';
import { Map, RoutePanel, YMaps } from '@pbe/react-yandex-maps';

const MyMap: FC = () => {
    const myKey = "0c52a1f9-41c9-4fee-a2fa-a341b7a90949";
    const coordinatesTo = [55.798682, 37.695816];
    const [routeOne, setRouteOne] = useState<any>(null);
    const [routeTwo, setRouteTwo] = useState<any>(null);

    useEffect(() => {
        if(routeOne) {
            routeOne.routePanel.state.set({
                fromEnabled: false,
                from: 'метро Сокольники Сокольническая линия',
                toEnabled: false,
                to: coordinatesTo,
                type: "pedestrian"
            })
        }
    }, [routeOne])

    useEffect(() => {
        if(routeTwo) {
            routeTwo.routePanel.state.set({
                fromEnabled: false,
                from: 'метро Преображенская площадь',
                toEnabled: false,
                to: coordinatesTo,
                type: "pedestrian"
            })
        }
    }, [routeTwo])

    return (
        <div className={cl.myMap}>
            <div className={cl.address}>
                <i className="fa-solid fa-location-dot"></i> Bla Bla Company 125009 Moscow, Red Square 1
            </div>
            <YMaps query={{ apikey: myKey }}>
                <Map
                    width='100%'
                    height='266px'
                    defaultState={{ 
                        center: coordinatesTo, 
                        zoom: 8 
                    }}
                >
                    <RoutePanel 
                        instanceRef={ref => setRouteOne(ref)} 
                        options={{
                            autofocus: false,
                            visible: false
                        }}
                    />
                    <RoutePanel 
                        instanceRef={ref => setRouteTwo(ref)} 
                        options={{
                            autofocus: false,
                            visible: false
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    )
};

export default MyMap;