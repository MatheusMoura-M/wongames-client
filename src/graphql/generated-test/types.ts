export type Maybe<T> = T | null
export type InputMaybe<T> = T | null | undefined
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  JSON: { input: any; output: any }
  Long: { input: any; output: any }
}

export type Banner = {
  __typename: 'Banner'
  button: Maybe<ComponentPageButton>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  image: UploadFile
  publishedAt: Maybe<Scalars['DateTime']['output']>
  ribbon: Maybe<ComponentPageRibbon>
  subtitle: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type BannerEntityResponseCollection = {
  __typename: 'BannerEntityResponseCollection'
  nodes: Array<Banner>
  pageInfo: Pagination
}

export type BannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>
  button?: InputMaybe<ComponentPageButtonFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<BannerFiltersInput>
  not?: InputMaybe<BannerFiltersInput>
  or?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  ribbon?: InputMaybe<ComponentPageRibbonFiltersInput>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type BannerInput = {
  button?: InputMaybe<ComponentPageButtonInput>
  image?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  ribbon?: InputMaybe<ComponentPageRibbonInput>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  contains?: InputMaybe<Scalars['Boolean']['input']>
  containsi?: InputMaybe<Scalars['Boolean']['input']>
  endsWith?: InputMaybe<Scalars['Boolean']['input']>
  eq?: InputMaybe<Scalars['Boolean']['input']>
  eqi?: InputMaybe<Scalars['Boolean']['input']>
  gt?: InputMaybe<Scalars['Boolean']['input']>
  gte?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  lt?: InputMaybe<Scalars['Boolean']['input']>
  lte?: InputMaybe<Scalars['Boolean']['input']>
  ne?: InputMaybe<Scalars['Boolean']['input']>
  nei?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']['input']>
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  startsWith?: InputMaybe<Scalars['Boolean']['input']>
}

export type Category = {
  __typename: 'Category'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  games: Array<Maybe<Game>>
  games_connection: Maybe<GameRelationResponseCollection>
  name: Scalars['String']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  slug: Maybe<Scalars['String']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type CategorygamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Categorygames_connectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CategoryEntityResponseCollection = {
  __typename: 'CategoryEntityResponseCollection'
  nodes: Array<Category>
  pageInfo: Pagination
}

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  games?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<CategoryFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CategoryInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type CategoryRelationResponseCollection = {
  __typename: 'CategoryRelationResponseCollection'
  nodes: Array<Category>
}

export type ComponentPageButton = {
  __typename: 'ComponentPageButton'
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  link: Scalars['String']['output']
}

export type ComponentPageButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageButtonFiltersInput>>>
  label?: InputMaybe<StringFilterInput>
  link?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentPageButtonFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentPageButtonFiltersInput>>>
}

export type ComponentPageButtonInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  link?: InputMaybe<Scalars['String']['input']>
}

export type ComponentPageHighlight = {
  __typename: 'ComponentPageHighlight'
  alignment: Maybe<ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT>
  background: UploadFile
  buttonLabel: Scalars['String']['output']
  buttonLink: Scalars['String']['output']
  floatImage: Maybe<UploadFile>
  id: Scalars['ID']['output']
  subtitle: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type ComponentPageHighlightInput = {
  alignment?: InputMaybe<ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT>
  background?: InputMaybe<Scalars['ID']['input']>
  buttonLabel?: InputMaybe<Scalars['String']['input']>
  buttonLink?: InputMaybe<Scalars['String']['input']>
  floatImage?: InputMaybe<Scalars['ID']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentPagePopularGames = {
  __typename: 'ComponentPagePopularGames'
  games: Array<Maybe<Game>>
  games_connection: Maybe<GameRelationResponseCollection>
  highlight: Maybe<ComponentPageHighlight>
  id: Scalars['ID']['output']
  title: Scalars['String']['output']
}

export type ComponentPagePopularGamesgamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentPagePopularGamesgames_connectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentPagePopularGamesInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  highlight?: InputMaybe<ComponentPageHighlightInput>
  id?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentPageRibbon = {
  __typename: 'ComponentPageRibbon'
  color: Maybe<ENUM_COMPONENTPAGERIBBON_COLOR>
  id: Scalars['ID']['output']
  size: Maybe<ENUM_COMPONENTPAGERIBBON_SIZE>
  text: Maybe<Scalars['String']['output']>
}

export type ComponentPageRibbonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageRibbonFiltersInput>>>
  color?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentPageRibbonFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentPageRibbonFiltersInput>>>
  size?: InputMaybe<StringFilterInput>
  text?: InputMaybe<StringFilterInput>
}

export type ComponentPageRibbonInput = {
  color?: InputMaybe<ENUM_COMPONENTPAGERIBBON_COLOR>
  id?: InputMaybe<Scalars['ID']['input']>
  size?: InputMaybe<ENUM_COMPONENTPAGERIBBON_SIZE>
  text?: InputMaybe<Scalars['String']['input']>
}

export type ComponentPageRibon = {
  __typename: 'ComponentPageRibon'
  color: Maybe<ENUM_COMPONENTPAGERIBON_COLOR>
  id: Scalars['ID']['output']
  size: Maybe<ENUM_COMPONENTPAGERIBON_SIZE>
  text: Maybe<Scalars['String']['output']>
}

export type ComponentPageSection = {
  __typename: 'ComponentPageSection'
  highlight: Maybe<ComponentPageHighlight>
  id: Scalars['ID']['output']
  title: Maybe<Scalars['String']['output']>
}

export type ComponentPageSectionInput = {
  highlight?: InputMaybe<ComponentPageHighlightInput>
  id?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentSharedMedia = {
  __typename: 'ComponentSharedMedia'
  file: Maybe<UploadFile>
  id: Scalars['ID']['output']
}

export type ComponentSharedQuote = {
  __typename: 'ComponentSharedQuote'
  body: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  title: Maybe<Scalars['String']['output']>
}

export type ComponentSharedRichText = {
  __typename: 'ComponentSharedRichText'
  body: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
}

export type ComponentSharedSeo = {
  __typename: 'ComponentSharedSeo'
  id: Scalars['ID']['output']
  metaDescription: Scalars['String']['output']
  metaTitle: Scalars['String']['output']
  shareImage: Maybe<UploadFile>
}

export type ComponentSharedSlider = {
  __typename: 'ComponentSharedSlider'
  files: Array<Maybe<UploadFile>>
  files_connection: Maybe<UploadFileRelationResponseCollection>
  id: Scalars['ID']['output']
}

export type ComponentSharedSliderfilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSharedSliderfiles_connectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  contains?: InputMaybe<Scalars['Date']['input']>
  containsi?: InputMaybe<Scalars['Date']['input']>
  endsWith?: InputMaybe<Scalars['Date']['input']>
  eq?: InputMaybe<Scalars['Date']['input']>
  eqi?: InputMaybe<Scalars['Date']['input']>
  gt?: InputMaybe<Scalars['Date']['input']>
  gte?: InputMaybe<Scalars['Date']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  lt?: InputMaybe<Scalars['Date']['input']>
  lte?: InputMaybe<Scalars['Date']['input']>
  ne?: InputMaybe<Scalars['Date']['input']>
  nei?: InputMaybe<Scalars['Date']['input']>
  not?: InputMaybe<DateFilterInput>
  notContains?: InputMaybe<Scalars['Date']['input']>
  notContainsi?: InputMaybe<Scalars['Date']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  startsWith?: InputMaybe<Scalars['Date']['input']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contains?: InputMaybe<Scalars['DateTime']['input']>
  containsi?: InputMaybe<Scalars['DateTime']['input']>
  endsWith?: InputMaybe<Scalars['DateTime']['input']>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  eqi?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  ne?: InputMaybe<Scalars['DateTime']['input']>
  nei?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']['input']>
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startsWith?: InputMaybe<Scalars['DateTime']['input']>
}

export type DeleteMutationResponse = {
  __typename: 'DeleteMutationResponse'
  documentId: Scalars['ID']['output']
}

export type Developer = {
  __typename: 'Developer'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  games: Array<Maybe<Game>>
  games_connection: Maybe<GameRelationResponseCollection>
  name: Scalars['String']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  slug: Maybe<Scalars['String']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type DevelopergamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Developergames_connectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type DeveloperEntityResponseCollection = {
  __typename: 'DeveloperEntityResponseCollection'
  nodes: Array<Developer>
  pageInfo: Pagination
}

export type DeveloperFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  games?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<DeveloperFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<DeveloperFiltersInput>
  or?: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type DeveloperInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type DeveloperRelationResponseCollection = {
  __typename: 'DeveloperRelationResponseCollection'
  nodes: Array<Developer>
}

export enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
  left = 'left',
  right = 'right'
}

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = 'normal',
  small = 'small'
}

export enum ENUM_COMPONENTPAGERIBON_COLOR {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ENUM_COMPONENTPAGERIBON_SIZE {
  normal = 'normal',
  small = 'small'
}

export enum ENUM_GAME_RATING {
  BR0 = 'BR0',
  BR10 = 'BR10',
  BR12 = 'BR12',
  BR14 = 'BR14',
  BR16 = 'BR16',
  BR18 = 'BR18'
}

export type EmailDesigner5EmailDesignerTemplate = {
  __typename: 'EmailDesigner5EmailDesignerTemplate'
  bodyHtml: Maybe<Scalars['String']['output']>
  bodyText: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  design: Maybe<Scalars['JSON']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  subject: Maybe<Scalars['String']['output']>
  tags: Maybe<Scalars['JSON']['output']>
  templateReferenceId: Maybe<Scalars['Int']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  versions: Array<Maybe<EmailDesigner5EmailDesignerTemplateVersion>>
  versions_connection: Maybe<EmailDesigner5EmailDesignerTemplateVersionRelationResponseCollection>
}

export type EmailDesigner5EmailDesignerTemplateversionsArgs = {
  filters?: InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type EmailDesigner5EmailDesignerTemplateversions_connectionArgs = {
  filters?: InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type EmailDesigner5EmailDesignerTemplateEntityResponseCollection = {
  __typename: 'EmailDesigner5EmailDesignerTemplateEntityResponseCollection'
  nodes: Array<EmailDesigner5EmailDesignerTemplate>
  pageInfo: Pagination
}

export type EmailDesigner5EmailDesignerTemplateFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<EmailDesigner5EmailDesignerTemplateFiltersInput>>
  >
  bodyHtml?: InputMaybe<StringFilterInput>
  bodyText?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  design?: InputMaybe<JSONFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<EmailDesigner5EmailDesignerTemplateFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EmailDesigner5EmailDesignerTemplateFiltersInput>
  or?: InputMaybe<
    Array<InputMaybe<EmailDesigner5EmailDesignerTemplateFiltersInput>>
  >
  publishedAt?: InputMaybe<DateTimeFilterInput>
  subject?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<JSONFilterInput>
  templateReferenceId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  versions?: InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>
}

export type EmailDesigner5EmailDesignerTemplateInput = {
  bodyHtml?: InputMaybe<Scalars['String']['input']>
  bodyText?: InputMaybe<Scalars['String']['input']>
  design?: InputMaybe<Scalars['JSON']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  subject?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Scalars['JSON']['input']>
  templateReferenceId?: InputMaybe<Scalars['Int']['input']>
  versions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type EmailDesigner5EmailDesignerTemplateVersion = {
  __typename: 'EmailDesigner5EmailDesignerTemplateVersion'
  bodyHtml: Maybe<Scalars['String']['output']>
  bodyText: Maybe<Scalars['String']['output']>
  changeReason: Maybe<Scalars['String']['output']>
  changedBy: Maybe<Scalars['String']['output']>
  changesSummary: Maybe<Scalars['JSON']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  design: Maybe<Scalars['JSON']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  subject: Maybe<Scalars['String']['output']>
  tags: Maybe<Scalars['JSON']['output']>
  templateId: Maybe<EmailDesigner5EmailDesignerTemplate>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  versionNumber: Maybe<Scalars['Int']['output']>
}

export type EmailDesigner5EmailDesignerTemplateVersionEntityResponseCollection =
  {
    __typename: 'EmailDesigner5EmailDesignerTemplateVersionEntityResponseCollection'
    nodes: Array<EmailDesigner5EmailDesignerTemplateVersion>
    pageInfo: Pagination
  }

export type EmailDesigner5EmailDesignerTemplateVersionFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>>
  >
  bodyHtml?: InputMaybe<StringFilterInput>
  bodyText?: InputMaybe<StringFilterInput>
  changeReason?: InputMaybe<StringFilterInput>
  changedBy?: InputMaybe<StringFilterInput>
  changesSummary?: InputMaybe<JSONFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  design?: InputMaybe<JSONFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>
  or?: InputMaybe<
    Array<InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>>
  >
  publishedAt?: InputMaybe<DateTimeFilterInput>
  subject?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<JSONFilterInput>
  templateId?: InputMaybe<EmailDesigner5EmailDesignerTemplateFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  versionNumber?: InputMaybe<IntFilterInput>
}

export type EmailDesigner5EmailDesignerTemplateVersionInput = {
  bodyHtml?: InputMaybe<Scalars['String']['input']>
  bodyText?: InputMaybe<Scalars['String']['input']>
  changeReason?: InputMaybe<Scalars['String']['input']>
  changedBy?: InputMaybe<Scalars['String']['input']>
  changesSummary?: InputMaybe<Scalars['JSON']['input']>
  design?: InputMaybe<Scalars['JSON']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  subject?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Scalars['JSON']['input']>
  templateId?: InputMaybe<Scalars['ID']['input']>
  versionNumber?: InputMaybe<Scalars['Int']['input']>
}

export type EmailDesigner5EmailDesignerTemplateVersionRelationResponseCollection =
  {
    __typename: 'EmailDesigner5EmailDesignerTemplateVersionRelationResponseCollection'
    nodes: Array<EmailDesigner5EmailDesignerTemplateVersion>
  }

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  contains?: InputMaybe<Scalars['Float']['input']>
  containsi?: InputMaybe<Scalars['Float']['input']>
  endsWith?: InputMaybe<Scalars['Float']['input']>
  eq?: InputMaybe<Scalars['Float']['input']>
  eqi?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  ne?: InputMaybe<Scalars['Float']['input']>
  nei?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']['input']>
  notContainsi?: InputMaybe<Scalars['Float']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  startsWith?: InputMaybe<Scalars['Float']['input']>
}

export type Game = {
  __typename: 'Game'
  categories: Array<Maybe<Category>>
  categories_connection: Maybe<CategoryRelationResponseCollection>
  cover: Maybe<UploadFile>
  createdAt: Maybe<Scalars['DateTime']['output']>
  description: Maybe<Scalars['String']['output']>
  description_two: Maybe<Scalars['String']['output']>
  developers: Array<Maybe<Developer>>
  developers_connection: Maybe<DeveloperRelationResponseCollection>
  documentId: Scalars['ID']['output']
  gallery: Array<Maybe<UploadFile>>
  gallery_connection: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']['output']
  platforms: Array<Maybe<Platform>>
  platforms_connection: Maybe<PlatformRelationResponseCollection>
  price: Scalars['Float']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  publisher: Maybe<Publisher>
  rating: Maybe<ENUM_GAME_RATING>
  release_date: Maybe<Scalars['Date']['output']>
  short_description: Maybe<Scalars['String']['output']>
  slug: Scalars['String']['output']
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type GamecategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Gamecategories_connectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GamedevelopersArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Gamedevelopers_connectionArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GamegalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Gamegallery_connectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GameplatformsArgs = {
  filters?: InputMaybe<PlatformFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Gameplatforms_connectionArgs = {
  filters?: InputMaybe<PlatformFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GameEntityResponseCollection = {
  __typename: 'GameEntityResponseCollection'
  nodes: Array<Game>
  pageInfo: Pagination
}

export type GameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  categories?: InputMaybe<CategoryFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  description_two?: InputMaybe<StringFilterInput>
  developers?: InputMaybe<DeveloperFiltersInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<GameFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<GameFiltersInput>
  or?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  platforms?: InputMaybe<PlatformFiltersInput>
  price?: InputMaybe<FloatFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  publisher?: InputMaybe<PublisherFiltersInput>
  rating?: InputMaybe<StringFilterInput>
  release_date?: InputMaybe<DateFilterInput>
  short_description?: InputMaybe<StringFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type GameInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  cover?: InputMaybe<Scalars['ID']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  description_two?: InputMaybe<Scalars['String']['input']>
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  platforms?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  price?: InputMaybe<Scalars['Float']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  publisher?: InputMaybe<Scalars['ID']['input']>
  rating?: InputMaybe<ENUM_GAME_RATING>
  release_date?: InputMaybe<Scalars['Date']['input']>
  short_description?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type GameRelationResponseCollection = {
  __typename: 'GameRelationResponseCollection'
  nodes: Array<Game>
}

export type GenericMorph =
  | Banner
  | Category
  | ComponentPageButton
  | ComponentPageHighlight
  | ComponentPagePopularGames
  | ComponentPageRibbon
  | ComponentPageRibon
  | ComponentPageSection
  | ComponentSharedMedia
  | ComponentSharedQuote
  | ComponentSharedRichText
  | ComponentSharedSeo
  | ComponentSharedSlider
  | Developer
  | EmailDesigner5EmailDesignerTemplate
  | EmailDesigner5EmailDesignerTemplateVersion
  | Game
  | Home
  | I18NLocale
  | Order
  | Platform
  | Publisher
  | Recommended
  | ReviewWorkflowsWorkflow
  | ReviewWorkflowsWorkflowStage
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Wishlist

export type Home = {
  __typename: 'Home'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  freeGames: Maybe<ComponentPageSection>
  newGames: Maybe<ComponentPageSection>
  popularGames: Maybe<ComponentPagePopularGames>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  upcomingGames: Maybe<ComponentPageSection>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type HomeInput = {
  freeGames?: InputMaybe<ComponentPageSectionInput>
  locale?: InputMaybe<Scalars['String']['input']>
  newGames?: InputMaybe<ComponentPageSectionInput>
  popularGames?: InputMaybe<ComponentPagePopularGamesInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  upcomingGames?: InputMaybe<ComponentPageSectionInput>
}

export type I18NLocale = {
  __typename: 'I18NLocale'
  code: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type I18NLocaleEntityResponseCollection = {
  __typename: 'I18NLocaleEntityResponseCollection'
  nodes: Array<I18NLocale>
  pageInfo: Pagination
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<I18NLocaleFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IDFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  contains?: InputMaybe<Scalars['ID']['input']>
  containsi?: InputMaybe<Scalars['ID']['input']>
  endsWith?: InputMaybe<Scalars['ID']['input']>
  eq?: InputMaybe<Scalars['ID']['input']>
  eqi?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  ne?: InputMaybe<Scalars['ID']['input']>
  nei?: InputMaybe<Scalars['ID']['input']>
  not?: InputMaybe<IDFilterInput>
  notContains?: InputMaybe<Scalars['ID']['input']>
  notContainsi?: InputMaybe<Scalars['ID']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  startsWith?: InputMaybe<Scalars['ID']['input']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  contains?: InputMaybe<Scalars['Int']['input']>
  containsi?: InputMaybe<Scalars['Int']['input']>
  endsWith?: InputMaybe<Scalars['Int']['input']>
  eq?: InputMaybe<Scalars['Int']['input']>
  eqi?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  nei?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']['input']>
  notContainsi?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startsWith?: InputMaybe<Scalars['Int']['input']>
}

export type JSONFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  contains?: InputMaybe<Scalars['JSON']['input']>
  containsi?: InputMaybe<Scalars['JSON']['input']>
  endsWith?: InputMaybe<Scalars['JSON']['input']>
  eq?: InputMaybe<Scalars['JSON']['input']>
  eqi?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  ne?: InputMaybe<Scalars['JSON']['input']>
  nei?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<JSONFilterInput>
  notContains?: InputMaybe<Scalars['JSON']['input']>
  notContainsi?: InputMaybe<Scalars['JSON']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  startsWith?: InputMaybe<Scalars['JSON']['input']>
}

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  contains?: InputMaybe<Scalars['Long']['input']>
  containsi?: InputMaybe<Scalars['Long']['input']>
  endsWith?: InputMaybe<Scalars['Long']['input']>
  eq?: InputMaybe<Scalars['Long']['input']>
  eqi?: InputMaybe<Scalars['Long']['input']>
  gt?: InputMaybe<Scalars['Long']['input']>
  gte?: InputMaybe<Scalars['Long']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  lt?: InputMaybe<Scalars['Long']['input']>
  lte?: InputMaybe<Scalars['Long']['input']>
  ne?: InputMaybe<Scalars['Long']['input']>
  nei?: InputMaybe<Scalars['Long']['input']>
  not?: InputMaybe<LongFilterInput>
  notContains?: InputMaybe<Scalars['Long']['input']>
  notContainsi?: InputMaybe<Scalars['Long']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  startsWith?: InputMaybe<Scalars['Long']['input']>
}

export type Mutation = {
  __typename: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>
  createBanner: Maybe<Banner>
  createCategory: Maybe<Category>
  createDeveloper: Maybe<Developer>
  createEmailDesigner5EmailDesignerTemplate: Maybe<EmailDesigner5EmailDesignerTemplate>
  createEmailDesigner5EmailDesignerTemplateVersion: Maybe<EmailDesigner5EmailDesignerTemplateVersion>
  createGame: Maybe<Game>
  createOrder: Maybe<Order>
  createPlatform: Maybe<Platform>
  createPublisher: Maybe<Publisher>
  createReviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>
  createReviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  createWishlist: Maybe<Wishlist>
  deleteBanner: Maybe<DeleteMutationResponse>
  deleteCategory: Maybe<DeleteMutationResponse>
  deleteDeveloper: Maybe<DeleteMutationResponse>
  deleteEmailDesigner5EmailDesignerTemplate: Maybe<DeleteMutationResponse>
  deleteEmailDesigner5EmailDesignerTemplateVersion: Maybe<DeleteMutationResponse>
  deleteGame: Maybe<DeleteMutationResponse>
  deleteHome: Maybe<DeleteMutationResponse>
  deleteOrder: Maybe<DeleteMutationResponse>
  deletePlatform: Maybe<DeleteMutationResponse>
  deletePublisher: Maybe<DeleteMutationResponse>
  deleteRecommended: Maybe<DeleteMutationResponse>
  deleteReviewWorkflowsWorkflow: Maybe<DeleteMutationResponse>
  deleteReviewWorkflowsWorkflowStage: Maybe<DeleteMutationResponse>
  deleteUploadFile: Maybe<UploadFile>
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteWishlist: Maybe<DeleteMutationResponse>
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  /** Register a user */
  register: UsersPermissionsLoginPayload
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>
  updateBanner: Maybe<Banner>
  updateCategory: Maybe<Category>
  updateDeveloper: Maybe<Developer>
  updateEmailDesigner5EmailDesignerTemplate: Maybe<EmailDesigner5EmailDesignerTemplate>
  updateEmailDesigner5EmailDesignerTemplateVersion: Maybe<EmailDesigner5EmailDesignerTemplateVersion>
  updateGame: Maybe<Game>
  updateHome: Maybe<Home>
  updateOrder: Maybe<Order>
  updatePlatform: Maybe<Platform>
  updatePublisher: Maybe<Publisher>
  updateRecommended: Maybe<Recommended>
  updateReviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>
  updateReviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>
  updateUploadFile: UploadFile
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  updateWishlist: Maybe<Wishlist>
}

export type MutationchangePasswordArgs = {
  currentPassword: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationcreateBannerArgs = {
  data: BannerInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateCategoryArgs = {
  data: CategoryInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateDeveloperArgs = {
  data: DeveloperInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateEmailDesigner5EmailDesignerTemplateArgs = {
  data: EmailDesigner5EmailDesignerTemplateInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateEmailDesigner5EmailDesignerTemplateVersionArgs = {
  data: EmailDesigner5EmailDesignerTemplateVersionInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateGameArgs = {
  data: GameInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateOrderArgs = {
  data: OrderInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreatePlatformArgs = {
  data: PlatformInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreatePublisherArgs = {
  data: PublisherInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationcreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationcreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationcreateWishlistArgs = {
  data: WishlistInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationdeleteBannerArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteCategoryArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteDeveloperArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteEmailDesigner5EmailDesignerTemplateArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteEmailDesigner5EmailDesignerTemplateVersionArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteGameArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteOrderArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeletePlatformArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeletePublisherArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationdeleteUploadFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationdeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input']
}

export type MutationdeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input']
}

export type MutationdeleteWishlistArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationemailConfirmationArgs = {
  confirmation: Scalars['String']['input']
}

export type MutationforgotPasswordArgs = {
  email: Scalars['String']['input']
}

export type MutationloginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationregisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationresetPasswordArgs = {
  code: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationupdateBannerArgs = {
  data: BannerInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateCategoryArgs = {
  data: CategoryInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateDeveloperArgs = {
  data: DeveloperInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateEmailDesigner5EmailDesignerTemplateArgs = {
  data: EmailDesigner5EmailDesignerTemplateInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateEmailDesigner5EmailDesignerTemplateVersionArgs = {
  data: EmailDesigner5EmailDesignerTemplateVersionInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateGameArgs = {
  data: GameInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateHomeArgs = {
  data: HomeInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateOrderArgs = {
  data: OrderInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdatePlatformArgs = {
  data: PlatformInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdatePublisherArgs = {
  data: PublisherInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateRecommendedArgs = {
  data: RecommendedInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationupdateUploadFileArgs = {
  id: Scalars['ID']['input']
  info?: InputMaybe<FileInfoInput>
}

export type MutationupdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']['input']
}

export type MutationupdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']['input']
}

export type MutationupdateWishlistArgs = {
  data: WishlistInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type Order = {
  __typename: 'Order'
  card_brand: Maybe<Scalars['String']['output']>
  card_last4: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  games: Array<Maybe<Game>>
  games_connection: Maybe<GameRelationResponseCollection>
  payment_intent_id: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  total_in_cents: Scalars['Long']['output']
  updatedAt: Maybe<Scalars['DateTime']['output']>
  user: Maybe<UsersPermissionsUser>
}

export type OrdergamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Ordergames_connectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type OrderEntityResponseCollection = {
  __typename: 'OrderEntityResponseCollection'
  nodes: Array<Order>
  pageInfo: Pagination
}

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>
  card_brand?: InputMaybe<StringFilterInput>
  card_last4?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  games?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<OrderFiltersInput>
  not?: InputMaybe<OrderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>
  payment_intent_id?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  total_in_cents?: InputMaybe<LongFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  user?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type OrderInput = {
  card_brand?: InputMaybe<Scalars['String']['input']>
  card_last4?: InputMaybe<Scalars['String']['input']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  locale?: InputMaybe<Scalars['String']['input']>
  payment_intent_id?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  total_in_cents?: InputMaybe<Scalars['Long']['input']>
  user?: InputMaybe<Scalars['ID']['input']>
}

export type Pagination = {
  __typename: 'Pagination'
  page: Scalars['Int']['output']
  pageCount: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
}

export type Platform = {
  __typename: 'Platform'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  games: Array<Maybe<Game>>
  games_connection: Maybe<GameRelationResponseCollection>
  name: Scalars['String']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  slug: Maybe<Scalars['String']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type PlatformgamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Platformgames_connectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PlatformEntityResponseCollection = {
  __typename: 'PlatformEntityResponseCollection'
  nodes: Array<Platform>
  pageInfo: Pagination
}

export type PlatformFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  games?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<PlatformFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PlatformFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PlatformInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type PlatformRelationResponseCollection = {
  __typename: 'PlatformRelationResponseCollection'
  nodes: Array<Platform>
}

export enum PublicationStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED'
}

export type Publisher = {
  __typename: 'Publisher'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  games: Array<Maybe<Game>>
  games_connection: Maybe<GameRelationResponseCollection>
  name: Scalars['String']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  slug: Maybe<Scalars['String']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type PublishergamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Publishergames_connectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PublisherEntityResponseCollection = {
  __typename: 'PublisherEntityResponseCollection'
  nodes: Array<Publisher>
  pageInfo: Pagination
}

export type PublisherFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  games?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<PublisherFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PublisherFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PublisherInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type Query = {
  __typename: 'Query'
  banner: Maybe<Banner>
  banners: Array<Maybe<Banner>>
  banners_connection: Maybe<BannerEntityResponseCollection>
  categories: Array<Maybe<Category>>
  categories_connection: Maybe<CategoryEntityResponseCollection>
  category: Maybe<Category>
  developer: Maybe<Developer>
  developers: Array<Maybe<Developer>>
  developers_connection: Maybe<DeveloperEntityResponseCollection>
  emailDesigner5EmailDesignerTemplate: Maybe<EmailDesigner5EmailDesignerTemplate>
  emailDesigner5EmailDesignerTemplateVersion: Maybe<EmailDesigner5EmailDesignerTemplateVersion>
  emailDesigner5EmailDesignerTemplateVersions: Array<
    Maybe<EmailDesigner5EmailDesignerTemplateVersion>
  >
  emailDesigner5EmailDesignerTemplateVersions_connection: Maybe<EmailDesigner5EmailDesignerTemplateVersionEntityResponseCollection>
  emailDesigner5EmailDesignerTemplates: Array<
    Maybe<EmailDesigner5EmailDesignerTemplate>
  >
  emailDesigner5EmailDesignerTemplates_connection: Maybe<EmailDesigner5EmailDesignerTemplateEntityResponseCollection>
  game: Maybe<Game>
  games: Array<Maybe<Game>>
  games_connection: Maybe<GameEntityResponseCollection>
  home: Maybe<Home>
  i18NLocale: Maybe<I18NLocale>
  i18NLocales: Array<Maybe<I18NLocale>>
  i18NLocales_connection: Maybe<I18NLocaleEntityResponseCollection>
  me: Maybe<UsersPermissionsMe>
  order: Maybe<Order>
  orders: Array<Maybe<Order>>
  orders_connection: Maybe<OrderEntityResponseCollection>
  platform: Maybe<Platform>
  platforms: Array<Maybe<Platform>>
  platforms_connection: Maybe<PlatformEntityResponseCollection>
  publisher: Maybe<Publisher>
  publishers: Array<Maybe<Publisher>>
  publishers_connection: Maybe<PublisherEntityResponseCollection>
  recommended: Maybe<Recommended>
  reviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>
  reviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>
  reviewWorkflowsWorkflowStages_connection: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>
  reviewWorkflowsWorkflows_connection: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>
  uploadFile: Maybe<UploadFile>
  uploadFiles: Array<Maybe<UploadFile>>
  uploadFiles_connection: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole: Maybe<UsersPermissionsRole>
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>
  usersPermissionsRoles_connection: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser: Maybe<UsersPermissionsUser>
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>
  usersPermissionsUsers_connection: Maybe<UsersPermissionsUserEntityResponseCollection>
  wishlist: Maybe<Wishlist>
  wishlists: Array<Maybe<Wishlist>>
  wishlists_connection: Maybe<WishlistEntityResponseCollection>
}

export type QuerybannerArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QuerybannersArgs = {
  filters?: InputMaybe<BannerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Querybanners_connectionArgs = {
  filters?: InputMaybe<BannerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QuerycategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Querycategories_connectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QuerycategoryArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QuerydeveloperArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QuerydevelopersArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Querydevelopers_connectionArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryemailDesigner5EmailDesignerTemplateArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryemailDesigner5EmailDesignerTemplateVersionArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryemailDesigner5EmailDesignerTemplateVersionsArgs = {
  filters?: InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryemailDesigner5EmailDesignerTemplateVersions_connectionArgs = {
  filters?: InputMaybe<EmailDesigner5EmailDesignerTemplateVersionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryemailDesigner5EmailDesignerTemplatesArgs = {
  filters?: InputMaybe<EmailDesigner5EmailDesignerTemplateFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryemailDesigner5EmailDesignerTemplates_connectionArgs = {
  filters?: InputMaybe<EmailDesigner5EmailDesignerTemplateFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QuerygameArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QuerygamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Querygames_connectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryhomeArgs = {
  status?: InputMaybe<PublicationStatus>
}

export type Queryi18NLocaleArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type Queryi18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Queryi18NLocales_connectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryorderArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryordersArgs = {
  filters?: InputMaybe<OrderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Queryorders_connectionArgs = {
  filters?: InputMaybe<OrderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryplatformArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryplatformsArgs = {
  filters?: InputMaybe<PlatformFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Queryplatforms_connectionArgs = {
  filters?: InputMaybe<PlatformFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QuerypublisherArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QuerypublishersArgs = {
  filters?: InputMaybe<PublisherFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Querypublishers_connectionArgs = {
  filters?: InputMaybe<PublisherFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryrecommendedArgs = {
  status?: InputMaybe<PublicationStatus>
}

export type QueryreviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryreviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryreviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryreviewWorkflowsWorkflowStages_connectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryreviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryreviewWorkflowsWorkflows_connectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryuploadFileArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryuploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryuploadFiles_connectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryusersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryusersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryusersPermissionsRoles_connectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryusersPermissionsUserArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryusersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryusersPermissionsUsers_connectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QuerywishlistArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QuerywishlistsArgs = {
  filters?: InputMaybe<WishlistFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Querywishlists_connectionArgs = {
  filters?: InputMaybe<WishlistFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Recommended = {
  __typename: 'Recommended'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  section: ComponentPagePopularGames
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type RecommendedInput = {
  locale?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  section?: InputMaybe<ComponentPagePopularGamesInput>
}

export type ReviewWorkflowsWorkflow = {
  __typename: 'ReviewWorkflowsWorkflow'
  contentTypes: Scalars['JSON']['output']
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Scalars['String']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>
  stages_connection: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type ReviewWorkflowsWorkflowstagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ReviewWorkflowsWorkflowstages_connectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename: 'ReviewWorkflowsWorkflowEntityResponseCollection'
  nodes: Array<ReviewWorkflowsWorkflow>
  pageInfo: Pagination
}

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>
  contentTypes?: InputMaybe<JSONFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type ReviewWorkflowsWorkflowStage = {
  __typename: 'ReviewWorkflowsWorkflowStage'
  color: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  workflow: Maybe<ReviewWorkflowsWorkflow>
}

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename: 'ReviewWorkflowsWorkflowStageEntityResponseCollection'
  nodes: Array<ReviewWorkflowsWorkflowStage>
  pageInfo: Pagination
}

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>
  color?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
}

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  workflow?: InputMaybe<Scalars['ID']['input']>
}

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename: 'ReviewWorkflowsWorkflowStageRelationResponseCollection'
  nodes: Array<ReviewWorkflowsWorkflowStage>
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  containsi?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  eq?: InputMaybe<Scalars['String']['input']>
  eqi?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  nei?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']['input']>
  notContainsi?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type UploadFile = {
  __typename: 'UploadFile'
  alternativeText: Maybe<Scalars['String']['output']>
  caption: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  ext: Maybe<Scalars['String']['output']>
  formats: Maybe<Scalars['JSON']['output']>
  hash: Scalars['String']['output']
  height: Maybe<Scalars['Int']['output']>
  mime: Scalars['String']['output']
  name: Scalars['String']['output']
  previewUrl: Maybe<Scalars['String']['output']>
  provider: Scalars['String']['output']
  provider_metadata: Maybe<Scalars['JSON']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  related: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']['output']
  updatedAt: Maybe<Scalars['DateTime']['output']>
  url: Scalars['String']['output']
  width: Maybe<Scalars['Int']['output']>
}

export type UploadFileEntityResponseCollection = {
  __typename: 'UploadFileEntityResponseCollection'
  nodes: Array<UploadFile>
  pageInfo: Pagination
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JSONFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<UploadFileFiltersInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JSONFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileRelationResponseCollection = {
  __typename: 'UploadFileRelationResponseCollection'
  nodes: Array<UploadFile>
}

export type UsersPermissionsCreateRolePayload = {
  __typename: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input']
  password: Scalars['String']['input']
  provider?: Scalars['String']['input']
}

export type UsersPermissionsLoginPayload = {
  __typename: 'UsersPermissionsLoginPayload'
  jwt: Maybe<Scalars['String']['output']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename: 'UsersPermissionsMe'
  blocked: Maybe<Scalars['Boolean']['output']>
  confirmed: Maybe<Scalars['Boolean']['output']>
  email: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  role: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']['output']
}

export type UsersPermissionsMeRole = {
  __typename: 'UsersPermissionsMeRole'
  description: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  type: Maybe<Scalars['String']['output']>
}

export type UsersPermissionsPasswordPayload = {
  __typename: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsPermission = {
  __typename: 'UsersPermissionsPermission'
  action: Scalars['String']['output']
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  role: Maybe<UsersPermissionsRole>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename: 'UsersPermissionsPermissionRelationResponseCollection'
  nodes: Array<UsersPermissionsPermission>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type UsersPermissionsRole = {
  __typename: 'UsersPermissionsRole'
  createdAt: Maybe<Scalars['DateTime']['output']>
  description: Maybe<Scalars['String']['output']>
  documentId: Scalars['ID']['output']
  name: Scalars['String']['output']
  permissions: Array<Maybe<UsersPermissionsPermission>>
  permissions_connection: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  type: Maybe<Scalars['String']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  users: Array<Maybe<UsersPermissionsUser>>
  users_connection: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolepermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRolepermissions_connectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleusersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleusers_connectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename: 'UsersPermissionsRoleEntityResponseCollection'
  nodes: Array<UsersPermissionsRole>
  pageInfo: Pagination
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<UsersPermissionsRoleFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsUser = {
  __typename: 'UsersPermissionsUser'
  blocked: Maybe<Scalars['Boolean']['output']>
  confirmed: Maybe<Scalars['Boolean']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  email: Scalars['String']['output']
  provider: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  role: Maybe<UsersPermissionsRole>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  username: Scalars['String']['output']
}

export type UsersPermissionsUserEntityResponse = {
  __typename: 'UsersPermissionsUserEntityResponse'
  data: Maybe<UsersPermissionsUser>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename: 'UsersPermissionsUserEntityResponseCollection'
  nodes: Array<UsersPermissionsUser>
  pageInfo: Pagination
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  email?: InputMaybe<StringFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<UsersPermissionsUserFiltersInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>
  confirmationToken?: InputMaybe<Scalars['String']['input']>
  confirmed?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename: 'UsersPermissionsUserRelationResponseCollection'
  nodes: Array<UsersPermissionsUser>
}

export type Wishlist = {
  __typename: 'Wishlist'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  games: Array<Maybe<Game>>
  games_connection: Maybe<GameRelationResponseCollection>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  user: Maybe<UsersPermissionsUser>
}

export type WishlistgamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Wishlistgames_connectionArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type WishlistEntityResponseCollection = {
  __typename: 'WishlistEntityResponseCollection'
  nodes: Array<Wishlist>
  pageInfo: Pagination
}

export type WishlistFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WishlistFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  documentId?: InputMaybe<IDFilterInput>
  games?: InputMaybe<GameFiltersInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<WishlistFiltersInput>
  not?: InputMaybe<WishlistFiltersInput>
  or?: InputMaybe<Array<InputMaybe<WishlistFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  user?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type WishlistInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  locale?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  user?: InputMaybe<Scalars['ID']['input']>
}
