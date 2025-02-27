[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival "View Source") API Reference ash\_archival v1.0.4

## [](api-reference.html#modules)Modules

[AshArchival](AshArchival.html)

An Archival extension for [`Ash.Resource`](../ash/3.4.23/Ash.Resource.html)

[AshArchival.Resource](AshArchival.Resource.html)

Configures a resource to be archived instead of destroyed for all destroy actions.

[AshArchival.Resource.Info](AshArchival.Resource.Info.html)

Introspection helpers for [`AshArchival.Resource`](AshArchival.Resource.html)

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival.ex#L1 "View Source") AshArchival (ash\_archival v1.0.4)

An Archival extension for [`Ash.Resource`](../ash/3.4.23/Ash.Resource.html)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/resource.ex#L1 "View Source") AshArchival.Resource (ash\_archival v1.0.4)

Configures a resource to be archived instead of destroyed for all destroy actions.

For more information, see [the getting started guide](get-started-with-ash-archival.html)

# [](AshArchival.Resource.html#summary)Summary

## [Functions](AshArchival.Resource.html#functions)

[archive(body)](AshArchival.Resource.html#archive/1)

# [](AshArchival.Resource.html#functions)Functions

[Link to this macro](AshArchival.Resource.html#archive/1 "Link to this macro")

# archive(body)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/resource.ex#L60 "View Source") (macro)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L1 "View Source") AshArchival.Resource.Info (ash\_archival v1.0.4)

Introspection helpers for [`AshArchival.Resource`](AshArchival.Resource.html)

# [](AshArchival.Resource.Info.html#summary)Summary

## [Functions](AshArchival.Resource.Info.html#functions)

[archive\_archive\_related(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_archive_related/1)

A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

[archive\_archive\_related!(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_archive_related!/1)

A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

[archive\_attribute(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_attribute/1)

The attribute in which to store the archival flag (the current datetime).

[archive\_attribute!(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_attribute!/1)

The attribute in which to store the archival flag (the current datetime).

[archive\_attribute\_type(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_attribute_type/1)

The attribute type.

[archive\_attribute\_type!(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_attribute_type!/1)

The attribute type.

[archive\_base\_filter?(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_base_filter?/1)

Whether or not a base filter exists that applies the `is_nil(archived_at)` rule.

[archive\_exclude\_destroy\_actions(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_exclude_destroy_actions/1)

A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern.

[archive\_exclude\_destroy\_actions!(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_exclude_destroy_actions!/1)

A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern.

[archive\_exclude\_read\_actions(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_exclude_read_actions/1)

A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.

[archive\_exclude\_read\_actions!(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_exclude_read_actions!/1)

A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.

[archive\_exclude\_upsert\_actions(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_exclude_upsert_actions/1)

This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.

[archive\_exclude\_upsert\_actions!(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_exclude_upsert_actions!/1)

This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.

[archive\_options(dsl\_or\_extended)](AshArchival.Resource.Info.html#archive_options/1)

archive DSL options

# [](AshArchival.Resource.Info.html#functions)Functions

[Link to this function](AshArchival.Resource.Info.html#archive_archive_related/1 "Link to this function")

# archive\_archive\_related(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_archive_related(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

[Link to this function](AshArchival.Resource.Info.html#archive_archive_related!/1 "Link to this function")

# archive\_archive\_related!(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_archive_related!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

[Link to this function](AshArchival.Resource.Info.html#archive_attribute/1 "Link to this function")

# archive\_attribute(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_attribute(dsl_or_extended :: module() | map()) :: {:ok, atom()} | :error
```

The attribute in which to store the archival flag (the current datetime).

[Link to this function](AshArchival.Resource.Info.html#archive_attribute!/1 "Link to this function")

# archive\_attribute!(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_attribute!(dsl_or_extended :: module() | map()) :: atom() | no_return()
```

The attribute in which to store the archival flag (the current datetime).

[Link to this function](AshArchival.Resource.Info.html#archive_attribute_type/1 "Link to this function")

# archive\_attribute\_type(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_attribute_type(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The attribute type.

[Link to this function](AshArchival.Resource.Info.html#archive_attribute_type!/1 "Link to this function")

# archive\_attribute\_type!(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_attribute_type!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The attribute type.

[Link to this function](AshArchival.Resource.Info.html#archive_base_filter?/1 "Link to this function")

# archive\_base\_filter?(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_base_filter?(dsl_or_extended :: module() | map()) :: atom()
```

Whether or not a base filter exists that applies the `is_nil(archived_at)` rule.

[Link to this function](AshArchival.Resource.Info.html#archive_exclude_destroy_actions/1 "Link to this function")

# archive\_exclude\_destroy\_actions(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_exclude_destroy_actions(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern.

[Link to this function](AshArchival.Resource.Info.html#archive_exclude_destroy_actions!/1 "Link to this function")

# archive\_exclude\_destroy\_actions!(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_exclude_destroy_actions!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern.

[Link to this function](AshArchival.Resource.Info.html#archive_exclude_read_actions/1 "Link to this function")

# archive\_exclude\_read\_actions(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_exclude_read_actions(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.

[Link to this function](AshArchival.Resource.Info.html#archive_exclude_read_actions!/1 "Link to this function")

# archive\_exclude\_read\_actions!(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_exclude_read_actions!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.

[Link to this function](AshArchival.Resource.Info.html#archive_exclude_upsert_actions/1 "Link to this function")

# archive\_exclude\_upsert\_actions(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_exclude_upsert_actions(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.

[Link to this function](AshArchival.Resource.Info.html#archive_exclude_upsert_actions!/1 "Link to this function")

# archive\_exclude\_upsert\_actions!(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_exclude_upsert_actions!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.

[Link to this function](AshArchival.Resource.Info.html#archive_options/1 "Link to this function")

# archive\_options(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/lib/ash_archival/resource/info.ex#L3 "View Source")

```
@spec archive_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

archive DSL options

Returns a map containing the and any configured or default values.

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/documentation/dsls/DSL:-AshArchival.Resource.md#L1 "View Source") DSL: AshArchival.Resource

Configures a resource to be archived instead of destroyed for all destroy actions.

For more information, see [the getting started guide](get-started-with-ash-archival.html)

## [](dsl-asharchival-resource.html#archive)archive

A section for configuring how archival is configured for a resource.

### [](dsl-asharchival-resource.html#options)Options

NameTypeDefaultDocs[`attribute`](dsl-asharchival-resource.html#archive-attribute)`atom``:archived_at`The attribute in which to store the archival flag (the current datetime).[`attribute_type`](dsl-asharchival-resource.html#archive-attribute_type)`atom``:utc_datetime_usec`The attribute type.[`base_filter?`](dsl-asharchival-resource.html#archive-base_filter?)`atom``false`Whether or not a base filter exists that applies the `is_nil(archived_at)` rule.[`exclude_read_actions`](dsl-asharchival-resource.html#archive-exclude_read_actions)`atom | list(atom)``[]`A read action or actions that should show archived items. They will not get the automatic `is_nil(archived_at)` filter.[`exclude_upsert_actions`](dsl-asharchival-resource.html#archive-exclude_upsert_actions)`atom | list(atom)``[]`This option is deprecated as it no longer has any effect. Upserts are handled according to the upsert identity. See the upserts guide for more.[`exclude_destroy_actions`](dsl-asharchival-resource.html#archive-exclude_destroy_actions)`atom | list(atom)``[]`A destroy action or actions that should *not* archive, but instead be left alone. This allows for having a destroy *or* archive pattern.[`archive_related`](dsl-asharchival-resource.html#archive-archive_related)`list(atom)``[]`A list of relationships that should have all related items archived when this is archived. Notifications are not sent for this operation.

[← Previous Page Upserts &amp; Identities](upserts-and-identities.html)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) ([current file](https://preview.hex.pm/preview/ash_archival/1.0.4/show/documentation/dsls/DSL:-AshArchival.Resource.md)) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/documentation/tutorials/get-started-with-ash-archival.md#L1 "View Source") Get Started with AshArchival

## [](get-started-with-ash-archival.html#installation)Installation

First, add the dependency to your `mix.exs` file

```
{:ash_archival, "~> 1.0.4"}
```

and add `:ash_archival` to your `.formatter.exs`

```
import_deps: [..., :ash_archival]
```

## [](get-started-with-ash-archival.html#adding-to-a-resource)Adding to a resource

To add archival to a resource, add the extension to the resource:

```
use Ash.Resource,
  extensions: [..., AshArchival.Resource]
```

And thats it! Now, when you destroy a record, it will be archived instead, using an `archived_at` attribute.

See [How Does Ash Archival Work?](get-started-with-ash-archival.html) for what modifications are made to a resource, and read on for info on the tradeoffs of leveraging `Ash.Resource.Dsl.resource.base_filter`.

## [](get-started-with-ash-archival.html#base-filter)Base Filter

Using a `Ash.Resource.Dsl.resource.base_filter` for your `archived_at` field has a lot of benefits if you are using `ash_postgres`, but comes with one major drawback, which is that it is not possible to exclude certain read actions from archival. If you wish to use a base filter, you will need to create a separate resource to read from the archived items. We may introduce a way to bypass the base filter at some point in the future.

To add a `base_filter` and `base_filter_sql` to your resource:

```
resource do
  base_filter expr(is_nil(archived_at))
end

postgres do
  ...
  base_filter_sql "(archived_at IS NULL)"
end
```

Add `base_filter? true` to the `archive` configuration of your resource to tell it that it doesn't need to add the filter itself.

### [](get-started-with-ash-archival.html#benefits-of-base_filter)Benefits of base\_filter

1. unique indexes will exclude archived items
2. custom indexes will exclude archived items
3. check constraints will not be applied to archived items

If you want these benefits, add the appropriate `base_filter`.

## [](get-started-with-ash-archival.html#more)More

See the [Unarchiving guide](unarchiving.html) For more.

[← Previous Page Change Log](changelog.html)

[Next Page → Un-archiving](unarchiving.html)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) ([current file](https://preview.hex.pm/preview/ash_archival/1.0.4/show/documentation/tutorials/get-started-with-ash-archival.md)) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/documentation/topics/how-does-ash-archival-work.md#L1 "View Source") How does Archival Work?

We make modifications to the resource to enable soft deletes. Here's a breakdown of what the extension does:

## [](how-does-ash-archival-work.html#resource-modifications)Resource Modifications

1. Adds a private `archived_at` `utc_datetime_usec` attribute.
2. Adds a preparation that filters each action for `is_nil(archived_at)` (except for excluded actions, or if you have `base_filter?` set to `true`).
3. Marks all destroy actions as `soft?`, turning them into updates (except for excluded actions)
4. Adds a change to all destroy actions that sets `archived_at` to the current timestamp
5. Adds a change that will iteratively load and destroy anything configured in `AshArchival.Resource.archive.archive_related`

[← Previous Page Un-archiving](unarchiving.html)

[Next Page → Upserts &amp; Identities](upserts-and-identities.html)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) ([current file](https://preview.hex.pm/preview/ash_archival/1.0.4/show/documentation/topics/how-does-ash-archival-work.md)) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_archival/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_archival.svg)](https://hex.pm/packages/ash_archival) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_archival.html)

# AshArchival

AshArchival is an [Ash](../ash.html) extension that provides a push-button solution for soft deleting records, instead of destroying them.

## [](readme.html#tutorials)Tutorials

- [Get Started with AshArchival](get-started-with-ash-archival.html)

## [](readme.html#topics)Topics

- [How does AshArchival work?](how-does-ash-archival-work.html)
- [Unarchiving](unarchiving.html)

## [](readme.html#reference)Reference

- [AshArchival DSL](dsl-asharchival-resource.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) ([current file](https://preview.hex.pm/preview/ash_archival/1.0.4/show/README.md)) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/documentation/topics/unarchiving.md#L1 "View Source") Un-archiving

If you want to unarchive a resource that uses a base filter, you will need to define a separate resource that uses the same storage and has no base filter. The rest of this guide applies for folks who *aren't* using a `base_filter`.

Un-archiving can be accomplished by creating a read action that is skipped, using `exclude_read_actions`. Then, you can create an update action that sets that attribute to `nil`. For example:

```
archive do
  ...
  exclude_read_actions :archived
end

actions do
  read :archived do
    filter expr(not is_nil(archived_at))
  end

  update :unarchive do
    change set_attribute(:archived_at, nil)
    # if an individual record is used to unarchive
    # it must use the `archived` read action for its atomic upgrade
    atomic_upgrade_with :archived
  end
end
```

You could then do something like this:

```
Resource
|> Ash.get!(id, action: :archived)
|> Ash.Changeset.for_update(:unarchive, %{})
|> Ash.update!()
```

More idiomatically, you would define a code interfaceon the domain, and call that:

```
# to unarchive by `id`
Resource
|> Ash.Query.for_read(:archived, %{})
|> Ash.Query.filter(id == ^id)
|> Domain.unarchive!()
```

[← Previous Page Get Started with AshArchival](get-started-with-ash-archival.html)

[Next Page → How does Archival Work?](how-does-ash-archival-work.html)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) ([current file](https://preview.hex.pm/preview/ash_archival/1.0.4/show/documentation/topics/unarchiving.md)) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_archival](https://github.com/ash-project/ash_archival)

v1.0.4

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_archival

Settings

# [View Source](https://github.com/ash-project/ash_archival/blob/v1.0.4/documentation/topics/upserts-and-identities.md#L1 "View Source") Upserts &amp; Identities

Its important to consider identities when using AshArchival *without* a `base_filter` set up.

If you are using a `base_filter`, then all identities implicitly include that `base_filter` in their `where` (handled by the data layer).

Take the following identities, for example:

```
identities do
  identity :unique_email, [:email], where: expr(is_nil(archived_at))
  # and
  identity :unique_email, [:email]
end
```

## [](upserts-and-identities.html#with-is_nil-archived_at)With `is_nil(archived_at)`

Using this identity allows multiple archived records with the same email, but only one *non-archived* record per email. It enables reuse of archived email addresses for new active records, maintaining data integrity by preventing duplicate active records while preserving archived data.

When you upsert a record using this identity, it will only consider active records.

## [](upserts-and-identities.html#without-is_nil-archived_at)Without `is_nil(archived_at)`

This identity configuration enforces strict email uniqueness across all records. Once an email is used, it can't be used again, even after that record is archived.

When you upsert a record using this identity, it will consider all records.

[← Previous Page How does Archival Work?](how-does-ash-archival-work.html)

[Next Page → DSL: AshArchival.Resource](dsl-asharchival-resource.html)

[Hex Package](https://hex.pm/packages/ash_archival/1.0.4) [Hex Preview](https://preview.hex.pm/preview/ash_archival/1.0.4) ([current file](https://preview.hex.pm/preview/ash_archival/1.0.4/show/documentation/topics/upserts-and-identities.md)) Search HexDocs [Download ePub version](ash_archival.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
