[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql "View Source") API Reference ash\_graphql v1.5.0

## [](api-reference.html#modules)Modules

[AshGraphql](AshGraphql.html)

AshGraphql is a GraphQL extension for the Ash framework.

[AshGraphql.ContextHelpers](AshGraphql.ContextHelpers.html)

Helper to extract context from its various locations

[AshGraphql.DefaultErrorHandler](AshGraphql.DefaultErrorHandler.html)

Replaces any text in message or short\_message with variables

[AshGraphql.Domain](AshGraphql.Domain.html)

The entrypoint for adding GraphQL behavior to an Ash domain

[AshGraphql.Domain.Info](AshGraphql.Domain.Info.html)

Introspection helpers for AshGraphql.Domain

[AshGraphql.Error](AshGraphql.Error.html)

[AshGraphql.Errors](AshGraphql.Errors.html)

Utilities for working with errors in custom resolvers.

[AshGraphql.Igniter](AshGraphql.Igniter.html)

Codemods and utilities for working with AshGraphql &amp; Igniter

[AshGraphql.Plug](AshGraphql.Plug.html)

Automatically set up the GraphQL `actor` and `tenant`.

[AshGraphql.Resource](AshGraphql.Resource.html)

This Ash resource extension adds configuration for exposing a resource in a graphql.

[AshGraphql.Resource.Action](AshGraphql.Resource.Action.html)

Represents a configured generic action

[AshGraphql.Resource.Helpers](AshGraphql.Resource.Helpers.html)

Imported helpers for the graphql DSL section

[AshGraphql.Resource.Info](AshGraphql.Resource.Info.html)

Introspection helpers for AshGraphql.Resource

[AshGraphql.Resource.ManagedRelationship](AshGraphql.Resource.ManagedRelationship.html)

Represents a managed relationship configuration on a mutation

[AshGraphql.Resource.Mutation](AshGraphql.Resource.Mutation.html)

Represents a configured mutation on a resource

[AshGraphql.Resource.Query](AshGraphql.Resource.Query.html)

Represents a configured query on a resource

[AshGraphql.Resource.Subscription](AshGraphql.Resource.Subscription.html)

Represents a configured query on a resource

[AshGraphql.Resource.Transformers.Subscription](AshGraphql.Resource.Transformers.Subscription.html)

Adds the notifier for Subscriptions to the Resource

[AshGraphql.Subscription](AshGraphql.Subscription.html)

Helpers for working with absinthe subscriptions

[AshGraphql.Subscription.Actor](AshGraphql.Subscription.Actor.html)

Allows the user to substitue an actor for another more generic actor, this can be used to deduplicate subscription execution

[AshGraphql.Subscription.Batcher](AshGraphql.Subscription.Batcher.html)

If started as a GenServer, this module will batch notifications and send them in bulk. Otherwise, it will send them immediately.

[AshGraphql.Subscription.Config](AshGraphql.Subscription.Config.html)

Creates a config function used for the absinthe subscription definition

[AshGraphql.Subscription.Endpoint](AshGraphql.Subscription.Endpoint.html)

[AshGraphql.Subscription.Notifier](AshGraphql.Subscription.Notifier.html)

AshNotifier that triggers absinthe if subscriptions are listening

[AshGraphql.Subscription.Runner](AshGraphql.Subscription.Runner.html)

Custom implementation if the run\_docset function for the PubSub module used for Subscriptions

[AshGraphql.Type](AshGraphql.Type.html)

Callbacks used to enrich types with GraphQL-specific metadata.

[AshGraphql.Types.JSON](AshGraphql.Types.JSON.html)

The Json scalar type allows arbitrary JSON values to be passed in and out.

[AshGraphql.Types.JSONString](AshGraphql.Types.JSONString.html)

The Json scalar type allows arbitrary JSON values to be passed in and out.

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_graphql.install](Mix.Tasks.AshGraphql.Install.html)

Installs AshGraphql. Should be run with `mix igniter.install ash_graphql`

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/context_helpers.ex#L1 "View Source") AshGraphql.ContextHelpers (ash\_graphql v1.5.0)

Helper to extract context from its various locations

# [](AshGraphql.ContextHelpers.html#summary)Summary

## [Functions](AshGraphql.ContextHelpers.html#functions)

[get\_context(context)](AshGraphql.ContextHelpers.html#get_context/1)

# [](AshGraphql.ContextHelpers.html#functions)Functions

[](AshGraphql.ContextHelpers.html#get_context/1)

# get\_context(context)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/context_helpers.ex#L4)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/default_error_handler.ex#L1 "View Source") AshGraphql.DefaultErrorHandler (ash\_graphql v1.5.0)

Replaces any text in message or short\_message with variables

# [](AshGraphql.DefaultErrorHandler.html#summary)Summary

## [Functions](AshGraphql.DefaultErrorHandler.html#functions)

[handle\_error(error, arg2)](AshGraphql.DefaultErrorHandler.html#handle_error/2)

[stringified\_value(value)](AshGraphql.DefaultErrorHandler.html#stringified_value/1)

# [](AshGraphql.DefaultErrorHandler.html#functions)Functions

[](AshGraphql.DefaultErrorHandler.html#handle_error/2)

# handle\_error(error, arg2)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/default_error_handler.ex#L4)

[](AshGraphql.DefaultErrorHandler.html#stringified_value/1)

# stringified\_value(value)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/default_error_handler.ex#L34)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/domain.ex#L1 "View Source") AshGraphql.Domain (ash\_graphql v1.5.0)

The entrypoint for adding GraphQL behavior to an Ash domain

# [](AshGraphql.Domain.html#summary)Summary

## [Functions](AshGraphql.Domain.html#functions)

[authorize?(domain)](AshGraphql.Domain.html#authorize?/1) deprecated

See [`AshGraphql.Domain.Info.authorize?/1`](AshGraphql.Domain.Info.html#authorize?/1).

[global\_type\_definitions(schema, env)](AshGraphql.Domain.html#global_type_definitions/2)

[graphql(body)](AshGraphql.Domain.html#graphql/1)

[install(igniter, module, arg, path, argv)](AshGraphql.Domain.html#install/5)

[root\_level\_errors?(domain)](AshGraphql.Domain.html#root_level_errors?/1) deprecated

See [`AshGraphql.Domain.Info.root_level_errors?/1`](AshGraphql.Domain.Info.html#root_level_errors?/1).

[show\_raised\_errors?(domain)](AshGraphql.Domain.html#show_raised_errors?/1) deprecated

See [`AshGraphql.Domain.Info.show_raised_errors?/1`](AshGraphql.Domain.Info.html#show_raised_errors?/1).

[subscriptions(domain, all\_domains, resources, action\_middleware, schema)](AshGraphql.Domain.html#subscriptions/5)

# [](AshGraphql.Domain.html#functions)Functions

[](AshGraphql.Domain.html#authorize?/1)

# authorize?(domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/domain.ex#L210)

This function is deprecated. See \`AshGraphql.Domain.Info.authorize?/1\`.

See [`AshGraphql.Domain.Info.authorize?/1`](AshGraphql.Domain.Info.html#authorize?/1).

[](AshGraphql.Domain.html#global_type_definitions/2)

# global\_type\_definitions(schema, env)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/domain.ex#L373)

[](AshGraphql.Domain.html#graphql/1)

# graphql(body)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/domain.ex#L147)(macro)

[](AshGraphql.Domain.html#install/5)

# install(igniter, module, arg, path, argv)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/domain.ex#L156)

[](AshGraphql.Domain.html#root_level_errors?/1)

# root\_level\_errors?(domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/domain.ex#L213)

This function is deprecated. See \`AshGraphql.Domain.Info.root\_level\_errors?/1\`.

See [`AshGraphql.Domain.Info.root_level_errors?/1`](AshGraphql.Domain.Info.html#root_level_errors?/1).

[](AshGraphql.Domain.html#show_raised_errors?/1)

# show\_raised\_errors?(domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/domain.ex#L216)

This function is deprecated. See \`AshGraphql.Domain.Info.show\_raised\_errors?/1\`.

See [`AshGraphql.Domain.Info.show_raised_errors?/1`](AshGraphql.Domain.Info.html#show_raised_errors?/1).

[](AshGraphql.Domain.html#subscriptions/5)

# subscriptions(domain, all\_domains, resources, action\_middleware, schema)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/domain.ex#L251)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L1 "View Source") AshGraphql.Domain.Info (ash\_graphql v1.5.0)

Introspection helpers for AshGraphql.Domain

# [](AshGraphql.Domain.Info.html#summary)Summary

## [Functions](AshGraphql.Domain.Info.html#functions)

[authorize?(domain)](AshGraphql.Domain.Info.html#authorize?/1)

Whether or not to run authorization on this domain

[error\_handler(domain)](AshGraphql.Domain.Info.html#error_handler/1)

An error handler for errors produced by the domain

[mutations(resource)](AshGraphql.Domain.Info.html#mutations/1)

The mutations exposed by the domain

[queries(resource)](AshGraphql.Domain.Info.html#queries/1)

The queries exposed by the domain

[root\_level\_errors?(domain)](AshGraphql.Domain.Info.html#root_level_errors?/1)

Whether or not to surface errors to the root of the response

[show\_raised\_errors?(domain)](AshGraphql.Domain.Info.html#show_raised_errors?/1)

Whether or not to render raised errors in the GraphQL response

[subscriptions(resource)](AshGraphql.Domain.Info.html#subscriptions/1)

[tracer(domain)](AshGraphql.Domain.Info.html#tracer/1)

The tracer to use for the given schema

# [](AshGraphql.Domain.Info.html#functions)Functions

[](AshGraphql.Domain.Info.html#authorize?/1)

# authorize?(domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L7)

Whether or not to run authorization on this domain

[](AshGraphql.Domain.Info.html#error_handler/1)

# error\_handler(domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L25)

An error handler for errors produced by the domain

[](AshGraphql.Domain.Info.html#mutations/1)

# mutations(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L41)

The mutations exposed by the domain

[](AshGraphql.Domain.Info.html#queries/1)

# queries(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L36)

The queries exposed by the domain

[](AshGraphql.Domain.Info.html#root_level_errors?/1)

# root\_level\_errors?(domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L20)

Whether or not to surface errors to the root of the response

[](AshGraphql.Domain.Info.html#show_raised_errors?/1)

# show\_raised\_errors?(domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L50)

Whether or not to render raised errors in the GraphQL response

[](AshGraphql.Domain.Info.html#subscriptions/1)

# subscriptions(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L45)

[](AshGraphql.Domain.Info.html#tracer/1)

# tracer(domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/domain/info.ex#L12)

The tracer to use for the given schema

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/error.ex#L1 "View Source") AshGraphql.Error protocol (ash\_graphql v1.5.0)

# [](AshGraphql.Error.html#summary)Summary

## [Types](AshGraphql.Error.html#types)

[t()](AshGraphql.Error.html#t:t/0)

All the types that implement this protocol.

## [Functions](AshGraphql.Error.html#functions)

[to\_error(exception)](AshGraphql.Error.html#to_error/1)

# [](AshGraphql.Error.html#types)Types

[](AshGraphql.Error.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/error.ex#L1)

```
@type t() :: term()
```

All the types that implement this protocol.

# [](AshGraphql.Error.html#functions)Functions

[](AshGraphql.Error.html#to_error/1)

# to\_error(exception)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/error.ex#L2)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/graphql/errors.ex#L1 "View Source") AshGraphql.Errors (ash\_graphql v1.5.0)

Utilities for working with errors in custom resolvers.

# [](AshGraphql.Errors.html#summary)Summary

## [Functions](AshGraphql.Errors.html#functions)

[to\_errors(errors, context, domain, resource, action)](AshGraphql.Errors.html#to_errors/5)

Transform an error or list of errors into the response for graphql.

# [](AshGraphql.Errors.html#functions)Functions

[](AshGraphql.Errors.html#to_errors/5)

# to\_errors(errors, context, domain, resource, action)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/graphql/errors.ex#L10)

Transform an error or list of errors into the response for graphql.

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/ash_graphql.ex#L1 "View Source") AshGraphql (ash\_graphql v1.5.0)

AshGraphql is a GraphQL extension for the Ash framework.

For more information, see the [getting started guide](getting-started-with-graphql.html)

# [](AshGraphql.html#summary)Summary

## [Functions](AshGraphql.html#functions)

[handle\_errors(result, resource, resolution, opts \\\\ \[\])](AshGraphql.html#handle_errors/4)

Applies AshGraphql's error handling logic if the value is an `{:error, error}` tuple, otherwise returns the value

[load\_fields(data, resource, resolution, opts \\\\ \[\])](AshGraphql.html#load_fields/4)

Use this to load any requested fields for a result when it is returned from a custom resolver or mutation.

[load\_fields\_on\_query(query, resolution, opts \\\\ \[\])](AshGraphql.html#load_fields_on_query/3)

The same as [`load_fields/4`](AshGraphql.html#load_fields/4), but modifies the provided query to load the required fields.

[subscription(list)](AshGraphql.html#subscription/1)

# [](AshGraphql.html#functions)Functions

[](AshGraphql.html#handle_errors/4)

# handle\_errors(result, resource, resolution, opts \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/ash_graphql.ex#L722)

```
@spec handle_errors(
  result :: term(),
  resource :: Ash.Resource.t(),
  resolution :: Absinthe.Resolution.t(),
  opts :: Keyword.t()
) :: term()
```

Applies AshGraphql's error handling logic if the value is an `{:error, error}` tuple, otherwise returns the value

Useful for automatically handling errors in custom queries

## [](AshGraphql.html#handle_errors/4-options)Options

- `domain`: The domain to use when loading the fields. Determined from the resource by default.

[](AshGraphql.html#load_fields/4)

# load\_fields(data, resource, resolution, opts \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/ash_graphql.ex#L651)

```
@spec load_fields(
  input,
  Ash.Resource.t(),
  Absinthe.Resolution.t(),
  opts :: Keyword.t()
) ::
  {:ok, input} | {:error, term()}
when input: Ash.Resource.record() | [Ash.Resource.record()] | Ash.Page.page()
```

Use this to load any requested fields for a result when it is returned from a custom resolver or mutation.

## [](AshGraphql.html#load_fields/4-determining-required-fields)Determining required fields

If you have a custom query/mutation that returns the record at a "path" in the response, then specify the path. In the example below, `path` would be `["record"]`. This is how we know what fields to load.

```
query something() {
  result {
    record { # <- this is the instance
      id
      name
    }
  }
}
```

## [](AshGraphql.html#load_fields/4-options)Options

- `path`: The path to the record(s) in the response
- `domain`: The domain to use when loading the fields. Determined from the resource by default.
- `authorize?`: Whether to authorize access to fields. Defaults to the domain's setting (which defaults to `true`).
- `actor`: The actor to use when authorizing access to fields. Defaults to the actor in the resolution context.
- `tenant`: The tenant to use when authorizing access to fields. Defaults to the tenant in the resolution context.

[](AshGraphql.html#load_fields_on_query/3)

# load\_fields\_on\_query(query, resolution, opts \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/ash_graphql.ex#L666)

```
@spec load_fields_on_query(
  query :: Ash.Query.t() | Ash.Resource.t(),
  Absinthe.Resolution.t(),
  Keyword.t()
) :: Ash.Query.t()
```

The same as [`load_fields/4`](AshGraphql.html#load_fields/4), but modifies the provided query to load the required fields.

This allows doing the loading in a single query rather than two separate queries.

[](AshGraphql.html#subscription/1)

# subscription(list)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/ash_graphql.ex#L35)(macro)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/igniter.ex#L2 "View Source") AshGraphql.Igniter (ash\_graphql v1.5.0)

Codemods and utilities for working with AshGraphql &amp; Igniter

# [](AshGraphql.Igniter.html#summary)Summary

## [Functions](AshGraphql.Igniter.html#functions)

[ash\_graphql\_schemas(igniter)](AshGraphql.Igniter.html#ash_graphql_schemas/1)

Returns all modules that `use AshGraphql`

[find\_schema(igniter, domain)](AshGraphql.Igniter.html#find_schema/2)

Returns the AshGraphql schema containing the domain in question, or a list of all AshGraphql schemas

[setup\_absinthe\_schema(igniter, schema\_name \\\\ nil)](AshGraphql.Igniter.html#setup_absinthe_schema/2)

Sets up an absinthe schema for AshGraphql

[setup\_phoenix(igniter, schema\_name \\\\ nil)](AshGraphql.Igniter.html#setup_phoenix/2)

Sets up the phoenix module for AshGraphql

# [](AshGraphql.Igniter.html#functions)Functions

[](AshGraphql.Igniter.html#ash_graphql_schemas/1)

# ash\_graphql\_schemas(igniter)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/igniter.ex#L187)

Returns all modules that `use AshGraphql`

[](AshGraphql.Igniter.html#find_schema/2)

# find\_schema(igniter, domain)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/igniter.ex#L6)

Returns the AshGraphql schema containing the domain in question, or a list of all AshGraphql schemas

[](AshGraphql.Igniter.html#setup_absinthe_schema/2)

# setup\_absinthe\_schema(igniter, schema\_name \\\\ nil)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/igniter.ex#L37)

Sets up an absinthe schema for AshGraphql

[](AshGraphql.Igniter.html#setup_phoenix/2)

# setup\_phoenix(igniter, schema\_name \\\\ nil)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/igniter.ex#L150)

Sets up the phoenix module for AshGraphql

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/plug.ex#L1 "View Source") AshGraphql.Plug (ash\_graphql v1.5.0)

Automatically set up the GraphQL `actor` and `tenant`.

Adding this plug to your pipeline will automatically set the `actor` and `tenant` if they were previously put there by [`Ash.PlugHelpers.set_actor/2`](../ash/3.4.50/Ash.PlugHelpers.html#set_actor/2) or [`Ash.PlugHelpers.set_tenant/2`](../ash/3.4.50/Ash.PlugHelpers.html#set_tenant/2).

# [](AshGraphql.Plug.html#summary)Summary

## [Functions](AshGraphql.Plug.html#functions)

[call(conn, opts)](AshGraphql.Plug.html#call/2)

Callback implementation for [`Plug.call/2`](../plug/1.16.1/Plug.html#c:call/2).

[init(opts)](AshGraphql.Plug.html#init/1)

Callback implementation for [`Plug.init/1`](../plug/1.16.1/Plug.html#c:init/1).

# [](AshGraphql.Plug.html#functions)Functions

[](AshGraphql.Plug.html#call/2)

# call(conn, opts)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/plug.ex#L16)

Callback implementation for [`Plug.call/2`](../plug/1.16.1/Plug.html#c:call/2).

[](AshGraphql.Plug.html#init/1)

# init(opts)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/plug.ex#L14)

Callback implementation for [`Plug.init/1`](../plug/1.16.1/Plug.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L92 "View Source") AshGraphql.Resource.Action (ash\_graphql v1.5.0)

Represents a configured generic action

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/helpers.ex#L1 "View Source") AshGraphql.Resource.Helpers (ash\_graphql v1.5.0)

Imported helpers for the graphql DSL section

# [](AshGraphql.Resource.Helpers.html#summary)Summary

## [Functions](AshGraphql.Resource.Helpers.html#functions)

[list\_of(value)](AshGraphql.Resource.Helpers.html#list_of/1)

A list of a given type, idiomatic for those used to `absinthe` notation.

[non\_null(value)](AshGraphql.Resource.Helpers.html#non_null/1)

A non nullable type, idiomatic for those used to `absinthe` notation.

# [](AshGraphql.Resource.Helpers.html#functions)Functions

[](AshGraphql.Resource.Helpers.html#list_of/1)

# list\_of(value)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/helpers.ex#L8)

```
@spec list_of(v) :: {:array, v} when v: term()
```

A list of a given type, idiomatic for those used to `absinthe` notation.

[](AshGraphql.Resource.Helpers.html#non_null/1)

# non\_null(value)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/helpers.ex#L16)

```
@spec non_null(v) :: {:non_null, v} when v: term()
```

A non nullable type, idiomatic for those used to `absinthe` notation.

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L1 "View Source") AshGraphql.Resource (ash\_graphql v1.5.0)

This Ash resource extension adds configuration for exposing a resource in a graphql.

# [](AshGraphql.Resource.html#summary)Summary

## [Functions](AshGraphql.Resource.html#functions)

[codegen(argv)](AshGraphql.Resource.html#codegen/1)

[decode\_id(resource, id, relay\_ids?)](AshGraphql.Resource.html#decode_id/3)

[decode\_primary\_key(resource, value)](AshGraphql.Resource.html#decode_primary_key/2)

[decode\_relay\_id(id)](AshGraphql.Resource.html#decode_relay_id/1)

[define\_type?(type, constraints)](AshGraphql.Resource.html#define_type?/2)

[embedded?(resource\_or\_type)](AshGraphql.Resource.html#embedded?/1)

[encode\_id(record, relay\_ids?)](AshGraphql.Resource.html#encode_id/2)

[encode\_primary\_key(record)](AshGraphql.Resource.html#encode_primary_key/1)

[encode\_relay\_id(record)](AshGraphql.Resource.html#encode_relay_id/1)

[enum\_definitions(resource, schema, env)](AshGraphql.Resource.html#enum_definitions/3)

[generate\_object?(resource)](AshGraphql.Resource.html#generate_object?/1) deprecated

See [`AshGraphql.Resource.Info.generate_object?/1`](AshGraphql.Resource.Info.html#generate_object?/1).

[graphql(body)](AshGraphql.Resource.html#graphql/1)

[install(igniter, module, arg, path, argv)](AshGraphql.Resource.html#install/5)

[managed\_relationship\_definitions(used, schema)](AshGraphql.Resource.html#managed_relationship_definitions/2)

[managed\_relationships(resource)](AshGraphql.Resource.html#managed_relationships/1) deprecated

See [`AshGraphql.Resource.Info.managed_relationships/1`](AshGraphql.Resource.Info.html#managed_relationships/1).

[map\_definitions(resource, all\_domains, schema, env)](AshGraphql.Resource.html#map_definitions/4)

[mutations()](AshGraphql.Resource.html#mutations/0)

[mutations(resource, domain \\\\ \[\])](AshGraphql.Resource.html#mutations/2) deprecated

See [`AshGraphql.Resource.Info.mutations/2`](AshGraphql.Resource.Info.html#mutations/2).

[no\_graphql\_types(resource, schema)](AshGraphql.Resource.html#no_graphql_types/2)

[node\_type?(type)](AshGraphql.Resource.html#node_type?/1)

[primary\_key\_delimiter(resource)](AshGraphql.Resource.html#primary_key_delimiter/1) deprecated

See [`AshGraphql.Resource.Info.primary_key_delimiter/1`](AshGraphql.Resource.Info.html#primary_key_delimiter/1).

[primary\_key\_get\_query(resource, all\_domains)](AshGraphql.Resource.html#primary_key_get_query/2)

[queries()](AshGraphql.Resource.html#queries/0)

[queries(resource, domain \\\\ \[\])](AshGraphql.Resource.html#queries/2) deprecated

See [`AshGraphql.Resource.Info.queries/2`](AshGraphql.Resource.Info.html#queries/2).

[query\_type\_definitions(resource, domain, all\_domains, schema, relay\_ids?)](AshGraphql.Resource.html#query_type_definitions/5)

[ref(env)](AshGraphql.Resource.html#ref/1)

[subscriptions()](AshGraphql.Resource.html#subscriptions/0)

[subscriptions(resource, domain \\\\ \[\])](AshGraphql.Resource.html#subscriptions/2) deprecated

See [`AshGraphql.Resource.Info.subscriptions/2`](AshGraphql.Resource.Info.html#subscriptions/2).

[type(resource)](AshGraphql.Resource.html#type/1) deprecated

See [`AshGraphql.Resource.Info.type/1`](AshGraphql.Resource.Info.html#type/1).

[type\_definition(resource, domain, all\_domains, schema, relay\_ids?)](AshGraphql.Resource.html#type_definition/5)

# [](AshGraphql.Resource.html#functions)Functions

[](AshGraphql.Resource.html#codegen/1)

# codegen(argv)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L526)

[](AshGraphql.Resource.html#decode_id/3)

# decode\_id(resource, id, relay\_ids?)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L599)

[](AshGraphql.Resource.html#decode_primary_key/2)

# decode\_primary\_key(resource, value)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L615)

[](AshGraphql.Resource.html#decode_relay_id/1)

# decode\_relay\_id(id)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L632)

[](AshGraphql.Resource.html#define_type?/2)

# define\_type?(type, constraints)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L3683)

```
@spec define_type?(Ash.Type.t(), Ash.Type.constraints()) :: boolean()
```

[](AshGraphql.Resource.html#embedded?/1)

# embedded?(resource\_or\_type)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L4751)

[](AshGraphql.Resource.html#encode_id/2)

# encode\_id(record, relay\_ids?)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L566)

[](AshGraphql.Resource.html#encode_primary_key/1)

# encode\_primary\_key(record)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L574)

[](AshGraphql.Resource.html#encode_relay_id/1)

# encode\_relay\_id(record)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L591)

[](AshGraphql.Resource.html#enum_definitions/3)

# enum\_definitions(resource, schema, env)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L3513)

[](AshGraphql.Resource.html#generate_object?/1)

# generate\_object?(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L520)

This function is deprecated. See \`AshGraphql.Resource.Info.generate\_object?/1\`.

See [`AshGraphql.Resource.Info.generate_object?/1`](AshGraphql.Resource.Info.html#generate_object?/1).

[](AshGraphql.Resource.html#graphql/1)

# graphql(body)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L499)(macro)

[](AshGraphql.Resource.html#install/5)

# install(igniter, module, arg, path, argv)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L538)

[](AshGraphql.Resource.html#managed_relationship_definitions/2)

# managed\_relationship\_definitions(used, schema)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L2144)

[](AshGraphql.Resource.html#managed_relationships/1)

# managed\_relationships(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L511)

This function is deprecated. See \`AshGraphql.Resource.Info.managed\_relationships/1\`.

See [`AshGraphql.Resource.Info.managed_relationships/1`](AshGraphql.Resource.Info.html#managed_relationships/1).

[](AshGraphql.Resource.html#map_definitions/4)

# map\_definitions(resource, all\_domains, schema, env)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L3255)

[](AshGraphql.Resource.html#mutations/0)

# mutations()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L287)

[](AshGraphql.Resource.html#mutations/2)

# mutations(resource, domain \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L505)

This function is deprecated. See \`AshGraphql.Resource.Info.mutations/1\`.

See [`AshGraphql.Resource.Info.mutations/2`](AshGraphql.Resource.Info.html#mutations/2).

[](AshGraphql.Resource.html#no_graphql_types/2)

# no\_graphql\_types(resource, schema)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L2140)

[](AshGraphql.Resource.html#node_type?/1)

# node\_type?(type)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L3917)

[](AshGraphql.Resource.html#primary_key_delimiter/1)

# primary\_key\_delimiter(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L517)

This function is deprecated. See \`AshGraphql.Resource.Info.primary\_key\_delimiter/1\`.

See [`AshGraphql.Resource.Info.primary_key_delimiter/1`](AshGraphql.Resource.Info.html#primary_key_delimiter/1).

[](AshGraphql.Resource.html#primary_key_get_query/2)

# primary\_key\_get\_query(resource, all\_domains)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L4744)

[](AshGraphql.Resource.html#queries/0)

# queries()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L185)

[](AshGraphql.Resource.html#queries/2)

# queries(resource, domain \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L502)

This function is deprecated. See \`AshGraphql.Resource.Info.queries/1\`.

See [`AshGraphql.Resource.Info.queries/2`](AshGraphql.Resource.Info.html#queries/2).

[](AshGraphql.Resource.html#query_type_definitions/5)

# query\_type\_definitions(resource, domain, all\_domains, schema, relay\_ids?)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L3921)

[](AshGraphql.Resource.html#ref/1)

# ref(env)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L522)

[](AshGraphql.Resource.html#subscriptions/0)

# subscriptions()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L331)

[](AshGraphql.Resource.html#subscriptions/2)

# subscriptions(resource, domain \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L508)

This function is deprecated. See \`AshGraphql.Resource.Info.mutations/1\`.

See [`AshGraphql.Resource.Info.subscriptions/2`](AshGraphql.Resource.Info.html#subscriptions/2).

[](AshGraphql.Resource.html#type/1)

# type(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L514)

This function is deprecated. See \`AshGraphql.Resource.Info.type/1\`.

See [`AshGraphql.Resource.Info.type/1`](AshGraphql.Resource.Info.html#type/1).

[](AshGraphql.Resource.html#type_definition/5)

# type\_definition(resource, domain, all\_domains, schema, relay\_ids?)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/resource.ex#L3951)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L1 "View Source") AshGraphql.Resource.Info (ash\_graphql v1.5.0)

Introspection helpers for AshGraphql.Resource

# [](AshGraphql.Resource.Info.html#summary)Summary

## [Functions](AshGraphql.Resource.Info.html#functions)

[argument\_input\_types(resource)](AshGraphql.Resource.Info.html#argument_input_types/1)

Graphql argument type overrides for the resource

[argument\_names(resource)](AshGraphql.Resource.Info.html#argument_names/1)

Graphql argument name overrides for the resource

[attribute\_input\_types(resource)](AshGraphql.Resource.Info.html#attribute_input_types/1)

Graphql attribute input type overrides for the resource

[attribute\_types(resource)](AshGraphql.Resource.Info.html#attribute_types/1)

Graphql type overrides for the resource

[derive\_filter?(resource)](AshGraphql.Resource.Info.html#derive_filter?/1)

Wether or not to derive a filter input for the resource automatically

[derive\_sort?(resource)](AshGraphql.Resource.Info.html#derive_sort?/1)

Wether or not to derive a sort input for the resource automatically

[encode\_primary\_key?(resource)](AshGraphql.Resource.Info.html#encode_primary_key?/1)

Wether or not to encode the primary key as a single `id` field when reading and getting

[error\_handler(resource)](AshGraphql.Resource.Info.html#error_handler/1)

An error handler for errors produced by the resource

[field\_names(resource)](AshGraphql.Resource.Info.html#field_names/1)

Graphql field name (attribute/relationship/calculation/arguments) overrides for the resource

[filterable\_field?(resource, field\_name)](AshGraphql.Resource.Info.html#filterable_field?/2)

May the specified field be filtered on?

[filterable\_fields(resource)](AshGraphql.Resource.Info.html#filterable_fields/1)

Fields that may be filtered on

[generate\_object?(resource)](AshGraphql.Resource.Info.html#generate_object?/1)

Wether or not an object should be generated, or if one with the type name for this resource should be used.

[hide\_fields(resource)](AshGraphql.Resource.Info.html#hide_fields/1)

Fields to hide from the graphql domain

[keyset\_field(resource)](AshGraphql.Resource.Info.html#keyset_field/1)

The field name to place the keyset of a result in

[managed\_relationship(resource, action, argument)](AshGraphql.Resource.Info.html#managed_relationship/3)

The managed\_relationshi configuration for a given action/argument

[managed\_relationships(resource)](AshGraphql.Resource.Info.html#managed_relationships/1)

The managed\_relationship configurations

[managed\_relationships\_auto?(resource)](AshGraphql.Resource.Info.html#managed_relationships_auto?/1)

[mutations(resource, domain\_or\_domains \\\\ \[\])](AshGraphql.Resource.Info.html#mutations/2)

The mutations exposed for the resource

[nullable\_fields(resource)](AshGraphql.Resource.Info.html#nullable_fields/1)

Graphql nullability overrides for the resource

[paginate\_relationship\_with(resource)](AshGraphql.Resource.Info.html#paginate_relationship_with/1)

Pagination configuration for list relationships

[primary\_key\_delimiter(resource)](AshGraphql.Resource.Info.html#primary_key_delimiter/1)

The delimiter for a resource with a composite primary key

[queries(resource, domain\_or\_domains \\\\ \[\])](AshGraphql.Resource.Info.html#queries/2)

The queries exposed for the resource

[relationships(resource)](AshGraphql.Resource.Info.html#relationships/1)

Which relationships should be included in the generated type

[show\_field?(resource, field)](AshGraphql.Resource.Info.html#show_field?/2)

Wether or not a given field will be shown

[show\_fields(resource)](AshGraphql.Resource.Info.html#show_fields/1)

Fields to show in the graphql domain

[subscription\_pubsub(resource)](AshGraphql.Resource.Info.html#subscription_pubsub/1)

The pubsub module used for subscriptions

[subscriptions(resource, domain\_or\_domains \\\\ \[\])](AshGraphql.Resource.Info.html#subscriptions/2)

The subscriptions exposed for the resource

[type(resource)](AshGraphql.Resource.Info.html#type/1)

The graphql type of the resource

# [](AshGraphql.Resource.Info.html#functions)Functions

[](AshGraphql.Resource.Info.html#argument_input_types/1)

# argument\_input\_types(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L194)

Graphql argument type overrides for the resource

[](AshGraphql.Resource.Info.html#argument_names/1)

# argument\_names(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L184)

Graphql argument name overrides for the resource

[](AshGraphql.Resource.Info.html#attribute_input_types/1)

# attribute\_input\_types(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L189)

Graphql attribute input type overrides for the resource

[](AshGraphql.Resource.Info.html#attribute_types/1)

# attribute\_types(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L135)

Graphql type overrides for the resource

[](AshGraphql.Resource.Info.html#derive_filter?/1)

# derive\_filter?(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L125)

Wether or not to derive a filter input for the resource automatically

[](AshGraphql.Resource.Info.html#derive_sort?/1)

# derive\_sort?(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L130)

Wether or not to derive a sort input for the resource automatically

[](AshGraphql.Resource.Info.html#encode_primary_key?/1)

# encode\_primary\_key?(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L60)

Wether or not to encode the primary key as a single `id` field when reading and getting

[](AshGraphql.Resource.Info.html#error_handler/1)

# error\_handler(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L221)

An error handler for errors produced by the resource

[](AshGraphql.Resource.Info.html#field_names/1)

# field\_names(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L150)

Graphql field name (attribute/relationship/calculation/arguments) overrides for the resource

[](AshGraphql.Resource.Info.html#filterable_field?/2)

# filterable\_field?(resource, field\_name)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L214)

May the specified field be filtered on?

[](AshGraphql.Resource.Info.html#filterable_fields/1)

# filterable\_fields(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L209)

Fields that may be filtered on

[](AshGraphql.Resource.Info.html#generate_object?/1)

# generate\_object?(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L204)

Wether or not an object should be generated, or if one with the type name for this resource should be used.

[](AshGraphql.Resource.Info.html#hide_fields/1)

# hide\_fields(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L155)

Fields to hide from the graphql domain

[](AshGraphql.Resource.Info.html#keyset_field/1)

# keyset\_field(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L145)

The field name to place the keyset of a result in

[](AshGraphql.Resource.Info.html#managed_relationship/3)

# managed\_relationship(resource, action, argument)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L74)

The managed\_relationshi configuration for a given action/argument

[](AshGraphql.Resource.Info.html#managed_relationships/1)

# managed\_relationships(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L65)

The managed\_relationship configurations

[](AshGraphql.Resource.Info.html#managed_relationships_auto?/1)

# managed\_relationships\_auto?(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L69)

[](AshGraphql.Resource.Info.html#mutations/2)

# mutations(resource, domain\_or\_domains \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L23)

The mutations exposed for the resource

[](AshGraphql.Resource.Info.html#nullable_fields/1)

# nullable\_fields(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L140)

Graphql nullability overrides for the resource

[](AshGraphql.Resource.Info.html#paginate_relationship_with/1)

# paginate\_relationship\_with(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L179)

Pagination configuration for list relationships

[](AshGraphql.Resource.Info.html#primary_key_delimiter/1)

# primary\_key\_delimiter(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L199)

The delimiter for a resource with a composite primary key

[](AshGraphql.Resource.Info.html#queries/2)

# queries(resource, domain\_or\_domains \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L7)

The queries exposed for the resource

[](AshGraphql.Resource.Info.html#relationships/1)

# relationships(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L173)

Which relationships should be included in the generated type

[](AshGraphql.Resource.Info.html#show_field?/2)

# show\_field?(resource, field)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L165)

Wether or not a given field will be shown

[](AshGraphql.Resource.Info.html#show_fields/1)

# show\_fields(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L160)

Fields to show in the graphql domain

[](AshGraphql.Resource.Info.html#subscription_pubsub/1)

# subscription\_pubsub(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L55)

The pubsub module used for subscriptions

[](AshGraphql.Resource.Info.html#subscriptions/2)

# subscriptions(resource, domain\_or\_domains \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L39)

The subscriptions exposed for the resource

[](AshGraphql.Resource.Info.html#type/1)

# type(resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/info.ex#L120)

The graphql type of the resource

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/managed_relationship.ex#L1 "View Source") AshGraphql.Resource.ManagedRelationship (ash\_graphql v1.5.0)

Represents a managed relationship configuration on a mutation

# [](AshGraphql.Resource.ManagedRelationship.html#summary)Summary

## [Functions](AshGraphql.Resource.ManagedRelationship.html#functions)

[schema()](AshGraphql.Resource.ManagedRelationship.html#schema/0)

# [](AshGraphql.Resource.ManagedRelationship.html#functions)Functions

[](AshGraphql.Resource.ManagedRelationship.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/managed_relationship.ex#L57)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/mutation.ex#L1 "View Source") AshGraphql.Resource.Mutation (ash\_graphql v1.5.0)

Represents a configured mutation on a resource

# [](AshGraphql.Resource.Mutation.html#summary)Summary

## [Functions](AshGraphql.Resource.Mutation.html#functions)

[create\_schema()](AshGraphql.Resource.Mutation.html#create_schema/0)

[destroy\_schema()](AshGraphql.Resource.Mutation.html#destroy_schema/0)

[update\_schema()](AshGraphql.Resource.Mutation.html#update_schema/0)

# [](AshGraphql.Resource.Mutation.html#functions)Functions

[](AshGraphql.Resource.Mutation.html#create_schema/0)

# create\_schema()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/mutation.ex#L144)

[](AshGraphql.Resource.Mutation.html#destroy_schema/0)

# destroy\_schema()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/mutation.ex#L146)

[](AshGraphql.Resource.Mutation.html#update_schema/0)

# update\_schema()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/mutation.ex#L145)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/query.ex#L1 "View Source") AshGraphql.Resource.Query (ash\_graphql v1.5.0)

Represents a configured query on a resource

# [](AshGraphql.Resource.Query.html#summary)Summary

## [Functions](AshGraphql.Resource.Query.html#functions)

[get\_schema()](AshGraphql.Resource.Query.html#get_schema/0)

[list\_schema()](AshGraphql.Resource.Query.html#list_schema/0)

[read\_one\_schema()](AshGraphql.Resource.Query.html#read_one_schema/0)

# [](AshGraphql.Resource.Query.html#functions)Functions

[](AshGraphql.Resource.Query.html#get_schema/0)

# get\_schema()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/query.ex#L128)

[](AshGraphql.Resource.Query.html#list_schema/0)

# list\_schema()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/query.ex#L130)

[](AshGraphql.Resource.Query.html#read_one_schema/0)

# read\_one\_schema()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/query.ex#L129)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/subscription.ex#L1 "View Source") AshGraphql.Resource.Subscription (ash\_graphql v1.5.0)

Represents a configured query on a resource

# [](AshGraphql.Resource.Subscription.html#summary)Summary

## [Functions](AshGraphql.Resource.Subscription.html#functions)

[schema()](AshGraphql.Resource.Subscription.html#schema/0)

# [](AshGraphql.Resource.Subscription.html#functions)Functions

[](AshGraphql.Resource.Subscription.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/subscription.ex#L44)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/transformers/subscription.ex#L1 "View Source") AshGraphql.Resource.Transformers.Subscription (ash\_graphql v1.5.0)

Adds the notifier for Subscriptions to the Resource

# [](AshGraphql.Resource.Transformers.Subscription.html#summary)Summary

## [Functions](AshGraphql.Resource.Transformers.Subscription.html#functions)

[after?(\_)](AshGraphql.Resource.Transformers.Subscription.html#after?/1)

Callback implementation for [`Spark.Dsl.Transformer.after?/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:after?/1).

[after\_compile?()](AshGraphql.Resource.Transformers.Subscription.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:after_compile?/0).

[before?(\_)](AshGraphql.Resource.Transformers.Subscription.html#before?/1)

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:before?/1).

[transform(dsl)](AshGraphql.Resource.Transformers.Subscription.html#transform/1)

Callback implementation for [`Spark.Dsl.Transformer.transform/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:transform/1).

# [](AshGraphql.Resource.Transformers.Subscription.html#functions)Functions

[](AshGraphql.Resource.Transformers.Subscription.html#after?/1)

# after?(\_)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/transformers/subscription.ex#L6)

Callback implementation for [`Spark.Dsl.Transformer.after?/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:after?/1).

[](AshGraphql.Resource.Transformers.Subscription.html#after_compile?/0)

# after\_compile?()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/transformers/subscription.ex#L6)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:after_compile?/0).

[](AshGraphql.Resource.Transformers.Subscription.html#before?/1)

# before?(\_)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/transformers/subscription.ex#L6)

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:before?/1).

[](AshGraphql.Resource.Transformers.Subscription.html#transform/1)

# transform(dsl)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/resource/transformers/subscription.ex#L10)

Callback implementation for [`Spark.Dsl.Transformer.transform/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:transform/1).

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/actor.ex#L1 "View Source") AshGraphql.Subscription.Actor behaviour (ash\_graphql v1.5.0)

Allows the user to substitue an actor for another more generic actor, this can be used to deduplicate subscription execution

# [](AshGraphql.Subscription.Actor.html#summary)Summary

## [Callbacks](AshGraphql.Subscription.Actor.html#callbacks)

[actor(actor, opts)](AshGraphql.Subscription.Actor.html#c:actor/2)

# [](AshGraphql.Subscription.Actor.html#callbacks)Callbacks

[](AshGraphql.Subscription.Actor.html#c:actor/2)

# actor(actor, opts)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/actor.ex#L9)

```
@callback actor(actor :: any(), opts :: Keyword.t()) :: actor :: any()
```

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/batcher.ex#L1 "View Source") AshGraphql.Subscription.Batcher (ash\_graphql v1.5.0)

If started as a GenServer, this module will batch notifications and send them in bulk. Otherwise, it will send them immediately.

# [](AshGraphql.Subscription.Batcher.html#summary)Summary

## [Functions](AshGraphql.Subscription.Batcher.html#functions)

[child\_spec(init\_arg)](AshGraphql.Subscription.Batcher.html#child_spec/1)

Returns a specification to start this module under a supervisor.

[drain()](AshGraphql.Subscription.Batcher.html#drain/0)

[handle\_continue(arg, state)](AshGraphql.Subscription.Batcher.html#handle_continue/2)

Callback implementation for [`GenServer.handle_continue/2`](../elixir/GenServer.html#c:handle_continue/2).

[init(config)](AshGraphql.Subscription.Batcher.html#init/1)

Config options

[publish(topic, notification, pubsub, key\_strategy, doc)](AshGraphql.Subscription.Batcher.html#publish/5)

[start\_link(opts \\\\ \[\])](AshGraphql.Subscription.Batcher.html#start_link/1)

# [](AshGraphql.Subscription.Batcher.html#functions)Functions

[](AshGraphql.Subscription.Batcher.html#child_spec/1)

# child\_spec(init\_arg)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/batcher.ex#L6)

Returns a specification to start this module under a supervisor.

See [`Supervisor`](../elixir/Supervisor.html).

[](AshGraphql.Subscription.Batcher.html#drain/0)

# drain()

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/batcher.ex#L44)

[](AshGraphql.Subscription.Batcher.html#handle_continue/2)

# handle\_continue(arg, state)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/batcher.ex#L103)

Callback implementation for [`GenServer.handle_continue/2`](../elixir/GenServer.html#c:handle_continue/2).

[](AshGraphql.Subscription.Batcher.html#init/1)

# init(config)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/batcher.ex#L77)

Config options

`async_limit` (default 100): if there are more than `async_limit` notifications, we will start to backpressure

`send_immediately_threshold` (default 50): if there are less then `send_immediately_threshold` notifications, we will send them immediately

`subscription_batch_interval` (default 1000): the interval in milliseconds the batcher waits for new notifications before sending them

[](AshGraphql.Subscription.Batcher.html#publish/5)

# publish(topic, notification, pubsub, key\_strategy, doc)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/batcher.ex#L48)

[](AshGraphql.Subscription.Batcher.html#start_link/1)

# start\_link(opts \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/batcher.ex#L40)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/config.ex#L1 "View Source") AshGraphql.Subscription.Config (ash\_graphql v1.5.0)

Creates a config function used for the absinthe subscription definition

See [https://github.com/absinthe-graphql/absinthe/blob/3d0823bd71c2ebb94357a5588c723e053de8c66a/lib/absinthe/schema/notation.ex#L58](https://github.com/absinthe-graphql/absinthe/blob/3d0823bd71c2ebb94357a5588c723e053de8c66a/lib/absinthe/schema/notation.ex#L58)

# [](AshGraphql.Subscription.Config.html#summary)Summary

## [Functions](AshGraphql.Subscription.Config.html#functions)

[create\_config(subscription, domain, resource)](AshGraphql.Subscription.Config.html#create_config/3)

# [](AshGraphql.Subscription.Config.html#functions)Functions

[](AshGraphql.Subscription.Config.html#create_config/3)

# create\_config(subscription, domain, resource)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/config.ex#L10)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/endpoint.ex#L1 "View Source") AshGraphql.Subscription.Endpoint (ash\_graphql v1.5.0)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscriptions.ex#L1 "View Source") AshGraphql.Subscription (ash\_graphql v1.5.0)

Helpers for working with absinthe subscriptions

# [](AshGraphql.Subscription.html#summary)Summary

## [Functions](AshGraphql.Subscription.html#functions)

[query\_for\_subscription(query, domain, resolution, type\_override \\\\ nil, nested \\\\ \[\])](AshGraphql.Subscription.html#query_for_subscription/5)

Produce a query that will load the correct data for a subscription.

# [](AshGraphql.Subscription.html#functions)Functions

[](AshGraphql.Subscription.html#query_for_subscription/5)

# query\_for\_subscription(query, domain, resolution, type\_override \\\\ nil, nested \\\\ \[])

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscriptions.ex#L11)

Produce a query that will load the correct data for a subscription.

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/notifier.ex#L1 "View Source") AshGraphql.Subscription.Notifier (ash\_graphql v1.5.0)

AshNotifier that triggers absinthe if subscriptions are listening

# [](AshGraphql.Subscription.Notifier.html#summary)Summary

## [Functions](AshGraphql.Subscription.Notifier.html#functions)

[requires\_original\_data?(\_, \_)](AshGraphql.Subscription.Notifier.html#requires_original_data?/2)

Callback implementation for [`Ash.Notifier.requires_original_data?/2`](../ash/3.4.50/Ash.Notifier.html#c:requires_original_data?/2).

# [](AshGraphql.Subscription.Notifier.html#functions)Functions

[](AshGraphql.Subscription.Notifier.html#requires_original_data?/2)

# requires\_original\_data?(\_, \_)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/notifier.ex#L5)

Callback implementation for [`Ash.Notifier.requires_original_data?/2`](../ash/3.4.50/Ash.Notifier.html#c:requires_original_data?/2).

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/runner.ex#L1 "View Source") AshGraphql.Subscription.Runner (ash\_graphql v1.5.0)

Custom implementation if the run\_docset function for the PubSub module used for Subscriptions

Mostly a copy of [https://github.com/absinthe-graphql/absinthe/blob/3d0823bd71c2ebb94357a5588c723e053de8c66a/lib/absinthe/subscription/local.ex#L40](https://github.com/absinthe-graphql/absinthe/blob/3d0823bd71c2ebb94357a5588c723e053de8c66a/lib/absinthe/subscription/local.ex#L40) but this lets us decide if we want to send the data to the client or not in certain error cases

# [](AshGraphql.Subscription.Runner.html#summary)Summary

## [Functions](AshGraphql.Subscription.Runner.html#functions)

[run\_docset(pubsub, docs\_and\_topics, notification)](AshGraphql.Subscription.Runner.html#run_docset/3)

# [](AshGraphql.Subscription.Runner.html#functions)Functions

[](AshGraphql.Subscription.Runner.html#run_docset/3)

# run\_docset(pubsub, docs\_and\_topics, notification)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/subscription/runner.ex#L10)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/type.ex#L1 "View Source") AshGraphql.Type behaviour (ash\_graphql v1.5.0)

Callbacks used to enrich types with GraphQL-specific metadata.

# [](AshGraphql.Type.html#summary)Summary

## [Callbacks](AshGraphql.Type.html#callbacks)

[graphql\_define\_type?(constraints)](AshGraphql.Type.html#c:graphql_define_type?/1)

Used for maps/enums/unions that *would* define a type automatically, to disable them.

[graphql\_describe\_enum\_value(atom)](AshGraphql.Type.html#c:graphql_describe_enum_value/1)

Used for [`Ash.Type.Enum`](../ash/3.4.50/Ash.Type.Enum.html) to provide a description for individual values. For example

[graphql\_input\_type(constraints)](AshGraphql.Type.html#c:graphql_input_type/1)

Sets the name of the graphql input type for a given Ash type. For example: `:weekday`.

[graphql\_rename\_value(constraints)](AshGraphql.Type.html#c:graphql_rename_value/1)

Used for [`Ash.Type.Enum`](../ash/3.4.50/Ash.Type.Enum.html) to rename individual values. For example

[graphql\_type(constraints)](AshGraphql.Type.html#c:graphql_type/1)

Sets the name of the graphql type for a given Ash type. For example: `:weekday`.

[graphql\_unnested\_unions(constraints)](AshGraphql.Type.html#c:graphql_unnested_unions/1)

Used for map/embedded types embedded in unions, to avoid nesting them in a key by their name.

# [](AshGraphql.Type.html#callbacks)Callbacks

[](AshGraphql.Type.html#c:graphql_define_type?/1)

# graphql\_define\_type?(constraints)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/type.ex#L68)(optional)

```
@callback graphql_define_type?(Ash.Type.constraints()) :: false
```

Used for maps/enums/unions that *would* define a type automatically, to disable them.

[](AshGraphql.Type.html#c:graphql_describe_enum_value/1)

# graphql\_describe\_enum\_value(atom)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/type.ex#L82)(optional)

```
@callback graphql_describe_enum_value(atom()) :: String.t() | nil
```

Used for [`Ash.Type.Enum`](../ash/3.4.50/Ash.Type.Enum.html) to provide a description for individual values. For example:

```
defmodule MyEnum do
use Ash.Type.Enum, values: [:foo, :bar, :baz]

  def graphql_describe_enum_value(:baz), do: "A baz"
  def graphql_describe_enum_value(_), do: nil
end
```

[](AshGraphql.Type.html#c:graphql_input_type/1)

# graphql\_input\_type(constraints)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/type.ex#L42)(optional)

```
@callback graphql_input_type(Ash.Type.constraints()) :: atom()
```

Sets the name of the graphql input type for a given Ash type. For example: `:weekday`.

This will do different things depending on the type you're adding it to.

## [](AshGraphql.Type.html#c:graphql_input_type/1-regular-types)Regular Types

This expresses that you will define a custom type for representing this input in your graphql

## [](AshGraphql.Type.html#c:graphql_input_type/1-newtypes)NewTypes

If it is a subtype of a union, or map/keyword with `fields` the type will be *created* with that name. So you can use this to decide what it will be named. Otherwise, it behaves as stated above for regular types.

[](AshGraphql.Type.html#c:graphql_rename_value/1)

# graphql\_rename\_value(constraints)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/type.ex#L56)(optional)

```
@callback graphql_rename_value(Ash.Type.constraints()) :: String.t() | atom()
```

Used for [`Ash.Type.Enum`](../ash/3.4.50/Ash.Type.Enum.html) to rename individual values. For example:

```
defmodule MyEnum do
  use Ash.Type.Enum, values: [:foo, :bar, :baz]

  def graphql_rename_value(:baz), do: :buz
  def graphql_rename_value(other), do: other
end
```

[](AshGraphql.Type.html#c:graphql_type/1)

# graphql\_type(constraints)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/type.ex#L26)(optional)

```
@callback graphql_type(Ash.Type.constraints()) :: atom()
```

Sets the name of the graphql type for a given Ash type. For example: `:weekday`.

This will do different things depending on the type you're adding it to.

## [](AshGraphql.Type.html#c:graphql_type/1-regular-types)Regular Types

This expresses that you will define a custom type for representing this in your graphql

## [](AshGraphql.Type.html#c:graphql_type/1-newtypes)NewTypes

If it is a subtype of a union, or map/keyword with `fields` the type will be *created* with that name. So you can use this to decide what it will be named. Otherwise, it behaves as stated above for regular types.

[](AshGraphql.Type.html#c:graphql_unnested_unions/1)

# graphql\_unnested\_unions(constraints)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/type.ex#L63)(optional)

```
@callback graphql_unnested_unions(Ash.Type.constraints()) :: [atom()]
```

Used for map/embedded types embedded in unions, to avoid nesting them in a key by their name.

See [the unions guide](use-unions-with-graphql.html) for more.

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/types/json.ex#L1 "View Source") AshGraphql.Types.JSON (ash\_graphql v1.5.0)

The Json scalar type allows arbitrary JSON values to be passed in and out.

# [](AshGraphql.Types.JSON.html#summary)Summary

## [Functions](AshGraphql.Types.JSON.html#functions)

[decode(arg1)](AshGraphql.Types.JSON.html#decode/1)

[encode(value)](AshGraphql.Types.JSON.html#encode/1)

# [](AshGraphql.Types.JSON.html#functions)Functions

[](AshGraphql.Types.JSON.html#decode/1)

# decode(arg1)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/types/json.ex#L18)

[](AshGraphql.Types.JSON.html#encode/1)

# encode(value)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/types/json.ex#L33)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/types/json_string.ex#L1 "View Source") AshGraphql.Types.JSONString (ash\_graphql v1.5.0)

The Json scalar type allows arbitrary JSON values to be passed in and out.

# [](AshGraphql.Types.JSONString.html#summary)Summary

## [Functions](AshGraphql.Types.JSONString.html#functions)

[decode(arg1)](AshGraphql.Types.JSONString.html#decode/1)

[encode(value)](AshGraphql.Types.JSONString.html#encode/1)

# [](AshGraphql.Types.JSONString.html#functions)Functions

[](AshGraphql.Types.JSONString.html#decode/1)

# decode(arg1)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/types/json_string.ex#L18)

[](AshGraphql.Types.JSONString.html#encode/1)

# encode(value)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/types/json_string.ex#L33)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/authorize-with-graphql.md#L1 "View Source") Authorize with GraphQL

AshGraphql uses three special keys in the `absinthe` context:

- `:actor` - the current actor, to be used for authorization/preparations/changes
- `:tenant` - a tenant when using [multitenancy](../ash/multitenancy.html).
- `:ash_context` - a map of arbitrary context to be passed into the changeset/query. Accessible via `changeset.context` and `query.context`

By default, `authorize?` in the domain is set to true. To disable authorization for a given domain in graphql, use:

```
graphql do
  authorize? false
end
```

If you are doing authorization, you'll need to provide an `actor`.

### [](authorize-with-graphql.html#using-ashauthentication)Using AshAuthentication

If you have not yet installed AshAuthentication, you can install it with igniter:

```
# installs ash_authentication & ash_authentication_phoenix
mix igniter.install ash_authentication_phoenix 
```

If you've already set up [`AshGraphql`](AshGraphql.html) before adding `AshAuthentication`, you will just need to make sure that your `:graphql` scope in your router looks like this:

```
pipeline :graphql do
  plug :load_from_bearer
  plug :set_actor, :user
  plug AshGraphql.Plug
end
```

### [](authorize-with-graphql.html#using-something-else)Using Something Else

To set the `actor` for authorization, you'll need to add an `actor` key to the absinthe context. Typically, you would have a plug that fetches the current user and uses [`Ash.PlugHelpers.set_actor/2`](../ash/3.4.50/Ash.PlugHelpers.html#set_actor/2) to set the actor in the `conn` (likewise with [`Ash.PlugHelpers.set_tenant/2`](../ash/3.4.50/Ash.PlugHelpers.html#set_tenant/2)).

Just add [`AshGraphql.Plug`](AshGraphql.Plug.html) somewhere *after* that in the pipeline and the your GraphQL APIs will have the correct authorization.

```
defmodule MyAppWeb.Router do
  pipeline :api do
    # ...
    plug :get_actor_from_token
    plug AshGraphql.Plug
  end

  scope "/" do
    forward "/gql", Absinthe.Plug, schema: YourSchema

    forward "/playground",
          Absinthe.Plug.GraphiQL,
          schema: YourSchema,
          interface: :playground
  end

  def get_actor_from_token(conn, _opts) do
     with ["" <> token] <- get_req_header(conn, "authorization"),
         {:ok, user, _claims} <- MyApp.Guardian.resource_from_token(token) do
      conn
      |> set_actor(user)
    else
    _ -> conn
    end
  end
end
```

## [](authorize-with-graphql.html#policy-breakdowns)Policy Breakdowns

By default, unauthorized requests simply return `forbidden` in the message. If you prefer to show policy breakdowns in your GraphQL errors, you can set the config option:

```
config :ash_graphql, :policies, show_policy_breakdowns?: true
```

```
{
  "data": {
    "attendanceRecords": null
  },
  "errors": [
    {
      "code": "forbidden",
      "fields": [],
      "locations": [
        {
          "column": 3,
          "line": 2
        }
      ],
      "message": "MyApp.Authentication.User.read\n\n\n\n\nPolicy Breakdown\n  Policy | ⛔:\n    forbid unless: actor is active | ✓ | ⬇    \n    authorize if: actor is Executive | ✘ | ⬇",
      "path": ["attendanceRecords"],
      "short_message": "forbidden",
      "vars": {}
    }
  ]
}
```

Be careful, as this can be an attack vector in some systems (i.e "here is exactly what you need to make true to do what you want to do").

## [](authorize-with-graphql.html#field-policies)Field Policies

Field policies in AshGraphql work by producing a `null` value for any forbidden field, as well as an error in the errors list.

### [](authorize-with-graphql.html#nullability)nullability

Any fields with field policies on them should be nullable. If they are not nullable, the *parent* object will also be `null` (and considered in an error state), because `null` is not a valid type for that field.

To make fields as nullable even if it is not nullable by its definition, use the `nullable_fields` option.

```
graphql do
  type :post

  nullable_fields [:foo, :bar, :baz]
end
```

[← Previous Page Getting Started With GraphQL](getting-started-with-graphql.html)

[Next Page → Handling Errors](handle-errors.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/authorize-with-graphql.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/custom-queries-and-mutations.md#L1 "View Source") Custom Queries &amp; Mutations

You can define your own queries and mutations in your schema, using Absinthe's tooling. See their docs for more.

### [](custom-queries-and-mutations.html#you-probably-don-t-need-this)You probably don't need this!

You can define generic actions in your resources which can return any type that you want, and those generic actions will automatically get all of the goodness of AshGraphql, with automatic data loading and type derivation, etc. See the [generic actions guide](generic-actions.html) for more.

## [](custom-queries-and-mutations.html#using-ashgraphql-s-types)Using AshGraphql's types

If you want to return resource types defined by AshGraphql, however, you will need to use [`AshGraphql.load_fields_on_query/2`](AshGraphql.html#load_fields_on_query/2) to ensure that any requested fields are loaded.

For example:

```
require Ash.Query

query do
  field :custom_get_post, :post do
    arg(:id, non_null(:id))

    resolve(fn %{id: post_id}, resolution ->
      MyApp.Blog.Post
      |> Ash.Query.filter(id == ^post_id)
      |> AshGraphql.load_fields_on_query(resolution)
      |> Ash.read_one(not_found_error?: true)
      |> AshGraphql.handle_errors(MyApp.Blog.Post, resolution)
    end)
  end
end
```

Alternatively, if you have records already that you need to load data on, use [`AshGraphql.load_fields/3`](AshGraphql.html#load_fields/3):

```
query do
  field :custom_get_post, :post do
    arg(:id, non_null(:id))

    resolve(fn %{id: post_id}, resolution ->
      with {:ok, post} when not is_nil(post) <- Ash.get(MyApp.Blog.Post, post_id) do
        AshGraphql.load_fields(post, MyApp.Blog.Post, resolution)
      end
      |> AshGraphql.handle_errors(MyApp.Blog.Post, resolution)
    end)
  end
end
```

[← Previous Page Relay](relay.html)

[Next Page → Upgrading to 1.0](upgrade.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/custom-queries-and-mutations.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/dsls/DSL-AshGraphql.Domain.md#L1 "View Source") DSL: AshGraphql.Domain

The entrypoint for adding GraphQL behavior to an Ash domain

## [](dsl-ashgraphql-domain.html#graphql)graphql

Domain level configuration for GraphQL

### [](dsl-ashgraphql-domain.html#nested-dsls)Nested DSLs

- [queries](dsl-ashgraphql-domain.html#graphql-queries)
  
  - get
  - read\_one
  - list
  - action
- [mutations](dsl-ashgraphql-domain.html#graphql-mutations)
  
  - create
  - update
  - destroy
  - action
- [subscriptions](dsl-ashgraphql-domain.html#graphql-subscriptions)
  
  - subscribe

### [](dsl-ashgraphql-domain.html#examples)Examples

```
graphql do
  authorize? false # To skip authorization for this domain
end
```

### [](dsl-ashgraphql-domain.html#options)Options

NameTypeDefaultDocs[`authorize?`](dsl-ashgraphql-domain.html#graphql-authorize?)`boolean``true`Whether or not to perform authorization for this domain[`tracer`](dsl-ashgraphql-domain.html#graphql-tracer)`atom`A tracer to use to trace execution in the graphql. Will use `config :ash, :tracer` if it is set.[`root_level_errors?`](dsl-ashgraphql-domain.html#graphql-root_level_errors?)`boolean``false`By default, mutation errors are shown in their result object's errors key, but this setting places those errors in the top level errors list[`error_handler`](dsl-ashgraphql-domain.html#graphql-error_handler)`mfa``{AshGraphql.DefaultErrorHandler, :handle_error, []}`Set an MFA to intercept/handle any errors that are generated.[`show_raised_errors?`](dsl-ashgraphql-domain.html#graphql-show_raised_errors?)`boolean``false`For security purposes, if an error is *raised* then Ash simply shows a generic error. If you want to show those errors, set this to true.

## [](dsl-ashgraphql-domain.html#graphql-queries)graphql.queries

Queries to expose for the resource.

### [](dsl-ashgraphql-domain.html#nested-dsls-1)Nested DSLs

- [get](dsl-ashgraphql-domain.html#graphql-queries-get)
- [read\_one](dsl-ashgraphql-domain.html#graphql-queries-read_one)
- [list](dsl-ashgraphql-domain.html#graphql-queries-list)
- [action](dsl-ashgraphql-domain.html#graphql-queries-action)

### [](dsl-ashgraphql-domain.html#examples-1)Examples

```
queries do
  get Post, :get_post, :read
  read_one User, :current_user, :current_user
  list Post, :list_posts, :read
end
```

## [](dsl-ashgraphql-domain.html#graphql-queries-get)graphql.queries.get

```
get resource, name, action
```

A query to fetch a record by primary key

### [](dsl-ashgraphql-domain.html#examples-2)Examples

```
get :get_post, :read
```

### [](dsl-ashgraphql-domain.html#arguments)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-queries-get-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-queries-get-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-domain.html#graphql-queries-get-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-domain.html#options-1)Options

NameTypeDefaultDocs[`identity`](dsl-ashgraphql-domain.html#graphql-queries-get-identity)`atom`The identity to use for looking up the record. Pass `false` to not use an identity.[`allow_nil?`](dsl-ashgraphql-domain.html#graphql-queries-get-allow_nil?)`boolean``true`Whether or not the action can return nil.[`modify_resolution`](dsl-ashgraphql-domain.html#graphql-queries-get-modify_resolution)`mfa`An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`type_name`](dsl-ashgraphql-domain.html#graphql-queries-get-type_name)`atom`Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.[`description`](dsl-ashgraphql-domain.html#graphql-queries-get-description)`String.t`The query description that gets shown in the Graphql schema. If not provided, the action description will be used.[`metadata_names`](dsl-ashgraphql-domain.html#graphql-queries-get-metadata_names)`keyword``[]`Name overrides for metadata fields on the read action.[`metadata_types`](dsl-ashgraphql-domain.html#graphql-queries-get-metadata_types)`keyword``[]`Type overrides for metadata fields on the read action.[`show_metadata`](dsl-ashgraphql-domain.html#graphql-queries-get-show_metadata)`list(atom)`The metadata attributes to show. Defaults to all.[`as_mutation?`](dsl-ashgraphql-domain.html#graphql-queries-get-as_mutation?)`boolean``false`Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-domain.html#graphql-queries-get-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-queries-get-hide_inputs)`list(atom)``[]`A list of inputs to hide from the mutation.

### [](dsl-ashgraphql-domain.html#introspection)Introspection

Target: [`AshGraphql.Resource.Query`](AshGraphql.Resource.Query.html)

## [](dsl-ashgraphql-domain.html#graphql-queries-read_one)graphql.queries.read\_one

```
read_one resource, name, action
```

A query to fetch a record

### [](dsl-ashgraphql-domain.html#examples-3)Examples

```
read_one :current_user, :current_user
```

### [](dsl-ashgraphql-domain.html#arguments-1)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-queries-read_one-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-queries-read_one-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-domain.html#graphql-queries-read_one-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-domain.html#options-2)Options

NameTypeDefaultDocs[`allow_nil?`](dsl-ashgraphql-domain.html#graphql-queries-read_one-allow_nil?)`boolean``true`Whether or not the action can return nil.[`type_name`](dsl-ashgraphql-domain.html#graphql-queries-read_one-type_name)`atom`Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.[`description`](dsl-ashgraphql-domain.html#graphql-queries-read_one-description)`String.t`The query description that gets shown in the Graphql schema. If not provided, the action description will be used.[`metadata_names`](dsl-ashgraphql-domain.html#graphql-queries-read_one-metadata_names)`keyword``[]`Name overrides for metadata fields on the read action.[`metadata_types`](dsl-ashgraphql-domain.html#graphql-queries-read_one-metadata_types)`keyword``[]`Type overrides for metadata fields on the read action.[`show_metadata`](dsl-ashgraphql-domain.html#graphql-queries-read_one-show_metadata)`list(atom)`The metadata attributes to show. Defaults to all.[`as_mutation?`](dsl-ashgraphql-domain.html#graphql-queries-read_one-as_mutation?)`boolean``false`Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-domain.html#graphql-queries-read_one-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-queries-read_one-hide_inputs)`list(atom)``[]`A list of inputs to hide from the mutation.

### [](dsl-ashgraphql-domain.html#introspection-1)Introspection

Target: [`AshGraphql.Resource.Query`](AshGraphql.Resource.Query.html)

## [](dsl-ashgraphql-domain.html#graphql-queries-list)graphql.queries.list

```
list resource, name, action
```

A query to fetch a list of records

### [](dsl-ashgraphql-domain.html#examples-4)Examples

```
list :list_posts, :read
```

```
list :list_posts_paginated, :read, relay?: true
```

### [](dsl-ashgraphql-domain.html#arguments-2)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-queries-list-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-queries-list-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-domain.html#graphql-queries-list-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-domain.html#options-3)Options

NameTypeDefaultDocs[`relay?`](dsl-ashgraphql-domain.html#graphql-queries-list-relay?)`boolean``false`If true, the graphql queries/resolvers for this resource will be built to honor the relay specification. See [the relay guide](https://hexdocs.pm/documentation/topics/relay.html) for more.[`paginate_with`](dsl-ashgraphql-domain.html#graphql-queries-list-paginate_with)`:keyset | :offset | nil``:keyset`Determine the pagination strategy to use, if multiple are available. If `nil`, no pagination is applied, otherwise the given strategy is used.[`type_name`](dsl-ashgraphql-domain.html#graphql-queries-list-type_name)`atom`Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.[`description`](dsl-ashgraphql-domain.html#graphql-queries-list-description)`String.t`The query description that gets shown in the Graphql schema. If not provided, the action description will be used.[`metadata_names`](dsl-ashgraphql-domain.html#graphql-queries-list-metadata_names)`keyword``[]`Name overrides for metadata fields on the read action.[`metadata_types`](dsl-ashgraphql-domain.html#graphql-queries-list-metadata_types)`keyword``[]`Type overrides for metadata fields on the read action.[`show_metadata`](dsl-ashgraphql-domain.html#graphql-queries-list-show_metadata)`list(atom)`The metadata attributes to show. Defaults to all.[`as_mutation?`](dsl-ashgraphql-domain.html#graphql-queries-list-as_mutation?)`boolean``false`Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-domain.html#graphql-queries-list-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-queries-list-hide_inputs)`list(atom)``[]`A list of inputs to hide from the mutation.

### [](dsl-ashgraphql-domain.html#introspection-2)Introspection

Target: [`AshGraphql.Resource.Query`](AshGraphql.Resource.Query.html)

## [](dsl-ashgraphql-domain.html#graphql-queries-action)graphql.queries.action

```
action resource, name, action
```

Runs a generic action

### [](dsl-ashgraphql-domain.html#examples-5)Examples

```
action :check_status, :check_status
```

### [](dsl-ashgraphql-domain.html#arguments-3)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-queries-action-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-queries-action-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-domain.html#graphql-queries-action-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-domain.html#options-4)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-domain.html#graphql-queries-action-description)`String.t`The description that gets shown in the Graphql schema. If not provided, the action description will be used.[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-queries-action-hide_inputs)`list(atom)``[]`Inputs to hide in the mutation/query[`error_location`](dsl-ashgraphql-domain.html#graphql-queries-action-error_location)`:in_result | :top_level``:top_level`If the result should have an `errors` and a `result` key (like create/update/destroy mutations), or if errors should be shown in the top level errors key[`modify_resolution`](dsl-ashgraphql-domain.html#graphql-queries-action-modify_resolution)`mfa`An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-domain.html#graphql-queries-action-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-domain.html#introspection-3)Introspection

Target: [`AshGraphql.Resource.Action`](AshGraphql.Resource.Action.html)

## [](dsl-ashgraphql-domain.html#graphql-mutations)graphql.mutations

Mutations (create/update/destroy actions) to expose for the resource.

### [](dsl-ashgraphql-domain.html#nested-dsls-2)Nested DSLs

- [create](dsl-ashgraphql-domain.html#graphql-mutations-create)
- [update](dsl-ashgraphql-domain.html#graphql-mutations-update)
- [destroy](dsl-ashgraphql-domain.html#graphql-mutations-destroy)
- [action](dsl-ashgraphql-domain.html#graphql-mutations-action)

### [](dsl-ashgraphql-domain.html#examples-6)Examples

```
mutations do
  create Post, :create_post, :create
  update Post, :update_post, :update
  destroy Post, :destroy_post, :destroy
end
```

## [](dsl-ashgraphql-domain.html#graphql-mutations-create)graphql.mutations.create

```
create resource, name, action
```

A mutation to create a record

### [](dsl-ashgraphql-domain.html#examples-7)Examples

```
create :create_post, :create
```

### [](dsl-ashgraphql-domain.html#arguments-4)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-mutations-create-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-mutations-create-name)`atom``:get`The name to use for the mutation.[`action`](dsl-ashgraphql-domain.html#graphql-mutations-create-action)`atom`The action to use for the mutation.

### [](dsl-ashgraphql-domain.html#options-5)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-domain.html#graphql-mutations-create-description)`String.t`The mutation description that gets shown in the Graphql schema. If not provided, the action description will be used.[`upsert?`](dsl-ashgraphql-domain.html#graphql-mutations-create-upsert?)`boolean``false`Whether or not to use the `upsert?: true` option when calling `YourDomain.create/2`.[`upsert_identity`](dsl-ashgraphql-domain.html#graphql-mutations-create-upsert_identity)`atom``false`Which identity to use for the upsert[`modify_resolution`](dsl-ashgraphql-domain.html#graphql-mutations-create-modify_resolution)`mfa`An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-mutations-create-hide_inputs)`list(atom)``[]`A list of inputs to hide from the mutation.[`relay_id_translations`](dsl-ashgraphql-domain.html#graphql-mutations-create-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-domain.html#introspection-4)Introspection

Target: [`AshGraphql.Resource.Mutation`](AshGraphql.Resource.Mutation.html)

## [](dsl-ashgraphql-domain.html#graphql-mutations-update)graphql.mutations.update

```
update resource, name, action
```

A mutation to update a record

### [](dsl-ashgraphql-domain.html#examples-8)Examples

```
update :update_post, :update
```

### [](dsl-ashgraphql-domain.html#arguments-5)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-mutations-update-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-mutations-update-name)`atom``:get`The name to use for the mutation.[`action`](dsl-ashgraphql-domain.html#graphql-mutations-update-action)`atom`The action to use for the mutation.

### [](dsl-ashgraphql-domain.html#options-6)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-domain.html#graphql-mutations-update-description)`String.t`The mutation description that gets shown in the Graphql schema. If not provided, the action description will be used.[`identity`](dsl-ashgraphql-domain.html#graphql-mutations-update-identity)`atom`The identity to use to fetch the record to be updated. Use `false` if no identity is required.[`read_action`](dsl-ashgraphql-domain.html#graphql-mutations-update-read_action)`atom`The read action to use to fetch the record to be updated. Defaults to the primary read action.[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-mutations-update-hide_inputs)`list(atom)`A list of inputs to hide from the mutation.[`relay_id_translations`](dsl-ashgraphql-domain.html#graphql-mutations-update-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-domain.html#introspection-5)Introspection

Target: [`AshGraphql.Resource.Mutation`](AshGraphql.Resource.Mutation.html)

## [](dsl-ashgraphql-domain.html#graphql-mutations-destroy)graphql.mutations.destroy

```
destroy resource, name, action
```

A mutation to destroy a record

### [](dsl-ashgraphql-domain.html#examples-9)Examples

```
destroy :destroy_post, :destroy
```

### [](dsl-ashgraphql-domain.html#arguments-6)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-mutations-destroy-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-mutations-destroy-name)`atom``:get`The name to use for the mutation.[`action`](dsl-ashgraphql-domain.html#graphql-mutations-destroy-action)`atom`The action to use for the mutation.

### [](dsl-ashgraphql-domain.html#options-7)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-domain.html#graphql-mutations-destroy-description)`String.t`The mutation description that gets shown in the Graphql schema. If not provided, the action description will be used.[`read_action`](dsl-ashgraphql-domain.html#graphql-mutations-destroy-read_action)`atom`The read action to use to fetch the record to be destroyed. Defaults to the primary read action.[`identity`](dsl-ashgraphql-domain.html#graphql-mutations-destroy-identity)`atom`The identity to use to fetch the record to be destroyed. Use `false` if no identity is required.[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-mutations-destroy-hide_inputs)`list(atom)`A list of inputs to hide from the mutation.[`relay_id_translations`](dsl-ashgraphql-domain.html#graphql-mutations-destroy-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-domain.html#introspection-6)Introspection

Target: [`AshGraphql.Resource.Mutation`](AshGraphql.Resource.Mutation.html)

## [](dsl-ashgraphql-domain.html#graphql-mutations-action)graphql.mutations.action

```
action resource, name, action
```

Runs a generic action

### [](dsl-ashgraphql-domain.html#examples-10)Examples

```
action :check_status, :check_status
```

### [](dsl-ashgraphql-domain.html#arguments-7)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-mutations-action-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-mutations-action-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-domain.html#graphql-mutations-action-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-domain.html#options-8)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-domain.html#graphql-mutations-action-description)`String.t`The description that gets shown in the Graphql schema. If not provided, the action description will be used.[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-mutations-action-hide_inputs)`list(atom)``[]`Inputs to hide in the mutation/query[`error_location`](dsl-ashgraphql-domain.html#graphql-mutations-action-error_location)`:in_result | :top_level``:top_level`If the result should have an `errors` and a `result` key (like create/update/destroy mutations), or if errors should be shown in the top level errors key[`modify_resolution`](dsl-ashgraphql-domain.html#graphql-mutations-action-modify_resolution)`mfa`An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-domain.html#graphql-mutations-action-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-domain.html#introspection-7)Introspection

Target: [`AshGraphql.Resource.Action`](AshGraphql.Resource.Action.html)

## [](dsl-ashgraphql-domain.html#graphql-subscriptions)graphql.subscriptions

Subscriptions to expose for the resource.

### [](dsl-ashgraphql-domain.html#nested-dsls-3)Nested DSLs

- [subscribe](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe)

### [](dsl-ashgraphql-domain.html#examples-11)Examples

```
subscription do
  subscribe Post, :post_created do
    action_types(:create)
  end
end
```

## [](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe)graphql.subscriptions.subscribe

```
subscribe resource, name
```

A subscription to listen for changes on the resource

### [](dsl-ashgraphql-domain.html#examples-12)Examples

```
subscribe :post_created do
  action_types(:create)
end
```

### [](dsl-ashgraphql-domain.html#arguments-8)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe-resource)`module`The resource that the action is defined on[`name`](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe-name)`atom`The name to use for the subscription.

### [](dsl-ashgraphql-domain.html#options-9)Options

NameTypeDefaultDocs[`actor`](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe-actor)`(any -> any) | module`The actor to use for authorization.[`actions`](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe-actions)`list(atom) | atom`The create/update/destroy actions the subsciption should listen to.[`action_types`](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe-action_types)`list(atom) | atom`The type of actions the subsciption should listen to.[`read_action`](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe-read_action)`atom`The read action to use for reading data[`hide_inputs`](dsl-ashgraphql-domain.html#graphql-subscriptions-subscribe-hide_inputs)`list(atom)``[]`A list of inputs to hide from the subscription, usable if the read action has arguments.

### [](dsl-ashgraphql-domain.html#introspection-8)Introspection

Target: [`AshGraphql.Resource.Subscription`](AshGraphql.Resource.Subscription.html)

[← Previous Page Upgrading to 1.0](upgrade.html)

[Next Page → DSL: AshGraphql.Resource](dsl-ashgraphql-resource.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/dsls/DSL-AshGraphql.Domain.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/dsls/DSL-AshGraphql.Resource.md#L1 "View Source") DSL: AshGraphql.Resource

This Ash resource extension adds configuration for exposing a resource in a graphql.

## [](dsl-ashgraphql-resource.html#graphql)graphql

Configuration for a given resource in graphql

### [](dsl-ashgraphql-resource.html#nested-dsls)Nested DSLs

- [queries](dsl-ashgraphql-resource.html#graphql-queries)
  
  - get
  - read\_one
  - list
  - action
- [mutations](dsl-ashgraphql-resource.html#graphql-mutations)
  
  - create
  - update
  - destroy
  - action
- [subscriptions](dsl-ashgraphql-resource.html#graphql-subscriptions)
  
  - subscribe
- [managed\_relationships](dsl-ashgraphql-resource.html#graphql-managed_relationships)
  
  - managed\_relationship

### [](dsl-ashgraphql-resource.html#examples)Examples

```
graphql do
  type :post

  queries do
    get :get_post, :read
    list :list_posts, :read
  end

  mutations do
    create :create_post, :create
    update :update_post, :update
    destroy :destroy_post, :destroy
  end
end
```

### [](dsl-ashgraphql-resource.html#options)Options

NameTypeDefaultDocs[`type`](dsl-ashgraphql-resource.html#graphql-type)`atom`The type to use for this entity in the graphql schema. If the resource doesn't have a type, it also needs to have `generate_object? false` and can only expose generic action queries.[`derive_filter?`](dsl-ashgraphql-resource.html#graphql-derive_filter?)`boolean``true`Set to false to disable the automatic generation of a filter input for read actions.[`derive_sort?`](dsl-ashgraphql-resource.html#graphql-derive_sort?)`boolean``true`Set to false to disable the automatic generation of a sort input for read actions.[`encode_primary_key?`](dsl-ashgraphql-resource.html#graphql-encode_primary_key?)`boolean``true`For resources with composite primary keys, or primary keys not called `:id`, this will cause the id to be encoded as a single `id` attribute, both in the representation of the resource and in get requests[`relationships`](dsl-ashgraphql-resource.html#graphql-relationships)`list(atom)`A list of relationships to include on the created type. Defaults to all public relationships where the destination defines a graphql type.[`paginate_relationship_with`](dsl-ashgraphql-resource.html#graphql-paginate_relationship_with)`keyword``[]`A keyword list indicating which kind of pagination should be used for each `has_many` and `many_to_many` relationships, e.g. `related_things: :keyset, other_related_things: :offset`. Valid pagination values are `nil`, `:offset`, `:keyset` and `:relay`.[`field_names`](dsl-ashgraphql-resource.html#graphql-field_names)`keyword`A keyword list of name overrides for attributes.[`hide_fields`](dsl-ashgraphql-resource.html#graphql-hide_fields)`list(atom)`A list of attributes to hide from the domain[`show_fields`](dsl-ashgraphql-resource.html#graphql-show_fields)`list(atom)`A list of attributes to show in the domain. If not specified includes all (excluding `hide_fiels`).[`argument_names`](dsl-ashgraphql-resource.html#graphql-argument_names)`keyword`A nested keyword list of action names, to argument name remappings. i.e `create: [arg_name: :new_name]`[`keyset_field`](dsl-ashgraphql-resource.html#graphql-keyset_field)`atom`If set, the keyset will be displayed on all read actions in this field. It will be `nil` unless at least one of the read actions on a resource uses keyset pagination or it is the result of a mutation[`attribute_types`](dsl-ashgraphql-resource.html#graphql-attribute_types)`keyword`A keyword list of type overrides for attributes. The type overrides should refer to types available in the graphql (absinthe) schema. `list_of/1` and `non_null/1` helpers can be used.[`attribute_input_types`](dsl-ashgraphql-resource.html#graphql-attribute_input_types)`keyword`A keyword list of input type overrides for attributes. The type overrides should refer to types available in the graphql (absinthe) schema. `list_of/1` and `non_null/1` helpers can be used.[`argument_input_types`](dsl-ashgraphql-resource.html#graphql-argument_input_types)`keyword`A keyword list of actions and their input type overrides for arguments. The type overrides should refer to types available in the graphql (absinthe) schema. `list_of/1` and `non_null/1` helpers can be used.[`primary_key_delimiter`](dsl-ashgraphql-resource.html#graphql-primary_key_delimiter)`String.t``"~"`If a composite primary key exists, this can be set to determine delimiter used in the `id` field value.[`depth_limit`](dsl-ashgraphql-resource.html#graphql-depth_limit)`integer`A simple way to prevent massive queries.[`generate_object?`](dsl-ashgraphql-resource.html#graphql-generate_object?)`boolean``true`Whether or not to create the GraphQL object, this allows you to manually create the GraphQL object.[`filterable_fields`](dsl-ashgraphql-resource.html#graphql-filterable_fields)`list(atom)`A list of fields that are allowed to be filtered on. Defaults to all filterable fields for which a GraphQL type can be created.[`nullable_fields`](dsl-ashgraphql-resource.html#graphql-nullable_fields)`atom | list(atom)`Mark fields as nullable even if they are required. This is useful when using field policies. See the authorization guide for more.[`error_handler`](dsl-ashgraphql-resource.html#graphql-error_handler)`mfa``{AshGraphql.DefaultErrorHandler, :handle_error, []}`Set an MFA to intercept/handle any errors that are generated.

## [](dsl-ashgraphql-resource.html#graphql-queries)graphql.queries

Queries (read actions) to expose for the resource.

### [](dsl-ashgraphql-resource.html#nested-dsls-1)Nested DSLs

- [get](dsl-ashgraphql-resource.html#graphql-queries-get)
- [read\_one](dsl-ashgraphql-resource.html#graphql-queries-read_one)
- [list](dsl-ashgraphql-resource.html#graphql-queries-list)
- [action](dsl-ashgraphql-resource.html#graphql-queries-action)

### [](dsl-ashgraphql-resource.html#examples-1)Examples

```
queries do
  get :get_post, :read
  read_one :current_user, :current_user
  list :list_posts, :read
end
```

## [](dsl-ashgraphql-resource.html#graphql-queries-get)graphql.queries.get

```
get name, action
```

A query to fetch a record by primary key

### [](dsl-ashgraphql-resource.html#examples-2)Examples

```
get :get_post, :read
```

### [](dsl-ashgraphql-resource.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-queries-get-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-resource.html#graphql-queries-get-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-resource.html#options-1)Options

NameTypeDefaultDocs[`identity`](dsl-ashgraphql-resource.html#graphql-queries-get-identity)`atom`The identity to use for looking up the record. Pass `false` to not use an identity.[`allow_nil?`](dsl-ashgraphql-resource.html#graphql-queries-get-allow_nil?)`boolean``true`Whether or not the action can return nil.[`modify_resolution`](dsl-ashgraphql-resource.html#graphql-queries-get-modify_resolution)`mfa`An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`type_name`](dsl-ashgraphql-resource.html#graphql-queries-get-type_name)`atom`Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.[`description`](dsl-ashgraphql-resource.html#graphql-queries-get-description)`String.t`The query description that gets shown in the Graphql schema. If not provided, the action description will be used.[`metadata_names`](dsl-ashgraphql-resource.html#graphql-queries-get-metadata_names)`keyword``[]`Name overrides for metadata fields on the read action.[`metadata_types`](dsl-ashgraphql-resource.html#graphql-queries-get-metadata_types)`keyword``[]`Type overrides for metadata fields on the read action.[`show_metadata`](dsl-ashgraphql-resource.html#graphql-queries-get-show_metadata)`list(atom)`The metadata attributes to show. Defaults to all.[`as_mutation?`](dsl-ashgraphql-resource.html#graphql-queries-get-as_mutation?)`boolean``false`Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-resource.html#graphql-queries-get-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-queries-get-hide_inputs)`list(atom)``[]`A list of inputs to hide from the mutation.

### [](dsl-ashgraphql-resource.html#introspection)Introspection

Target: [`AshGraphql.Resource.Query`](AshGraphql.Resource.Query.html)

## [](dsl-ashgraphql-resource.html#graphql-queries-read_one)graphql.queries.read\_one

```
read_one name, action
```

A query to fetch a record

### [](dsl-ashgraphql-resource.html#examples-3)Examples

```
read_one :current_user, :current_user
```

### [](dsl-ashgraphql-resource.html#arguments-1)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-queries-read_one-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-resource.html#graphql-queries-read_one-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-resource.html#options-2)Options

NameTypeDefaultDocs[`allow_nil?`](dsl-ashgraphql-resource.html#graphql-queries-read_one-allow_nil?)`boolean``true`Whether or not the action can return nil.[`type_name`](dsl-ashgraphql-resource.html#graphql-queries-read_one-type_name)`atom`Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.[`description`](dsl-ashgraphql-resource.html#graphql-queries-read_one-description)`String.t`The query description that gets shown in the Graphql schema. If not provided, the action description will be used.[`metadata_names`](dsl-ashgraphql-resource.html#graphql-queries-read_one-metadata_names)`keyword``[]`Name overrides for metadata fields on the read action.[`metadata_types`](dsl-ashgraphql-resource.html#graphql-queries-read_one-metadata_types)`keyword``[]`Type overrides for metadata fields on the read action.[`show_metadata`](dsl-ashgraphql-resource.html#graphql-queries-read_one-show_metadata)`list(atom)`The metadata attributes to show. Defaults to all.[`as_mutation?`](dsl-ashgraphql-resource.html#graphql-queries-read_one-as_mutation?)`boolean``false`Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-resource.html#graphql-queries-read_one-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-queries-read_one-hide_inputs)`list(atom)``[]`A list of inputs to hide from the mutation.

### [](dsl-ashgraphql-resource.html#introspection-1)Introspection

Target: [`AshGraphql.Resource.Query`](AshGraphql.Resource.Query.html)

## [](dsl-ashgraphql-resource.html#graphql-queries-list)graphql.queries.list

```
list name, action
```

A query to fetch a list of records

### [](dsl-ashgraphql-resource.html#examples-4)Examples

```
list :list_posts, :read
```

```
list :list_posts_paginated, :read, relay?: true
```

### [](dsl-ashgraphql-resource.html#arguments-2)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-queries-list-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-resource.html#graphql-queries-list-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-resource.html#options-3)Options

NameTypeDefaultDocs[`relay?`](dsl-ashgraphql-resource.html#graphql-queries-list-relay?)`boolean``false`If true, the graphql queries/resolvers for this resource will be built to honor the relay specification. See [the relay guide](https://hexdocs.pm/documentation/topics/relay.html) for more.[`paginate_with`](dsl-ashgraphql-resource.html#graphql-queries-list-paginate_with)`:keyset | :offset | nil``:keyset`Determine the pagination strategy to use, if multiple are available. If `nil`, no pagination is applied, otherwise the given strategy is used.[`type_name`](dsl-ashgraphql-resource.html#graphql-queries-list-type_name)`atom`Override the type name returned by this query. Must be set if the read action has `metadata` that is not hidden via the `show_metadata` key.[`description`](dsl-ashgraphql-resource.html#graphql-queries-list-description)`String.t`The query description that gets shown in the Graphql schema. If not provided, the action description will be used.[`metadata_names`](dsl-ashgraphql-resource.html#graphql-queries-list-metadata_names)`keyword``[]`Name overrides for metadata fields on the read action.[`metadata_types`](dsl-ashgraphql-resource.html#graphql-queries-list-metadata_types)`keyword``[]`Type overrides for metadata fields on the read action.[`show_metadata`](dsl-ashgraphql-resource.html#graphql-queries-list-show_metadata)`list(atom)`The metadata attributes to show. Defaults to all.[`as_mutation?`](dsl-ashgraphql-resource.html#graphql-queries-list-as_mutation?)`boolean``false`Places the query in the `mutations` key instead. Not typically necessary, but is often paired with `as_mutation?`. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-resource.html#graphql-queries-list-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-queries-list-hide_inputs)`list(atom)``[]`A list of inputs to hide from the mutation.

### [](dsl-ashgraphql-resource.html#introspection-2)Introspection

Target: [`AshGraphql.Resource.Query`](AshGraphql.Resource.Query.html)

## [](dsl-ashgraphql-resource.html#graphql-queries-action)graphql.queries.action

```
action name, action
```

Runs a generic action

### [](dsl-ashgraphql-resource.html#examples-5)Examples

```
action :check_status, :check_status
```

### [](dsl-ashgraphql-resource.html#arguments-3)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-queries-action-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-resource.html#graphql-queries-action-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-resource.html#options-4)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-resource.html#graphql-queries-action-description)`String.t`The description that gets shown in the Graphql schema. If not provided, the action description will be used.[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-queries-action-hide_inputs)`list(atom)``[]`Inputs to hide in the mutation/query[`error_location`](dsl-ashgraphql-resource.html#graphql-queries-action-error_location)`:in_result | :top_level``:top_level`If the result should have an `errors` and a `result` key (like create/update/destroy mutations), or if errors should be shown in the top level errors key[`modify_resolution`](dsl-ashgraphql-resource.html#graphql-queries-action-modify_resolution)`mfa`An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-resource.html#graphql-queries-action-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-resource.html#introspection-3)Introspection

Target: [`AshGraphql.Resource.Action`](AshGraphql.Resource.Action.html)

## [](dsl-ashgraphql-resource.html#graphql-mutations)graphql.mutations

Mutations (create/update/destroy actions) to expose for the resource.

### [](dsl-ashgraphql-resource.html#nested-dsls-2)Nested DSLs

- [create](dsl-ashgraphql-resource.html#graphql-mutations-create)
- [update](dsl-ashgraphql-resource.html#graphql-mutations-update)
- [destroy](dsl-ashgraphql-resource.html#graphql-mutations-destroy)
- [action](dsl-ashgraphql-resource.html#graphql-mutations-action)

### [](dsl-ashgraphql-resource.html#examples-6)Examples

```
mutations do
  create :create_post, :create
  update :update_post, :update
  destroy :destroy_post, :destroy
end
```

## [](dsl-ashgraphql-resource.html#graphql-mutations-create)graphql.mutations.create

```
create name, action
```

A mutation to create a record

### [](dsl-ashgraphql-resource.html#examples-7)Examples

```
create :create_post, :create
```

### [](dsl-ashgraphql-resource.html#arguments-4)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-mutations-create-name)`atom``:get`The name to use for the mutation.[`action`](dsl-ashgraphql-resource.html#graphql-mutations-create-action)`atom`The action to use for the mutation.

### [](dsl-ashgraphql-resource.html#options-5)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-resource.html#graphql-mutations-create-description)`String.t`The mutation description that gets shown in the Graphql schema. If not provided, the action description will be used.[`upsert?`](dsl-ashgraphql-resource.html#graphql-mutations-create-upsert?)`boolean``false`Whether or not to use the `upsert?: true` option when calling `YourDomain.create/2`.[`upsert_identity`](dsl-ashgraphql-resource.html#graphql-mutations-create-upsert_identity)`atom``false`Which identity to use for the upsert[`modify_resolution`](dsl-ashgraphql-resource.html#graphql-mutations-create-modify_resolution)`mfa`An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-mutations-create-hide_inputs)`list(atom)``[]`A list of inputs to hide from the mutation.[`relay_id_translations`](dsl-ashgraphql-resource.html#graphql-mutations-create-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-resource.html#introspection-4)Introspection

Target: [`AshGraphql.Resource.Mutation`](AshGraphql.Resource.Mutation.html)

## [](dsl-ashgraphql-resource.html#graphql-mutations-update)graphql.mutations.update

```
update name, action
```

A mutation to update a record

### [](dsl-ashgraphql-resource.html#examples-8)Examples

```
update :update_post, :update
```

### [](dsl-ashgraphql-resource.html#arguments-5)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-mutations-update-name)`atom``:get`The name to use for the mutation.[`action`](dsl-ashgraphql-resource.html#graphql-mutations-update-action)`atom`The action to use for the mutation.

### [](dsl-ashgraphql-resource.html#options-6)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-resource.html#graphql-mutations-update-description)`String.t`The mutation description that gets shown in the Graphql schema. If not provided, the action description will be used.[`identity`](dsl-ashgraphql-resource.html#graphql-mutations-update-identity)`atom`The identity to use to fetch the record to be updated. Use `false` if no identity is required.[`read_action`](dsl-ashgraphql-resource.html#graphql-mutations-update-read_action)`atom`The read action to use to fetch the record to be updated. Defaults to the primary read action.[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-mutations-update-hide_inputs)`list(atom)`A list of inputs to hide from the mutation.[`relay_id_translations`](dsl-ashgraphql-resource.html#graphql-mutations-update-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-resource.html#introspection-5)Introspection

Target: [`AshGraphql.Resource.Mutation`](AshGraphql.Resource.Mutation.html)

## [](dsl-ashgraphql-resource.html#graphql-mutations-destroy)graphql.mutations.destroy

```
destroy name, action
```

A mutation to destroy a record

### [](dsl-ashgraphql-resource.html#examples-9)Examples

```
destroy :destroy_post, :destroy
```

### [](dsl-ashgraphql-resource.html#arguments-6)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-mutations-destroy-name)`atom``:get`The name to use for the mutation.[`action`](dsl-ashgraphql-resource.html#graphql-mutations-destroy-action)`atom`The action to use for the mutation.

### [](dsl-ashgraphql-resource.html#options-7)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-resource.html#graphql-mutations-destroy-description)`String.t`The mutation description that gets shown in the Graphql schema. If not provided, the action description will be used.[`read_action`](dsl-ashgraphql-resource.html#graphql-mutations-destroy-read_action)`atom`The read action to use to fetch the record to be destroyed. Defaults to the primary read action.[`identity`](dsl-ashgraphql-resource.html#graphql-mutations-destroy-identity)`atom`The identity to use to fetch the record to be destroyed. Use `false` if no identity is required.[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-mutations-destroy-hide_inputs)`list(atom)`A list of inputs to hide from the mutation.[`relay_id_translations`](dsl-ashgraphql-resource.html#graphql-mutations-destroy-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-resource.html#introspection-6)Introspection

Target: [`AshGraphql.Resource.Mutation`](AshGraphql.Resource.Mutation.html)

## [](dsl-ashgraphql-resource.html#graphql-mutations-action)graphql.mutations.action

```
action name, action
```

Runs a generic action

### [](dsl-ashgraphql-resource.html#examples-10)Examples

```
action :check_status, :check_status
```

### [](dsl-ashgraphql-resource.html#arguments-7)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-mutations-action-name)`atom``:get`The name to use for the query.[`action`](dsl-ashgraphql-resource.html#graphql-mutations-action-action)`atom`The action to use for the query.

### [](dsl-ashgraphql-resource.html#options-8)Options

NameTypeDefaultDocs[`description`](dsl-ashgraphql-resource.html#graphql-mutations-action-description)`String.t`The description that gets shown in the Graphql schema. If not provided, the action description will be used.[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-mutations-action-hide_inputs)`list(atom)``[]`Inputs to hide in the mutation/query[`error_location`](dsl-ashgraphql-resource.html#graphql-mutations-action-error_location)`:in_result | :top_level``:top_level`If the result should have an `errors` and a `result` key (like create/update/destroy mutations), or if errors should be shown in the top level errors key[`modify_resolution`](dsl-ashgraphql-resource.html#graphql-mutations-action-modify_resolution)`mfa`An MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. See the [the guide](https://hexdocs.pm/documentation/topics/modifying-the-resolution.html) for more.[`relay_id_translations`](dsl-ashgraphql-resource.html#graphql-mutations-action-relay_id_translations)`keyword``[]`A keyword list indicating arguments or attributes that have to be translated from global Relay IDs to internal IDs. See the [Relay guide](relay.html#translating-relay-global-ids-passed-as-arguments) for more.

### [](dsl-ashgraphql-resource.html#introspection-7)Introspection

Target: [`AshGraphql.Resource.Action`](AshGraphql.Resource.Action.html)

## [](dsl-ashgraphql-resource.html#graphql-subscriptions)graphql.subscriptions

Subscriptions (notifications) to expose for the resource.

### [](dsl-ashgraphql-resource.html#nested-dsls-3)Nested DSLs

- [subscribe](dsl-ashgraphql-resource.html#graphql-subscriptions-subscribe)

### [](dsl-ashgraphql-resource.html#examples-11)Examples

```
subscriptions do
  subscribe :bucket_created do
    actions :create
    read_action :read
  end
end
```

### [](dsl-ashgraphql-resource.html#options-9)Options

NameTypeDefaultDocs[`pubsub`](dsl-ashgraphql-resource.html#graphql-subscriptions-pubsub)`module`The pubsub module to use for the subscription

## [](dsl-ashgraphql-resource.html#graphql-subscriptions-subscribe)graphql.subscriptions.subscribe

```
subscribe name
```

A subscription to listen for changes on the resource

### [](dsl-ashgraphql-resource.html#examples-12)Examples

```
subscribe :post_created do
  action_types(:create)
end
```

### [](dsl-ashgraphql-resource.html#arguments-8)Arguments

NameTypeDefaultDocs[`name`](dsl-ashgraphql-resource.html#graphql-subscriptions-subscribe-name)`atom`The name to use for the subscription.

### [](dsl-ashgraphql-resource.html#options-10)Options

NameTypeDefaultDocs[`actor`](dsl-ashgraphql-resource.html#graphql-subscriptions-subscribe-actor)`(any -> any) | module`The actor to use for authorization.[`actions`](dsl-ashgraphql-resource.html#graphql-subscriptions-subscribe-actions)`list(atom) | atom`The create/update/destroy actions the subsciption should listen to.[`action_types`](dsl-ashgraphql-resource.html#graphql-subscriptions-subscribe-action_types)`list(atom) | atom`The type of actions the subsciption should listen to.[`read_action`](dsl-ashgraphql-resource.html#graphql-subscriptions-subscribe-read_action)`atom`The read action to use for reading data[`hide_inputs`](dsl-ashgraphql-resource.html#graphql-subscriptions-subscribe-hide_inputs)`list(atom)``[]`A list of inputs to hide from the subscription, usable if the read action has arguments.

### [](dsl-ashgraphql-resource.html#introspection-8)Introspection

Target: [`AshGraphql.Resource.Subscription`](AshGraphql.Resource.Subscription.html)

## [](dsl-ashgraphql-resource.html#graphql-managed_relationships)graphql.managed\_relationships

Generates input objects for `manage_relationship` arguments on resource actions.

### [](dsl-ashgraphql-resource.html#nested-dsls-4)Nested DSLs

- [managed\_relationship](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship)

### [](dsl-ashgraphql-resource.html#examples-13)Examples

```
managed_relationships do
  manage_relationship :create_post, :comments
end
```

### [](dsl-ashgraphql-resource.html#options-11)Options

NameTypeDefaultDocs[`auto?`](dsl-ashgraphql-resource.html#graphql-managed_relationships-auto?)`boolean``true`Automatically derive types for all arguments that have a `manage_relationship` call change.

## [](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship)graphql.managed\_relationships.managed\_relationship

```
managed_relationship action, argument
```

Instructs ash\_graphql that a given argument with a `manage_relationship` change should have its input objects derived automatically from the potential actions to be called.

For example, given an action like:

```
actions do
create :create do
argument :comments, {:array, :map}

change manage_relationship(:comments, type: :direct_control) # <- we look for this change with a matching argument name
end
end
```

You could add the following managed\_relationship

```
graphql do
...

managed_relationships do
managed_relationship :create, :comments
end
end
```

By default, the `{:array, :map}` would simply be a `json[]` type. If the argument name is placed in this list, all of the potential actions that could be called will be combined into a single input object. If there are type conflicts (for example, if the input could create or update a record, and the create and update actions have an argument of the same name but with a different type), a warning is emitted at compile time and the first one is used. If that is insufficient, you will need to do one of the following:

1.) provide the `:types` option to the `managed_relationship` constructor (see that option for more) 2.) define a custom type, with a custom input object (see the custom types guide), and use that custom type instead of `:map` 3.) change your actions to not have overlapping inputs with different types

Since managed relationships can ultimately call multiple actions, there is the possibility of field type conflicts. Use the `types` option to determine the type of fields and remove the conflict warnings.

For `non_null` use `{:non_null, type}`, and for a list, use `{:array, type}`, for example:

`{:non_null, {:array, {:non_null, :string}}}` for a non null list of non null strings.

To *remove* a key from the input object, simply pass `nil` as the type.

### [](dsl-ashgraphql-resource.html#arguments-9)Arguments

NameTypeDefaultDocs[`action`](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship-action)`atom`The action that accepts the argument[`argument`](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship-argument)`atom`The argument for which an input object should be derived.

### [](dsl-ashgraphql-resource.html#options-12)Options

NameTypeDefaultDocs[`lookup_with_primary_key?`](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship-lookup_with_primary_key?)`boolean`If the managed\_relationship has `on_lookup` behavior, this option determines whether or not the primary key is provided in the input object for looking up.[`lookup_identities`](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship-lookup_identities)`list(atom)`Determines which identities are provided in the input object for looking up, if there is `on_lookup` behavior. Defalts to the `use_identities` option.[`type_name`](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship-type_name)`atom`The name of the input object that will be derived. Defaults to `<action_type>_<resource>_<argument_name>_input`[`types`](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship-types)`any`A keyword list of field names to their graphql type identifiers.[`ignore?`](dsl-ashgraphql-resource.html#graphql-managed_relationships-managed_relationship-ignore?)`boolean``false`Use this to ignore a given managed relationship, preventing `auto? true` from deriving a type for it.

### [](dsl-ashgraphql-resource.html#introspection-9)Introspection

Target: [`AshGraphql.Resource.ManagedRelationship`](AshGraphql.Resource.ManagedRelationship.html)

[← Previous Page DSL: AshGraphql.Domain](dsl-ashgraphql-domain.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/dsls/DSL-AshGraphql.Resource.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/generic-actions.md#L1 "View Source") Generic Actions

Generic actions allow us to build any interface we want in Ash. AshGraphql has full support for generic actions, from type generation to data loading.

This means that you can write actions that return records or lists of records and those will have all of their fields appropriately loadable, or you can have generic actions that return simple scalars, like integers or strings.

## [](generic-actions.html#examples)Examples

Here we have a simple generic action returning a scalar value.

```
graphql do
  queries do
    action :say_hello, :say_hello
  end
end

actions do
  action :say_hello, :string do
    argument :to, :string, allow_nil?: false

    run fn input, _ ->
      {:ok, "Hello, #{input.arguments.to}"}
    end
  end
end
```

And here we have a generic action returning a list of records.

```
graphql do
  type :post

  queries do
    action :random_ten, :random_ten
  end
end

actions do
  action :random_ten, {:array, :struct} do
    constraints items: [instance_of: __MODULE__]

    run fn input, context ->
      # This is just an example, not an efficient way to get
      # ten random records
      with {:ok, records} <-  Ash.read(__MODULE__) do
        {:ok, Enum.take_random(records, 10)}
      end
    end
  end
end
```

[← Previous Page Handling Errors](handle-errors.html)

[Next Page → Using the SDL File](sdl-file.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/generic-actions.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/tutorials/getting-started-with-graphql.md#L1 "View Source") Getting Started With GraphQL

## [](getting-started-with-graphql.html#get-familiar-with-ash-resources)Get familiar with Ash resources

If you haven't already, read the [Ash Getting Started Guide](../ash/get-started.html). This assumes that you already have resources set up, and only gives you the steps to *add* AshGraphql to your resources/domains.

## [](getting-started-with-graphql.html#installation)Installation

### [](getting-started-with-graphql.html#using-igniter-recommended)Using Igniter (recommended)

```
mix igniter.install ash_graphql
```

### [](getting-started-with-graphql.html#manual)Manual

#### Bring in the `ash_graphql` dependency

```
def deps()
  [
    ...
    {:ash_graphql, "~> 1.5.0"}
  ]
end
```

#### Setting up your schema

If you don't have an absinthe schema, you can create one just for ash. Replace `helpdesk` in the examples with your own application name.

See [the SDL file guide](sdl-file.html) for more information on using the SDL file, or remove the `generate_sdl_file` option to skip generating it on calls to [`mix ash.codegen`](../ash/3.4.50/Mix.Tasks.Ash.Codegen.html).

in `lib/helpdesk/schema.ex`

```
defmodule Helpdesk.GraphqlSchema do
  use Absinthe.Schema

  # Add your domains here
  use AshGraphql,
    domains: [Your.Domains]

  query do
    # Custom absinthe queries can be placed here
    @desc "Remove me once you have a query of your own!"
    field :remove_me, :string do
      resolve fn _, _, _ ->
        {:ok, "Remove me!"}
      end
    end
  end

  mutation do
    # Custom absinthe mutations can be placed here
  end
end
```

#### Connect your schema

##### Using Phoenix

Add the following code to your Phoenix router. It's useful to set up the Absinthe playground for trying things out, but it's optional.

```
pipeline :graphql do
  plug AshGraphql.Plug
end

scope "/gql" do
  pipe_through [:graphql]

  forward "/playground",
          Absinthe.Plug.GraphiQL,
          schema: Module.concat(["Helpdesk.GraphqlSchema"]),
          interface: :playground

  forward "/",
    Absinthe.Plug,
    schema: Module.concat(["Helpdesk.GraphqlSchema"])
end
```

### [](getting-started-with-graphql.html#whats-up-with-module-concat-1)Whats up with [`Module.concat/1`](../elixir/Module.html#concat/1)?

This [`Module.concat/1`](../elixir/Module.html#concat/1) prevents a [compile-time dependency](https://dashbit.co/blog/speeding-up-re-compilation-of-elixir-projects) from this router module to the schema module. It is an implementation detail of how `forward/2` works that you end up with a compile-time dependency on the schema, but there is no need for this dependency, and that dependency can have *drastic* impacts on your compile times in certain scenarios.

If you started with `mix new ...` instead of `mix phx.new ...` and you want to still use Phoenix, the fastest path that way is typically to just create a new Phoenix application and copy your resources/config over.

##### Using Plug

If you are unfamiliar with how plug works, this [guide](https://elixirschool.com/en/lessons/specifics/plug/#dependencies) will be helpful for understanding it. It also guides you through adding plug to your application.

Then you can use a [`Plug.Router`](../plug/1.16.1/Plug.Router.html) and [forward](https://hexdocs.pm/plug/Plug.Router.html#forward/2) to your plugs similar to how it is done for phoenix:

```
plug AshGraphql.Plug

forward "/gql",
  to: Absinthe.Plug,
  init_opts: [schema: Module.concat(["Helpdesk.GraphqlSchema"])]

forward "/playground",
  to: Absinthe.Plug.GraphiQL,
  init_opts: [
    schema: Module.concat(["Helpdesk.GraphqlSchema"]),
    interface: :playground
  ]
```

For information on why we are using [`Module.concat/1`](../elixir/Module.html#concat/1), see the note above in the Phoenix section.

## [](getting-started-with-graphql.html#select-domains-to-show-in-your-graphql)Select domains to show in your GraphQL

In the `use AshGraphql` call in your schema, you specify which domains you want to expose in your GraphQL API. Add any domains that will have [`AshGraphql`](AshGraphql.html) queries/mutations to the `domains` list. For example:

```
use AshGraphql, domains: [Your.Domain1, Your.Domain2]
```

## [](getting-started-with-graphql.html#adding-queries-and-mutations)Adding Queries and Mutations

Some example queries/mutations are shown below. If no queries/mutations are added, nothing will show up in the GraphQL API, so be sure to set one up if you want to try it out.

### [](getting-started-with-graphql.html#queries-mutations-on-the-resource)Queries &amp; Mutations on the Resource

Here we show queries and mutations being added to the resource, but you can also define them on the *domain*. See below for an equivalent definition

```
defmodule Helpdesk.Support.Ticket do
  use Ash.Resource,
    ...,
    extensions: [
      AshGraphql.Resource
    ]

  graphql do
    type :ticket

    queries do
      # Examples

      # create a field called `get_ticket` that uses the `read` read action to fetch a single ticke
      get :get_ticket, :read
      # create a field called `most_important_ticket` that uses the `most_important` read action to fetch a single record
      read_one :most_important_ticket, :most_important

      # create a field called `list_tickets` that uses the `read` read action to fetch a list of tickets
      list :list_tickets, :read
    end

    mutations do
      # Examples

      create :create_ticket, :create
      update :update_ticket, :update
      destroy :destroy_ticket, :destroy
    end
  end

  ...
end
```

### [](getting-started-with-graphql.html#queries-mutations-on-the-domain)Queries &amp; Mutations on the Domain

```
defmodule Helpdesk.Support.Ticket do
  use Ash.Resource,
    ...,
    extensions: [
      AshGraphql.Resource
    ]

  # The resource still determines its type, and any other resource/type-based
  # configuration
  graphql do
    type :ticket
  end

  ...
end

defmodule Helpdesk.Support do
  use Ash.Domain,
    extensions: [
      AshGraphql.Domain
    ]

  ...
  graphql do
    # equivalent queries and mutations, but the first argument
    # is the resource because the domain can define queries for
    # any of its resources
    queries do
      get Helpdesk.Support.Ticket, :get_ticket, :read
      read_one Helpdesk.Support.Ticket, :most_important_ticket, :most_important
      list Helpdesk.Support.Ticket, :list_tickets, :read
    end

    mutations do
      create Helpdesk.Support.Ticket, :create_ticket, :create
      update Helpdesk.Support.Ticket, :update_ticket, :update
      destroy Helpdesk.Support.Ticket, :destroy_ticket, :destroy
    end
end
```

## [](getting-started-with-graphql.html#what-s-next)What's next?

Topics:

- [GraphQL Generation](graphql-generation.html)

How Tos:

- [Authorize With GraphQL](authorize-with-graphql.html)
- [Handle Errors](handle-errors.html)
- [Use Enums with GraphQL](use-enums-with-graphql.html)
- [Use JSON with GraphQL](use-json-with-graphql.html)

[← Previous Page Home](readme.html)

[Next Page → Authorize with GraphQL](authorize-with-graphql.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/tutorials/getting-started-with-graphql.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/graphql-generation.md#L1 "View Source") GraphQL Query Generation

Following where we left off from [Getting Started with GraphQL](getting-started-with-graphql.html), this guide explores what the GraphQL requests and responses look like for different queries defined with the AshGraphql DSL.

All of the following examples apply to queries &amp; mutations places on the domain as well.

## [](graphql-generation.html#fetch-data-by-id)Fetch Data by ID

```
defmodule Helpdesk.Support.Ticket do
  use Ash.Resource,
    ...,
    extensions: [
      AshGraphql.Resource
    ]

  attributes do
    # Add an autogenerated UUID primary key called `:id`.
    uuid_primary_key :id

    # Add a string type attribute called `:subject`
    attribute :subject, :string
  end

  actions do
    # Add a set of simple actions. You'll customize these later.
    defaults [:read, :update, :destroy]
  end

  graphql do
    type :ticket

    queries do
      # create a field called `get_ticket` that uses the `read` read action to fetch a single ticket
      get :get_ticket, :read
    end
  end
end
```

For the `get_ticket` query defined above, the corresponding GraphQL would look like this:

```
query ($id: ID!) {
  getTicket(id: $id) {
    id
    subject
  }
}
```

And the response would look similar to this:

```
{
  "data": {
    "getTicket": {
      "id": "",
      "subject": ""
    }
  }
}
```

Let's look at an example of querying a list of things.

```
  graphql do
    type :ticket

    queries do
      # create a field called `get_ticket` that uses the `read` read action to fetch a single ticket
      get :get_ticket, :read

      # create a field called `list_tickets` that uses the `read` read action to fetch a list of tickets
      list :list_tickets, :read
    end
  end
```

This time, we've added `list :list_tickets, :read`, to generate a GraphQL query for listing tickets. The request would look something like this:

```
query {
  listTickets {
    id
    subject
  }
}
```

And the response would look similar to this:

```
{
  "data": {
    "listTickets": [
      {
        "id": "",
        "subject": ""
      }
    ]
  }
}
```

## [](graphql-generation.html#filter-data-with-arguments)Filter Data With Arguments

Now, let's say we want to add query parameters to `listTickets`. How do we do that? Consider `list :list_tickets, :read` and the `actions` section:

```
  actions do
    # Add a set of simple actions. You'll customize these later.
    defaults [:read, :update, :destroy]
  end

  graphql do
    type :ticket

    queries do
      # create a field called `list_tickets` that uses the `read` read action to fetch a list of tickets
      list :list_tickets, :read
    end
  end
```

The second argument to `list :list_tickets, :read` is the action that will be called when the query is run. In the current example, the action is `:read`, which is the generic Read action. Let's create a custom action in order to define query parameters for the `listTickets` query.

We'll call this action `:query_tickets`:

```
  actions do
    defaults [:read, :update, :destroy]

    read :query_tickets do
      argument :representative_id, :uuid

      filter(
        expr do
          is_nil(^arg(:representative_id)) or representative_id == ^arg(:representative_id)
        end
      )
    end
  end

  graphql do
    type :ticket

    queries do
      # create a field called `list_tickets` that uses the `:query_tickets` read action to fetch a list of tickets
      list :list_tickets, :query_tickets
    end
  end
```

In the `graphql` section, the `list/2` call has been changed, replacing the `:read` action with `:query_tickets`.

The GraphQL request would look something like this:

```
query ($representative_id: ID) {
  list_tickets(representative_id: $representative_id) {
    id
    representative_id
    subject
  }
}
```

## [](graphql-generation.html#mutations-and-enums)Mutations and Enums

Now, let's look at how to create a ticket by using a GraphQL mutation.

Let's say you have a Resource that defines an enum-like attribute:

```
defmodule Helpdesk.Support.Ticket do
  use Ash.Resource,
    ...,
    extensions: [
      AshGraphql.Resource
    ]


  attributes do
    uuid_primary_key :id
    attribute :subject, :string
    attribute :status, :atom, constraints: [one_of: [:open, :closed]]
  end

  actions do
    defaults [:create, :read, :update, :destroy]
  end

  graphql do
    type :ticket

    queries do
      get :get_ticket, :read
    end

    mutations do
      create :create_ticket, :create
    end
  end
end
```

Above, the following changes have been added:

1. In the `attributes` section, the `:status` attribute has been added.
2. In the `actions` section, the `:create` action has been added.
3. The `:create_ticket` mutation has been defined in the new `graphql.mutations` section.

The `:status` attribute is an enum that is constrained to the values `[:open, :closed]`. When used in conjunction with AshGraphql, a GraphQL enum type called `TicketStatus` will be generated for this attribute. The possible GraphQL values for `TicketStatus` are `OPEN` and `CLOSED`. See [Use Enums with GraphQL](use-enums-with-graphql.html) for more information.

We can now create a ticket with the `createTicket` mutation:

```
mutation ($input: CreateTicketInput!) {
  createTicket(input: $input) {
    result {
      id
      subject
      status
    }
    errors {
      code
      fields
      message
      shortMessage
      vars
    }
  }
}
```

**Note**

- The resulting ticket data is wrapped in AshGraphql's `result` object.
- Validation errors are wrapped in a list of error objects under `errors`, also specified in the query. AshGraphql does this by default instead of exposing errors in GraphQL's standard `errors` array. This behavior can be changed by setting `root_level_errors? true` in the `graphql` section of your Ash domain module:
  
  ```
  defmodule Helpdesk.Support do
  use Ash.Domain, extensions: [AshGraphql.Domain]

  graphql do
    root_level_errors? true
  end
end
  ```

If we were to run this mutation in a test, it would look something like this:

```
input = %{
  subject: "My Ticket",
  status: "OPEN"
}

resp_body =
  post(conn, "/api/graphql", %{
    query: query,
    variables: %{input: input}
  })
  |> json_response(200)
```

Notice that the `status` attribute is set to `"OPEN"` and not `"open"`. It is important that the value of the `status` be uppercase. This is required by GraphQL enums. AshGraphql will automatically convert the value to the correct case.

The response will look something like this:

```
{
  "data": {
    "createTicket": {
      "result": {
        "id": "b771e433-0979-4d07-a280-4d12373849aa",
        "subject": "My Ticket",
        "status": "OPEN"
      }
    }
  }
}
```

Again, AshGraphql will automatically convert the `status` value from `:open` to `"OPEN"`.

## [](graphql-generation.html#more-graphql-docs)More GraphQL Docs

If you haven't already, please turn on the documentation tag for AshGraphql. Tags can be controlled at the top of the left navigation menu, under "Including Libraries:".

- [Getting Started With GraphQL](getting-started-with-graphql.html)
- [`AshGraphql.Domain`](AshGraphql.Domain.html)

[← Previous Page Monitoring](monitoring.html)

[Next Page → Modifying the Resolution](modifying-the-resolution.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/graphql-generation.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/handle-errors.md#L1 "View Source") Handling Errors

There are various options that can be set on the Domain module to determine how errors behave and/or are shown in the GraphQL.

## [](handle-errors.html#showing-raised-errors)Showing raised errors

For security purposes, if an error is *raised* as opposed to returned somewhere, the error is hidden. Set this to `true` in dev/test environments for an easier time debugging.

```
graphql do
  show_raised_errors? true
end

# or it can be done in config
# make sure you've set `otp_app` in your domain, i.e use Ash.Domain, otp_app: :my_app

config :my_app, YourDomain, [
  graphql: [
    show_raised_errors?: true
  ]
]
```

## [](handle-errors.html#root-level-errors)Root level errors

By default, action errors are simply shown in the `errors` field for mutations. Set this to `true` to return them as root level errors instead.

```
graphql do
  root_level_errors? true
end
```

## [](handle-errors.html#error-handler)Error Handler

Setting an error handler allows you to use things like `gettext` to translate errors and/or modify errors in some way. This error handler will take the error object to be returned, and the context. See the [absinthe docs](../absinthe/context-and-authentication.html#context-and-plugs) for adding to the absinthe context (i.e for setting a locale).

```
graphql do
  error_handler {MyApp.GraphqlErrorHandler, :handle_error, []}
end
```

Keep in mind, that you will want to ensure that any custom error handler you add performs the logic to replace variables in error messages.

This is what the default error handler looks like, for example:

```
defmodule AshGraphql.DefaultErrorHandler do
  @moduledoc "Replaces any text in message or short_message with variables"

  def handle_error(
        %{message: message, short_message: short_message, vars: vars} = error,
        _context
      ) do
    %{
      error
      | message: replace_vars(message, vars),
        short_message: replace_vars(short_message, vars)
    }
  end

  def handle_error(other, _), do: other

  defp replace_vars(string, vars) do
    vars =
      if is_map(vars) do
        vars
      else
        List.wrap(vars)
      end

    Enum.reduce(vars, string, fn {key, value}, acc ->
      if String.contains?(acc, "%{#{key}}") do
        String.replace(acc, "%{#{key}}", to_string(value))
      else
        acc
      end
    end)
  end
end
```

### [](handle-errors.html#error-handler-in-resources)Error handler in resources

Error handlers can also be specified in a resource. For examples:

```
defmodule MyApp.Resource do
  use Ash.Resource,
    domain: [MyApp.Domain],
    extensions: [AshGraphql]
    
  graphql do
    type :ticket
    error_handler {MyApp.Resource.GraphqlErrorHandler, :handle_error, []}
  end
  
  # ...
end
```

If both an error handler for the resource and one for the domain are defined, they both take action: first the resource handler and then the domain handler.

If an action on a resource calls other actions (e.g. with a `manage_relationships`) the errors are handled by the primary resource that called the action.

### [](handle-errors.html#filtering-by-action)Filtering by action

The error handler carries in the context the name of the primary action that returned the error down the line. With that one can set different behaviors depending on the specific action that triggered the error. For example consider the following resource with `:create`, `:custom_create` and `:update` actions:

```
defmodule MyApp.Resource do
  use Ash.Resource,
    domain: [MyApp.Domain],
    extensions: [AshGraphql]
    
  graphql do
    type :ticket
    error_handler {MyApp.Resource.GraphqlErrorHandler, :handle_error, []}
  end
  
  actions do
    deafults [:read, :destroy, :create]
    create :custom_create do
      # ...
      change manage_relationships # ...
    end
    
    update :update do
      # ...
    end
  end
end
```

The error handler `MyApp.Resource.GraphqlErrorHandler` can in this case set different behaviors depending on the specific action that caused the error:

```
defmodule MyApp.Resource.GraphqlErrorHandler do

  def handle_error(error, context) do
    %{action: action} = context

    case action do
      :custom_create -> custom_create_behavior(error)
      :update -> update_behavior(error)
      
      _ -> deafult_behvaior(error)
    end
  end
end
```

## [](handle-errors.html#custom-errors)Custom Errors

If you created your own Errors as described in the [Ash Docs](../ash/error-handling.html#using-a-custom-exception) you also need to implement the protocol for it to be displayed in the Api.

```
defmodule Ash.Error.Action.InvalidArgument do
  @moduledoc "Used when an invalid value is provided for an action argument"
  use Splode.Error, fields: [:field, :message, :value], class: :invalid

  def message(error) do
    """
    Invalid value provided#{for_field(error)}#{do_message(error)}

    #{inspect(error.value)}
    """
  end
  
  defimpl AshGraphql.Error, for: Ash.Error.Changes.InvalidArgument do
    def to_error(error) do
      %{
        message: error.message,
        short_message: error.message,
        code: "invalid_argument",
        vars: Map.new(error.vars),
        fields: [error.field]
      }
    end
  end
end
```

[← Previous Page Authorize with GraphQL](authorize-with-graphql.html)

[Next Page → Generic Actions](generic-actions.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/handle-errors.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/mix/tasks/ash_graphql.install.ex#L2 "View Source") mix ash\_graphql.install (ash\_graphql v1.5.0)

Installs AshGraphql. Should be run with `mix igniter.install ash_graphql`

# [](Mix.Tasks.AshGraphql.Install.html#summary)Summary

## [Functions](Mix.Tasks.AshGraphql.Install.html#functions)

[igniter(igniter, argv)](Mix.Tasks.AshGraphql.Install.html#igniter/2)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.3/Igniter.Mix.Task.html#c:igniter/2).

# [](Mix.Tasks.AshGraphql.Install.html#functions)Functions

[](Mix.Tasks.AshGraphql.Install.html#igniter/2)

# igniter(igniter, argv)

[](https://github.com/ash-project/ash_graphql/blob/v1.5.0/lib/mix/tasks/ash_graphql.install.ex#L8)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.3/Igniter.Mix.Task.html#c:igniter/2).

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/modifying-the-resolution.md#L1 "View Source") Modifying the Resolution

Using the `modify_resolution` option, you can alter the [`Absinthe.Resolution`](../absinthe/1.7.8/Absinthe.Resolution.html).

`modify_resolution` is an MFA that will be called with the resolution, the query, and the result of the action as the first three arguments. Must return a new [`Absinthe.Resolution`](../absinthe/1.7.8/Absinthe.Resolution.html).

This can be used to implement things like setting cookies based on resource actions. A method of using resolution context for that is documented [in Absinthe.Plug](../absinthe_plug/Absinthe.Plug.html#module-before-send)

### [](modifying-the-resolution.html#as_mutation)as\_mutation?

If you are modifying the context in a query, then you should also set `as_mutation?` to true and represent this in your graphql as a mutation. See `as_mutation?` for more.

[← Previous Page GraphQL Query Generation](graphql-generation.html)

[Next Page → Relay](relay.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/modifying-the-resolution.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/monitoring.md#L1 "View Source") Monitoring

Please read [the Ash monitoring guide](../ash/monitoring.html) for more information. Here we simply cover the additional traces &amp; telemetry events that we publish from this extension.

A tracer can be configured in the domain. It will fallback to the global tracer configuration `config :ash, :tracer, Tracer`

```
graphql do
  trace MyApp.Tracer
end
```

## [](monitoring.html#traces)Traces

Each graphql resolver, and batch resolution of the underlying data loader, will produce a span with an appropriate name. We also set a `source: :graphql` metadata if you want to filter them out or annotate them in some way.

## [](monitoring.html#telemetry)Telemetry

AshGraphql emits the following telemetry events, suffixed with `:start` and `:stop`. Start events have `system_time` measurements, and stop events have `system_time` and `duration` measurements. All times will be in the native time unit.

- `[:ash, <domain_short_name>, :gql_mutation]` - The execution of a mutation. Use `resource_short_name` and `mutation` (or `action`) metadata to break down measurements.
- `[:ash, <domain_short_name>, :gql_query]` - The execution of a mutation. Use `resource_short_name` and `query` (or `action`) metadata to break down measurements.
- `[:ash, <domain_short_name>, :gql_relationship]` - The resolution of a relationship. Use `resource_short_name` and `relationship` metadata to break down measurements.
- `[:ash, <domain_short_name>, :gql_calculation]` - The resolution of a calculation. Use `resource_short_name` and `calculation` metadata to break down measurements.
- `[:ash, <domain_short_name>, :gql_relationship_batch]` - The resolution of a batch of relationships by the data loader. Use `resource_short_name` and `relationship` metadata to break down measurements.
- `[:ash, <domain_short_name>, :gql_calculation_batch]` - The resolution of a batch of calculations by the data loader. Use `resource_short_name` and `calculation` metadata to break down measurements.

[← Previous Page Use Maps with GraphQL](use-maps-with-graphql.html)

[Next Page → GraphQL Query Generation](graphql-generation.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/monitoring.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_graphql/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_graphql.svg)](https://hex.pm/packages/ash_graphql) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_graphql.html)

# AshGraphql

Welcome! This is the extension for building GraphQL APIs with [Ash](../ash.html). The generated GraphQL APIs are powered by [Absinthe](../absinthe.html). Generate a powerful Graphql API in minutes!

## [](readme.html#tutorials)Tutorials

- [Getting Started with GraphQL](getting-started-with-graphql.html)

## [](readme.html#topics)Topics

- [Authorize with GraphQL](authorize-with-graphql.html)
- [Handle Errors](handle-errors.html)
- [Monitoring](monitoring.html)
- [Use JSON with GraphQL](use-json-with-graphql.html)
- [Use Subscriptions with GraphQL](use-subscriptions-with-graphql.html)
- [GraphQL Generation](graphql-generation.html)
- [Modifying the Resolution](modifying-the-resolution.html)
- [Relay](relay.html)
- [Use Enums with GraphQL](use-enums-with-graphql.html)
- [Use Maps with GraphQL](use-maps-with-graphql.html)
- [Use Unions with GraphQL](use-unions-with-graphql.html)
- [Upgrading to 1.0](upgrade.html)

## [](readme.html#reference)Reference

- [AshGraphql.Resource DSL](dsl-ashgraphql-resource.html)
- [AshGraphql.Domain DSL](dsl-ashgraphql-domain.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Getting Started With GraphQL](getting-started-with-graphql.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/README.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/relay.md#L1 "View Source") Relay

Enabling Relay for a resource sets it up to follow the [Relay specification](https://relay.dev/graphql/connections.htm).

The two changes that are made currently are:

- the type for the resource will implement the [`Node`](../elixir/Node.html) interface
- pagination over that resource will behave as a `Connection`.

## [](relay.html#using-ash-s-built-in-relay-support)Using Ash's built-in Relay support

Set `relay? true` on the resource:

```
graphql do
  relay? true

  ...
end
```

## [](relay.html#relay-global-ids)Relay Global IDs

Use the following option to generate Relay Global IDs (see [here](https://relay.dev/graphql/objectidentification.htm)).

```
use AshGraphql, relay_ids?: true
```

This allows refetching a node using the `node` query and passing its global ID.

### [](relay.html#translating-relay-global-ids-passed-as-arguments)Translating Relay Global IDs passed as arguments

When `relay_ids?: true` is passed, users of the API will have access only to the global IDs, so they will also need to use them when an ID is required as argument. You actions, though, internally use the normal IDs defined by the data layer.

To handle the translation between the two ID domains, you can use the `relay_id_translations` option. With this, you can define a list of arguments that will be translated from Relay global IDs to internal IDs.

For example, if you have a `Post` resource with an action to create a post associated with an author:

```
create :create do
  argument :author_id, :uuid

  # Do stuff with author_id
end
```

You can add this to the mutation connected to that action:

```
mutations do
  create :create_post, :create do
    relay_id_translations [input: [author_id: :user]]
  end
end
```

## [](relay.html#using-with-absinthe-relay-instead-of-ash-s-relay-type)Using with Absinthe.Relay instead of Ash's relay type

Use the following option when calling `use AshGraphql`

```
use AshGraphql, define_relay_types?: false
```

[← Previous Page Modifying the Resolution](modifying-the-resolution.html)

[Next Page → Custom Queries &amp; Mutations](custom-queries-and-mutations.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/relay.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/sdl-file.md#L1 "View Source") Using the SDL File

By passing the `generate_sdl_file` to `use AshGraphql`, AshGraphql will generate a schema file when you run [`mix ash.codegen`](../ash/3.4.50/Mix.Tasks.Ash.Codegen.html). For example:

```
use AshGraphql,
  domains: [Domain1, Domain2],
  generate_sdl_file: "priv/schema.graphql"
```

### [](sdl-file.html#ensure-your-schema-is-up-to-date-gitignored-or-not-generated)Ensure your schema is up to date, gitignored, or not generated

We suggest first adding `mix ash.codegen --check` to your CI/CD pipeline to ensure the schema is always up-to-date. Alternatively you can add the file to your `.gitignore`, or you can remove the `generate_sdl_file` option to skip generating the file.

With the `generate_sdl_file` option, calls to `mix ash.codegen <name>` will generate a `.graphql` file at the specified path.

Some things that you can use this SDL file for:

## [](sdl-file.html#documentation)Documentation

The schema file itself represents your entire GraphQL API definition, and examining it can be very useful.

## [](sdl-file.html#code-generation)Code Generation

You can use tools like [GraphQL codegen](https://the-guild.dev/graphql/codegen) to generate a client for your GraphQL API.

## [](sdl-file.html#validating-changes)Validating Changes

Use the SDL file to check for breaking changes in your schema, especially if you are exposing a public API. A plug and play github action for this can be found here: [https://the-guild.dev/graphql/inspector/docs/products/action](https://the-guild.dev/graphql/inspector/docs/products/action)

[← Previous Page Generic Actions](generic-actions.html)

[Next Page → Use Enums with GraphQL](use-enums-with-graphql.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/sdl-file.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/use-enums-with-graphql.md#L1 "View Source") Use Enums with GraphQL

If you define an [`Ash.Type.Enum`](../ash/3.4.50/Ash.Type.Enum.html), that enum type can be used both in attributes *and* arguments. You will need to add `graphql_type/0` to your implementation. AshGraphql will ensure that a single type is defined for it, which will be reused across all occurrences. If an enum type is referenced, but does not have `graphql_type/0` defined, it will be treated as a string input.

For example:

```
defmodule AshPostgres.Test.Types.Status do
  @moduledoc false
  use Ash.Type.Enum, values: [:open, :closed]

  def graphql_type(_), do: :ticket_status

  # Optionally, remap the names used in GraphQL, for instance if you have a value like `:"10"`
  # that value is not compatible with GraphQL

  def graphql_rename_value(:"10"), do: :ten
  def graphql_rename_value(value), do: value

  # You can also provide descriptions for the enum values, which will be exposed in the GraphQL
  # schema.
  # Remember to have a fallback clause that returns nil if you don't provide descriptions for all
  # values.

  def graphql_describe_enum_value(:open), do: "The post is open"
  def graphql_describe_enum_value(_), do: nil
end
```

### [](use-enums-with-graphql.html#using-custom-absinthe-types)Using custom absinthe types

You can implement a custom enum by first adding the enum type to your absinthe schema (more [here](../absinthe/Absinthe.Type.Enum.html)). Then you can define a custom Ash type that refers to that absinthe enum type.

```
# In your absinthe schema:

enum :status do
  value(:open, description: "The post is open")
  value(:closed, description: "The post is closed")
end
```

```
# Your custom Ash Type
defmodule AshGraphql.Test.Status do
  use Ash.Type.Enum, values: [:open, :closed]

  use AshGraphql.Type

  @impl true
  # tell Ash not to define the type for that enum
  def graphql_define_type?(_), do: false
end
```

[← Previous Page Using the SDL File](sdl-file.html)

[Next Page → Use JSON with GraphQL](use-json-with-graphql.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/use-enums-with-graphql.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/use-json-with-graphql.md#L1 "View Source") Use JSON with GraphQL

AshGraphql provides two JSON types that may be used. They are the same except for how the type is serialized in responses.

- `:json_string` - serializes the json to a string, e.g `"{\"foo\":1}"`
- `:json` - leaves the json as an object, e.g `{foo: 1}`

By default, `:json_string` is used. The configuration for this is (uncharacteristically) placed in application config, for example:

```
config :ash_graphql, :json_type, :json
```

[← Previous Page Use Enums with GraphQL](use-enums-with-graphql.html)

[Next Page → Using Subscriptions](use-subscriptions-with-graphql.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/use-json-with-graphql.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/use-maps-with-graphql.md#L1 "View Source") Use Maps with GraphQL

If you define an [`Ash.Type.NewType`](../ash/3.4.50/Ash.Type.NewType.html) that is a subtype of `:map`, *and* you add the `fields` constraint which specifies field names and their types, [`AshGraphql`](AshGraphql.html) will automatically derive an appropriate GraphQL type for it.

For example:

```
defmodule MyApp.Types.Metadata do
  @moduledoc false
  use Ash.Type.NewType, subtype_of: :map, constraints: [
    fields: [
      title: [
        type: :string
      ],
      description: [
        type: :string
      ]
    ]
  ]

  def graphql_type(_), do: :metadata
end
```

## [](use-maps-with-graphql.html#bypassing-type-generation-for-an-map)Bypassing type generation for an map

Add the `graphql_define_type?/1` callback, like so, to skip Ash's generation (i.e if you're defining it yourself)

```
@impl true
def graphql_define_type?(_), do: false
```

[← Previous Page Use Unions with GraphQL](use-unions-with-graphql.html)

[Next Page → Monitoring](monitoring.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/use-maps-with-graphql.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/use-subscriptions-with-graphql.md#L1 "View Source") Using Subscriptions

You can do this with Absinthe directly, and use [`AshGraphql.Subscription.query_for_subscription/3`](AshGraphql.Subscription.html#query_for_subscription/3). Here is an example of how you could do this for a subscription for a single record. This example could be extended to support lists of records as well.

```
# in your absinthe schema file
subscription do
  field :field, :type_name do
    config(fn
      _args, %{context: %{current_user: %{id: user_id}}} ->
        {:ok, topic: user_id, context_id: "user/#{user_id}"}

      _args, _context ->
        {:error, :unauthorized}
    end)

    resolve(fn args, _, resolution ->
      # loads all the data you need
      AshGraphql.Subscription.query_for_subscription(
        YourResource,
        YourDomain,
        resolution
      )
      |> Ash.Query.filter(id == ^args.id)
      |> Ash.read(actor: resolution.context.current_user)
    end)
  end
end
```

## [](use-subscriptions-with-graphql.html#subscription-dsl-beta)Subscription DSL (beta)

The subscription DSL is currently in beta and before using it you have to enable them in your config.

### [](use-subscriptions-with-graphql.html#subscription-response-order)Subscription response order

The order in which the subscription responses are sent to the client is not guaranteed to be the same as the order in which the mutations were executed.

```
config :ash_graphql, :subscriptions, true
```

First you'll need to do some setup, follow the the [setup guide](../absinthe/subscriptions.html#absinthe-phoenix-setup) in the absinthe docs, but instead of using `Absinthe.Pheonix.Endpoint` use [`AshGraphql.Subscription.Endpoint`](AshGraphql.Subscription.Endpoint.html).

By default subscriptions are resolved synchronously as part of the mutation. This means that a resolver is run for every subscriber that is not deduplicated. If you have a lot of subscribers you can add the [`AshGraphql.Subscription.Batcher`](AshGraphql.Subscription.Batcher.html) to your supervision tree, which batches up notifications and runs subscription resolution out-of-band.

```
  @impl true
  def start(_type, _args) do
    children = [
      ...,
      {Absinthe.Subscription, MyAppWeb.Endpoint},
      AshGraphql.Subscription.Batcher
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: MyAppWeb.Supervisor]
    Supervisor.start_link(children, opts)
  end
```

Afterwards, add an empty subscription block to your schema module.

```
defmodule MyAppWeb.Schema do
  ...

  subscription do
  end
end
```

Now you can define subscriptions on your resource or domain

```
defmodule MyApp.Resource do
  use Ash.Resource,
  data_layer: Ash.DataLayer.Ets,
  extensions: [AshGraphql.Resource]

  graphql do
    subscriptions do
      subscribe :resource_created do
        action_types :create
      end
    end
  end
end
```

For further Details checkout the DSL docs for [resource](dsl-ashgraphql-resource.html#graphql-subscriptions) and [domain](dsl-ashgraphql-domain.html#graphql-subscriptions)

### [](use-subscriptions-with-graphql.html#deduplication)Deduplication

By default, Absinthe will deduplicate subscriptions based on the `context_id`. We use the some of the context like actor and tenant to create a `context_id` for you.

If you want to customize the deduplication you can do so by adding a actor function to your subscription. This function will be called with the actor that subscribes and you can return a more generic actor, this way you can have one actor for multiple users, which will lead to less resolver executions.

```
defmodule MyApp.Resource do
  use Ash.Resource,
  data_layer: Ash.DataLayer.Ets,
  extensions: [AshGraphql.Resource]

  graphql do
    subscriptions do
      subscribe :resource_created do
        action_types :create
        actor fn actor ->
          if check_actor(actor) do
            %{id: "your generic actor", ...}
          else
            actor
          end
        end
      end
    end
  end
end
```

[← Previous Page Use JSON with GraphQL](use-json-with-graphql.html)

[Next Page → Use Unions with GraphQL](use-unions-with-graphql.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/use-subscriptions-with-graphql.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_graphql](assets/logo.png)](https://github.com/ash-project/ash_graphql)

[ash\_graphql](https://github.com/ash-project/ash_graphql)

v1.5.0

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_graphql

Settings

# [View Source](https://github.com/ash-project/ash_graphql/blob/v1.5.0/documentation/topics/use-unions-with-graphql.md#L1 "View Source") Use Unions with GraphQL

Unions must be defined with [`Ash.Type.NewType`](../ash/3.4.50/Ash.Type.NewType.html):

```
defmodule MyApp.Armor do
  use Ash.Type.NewType, subtype_of: :union, constraints: [
    types: [
      plate: [
        # This is an embedded resource, with its own fields
        type: MyApp.Armor.Plate
      ],
      chain_mail: [
        # And so is this
        type: MyApp.Armor.ChainMail
      ],
      custom: [
        type: :string
      ]
    ]
  ]

  use AshGraphql.Type

  # Add this to define the union in ash_graphql
  def graphql_type(_), do: :armor
end
```

By default, the type you would get for this on input and output would look something like this:

```
type Armor = {plate: {value: Plate}} | {chain_mail: {value: ChainMail}} | {custom: {value: String}}
```

We do this by default to solve for potentially ambiguous types. An example of this might be if you had multiple different types of strings in a union, and you wanted the client to be able to tell exactly which type of string they'd been given. i.e `{social: {value: "555-55-5555"}} | {phone_number: {value: "555-5555"}}`.

However, you can clean the type in cases where you have no such conflicts by by providing

```
# Put anything in here that does not need to be named/nested with `{type_name: {value: value}}`
def graphql_unnested_unions(_constraints), do: [:plate, :chain_mail]
```

Which, in this case, would yield:

```
type Armor = Plate | ChainMail | {custom: {value: String}}
```

## [](use-unions-with-graphql.html#bypassing-type-generation-for-a-union)Bypassing type generation for a union

Add the `graphql_define_type?/1` callback, like so, to skip Ash's generation (i.e if you're defining it yourself)

```
@impl true
def graphql_define_type?(_), do: false
```

[← Previous Page Using Subscriptions](use-subscriptions-with-graphql.html)

[Next Page → Use Maps with GraphQL](use-maps-with-graphql.html)

[Hex Package](https://hex.pm/packages/ash_graphql/1.5.0) [Hex Preview](https://preview.hex.pm/preview/ash_graphql/1.5.0) ([current file](https://preview.hex.pm/preview/ash_graphql/1.5.0/show/documentation/topics/use-unions-with-graphql.md)) Search HexDocs [Download ePub version](ash_graphql.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
