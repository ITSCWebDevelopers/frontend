interface LoginCredintails {
  username: string;
  password: string;
}

interface TokenResponse {
  token: string;
}

interface TaskModel {
  id: string;
  report_id?: string;
  road_name: string;
  address: string;
  coordinates: {
    id: string;
    lat: number;
    lng: number;
  };
  defects_count?: number;
}

interface ReportModel {
  report_id: number;
  road_size: number;
  road_category: string;
  surface_type: string;
  defects: {
    coordinates: {
      id: string;
      lat: number;
      lng: number;
    };
    address: string;
    defect_type: string;
    defect_view: string;
    photos: {src: string}[];
  }[];
}
