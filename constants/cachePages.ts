export const withoutCache: string[] = [
  'userService.getUser',
  'userService.deleteAvatar',
  'userService.updateUser',
  'userService.userRequiredActions',
  'userService.evaluatePermissions',
]

export const withoutOverride: string[] = [
  'allowedAddresseeService.getAddressees',
  'languageService.getLanguages',
  'memberService.getMembersStatus',
  'userService.getEducationalLevel',
  'userService.getGender',
  'userService.getIdentitiesType',
]

export const cachePages = { withoutCache, withoutOverride }
