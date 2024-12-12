export interface Edificio {
  direccion: string;
  idEdificio?: number;
  nombre: string;
  numPisos: number;
}

export interface Departamento {
  estado: 'Habitado' | 'Desocupado';
  idDepartamento?: number;
  idEdificio: number;
  numero: number;
  piso: number;
}

export interface Gasto {
  descripcion: string;
  estado: 'pendiente' | 'pagado';
  fecha: Date;
  idDepartamento: number;
  idGasto?: number;
  tipo: string;
  valor: number;
}

export interface PagoRealizado {
  gasto: Gasto;
  pagos: Pago[];
  'por-pagar': number;
  'total-pagado': number;
}

export interface Pago {
  fechaPago: Date;
  idGasto: number;
  idPago?: number;
  montoPagado: number;
}

export interface Servicio {
  idServicio?: number; 
  nombre: string;
  descripcion: string;
  idGasto: number;
}