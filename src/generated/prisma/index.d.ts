
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Series
 * 
 */
export type Series = $Result.DefaultSelection<Prisma.$SeriesPayload>
/**
 * Model FuelType
 * 
 */
export type FuelType = $Result.DefaultSelection<Prisma.$FuelTypePayload>
/**
 * Model BodyType
 * 
 */
export type BodyType = $Result.DefaultSelection<Prisma.$BodyTypePayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brand.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Brands
   * const brands = await prisma.brand.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **Series** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.series.findMany()
    * ```
    */
  get series(): Prisma.SeriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fuelType`: Exposes CRUD operations for the **FuelType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FuelTypes
    * const fuelTypes = await prisma.fuelType.findMany()
    * ```
    */
  get fuelType(): Prisma.FuelTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bodyType`: Exposes CRUD operations for the **BodyType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyTypes
    * const bodyTypes = await prisma.bodyType.findMany()
    * ```
    */
  get bodyType(): Prisma.BodyTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Brand: 'Brand',
    Series: 'Series',
    FuelType: 'FuelType',
    BodyType: 'BodyType',
    Car: 'Car'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "brand" | "series" | "fuelType" | "bodyType" | "car"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Series: {
        payload: Prisma.$SeriesPayload<ExtArgs>
        fields: Prisma.SeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findFirst: {
            args: Prisma.SeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findMany: {
            args: Prisma.SeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          create: {
            args: Prisma.SeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          createMany: {
            args: Prisma.SeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          delete: {
            args: Prisma.SeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          update: {
            args: Prisma.SeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          deleteMany: {
            args: Prisma.SeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          upsert: {
            args: Prisma.SeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeries>
          }
          groupBy: {
            args: Prisma.SeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeriesCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number
          }
        }
      }
      FuelType: {
        payload: Prisma.$FuelTypePayload<ExtArgs>
        fields: Prisma.FuelTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuelTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuelTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>
          }
          findFirst: {
            args: Prisma.FuelTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuelTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>
          }
          findMany: {
            args: Prisma.FuelTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>[]
          }
          create: {
            args: Prisma.FuelTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>
          }
          createMany: {
            args: Prisma.FuelTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuelTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>[]
          }
          delete: {
            args: Prisma.FuelTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>
          }
          update: {
            args: Prisma.FuelTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>
          }
          deleteMany: {
            args: Prisma.FuelTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuelTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuelTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>[]
          }
          upsert: {
            args: Prisma.FuelTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelTypePayload>
          }
          aggregate: {
            args: Prisma.FuelTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuelType>
          }
          groupBy: {
            args: Prisma.FuelTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuelTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuelTypeCountArgs<ExtArgs>
            result: $Utils.Optional<FuelTypeCountAggregateOutputType> | number
          }
        }
      }
      BodyType: {
        payload: Prisma.$BodyTypePayload<ExtArgs>
        fields: Prisma.BodyTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>
          }
          findFirst: {
            args: Prisma.BodyTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>
          }
          findMany: {
            args: Prisma.BodyTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>[]
          }
          create: {
            args: Prisma.BodyTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>
          }
          createMany: {
            args: Prisma.BodyTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>[]
          }
          delete: {
            args: Prisma.BodyTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>
          }
          update: {
            args: Prisma.BodyTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>
          }
          deleteMany: {
            args: Prisma.BodyTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BodyTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>[]
          }
          upsert: {
            args: Prisma.BodyTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyTypePayload>
          }
          aggregate: {
            args: Prisma.BodyTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyType>
          }
          groupBy: {
            args: Prisma.BodyTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyTypeCountArgs<ExtArgs>
            result: $Utils.Optional<BodyTypeCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    brand?: BrandOmit
    series?: SeriesOmit
    fuelType?: FuelTypeOmit
    bodyType?: BodyTypeOmit
    car?: CarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    series: number
    cars: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | BrandCountOutputTypeCountSeriesArgs
    cars?: boolean | BrandCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountSeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type SeriesCountOutputType
   */

  export type SeriesCountOutputType = {
    cars: number
  }

  export type SeriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | SeriesCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCountOutputType
     */
    select?: SeriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type FuelTypeCountOutputType
   */

  export type FuelTypeCountOutputType = {
    cars: number
  }

  export type FuelTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | FuelTypeCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * FuelTypeCountOutputType without action
   */
  export type FuelTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelTypeCountOutputType
     */
    select?: FuelTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuelTypeCountOutputType without action
   */
  export type FuelTypeCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type BodyTypeCountOutputType
   */

  export type BodyTypeCountOutputType = {
    cars: number
  }

  export type BodyTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | BodyTypeCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * BodyTypeCountOutputType without action
   */
  export type BodyTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyTypeCountOutputType
     */
    select?: BodyTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BodyTypeCountOutputType without action
   */
  export type BodyTypeCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    series?: boolean | Brand$seriesArgs<ExtArgs>
    cars?: boolean | Brand$carsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | Brand$seriesArgs<ExtArgs>
    cars?: boolean | Brand$carsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      series: Prisma.$SeriesPayload<ExtArgs>[]
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    series<T extends Brand$seriesArgs<ExtArgs> = {}>(args?: Subset<T, Brand$seriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cars<T extends Brand$carsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'Int'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.series
   */
  export type Brand$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    cursor?: SeriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Brand.cars
   */
  export type Brand$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  export type SeriesAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type SeriesSumAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type SeriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesCountAggregateOutputType = {
    id: number
    name: number
    brandId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeriesAvgAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type SeriesSumAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type SeriesMinAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesMaxAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesCountAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to aggregate.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesMaxAggregateInputType
  }

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>
  }




  export type SeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithAggregationInput | SeriesOrderByWithAggregationInput[]
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum
    having?: SeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCountAggregateInputType | true
    _avg?: SeriesAvgAggregateInputType
    _sum?: SeriesSumAggregateInputType
    _min?: SeriesMinAggregateInputType
    _max?: SeriesMaxAggregateInputType
  }

  export type SeriesGroupByOutputType = {
    id: number
    name: string
    brandId: number
    createdAt: Date
    updatedAt: Date
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  type GetSeriesGroupByPayload<T extends SeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
        }
      >
    >


  export type SeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    cars?: boolean | Series$carsArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectScalar = {
    id?: boolean
    name?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brandId" | "createdAt" | "updatedAt", ExtArgs["result"]["series"]>
  export type SeriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    cars?: boolean | Series$carsArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type SeriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $SeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Series"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brandId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["series"]>
    composites: {}
  }

  type SeriesGetPayload<S extends boolean | null | undefined | SeriesDefaultArgs> = $Result.GetResult<Prisma.$SeriesPayload, S>

  type SeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesCountAggregateInputType | true
    }

  export interface SeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Series'], meta: { name: 'Series' } }
    /**
     * Find zero or one Series that matches the filter.
     * @param {SeriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeriesFindUniqueArgs>(args: SelectSubset<T, SeriesFindUniqueArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Series that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, SeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeriesFindFirstArgs>(args?: SelectSubset<T, SeriesFindFirstArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, SeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeriesFindManyArgs>(args?: SelectSubset<T, SeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Series.
     * @param {SeriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     * 
     */
    create<T extends SeriesCreateArgs>(args: SelectSubset<T, SeriesCreateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Series.
     * @param {SeriesCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeriesCreateManyArgs>(args?: SelectSubset<T, SeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Series and returns the data saved in the database.
     * @param {SeriesCreateManyAndReturnArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeriesCreateManyAndReturnArgs>(args?: SelectSubset<T, SeriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Series.
     * @param {SeriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     * 
     */
    delete<T extends SeriesDeleteArgs>(args: SelectSubset<T, SeriesDeleteArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Series.
     * @param {SeriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeriesUpdateArgs>(args: SelectSubset<T, SeriesUpdateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Series.
     * @param {SeriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeriesDeleteManyArgs>(args?: SelectSubset<T, SeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeriesUpdateManyArgs>(args: SelectSubset<T, SeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series and returns the data updated in the database.
     * @param {SeriesUpdateManyAndReturnArgs} args - Arguments to update many Series.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeriesUpdateManyAndReturnArgs>(args: SelectSubset<T, SeriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Series.
     * @param {SeriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
     */
    upsert<T extends SeriesUpsertArgs>(args: SelectSubset<T, SeriesUpsertArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SeriesCountArgs>(
      args?: Subset<T, SeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeriesAggregateArgs>(args: Subset<T, SeriesAggregateArgs>): Prisma.PrismaPromise<GetSeriesAggregateType<T>>

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesGroupByArgs['orderBy'] }
        : { orderBy?: SeriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Series model
   */
  readonly fields: SeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cars<T extends Series$carsArgs<ExtArgs> = {}>(args?: Subset<T, Series$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Series model
   */
  interface SeriesFieldRefs {
    readonly id: FieldRef<"Series", 'Int'>
    readonly name: FieldRef<"Series", 'String'>
    readonly brandId: FieldRef<"Series", 'Int'>
    readonly createdAt: FieldRef<"Series", 'DateTime'>
    readonly updatedAt: FieldRef<"Series", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Series findUnique
   */
  export type SeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findUniqueOrThrow
   */
  export type SeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findFirst
   */
  export type SeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findFirstOrThrow
   */
  export type SeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findMany
   */
  export type SeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series create
   */
  export type SeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Series.
     */
    data: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
  }

  /**
   * Series createMany
   */
  export type SeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Series createManyAndReturn
   */
  export type SeriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Series update
   */
  export type SeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Series.
     */
    data: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
    /**
     * Choose, which Series to update.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series updateMany
   */
  export type SeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Series updateManyAndReturn
   */
  export type SeriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Series upsert
   */
  export type SeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Series to update in case it exists.
     */
    where: SeriesWhereUniqueInput
    /**
     * In case the Series found by the `where` argument doesn't exist, create a new Series with this data.
     */
    create: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
    /**
     * In case the Series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
  }

  /**
   * Series delete
   */
  export type SeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter which Series to delete.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series deleteMany
   */
  export type SeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to delete.
     */
    limit?: number
  }

  /**
   * Series.cars
   */
  export type Series$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Series without action
   */
  export type SeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
  }


  /**
   * Model FuelType
   */

  export type AggregateFuelType = {
    _count: FuelTypeCountAggregateOutputType | null
    _avg: FuelTypeAvgAggregateOutputType | null
    _sum: FuelTypeSumAggregateOutputType | null
    _min: FuelTypeMinAggregateOutputType | null
    _max: FuelTypeMaxAggregateOutputType | null
  }

  export type FuelTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type FuelTypeSumAggregateOutputType = {
    id: number | null
  }

  export type FuelTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuelTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuelTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FuelTypeAvgAggregateInputType = {
    id?: true
  }

  export type FuelTypeSumAggregateInputType = {
    id?: true
  }

  export type FuelTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuelTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuelTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FuelTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuelType to aggregate.
     */
    where?: FuelTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelTypes to fetch.
     */
    orderBy?: FuelTypeOrderByWithRelationInput | FuelTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuelTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FuelTypes
    **/
    _count?: true | FuelTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuelTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuelTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuelTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuelTypeMaxAggregateInputType
  }

  export type GetFuelTypeAggregateType<T extends FuelTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateFuelType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuelType[P]>
      : GetScalarType<T[P], AggregateFuelType[P]>
  }




  export type FuelTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelTypeWhereInput
    orderBy?: FuelTypeOrderByWithAggregationInput | FuelTypeOrderByWithAggregationInput[]
    by: FuelTypeScalarFieldEnum[] | FuelTypeScalarFieldEnum
    having?: FuelTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuelTypeCountAggregateInputType | true
    _avg?: FuelTypeAvgAggregateInputType
    _sum?: FuelTypeSumAggregateInputType
    _min?: FuelTypeMinAggregateInputType
    _max?: FuelTypeMaxAggregateInputType
  }

  export type FuelTypeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: FuelTypeCountAggregateOutputType | null
    _avg: FuelTypeAvgAggregateOutputType | null
    _sum: FuelTypeSumAggregateOutputType | null
    _min: FuelTypeMinAggregateOutputType | null
    _max: FuelTypeMaxAggregateOutputType | null
  }

  type GetFuelTypeGroupByPayload<T extends FuelTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuelTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuelTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuelTypeGroupByOutputType[P]>
            : GetScalarType<T[P], FuelTypeGroupByOutputType[P]>
        }
      >
    >


  export type FuelTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cars?: boolean | FuelType$carsArgs<ExtArgs>
    _count?: boolean | FuelTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fuelType"]>

  export type FuelTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fuelType"]>

  export type FuelTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fuelType"]>

  export type FuelTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FuelTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["fuelType"]>
  export type FuelTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | FuelType$carsArgs<ExtArgs>
    _count?: boolean | FuelTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FuelTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FuelTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FuelTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FuelType"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fuelType"]>
    composites: {}
  }

  type FuelTypeGetPayload<S extends boolean | null | undefined | FuelTypeDefaultArgs> = $Result.GetResult<Prisma.$FuelTypePayload, S>

  type FuelTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuelTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuelTypeCountAggregateInputType | true
    }

  export interface FuelTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FuelType'], meta: { name: 'FuelType' } }
    /**
     * Find zero or one FuelType that matches the filter.
     * @param {FuelTypeFindUniqueArgs} args - Arguments to find a FuelType
     * @example
     * // Get one FuelType
     * const fuelType = await prisma.fuelType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuelTypeFindUniqueArgs>(args: SelectSubset<T, FuelTypeFindUniqueArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FuelType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuelTypeFindUniqueOrThrowArgs} args - Arguments to find a FuelType
     * @example
     * // Get one FuelType
     * const fuelType = await prisma.fuelType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuelTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, FuelTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuelType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelTypeFindFirstArgs} args - Arguments to find a FuelType
     * @example
     * // Get one FuelType
     * const fuelType = await prisma.fuelType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuelTypeFindFirstArgs>(args?: SelectSubset<T, FuelTypeFindFirstArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuelType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelTypeFindFirstOrThrowArgs} args - Arguments to find a FuelType
     * @example
     * // Get one FuelType
     * const fuelType = await prisma.fuelType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuelTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, FuelTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FuelTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FuelTypes
     * const fuelTypes = await prisma.fuelType.findMany()
     * 
     * // Get first 10 FuelTypes
     * const fuelTypes = await prisma.fuelType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fuelTypeWithIdOnly = await prisma.fuelType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuelTypeFindManyArgs>(args?: SelectSubset<T, FuelTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FuelType.
     * @param {FuelTypeCreateArgs} args - Arguments to create a FuelType.
     * @example
     * // Create one FuelType
     * const FuelType = await prisma.fuelType.create({
     *   data: {
     *     // ... data to create a FuelType
     *   }
     * })
     * 
     */
    create<T extends FuelTypeCreateArgs>(args: SelectSubset<T, FuelTypeCreateArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FuelTypes.
     * @param {FuelTypeCreateManyArgs} args - Arguments to create many FuelTypes.
     * @example
     * // Create many FuelTypes
     * const fuelType = await prisma.fuelType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuelTypeCreateManyArgs>(args?: SelectSubset<T, FuelTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FuelTypes and returns the data saved in the database.
     * @param {FuelTypeCreateManyAndReturnArgs} args - Arguments to create many FuelTypes.
     * @example
     * // Create many FuelTypes
     * const fuelType = await prisma.fuelType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FuelTypes and only return the `id`
     * const fuelTypeWithIdOnly = await prisma.fuelType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuelTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, FuelTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FuelType.
     * @param {FuelTypeDeleteArgs} args - Arguments to delete one FuelType.
     * @example
     * // Delete one FuelType
     * const FuelType = await prisma.fuelType.delete({
     *   where: {
     *     // ... filter to delete one FuelType
     *   }
     * })
     * 
     */
    delete<T extends FuelTypeDeleteArgs>(args: SelectSubset<T, FuelTypeDeleteArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FuelType.
     * @param {FuelTypeUpdateArgs} args - Arguments to update one FuelType.
     * @example
     * // Update one FuelType
     * const fuelType = await prisma.fuelType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuelTypeUpdateArgs>(args: SelectSubset<T, FuelTypeUpdateArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FuelTypes.
     * @param {FuelTypeDeleteManyArgs} args - Arguments to filter FuelTypes to delete.
     * @example
     * // Delete a few FuelTypes
     * const { count } = await prisma.fuelType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuelTypeDeleteManyArgs>(args?: SelectSubset<T, FuelTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuelTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FuelTypes
     * const fuelType = await prisma.fuelType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuelTypeUpdateManyArgs>(args: SelectSubset<T, FuelTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuelTypes and returns the data updated in the database.
     * @param {FuelTypeUpdateManyAndReturnArgs} args - Arguments to update many FuelTypes.
     * @example
     * // Update many FuelTypes
     * const fuelType = await prisma.fuelType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FuelTypes and only return the `id`
     * const fuelTypeWithIdOnly = await prisma.fuelType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FuelTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, FuelTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FuelType.
     * @param {FuelTypeUpsertArgs} args - Arguments to update or create a FuelType.
     * @example
     * // Update or create a FuelType
     * const fuelType = await prisma.fuelType.upsert({
     *   create: {
     *     // ... data to create a FuelType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FuelType we want to update
     *   }
     * })
     */
    upsert<T extends FuelTypeUpsertArgs>(args: SelectSubset<T, FuelTypeUpsertArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FuelTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelTypeCountArgs} args - Arguments to filter FuelTypes to count.
     * @example
     * // Count the number of FuelTypes
     * const count = await prisma.fuelType.count({
     *   where: {
     *     // ... the filter for the FuelTypes we want to count
     *   }
     * })
    **/
    count<T extends FuelTypeCountArgs>(
      args?: Subset<T, FuelTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuelTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FuelType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuelTypeAggregateArgs>(args: Subset<T, FuelTypeAggregateArgs>): Prisma.PrismaPromise<GetFuelTypeAggregateType<T>>

    /**
     * Group by FuelType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuelTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuelTypeGroupByArgs['orderBy'] }
        : { orderBy?: FuelTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuelTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuelTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FuelType model
   */
  readonly fields: FuelTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FuelType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuelTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends FuelType$carsArgs<ExtArgs> = {}>(args?: Subset<T, FuelType$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FuelType model
   */
  interface FuelTypeFieldRefs {
    readonly id: FieldRef<"FuelType", 'Int'>
    readonly name: FieldRef<"FuelType", 'String'>
    readonly createdAt: FieldRef<"FuelType", 'DateTime'>
    readonly updatedAt: FieldRef<"FuelType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FuelType findUnique
   */
  export type FuelTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * Filter, which FuelType to fetch.
     */
    where: FuelTypeWhereUniqueInput
  }

  /**
   * FuelType findUniqueOrThrow
   */
  export type FuelTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * Filter, which FuelType to fetch.
     */
    where: FuelTypeWhereUniqueInput
  }

  /**
   * FuelType findFirst
   */
  export type FuelTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * Filter, which FuelType to fetch.
     */
    where?: FuelTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelTypes to fetch.
     */
    orderBy?: FuelTypeOrderByWithRelationInput | FuelTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuelTypes.
     */
    cursor?: FuelTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelTypes.
     */
    distinct?: FuelTypeScalarFieldEnum | FuelTypeScalarFieldEnum[]
  }

  /**
   * FuelType findFirstOrThrow
   */
  export type FuelTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * Filter, which FuelType to fetch.
     */
    where?: FuelTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelTypes to fetch.
     */
    orderBy?: FuelTypeOrderByWithRelationInput | FuelTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuelTypes.
     */
    cursor?: FuelTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelTypes.
     */
    distinct?: FuelTypeScalarFieldEnum | FuelTypeScalarFieldEnum[]
  }

  /**
   * FuelType findMany
   */
  export type FuelTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * Filter, which FuelTypes to fetch.
     */
    where?: FuelTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelTypes to fetch.
     */
    orderBy?: FuelTypeOrderByWithRelationInput | FuelTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FuelTypes.
     */
    cursor?: FuelTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelTypes.
     */
    skip?: number
    distinct?: FuelTypeScalarFieldEnum | FuelTypeScalarFieldEnum[]
  }

  /**
   * FuelType create
   */
  export type FuelTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a FuelType.
     */
    data: XOR<FuelTypeCreateInput, FuelTypeUncheckedCreateInput>
  }

  /**
   * FuelType createMany
   */
  export type FuelTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FuelTypes.
     */
    data: FuelTypeCreateManyInput | FuelTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FuelType createManyAndReturn
   */
  export type FuelTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * The data used to create many FuelTypes.
     */
    data: FuelTypeCreateManyInput | FuelTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FuelType update
   */
  export type FuelTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a FuelType.
     */
    data: XOR<FuelTypeUpdateInput, FuelTypeUncheckedUpdateInput>
    /**
     * Choose, which FuelType to update.
     */
    where: FuelTypeWhereUniqueInput
  }

  /**
   * FuelType updateMany
   */
  export type FuelTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FuelTypes.
     */
    data: XOR<FuelTypeUpdateManyMutationInput, FuelTypeUncheckedUpdateManyInput>
    /**
     * Filter which FuelTypes to update
     */
    where?: FuelTypeWhereInput
    /**
     * Limit how many FuelTypes to update.
     */
    limit?: number
  }

  /**
   * FuelType updateManyAndReturn
   */
  export type FuelTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * The data used to update FuelTypes.
     */
    data: XOR<FuelTypeUpdateManyMutationInput, FuelTypeUncheckedUpdateManyInput>
    /**
     * Filter which FuelTypes to update
     */
    where?: FuelTypeWhereInput
    /**
     * Limit how many FuelTypes to update.
     */
    limit?: number
  }

  /**
   * FuelType upsert
   */
  export type FuelTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the FuelType to update in case it exists.
     */
    where: FuelTypeWhereUniqueInput
    /**
     * In case the FuelType found by the `where` argument doesn't exist, create a new FuelType with this data.
     */
    create: XOR<FuelTypeCreateInput, FuelTypeUncheckedCreateInput>
    /**
     * In case the FuelType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuelTypeUpdateInput, FuelTypeUncheckedUpdateInput>
  }

  /**
   * FuelType delete
   */
  export type FuelTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
    /**
     * Filter which FuelType to delete.
     */
    where: FuelTypeWhereUniqueInput
  }

  /**
   * FuelType deleteMany
   */
  export type FuelTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuelTypes to delete
     */
    where?: FuelTypeWhereInput
    /**
     * Limit how many FuelTypes to delete.
     */
    limit?: number
  }

  /**
   * FuelType.cars
   */
  export type FuelType$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * FuelType without action
   */
  export type FuelTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelType
     */
    select?: FuelTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelType
     */
    omit?: FuelTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelTypeInclude<ExtArgs> | null
  }


  /**
   * Model BodyType
   */

  export type AggregateBodyType = {
    _count: BodyTypeCountAggregateOutputType | null
    _avg: BodyTypeAvgAggregateOutputType | null
    _sum: BodyTypeSumAggregateOutputType | null
    _min: BodyTypeMinAggregateOutputType | null
    _max: BodyTypeMaxAggregateOutputType | null
  }

  export type BodyTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type BodyTypeSumAggregateOutputType = {
    id: number | null
  }

  export type BodyTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BodyTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BodyTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BodyTypeAvgAggregateInputType = {
    id?: true
  }

  export type BodyTypeSumAggregateInputType = {
    id?: true
  }

  export type BodyTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BodyTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BodyTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BodyTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyType to aggregate.
     */
    where?: BodyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyTypes to fetch.
     */
    orderBy?: BodyTypeOrderByWithRelationInput | BodyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyTypes
    **/
    _count?: true | BodyTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyTypeMaxAggregateInputType
  }

  export type GetBodyTypeAggregateType<T extends BodyTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyType[P]>
      : GetScalarType<T[P], AggregateBodyType[P]>
  }




  export type BodyTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyTypeWhereInput
    orderBy?: BodyTypeOrderByWithAggregationInput | BodyTypeOrderByWithAggregationInput[]
    by: BodyTypeScalarFieldEnum[] | BodyTypeScalarFieldEnum
    having?: BodyTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyTypeCountAggregateInputType | true
    _avg?: BodyTypeAvgAggregateInputType
    _sum?: BodyTypeSumAggregateInputType
    _min?: BodyTypeMinAggregateInputType
    _max?: BodyTypeMaxAggregateInputType
  }

  export type BodyTypeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BodyTypeCountAggregateOutputType | null
    _avg: BodyTypeAvgAggregateOutputType | null
    _sum: BodyTypeSumAggregateOutputType | null
    _min: BodyTypeMinAggregateOutputType | null
    _max: BodyTypeMaxAggregateOutputType | null
  }

  type GetBodyTypeGroupByPayload<T extends BodyTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyTypeGroupByOutputType[P]>
            : GetScalarType<T[P], BodyTypeGroupByOutputType[P]>
        }
      >
    >


  export type BodyTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cars?: boolean | BodyType$carsArgs<ExtArgs>
    _count?: boolean | BodyTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyType"]>

  export type BodyTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bodyType"]>

  export type BodyTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bodyType"]>

  export type BodyTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BodyTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["bodyType"]>
  export type BodyTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | BodyType$carsArgs<ExtArgs>
    _count?: boolean | BodyTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BodyTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BodyTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BodyTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyType"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bodyType"]>
    composites: {}
  }

  type BodyTypeGetPayload<S extends boolean | null | undefined | BodyTypeDefaultArgs> = $Result.GetResult<Prisma.$BodyTypePayload, S>

  type BodyTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BodyTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BodyTypeCountAggregateInputType | true
    }

  export interface BodyTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyType'], meta: { name: 'BodyType' } }
    /**
     * Find zero or one BodyType that matches the filter.
     * @param {BodyTypeFindUniqueArgs} args - Arguments to find a BodyType
     * @example
     * // Get one BodyType
     * const bodyType = await prisma.bodyType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyTypeFindUniqueArgs>(args: SelectSubset<T, BodyTypeFindUniqueArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BodyType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyTypeFindUniqueOrThrowArgs} args - Arguments to find a BodyType
     * @example
     * // Get one BodyType
     * const bodyType = await prisma.bodyType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyTypeFindFirstArgs} args - Arguments to find a BodyType
     * @example
     * // Get one BodyType
     * const bodyType = await prisma.bodyType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyTypeFindFirstArgs>(args?: SelectSubset<T, BodyTypeFindFirstArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyTypeFindFirstOrThrowArgs} args - Arguments to find a BodyType
     * @example
     * // Get one BodyType
     * const bodyType = await prisma.bodyType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BodyTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyTypes
     * const bodyTypes = await prisma.bodyType.findMany()
     * 
     * // Get first 10 BodyTypes
     * const bodyTypes = await prisma.bodyType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyTypeWithIdOnly = await prisma.bodyType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyTypeFindManyArgs>(args?: SelectSubset<T, BodyTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BodyType.
     * @param {BodyTypeCreateArgs} args - Arguments to create a BodyType.
     * @example
     * // Create one BodyType
     * const BodyType = await prisma.bodyType.create({
     *   data: {
     *     // ... data to create a BodyType
     *   }
     * })
     * 
     */
    create<T extends BodyTypeCreateArgs>(args: SelectSubset<T, BodyTypeCreateArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BodyTypes.
     * @param {BodyTypeCreateManyArgs} args - Arguments to create many BodyTypes.
     * @example
     * // Create many BodyTypes
     * const bodyType = await prisma.bodyType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyTypeCreateManyArgs>(args?: SelectSubset<T, BodyTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyTypes and returns the data saved in the database.
     * @param {BodyTypeCreateManyAndReturnArgs} args - Arguments to create many BodyTypes.
     * @example
     * // Create many BodyTypes
     * const bodyType = await prisma.bodyType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyTypes and only return the `id`
     * const bodyTypeWithIdOnly = await prisma.bodyType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BodyType.
     * @param {BodyTypeDeleteArgs} args - Arguments to delete one BodyType.
     * @example
     * // Delete one BodyType
     * const BodyType = await prisma.bodyType.delete({
     *   where: {
     *     // ... filter to delete one BodyType
     *   }
     * })
     * 
     */
    delete<T extends BodyTypeDeleteArgs>(args: SelectSubset<T, BodyTypeDeleteArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BodyType.
     * @param {BodyTypeUpdateArgs} args - Arguments to update one BodyType.
     * @example
     * // Update one BodyType
     * const bodyType = await prisma.bodyType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyTypeUpdateArgs>(args: SelectSubset<T, BodyTypeUpdateArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BodyTypes.
     * @param {BodyTypeDeleteManyArgs} args - Arguments to filter BodyTypes to delete.
     * @example
     * // Delete a few BodyTypes
     * const { count } = await prisma.bodyType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyTypeDeleteManyArgs>(args?: SelectSubset<T, BodyTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyTypes
     * const bodyType = await prisma.bodyType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyTypeUpdateManyArgs>(args: SelectSubset<T, BodyTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyTypes and returns the data updated in the database.
     * @param {BodyTypeUpdateManyAndReturnArgs} args - Arguments to update many BodyTypes.
     * @example
     * // Update many BodyTypes
     * const bodyType = await prisma.bodyType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BodyTypes and only return the `id`
     * const bodyTypeWithIdOnly = await prisma.bodyType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BodyTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, BodyTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BodyType.
     * @param {BodyTypeUpsertArgs} args - Arguments to update or create a BodyType.
     * @example
     * // Update or create a BodyType
     * const bodyType = await prisma.bodyType.upsert({
     *   create: {
     *     // ... data to create a BodyType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyType we want to update
     *   }
     * })
     */
    upsert<T extends BodyTypeUpsertArgs>(args: SelectSubset<T, BodyTypeUpsertArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BodyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyTypeCountArgs} args - Arguments to filter BodyTypes to count.
     * @example
     * // Count the number of BodyTypes
     * const count = await prisma.bodyType.count({
     *   where: {
     *     // ... the filter for the BodyTypes we want to count
     *   }
     * })
    **/
    count<T extends BodyTypeCountArgs>(
      args?: Subset<T, BodyTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BodyTypeAggregateArgs>(args: Subset<T, BodyTypeAggregateArgs>): Prisma.PrismaPromise<GetBodyTypeAggregateType<T>>

    /**
     * Group by BodyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BodyTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyTypeGroupByArgs['orderBy'] }
        : { orderBy?: BodyTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BodyTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyType model
   */
  readonly fields: BodyTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends BodyType$carsArgs<ExtArgs> = {}>(args?: Subset<T, BodyType$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BodyType model
   */
  interface BodyTypeFieldRefs {
    readonly id: FieldRef<"BodyType", 'Int'>
    readonly name: FieldRef<"BodyType", 'String'>
    readonly createdAt: FieldRef<"BodyType", 'DateTime'>
    readonly updatedAt: FieldRef<"BodyType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BodyType findUnique
   */
  export type BodyTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which BodyType to fetch.
     */
    where: BodyTypeWhereUniqueInput
  }

  /**
   * BodyType findUniqueOrThrow
   */
  export type BodyTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which BodyType to fetch.
     */
    where: BodyTypeWhereUniqueInput
  }

  /**
   * BodyType findFirst
   */
  export type BodyTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which BodyType to fetch.
     */
    where?: BodyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyTypes to fetch.
     */
    orderBy?: BodyTypeOrderByWithRelationInput | BodyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyTypes.
     */
    cursor?: BodyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyTypes.
     */
    distinct?: BodyTypeScalarFieldEnum | BodyTypeScalarFieldEnum[]
  }

  /**
   * BodyType findFirstOrThrow
   */
  export type BodyTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which BodyType to fetch.
     */
    where?: BodyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyTypes to fetch.
     */
    orderBy?: BodyTypeOrderByWithRelationInput | BodyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyTypes.
     */
    cursor?: BodyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyTypes.
     */
    distinct?: BodyTypeScalarFieldEnum | BodyTypeScalarFieldEnum[]
  }

  /**
   * BodyType findMany
   */
  export type BodyTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which BodyTypes to fetch.
     */
    where?: BodyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyTypes to fetch.
     */
    orderBy?: BodyTypeOrderByWithRelationInput | BodyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyTypes.
     */
    cursor?: BodyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyTypes.
     */
    skip?: number
    distinct?: BodyTypeScalarFieldEnum | BodyTypeScalarFieldEnum[]
  }

  /**
   * BodyType create
   */
  export type BodyTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a BodyType.
     */
    data: XOR<BodyTypeCreateInput, BodyTypeUncheckedCreateInput>
  }

  /**
   * BodyType createMany
   */
  export type BodyTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyTypes.
     */
    data: BodyTypeCreateManyInput | BodyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyType createManyAndReturn
   */
  export type BodyTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * The data used to create many BodyTypes.
     */
    data: BodyTypeCreateManyInput | BodyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyType update
   */
  export type BodyTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a BodyType.
     */
    data: XOR<BodyTypeUpdateInput, BodyTypeUncheckedUpdateInput>
    /**
     * Choose, which BodyType to update.
     */
    where: BodyTypeWhereUniqueInput
  }

  /**
   * BodyType updateMany
   */
  export type BodyTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyTypes.
     */
    data: XOR<BodyTypeUpdateManyMutationInput, BodyTypeUncheckedUpdateManyInput>
    /**
     * Filter which BodyTypes to update
     */
    where?: BodyTypeWhereInput
    /**
     * Limit how many BodyTypes to update.
     */
    limit?: number
  }

  /**
   * BodyType updateManyAndReturn
   */
  export type BodyTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * The data used to update BodyTypes.
     */
    data: XOR<BodyTypeUpdateManyMutationInput, BodyTypeUncheckedUpdateManyInput>
    /**
     * Filter which BodyTypes to update
     */
    where?: BodyTypeWhereInput
    /**
     * Limit how many BodyTypes to update.
     */
    limit?: number
  }

  /**
   * BodyType upsert
   */
  export type BodyTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the BodyType to update in case it exists.
     */
    where: BodyTypeWhereUniqueInput
    /**
     * In case the BodyType found by the `where` argument doesn't exist, create a new BodyType with this data.
     */
    create: XOR<BodyTypeCreateInput, BodyTypeUncheckedCreateInput>
    /**
     * In case the BodyType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyTypeUpdateInput, BodyTypeUncheckedUpdateInput>
  }

  /**
   * BodyType delete
   */
  export type BodyTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
    /**
     * Filter which BodyType to delete.
     */
    where: BodyTypeWhereUniqueInput
  }

  /**
   * BodyType deleteMany
   */
  export type BodyTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyTypes to delete
     */
    where?: BodyTypeWhereInput
    /**
     * Limit how many BodyTypes to delete.
     */
    limit?: number
  }

  /**
   * BodyType.cars
   */
  export type BodyType$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * BodyType without action
   */
  export type BodyTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyType
     */
    select?: BodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyType
     */
    omit?: BodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyTypeInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    year: number | null
    brandId: number | null
    seriesId: number | null
    fuelTypeId: number | null
    bodyTypeId: number | null
    price: number | null
    mileage: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    year: number | null
    brandId: number | null
    seriesId: number | null
    fuelTypeId: number | null
    bodyTypeId: number | null
    price: number | null
    mileage: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    title: string | null
    year: number | null
    brandId: number | null
    seriesId: number | null
    fuelTypeId: number | null
    bodyTypeId: number | null
    price: number | null
    mileage: number | null
    imageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    title: string | null
    year: number | null
    brandId: number | null
    seriesId: number | null
    fuelTypeId: number | null
    bodyTypeId: number | null
    price: number | null
    mileage: number | null
    imageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    title: number
    year: number
    brandId: number
    seriesId: number
    fuelTypeId: number
    bodyTypeId: number
    price: number
    mileage: number
    imageUrl: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    year?: true
    brandId?: true
    seriesId?: true
    fuelTypeId?: true
    bodyTypeId?: true
    price?: true
    mileage?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    year?: true
    brandId?: true
    seriesId?: true
    fuelTypeId?: true
    bodyTypeId?: true
    price?: true
    mileage?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    title?: true
    year?: true
    brandId?: true
    seriesId?: true
    fuelTypeId?: true
    bodyTypeId?: true
    price?: true
    mileage?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    title?: true
    year?: true
    brandId?: true
    seriesId?: true
    fuelTypeId?: true
    bodyTypeId?: true
    price?: true
    mileage?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    title?: true
    year?: true
    brandId?: true
    seriesId?: true
    fuelTypeId?: true
    bodyTypeId?: true
    price?: true
    mileage?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    title: string
    year: number
    brandId: number
    seriesId: number | null
    fuelTypeId: number
    bodyTypeId: number
    price: number
    mileage: number | null
    imageUrl: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    brandId?: boolean
    seriesId?: boolean
    fuelTypeId?: boolean
    bodyTypeId?: boolean
    price?: boolean
    mileage?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    series?: boolean | Car$seriesArgs<ExtArgs>
    fuelType?: boolean | FuelTypeDefaultArgs<ExtArgs>
    bodyType?: boolean | BodyTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    brandId?: boolean
    seriesId?: boolean
    fuelTypeId?: boolean
    bodyTypeId?: boolean
    price?: boolean
    mileage?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    series?: boolean | Car$seriesArgs<ExtArgs>
    fuelType?: boolean | FuelTypeDefaultArgs<ExtArgs>
    bodyType?: boolean | BodyTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    brandId?: boolean
    seriesId?: boolean
    fuelTypeId?: boolean
    bodyTypeId?: boolean
    price?: boolean
    mileage?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    series?: boolean | Car$seriesArgs<ExtArgs>
    fuelType?: boolean | FuelTypeDefaultArgs<ExtArgs>
    bodyType?: boolean | BodyTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    title?: boolean
    year?: boolean
    brandId?: boolean
    seriesId?: boolean
    fuelTypeId?: boolean
    bodyTypeId?: boolean
    price?: boolean
    mileage?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "year" | "brandId" | "seriesId" | "fuelTypeId" | "bodyTypeId" | "price" | "mileage" | "imageUrl" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    series?: boolean | Car$seriesArgs<ExtArgs>
    fuelType?: boolean | FuelTypeDefaultArgs<ExtArgs>
    bodyType?: boolean | BodyTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    series?: boolean | Car$seriesArgs<ExtArgs>
    fuelType?: boolean | FuelTypeDefaultArgs<ExtArgs>
    bodyType?: boolean | BodyTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    series?: boolean | Car$seriesArgs<ExtArgs>
    fuelType?: boolean | FuelTypeDefaultArgs<ExtArgs>
    bodyType?: boolean | BodyTypeDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      series: Prisma.$SeriesPayload<ExtArgs> | null
      fuelType: Prisma.$FuelTypePayload<ExtArgs>
      bodyType: Prisma.$BodyTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      year: number
      brandId: number
      seriesId: number | null
      fuelTypeId: number
      bodyTypeId: number
      price: number
      mileage: number | null
      imageUrl: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    series<T extends Car$seriesArgs<ExtArgs> = {}>(args?: Subset<T, Car$seriesArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fuelType<T extends FuelTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuelTypeDefaultArgs<ExtArgs>>): Prisma__FuelTypeClient<$Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bodyType<T extends BodyTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BodyTypeDefaultArgs<ExtArgs>>): Prisma__BodyTypeClient<$Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly title: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly brandId: FieldRef<"Car", 'Int'>
    readonly seriesId: FieldRef<"Car", 'Int'>
    readonly fuelTypeId: FieldRef<"Car", 'Int'>
    readonly bodyTypeId: FieldRef<"Car", 'Int'>
    readonly price: FieldRef<"Car", 'Float'>
    readonly mileage: FieldRef<"Car", 'Int'>
    readonly imageUrl: FieldRef<"Car", 'String'>
    readonly description: FieldRef<"Car", 'String'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.series
   */
  export type Car$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const SeriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brandId: 'brandId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum]


  export const FuelTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FuelTypeScalarFieldEnum = (typeof FuelTypeScalarFieldEnum)[keyof typeof FuelTypeScalarFieldEnum]


  export const BodyTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BodyTypeScalarFieldEnum = (typeof BodyTypeScalarFieldEnum)[keyof typeof BodyTypeScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    title: 'title',
    year: 'year',
    brandId: 'brandId',
    seriesId: 'seriesId',
    fuelTypeId: 'fuelTypeId',
    bodyTypeId: 'bodyTypeId',
    price: 'price',
    mileage: 'mileage',
    imageUrl: 'imageUrl',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: IntFilter<"Brand"> | number
    name?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    series?: SeriesListRelationFilter
    cars?: CarListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    series?: SeriesOrderByRelationAggregateInput
    cars?: CarOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    series?: SeriesListRelationFilter
    cars?: CarListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brand"> | number
    name?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type SeriesWhereInput = {
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    id?: IntFilter<"Series"> | number
    name?: StringFilter<"Series"> | string
    brandId?: IntFilter<"Series"> | number
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    cars?: CarListRelationFilter
  }

  export type SeriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
    cars?: CarOrderByRelationAggregateInput
  }

  export type SeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_brandId?: SeriesNameBrandIdCompoundUniqueInput
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    name?: StringFilter<"Series"> | string
    brandId?: IntFilter<"Series"> | number
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    cars?: CarListRelationFilter
  }, "id" | "name_brandId">

  export type SeriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeriesCountOrderByAggregateInput
    _avg?: SeriesAvgOrderByAggregateInput
    _max?: SeriesMaxOrderByAggregateInput
    _min?: SeriesMinOrderByAggregateInput
    _sum?: SeriesSumOrderByAggregateInput
  }

  export type SeriesScalarWhereWithAggregatesInput = {
    AND?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    OR?: SeriesScalarWhereWithAggregatesInput[]
    NOT?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Series"> | number
    name?: StringWithAggregatesFilter<"Series"> | string
    brandId?: IntWithAggregatesFilter<"Series"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
  }

  export type FuelTypeWhereInput = {
    AND?: FuelTypeWhereInput | FuelTypeWhereInput[]
    OR?: FuelTypeWhereInput[]
    NOT?: FuelTypeWhereInput | FuelTypeWhereInput[]
    id?: IntFilter<"FuelType"> | number
    name?: StringFilter<"FuelType"> | string
    createdAt?: DateTimeFilter<"FuelType"> | Date | string
    updatedAt?: DateTimeFilter<"FuelType"> | Date | string
    cars?: CarListRelationFilter
  }

  export type FuelTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cars?: CarOrderByRelationAggregateInput
  }

  export type FuelTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FuelTypeWhereInput | FuelTypeWhereInput[]
    OR?: FuelTypeWhereInput[]
    NOT?: FuelTypeWhereInput | FuelTypeWhereInput[]
    createdAt?: DateTimeFilter<"FuelType"> | Date | string
    updatedAt?: DateTimeFilter<"FuelType"> | Date | string
    cars?: CarListRelationFilter
  }, "id" | "name">

  export type FuelTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FuelTypeCountOrderByAggregateInput
    _avg?: FuelTypeAvgOrderByAggregateInput
    _max?: FuelTypeMaxOrderByAggregateInput
    _min?: FuelTypeMinOrderByAggregateInput
    _sum?: FuelTypeSumOrderByAggregateInput
  }

  export type FuelTypeScalarWhereWithAggregatesInput = {
    AND?: FuelTypeScalarWhereWithAggregatesInput | FuelTypeScalarWhereWithAggregatesInput[]
    OR?: FuelTypeScalarWhereWithAggregatesInput[]
    NOT?: FuelTypeScalarWhereWithAggregatesInput | FuelTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FuelType"> | number
    name?: StringWithAggregatesFilter<"FuelType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FuelType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FuelType"> | Date | string
  }

  export type BodyTypeWhereInput = {
    AND?: BodyTypeWhereInput | BodyTypeWhereInput[]
    OR?: BodyTypeWhereInput[]
    NOT?: BodyTypeWhereInput | BodyTypeWhereInput[]
    id?: IntFilter<"BodyType"> | number
    name?: StringFilter<"BodyType"> | string
    createdAt?: DateTimeFilter<"BodyType"> | Date | string
    updatedAt?: DateTimeFilter<"BodyType"> | Date | string
    cars?: CarListRelationFilter
  }

  export type BodyTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cars?: CarOrderByRelationAggregateInput
  }

  export type BodyTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BodyTypeWhereInput | BodyTypeWhereInput[]
    OR?: BodyTypeWhereInput[]
    NOT?: BodyTypeWhereInput | BodyTypeWhereInput[]
    createdAt?: DateTimeFilter<"BodyType"> | Date | string
    updatedAt?: DateTimeFilter<"BodyType"> | Date | string
    cars?: CarListRelationFilter
  }, "id" | "name">

  export type BodyTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BodyTypeCountOrderByAggregateInput
    _avg?: BodyTypeAvgOrderByAggregateInput
    _max?: BodyTypeMaxOrderByAggregateInput
    _min?: BodyTypeMinOrderByAggregateInput
    _sum?: BodyTypeSumOrderByAggregateInput
  }

  export type BodyTypeScalarWhereWithAggregatesInput = {
    AND?: BodyTypeScalarWhereWithAggregatesInput | BodyTypeScalarWhereWithAggregatesInput[]
    OR?: BodyTypeScalarWhereWithAggregatesInput[]
    NOT?: BodyTypeScalarWhereWithAggregatesInput | BodyTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BodyType"> | number
    name?: StringWithAggregatesFilter<"BodyType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BodyType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BodyType"> | Date | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    title?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    brandId?: IntFilter<"Car"> | number
    seriesId?: IntNullableFilter<"Car"> | number | null
    fuelTypeId?: IntFilter<"Car"> | number
    bodyTypeId?: IntFilter<"Car"> | number
    price?: FloatFilter<"Car"> | number
    mileage?: IntNullableFilter<"Car"> | number | null
    imageUrl?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    series?: XOR<SeriesNullableScalarRelationFilter, SeriesWhereInput> | null
    fuelType?: XOR<FuelTypeScalarRelationFilter, FuelTypeWhereInput>
    bodyType?: XOR<BodyTypeScalarRelationFilter, BodyTypeWhereInput>
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    brandId?: SortOrder
    seriesId?: SortOrderInput | SortOrder
    fuelTypeId?: SortOrder
    bodyTypeId?: SortOrder
    price?: SortOrder
    mileage?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
    series?: SeriesOrderByWithRelationInput
    fuelType?: FuelTypeOrderByWithRelationInput
    bodyType?: BodyTypeOrderByWithRelationInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    title?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    brandId?: IntFilter<"Car"> | number
    seriesId?: IntNullableFilter<"Car"> | number | null
    fuelTypeId?: IntFilter<"Car"> | number
    bodyTypeId?: IntFilter<"Car"> | number
    price?: FloatFilter<"Car"> | number
    mileage?: IntNullableFilter<"Car"> | number | null
    imageUrl?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    series?: XOR<SeriesNullableScalarRelationFilter, SeriesWhereInput> | null
    fuelType?: XOR<FuelTypeScalarRelationFilter, FuelTypeWhereInput>
    bodyType?: XOR<BodyTypeScalarRelationFilter, BodyTypeWhereInput>
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    brandId?: SortOrder
    seriesId?: SortOrderInput | SortOrder
    fuelTypeId?: SortOrder
    bodyTypeId?: SortOrder
    price?: SortOrder
    mileage?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    title?: StringWithAggregatesFilter<"Car"> | string
    year?: IntWithAggregatesFilter<"Car"> | number
    brandId?: IntWithAggregatesFilter<"Car"> | number
    seriesId?: IntNullableWithAggregatesFilter<"Car"> | number | null
    fuelTypeId?: IntWithAggregatesFilter<"Car"> | number
    bodyTypeId?: IntWithAggregatesFilter<"Car"> | number
    price?: FloatWithAggregatesFilter<"Car"> | number
    mileage?: IntNullableWithAggregatesFilter<"Car"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"Car"> | string | null
    description?: StringNullableWithAggregatesFilter<"Car"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type BrandCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesCreateNestedManyWithoutBrandInput
    cars?: CarCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesUncheckedCreateNestedManyWithoutBrandInput
    cars?: CarUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateManyWithoutBrandNestedInput
    cars?: CarUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUncheckedUpdateManyWithoutBrandNestedInput
    cars?: CarUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutSeriesInput
    cars?: CarCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateInput = {
    id?: number
    name: string
    brandId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutSeriesNestedInput
    cars?: CarUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesCreateManyInput = {
    id?: number
    name: string
    brandId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelTypeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarCreateNestedManyWithoutFuelTypeInput
  }

  export type FuelTypeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutFuelTypeInput
  }

  export type FuelTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutFuelTypeNestedInput
  }

  export type FuelTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutFuelTypeNestedInput
  }

  export type FuelTypeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyTypeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarCreateNestedManyWithoutBodyTypeInput
  }

  export type BodyTypeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutBodyTypeInput
  }

  export type BodyTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutBodyTypeNestedInput
  }

  export type BodyTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutBodyTypeNestedInput
  }

  export type BodyTypeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateInput = {
    title: string
    year: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutCarsInput
    series?: SeriesCreateNestedOneWithoutCarsInput
    fuelType: FuelTypeCreateNestedOneWithoutCarsInput
    bodyType: BodyTypeCreateNestedOneWithoutCarsInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    title: string
    year: number
    brandId: number
    seriesId?: number | null
    fuelTypeId: number
    bodyTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutCarsNestedInput
    series?: SeriesUpdateOneWithoutCarsNestedInput
    fuelType?: FuelTypeUpdateOneRequiredWithoutCarsNestedInput
    bodyType?: BodyTypeUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    fuelTypeId?: IntFieldUpdateOperationsInput | number
    bodyTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyInput = {
    id?: number
    title: string
    year: number
    brandId: number
    seriesId?: number | null
    fuelTypeId: number
    bodyTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    fuelTypeId?: IntFieldUpdateOperationsInput | number
    bodyTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SeriesListRelationFilter = {
    every?: SeriesWhereInput
    some?: SeriesWhereInput
    none?: SeriesWhereInput
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type SeriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type SeriesNameBrandIdCompoundUniqueInput = {
    name: string
    brandId: number
  }

  export type SeriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type SeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type FuelTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuelTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BodyTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BodyTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BodyTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BodyTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BodyTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SeriesNullableScalarRelationFilter = {
    is?: SeriesWhereInput | null
    isNot?: SeriesWhereInput | null
  }

  export type FuelTypeScalarRelationFilter = {
    is?: FuelTypeWhereInput
    isNot?: FuelTypeWhereInput
  }

  export type BodyTypeScalarRelationFilter = {
    is?: BodyTypeWhereInput
    isNot?: BodyTypeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    brandId?: SortOrder
    seriesId?: SortOrder
    fuelTypeId?: SortOrder
    bodyTypeId?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    brandId?: SortOrder
    seriesId?: SortOrder
    fuelTypeId?: SortOrder
    bodyTypeId?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    brandId?: SortOrder
    seriesId?: SortOrder
    fuelTypeId?: SortOrder
    bodyTypeId?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    brandId?: SortOrder
    seriesId?: SortOrder
    fuelTypeId?: SortOrder
    bodyTypeId?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    brandId?: SortOrder
    seriesId?: SortOrder
    fuelTypeId?: SortOrder
    bodyTypeId?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SeriesCreateNestedManyWithoutBrandInput = {
    create?: XOR<SeriesCreateWithoutBrandInput, SeriesUncheckedCreateWithoutBrandInput> | SeriesCreateWithoutBrandInput[] | SeriesUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutBrandInput | SeriesCreateOrConnectWithoutBrandInput[]
    createMany?: SeriesCreateManyBrandInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type CarCreateNestedManyWithoutBrandInput = {
    create?: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput> | CarCreateWithoutBrandInput[] | CarUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBrandInput | CarCreateOrConnectWithoutBrandInput[]
    createMany?: CarCreateManyBrandInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type SeriesUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<SeriesCreateWithoutBrandInput, SeriesUncheckedCreateWithoutBrandInput> | SeriesCreateWithoutBrandInput[] | SeriesUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutBrandInput | SeriesCreateOrConnectWithoutBrandInput[]
    createMany?: SeriesCreateManyBrandInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput> | CarCreateWithoutBrandInput[] | CarUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBrandInput | CarCreateOrConnectWithoutBrandInput[]
    createMany?: CarCreateManyBrandInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SeriesUpdateManyWithoutBrandNestedInput = {
    create?: XOR<SeriesCreateWithoutBrandInput, SeriesUncheckedCreateWithoutBrandInput> | SeriesCreateWithoutBrandInput[] | SeriesUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutBrandInput | SeriesCreateOrConnectWithoutBrandInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutBrandInput | SeriesUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: SeriesCreateManyBrandInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutBrandInput | SeriesUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutBrandInput | SeriesUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type CarUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput> | CarCreateWithoutBrandInput[] | CarUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBrandInput | CarCreateOrConnectWithoutBrandInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutBrandInput | CarUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CarCreateManyBrandInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutBrandInput | CarUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CarUpdateManyWithWhereWithoutBrandInput | CarUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SeriesUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<SeriesCreateWithoutBrandInput, SeriesUncheckedCreateWithoutBrandInput> | SeriesCreateWithoutBrandInput[] | SeriesUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutBrandInput | SeriesCreateOrConnectWithoutBrandInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutBrandInput | SeriesUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: SeriesCreateManyBrandInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutBrandInput | SeriesUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutBrandInput | SeriesUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput> | CarCreateWithoutBrandInput[] | CarUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBrandInput | CarCreateOrConnectWithoutBrandInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutBrandInput | CarUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CarCreateManyBrandInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutBrandInput | CarUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CarUpdateManyWithWhereWithoutBrandInput | CarUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutSeriesInput = {
    create?: XOR<BrandCreateWithoutSeriesInput, BrandUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: BrandCreateOrConnectWithoutSeriesInput
    connect?: BrandWhereUniqueInput
  }

  export type CarCreateNestedManyWithoutSeriesInput = {
    create?: XOR<CarCreateWithoutSeriesInput, CarUncheckedCreateWithoutSeriesInput> | CarCreateWithoutSeriesInput[] | CarUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: CarCreateOrConnectWithoutSeriesInput | CarCreateOrConnectWithoutSeriesInput[]
    createMany?: CarCreateManySeriesInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutSeriesInput = {
    create?: XOR<CarCreateWithoutSeriesInput, CarUncheckedCreateWithoutSeriesInput> | CarCreateWithoutSeriesInput[] | CarUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: CarCreateOrConnectWithoutSeriesInput | CarCreateOrConnectWithoutSeriesInput[]
    createMany?: CarCreateManySeriesInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type BrandUpdateOneRequiredWithoutSeriesNestedInput = {
    create?: XOR<BrandCreateWithoutSeriesInput, BrandUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: BrandCreateOrConnectWithoutSeriesInput
    upsert?: BrandUpsertWithoutSeriesInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutSeriesInput, BrandUpdateWithoutSeriesInput>, BrandUncheckedUpdateWithoutSeriesInput>
  }

  export type CarUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<CarCreateWithoutSeriesInput, CarUncheckedCreateWithoutSeriesInput> | CarCreateWithoutSeriesInput[] | CarUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: CarCreateOrConnectWithoutSeriesInput | CarCreateOrConnectWithoutSeriesInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutSeriesInput | CarUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: CarCreateManySeriesInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutSeriesInput | CarUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: CarUpdateManyWithWhereWithoutSeriesInput | CarUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<CarCreateWithoutSeriesInput, CarUncheckedCreateWithoutSeriesInput> | CarCreateWithoutSeriesInput[] | CarUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: CarCreateOrConnectWithoutSeriesInput | CarCreateOrConnectWithoutSeriesInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutSeriesInput | CarUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: CarCreateManySeriesInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutSeriesInput | CarUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: CarUpdateManyWithWhereWithoutSeriesInput | CarUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarCreateNestedManyWithoutFuelTypeInput = {
    create?: XOR<CarCreateWithoutFuelTypeInput, CarUncheckedCreateWithoutFuelTypeInput> | CarCreateWithoutFuelTypeInput[] | CarUncheckedCreateWithoutFuelTypeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutFuelTypeInput | CarCreateOrConnectWithoutFuelTypeInput[]
    createMany?: CarCreateManyFuelTypeInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutFuelTypeInput = {
    create?: XOR<CarCreateWithoutFuelTypeInput, CarUncheckedCreateWithoutFuelTypeInput> | CarCreateWithoutFuelTypeInput[] | CarUncheckedCreateWithoutFuelTypeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutFuelTypeInput | CarCreateOrConnectWithoutFuelTypeInput[]
    createMany?: CarCreateManyFuelTypeInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutFuelTypeNestedInput = {
    create?: XOR<CarCreateWithoutFuelTypeInput, CarUncheckedCreateWithoutFuelTypeInput> | CarCreateWithoutFuelTypeInput[] | CarUncheckedCreateWithoutFuelTypeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutFuelTypeInput | CarCreateOrConnectWithoutFuelTypeInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutFuelTypeInput | CarUpsertWithWhereUniqueWithoutFuelTypeInput[]
    createMany?: CarCreateManyFuelTypeInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutFuelTypeInput | CarUpdateWithWhereUniqueWithoutFuelTypeInput[]
    updateMany?: CarUpdateManyWithWhereWithoutFuelTypeInput | CarUpdateManyWithWhereWithoutFuelTypeInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutFuelTypeNestedInput = {
    create?: XOR<CarCreateWithoutFuelTypeInput, CarUncheckedCreateWithoutFuelTypeInput> | CarCreateWithoutFuelTypeInput[] | CarUncheckedCreateWithoutFuelTypeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutFuelTypeInput | CarCreateOrConnectWithoutFuelTypeInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutFuelTypeInput | CarUpsertWithWhereUniqueWithoutFuelTypeInput[]
    createMany?: CarCreateManyFuelTypeInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutFuelTypeInput | CarUpdateWithWhereUniqueWithoutFuelTypeInput[]
    updateMany?: CarUpdateManyWithWhereWithoutFuelTypeInput | CarUpdateManyWithWhereWithoutFuelTypeInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarCreateNestedManyWithoutBodyTypeInput = {
    create?: XOR<CarCreateWithoutBodyTypeInput, CarUncheckedCreateWithoutBodyTypeInput> | CarCreateWithoutBodyTypeInput[] | CarUncheckedCreateWithoutBodyTypeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBodyTypeInput | CarCreateOrConnectWithoutBodyTypeInput[]
    createMany?: CarCreateManyBodyTypeInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutBodyTypeInput = {
    create?: XOR<CarCreateWithoutBodyTypeInput, CarUncheckedCreateWithoutBodyTypeInput> | CarCreateWithoutBodyTypeInput[] | CarUncheckedCreateWithoutBodyTypeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBodyTypeInput | CarCreateOrConnectWithoutBodyTypeInput[]
    createMany?: CarCreateManyBodyTypeInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutBodyTypeNestedInput = {
    create?: XOR<CarCreateWithoutBodyTypeInput, CarUncheckedCreateWithoutBodyTypeInput> | CarCreateWithoutBodyTypeInput[] | CarUncheckedCreateWithoutBodyTypeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBodyTypeInput | CarCreateOrConnectWithoutBodyTypeInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutBodyTypeInput | CarUpsertWithWhereUniqueWithoutBodyTypeInput[]
    createMany?: CarCreateManyBodyTypeInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutBodyTypeInput | CarUpdateWithWhereUniqueWithoutBodyTypeInput[]
    updateMany?: CarUpdateManyWithWhereWithoutBodyTypeInput | CarUpdateManyWithWhereWithoutBodyTypeInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutBodyTypeNestedInput = {
    create?: XOR<CarCreateWithoutBodyTypeInput, CarUncheckedCreateWithoutBodyTypeInput> | CarCreateWithoutBodyTypeInput[] | CarUncheckedCreateWithoutBodyTypeInput[]
    connectOrCreate?: CarCreateOrConnectWithoutBodyTypeInput | CarCreateOrConnectWithoutBodyTypeInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutBodyTypeInput | CarUpsertWithWhereUniqueWithoutBodyTypeInput[]
    createMany?: CarCreateManyBodyTypeInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutBodyTypeInput | CarUpdateWithWhereUniqueWithoutBodyTypeInput[]
    updateMany?: CarUpdateManyWithWhereWithoutBodyTypeInput | CarUpdateManyWithWhereWithoutBodyTypeInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutCarsInput = {
    create?: XOR<BrandCreateWithoutCarsInput, BrandUncheckedCreateWithoutCarsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutCarsInput
    connect?: BrandWhereUniqueInput
  }

  export type SeriesCreateNestedOneWithoutCarsInput = {
    create?: XOR<SeriesCreateWithoutCarsInput, SeriesUncheckedCreateWithoutCarsInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutCarsInput
    connect?: SeriesWhereUniqueInput
  }

  export type FuelTypeCreateNestedOneWithoutCarsInput = {
    create?: XOR<FuelTypeCreateWithoutCarsInput, FuelTypeUncheckedCreateWithoutCarsInput>
    connectOrCreate?: FuelTypeCreateOrConnectWithoutCarsInput
    connect?: FuelTypeWhereUniqueInput
  }

  export type BodyTypeCreateNestedOneWithoutCarsInput = {
    create?: XOR<BodyTypeCreateWithoutCarsInput, BodyTypeUncheckedCreateWithoutCarsInput>
    connectOrCreate?: BodyTypeCreateOrConnectWithoutCarsInput
    connect?: BodyTypeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BrandUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<BrandCreateWithoutCarsInput, BrandUncheckedCreateWithoutCarsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutCarsInput
    upsert?: BrandUpsertWithoutCarsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutCarsInput, BrandUpdateWithoutCarsInput>, BrandUncheckedUpdateWithoutCarsInput>
  }

  export type SeriesUpdateOneWithoutCarsNestedInput = {
    create?: XOR<SeriesCreateWithoutCarsInput, SeriesUncheckedCreateWithoutCarsInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutCarsInput
    upsert?: SeriesUpsertWithoutCarsInput
    disconnect?: SeriesWhereInput | boolean
    delete?: SeriesWhereInput | boolean
    connect?: SeriesWhereUniqueInput
    update?: XOR<XOR<SeriesUpdateToOneWithWhereWithoutCarsInput, SeriesUpdateWithoutCarsInput>, SeriesUncheckedUpdateWithoutCarsInput>
  }

  export type FuelTypeUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<FuelTypeCreateWithoutCarsInput, FuelTypeUncheckedCreateWithoutCarsInput>
    connectOrCreate?: FuelTypeCreateOrConnectWithoutCarsInput
    upsert?: FuelTypeUpsertWithoutCarsInput
    connect?: FuelTypeWhereUniqueInput
    update?: XOR<XOR<FuelTypeUpdateToOneWithWhereWithoutCarsInput, FuelTypeUpdateWithoutCarsInput>, FuelTypeUncheckedUpdateWithoutCarsInput>
  }

  export type BodyTypeUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<BodyTypeCreateWithoutCarsInput, BodyTypeUncheckedCreateWithoutCarsInput>
    connectOrCreate?: BodyTypeCreateOrConnectWithoutCarsInput
    upsert?: BodyTypeUpsertWithoutCarsInput
    connect?: BodyTypeWhereUniqueInput
    update?: XOR<XOR<BodyTypeUpdateToOneWithWhereWithoutCarsInput, BodyTypeUpdateWithoutCarsInput>, BodyTypeUncheckedUpdateWithoutCarsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SeriesCreateWithoutBrandInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesCreateOrConnectWithoutBrandInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutBrandInput, SeriesUncheckedCreateWithoutBrandInput>
  }

  export type SeriesCreateManyBrandInputEnvelope = {
    data: SeriesCreateManyBrandInput | SeriesCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type CarCreateWithoutBrandInput = {
    title: string
    year: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesCreateNestedOneWithoutCarsInput
    fuelType: FuelTypeCreateNestedOneWithoutCarsInput
    bodyType: BodyTypeCreateNestedOneWithoutCarsInput
  }

  export type CarUncheckedCreateWithoutBrandInput = {
    id?: number
    title: string
    year: number
    seriesId?: number | null
    fuelTypeId: number
    bodyTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateOrConnectWithoutBrandInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput>
  }

  export type CarCreateManyBrandInputEnvelope = {
    data: CarCreateManyBrandInput | CarCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type SeriesUpsertWithWhereUniqueWithoutBrandInput = {
    where: SeriesWhereUniqueInput
    update: XOR<SeriesUpdateWithoutBrandInput, SeriesUncheckedUpdateWithoutBrandInput>
    create: XOR<SeriesCreateWithoutBrandInput, SeriesUncheckedCreateWithoutBrandInput>
  }

  export type SeriesUpdateWithWhereUniqueWithoutBrandInput = {
    where: SeriesWhereUniqueInput
    data: XOR<SeriesUpdateWithoutBrandInput, SeriesUncheckedUpdateWithoutBrandInput>
  }

  export type SeriesUpdateManyWithWhereWithoutBrandInput = {
    where: SeriesScalarWhereInput
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyWithoutBrandInput>
  }

  export type SeriesScalarWhereInput = {
    AND?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
    OR?: SeriesScalarWhereInput[]
    NOT?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
    id?: IntFilter<"Series"> | number
    name?: StringFilter<"Series"> | string
    brandId?: IntFilter<"Series"> | number
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
  }

  export type CarUpsertWithWhereUniqueWithoutBrandInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutBrandInput, CarUncheckedUpdateWithoutBrandInput>
    create: XOR<CarCreateWithoutBrandInput, CarUncheckedCreateWithoutBrandInput>
  }

  export type CarUpdateWithWhereUniqueWithoutBrandInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutBrandInput, CarUncheckedUpdateWithoutBrandInput>
  }

  export type CarUpdateManyWithWhereWithoutBrandInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutBrandInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: IntFilter<"Car"> | number
    title?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    brandId?: IntFilter<"Car"> | number
    seriesId?: IntNullableFilter<"Car"> | number | null
    fuelTypeId?: IntFilter<"Car"> | number
    bodyTypeId?: IntFilter<"Car"> | number
    price?: FloatFilter<"Car"> | number
    mileage?: IntNullableFilter<"Car"> | number | null
    imageUrl?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type BrandCreateWithoutSeriesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutSeriesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutSeriesInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutSeriesInput, BrandUncheckedCreateWithoutSeriesInput>
  }

  export type CarCreateWithoutSeriesInput = {
    title: string
    year: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutCarsInput
    fuelType: FuelTypeCreateNestedOneWithoutCarsInput
    bodyType: BodyTypeCreateNestedOneWithoutCarsInput
  }

  export type CarUncheckedCreateWithoutSeriesInput = {
    id?: number
    title: string
    year: number
    brandId: number
    fuelTypeId: number
    bodyTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateOrConnectWithoutSeriesInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutSeriesInput, CarUncheckedCreateWithoutSeriesInput>
  }

  export type CarCreateManySeriesInputEnvelope = {
    data: CarCreateManySeriesInput | CarCreateManySeriesInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutSeriesInput = {
    update: XOR<BrandUpdateWithoutSeriesInput, BrandUncheckedUpdateWithoutSeriesInput>
    create: XOR<BrandCreateWithoutSeriesInput, BrandUncheckedCreateWithoutSeriesInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutSeriesInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutSeriesInput, BrandUncheckedUpdateWithoutSeriesInput>
  }

  export type BrandUpdateWithoutSeriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type CarUpsertWithWhereUniqueWithoutSeriesInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutSeriesInput, CarUncheckedUpdateWithoutSeriesInput>
    create: XOR<CarCreateWithoutSeriesInput, CarUncheckedCreateWithoutSeriesInput>
  }

  export type CarUpdateWithWhereUniqueWithoutSeriesInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutSeriesInput, CarUncheckedUpdateWithoutSeriesInput>
  }

  export type CarUpdateManyWithWhereWithoutSeriesInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutSeriesInput>
  }

  export type CarCreateWithoutFuelTypeInput = {
    title: string
    year: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutCarsInput
    series?: SeriesCreateNestedOneWithoutCarsInput
    bodyType: BodyTypeCreateNestedOneWithoutCarsInput
  }

  export type CarUncheckedCreateWithoutFuelTypeInput = {
    id?: number
    title: string
    year: number
    brandId: number
    seriesId?: number | null
    bodyTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateOrConnectWithoutFuelTypeInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutFuelTypeInput, CarUncheckedCreateWithoutFuelTypeInput>
  }

  export type CarCreateManyFuelTypeInputEnvelope = {
    data: CarCreateManyFuelTypeInput | CarCreateManyFuelTypeInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutFuelTypeInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutFuelTypeInput, CarUncheckedUpdateWithoutFuelTypeInput>
    create: XOR<CarCreateWithoutFuelTypeInput, CarUncheckedCreateWithoutFuelTypeInput>
  }

  export type CarUpdateWithWhereUniqueWithoutFuelTypeInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutFuelTypeInput, CarUncheckedUpdateWithoutFuelTypeInput>
  }

  export type CarUpdateManyWithWhereWithoutFuelTypeInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutFuelTypeInput>
  }

  export type CarCreateWithoutBodyTypeInput = {
    title: string
    year: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutCarsInput
    series?: SeriesCreateNestedOneWithoutCarsInput
    fuelType: FuelTypeCreateNestedOneWithoutCarsInput
  }

  export type CarUncheckedCreateWithoutBodyTypeInput = {
    id?: number
    title: string
    year: number
    brandId: number
    seriesId?: number | null
    fuelTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateOrConnectWithoutBodyTypeInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutBodyTypeInput, CarUncheckedCreateWithoutBodyTypeInput>
  }

  export type CarCreateManyBodyTypeInputEnvelope = {
    data: CarCreateManyBodyTypeInput | CarCreateManyBodyTypeInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutBodyTypeInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutBodyTypeInput, CarUncheckedUpdateWithoutBodyTypeInput>
    create: XOR<CarCreateWithoutBodyTypeInput, CarUncheckedCreateWithoutBodyTypeInput>
  }

  export type CarUpdateWithWhereUniqueWithoutBodyTypeInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutBodyTypeInput, CarUncheckedUpdateWithoutBodyTypeInput>
  }

  export type CarUpdateManyWithWhereWithoutBodyTypeInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutBodyTypeInput>
  }

  export type BrandCreateWithoutCarsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutCarsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutCarsInput, BrandUncheckedCreateWithoutCarsInput>
  }

  export type SeriesCreateWithoutCarsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    brandId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesCreateOrConnectWithoutCarsInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutCarsInput, SeriesUncheckedCreateWithoutCarsInput>
  }

  export type FuelTypeCreateWithoutCarsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelTypeUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelTypeCreateOrConnectWithoutCarsInput = {
    where: FuelTypeWhereUniqueInput
    create: XOR<FuelTypeCreateWithoutCarsInput, FuelTypeUncheckedCreateWithoutCarsInput>
  }

  export type BodyTypeCreateWithoutCarsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyTypeUncheckedCreateWithoutCarsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyTypeCreateOrConnectWithoutCarsInput = {
    where: BodyTypeWhereUniqueInput
    create: XOR<BodyTypeCreateWithoutCarsInput, BodyTypeUncheckedCreateWithoutCarsInput>
  }

  export type BrandUpsertWithoutCarsInput = {
    update: XOR<BrandUpdateWithoutCarsInput, BrandUncheckedUpdateWithoutCarsInput>
    create: XOR<BrandCreateWithoutCarsInput, BrandUncheckedCreateWithoutCarsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutCarsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutCarsInput, BrandUncheckedUpdateWithoutCarsInput>
  }

  export type BrandUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type SeriesUpsertWithoutCarsInput = {
    update: XOR<SeriesUpdateWithoutCarsInput, SeriesUncheckedUpdateWithoutCarsInput>
    create: XOR<SeriesCreateWithoutCarsInput, SeriesUncheckedCreateWithoutCarsInput>
    where?: SeriesWhereInput
  }

  export type SeriesUpdateToOneWithWhereWithoutCarsInput = {
    where?: SeriesWhereInput
    data: XOR<SeriesUpdateWithoutCarsInput, SeriesUncheckedUpdateWithoutCarsInput>
  }

  export type SeriesUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelTypeUpsertWithoutCarsInput = {
    update: XOR<FuelTypeUpdateWithoutCarsInput, FuelTypeUncheckedUpdateWithoutCarsInput>
    create: XOR<FuelTypeCreateWithoutCarsInput, FuelTypeUncheckedCreateWithoutCarsInput>
    where?: FuelTypeWhereInput
  }

  export type FuelTypeUpdateToOneWithWhereWithoutCarsInput = {
    where?: FuelTypeWhereInput
    data: XOR<FuelTypeUpdateWithoutCarsInput, FuelTypeUncheckedUpdateWithoutCarsInput>
  }

  export type FuelTypeUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelTypeUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyTypeUpsertWithoutCarsInput = {
    update: XOR<BodyTypeUpdateWithoutCarsInput, BodyTypeUncheckedUpdateWithoutCarsInput>
    create: XOR<BodyTypeCreateWithoutCarsInput, BodyTypeUncheckedCreateWithoutCarsInput>
    where?: BodyTypeWhereInput
  }

  export type BodyTypeUpdateToOneWithWhereWithoutCarsInput = {
    where?: BodyTypeWhereInput
    data: XOR<BodyTypeUpdateWithoutCarsInput, BodyTypeUncheckedUpdateWithoutCarsInput>
  }

  export type BodyTypeUpdateWithoutCarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyTypeUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCreateManyBrandInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarCreateManyBrandInput = {
    id?: number
    title: string
    year: number
    seriesId?: number | null
    fuelTypeId: number
    bodyTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUpdateWithoutBrandInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneWithoutCarsNestedInput
    fuelType?: FuelTypeUpdateOneRequiredWithoutCarsNestedInput
    bodyType?: BodyTypeUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    fuelTypeId?: IntFieldUpdateOperationsInput | number
    bodyTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    fuelTypeId?: IntFieldUpdateOperationsInput | number
    bodyTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManySeriesInput = {
    id?: number
    title: string
    year: number
    brandId: number
    fuelTypeId: number
    bodyTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateWithoutSeriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutCarsNestedInput
    fuelType?: FuelTypeUpdateOneRequiredWithoutCarsNestedInput
    bodyType?: BodyTypeUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarUncheckedUpdateWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    fuelTypeId?: IntFieldUpdateOperationsInput | number
    bodyTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    fuelTypeId?: IntFieldUpdateOperationsInput | number
    bodyTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyFuelTypeInput = {
    id?: number
    title: string
    year: number
    brandId: number
    seriesId?: number | null
    bodyTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateWithoutFuelTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutCarsNestedInput
    series?: SeriesUpdateOneWithoutCarsNestedInput
    bodyType?: BodyTypeUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarUncheckedUpdateWithoutFuelTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    bodyTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyWithoutFuelTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    bodyTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyBodyTypeInput = {
    id?: number
    title: string
    year: number
    brandId: number
    seriesId?: number | null
    fuelTypeId: number
    price: number
    mileage?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateWithoutBodyTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutCarsNestedInput
    series?: SeriesUpdateOneWithoutCarsNestedInput
    fuelType?: FuelTypeUpdateOneRequiredWithoutCarsNestedInput
  }

  export type CarUncheckedUpdateWithoutBodyTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    fuelTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyWithoutBodyTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    seriesId?: NullableIntFieldUpdateOperationsInput | number | null
    fuelTypeId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    mileage?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}