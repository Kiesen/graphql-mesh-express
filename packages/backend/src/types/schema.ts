import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  dev_examples__JSON: any;
  live_examples__JSON: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type Query = {
  __typename?: 'Query';
  dev_todoList: Array<Maybe<Dev_Todo>>;
  dev_todo?: Maybe<Dev_Todo>;
  live_todoList: Array<Maybe<Live_Todo>>;
  live_todo?: Maybe<Live_Todo>;
  getChangelog?: Maybe<Array<Maybe<Changelog>>>;
  getChangelogDev?: Maybe<Array<Maybe<ChangelogDev>>>;
  userRights: Array<Scalars['String']>;
};

export type QueryGetChangelogArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  where?: Maybe<ChangelogWhereInput>;
  orderBy?: Maybe<ChangelogOrderByInput>;
};

export type QueryGetChangelogDevArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  where?: Maybe<ChangelogDevWhereInput>;
  orderBy?: Maybe<ChangelogDevOrderByInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  dev_updateTodoContent?: Maybe<Dev_Todo>;
  live_updateTodoContent?: Maybe<Live_Todo>;
  logDB?: Maybe<LogDbChanges>;
};

export type MutationDev_UpdateTodoContentArgs = {
  content: Scalars['String'];
};

export type MutationLive_UpdateTodoContentArgs = {
  content: Scalars['String'];
};

export type MutationLogDbArgs = {
  input: LogDbChangesInput;
};

export type Dev_Todo = {
  __typename?: 'dev_Todo';
  id?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  comments: Array<Maybe<Scalars['String']>>;
};

export enum Dev_Fake__Locale {
  Az = 'az',
  Cz = 'cz',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  En = 'en',
  EnAu = 'en_AU',
  EnBork = 'en_BORK',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnIe = 'en_IE',
  EnInd = 'en_IND',
  EnUs = 'en_US',
  EnAuOcker = 'en_au_ocker',
  Es = 'es',
  EsMx = 'es_MX',
  Fa = 'fa',
  Fr = 'fr',
  FrCa = 'fr_CA',
  Ge = 'ge',
  IdId = 'id_ID',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  NbNo = 'nb_NO',
  Nep = 'nep',
  Nl = 'nl',
  Pl = 'pl',
  PtBr = 'pt_BR',
  Ru = 'ru',
  Sk = 'sk',
  Sv = 'sv',
  Tr = 'tr',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_CN',
  ZhTw = 'zh_TW',
}

export enum Dev_Fake__Types {
  ZipCode = 'zipCode',
  City = 'city',
  StreetName = 'streetName',
  /** Configure address with option `useFullAddress` */
  StreetAddress = 'streetAddress',
  SecondaryAddress = 'secondaryAddress',
  County = 'county',
  Country = 'country',
  CountryCode = 'countryCode',
  State = 'state',
  StateAbbr = 'stateAbbr',
  Latitude = 'latitude',
  Longitude = 'longitude',
  ColorName = 'colorName',
  ProductCategory = 'productCategory',
  ProductName = 'productName',
  /** Sum of money. Configure with options `minMoney`/`maxMoney` and 'decimalPlaces'. */
  Money = 'money',
  ProductMaterial = 'productMaterial',
  Product = 'product',
  CompanyName = 'companyName',
  CompanyCatchPhrase = 'companyCatchPhrase',
  CompanyBs = 'companyBS',
  DbColumn = 'dbColumn',
  DbType = 'dbType',
  DbCollation = 'dbCollation',
  DbEngine = 'dbEngine',
  /**
   * By default returns dates beetween 2000-01-01 and 2030-01-01.
   * Configure date format with options `dateFormat` `dateFrom` `dateTo`.
   */
  Date = 'date',
  /** Configure date format with option `dateFormat` */
  PastDate = 'pastDate',
  /** Configure date format with option `dateFormat` */
  FutureDate = 'futureDate',
  /** Configure date format with option `dateFormat` */
  RecentDate = 'recentDate',
  FinanceAccountName = 'financeAccountName',
  FinanceTransactionType = 'financeTransactionType',
  CurrencyCode = 'currencyCode',
  CurrencyName = 'currencyName',
  CurrencySymbol = 'currencySymbol',
  BitcoinAddress = 'bitcoinAddress',
  InternationalBankAccountNumber = 'internationalBankAccountNumber',
  BankIdentifierCode = 'bankIdentifierCode',
  HackerAbbreviation = 'hackerAbbreviation',
  HackerPhrase = 'hackerPhrase',
  /** An image url. Configure image with options: `imageCategory`, `imageWidth`, `imageHeight` and `randomizeImageUrl` */
  ImageUrl = 'imageUrl',
  /** An URL for an avatar */
  AvatarUrl = 'avatarUrl',
  /** Configure email provider with option: `emailProvider` */
  Email = 'email',
  Url = 'url',
  DomainName = 'domainName',
  Ipv4Address = 'ipv4Address',
  Ipv6Address = 'ipv6Address',
  UserAgent = 'userAgent',
  /** Configure color with option: `baseColor` */
  ColorHex = 'colorHex',
  MacAddress = 'macAddress',
  /** Configure password with option `passwordLength` */
  Password = 'password',
  /** Lorem Ipsum text. Configure size with option `loremSize` */
  Lorem = 'lorem',
  FirstName = 'firstName',
  LastName = 'lastName',
  FullName = 'fullName',
  JobTitle = 'jobTitle',
  PhoneNumber = 'phoneNumber',
  Number = 'number',
  Uuid = 'uuid',
  Word = 'word',
  Words = 'words',
  Locale = 'locale',
  Filename = 'filename',
  MimeType = 'mimeType',
  FileExtension = 'fileExtension',
  Semver = 'semver',
}

export type Dev_Fake__ImageSize = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export enum Dev_Fake__LoremSize {
  Word = 'word',
  Words = 'words',
  Sentence = 'sentence',
  Sentences = 'sentences',
  Paragraph = 'paragraph',
  Paragraphs = 'paragraphs',
}

export type Dev_Fake__Color = {
  red255?: Maybe<Scalars['Int']>;
  green255?: Maybe<Scalars['Int']>;
  blue255?: Maybe<Scalars['Int']>;
};

export type Dev_Fake__Options = {
  /** Only for type `streetAddress` */
  useFullAddress?: Maybe<Scalars['Boolean']>;
  /** Only for type `money` */
  minMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  maxMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  decimalPlaces?: Maybe<Scalars['Int']>;
  /** Only for type `imageUrl` */
  imageSize?: Maybe<Dev_Fake__ImageSize>;
  /** Only for type `imageUrl`. Example value: `["nature", "water"]`. */
  imageKeywords?: Maybe<Array<Scalars['String']>>;
  /** Only for type `imageUrl` */
  randomizeImageUrl?: Maybe<Scalars['Boolean']>;
  /** Only for type `email` */
  emailProvider?: Maybe<Scalars['String']>;
  /** Only for type `password` */
  passwordLength?: Maybe<Scalars['Int']>;
  /** Only for type `lorem` */
  loremSize?: Maybe<Dev_Fake__LoremSize>;
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: Maybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `1986-11-02`. */
  dateFrom?: Maybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `2038-01-19`. */
  dateTo?: Maybe<Scalars['String']>;
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: Maybe<Dev_Fake__Color>;
  /** Only for type `number` */
  minNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  maxNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  precisionNumber?: Maybe<Scalars['Float']>;
};

export type Live_Todo = {
  __typename?: 'live_Todo';
  id?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  comments: Array<Maybe<Scalars['String']>>;
};

export enum Live_Fake__Locale {
  Az = 'az',
  Cz = 'cz',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  En = 'en',
  EnAu = 'en_AU',
  EnBork = 'en_BORK',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnIe = 'en_IE',
  EnInd = 'en_IND',
  EnUs = 'en_US',
  EnAuOcker = 'en_au_ocker',
  Es = 'es',
  EsMx = 'es_MX',
  Fa = 'fa',
  Fr = 'fr',
  FrCa = 'fr_CA',
  Ge = 'ge',
  IdId = 'id_ID',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  NbNo = 'nb_NO',
  Nep = 'nep',
  Nl = 'nl',
  Pl = 'pl',
  PtBr = 'pt_BR',
  Ru = 'ru',
  Sk = 'sk',
  Sv = 'sv',
  Tr = 'tr',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_CN',
  ZhTw = 'zh_TW',
}

export enum Live_Fake__Types {
  ZipCode = 'zipCode',
  City = 'city',
  StreetName = 'streetName',
  /** Configure address with option `useFullAddress` */
  StreetAddress = 'streetAddress',
  SecondaryAddress = 'secondaryAddress',
  County = 'county',
  Country = 'country',
  CountryCode = 'countryCode',
  State = 'state',
  StateAbbr = 'stateAbbr',
  Latitude = 'latitude',
  Longitude = 'longitude',
  ColorName = 'colorName',
  ProductCategory = 'productCategory',
  ProductName = 'productName',
  /** Sum of money. Configure with options `minMoney`/`maxMoney` and 'decimalPlaces'. */
  Money = 'money',
  ProductMaterial = 'productMaterial',
  Product = 'product',
  CompanyName = 'companyName',
  CompanyCatchPhrase = 'companyCatchPhrase',
  CompanyBs = 'companyBS',
  DbColumn = 'dbColumn',
  DbType = 'dbType',
  DbCollation = 'dbCollation',
  DbEngine = 'dbEngine',
  /**
   * By default returns dates beetween 2000-01-01 and 2030-01-01.
   * Configure date format with options `dateFormat` `dateFrom` `dateTo`.
   */
  Date = 'date',
  /** Configure date format with option `dateFormat` */
  PastDate = 'pastDate',
  /** Configure date format with option `dateFormat` */
  FutureDate = 'futureDate',
  /** Configure date format with option `dateFormat` */
  RecentDate = 'recentDate',
  FinanceAccountName = 'financeAccountName',
  FinanceTransactionType = 'financeTransactionType',
  CurrencyCode = 'currencyCode',
  CurrencyName = 'currencyName',
  CurrencySymbol = 'currencySymbol',
  BitcoinAddress = 'bitcoinAddress',
  InternationalBankAccountNumber = 'internationalBankAccountNumber',
  BankIdentifierCode = 'bankIdentifierCode',
  HackerAbbreviation = 'hackerAbbreviation',
  HackerPhrase = 'hackerPhrase',
  /** An image url. Configure image with options: `imageCategory`, `imageWidth`, `imageHeight` and `randomizeImageUrl` */
  ImageUrl = 'imageUrl',
  /** An URL for an avatar */
  AvatarUrl = 'avatarUrl',
  /** Configure email provider with option: `emailProvider` */
  Email = 'email',
  Url = 'url',
  DomainName = 'domainName',
  Ipv4Address = 'ipv4Address',
  Ipv6Address = 'ipv6Address',
  UserAgent = 'userAgent',
  /** Configure color with option: `baseColor` */
  ColorHex = 'colorHex',
  MacAddress = 'macAddress',
  /** Configure password with option `passwordLength` */
  Password = 'password',
  /** Lorem Ipsum text. Configure size with option `loremSize` */
  Lorem = 'lorem',
  FirstName = 'firstName',
  LastName = 'lastName',
  FullName = 'fullName',
  JobTitle = 'jobTitle',
  PhoneNumber = 'phoneNumber',
  Number = 'number',
  Uuid = 'uuid',
  Word = 'word',
  Words = 'words',
  Locale = 'locale',
  Filename = 'filename',
  MimeType = 'mimeType',
  FileExtension = 'fileExtension',
  Semver = 'semver',
}

export type Live_Fake__ImageSize = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export enum Live_Fake__LoremSize {
  Word = 'word',
  Words = 'words',
  Sentence = 'sentence',
  Sentences = 'sentences',
  Paragraph = 'paragraph',
  Paragraphs = 'paragraphs',
}

export type Live_Fake__Color = {
  red255?: Maybe<Scalars['Int']>;
  green255?: Maybe<Scalars['Int']>;
  blue255?: Maybe<Scalars['Int']>;
};

export type Live_Fake__Options = {
  /** Only for type `streetAddress` */
  useFullAddress?: Maybe<Scalars['Boolean']>;
  /** Only for type `money` */
  minMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  maxMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  decimalPlaces?: Maybe<Scalars['Int']>;
  /** Only for type `imageUrl` */
  imageSize?: Maybe<Live_Fake__ImageSize>;
  /** Only for type `imageUrl`. Example value: `["nature", "water"]`. */
  imageKeywords?: Maybe<Array<Scalars['String']>>;
  /** Only for type `imageUrl` */
  randomizeImageUrl?: Maybe<Scalars['Boolean']>;
  /** Only for type `email` */
  emailProvider?: Maybe<Scalars['String']>;
  /** Only for type `password` */
  passwordLength?: Maybe<Scalars['Int']>;
  /** Only for type `lorem` */
  loremSize?: Maybe<Live_Fake__LoremSize>;
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: Maybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `1986-11-02`. */
  dateFrom?: Maybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `2038-01-19`. */
  dateTo?: Maybe<Scalars['String']>;
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: Maybe<Live_Fake__Color>;
  /** Only for type `number` */
  minNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  maxNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  precisionNumber?: Maybe<Scalars['Float']>;
};

export type Changelog = {
  __typename?: 'Changelog';
  id: Scalars['BigInt'];
  date_of_change: Scalars['Timestamp'];
  field_id: Scalars['String'];
  old_value: Scalars['String'];
  new_value: Scalars['String'];
  comment: Scalars['String'];
  user_uuid?: Maybe<Scalars['String']>;
  user?: Maybe<Array<Maybe<User>>>;
};

export type ChangelogUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  uuid: Scalars['String'];
  name: Scalars['String'];
};

export type UserWhereInput = {
  uuid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  uuid?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc',
}

export type ChangelogWhereInput = {
  id?: Maybe<Scalars['String']>;
  date_of_change?: Maybe<Scalars['String']>;
  field_id?: Maybe<Scalars['String']>;
  old_value?: Maybe<Scalars['String']>;
  new_value?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['String']>;
};

export type ChangelogOrderByInput = {
  id?: Maybe<OrderBy>;
  date_of_change?: Maybe<OrderBy>;
  field_id?: Maybe<OrderBy>;
  old_value?: Maybe<OrderBy>;
  new_value?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  user_uuid?: Maybe<OrderBy>;
};

export type ChangelogDev = {
  __typename?: 'ChangelogDev';
  id: Scalars['BigInt'];
  date_of_change: Scalars['Timestamp'];
  field_id: Scalars['String'];
  old_value: Scalars['String'];
  new_value: Scalars['String'];
  comment: Scalars['String'];
  user_uuid?: Maybe<Scalars['String']>;
  user?: Maybe<Array<Maybe<User>>>;
};

export type ChangelogDevUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ChangelogDevWhereInput = {
  id?: Maybe<Scalars['String']>;
  date_of_change?: Maybe<Scalars['String']>;
  field_id?: Maybe<Scalars['String']>;
  old_value?: Maybe<Scalars['String']>;
  new_value?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['String']>;
};

export type ChangelogDevOrderByInput = {
  id?: Maybe<OrderBy>;
  date_of_change?: Maybe<OrderBy>;
  field_id?: Maybe<OrderBy>;
  old_value?: Maybe<OrderBy>;
  new_value?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  user_uuid?: Maybe<OrderBy>;
};

export type KnexMigrations = {
  __typename?: 'KnexMigrations';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  batch?: Maybe<Scalars['Int']>;
  migration_time: Scalars['Timestamp'];
};

export type KnexMigrationsWhereInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  batch?: Maybe<Scalars['String']>;
  migration_time?: Maybe<Scalars['String']>;
};

export type KnexMigrationsOrderByInput = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  batch?: Maybe<OrderBy>;
  migration_time?: Maybe<OrderBy>;
};

export type KnexMigrationsLock = {
  __typename?: 'KnexMigrationsLock';
  index: Scalars['Int'];
  is_locked?: Maybe<Scalars['Int']>;
};

export type KnexMigrationsLockWhereInput = {
  index?: Maybe<Scalars['String']>;
  is_locked?: Maybe<Scalars['String']>;
};

export type KnexMigrationsLockOrderByInput = {
  index?: Maybe<OrderBy>;
  is_locked?: Maybe<OrderBy>;
};

export type ChangelogInsertInput = {
  id: Scalars['BigInt'];
  date_of_change: Scalars['Timestamp'];
  field_id: Scalars['String'];
  old_value: Scalars['String'];
  new_value: Scalars['String'];
  comment: Scalars['String'];
  user_uuid?: Maybe<Scalars['String']>;
};

export type ChangelogUpdateInput = {
  id?: Maybe<Scalars['BigInt']>;
  date_of_change?: Maybe<Scalars['Timestamp']>;
  field_id?: Maybe<Scalars['String']>;
  old_value?: Maybe<Scalars['String']>;
  new_value?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['String']>;
};

export type ChangelogDevInsertInput = {
  id: Scalars['BigInt'];
  date_of_change: Scalars['Timestamp'];
  field_id: Scalars['String'];
  old_value: Scalars['String'];
  new_value: Scalars['String'];
  comment: Scalars['String'];
  user_uuid?: Maybe<Scalars['String']>;
};

export type ChangelogDevUpdateInput = {
  id?: Maybe<Scalars['BigInt']>;
  date_of_change?: Maybe<Scalars['Timestamp']>;
  field_id?: Maybe<Scalars['String']>;
  old_value?: Maybe<Scalars['String']>;
  new_value?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['String']>;
};

export type KnexMigrationsInsertInput = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  batch?: Maybe<Scalars['Int']>;
  migration_time: Scalars['Timestamp'];
};

export type KnexMigrationsUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  batch?: Maybe<Scalars['Int']>;
  migration_time?: Maybe<Scalars['Timestamp']>;
};

export type KnexMigrationsLockInsertInput = {
  index: Scalars['Int'];
  is_locked?: Maybe<Scalars['Int']>;
};

export type KnexMigrationsLockUpdateInput = {
  index?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Int']>;
};

export type UserInsertInput = {
  uuid: Scalars['String'];
  name: Scalars['String'];
};

export type UserUpdateInput = {
  uuid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LogDbChanges = {
  __typename?: 'LogDBChanges';
  comment: Scalars['String'];
  fields: Array<LogDbChangedField>;
  environment: Environment;
};

export type LogDbChangedFieldInput = {
  fieldId: Scalars['String'];
  oldValue: Scalars['String'];
  newValue: Scalars['String'];
  path: Scalars['String'];
};

export type LogDbChangedField = {
  __typename?: 'LogDBChangedField';
  fieldId: Scalars['String'];
  oldValue: Scalars['String'];
  newValue: Scalars['String'];
  path: Scalars['String'];
};

export type LogDbChangesInput = {
  comment: Scalars['String'];
  fields: Array<LogDbChangedFieldInput>;
  environment: Environment;
};

export enum Environment {
  Live = 'live',
  Dev = 'dev',
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<
  TResult,
  TParent,
  TContext,
  TArgs
> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<
  TResult,
  TParent,
  TContext,
  TArgs
> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<
  TResult,
  TParent,
  TContext,
  TArgs
> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<
  TResult,
  TParent,
  TContext,
  TArgs
> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<
  TResult,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<
      TResult,
      TKey,
      TParent,
      TContext,
      TArgs
    >
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  dev_Todo: ResolverTypeWrapper<Dev_Todo>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  dev_fake__Locale: Dev_Fake__Locale;
  dev_fake__Types: Dev_Fake__Types;
  dev_fake__imageSize: Dev_Fake__ImageSize;
  dev_fake__loremSize: Dev_Fake__LoremSize;
  dev_fake__color: Dev_Fake__Color;
  dev_fake__options: Dev_Fake__Options;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  dev_examples__JSON: ResolverTypeWrapper<
    Scalars['dev_examples__JSON']
  >;
  live_Todo: ResolverTypeWrapper<Live_Todo>;
  live_fake__Locale: Live_Fake__Locale;
  live_fake__Types: Live_Fake__Types;
  live_fake__imageSize: Live_Fake__ImageSize;
  live_fake__loremSize: Live_Fake__LoremSize;
  live_fake__color: Live_Fake__Color;
  live_fake__options: Live_Fake__Options;
  live_examples__JSON: ResolverTypeWrapper<
    Scalars['live_examples__JSON']
  >;
  Changelog: ResolverTypeWrapper<Changelog>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  User: ResolverTypeWrapper<User>;
  UserWhereInput: UserWhereInput;
  UserOrderByInput: UserOrderByInput;
  OrderBy: OrderBy;
  ChangelogWhereInput: ChangelogWhereInput;
  ChangelogOrderByInput: ChangelogOrderByInput;
  ChangelogDev: ResolverTypeWrapper<ChangelogDev>;
  ChangelogDevWhereInput: ChangelogDevWhereInput;
  ChangelogDevOrderByInput: ChangelogDevOrderByInput;
  KnexMigrations: ResolverTypeWrapper<KnexMigrations>;
  KnexMigrationsWhereInput: KnexMigrationsWhereInput;
  KnexMigrationsOrderByInput: KnexMigrationsOrderByInput;
  KnexMigrationsLock: ResolverTypeWrapper<KnexMigrationsLock>;
  KnexMigrationsLockWhereInput: KnexMigrationsLockWhereInput;
  KnexMigrationsLockOrderByInput: KnexMigrationsLockOrderByInput;
  ChangelogInsertInput: ChangelogInsertInput;
  ChangelogUpdateInput: ChangelogUpdateInput;
  ChangelogDevInsertInput: ChangelogDevInsertInput;
  ChangelogDevUpdateInput: ChangelogDevUpdateInput;
  KnexMigrationsInsertInput: KnexMigrationsInsertInput;
  KnexMigrationsUpdateInput: KnexMigrationsUpdateInput;
  KnexMigrationsLockInsertInput: KnexMigrationsLockInsertInput;
  KnexMigrationsLockUpdateInput: KnexMigrationsLockUpdateInput;
  UserInsertInput: UserInsertInput;
  UserUpdateInput: UserUpdateInput;
  LogDBChanges: ResolverTypeWrapper<LogDbChanges>;
  LogDBChangedFieldInput: LogDbChangedFieldInput;
  LogDBChangedField: ResolverTypeWrapper<LogDbChangedField>;
  LogDBChangesInput: LogDbChangesInput;
  Environment: Environment;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  String: Scalars['String'];
  Mutation: {};
  dev_Todo: Dev_Todo;
  ID: Scalars['ID'];
  dev_fake__imageSize: Dev_Fake__ImageSize;
  dev_fake__color: Dev_Fake__Color;
  dev_fake__options: Dev_Fake__Options;
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  dev_examples__JSON: Scalars['dev_examples__JSON'];
  live_Todo: Live_Todo;
  live_fake__imageSize: Live_Fake__ImageSize;
  live_fake__color: Live_Fake__Color;
  live_fake__options: Live_Fake__Options;
  live_examples__JSON: Scalars['live_examples__JSON'];
  Changelog: Changelog;
  BigInt: Scalars['BigInt'];
  Timestamp: Scalars['Timestamp'];
  User: User;
  UserWhereInput: UserWhereInput;
  UserOrderByInput: UserOrderByInput;
  ChangelogWhereInput: ChangelogWhereInput;
  ChangelogOrderByInput: ChangelogOrderByInput;
  ChangelogDev: ChangelogDev;
  ChangelogDevWhereInput: ChangelogDevWhereInput;
  ChangelogDevOrderByInput: ChangelogDevOrderByInput;
  KnexMigrations: KnexMigrations;
  KnexMigrationsWhereInput: KnexMigrationsWhereInput;
  KnexMigrationsOrderByInput: KnexMigrationsOrderByInput;
  KnexMigrationsLock: KnexMigrationsLock;
  KnexMigrationsLockWhereInput: KnexMigrationsLockWhereInput;
  KnexMigrationsLockOrderByInput: KnexMigrationsLockOrderByInput;
  ChangelogInsertInput: ChangelogInsertInput;
  ChangelogUpdateInput: ChangelogUpdateInput;
  ChangelogDevInsertInput: ChangelogDevInsertInput;
  ChangelogDevUpdateInput: ChangelogDevUpdateInput;
  KnexMigrationsInsertInput: KnexMigrationsInsertInput;
  KnexMigrationsUpdateInput: KnexMigrationsUpdateInput;
  KnexMigrationsLockInsertInput: KnexMigrationsLockInsertInput;
  KnexMigrationsLockUpdateInput: KnexMigrationsLockUpdateInput;
  UserInsertInput: UserInsertInput;
  UserUpdateInput: UserUpdateInput;
  LogDBChanges: LogDbChanges;
  LogDBChangedFieldInput: LogDbChangedFieldInput;
  LogDBChangedField: LogDbChangedField;
  LogDBChangesInput: LogDbChangesInput;
};

export type LiveDirectiveArgs = {};

export type LiveDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LiveDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Query']
> = {
  dev_todoList?: Resolver<
    Array<Maybe<ResolversTypes['dev_Todo']>>,
    ParentType,
    ContextType
  >;
  dev_todo?: Resolver<
    Maybe<ResolversTypes['dev_Todo']>,
    ParentType,
    ContextType
  >;
  live_todoList?: Resolver<
    Array<Maybe<ResolversTypes['live_Todo']>>,
    ParentType,
    ContextType
  >;
  live_todo?: Resolver<
    Maybe<ResolversTypes['live_Todo']>,
    ParentType,
    ContextType
  >;
  getChangelog?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Changelog']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetChangelogArgs, never>
  >;
  getChangelogDev?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ChangelogDev']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetChangelogDevArgs, never>
  >;
  userRights?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Mutation']
> = {
  dev_updateTodoContent?: Resolver<
    Maybe<ResolversTypes['dev_Todo']>,
    ParentType,
    ContextType,
    RequireFields<MutationDev_UpdateTodoContentArgs, 'content'>
  >;
  live_updateTodoContent?: Resolver<
    Maybe<ResolversTypes['live_Todo']>,
    ParentType,
    ContextType,
    RequireFields<MutationLive_UpdateTodoContentArgs, 'content'>
  >;
  logDB?: Resolver<
    Maybe<ResolversTypes['LogDBChanges']>,
    ParentType,
    ContextType,
    RequireFields<MutationLogDbArgs, 'input'>
  >;
};

export type Dev_TodoResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['dev_Todo']
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  content?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Dev_Examples__JsonScalarConfig
  extends GraphQLScalarTypeConfig<
    ResolversTypes['dev_examples__JSON'],
    any
  > {
  name: 'dev_examples__JSON';
}

export type Live_TodoResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['live_Todo']
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  content?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Live_Examples__JsonScalarConfig
  extends GraphQLScalarTypeConfig<
    ResolversTypes['live_examples__JSON'],
    any
  > {
  name: 'live_examples__JSON';
}

export type ChangelogResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Changelog']
> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date_of_change?: Resolver<
    ResolversTypes['Timestamp'],
    ParentType,
    ContextType
  >;
  field_id?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  old_value?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  new_value?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  comment?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  user_uuid?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  user?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<ChangelogUserArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface TimestampScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['User']
> = {
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChangelogDevResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['ChangelogDev']
> = {
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  date_of_change?: Resolver<
    ResolversTypes['Timestamp'],
    ParentType,
    ContextType
  >;
  field_id?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  old_value?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  new_value?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  comment?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  user_uuid?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  user?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<ChangelogDevUserArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnexMigrationsResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['KnexMigrations']
> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  batch?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  migration_time?: Resolver<
    ResolversTypes['Timestamp'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KnexMigrationsLockResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['KnexMigrationsLock']
> = {
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_locked?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogDbChangesResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['LogDBChanges']
> = {
  comment?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  fields?: Resolver<
    Array<ResolversTypes['LogDBChangedField']>,
    ParentType,
    ContextType
  >;
  environment?: Resolver<
    ResolversTypes['Environment'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogDbChangedFieldResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['LogDBChangedField']
> = {
  fieldId?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  oldValue?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  newValue?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  dev_Todo?: Dev_TodoResolvers<ContextType>;
  dev_examples__JSON?: GraphQLScalarType;
  live_Todo?: Live_TodoResolvers<ContextType>;
  live_examples__JSON?: GraphQLScalarType;
  Changelog?: ChangelogResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  ChangelogDev?: ChangelogDevResolvers<ContextType>;
  KnexMigrations?: KnexMigrationsResolvers<ContextType>;
  KnexMigrationsLock?: KnexMigrationsLockResolvers<ContextType>;
  LogDBChanges?: LogDbChangesResolvers<ContextType>;
  LogDBChangedField?: LogDbChangedFieldResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  live?: LiveDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = any
> = DirectiveResolvers<ContextType>;
