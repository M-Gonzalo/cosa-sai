[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api "View Source") API Reference ash\_json\_api v1.4.16

## [](api-reference.html#modules)Modules

[AshJsonApi](AshJsonApi.html)

Introspection functions for [`AshJsonApi`](AshJsonApi.html#content) domains.

[AshJsonApi.Domain](AshJsonApi.Domain.html)

The entrypoint for adding JSON:API behavior to an Ash domain

[AshJsonApi.Domain.BaseRoute](AshJsonApi.Domain.BaseRoute.html)

Introspection target for base routes in [`AshJsonApi.Domain`](AshJsonApi.Domain.html)

[AshJsonApi.Domain.Info](AshJsonApi.Domain.Info.html)

Introspection helpers for AshJsonApi.Domain

[AshJsonApi.Domain.Verifiers.VerifyActions](AshJsonApi.Domain.Verifiers.VerifyActions.html)

Verifies that all actions are valid for each route.

[AshJsonApi.Domain.Verifiers.VerifyHasType](AshJsonApi.Domain.Verifiers.VerifyHasType.html)

Verifies that a resource has a type if it has any routes that need it.

[AshJsonApi.Domain.Verifiers.VerifyQueryParams](AshJsonApi.Domain.Verifiers.VerifyQueryParams.html)

Verify query params are not reserved or shadowed by the route

[AshJsonApi.Domain.Verifiers.VerifyRelationships](AshJsonApi.Domain.Verifiers.VerifyRelationships.html)

Verifies that any routes that reference a relationship reference a public one

[AshJsonApi.Error](AshJsonApi.Error.html)

Represents an AshJsonApi Error

[AshJsonApi.Error.InvalidBody](AshJsonApi.Error.InvalidBody.html)

Returned when the request body provided is invalid

[AshJsonApi.Error.InvalidField](AshJsonApi.Error.InvalidField.html)

Returned when a field is requested that does not exist or is invalid

[AshJsonApi.Error.InvalidHeader](AshJsonApi.Error.InvalidHeader.html)

Returned when a header provided is invalid

[AshJsonApi.Error.InvalidIncludes](AshJsonApi.Error.InvalidIncludes.html)

Returned when the includes string provided in the query parameter `include` is invalid.

[AshJsonApi.Error.InvalidPagination](AshJsonApi.Error.InvalidPagination.html)

Returned when one of the nested parameters provided in the query parameter `page` is invalid

[AshJsonApi.Error.InvalidQuery](AshJsonApi.Error.InvalidQuery.html)

Returned when the query provided is invalid

[AshJsonApi.Error.InvalidType](AshJsonApi.Error.InvalidType.html)

Returned when a field is requested for a type that does not exist or is invalid

[AshJsonApi.Error.NotFound](AshJsonApi.Error.NotFound.html)

Returned when a record was explicitly requested, but could not be found.

[AshJsonApi.Error.UnacceptableMediaType](AshJsonApi.Error.UnacceptableMediaType.html)

Returned when the client does not provide (via the `Content-Type` header) the correct json API media type: application/vnd.api+json

[AshJsonApi.Error.UnsupportedMediaType](AshJsonApi.Error.UnsupportedMediaType.html)

Returned when the client does not accept (via the `Accept` header) the json API media type: application/vnd.api+json

[AshJsonApi.Igniter](AshJsonApi.Igniter.html)

Codemods and utilities for working with AshJsonApi &amp; Igniter

[AshJsonApi.OpenApi](AshJsonApi.OpenApi.html)

Provides functions for generating schemas and operations for OpenApi definitions.

[AshJsonApi.Plug.Parser](AshJsonApi.Plug.Parser.html)

Extracts ash multipart request body.

[AshJsonApi.Resource](AshJsonApi.Resource.html)

The entrypoint for adding JSON:API behavior to a resource"

[AshJsonApi.Resource.Info](AshJsonApi.Resource.Info.html)

Introspection helpers for AshJsonApi.Resource

[AshJsonApi.Resource.Route](AshJsonApi.Resource.Route.html)

Represents a route for a resource

[AshJsonApi.Resource.Verifiers.VerifyActions](AshJsonApi.Resource.Verifiers.VerifyActions.html)

Verifies that all actions are valid for each route.

[AshJsonApi.Resource.Verifiers.VerifyHasType](AshJsonApi.Resource.Verifiers.VerifyHasType.html)

Verifies that a resource has a type if it has any routes that need it.

[AshJsonApi.Resource.Verifiers.VerifyIncludes](AshJsonApi.Resource.Verifiers.VerifyIncludes.html)

Verifies that all includes are valid public relationships

[AshJsonApi.Resource.Verifiers.VerifyQueryParams](AshJsonApi.Resource.Verifiers.VerifyQueryParams.html)

Verify query params are not reserved or shadowed by the route

[AshJsonApi.Resource.Verifiers.VerifyRelationships](AshJsonApi.Resource.Verifiers.VerifyRelationships.html)

Verifies that any routes that reference a relationship reference a public one

[AshJsonApi.Router](AshJsonApi.Router.html)

Use this module to create a router for your AshJsonApi.

[AshJsonApi.Test](AshJsonApi.Test.html)

Utilities for testing AshJsonApi.

[AshJsonApi.ToJsonApiError](AshJsonApi.ToJsonApiError.html)

A protocol for turning an Ash exception into an AshJsonApi.Error

[AshJsonApi.Type](AshJsonApi.Type.html)

The behaviour for customizing how a datatype is rendered and written in AshJsonApi.

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_json\_api.install](Mix.Tasks.AshJsonApi.Install.html)

Installs AshJsonApi. Should be run with `mix igniter.install ash_json_api`

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/domain.ex#L61 "View Source") AshJsonApi.Domain.BaseRoute (ash\_json\_api v1.4.16)

Introspection target for base routes in [`AshJsonApi.Domain`](AshJsonApi.Domain.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/domain.ex#L1 "View Source") AshJsonApi.Domain (ash\_json\_api v1.4.16)

The entrypoint for adding JSON:API behavior to an Ash domain

# [](AshJsonApi.Domain.html#summary)Summary

## [Functions](AshJsonApi.Domain.html#functions)

[install(igniter, module, arg, path, argv)](AshJsonApi.Domain.html#install/5)

[json\_api(body)](AshJsonApi.Domain.html#json_api/1)

# [](AshJsonApi.Domain.html#functions)Functions

[Link to this function](AshJsonApi.Domain.html#install/5 "Link to this function")

# install(igniter, module, arg, path, argv)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/domain.ex#L189 "View Source")

[Link to this macro](AshJsonApi.Domain.html#json_api/1 "Link to this macro")

# json\_api(body)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/domain.ex#L182 "View Source") (macro)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L1 "View Source") AshJsonApi.Domain.Info (ash\_json\_api v1.4.16)

Introspection helpers for AshJsonApi.Domain

# [](AshJsonApi.Domain.Info.html#summary)Summary

## [Functions](AshJsonApi.Domain.Info.html#functions)

[authorize?(domain)](AshJsonApi.Domain.Info.html#authorize?/1)

[group\_by(domain)](AshJsonApi.Domain.Info.html#group_by/1)

[include\_nil\_values?(domain)](AshJsonApi.Domain.Info.html#include_nil_values?/1)

[log\_errors?(domain)](AshJsonApi.Domain.Info.html#log_errors?/1)

[prefix(domain)](AshJsonApi.Domain.Info.html#prefix/1)

[router(domain)](AshJsonApi.Domain.Info.html#router/1)

[routes(domain)](AshJsonApi.Domain.Info.html#routes/1)

[serve\_schema?(domain)](AshJsonApi.Domain.Info.html#serve_schema?/1)

[show\_raised\_errors?(domain)](AshJsonApi.Domain.Info.html#show_raised_errors?/1)

[tag(domain)](AshJsonApi.Domain.Info.html#tag/1)

# [](AshJsonApi.Domain.Info.html#functions)Functions

[Link to this function](AshJsonApi.Domain.Info.html#authorize?/1 "Link to this function")

# authorize?(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L29 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#group_by/1 "Link to this function")

# group\_by(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L13 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#include_nil_values?/1 "Link to this function")

# include\_nil\_values?(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L42 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#log_errors?/1 "Link to this function")

# log\_errors?(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L33 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#prefix/1 "Link to this function")

# prefix(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L17 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#router/1 "Link to this function")

# router(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L37 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#routes/1 "Link to this function")

# routes(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L25 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#serve_schema?/1 "Link to this function")

# serve\_schema?(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L21 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#show_raised_errors?/1 "Link to this function")

# show\_raised\_errors?(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L9 "View Source")

[Link to this function](AshJsonApi.Domain.Info.html#tag/1 "Link to this function")

# tag(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/info.ex#L5 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/verifiers/verify_actions.ex#L1 "View Source") AshJsonApi.Domain.Verifiers.VerifyActions (ash\_json\_api v1.4.16)

Verifies that all actions are valid for each route.

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/verifiers/verify_has_type.ex#L1 "View Source") AshJsonApi.Domain.Verifiers.VerifyHasType (ash\_json\_api v1.4.16)

Verifies that a resource has a type if it has any routes that need it.

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/verifiers/verify_query_params.ex#L1 "View Source") AshJsonApi.Domain.Verifiers.VerifyQueryParams (ash\_json\_api v1.4.16)

Verify query params are not reserved or shadowed by the route

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/verifiers/verify_relationships.ex#L1 "View Source") AshJsonApi.Domain.Verifiers.VerifyRelationships (ash\_json\_api v1.4.16)

Verifies that any routes that reference a relationship reference a public one

# [](AshJsonApi.Domain.Verifiers.VerifyRelationships.html#summary)Summary

## [Functions](AshJsonApi.Domain.Verifiers.VerifyRelationships.html#functions)

[verify(dsl)](AshJsonApi.Domain.Verifiers.VerifyRelationships.html#verify/1)

Callback implementation for [`Spark.Dsl.Verifier.verify/1`](../spark/2.2.36/Spark.Dsl.Verifier.html#c:verify/1).

# [](AshJsonApi.Domain.Verifiers.VerifyRelationships.html#functions)Functions

[Link to this function](AshJsonApi.Domain.Verifiers.VerifyRelationships.html#verify/1 "Link to this function")

# verify(dsl)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/domain/verifiers/verify_relationships.ex#L5 "View Source")

Callback implementation for [`Spark.Dsl.Verifier.verify/1`](../spark/2.2.36/Spark.Dsl.Verifier.html#c:verify/1).

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/error.ex#L1 "View Source") AshJsonApi.Error (ash\_json\_api v1.4.16)

Represents an AshJsonApi Error

# [](AshJsonApi.Error.html#summary)Summary

## [Types](AshJsonApi.Error.html#types)

[t()](AshJsonApi.Error.html#t:t/0)

## [Functions](AshJsonApi.Error.html#functions)

[class\_to\_status(arg1)](AshJsonApi.Error.html#class_to_status/1)

Turns an error class into an HTTP status code

[format\_log(error)](AshJsonApi.Error.html#format_log/1)

[new(opts)](AshJsonApi.Error.html#new/1)

[to\_json\_api\_errors(domain, resource, errors, type)](AshJsonApi.Error.html#to_json_api_errors/4)

[with\_source\_pointer(built\_error, arg2, resource, type)](AshJsonApi.Error.html#with_source_pointer/4)

# [](AshJsonApi.Error.html#types)Types

[Link to this type](AshJsonApi.Error.html#t:t/0 "Link to this type")

# t()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/error.ex#L15 "View Source")

```
@type t() :: %AshJsonApi.Error{
  about: term(),
  code: term(),
  detail: term(),
  id: term(),
  internal_description: term(),
  log_level: term(),
  meta: term(),
  source_parameter: term(),
  source_pointer: term(),
  status_code: term(),
  title: term()
}
```

# [](AshJsonApi.Error.html#functions)Functions

[Link to this function](AshJsonApi.Error.html#class_to_status/1 "Link to this function")

# class\_to\_status(arg1)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/error.ex#L124 "View Source")

Turns an error class into an HTTP status code

[Link to this function](AshJsonApi.Error.html#format_log/1 "Link to this function")

# format\_log(error)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/error.ex#L132 "View Source")

[Link to this function](AshJsonApi.Error.html#new/1 "Link to this function")

# new(opts)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/error.ex#L128 "View Source")

[Link to this function](AshJsonApi.Error.html#to_json_api_errors/4 "Link to this function")

# to\_json\_api\_errors(domain, resource, errors, type)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/error.ex#L21 "View Source")

[Link to this function](AshJsonApi.Error.html#with_source_pointer/4 "Link to this function")

# with\_source\_pointer(built\_error, arg2, resource, type)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/error.ex#L166 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_body.ex#L1 "View Source") AshJsonApi.Error.InvalidBody exception (ash\_json\_api v1.4.16)

Returned when the request body provided is invalid

# [](AshJsonApi.Error.InvalidBody.html#summary)Summary

## [Functions](AshJsonApi.Error.InvalidBody.html#functions)

[exception()](AshJsonApi.Error.InvalidBody.html#exception/0)

# [](AshJsonApi.Error.InvalidBody.html#functions)Functions

[Link to this function](AshJsonApi.Error.InvalidBody.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_body.ex#L6 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_field.ex#L1 "View Source") AshJsonApi.Error.InvalidField exception (ash\_json\_api v1.4.16)

Returned when a field is requested that does not exist or is invalid

# [](AshJsonApi.Error.InvalidField.html#summary)Summary

## [Functions](AshJsonApi.Error.InvalidField.html#functions)

[exception()](AshJsonApi.Error.InvalidField.html#exception/0)

# [](AshJsonApi.Error.InvalidField.html#functions)Functions

[Link to this function](AshJsonApi.Error.InvalidField.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_field.ex#L6 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_header.ex#L1 "View Source") AshJsonApi.Error.InvalidHeader exception (ash\_json\_api v1.4.16)

Returned when a header provided is invalid

# [](AshJsonApi.Error.InvalidHeader.html#summary)Summary

## [Functions](AshJsonApi.Error.InvalidHeader.html#functions)

[exception()](AshJsonApi.Error.InvalidHeader.html#exception/0)

# [](AshJsonApi.Error.InvalidHeader.html#functions)Functions

[Link to this function](AshJsonApi.Error.InvalidHeader.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_header.ex#L6 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_includes.ex#L1 "View Source") AshJsonApi.Error.InvalidIncludes exception (ash\_json\_api v1.4.16)

Returned when the includes string provided in the query parameter `include` is invalid.

# [](AshJsonApi.Error.InvalidIncludes.html#summary)Summary

## [Types](AshJsonApi.Error.InvalidIncludes.html#types)

[t()](AshJsonApi.Error.InvalidIncludes.html#t:t/0)

## [Functions](AshJsonApi.Error.InvalidIncludes.html#functions)

[exception()](AshJsonApi.Error.InvalidIncludes.html#exception/0)

# [](AshJsonApi.Error.InvalidIncludes.html#types)Types

[Link to this type](AshJsonApi.Error.InvalidIncludes.html#t:t/0 "Link to this type")

# t()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_includes.ex#L8 "View Source")

```
@type t() :: %AshJsonApi.Error.InvalidIncludes{
  __exception__: true,
  bread_crumbs: term(),
  class: term(),
  includes: term(),
  path: term(),
  splode: term(),
  stacktrace: term(),
  vars: term()
}
```

# [](AshJsonApi.Error.InvalidIncludes.html#functions)Functions

[Link to this function](AshJsonApi.Error.InvalidIncludes.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_includes.ex#L6 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_pagination.ex#L1 "View Source") AshJsonApi.Error.InvalidPagination exception (ash\_json\_api v1.4.16)

Returned when one of the nested parameters provided in the query parameter `page` is invalid

# [](AshJsonApi.Error.InvalidPagination.html#summary)Summary

## [Functions](AshJsonApi.Error.InvalidPagination.html#functions)

[exception()](AshJsonApi.Error.InvalidPagination.html#exception/0)

# [](AshJsonApi.Error.InvalidPagination.html#functions)Functions

[Link to this function](AshJsonApi.Error.InvalidPagination.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_pagination.ex#L6 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_query.ex#L1 "View Source") AshJsonApi.Error.InvalidQuery exception (ash\_json\_api v1.4.16)

Returned when the query provided is invalid

# [](AshJsonApi.Error.InvalidQuery.html#summary)Summary

## [Functions](AshJsonApi.Error.InvalidQuery.html#functions)

[exception()](AshJsonApi.Error.InvalidQuery.html#exception/0)

# [](AshJsonApi.Error.InvalidQuery.html#functions)Functions

[Link to this function](AshJsonApi.Error.InvalidQuery.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_query.ex#L5 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_type.ex#L1 "View Source") AshJsonApi.Error.InvalidType exception (ash\_json\_api v1.4.16)

Returned when a field is requested for a type that does not exist or is invalid

# [](AshJsonApi.Error.InvalidType.html#summary)Summary

## [Functions](AshJsonApi.Error.InvalidType.html#functions)

[exception()](AshJsonApi.Error.InvalidType.html#exception/0)

# [](AshJsonApi.Error.InvalidType.html#functions)Functions

[Link to this function](AshJsonApi.Error.InvalidType.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/invalid_type.ex#L5 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/not_found.ex#L1 "View Source") AshJsonApi.Error.NotFound exception (ash\_json\_api v1.4.16)

Returned when a record was explicitly requested, but could not be found.

# [](AshJsonApi.Error.NotFound.html#summary)Summary

## [Functions](AshJsonApi.Error.NotFound.html#functions)

[exception()](AshJsonApi.Error.NotFound.html#exception/0)

# [](AshJsonApi.Error.NotFound.html#functions)Functions

[Link to this function](AshJsonApi.Error.NotFound.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/not_found.ex#L6 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/unacceptable_media_type.ex#L1 "View Source") AshJsonApi.Error.UnacceptableMediaType exception (ash\_json\_api v1.4.16)

Returned when the client does not provide (via the `Content-Type` header) the correct json API media type: application/vnd.api+json

# [](AshJsonApi.Error.UnacceptableMediaType.html#summary)Summary

## [Functions](AshJsonApi.Error.UnacceptableMediaType.html#functions)

[exception()](AshJsonApi.Error.UnacceptableMediaType.html#exception/0)

# [](AshJsonApi.Error.UnacceptableMediaType.html#functions)Functions

[Link to this function](AshJsonApi.Error.UnacceptableMediaType.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/unacceptable_media_type.ex#L5 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/unsupported_media_type.ex#L1 "View Source") AshJsonApi.Error.UnsupportedMediaType exception (ash\_json\_api v1.4.16)

Returned when the client does not accept (via the `Accept` header) the json API media type: application/vnd.api+json

# [](AshJsonApi.Error.UnsupportedMediaType.html#summary)Summary

## [Functions](AshJsonApi.Error.UnsupportedMediaType.html#functions)

[exception()](AshJsonApi.Error.UnsupportedMediaType.html#exception/0)

# [](AshJsonApi.Error.UnsupportedMediaType.html#functions)Functions

[Link to this function](AshJsonApi.Error.UnsupportedMediaType.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/unsupported_media_type.ex#L5 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api.ex#L1 "View Source") AshJsonApi (ash\_json\_api v1.4.16)

Introspection functions for [`AshJsonApi`](AshJsonApi.html#content) domains.

For domain DSL documentation, see [`AshJsonApi.Domain`](AshJsonApi.Domain.html).

For Resource DSL documentation, see [`AshJsonApi.Resource`](AshJsonApi.Resource.html)

To get started, see the [getting started guide](getting-started-with-ash-json-api.html)

# [](AshJsonApi.html#summary)Summary

## [Functions](AshJsonApi.html#functions)

[authorize?(domain)](AshJsonApi.html#authorize?/1) deprecated

See [`AshJsonApi.Domain.Info.authorize?/1`](AshJsonApi.Domain.Info.html#authorize?/1).

[log\_errors?(domain)](AshJsonApi.html#log_errors?/1) deprecated

See [`AshJsonApi.Domain.Info.log_errors?/1`](AshJsonApi.Domain.Info.html#log_errors?/1).

[prefix(domain)](AshJsonApi.html#prefix/1) deprecated

See [`AshJsonApi.Domain.Info.prefix/1`](AshJsonApi.Domain.Info.html#prefix/1).

[router(domain)](AshJsonApi.html#router/1) deprecated

See [`AshJsonApi.Domain.Info.router/1`](AshJsonApi.Domain.Info.html#router/1).

[serve\_schema?(domain)](AshJsonApi.html#serve_schema?/1) deprecated

See [`AshJsonApi.Domain.Info.serve_schema?/1`](AshJsonApi.Domain.Info.html#serve_schema?/1).

# [](AshJsonApi.html#functions)Functions

[Link to this function](AshJsonApi.html#authorize?/1 "Link to this function")

# authorize?(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api.ex#L19 "View Source")

This function is deprecated. See \`AshJsonApi.Domain.Info.authorize?/1\`.

See [`AshJsonApi.Domain.Info.authorize?/1`](AshJsonApi.Domain.Info.html#authorize?/1).

[Link to this function](AshJsonApi.html#log_errors?/1 "Link to this function")

# log\_errors?(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api.ex#L22 "View Source")

This function is deprecated. See \`AshJsonApi.Domain.Info.log\_errors?/1\`.

See [`AshJsonApi.Domain.Info.log_errors?/1`](AshJsonApi.Domain.Info.html#log_errors?/1).

[Link to this function](AshJsonApi.html#prefix/1 "Link to this function")

# prefix(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api.ex#L13 "View Source")

This function is deprecated. See \`AshJsonApi.Domain.Info.prefix/1\`.

See [`AshJsonApi.Domain.Info.prefix/1`](AshJsonApi.Domain.Info.html#prefix/1).

[Link to this function](AshJsonApi.html#router/1 "Link to this function")

# router(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api.ex#L25 "View Source")

This function is deprecated. See \`AshJsonApi.Domain.Info.router/1\`.

See [`AshJsonApi.Domain.Info.router/1`](AshJsonApi.Domain.Info.html#router/1).

[Link to this function](AshJsonApi.html#serve_schema?/1 "Link to this function")

# serve\_schema?(domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api.ex#L16 "View Source")

This function is deprecated. See \`AshJsonApi.Domain.Info.serve\_schema?/1\`.

See [`AshJsonApi.Domain.Info.serve_schema?/1`](AshJsonApi.Domain.Info.html#serve_schema?/1).

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/igniter.ex#L2 "View Source") AshJsonApi.Igniter (ash\_json\_api v1.4.16)

Codemods and utilities for working with AshJsonApi &amp; Igniter

# [](AshJsonApi.Igniter.html#summary)Summary

## [Functions](AshJsonApi.Igniter.html#functions)

[ash\_json\_api\_routers(igniter)](AshJsonApi.Igniter.html#ash_json_api_routers/1)

Returns all modules that `use AshJsonApi.Router`

[find\_ash\_json\_api\_router(igniter, domain)](AshJsonApi.Igniter.html#find_ash_json_api_router/2)

Returns the AshJsonApi router containing the domain in question, or a list of all AshJsonApi schemas

[setup\_ash\_json\_api\_router(igniter, ash\_phoenix\_router\_name \\\\ nil)](AshJsonApi.Igniter.html#setup_ash_json_api_router/2)

Sets up an [`AshJsonApi.Router`](AshJsonApi.Router.html) for AshJsonApi

[setup\_phoenix(igniter, ash\_phoenix\_router\_name \\\\ nil)](AshJsonApi.Igniter.html#setup_phoenix/2)

Sets up the phoenix module for AshJsonApi

# [](AshJsonApi.Igniter.html#functions)Functions

[Link to this function](AshJsonApi.Igniter.html#ash_json_api_routers/1 "Link to this function")

# ash\_json\_api\_routers(igniter)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/igniter.ex#L225 "View Source")

Returns all modules that `use AshJsonApi.Router`

[Link to this function](AshJsonApi.Igniter.html#find_ash_json_api_router/2 "Link to this function")

# find\_ash\_json\_api\_router(igniter, domain)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/igniter.ex#L6 "View Source")

Returns the AshJsonApi router containing the domain in question, or a list of all AshJsonApi schemas

[Link to this function](AshJsonApi.Igniter.html#setup_ash_json_api_router/2 "Link to this function")

# setup\_ash\_json\_api\_router(igniter, ash\_phoenix\_router\_name \\\\ nil)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/igniter.ex#L37 "View Source")

Sets up an [`AshJsonApi.Router`](AshJsonApi.Router.html) for AshJsonApi

[Link to this function](AshJsonApi.Igniter.html#setup_phoenix/2 "Link to this function")

# setup\_phoenix(igniter, ash\_phoenix\_router\_name \\\\ nil)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/igniter.ex#L79 "View Source")

Sets up the phoenix module for AshJsonApi

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L2 "View Source") AshJsonApi.OpenApi (ash\_json\_api v1.4.16)

Provides functions for generating schemas and operations for OpenApi definitions.

Add `open_api_spex` to your `mix.exs` deps for the required struct definitions.

## [](AshJsonApi.OpenApi.html#module-example)Example

```
defmodule MyApp.OpenApi do
  alias OpenApiSpex.{OpenApi, Info, Server, Components}

  def spec do
    %OpenApi{
      info: %Info{
        title: "MyApp JSON API",
        version: "1.1"
      },
      servers: [
        Server.from_endpoint(MyAppWeb.Endpoint)
      ],
      paths: AshJsonApi.OpenApi.paths(MyApp.Api),
      tags: AshJsonApi.OpenApi.tags(MyApp.Api),
      components: %Components{
        responses: AshJsonApi.OpenApi.responses(),
        schemas: AshJsonApi.OpenApi.schemas(MyApp.Api)
      }
    }
  end
end
```

# [](AshJsonApi.OpenApi.html#summary)Summary

## [Functions](AshJsonApi.OpenApi.html#functions)

[define\_filter?(domains, resource)](AshJsonApi.OpenApi.html#define_filter?/2)

[paths(domains, all\_domains, opts)](AshJsonApi.OpenApi.html#paths/3)

Paths (routes) from the domain.

[raw\_filter\_type(attribute\_or\_aggregate, resource)](AshJsonApi.OpenApi.html#raw_filter_type/2)

[resource\_filter\_fields\_fields\_only(resource)](AshJsonApi.OpenApi.html#resource_filter_fields_fields_only/1)

[responses()](AshJsonApi.OpenApi.html#responses/0)

Common responses to include in the API Spec.

[schemas(domains)](AshJsonApi.OpenApi.html#schemas/1)

Resource schemas to include in the API spec.

[spec(opts \\\\ \[\], conn \\\\ nil)](AshJsonApi.OpenApi.html#spec/2)

[tags(domains)](AshJsonApi.OpenApi.html#tags/1)

Tags based on resource names to include in the API spec

[tags(domain, domains)](AshJsonApi.OpenApi.html#tags/2)

[write\_attributes(resource, arguments, action, route, format)](AshJsonApi.OpenApi.html#write_attributes/5)

# [](AshJsonApi.OpenApi.html#functions)Functions

[Link to this function](AshJsonApi.OpenApi.html#define_filter?/2 "Link to this function")

# define\_filter?(domains, resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L192 "View Source")

[Link to this function](AshJsonApi.OpenApi.html#paths/3 "Link to this function")

# paths(domains, all\_domains, opts)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L1058 "View Source")

```
@spec paths(
  domain :: module() | [module()],
  module() | [module()],
  opts :: Keyword.t()
) ::
  OpenApiSpex.Paths.t()
```

Paths (routes) from the domain.

[Link to this function](AshJsonApi.OpenApi.html#raw_filter_type/2 "Link to this function")

# raw\_filter\_type(attribute\_or\_aggregate, resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L2137 "View Source")

[Link to this function](AshJsonApi.OpenApi.html#resource_filter_fields_fields_only/1 "Link to this function")

# resource\_filter\_fields\_fields\_only(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L2177 "View Source")

[Link to this function](AshJsonApi.OpenApi.html#responses/0 "Link to this function")

# responses()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L123 "View Source")

```
@spec responses() :: OpenApiSpex.Components.responses_map()
```

Common responses to include in the API Spec.

[Link to this function](AshJsonApi.OpenApi.html#schemas/1 "Link to this function")

# schemas(domains)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L140 "View Source")

```
@spec schemas(domain :: module() | [module()]) :: %{
  required(String.t()) => OpenApiSpex.Schema.t()
}
```

Resource schemas to include in the API spec.

[Link to this function](AshJsonApi.OpenApi.html#spec/2 "Link to this function")

# spec(opts \\\\ \[], conn \\\\ nil)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L59 "View Source")

[Link to this function](AshJsonApi.OpenApi.html#tags/1 "Link to this function")

# tags(domains)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L1024 "View Source")

```
@spec tags(domain :: module() | [module()]) :: [OpenApiSpex.Tag.t()]
```

Tags based on resource names to include in the API spec

[Link to this function](AshJsonApi.OpenApi.html#tags/2 "Link to this function")

# tags(domain, domains)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L1028 "View Source")

[Link to this function](AshJsonApi.OpenApi.html#write_attributes/5 "Link to this function")

# write\_attributes(resource, arguments, action, route, format)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/json_schema/open_api.ex#L1766 "View Source")

```
@spec write_attributes(
  resource :: module(),
  [Ash.Resource.Actions.Argument.t()],
  action :: term(),
  route :: term(),
  format :: content_type_format()
) :: %{required(atom()) => OpenApiSpex.Schema.t()}
```

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/plug/parser.ex#L1 "View Source") AshJsonApi.Plug.Parser (ash\_json\_api v1.4.16)

Extracts ash multipart request body.

For use with [`Plug.Parsers`](../plug/1.16.1/Plug.Parsers.html), as in the example below.

## [](AshJsonApi.Plug.Parser.html#module-examples)Examples

Should be used with [`Plug.Parsers`](../plug/1.16.1/Plug.Parsers.html):

```
plug Plug.Parsers,
  parsers: [:urlencoded, :multipart, :json, AshJsonApi.Plug.Parser],
  pass: ["*/*"],
  json_decoder: Jason
```

## [](AshJsonApi.Plug.Parser.html#module-protocol)Protocol

To use files in your request, send a [multipart](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipart) with the content type `multipart/x.ash+form-data`. The request MUST contain a JSON object with the key `data` and the value of the object you want to send.

The request MAY contain other keys with the value of the file you want to send. The parser will walk through all of the `data` JSON and replace each string equal to a part name with the content of the part. This means that if you have a part named `users_csv` and a key in the `data` JSON object with the value `users_csv`, the parser will replace the string with the content of the part.

> #### Conflicting Part names
> 
> Ensure that each part name is unique and does not naturally occur inside as a string in the `data` JSON object. If a part name is found in the `data` JSON object, the parser will replace it with the content of the part.
> 
> It is recommended to use a unique value like a UUID as the part name.

## [](AshJsonApi.Plug.Parser.html#module-example-http-message)Example HTTP Message

```
POST /action
Host: example.com
Content-Length: 2740
Content-Type: multipart/x.ash+form-data; boundary=abcde12345
--abcde12345
Content-Disposition: form-data; name="data"
Content-Type: application/vnd.api+json

{"users": "users_csv", "meatdata": "metadata_json"}
--abcde12345
Content-Disposition: form-data; name="users_csv"; filename="users.csv"
Content-Type: text/csv

[file content goes here]
--abcde12345
Content-Disposition: form-data; name="metadata_json"; filename="metadata.json"
Content-Type: application/json

[file content goes there]
--abcde12345--
```

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L1 "View Source") AshJsonApi.Resource (ash\_json\_api v1.4.16)

The entrypoint for adding JSON:API behavior to a resource"

# [](AshJsonApi.Resource.html#summary)Summary

## [Functions](AshJsonApi.Resource.html#functions)

[base\_route(resource)](AshJsonApi.Resource.html#base_route/1) deprecated

See [`AshJsonApi.Resource.Info.base_route/1`](AshJsonApi.Resource.Info.html#base_route/1).

[encode\_primary\_key(record)](AshJsonApi.Resource.html#encode_primary_key/1)

[includes(resource)](AshJsonApi.Resource.html#includes/1) deprecated

See [`AshJsonApi.Resource.Info.includes/1`](AshJsonApi.Resource.Info.html#includes/1).

[install(igniter, module, arg, path, argv)](AshJsonApi.Resource.html#install/5)

[json\_api(body)](AshJsonApi.Resource.html#json_api/1)

[only\_primary\_key?(resource, field)](AshJsonApi.Resource.html#only_primary_key?/2)

[primary\_key\_delimiter(resource)](AshJsonApi.Resource.html#primary_key_delimiter/1) deprecated

See [`AshJsonApi.Resource.Info.primary_key_delimiter/1`](AshJsonApi.Resource.Info.html#primary_key_delimiter/1).

[primary\_key\_fields(resource)](AshJsonApi.Resource.html#primary_key_fields/1) deprecated

See [`AshJsonApi.Resource.Info.primary_key_fields/1`](AshJsonApi.Resource.Info.html#primary_key_fields/1).

[route(resource, domains, criteria \\\\ %{})](AshJsonApi.Resource.html#route/3)

[routes(resource, domains)](AshJsonApi.Resource.html#routes/2) deprecated

See [`AshJsonApi.Resource.Info.routes/2`](AshJsonApi.Resource.Info.html#routes/2).

[type(resource)](AshJsonApi.Resource.html#type/1) deprecated

See [`AshJsonApi.Resource.Info.type/1`](AshJsonApi.Resource.Info.html#type/1).

# [](AshJsonApi.Resource.html#functions)Functions

[Link to this function](AshJsonApi.Resource.html#base_route/1 "Link to this function")

# base\_route(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L564 "View Source")

This function is deprecated. See AshJsonApi.Resource.Info.base\_route/1.

See [`AshJsonApi.Resource.Info.base_route/1`](AshJsonApi.Resource.Info.html#base_route/1).

[Link to this function](AshJsonApi.Resource.html#encode_primary_key/1 "Link to this function")

# encode\_primary\_key(record)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L575 "View Source")

[Link to this function](AshJsonApi.Resource.html#includes/1 "Link to this function")

# includes(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L561 "View Source")

This function is deprecated. See AshJsonApi.Resource.Info.includes/1.

See [`AshJsonApi.Resource.Info.includes/1`](AshJsonApi.Resource.Info.html#includes/1).

[Link to this function](AshJsonApi.Resource.html#install/5 "Link to this function")

# install(igniter, module, arg, path, argv)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L404 "View Source")

[Link to this macro](AshJsonApi.Resource.html#json_api/1 "Link to this macro")

# json\_api(body)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L551 "View Source") (macro)

[Link to this function](AshJsonApi.Resource.html#only_primary_key?/2 "Link to this function")

# only\_primary\_key?(resource, field)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L629 "View Source")

[Link to this function](AshJsonApi.Resource.html#primary_key_delimiter/1 "Link to this function")

# primary\_key\_delimiter(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L570 "View Source")

This function is deprecated. See AshJsonApi.Resource.Info.primary\_key\_delimiter/1.

See [`AshJsonApi.Resource.Info.primary_key_delimiter/1`](AshJsonApi.Resource.Info.html#primary_key_delimiter/1).

[Link to this function](AshJsonApi.Resource.html#primary_key_fields/1 "Link to this function")

# primary\_key\_fields(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L567 "View Source")

This function is deprecated. See AshJsonApi.Resource.Info.primary\_key\_fields/1.

See [`AshJsonApi.Resource.Info.primary_key_fields/1`](AshJsonApi.Resource.Info.html#primary_key_fields/1).

[Link to this function](AshJsonApi.Resource.html#route/3 "Link to this function")

# route(resource, domains, criteria \\\\ %{})

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L598 "View Source")

[Link to this function](AshJsonApi.Resource.html#routes/2 "Link to this function")

# routes(resource, domains)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L573 "View Source")

This function is deprecated. See AshJsonApi.Resource.Info.routes/1.

See [`AshJsonApi.Resource.Info.routes/2`](AshJsonApi.Resource.Info.html#routes/2).

[Link to this function](AshJsonApi.Resource.html#type/1 "Link to this function")

# type(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/resource.ex#L558 "View Source")

This function is deprecated. See AshJsonApi.Resource.Info.type/1.

See [`AshJsonApi.Resource.Info.type/1`](AshJsonApi.Resource.Info.html#type/1).

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L1 "View Source") AshJsonApi.Resource.Info (ash\_json\_api v1.4.16)

Introspection helpers for AshJsonApi.Resource

# [](AshJsonApi.Resource.Info.html#summary)Summary

## [Functions](AshJsonApi.Resource.Info.html#functions)

[base\_route(resource)](AshJsonApi.Resource.Info.html#base_route/1)

[default\_fields(resource)](AshJsonApi.Resource.Info.html#default_fields/1)

[derive\_filter?(resource)](AshJsonApi.Resource.Info.html#derive_filter?/1)

[derive\_sort?(resource)](AshJsonApi.Resource.Info.html#derive_sort?/1)

[include\_nil\_values?(resource)](AshJsonApi.Resource.Info.html#include_nil_values?/1)

[includes(resource)](AshJsonApi.Resource.Info.html#includes/1)

[primary\_key\_delimiter(resource)](AshJsonApi.Resource.Info.html#primary_key_delimiter/1)

[primary\_key\_fields(resource)](AshJsonApi.Resource.Info.html#primary_key_fields/1)

[routes(resource, domain\_or\_domains \\\\ \[\])](AshJsonApi.Resource.Info.html#routes/2)

[type(resource)](AshJsonApi.Resource.Info.html#type/1)

# [](AshJsonApi.Resource.Info.html#functions)Functions

[Link to this function](AshJsonApi.Resource.Info.html#base_route/1 "Link to this function")

# base\_route(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L22 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#default_fields/1 "Link to this function")

# default\_fields(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L53 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#derive_filter?/1 "Link to this function")

# derive\_filter?(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L10 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#derive_sort?/1 "Link to this function")

# derive\_sort?(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L14 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#include_nil_values?/1 "Link to this function")

# include\_nil\_values?(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L49 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#includes/1 "Link to this function")

# includes(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L18 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#primary_key_delimiter/1 "Link to this function")

# primary\_key\_delimiter(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L30 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#primary_key_fields/1 "Link to this function")

# primary\_key\_fields(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L26 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#routes/2 "Link to this function")

# routes(resource, domain\_or\_domains \\\\ \[])

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L34 "View Source")

[Link to this function](AshJsonApi.Resource.Info.html#type/1 "Link to this function")

# type(resource)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/info.ex#L6 "View Source")

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/route.ex#L1 "View Source") AshJsonApi.Resource.Route (ash\_json\_api v1.4.16)

Represents a route for a resource

# [](AshJsonApi.Resource.Route.html#summary)Summary

## [Types](AshJsonApi.Resource.Route.html#types)

[t()](AshJsonApi.Resource.Route.html#t:t/0)

# [](AshJsonApi.Resource.Route.html#types)Types

[Link to this type](AshJsonApi.Resource.Route.html#t:t/0 "Link to this type")

# t()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/route.ex#L27 "View Source")

```
@type t() :: %AshJsonApi.Resource.Route{
  action: term(),
  action_type: term(),
  controller: term(),
  default_fields: term(),
  derive_filter?: term(),
  derive_sort?: term(),
  metadata: term(),
  method: term(),
  modify_conn: term(),
  name: term(),
  primary?: term(),
  query_params: term(),
  read_action: term(),
  relationship: term(),
  relationship_arguments: term(),
  resource: term(),
  route: term(),
  type: term(),
  upsert?: term(),
  upsert_identity: term(),
  wrap_in_result?: term()
}
```

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/verifiers/verify_actions.ex#L1 "View Source") AshJsonApi.Resource.Verifiers.VerifyActions (ash\_json\_api v1.4.16)

Verifies that all actions are valid for each route.

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/verifiers/verify_has_type.ex#L1 "View Source") AshJsonApi.Resource.Verifiers.VerifyHasType (ash\_json\_api v1.4.16)

Verifies that a resource has a type if it has any routes that need it.

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/verifiers/verify_includes.ex#L1 "View Source") AshJsonApi.Resource.Verifiers.VerifyIncludes (ash\_json\_api v1.4.16)

Verifies that all includes are valid public relationships

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/verifiers/verify_query_params.ex#L1 "View Source") AshJsonApi.Resource.Verifiers.VerifyQueryParams (ash\_json\_api v1.4.16)

Verify query params are not reserved or shadowed by the route

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/verifiers/verify_relationships.ex#L1 "View Source") AshJsonApi.Resource.Verifiers.VerifyRelationships (ash\_json\_api v1.4.16)

Verifies that any routes that reference a relationship reference a public one

# [](AshJsonApi.Resource.Verifiers.VerifyRelationships.html#summary)Summary

## [Functions](AshJsonApi.Resource.Verifiers.VerifyRelationships.html#functions)

[verify(dsl)](AshJsonApi.Resource.Verifiers.VerifyRelationships.html#verify/1)

Callback implementation for [`Spark.Dsl.Verifier.verify/1`](../spark/2.2.36/Spark.Dsl.Verifier.html#c:verify/1).

# [](AshJsonApi.Resource.Verifiers.VerifyRelationships.html#functions)Functions

[Link to this function](AshJsonApi.Resource.Verifiers.VerifyRelationships.html#verify/1 "Link to this function")

# verify(dsl)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/resource/verifiers/verify_relationships.ex#L5 "View Source")

Callback implementation for [`Spark.Dsl.Verifier.verify/1`](../spark/2.2.36/Spark.Dsl.Verifier.html#c:verify/1).

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/router.ex#L1 "View Source") AshJsonApi.Router (ash\_json\_api v1.4.16)

Use this module to create a router for your AshJsonApi.

To use this, create a module and do the following:

```
defmodule YourRouter do
  use AshJsonApi.Router,
    domains: [YourDomain, YourOtherDomain],
    # these next two are optional, only add them if you want those endpoints
    open_api: "/open_api",
    json_schema: "/json_schema",
    # tell us where it is mounted in your router
    prefix: "/api/json"
end
```

Then in your Phoenix router or plug pipeline, forward to this plug. In phoenix, that looks like this:

```
    forward "/api", YourRouter
```

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L1 "View Source") AshJsonApi.Test (ash\_json\_api v1.4.16)

Utilities for testing AshJsonApi.

## [](AshJsonApi.Test.html#module-making-requests)Making Requests

The request testing functions get/patch/post/delete all support the following options

- `:status`: Asserts that the response has the provided status after making the request
- `:router`: The corresponding JsonApiRouter to go through. Can be set statically in config, see below for more.
- `:actor`: Sets the provided actor as the actor for the request
- `:tenant`: Sets the provided tenant as the tenant for the request

A standard test would look like this:

```
test "can list posts", %{current_user: current_user} do
  Domain
  # GET /posts
  # assert resp.status == 200
  |> get("/posts", status: 200, actor: current_user, router: MyAppWeb.JsonApiRouter)
  # pattern match on the data key of the response
  |> assert_data_matches([
    %{
      "attributes" => %{
        "name" => "foo"
      }
    }
  ])
end
```

# [](AshJsonApi.Test.html#summary)Summary

## [Functions](AshJsonApi.Test.html#functions)

[assert\_data\_equals(conn, expected\_data)](AshJsonApi.Test.html#assert_data_equals/2)

Assert that the response body's `"data"` equals an exact value

[assert\_data\_matches(conn, data\_pattern)](AshJsonApi.Test.html#assert_data_matches/2)

Assert that the response body's `"data"` matches a pattern

[assert\_has\_error(conn, fields)](AshJsonApi.Test.html#assert_has_error/2)

Asserts that an error is in the response where each key present in the provided map has the same value in the error.

[assert\_has\_matching\_include(conn, function)](AshJsonApi.Test.html#assert_has_matching_include/2)

Assert that the given function returns true for at least one included record

[delete(domain, path, opts \\\\ \[\])](AshJsonApi.Test.html#delete/3)

Sends a DELETE request to the given path. See the module docs for more.

[get(domain, path, opts \\\\ \[\])](AshJsonApi.Test.html#get/3)

Sends a GET request to the given path. See the module docs for more.

[multipart\_post(domain, path, body, opts \\\\ \[\])](AshJsonApi.Test.html#multipart_post/4)

Sends a multipart POST request to the given path. See the module docs for more.

[patch(domain, path, body, opts \\\\ \[\])](AshJsonApi.Test.html#patch/4)

Sends a PATCH request to the given path. See the module docs for more.

[post(domain, path, body, opts \\\\ \[\])](AshJsonApi.Test.html#post/4)

Sends a POST request to the given path. See the module docs for more.

[refute\_has\_matching\_include(conn, function)](AshJsonApi.Test.html#refute_has_matching_include/2)

Refute that the given function returns true for at least one included record

# [](AshJsonApi.Test.html#functions)Functions

[Link to this macro](AshJsonApi.Test.html#assert_data_equals/2 "Link to this macro")

# assert\_data\_equals(conn, expected\_data)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L288 "View Source") (macro)

Assert that the response body's `"data"` equals an exact value

[Link to this macro](AshJsonApi.Test.html#assert_data_matches/2 "Link to this macro")

# assert\_data\_matches(conn, data\_pattern)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L301 "View Source") (macro)

Assert that the response body's `"data"` matches a pattern

[Link to this macro](AshJsonApi.Test.html#assert_has_error/2 "Link to this macro")

# assert\_has\_error(conn, fields)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L422 "View Source") (macro)

Asserts that an error is in the response where each key present in the provided map has the same value in the error.

## [](AshJsonApi.Test.html#assert_has_error/2-example)Example

```
Domain
|> delete("/posts/1", status: 404)
|> assert_has_error(%{
  "code" => "not_found",
  "detail" => "No post record found with `id: 1`",
  "title" => "Entity Not Found"
})
```

[Link to this macro](AshJsonApi.Test.html#assert_has_matching_include/2 "Link to this macro")

# assert\_has\_matching\_include(conn, function)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L451 "View Source") (macro)

Assert that the given function returns true for at least one included record

## [](AshJsonApi.Test.html#assert_has_matching_include/2-example)Example

Domain |&gt; get("/posts/#{post.id}/?include=author", status: 200) |&gt; assert\_has\_matching\_include(fn %{"type" =&gt; "author", "id" =&gt; ^author\_id} -&gt;

```
true
```

_ -&gt;

```
false
```

end)

[Link to this function](AshJsonApi.Test.html#delete/3 "Link to this function")

# delete(domain, path, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L245 "View Source")

Sends a DELETE request to the given path. See the module docs for more.

[Link to this function](AshJsonApi.Test.html#get/3 "Link to this function")

# get(domain, path, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L41 "View Source")

Sends a GET request to the given path. See the module docs for more.

[Link to this function](AshJsonApi.Test.html#multipart_post/4 "Link to this function")

# multipart\_post(domain, path, body, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L133 "View Source")

Sends a multipart POST request to the given path. See the module docs for more.

[Link to this function](AshJsonApi.Test.html#patch/4 "Link to this function")

# patch(domain, path, body, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L198 "View Source")

Sends a PATCH request to the given path. See the module docs for more.

[Link to this function](AshJsonApi.Test.html#post/4 "Link to this function")

# post(domain, path, body, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L85 "View Source")

Sends a POST request to the given path. See the module docs for more.

[Link to this macro](AshJsonApi.Test.html#refute_has_matching_include/2 "Link to this macro")

# refute\_has\_matching\_include(conn, function)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/test/test.ex#L479 "View Source") (macro)

Refute that the given function returns true for at least one included record

## [](AshJsonApi.Test.html#refute_has_matching_include/2-example)Example

Domain |&gt; get("/posts/#{post.id}/?include=author", status: 200) |&gt; refute\_has\_matching\_include(fn %{"type" =&gt; "author", "id" =&gt; ^author\_id} -&gt;

```
true
```

_ -&gt;

```
false
```

end)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/to_json_api_error.ex#L1 "View Source") AshJsonApi.ToJsonApiError protocol (ash\_json\_api v1.4.16)

A protocol for turning an Ash exception into an AshJsonApi.Error

To use, implement the protocol for a builtin Ash exception type or for your own custom Ash exception.

## [](AshJsonApi.ToJsonApiError.html#module-example)Example

```
defmodule NotAvailable do
  use Ash.Error.Exception

  use Splode.Error,
    fields: [],
    class: :invalid

  defimpl AshJsonApi.ToJsonApiError do
    def to_json_api_error(error) do
      %AshJsonApi.Error{
        id: Ash.UUID.generate(),
        status_code: 409,
        code: "not_available",
        title: "not_available",
        detail: "Not available"
      }
    end
  end
end
```

# [](AshJsonApi.ToJsonApiError.html#summary)Summary

## [Types](AshJsonApi.ToJsonApiError.html#types)

[t()](AshJsonApi.ToJsonApiError.html#t:t/0)

All the types that implement this protocol.

## [Functions](AshJsonApi.ToJsonApiError.html#functions)

[to\_json\_api\_error(struct)](AshJsonApi.ToJsonApiError.html#to_json_api_error/1)

# [](AshJsonApi.ToJsonApiError.html#types)Types

[Link to this type](AshJsonApi.ToJsonApiError.html#t:t/0 "Link to this type")

# t()

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/to_json_api_error.ex#L1 "View Source")

```
@type t() :: term()
```

All the types that implement this protocol.

# [](AshJsonApi.ToJsonApiError.html#functions)Functions

[Link to this function](AshJsonApi.ToJsonApiError.html#to_json_api_error/1 "Link to this function")

# to\_json\_api\_error(struct)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/error/to_json_api_error.ex#L33 "View Source")

```
@spec to_json_api_error(term()) :: AshJsonApi.Error.t() | [AshJsonApi.Error.t()]
```

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/type.ex#L1 "View Source") AshJsonApi.Type behaviour (ash\_json\_api v1.4.16)

The behaviour for customizing how a datatype is rendered and written in AshJsonApi.

# [](AshJsonApi.Type.html#summary)Summary

## [Callbacks](AshJsonApi.Type.html#callbacks)

[json\_schema(t)](AshJsonApi.Type.html#c:json_schema/1)

[json\_write\_schema(t)](AshJsonApi.Type.html#c:json_write_schema/1)

# [](AshJsonApi.Type.html#callbacks)Callbacks

[Link to this callback](AshJsonApi.Type.html#c:json_schema/1 "Link to this callback")

# json\_schema(t)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/type.ex#L6 "View Source") (optional)

```
@callback json_schema(Keyword.t()) :: map()
```

[Link to this callback](AshJsonApi.Type.html#c:json_write_schema/1 "Link to this callback")

# json\_write\_schema(t)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/ash_json_api/type.ex#L7 "View Source")

```
@callback json_write_schema(Keyword.t()) :: map()
```

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/topics/authenticate-with-json-api.md#L1 "View Source") Authenticating with AshJsonApi

Authenticating with AshJsonApi requires a few things. The first thing to note is that this is not something that is provided for you out of the box by `ash_authentication`.

You will need to:

- connect the authentication action to a route manually
- need to extract the resulting authentication token
- set it as a header or as metadata to provide it to the client to use on future requests

You may also need to add a policy bypass to your resource, to make the action accessible via a non-AshAuthenticationPhoenix liveview.

## [](authenticate-with-json-api.html#the-route)The route

In this example, we will use the standard `:sign_in_with_password` action that is created by `ash_authentication` under the hood, and we will return the token as part of the response metadata.

```
# In your User module
defmodule <YourApp>.<YourDomain>.User do
  json_api do
    routes do
      # Read actions that return *only one resource* are allowed to be used with
      # `post` routes.
      post :sign_in_with_password do
        route "/sign_in"

        # Given a successful request, we will modify the response to include the
        # generated token
        metadata fn _subject, user, _request ->
          %{token: user.__metadata__.token}
        end
      end
    end
  end
end
```

This will add the token to the `meta` key in a successful API response, eg.

```
{
  {
  "data": {
    "attributes": { ... },
    ...
  },
  "meta": {
    "token": "eyJhbGc..."
  }
}
```

[← Previous Page Authorize with AshJsonApi](authorize-with-json-api.html)

[Next Page → DSL: AshJsonApi.Resource](dsl-ashjsonapi-resource.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/topics/authenticate-with-json-api.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/topics/authorize-with-json-api.md#L1 "View Source") Authorize with AshJsonApi

By default, `authorize?` in the domain is set to true. To disable authorization entirely for a given domain in graphql, use:

```
json_api do
  authorize? false
end
```

This is typically only necessary for testing purposes.

If you are doing authorization, you'll need to provide an `actor`.

## [](authorize-with-json-api.html#setting-the-actor-manually)Setting the actor manually

If you are using AshAuthentication, this will be done for you. To set the `actor` for authorization, you'll need to add an `actor` key to the `conn`. Typically, you would have a plug that fetches the current user and uses [`Ash.PlugHelpers.set_actor/2`](../ash/3.4.47/Ash.PlugHelpers.html#set_actor/2) to set the actor in the `conn` (likewise with [`Ash.PlugHelpers.set_tenant/2`](../ash/3.4.47/Ash.PlugHelpers.html#set_tenant/2)).

```
defmodule MyAppWeb.Router do
  pipeline :api do
    # ...
    plug :get_actor_from_token
  end

  def get_actor_from_token(conn, _opts) do
     with ["" <> token] <- get_req_header(conn, "authorization"),
         {:ok, user, _claims} <- MyApp.Guardian.resource_from_token(token) do
      conn
      |> Ash.PlugHelpers.set_actor(user)
    else
    _ -> conn
    end
  end
end
```

[← Previous Page Upgrading to AshJsonApi to 1.0](upgrade.html)

[Next Page → Authenticating with AshJsonApi](authenticate-with-json-api.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/topics/authorize-with-json-api.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/dsls/DSL-AshJsonApi.Domain.md#L1 "View Source") DSL: AshJsonApi.Domain

The entrypoint for adding JSON:API behavior to an Ash domain

## [](dsl-ashjsonapi-domain.html#json_api)json\_api

Global configuration for JSON:API

### [](dsl-ashjsonapi-domain.html#nested-dsls)Nested DSLs

- [open\_api](dsl-ashjsonapi-domain.html#json_api-open_api)
- [routes](dsl-ashjsonapi-domain.html#json_api-routes)
  
  - base\_route
    
    - get
    - index
    - post
    - patch
    - delete
    - related
    - relationship
    - post\_to\_relationship
    - patch\_relationship
    - delete\_from\_relationship
    - route
  - get
  - index
  - post
  - patch
  - delete
  - related
  - relationship
  - post\_to\_relationship
  - patch\_relationship
  - delete\_from\_relationship
  - route

### [](dsl-ashjsonapi-domain.html#examples)Examples

```
json_api do
  prefix "/json_api"
  log_errors? true
end
```

### [](dsl-ashjsonapi-domain.html#options)Options

NameTypeDefaultDocs[`router`](dsl-ashjsonapi-domain.html#json_api-router)`atom`The router that you created for this Domain. Used by test helpers to send requests[`show_raised_errors?`](dsl-ashjsonapi-domain.html#json_api-show_raised_errors?)`boolean``false`For security purposes, if an error is *raised* then Ash simply shows a generic error. If you want to show those errors, set this to true.[`prefix`](dsl-ashjsonapi-domain.html#json_api-prefix)`String.t`The route prefix at which you are serving the JSON:API[`serve_schema?`](dsl-ashjsonapi-domain.html#json_api-serve_schema?)`boolean``false`Whether or not create a /schema route that serves the JSON schema of your API[`authorize?`](dsl-ashjsonapi-domain.html#json_api-authorize?)`boolean``true`Whether or not to perform authorization on requests.[`log_errors?`](dsl-ashjsonapi-domain.html#json_api-log_errors?)`boolean``true`Whether or not to log any errors produced[`include_nil_values?`](dsl-ashjsonapi-domain.html#json_api-include_nil_values?)`boolean``true`Whether or not to include properties for values that are nil in the JSON output

## [](dsl-ashjsonapi-domain.html#json_api-open_api)json\_api.open\_api

OpenAPI configurations

### [](dsl-ashjsonapi-domain.html#examples-1)Examples

```
json_api do
  ...
  open_api do
    tag "Users"
    group_by :api
  end
end
```

### [](dsl-ashjsonapi-domain.html#options-1)Options

NameTypeDefaultDocs[`tag`](dsl-ashjsonapi-domain.html#json_api-open_api-tag)`String.t`Tag to be used when used by :group\_by[`group_by`](dsl-ashjsonapi-domain.html#json_api-open_api-group_by)`:domain | :resource``:resource`Group by :domain or :resource

## [](dsl-ashjsonapi-domain.html#json_api-routes)json\_api.routes

Configure the routes that will be exposed via the JSON:API

### [](dsl-ashjsonapi-domain.html#nested-dsls-1)Nested DSLs

- [base\_route](dsl-ashjsonapi-domain.html#json_api-routes-base_route)
  
  - get
  - index
  - post
  - patch
  - delete
  - related
  - relationship
  - post\_to\_relationship
  - patch\_relationship
  - delete\_from\_relationship
  - route
- [get](dsl-ashjsonapi-domain.html#json_api-routes-get)
- [index](dsl-ashjsonapi-domain.html#json_api-routes-index)
- [post](dsl-ashjsonapi-domain.html#json_api-routes-post)
- [patch](dsl-ashjsonapi-domain.html#json_api-routes-patch)
- [delete](dsl-ashjsonapi-domain.html#json_api-routes-delete)
- [related](dsl-ashjsonapi-domain.html#json_api-routes-related)
- [relationship](dsl-ashjsonapi-domain.html#json_api-routes-relationship)
- [post\_to\_relationship](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship)
- [patch\_relationship](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship)
- [delete\_from\_relationship](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship)
- [route](dsl-ashjsonapi-domain.html#json_api-routes-route)

### [](dsl-ashjsonapi-domain.html#examples-2)Examples

```
routes do
  base "/posts"

  get :read
  get :me, route: "/me"
  index :read
  post :confirm_name, route: "/confirm_name"
  patch :update
  related :comments, :read
  relationship :comments, :read
  post_to_relationship :comments
  patch_relationship :comments
  delete_from_relationship :comments
end
```

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route)json\_api.routes.base\_route

```
base_route route, resource \\ nil
```

Sets a prefix for a list of contained routes

### [](dsl-ashjsonapi-domain.html#nested-dsls-2)Nested DSLs

- [get](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get)
- [index](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index)
- [post](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post)
- [patch](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch)
- [delete](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete)
- [related](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related)
- [relationship](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship)
- [post\_to\_relationship](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship)
- [patch\_relationship](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship)
- [delete\_from\_relationship](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship)
- [route](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route)

### [](dsl-ashjsonapi-domain.html#examples-3)Examples

```
base_route "/posts" do
  index :read
  get :read
end

base_route "/comments" do
  index :read
end
```

### [](dsl-ashjsonapi-domain.html#arguments)Arguments

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route)`String.t`The route prefix to use for contained routes[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-resource)`module`The resource that the contained routes will use by default

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get)json\_api.routes.base\_route.get

```
get resource \\ nil, action
```

A GET route to retrieve a single record

### [](dsl-ashjsonapi-domain.html#examples-4)Examples

```
get :read
```

### [](dsl-ashjsonapi-domain.html#arguments-1)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-2)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-get-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index)json\_api.routes.base\_route.index

```
index resource \\ nil, action
```

A GET route to retrieve a list of records

### [](dsl-ashjsonapi-domain.html#examples-5)Examples

```
index :read
```

### [](dsl-ashjsonapi-domain.html#arguments-2)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-3)Options

NameTypeDefaultDocs[`paginate?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-paginate?)`boolean``true`[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-route)`String.t``"/"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-index-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-1)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post)json\_api.routes.base\_route.post

```
post resource \\ nil, action
```

A POST route to create a record

### [](dsl-ashjsonapi-domain.html#examples-6)Examples

```
post :create
```

### [](dsl-ashjsonapi-domain.html#arguments-3)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-4)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-route)`String.t``"/"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource[`relationship_arguments`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-relationship_arguments)`list(atom | {:id, atom})``[]`Arguments to be used to edit relationships. See the [relationships guide](relationships.html) for more.[`upsert?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-upsert?)`boolean``false`Whether or not to use the `upsert?: true` option when calling [`Ash.create/2`](../ash/3.4.47/Ash.html#create/2).[`upsert_identity`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post-upsert_identity)`atom``false`Which identity to use for the upsert

### [](dsl-ashjsonapi-domain.html#introspection-2)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch)json\_api.routes.base\_route.patch

```
patch resource \\ nil, action
```

A PATCH route to update a record

### [](dsl-ashjsonapi-domain.html#examples-7)Examples

```
patch :update
```

### [](dsl-ashjsonapi-domain.html#arguments-4)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-5)Options

NameTypeDefaultDocs[`relationship_arguments`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-relationship_arguments)`any``[]`Arguments to be used to edit relationships. See the [relationships guide](relationships.html) for more.[`read_action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-read_action)`atom`The read action to use to look the record up before updating[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-3)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete)json\_api.routes.base\_route.delete

```
delete resource \\ nil, action
```

A DELETE route to destroy a record

### [](dsl-ashjsonapi-domain.html#examples-8)Examples

```
delete :destroy
```

### [](dsl-ashjsonapi-domain.html#arguments-5)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-6)Options

NameTypeDefaultDocs[`read_action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-read_action)`atom`The read action to use to look the record up before updating[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-4)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related)json\_api.routes.base\_route.related

```
related resource \\ nil, relationship, action
```

A GET route to read the related resources of a relationship

### [](dsl-ashjsonapi-domain.html#examples-9)Examples

```
related :comments, :read
```

### [](dsl-ashjsonapi-domain.html#arguments-6)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-relationship)`atom`[`action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-7)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-route)`String.t`The path of the route - Defaults to /:id/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-related-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-5)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship)json\_api.routes.base\_route.relationship

```
relationship resource \\ nil, relationship, action
```

A READ route to read the relationship, returns resource identifiers.

### [](dsl-ashjsonapi-domain.html#examples-10)Examples

```
relationship :comments, :read
```

### [](dsl-ashjsonapi-domain.html#arguments-7)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-relationship)`atom`[`action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-8)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-6)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship)json\_api.routes.base\_route.post\_to\_relationship

```
post_to_relationship resource \\ nil, relationship
```

A POST route to create related entities using resource identifiers

### [](dsl-ashjsonapi-domain.html#examples-11)Examples

```
post_to_relationship :comments
```

### [](dsl-ashjsonapi-domain.html#arguments-8)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-relationship)`atom`

### [](dsl-ashjsonapi-domain.html#options-9)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-post_to_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-7)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship)json\_api.routes.base\_route.patch\_relationship

```
patch_relationship resource \\ nil, relationship
```

A PATCH route to update a relationship using resource identifiers

### [](dsl-ashjsonapi-domain.html#examples-12)Examples

```
patch_relationship :comments
```

### [](dsl-ashjsonapi-domain.html#arguments-9)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-relationship)`atom`

### [](dsl-ashjsonapi-domain.html#options-10)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-patch_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-8)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship)json\_api.routes.base\_route.delete\_from\_relationship

```
delete_from_relationship resource \\ nil, relationship
```

A DELETE route to remove related entities using resource identifiers

### [](dsl-ashjsonapi-domain.html#examples-13)Examples

```
delete_from_relationship :comments
```

### [](dsl-ashjsonapi-domain.html#arguments-10)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-relationship)`atom`

### [](dsl-ashjsonapi-domain.html#options-11)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-delete_from_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-9)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route)json\_api.routes.base\_route.route

```
route resource \\ nil, method, route, action
```

A route for a generic action.

### [](dsl-ashjsonapi-domain.html#examples-14)Examples

```
route :get, "say_hi/:name", :say_hello
```

### [](dsl-ashjsonapi-domain.html#arguments-11)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-resource)`module`The resource that the route's action is defined on[`method`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-method)`atom`The HTTP method for the route, e.g `:get`, or `:post`[`route`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-route)`String.t`The path of the route[`action`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-12)Options

NameTypeDefaultDocs[`wrap_in_result?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-wrap_in_result?)`boolean``false`Whether or not the action result should be wrapped in `{result: <result>}`[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-base_route-route-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-10)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

### [](dsl-ashjsonapi-domain.html#introspection-11)Introspection

Target: [`AshJsonApi.Domain.BaseRoute`](AshJsonApi.Domain.BaseRoute.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-get)json\_api.routes.get

```
get resource, action
```

A GET route to retrieve a single record

### [](dsl-ashjsonapi-domain.html#examples-15)Examples

```
get :read
```

### [](dsl-ashjsonapi-domain.html#arguments-12)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-get-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-get-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-13)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-get-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-get-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-get-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-get-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-get-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`name`](dsl-ashjsonapi-domain.html#json_api-routes-get-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-get-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-get-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-12)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-index)json\_api.routes.index

```
index resource, action
```

A GET route to retrieve a list of records

### [](dsl-ashjsonapi-domain.html#examples-16)Examples

```
index :read
```

### [](dsl-ashjsonapi-domain.html#arguments-13)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-index-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-index-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-14)Options

NameTypeDefaultDocs[`paginate?`](dsl-ashjsonapi-domain.html#json_api-routes-index-paginate?)`boolean``true`[`route`](dsl-ashjsonapi-domain.html#json_api-routes-index-route)`String.t``"/"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-index-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-index-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-index-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-index-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`name`](dsl-ashjsonapi-domain.html#json_api-routes-index-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-index-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-index-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-13)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-post)json\_api.routes.post

```
post resource, action
```

A POST route to create a record

### [](dsl-ashjsonapi-domain.html#examples-17)Examples

```
post :create
```

### [](dsl-ashjsonapi-domain.html#arguments-14)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-post-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-post-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-15)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-post-route)`String.t``"/"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-post-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-post-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-post-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-post-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-post-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-post-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-post-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-post-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource[`relationship_arguments`](dsl-ashjsonapi-domain.html#json_api-routes-post-relationship_arguments)`list(atom | {:id, atom})``[]`Arguments to be used to edit relationships. See the [relationships guide](relationships.html) for more.[`upsert?`](dsl-ashjsonapi-domain.html#json_api-routes-post-upsert?)`boolean``false`Whether or not to use the `upsert?: true` option when calling [`Ash.create/2`](../ash/3.4.47/Ash.html#create/2).[`upsert_identity`](dsl-ashjsonapi-domain.html#json_api-routes-post-upsert_identity)`atom``false`Which identity to use for the upsert

### [](dsl-ashjsonapi-domain.html#introspection-14)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-patch)json\_api.routes.patch

```
patch resource, action
```

A PATCH route to update a record

### [](dsl-ashjsonapi-domain.html#examples-18)Examples

```
patch :update
```

### [](dsl-ashjsonapi-domain.html#arguments-15)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-patch-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-patch-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-16)Options

NameTypeDefaultDocs[`relationship_arguments`](dsl-ashjsonapi-domain.html#json_api-routes-patch-relationship_arguments)`any``[]`Arguments to be used to edit relationships. See the [relationships guide](relationships.html) for more.[`read_action`](dsl-ashjsonapi-domain.html#json_api-routes-patch-read_action)`atom`The read action to use to look the record up before updating[`route`](dsl-ashjsonapi-domain.html#json_api-routes-patch-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-patch-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-patch-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-patch-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-patch-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-patch-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-patch-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-patch-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-patch-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-15)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-delete)json\_api.routes.delete

```
delete resource, action
```

A DELETE route to destroy a record

### [](dsl-ashjsonapi-domain.html#examples-19)Examples

```
delete :destroy
```

### [](dsl-ashjsonapi-domain.html#arguments-16)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-delete-resource)`module`The resource that the route's action is defined on[`action`](dsl-ashjsonapi-domain.html#json_api-routes-delete-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-17)Options

NameTypeDefaultDocs[`read_action`](dsl-ashjsonapi-domain.html#json_api-routes-delete-read_action)`atom`The read action to use to look the record up before updating[`route`](dsl-ashjsonapi-domain.html#json_api-routes-delete-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-delete-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-delete-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-delete-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-delete-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-delete-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-delete-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-delete-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-delete-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-16)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-related)json\_api.routes.related

```
related resource, relationship, action
```

A GET route to read the related resources of a relationship

### [](dsl-ashjsonapi-domain.html#examples-20)Examples

```
related :comments, :read
```

### [](dsl-ashjsonapi-domain.html#arguments-17)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-related-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-related-relationship)`atom`[`action`](dsl-ashjsonapi-domain.html#json_api-routes-related-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-18)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-related-route)`String.t`The path of the route - Defaults to /:id/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-related-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-related-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-related-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-related-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-related-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-related-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-related-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-related-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-17)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-relationship)json\_api.routes.relationship

```
relationship resource, relationship, action
```

A READ route to read the relationship, returns resource identifiers.

### [](dsl-ashjsonapi-domain.html#examples-21)Examples

```
relationship :comments, :read
```

### [](dsl-ashjsonapi-domain.html#arguments-18)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-relationship)`atom`[`action`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-19)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-18)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship)json\_api.routes.post\_to\_relationship

```
post_to_relationship resource, relationship
```

A POST route to create related entities using resource identifiers

### [](dsl-ashjsonapi-domain.html#examples-22)Examples

```
post_to_relationship :comments
```

### [](dsl-ashjsonapi-domain.html#arguments-19)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-relationship)`atom`

### [](dsl-ashjsonapi-domain.html#options-20)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-post_to_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-19)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship)json\_api.routes.patch\_relationship

```
patch_relationship resource, relationship
```

A PATCH route to update a relationship using resource identifiers

### [](dsl-ashjsonapi-domain.html#examples-23)Examples

```
patch_relationship :comments
```

### [](dsl-ashjsonapi-domain.html#arguments-20)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-relationship)`atom`

### [](dsl-ashjsonapi-domain.html#options-21)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-patch_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-20)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship)json\_api.routes.delete\_from\_relationship

```
delete_from_relationship resource, relationship
```

A DELETE route to remove related entities using resource identifiers

### [](dsl-ashjsonapi-domain.html#examples-24)Examples

```
delete_from_relationship :comments
```

### [](dsl-ashjsonapi-domain.html#arguments-21)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-resource)`module`The resource that the route's action is defined on[`relationship`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-relationship)`atom`

### [](dsl-ashjsonapi-domain.html#options-22)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-delete_from_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-21)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-domain.html#json_api-routes-route)json\_api.routes.route

```
route resource, method, route, action
```

A route for a generic action.

### [](dsl-ashjsonapi-domain.html#examples-25)Examples

```
route :get, "say_hi/:name", :say_hello
```

### [](dsl-ashjsonapi-domain.html#arguments-22)Arguments

NameTypeDefaultDocs[`resource`](dsl-ashjsonapi-domain.html#json_api-routes-route-resource)`module`The resource that the route's action is defined on[`method`](dsl-ashjsonapi-domain.html#json_api-routes-route-method)`atom`The HTTP method for the route, e.g `:get`, or `:post`[`route`](dsl-ashjsonapi-domain.html#json_api-routes-route-route)`String.t`The path of the route[`action`](dsl-ashjsonapi-domain.html#json_api-routes-route-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-domain.html#options-23)Options

NameTypeDefaultDocs[`wrap_in_result?`](dsl-ashjsonapi-domain.html#json_api-routes-route-wrap_in_result?)`boolean``false`Whether or not the action result should be wrapped in `{result: <result>}`[`default_fields`](dsl-ashjsonapi-domain.html#json_api-routes-route-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-domain.html#json_api-routes-route-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-domain.html#json_api-routes-route-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-domain.html#json_api-routes-route-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-domain.html#json_api-routes-route-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-domain.html#json_api-routes-route-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-domain.html#json_api-routes-route-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-domain.html#json_api-routes-route-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-domain.html#introspection-22)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

[← Previous Page DSL: AshJsonApi.Resource](dsl-ashjsonapi-resource.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/dsls/DSL-AshJsonApi.Domain.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/dsls/DSL-AshJsonApi.Resource.md#L1 "View Source") DSL: AshJsonApi.Resource

The entrypoint for adding JSON:API behavior to a resource"

## [](dsl-ashjsonapi-resource.html#json_api)json\_api

Configure the resource's behavior in the JSON:API

### [](dsl-ashjsonapi-resource.html#nested-dsls)Nested DSLs

- [routes](dsl-ashjsonapi-resource.html#json_api-routes)
  
  - get
  - index
  - post
  - patch
  - delete
  - related
  - relationship
  - post\_to\_relationship
  - patch\_relationship
  - delete\_from\_relationship
  - route
- [primary\_key](dsl-ashjsonapi-resource.html#json_api-primary_key)

### [](dsl-ashjsonapi-resource.html#examples)Examples

```
json_api do
  type "post"
  includes [
    friends: [
      :comments
    ],
    comments: []
  ]

  routes do
    base "/posts"

    get :read
    get :me, route: "/me"
    index :read
    post :confirm_name, route: "/confirm_name"
    patch :update
    related :comments, :read
    relationship :comments, :read
    post_to_relationship :comments
    patch_relationship :comments
    delete_from_relationship :comments
  end
end
```

### [](dsl-ashjsonapi-resource.html#options)Options

NameTypeDefaultDocs[`type`](dsl-ashjsonapi-resource.html#json_api-type)`String.t`The resource identifier type of this resource in JSON:API[`includes`](dsl-ashjsonapi-resource.html#json_api-includes)`any``[]`A keyword list of all paths that are includable from this resource[`include_nil_values?`](dsl-ashjsonapi-resource.html#json_api-include_nil_values?)`any`Whether or not to include properties for values that are nil in the JSON output[`default_fields`](dsl-ashjsonapi-resource.html#json_api-default_fields)`list(atom)`The fields to include in the object if the `fields` query parameter does not specify. Defaults to all public[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

## [](dsl-ashjsonapi-resource.html#json_api-routes)json\_api.routes

Configure the routes that will be exposed via the JSON:API

### [](dsl-ashjsonapi-resource.html#nested-dsls-1)Nested DSLs

- [get](dsl-ashjsonapi-resource.html#json_api-routes-get)
- [index](dsl-ashjsonapi-resource.html#json_api-routes-index)
- [post](dsl-ashjsonapi-resource.html#json_api-routes-post)
- [patch](dsl-ashjsonapi-resource.html#json_api-routes-patch)
- [delete](dsl-ashjsonapi-resource.html#json_api-routes-delete)
- [related](dsl-ashjsonapi-resource.html#json_api-routes-related)
- [relationship](dsl-ashjsonapi-resource.html#json_api-routes-relationship)
- [post\_to\_relationship](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship)
- [patch\_relationship](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship)
- [delete\_from\_relationship](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship)
- [route](dsl-ashjsonapi-resource.html#json_api-routes-route)

### [](dsl-ashjsonapi-resource.html#examples-1)Examples

```
routes do
  base "/posts"

  get :read
  get :me, route: "/me"
  index :read
  post :confirm_name, route: "/confirm_name"
  patch :update
  related :comments, :read
  relationship :comments, :read
  post_to_relationship :comments
  patch_relationship :comments
  delete_from_relationship :comments
end
```

### [](dsl-ashjsonapi-resource.html#options-1)Options

NameTypeDefaultDocs[`base`](dsl-ashjsonapi-resource.html#json_api-routes-base)`String.t`A base route for the resource, e.g `"/users"`

## [](dsl-ashjsonapi-resource.html#json_api-routes-get)json\_api.routes.get

```
get action
```

A GET route to retrieve a single record

### [](dsl-ashjsonapi-resource.html#examples-2)Examples

```
get :read
```

### [](dsl-ashjsonapi-resource.html#arguments)Arguments

NameTypeDefaultDocs[`action`](dsl-ashjsonapi-resource.html#json_api-routes-get-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-resource.html#options-2)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-resource.html#json_api-routes-get-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-get-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-get-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-get-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-get-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`name`](dsl-ashjsonapi-resource.html#json_api-routes-get-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-get-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-get-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-index)json\_api.routes.index

```
index action
```

A GET route to retrieve a list of records

### [](dsl-ashjsonapi-resource.html#examples-3)Examples

```
index :read
```

### [](dsl-ashjsonapi-resource.html#arguments-1)Arguments

NameTypeDefaultDocs[`action`](dsl-ashjsonapi-resource.html#json_api-routes-index-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-resource.html#options-3)Options

NameTypeDefaultDocs[`paginate?`](dsl-ashjsonapi-resource.html#json_api-routes-index-paginate?)`boolean``true`[`route`](dsl-ashjsonapi-resource.html#json_api-routes-index-route)`String.t``"/"`The path of the route[`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-index-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-index-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-index-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-index-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`name`](dsl-ashjsonapi-resource.html#json_api-routes-index-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-index-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-index-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-1)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-post)json\_api.routes.post

```
post action
```

A POST route to create a record

### [](dsl-ashjsonapi-resource.html#examples-4)Examples

```
post :create
```

### [](dsl-ashjsonapi-resource.html#arguments-2)Arguments

NameTypeDefaultDocs[`action`](dsl-ashjsonapi-resource.html#json_api-routes-post-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-resource.html#options-4)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-resource.html#json_api-routes-post-route)`String.t``"/"`The path of the route[`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-post-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-post-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-post-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-post-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-post-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-post-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-post-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-post-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource[`relationship_arguments`](dsl-ashjsonapi-resource.html#json_api-routes-post-relationship_arguments)`list(atom | {:id, atom})``[]`Arguments to be used to edit relationships. See the [relationships guide](relationships.html) for more.[`upsert?`](dsl-ashjsonapi-resource.html#json_api-routes-post-upsert?)`boolean``false`Whether or not to use the `upsert?: true` option when calling [`Ash.create/2`](../ash/3.4.47/Ash.html#create/2).[`upsert_identity`](dsl-ashjsonapi-resource.html#json_api-routes-post-upsert_identity)`atom``false`Which identity to use for the upsert

### [](dsl-ashjsonapi-resource.html#introspection-2)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-patch)json\_api.routes.patch

```
patch action
```

A PATCH route to update a record

### [](dsl-ashjsonapi-resource.html#examples-5)Examples

```
patch :update
```

### [](dsl-ashjsonapi-resource.html#arguments-3)Arguments

NameTypeDefaultDocs[`action`](dsl-ashjsonapi-resource.html#json_api-routes-patch-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-resource.html#options-5)Options

NameTypeDefaultDocs[`relationship_arguments`](dsl-ashjsonapi-resource.html#json_api-routes-patch-relationship_arguments)`any``[]`Arguments to be used to edit relationships. See the [relationships guide](relationships.html) for more.[`read_action`](dsl-ashjsonapi-resource.html#json_api-routes-patch-read_action)`atom`The read action to use to look the record up before updating[`route`](dsl-ashjsonapi-resource.html#json_api-routes-patch-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-patch-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-patch-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-patch-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-patch-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-patch-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-patch-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-patch-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-patch-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-3)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-delete)json\_api.routes.delete

```
delete action
```

A DELETE route to destroy a record

### [](dsl-ashjsonapi-resource.html#examples-6)Examples

```
delete :destroy
```

### [](dsl-ashjsonapi-resource.html#arguments-4)Arguments

NameTypeDefaultDocs[`action`](dsl-ashjsonapi-resource.html#json_api-routes-delete-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-resource.html#options-6)Options

NameTypeDefaultDocs[`read_action`](dsl-ashjsonapi-resource.html#json_api-routes-delete-read_action)`atom`The read action to use to look the record up before updating[`route`](dsl-ashjsonapi-resource.html#json_api-routes-delete-route)`String.t``"/:id"`The path of the route[`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-delete-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-delete-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-delete-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-delete-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-delete-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-delete-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-delete-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-delete-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-4)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-related)json\_api.routes.related

```
related relationship, action
```

A GET route to read the related resources of a relationship

### [](dsl-ashjsonapi-resource.html#examples-7)Examples

```
related :comments, :read
```

### [](dsl-ashjsonapi-resource.html#arguments-5)Arguments

NameTypeDefaultDocs[`relationship`](dsl-ashjsonapi-resource.html#json_api-routes-related-relationship)`atom`[`action`](dsl-ashjsonapi-resource.html#json_api-routes-related-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-resource.html#options-7)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-resource.html#json_api-routes-related-route)`String.t`The path of the route - Defaults to /:id/\[relationship\_name][`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-related-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-related-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-related-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-related-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-related-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-related-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-related-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-related-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-5)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-relationship)json\_api.routes.relationship

```
relationship relationship, action
```

A READ route to read the relationship, returns resource identifiers.

### [](dsl-ashjsonapi-resource.html#examples-8)Examples

```
relationship :comments, :read
```

### [](dsl-ashjsonapi-resource.html#arguments-6)Arguments

NameTypeDefaultDocs[`relationship`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-relationship)`atom`[`action`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-resource.html#options-8)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-6)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship)json\_api.routes.post\_to\_relationship

```
post_to_relationship relationship
```

A POST route to create related entities using resource identifiers

### [](dsl-ashjsonapi-resource.html#examples-9)Examples

```
post_to_relationship :comments
```

### [](dsl-ashjsonapi-resource.html#arguments-7)Arguments

NameTypeDefaultDocs[`relationship`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-relationship)`atom`

### [](dsl-ashjsonapi-resource.html#options-9)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-post_to_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-7)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship)json\_api.routes.patch\_relationship

```
patch_relationship relationship
```

A PATCH route to update a relationship using resource identifiers

### [](dsl-ashjsonapi-resource.html#examples-10)Examples

```
patch_relationship :comments
```

### [](dsl-ashjsonapi-resource.html#arguments-8)Arguments

NameTypeDefaultDocs[`relationship`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-relationship)`atom`

### [](dsl-ashjsonapi-resource.html#options-10)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-patch_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-8)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship)json\_api.routes.delete\_from\_relationship

```
delete_from_relationship relationship
```

A DELETE route to remove related entities using resource identifiers

### [](dsl-ashjsonapi-resource.html#examples-11)Examples

```
delete_from_relationship :comments
```

### [](dsl-ashjsonapi-resource.html#arguments-9)Arguments

NameTypeDefaultDocs[`relationship`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-relationship)`atom`

### [](dsl-ashjsonapi-resource.html#options-11)Options

NameTypeDefaultDocs[`route`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-route)`String.t`The path of the route - Defaults to /:id/relationships/\[relationship\_name][`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-delete_from_relationship-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-9)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-routes-route)json\_api.routes.route

```
route method, route, action
```

A route for a generic action.

### [](dsl-ashjsonapi-resource.html#examples-12)Examples

```
route :get, "say_hi/:name", :say_hello
```

### [](dsl-ashjsonapi-resource.html#arguments-10)Arguments

NameTypeDefaultDocs[`method`](dsl-ashjsonapi-resource.html#json_api-routes-route-method)`atom`The HTTP method for the route, e.g `:get`, or `:post`[`route`](dsl-ashjsonapi-resource.html#json_api-routes-route-route)`String.t`The path of the route[`action`](dsl-ashjsonapi-resource.html#json_api-routes-route-action)`atom`The action to call when this route is hit

### [](dsl-ashjsonapi-resource.html#options-12)Options

NameTypeDefaultDocs[`wrap_in_result?`](dsl-ashjsonapi-resource.html#json_api-routes-route-wrap_in_result?)`boolean``false`Whether or not the action result should be wrapped in `{result: <result>}`[`default_fields`](dsl-ashjsonapi-resource.html#json_api-routes-route-default_fields)`list(atom)`A list of fields to be shown in the attributes of the called route[`primary?`](dsl-ashjsonapi-resource.html#json_api-routes-route-primary?)`boolean``false`Whether or not this is the route that should be linked to by default when rendering links to this type of route[`metadata`](dsl-ashjsonapi-resource.html#json_api-routes-route-metadata)`(any, any, any -> any)`A function to generate arbitrary top-level metadata for the JSON:API response[`modify_conn`](dsl-ashjsonapi-resource.html#json_api-routes-route-modify_conn)`(any, any, any, any -> any)`A function to modify the conn before responding. Used for things like setting headers based on the response. Takes `conn, subject, result, request`[`query_params`](dsl-ashjsonapi-resource.html#json_api-routes-route-query_params)`list(atom)``[]`A list of action inputs to accept as query parameters.[`name`](dsl-ashjsonapi-resource.html#json_api-routes-route-name)`String.t`A globally unique name for this route, to be used when generating docs and open api specifications[`derive_sort?`](dsl-ashjsonapi-resource.html#json_api-routes-route-derive_sort?)`boolean``true`Whether or not to derive a sort parameter based on the sortable fields of the resource[`derive_filter?`](dsl-ashjsonapi-resource.html#json_api-routes-route-derive_filter?)`boolean``true`Whether or not to derive a filter parameter based on the sortable fields of the resource

### [](dsl-ashjsonapi-resource.html#introspection-10)Introspection

Target: [`AshJsonApi.Resource.Route`](AshJsonApi.Resource.Route.html)

## [](dsl-ashjsonapi-resource.html#json_api-primary_key)json\_api.primary\_key

Encode the id of the JSON API response from selected attributes of a resource

### [](dsl-ashjsonapi-resource.html#examples-13)Examples

```
primary_key do
  keys [:first_name, :last_name]
  delimiter "~"
end
```

### [](dsl-ashjsonapi-resource.html#options-13)Options

NameTypeDefaultDocs[`keys`](dsl-ashjsonapi-resource.html#json_api-primary_key-keys)`atom | list(atom)`the list of attributes to encode JSON API primary key[`delimiter`](dsl-ashjsonapi-resource.html#json_api-primary_key-delimiter)`String.t``"-"`The delimiter to concatenate the primary key values. Default to be '-'

[← Previous Page Authenticating with AshJsonApi](authenticate-with-json-api.html)

[Next Page → DSL: AshJsonApi.Domain](dsl-ashjsonapi-domain.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/dsls/DSL-AshJsonApi.Resource.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/tutorials/getting-started-with-ash-json-api.md#L1 "View Source") Getting started with AshJsonApi

## [](getting-started-with-ash-json-api.html#installing-ashjsonapi)Installing AshJsonApi

### [](getting-started-with-ash-json-api.html#using-igniter-recommended)Using Igniter (recommended)

```
mix igniter.install ash_json_api
```

### [](getting-started-with-ash-json-api.html#manually)Manually

This manual setup branches off from the [Getting Started with Ash](../ash/get-started.html) guide. If you aren't starting from there, replace the application name, `Helpdesk`, with your application name, and replace the [`Ash.Domain`](../ash/3.4.47/Ash.Domain.html) name, `Helpdesk.Support` with a domain or domains from your own application.

#### Add the ash\_json\_api dependency

In your mix.exs, add the Ash JSON API dependency:

```
  defp deps do
    [
      # .. other dependencies
      {:ash_json_api, "~> 1.0"},
    ]
  end
```

#### Accept json\_api content type

Add the following to your `config/config.exs`.

```
# config/config.exs
config :mime,
  extensions: %{"json" => "application/vnd.api+json"},
  types: %{"application/vnd.api+json" => ["json"]}
```

This configuration is required to support working with the JSON:API custom mime type.

After adding the configuration above, compiling the project might throw an error:

```
ERROR! the application :mime has a different value set for key :types during runtime compared to compile time.
```

This can happen if `:mime` was already compiled before the configuration was changed and can be fixed by running

```
mix deps.compile mime --force
```

#### Create a router

Create a separate Router Module to work with your Domains. It will generate the routes for your Resources and provide the functions you would usually have in a Controller.

We will later forward requests from your Applications primary (Phoenix) Router to you Ash JSON API Router.

```
defmodule HelpdeskWeb.JsonApiRouter do
  use AshJsonApi.Router,
    # The api modules you want to serve
    domains: [Module.concat(["Helpdesk.Support"])],
    # optionally an open_api route
    open_api: "/open_api"
end
```

> ### [](getting-started-with-ash-json-api.html#whats-up-with-module-concat-1)Whats up with [`Module.concat/1`](../elixir/Module.html#concat/1)?
> 
> This [`Module.concat/1`](../elixir/Module.html#concat/1) prevents a [compile-time dependency](https://dashbit.co/blog/speeding-up-re-compilation-of-elixir-projects) from this router module to the domain modules. It is an implementation detail of how `forward/2` works that you end up with a compile-time dependency on the schema, but there is no need for this dependency, and that dependency can have *drastic* impacts on your compile times in certain scenarios.

Additionally, your Resource requires a type, a base route and a set of allowed HTTP methods and what action they will trigger.

#### Add [`AshJsonApi.Plug.Parser`](AshJsonApi.Plug.Parser.html) to your endpoint

This handles any file uploads, if you have resource actions with the `:file` type.

```
plug Plug.Parsers,
  parsers: [:urlencoded, :multipart, :json, AshJsonApi.Plug.Parser], # <- add it to this list.
  pass: ["*/*"],
  json_decoder: Jason
```

You don't have to add this if you don't plan on doing any file uploads, but there is no cost to adding it, even if you don't use it.

#### Add the routes from your domain module(s)

To make your Resources accessible to the outside world, forward requests from your Phoenix router to the router you created for your domains.

For example:

```
scope "/api/json" do
  pipe_through(:api)

  forward "/helpdesk", HelpdeskWeb.JsonApiRouter
end
```

## [](getting-started-with-ash-json-api.html#configure-your-resources-and-domain-and-expose-actions)Configure your Resources and Domain and expose actions

These examples are based off of the [Getting Started with Ash](../ash/get-started.html) guide.

### [](getting-started-with-ash-json-api.html#add-the-ashjsonapi-extension-to-your-domain-and-resource)Add the AshJsonApi extension to your domain and resource

### [](getting-started-with-ash-json-api.html#using-igniter-recommended-1)Using Igniter (recommended)

To set up an existing resource of your own with [`AshJsonApi`](AshJsonApi.html), run:

```
mix ash.patch.extend Your.Resource.Name json_api
```

### [](getting-started-with-ash-json-api.html#manually-1)Manually

Add to your domain:

```
defmodule Helpdesk.Support do
  use Ash.Domain, extensions: [AshJsonApi.Domain]
  ...
```

And to your resource:

```
defmodule Helpdesk.Support.Ticket do
  use Ash.Resource, extensions: [AshJsonApi.Resource]
  # ...
  json_api do
    type "ticket"
  end
end
```

## [](getting-started-with-ash-json-api.html#define-routes)Define Routes

Routes can be defined on the resource or the domain. If you define them on the domain (which is our default recommendation), the resource in question must still use the [`AshJsonApi.Resource`](AshJsonApi.Resource.html) extension, and define its own type.

### [](getting-started-with-ash-json-api.html#defining-routes-on-the-domain)Defining routes on the domain

```
defmodule Helpdesk.Support do
  use Ash.Domain, extensions: [AshJsonApi.Domain]

  json_api do
    routes do
      # in the domain `base_route` acts like a scope
      base_route "/tickets", Helpdesk.Support.Ticket do
        get :read
        index :read
        post :open
      end
    end
  end
end
```

And then add the extension and type to the resource:

```
defmodule Helpdesk.Support.Ticket do
  use Ash.Resource, extensions: [AshJsonApi.Resource]
  # ...
  json_api do
    type "ticket"
  end
end
```

### [](getting-started-with-ash-json-api.html#defining-routes-on-the-resource)Defining routes on the resource

Here we show an example of defining routes on the resource.

```
defmodule Helpdesk.Support.Ticket do
  use Ash.Resource, extensions: [AshJsonApi.Resource]
  # ...
  json_api do
    type "ticket"

    routes do
      # on the resource, the `base` applies to all routes
      base "/tickets"

      get :read
      index :read
      post :open
      # ...
    end
  end
end
```

Check out the [AshJsonApi.Resource documentation on Hex](AshJsonApi.Resource.html) for more information.

## [](getting-started-with-ash-json-api.html#run-your-api)Run your API

From here on out its the standard Phoenix behavior. Start your application with `mix phx.server` and your API should be ready to try out. Should you be wondering what routes are available, you can print all available routes for each Resource:

```
Helpdesk.Support.Ticket
|> AshJsonApi.Resource.Info.routes(Helpdesk.Support)
```

Make sure that all requests you make to the API use the `application/vnd.api+json` type in both the `Accept` and `Content-Type` (where applicable) headers. The `Accept` header may be omitted.

Examples:

1. Create a ticket
   
   ```
   curl -X POST 'localhost:4000/api/json/helpdesk/tickets' \
--header 'Accept: application/vnd.api+json' \
--header 'Content-Type: application/vnd.api+json' \
--data-raw '{
  "data": {
    "type": "ticket",
    "attributes": {
      "subject": "This ticket was created through the JSON API"
    }
  }
}'
   ```
2. Get all tickets
   
   ```
   curl 'localhost:4000/api/json/helpdesk/tickets'
   ```
3. Get a specific ticket
   
   ```
   # Add the uuid of a Ticket you created earlier
curl 'localhost:4000/api/json/helpdesk/tickets/<uuid>'
   ```

## [](getting-started-with-ash-json-api.html#open-api)Open API

If you want to expose your API via Swagger UI or Redoc, see [the open api documentation](open-api.html).

[← Previous Page Home](readme.html)

[Next Page → What is AshJsonApi](what-is-ash-json-api.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/tutorials/getting-started-with-ash-json-api.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/topics/links.md#L1 "View Source") Links

In JSON:API, there are various pre-specified links.

## [](links.html#self-links-to-routes)Self links to routes

Whenever you hit a route, there will be a `self` link in the top-level `links` object that points to the current request url.

## [](links.html#pagination-links-on-index-routes)Pagination links on index routes

There will be `first`, `last`, `prev`, and `next` links on paginatable index routes, allowing clients to navigate through the pages of results.

## [](links.html#self-links-on-individual-entities)Self links on individual entities

In order to get a self link generated for an individual entity, you must designate one of your `get` routes as `primary? true`. For example:

```
get :read, primary?: true
```

Then, each entity will have a `self` link in its `links` key.

## [](links.html#related-links)Related links

### [](links.html#relationship-self-links)Relationship Self Links

Relationship self links are links to endpoints that return only the linkage, *not* the actual data of the related entities. To generate a relationship self link for a relationship, mark one of your `relationship` routes as `primary? true`. For example:

```
relationship :comments, :read, primary?: true
```

### [](links.html#relationship-related-links)Relationship Related Links

Relationship *related* links, on the other hand, are endpoints that return the related entities themselves, acting as modified index routes over the destination of the relationship. To generate one of these, mark one of your `related` routes as `primary? true`. For example:

```
related :comments, :read, primary?: true
```

[← Previous Page Relationships](relationships.html)

[Next Page → Upgrading to AshJsonApi to 1.0](upgrade.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/topics/links.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/mix/tasks/ash_json_api.install.ex#L2 "View Source") mix ash\_json\_api.install (ash\_json\_api v1.4.16)

Installs AshJsonApi. Should be run with `mix igniter.install ash_json_api`

# [](Mix.Tasks.AshJsonApi.Install.html#summary)Summary

## [Functions](Mix.Tasks.AshJsonApi.Install.html#functions)

[igniter(igniter, argv)](Mix.Tasks.AshJsonApi.Install.html#igniter/2)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.4.8/Igniter.Mix.Task.html#c:igniter/2).

# [](Mix.Tasks.AshJsonApi.Install.html#functions)Functions

[Link to this function](Mix.Tasks.AshJsonApi.Install.html#igniter/2 "Link to this function")

# igniter(igniter, argv)

[View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/lib/mix/tasks/ash_json_api.install.ex#L14 "View Source")

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.4.8/Igniter.Mix.Task.html#c:igniter/2).

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/topics/non-spec-query-parameters.md#L1 "View Source") Non-Spec query parameters

AshJsonApi supports a few non-spec query parameters that enhance the capabilities of your API.

These are currently not exposed in the generated OpenAPI spec. PRs welcome!

## [](non-spec-query-parameters.html#filter_included)`filter_included`

Includes can be filtered via the `filter_included` query parameter. To do this, you provide the path to the included resource and the filter to apply.

Example:

`posts?include=comments&filter_included[comments][author_id]=1`

## [](non-spec-query-parameters.html#sort_included)`sort_included`

Includes can be sorted via the `sort_included` query parameter. To do this, you provide the path to the included resource and the sort to apply.

Example:

`posts?include=comments&sort_included[comments]=author.username,-created_at`

> ### [](non-spec-query-parameters.html#included-is-unsorted)included is unsorted!
> 
> Keep in mind that the records in the top level `included` key will not be reliably sorted. This is because multiple relationships could include the same record. When sorting includes, look at the `data.relationships.name` key for the order instead.

[← Previous Page What is AshJsonApi](what-is-ash-json-api.html)

[Next Page → Open API](open-api.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/topics/non-spec-query-parameters.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/topics/open-api.md#L1 "View Source") Open API

## [](open-api.html#use-with-phoenix)Use with Phoenix

To set up the Open API endpoints for your application, first include the `:open_api_spex` dependency:

```
{:open_api_spex, "~> 3.16"},
```

Then in the module where you call `use AshJsonApi.Router` add the following option:

```
use AshJsonApi.Router, domains: [...], open_api: "/open_api"
```

Finally, you can use utilities provided by `open_api_spex` to show UIs for your API. Be sure to put your `forward` call last, if you are putting your API at a sub-path.

```
forward "/api/swaggerui",
  OpenApiSpex.Plug.SwaggerUI,
  path: "/api/open_api",
  default_model_expand_depth: 4

forward "/api/redoc",
  Redoc.Plug.RedocUI,
  spec_url: "/api/open_api"

forward "/api", YourApp.YourApiRouter
```

Now you can go to `/api/swaggerui` and `/api/redoc`!

## [](open-api.html#use-with-plug)Use with Plug

To set up the open API endpoints for your application, first include the `:open_api_spex` and `:redoc_ui_plug` dependency:

```
{:open_api_spex, "~> 3.16"},
{:redoc_ui_plug, "~> 0.2.1"},
```

Then in the module where you call `use AshJsonApi.Router` add the following option:

```
use AshJsonApi.Router, domains: [...], open_api: "/open_api"
```

Finally, you can use utilities provided by `open_api_spex` to show UIs for your API. Be sure to put your `forward` call last, if you are putting your API at a sub-path.

```
forward "/api/swaggerui",
  to: OpenApiSpex.Plug.SwaggerUI,
  init_opts: [
    path: "/api/open_api",
    default_model_expand_depth: 4
  ]

forward "/api/redoc",
  to: Redoc.Plug.RedocUI,
  init_opts: [
    spec_url: "/api/open_api"
  ]

forward "/api", YourApp.YourApiRouter
```

Now you can go to `/api/swaggerui` and `/api/redoc`!

## [](open-api.html#customize-values-in-the-openapi-documentation)Customize values in the OpenAPI documentation

To customize the main values of the OpenAPI spec, a few options are available:

```
  use AshJsonApi.Router,
    domains: [...],
    open_api: "/open_api",
    open_api_title: "Title",
    open_api_version: "1.0.0",
    open_api_servers: ["http://domain.com/api/v1"]
```

If `:open_api_servers` is not specified, a default server is automatically derived from your app's Phoenix endpoint, as retrieved from inbound connections on the `open_api` HTTP route.

In case an active connection is not available, for example when generating the OpenAPI spec via CLI, you can explicitely specify a reference to the Phoenix endpoint:

```
  use AshJsonApi.Router,
    domains: [...],
    open_api: "/open_api",
    phoenix_endpoint: MyAppWeb.Endpoint
```

To override any value in the OpenApi documentation you can use the `:modify_open_api` options key:

```
  use AshJsonApi.Router,
    domains: [...],
    open_api: "/open_api",
    modify_open_api: {__MODULE__, :modify_open_api, []}

  def modify_open_api(spec, _, _) do
    %{
      spec
      | info: %{spec.info | title: "MyApp Title JSON API", version: Application.spec(:my_app, :vsn) |> to_string()}
    }
  end
```

## [](open-api.html#generate-spec-files-via-cli)Generate spec files via CLI

You can write the OpenAPI spec file to disk using the Mix tasks provided by [OpenApiSpex](https://github.com/open-api-spex/open_api_spex).

Supposing you have setup AshJsonApi as:

```
defmodule MyAppWeb.AshJsonApi
  use AshJsonApi.Router, domains: [...], open_api: "/open_api"
end
```

you can generate the files with:

```
mix openapi.spec.json --spec MyAppWeb.AshJsonApi
mix openapi.spec.yaml --spec MyAppWeb.AshJsonApi
```

> ### [](open-api.html#setting-a-route-prefix-for-generated-files)Setting a route prefix for generated files
> 
> The route prefix in normal usage is automatically inferred, but when generating files we will use the `prefix` option set in the `json_api` section of the relevant [`Ash.Domain`](../ash/3.4.47/Ash.Domain.html) module.

To generate the YAML file you need to add the ymlr dependency.

```
def deps do
  [
    {:ymlr, "~> 2.0"}
  ]
end
```

You can also use the `--check` option to confirm that your checked in spec file(s) match.

```
mix openapi.spec.json --spec MyAppWeb.AshJsonApiRouter --check
mix openapi.spec.yaml --spec MyAppWeb.AshJsonApiRouter --check
```

## [](open-api.html#using-this-file-in-production)Using this file in production

To avoid generating the spec every time your open\_api endpoint is hit, you can use the `open_api_file` option. Ensure that it points to an existing `.json` file. You will almost certainly want to do this only for production so that the schema is generated dynamically in dev, but served statically in production.

```
open_api_file =
  if Mix.env() == :prod do
    "priv/static/open_api.json"
  else
    nil
  end

use AshJsonApi.Router,
  domains: [...],
  open_api: "/open_api",
  modify_open_api: {__MODULE__, :modify_open_api, []},
  open_api_file: open_api_file
```

## [](open-api.html#known-issues-limitations)Known issues/limitations

### [](open-api.html#swagger-ui)Swagger UI

SwaggerUI does not properly render recursive types. This affects the examples and type documentation for the `filter` parameter especially.

### [](open-api.html#redoc)Redoc

Redoc does not show all available schemas in the sidebar. This means that some schemas that are referenced only but have no endpoints that refer to them are effectively un-discoverable without downloading the spec and hunting them down yourself.

[← Previous Page Non-Spec query parameters](non-spec-query-parameters.html)

[Next Page → Relationships](relationships.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/topics/open-api.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_json_api/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_json_api.svg)](https://hex.pm/packages/ash_json_api) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_json_api.html)

# AshJsonApi

Welcome! This is the extension for building [JSON:API](https://jsonapi.org) spec compliant APIs with [Ash](../ash.html). Generate a powerful JSON API in minutes!

## [](readme.html#tutorials)Tutorials

- [Getting Started with AshJsonApi](getting-started-with-ash-json-api.html)

## [](readme.html#topics)Topics

- [What is AshJsonApi?](what-is-ash-json-api.html)
- [Non-Spec Query Parameters](non-spec-query-parameters.html)
- [OpenAPI](open-api.html)
- [Relationships](relationships.html)
- [Authorize With AshJsonApi](authorize-with-json-api.html)
- [Upgrading to 1.0](upgrade.html)

## [](readme.html#reference)Reference

- [AshJsonApi.Resource DSL](dsl-ashjsonapi-resource.html)
- [AshJsonApi.Domain DSL](dsl-ashjsonapi-domain.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Getting started with AshJsonApi](getting-started-with-ash-json-api.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/README.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/topics/relationships.md#L1 "View Source") Relationships

You can specify which arguments will modify relationships using `relationship_arguments`, but there are some things to keep in mind.

`relationship_arguments` is a list of arguments that can be edited in the `data.relationships` input.

This is primarily useful for those who want to keep their relationship changes in compliance with the `JSON:API` spec. If you are not focused on building a fully compliant JSON:API, it is likely far simpler to simply accept arguments in the `attributes` key and ignore the `data.relationships` input.

If the argument's type is `{:array, _}`, a list of data will be expected. Otherwise, it will expect a single item.

Everything in this guide applies to routs defined on the domain as well.

For example:

```
# On a tweets resource

# With a patch route that references the `authors` argument
json_api do
  routes do
    patch :update, relationship_arguments: [:authors]
  end
end

# And an argument by that name in the action
actions do
  update :update do
    argument :authors, {:array, :map}, allow_nil?: false

    change manage_relationship(:authors, type: :append_and_remove) # Use the authors argument to allow changing the related authors on update
  end
end
```

You can then send the value for `authors` in the relationships key, e.g

```
{
  data: {
    attributes: {
      ...
    },
    relationships: {
      authors: {
        data: [
          {type: "author", id: 1}, // the `type` key is removed when the value is placed into the action, so this input would be `%{"id" => 1}` (`type` is required by `JSON:API` specification)
          {type: "author", id: 2, meta: {arbitrary: 1, keys: 2}}, <- `meta` is JSON:API spec freeform data, so this input would be `%{"id" => 2, "arbitrary" => 1, "keys" => 2}`
        ]
      }
    }
  }
}
```

If you do not include `:authors` in the `relationship_arguments` key, you would supply its value in `attributes`, e.g:

```
{
  data: {
    attributes: {
      authors: {
        {id: 1},
        {id: 2, arbitrary: 1, keys: 2},
      }
    }
  }
}
```

Non-map argument types, e.g `argument :author, :integer` (expecting an author id) work with `manage_relationship`, but not with JSON:API, because it expects `{"type": _type, "id" => id}` for relationship values. To support non-map arguments in `relationship_arguments`, instead of `:author`, use `{:id, :author}`. This works for `{:array, _}` type arguments as well, so the value would be a list of ids.

## [](relationships.html#relationship-manipulation-routes)Relationship Manipulation Routes

You can also specify routes that are dedicated to manipulating relationships. We generally suggest the above approach, but JSON:API spec also allows for dedicated relationship routes. For example:

```
routes do
  ...
  # use `post_to_relationship` when the operation is additive
  post_to_relationship :add_author, action: :add_author
  # use `patch_relationship` when the operation is both additive and subtractive
  # use `delete_from_relationship` when the operation is subtractive
end
```

This will use an action on the source resource, (by default the primary update), and expects it to take an argument with the corresponding name. Additionally, it must have a `change manage_relationship` that uses that attribute. For example:

```
update :add_author do
  argument :author, :map

  change manage_relationship(:author, type: :append)
end
```

[← Previous Page Open API](open-api.html)

[Next Page → Links](links.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/topics/relationships.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_json_api](assets/logo.png)](https://github.com/ash-project/ash_json_api)

[ash\_json\_api](https://github.com/ash-project/ash_json_api)

v1.4.16

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_json\_api

Settings

# [View Source](https://github.com/ash-project/ash_json_api/blob/v1.4.16/documentation/topics/what-is-ash-json-api.md#L1 "View Source") What is AshJsonApi

AshJsonApi allows you to expose your resource actions over a (JSON:API)\[[https://jsonapi.org\]](https://jsonapi.org%5D). This API supports all of the features of JSON:API and Ash, like sorting, filtering, pagination, and side loading.

The kinds of thing this extension handles:

1. Route Creation: AshJsonApi defines routes and actions in your app based on resource configurations
2. Deserialization: When an incoming HTTP request hits a AshJsonApi defined route/action, AshJsonApi will parse it from `/api/users?filter[admin]=true` into a call to ash
3. Query Execution: AshJsonApi then executes the parsed Ash Action (this is the integration point between AshJsonApi and Ash Core, where Ash Actions are defined)
4. Serialization: AshJsonApi then serializes the result of the Ash Action into JSON API objects.
5. Response: AshJsonApi then sends this JSON back to the client
6. Schema Generation: AshJsonApi generates a machine-readable JSON Schema of your entire API and a route/action that can serve it
7. OpenAPI generation: AshJsonApi generates an OpenAPI spec for your API, which provides *human* readable documentation effortlessly.

> ### [](what-is-ash-json-api.html#ash-does-the-work)Ash does the work
> 
> Ash takes care of all of the data related work for a request (CRUD, Sorting, Filtering, Pagination, Side Loading, and Authorization) while AshJsonApi more or less replaces controllers and serializers.
> 
> The beauty of putting all of that data functionality into a non-web layer (Ash) is that it can be used in many contexts. A JSON:API is one context - but there are others such as GraphQL or just using an Ash Resource from other code within an Application.

[← Previous Page Getting started with AshJsonApi](getting-started-with-ash-json-api.html)

[Next Page → Non-Spec query parameters](non-spec-query-parameters.html)

[Hex Package](https://hex.pm/packages/ash_json_api/1.4.16) [Hex Preview](https://preview.hex.pm/preview/ash_json_api/1.4.16) ([current file](https://preview.hex.pm/preview/ash_json_api/1.4.16/show/documentation/topics/what-is-ash-json-api.md)) Search HexDocs [Download ePub version](ash_json_api.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
