export const QUERY_KEYS = {
  SERVICES: ["services"] as const,
  SERVICE: (id?: string) => ["service", id] as const,
};

export const TEXTS = {
  modalTitles: {
    create: "Crear servicio",
    edit: "Editar servicio",
    view: "Ver servicio",
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
  precioBase: "Precio Base",
  categoriaId: "Categoría",
  disponible: "Disponible",
  status: "Estado",
  userId: "Usuario ID",
};

export const CONFIRMS = {
  deleteService: "Eliminar servicio",
  deleteConfirmation: "¿Estás seguro de que deseas eliminar este servicio?",
};

export const CONFIRM_BUTTONS = {
  confirm: "Sí, eliminar",
  cancel: "Cancelar",
};

export const VALIDATION_MESSAGES = {
  nombreRequired: "El nombre es requerido",
  descripcionRequired: "La descripción es requerida",
  precioBaseRequired: "El precio base es requerido",
  precioBaseMinimum: "El precio debe ser mayor a 0",
  categoriaIdRequired: "La categoría es requerida",
  userIdRequired: "El usuario es requerido",
};

export const SEARCH_TEXTS = {
  placeholder: "Buscar servicio aquí...",
  addButtonLabel: "Agregar Nuevo Servicio",
};

export const TABLE_HEADERS = [
  { id: "id", label: "ID" },
  { id: "nombre", label: "Nombre del Servicio" },
  { id: "descripcion", label: "Descripción" },
  { id: "precioBase", label: "Precio Base" },
  { id: "categoriaId", label: "Categoría" },
  { id: "disponible", label: "Disponible" },
  { id: "status", label: "Estado" },
  { id: "createdAt", label: "Fecha de Creación" },
  { id: "actions", label: "Acciones" },
];

export const TOAST_MESSAGES = {
  createSuccess: "Servicio creado correctamente",
  createError: "Error al crear el servicio",
  updateSuccess: "Servicio actualizado correctamente",
  updateError: "Error al actualizar el servicio",
  deleteSuccess: "Servicio eliminado correctamente",
  deleteError: "Error al eliminar el servicio",
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
