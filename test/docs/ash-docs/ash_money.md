[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money "View Source") API Reference ash\_money v0.1.15

## [](api-reference.html#modules)Modules

[AshMoney](AshMoney.html)

[`AshMoney`](AshMoney.html#content) provides a type for working with money in your Ash resources.

[AshMoney.AshPostgresExtension](AshMoney.AshPostgresExtension.html)

Installs the `money_with_currency` type and operators/functions for Postgres.

[AshMoney.Types.Money](AshMoney.Types.Money.html)

A money type for Ash that uses the `ex_money` library.

[Comparable.Type.Decimal.To.Money](Comparable.Type.Decimal.To.Money.html)

[Comparable.Type.Float.To.Money](Comparable.Type.Float.To.Money.html)

[Comparable.Type.Integer.To.Money](Comparable.Type.Integer.To.Money.html)

[Comparable.Type.Money.To.Decimal](Comparable.Type.Money.To.Decimal.html)

[Comparable.Type.Money.To.Float](Comparable.Type.Money.To.Float.html)

[Comparable.Type.Money.To.Integer](Comparable.Type.Money.To.Integer.html)

[Comparable.Type.Money.To.Money](Comparable.Type.Money.To.Money.html)

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_money.add\_to\_ash\_postgres](Mix.Tasks.AshMoney.AddToAshPostgres.html)

Adds AshMoney.AshPostgresExtension to installed\_extensions and installs :ex\_money\_sql.

[mix ash\_money.install](Mix.Tasks.AshMoney.Install.html)

Installs AshMoney. Should be run with `mix igniter.install ash_money`

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/ash_postgres_extension.ex#L2 "View Source") AshMoney.AshPostgresExtension (ash\_money v0.1.15)

Installs the `money_with_currency` type and operators/functions for Postgres.

# [](AshMoney.AshPostgresExtension.html#summary)Summary

## [Functions](AshMoney.AshPostgresExtension.html#functions)

[extension()](AshMoney.AshPostgresExtension.html#extension/0)

[install(int)](AshMoney.AshPostgresExtension.html#install/1)

Callback implementation for [`AshPostgres.CustomExtension.install/1`](../ash_postgres/2.4.18/AshPostgres.CustomExtension.html#c:install/1).

[uninstall(v)](AshMoney.AshPostgresExtension.html#uninstall/1)

Callback implementation for [`AshPostgres.CustomExtension.uninstall/1`](../ash_postgres/2.4.18/AshPostgres.CustomExtension.html#c:uninstall/1).

# [](AshMoney.AshPostgresExtension.html#functions)Functions

[Link to this function](AshMoney.AshPostgresExtension.html#extension/0 "Link to this function")

# extension()

[View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/ash_postgres_extension.ex#L6 "View Source")

[Link to this function](AshMoney.AshPostgresExtension.html#install/1 "Link to this function")

# install(int)

[View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/ash_postgres_extension.ex#L8 "View Source")

Callback implementation for [`AshPostgres.CustomExtension.install/1`](../ash_postgres/2.4.18/AshPostgres.CustomExtension.html#c:install/1).

[Link to this function](AshMoney.AshPostgresExtension.html#uninstall/1 "Link to this function")

# uninstall(v)

[View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/ash_postgres_extension.ex#L56 "View Source")

Callback implementation for [`AshPostgres.CustomExtension.uninstall/1`](../ash_postgres/2.4.18/AshPostgres.CustomExtension.html#c:uninstall/1).

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money.ex#L1 "View Source") AshMoney (ash\_money v0.1.15)

[`AshMoney`](AshMoney.html#content) provides a type for working with money in your Ash resources.

It also provides an `AshPostgres.Extension` that can be used to add support for money types and operators to your Postgres database.

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/types/money.ex#L1 "View Source") AshMoney.Types.Money (ash\_money v0.1.15)

A money type for Ash that uses the `ex_money` library.

When constructing a composite type, use a tuple in the following structure:

`composite_type(%{currency: "USD", amount: Decimal.new("0")}}, AshMoney.Types.Money)`

If you've added a custom type, like `:money`:

```
composite_type(%{currency: "USD", amount: Decimal.new("0")}}, :money)
```

# [](AshMoney.Types.Money.html#summary)Summary

## [Functions](AshMoney.Types.Money.html#functions)

[handle\_change?()](AshMoney.Types.Money.html#handle_change?/0)

[prepare\_change?()](AshMoney.Types.Money.html#prepare_change?/0)

# [](AshMoney.Types.Money.html#functions)Functions

[Link to this function](AshMoney.Types.Money.html#handle_change?/0 "Link to this function")

# handle\_change?()

[View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/types/money.ex#L1 "View Source")

[Link to this function](AshMoney.Types.Money.html#prepare_change?/0 "Link to this function")

# prepare\_change?()

[View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/types/money.ex#L1 "View Source")

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/comp.ex#L11 "View Source") Comparable.Type.Decimal.To.Money (ash\_money v0.1.15)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/comp.ex#L15 "View Source") Comparable.Type.Float.To.Money (ash\_money v0.1.15)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/comp.ex#L3 "View Source") Comparable.Type.Integer.To.Money (ash\_money v0.1.15)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/comp.ex#L11 "View Source") Comparable.Type.Money.To.Decimal (ash\_money v0.1.15)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/comp.ex#L15 "View Source") Comparable.Type.Money.To.Float (ash\_money v0.1.15)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/comp.ex#L3 "View Source") Comparable.Type.Money.To.Integer (ash\_money v0.1.15)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/ash_money/comp.ex#L7 "View Source") Comparable.Type.Money.To.Money (ash\_money v0.1.15)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/documentation/tutorials/getting-started-with-ash-money.md#L1 "View Source") Getting Started With AshMoney

## [](getting-started-with-ash-money.html#bring-in-the-ash_money-dependency)Bring in the ash\_money dependency

```
def deps()
  [
    ...
    {:ash_money, "~> 0.1.15"}
  ]
end
```

## [](getting-started-with-ash-money.html#setup)Setup

### [](getting-started-with-ash-money.html#using-igniter-recommended)Using Igniter (recommended)

```
mix igniter.install ash_money
```

### [](getting-started-with-ash-money.html#manual)Manual

The primary thing that AshMoney provides is [`AshMoney.Types.Money`](AshMoney.Types.Money.html). This is backed by `ex_money`. You can use it out of the box like so:

```
attribute :balance, AshMoney.Types.Money
```

## [](getting-started-with-ash-money.html#add-to-known-types)Add to known types

To support money operations in runtime expressions, which use [`Ash`](../ash/3.4.48/Ash.html)'s operator overloading feature, we have to tell Ash about the `Ash.Type.Money` using the `known_type` configuration.

```
config :ash, :known_types, [AshMoney.Types.Money]
```

## [](getting-started-with-ash-money.html#referencing-with-money)Referencing with `:money`

You can add it to your compile time list of types for easier reference:

```
config :ash, :custom_types, money: AshMoney.Types.Money
```

Then compile ash again, `mix deps.compile ash --force`, and refer to it like so:

```
attribute :balance, :money
```

## [](getting-started-with-ash-money.html#adding-ashpostgres-support)Adding AshPostgres Support

First, add the `:ex_money_sql` dependency to your `mix.exs` file.

Then add [`AshMoney.AshPostgresExtension`](AshMoney.AshPostgresExtension.html) to your list of `installed_extensions` in your repo, and generate migrations.

```
defmodule YourRepo do
  def installed_extensions do
    [..., AshMoney.AshPostgresExtension]
  end
end
```

## [](getting-started-with-ash-money.html#ashpostgres-support)AshPostgres Support

Thanks to `ex_money_sql`, there are excellent tools for lowering support for money into your postgres database. This allows for things like aggregates that sum amounts, and referencing money in expressions:

```
sum :sum_of_usd_balances, :accounts, :balance do
  filter expr(balance[:currency_code] == "USD")
end
```

## [](getting-started-with-ash-money.html#ashgraphql-support)AshGraphql Support

Add the following to your schema file:

```
  object :money do
    field(:amount, non_null(:decimal))
    field(:currency, non_null(:string))
  end

  input_object :money_input do
    field(:amount, non_null(:decimal))
    field(:currency, non_null(:string))
  end
```

[← Previous Page Home](readme.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) ([current file](https://preview.hex.pm/preview/ash_money/0.1.15/show/documentation/tutorials/getting-started-with-ash-money.md)) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/mix/tasks/ash_money.add_to_ash_postgres.ex#L2 "View Source") mix ash\_money.add\_to\_ash\_postgres (ash\_money v0.1.15)

Adds AshMoney.AshPostgresExtension to installed\_extensions and installs :ex\_money\_sql.

This is called automatically by `mix igniter.install ash_money` if [`AshPostgres`](../ash_postgres/2.4.18/AshPostgres.html) is installed at the time. This task is useful if you install `ash_postgres` *after* installing `ash_money`.

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/mix/tasks/ash_money.install.ex#L2 "View Source") mix ash\_money.install (ash\_money v0.1.15)

Installs AshMoney. Should be run with `mix igniter.install ash_money`

# [](Mix.Tasks.AshMoney.Install.html#summary)Summary

## [Functions](Mix.Tasks.AshMoney.Install.html#functions)

[igniter(igniter, argv)](Mix.Tasks.AshMoney.Install.html#igniter/2)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.0/Igniter.Mix.Task.html#c:igniter/2).

# [](Mix.Tasks.AshMoney.Install.html#functions)Functions

[Link to this function](Mix.Tasks.AshMoney.Install.html#igniter/2 "Link to this function")

# igniter(igniter, argv)

[View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/lib/mix/tasks/ash_money.install.ex#L8 "View Source")

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.0/Igniter.Mix.Task.html#c:igniter/2).

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_money](assets/logo.png)](https://github.com/ash-project/ash_money)

[ash\_money](https://github.com/ash-project/ash_money)

v0.1.15

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_money

Settings

# [View Source](https://github.com/ash-project/ash_money/blob/v0.1.15/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_money/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_money.svg)](https://hex.pm/packages/ash_money) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_money.html)

# AshMoney

Welcome! This is the extension for working with money types in [Ash](../ash.html). This is a thin wrapper around the very excellent [ex\_money](../ex_money.html). It provides:

- An [`Ash.Type`](../ash/3.4.48/Ash.Type.html) for representing [`Money`](../ex_money/5.18.0/Money.html)
- An `AshPostgres.Extension` for supporting common money operations directly in the database
- An implementation of [`Comp`](../ash/3.4.48/Comp.html) for `%Money{}`, allowing Ash to compare them.

## [](readme.html#tutorials)Tutorials

- [Getting Started with AshMoney](getting-started-with-ash-money.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Getting Started With AshMoney](getting-started-with-ash-money.html)

[Hex Package](https://hex.pm/packages/ash_money/0.1.15) [Hex Preview](https://preview.hex.pm/preview/ash_money/0.1.15) ([current file](https://preview.hex.pm/preview/ash_money/0.1.15/show/README.md)) Search HexDocs [Download ePub version](ash_money.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.31.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
