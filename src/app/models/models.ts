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

export interface Empleado {
  run: string, 
  nombre: string, 
  sueldoHora: number, 
  horas: number, 
  contacto: number, 
  conEmergencia: number, 
  tipo: string
}

export interface EmpleadoEdificio {
  idEmpleadoEdificio?: number,
  run: string, 
  idEdificio: number, 
  inicio: Date,
  termino?: Date
}

export interface Persona {
  run: string, 
  nombre: string, 
  apellido: string, 
  contacto: number, 
  conEmergencia: number
}

export interface Residente {
  idResidente?: number,
  run: string, 
  idDepartamento: number, 
  inicio: Date, 
  termino?: Date
}

export interface Propietario {
  idPropietario?: number,
  run: string,
  idDepartamento: number,
  inicio: Date,
  termino?: Date
}