[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cubdb "View Source") API Reference ash\_cubdb v0.6.2

## [](api-reference.html#modules)Modules

[AshCubDB](AshCubDB.html)

[`AshCubDB`](AshCubDB.html#content) is an [Ash DataLayer](https://ash-hq.org/docs/module/ash/latest/ash-datalayer) which adds support for persisting Ash resources with [CubDB](https://hex.pm/packages/cubdb).

[AshCubDB.DataLayer](AshCubDB.DataLayer.html)

A CubDB data layer for Ash.

[AshCubDB.Dir](AshCubDB.Dir.html)

Utilities for working with the underlying data directory.

[AshCubDB.Info](AshCubDB.Info.html)

Auto-generated introspection for the AshCubDB DSL.

[AshCubDB.Migration](AshCubDB.Migration.html)

We store and check metadata when opening a database to ensure that the resource and attributes match, and possibly perform migrations.

[AshCubDB.Query](AshCubDB.Query.html)

A struct which holds information about a resource query as it is being built.

[AshCubDB.Serde](AshCubDB.Serde.html)

Handle serialising and deserialising of records into CubDB.

[Next Page → AshCubDB](readme.html)

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/data_layer.ex#L1 "View Source") AshCubDB.DataLayer (ash\_cubdb v0.6.2)

A CubDB data layer for Ash.

## [](AshCubDB.DataLayer.html#module-dsl-documentation)DSL Documentation

### [](AshCubDB.DataLayer.html#module-index)Index

- cubdb

### [](AshCubDB.DataLayer.html#module-docs)Docs

## [](AshCubDB.DataLayer.html#module-cubdb)cubdb

CubDB data layer configuration.

Examples:

```
cubdb do
  directory "/opt/storage/my_awesome_resource"
  auto_compact? true
  auto_file_sync? true
  name :my_awesome_resource
end
```

* * *

- `:directory` - The directory within which to store the CubDB data.  
  If none is supplied, then one will be automatically generated in the `priv` directory of the parent OTP application.
- `:otp_app` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The OTP application in whose `priv` directory data should be stored.  
  Only used if `directory` is not supplied. When not provided [`Application.get_application/1`](../elixir/Application.html#get_application/1) will be called for the resource.
- `:auto_compact?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Whether or not to automatically compact the CubDB database.  
  See [the CubDB documentation](https://hexdocs.pm/cubdb/faq.html#what-is-compaction) for more information. The default value is `true`.
- `:auto_file_sync?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Whether or not to automatically flush the buffer to disk on write.  
  See [the CubDB documentation](https://hexdocs.pm/cubdb/faq.html#what-does-file-sync-mean) The default value is `true`.
- `:name` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The name of the CubDB database.  
  By default this is the name of the resource module, however in some (rare) circumstances you may wish to specifically name the database.

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/dir.ex#L1 "View Source") AshCubDB.Dir (ash\_cubdb v0.6.2)

Utilities for working with the underlying data directory.

# [](AshCubDB.Dir.html#summary)Summary

## [Functions](AshCubDB.Dir.html#functions)

[readable?(resource)](AshCubDB.Dir.html#readable?/1)

Is the directory able to be read from by the current user?

[writable?(resource)](AshCubDB.Dir.html#writable?/1)

Is the directory able to be written to by the current user?

# [](AshCubDB.Dir.html#functions)Functions

[Link to this function](AshCubDB.Dir.html#readable?/1 "Link to this function")

# readable?(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/dir.ex#L23 "View Source")

Is the directory able to be read from by the current user?

[Link to this function](AshCubDB.Dir.html#writable?/1 "Link to this function")

# writable?(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/dir.ex#L11 "View Source")

Is the directory able to be written to by the current user?

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L1 "View Source") AshCubDB (ash\_cubdb v0.6.2)

[`AshCubDB`](AshCubDB.html#content) is an [Ash DataLayer](https://ash-hq.org/docs/module/ash/latest/ash-datalayer) which adds support for persisting Ash resources with [CubDB](https://hex.pm/packages/cubdb).

CubDB is an Elixir-based key value store which supports all Erlang-native terms. More information can be found in [the CubDB readme](https://hexdocs.pm/cubdb/readme.html).

# [](AshCubDB.html#summary)Summary

## [Functions](AshCubDB.html#functions)

[back\_up(resource, target\_path)](AshCubDB.html#back_up/2)

Creates a backup of the database into the target directory path.

[clear(resource)](AshCubDB.html#clear/1)

Deletes all entries, resulting in an empty database.

[compact(resource)](AshCubDB.html#compact/1)

Runs a database compaction.

[compacting?(resource)](AshCubDB.html#compacting?/1)

Returns true if a compaction operation is currently running, false otherwise.

[current\_db\_file(resource)](AshCubDB.html#current_db_file/1)

Returns the path of the current database file.

[data\_dir(resource)](AshCubDB.html#data_dir/1)

Returns the path of the data directory, as given when the [`CubDB`](../cubdb/2.0.2/CubDB.html) process was started.

[dirt\_factor(resource)](AshCubDB.html#dirt_factor/1)

Returns the dirt factor.

[file\_sync(resource)](AshCubDB.html#file_sync/1)

Performs an `fsync`, forcing to flush all data that might be buffered by the OS to disk.

[halt\_compaction(resource)](AshCubDB.html#halt_compaction/1)

Stops a running compaction.

[start(resource)](AshCubDB.html#start/1)

Ensure that the CubDB process is running for the specified resource.

[stop(resource)](AshCubDB.html#stop/1)

Stop the CubDB process running for a specific resource.

# [](AshCubDB.html#functions)Functions

[Link to this function](AshCubDB.html#back_up/2 "Link to this function")

# back\_up(resource, target\_path)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L54 "View Source")

```
@spec back_up(Ash.Resource.t(), Path.t()) :: :ok | {:error, any()}
```

Creates a backup of the database into the target directory path.

Wrapper around [`CubDB.back_up/2`](../cubdb/2.0.2/CubDB.html#back_up/2)

[Link to this function](AshCubDB.html#clear/1 "Link to this function")

# clear(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L67 "View Source")

```
@spec clear(Ash.Resource.t()) :: :ok
```

Deletes all entries, resulting in an empty database.

Wrapper around [`CubDB.clear/1`](../cubdb/2.0.2/CubDB.html#clear/1)

[Link to this function](AshCubDB.html#compact/1 "Link to this function")

# compact(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L80 "View Source")

```
@spec compact(Ash.Resource.t()) :: :ok | {:error, any()}
```

Runs a database compaction.

Wrapper around [`CubDB.compact/1`](../cubdb/2.0.2/CubDB.html#compact/1)

[Link to this function](AshCubDB.html#compacting?/1 "Link to this function")

# compacting?(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L93 "View Source")

```
@spec compacting?(Ash.Resource.t()) :: boolean()
```

Returns true if a compaction operation is currently running, false otherwise.

Wrapper around [`CubDB.compacting?/1`](../cubdb/2.0.2/CubDB.html#compacting?/1)

[Link to this function](AshCubDB.html#current_db_file/1 "Link to this function")

# current\_db\_file(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L106 "View Source")

```
@spec current_db_file(Ash.Resource.t()) :: String.t()
```

Returns the path of the current database file.

Wrapper around [`CubDB.current_db_file/1`](../cubdb/2.0.2/CubDB.html#current_db_file/1)

[Link to this function](AshCubDB.html#data_dir/1 "Link to this function")

# data\_dir(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L118 "View Source")

```
@spec data_dir(Ash.Resource.t()) :: String.t()
```

Returns the path of the data directory, as given when the [`CubDB`](../cubdb/2.0.2/CubDB.html) process was started.

Wrapper around [`CubDB.data_dir/1`](../cubdb/2.0.2/CubDB.html#data_dir/1)

[Link to this function](AshCubDB.html#dirt_factor/1 "Link to this function")

# dirt\_factor(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L130 "View Source")

```
@spec dirt_factor(Ash.Resource.t()) :: float()
```

Returns the dirt factor.

Wrapper around [`CubDB.dirt_factor/1`](../cubdb/2.0.2/CubDB.html#dirt_factor/1)

[Link to this function](AshCubDB.html#file_sync/1 "Link to this function")

# file\_sync(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L142 "View Source")

```
@spec file_sync(Ash.Resource.t()) :: :ok
```

Performs an `fsync`, forcing to flush all data that might be buffered by the OS to disk.

Wrapper around [`CubDB.file_sync/1`](../cubdb/2.0.2/CubDB.html#file_sync/1)

[Link to this function](AshCubDB.html#halt_compaction/1 "Link to this function")

# halt\_compaction(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L154 "View Source")

```
@spec halt_compaction(Ash.Resource.t()) :: :ok | {:error, :no_compaction_running}
```

Stops a running compaction.

Wrapper around [`CubDB.halt_compaction/1`](../cubdb/2.0.2/CubDB.html#halt_compaction/1)

[Link to this function](AshCubDB.html#start/1 "Link to this function")

# start(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L17 "View Source")

```
@spec start(Ash.Resource.t()) :: {:ok, pid()} | {:error, any()}
```

Ensure that the CubDB process is running for the specified resource.

[Link to this function](AshCubDB.html#stop/1 "Link to this function")

# stop(resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db.ex#L42 "View Source")

```
@spec stop(Ash.Resource.t()) :: :ok
```

Stop the CubDB process running for a specific resource.

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L1 "View Source") AshCubDB.Info (ash\_cubdb v0.6.2)

Auto-generated introspection for the AshCubDB DSL.

# [](AshCubDB.Info.html#summary)Summary

## [Functions](AshCubDB.Info.html#functions)

[cubdb\_auto\_compact?(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_auto_compact?/1)

Whether or not to automatically compact the CubDB database.

[cubdb\_auto\_file\_sync?(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_auto_file_sync?/1)

Whether or not to automatically flush the buffer to disk on write.

[cubdb\_directory(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_directory/1)

The directory within which to store the CubDB data.

[cubdb\_directory!(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_directory!/1)

The directory within which to store the CubDB data.

[cubdb\_name(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_name/1)

The name of the CubDB database.

[cubdb\_name!(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_name!/1)

The name of the CubDB database.

[cubdb\_options(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_options/1)

cubdb DSL options

[cubdb\_otp\_app(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_otp_app/1)

The OTP application in whose `priv` directory data should be stored.

[cubdb\_otp\_app!(dsl\_or\_extended)](AshCubDB.Info.html#cubdb_otp_app!/1)

The OTP application in whose `priv` directory data should be stored.

[field\_layout(resource\_or\_dsl\_state)](AshCubDB.Info.html#field_layout/1)

Retrieve the cached field layout for the resource.

# [](AshCubDB.Info.html#functions)Functions

[Link to this function](AshCubDB.Info.html#cubdb_auto_compact?/1 "Link to this function")

# cubdb\_auto\_compact?(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_auto_compact?(dsl_or_extended :: module() | map()) :: boolean()
```

Whether or not to automatically compact the CubDB database.

See [the CubDB documentation](https://hexdocs.pm/cubdb/faq.html#what-is-compaction) for more information.

[Link to this function](AshCubDB.Info.html#cubdb_auto_file_sync?/1 "Link to this function")

# cubdb\_auto\_file\_sync?(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_auto_file_sync?(dsl_or_extended :: module() | map()) :: boolean()
```

Whether or not to automatically flush the buffer to disk on write.

See [the CubDB documentation](https://hexdocs.pm/cubdb/faq.html#what-does-file-sync-mean)

[Link to this function](AshCubDB.Info.html#cubdb_directory/1 "Link to this function")

# cubdb\_directory(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_directory(dsl_or_extended :: module() | map()) ::
  {:ok, nil | String.t()} | :error
```

The directory within which to store the CubDB data.

If none is supplied, then one will be automatically generated in the `priv` directory of the parent OTP application.

[Link to this function](AshCubDB.Info.html#cubdb_directory!/1 "Link to this function")

# cubdb\_directory!(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_directory!(dsl_or_extended :: module() | map()) ::
  (nil | String.t()) | no_return()
```

The directory within which to store the CubDB data.

If none is supplied, then one will be automatically generated in the `priv` directory of the parent OTP application.

[Link to this function](AshCubDB.Info.html#cubdb_name/1 "Link to this function")

# cubdb\_name(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_name(dsl_or_extended :: module() | map()) :: {:ok, atom()} | :error
```

The name of the CubDB database.

By default this is the name of the resource module, however in some (rare) circumstances you may wish to specifically name the database.

[Link to this function](AshCubDB.Info.html#cubdb_name!/1 "Link to this function")

# cubdb\_name!(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_name!(dsl_or_extended :: module() | map()) :: atom() | no_return()
```

The name of the CubDB database.

By default this is the name of the resource module, however in some (rare) circumstances you may wish to specifically name the database.

[Link to this function](AshCubDB.Info.html#cubdb_options/1 "Link to this function")

# cubdb\_options(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

cubdb DSL options

Returns a map containing the and any configured or default values.

[Link to this function](AshCubDB.Info.html#cubdb_otp_app/1 "Link to this function")

# cubdb\_otp\_app(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_otp_app(dsl_or_extended :: module() | map()) :: {:ok, atom()} | :error
```

The OTP application in whose `priv` directory data should be stored.

Only used if `directory` is not supplied. When not provided [`Application.get_application/1`](../elixir/Application.html#get_application/1) will be called for the resource.

[Link to this function](AshCubDB.Info.html#cubdb_otp_app!/1 "Link to this function")

# cubdb\_otp\_app!(dsl\_or\_extended)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L6 "View Source")

```
@spec cubdb_otp_app!(dsl_or_extended :: module() | map()) :: atom() | no_return()
```

The OTP application in whose `priv` directory data should be stored.

Only used if `directory` is not supplied. When not provided [`Application.get_application/1`](../elixir/Application.html#get_application/1) will be called for the resource.

[Link to this function](AshCubDB.Info.html#field_layout/1 "Link to this function")

# field\_layout(resource\_or\_dsl\_state)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/info.ex#L13 "View Source")

```
@spec field_layout(Ash.Resource.t() | Spark.Dsl.t()) :: nil | {tuple(), tuple()}
```

Retrieve the cached field layout for the resource.

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/migration.ex#L1 "View Source") AshCubDB.Migration (ash\_cubdb v0.6.2)

We store and check metadata when opening a database to ensure that the resource and attributes match, and possibly perform migrations.

# [](AshCubDB.Migration.html#summary)Summary

## [Functions](AshCubDB.Migration.html#functions)

[check(db, resource)](AshCubDB.Migration.html#check/2)

Check that a newly opened database doesn't need to be migrated.

# [](AshCubDB.Migration.html#functions)Functions

[Link to this function](AshCubDB.Migration.html#check/2 "Link to this function")

# check(db, resource)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/migration.ex#L13 "View Source")

```
@spec check(GenServer.server(), Ash.Resource.t()) :: :ok | {:error, any()}
```

Check that a newly opened database doesn't need to be migrated.

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/query.ex#L1 "View Source") AshCubDB.Query (ash\_cubdb v0.6.2)

A struct which holds information about a resource query as it is being built.

# [](AshCubDB.Query.html#summary)Summary

## [Types](AshCubDB.Query.html#types)

[t()](AshCubDB.Query.html#t:t/0)

# [](AshCubDB.Query.html#types)Types

[Link to this type](AshCubDB.Query.html#t:t/0 "Link to this type")

# t()

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/query.ex#L21 "View Source")

```
@type t() :: %AshCubDB.Query{
  aggregates: [Ash.Resource.Aggregate.t()],
  calculations: [Ash.Resource.Calculation.t()],
  distinct: Ash.Sort.t(),
  distinct_sort: Ash.Sort.t(),
  domain: Ash.Domain.t(),
  filter: nil | Ash.Filter.t(),
  limit: :infinity | non_neg_integer(),
  offset: non_neg_integer(),
  relationships: %{
    optional(atom()) => Ash.Resource.Relationships.relationship()
  },
  resource: Ash.Resource.t(),
  sort: nil | Ash.Sort.t(),
  tenant: any()
}
```

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/serde.ex#L1 "View Source") AshCubDB.Serde (ash\_cubdb v0.6.2)

Handle serialising and deserialising of records into CubDB.

# [](AshCubDB.Serde.html#summary)Summary

## [Functions](AshCubDB.Serde.html#functions)

[deserialise(resource, key, data)](AshCubDB.Serde.html#deserialise/3)

Convert the key and data back into a record..

[serialise(record)](AshCubDB.Serde.html#serialise/1)

Serialise the record into key and value tuples for storage in CubDB.

# [](AshCubDB.Serde.html#functions)Functions

[Link to this function](AshCubDB.Serde.html#deserialise/3 "Link to this function")

# deserialise(resource, key, data)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/serde.ex#L38 "View Source")

```
@spec deserialise(Ash.Resource.t(), tuple(), tuple()) ::
  {:ok, Ash.Resource.record()} | {:error, any()}
```

Convert the key and data back into a record..

[Link to this function](AshCubDB.Serde.html#serialise/1 "Link to this function")

# serialise(record)

[View Source](https://harton.dev/james/ash_cub_db/src/branch/main/lib/ash_cub_db/serde.ex#L14 "View Source")

```
@spec serialise(Ash.Resource.record()) :: {:ok, tuple(), tuple()} | {:error, any()}
```

Serialise the record into key and value tuples for storage in CubDB.

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/documentation/dsls/DSL:-AshCubDB.DataLayer.md#L1 "View Source") DSL: AshCubDB.DataLayer

A CubDB data layer for Ash.

## [](dsl-ashcubdb-datalayer.html#dsl-documentation)DSL Documentation

### [](dsl-ashcubdb-datalayer.html#index)Index

- cubdb

### [](dsl-ashcubdb-datalayer.html#docs)Docs

## [](dsl-ashcubdb-datalayer.html#cubdb)cubdb

CubDB data layer configuration.

Examples:

```
cubdb do
  directory "/opt/storage/my_awesome_resource"
  auto_compact? true
  auto_file_sync? true
  name :my_awesome_resource
end
```

* * *

- `:directory` - The directory within which to store the CubDB data.  
  If none is supplied, then one will be automatically generated in the `priv` directory of the parent OTP application.
- `:otp_app` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The OTP application in whose `priv` directory data should be stored.  
  Only used if `directory` is not supplied. When not provided [`Application.get_application/1`](../elixir/Application.html#get_application/1) will be called for the resource.
- `:auto_compact?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Whether or not to automatically compact the CubDB database.  
  See [the CubDB documentation](https://hexdocs.pm/cubdb/faq.html#what-is-compaction) for more information. The default value is `true`.
- `:auto_file_sync?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Whether or not to automatically flush the buffer to disk on write.  
  See [the CubDB documentation](https://hexdocs.pm/cubdb/faq.html#what-does-file-sync-mean) The default value is `true`.
- `:name` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The name of the CubDB database.  
  By default this is the name of the resource module, however in some (rare) circumstances you may wish to specifically name the database.

## [](dsl-ashcubdb-datalayer.html#cubdb-1)cubdb

CubDB data layer configuration.

### [](dsl-ashcubdb-datalayer.html#examples)Examples

```
cubdb do
  directory "/opt/storage/my_awesome_resource"
  auto_compact? true
  auto_file_sync? true
  name :my_awesome_resource
end
```

### [](dsl-ashcubdb-datalayer.html#options)Options

NameTypeDefaultDocs[`directory`](dsl-ashcubdb-datalayer.html#cubdb-directory)`nil | String.t`The directory within which to store the CubDB data. If none is supplied, then one will be automatically generated in the `priv` directory of the parent OTP application.[`otp_app`](dsl-ashcubdb-datalayer.html#cubdb-otp_app)`atom`The OTP application in whose `priv` directory data should be stored. Only used if `directory` is not supplied. When not provided [`Application.get_application/1`](../elixir/Application.html#get_application/1) will be called for the resource.[`auto_compact?`](dsl-ashcubdb-datalayer.html#cubdb-auto_compact?)`boolean``true`Whether or not to automatically compact the CubDB database. See [the CubDB documentation](https://hexdocs.pm/cubdb/faq.html#what-is-compaction) for more information.[`auto_file_sync?`](dsl-ashcubdb-datalayer.html#cubdb-auto_file_sync?)`boolean``true`Whether or not to automatically flush the buffer to disk on write. See [the CubDB documentation](https://hexdocs.pm/cubdb/faq.html#what-does-file-sync-mean)[`name`](dsl-ashcubdb-datalayer.html#cubdb-name)`atom`The name of the CubDB database. By default this is the name of the resource module, however in some (rare) circumstances you may wish to specifically name the database.

[← Previous Page Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) ([current file](https://preview.hex.pm/preview/ash_cubdb/0.6.2/show/documentation/dsls/DSL:-AshCubDB.DataLayer.md)) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_cubdb](https://harton.dev/james/ash_cubdb)

v0.6.2

- Guides
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_cubdb

Settings

# [View Source](https://harton.dev/james/ash_cub_db/src/branch/main/README.md#L1 "View Source") AshCubDB

[![Build Status](https://drone.harton.dev/api/badges/james/ash_cubdb/status.svg?ref=refs%2Fheads%2Fmain)](https://drone.harton.dev/james/ash_cubdb) [![Hex.pm](https://img.shields.io/hexpm/v/ash_cubdb.svg)](https://hex.pm/packages/ash_cubdb) [![Hippocratic License HL3-FULL](https://img.shields.io/static/v1?label=Hippocratic%20License&message=HL3-FULL&labelColor=5e2751&color=bc8c3d)](https://firstdonoharm.dev/version/3/0/full.html)

An [Ash DataLayer](https://ash-hq.org/docs/module/ash/latest/ash-datalayer) which adds support for [CubDB](https://hex.pm/packages/cubdb).

## [](readme.html#status)Status

AshCubDb is still a work in progress. Feel free to give it a go.

FeatureStatusCreate✅Upsert (by primary key)✅Upsert (by identity)❌Read (all)✅Read (by primary key)✅Read (filters)✅Read (sort)✅Read (distinct sort)✅Read (calculations)✅Read (aggregates)❌Update✅Destroy✅Transactions❌

## [](readme.html#github-mirror)Github Mirror

This repository is mirrored [on Github](https://github.com/jimsynz/ash_cubdb) from it's primary location [on my Forgejo instance](https://harton.dev/james/ash_cubdb). Feel free to raise issues and open PRs on Github.

## [](readme.html#installation)Installation

AshCubDB is [available in Hex](https://hex.pm/packages/ash_cubdb), the package can be installed by adding `ash_cubdb` to your list of dependencies in `mix.exs`:

```
def deps do
  [
    {:ash_cubdb, "~> 0.6.2"}
  ]
end
```

Documentation for the latest release can be found on [HexDocs](../ash_cubdb.html) and for the `main` branch on [docs.harton.nz](https://docs.harton.nz/james/ash_cubdb).

## [](readme.html#license)License

This software is licensed under the terms of the [HL3-FULL](https://firstdonoharm.dev), see the `LICENSE.md` file included with this package for the terms.

This license actively proscribes this software being used by and for some industries, countries and activities. If your usage of this software doesn't comply with the terms of this license, then [contact me](mailto:james@harton.nz) with the details of your use-case to organise the purchase of a license - the cost of which may include a donation to a suitable charity or NGO.

[← Previous Page API Reference](api-reference.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_cubdb/0.6.2) [Hex Preview](https://preview.hex.pm/preview/ash_cubdb/0.6.2) ([current file](https://preview.hex.pm/preview/ash_cubdb/0.6.2/show/README.md)) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.32.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
