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

interface ApplicationShortDto {
  id: string;
  road_name: string;
}

interface DamageShortDto {
  id: string;
  damage_type: string;
  address: string;
}

interface ContractorModel {
  name: string;
  email: string;
  id: string;
  phone: string;
}

interface CreateRepairDto {
  contractor: string;
  date?: string;
  description: string;
}
