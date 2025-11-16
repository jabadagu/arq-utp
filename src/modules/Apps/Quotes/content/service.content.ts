export const QUERY_KEYS = {
  QUOTES: ["quotes"] as const,
  QUOTE: (id?: string) => ["quote", id] as const,
};

export const TEXTS = {
  modalTitles: {
    create: "Crear cotización",
    edit: "Editar cotización",
    view: "Ver cotización",
  },
  buttons: {
    cancel: "Cancelar",
    delete: "Eliminar",
    save: "Guardar",
    create: "Crear",
  },
};

export const FIELDS = {
  clienteId: "Cliente ID",
  tipoEventoId: "Tipo de Evento",
  nombreEvento: "Nombre del Evento",
  fechaEvento: "Fecha del Evento",
  horaEvento: "Hora del Evento",
  numeroInvitados: "Número de Invitados",
  ubicacion: "Ubicación",
  estadoActualId: "Estado Actual",
  observaciones: "Observaciones",
  status: "Estado",
};

export const CONFIRMS = {
  deleteQuote: "Eliminar cotización",
  deleteConfirmation: "¿Estás seguro de que deseas eliminar esta cotización?",
};

export const CONFIRM_BUTTONS = {
  confirm: "Sí, eliminar",
  cancel: "Cancelar",
};

export const VALIDATION_MESSAGES = {
  clienteIdRequired: "El cliente es requerido",
  tipoEventoIdRequired: "El tipo de evento es requerido",
  nombreEventoRequired: "El nombre del evento es requerido",
  fechaEventoRequired: "La fecha del evento es requerida",
  horaEventoRequired: "La hora del evento es requerida",
  numeroInvitadosRequired: "El número de invitados es requerido",
  numeroInvitadosMinimum: "El número de invitados debe ser mayor a 0",
  ubicacionRequired: "La ubicación es requerida",
  estadoActualIdRequired: "El estado actual es requerido",
  observacionesRequired: "Las observaciones son requeridas",
};

export const SEARCH_TEXTS = {
  placeholder: "Buscar cotización aquí...",
  addButtonLabel: "Agregar Nueva Cotización",
};

export const TABLE_HEADERS = [
  { id: "id", label: "ID" },
  { id: "nombreEvento", label: "Nombre del Evento" },
  { id: "clienteId", label: "Cliente" },
  { id: "fechaEvento", label: "Fecha del Evento" },
  { id: "numeroInvitados", label: "Número de Invitados" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "estadoActualId", label: "Estado" },
  { id: "createdAt", label: "Fecha de Creación" },
  { id: "actions", label: "Acciones" },
];

export const TOAST_MESSAGES = {
  createSuccess: "Cotización creada correctamente",
  createError: "Error al crear la cotización",
  updateSuccess: "Cotización actualizada correctamente",
  updateError: "Error al actualizar la cotización",
  deleteSuccess: "Cotización eliminada correctamente",
  deleteError: "Error al eliminar la cotización",
};

export const ACTION_TEXTS = {
  openCreate: "Abriendo formulario de creación...",
  openEdit: "Abriendo editor...",
  openView: "Abriendo vista...",
};

export const ACTION_BUTTONS = {
  view: "Ver",
  edit: "Editar",
  delete: "Eliminar",
};

export enum ModalMode {
  CREATE = "create",
  EDIT = "edit",
  VIEW = "view",
}
