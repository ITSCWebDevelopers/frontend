import {CircularProgress} from '@mui/material';
import {useState} from 'react';
import {Placemark, YMaps, Map as YandexMap, ZoomControl} from 'react-yandex-map';
import type {MapProps} from './Map.types';

export const Map = (props: MapProps) => {
  const initialState = {
    center: [props.center.lat, props.center.lng],
    zoom: props.zoom,
  };
  const [isLoading, setisLoading] = useState(true);

  return (
    <YMaps>
      {isLoading && <CircularProgress />}
      <YandexMap
        onLoad={() => setisLoading((prev) => !prev)}
        defaultState={initialState}
        width={props.size?.width}
        style={{width: props.size?.width, height: props.size?.height}}
      >
        <ZoomControl />
        <Placemark geometry={initialState.center} />
      </YandexMap>
    </YMaps>
  );
};
