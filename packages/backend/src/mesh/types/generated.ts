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
  examples__JSON: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type Query = {
  __typename?: 'Query';
  manager: Manager;
  getChanges?: Maybe<Array<Maybe<Changes>>>;
  userRights: Array<Scalars['String']>;
};

export type QueryGetChangesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  where?: Maybe<ChangesWhereInput>;
  orderBy?: Maybe<ChangesOrderByInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateManagerFirstName?: Maybe<Manager>;
  logDB?: Maybe<LogDbChanges>;
};

export type MutationUpdateManagerFirstNameArgs = {
  firstName: Scalars['String'];
};

export type MutationLogDbArgs = {
  input: LogDbChangesInput;
};

export type Manager = {
  __typename?: 'Manager';
  id?: Maybe<Scalars['ID']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  additionalInfo: AdditionalManagerInfo;
};

export enum Fake__Locale {
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

export enum Fake__Types {
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

export type Fake__ImageSize = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export enum Fake__LoremSize {
  Word = 'word',
  Words = 'words',
  Sentence = 'sentence',
  Sentences = 'sentences',
  Paragraph = 'paragraph',
  Paragraphs = 'paragraphs',
}

export type Fake__Color = {
  red255?: Maybe<Scalars['Int']>;
  green255?: Maybe<Scalars['Int']>;
  blue255?: Maybe<Scalars['Int']>;
};

export type Fake__Options = {
  /** Only for type `streetAddress` */
  useFullAddress?: Maybe<Scalars['Boolean']>;
  /** Only for type `money` */
  minMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  maxMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  decimalPlaces?: Maybe<Scalars['Int']>;
  /** Only for type `imageUrl` */
  imageSize?: Maybe<Fake__ImageSize>;
  /** Only for type `imageUrl`. Example value: `["nature", "water"]`. */
  imageKeywords?: Maybe<Array<Scalars['String']>>;
  /** Only for type `imageUrl` */
  randomizeImageUrl?: Maybe<Scalars['Boolean']>;
  /** Only for type `email` */
  emailProvider?: Maybe<Scalars['String']>;
  /** Only for type `password` */
  passwordLength?: Maybe<Scalars['Int']>;
  /** Only for type `lorem` */
  loremSize?: Maybe<Fake__LoremSize>;
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: Maybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `1986-11-02`. */
  dateFrom?: Maybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `2038-01-19`. */
  dateTo?: Maybe<Scalars['String']>;
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: Maybe<Fake__Color>;
  /** Only for type `number` */
  minNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  maxNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  precisionNumber?: Maybe<Scalars['Float']>;
};

export type Changes = {
  __typename?: 'Changes';
  id: Scalars['BigInt'];
  date_of_change: Scalars['Timestamp'];
  field_id: Scalars['String'];
  old_value: Scalars['String'];
  new_value: Scalars['String'];
  comment: Scalars['String'];
  user_uuid?: Maybe<Scalars['String']>;
  user?: Maybe<Array<Maybe<User>>>;
};

export type ChangesUserArgs = {
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

export type ChangesWhereInput = {
  id?: Maybe<Scalars['String']>;
  date_of_change?: Maybe<Scalars['String']>;
  field_id?: Maybe<Scalars['String']>;
  old_value?: Maybe<Scalars['String']>;
  new_value?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['String']>;
};

export type ChangesOrderByInput = {
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

export type ChangesInsertInput = {
  id: Scalars['BigInt'];
  date_of_change: Scalars['Timestamp'];
  field_id: Scalars['String'];
  old_value: Scalars['String'];
  new_value: Scalars['String'];
  comment: Scalars['String'];
  user_uuid?: Maybe<Scalars['String']>;
};

export type ChangesUpdateInput = {
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

export type LogDbChangesInput = {
  comment: Scalars['String'];
  fields: Array<LogDbChangedFieldInput>;
  environment: Environment;
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

export type AdditionalManagerInfo = {
  __typename?: 'AdditionalManagerInfo';
  address: Scalars['String'];
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
  Manager: ResolverTypeWrapper<Manager>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  fake__Locale: Fake__Locale;
  fake__Types: Fake__Types;
  fake__imageSize: Fake__ImageSize;
  fake__loremSize: Fake__LoremSize;
  fake__color: Fake__Color;
  fake__options: Fake__Options;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  examples__JSON: ResolverTypeWrapper<Scalars['examples__JSON']>;
  Changes: ResolverTypeWrapper<Changes>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  User: ResolverTypeWrapper<User>;
  UserWhereInput: UserWhereInput;
  UserOrderByInput: UserOrderByInput;
  OrderBy: OrderBy;
  ChangesWhereInput: ChangesWhereInput;
  ChangesOrderByInput: ChangesOrderByInput;
  KnexMigrations: ResolverTypeWrapper<KnexMigrations>;
  KnexMigrationsWhereInput: KnexMigrationsWhereInput;
  KnexMigrationsOrderByInput: KnexMigrationsOrderByInput;
  KnexMigrationsLock: ResolverTypeWrapper<KnexMigrationsLock>;
  KnexMigrationsLockWhereInput: KnexMigrationsLockWhereInput;
  KnexMigrationsLockOrderByInput: KnexMigrationsLockOrderByInput;
  ChangesInsertInput: ChangesInsertInput;
  ChangesUpdateInput: ChangesUpdateInput;
  KnexMigrationsInsertInput: KnexMigrationsInsertInput;
  KnexMigrationsUpdateInput: KnexMigrationsUpdateInput;
  KnexMigrationsLockInsertInput: KnexMigrationsLockInsertInput;
  KnexMigrationsLockUpdateInput: KnexMigrationsLockUpdateInput;
  UserInsertInput: UserInsertInput;
  UserUpdateInput: UserUpdateInput;
  LogDBChangesInput: LogDbChangesInput;
  LogDBChanges: ResolverTypeWrapper<LogDbChanges>;
  LogDBChangedFieldInput: LogDbChangedFieldInput;
  LogDBChangedField: ResolverTypeWrapper<LogDbChangedField>;
  AdditionalManagerInfo: ResolverTypeWrapper<AdditionalManagerInfo>;
  Environment: Environment;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  String: Scalars['String'];
  Mutation: {};
  Manager: Manager;
  ID: Scalars['ID'];
  fake__imageSize: Fake__ImageSize;
  fake__color: Fake__Color;
  fake__options: Fake__Options;
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  examples__JSON: Scalars['examples__JSON'];
  Changes: Changes;
  BigInt: Scalars['BigInt'];
  Timestamp: Scalars['Timestamp'];
  User: User;
  UserWhereInput: UserWhereInput;
  UserOrderByInput: UserOrderByInput;
  ChangesWhereInput: ChangesWhereInput;
  ChangesOrderByInput: ChangesOrderByInput;
  KnexMigrations: KnexMigrations;
  KnexMigrationsWhereInput: KnexMigrationsWhereInput;
  KnexMigrationsOrderByInput: KnexMigrationsOrderByInput;
  KnexMigrationsLock: KnexMigrationsLock;
  KnexMigrationsLockWhereInput: KnexMigrationsLockWhereInput;
  KnexMigrationsLockOrderByInput: KnexMigrationsLockOrderByInput;
  ChangesInsertInput: ChangesInsertInput;
  ChangesUpdateInput: ChangesUpdateInput;
  KnexMigrationsInsertInput: KnexMigrationsInsertInput;
  KnexMigrationsUpdateInput: KnexMigrationsUpdateInput;
  KnexMigrationsLockInsertInput: KnexMigrationsLockInsertInput;
  KnexMigrationsLockUpdateInput: KnexMigrationsLockUpdateInput;
  UserInsertInput: UserInsertInput;
  UserUpdateInput: UserUpdateInput;
  LogDBChangesInput: LogDbChangesInput;
  LogDBChanges: LogDbChanges;
  LogDBChangedFieldInput: LogDbChangedFieldInput;
  LogDBChangedField: LogDbChangedField;
  AdditionalManagerInfo: AdditionalManagerInfo;
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
  manager?: Resolver<
    ResolversTypes['Manager'],
    ParentType,
    ContextType
  >;
  getChanges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Changes']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetChangesArgs, never>
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
  updateManagerFirstName?: Resolver<
    Maybe<ResolversTypes['Manager']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManagerFirstNameArgs, 'firstName'>
  >;
  logDB?: Resolver<
    Maybe<ResolversTypes['LogDBChanges']>,
    ParentType,
    ContextType,
    RequireFields<MutationLogDbArgs, 'input'>
  >;
};

export type ManagerResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Manager']
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  firstName?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  lastName?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  additionalInfo?: Resolver<
    ResolversTypes['AdditionalManagerInfo'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Examples__JsonScalarConfig
  extends GraphQLScalarTypeConfig<
    ResolversTypes['examples__JSON'],
    any
  > {
  name: 'examples__JSON';
}

export type ChangesResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Changes']
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
    RequireFields<ChangesUserArgs, never>
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

export type AdditionalManagerInfoResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AdditionalManagerInfo']
> = {
  address?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  examples__JSON?: GraphQLScalarType;
  Changes?: ChangesResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  KnexMigrations?: KnexMigrationsResolvers<ContextType>;
  KnexMigrationsLock?: KnexMigrationsLockResolvers<ContextType>;
  LogDBChanges?: LogDbChangesResolvers<ContextType>;
  LogDBChangedField?: LogDbChangedFieldResolvers<ContextType>;
  AdditionalManagerInfo?: AdditionalManagerInfoResolvers<ContextType>;
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
