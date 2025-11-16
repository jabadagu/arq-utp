export const QUERY_KEYS = {
  EVENT_TYPES: ["eventTypes"] as const,
  EVENT_TYPE: (id?: string) => ["eventType", id] as const,
};

export const TEXTS = {
  modalTitles: {
    create: "Crear tipo de evento",
    edit: "Editar tipo de evento",
    view: "Ver tipo de evento",
  },
  buttons: {
    cancel: "Cancelar",
    delete: "Eliminar",
    save: "Guardar",
    create: "Crear",
  },
};

export const FIELDS = {
  nombre: "Nombre",
  descripcion: "Descripción", 
  userId: "Usuario ID",
};

export const CONFIRMS = {
  deleteEventType: "Eliminar tipo de evento",
  deleteConfirmation: "¿Estás seguro de que deseas eliminar este tipo de evento?",
};

export const CONFIRM_BUTTONS = {
  confirm: "Sí, eliminar",
  cancel: "Cancelar",
};

export const VALIDATION_MESSAGES = {
  nombreRequired: "El nombre es requerido",
  descripcionRequired: "La descripción es requerida",
  userIdRequired: "El usuario es requerido",
};

export const SEARCH_TEXTS = {
  placeholder: "Buscar tipo de evento aquí...",
  addButtonLabel: "Agregar Nuevo Tipo de Evento",
};

export const TABLE_HEADERS = [
  { id: "id", label: "ID" },
  { id: "nombre", label: "Nombre del Tipo" },
  { id: "descripcion", label: "Descripción" },
  { id: "userId", label: "Usuario ID" },
  { id: "createdAt", label: "Fecha de Creación" },
  { id: "actions", label: "Acciones" },
];

export const TOAST_MESSAGES = {
  createSuccess: "Tipo de evento creado correctamente",
  createError: "Error al crear el tipo de evento",
  updateSuccess: "Tipo de evento actualizado correctamente",
  updateError: "Error al actualizar el tipo de evento",
  deleteSuccess: "Tipo de evento eliminado correctamente",
  deleteError: "Error al eliminar el tipo de evento",
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
