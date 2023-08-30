interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Vehicle Owner', 'Performance Analyst', 'Reservation Manager'],
  tenantName: 'Organization',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal profile information.',
    'Book vehicles.',
    'Manage reservations.',
    'Track vehicle usage.',
  ],
  ownerAbilities: [
    'Manage vehicle information',
    'View all user and vehicle data',
    'Invite other roles to the application',
  ],
};
