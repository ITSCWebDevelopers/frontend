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
