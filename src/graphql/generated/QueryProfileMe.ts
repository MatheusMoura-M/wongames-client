/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfileMe
// ====================================================

export interface QueryProfileMe_usersPermissionsUser {
  __typename: 'UsersPermissionsUser'
  documentId: string
  username: string
  email: string
}

export interface QueryProfileMe {
  usersPermissionsUser: QueryProfileMe_usersPermissionsUser | null
}

export interface QueryProfileMeVariables {
  documentId: string
}
