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
  id: number;
  damages: [
    {
      id: number;
      location: {
        id: number;
        lat: number;
        lng: number;
        address: string;
      };
      category: string;
      type: string;
      size: number;
    },
  ];
  created_on: string;
  updated_on: string;
  road_type: string;
  road_length: number;
  road_coating: string;
  inspector: number;
}

interface ApplicationShortDto {
  id: string;
  road_name: string;
}

interface DamageShortDto {
  id: string;
  damage_type: string;
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

interface RepairShortDto {
  id: string;
  road_name: string;
  defect_type: string;
  contractor_name: string;
  deadline?: string;
}
