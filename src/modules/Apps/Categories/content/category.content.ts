export const QUERY_KEYS = {
  CATEGORIES: ["categories"] as const,
  CATEGORY: (id?: string | number) => ["category", id] as const,
};

export const TEXTS = {
  modalTitles: {
    create: "Crear categoría de servicio",
    edit: "Editar categoría",
    view: "Ver categoría",
  },
  buttons: {
    cancel: "Cancelar",
    delete: "Eliminar",
    save: "Guardar",
    create: "Crear",
  },
};

export const FIELDS = {
  name: "Nombre",
  description: "Descripción",
  user: "Usuario",
  userSelectLabel: "Usuario",
  status: "Estado",
};

export const CONFIRMS = {
  deleteCategory: "Eliminar categoría",
  deleteConfirmation: "¿Estás seguro de que deseas eliminar esta categoría?",
};

export const CONFIRM_BUTTONS = {
  confirm: "Sí, eliminar",
  cancel: "Cancelar",
};

export const VALIDATION_MESSAGES = {
  nameRequired: "El nombre es requerido",
  descriptionRequired: "La descripción es requerida",
  userRequired: "Seleccione un usuario",
};

export const SEARCH_TEXTS = {
  placeholder: "Busca aquí...",
  addButtonLabel: "Agregar Nueva Categoría",
};

export const TABLE_HEADERS = [
  { id: "id", label: "ID" },
  { id: "nombre", label: "Nombre" },
  { id: "descripcion", label: "Descripción" },
  { id: "createdAt", label: "Fecha" },
  { id: "userId", label: "Usuario" },
  { id: "actions", label: "Acciones" },
];

export const TOAST_MESSAGES = {
  createSuccess: "Categoría creada correctamente",
  createError: "Error al crear la categoría",
  updateSuccess: "Categoría actualizada correctamente",
  updateError: "Error al actualizar la categoría",
  deleteSuccess: "Categoría eliminada correctamente",
  deleteError: "Error al eliminar la categoría",
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
