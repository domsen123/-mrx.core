import type { Permission, ResolvedRole, Role } from '@mrx/types';
import { BasePermission, BaseRole } from '@mrx/types';

// prettier-ignore
const PERMISSIONS: Permission[] = [
  { id: BasePermission.FULL_MASK, name: 'Full Mask', description: 'Can do anything.' },
  { id: BasePermission.VIEW_ITEM, name: 'View Item', description: 'Can view an item.' },
  { id: BasePermission.UPDATE_ITEM, name: 'Update Item', description: 'Can update an item.' },
  { id: BasePermission.DELETE_ITEM, name: 'Delete Item', description: 'Can delete an item.' },
  { id: BasePermission.CREATE_ITEM, name: 'Create Item', description: 'Can create an item.' },
  { id: BasePermission.APPROVE_ITEM, name: 'Approve Item', description: 'Can approve an item.' },
  { id: BasePermission.VIEW_VERSION, name: 'View Versions', description: 'Can view versions of an item.' },
  { id: BasePermission.DELETE_VERSION, name: 'Delete Versions', description: 'Can delete versions of an item.' },
];

// prettier-ignore
const ROLES: Role[] = [
  { id: BaseRole.FULL_CONTROL, name: 'Full Controll', description: 'Has full controll to a resource.' },
  { id: BaseRole.DESIGN, name: 'Design', description: 'Can view, add, update, delete, approve items and manage versions.' },
  { id: BaseRole.CONTRIBUTE, name: 'Contribute', description: 'Can view, add, update and delete items.' },
  { id: BaseRole.CREATE, name: 'Create', description: 'Can view, add, update items.' },
  { id: BaseRole.READ, name: 'Read', description: 'Can view items.' },
];

// prettier-ignore
const ROLE_PERMISSION_BINDING = [
  // Permissions for Role "Full Controll"
  { role_id: 'full_control', permission_id: 'full_mask' },
  
  // Permissions for Role "Design",
  { role_id: 'design', permission_id: 'view_item' },
  { role_id: 'design', permission_id: 'update_item' },
  { role_id: 'design', permission_id: 'delete_item' },
  { role_id: 'design', permission_id: 'create_item' },
  { role_id: 'design', permission_id: 'approve_item' },
  { role_id: 'design', permission_id: 'view_version' },
  { role_id: 'design', permission_id: 'delete_version' },
 
  // Permissions for Role "Contribute",
  { role_id: 'contribute', permission_id: 'view_item' },
  { role_id: 'contribute', permission_id: 'update_item' },
  { role_id: 'contribute', permission_id: 'delete_item' },
  { role_id: 'contribute', permission_id: 'create_item' },
  
  // Permissions for Role "Create",
  { role_id: 'create', permission_id: 'view_item' },
  { role_id: 'create', permission_id: 'update_item' },
  { role_id: 'create', permission_id: 'create_item' },
  
  // Permissions for Role "Read",
  { role_id: 'create', permission_id: 'view_item' },
]

export const ResolveRole = (id: BaseRole) => ({
  ...ROLES.find((r) => r.id === id),
  permissions: PERMISSIONS.filter((p) =>
    ROLE_PERMISSION_BINDING.filter((b) => b.role_id === id)
      .map((b) => b.permission_id)
      .includes(p.id),
  ),
});
