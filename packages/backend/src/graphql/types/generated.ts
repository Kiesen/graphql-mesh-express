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
};

export type Query = {
  __typename?: 'Query';
  user: User;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  updateFirstName?: Maybe<User>;
};

export type MutationUpdateFirstNameArgs = {
  firstName: Scalars['String'];
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
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  fake__Locale: Fake__Locale;
  fake__Types: Fake__Types;
  fake__imageSize: Fake__ImageSize;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  fake__loremSize: Fake__LoremSize;
  fake__color: Fake__Color;
  fake__options: Fake__Options;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  examples__JSON: ResolverTypeWrapper<Scalars['examples__JSON']>;
  Environment: Environment;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  User: User;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Mutation: {};
  fake__imageSize: Fake__ImageSize;
  Int: Scalars['Int'];
  fake__color: Fake__Color;
  fake__options: Fake__Options;
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  examples__JSON: Scalars['examples__JSON'];
};

export type FakeDirectiveArgs = {
  type: Fake__Types;
  options?: Maybe<Fake__Options>;
  locale?: Maybe<Fake__Locale>;
};

export type FakeDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = FakeDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ListLengthDirectiveArgs = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type ListLengthDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ListLengthDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExamplesDirectiveArgs = {
  values: Array<Maybe<Scalars['examples__JSON']>>;
};

export type ExamplesDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ExamplesDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

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
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['User']
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Mutation']
> = {
  updateFirstName?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFirstNameArgs, 'firstName'>
  >;
};

export interface Examples__JsonScalarConfig
  extends GraphQLScalarTypeConfig<
    ResolversTypes['examples__JSON'],
    any
  > {
  name: 'examples__JSON';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  examples__JSON?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  fake?: FakeDirectiveResolver<any, any, ContextType>;
  listLength?: ListLengthDirectiveResolver<any, any, ContextType>;
  examples?: ExamplesDirectiveResolver<any, any, ContextType>;
  live?: LiveDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = any
> = DirectiveResolvers<ContextType>;
