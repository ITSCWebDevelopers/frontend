interface LoginCredintails {
  username: string;
  password: string;
}

interface TaskModel {
  id: string;
  idApplication?: string;
  roadName: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  defectsCount?: number;
}
