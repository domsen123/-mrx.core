export enum BasePermission {
  FULL_MASK = 'full_mask',
  VIEW_ITEM = 'view_item',
  UPDATE_ITEM = 'update_item',
  DELETE_ITEM = 'delete_item',
  CREATE_ITEM = 'create_item',
  APPROVE_ITEM = 'approve_item',
  VIEW_VERSION = 'view_version',
  DELETE_VERSION = 'delete_version',
}

export enum BaseRole {
  FULL_CONTROL = 'full_control',
  DESIGN = 'design',
  CONTRIBUTE = 'contribute',
  CREATE = 'create',
  READ = 'read',
}

export interface Permission {
  id: BasePermission;
  name: string;
  description: string;
}

export interface Role {
  id: BaseRole;
  name: string;
  description: string;
}

export interface ResolvedRole extends Role {
  permissions: Permission[];
}
