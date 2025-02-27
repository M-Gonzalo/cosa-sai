[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry "View Source") API Reference ash\_double\_entry v1.0.10

## [](api-reference.html#modules)Modules

[AshDoubleEntry.Account](AshDoubleEntry.Account.html)

An extension for creating a double entry ledger account. See the getting started guide for more.

[AshDoubleEntry.Account.Info](AshDoubleEntry.Account.Info.html)

Introspection helpers for [`AshDoubleEntry.Account`](AshDoubleEntry.Account.html)

[AshDoubleEntry.Balance](AshDoubleEntry.Balance.html)

An extension for creating a double entry ledger balance. See the getting started guide for more.

[AshDoubleEntry.Balance.Info](AshDoubleEntry.Balance.Info.html)

Introspection helpers for [`AshDoubleEntry.Balance`](AshDoubleEntry.Balance.html)

[AshDoubleEntry.Transfer](AshDoubleEntry.Transfer.html)

An extension for creating a double entry ledger transfer. See the getting started guide for more.

[AshDoubleEntry.Transfer.Info](AshDoubleEntry.Transfer.Info.html)

Introspection helpers for [`AshDoubleEntry.Transfer`](AshDoubleEntry.Transfer.html)

[AshDoubleEntry.ULID](AshDoubleEntry.ULID.html)

An Ash type for ULID strings.

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_double\_entry.install](Mix.Tasks.AshDoubleEntry.Install.html)

Installs AshDoubleEntry

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/account.ex#L1 "View Source") AshDoubleEntry.Account (ash\_double\_entry v1.0.10)

An extension for creating a double entry ledger account. See the getting started guide for more.

# [](AshDoubleEntry.Account.html#summary)Summary

## [Functions](AshDoubleEntry.Account.html#functions)

[account(body)](AshDoubleEntry.Account.html#account/1)

# [](AshDoubleEntry.Account.html#functions)Functions

[](AshDoubleEntry.Account.html#account/1)

# account(body)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/account.ex#L39)(macro)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L1 "View Source") AshDoubleEntry.Account.Info (ash\_double\_entry v1.0.10)

Introspection helpers for [`AshDoubleEntry.Account`](AshDoubleEntry.Account.html)

# [](AshDoubleEntry.Account.Info.html#summary)Summary

## [Functions](AshDoubleEntry.Account.Info.html#functions)

[account\_balance\_resource(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_balance_resource/1)

The resource used for balances

[account\_balance\_resource!(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_balance_resource!/1)

The resource used for balances

[account\_open\_action\_accept(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_open_action_accept/1)

A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.

[account\_open\_action\_accept!(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_open_action_accept!/1)

A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.

[account\_options(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_options/1)

account DSL options

[account\_pre\_check\_identities\_with(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_pre_check_identities_with/1)

A domain to use to precheck generated identities. Required by certain data layers.

[account\_pre\_check\_identities\_with!(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_pre_check_identities_with!/1)

A domain to use to precheck generated identities. Required by certain data layers.

[account\_transfer\_resource(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_transfer_resource/1)

The resource used for transfers

[account\_transfer\_resource!(dsl\_or\_extended)](AshDoubleEntry.Account.Info.html#account_transfer_resource!/1)

The resource used for transfers

# [](AshDoubleEntry.Account.Info.html#functions)Functions

[](AshDoubleEntry.Account.Info.html#account_balance_resource/1)

# account\_balance\_resource(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_balance_resource(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The resource used for balances

[](AshDoubleEntry.Account.Info.html#account_balance_resource!/1)

# account\_balance\_resource!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_balance_resource!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The resource used for balances

[](AshDoubleEntry.Account.Info.html#account_open_action_accept/1)

# account\_open\_action\_accept(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_open_action_accept(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.

[](AshDoubleEntry.Account.Info.html#account_open_action_accept!/1)

# account\_open\_action\_accept!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_open_action_accept!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.

[](AshDoubleEntry.Account.Info.html#account_options/1)

# account\_options(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

account DSL options

Returns a map containing the and any configured or default values.

[](AshDoubleEntry.Account.Info.html#account_pre_check_identities_with/1)

# account\_pre\_check\_identities\_with(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_pre_check_identities_with(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

A domain to use to precheck generated identities. Required by certain data layers.

[](AshDoubleEntry.Account.Info.html#account_pre_check_identities_with!/1)

# account\_pre\_check\_identities\_with!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_pre_check_identities_with!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

A domain to use to precheck generated identities. Required by certain data layers.

[](AshDoubleEntry.Account.Info.html#account_transfer_resource/1)

# account\_transfer\_resource(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_transfer_resource(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The resource used for transfers

[](AshDoubleEntry.Account.Info.html#account_transfer_resource!/1)

# account\_transfer\_resource!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/account/info.ex#L3)

```
@spec account_transfer_resource!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The resource used for transfers

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/balance.ex#L1 "View Source") AshDoubleEntry.Balance (ash\_double\_entry v1.0.10)

An extension for creating a double entry ledger balance. See the getting started guide for more.

# [](AshDoubleEntry.Balance.html#summary)Summary

## [Functions](AshDoubleEntry.Balance.html#functions)

[balance(body)](AshDoubleEntry.Balance.html#balance/1)

# [](AshDoubleEntry.Balance.html#functions)Functions

[](AshDoubleEntry.Balance.html#balance/1)

# balance(body)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/balance.ex#L42)(macro)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L1 "View Source") AshDoubleEntry.Balance.Info (ash\_double\_entry v1.0.10)

Introspection helpers for [`AshDoubleEntry.Balance`](AshDoubleEntry.Balance.html)

# [](AshDoubleEntry.Balance.Info.html#summary)Summary

## [Functions](AshDoubleEntry.Balance.Info.html#functions)

[balance\_account\_resource(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_account_resource/1)

The resource used for accounts

[balance\_account\_resource!(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_account_resource!/1)

The resource used for accounts

[balance\_data\_layer\_can\_add\_money?(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_data_layer_can_add_money?/1)

Whether or not the data layer supports adding money.

[balance\_money\_composite\_type?(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_money_composite_type?/1)

Whether the balance is stored as a composite type.

[balance\_options(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_options/1)

balance DSL options

[balance\_pre\_check\_identities\_with(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_pre_check_identities_with/1)

A domain to use to precheck generated identities. Required by certain data layers.

[balance\_pre\_check\_identities\_with!(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_pre_check_identities_with!/1)

A domain to use to precheck generated identities. Required by certain data layers.

[balance\_transfer\_resource(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_transfer_resource/1)

The resource used for transfers

[balance\_transfer\_resource!(dsl\_or\_extended)](AshDoubleEntry.Balance.Info.html#balance_transfer_resource!/1)

The resource used for transfers

# [](AshDoubleEntry.Balance.Info.html#functions)Functions

[](AshDoubleEntry.Balance.Info.html#balance_account_resource/1)

# balance\_account\_resource(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_account_resource(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The resource used for accounts

[](AshDoubleEntry.Balance.Info.html#balance_account_resource!/1)

# balance\_account\_resource!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_account_resource!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The resource used for accounts

[](AshDoubleEntry.Balance.Info.html#balance_data_layer_can_add_money?/1)

# balance\_data\_layer\_can\_add\_money?(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_data_layer_can_add_money?(dsl_or_extended :: module() | map()) ::
  boolean()
```

Whether or not the data layer supports adding money.

[](AshDoubleEntry.Balance.Info.html#balance_money_composite_type?/1)

# balance\_money\_composite\_type?(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_money_composite_type?(dsl_or_extended :: module() | map()) :: boolean()
```

Whether the balance is stored as a composite type.

[](AshDoubleEntry.Balance.Info.html#balance_options/1)

# balance\_options(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

balance DSL options

Returns a map containing the and any configured or default values.

[](AshDoubleEntry.Balance.Info.html#balance_pre_check_identities_with/1)

# balance\_pre\_check\_identities\_with(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_pre_check_identities_with(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

A domain to use to precheck generated identities. Required by certain data layers.

[](AshDoubleEntry.Balance.Info.html#balance_pre_check_identities_with!/1)

# balance\_pre\_check\_identities\_with!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_pre_check_identities_with!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

A domain to use to precheck generated identities. Required by certain data layers.

[](AshDoubleEntry.Balance.Info.html#balance_transfer_resource/1)

# balance\_transfer\_resource(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_transfer_resource(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The resource used for transfers

[](AshDoubleEntry.Balance.Info.html#balance_transfer_resource!/1)

# balance\_transfer\_resource!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/balance/info.ex#L3)

```
@spec balance_transfer_resource!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The resource used for transfers

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/transfer.ex#L1 "View Source") AshDoubleEntry.Transfer (ash\_double\_entry v1.0.10)

An extension for creating a double entry ledger transfer. See the getting started guide for more.

# [](AshDoubleEntry.Transfer.html#summary)Summary

## [Functions](AshDoubleEntry.Transfer.html#functions)

[transfer(body)](AshDoubleEntry.Transfer.html#transfer/1)

# [](AshDoubleEntry.Transfer.html#functions)Functions

[](AshDoubleEntry.Transfer.html#transfer/1)

# transfer(body)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/transfer.ex#L42)(macro)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L1 "View Source") AshDoubleEntry.Transfer.Info (ash\_double\_entry v1.0.10)

Introspection helpers for [`AshDoubleEntry.Transfer`](AshDoubleEntry.Transfer.html)

# [](AshDoubleEntry.Transfer.Info.html#summary)Summary

## [Functions](AshDoubleEntry.Transfer.Info.html#functions)

[transfer\_account\_resource(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_account_resource/1)

The resource to use for account balances

[transfer\_account\_resource!(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_account_resource!/1)

The resource to use for account balances

[transfer\_balance\_resource(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_balance_resource/1)

The resource being used for balances

[transfer\_balance\_resource!(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_balance_resource!/1)

The resource being used for balances

[transfer\_create\_accept(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_create_accept/1)

Additional attributes to accept when creating a transfer

[transfer\_create\_accept!(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_create_accept!/1)

Additional attributes to accept when creating a transfer

[transfer\_destroy\_balances?(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_destroy_balances?/1)

Whether or not balances must be manually destroyed. See the getting started guide for more.

[transfer\_options(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_options/1)

transfer DSL options

[transfer\_pre\_check\_identities\_with(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_pre_check_identities_with/1)

A domain to use to precheck generated identities. Required by certain data layers.

[transfer\_pre\_check\_identities\_with!(dsl\_or\_extended)](AshDoubleEntry.Transfer.Info.html#transfer_pre_check_identities_with!/1)

A domain to use to precheck generated identities. Required by certain data layers.

# [](AshDoubleEntry.Transfer.Info.html#functions)Functions

[](AshDoubleEntry.Transfer.Info.html#transfer_account_resource/1)

# transfer\_account\_resource(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_account_resource(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The resource to use for account balances

[](AshDoubleEntry.Transfer.Info.html#transfer_account_resource!/1)

# transfer\_account\_resource!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_account_resource!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The resource to use for account balances

[](AshDoubleEntry.Transfer.Info.html#transfer_balance_resource/1)

# transfer\_balance\_resource(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_balance_resource(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The resource being used for balances

[](AshDoubleEntry.Transfer.Info.html#transfer_balance_resource!/1)

# transfer\_balance\_resource!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_balance_resource!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The resource being used for balances

[](AshDoubleEntry.Transfer.Info.html#transfer_create_accept/1)

# transfer\_create\_accept(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_create_accept(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

Additional attributes to accept when creating a transfer

[](AshDoubleEntry.Transfer.Info.html#transfer_create_accept!/1)

# transfer\_create\_accept!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_create_accept!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

Additional attributes to accept when creating a transfer

[](AshDoubleEntry.Transfer.Info.html#transfer_destroy_balances?/1)

# transfer\_destroy\_balances?(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_destroy_balances?(dsl_or_extended :: module() | map()) :: boolean()
```

Whether or not balances must be manually destroyed. See the getting started guide for more.

[](AshDoubleEntry.Transfer.Info.html#transfer_options/1)

# transfer\_options(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

transfer DSL options

Returns a map containing the and any configured or default values.

[](AshDoubleEntry.Transfer.Info.html#transfer_pre_check_identities_with/1)

# transfer\_pre\_check\_identities\_with(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_pre_check_identities_with(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

A domain to use to precheck generated identities. Required by certain data layers.

[](AshDoubleEntry.Transfer.Info.html#transfer_pre_check_identities_with!/1)

# transfer\_pre\_check\_identities\_with!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/transfer/info.ex#L3)

```
@spec transfer_pre_check_identities_with!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

A domain to use to precheck generated identities. Required by certain data layers.

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L1 "View Source") AshDoubleEntry.ULID (ash\_double\_entry v1.0.10)

An Ash type for ULID strings.

# [](AshDoubleEntry.ULID.html#summary)Summary

## [Types](AshDoubleEntry.ULID.html#types)

[t()](AshDoubleEntry.ULID.html#t:t/0)

A hex-encoded ULID string.

## [Functions](AshDoubleEntry.ULID.html#functions)

[bingenerate(timestamp \\\\ System.system\_time(:millisecond))](AshDoubleEntry.ULID.html#bingenerate/1)

Generates a binary ULID.

[bingenerate\_last(timestamp \\\\ System.system\_time(:millisecond))](AshDoubleEntry.ULID.html#bingenerate_last/1)

Generates a binary ULID.

[cast\_input(value, constraints)](AshDoubleEntry.ULID.html#cast_input/2)

Casts a string to ULID.

[cast\_stored(bytes, constraints)](AshDoubleEntry.ULID.html#cast_stored/2)

Converts a binary ULID into a Crockford Base32 encoded string.

[dump\_to\_native(encoded, \_)](AshDoubleEntry.ULID.html#dump_to_native/2)

Converts a Crockford Base32 encoded ULID into a binary.

[generate(timestamp \\\\ System.system\_time(:millisecond))](AshDoubleEntry.ULID.html#generate/1)

Generates a Crockford Base32 encoded ULID.

[generate\_last(timestamp \\\\ System.system\_time(:millisecond))](AshDoubleEntry.ULID.html#generate_last/1)

Generates a Crockford Base32 encoded ULID, guaranteed to sort equal to or after any other ULID generated for the same timestamp.

[handle\_change?()](AshDoubleEntry.ULID.html#handle_change?/0)

[prepare\_change?()](AshDoubleEntry.ULID.html#prepare_change?/0)

[storage\_type()](AshDoubleEntry.ULID.html#storage_type/0)

The underlying schema type.

# [](AshDoubleEntry.ULID.html#types)Types

[](AshDoubleEntry.ULID.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L11)

```
@type t() :: <<_::208>>
```

A hex-encoded ULID string.

# [](AshDoubleEntry.ULID.html#functions)Functions

[](AshDoubleEntry.ULID.html#bingenerate/1)

# bingenerate(timestamp \\\\ System.system\_time(:millisecond))

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L118)

Generates a binary ULID.

If a value is provided for `timestamp`, the generated ULID will be for the provided timestamp. Otherwise, a ULID will be generated for the current time.

Arguments:

- `timestamp`: A Unix timestamp with millisecond precision.

[](AshDoubleEntry.ULID.html#bingenerate_last/1)

# bingenerate\_last(timestamp \\\\ System.system\_time(:millisecond))

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L134)

Generates a binary ULID.

Do not use this for storage, only for generating comparators, i.e "balance as of a given ulid".

If a value is provided for `timestamp`, the generated ULID will be for the provided timestamp. Otherwise, a ULID will be generated for the current time.

Arguments:

- `timestamp`: A Unix timestamp with millisecond precision.

[](AshDoubleEntry.ULID.html#cast_input/2)

# cast\_input(value, constraints)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L21)

Casts a string to ULID.

[](AshDoubleEntry.ULID.html#cast_stored/2)

# cast\_stored(bytes, constraints)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L50)

Converts a binary ULID into a Crockford Base32 encoded string.

[](AshDoubleEntry.ULID.html#dump_to_native/2)

# dump\_to\_native(encoded, \_)

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L43)

Converts a Crockford Base32 encoded ULID into a binary.

[](AshDoubleEntry.ULID.html#generate/1)

# generate(timestamp \\\\ System.system\_time(:millisecond))

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L70)

Generates a Crockford Base32 encoded ULID.

If a value is provided for `timestamp`, the generated ULID will be for the provided timestamp. Otherwise, a ULID will be generated for the current time.

Arguments:

- `timestamp`: A Unix timestamp with millisecond precision.

[](AshDoubleEntry.ULID.html#generate_last/1)

# generate\_last(timestamp \\\\ System.system\_time(:millisecond))

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L95)

Generates a Crockford Base32 encoded ULID, guaranteed to sort equal to or after any other ULID generated for the same timestamp.

Do not use this for storage, only for generating comparators, i.e "balance as of a given ulid".

If a value is provided for `timestamp`, the generated ULID will be for the provided timestamp. Otherwise, a ULID will be generated for the current time.

Arguments:

- `timestamp`: A Unix timestamp with millisecond precision.

[](AshDoubleEntry.ULID.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L1)

[](AshDoubleEntry.ULID.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L1)

[](AshDoubleEntry.ULID.html#storage_type/0)

# storage\_type()

[](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/ulid.ex#L16)

The underlying schema type.

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/documentation/dsls/DSL-AshDoubleEntry.Account.md#L1 "View Source") AshDoubleEntry.Account

An extension for creating a double entry ledger account. See the getting started guide for more.

## [](dsl-ashdoubleentry-account.html#account)account

### [](dsl-ashdoubleentry-account.html#options)Options

NameTypeDefaultDocs[`transfer_resource`](dsl-ashdoubleentry-account.html#account-transfer_resource)`module`The resource used for transfers[`balance_resource`](dsl-ashdoubleentry-account.html#account-balance_resource)`module`The resource used for balances[`open_action_accept`](dsl-ashdoubleentry-account.html#account-open_action_accept)`list(atom)``[]`A list of extra attributes to be accepted by the open action. The `identifier` and `currency` attributes are always accepted.[`pre_check_identities_with`](dsl-ashdoubleentry-account.html#account-pre_check_identities_with)`module`A domain to use to precheck generated identities. Required by certain data layers.

[← Previous Page Get Started](getting-started-with-ash-double-entry.html)

[Next Page → AshDoubleEntry.Balance](dsl-ashdoubleentry-balance.html)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) ([current file](https://preview.hex.pm/preview/ash_double_entry/1.0.10/show/documentation/dsls/DSL-AshDoubleEntry.Account.md)) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/documentation/dsls/DSL-AshDoubleEntry.Balance.md#L1 "View Source") AshDoubleEntry.Balance

An extension for creating a double entry ledger balance. See the getting started guide for more.

## [](dsl-ashdoubleentry-balance.html#balance)balance

### [](dsl-ashdoubleentry-balance.html#options)Options

NameTypeDefaultDocs[`transfer_resource`](dsl-ashdoubleentry-balance.html#balance-transfer_resource)`module`The resource used for transfers[`account_resource`](dsl-ashdoubleentry-balance.html#balance-account_resource)`module`The resource used for accounts[`pre_check_identities_with`](dsl-ashdoubleentry-balance.html#balance-pre_check_identities_with)`module`A domain to use to precheck generated identities. Required by certain data layers.[`money_composite_type?`](dsl-ashdoubleentry-balance.html#balance-money_composite_type?)`boolean``true`Whether the balance is stored as a composite type.[`data_layer_can_add_money?`](dsl-ashdoubleentry-balance.html#balance-data_layer_can_add_money?)`boolean``true`Whether or not the data layer supports adding money.

[← Previous Page AshDoubleEntry.Account](dsl-ashdoubleentry-account.html)

[Next Page → AshDoubleEntry.Transfer](dsl-ashdoubleentry-transfer.html)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) ([current file](https://preview.hex.pm/preview/ash_double_entry/1.0.10/show/documentation/dsls/DSL-AshDoubleEntry.Balance.md)) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/documentation/dsls/DSL-AshDoubleEntry.Transfer.md#L1 "View Source") AshDoubleEntry.Transfer

An extension for creating a double entry ledger transfer. See the getting started guide for more.

## [](dsl-ashdoubleentry-transfer.html#transfer)transfer

### [](dsl-ashdoubleentry-transfer.html#options)Options

NameTypeDefaultDocs[`account_resource`](dsl-ashdoubleentry-transfer.html#transfer-account_resource)`module`The resource to use for account balances[`pre_check_identities_with`](dsl-ashdoubleentry-transfer.html#transfer-pre_check_identities_with)`module`A domain to use to precheck generated identities. Required by certain data layers.[`balance_resource`](dsl-ashdoubleentry-transfer.html#transfer-balance_resource)`module`The resource being used for balances[`create_accept`](dsl-ashdoubleentry-transfer.html#transfer-create_accept)`atom | list(atom)``[]`Additional attributes to accept when creating a transfer[`destroy_balances?`](dsl-ashdoubleentry-transfer.html#transfer-destroy_balances?)`boolean``false`Whether or not balances must be manually destroyed. See the getting started guide for more.

[← Previous Page AshDoubleEntry.Balance](dsl-ashdoubleentry-balance.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) ([current file](https://preview.hex.pm/preview/ash_double_entry/1.0.10/show/documentation/dsls/DSL-AshDoubleEntry.Transfer.md)) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/documentation/tutorials/getting-started-with-ash-double-entry.md#L1 "View Source") Getting Started with Ash Double Entry

Ash Double Entry is implemented as a set of Ash resource extensions. You build the resources yourself, and the extensions add the attributes, relationships, actions and validations required for them to constitute a double entry system.

## [](getting-started-with-ash-double-entry.html#what-makes-it-special)What makes it special?

1. Account balances are updated automatically as transfers are introduced.
2. Arbitrary custom validations and behavior by virtue of modifying your own resources.
3. Transactions can be entered in the past, and all future balances are updated (and therefore validated).

## [](getting-started-with-ash-double-entry.html#setup)Setup

### [](getting-started-with-ash-double-entry.html#setup-ashmoney)Setup AshMoney

Follow the setup guide for [`AshMoney`](../ash_money/0.1.15/AshMoney.html). If you are using with `AshPostgres`, be sure to include the `:ex_money_sql` dependency in your `mix.exs`.

### [](getting-started-with-ash-double-entry.html#add-the-dependency)Add the dependency

```
{:ash_double_entry, "~> 1.0.3"}
```

### [](getting-started-with-ash-double-entry.html#define-your-account-resource)Define your account resource

#### Example

```
defmodule YourApp.Ledger.Account do
  use Ash.Resource,
    domain: YourApp.Ledger,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshDoubleEntry.Account]

  postgres do
    table "accounts"
    repo YourApp.Repo
  end

  account do
    # configure the other resources it will interact with
    transfer_resource YourApp.Ledger.Transfer
    balance_resource YourApp.Ledger.Balance
    # accept custom attributes in the autogenerated `open` create action
    open_action_accept [:account_number]
  end

  attributes do
    # Add custom attributes
    attribute :account_number, :string do
      allow_nil? false
    end
  end
end
```

#### What does this extension do?

- Adds the following attributes:
  
  - `:id`, a `:uuid` primary key
  - `:currency`, a `:string` representing the currency of the account.
  - `:inserted_at`, a `:utc_datetime_usec` timestamp
  - `:identifier`, a `:string` and a unique identifier for the account
- Adds the following actions:
  
  - A primary read called `:read`, unless a primary read action already exists.
  - A create action called `open`, that accepts `identifier`, `currency`, and the attributes in `open_action_accept`
  - A read action called `:lock_accounts` that can be used to lock a list of accounts while in a transaction(for data layers that support it)
- Adds a `has_many` relationship called `balances`, referring to all related balances of an account
- Adds an aggregate called `balance`, referring to the latest balance as a `decimal` for that account
- Adds the following calculations:
- A `balance_as_of_ulid` calculation that takes an argument called `ulid`, which corresponds to a transfer id and returns the balance.
- A `balance_as_of` calculation that takes a `utc_datetime_usec` and returns the balance as of that datetime.
- Adds an identity called `unique_identifier` that ensures `identifier` is unique.

### [](getting-started-with-ash-double-entry.html#define-your-transfer-resource)Define your transfer resource

#### Example

```
defmodule YourApp.Ledger.Transfer do
  use Ash.Resource,
    domain: YourApp.Ledger,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshDoubleEntry.Transfer]

  postgres do
    table "transfers"
    repo YourApp.Repo
  end

  transfer do
    # configure the other resources it will interact with
    account_resource YourApp.Ledger.Account
    balance_resource YourApp.Ledger.Balance

    # you only need this if you are using `postgres`
    # and so cannot add the `references` block shown below

    # destroy_balances? true
  end
end
```

#### What does this extension do?

- Adds the following attributes
  
  - `:id`, a [`AshDoubleEntry.ULID`](AshDoubleEntry.ULID.html) primary key which is sortable based on the `timestamp` of the transfer.
  - `:amount`, a [`AshMoney.Types.Money`](../ash_money/0.1.15/AshMoney.Types.Money.html) representing the amount and currency of the transfer
  - `:timestamp`, a `:utc_datetime_usec` representing when the transfer occurred
  - `:inserted_at`, a `:utc_datetime_usec` timestamp
- Adds the following relationships
  
  - `:from_account`, a `belongs_to` relationship of the account the transfer is from
  - `:to_account`, a `belongs_to` relationship of the account the transfer is to
- Adds a `:read` action called `:read_transfers` with keyset pagination enabled. Required for streaming transfers, used for validating balances.
- Adds a change that runs on all create and update actions that reifies the balances table. It inserts a balance for the transfer, and updates any affected future balances.

### [](getting-started-with-ash-double-entry.html#define-your-balance-resource)Define your balance resource

#### Example

```
defmodule YourApp.Ledger.Balance do
  use Ash.Resource,
    domain: YourApp.Ledger,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshDoubleEntry.Balance]

  postgres do
    table "balances"
    repo YourApp.Repo

    references do
      reference :transfer, on_delete: :delete
    end
  end

  balance do
    # configure the other resources it will interact with
    transfer_resource YourApp.Ledger.Transfer
    account_resource YourApp.Ledger.Account
  end

  actions do
    read :read do
      primary? true
      # configure keyset pagination for streaming
      pagination keyset?: true, required?: false
    end
  end
end
```

### [](getting-started-with-ash-double-entry.html#cascading-destroys)cascading destroys

If you are not using a data layer capable of automatic cascade deletion, you must add `destroy_balances? true` to the `transfer` resource! We do this with the `references` block in `ash_postgres` as shown above.

#### What does this extension do?

- Adds the following attributes:
  
  - `:id`, a `:uuid` primary key
  - `:balance`, the balance as a decimal of the account at the time of the related transfer
- Adds the following relationships:
  
  - `:transfer` a `:belongs_to` relationship, pointing to the transfer that this balance is as of.
  - `:account` a `:belongs_to` relationship, pointing to the account the balance is for
- Adds the following actions:
  
  - a primary read action called `:read`, if a priamry read action doesn't exist
  - configure primary read action to have keyset pagination enabled
  - a create action caleld `:upsert_balance`, which will create or update the relevant balance, by `transfer_id` and `account_id`
- Adds an identity that ensures that `account_id` and `transfer_id` are unique

### [](getting-started-with-ash-double-entry.html#define-an-ash-domain-to-use-them-through)Define an Ash domain to use them through

```
defmodule YourApp.Ledger do
  use Ash.Domain

  resources do
    resource YourApp.Ledger.Account
    resource YourApp.Ledger.Balance
    resource YourApp.Ledger.Transfer
  end
end
```

And add the domain to your config

`config :your_app, ash_domains: [..., YourApp.Ledger]`

### [](getting-started-with-ash-double-entry.html#generate-migrations)Generate Migrations

`mix ash_postgres.generate_migrations --name add_double_entry_ledger`

### [](getting-started-with-ash-double-entry.html#run-them)Run them

`mix ash_postgres.migrate`

### [](getting-started-with-ash-double-entry.html#use-them)Use them

#### Create an account

```
YourApp.Ledger.Account
|> Ash.Changeset.for_create(:open, %{identifier: "account_one"})
|> YourApp.Ledger.create!()
```

#### Create transfers between accounts

```
YourApp.Ledger.Transfer
|> Ash.Changeset.for_create(:transfer, %{
  amount: Money.new!(20, :USD),
  from_account_id: account_one.id,
  to_account_id: account_two.id
})
|> YourApp.Ledger.create!()
```

#### Check an account's balance

```
YourApp.Ledger.Account
|> YourApp.Ledger.get!(account_id, load: :balance_as_of)
|> Map.get(:balance_as_of)
# => Money.new!(20, :USD)
```

## [](getting-started-with-ash-double-entry.html#what-else-can-you-do)What else can you do?

There are tons of things you can do with your resources. You can add code interfaces to give yourself a nice functional api. You can add custom attributes, aggregates, calculations, relationships, validations, changes, all the great things built into [`Ash.Resource`](../ash/3.4.56/Ash.Resource.html)! See the docs for more: [AshHq](https://ash-hq.org).

[← Previous Page Home](readme.html)

[Next Page → AshDoubleEntry.Account](dsl-ashdoubleentry-account.html)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) ([current file](https://preview.hex.pm/preview/ash_double_entry/1.0.10/show/documentation/tutorials/getting-started-with-ash-double-entry.md)) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/lib/mix/tasks/ash_double_entry.install.ex#L26 "View Source") mix ash\_double\_entry.install (ash\_double\_entry v1.0.10)

Installs AshDoubleEntry

## [](Mix.Tasks.AshDoubleEntry.Install.html#module-example)Example

```
mix ash_double_entry.install --example arg
```

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_double_entry](assets/logo.png)](https://github.com/ash-project/ash_double_entry)

[ash\_double\_entry](https://github.com/ash-project/ash_double_entry)

v1.0.10

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_double\_entry

Settings

# [View Source](https://github.com/ash-project/ash_double_entry/blob/v1.0.10/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_double_entry/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_double_entry.svg)](https://hex.pm/packages/ash_double_entry) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_double_entry.html)

# AshDoubleEntry

Welcome! This is the extension for building a double entry accounting system in [Ash](../ash.html). This extension provides the basic building blocks for you to extend as necessary.

## [](readme.html#tutorials)Tutorials

- [Getting Started with AshDoubleEntry](getting-started-with-ash-double-entry.html)

## [](readme.html#reference)Reference

- [AshDoubleEntry.Account DSL](dsl-ashdoubleentry-account.html)
- [AshDoubleEntry.Transfer DSL](dsl-ashdoubleentry-transfer.html)
- [AshDoubleEntry.Balance DSL](dsl-ashdoubleentry-balance.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Get Started](getting-started-with-ash-double-entry.html)

[Hex Package](https://hex.pm/packages/ash_double_entry/1.0.10) [Hex Preview](https://preview.hex.pm/preview/ash_double_entry/1.0.10) ([current file](https://preview.hex.pm/preview/ash_double_entry/1.0.10/show/README.md)) Search HexDocs [Download ePub version](ash_double_entry.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
