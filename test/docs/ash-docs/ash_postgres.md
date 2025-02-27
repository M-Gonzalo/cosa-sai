[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/ "View Source") API Reference ash\_postgres v2.5.0

## [](api-reference.html#modules)Modules

[AshPostgres](AshPostgres.html)

The AshPostgres extension gives you tools to map a resource to a postgres database table.

[AshPostgres.CheckConstraint](AshPostgres.CheckConstraint.html)

Represents a configured check constraint on the table backing a resource

[AshPostgres.CustomAggregate](AshPostgres.CustomAggregate.html)

A custom aggregate implementation for ecto.

[AshPostgres.CustomExtension](AshPostgres.CustomExtension.html)

A custom extension implementation.

[AshPostgres.CustomIndex](AshPostgres.CustomIndex.html)

Represents a custom index on the table backing a resource

[AshPostgres.DataLayer](AshPostgres.DataLayer.html)

A postgres data layer that leverages Ecto's postgres capabilities.

[AshPostgres.DataLayer.Info](AshPostgres.DataLayer.Info.html)

Introspection functions for

[AshPostgres.Extensions.Vector](AshPostgres.Extensions.Vector.html)

An extension that adds support for the `vector` type.

[AshPostgres.Functions.Binding](AshPostgres.Functions.Binding.html)

Refers to the current table binding.

[AshPostgres.Functions.ILike](AshPostgres.Functions.ILike.html)

Maps to the builtin postgres function `ilike`.

[AshPostgres.Functions.Like](AshPostgres.Functions.Like.html)

Maps to the builtin postgres function `like`.

[AshPostgres.Functions.TrigramSimilarity](AshPostgres.Functions.TrigramSimilarity.html)

Maps to the builtin postgres trigram similarity function. Requires `pgtrgm` extension to be installed.

[AshPostgres.Functions.VectorCosineDistance](AshPostgres.Functions.VectorCosineDistance.html)

Maps to the vector cosine distance operator. Requires `vector` extension to be installed.

[AshPostgres.Igniter](AshPostgres.Igniter.html)

Codemods and utilities for working with AshPostgres &amp; Igniter

[AshPostgres.Ltree](AshPostgres.Ltree.html)

Ash Type for [postgres `ltree`](https://www.postgresql.org/docs/current/ltree.html), a hierarchical tree-like data type.

[AshPostgres.ManualRelationship](AshPostgres.ManualRelationship.html)

A behavior for postgres-specific manual relationship functionality

[AshPostgres.Migration](AshPostgres.Migration.html)

Utilities for use in migrations

[AshPostgres.MigrationCompileCache](AshPostgres.MigrationCompileCache.html)

A cache for the compiled migrations.

[AshPostgres.Reference](AshPostgres.Reference.html)

Represents the configuration of a reference (i.e foreign key).

[AshPostgres.Repo](AshPostgres.Repo.html)

Resources that use [`AshPostgres.DataLayer`](AshPostgres.DataLayer.html) use a `Repo` to access the database.

[AshPostgres.Statement](AshPostgres.Statement.html)

Represents a custom statement to be run in generated migrations

[AshPostgres.Timestamptz](AshPostgres.Timestamptz.html)

Implements the PostgresSQL [timestamptz](https://www.postgresql.org/docs/current/datatype-datetime.html) (aka `timestamp with time zone`) type.

[AshPostgres.TimestamptzUsec](AshPostgres.TimestamptzUsec.html)

Implements the PostgresSQL [timestamptz](https://www.postgresql.org/docs/current/datatype-datetime.html) (aka `timestamp with time zone`) type with nanosecond precision.

[AshPostgres.Tsquery](AshPostgres.Tsquery.html)

A thin wrapper around `:string` for working with tsquery types in calculations.

[AshPostgres.Tsvector](AshPostgres.Tsvector.html)

A type for representing postgres' tsvectors.

[AshPostgres.Type](AshPostgres.Type.html)

Postgres specific callbacks for [`Ash.Type`](../ash/3.4.55/Ash.Type.html).

[EctoMigrationDefault](EctoMigrationDefault.html)

Allows configuring how values are translated to default values in migrations.

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_postgres.create](Mix.Tasks.AshPostgres.Create.html)

Create the storage for repos in all resources for the given (or configured) domains.

[mix ash\_postgres.drop](Mix.Tasks.AshPostgres.Drop.html)

Drop the storage for the given repository.

[mix ash\_postgres.gen.resources](Mix.Tasks.AshPostgres.Gen.Resources.html)

Generates resources based on a database schema

[mix ash\_postgres.generate\_migrations](Mix.Tasks.AshPostgres.GenerateMigrations.html)

Generates migrations, and stores a snapshot of your resources.

[mix ash\_postgres.install](Mix.Tasks.AshPostgres.Install.html)

Installs AshPostgres. Should be run with `mix igniter.install ash_postgres`

[mix ash\_postgres.migrate](Mix.Tasks.AshPostgres.Migrate.html)

Runs the pending migrations for the given repository.

[mix ash\_postgres.rollback](Mix.Tasks.AshPostgres.Rollback.html)

Reverts applied migrations in the given repository. Migrations are expected at "priv/YOUR\_REPO/migrations" directory of the current application but it can be configured by specifying the `:priv` key under the repository configuration. Runs the latest applied migration by default. To roll back to a version number, supply `--to version_number`. To roll back a specific number of times, use `--step n`. To undo all applied migrations, provide `--all`.

[mix ash\_postgres.squash\_snapshots](Mix.Tasks.AshPostgres.SquashSnapshots.html)

Cleans snapshots folder, leaving only one snapshot per resource.

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/check_constraint.ex#L1 "View Source") AshPostgres.CheckConstraint (ash\_postgres v2.5.0)

Represents a configured check constraint on the table backing a resource

# [](AshPostgres.CheckConstraint.html#summary)Summary

## [Functions](AshPostgres.CheckConstraint.html#functions)

[schema()](AshPostgres.CheckConstraint.html#schema/0)

# [](AshPostgres.CheckConstraint.html#functions)Functions

[](AshPostgres.CheckConstraint.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/check_constraint.ex#L6)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_aggregate.ex#L1 "View Source") AshPostgres.CustomAggregate behaviour (ash\_postgres v2.5.0)

A custom aggregate implementation for ecto.

# [](AshPostgres.CustomAggregate.html#summary)Summary

## [Callbacks](AshPostgres.CustomAggregate.html#callbacks)

[dynamic(opts, binding)](AshPostgres.CustomAggregate.html#c:dynamic/2)

The dynamic expression to create the aggregate.

# [](AshPostgres.CustomAggregate.html#callbacks)Callbacks

[](AshPostgres.CustomAggregate.html#c:dynamic/2)

# dynamic(opts, binding)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_aggregate.ex#L19)

```
@callback dynamic(opts :: Keyword.t(), binding :: integer()) :: Ecto.Query.dynamic_expr()
```

The dynamic expression to create the aggregate.

The binding refers to the resource being aggregated, use `as(^binding)` to reference it.

For example:

```
Ecto.Query.dynamic(
  [],
  fragment("string_agg(?, ?)", field(as(^binding), ^opts[:field]), ^opts[:delimiter])
)
```

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_extension.ex#L1 "View Source") AshPostgres.CustomExtension behaviour (ash\_postgres v2.5.0)

A custom extension implementation.

# [](AshPostgres.CustomExtension.html#summary)Summary

## [Callbacks](AshPostgres.CustomExtension.html#callbacks)

[install(version)](AshPostgres.CustomExtension.html#c:install/1)

[uninstall(version)](AshPostgres.CustomExtension.html#c:uninstall/1)

# [](AshPostgres.CustomExtension.html#callbacks)Callbacks

[](AshPostgres.CustomExtension.html#c:install/1)

# install(version)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_extension.ex#L6)

```
@callback install(version :: integer()) :: String.t()
```

[](AshPostgres.CustomExtension.html#c:uninstall/1)

# uninstall(version)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_extension.ex#L8)

```
@callback uninstall(version :: integer()) :: String.t()
```

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_index.ex#L1 "View Source") AshPostgres.CustomIndex (ash\_postgres v2.5.0)

Represents a custom index on the table backing a resource

# [](AshPostgres.CustomIndex.html#summary)Summary

## [Functions](AshPostgres.CustomIndex.html#functions)

[fields()](AshPostgres.CustomIndex.html#fields/0)

[name(table, map)](AshPostgres.CustomIndex.html#name/2)

[schema()](AshPostgres.CustomIndex.html#schema/0)

[transform(index)](AshPostgres.CustomIndex.html#transform/1)

# [](AshPostgres.CustomIndex.html#functions)Functions

[](AshPostgres.CustomIndex.html#fields/0)

# fields()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_index.ex#L21)

[](AshPostgres.CustomIndex.html#name/2)

# name(table, map)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_index.ex#L142)

[](AshPostgres.CustomIndex.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_index.ex#L80)

[](AshPostgres.CustomIndex.html#transform/1)

# transform(index)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/custom_index.ex#L82)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L1 "View Source") AshPostgres.DataLayer (ash\_postgres v2.5.0)

A postgres data layer that leverages Ecto's postgres capabilities.

# [](AshPostgres.DataLayer.html#summary)Summary

## [Functions](AshPostgres.DataLayer.html#functions)

[add\_known\_binding(query, data, known\_binding)](AshPostgres.DataLayer.html#add_known_binding/3)

[codegen(args)](AshPostgres.DataLayer.html#codegen/1)

[from\_ecto(other)](AshPostgres.DataLayer.html#from_ecto/1)

[install(igniter, \_, \_, \_)](AshPostgres.DataLayer.html#install/4)

[install(igniter, module, arg, path, argv)](AshPostgres.DataLayer.html#install/5)

[migrate(args)](AshPostgres.DataLayer.html#migrate/1)

[postgres(body)](AshPostgres.DataLayer.html#postgres/1)

[rollback(args)](AshPostgres.DataLayer.html#rollback/1)

[setup(args)](AshPostgres.DataLayer.html#setup/1)

[tear\_down(args)](AshPostgres.DataLayer.html#tear_down/1)

[to\_ecto(value)](AshPostgres.DataLayer.html#to_ecto/1)

# [](AshPostgres.DataLayer.html#functions)Functions

[](AshPostgres.DataLayer.html#add_known_binding/3)

# add\_known\_binding(query, data, known\_binding)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L3230)

[](AshPostgres.DataLayer.html#codegen/1)

# codegen(args)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L570)

[](AshPostgres.DataLayer.html#from_ecto/1)

# from\_ecto(other)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L2407)

[](AshPostgres.DataLayer.html#install/4)

# install(igniter, \_, \_, \_)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L3290)

[](AshPostgres.DataLayer.html#install/5)

# install(igniter, module, arg, path, argv)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L3266)

[](AshPostgres.DataLayer.html#migrate/1)

# migrate(args)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L421)

[](AshPostgres.DataLayer.html#postgres/1)

# postgres(body)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L411)(macro)

[](AshPostgres.DataLayer.html#rollback/1)

# rollback(args)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L425)

[](AshPostgres.DataLayer.html#setup/1)

# setup(args)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L574)

[](AshPostgres.DataLayer.html#tear_down/1)

# tear\_down(args)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L591)

[](AshPostgres.DataLayer.html#to_ecto/1)

# to\_ecto(value)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer.ex#L2438)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L1 "View Source") AshPostgres.DataLayer.Info (ash\_postgres v2.5.0)

Introspection functions for

# [](AshPostgres.DataLayer.Info.html#summary)Summary

## [Functions](AshPostgres.DataLayer.Info.html#functions)

[base\_filter\_sql(resource)](AshPostgres.DataLayer.Info.html#base_filter_sql/1)

A stringified version of the base\_filter, to be used in a where clause when generating unique indexes

[calculation\_to\_sql(resource, calc)](AshPostgres.DataLayer.Info.html#calculation_to_sql/2)

[calculations\_to\_sql(resource)](AshPostgres.DataLayer.Info.html#calculations_to_sql/1)

A keyword list of calculations to their sql representation

[check\_constraints(resource)](AshPostgres.DataLayer.Info.html#check_constraints/1)

The configured check\_constraints for a resource

[custom\_indexes(resource)](AshPostgres.DataLayer.Info.html#custom_indexes/1)

The configured custom\_indexes for a resource

[custom\_statements(resource)](AshPostgres.DataLayer.Info.html#custom_statements/1)

The configured custom\_statements for a resource

[exclusion\_constraint\_names(resource)](AshPostgres.DataLayer.Info.html#exclusion_constraint_names/1)

The configured exclusion\_constraint\_names

[foreign\_key\_names(resource)](AshPostgres.DataLayer.Info.html#foreign_key_names/1)

The configured foreign\_key\_names

[global\_upsert\_keys(resource)](AshPostgres.DataLayer.Info.html#global_upsert_keys/1)

A list of keys to always include in upserts.

[identity\_index\_names(resource)](AshPostgres.DataLayer.Info.html#identity_index_names/1)

The configured identity\_index\_names

[identity\_where\_to\_sql(resource, identity)](AshPostgres.DataLayer.Info.html#identity_where_to_sql/2)

Returns the literal SQL for the `where` clause given a resource and an identity name.

[identity\_wheres\_to\_sql(resource)](AshPostgres.DataLayer.Info.html#identity_wheres_to_sql/1)

A keyword list of identity names to the literal SQL string representation of the `where` clause portion of identity's partial unique index.

[manage\_tenant\_create?(resource)](AshPostgres.DataLayer.Info.html#manage_tenant_create?/1)

Whether or not to create a tenant for a given resource

[manage\_tenant\_template(resource)](AshPostgres.DataLayer.Info.html#manage_tenant_template/1)

The template for a managed tenant

[manage\_tenant\_update?(resource)](AshPostgres.DataLayer.Info.html#manage_tenant_update?/1)

Whether or not to update a tenant for a given resource

[migrate?(resource)](AshPostgres.DataLayer.Info.html#migrate?/1)

Whether or not the resource should be included when generating migrations

[migration\_defaults(resource)](AshPostgres.DataLayer.Info.html#migration_defaults/1)

A keyword list of customized migration defaults

[migration\_ignore\_attributes(resource)](AshPostgres.DataLayer.Info.html#migration_ignore_attributes/1)

A list of attributes to be ignored when generating migrations

[migration\_types(resource)](AshPostgres.DataLayer.Info.html#migration_types/1)

A keyword list of customized migration types

[min\_pg\_version(resource)](AshPostgres.DataLayer.Info.html#min_pg_version/1)

Gets the resource's repo's postgres version

[pg\_version\_matches?(resource, requirement)](AshPostgres.DataLayer.Info.html#pg_version_matches?/2)

Checks a version requirement against the resource's repo's postgres version

[polymorphic?(resource)](AshPostgres.DataLayer.Info.html#polymorphic?/1)

The configured polymorphic? for a resource

[polymorphic\_name(resource)](AshPostgres.DataLayer.Info.html#polymorphic_name/1)

The configured polymorphic\_reference\_name for a resource

[polymorphic\_on\_delete(resource)](AshPostgres.DataLayer.Info.html#polymorphic_on_delete/1)

The configured polymorphic\_reference\_on\_delete for a resource

[polymorphic\_on\_update(resource)](AshPostgres.DataLayer.Info.html#polymorphic_on_update/1)

The configured polymorphic\_reference\_on\_update for a resource

[reference(resource, relationship)](AshPostgres.DataLayer.Info.html#reference/2)

The configured reference for a given relationship of a resource

[references(resource)](AshPostgres.DataLayer.Info.html#references/1)

The configured references for a resource

[repo(resource, type \\\\ :mutate)](AshPostgres.DataLayer.Info.html#repo/2)

The configured repo for a resource

[schema(resource)](AshPostgres.DataLayer.Info.html#schema/1)

The configured schema for a resource

[simple\_join\_first\_aggregates(resource)](AshPostgres.DataLayer.Info.html#simple_join_first_aggregates/1)

[skip\_identities(resource)](AshPostgres.DataLayer.Info.html#skip_identities/1)

Identities not to include in the migrations

[skip\_unique\_indexes(resource)](AshPostgres.DataLayer.Info.html#skip_unique_indexes/1)

Skip generating unique indexes when generating migrations

[storage\_types(resource)](AshPostgres.DataLayer.Info.html#storage_types/1)

A keyword list of customized storage types

[table(resource)](AshPostgres.DataLayer.Info.html#table/1)

The configured table for a resource

[unique\_index\_names(resource)](AshPostgres.DataLayer.Info.html#unique_index_names/1)

The configured unique\_index\_names

# [](AshPostgres.DataLayer.Info.html#functions)Functions

[](AshPostgres.DataLayer.Info.html#base_filter_sql/1)

# base\_filter\_sql(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L202)

A stringified version of the base\_filter, to be used in a where clause when generating unique indexes

[](AshPostgres.DataLayer.Info.html#calculation_to_sql/2)

# calculation\_to\_sql(resource, calc)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L22)

[](AshPostgres.DataLayer.Info.html#calculations_to_sql/1)

# calculations\_to\_sql(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L18)

A keyword list of calculations to their sql representation

[](AshPostgres.DataLayer.Info.html#check_constraints/1)

# check\_constraints(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L132)

The configured check\_constraints for a resource

[](AshPostgres.DataLayer.Info.html#custom_indexes/1)

# custom\_indexes(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L137)

The configured custom\_indexes for a resource

[](AshPostgres.DataLayer.Info.html#custom_statements/1)

# custom\_statements(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L142)

The configured custom\_statements for a resource

[](AshPostgres.DataLayer.Info.html#exclusion_constraint_names/1)

# exclusion\_constraint\_names(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L172)

The configured exclusion\_constraint\_names

[](AshPostgres.DataLayer.Info.html#foreign_key_names/1)

# foreign\_key\_names(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L187)

The configured foreign\_key\_names

[](AshPostgres.DataLayer.Info.html#global_upsert_keys/1)

# global\_upsert\_keys(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L197)

A list of keys to always include in upserts.

[](AshPostgres.DataLayer.Info.html#identity_index_names/1)

# identity\_index\_names(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L177)

The configured identity\_index\_names

[](AshPostgres.DataLayer.Info.html#identity_where_to_sql/2)

# identity\_where\_to\_sql(resource, identity)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L59)

```
@spec identity_where_to_sql(Ash.Resource.t(), atom()) :: String.t() | nil
```

Returns the literal SQL for the `where` clause given a resource and an identity name.

See [`identity_wheres_to_sql/1`](AshPostgres.DataLayer.Info.html#identity_wheres_to_sql/1) for more details.

[](AshPostgres.DataLayer.Info.html#identity_wheres_to_sql/1)

# identity\_wheres\_to\_sql(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L48)

```
@spec identity_wheres_to_sql(Ash.Resource.t()) :: keyword(String.t())
```

A keyword list of identity names to the literal SQL string representation of the `where` clause portion of identity's partial unique index.

For example, given the following identity for a resource:

```
identities do
  identity :active, [:status] do
    where expr(status == "active")
  end
end
```

An appropriate `identity_wheres_to_sql` would need to be made to generate the correct migration for the partial index used by the identity:

```
postgres do
  ...

  identity_wheres_to_sql active: "status = 'active'"
end
```

[](AshPostgres.DataLayer.Info.html#manage_tenant_create?/1)

# manage\_tenant\_create?(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L217)

Whether or not to create a tenant for a given resource

[](AshPostgres.DataLayer.Info.html#manage_tenant_template/1)

# manage\_tenant\_template(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L212)

The template for a managed tenant

[](AshPostgres.DataLayer.Info.html#manage_tenant_update?/1)

# manage\_tenant\_update?(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L222)

Whether or not to update a tenant for a given resource

[](AshPostgres.DataLayer.Info.html#migrate?/1)

# migrate?(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L192)

Whether or not the resource should be included when generating migrations

[](AshPostgres.DataLayer.Info.html#migration_defaults/1)

# migration\_defaults(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L122)

A keyword list of customized migration defaults

[](AshPostgres.DataLayer.Info.html#migration_ignore_attributes/1)

# migration\_ignore\_attributes(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L127)

A list of attributes to be ignored when generating migrations

[](AshPostgres.DataLayer.Info.html#migration_types/1)

# migration\_types(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L112)

A keyword list of customized migration types

[](AshPostgres.DataLayer.Info.html#min_pg_version/1)

# min\_pg\_version(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L71)

Gets the resource's repo's postgres version

[](AshPostgres.DataLayer.Info.html#pg_version_matches?/2)

# pg\_version\_matches?(resource, requirement)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L64)

Checks a version requirement against the resource's repo's postgres version

[](AshPostgres.DataLayer.Info.html#polymorphic?/1)

# polymorphic?(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L162)

The configured polymorphic? for a resource

[](AshPostgres.DataLayer.Info.html#polymorphic_name/1)

# polymorphic\_name(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L157)

The configured polymorphic\_reference\_name for a resource

[](AshPostgres.DataLayer.Info.html#polymorphic_on_delete/1)

# polymorphic\_on\_delete(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L147)

The configured polymorphic\_reference\_on\_delete for a resource

[](AshPostgres.DataLayer.Info.html#polymorphic_on_update/1)

# polymorphic\_on\_update(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L152)

The configured polymorphic\_reference\_on\_update for a resource

[](AshPostgres.DataLayer.Info.html#reference/2)

# reference(resource, relationship)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L105)

The configured reference for a given relationship of a resource

[](AshPostgres.DataLayer.Info.html#references/1)

# references(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L100)

The configured references for a resource

[](AshPostgres.DataLayer.Info.html#repo/2)

# repo(resource, type \\\\ :mutate)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L7)

The configured repo for a resource

[](AshPostgres.DataLayer.Info.html#schema/1)

# schema(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L95)

The configured schema for a resource

[](AshPostgres.DataLayer.Info.html#simple_join_first_aggregates/1)

# simple\_join\_first\_aggregates(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L90)

[](AshPostgres.DataLayer.Info.html#skip_identities/1)

# skip\_identities(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L182)

Identities not to include in the migrations

[](AshPostgres.DataLayer.Info.html#skip_unique_indexes/1)

# skip\_unique\_indexes(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L207)

Skip generating unique indexes when generating migrations

[](AshPostgres.DataLayer.Info.html#storage_types/1)

# storage\_types(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L117)

A keyword list of customized storage types

[](AshPostgres.DataLayer.Info.html#table/1)

# table(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L86)

The configured table for a resource

[](AshPostgres.DataLayer.Info.html#unique_index_names/1)

# unique\_index\_names(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/data_layer/info.ex#L167)

The configured unique\_index\_names

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/extensions/vector.ex#L1 "View Source") AshPostgres.Extensions.Vector (ash\_postgres v2.5.0)

An extension that adds support for the `vector` type.

Create a file with these contents, not inside of a module:

```
Postgrex.Types.define(<YourApp>.PostgrexTypes, [AshPostgres.Extensions.Vector] ++ Ecto.Adapters.Postgres.extensions(), [])
```

And then ensure that you refer to these types in your repo configuration, i.e

```
config :my_app, YourApp.Repo,
  types: <YourApp>.PostgrexTypes
```

# [](AshPostgres.Extensions.Vector.html#summary)Summary

## [Functions](AshPostgres.Extensions.Vector.html#functions)

[decode(arg1)](AshPostgres.Extensions.Vector.html#decode/1)

[encode(\_)](AshPostgres.Extensions.Vector.html#encode/1)

[format(\_)](AshPostgres.Extensions.Vector.html#format/1)

[init(opts)](AshPostgres.Extensions.Vector.html#init/1)

[matching(\_)](AshPostgres.Extensions.Vector.html#matching/1)

# [](AshPostgres.Extensions.Vector.html#functions)Functions

[](AshPostgres.Extensions.Vector.html#decode/1)

# decode(arg1)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/extensions/vector.ex#L50)

[](AshPostgres.Extensions.Vector.html#encode/1)

# encode(\_)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/extensions/vector.ex#L26)

[](AshPostgres.Extensions.Vector.html#format/1)

# format(\_)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/extensions/vector.ex#L24)

[](AshPostgres.Extensions.Vector.html#init/1)

# init(opts)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/extensions/vector.ex#L20)

[](AshPostgres.Extensions.Vector.html#matching/1)

# matching(\_)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/extensions/vector.ex#L22)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/binding.ex#L1 "View Source") AshPostgres.Functions.Binding (ash\_postgres v2.5.0)

Refers to the current table binding.

# [](AshPostgres.Functions.Binding.html#summary)Summary

## [Functions](AshPostgres.Functions.Binding.html#functions)

[args()](AshPostgres.Functions.Binding.html#args/0)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

# [](AshPostgres.Functions.Binding.html#functions)Functions

[](AshPostgres.Functions.Binding.html#args/0)

# args()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/binding.ex#L8)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/ilike.ex#L1 "View Source") AshPostgres.Functions.ILike (ash\_postgres v2.5.0)

Maps to the builtin postgres function `ilike`.

# [](AshPostgres.Functions.ILike.html#summary)Summary

## [Functions](AshPostgres.Functions.ILike.html#functions)

[args()](AshPostgres.Functions.ILike.html#args/0)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

# [](AshPostgres.Functions.ILike.html#functions)Functions

[](AshPostgres.Functions.ILike.html#args/0)

# args()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/ilike.ex#L8)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/like.ex#L1 "View Source") AshPostgres.Functions.Like (ash\_postgres v2.5.0)

Maps to the builtin postgres function `like`.

# [](AshPostgres.Functions.Like.html#summary)Summary

## [Functions](AshPostgres.Functions.Like.html#functions)

[args()](AshPostgres.Functions.Like.html#args/0)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

# [](AshPostgres.Functions.Like.html#functions)Functions

[](AshPostgres.Functions.Like.html#args/0)

# args()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/like.ex#L8)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/trigram_similarity.ex#L1 "View Source") AshPostgres.Functions.TrigramSimilarity (ash\_postgres v2.5.0)

Maps to the builtin postgres trigram similarity function. Requires `pgtrgm` extension to be installed.

See the postgres docs on [trigram](https://www.postgresql.org/docs/9.6/pgtrgm.html) for more information.

Requires the pg\_trgm extension. Configure which extensions you have installed in your [`AshPostgres.Repo`](AshPostgres.Repo.html)

```
# Example

filter(query, trigram_similarity(name, "geoff") > 0.4)
```

# [](AshPostgres.Functions.TrigramSimilarity.html#summary)Summary

## [Functions](AshPostgres.Functions.TrigramSimilarity.html#functions)

[args()](AshPostgres.Functions.TrigramSimilarity.html#args/0)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

# [](AshPostgres.Functions.TrigramSimilarity.html#functions)Functions

[](AshPostgres.Functions.TrigramSimilarity.html#args/0)

# args()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/trigram_similarity.ex#L16)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/vector_cosine_distance.ex#L1 "View Source") AshPostgres.Functions.VectorCosineDistance (ash\_postgres v2.5.0)

Maps to the vector cosine distance operator. Requires `vector` extension to be installed.

# [](AshPostgres.Functions.VectorCosineDistance.html#summary)Summary

## [Functions](AshPostgres.Functions.VectorCosineDistance.html#functions)

[args()](AshPostgres.Functions.VectorCosineDistance.html#args/0)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

# [](AshPostgres.Functions.VectorCosineDistance.html#functions)Functions

[](AshPostgres.Functions.VectorCosineDistance.html#args/0)

# args()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/functions/vector_cosine_distance.ex#L8)

Callback implementation for [`Ash.Query.Function.args/0`](../ash/3.4.55/Ash.Query.Function.html#c:args/0).

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L1 "View Source") AshPostgres (ash\_postgres v2.5.0)

The AshPostgres extension gives you tools to map a resource to a postgres database table.

For more, check out the [getting started guide](get-started-with-ash-postgres.html)

# [](AshPostgres.html#summary)Summary

## [Functions](AshPostgres.html#functions)

[base\_filter\_sql(resource)](AshPostgres.html#base_filter_sql/1) deprecated

See [`AshPostgres.DataLayer.Info.base_filter_sql/1`](AshPostgres.DataLayer.Info.html#base_filter_sql/1).

[check\_constraints(resource)](AshPostgres.html#check_constraints/1) deprecated

See [`AshPostgres.DataLayer.Info.check_constraints/1`](AshPostgres.DataLayer.Info.html#check_constraints/1).

[custom\_indexes(resource)](AshPostgres.html#custom_indexes/1) deprecated

See [`AshPostgres.DataLayer.Info.custom_indexes/1`](AshPostgres.DataLayer.Info.html#custom_indexes/1).

[custom\_statements(resource)](AshPostgres.html#custom_statements/1) deprecated

See [`AshPostgres.DataLayer.Info.custom_statements/1`](AshPostgres.DataLayer.Info.html#custom_statements/1).

[exclusion\_constraint\_names(resource)](AshPostgres.html#exclusion_constraint_names/1) deprecated

See [`AshPostgres.DataLayer.Info.exclusion_constraint_names/1`](AshPostgres.DataLayer.Info.html#exclusion_constraint_names/1).

[foreign\_key\_names(resource)](AshPostgres.html#foreign_key_names/1) deprecated

See [`AshPostgres.DataLayer.Info.foreign_key_names/1`](AshPostgres.DataLayer.Info.html#foreign_key_names/1).

[identity\_index\_names(resource)](AshPostgres.html#identity_index_names/1) deprecated

See [`AshPostgres.DataLayer.Info.identity_index_names/1`](AshPostgres.DataLayer.Info.html#identity_index_names/1).

[manage\_tenant\_create?(resource)](AshPostgres.html#manage_tenant_create?/1) deprecated

See [`AshPostgres.DataLayer.Info.manage_tenant_create?/1`](AshPostgres.DataLayer.Info.html#manage_tenant_create?/1).

[manage\_tenant\_template(resource)](AshPostgres.html#manage_tenant_template/1) deprecated

See [`AshPostgres.DataLayer.Info.manage_tenant_template/1`](AshPostgres.DataLayer.Info.html#manage_tenant_template/1).

[manage\_tenant\_update?(resource)](AshPostgres.html#manage_tenant_update?/1) deprecated

See [`AshPostgres.DataLayer.Info.manage_tenant_update?/1`](AshPostgres.DataLayer.Info.html#manage_tenant_update?/1).

[migrate?(resource)](AshPostgres.html#migrate?/1) deprecated

See [`AshPostgres.DataLayer.Info.migrate?/1`](AshPostgres.DataLayer.Info.html#migrate?/1).

[migration\_types(resource)](AshPostgres.html#migration_types/1) deprecated

See [`AshPostgres.DataLayer.Info.migration_types/1`](AshPostgres.DataLayer.Info.html#migration_types/1).

[polymorphic?(resource)](AshPostgres.html#polymorphic?/1) deprecated

See [`AshPostgres.DataLayer.Info.polymorphic?/1`](AshPostgres.DataLayer.Info.html#polymorphic?/1).

[polymorphic\_name(resource)](AshPostgres.html#polymorphic_name/1) deprecated

See [`AshPostgres.DataLayer.Info.polymorphic_name/1`](AshPostgres.DataLayer.Info.html#polymorphic_name/1).

[polymorphic\_on\_delete(resource)](AshPostgres.html#polymorphic_on_delete/1) deprecated

See [`AshPostgres.DataLayer.Info.polymorphic_on_delete/1`](AshPostgres.DataLayer.Info.html#polymorphic_on_delete/1).

[polymorphic\_on\_update(resource)](AshPostgres.html#polymorphic_on_update/1) deprecated

See [`AshPostgres.DataLayer.Info.polymorphic_on_update/1`](AshPostgres.DataLayer.Info.html#polymorphic_on_update/1).

[references(resource)](AshPostgres.html#references/1) deprecated

See [`AshPostgres.DataLayer.Info.references/1`](AshPostgres.DataLayer.Info.html#references/1).

[repo(resource)](AshPostgres.html#repo/1) deprecated

See [`AshPostgres.DataLayer.Info.repo/1`](AshPostgres.DataLayer.Info.html#repo/1).

[schema(resource)](AshPostgres.html#schema/1) deprecated

See [`AshPostgres.DataLayer.Info.schema/1`](AshPostgres.DataLayer.Info.html#schema/1).

[skip\_unique\_indexes(resource)](AshPostgres.html#skip_unique_indexes/1) deprecated

See [`AshPostgres.DataLayer.Info.skip_unique_indexes/1`](AshPostgres.DataLayer.Info.html#skip_unique_indexes/1).

[table(resource)](AshPostgres.html#table/1) deprecated

See [`AshPostgres.DataLayer.Info.table/1`](AshPostgres.DataLayer.Info.html#table/1).

[unique\_index\_names(resource)](AshPostgres.html#unique_index_names/1) deprecated

See [`AshPostgres.DataLayer.Info.unique_index_names/1`](AshPostgres.DataLayer.Info.html#unique_index_names/1).

# [](AshPostgres.html#functions)Functions

[](AshPostgres.html#base_filter_sql/1)

# base\_filter\_sql(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L60)

This function is deprecated. use AshPostgres.DataLayer.Info.base\_filter\_sql/1.

See [`AshPostgres.DataLayer.Info.base_filter_sql/1`](AshPostgres.DataLayer.Info.html#base_filter_sql/1).

[](AshPostgres.html#check_constraints/1)

# check\_constraints(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L24)

This function is deprecated. use AshPostgres.DataLayer.Info.check\_constraints/1.

See [`AshPostgres.DataLayer.Info.check_constraints/1`](AshPostgres.DataLayer.Info.html#check_constraints/1).

[](AshPostgres.html#custom_indexes/1)

# custom\_indexes(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L27)

This function is deprecated. use AshPostgres.DataLayer.Info.custom\_indexes/1.

See [`AshPostgres.DataLayer.Info.custom_indexes/1`](AshPostgres.DataLayer.Info.html#custom_indexes/1).

[](AshPostgres.html#custom_statements/1)

# custom\_statements(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L30)

This function is deprecated. use AshPostgres.DataLayer.Info.custom\_statements/1.

See [`AshPostgres.DataLayer.Info.custom_statements/1`](AshPostgres.DataLayer.Info.html#custom_statements/1).

[](AshPostgres.html#exclusion_constraint_names/1)

# exclusion\_constraint\_names(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L48)

This function is deprecated. use AshPostgres.DataLayer.Info.exclusion\_constraint\_names/1.

See [`AshPostgres.DataLayer.Info.exclusion_constraint_names/1`](AshPostgres.DataLayer.Info.html#exclusion_constraint_names/1).

[](AshPostgres.html#foreign_key_names/1)

# foreign\_key\_names(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L54)

This function is deprecated. use AshPostgres.DataLayer.Info.foreign\_key\_names/1.

See [`AshPostgres.DataLayer.Info.foreign_key_names/1`](AshPostgres.DataLayer.Info.html#foreign_key_names/1).

[](AshPostgres.html#identity_index_names/1)

# identity\_index\_names(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L51)

This function is deprecated. use AshPostgres.DataLayer.Info.identity\_index\_names/1.

See [`AshPostgres.DataLayer.Info.identity_index_names/1`](AshPostgres.DataLayer.Info.html#identity_index_names/1).

[](AshPostgres.html#manage_tenant_create?/1)

# manage\_tenant\_create?(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L69)

This function is deprecated. use AshPostgres.DataLayer.Info.manage\_tenant\_create?/1.

See [`AshPostgres.DataLayer.Info.manage_tenant_create?/1`](AshPostgres.DataLayer.Info.html#manage_tenant_create?/1).

[](AshPostgres.html#manage_tenant_template/1)

# manage\_tenant\_template(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L66)

This function is deprecated. use AshPostgres.DataLayer.Info.manage\_tenant\_template/1.

See [`AshPostgres.DataLayer.Info.manage_tenant_template/1`](AshPostgres.DataLayer.Info.html#manage_tenant_template/1).

[](AshPostgres.html#manage_tenant_update?/1)

# manage\_tenant\_update?(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L72)

This function is deprecated. use AshPostgres.DataLayer.Info.manage\_tenant\_update?/1.

See [`AshPostgres.DataLayer.Info.manage_tenant_update?/1`](AshPostgres.DataLayer.Info.html#manage_tenant_update?/1).

[](AshPostgres.html#migrate?/1)

# migrate?(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L57)

This function is deprecated. use AshPostgres.DataLayer.Info.migrate?/1.

See [`AshPostgres.DataLayer.Info.migrate?/1`](AshPostgres.DataLayer.Info.html#migrate?/1).

[](AshPostgres.html#migration_types/1)

# migration\_types(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L21)

This function is deprecated. use AshPostgres.DataLayer.Info.migration\_types/1.

See [`AshPostgres.DataLayer.Info.migration_types/1`](AshPostgres.DataLayer.Info.html#migration_types/1).

[](AshPostgres.html#polymorphic?/1)

# polymorphic?(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L42)

This function is deprecated. use AshPostgres.DataLayer.Info.polymorphic?/1.

See [`AshPostgres.DataLayer.Info.polymorphic?/1`](AshPostgres.DataLayer.Info.html#polymorphic?/1).

[](AshPostgres.html#polymorphic_name/1)

# polymorphic\_name(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L39)

This function is deprecated. use AshPostgres.DataLayer.Info.polymorphic\_name/1.

See [`AshPostgres.DataLayer.Info.polymorphic_name/1`](AshPostgres.DataLayer.Info.html#polymorphic_name/1).

[](AshPostgres.html#polymorphic_on_delete/1)

# polymorphic\_on\_delete(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L33)

This function is deprecated. use AshPostgres.DataLayer.Info.polymorphic\_on\_delete/1.

See [`AshPostgres.DataLayer.Info.polymorphic_on_delete/1`](AshPostgres.DataLayer.Info.html#polymorphic_on_delete/1).

[](AshPostgres.html#polymorphic_on_update/1)

# polymorphic\_on\_update(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L36)

This function is deprecated. use AshPostgres.DataLayer.Info.polymorphic\_on\_update/1.

See [`AshPostgres.DataLayer.Info.polymorphic_on_update/1`](AshPostgres.DataLayer.Info.html#polymorphic_on_update/1).

[](AshPostgres.html#references/1)

# references(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L18)

This function is deprecated. use AshPostgres.DataLayer.Info.references/1.

See [`AshPostgres.DataLayer.Info.references/1`](AshPostgres.DataLayer.Info.html#references/1).

[](AshPostgres.html#repo/1)

# repo(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L9)

This function is deprecated. use AshPostgres.DataLayer.Info.repo/1.

See [`AshPostgres.DataLayer.Info.repo/1`](AshPostgres.DataLayer.Info.html#repo/1).

[](AshPostgres.html#schema/1)

# schema(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L15)

This function is deprecated. use AshPostgres.DataLayer.Info.schema/1.

See [`AshPostgres.DataLayer.Info.schema/1`](AshPostgres.DataLayer.Info.html#schema/1).

[](AshPostgres.html#skip_unique_indexes/1)

# skip\_unique\_indexes(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L63)

This function is deprecated. use AshPostgres.DataLayer.Info.skip\_unique\_indexes/1.

See [`AshPostgres.DataLayer.Info.skip_unique_indexes/1`](AshPostgres.DataLayer.Info.html#skip_unique_indexes/1).

[](AshPostgres.html#table/1)

# table(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L12)

This function is deprecated. use AshPostgres.DataLayer.Info.table/1.

See [`AshPostgres.DataLayer.Info.table/1`](AshPostgres.DataLayer.Info.html#table/1).

[](AshPostgres.html#unique_index_names/1)

# unique\_index\_names(resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ash_postgres.ex#L45)

This function is deprecated. use AshPostgres.DataLayer.Info.unique\_index\_names/1.

See [`AshPostgres.DataLayer.Info.unique_index_names/1`](AshPostgres.DataLayer.Info.html#unique_index_names/1).

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/igniter.ex#L2 "View Source") AshPostgres.Igniter (ash\_postgres v2.5.0)

Codemods and utilities for working with AshPostgres &amp; Igniter

# [](AshPostgres.Igniter.html#summary)Summary

## [Functions](AshPostgres.Igniter.html#functions)

[add\_postgres\_extension(igniter, repo\_name, extension)](AshPostgres.Igniter.html#add_postgres_extension/3)

[list\_repos(igniter)](AshPostgres.Igniter.html#list_repos/1)

[repo(igniter, resource)](AshPostgres.Igniter.html#repo/2)

[select\_repo(igniter, opts \\\\ \[\])](AshPostgres.Igniter.html#select_repo/2)

[table(igniter, resource)](AshPostgres.Igniter.html#table/2)

# [](AshPostgres.Igniter.html#functions)Functions

[](AshPostgres.Igniter.html#add_postgres_extension/3)

# add\_postgres\_extension(igniter, repo\_name, extension)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/igniter.ex#L53)

[](AshPostgres.Igniter.html#list_repos/1)

# list\_repos(igniter)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/igniter.ex#L125)

[](AshPostgres.Igniter.html#repo/2)

# repo(igniter, resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/igniter.ex#L41)

[](AshPostgres.Igniter.html#select_repo/2)

# select\_repo(igniter, opts \\\\ \[])

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/igniter.ex#L80)

[](AshPostgres.Igniter.html#table/2)

# table(igniter, resource)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/igniter.ex#L29)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/ltree.ex#L1 "View Source") AshPostgres.Ltree (ash\_postgres v2.5.0)

Ash Type for [postgres `ltree`](https://www.postgresql.org/docs/current/ltree.html), a hierarchical tree-like data type.

## [](AshPostgres.Ltree.html#module-postgres-extension)Postgres Extension

To be able to use the `ltree` type, you'll have to enable the postgres `ltree` extension first.

See [`AshPostgres.Repo`](AshPostgres.Repo.html#module-installed-extensions)

## [](AshPostgres.Ltree.html#module-constraints)Constraints

- `:escape?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Escape the ltree segments to make it possible to include characters that are either `.` (the separation character) or any other unsupported character like `-` (Postgres &lt;= 15).  
  If the option is enabled, any characters besides `[0-9a-zA-Z]` will be replaced with `_[HEX Ascii Code]`.  
  Additionally the type will no longer take strings as user input since it's impossible to decide between `.` being a separator or part of a segment.  
  If the option is disabled, any string will be relayed directly to postgres. If the segments are provided as a list, they can't contain `.` since postgres would split the segment.
- `:min_length` ([`non_neg_integer/0`](../elixir/typespecs.html#basic-types)) - A minimum length for the tree segments.
- `:max_length` ([`non_neg_integer/0`](../elixir/typespecs.html#basic-types)) - A maximum length for the tree segments.

# [](AshPostgres.Ltree.html#summary)Summary

## [Types](AshPostgres.Ltree.html#types)

[segment()](AshPostgres.Ltree.html#t:segment/0)

[t()](AshPostgres.Ltree.html#t:t/0)

## [Functions](AshPostgres.Ltree.html#functions)

[handle\_change?()](AshPostgres.Ltree.html#handle_change?/0)

[prepare\_change?()](AshPostgres.Ltree.html#prepare_change?/0)

[shared\_root(ltree1, ltree2)](AshPostgres.Ltree.html#shared_root/2)

Get shared root of given ltrees.

# [](AshPostgres.Ltree.html#types)Types

[](AshPostgres.Ltree.html#t:segment/0)

# segment()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/ltree.ex#L51)

```
@type segment() :: String.t()
```

[](AshPostgres.Ltree.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/ltree.ex#L50)

```
@type t() :: [segment()]
```

# [](AshPostgres.Ltree.html#functions)Functions

[](AshPostgres.Ltree.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/ltree.ex#L1)

[](AshPostgres.Ltree.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/ltree.ex#L1)

[](AshPostgres.Ltree.html#shared_root/2)

# shared\_root(ltree1, ltree2)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/ltree.ex#L183)

```
@spec shared_root(ltree1 :: t(), ltree2 :: t()) :: t()
```

Get shared root of given ltrees.

## [](AshPostgres.Ltree.html#shared_root/2-examples)Examples

```
iex> Ltree.shared_root(["1", "2"], ["1", "1"])
["1"]

iex> Ltree.shared_root(["1", "2"], ["2", "1"])
[]
```

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/manual_relationship.ex#L1 "View Source") AshPostgres.ManualRelationship behaviour (ash\_postgres v2.5.0)

A behavior for postgres-specific manual relationship functionality

# [](AshPostgres.ManualRelationship.html#summary)Summary

## [Callbacks](AshPostgres.ManualRelationship.html#callbacks)

[ash\_postgres\_join( source\_query, opts, current\_binding, destination\_binding, type, destination\_query )](AshPostgres.ManualRelationship.html#c:ash_postgres_join/6)

[ash\_postgres\_subquery(opts, current\_binding, destination\_binding, destination\_query)](AshPostgres.ManualRelationship.html#c:ash_postgres_subquery/4)

# [](AshPostgres.ManualRelationship.html#callbacks)Callbacks

[](AshPostgres.ManualRelationship.html#c:ash_postgres_join/6)

# ash\_postgres\_join( source\_query, opts, current\_binding, destination\_binding, type, destination\_query )

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/manual_relationship.ex#L4)

```
@callback ash_postgres_join(
  source_query :: Ecto.Query.t(),
  opts :: Keyword.t(),
  current_binding :: term(),
  destination_binding :: term(),
  type :: :inner | :left,
  destination_query :: Ecto.Query.t()
) :: {:ok, Ecto.Query.t()} | {:error, term()}
```

[](AshPostgres.ManualRelationship.html#c:ash_postgres_subquery/4)

# ash\_postgres\_subquery(opts, current\_binding, destination\_binding, destination\_query)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/manual_relationship.ex#L13)

```
@callback ash_postgres_subquery(
  opts :: Keyword.t(),
  current_binding :: term(),
  destination_binding :: term(),
  destination_query :: Ecto.Query.t()
) :: {:ok, Ecto.Query.t()} | {:error, term()}
```

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/migration_compile_cache.ex#L1 "View Source") AshPostgres.MigrationCompileCache (ash\_postgres v2.5.0)

A cache for the compiled migrations.

This is used to avoid recompiling the migration files every time a migration is run, as well as ensuring that migrations are compiled sequentially.

This is important because otherwise there is a race condition where two invocations could be compiling the same migration at once, which would error out.

# [](AshPostgres.MigrationCompileCache.html#summary)Summary

## [Functions](AshPostgres.MigrationCompileCache.html#functions)

[compile\_file(file)](AshPostgres.MigrationCompileCache.html#compile_file/1)

Compile a file, caching the result for future calls.

[start\_link(opts \\\\ %{})](AshPostgres.MigrationCompileCache.html#start_link/1)

# [](AshPostgres.MigrationCompileCache.html#functions)Functions

[](AshPostgres.MigrationCompileCache.html#compile_file/1)

# compile\_file(file)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/migration_compile_cache.ex#L21)

Compile a file, caching the result for future calls.

[](AshPostgres.MigrationCompileCache.html#start_link/1)

# start\_link(opts \\\\ %{})

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/migration_compile_cache.ex#L14)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/migration.ex#L1 "View Source") AshPostgres.Migration (ash\_postgres v2.5.0)

Utilities for use in migrations

# [](AshPostgres.Migration.html#summary)Summary

## [Functions](AshPostgres.Migration.html#functions)

[create\_enum(type, constraints \\\\ \[\])](AshPostgres.Migration.html#create_enum/2)

A utility for creating postgres enums for an Ash enum type.

[drop\_enum(type)](AshPostgres.Migration.html#drop_enum/1)

# [](AshPostgres.Migration.html#functions)Functions

[](AshPostgres.Migration.html#create_enum/2)

# create\_enum(type, constraints \\\\ \[])

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/migration.ex#L48)

A utility for creating postgres enums for an Ash enum type.

In your migration, you can say:

```
def up() do
  AshPostgres.Migration.create_enum(MyEnumType)
end
```

Attribution:

This code and example was copied from ecto\_enum. I didn't use the library itself because it has a lot that would not currently be relevant for Ash. [https://github.com/gjaldon/ecto\_enum](https://github.com/gjaldon/ecto_enum)

Must be done manually, as the migration generator will not do it. Additionally, altering the type must be done in its own, separate migration, which must have `@disable_ddl_transaction true`, as you cannot do this operation in a transaction.

For example:

```
defmodule MyApp.Repo.Migrations.AddToGenderEnum do
  use Ecto.Migration
  @disable_ddl_transaction true

  def up do
    Ecto.Migration.execute "ALTER TYPE gender ADD VALUE IF NOT EXISTS 'other'"
  end

  def down do
    ...
  end
end
```

Keep in mind, that if you want to create a custom enum type, you will want to add

```
def storage_type(_), do: :my_type_name
```

[](AshPostgres.Migration.html#drop_enum/1)

# drop\_enum(type)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/migration.ex#L61)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/reference.ex#L1 "View Source") AshPostgres.Reference (ash\_postgres v2.5.0)

Represents the configuration of a reference (i.e foreign key).

# [](AshPostgres.Reference.html#summary)Summary

## [Functions](AshPostgres.Reference.html#functions)

[schema()](AshPostgres.Reference.html#schema/0)

# [](AshPostgres.Reference.html#functions)Functions

[](AshPostgres.Reference.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/reference.ex#L15)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L1 "View Source") AshPostgres.Repo behaviour (ash\_postgres v2.5.0)

Resources that use [`AshPostgres.DataLayer`](AshPostgres.DataLayer.html) use a `Repo` to access the database.

This repo is a thin wrapper around an [`Ecto.Repo`](../ecto/3.12.5/Ecto.Repo.html).

You can use [`Ecto.Repo`](../ecto/3.12.5/Ecto.Repo.html)'s `init/2` to configure your repo like normal, but instead of returning `{:ok, config}`, use `super(config)` to pass the configuration to the [`AshPostgres.Repo`](AshPostgres.Repo.html) implementation.

## [](AshPostgres.Repo.html#module-installed-extensions)Installed Extensions

To configure your list of installed extensions, define `installed_extensions/0`

Extensions can be a string, representing a standard postgres extension, or a module that implements [`AshPostgres.CustomExtension`](AshPostgres.CustomExtension.html). That custom extension will be called to generate migrations that serve a specific purpose.

Extensions that are relevant to ash\_postgres:

- "ash-functions" - This isn't really an extension, but it expresses that certain functions should be added when generating migrations, to support the `||` and `&&` operators in expressions.
- `"uuid-ossp"` - Sets UUID primary keys defaults in the migration generator
- `"pg_trgm"` - Makes the [`AshPostgres.Functions.TrigramSimilarity`](AshPostgres.Functions.TrigramSimilarity.html) function available
- "citext" - Allows case insensitive fields to be used
- `"vector"` - Makes the [`AshPostgres.Functions.VectorCosineDistance`](AshPostgres.Functions.VectorCosineDistance.html) function available. See [`AshPostgres.Extensions.Vector`](AshPostgres.Extensions.Vector.html) for more setup instructions.

```
def installed_extensions() do
  ["pg_trgm", "uuid-ossp", "vector", YourCustomExtension]
end
```

## [](AshPostgres.Repo.html#module-transaction-hooks)Transaction Hooks

You can define `on_transaction_begin/1`, which will be invoked whenever a transaction is started for Ash.

This will be invoked with a map containing a `type` key and metadata.

```
%{type: :create, %{resource: YourApp.YourResource, action: :action}}
```

## [](AshPostgres.Repo.html#module-additional-repo-configuration)Additional Repo Configuration

Because an [`AshPostgres.Repo`](AshPostgres.Repo.html) is also an [`Ecto.Repo`](../ecto/3.12.5/Ecto.Repo.html), it has all of the same callbacks.

In the [`Ecto.Repo.init/2`](../ecto/3.12.5/Ecto.Repo.html#c:init/2) callback, you can configure the following additional items:

- `:tenant_migrations_path` - The path where your tenant migrations are stored (only relevant for a multitenant implementation)
- `:snapshots_path` - The path where the resource snapshots for the migration generator are stored.

# [](AshPostgres.Repo.html#summary)Summary

## [Callbacks](AshPostgres.Repo.html#callbacks)

[all\_tenants()](AshPostgres.Repo.html#c:all_tenants/0)

Return a list of all schema names (only relevant for a multitenant implementation)

[create?()](AshPostgres.Repo.html#c:create?/0)

Should the repo should be created by [`mix ash_postgres.create`](Mix.Tasks.AshPostgres.Create.html)?

[default\_constraint\_match\_type(type, name)](AshPostgres.Repo.html#c:default_constraint_match_type/2)

Determine how constraint names are matched when generating errors.

[default\_prefix()](AshPostgres.Repo.html#c:default_prefix/0)

The default prefix(postgres schema) to use when building queries

[disable\_atomic\_actions?()](AshPostgres.Repo.html#c:disable_atomic_actions?/0)

Disable atomic actions for this repo

[disable\_expr\_error?()](AshPostgres.Repo.html#c:disable_expr_error?/0)

Disable expression errors for this repo

[drop?()](AshPostgres.Repo.html#c:drop?/0)

Should the repo should be dropped by [`mix ash_postgres.drop`](Mix.Tasks.AshPostgres.Drop.html)?

[installed\_extensions()](AshPostgres.Repo.html#c:installed_extensions/0)

Use this to inform the data layer about what extensions are installed

[migrations\_path()](AshPostgres.Repo.html#c:migrations_path/0)

The path where your migrations are stored

[min\_pg\_version()](AshPostgres.Repo.html#c:min_pg_version/0)

Configure the version of postgres that is being used.

[on\_transaction\_begin(reason)](AshPostgres.Repo.html#c:on_transaction_begin/1)

Use this to inform the data layer about the oldest potential postgres version it will be run on.

[override\_migration\_type(atom)](AshPostgres.Repo.html#c:override_migration_type/1)

Allows overriding a given migration type for *all* fields, for example if you wanted to always use :timestamptz for :utc\_datetime fields

[prefer\_transaction?()](AshPostgres.Repo.html#c:prefer_transaction?/0)

Whether or not to explicitly start and close a transaction for each action, even if there are no transaction hooks. Defaults to `true`.

[prefer\_transaction\_for\_atomic\_updates?()](AshPostgres.Repo.html#c:prefer_transaction_for_atomic_updates?/0)

Whether or not to explicitly start and close a transaction for each atomic update action, even if there are no transaction hooks. Defaults to `false`.

[tenant\_migrations\_path()](AshPostgres.Repo.html#c:tenant_migrations_path/0)

The path where your tenant migrations are stored (only relevant for a multitenant implementation)

# [](AshPostgres.Repo.html#callbacks)Callbacks

[](AshPostgres.Repo.html#c:all_tenants/0)

# all\_tenants()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L73)

```
@callback all_tenants() :: [String.t()]
```

Return a list of all schema names (only relevant for a multitenant implementation)

[](AshPostgres.Repo.html#c:create?/0)

# create?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L103)

```
@callback create?() :: boolean()
```

Should the repo should be created by [`mix ash_postgres.create`](Mix.Tasks.AshPostgres.Create.html)?

[](AshPostgres.Repo.html#c:default_constraint_match_type/2)

# default\_constraint\_match\_type(type, name)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L94)

```
@callback default_constraint_match_type(
  type :: :custom | :exclusion | :unique | :foreign | :check,
  name :: String.t()
) :: :exact | :prefix | :suffix | {:regex, Regex.t()}
```

Determine how constraint names are matched when generating errors.

This is useful if you are using something like citus that creates generated constraint names for each node. In that case, for example, you might return a regex that matches the name plus digits.

[](AshPostgres.Repo.html#c:default_prefix/0)

# default\_prefix()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L79)

```
@callback default_prefix() :: String.t()
```

The default prefix(postgres schema) to use when building queries

[](AshPostgres.Repo.html#c:disable_atomic_actions?/0)

# disable\_atomic\_actions?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L108)

```
@callback disable_atomic_actions?() :: boolean()
```

Disable atomic actions for this repo

[](AshPostgres.Repo.html#c:disable_expr_error?/0)

# disable\_expr\_error?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L111)

```
@callback disable_expr_error?() :: boolean()
```

Disable expression errors for this repo

[](AshPostgres.Repo.html#c:drop?/0)

# drop?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L105)

```
@callback drop?() :: boolean()
```

Should the repo should be dropped by [`mix ash_postgres.drop`](Mix.Tasks.AshPostgres.Drop.html)?

[](AshPostgres.Repo.html#c:installed_extensions/0)

# installed\_extensions()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L54)

```
@callback installed_extensions() :: [String.t() | module()]
```

Use this to inform the data layer about what extensions are installed

[](AshPostgres.Repo.html#c:migrations_path/0)

# migrations\_path()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L77)

```
@callback migrations_path() :: String.t() | nil
```

The path where your migrations are stored

[](AshPostgres.Repo.html#c:min_pg_version/0)

# min\_pg\_version()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L57)

```
@callback min_pg_version() :: Version.t()
```

Configure the version of postgres that is being used.

[](AshPostgres.Repo.html#c:on_transaction_begin/1)

# on\_transaction\_begin(reason)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L70)

```
@callback on_transaction_begin(reason :: Ash.DataLayer.transaction_reason()) :: term()
```

Use this to inform the data layer about the oldest potential postgres version it will be run on.

Must be an integer greater than or equal to 13.

## [](AshPostgres.Repo.html#c:on_transaction_begin/1-combining-with-other-tools)Combining with other tools

For things like `Fly.Repo`, where you might need to have more fine grained control over the repo module, you can use the `define_ecto_repo?: false` option to `use AshPostgres.Repo`.

[](AshPostgres.Repo.html#c:override_migration_type/1)

# override\_migration\_type(atom)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L101)

```
@callback override_migration_type(atom()) :: atom()
```

Allows overriding a given migration type for *all* fields, for example if you wanted to always use :timestamptz for :utc\_datetime fields

[](AshPostgres.Repo.html#c:prefer_transaction?/0)

# prefer\_transaction?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L82)

```
@callback prefer_transaction?() :: boolean()
```

Whether or not to explicitly start and close a transaction for each action, even if there are no transaction hooks. Defaults to `true`.

[](AshPostgres.Repo.html#c:prefer_transaction_for_atomic_updates?/0)

# prefer\_transaction\_for\_atomic\_updates?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L85)

```
@callback prefer_transaction_for_atomic_updates?() :: boolean()
```

Whether or not to explicitly start and close a transaction for each atomic update action, even if there are no transaction hooks. Defaults to `false`.

[](AshPostgres.Repo.html#c:tenant_migrations_path/0)

# tenant\_migrations\_path()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/repo.ex#L75)

```
@callback tenant_migrations_path() :: String.t() | nil
```

The path where your tenant migrations are stored (only relevant for a multitenant implementation)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/statement.ex#L1 "View Source") AshPostgres.Statement (ash\_postgres v2.5.0)

Represents a custom statement to be run in generated migrations

# [](AshPostgres.Statement.html#summary)Summary

## [Functions](AshPostgres.Statement.html#functions)

[fields()](AshPostgres.Statement.html#fields/0)

[schema()](AshPostgres.Statement.html#schema/0)

# [](AshPostgres.Statement.html#functions)Functions

[](AshPostgres.Statement.html#fields/0)

# fields()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/statement.ex#L13)

[](AshPostgres.Statement.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/statement.ex#L44)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/timestamptz.ex#L1 "View Source") AshPostgres.Timestamptz (ash\_postgres v2.5.0)

Implements the PostgresSQL [timestamptz](https://www.postgresql.org/docs/current/datatype-datetime.html) (aka `timestamp with time zone`) type.

Postgres [*strongly recommends*](https://wiki.postgresql.org/wiki/Don%27t_Do_This#Don.27t_use_timestamp_.28without_time_zone.29) using this type instead of the standard timestamps/datetimes without a time zone. Generally speaking, it is best practice to use the [nanosecond-precision](AshPostgres.TimestamptzUsec.html) variant.

The basic reason `timestamptz` exists is to guarantee that the precise moment in time is stored as microseconds since January 1st, 2000 in UTC. This guarantee eliminates many time arithmetic problems, and ensures portability.

It does not actually store a timezone, in spite of the name. As far as Elixir/Ecto is concerned, it is always of type [`DateTime`](../elixir/DateTime.html) and set to UTC. Using this type ensures Postgres internally uses the same contract as Ecto's `:utc_datetime`, which is to always store [`DateTime`](../elixir/DateTime.html) in UTC. This is especially helpful if you need to do complex time arithmetic in SQL fragments, or build reports/materialized views that use localized time formatting.

Using this type ubiquitously in your schemas is particularly beneficial for consistency, and this is currently [under consideration](https://github.com/ash-project/ash_postgres/issues/264) as a configuration option for the default datetime storage type.

```
attribute :timestamp, AshPostgres.Timestamptz
timestamps type: AshPostgres.Timestamptz
```

Alternatively, you can set up a shortname:

```
# config.exs
config :ash, :custom_types, timestamptz: AshPostgres.Timestamptz
```

After saving, you will need to run `mix compile ash --force`.

```
attribute :timestamp, :timestamptz
timestamps type: :timestamptz
```

# [](AshPostgres.Timestamptz.html#summary)Summary

## [Functions](AshPostgres.Timestamptz.html#functions)

[handle\_change?()](AshPostgres.Timestamptz.html#handle_change?/0)

[prepare\_change?()](AshPostgres.Timestamptz.html#prepare_change?/0)

# [](AshPostgres.Timestamptz.html#functions)Functions

[](AshPostgres.Timestamptz.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/timestamptz.ex#L1)

[](AshPostgres.Timestamptz.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/timestamptz.ex#L1)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/timestamptz_usec.ex#L1 "View Source") AshPostgres.TimestamptzUsec (ash\_postgres v2.5.0)

Implements the PostgresSQL [timestamptz](https://www.postgresql.org/docs/current/datatype-datetime.html) (aka `timestamp with time zone`) type with nanosecond precision.

```
attribute :timestamp, AshPostgres.TimestamptzUsec
timestamps type: AshPostgres.TimestamptzUsec
```

Alternatively, you can set up a shortname:

```
# config.exs
config :ash, :custom_types, timestamptz_usec: AshPostgres.TimestamptzUsec
```

After saving, you will need to run `mix compile ash --force`.

```
attribute :timestamp, :timestamptz_usec
timestamps type: :timestamptz_usec
```

Please see [`AshPostgres.Timestamptz`](AshPostgres.Timestamptz.html) for details about the usecase for this type.

# [](AshPostgres.TimestamptzUsec.html#summary)Summary

## [Functions](AshPostgres.TimestamptzUsec.html#functions)

[handle\_change?()](AshPostgres.TimestamptzUsec.html#handle_change?/0)

[prepare\_change?()](AshPostgres.TimestamptzUsec.html#prepare_change?/0)

# [](AshPostgres.TimestamptzUsec.html#functions)Functions

[](AshPostgres.TimestamptzUsec.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/timestamptz_usec.ex#L1)

[](AshPostgres.TimestamptzUsec.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/timestamptz_usec.ex#L1)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/tsquery.ex#L1 "View Source") AshPostgres.Tsquery (ash\_postgres v2.5.0)

A thin wrapper around `:string` for working with tsquery types in calculations.

A calculation of this type cannot be selected, but may be used in calculations.

# [](AshPostgres.Tsquery.html#summary)Summary

## [Functions](AshPostgres.Tsquery.html#functions)

[handle\_change?()](AshPostgres.Tsquery.html#handle_change?/0)

[prepare\_change?()](AshPostgres.Tsquery.html#prepare_change?/0)

# [](AshPostgres.Tsquery.html#functions)Functions

[](AshPostgres.Tsquery.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/tsquery.ex#L1)

[](AshPostgres.Tsquery.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/tsquery.ex#L1)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/tsvector.ex#L1 "View Source") AshPostgres.Tsvector (ash\_postgres v2.5.0)

A type for representing postgres' tsvectors.

Values will be a list of [`Postgrex.Lexeme`](../postgrex/0.19.3/Postgrex.Lexeme.html)

# [](AshPostgres.Tsvector.html#summary)Summary

## [Functions](AshPostgres.Tsvector.html#functions)

[handle\_change?()](AshPostgres.Tsvector.html#handle_change?/0)

[prepare\_change?()](AshPostgres.Tsvector.html#prepare_change?/0)

# [](AshPostgres.Tsvector.html#functions)Functions

[](AshPostgres.Tsvector.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/tsvector.ex#L1)

[](AshPostgres.Tsvector.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/types/tsvector.ex#L1)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/type.ex#L1 "View Source") AshPostgres.Type behaviour (ash\_postgres v2.5.0)

Postgres specific callbacks for [`Ash.Type`](../ash/3.4.55/Ash.Type.html).

Use this in addition to [`Ash.Type`](../ash/3.4.55/Ash.Type.html).

# [](AshPostgres.Type.html#summary)Summary

## [Callbacks](AshPostgres.Type.html#callbacks)

[postgres\_reference\_expr(t, constraints, term)](AshPostgres.Type.html#c:postgres_reference_expr/3)

[value\_to\_postgres\_default(t, constraints, term)](AshPostgres.Type.html#c:value_to_postgres_default/3)

# [](AshPostgres.Type.html#callbacks)Callbacks

[](AshPostgres.Type.html#c:postgres_reference_expr/3)

# postgres\_reference\_expr(t, constraints, term)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/type.ex#L11)(optional)

```
@callback postgres_reference_expr(Ash.Type.t(), Ash.Type.constraints(), term()) ::
  {:ok, term()} | :error
```

[](AshPostgres.Type.html#c:value_to_postgres_default/3)

# value\_to\_postgres\_default(t, constraints, term)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/type.ex#L8)(optional)

```
@callback value_to_postgres_default(Ash.Type.t(), Ash.Type.constraints(), term()) ::
  {:ok, String.t()} | :error
```

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/dsls/DSL-AshPostgres.DataLayer.md#L1 "View Source") DSL: AshPostgres.DataLayer

A postgres data layer that leverages Ecto's postgres capabilities.

## [](dsl-ashpostgres-datalayer.html#postgres)postgres

Postgres data layer configuration

### [](dsl-ashpostgres-datalayer.html#nested-dsls)Nested DSLs

- [custom\_indexes](dsl-ashpostgres-datalayer.html#postgres-custom_indexes)
  
  - index
- [custom\_statements](dsl-ashpostgres-datalayer.html#postgres-custom_statements)
  
  - statement
- [manage\_tenant](dsl-ashpostgres-datalayer.html#postgres-manage_tenant)
- [references](dsl-ashpostgres-datalayer.html#postgres-references)
  
  - reference
- [check\_constraints](dsl-ashpostgres-datalayer.html#postgres-check_constraints)
  
  - check\_constraint

### [](dsl-ashpostgres-datalayer.html#examples)Examples

```
postgres do
  repo MyApp.Repo
  table "organizations"
end
```

### [](dsl-ashpostgres-datalayer.html#options)Options

NameTypeDefaultDocs[`repo`](dsl-ashpostgres-datalayer.html#postgres-repo)`module | (any, any -> any)`The repo that will be used to fetch your data. See the [`AshPostgres.Repo`](AshPostgres.Repo.html) documentation for more. Can also be a function that takes a resource and a type `:read | :mutate` and returns the repo[`migrate?`](dsl-ashpostgres-datalayer.html#postgres-migrate?)`boolean``true`Whether or not to include this resource in the generated migrations with `mix ash.generate_migrations`[`storage_types`](dsl-ashpostgres-datalayer.html#postgres-storage_types)`keyword``[]`A keyword list of attribute names to the ecto type that should be used for that attribute. Only necessary if you need to override the defaults.[`migration_types`](dsl-ashpostgres-datalayer.html#postgres-migration_types)`keyword``[]`A keyword list of attribute names to the ecto migration type that should be used for that attribute. Only necessary if you need to override the defaults.[`migration_defaults`](dsl-ashpostgres-datalayer.html#postgres-migration_defaults)`keyword``[]`A keyword list of attribute names to the ecto migration default that should be used for that attribute. The string you use will be placed verbatim in the migration. Use fragments like `fragment(\\"now()\\")`, or for `nil`, use `\\"nil\\"`.[`calculations_to_sql`](dsl-ashpostgres-datalayer.html#postgres-calculations_to_sql)`keyword`A keyword list of calculations and their SQL representation. Used when creating unique indexes for identities over calculations[`identity_wheres_to_sql`](dsl-ashpostgres-datalayer.html#postgres-identity_wheres_to_sql)`keyword`A keyword list of identity names and the SQL representation of their `where` clause. See [`AshPostgres.DataLayer.Info.identity_wheres_to_sql/1`](AshPostgres.DataLayer.Info.html#identity_wheres_to_sql/1) for more details.[`base_filter_sql`](dsl-ashpostgres-datalayer.html#postgres-base_filter_sql)`String.t`A raw sql version of the base\_filter, e.g `representative = true`. Required if trying to create a unique constraint on a resource with a base\_filter[`simple_join_first_aggregates`](dsl-ashpostgres-datalayer.html#postgres-simple_join_first_aggregates)`list(atom)``[]`A list of `:first` type aggregate names that can be joined to using a simple join. Use when you have a `:first` aggregate that uses a to-many relationship , but your `filter` statement ensures that there is only one result. Optimizes the generated query.[`skip_unique_indexes`](dsl-ashpostgres-datalayer.html#postgres-skip_unique_indexes)`atom | list(atom)``[]`Skip generating unique indexes when generating migrations[`unique_index_names`](dsl-ashpostgres-datalayer.html#postgres-unique_index_names)`list({list(atom), String.t} | {list(atom), String.t, String.t})``[]`A list of unique index names that could raise errors that are not configured in identities, or an mfa to a function that takes a changeset and returns the list. In the format `{[:affected, :keys], "name_of_constraint"}` or `{[:affected, :keys], "name_of_constraint", "custom error message"}`[`exclusion_constraint_names`](dsl-ashpostgres-datalayer.html#postgres-exclusion_constraint_names)`any``[]`A list of exclusion constraint names that could raise errors. Must be in the format `{:affected_key, "name_of_constraint"}` or `{:affected_key, "name_of_constraint", "custom error message"}`[`identity_index_names`](dsl-ashpostgres-datalayer.html#postgres-identity_index_names)`any``[]`A keyword list of identity names to the unique index name that they should use when being managed by the migration generator.[`foreign_key_names`](dsl-ashpostgres-datalayer.html#postgres-foreign_key_names)`list({atom | String.t, String.t} | {atom | String.t, String.t, String.t})``[]`A list of foreign keys that could raise errors, or an mfa to a function that takes a changeset and returns a list. In the format: `{:key, "name_of_constraint"}` or `{:key, "name_of_constraint", "custom error message"}`[`migration_ignore_attributes`](dsl-ashpostgres-datalayer.html#postgres-migration_ignore_attributes)`list(atom)``[]`A list of attributes that will be ignored when generating migrations.[`table`](dsl-ashpostgres-datalayer.html#postgres-table)`String.t`The table to store and read the resource from. If this is changed, the migration generator will not remove the old table.[`schema`](dsl-ashpostgres-datalayer.html#postgres-schema)`String.t`The schema that the table is located in. Schema-based multitenancy will supercede this option. If this is changed, the migration generator will not remove the old schema.[`polymorphic?`](dsl-ashpostgres-datalayer.html#postgres-polymorphic?)`boolean``false`Declares this resource as polymorphic. See the [polymorphic resources guide](polymorphic-resources.html) for more.

## [](dsl-ashpostgres-datalayer.html#postgres-custom_indexes)postgres.custom\_indexes

A section for configuring indexes to be created by the migration generator.

In general, prefer to use `identities` for simple unique constraints. This is a tool to allow for declaring more complex indexes.

### [](dsl-ashpostgres-datalayer.html#nested-dsls-1)Nested DSLs

- [index](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index)

### [](dsl-ashpostgres-datalayer.html#examples-1)Examples

```
custom_indexes do
  index [:column1, :column2], unique: true, where: "thing = TRUE"
end
```

## [](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index)postgres.custom\_indexes.index

```
index fields
```

Add an index to be managed by the migration generator.

### [](dsl-ashpostgres-datalayer.html#examples-2)Examples

```
index ["column", "column2"], unique: true, where: "thing = TRUE"
```

### [](dsl-ashpostgres-datalayer.html#arguments)Arguments

NameTypeDefaultDocs[`fields`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-fields)`atom | String.t | list(atom | String.t)`The fields to include in the index.

### [](dsl-ashpostgres-datalayer.html#options-1)Options

NameTypeDefaultDocs[`error_fields`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-error_fields)`list(atom)`The fields to attach the error to.[`name`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-name)`String.t`the name of the index. Defaults to "#{table}\_#{column}\_index".[`unique`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-unique)`boolean``false`indicates whether the index should be unique.[`concurrently`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-concurrently)`boolean``false`indicates whether the index should be created/dropped concurrently.[`using`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-using)`String.t`configures the index type.[`prefix`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-prefix)`String.t`specify an optional prefix for the index.[`where`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-where)`String.t`specify conditions for a partial index.[`include`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-include)`list(String.t)`specify fields for a covering index. This is not supported by all databases. For more information on PostgreSQL support, please read the official docs.[`nulls_distinct`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-nulls_distinct)`boolean``true`specify whether null values should be considered distinct for a unique index. Requires PostgreSQL 15 or later[`message`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-message)`String.t`A custom message to use for unique indexes that have been violated[`all_tenants?`](dsl-ashpostgres-datalayer.html#postgres-custom_indexes-index-all_tenants?)`boolean``false`Whether or not the index should factor in the multitenancy attribute or not.

### [](dsl-ashpostgres-datalayer.html#introspection)Introspection

Target: [`AshPostgres.CustomIndex`](AshPostgres.CustomIndex.html)

## [](dsl-ashpostgres-datalayer.html#postgres-custom_statements)postgres.custom\_statements

A section for configuring custom statements to be added to migrations.

Changing custom statements may require manual intervention, because Ash can't determine what order they should run in (i.e if they depend on table structure that you've added, or vice versa). As such, any `down` statements we run for custom statements happen first, and any `up` statements happen last.

Additionally, when changing a custom statement, we must make some assumptions, i.e that we should migrate the old structure down using the previously configured `down` and recreate it.

This may not be desired, and so what you may end up doing is simply modifying the old migration and deleting whatever was generated by the migration generator. As always: read your migrations after generating them!

### [](dsl-ashpostgres-datalayer.html#nested-dsls-2)Nested DSLs

- [statement](dsl-ashpostgres-datalayer.html#postgres-custom_statements-statement)

### [](dsl-ashpostgres-datalayer.html#examples-3)Examples

```
custom_statements do
  # the name is used to detect if you remove or modify the statement
  statement :pgweb_idx do
    up "CREATE INDEX pgweb_idx ON pgweb USING GIN (to_tsvector('english', title || ' ' || body));"
    down "DROP INDEX pgweb_idx;"
  end
end
```

## [](dsl-ashpostgres-datalayer.html#postgres-custom_statements-statement)postgres.custom\_statements.statement

```
statement name
```

Add a custom statement for migrations.

### [](dsl-ashpostgres-datalayer.html#examples-4)Examples

```
statement :pgweb_idx do
  up "CREATE INDEX pgweb_idx ON pgweb USING GIN (to_tsvector('english', title || ' ' || body));"
  down "DROP INDEX pgweb_idx;"
end
```

### [](dsl-ashpostgres-datalayer.html#arguments-1)Arguments

NameTypeDefaultDocs[`name`](dsl-ashpostgres-datalayer.html#postgres-custom_statements-statement-name)`atom`The name of the statement, must be unique within the resource

### [](dsl-ashpostgres-datalayer.html#options-2)Options

NameTypeDefaultDocs[`up`](dsl-ashpostgres-datalayer.html#postgres-custom_statements-statement-up)`String.t`How to create the structure of the statement[`down`](dsl-ashpostgres-datalayer.html#postgres-custom_statements-statement-down)`String.t`How to tear down the structure of the statement[`code?`](dsl-ashpostgres-datalayer.html#postgres-custom_statements-statement-code?)`boolean``false`By default, we place the strings inside of ecto migration's `execute/1` function and assume they are sql. Use this option if you want to provide custom elixir code to be placed directly in the migrations

### [](dsl-ashpostgres-datalayer.html#introspection-1)Introspection

Target: [`AshPostgres.Statement`](AshPostgres.Statement.html)

## [](dsl-ashpostgres-datalayer.html#postgres-manage_tenant)postgres.manage\_tenant

Configuration for the behavior of a resource that manages a tenant

### [](dsl-ashpostgres-datalayer.html#examples-5)Examples

```
manage_tenant do
  template ["organization_", :id]
  create? true
  update? false
end
```

### [](dsl-ashpostgres-datalayer.html#options-3)Options

NameTypeDefaultDocs[`template`](dsl-ashpostgres-datalayer.html#postgres-manage_tenant-template)`String.t | atom | list(String.t | atom)`A template that will cause the resource to create/manage the specified schema.[`create?`](dsl-ashpostgres-datalayer.html#postgres-manage_tenant-create?)`boolean``true`Whether or not to automatically create a tenant when a record is created[`update?`](dsl-ashpostgres-datalayer.html#postgres-manage_tenant-update?)`boolean``true`Whether or not to automatically update the tenant name if the record is udpated

## [](dsl-ashpostgres-datalayer.html#postgres-references)postgres.references

A section for configuring the references (foreign keys) in resource migrations.

This section is only relevant if you are using the migration generator with this resource. Otherwise, it has no effect.

### [](dsl-ashpostgres-datalayer.html#nested-dsls-3)Nested DSLs

- [reference](dsl-ashpostgres-datalayer.html#postgres-references-reference)

### [](dsl-ashpostgres-datalayer.html#examples-6)Examples

```
references do
  reference :post, on_delete: :delete, on_update: :update, name: "comments_to_posts_fkey"
end
```

### [](dsl-ashpostgres-datalayer.html#options-4)Options

NameTypeDefaultDocs[`polymorphic_on_delete`](dsl-ashpostgres-datalayer.html#postgres-references-polymorphic_on_delete)`:delete | :nilify | :nothing | :restrict | {:nilify, atom | list(atom)}`For polymorphic resources, configures the on\_delete behavior of the automatically generated foreign keys to source tables.[`polymorphic_on_update`](dsl-ashpostgres-datalayer.html#postgres-references-polymorphic_on_update)`:update | :nilify | :nothing | :restrict`For polymorphic resources, configures the on\_update behavior of the automatically generated foreign keys to source tables.

## [](dsl-ashpostgres-datalayer.html#postgres-references-reference)postgres.references.reference

```
reference relationship
```

Configures the reference for a relationship in resource migrations.

Keep in mind that multiple relationships can theoretically involve the same destination and foreign keys. In those cases, you only need to configure the `reference` behavior for one of them. Any conflicts will result in an error, across this resource and any other resources that share a table with this one. For this reason, instead of adding a reference configuration for `:nothing`, its best to just leave the configuration out, as that is the default behavior if *no* relationship anywhere has configured the behavior of that reference.

### [](dsl-ashpostgres-datalayer.html#examples-7)Examples

```
reference :post, on_delete: :delete, on_update: :update, name: "comments_to_posts_fkey"
```

### [](dsl-ashpostgres-datalayer.html#arguments-2)Arguments

NameTypeDefaultDocs[`relationship`](dsl-ashpostgres-datalayer.html#postgres-references-reference-relationship)`atom`The relationship to be configured

### [](dsl-ashpostgres-datalayer.html#options-5)Options

NameTypeDefaultDocs[`ignore?`](dsl-ashpostgres-datalayer.html#postgres-references-reference-ignore?)`boolean`If set to true, no reference is created for the given relationship. This is useful if you need to define it in some custom way[`on_delete`](dsl-ashpostgres-datalayer.html#postgres-references-reference-on_delete)`:delete | :nilify | :nothing | :restrict | {:nilify, atom | list(atom)}`What should happen to records of this resource when the referenced record of the *destination* resource is deleted.[`on_update`](dsl-ashpostgres-datalayer.html#postgres-references-reference-on_update)`:update | :nilify | :nothing | :restrict`What should happen to records of this resource when the referenced destination\_attribute of the *destination* record is update.[`deferrable`](dsl-ashpostgres-datalayer.html#postgres-references-reference-deferrable)`false | true | :initially``false`Whether or not the constraint is deferrable. This only affects the migration generator.[`name`](dsl-ashpostgres-datalayer.html#postgres-references-reference-name)`String.t`The name of the foreign key to generate in the database. Defaults to &lt;table&gt;\_&lt;source\_attribute&gt;\_fkey[`match_with`](dsl-ashpostgres-datalayer.html#postgres-references-reference-match_with)`keyword`Defines additional keys to the foreign key in order to build a composite foreign key. The key should be the name of the source attribute (in the current resource), the value the name of the destination attribute.[`match_type`](dsl-ashpostgres-datalayer.html#postgres-references-reference-match_type)`:simple | :partial | :full`select if the match is `:simple`, `:partial`, or `:full`[`index?`](dsl-ashpostgres-datalayer.html#postgres-references-reference-index?)`boolean``false`Whether to create or not a corresponding index

### [](dsl-ashpostgres-datalayer.html#introspection-2)Introspection

Target: [`AshPostgres.Reference`](AshPostgres.Reference.html)

## [](dsl-ashpostgres-datalayer.html#postgres-check_constraints)postgres.check\_constraints

A section for configuring the check constraints for a given table.

This can be used to automatically create those check constraints, or just to provide message when they are raised

### [](dsl-ashpostgres-datalayer.html#nested-dsls-4)Nested DSLs

- [check\_constraint](dsl-ashpostgres-datalayer.html#postgres-check_constraints-check_constraint)

### [](dsl-ashpostgres-datalayer.html#examples-8)Examples

```
check_constraints do
  check_constraint :price, "price_must_be_positive", check: "price > 0", message: "price must be positive"
end
```

## [](dsl-ashpostgres-datalayer.html#postgres-check_constraints-check_constraint)postgres.check\_constraints.check\_constraint

```
check_constraint attribute, name
```

Add a check constraint to be validated.

If a check constraint exists on the table but not in this section, and it produces an error, a runtime error will be raised.

Provide a list of attributes instead of a single attribute to add the message to multiple attributes.

By adding the `check` option, the migration generator will include it when generating migrations.

### [](dsl-ashpostgres-datalayer.html#examples-9)Examples

```
check_constraint :price, "price_must_be_positive", check: "price > 0", message: "price must be positive"
```

### [](dsl-ashpostgres-datalayer.html#arguments-3)Arguments

NameTypeDefaultDocs[`attribute`](dsl-ashpostgres-datalayer.html#postgres-check_constraints-check_constraint-attribute)`any`The attribute or list of attributes to which an error will be added if the check constraint fails[`name`](dsl-ashpostgres-datalayer.html#postgres-check_constraints-check_constraint-name)`String.t`The name of the constraint

### [](dsl-ashpostgres-datalayer.html#options-6)Options

NameTypeDefaultDocs[`message`](dsl-ashpostgres-datalayer.html#postgres-check_constraints-check_constraint-message)`String.t`The message to be added if the check constraint fails[`check`](dsl-ashpostgres-datalayer.html#postgres-check_constraints-check_constraint-check)`String.t`The contents of the check. If this is set, the migration generator will include it when generating migrations

### [](dsl-ashpostgres-datalayer.html#introspection-3)Introspection

Target: [`AshPostgres.CheckConstraint`](AshPostgres.CheckConstraint.html)

[← Previous Page Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/dsls/DSL-AshPostgres.DataLayer.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ecto_migration_default.ex#L1 "View Source") EctoMigrationDefault protocol (ash\_postgres v2.5.0)

Allows configuring how values are translated to default values in migrations.

Still a work in progress, but covers most standard values aside from maps.

# [](EctoMigrationDefault.html#summary)Summary

## [Types](EctoMigrationDefault.html#types)

[t()](EctoMigrationDefault.html#t:t/0)

All the types that implement this protocol.

## [Functions](EctoMigrationDefault.html#functions)

[to\_default(value)](EctoMigrationDefault.html#to_default/1)

Returns the text (elixir code) that will be placed into a migration as the default value

# [](EctoMigrationDefault.html#types)Types

[](EctoMigrationDefault.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ecto_migration_default.ex#L1)

```
@type t() :: term()
```

All the types that implement this protocol.

# [](EctoMigrationDefault.html#functions)Functions

[](EctoMigrationDefault.html#to_default/1)

# to\_default(value)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/ecto_migration_default.ex#L9)

Returns the text (elixir code) that will be placed into a migration as the default value

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/topics/advanced/expressions.md#L1 "View Source") Expressions

In addition to the expressions listed in the [Ash expressions guide](../ash/expressions.html), AshPostgres provides the following expressions

# Fragments

Fragments allow you to use arbitrary postgres expressions in your queries. Fragments can often be an escape hatch to allow you to do things that don't have something officially supported with Ash.

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

### [](expressions.html#a-last-resort)a last resort

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

## [](expressions.html#like-and-ilike)Like and ILike

These wrap the postgres builtin like and ilike operators.

Please be aware, these match *patterns* not raw text. Use `contains/1` if you want to match text without supporting patterns, i.e `%` and `_` have semantic meaning!

For example:

```
Ash.Query.filter(User, like(name, "%obo%")) # name contains obo anywhere in the string, case sensitively
```

```
Ash.Query.filter(User, ilike(name, "%ObO%")) # name contains ObO anywhere in the string, case insensitively
```

## [](expressions.html#trigram-similarity)Trigram similarity

To use this expression, you must have the `pg_trgm` extension in your repos `installed_extensions` list.

This calls the `similarity` function from that extension. See more in the [pgtrgm guide](https://www.postgresql.org/docs/current/pgtrgm.html)

For example:

```
Ash.Query.filter(User, trigram_similarity(first_name, "fred") > 0.8)
```

[← Previous Page Upgrading to 2.0](upgrading-to-2-0.html)

[Next Page → Schema Based Multitenancy](schema-based-multitenancy.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/topics/advanced/expressions.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/tutorials/get-started-with-ash-postgres.md#L1 "View Source") Get Started With Postgres

## [](get-started-with-ash-postgres.html#installation)Installation

We recommend [reading up on postgresql](https://www.postgresql.org/docs/16/index.html) if you haven't.

- [Postgres must be installed](https://www.postgresql.org/download/) with a sufficiently permissive user

### [](get-started-with-ash-postgres.html#using-igniter-recommended)Using Igniter (recommended)

```
mix igniter.install ash_postgres
```

### [](get-started-with-ash-postgres.html#manually)Manually

#### Add AshPostgres

Add the `:ash_postgres` dependency to your application

`{:ash_postgres, "~> 2.0.0"}`

Add `:ash_postgres` to your `.formatter.exs` file

```
[
  # import the formatter rules from `:ash_postgres`
  import_deps: [..., :ash_postgres],
  inputs: [...]
]
```

#### Create and configure your Repo

Create `lib/helpdesk/repo.ex` with the following contents. [`AshPostgres.Repo`](AshPostgres.Repo.html) is a thin wrapper around [`Ecto.Repo`](../ecto/3.12.5/Ecto.Repo.html), so see their documentation for how to use it if you need to use it directly. For standard Ash usage, all you will need to do is configure your resources to use your repo.

```
# in lib/helpdesk/repo.ex

defmodule Helpdesk.Repo do
  use AshPostgres.Repo, otp_app: :helpdesk

  def installed_extensions do
    # Ash installs some functions that it needs to run the
    # first time you generate migrations.
    ["ash-functions"]
  end
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

# This should already have been added in the first
# getting started guide
config :helpdesk,
  ash_domains: [Helpdesk.Support]

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
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "helpdesk_dev",
  port: 5432,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10
```

```
# in config/runtime.exs

import Config

if config_env() == :prod do
  database_url =
    System.get_env("DATABASE_URL") ||
      raise """
      environment variable DATABASE_URL is missing.
      For example: ecto://USER:PASS@HOST/DATABASE
      """

  config :helpdesk, Helpdesk.Repo,
    url: database_url,
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
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "helpdesk_test#{System.get_env("MIX_TEST_PARTITION")}",
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

## [](get-started-with-ash-postgres.html#adding-ashpostgres-to-your-resources)Adding AshPostgres to your resources

### [](get-started-with-ash-postgres.html#with-igniter)With Igniter

You can add [`AshPostgres`](AshPostgres.html) to a resource with `mix ash.patch.extend Your.Resource.Name postgres`. For example:

```
mix ash.patch.extend Helpdesk.Support.Ticket postgres
mix ash.patch.extend Helpdesk.Support.Representative postgres
```

### [](get-started-with-ash-postgres.html#manually-1)Manually

The basic configuration for a resource requires the `AshPostgres.postgres.table` and the `AshPostgres.postgres.repo`.

```
# in lib/helpdesk/support/ticket.ex

  use Ash.Resource,
    domain: Helpdesk.Support,
    data_layer: AshPostgres.DataLayer

  postgres do
    table "tickets"
    repo Helpdesk.Repo
  end
```

```
# in lib/helpdesk/support/representative.ex

  use Ash.Resource,
    domain: Helpdesk.Support,
    data_layer: AshPostgres.DataLayer

  postgres do
    table "representatives"
    repo Helpdesk.Repo
  end
```

#### Create the database and tables

First, we'll create the database with [`mix ash.setup`](../ash/3.4.55/Mix.Tasks.Ash.Setup.html).

Then we will generate database migrations. This is one of the many ways that AshPostgres can save time and reduce complexity.

For example:

```
mix ash.codegen add_tickets_and_representatives
```

If you are unfamiliar with database migrations, it is a good idea to get a rough idea of what they are and how they work. See the links at the bottom of this guide for more. A rough overview of how migrations work is that each time you need to make changes to your database, they are saved as small, reproducible scripts that can be applied in order. This is necessary both for clean deploys as well as working with multiple developers making changes to the structure of a single database.

Typically, you need to write these by hand. AshPostgres, however, will store snapshots each time you run the command to generate migrations and will figure out what migrations need to be created.

You should always look at the generated migrations to ensure that they look correct. Do so now by looking at the generated file in `priv/repo/migrations`.

Finally, we will create the local database and apply the generated migrations:

```
mix ash.setup
```

### [](get-started-with-ash-postgres.html#try-it-out)Try it out

This is based on the [Get Started](../ash/get-started.html) guide. If you haven't already, you should read that first.

And now we're ready to try it out! Run the following in iex:

Lets create some data. We'll make a representative and give them some open and some closed tickets.

```
require Ash.Query

representative = (
  Helpdesk.Support.Representative
  |> Ash.Changeset.for_create(:create, %{name: "Joe Armstrong"})
  |> Ash.create!()
)

for i <- 0..5 do
  ticket =
    Helpdesk.Support.Ticket
    |> Ash.Changeset.for_create(:open, %{subject: "Issue #{i}"})
    |> Ash.create!()
    |> Ash.Changeset.for_update(:assign, %{representative_id: representative.id})
    |> Ash.update!()

  if rem(i, 2) == 0 do
    ticket
    |> Ash.Changeset.for_update(:close)
    |> Ash.update!()
  end
end
```

And now we can read that data. You should see some debug logs that show the sql queries AshPostgres is generating.

```
require Ash.Query

# Show the tickets where the subject contains "2"
Helpdesk.Support.Ticket
|> Ash.Query.filter(contains(subject, "2"))
|> Ash.read!()
```

```
require Ash.Query

# Show the tickets that are closed and their subject does not contain "4"
Helpdesk.Support.Ticket
|> Ash.Query.filter(status == :closed and not(contains(subject, "4")))
|> Ash.read!()
```

And, naturally, now that we are storing this in postgres, this database is persisted even if we stop/start our application. The nice thing, however, is that this was the *exact* same code that we ran against our resources when they were backed by ETS.

### [](get-started-with-ash-postgres.html#aggregates)Aggregates

Lets add some aggregates to our representatives resource. Aggregates are a tool to include grouped up data about relationships. You can read more about them in the [Aggregates guide](../ash/aggregates.html).

Here we will add an aggregate to easily query how many tickets are assigned to a representative, and how many of those tickets are open/closed.

```
# in lib/helpdesk/support/representative.ex

  aggregates do
    # The first argument here is the name of the aggregate
    # The second is the relationship
    count :total_tickets, :tickets

    count :open_tickets, :tickets do
      # Here we add a filter over the data that we are aggregating
      filter expr(status == :open)
    end

    count :closed_tickets, :tickets do
      filter expr(status == :closed)
    end
  end
```

Aggregates are powerful because they will be translated to SQL, and can be used in filters and sorts. For example:

```
# in iex

require Ash.Query

Helpdesk.Support.Representative
|> Ash.Query.filter(closed_tickets < 4)
|> Ash.Query.sort(closed_tickets: :desc)
|> Ash.read!()
```

You can also load individual aggregates on demand after queries have already been run, and minimal SQL will be issued to run the aggregate.

```
# in iex

require Ash.Query

representatives = Helpdesk.Support.read!(Helpdesk.Support.Representative)

Ash.load!(representatives, :open_tickets)
```

### [](get-started-with-ash-postgres.html#calculations)Calculations

Calculations can be pushed down into SQL in the same way. Calculations are similar to aggregates, except they work on individual records. They can, however, refer to aggregates on the resource, which opens up powerful possibilities with very simple code.

For example, we can determine the percentage of tickets that are open:

```
# in lib/helpdesk/support/representative.ex

  calculations do
    calculate :percent_open, :float, expr(open_tickets / total_tickets)
  end
```

Calculations can be loaded and used in the same way as aggregates.

```
require Ash.Query

Helpdesk.Support.Representative
|> Ash.Query.filter(percent_open > 0.25)
|> Ash.Query.sort(:percent_open)
|> Ash.Query.load(:percent_open)
|> Ash.read!()
```

### [](get-started-with-ash-postgres.html#rich-configuration-options)Rich Configuration Options

Take a look at the DSL documentation for more information on what you can configure. You can add check constraints, configure the behavior of foreign keys, use postgres schemas with Ash's [multitenancy](../ash/multitenancy.html) feature, and more!

### [](get-started-with-ash-postgres.html#what-next)What next?

- Check out the data layer docs: [`AshPostgres.DataLayer`](AshPostgres.DataLayer.html)
- [Ecto's documentation](https://hexdocs.pm/ecto/Ecto.html). AshPostgres (and much of Ash itself) is made possible by the amazing Ecto. If you find yourself looking for escape hatches when using Ash or ways to work directly with your database, you will want to know how Ecto works. Ash and AshPostgres intentionally do not hide Ecto, and in fact encourages its use whenever you need an escape hatch.
- [Postgres' documentation](https://www.postgresql.org/docs/). Although AshPostgres makes things a lot easier, you should understand the basics of postgres and SQL.
- [Ecto's Migration documentation](https://hexdocs.pm/ecto_sql/Ecto.Migration.html) read more about migrations. Even with the ash\_postgres migration generator, you will very likely need to modify your own migrations some day.

[← Previous Page Home](readme.html)

[Next Page → Setting AshPostgres up with an existing database](set-up-with-existing-database.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/tutorials/get-started-with-ash-postgres.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/topics/advanced/manual-relationships.md#L1 "View Source") Manual Relationships

See [Manual Relationships](../ash/relationships.html#manual-relationships) for an idea of manual relationships in general. Manual relationships allow for expressing complex/non-typical relationships between resources in a standard way. Individual data layers may interact with manual relationships in their own way, so see their corresponding guides.

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
  use AshPostgres.ManualRelationship

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
  def ash_postgres_join(query, _opts, current_binding, as_binding, :inner, destination_query) do
    {:ok,
     Ecto.Query.from(_ in query,
       join: dest in ^destination_query,
       as: ^as_binding,
       on: dest.representative_id == as(^current_binding).id,
       on: dest.priority > as(^current_binding).priority_threshold
     )}
  end

  def ash_postgres_join(query, _opts, current_binding, as_binding, :left, destination_query) do
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
  def ash_postgres_subquery(_opts, current_binding, as_binding, destination_query) do
    {:ok,
     Ecto.Query.from(_ in destination_query,
       where: parent_as(^current_binding).id == as(^as_binding).representative_id,
       where: as(^as_binding).priority > parent_as(^current_binding).priority_threshold
     )}
  end
end
```

## [](manual-relationships.html#recursive-relationships)Recursive Relationships

Manual relationships can be *very* powerful, as they can leverage the full power of Ecto to do arbitrarily complex things. Here is an example of a recursive relationship that loads all employees under the purview of a given manager using a recursive CTE.

### [](manual-relationships.html#use-ltree)Use ltree

While the below is very powerful, if at all possible we suggest using ltree for hierarchical data. Its built in to postgres and AshPostgres has built in support for it. For more, see: [`AshPostgres.Ltree`](AshPostgres.Ltree.html).

Keep in mind this is an example of a very advanced use case, *not* something you'd typically need to do.

```
defmodule MyApp.Employee.ManagedEmployees do
  @moduledoc """
  A manual relationship which uses a recursive CTE to find all employees managed by a given employee.
  """

  use Ash.Resource.ManualRelationship
  use AshPostgres.ManualRelationship
  alias MyApp.Employee
  alias MyApp.Repo
  import Ecto.Query

  @doc false
  @impl true
  @spec load([Employee.t()], keyword, map) ::
          {:ok, %{Ash.UUID.t() => [Employee.t()]}} | {:error, any}
  def load(employees, _opts, _context) do
    employee_ids = Enum.map(employees, & &1.id)

    all_descendants =
      Employee
      |> where([l], l.manager_id in ^employee_ids)
      |> recursive_cte_query("employee_tree", Employee)
      |> Repo.all()

    employees
    |> with_descendants(all_descendants)
    |> Map.new(&{&1.id, &1.descendants})
    |> then(&{:ok, &1})
  end

  defp with_descendants([], _), do: []

  defp with_descendants(employees, all_descendants) do
    Enum.map(employees, fn employee ->
      descendants = Map.get(all_descendants, employee.id, [])

      %{employee | descendants: with_descendants(descendants, all_descendants)}
    end)
  end

  @doc false
  @impl true
  @spec ash_postgres_join(
          Ecto.Query.t(),
          opts :: keyword,
          current_binding :: any,
          as_binding :: any,
          :inner | :left,
          Ecto.Query.t()
        ) ::
          {:ok, Ecto.Query.t()} | {:error, any}
  # Add a join from some binding in the query, producing *as_binding*.
  def ash_postgres_join(query, _opts, current_binding, as_binding, join_type, destination_query) do
    immediate_parents =
      from(destination in destination_query,
        where: parent_as(^current_binding).manager_id == destination.id
      )

    cte_name = "employees_#{as_binding}"

    descendant_query =
      recursive_cte_query_for_join(
        immediate_parents,
        cte_name,
        destination_query
      )

    case join_type do
      :inner ->
        {:ok,
         from(row in query,
           inner_lateral_join: descendant in subquery(descendant_query),
           on: true,
           as: ^as_binding
         )}

      :left ->
        {:ok,
         from(row in query,
           left_lateral_join: descendant in subquery(descendant_query),
           on: true,
           as: ^as_binding
         )}
    end
  end

  @impl true
  @spec ash_postgres_subquery(keyword, any, any, Ecto.Query.t()) ::
          {:ok, Ecto.Query.t()} | {:error, any}
  # Produce a subquery using which will use the given binding and will be
  def ash_postgres_subquery(_opts, current_binding, as_binding, destination_query) do
    immediate_descendants =
      from(destination in Employee,
        where: parent_as(^current_binding).id == destination.manager_id
      )

    cte_name = "employees_#{as_binding}"

    recursive_cte_query =
      recursive_cte_query_for_join(
        immediate_descendants,
        cte_name,
        Employee
      )

    other_query =
      from(row in subquery(recursive_cte_query),
        where:
          row.id in subquery(
            from(row in Ecto.Query.exclude(destination_query, :select), select: row.id)
          )
      )

    {:ok, other_query}
  end

  defp recursive_cte_query(immediate_parents, cte_name, query) do
    recursion_query =
      query
      |> join(:inner, [l], lt in ^cte_name, on: l.manager_id == lt.id)

    descendants_query =
      immediate_parents
      |> union(^recursion_query)

    {cte_name, Employee}
    |> recursive_ctes(true)
    |> with_cte(^cte_name, as: ^descendants_query)
  end

  defp recursive_cte_query_for_join(immediate_parents, cte_name, query) do
    # This is due to limitations in ecto's recursive CTE implementation
    # For more, see here:
    # https://elixirforum.com/t/ecto-cte-queries-without-a-prefix/33148/2
    # https://stackoverflow.com/questions/39458572/ecto-declare-schema-for-a-query
    employee_keys = Employee.__schema__(:fields)

    cte_name_ref =
      from(cte in fragment("?", literal(^cte_name)), select: map(cte, ^employee_keys))

    recursion_query =
      query
      |> join(:inner, [l], lt in ^cte_name_ref, on: l.manager_id == lt.id)

    descendants_query =
      immediate_parents
      |> union(^recursion_query)

    cte_name_ref
    |> recursive_ctes(true)
    |> with_cte(^cte_name, as: ^descendants_query)
  end
end
```

With the above definition, employees could have a relationship like this:

```
has_many :managed_employees, MyApp.Employee do
  manual MyApp.Employee.ManagedEmployees
end
```

And you could then use it in calculations and aggregates! For example, to see the count of employees managed by each employee:

```
aggregates do
  count :count_of_managed_employees, :managed_employees
end
```

[← Previous Page Schema Based Multitenancy](schema-based-multitenancy.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/topics/advanced/manual-relationships.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/topics/development/migrations-and-tasks.md#L1 "View Source") Migrations

## [](migrations-and-tasks.html#tasks)Tasks

Ash comes with its own tasks, and AshPostgres exposes lower level tasks that you can use if necessary. This guide shows the process using `ash.*` tasks, and the `ash_postgres.*` tasks are illustrated at the bottom.

## [](migrations-and-tasks.html#basic-workflow)Basic Workflow

- Make resource changes
- Run `mix ash.codegen --name add_a_combobulator` to generate migrations and resource snapshots
- Run [`mix ash.migrate`](../ash/3.4.55/Mix.Tasks.Ash.Migrate.html) to run those migrations

For more information on generating migrations, run [`mix help ash_postgres.generate_migrations`](Mix.Tasks.AshPostgres.GenerateMigrations.html) (the underlying task that is called by [`mix ash.migrate`](../ash/3.4.55/Mix.Tasks.Ash.Migrate.html))

### [](migrations-and-tasks.html#list_tenants-0)list\_tenants/0

If you have are using schema-based multitenancy, you will also need to define a `list_tenants/0` function in your repo module. See [`AshPostgres.Repo`](AshPostgres.Repo.html) for more.

### [](migrations-and-tasks.html#regenerating-migrations)Regenerating Migrations

Often, you will run into a situation where you want to make a slight change to a resource after you've already generated and run migrations. If you are using git and would like to undo those changes, then regenerate the migrations, this script may prove useful:

```
#!/bin/bash

# Get count of untracked migrations
N_MIGRATIONS=$(git ls-files --others priv/repo/migrations | wc -l)

# Rollback untracked migrations
mix ash_postgres.rollback -n $N_MIGRATIONS

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

## [](migrations-and-tasks.html#running-migrations-in-production)Running Migrations in Production

Define a module similar to the following:

```
defmodule MyApp.Release do
  @moduledoc """
Tasks that need to be executed in the released application (because mix is not present in releases).
  """
  @app :my_app
  def migrate do
    load_app()

    for repo <- repos() do
      {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :up, all: true))
    end
  end

  # only needed if you are using postgres multitenancy
  def migrate_tenants do
    load_app()

    for repo <- repos() do
      path = Ecto.Migrator.migrations_path(repo, "tenant_migrations")
      # This may be different for you if you are not using the default tenant migrations

      {:ok, _, _} =
        Ecto.Migrator.with_repo(
          repo,
          fn repo ->
            for tenant <- repo.all_tenants() do
              Ecto.Migrator.run(repo, path, :up, all: true, prefix: tenant)
            end
          end
        )
    end
  end

  # only needed if you are using postgres multitenancy
  def migrate_all do
    load_app()
    migrate()
    migrate_tenants()
  end

  def rollback(repo, version) do
    load_app()
    {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :down, to: version))
  end

  # only needed if you are using postgres multitenancy
  def rollback_tenants(repo, version) do
    load_app()

    path = Ecto.Migrator.migrations_path(repo, "tenant_migrations")
    # This may be different for you if you are not using the default tenant migrations

    for tenant <- repo.all_tenants() do
      {:ok, _, _} =
        Ecto.Migrator.with_repo(
          repo,
          &Ecto.Migrator.run(&1, path, :down,
            to: version,
            prefix: tenant
          )
        )
    end
  end

  defp repos do
    domains()
    |> Enum.flat_map(fn domain ->
      domain
      |> Ash.Domain.Info.resources()
      |> Enum.map(&AshPostgres.DataLayer.Info.repo/1)
      |> Enum.reject(&is_nil/1)
    end)
    |> Enum.uniq()
  end

  defp domains do
    Application.fetch_env!(@app, :ash_domains)
  end

  defp load_app do
    Application.load(@app)
  end
end
```

### [](migrations-and-tasks.html#ashpostgres-specific-mix-tasks)AshPostgres-specific mix tasks

- [`mix ash_postgres.generate_migrations`](Mix.Tasks.AshPostgres.GenerateMigrations.html)
- [`mix ash_postgres.create`](Mix.Tasks.AshPostgres.Create.html)
- [`mix ash_postgres.drop`](Mix.Tasks.AshPostgres.Drop.html)
- [`mix ash_postgres.migrate`](Mix.Tasks.AshPostgres.Migrate.html) (use `mix ash_postgres.migrate --tenants` to run tenant migrations)
- [`mix ash_postgres.rollback`](Mix.Tasks.AshPostgres.Rollback.html) (use `mix ash_postgres.rollback --tenants` to rollback tenant migrations)

[← Previous Page Polymorphic Resources](polymorphic-resources.html)

[Next Page → Testing with AshPostgres](testing.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/topics/development/migrations-and-tasks.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.create.ex#L1 "View Source") mix ash\_postgres.create (ash\_postgres v2.5.0)

Create the storage for repos in all resources for the given (or configured) domains.

## [](Mix.Tasks.AshPostgres.Create.html#module-examples)Examples

```
mix ash_postgres.create
mix ash_postgres.create --domains MyApp.Domain1,MyApp.Domain2
```

## [](Mix.Tasks.AshPostgres.Create.html#module-command-line-options)Command line options

- `--domains` - the domains who's repos you want to migrate.
- `--quiet` - do not log output
- `--no-compile` - do not compile before creating
- `--no-deps-check` - do not compile before creating

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.drop.ex#L1 "View Source") mix ash\_postgres.drop (ash\_postgres v2.5.0)

Drop the storage for the given repository.

## [](Mix.Tasks.AshPostgres.Drop.html#module-examples)Examples

```
mix ash_postgres.drop
mix ash_postgres.drop -r MyApp.Repo1,MyApp.Repo2
```

## [](Mix.Tasks.AshPostgres.Drop.html#module-command-line-options)Command line options

- `--domains` - the domains who's repos should be dropped
- `-q`, `--quiet` - run the command quietly
- `-f`, `--force` - do not ask for confirmation when dropping the database. Configuration is asked only when `:start_permanent` is set to true (typically in production)
- `--force-drop` - force the database to be dropped even if it has connections to it (requires PostgreSQL 13+)
- `--no-compile` - do not compile before dropping
- `--no-deps-check` - do not compile before dropping

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.generate_migrations.ex#L1 "View Source") mix ash\_postgres.generate\_migrations (ash\_postgres v2.5.0)

Generates migrations, and stores a snapshot of your resources.

Options:

- `domains` - a comma separated list of Domain modules, for which migrations will be generated
- `snapshot-path` - a custom path to store the snapshots, defaults to "priv/repo\_name/resource\_snapshots"
- `migration-path` - a custom path to store the migrations, defaults to "priv/repo\_name/migrations". Migrations are stored in a folder for each repo, so `priv/repo_name/migrations`
- `tenant-migration-path` - Same as `migration_path`, except for tenant-specific migrations
- `dont-drop-columns` - whether or not to drop columns as attributes are removed. See below for more
- `name` - names the generated migrations, prepending with the timestamp. The default is `migrate_resources_<n>`, where `<n>` is the count of migrations matching `*migrate_resources*` plus one. For example, `--name add_special_column` would get a name like `20210708181402_add_special_column.exs`

Flags:

- `quiet` - messages for file creations will not be printed
- `no-format` - files that are created will not be formatted with the code formatter
- `dry-run` - no files are created, instead the new migration is printed
- `check` - no files are created, returns an exit(1) code if the current snapshots and resources don't fit
- `snapshots-only` - no migrations are generated, only snapshots are stored

#### Snapshots

Snapshots are stored in a folder for each table that migrations are generated for. Each snapshot is stored in a file with a timestamp of when it was generated. This is important because it allows for simultaneous work to be done on separate branches, and for rolling back changes more easily, e.g removing a generated migration, and deleting the most recent snapshot, without having to redo all of it

#### Dropping columns

Generally speaking, it is bad practice to drop columns when you deploy a change that would remove an attribute. The main reasons for this are backwards compatibility and rolling restarts. If you deploy an attribute removal, and run migrations. Regardless of your deployment sstrategy, you won't be able to roll back, because the data has been deleted. In a rolling restart situation, some of the machines/pods/whatever may still be running after the column has been deleted, causing errors. With this in mind, its best not to delete those columns until later, after the data has been confirmed unnecessary. To that end, you can pass `--dont-drop-columns` to tell it to comment out those statements.

#### Conflicts/Multiple Resources

The migration generator can support multiple schemas using the same table. It will raise on conflicts that it can't resolve, like the same field with different types. It will prompt to resolve conflicts that can be resolved with human input. For example, if you remove an attribute and add an attribute, it will ask you if you are renaming the column in question. If not, it will remove one column and add the other.

Additionally, it lowers things to the database where possible:

#### Defaults

There are three anonymous functions that will translate to database-specific defaults currently:

- `&Ash.UUID.generate/0` - Only if `uuid-ossp` is in your `c:AshPostgres.Repo.installed_extensions()`
- `&Ecto.UUID.generate/0` - Only if `uuid-ossp` is in your `c:AshPostgres.Repo.installed_extensions()`
- `&DateTime.utc_now/0`

Non-function default values will be dumped to their native type and inspected. This may not work for some types, and may require manual intervention/patches to the migration generator code.

#### Identities

Identities will cause the migration generator to generate unique constraints. If multiple resources target the same table, you will be asked to select the primary key, and any others will be added as unique constraints.

# [](Mix.Tasks.AshPostgres.GenerateMigrations.html#summary)Summary

## [Functions](Mix.Tasks.AshPostgres.GenerateMigrations.html#functions)

[run(args)](Mix.Tasks.AshPostgres.GenerateMigrations.html#run/1)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

# [](Mix.Tasks.AshPostgres.GenerateMigrations.html#functions)Functions

[](Mix.Tasks.AshPostgres.GenerateMigrations.html#run/1)

# run(args)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.generate_migrations.ex#L73)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.gen.resources.ex#L2 "View Source") mix ash\_postgres.gen.resources (ash\_postgres v2.5.0)

Generates resources based on a database schema

## [](Mix.Tasks.AshPostgres.Gen.Resources.html#module-example)Example

`mix ash_postgres.gen.resource MyApp.MyDomain`

## [](Mix.Tasks.AshPostgres.Gen.Resources.html#module-domain)Domain

The domain will be generated if it does not exist. If you aren't sure, we suggest using something like `MyApp.App`.

## [](Mix.Tasks.AshPostgres.Gen.Resources.html#module-options)Options

- `repo`, `r` - The repo or repos to generate resources for, comma separated. Can be specified multiple times. Defaults to all repos.
- `tables`, `t` - Defaults to `public.*`. The tables to generate resources for, comma separated. Can be specified multiple times. See the section on tables for more.
- `skip-tables`, `s` - The tables to skip generating resources for, comma separated. Can be specified multiple times. See the section on tables for more.
- `snapshots-only` - Only generate snapshots for the generated resources, and not migraitons.
- `extend`, `e` - Extension or extensions to apply to the generated resources. See [`mix ash.patch.extend`](../ash/3.4.55/Mix.Tasks.Ash.Patch.Extend.html) for more.
- `yes`, `y` - Answer yes (or skip) to all questions.

## [](Mix.Tasks.AshPostgres.Gen.Resources.html#module-tables)Tables

When specifying tables to include with `--tables`, you can specify the table name, or the schema and table name separated by a period. For example, `users` will generate resources for the `users` table in the `public` schema, but `accounts.users` will generate resources for the `users` table in the `accounts` schema.

To include all tables in a given schema, add a period only with no table name, i.e `schema.`, i.e `accounts.`.

When skipping tables with `--skip-tables`, the same rules apply, except that the `schema.` format is not supported.

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.install.ex#L2 "View Source") mix ash\_postgres.install (ash\_postgres v2.5.0)

Installs AshPostgres. Should be run with `mix igniter.install ash_postgres`

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.migrate.ex#L1 "View Source") mix ash\_postgres.migrate (ash\_postgres v2.5.0)

Runs the pending migrations for the given repository.

Migrations are expected at "priv/YOUR\_REPO/migrations" directory of the current application (or `tenant_migrations` for multitenancy), where "YOUR\_REPO" is the last segment in your repository name. For example, the repository `MyApp.Repo` will use "priv/repo/migrations". The repository `Whatever.MyRepo` will use "priv/my\_repo/migrations".

This task runs all pending migrations by default. To migrate up to a specific version number, supply `--to version_number`. To migrate a specific number of times, use `--step n`.

If you have multiple repos and you want to run a single migration and/or migrate them to different points, you will need to use the ecto specific task, [`mix ecto.migrate`](../ecto_sql/3.12.1/Mix.Tasks.Ecto.Migrate.html) and provide your repo name.

If a repository has not yet been started, one will be started outside your application supervision tree and shutdown afterwards.

## [](Mix.Tasks.AshPostgres.Migrate.html#module-examples)Examples

```
mix ash_postgres.migrate
mix ash_postgres.migrate --domains MyApp.Domain1,MyApp.Domain2

mix ash_postgres.migrate -n 3
mix ash_postgres.migrate --step 3

mix ash_postgres.migrate --to 20080906120000
```

## [](Mix.Tasks.AshPostgres.Migrate.html#module-command-line-options)Command line options

- `--domains` - the domains who's repos should be migrated
- `--tenants` - Run the tenant migrations
- `--only-tenants` - in combo with `--tenants`, only runs migrations for the provided tenants, e.g `tenant1,tenant2,tenant3`
- `--except-tenants` - in combo with `--tenants`, does not run migrations for the provided tenants, e.g `tenant1,tenant2,tenant3`
- `--all` - run all pending migrations
- `--step`, `-n` - run n number of pending migrations
- `--to` - run all migrations up to and including version
- `--quiet` - do not log migration commands
- `--prefix` - the prefix to run migrations on. This is ignored if `--tenants` is provided.
- `--pool-size` - the pool size if the repository is started only for the task (defaults to 2)
- `--log-sql` - log the raw sql migrations are running
- `--strict-version-order` - abort when applying a migration with old timestamp
- `--no-compile` - does not compile applications before migrating
- `--no-deps-check` - does not check depedendencies before migrating
- `--migrations-path` - the path to load the migrations from, defaults to `"priv/repo/migrations"`. This option may be given multiple times in which case the migrations are loaded from all the given directories and sorted as if they were in the same one.
  
  Note, if you have migrations paths e.g. `a/` and `b/`, and run `mix ecto.migrate --migrations-path a/`, the latest migrations from `a/` will be run (even if `b/` contains the overall latest migrations.)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.rollback.ex#L1 "View Source") mix ash\_postgres.rollback (ash\_postgres v2.5.0)

Reverts applied migrations in the given repository. Migrations are expected at "priv/YOUR\_REPO/migrations" directory of the current application but it can be configured by specifying the `:priv` key under the repository configuration. Runs the latest applied migration by default. To roll back to a version number, supply `--to version_number`. To roll back a specific number of times, use `--step n`. To undo all applied migrations, provide `--all`.

This is only really useful if your domains only use a single repo. If you have multiple repos and you want to run a single migration and/or migrate/roll them back to different points, you will need to use the ecto specific task, [`mix ecto.migrate`](../ecto_sql/3.12.1/Mix.Tasks.Ecto.Migrate.html) and provide your repo name.

## [](Mix.Tasks.AshPostgres.Rollback.html#module-examples)Examples

```
mix ash_postgres.rollback
mix ash_postgres.rollback -r Custom.Repo
mix ash_postgres.rollback -n 3
mix ash_postgres.rollback --step 3
mix ash_postgres.rollback -v 20080906120000
mix ash_postgres.rollback --to 20080906120000
```

## [](Mix.Tasks.AshPostgres.Rollback.html#module-command-line-options)Command line options

- `--domains` - the domains who's repos should be rolledback
- `--all` - revert all applied migrations
- `--step` / `-n` - revert n number of applied migrations
- `--to` / `-v` - revert all migrations down to and including version
- `--quiet` - do not log migration commands
- `--prefix` - the prefix to run migrations on
- `--pool-size` - the pool size if the repository is started only for the task (defaults to 1)
- `--log-sql` - log the raw sql migrations are running
- `--tenants` - roll back tenant migrations
- `--only-tenants` - in combo with `--tenants`, only rolls back the provided tenants, e.g `tenant1,tenant2,tenant3`
- `--except-tenants` - in combo with `--tenants`, does not rollback the provided tenants, e.g `tenant1,tenant2,tenant3`

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.squash_snapshots.ex#L1 "View Source") mix ash\_postgres.squash\_snapshots (ash\_postgres v2.5.0)

Cleans snapshots folder, leaving only one snapshot per resource.

## [](Mix.Tasks.AshPostgres.SquashSnapshots.html#module-examples)Examples

```
mix ash_postgres.squash_snapshots
mix ash_postgres.squash_snapshots --check --quiet
mix ash_postgres.squash_snapshots --into zero
mix ash_postgres.squash_snapshots --dry-run
```

## [](Mix.Tasks.AshPostgres.SquashSnapshots.html#module-command-line-options)Command line options

- `--into` - `last`, `first` or `zero`. The default is `last`. Determines which name to use for a remaining snapshot. `last` keeps the name of the last snapshot, `first` renames it to the previously first, `zero` sets name with fourteen zeros.
- `--snapshot-path` - a custom path to stored snapshots. The default is "priv/resource\_snapshots".
- `--quiet` - no messages will not be printed.
- `--dry-run` - no files are touched, instead prints folders that have snapshots to squash.
- `--check` - no files are touched, instead returns an exit(1) code if there are snapshots to squash.

# [](Mix.Tasks.AshPostgres.SquashSnapshots.html#summary)Summary

## [Functions](Mix.Tasks.AshPostgres.SquashSnapshots.html#functions)

[run(args)](Mix.Tasks.AshPostgres.SquashSnapshots.html#run/1)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

# [](Mix.Tasks.AshPostgres.SquashSnapshots.html#functions)Functions

[](Mix.Tasks.AshPostgres.SquashSnapshots.html#run/1)

# run(args)

[](https://github.com/ash-project/ash_postgres/blob/v2.5.0/lib/mix/tasks/ash_postgres.squash_snapshots.ex#L36)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/topics/resources/polymorphic-resources.md#L1 "View Source") Polymorphic Resources

To support leveraging the same resource backed by multiple tables (useful for things like polymorphic associations), AshPostgres supports setting the `data_layer.table` context for a given resource. For this example, lets assume that you have a `MyApp.Post` resource and a `MyApp.Comment` resource. For each of those resources, users can submit `reactions`. However, you want a separate table for `post_reactions` and `comment_reactions`. You could accomplish that like so:

```
defmodule MyApp.Reaction do
  use Ash.Resource,
    domain: MyDomain,
    data_layer: AshPostgres.DataLayer

  postgres do
    polymorphic? true # Without this, `table` is a required configuration
  end

  attributes do
    attribute :resource_id, :uuid, public?: true
  end

  ...
end
```

Then, in your related resources, you set the table context like so:

```
defmodule MyApp.Post do
  use Ash.Resource,
    domain: MyDomain,
    data_layer: AshPostgres.DataLayer

  ...

  relationships do
    has_many :reactions, MyApp.Reaction,
      relationship_context: %{data_layer: %{table: "post_reactions"}},
      destination_attribute: :resource_id
  end
end

defmodule MyApp.Comment do
  use Ash.Resource,
    domain: MyDomain,
    data_layer: AshPostgres.DataLayer

  ...

  relationships do
    has_many :reactions, MyApp.Reaction,
      relationship_context: %{data_layer: %{table: "comment_reactions"}},
      destination_attribute: :resource_id
  end
end
```

With this, when loading or editing related data, ash will automatically set that context. For managing related data, see [`Ash.Changeset.manage_relationship/4`](../ash/3.4.55/Ash.Changeset.html#manage_relationship/4) and other relationship functions in [`Ash.Changeset`](../ash/3.4.55/Ash.Changeset.html)

## [](polymorphic-resources.html#table-specific-actions)Table specific actions

To make actions use a specific table, you can use the `set_context` query preparation/change.

For example:

```
defmodule MyApp.Reaction do
  # ...
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

When a migration is marked as `polymorphic? true`, the migration generator will look at all resources that are related to it, that set the `%{data_layer: %{table: "table"}}` context. For each of those, a migration is generated/managed automatically. This means that adding reactions to a new resource is as easy as adding the relationship and table context, and then running [`mix ash.codegen`](../ash/3.4.55/Mix.Tasks.Ash.Codegen.html).

[← Previous Page References](references.html)

[Next Page → Migrations](migrations-and-tasks.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/topics/resources/polymorphic-resources.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_postgres/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_postgres.svg)](https://hex.pm/packages/ash_postgres) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_postgres.html)

# AshPostgres

Welcome! [`AshPostgres`](AshPostgres.html) is the PostgreSQL data layer for [Ash Framework](../ash.html).

## [](readme.html#tutorials)Tutorials

- [Get Started](get-started-with-ash-postgres.html)

## [](readme.html#topics)Topics

- [What is AshPostgres?](what-is-ash-postgres.html)

### [](readme.html#resources)Resources

- [References](references.html)
- [Polymorphic Resources](polymorphic-resources.html)

### [](readme.html#development)Development

- [Migrations and tasks](migrations-and-tasks.html)
- [Testing](testing.html)
- [Upgrading to 2.0](upgrading-to-2-0.html)

### [](readme.html#advanced)Advanced

- [Expressions](expressions.html)
- [Manual Relationships](manual-relationships.html)
- [Schema Based Multitenancy](schema-based-multitenancy.html)

## [](readme.html#reference)Reference

- [AshPostgres.DataLayer DSL](dsl-ashpostgres-datalayer.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Get Started With Postgres](get-started-with-ash-postgres.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/README.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/topics/resources/references.md#L1 "View Source") References

To configure the behavior of generated foreign keys on a resource, we use the `references` section, within the `postgres` configuration block.

For example:

```
postgres do
  # other PostgreSQL config here

  references do
    reference :post, on_delete: :delete, on_update: :update, name: "comments_to_posts_fkey"
  end
end
```

### [](references.html#actions-are-not-used-for-this-behavior)Actions are not used for this behavior

No resource logic is applied with these operations! No authorization rules or validations take place, and no notifications are issued. This operation happens *directly* in the database.

## [](references.html#on-delete)On Delete

This option describes what to do if the referenced row is deleted.

The option is called `on_delete`, instead of `on_destroy`, because it is hooking into the database level deletion, *not* a `destroy` action in your resource. See the warning above.

The possible values for the option are `:nothing`, `:restrict`, `:delete`, `:nilify`, `{:nilify, columns}`.

With `:nothing` or `:restrict` the deletion of the referenced row is prevented.

With `:delete` the row is deleted together with the referenced row.

With `:nilify` all columns of the foreign-key constraint are nilified.

With `{:nilify, columns}` a column list can specify which columns should be set to `nil`. If you intend to use this option to nilify a subset of the columns, note that it cannot be used together with the `match: :full` option otherwise a mix of nil and non-nil values would fail the constraint and prevent the deletion of the referenced row. In addition, keep into consideration that this option is only supported from Postgres v15.0 onwards.

## [](references.html#on-update)On Update

This option describes what to do if the referenced row is updated.

The possible values for the option are `:nothing`, `:restrict`, `:update`, `:nilify`.

With `:nothing` or `:restrict` the update of the referenced row is prevented.

With `:update` the row is updated according to the referenced row.

With `:nilify` all columns of the foreign-key constraint are nilified.

## [](references.html#nothing-vs-restrict)Nothing vs Restrict

```
references do
  reference :post, on_delete: :nothing
  # vs
  reference :post, on_delete: :restrict
end
```

The difference between `:nothing` and `:restrict` is subtle and, if you are unsure, choose `:nothing` (the default behavior). `:restrict` will immediately check the foreign-key constraint and prevent the update or deletion from happening, whereas `:nothing` allows the check to be deferred until later in the transaction. This allows for things like updating or deleting the destination row and *then* updating updating or deleting the reference (as long as you are in a transaction). The reason that `:nothing` still ultimately prevents the update or deletion is because postgres enforces foreign key referential integrity.

[← Previous Page What is AshPostgres?](what-is-ash-postgres.html)

[Next Page → Polymorphic Resources](polymorphic-resources.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/topics/resources/references.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/topics/advanced/schema-based-multitenancy.md#L1 "View Source") Schema Based Multitenancy

Multitenancy in AshPostgres is implemented via postgres schemas. For more information on schemas, see postgres' [schema documentation](https://www.postgresql.org/docs/current/ddl-schemas.html)

Implementing multitenancy via schema's involves tracking "tenant migrations" separately from migrations for your public schema. You can see what this looks like by simply creating a multitenant resource, and using the migration generator [`mix ash.codegen`](../ash/3.4.55/Mix.Tasks.Ash.Codegen.html). It will put schema specific migrations in `priv/repo/tenant_migrations`. When you generate migrations, you'll want to be sure to audit migrations in both directories. Additionally, when you deploy, you'll want to run your migrations, as well as running them with the migrations path `priv/repo/tenant_migrations`.

## [](schema-based-multitenancy.html#generated-migrations)Generated migrations

The generated migrations include a lot of niceties around multitenancy. Specifically, foreign keys will point at tables in the correct schema, and foreign keys to non-multitenant resources will point to the correct table. If you are using attribute multitenancy, foreign keys to tables *also* using attribute multitenancy will be composite foreign keys, including the tenant attribute as well as the referencing field.

Migrations in the tenant directory will call `repo().all_tenants()`, which is a callback you will need to implement in your repo that should return a list of all schemas that need to be migrated.

## [](schema-based-multitenancy.html#automatically-managing-tenants)Automatically managing tenants

By setting the `template` configuration, in the `manage_tenant` section, you can cause the creation/updating of a given resource to create/rename tenants. For example:

```
defmodule MyApp.Organization do
  use Ash.Resource,
    ...

  postgres do
    ...

    manage_tenant do
      template ["org_", :id]
    end
  end
end
```

With this configuration, if you create an organization, it will create a corresponding schema, e.g. `org_10` in the database. Then it will run your tenant migrations on that schema. To override the tenant\_migrations path, implement the [`AshPostgres.Repo.tenant_migrations_path/0`](AshPostgres.Repo.html#c:tenant_migrations_path/0) callback.

Notice that `manage_tenant` is nested inside the `postgres` block. This is because the method of managing tenants is specific to postgres, and if another data layer supported multitenancy they may or may not support managing tenants in the same way.

[← Previous Page Expressions](expressions.html)

[Next Page → Manual Relationships](manual-relationships.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/topics/advanced/schema-based-multitenancy.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/tutorials/set-up-with-existing-database.md#L1 "View Source") Setting AshPostgres up with an existing database

If you already have a postgres database and you'd like to get started quickly, you can scaffold resources directly from your database.

First, create an application with AshPostgres if you haven't already:

```
mix igniter.new my_app
  --install ash,ash_postgres
  --with phx.new # add this if you will be using phoenix too
```

Then, go into your `config/dev.exs` and configure your repo to use your existing database.

Finally, run:

```
mix ash_postgres.gen.resources MyApp.MyDomain --tables table1,table2,table3
```

## [](set-up-with-existing-database.html#more-fine-grained-control)More fine grained control

You may want to do multiple passes to separate your application into multiple domains. For example:

```
mix ash_postgres.gen.resources MyApp.Accounts --tables users,roles,tokens
mix ash_postgres.gen.resources MyApp.Blog --tables posts,comments
```

See the docs for [`mix ash_postgres.gen.resources`](Mix.Tasks.AshPostgres.Gen.Resources.html) for more information.

[← Previous Page Get Started With Postgres](get-started-with-ash-postgres.html)

[Next Page → What is AshPostgres?](what-is-ash-postgres.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/tutorials/set-up-with-existing-database.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/topics/development/testing.md#L1 "View Source") Testing with AshPostgres

When using AshPostgres resources in tests, you will likely want to include use a test case similar to the following. This will ensure that your repo runs everything in a transaction.

```
defmodule MyApp.DataCase do
  @moduledoc """
  This module defines the setup for tests requiring
  access to the application's data layer.

  You may define functions here to be used as helpers in
  your tests.

  Finally, if the test case interacts with the database,
  we enable the SQL sandbox, so changes done to the database
  are reverted at the end of every test. If you are using
  PostgreSQL, you can even run database tests asynchronously
  by setting `use AshHq.DataCase, async: true`, although
  this option is not recommended for other databases.
  """

  use ExUnit.CaseTemplate

  using do
    quote do
      alias MyApp.Repo

      import Ecto
      import Ecto.Changeset
      import Ecto.Query
      import MyApp.DataCase
    end
  end

  setup tags do
    pid = Ecto.Adapters.SQL.Sandbox.start_owner!(MyApp.Repo, shared: not tags[:async])
    on_exit(fn -> Ecto.Adapters.SQL.Sandbox.stop_owner(pid) end)
    :ok
  end
end
```

This should be coupled with to make sure that Ash does not spawn any tasks.

```
config :ash, :disable_async?, true
```

[← Previous Page Migrations](migrations-and-tasks.html)

[Next Page → Upgrading to 2.0](upgrading-to-2-0.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/topics/development/testing.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_postgres](assets/logo.png)](https://ash-hq.org)

[ash\_postgres](https://ash-hq.org)

v2.5.0

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_postgres

Settings

# [View Source](https://github.com/ash-project/ash_postgres/blob/v2.5.0/documentation/topics/about-ash-postgres/what-is-ash-postgres.md#L1 "View Source") What is AshPostgres?

AshPostgres is the PostgreSQL [`Ash.DataLayer`](../ash/3.4.55/Ash.DataLayer.html) for [Ash Framework](../ash.html). This is the most fully-featured Ash data layer, and unless you need a specific characteristic or feature of another data layer, you should use [`AshPostgres`](AshPostgres.html).

### [](what-is-ash-postgres.html#what-versions-are-supported)What versions are supported?

Any version higher than 13 is fully supported. Versions lower than this can be made to work, but certain edge cases may need to be manually handled. This becomes more and more true the further back in versions that you go.

Use this to persist records in a PostgreSQL table or view. For example, the resource below would be persisted in a table called `tweets`:

```
defmodule MyApp.Tweet do
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer

  attributes do
    integer_primary_key :id
    attribute :text, :string
  end

  relationships do
    belongs_to :author, MyApp.User
  end

  postgres do
    table "tweets"
    repo MyApp.Repo
  end
end
```

The table might look like this:

idtextauthor\_id1"Hello, world!"1

Creating records would add to the table, destroying records would remove from the table, and updating records would update the table.

[← Previous Page Setting AshPostgres up with an existing database](set-up-with-existing-database.html)

[Next Page → References](references.html)

[Hex Package](https://hex.pm/packages/ash_postgres/2.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_postgres/2.5.0) ([current file](https://preview.hex.pm/preview/ash_postgres/2.5.0/show/documentation/topics/about-ash-postgres/what-is-ash-postgres.md)) Search HexDocs [Download ePub version](ash_postgres.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
