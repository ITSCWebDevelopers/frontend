export interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  size?: {
    width: string;
    height: string;
  };
}
