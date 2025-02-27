[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite "View Source") API Reference ash\_sqlite v0.2.3

## [](api-reference.html#modules)Modules

[AshSqlite](AshSqlite.html)

The AshSqlite extension gives you tools to map a resource to a sqlite database table.

[AshSqlite.CustomExtension](AshSqlite.CustomExtension.html)

A custom extension implementation.

[AshSqlite.CustomIndex](AshSqlite.CustomIndex.html)

Represents a custom index on the table backing a resource

[AshSqlite.DataLayer](AshSqlite.DataLayer.html)

A sqlite data layer that leverages Ecto's sqlite capabilities.

[AshSqlite.DataLayer.Info](AshSqlite.DataLayer.Info.html)

Introspection functions for

[AshSqlite.Functions.ILike](AshSqlite.Functions.ILike.html)

Maps to the builtin sqlite function `ilike`.

[AshSqlite.Functions.Like](AshSqlite.Functions.Like.html)

Maps to the builtin sqlite function `like`.

[AshSqlite.ManualRelationship](AshSqlite.ManualRelationship.html)

A behavior for sqlite-specific manual relationship functionality

[AshSqlite.Reference](AshSqlite.Reference.html)

Represents the configuration of a reference (i.e foreign key).

[AshSqlite.Repo](AshSqlite.Repo.html)

Resources that use [`AshSqlite.DataLayer`](AshSqlite.DataLayer.html) use a `Repo` to access the database.

[AshSqlite.Statement](AshSqlite.Statement.html)

Represents a custom statement to be run in generated migrations

[AshSqlite.Type](AshSqlite.Type.html)

Sqlite specific callbacks for [`Ash.Type`](../ash/3.4.58/Ash.Type.html).

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_sqlite.create](Mix.Tasks.AshSqlite.Create.html)

Create the storage for repos in all resources for the given (or configured) domains.

[mix ash\_sqlite.drop](Mix.Tasks.AshSqlite.Drop.html)

Drop the storage for the given repository.

[mix ash\_sqlite.generate\_migrations](Mix.Tasks.AshSqlite.GenerateMigrations.html)

Generates migrations, and stores a snapshot of your resources.

[mix ash\_sqlite.install](Mix.Tasks.AshSqlite.Install.html)

Installs AshSqlite. Should be run with `mix igniter.install ash_sqlite`

[mix ash\_sqlite.migrate](Mix.Tasks.AshSqlite.Migrate.html)

Runs the pending migrations for the given repository.

[mix ash\_sqlite.rollback](Mix.Tasks.AshSqlite.Rollback.html)

Reverts applied migrations in the given repository. Migrations are expected at "priv/YOUR\_REPO/migrations" directory of the current application but it can be configured by specifying the `:priv` key under the repository configuration. Runs the latest applied migration by default. To roll back to a version number, supply `--to version_number`. To roll back a specific number of times, use `--step n`. To undo all applied migrations, provide `--all`.

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/custom_extension.ex#L1 "View Source") AshSqlite.CustomExtension behaviour (ash\_sqlite v0.2.3)

A custom extension implementation.

# [](AshSqlite.CustomExtension.html#summary)Summary

## [Callbacks](AshSqlite.CustomExtension.html#callbacks)

[install(version)](AshSqlite.CustomExtension.html#c:install/1)

[uninstall(version)](AshSqlite.CustomExtension.html#c:uninstall/1)

# [](AshSqlite.CustomExtension.html#callbacks)Callbacks

[](AshSqlite.CustomExtension.html#c:install/1)

# install(version)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/custom_extension.ex#L6)

```
@callback install(version :: integer()) :: String.t()
```

[](AshSqlite.CustomExtension.html#c:uninstall/1)

# uninstall(version)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/custom_extension.ex#L8)

```
@callback uninstall(version :: integer()) :: String.t()
```

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/custom_index.ex#L1 "View Source") AshSqlite.CustomIndex (ash\_sqlite v0.2.3)

Represents a custom index on the table backing a resource

# [](AshSqlite.CustomIndex.html#summary)Summary

## [Functions](AshSqlite.CustomIndex.html#functions)

[fields()](AshSqlite.CustomIndex.html#fields/0)

[name(table, map)](AshSqlite.CustomIndex.html#name/2)

[schema()](AshSqlite.CustomIndex.html#schema/0)

[transform(index)](AshSqlite.CustomIndex.html#transform/1)

# [](AshSqlite.CustomIndex.html#functions)Functions

[](AshSqlite.CustomIndex.html#fields/0)

# fields()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/custom_index.ex#L16)

[](AshSqlite.CustomIndex.html#name/2)

# name(table, map)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/custom_index.ex#L96)

[](AshSqlite.CustomIndex.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/custom_index.ex#L51)

[](AshSqlite.CustomIndex.html#transform/1)

# transform(index)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/custom_index.ex#L54)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L1 "View Source") AshSqlite.DataLayer (ash\_sqlite v0.2.3)

A sqlite data layer that leverages Ecto's sqlite capabilities.

# [](AshSqlite.DataLayer.html#summary)Summary

## [Functions](AshSqlite.DataLayer.html#functions)

[add\_known\_binding(query, data, known\_binding)](AshSqlite.DataLayer.html#add_known_binding/3)

[codegen(args)](AshSqlite.DataLayer.html#codegen/1)

[from\_ecto(other)](AshSqlite.DataLayer.html#from_ecto/1)

[install(igniter, \_, \_, \_)](AshSqlite.DataLayer.html#install/4)

[install(igniter, module, arg, path, argv)](AshSqlite.DataLayer.html#install/5)

[migrate(args)](AshSqlite.DataLayer.html#migrate/1)

[rollback(args)](AshSqlite.DataLayer.html#rollback/1)

[setup(args)](AshSqlite.DataLayer.html#setup/1)

[sqlite(body)](AshSqlite.DataLayer.html#sqlite/1)

[tear\_down(args)](AshSqlite.DataLayer.html#tear_down/1)

[to\_ecto(value)](AshSqlite.DataLayer.html#to_ecto/1)

# [](AshSqlite.DataLayer.html#functions)Functions

[](AshSqlite.DataLayer.html#add_known_binding/3)

# add\_known\_binding(query, data, known\_binding)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L1496)

[](AshSqlite.DataLayer.html#codegen/1)

# codegen(args)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L393)

[](AshSqlite.DataLayer.html#from_ecto/1)

# from\_ecto(other)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L1005)

[](AshSqlite.DataLayer.html#install/4)

# install(igniter, \_, \_, \_)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L390)

[](AshSqlite.DataLayer.html#install/5)

# install(igniter, module, arg, path, argv)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L366)

[](AshSqlite.DataLayer.html#migrate/1)

# migrate(args)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L301)

[](AshSqlite.DataLayer.html#rollback/1)

# rollback(args)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L306)

[](AshSqlite.DataLayer.html#setup/1)

# setup(args)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L398)

[](AshSqlite.DataLayer.html#sqlite/1)

# sqlite(body)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L293)(macro)

[](AshSqlite.DataLayer.html#tear_down/1)

# tear\_down(args)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L404)

[](AshSqlite.DataLayer.html#to_ecto/1)

# to\_ecto(value)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer.ex#L1036)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L1 "View Source") AshSqlite.DataLayer.Info (ash\_sqlite v0.2.3)

Introspection functions for

# [](AshSqlite.DataLayer.Info.html#summary)Summary

## [Functions](AshSqlite.DataLayer.Info.html#functions)

[base\_filter\_sql(resource)](AshSqlite.DataLayer.Info.html#base_filter_sql/1)

A stringified version of the base\_filter, to be used in a where clause when generating unique indexes

[custom\_indexes(resource)](AshSqlite.DataLayer.Info.html#custom_indexes/1)

The configured custom\_indexes for a resource

[custom\_statements(resource)](AshSqlite.DataLayer.Info.html#custom_statements/1)

The configured custom\_statements for a resource

[exclusion\_constraint\_names(resource)](AshSqlite.DataLayer.Info.html#exclusion_constraint_names/1)

The configured exclusion\_constraint\_names

[foreign\_key\_names(resource)](AshSqlite.DataLayer.Info.html#foreign_key_names/1)

The configured foreign\_key\_names

[global\_upsert\_keys(resource)](AshSqlite.DataLayer.Info.html#global_upsert_keys/1)

A list of keys to always include in upserts.

[identity\_index\_names(resource)](AshSqlite.DataLayer.Info.html#identity_index_names/1)

The configured identity\_index\_names

[migrate?(resource)](AshSqlite.DataLayer.Info.html#migrate?/1)

Whether or not the resource should be included when generating migrations

[migration\_defaults(resource)](AshSqlite.DataLayer.Info.html#migration_defaults/1)

A keyword list of customized migration defaults

[migration\_ignore\_attributes(resource)](AshSqlite.DataLayer.Info.html#migration_ignore_attributes/1)

A list of attributes to be ignored when generating migrations

[migration\_types(resource)](AshSqlite.DataLayer.Info.html#migration_types/1)

A keyword list of customized migration types

[polymorphic?(resource)](AshSqlite.DataLayer.Info.html#polymorphic?/1)

The configured polymorphic? for a resource

[polymorphic\_name(resource)](AshSqlite.DataLayer.Info.html#polymorphic_name/1)

The configured polymorphic\_reference\_name for a resource

[polymorphic\_on\_delete(resource)](AshSqlite.DataLayer.Info.html#polymorphic_on_delete/1)

The configured polymorphic\_reference\_on\_delete for a resource

[polymorphic\_on\_update(resource)](AshSqlite.DataLayer.Info.html#polymorphic_on_update/1)

The configured polymorphic\_reference\_on\_update for a resource

[reference(resource, relationship)](AshSqlite.DataLayer.Info.html#reference/2)

The configured reference for a given relationship of a resource

[references(resource)](AshSqlite.DataLayer.Info.html#references/1)

The configured references for a resource

[repo(resource)](AshSqlite.DataLayer.Info.html#repo/1)

The configured repo for a resource

[skip\_identities(resource)](AshSqlite.DataLayer.Info.html#skip_identities/1)

Identities not to include in the migrations

[skip\_unique\_indexes(resource)](AshSqlite.DataLayer.Info.html#skip_unique_indexes/1)

Skip generating unique indexes when generating migrations

[table(resource)](AshSqlite.DataLayer.Info.html#table/1)

The configured table for a resource

[unique\_index\_names(resource)](AshSqlite.DataLayer.Info.html#unique_index_names/1)

The configured unique\_index\_names

# [](AshSqlite.DataLayer.Info.html#functions)Functions

[](AshSqlite.DataLayer.Info.html#base_filter_sql/1)

# base\_filter\_sql(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L109)

A stringified version of the base\_filter, to be used in a where clause when generating unique indexes

[](AshSqlite.DataLayer.Info.html#custom_indexes/1)

# custom\_indexes(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L44)

The configured custom\_indexes for a resource

[](AshSqlite.DataLayer.Info.html#custom_statements/1)

# custom\_statements(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L49)

The configured custom\_statements for a resource

[](AshSqlite.DataLayer.Info.html#exclusion_constraint_names/1)

# exclusion\_constraint\_names(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L79)

The configured exclusion\_constraint\_names

[](AshSqlite.DataLayer.Info.html#foreign_key_names/1)

# foreign\_key\_names(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L94)

The configured foreign\_key\_names

[](AshSqlite.DataLayer.Info.html#global_upsert_keys/1)

# global\_upsert\_keys(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L104)

A list of keys to always include in upserts.

[](AshSqlite.DataLayer.Info.html#identity_index_names/1)

# identity\_index\_names(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L84)

The configured identity\_index\_names

[](AshSqlite.DataLayer.Info.html#migrate?/1)

# migrate?(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L99)

Whether or not the resource should be included when generating migrations

[](AshSqlite.DataLayer.Info.html#migration_defaults/1)

# migration\_defaults(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L34)

A keyword list of customized migration defaults

[](AshSqlite.DataLayer.Info.html#migration_ignore_attributes/1)

# migration\_ignore\_attributes(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L39)

A list of attributes to be ignored when generating migrations

[](AshSqlite.DataLayer.Info.html#migration_types/1)

# migration\_types(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L29)

A keyword list of customized migration types

[](AshSqlite.DataLayer.Info.html#polymorphic?/1)

# polymorphic?(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L69)

The configured polymorphic? for a resource

[](AshSqlite.DataLayer.Info.html#polymorphic_name/1)

# polymorphic\_name(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L64)

The configured polymorphic\_reference\_name for a resource

[](AshSqlite.DataLayer.Info.html#polymorphic_on_delete/1)

# polymorphic\_on\_delete(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L54)

The configured polymorphic\_reference\_on\_delete for a resource

[](AshSqlite.DataLayer.Info.html#polymorphic_on_update/1)

# polymorphic\_on\_update(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L59)

The configured polymorphic\_reference\_on\_update for a resource

[](AshSqlite.DataLayer.Info.html#reference/2)

# reference(resource, relationship)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L22)

The configured reference for a given relationship of a resource

[](AshSqlite.DataLayer.Info.html#references/1)

# references(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L17)

The configured references for a resource

[](AshSqlite.DataLayer.Info.html#repo/1)

# repo(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L7)

The configured repo for a resource

[](AshSqlite.DataLayer.Info.html#skip_identities/1)

# skip\_identities(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L89)

Identities not to include in the migrations

[](AshSqlite.DataLayer.Info.html#skip_unique_indexes/1)

# skip\_unique\_indexes(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L114)

Skip generating unique indexes when generating migrations

[](AshSqlite.DataLayer.Info.html#table/1)

# table(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L12)

The configured table for a resource

[](AshSqlite.DataLayer.Info.html#unique_index_names/1)

# unique\_index\_names(resource)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/data_layer/info.ex#L74)

The configured unique\_index\_names

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/functions/ilike.ex#L1 "View Source") AshSqlite.Functions.ILike (ash\_sqlite v0.2.3)

Maps to the builtin sqlite function `ilike`.

# [](AshSqlite.Functions.ILike.html#summary)Summary

## [Functions](AshSqlite.Functions.ILike.html#functions)

[args()](AshSqlite.Functions.ILike.html#args/0)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.58/Ash.Query.Function.html#c:args/0).

# [](AshSqlite.Functions.ILike.html#functions)Functions

[](AshSqlite.Functions.ILike.html#args/0)

# args()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/functions/ilike.ex#L8)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.58/Ash.Query.Function.html#c:args/0).

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/functions/like.ex#L1 "View Source") AshSqlite.Functions.Like (ash\_sqlite v0.2.3)

Maps to the builtin sqlite function `like`.

# [](AshSqlite.Functions.Like.html#summary)Summary

## [Functions](AshSqlite.Functions.Like.html#functions)

[args()](AshSqlite.Functions.Like.html#args/0)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.58/Ash.Query.Function.html#c:args/0).

# [](AshSqlite.Functions.Like.html#functions)Functions

[](AshSqlite.Functions.Like.html#args/0)

# args()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/functions/like.ex#L8)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.58/Ash.Query.Function.html#c:args/0).

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/ash_sqlite.ex#L1 "View Source") AshSqlite (ash\_sqlite v0.2.3)

The AshSqlite extension gives you tools to map a resource to a sqlite database table.

For more, check out the [getting started guide](getting-started-with-ash-sqlite.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/manual_relationship.ex#L1 "View Source") AshSqlite.ManualRelationship behaviour (ash\_sqlite v0.2.3)

A behavior for sqlite-specific manual relationship functionality

# [](AshSqlite.ManualRelationship.html#summary)Summary

## [Callbacks](AshSqlite.ManualRelationship.html#callbacks)

[ash\_sqlite\_join(source\_query, opts, current\_binding, destination\_binding, type, destination\_query)](AshSqlite.ManualRelationship.html#c:ash_sqlite_join/6)

[ash\_sqlite\_subquery(opts, current\_binding, destination\_binding, destination\_query)](AshSqlite.ManualRelationship.html#c:ash_sqlite_subquery/4)

# [](AshSqlite.ManualRelationship.html#callbacks)Callbacks

[](AshSqlite.ManualRelationship.html#c:ash_sqlite_join/6)

# ash\_sqlite\_join(source\_query, opts, current\_binding, destination\_binding, type, destination\_query)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/manual_relationship.ex#L4)

```
@callback ash_sqlite_join(
  source_query :: Ecto.Query.t(),
  opts :: Keyword.t(),
  current_binding :: term(),
  destination_binding :: term(),
  type :: :inner | :left,
  destination_query :: Ecto.Query.t()
) :: {:ok, Ecto.Query.t()} | {:error, term()}
```

[](AshSqlite.ManualRelationship.html#c:ash_sqlite_subquery/4)

# ash\_sqlite\_subquery(opts, current\_binding, destination\_binding, destination\_query)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/manual_relationship.ex#L13)

```
@callback ash_sqlite_subquery(
  opts :: Keyword.t(),
  current_binding :: term(),
  destination_binding :: term(),
  destination_query :: Ecto.Query.t()
) :: {:ok, Ecto.Query.t()} | {:error, term()}
```

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/reference.ex#L1 "View Source") AshSqlite.Reference (ash\_sqlite v0.2.3)

Represents the configuration of a reference (i.e foreign key).

# [](AshSqlite.Reference.html#summary)Summary

## [Functions](AshSqlite.Reference.html#functions)

[schema()](AshSqlite.Reference.html#schema/0)

# [](AshSqlite.Reference.html#functions)Functions

[](AshSqlite.Reference.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/reference.ex#L5)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/repo.ex#L1 "View Source") AshSqlite.Repo behaviour (ash\_sqlite v0.2.3)

Resources that use [`AshSqlite.DataLayer`](AshSqlite.DataLayer.html) use a `Repo` to access the database.

This repo is a thin wrapper around an [`Ecto.Repo`](../ecto/3.12.5/Ecto.Repo.html).

You can use [`Ecto.Repo`](../ecto/3.12.5/Ecto.Repo.html)'s `init/2` to configure your repo like normal, but instead of returning `{:ok, config}`, use `super(config)` to pass the configuration to the [`AshSqlite.Repo`](AshSqlite.Repo.html) implementation.

## [](AshSqlite.Repo.html#module-additional-repo-configuration)Additional Repo Configuration

Because an `AshPostgres.Repo` is also an [`Ecto.Repo`](../ecto/3.12.5/Ecto.Repo.html), it has all of the same callbacks.

In the [`Ecto.Repo.init/2`](../ecto/3.12.5/Ecto.Repo.html#c:init/2) callback, you can configure the following additional items:

- `:tenant_migrations_path` - The path where your tenant migrations are stored (only relevant for a multitenant implementation)
- `:snapshots_path` - The path where the resource snapshots for the migration generator are stored.

# [](AshSqlite.Repo.html#summary)Summary

## [Callbacks](AshSqlite.Repo.html#callbacks)

[installed\_extensions()](AshSqlite.Repo.html#c:installed_extensions/0)

Use this to inform the data layer about what extensions are installed

[migrations\_path()](AshSqlite.Repo.html#c:migrations_path/0)

The path where your migrations are stored

[min\_pg\_version()](AshSqlite.Repo.html#c:min_pg_version/0)

Use this to inform the data layer about the oldest potential sqlite version it will be run on.

[override\_migration\_type(atom)](AshSqlite.Repo.html#c:override_migration_type/1)

Allows overriding a given migration type for *all* fields, for example if you wanted to always use :timestamptz for :utc\_datetime fields

# [](AshSqlite.Repo.html#callbacks)Callbacks

[](AshSqlite.Repo.html#c:installed_extensions/0)

# installed\_extensions()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/repo.ex#L22)

```
@callback installed_extensions() :: [String.t()]
```

Use this to inform the data layer about what extensions are installed

[](AshSqlite.Repo.html#c:migrations_path/0)

# migrations\_path()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/repo.ex#L32)

```
@callback migrations_path() :: String.t() | nil
```

The path where your migrations are stored

[](AshSqlite.Repo.html#c:min_pg_version/0)

# min\_pg\_version()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/repo.ex#L29)

```
@callback min_pg_version() :: integer()
```

Use this to inform the data layer about the oldest potential sqlite version it will be run on.

Must be an integer greater than or equal to 13.

[](AshSqlite.Repo.html#c:override_migration_type/1)

# override\_migration\_type(atom)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/repo.ex#L34)

```
@callback override_migration_type(atom()) :: atom()
```

Allows overriding a given migration type for *all* fields, for example if you wanted to always use :timestamptz for :utc\_datetime fields

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/statement.ex#L1 "View Source") AshSqlite.Statement (ash\_sqlite v0.2.3)

Represents a custom statement to be run in generated migrations

# [](AshSqlite.Statement.html#summary)Summary

## [Functions](AshSqlite.Statement.html#functions)

[fields()](AshSqlite.Statement.html#fields/0)

[schema()](AshSqlite.Statement.html#schema/0)

# [](AshSqlite.Statement.html#functions)Functions

[](AshSqlite.Statement.html#fields/0)

# fields()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/statement.ex#L13)

[](AshSqlite.Statement.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/statement.ex#L44)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/type.ex#L1 "View Source") AshSqlite.Type behaviour (ash\_sqlite v0.2.3)

Sqlite specific callbacks for [`Ash.Type`](../ash/3.4.58/Ash.Type.html).

Use this in addition to [`Ash.Type`](../ash/3.4.58/Ash.Type.html).

# [](AshSqlite.Type.html#summary)Summary

## [Callbacks](AshSqlite.Type.html#callbacks)

[value\_to\_sqlite\_default(t, constraints, term)](AshSqlite.Type.html#c:value_to_sqlite_default/3)

# [](AshSqlite.Type.html#callbacks)Callbacks

[](AshSqlite.Type.html#c:value_to_sqlite_default/3)

# value\_to\_sqlite\_default(t, constraints, term)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/type.ex#L8)

```
@callback value_to_sqlite_default(Ash.Type.t(), Ash.Type.constraints(), term()) ::
  {:ok, String.t()} | :error
```

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/dsls/DSL-AshSqlite.DataLayer.md#L1 "View Source") AshSqlite.DataLayer

A sqlite data layer that leverages Ecto's sqlite capabilities.

## [](dsl-ashsqlite-datalayer.html#sqlite)sqlite

Sqlite data layer configuration

### [](dsl-ashsqlite-datalayer.html#nested-dsls)Nested DSLs

- [custom\_indexes](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes)
  
  - index
- [custom\_statements](dsl-ashsqlite-datalayer.html#sqlite-custom_statements)
  
  - statement
- [references](dsl-ashsqlite-datalayer.html#sqlite-references)
  
  - reference

### [](dsl-ashsqlite-datalayer.html#examples)Examples

```
sqlite do
  repo MyApp.Repo
  table "organizations"
end
```

### [](dsl-ashsqlite-datalayer.html#options)Options

NameTypeDefaultDocs[`repo`](dsl-ashsqlite-datalayer.html#sqlite-repo)`atom`The repo that will be used to fetch your data. See the [`AshSqlite.Repo`](AshSqlite.Repo.html) documentation for more[`migrate?`](dsl-ashsqlite-datalayer.html#sqlite-migrate?)`boolean``true`Whether or not to include this resource in the generated migrations with `mix ash.generate_migrations`[`migration_types`](dsl-ashsqlite-datalayer.html#sqlite-migration_types)`keyword``[]`A keyword list of attribute names to the ecto migration type that should be used for that attribute. Only necessary if you need to override the defaults.[`migration_defaults`](dsl-ashsqlite-datalayer.html#sqlite-migration_defaults)`keyword``[]`A keyword list of attribute names to the ecto migration default that should be used for that attribute. The string you use will be placed verbatim in the migration. Use fragments like `fragment(\\"now()\\")`, or for `nil`, use `\\"nil\\"`.[`base_filter_sql`](dsl-ashsqlite-datalayer.html#sqlite-base_filter_sql)`String.t`A raw sql version of the base\_filter, e.g `representative = true`. Required if trying to create a unique constraint on a resource with a base\_filter[`skip_unique_indexes`](dsl-ashsqlite-datalayer.html#sqlite-skip_unique_indexes)`atom | list(atom)``false`Skip generating unique indexes when generating migrations[`unique_index_names`](dsl-ashsqlite-datalayer.html#sqlite-unique_index_names)`list({list(atom), String.t} | {list(atom), String.t, String.t})``[]`A list of unique index names that could raise errors that are not configured in identities, or an mfa to a function that takes a changeset and returns the list. In the format `{[:affected, :keys], "name_of_constraint"}` or `{[:affected, :keys], "name_of_constraint", "custom error message"}`[`exclusion_constraint_names`](dsl-ashsqlite-datalayer.html#sqlite-exclusion_constraint_names)`any``[]`A list of exclusion constraint names that could raise errors. Must be in the format `{:affected_key, "name_of_constraint"}` or `{:affected_key, "name_of_constraint", "custom error message"}`[`identity_index_names`](dsl-ashsqlite-datalayer.html#sqlite-identity_index_names)`any``[]`A keyword list of identity names to the unique index name that they should use when being managed by the migration generator.[`foreign_key_names`](dsl-ashsqlite-datalayer.html#sqlite-foreign_key_names)`list({atom, String.t} | {String.t, String.t})``[]`A list of foreign keys that could raise errors, or an mfa to a function that takes a changeset and returns a list. In the format: `{:key, "name_of_constraint"}` or `{:key, "name_of_constraint", "custom error message"}`[`migration_ignore_attributes`](dsl-ashsqlite-datalayer.html#sqlite-migration_ignore_attributes)`list(atom)``[]`A list of attributes that will be ignored when generating migrations.[`table`](dsl-ashsqlite-datalayer.html#sqlite-table)`String.t`The table to store and read the resource from. If this is changed, the migration generator will not remove the old table.[`polymorphic?`](dsl-ashsqlite-datalayer.html#sqlite-polymorphic?)`boolean``false`Declares this resource as polymorphic. See the [polymorphic resources guide](polymorphic-resources.html) for more.

### [](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes)sqlite.custom\_indexes

A section for configuring indexes to be created by the migration generator.

In general, prefer to use `identities` for simple unique constraints. This is a tool to allow for declaring more complex indexes.

### [](dsl-ashsqlite-datalayer.html#nested-dsls-1)Nested DSLs

- [index](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index)

### [](dsl-ashsqlite-datalayer.html#examples-1)Examples

```
custom_indexes do
  index [:column1, :column2], unique: true, where: "thing = TRUE"
end
```

### [](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index)sqlite.custom\_indexes.index

```
index fields
```

Add an index to be managed by the migration generator.

### [](dsl-ashsqlite-datalayer.html#examples-2)Examples

```
index ["column", "column2"], unique: true, where: "thing = TRUE"
```

### [](dsl-ashsqlite-datalayer.html#arguments)Arguments

NameTypeDefaultDocs[`fields`](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index-fields)`atom | String.t | list(atom | String.t)`The fields to include in the index.

### [](dsl-ashsqlite-datalayer.html#options-1)Options

NameTypeDefaultDocs[`name`](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index-name)`String.t`the name of the index. Defaults to "#{table}\_#{column}\_index".[`unique`](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index-unique)`boolean``false`indicates whether the index should be unique.[`using`](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index-using)`String.t`configures the index type.[`where`](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index-where)`String.t`specify conditions for a partial index.[`message`](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index-message)`String.t`A custom message to use for unique indexes that have been violated[`include`](dsl-ashsqlite-datalayer.html#sqlite-custom_indexes-index-include)`list(String.t)`specify fields for a covering index. This is not supported by all databases. For more information on SQLite support, please read the official docs.

### [](dsl-ashsqlite-datalayer.html#introspection)Introspection

Target: [`AshSqlite.CustomIndex`](AshSqlite.CustomIndex.html)

### [](dsl-ashsqlite-datalayer.html#sqlite-custom_statements)sqlite.custom\_statements

A section for configuring custom statements to be added to migrations.

Changing custom statements may require manual intervention, because Ash can't determine what order they should run in (i.e if they depend on table structure that you've added, or vice versa). As such, any `down` statements we run for custom statements happen first, and any `up` statements happen last.

Additionally, when changing a custom statement, we must make some assumptions, i.e that we should migrate the old structure down using the previously configured `down` and recreate it.

This may not be desired, and so what you may end up doing is simply modifying the old migration and deleting whatever was generated by the migration generator. As always: read your migrations after generating them!

### [](dsl-ashsqlite-datalayer.html#nested-dsls-2)Nested DSLs

- [statement](dsl-ashsqlite-datalayer.html#sqlite-custom_statements-statement)

### [](dsl-ashsqlite-datalayer.html#examples-3)Examples

```
custom_statements do
  # the name is used to detect if you remove or modify the statement
  statement :pgweb_idx do
    up "CREATE INDEX pgweb_idx ON pgweb USING GIN (to_tsvector('english', title || ' ' || body));"
    down "DROP INDEX pgweb_idx;"
  end
end
```

### [](dsl-ashsqlite-datalayer.html#sqlite-custom_statements-statement)sqlite.custom\_statements.statement

```
statement name
```

Add a custom statement for migrations.

### [](dsl-ashsqlite-datalayer.html#examples-4)Examples

```
statement :pgweb_idx do
  up "CREATE INDEX pgweb_idx ON pgweb USING GIN (to_tsvector('english', title || ' ' || body));"
  down "DROP INDEX pgweb_idx;"
end
```

### [](dsl-ashsqlite-datalayer.html#arguments-1)Arguments

NameTypeDefaultDocs[`name`](dsl-ashsqlite-datalayer.html#sqlite-custom_statements-statement-name)`atom`The name of the statement, must be unique within the resource

### [](dsl-ashsqlite-datalayer.html#options-2)Options

NameTypeDefaultDocs[`up`](dsl-ashsqlite-datalayer.html#sqlite-custom_statements-statement-up)`String.t`How to create the structure of the statement[`down`](dsl-ashsqlite-datalayer.html#sqlite-custom_statements-statement-down)`String.t`How to tear down the structure of the statement[`code?`](dsl-ashsqlite-datalayer.html#sqlite-custom_statements-statement-code?)`boolean``false`By default, we place the strings inside of ecto migration's `execute/1` function and assume they are sql. Use this option if you want to provide custom elixir code to be placed directly in the migrations

### [](dsl-ashsqlite-datalayer.html#introspection-1)Introspection

Target: [`AshSqlite.Statement`](AshSqlite.Statement.html)

### [](dsl-ashsqlite-datalayer.html#sqlite-references)sqlite.references

A section for configuring the references (foreign keys) in resource migrations.

This section is only relevant if you are using the migration generator with this resource. Otherwise, it has no effect.

### [](dsl-ashsqlite-datalayer.html#nested-dsls-3)Nested DSLs

- [reference](dsl-ashsqlite-datalayer.html#sqlite-references-reference)

### [](dsl-ashsqlite-datalayer.html#examples-5)Examples

```
references do
  reference :post, on_delete: :delete, on_update: :update, name: "comments_to_posts_fkey"
end
```

### [](dsl-ashsqlite-datalayer.html#options-3)Options

NameTypeDefaultDocs[`polymorphic_on_delete`](dsl-ashsqlite-datalayer.html#sqlite-references-polymorphic_on_delete)`:delete | :nilify | :nothing | :restrict`For polymorphic resources, configures the on\_delete behavior of the automatically generated foreign keys to source tables.[`polymorphic_on_update`](dsl-ashsqlite-datalayer.html#sqlite-references-polymorphic_on_update)`:update | :nilify | :nothing | :restrict`For polymorphic resources, configures the on\_update behavior of the automatically generated foreign keys to source tables.[`polymorphic_name`](dsl-ashsqlite-datalayer.html#sqlite-references-polymorphic_name)`:update | :nilify | :nothing | :restrict`For polymorphic resources, configures the on\_update behavior of the automatically generated foreign keys to source tables.

### [](dsl-ashsqlite-datalayer.html#sqlite-references-reference)sqlite.references.reference

```
reference relationship
```

Configures the reference for a relationship in resource migrations.

Keep in mind that multiple relationships can theoretically involve the same destination and foreign keys. In those cases, you only need to configure the `reference` behavior for one of them. Any conflicts will result in an error, across this resource and any other resources that share a table with this one. For this reason, instead of adding a reference configuration for `:nothing`, its best to just leave the configuration out, as that is the default behavior if *no* relationship anywhere has configured the behavior of that reference.

### [](dsl-ashsqlite-datalayer.html#examples-6)Examples

```
reference :post, on_delete: :delete, on_update: :update, name: "comments_to_posts_fkey"
```

### [](dsl-ashsqlite-datalayer.html#arguments-2)Arguments

NameTypeDefaultDocs[`relationship`](dsl-ashsqlite-datalayer.html#sqlite-references-reference-relationship)`atom`The relationship to be configured

### [](dsl-ashsqlite-datalayer.html#options-4)Options

NameTypeDefaultDocs[`ignore?`](dsl-ashsqlite-datalayer.html#sqlite-references-reference-ignore?)`boolean`If set to true, no reference is created for the given relationship. This is useful if you need to define it in some custom way[`on_delete`](dsl-ashsqlite-datalayer.html#sqlite-references-reference-on_delete)`:delete | :nilify | :nothing | :restrict`What should happen to records of this resource when the referenced record of the *destination* resource is deleted.[`on_update`](dsl-ashsqlite-datalayer.html#sqlite-references-reference-on_update)`:update | :nilify | :nothing | :restrict`What should happen to records of this resource when the referenced destination\_attribute of the *destination* record is update.[`deferrable`](dsl-ashsqlite-datalayer.html#sqlite-references-reference-deferrable)`false | true | :initially``false`Wether or not the constraint is deferrable. This only affects the migration generator.[`name`](dsl-ashsqlite-datalayer.html#sqlite-references-reference-name)`String.t`The name of the foreign key to generate in the database. Defaults to &lt;table&gt;\_&lt;source\_attribute&gt;\_fkey

### [](dsl-ashsqlite-datalayer.html#introspection-2)Introspection

Target: [`AshSqlite.Reference`](AshSqlite.Reference.html)

[← Previous Page Join Manual Relationships](manual-relationships.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/dsls/DSL-AshSqlite.DataLayer.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/topics/advanced/expressions.md#L1 "View Source") Expressions

In addition to the expressions listed in the [Ash expressions guide](../ash/expressions.html), AshSqlite provides the following expressions

# Fragments

Fragments allow you to use arbitrary sqlite expressions in your queries. Fragments can often be an escape hatch to allow you to do things that don't have something officially supported with Ash.

### [](expressions.html#examples)Examples

#### Simple expressions

```
fragment("? / ?", points, count)
```

#### Calling functions

```
fragment("repeat('hello', 4)")
```

#### Using entire queries

```
fragment("points > (SELECT SUM(points) FROM games WHERE user_id = ? AND id != ?)", user_id, id)
```

### [](expressions.html#a-last-resport)a last resport

Using entire queries as shown above is a last resort, but can sometimes be the best way to accomplish a given task.

#### In calculations

```
calculations do
  calculate :lower_name, :string, expr(
    fragment("LOWER(?)", name)
  )
end
```

#### In migrations

```
create table(:managers, primary_key: false) do
  add :id, :uuid, null: false, default: fragment("UUID_GENERATE_V4()"), primary_key: true
end
```

## [](expressions.html#like)Like

These wrap the sqlite builtin like operator

Please be aware, these match *patterns* not raw text. Use `contains/1` if you want to match text without supporting patterns, i.e `%` and `_` have semantic meaning!

For example:

```
Ash.Query.filter(User, like(name, "%obo%")) # name contains obo anywhere in the string, case sensitively
```

[← Previous Page Testing With Sqlite](testing.html)

[Next Page → Join Manual Relationships](manual-relationships.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/topics/advanced/expressions.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/tutorials/getting-started-with-ash-sqlite.md#L1 "View Source") Getting Started With AshSqlite

## [](getting-started-with-ash-sqlite.html#goals)Goals

In this guide we will:

1. Setup AshSqlite, which includes setting up [Ecto](https://hexdocs.pm/ecto/Ecto.html)
2. Add AshSqlite to the resources created in [the Ash getting started guide](../ash/get-started.html)
3. Show how the various features of AshSqlite can help you work quickly and cleanly against a sqlite database
4. Highlight some of the more advanced features you can use when using AshSqlite.
5. Point you to additional resources you may need on your journey

## [](getting-started-with-ash-sqlite.html#requirements)Requirements

- A working SQLite installation, with a sufficiently permissive user
- If you would like to follow along, you will need to add begin with [the Ash getting started guide](../ash/get-started.html)

## [](getting-started-with-ash-sqlite.html#steps)Steps

### [](getting-started-with-ash-sqlite.html#add-ashsqlite)Add AshSqlite

Add the `:ash_sqlite` dependency to your application

`{:ash_sqlite, "~> 0.2.3"}`

Add `:ash_sqlite` to your `.formatter.exs` file

```
[
  # import the formatter rules from `:ash_sqlite`
  import_deps: [..., :ash_sqlite],
  inputs: [...]
]
```

### [](getting-started-with-ash-sqlite.html#create-and-configure-your-repo)Create and configure your Repo

Create `lib/helpdesk/repo.ex` with the following contents. [`AshSqlite.Repo`](AshSqlite.Repo.html) is a thin wrapper around [`Ecto.Repo`](../ecto/3.12.5/Ecto.Repo.html), so see their documentation for how to use it if you need to use it directly. For standard Ash usage, all you will need to do is configure your resources to use your repo.

```
# in lib/helpdesk/repo.ex

defmodule Helpdesk.Repo do
  use AshSqlite.Repo, otp_app: :helpdesk
end
```

Next we will need to create configuration files for various environments. Run the following to create the configuration files we need.

```
mkdir -p config
touch config/config.exs
touch config/dev.exs
touch config/runtime.exs
touch config/test.exs
```

Place the following contents in those files, ensuring that the credentials match the user you created for your database. For most conventional installations this will work out of the box. If you've followed other guides before this one, they may have had you create these files already, so just make sure these contents are there.

```
# in config/config.exs
import Config

# This should already have been added from the getting started guide
config :helpdesk,
  ash_domains: [Helpdesk.Support]

config :helpdesk,
  ash_apis: [Helpdesk.Support]

config :helpdesk,
  ecto_repos: [Helpdesk.Repo]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
```

```
# in config/dev.exs

import Config

# Configure your database
config :helpdesk, Helpdesk.Repo,
  database: Path.join(__DIR__, "../path/to/your.db"),
  show_sensitive_data_on_connection_error: true,
  pool_size: 10
```

```
# in config/runtime.exs

import Config

if config_env() == :prod do
  config :helpdesk, Helpdesk.Repo,
    pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10")
end
```

```
# in config/test.exs

import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :helpdesk, Helpdesk.Repo,
  database: Path.join(__DIR__, "../path/to/your#{System.get_env("MIX_TEST_PARTITION")}.db"),
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10
```

And finally, add the repo to your application

```
# in lib/helpdesk/application.ex

  def start(_type, _args) do
    children = [
      # Starts a worker by calling: Helpdesk.Worker.start_link(arg)
      # {Helpdesk.Worker, arg}
      Helpdesk.Repo
    ]

    ...
```

### [](getting-started-with-ash-sqlite.html#add-ashsqlite-to-our-resources)Add AshSqlite to our resources

Now we can add the data layer to our resources. The basic configuration for a resource requires the `AshSqlite.sqlite.table` and the `AshSqlite.sqlite.repo`.

```
# in lib/helpdesk/support/resources/ticket.ex

  use Ash.Resource,
    domain: Helpdesk.Support,
    data_layer: AshSqlite.DataLayer

  sqlite do
    table "tickets"
    repo Helpdesk.Repo
  end
```

```
# in lib/helpdesk/support/resources/representative.ex

  use Ash.Resource,
    domain: Helpdesk.Support,
    data_layer: AshSqlite.DataLayer

  sqlite do
    table "representatives"
    repo Helpdesk.Repo
  end
```

### [](getting-started-with-ash-sqlite.html#create-the-database-and-tables)Create the database and tables

First, we'll create the database with [`mix ash_sqlite.create`](Mix.Tasks.AshSqlite.Create.html).

Then we will generate database migrations. This is one of the many ways that AshSqlite can save time and reduce complexity.

```
mix ash_sqlite.generate_migrations --name add_tickets_and_representatives
```

If you are unfamiliar with database migrations, it is a good idea to get a rough idea of what they are and how they work. See the links at the bottom of this guide for more. A rough overview of how migrations work is that each time you need to make changes to your database, they are saved as small, reproducible scripts that can be applied in order. This is necessary both for clean deploys as well as working with multiple developers making changes to the structure of a single database.

Typically, you need to write these by hand. AshSqlite, however, will store snapshots each time you run the command to generate migrations and will figure out what migrations need to be created.

You should always look at the generated migrations to ensure that they look correct. Do so now by looking at the generated file in `priv/repo/migrations`.

Finally, we will create the local database and apply the generated migrations:

```
mix ash_sqlite.create
mix ash_sqlite.migrate
```

### [](getting-started-with-ash-sqlite.html#try-it-out)Try it out

And now we're ready to try it out! Run the following in iex:

Lets create some data. We'll make a representative and give them some open and some closed tickets.

```
require Ash.Query

representative = (
  Helpdesk.Support.Representative
  |> Ash.Changeset.for_create(:create, %{name: "Joe Armstrong"})
  |> Helpdesk.Support.create!()
)

for i <- 0..5 do
  ticket =
    Helpdesk.Support.Ticket
    |> Ash.Changeset.for_create(:open, %{subject: "Issue #{i}"})
    |> Helpdesk.Support.create!()
    |> Ash.Changeset.for_update(:assign, %{representative_id: representative.id})
    |> Helpdesk.Support.update!()

  if rem(i, 2) == 0 do
    ticket
    |> Ash.Changeset.for_update(:close)
    |> Helpdesk.Support.update!()
  end
end
```

And now we can read that data. You should see some debug logs that show the sql queries AshSqlite is generating.

```
require Ash.Query

# Show the tickets where the subject equals "foobar"
Helpdesk.Support.Ticket
|> Ash.Query.filter(subject == "foobar")
|> Helpdesk.Support.read!()
```

```
require Ash.Query

# Show the tickets that are closed and their subject does not equal "barbaz"
Helpdesk.Support.Ticket
|> Ash.Query.filter(status == :closed and not(subject == "barbaz"))
|> Helpdesk.Support.read!()
```

And, naturally, now that we are storing this in sqlite, this database is persisted even if we stop/start our application. The nice thing, however, is that this was the *exact* same code that we ran against our resources when they were backed by ETS.

### [](getting-started-with-ash-sqlite.html#calculations)Calculations

Simple calculation for Ticket which adds a concatenation of state and subject:

```
calculations do
  calculate :status_subject, :string,
  expr("#{status}: #{subject}")
end
```

Testing of this feature can be done via iex:

```
Ash.Query
Helpdesk.Support.Ticket
  |> Ash.Query.filter(status == :open)
  |> Ash.Query.load(:status_subject)
  |> Ash.read!()
```

### [](getting-started-with-ash-sqlite.html#aggregates)Aggregates

As stated in [what-is-ash-sqlite](getting-started-with-ash-sqlite.html#steps), **The main feature missing is Aggregate support.**.

In order to use these consider using [ash\_postgres](https://github.com/ash-project/ash_postgres) or provide a patch.

### [](getting-started-with-ash-sqlite.html#rich-configuration-options)Rich Configuration Options

Take a look at the DSL documentation for more information on what you can configure. You can add check constraints, configure the behavior of foreign keys and more!

### [](getting-started-with-ash-sqlite.html#deployment)Deployment

When deploying, you will need to ensure that the file you are using in production is persisted in some way (probably, unless you want it to disappear whenever your deployed system restarts). For example with fly.io this might mean adding a volume to your deployment.

### [](getting-started-with-ash-sqlite.html#what-next)What next?

- Check out the data layer docs: [`AshSqlite.DataLayer`](AshSqlite.DataLayer.html)
- [Ecto's documentation](https://hexdocs.pm/ecto/Ecto.html). AshSqlite (and much of Ash itself) is made possible by the amazing Ecto. If you find yourself looking for escape hatches when using Ash or ways to work directly with your database, you will want to know how Ecto works. Ash and AshSqlite intentionally do not hide Ecto, and in fact encourages its use whenever you need an escape hatch.
- [Ecto's Migration documentation](https://hexdocs.pm/ecto_sql/Ecto.Migration.html) read more about migrations. Even with the ash\_sqlite migration generator, you will very likely need to modify your own migrations some day.

[← Previous Page Home](readme.html)

[Next Page → What is AshSqlite?](what-is-ash-sqlite.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/tutorials/getting-started-with-ash-sqlite.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/topics/advanced/manual-relationships.md#L1 "View Source") Join Manual Relationships

See [Defining Manual Relationships](https://hexdocs.pm/ash/defining-manual-relationships.html) for an idea of manual relationships in general. Manual relationships allow for expressing complex/non-typical relationships between resources in a standard way. Individual data layers may interact with manual relationships in their own way, so see their corresponding guides.

## [](manual-relationships.html#example)Example

```
# in the resource

relationships do
  has_many :tickets_above_threshold, Helpdesk.Support.Ticket do
    manual Helpdesk.Support.Ticket.Relationships.TicketsAboveThreshold
  end
end

# implementation
defmodule Helpdesk.Support.Ticket.Relationships.TicketsAboveThreshold do
  use Ash.Resource.ManualRelationship
  use AshSqlite.ManualRelationship

  require Ash.Query
  require Ecto.Query

  def load(records, _opts, %{query: query, actor: actor, authorize?: authorize?}) do
    # Use existing records to limit resultds
    rep_ids = Enum.map(records, & &1.id)
     # Using Ash to get the destination records is ideal, so you can authorize access like normal
     # but if you need to use a raw ecto query here, you can. As long as you return the right structure.

    {:ok,
     query
     |> Ash.Query.filter(representative_id in ^rep_ids)
     |> Ash.Query.filter(priority > representative.priority_threshold)
     |> Helpdesk.Support.read!(actor: actor, authorize?: authorize?)
     # Return the items grouped by the primary key of the source, i.e representative.id => [...tickets above threshold]
     |> Enum.group_by(& &1.representative_id)}
  end

  # query is the "source" query that is being built. 

  # _opts are options provided to the manual relationship, i.e `{Manual, opt: :val}`

  # current_binding is what the source of the relationship is bound to. Access fields with `as(^current_binding).field`

  # as_binding is the binding that your join should create. When you join, make sure you say `as: ^as_binding` on the
  # part of the query that represents the destination of the relationship

  # type is `:inner` or `:left`.
  # destination_query is what you should join to to add the destination to the query, i.e `join: dest in ^destination-query`
  def ash_sqlite_join(query, _opts, current_binding, as_binding, :inner, destination_query) do
    {:ok,
     Ecto.Query.from(_ in query,
       join: dest in ^destination_query,
       as: ^as_binding,
       on: dest.representative_id == as(^current_binding).id,
       on: dest.priority > as(^current_binding).priority_threshold
     )}
  end

  def ash_sqlite_join(query, _opts, current_binding, as_binding, :left, destination_query) do
    {:ok,
     Ecto.Query.from(_ in query,
       left_join: dest in ^destination_query,
       as: ^as_binding,
       on: dest.representative_id == as(^current_binding).id,
       on: dest.priority > as(^current_binding).priority_threshold
     )}
  end

  # _opts are options provided to the manual relationship, i.e `{Manual, opt: :val}`

  # current_binding is what the source of the relationship is bound to. Access fields with `parent_as(^current_binding).field`

  # as_binding is the binding that has already been created for your join. Access fields on it via `as(^as_binding)`

  # destination_query is what you should use as the basis of your query
  def ash_sqlite_subquery(_opts, current_binding, as_binding, destination_query) do
    {:ok,
     Ecto.Query.from(_ in destination_query,
       where: parent_as(^current_binding).id == as(^as_binding).representative_id,
       where: as(^as_binding).priority > parent_as(^current_binding).priority_threshold
     )}
  end
end
```

[← Previous Page Expressions](expressions.html)

[Next Page → AshSqlite.DataLayer](dsl-ashsqlite-datalayer.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/topics/advanced/manual-relationships.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/topics/development/migrations-and-tasks.md#L1 "View Source") Migrations

## [](migrations-and-tasks.html#tasks)Tasks

Ash comes with its own tasks, and AshSqlite exposes lower level tasks that you can use if necessary. This guide shows the process using `ash.*` tasks, and the `ash_sqlite.*` tasks are illustrated at the bottom.

## [](migrations-and-tasks.html#basic-workflow)Basic Workflow

- Make resource changes
- Run `mix ash.codegen --name add_a_combobulator` to generate migrations and resource snapshots
- Run [`mix ash.migrate`](../ash/3.4.58/Mix.Tasks.Ash.Migrate.html) to run those migrations

For more information on generating migrations, run [`mix help ash_sqlite.generate_migrations`](Mix.Tasks.AshSqlite.GenerateMigrations.html) (the underlying task that is called by [`mix ash.migrate`](../ash/3.4.58/Mix.Tasks.Ash.Migrate.html))

### [](migrations-and-tasks.html#regenerating-migrations)Regenerating Migrations

Often, you will run into a situation where you want to make a slight change to a resource after you've already generated and run migrations. If you are using git and would like to undo those changes, then regenerate the migrations, this script may prove useful:

```
#!/bin/bash

# Get count of untracked migrations
N_MIGRATIONS=$(git ls-files --others priv/repo/migrations | wc -l)

# Rollback untracked migrations
mix ash_sqlite.rollback -n $N_MIGRATIONS

# Delete untracked migrations and snapshots
git ls-files --others priv/repo/migrations | xargs rm
git ls-files --others priv/resource_snapshots | xargs rm

# Regenerate migrations
mix ash.codegen --name $1

# Run migrations if flag
if echo $* | grep -e "-m" -q
then
  mix ash.migrate
fi
```

After saving this file to something like `regen.sh`, make it executable with `chmod +x regen.sh`. Now you can run it with `./regen.sh name_of_operation`. If you would like the migrations to automatically run after regeneration, add the `-m` flag: `./regen.sh name_of_operation -m`.

## [](migrations-and-tasks.html#multiple-repos)Multiple Repos

If you are using multiple repos, you will likely need to use [`mix ecto.migrate`](../ecto_sql/3.12.1/Mix.Tasks.Ecto.Migrate.html) and manage it separately for each repo, as the options would be applied to both repo, which wouldn't make sense.

## [](migrations-and-tasks.html#running-migrations-in-production)Running Migrations in Production

Define a module similar to the following:

```
defmodule MyApp.Release do
  @moduledoc """
  Houses tasks that need to be executed in the released application (because mix is not present in releases).
  """
  @app :my_ap
  def migrate do
    load_app()

    for repo <- repos() do
      {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :up, all: true))
    end
  end

  def rollback(repo, version) do
    load_app()
    {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :down, to: version))
  end

  defp repos do
    domains()
    |> Enum.flat_map(fn domain ->
      domain
      |> Ash.Domain.Info.resources()
      |> Enum.map(&AshSqlite.repo/1)
    end)
    |> Enum.uniq()
  end

  defp domains do
    Application.fetch_env!(:my_app, :ash_domains)
  end

  defp load_app do
    Application.load(@app)
  end
end
```

# AshSqlite-specific tasks

- [`mix ash_sqlite.generate_migrations`](Mix.Tasks.AshSqlite.GenerateMigrations.html)
- [`mix ash_sqlite.create`](Mix.Tasks.AshSqlite.Create.html)
- [`mix ash_sqlite.migrate`](Mix.Tasks.AshSqlite.Migrate.html)
- [`mix ash_sqlite.rollback`](Mix.Tasks.AshSqlite.Rollback.html)
- [`mix ash_sqlite.drop`](Mix.Tasks.AshSqlite.Drop.html)

[← Previous Page Polymorphic Resources](polymorphic-resources.html)

[Next Page → Testing With Sqlite](testing.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/topics/development/migrations-and-tasks.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/mix/tasks/ash_sqlite.create.ex#L1 "View Source") mix ash\_sqlite.create (ash\_sqlite v0.2.3)

Create the storage for repos in all resources for the given (or configured) domains.

## [](Mix.Tasks.AshSqlite.Create.html#module-examples)Examples

```
mix ash_sqlite.create
mix ash_sqlite.create --domains MyApp.Domain1,MyApp.Domain2
```

## [](Mix.Tasks.AshSqlite.Create.html#module-command-line-options)Command line options

- `--domains` - the domains who's repos you want to migrate.
- `--quiet` - do not log output
- `--no-compile` - do not compile before creating
- `--no-deps-check` - do not compile before creating

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/mix/tasks/ash_sqlite.drop.ex#L1 "View Source") mix ash\_sqlite.drop (ash\_sqlite v0.2.3)

Drop the storage for the given repository.

## [](Mix.Tasks.AshSqlite.Drop.html#module-examples)Examples

```
mix ash_sqlite.drop
mix ash_sqlite.drop -d MyApp.Domain1,MyApp.Domain2
```

## [](Mix.Tasks.AshSqlite.Drop.html#module-command-line-options)Command line options

- `--domains` - the domains who's repos should be dropped
- `-q`, `--quiet` - run the command quietly
- `-f`, `--force` - do not ask for confirmation when dropping the database. Configuration is asked only when `:start_permanent` is set to true (typically in production)
- `--no-compile` - do not compile before dropping
- `--no-deps-check` - do not compile before dropping

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/mix/tasks/ash_sqlite.generate_migrations.ex#L1 "View Source") mix ash\_sqlite.generate\_migrations (ash\_sqlite v0.2.3)

Generates migrations, and stores a snapshot of your resources.

Options:

- `domains` - a comma separated list of domain modules, for which migrations will be generated
- `snapshot-path` - a custom path to store the snapshots, defaults to "priv/resource\_snapshots"
- `migration-path` - a custom path to store the migrations, defaults to "priv". Migrations are stored in a folder for each repo, so `priv/repo_name/migrations`
- `drop-columns` - whether or not to drop columns as attributes are removed. See below for more
- `name` - names the generated migrations, prepending with the timestamp. The default is `migrate_resources_<n>`, where `<n>` is the count of migrations matching `*migrate_resources*` plus one. For example, `--name add_special_column` would get a name like `20210708181402_add_special_column.exs`

Flags:

- `quiet` - messages for file creations will not be printed
- `no-format` - files that are created will not be formatted with the code formatter
- `dry-run` - no files are created, instead the new migration is printed
- `check` - no files are created, returns an exit(1) code if the current snapshots and resources don't fit

#### Snapshots

Snapshots are stored in a folder for each table that migrations are generated for. Each snapshot is stored in a file with a timestamp of when it was generated. This is important because it allows for simultaneous work to be done on separate branches, and for rolling back changes more easily, e.g removing a generated migration, and deleting the most recent snapshot, without having to redo all of it

#### Dropping columns

Generally speaking, it is bad practice to drop columns when you deploy a change that would remove an attribute. The main reasons for this are backwards compatibility and rolling restarts. If you deploy an attribute removal, and run migrations. Regardless of your deployment sstrategy, you won't be able to roll back, because the data has been deleted. In a rolling restart situation, some of the machines/pods/whatever may still be running after the column has been deleted, causing errors. With this in mind, its best not to delete those columns until later, after the data has been confirmed unnecessary. To that end, the migration generator leaves the column dropping code commented. You can pass `--drop_columns` to tell it to uncomment those statements. Additionally, you can just uncomment that code on a case by case basis.

#### Conflicts/Multiple Resources

It will raise on conflicts that it can't resolve, like the same field with different types. It will prompt to resolve conflicts that can be resolved with human input. For example, if you remove an attribute and add an attribute, it will ask you if you are renaming the column in question. If not, it will remove one column and add the other.

Additionally, it lowers things to the database where possible:

#### Defaults

There are three anonymous functions that will translate to database-specific defaults currently:

- `&DateTime.utc_now/0`

Non-function default values will be dumped to their native type and inspected. This may not work for some types, and may require manual intervention/patches to the migration generator code.

#### Identities

Identities will cause the migration generator to generate unique constraints. If multiple resources target the same table, you will be asked to select the primary key, and any others will be added as unique constraints.

# [](Mix.Tasks.AshSqlite.GenerateMigrations.html#summary)Summary

## [Functions](Mix.Tasks.AshSqlite.GenerateMigrations.html#functions)

[run(args)](Mix.Tasks.AshSqlite.GenerateMigrations.html#run/1)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

# [](Mix.Tasks.AshSqlite.GenerateMigrations.html#functions)Functions

[](Mix.Tasks.AshSqlite.GenerateMigrations.html#run/1)

# run(args)

[](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/mix/tasks/ash_sqlite.generate_migrations.ex#L70)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/mix/tasks/ash_sqlite.install.ex#L2 "View Source") mix ash\_sqlite.install (ash\_sqlite v0.2.3)

Installs AshSqlite. Should be run with `mix igniter.install ash_sqlite`

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/mix/tasks/ash_sqlite.migrate.ex#L1 "View Source") mix ash\_sqlite.migrate (ash\_sqlite v0.2.3)

Runs the pending migrations for the given repository.

Migrations are expected at "priv/YOUR\_REPO/migrations" directory of the current application, where "YOUR\_REPO" is the last segment in your repository name. For example, the repository `MyApp.Repo` will use "priv/repo/migrations". The repository `Whatever.MyRepo` will use "priv/my\_repo/migrations".

This task runs all pending migrations by default. To migrate up to a specific version number, supply `--to version_number`. To migrate a specific number of times, use `--step n`.

This is only really useful if your domain or domains only use a single repo. If you have multiple repos and you want to run a single migration and/or migrate/roll them back to different points, you will need to use the ecto specific task, [`mix ecto.migrate`](../ecto_sql/3.12.1/Mix.Tasks.Ecto.Migrate.html) and provide your repo name.

If a repository has not yet been started, one will be started outside your application supervision tree and shutdown afterwards.

## [](Mix.Tasks.AshSqlite.Migrate.html#module-examples)Examples

```
mix ash_sqlite.migrate
mix ash_sqlite.migrate --domains MyApp.Domain1,MyApp.Domain2

mix ash_sqlite.migrate -n 3
mix ash_sqlite.migrate --step 3

mix ash_sqlite.migrate --to 20080906120000
```

## [](Mix.Tasks.AshSqlite.Migrate.html#module-command-line-options)Command line options

- `--domains` - the domains who's repos should be migrated
- `--all` - run all pending migrations
- `--step`, `-n` - run n number of pending migrations
- `--to` - run all migrations up to and including version
- `--quiet` - do not log migration commands
- `--pool-size` - the pool size if the repository is started only for the task (defaults to 2)
- `--log-sql` - log the raw sql migrations are running
- `--strict-version-order` - abort when applying a migration with old timestamp
- `--no-compile` - does not compile applications before migrating
- `--no-deps-check` - does not check depedendencies before migrating
- `--migrations-path` - the path to load the migrations from, defaults to `"priv/repo/migrations"`. This option may be given multiple times in which case the migrations are loaded from all the given directories and sorted as if they were in the same one.
  
  Note, if you have migrations paths e.g. `a/` and `b/`, and run `mix ecto.migrate --migrations-path a/`, the latest migrations from `a/` will be run (even if `b/` contains the overall latest migrations.)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/lib/mix/tasks/ash_sqlite.rollback.ex#L1 "View Source") mix ash\_sqlite.rollback (ash\_sqlite v0.2.3)

Reverts applied migrations in the given repository. Migrations are expected at "priv/YOUR\_REPO/migrations" directory of the current application but it can be configured by specifying the `:priv` key under the repository configuration. Runs the latest applied migration by default. To roll back to a version number, supply `--to version_number`. To roll back a specific number of times, use `--step n`. To undo all applied migrations, provide `--all`.

This is only really useful if your domain or domains only use a single repo. If you have multiple repos and you want to run a single migration and/or migrate/roll them back to different points, you will need to use the ecto specific task, [`mix ecto.migrate`](../ecto_sql/3.12.1/Mix.Tasks.Ecto.Migrate.html) and provide your repo name.

## [](Mix.Tasks.AshSqlite.Rollback.html#module-examples)Examples

```
mix ash_sqlite.rollback
mix ash_sqlite.rollback -r Custom.Repo
mix ash_sqlite.rollback -n 3
mix ash_sqlite.rollback --step 3
mix ash_sqlite.rollback -v 20080906120000
mix ash_sqlite.rollback --to 20080906120000
```

## [](Mix.Tasks.AshSqlite.Rollback.html#module-command-line-options)Command line options

- `--domains` - the domains who's repos should be rolledback
- `--all` - revert all applied migrations
- `--step` / `-n` - revert n number of applied migrations
- `--to` / `-v` - revert all migrations down to and including version
- `--quiet` - do not log migration commands
- `--pool-size` - the pool size if the repository is started only for the task (defaults to 1)
- `--log-sql` - log the raw sql migrations are running

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/topics/resources/polymorphic-resources.md#L1 "View Source") Polymorphic Resources

To support leveraging the same resource backed by multiple tables (useful for things like polymorphic associations), AshSqlite supports setting the `data_layer.table` context for a given resource. For this example, lets assume that you have a `MyApp.Post` resource and a `MyApp.Comment` resource. For each of those resources, users can submit `reactions`. However, you want a separate table for `post_reactions` and `comment_reactions`. You could accomplish that like so:

```
defmodule MyApp.Reaction do
  use Ash.Resource,
    domain: MyApp.Domain,
    data_layer: AshSqlite.DataLayer

   sqlite do
    polymorphic? true # Without this, `table` is a required configuration
  end

  attributes do
    attribute(:resource_id, :uuid)
  end

  ...
end
```

Then, in your related resources, you set the table context like so:

```
defmodule MyApp.Post do
  use Ash.Resource,
    domain: MyApp.Domain,
    data_layer: AshSqlite.DataLayer

  ...

  relationships do
    has_many :reactions, MyApp.Reaction,
      relationship_context: %{data_layer: %{table: "post_reactions"}},
      destination_attribute: :resource_id
  end
end

defmodule MyApp.Comment do
  use Ash.Resource,
    domain: MyApp.Domain,
    data_layer: AshSqlite.DataLayer

  ...

  relationships do
    has_many :reactions, MyApp.Reaction,
      relationship_context: %{data_layer: %{table: "comment_reactions"}},
      destination_attribute: :resource_id
  end
end
```

With this, when loading or editing related data, ash will automatically set that context. For managing related data, see [`Ash.Changeset.manage_relationship/4`](../ash/3.4.58/Ash.Changeset.html#manage_relationship/4) and other relationship functions in [`Ash.Changeset`](../ash/3.4.58/Ash.Changeset.html)

## [](polymorphic-resources.html#table-specific-actions)Table specific actions

To make actions use a specific table, you can use the `set_context` query preparation/change.

For example:

```
defmodule MyApp.Reaction do
  actions do
    read :for_comments do
      prepare set_context(%{data_layer: %{table: "comment_reactions"}})
    end

    read :for_posts do
      prepare set_context(%{data_layer: %{table: "post_reactions"}})
    end
  end
end
```

## [](polymorphic-resources.html#migrations)Migrations

When a migration is marked as `polymorphic? true`, the migration generator will look at all resources that are related to it, that set the `%{data_layer: %{table: "table"}}` context. For each of those, a migration is generated/managed automatically. This means that adding reactions to a new resource is as easy as adding the relationship and table context, and then running [`mix ash_sqlite.generate_migrations`](Mix.Tasks.AshSqlite.GenerateMigrations.html).

[← Previous Page References](references.html)

[Next Page → Migrations](migrations-and-tasks.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/topics/resources/polymorphic-resources.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mojde-only)

[![CI](https://github.com/ash-project/ash_sqlite/actions/workflows/elixir.yml/badge.svg)](https://github.com/ash-project/ash_sqlite/actions/workflows/elixir.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_sqlite.svg)](https://hex.pm/packages/ash_sqlite) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_sqlite.html)

# AshSqlite

Welcome! [`AshSqlite`](AshSqlite.html) is the SQLite data layer for [Ash Framework](../ash.html).

## [](readme.html#tutorials)Tutorials

- [Get Started](getting-started-with-ash-sqlite.html)

## [](readme.html#topics)Topics

- [What is AshSqlite?](what-is-ash-sqlite.html)

### [](readme.html#resources)Resources

- [References](references.html)
- [Polymorphic Resources](polymorphic-resources.html)

### [](readme.html#development)Development

- [Migrations and tasks](migrations-and-tasks.html)
- [Testing](testing.html)

### [](readme.html#advanced)Advanced

- [Expressions](expressions.html)
- [Manual Relationships](manual-relationships.html)

## [](readme.html#reference)Reference

- [AshSqlite.DataLayer DSL](dsl-ashsqlite-datalayer.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Getting Started With AshSqlite](getting-started-with-ash-sqlite.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/README.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/topics/resources/references.md#L1 "View Source") References

To configure the foreign keys on a resource, we use the `references` block.

For example:

```
references do
  reference :post, on_delete: :delete, on_update: :update, name: "comments_to_posts_fkey"
end
```

## [](references.html#important)Important

No resource logic is applied with these operations! No authorization rules or validations take place, and no notifications are issued. This operation happens *directly* in the database. That

## [](references.html#nothing-vs-restrict)Nothing vs Restrict

The difference between `:nothing` and `:restrict` is subtle and, if you are unsure, choose `:nothing` (the default behavior). `:restrict` will prevent the deletion from happening *before* the end of the database transaction, whereas `:nothing` allows the transaction to complete before doing so. This allows for things like updating or deleting the destination row and *then* updating updating or deleting the reference(as long as you are in a transaction).

## [](references.html#on-delete)On Delete

This option is called `on_delete`, instead of `on_destroy`, because it is hooking into the database level deletion, *not* a `destroy` action in your resource.

[← Previous Page What is AshSqlite?](what-is-ash-sqlite.html)

[Next Page → Polymorphic Resources](polymorphic-resources.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/topics/resources/references.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/topics/development/testing.md#L1 "View Source") Testing With Sqlite

Testing resources with SQLite generally requires passing `async?: false` to your tests, due to `SQLite`'s limitation of having a single write transaction open at any one time.

This should be coupled with to make sure that Ash does not spawn any tasks.

```
config :ash, :disable_async?, true
```

[← Previous Page Migrations](migrations-and-tasks.html)

[Next Page → Expressions](expressions.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/topics/development/testing.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_sqlite](assets/logo.png)](https://github.com/ash-project/ash_sqlite)

[ash\_sqlite](https://github.com/ash-project/ash_sqlite)

v0.2.3

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_sqlite

Settings

# [View Source](https://github.com/ash-project/ash_sqlite/blob/v0.2.3/documentation/topics/about-ash-sqlite/what-is-ash-sqlite.md#L1 "View Source") What is AshSqlite?

AshSqlite is the SQLite [`Ash.DataLayer`](../ash/3.4.58/Ash.DataLayer.html) for [Ash Framework](../ash.html). This doesn't have all of the features of [AshPostgres](../ash_postgres.html), but it does support most of the features of Ash data layers. The main feature missing is Aggregate support.

Use this to persist records in a SQLite table. For example, the resource below would be persisted in a table called `tweets`:

```
defmodule MyApp.Tweet do
  use Ash.Resource,
    data_layer: AshSQLite.DataLayer

  attributes do
    integer_primary_key :id
    attribute :text, :string
  end

  relationships do
    belongs_to :author, MyApp.User
  end

  sqlite do
    table "tweets"
    repo MyApp.Repo
  end
end
```

The table might look like this:

idtextauthor\_id1"Hello, world!"1

Creating records would add to the table, destroying records would remove from the table, and updating records would update the table.

[← Previous Page Getting Started With AshSqlite](getting-started-with-ash-sqlite.html)

[Next Page → References](references.html)

[Hex Package](https://hex.pm/packages/ash_sqlite/0.2.3) [Hex Preview](https://preview.hex.pm/preview/ash_sqlite/0.2.3) ([current file](https://preview.hex.pm/preview/ash_sqlite/0.2.3/show/documentation/topics/about-ash-sqlite/what-is-ash-sqlite.md)) Search HexDocs [Download ePub version](ash_sqlite.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
