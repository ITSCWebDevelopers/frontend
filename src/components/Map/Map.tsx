import {YMaps, Map as YandexMap} from 'react-yandex-map';

interface IMapProps {
  center: {
    lat: number;
    magn: number;
  };
  zoom: number;
  size: number;
}

export const Map = (props: IMapProps) => {
  const initialState = {
    center: [props.center.lat, props.center.magn],
    zoom: props.zoom,
  };

  return (
    <YMaps>
      <YandexMap defaultState={initialState} width={props.size} style={{width: props.size, height: props.size}} />
    </YMaps>
  );
};
