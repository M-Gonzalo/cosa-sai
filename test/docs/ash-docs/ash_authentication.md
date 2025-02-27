[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# API Reference ash\_authentication v4.4.4

## [](api-reference.html#modules)Modules

[AshAuthentication](AshAuthentication.html)

AshAuthentication provides a turn-key authentication solution for folks using [Ash](https://www.ash-hq.org/).

[AshAuthentication.AddOn.Confirmation](AshAuthentication.AddOn.Confirmation.html)

Confirmation support.

[AshAuthentication.AddOn.Confirmation.Actions](AshAuthentication.AddOn.Confirmation.Actions.html)

Actions for the confirmation add-on.

[AshAuthentication.AddOn.Confirmation.ConfirmChange](AshAuthentication.AddOn.Confirmation.ConfirmChange.html)

Performs a change based on the contents of a confirmation token.

[AshAuthentication.AddOn.Confirmation.ConfirmationHookChange](AshAuthentication.AddOn.Confirmation.ConfirmationHookChange.html)

Triggers a confirmation flow when one of the monitored fields is changed.

[AshAuthentication.AddOn.Confirmation.Dsl](AshAuthentication.AddOn.Confirmation.Dsl.html)

Defines the Spark DSL entity for this add on.

[AshAuthentication.AddOn.Confirmation.Plug](AshAuthentication.AddOn.Confirmation.Plug.html)

Handlers for incoming OAuth2 HTTP requests.

[AshAuthentication.AddOn.Confirmation.Transformer](AshAuthentication.AddOn.Confirmation.Transformer.html)

DSL transformer for confirmation add-on.

[AshAuthentication.AddOn.Confirmation.Verifier](AshAuthentication.AddOn.Confirmation.Verifier.html)

DSL verifier for confirmation add-on.

[AshAuthentication.BcryptProvider](AshAuthentication.BcryptProvider.html)

Provides the default implementation of [`AshAuthentication.HashProvider`](AshAuthentication.HashProvider.html) using [`Bcrypt`](../bcrypt_elixir/3.2.0/Bcrypt.html).

[AshAuthentication.Checks.AshAuthenticationInteraction](AshAuthentication.Checks.AshAuthenticationInteraction.html)

This check is true if the context `private.ash_authentication?` is set to true.

[AshAuthentication.Debug](AshAuthentication.Debug.html)

Allows you to debug authentication failures in development.

[AshAuthentication.Errors.AuthenticationFailed](AshAuthentication.Errors.AuthenticationFailed.html)

A generic, authentication failed error.

[AshAuthentication.Errors.CannotConfirmUnconfirmedUser](AshAuthentication.Errors.CannotConfirmUnconfirmedUser.html)

An unconfirmed user cannot be confirmed outside of explicit actions.

[AshAuthentication.Errors.InvalidToken](AshAuthentication.Errors.InvalidToken.html)

An invalid token was presented.

[AshAuthentication.Errors.MissingSecret](AshAuthentication.Errors.MissingSecret.html)

A secret is now missing.

[AshAuthentication.Errors.UnconfirmedUser](AshAuthentication.Errors.UnconfirmedUser.html)

The user is unconfirmed and so the operation cannot be executed.

[AshAuthentication.GenerateTokenChange](AshAuthentication.GenerateTokenChange.html)

Given a successful registration or sign-in, generate a token.

[AshAuthentication.HashProvider](AshAuthentication.HashProvider.html)

A behaviour providing password hashing.

[AshAuthentication.Igniter](AshAuthentication.Igniter.html)

Codemods for working with AshAuthentication

[AshAuthentication.Info](AshAuthentication.Info.html)

Generated configuration functions based on a resource's DSL configuration.

[AshAuthentication.Jwt](AshAuthentication.Jwt.html)

Uses the excellent `joken` hex package to generate and sign Json Web Tokens.

[AshAuthentication.Jwt.Config](AshAuthentication.Jwt.Config.html)

Implementation details JWT generation and validation.

[AshAuthentication.Plug](AshAuthentication.Plug.html)

Generate an authentication plug.

[AshAuthentication.Plug.Defaults](AshAuthentication.Plug.Defaults.html)

Provides the default implementations of `handle_success/3` and `handle_failure/2` used in generated authentication plugs.

[AshAuthentication.Plug.Dispatcher](AshAuthentication.Plug.Dispatcher.html)

Route requests and callbacks to the correct provider plugs.

[AshAuthentication.Plug.Helpers](AshAuthentication.Plug.Helpers.html)

Authentication helpers for use in your router, etc.

[AshAuthentication.Plug.Macros](AshAuthentication.Plug.Macros.html)

Generators used within `use AshAuthentication.Plug`.

[AshAuthentication.Plug.Router](AshAuthentication.Plug.Router.html)

Dynamically generates the authentication router for the authentication requests and callbacks.

[AshAuthentication.Preparations.FilterBySubject](AshAuthentication.Preparations.FilterBySubject.html)

Filters a user by the identifier in the subject of a JWT.

[AshAuthentication.Secret](AshAuthentication.Secret.html)

A module to implement retrieving of secrets.

[AshAuthentication.SecretFunction](AshAuthentication.SecretFunction.html)

Implements [`AshAuthentication.Secret`](AshAuthentication.Secret.html) for functions that are provided to the DSL instead of modules.

[AshAuthentication.Sender](AshAuthentication.Sender.html)

A module to implement sending of a token to a user.

[AshAuthentication.SenderFunction](AshAuthentication.SenderFunction.html)

Implements [`AshAuthentication.Sender`](AshAuthentication.Sender.html) for functions that are provided to the DSL instead of modules.

[AshAuthentication.Strategy](AshAuthentication.Strategy.html)

The protocol used for interacting with authentication strategies.

[AshAuthentication.Strategy.Apple](AshAuthentication.Strategy.Apple.html)

Strategy for authenticating using [Apple Sign In](https://developer.apple.com/sign-in-with-apple/)

[AshAuthentication.Strategy.Apple.Verifier](AshAuthentication.Strategy.Apple.Verifier.html)

DSL verifier for Apple strategy.

[AshAuthentication.Strategy.Auth0](AshAuthentication.Strategy.Auth0.html)

Strategy for authenticating using [Auth0](https://auth0.com).

[AshAuthentication.Strategy.Custom](AshAuthentication.Strategy.Custom.html)

Define your own custom authentication strategy.

[AshAuthentication.Strategy.Custom.Helpers](AshAuthentication.Strategy.Custom.Helpers.html)

Helpers for use within custom strategies.

[AshAuthentication.Strategy.Custom.Transformer](AshAuthentication.Strategy.Custom.Transformer.html)

Transformer used by custom strategies.

[AshAuthentication.Strategy.Custom.Verifier](AshAuthentication.Strategy.Custom.Verifier.html)

Verifier used by custom strategies.

[AshAuthentication.Strategy.Github](AshAuthentication.Strategy.Github.html)

Strategy for authenticating using [GitHub](https://github.com)

[AshAuthentication.Strategy.Google](AshAuthentication.Strategy.Google.html)

Strategy for authenticating using [Google](https://google.com)

[AshAuthentication.Strategy.MagicLink](AshAuthentication.Strategy.MagicLink.html)

Strategy for authentication using a magic link.

[AshAuthentication.Strategy.MagicLink.Actions](AshAuthentication.Strategy.MagicLink.Actions.html)

Actions for the magic link strategy.

[AshAuthentication.Strategy.MagicLink.Plug](AshAuthentication.Strategy.MagicLink.Plug.html)

Plugs for the magic link strategy.

[AshAuthentication.Strategy.MagicLink.Request](AshAuthentication.Strategy.MagicLink.Request.html)

Requests a magic link for the given identity field.

[AshAuthentication.Strategy.MagicLink.RequestPreparation](AshAuthentication.Strategy.MagicLink.RequestPreparation.html)

Prepare a query for a magic link request.

[AshAuthentication.Strategy.MagicLink.SignInChange](AshAuthentication.Strategy.MagicLink.SignInChange.html)

Set up a create action for magic link sign in.

[AshAuthentication.Strategy.MagicLink.SignInPreparation](AshAuthentication.Strategy.MagicLink.SignInPreparation.html)

Prepare a query for sign in.

[AshAuthentication.Strategy.MagicLink.Transformer](AshAuthentication.Strategy.MagicLink.Transformer.html)

DSL transformer for magic links.

[AshAuthentication.Strategy.MagicLink.Verifier](AshAuthentication.Strategy.MagicLink.Verifier.html)

DSL verifier for magic links.

[AshAuthentication.Strategy.OAuth2](AshAuthentication.Strategy.OAuth2.html)

Strategy for authenticating using any OAuth 2.0 server as the source of truth.

[AshAuthentication.Strategy.OAuth2.Actions](AshAuthentication.Strategy.OAuth2.Actions.html)

Actions for the oauth2 strategy.

[AshAuthentication.Strategy.OAuth2.Dsl](AshAuthentication.Strategy.OAuth2.Dsl.html)

Defines the Spark DSL entity for this strategy.

[AshAuthentication.Strategy.OAuth2.IdentityChange](AshAuthentication.Strategy.OAuth2.IdentityChange.html)

Updates the identity resource when a user is registered.

[AshAuthentication.Strategy.OAuth2.Plug](AshAuthentication.Strategy.OAuth2.Plug.html)

Handlers for incoming OAuth2 HTTP requests.

[AshAuthentication.Strategy.OAuth2.SignInPreparation](AshAuthentication.Strategy.OAuth2.SignInPreparation.html)

Prepare a query for sign in

[AshAuthentication.Strategy.OAuth2.Transformer](AshAuthentication.Strategy.OAuth2.Transformer.html)

DSL transformer for oauth2 strategies.

[AshAuthentication.Strategy.OAuth2.Verifier](AshAuthentication.Strategy.OAuth2.Verifier.html)

DSL verifier for oauth2 strategies.

[AshAuthentication.Strategy.Oidc](AshAuthentication.Strategy.Oidc.html)

Strategy for authentication using an [OpenID Connect](https://openid.net/connect/) compatible server as the source of truth.

[AshAuthentication.Strategy.Oidc.NonceGenerator](AshAuthentication.Strategy.Oidc.NonceGenerator.html)

An implmentation of [`AshAuthentication.Secret`](AshAuthentication.Secret.html) that generates nonces for OpenID Connect strategies.

[AshAuthentication.Strategy.Oidc.Transformer](AshAuthentication.Strategy.Oidc.Transformer.html)

DSL transformer for oidc strategies.

[AshAuthentication.Strategy.Oidc.Verifier](AshAuthentication.Strategy.Oidc.Verifier.html)

DSL verifier for OpenID Connect strategy.

[AshAuthentication.Strategy.Password](AshAuthentication.Strategy.Password.html)

Strategy for authenticating using local resources as the source of truth.

[AshAuthentication.Strategy.Password.Actions](AshAuthentication.Strategy.Password.Actions.html)

Actions for the password strategy

[AshAuthentication.Strategy.Password.Dsl](AshAuthentication.Strategy.Password.Dsl.html)

Defines the Spark DSL entity for this strategy.

[AshAuthentication.Strategy.Password.HashPasswordChange](AshAuthentication.Strategy.Password.HashPasswordChange.html)

Set the hash based on the password input.

[AshAuthentication.Strategy.Password.PasswordConfirmationValidation](AshAuthentication.Strategy.Password.PasswordConfirmationValidation.html)

Validate that the password and password confirmation match.

[AshAuthentication.Strategy.Password.PasswordValidation](AshAuthentication.Strategy.Password.PasswordValidation.html)

A convenience validation that checks that the password argument against the hashed password stored in the record.

[AshAuthentication.Strategy.Password.Plug](AshAuthentication.Strategy.Password.Plug.html)

Plugs for the password strategy.

[AshAuthentication.Strategy.Password.RequestPasswordReset](AshAuthentication.Strategy.Password.RequestPasswordReset.html)

Requests a password reset.

[AshAuthentication.Strategy.Password.RequestPasswordResetPreparation](AshAuthentication.Strategy.Password.RequestPasswordResetPreparation.html)

Prepare a query for a password reset request.

[AshAuthentication.Strategy.Password.ResetTokenValidation](AshAuthentication.Strategy.Password.ResetTokenValidation.html)

Validate that the token is a valid password reset request token.

[AshAuthentication.Strategy.Password.Resettable](AshAuthentication.Strategy.Password.Resettable.html)

The entity used to store password reset information.

[AshAuthentication.Strategy.Password.SignInPreparation](AshAuthentication.Strategy.Password.SignInPreparation.html)

Prepare a query for sign in

[AshAuthentication.Strategy.Password.SignInWithTokenPreparation](AshAuthentication.Strategy.Password.SignInWithTokenPreparation.html)

Prepare a query for sign in via token.

[AshAuthentication.Strategy.Password.Transformer](AshAuthentication.Strategy.Password.Transformer.html)

DSL transformer for the password strategy.

[AshAuthentication.Strategy.Password.Verifier](AshAuthentication.Strategy.Password.Verifier.html)

DSL verifier for the password strategy.

[AshAuthentication.Strategy.Slack](AshAuthentication.Strategy.Slack.html)

Strategy for authenticating using [Slack](https://slack.com)

[AshAuthentication.Strategy.Slack.Verifier](AshAuthentication.Strategy.Slack.Verifier.html)

DSL verifier for Slack strategy.

[AshAuthentication.Supervisor](AshAuthentication.Supervisor.html)

Starts and manages any processes required by AshAuthentication.

[AshAuthentication.TokenResource](AshAuthentication.TokenResource.html)

This is an Ash resource extension which generates the default token resource.

[AshAuthentication.TokenResource.Actions](AshAuthentication.TokenResource.Actions.html)

The code interface for interacting with the token resource.

[AshAuthentication.TokenResource.Expunger](AshAuthentication.TokenResource.Expunger.html)

A [`GenServer`](../elixir/GenServer.html) which periodically removes expired token revocations.

[AshAuthentication.TokenResource.GetConfirmationChangesPreparation](AshAuthentication.TokenResource.GetConfirmationChangesPreparation.html)

Constrains a query to only records which are confirmations that match the jti argument.

[AshAuthentication.TokenResource.GetTokenPreparation](AshAuthentication.TokenResource.GetTokenPreparation.html)

Constrains a query to only records which match the `jti` or `token` argument and optionally by the `purpose` argument.

[AshAuthentication.TokenResource.Info](AshAuthentication.TokenResource.Info.html)

Introspection functions for the [`AshAuthentication.TokenResource`](AshAuthentication.TokenResource.html) Ash extension.

[AshAuthentication.TokenResource.IsRevoked](AshAuthentication.TokenResource.IsRevoked.html)

Checks for the existence of a revocation token for the provided tokenrevocation token for the provided token.

[AshAuthentication.TokenResource.IsRevokedPreparation](AshAuthentication.TokenResource.IsRevokedPreparation.html)

Constrains a query to only records which are revocations that match the token or jti argument.

[AshAuthentication.TokenResource.RevokeTokenChange](AshAuthentication.TokenResource.RevokeTokenChange.html)

Generates a revocation record for a given token.

[AshAuthentication.TokenResource.StoreConfirmationChangesChange](AshAuthentication.TokenResource.StoreConfirmationChangesChange.html)

Populates the JTI based on the token argument.

[AshAuthentication.TokenResource.StoreTokenChange](AshAuthentication.TokenResource.StoreTokenChange.html)

Stores an arbitrary token.

[AshAuthentication.TokenResource.Transformer](AshAuthentication.TokenResource.Transformer.html)

The token resource transformer.

[AshAuthentication.TokenResource.Verifier](AshAuthentication.TokenResource.Verifier.html)

The token resource verifier.

[AshAuthentication.Transformer](AshAuthentication.Transformer.html)

The Authentication transformer

[AshAuthentication.Transformer.SetSelectForSenders](AshAuthentication.Transformer.SetSelectForSenders.html)

Sets the `select_for_senders` options to its default value.

[AshAuthentication.UserIdentity](AshAuthentication.UserIdentity.html)

An Ash extension which generates the default user identities resource.

[AshAuthentication.UserIdentity.Actions](AshAuthentication.UserIdentity.Actions.html)

Code interface for provider identity actions.

[AshAuthentication.UserIdentity.Info](AshAuthentication.UserIdentity.Info.html)

Introspection functions for the [`AshAuthentication.UserIdentity`](AshAuthentication.UserIdentity.html) Ash extension.

[AshAuthentication.UserIdentity.Transformer](AshAuthentication.UserIdentity.Transformer.html)

The user identity transformer.

[AshAuthentication.UserIdentity.UpsertIdentityChange](AshAuthentication.UserIdentity.UpsertIdentityChange.html)

A change which upserts a user's identity into the user identity resource.

[AshAuthentication.UserIdentity.Verifier](AshAuthentication.UserIdentity.Verifier.html)

The user identity verifier.

[AshAuthentication.Validations](AshAuthentication.Validations.html)

Common validations shared by several transformers.

[AshAuthentication.Validations.Action](AshAuthentication.Validations.Action.html)

Validation helpers for Resource actions.

[AshAuthentication.Validations.Attribute](AshAuthentication.Validations.Attribute.html)

Validation helpers for Resource attributes.

[AshAuthentication.Verifier](AshAuthentication.Verifier.html)

The Authentication verifier.

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_authentication.add\_strategy](Mix.Tasks.AshAuthentication.AddStrategy.html)

Adds the provided strategy or strategies to your user resource

[mix ash\_authentication.install](Mix.Tasks.AshAuthentication.Install.html)

Installs AshAuthentication. Invoke with `mix igniter.install ash_authentication`

[Next Page → README](readme.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/actions.ex#L1 "View Source") AshAuthentication.AddOn.Confirmation.Actions (ash\_authentication v4.4.4)

Actions for the confirmation add-on.

Provides the code interface for working with resources via confirmation.

# [](AshAuthentication.AddOn.Confirmation.Actions.html#summary)Summary

## [Functions](AshAuthentication.AddOn.Confirmation.Actions.html#functions)

[confirm(strategy, params, opts \\\\ \[\])](AshAuthentication.AddOn.Confirmation.Actions.html#confirm/3)

Attempt to confirm a user.

[get\_changes(strategy, jti, opts \\\\ \[\])](AshAuthentication.AddOn.Confirmation.Actions.html#get_changes/3)

Get changes from the tokens resource for application.

[store\_changes(strategy, token, changeset, opts \\\\ \[\])](AshAuthentication.AddOn.Confirmation.Actions.html#store_changes/4)

Store changes in the tokens resource for later re-use.

# [](AshAuthentication.AddOn.Confirmation.Actions.html#functions)Functions

[](AshAuthentication.AddOn.Confirmation.Actions.html#confirm/3)

# confirm(strategy, params, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/actions.ex#L23)

```
@spec confirm(AshAuthentication.AddOn.Confirmation.t(), map(), keyword()) ::
  {:ok, Ash.Resource.record()} | {:error, any()}
```

Attempt to confirm a user.

[](AshAuthentication.AddOn.Confirmation.Actions.html#get_changes/3)

# get\_changes(strategy, jti, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/actions.ex#L111)

```
@spec get_changes(AshAuthentication.AddOn.Confirmation.t(), String.t(), keyword()) ::
  {:ok, map()} | :error
```

Get changes from the tokens resource for application.

[](AshAuthentication.AddOn.Confirmation.Actions.html#store_changes/4)

# store\_changes(strategy, token, changeset, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/actions.ex#L59)

```
@spec store_changes(
  AshAuthentication.AddOn.Confirmation.t(),
  String.t(),
  Ash.Changeset.t(),
  keyword()
) ::
  :ok | {:error, any()}
```

Store changes in the tokens resource for later re-use.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/confirmation_hook_change.ex#L1 "View Source") AshAuthentication.AddOn.Confirmation.ConfirmationHookChange (ash\_authentication v4.4.4)

Triggers a confirmation flow when one of the monitored fields is changed.

Optionally inhibits changes to monitored fields on update.

You can use this change in your actions where you want to send the user a confirmation (or inhibit changes after confirmation). If you're not using one of the actions generated by the confirmation add-on then you'll need to manually pass the strategy name in the changeset context. Eg:

```
Changeset.new(user, %{})
|> Changeset.set_context(%{strategy_name: :confirm})
|> Changeset.for_update(:update, params)
|> Accounts.update()
```

or by adding it statically to your action definition:

```
update :change_email do
  change set_context(%{strategy_name: :confirm})
  change AshAuthentication.AddOn.Confirmation.ConfirmationHookChange
end
```

or by adding it as an option to the change definition:

```
update :change_email do
  change {AshAuthentication.AddOn.Confirmation.ConfirmationHookChange, strategy_name: :confirm}
end
```

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/confirm_change.ex#L1 "View Source") AshAuthentication.AddOn.Confirmation.ConfirmChange (ash\_authentication v4.4.4)

Performs a change based on the contents of a confirmation token.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/dsl.ex#L1 "View Source") AshAuthentication.AddOn.Confirmation.Dsl (ash\_authentication v4.4.4)

Defines the Spark DSL entity for this add on.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation.ex#L1 "View Source") AshAuthentication.AddOn.Confirmation (ash\_authentication v4.4.4)

Confirmation support.

Sometimes when creating a new user, or changing a sensitive attribute (such as their email address) you may want to wait for the user to confirm by way of sending them a confirmation token to prove that it was really them that took the action.

In order to add confirmation to your resource, it must been the following minimum requirements:

1. Have a primary key
2. Have at least one attribute you wish to confirm
3. Tokens must be enabled

## [](AshAuthentication.AddOn.Confirmation.html#module-example)Example

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  authentication do
    add_ons do
      confirmation :confirm do
        monitor_fields [:email]
        sender MyApp.ConfirmationSender
      end
    end

    strategies do
      # ...
    end
  end

  identities do
    identity :email, [:email]
  end
end
```

## [](AshAuthentication.AddOn.Confirmation.html#module-attributes)Attributes

A `confirmed_at` attribute will be added to your resource if it's not already present (see `confirmed_at_field` in the DSL documentation).

## [](AshAuthentication.AddOn.Confirmation.html#module-actions)Actions

By default confirmation will add an action which updates the `confirmed_at` attribute as well as retrieving previously stored changes and applying them to the resource.

If you wish to perform the confirm action directly from your code you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](AshAuthentication.AddOn.Confirmation.html#module-example-1)Example

```
iex> strategy = Info.strategy!(Example.User, :confirm)
...> {:ok, user} = Strategy.action(strategy, :confirm, %{"confirm" => confirmation_token()})
...> user.confirmed_at >= one_second_ago()
true
```

## [](AshAuthentication.AddOn.Confirmation.html#module-plugs)Plugs

Confirmation provides a single endpoint for the `:confirm` phase. If you wish to interact with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](AshAuthentication.AddOn.Confirmation.html#module-example-2)Example

```
iex> strategy = Info.strategy!(Example.User, :confirm)
...> conn = conn(:get, "/user/confirm", %{"confirm" => confirmation_token()})
...> conn = Strategy.plug(strategy, :confirm, conn)
...> {_conn, {:ok, user}} = Plug.Helpers.get_authentication_result(conn)
...> user.confirmed_at >= one_second_ago()
true
```

# [](AshAuthentication.AddOn.Confirmation.html#summary)Summary

## [Types](AshAuthentication.AddOn.Confirmation.html#types)

[t()](AshAuthentication.AddOn.Confirmation.html#t:t/0)

## [Functions](AshAuthentication.AddOn.Confirmation.html#functions)

[confirmation\_token(strategy, changeset, user)](AshAuthentication.AddOn.Confirmation.html#confirmation_token/3)

Generate a confirmation token for a changeset.

[transform(entity, dsl\_state)](AshAuthentication.AddOn.Confirmation.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.AddOn.Confirmation.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.AddOn.Confirmation.html#types)Types

[](AshAuthentication.AddOn.Confirmation.html#t:t/0)

# t()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation.ex#L108)

```
@type t() :: %AshAuthentication.AddOn.Confirmation{
  auto_confirm_actions: [atom()],
  confirm_action_name: atom(),
  confirm_on_create?: boolean(),
  confirm_on_update?: boolean(),
  confirmed_at_field: atom(),
  inhibit_updates?: boolean(),
  monitor_fields: [atom()],
  name: :confirm,
  prevent_hijacking?: boolean(),
  provider: :confirmation,
  resource: module(),
  sender: nil | {module(), keyword()},
  strategy_module: module(),
  token_lifetime: hours :: pos_integer()
}
```

# [](AshAuthentication.AddOn.Confirmation.html#functions)Functions

[](AshAuthentication.AddOn.Confirmation.html#confirmation_token/3)

# confirmation\_token(strategy, changeset, user)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation.ex#L136)

```
@spec confirmation_token(t(), Ash.Changeset.t(), Ash.Resource.record()) ::
  {:ok, String.t()} | :error | {:error, any()}
```

Generate a confirmation token for a changeset.

This will generate a token with the `"act"` claim set to the confirmation action for the strategy, and the `"chg"` claim will contain any changes.

[](AshAuthentication.AddOn.Confirmation.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation.ex#L125)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.AddOn.Confirmation.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation.ex#L126)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/plug.ex#L1 "View Source") AshAuthentication.AddOn.Confirmation.Plug (ash\_authentication v4.4.4)

Handlers for incoming OAuth2 HTTP requests.

# [](AshAuthentication.AddOn.Confirmation.Plug.html#summary)Summary

## [Functions](AshAuthentication.AddOn.Confirmation.Plug.html#functions)

[confirm(conn, strategy)](AshAuthentication.AddOn.Confirmation.Plug.html#confirm/2)

Attempt to perform a confirmation.

# [](AshAuthentication.AddOn.Confirmation.Plug.html#functions)Functions

[](AshAuthentication.AddOn.Confirmation.Plug.html#confirm/2)

# confirm(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/plug.ex#L15)

```
@spec confirm(Plug.Conn.t(), AshAuthentication.AddOn.Confirmation.t()) ::
  Plug.Conn.t()
```

Attempt to perform a confirmation.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/transformer.ex#L1 "View Source") AshAuthentication.AddOn.Confirmation.Transformer (ash\_authentication v4.4.4)

DSL transformer for confirmation add-on.

Ensures that there is only ever one present and that it is correctly configured.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/add_ons/confirmation/verifier.ex#L1 "View Source") AshAuthentication.AddOn.Confirmation.Verifier (ash\_authentication v4.4.4)

DSL verifier for confirmation add-on.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/bcrypt_provider.ex#L1 "View Source") AshAuthentication.BcryptProvider (ash\_authentication v4.4.4)

Provides the default implementation of [`AshAuthentication.HashProvider`](AshAuthentication.HashProvider.html) using [`Bcrypt`](../bcrypt_elixir/3.2.0/Bcrypt.html).

# [](AshAuthentication.BcryptProvider.html#summary)Summary

## [Functions](AshAuthentication.BcryptProvider.html#functions)

[hash(input)](AshAuthentication.BcryptProvider.html#hash/1)

Given some user input as a string, convert it into it's hashed form using [`Bcrypt`](../bcrypt_elixir/3.2.0/Bcrypt.html).

[simulate()](AshAuthentication.BcryptProvider.html#simulate/0)

Simulate a password check to help avoid timing attacks.

[valid?(input, hash)](AshAuthentication.BcryptProvider.html#valid?/2)

Check if the user input matches the hash.

# [](AshAuthentication.BcryptProvider.html#functions)Functions

[](AshAuthentication.BcryptProvider.html#hash/1)

# hash(input)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/bcrypt_provider.ex#L18)

```
@spec hash(String.t()) :: {:ok, String.t()} | :error
```

Given some user input as a string, convert it into it's hashed form using [`Bcrypt`](../bcrypt_elixir/3.2.0/Bcrypt.html).

## [](AshAuthentication.BcryptProvider.html#hash/1-example)Example

```
iex> {:ok, hashed} = hash("Marty McFly")
...> String.starts_with?(hashed, "$2b$04$")
true
```

[](AshAuthentication.BcryptProvider.html#simulate/0)

# simulate()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/bcrypt_provider.ex#L45)

```
@spec simulate() :: false
```

Simulate a password check to help avoid timing attacks.

## [](AshAuthentication.BcryptProvider.html#simulate/0-example)Example

```
iex> simulate()
false
```

[](AshAuthentication.BcryptProvider.html#valid?/2)

# valid?(input, hash)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/bcrypt_provider.ex#L32)

```
@spec valid?(input :: String.t(), hash :: String.t()) :: boolean()
```

Check if the user input matches the hash.

## [](AshAuthentication.BcryptProvider.html#valid?/2-example)Example

```
iex> valid?("Marty McFly", "$2b$04$qgacrnrAJz8aPwaVQiGJn.PvryldV.NfOSYYvF/CZAGgMvvzhIE7S")
true
```

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/checks/ash_authentication_interaction.ex#L1 "View Source") AshAuthentication.Checks.AshAuthenticationInteraction (ash\_authentication v4.4.4)

This check is true if the context `private.ash_authentication?` is set to true.

This context will only ever be set in code that is called internally by `ash_authentication`, allowing you to create a bypass in your policies on your user/user\_token resources.

```
policies do
  bypass AshAuthenticationInteraction do
    authorize_if always()
  end
end
```

# [](AshAuthentication.Checks.AshAuthenticationInteraction.html#summary)Summary

## [Functions](AshAuthentication.Checks.AshAuthenticationInteraction.html#functions)

[eager\_evaluate?()](AshAuthentication.Checks.AshAuthenticationInteraction.html#eager_evaluate?/0)

Callback implementation for [`Ash.Policy.Check.eager_evaluate?/0`](../ash/3.4.56/Ash.Policy.Check.html#c:eager_evaluate?/0).

[prefer\_expanded\_description?()](AshAuthentication.Checks.AshAuthenticationInteraction.html#prefer_expanded_description?/0)

Callback implementation for [`Ash.Policy.Check.prefer_expanded_description?/0`](../ash/3.4.56/Ash.Policy.Check.html#c:prefer_expanded_description?/0).

[requires\_original\_data?(\_, \_)](AshAuthentication.Checks.AshAuthenticationInteraction.html#requires_original_data?/2)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](../ash/3.4.56/Ash.Policy.Check.html#c:requires_original_data?/2).

[strict\_check(actor, context, opts)](AshAuthentication.Checks.AshAuthenticationInteraction.html#strict_check/3)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](../ash/3.4.56/Ash.Policy.Check.html#c:strict_check/3).

[type()](AshAuthentication.Checks.AshAuthenticationInteraction.html#type/0)

Callback implementation for [`Ash.Policy.Check.type/0`](../ash/3.4.56/Ash.Policy.Check.html#c:type/0).

# [](AshAuthentication.Checks.AshAuthenticationInteraction.html#functions)Functions

[](AshAuthentication.Checks.AshAuthenticationInteraction.html#eager_evaluate?/0)

# eager\_evaluate?()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/checks/ash_authentication_interaction.ex#L17)

Callback implementation for [`Ash.Policy.Check.eager_evaluate?/0`](../ash/3.4.56/Ash.Policy.Check.html#c:eager_evaluate?/0).

[](AshAuthentication.Checks.AshAuthenticationInteraction.html#prefer_expanded_description?/0)

# prefer\_expanded\_description?()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/checks/ash_authentication_interaction.ex#L17)

Callback implementation for [`Ash.Policy.Check.prefer_expanded_description?/0`](../ash/3.4.56/Ash.Policy.Check.html#c:prefer_expanded_description?/0).

[](AshAuthentication.Checks.AshAuthenticationInteraction.html#requires_original_data?/2)

# requires\_original\_data?(\_, \_)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/checks/ash_authentication_interaction.ex#L17)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](../ash/3.4.56/Ash.Policy.Check.html#c:requires_original_data?/2).

[](AshAuthentication.Checks.AshAuthenticationInteraction.html#strict_check/3)

# strict\_check(actor, context, opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/checks/ash_authentication_interaction.ex#L17)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](../ash/3.4.56/Ash.Policy.Check.html#c:strict_check/3).

[](AshAuthentication.Checks.AshAuthenticationInteraction.html#type/0)

# type()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/checks/ash_authentication_interaction.ex#L17)

Callback implementation for [`Ash.Policy.Check.type/0`](../ash/3.4.56/Ash.Policy.Check.html#c:type/0).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/debug.ex#L1 "View Source") AshAuthentication.Debug (ash\_authentication v4.4.4)

Allows you to debug authentication failures in development.

Simply add `config :ash_authentication, debug_authentication_failures?: true` to your `dev.exs` and get fancy log messages when authentication fails.

# [](AshAuthentication.Debug.html#summary)Summary

## [Functions](AshAuthentication.Debug.html#functions)

[enabled?()](AshAuthentication.Debug.html#enabled?/0)

Has authentication debug logging been enabled?

# [](AshAuthentication.Debug.html#functions)Functions

[](AshAuthentication.Debug.html#enabled?/0)

# enabled?()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/debug.ex#L60)

```
@spec enabled?() :: boolean()
```

Has authentication debug logging been enabled?

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/authentication_failed.ex#L1 "View Source") AshAuthentication.Errors.AuthenticationFailed exception (ash\_authentication v4.4.4)

A generic, authentication failed error.

# [](AshAuthentication.Errors.AuthenticationFailed.html#summary)Summary

## [Types](AshAuthentication.Errors.AuthenticationFailed.html#types)

[t()](AshAuthentication.Errors.AuthenticationFailed.html#t:t/0)

## [Functions](AshAuthentication.Errors.AuthenticationFailed.html#functions)

[exception()](AshAuthentication.Errors.AuthenticationFailed.html#exception/0)

# [](AshAuthentication.Errors.AuthenticationFailed.html#types)Types

[](AshAuthentication.Errors.AuthenticationFailed.html#t:t/0)

# t()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/authentication_failed.ex#L17)

```
@type t() :: Exception.t()
```

# [](AshAuthentication.Errors.AuthenticationFailed.html#functions)Functions

[](AshAuthentication.Errors.AuthenticationFailed.html#exception/0)

# exception()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/authentication_failed.ex#L5)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/cannot_confirm_unconfirmed_user.ex#L1 "View Source") AshAuthentication.Errors.CannotConfirmUnconfirmedUser exception (ash\_authentication v4.4.4)

An unconfirmed user cannot be confirmed outside of explicit actions.

This can be allowed by making an action confirm a user by placing it in the `auto_confirm_actions` list.

However, it is a security risk to allow unconfirmed users to be confirmed except for via the `confirm` action, invoked with a token.

See the confirmation tutorial on hexdocs for more.

# [](AshAuthentication.Errors.CannotConfirmUnconfirmedUser.html#summary)Summary

## [Functions](AshAuthentication.Errors.CannotConfirmUnconfirmedUser.html#functions)

[exception()](AshAuthentication.Errors.CannotConfirmUnconfirmedUser.html#exception/0)

# [](AshAuthentication.Errors.CannotConfirmUnconfirmedUser.html#functions)Functions

[](AshAuthentication.Errors.CannotConfirmUnconfirmedUser.html#exception/0)

# exception()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/cannot_confirm_unconfirmed_user.ex#L11)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/invalid_token.ex#L1 "View Source") AshAuthentication.Errors.InvalidToken exception (ash\_authentication v4.4.4)

An invalid token was presented.

# [](AshAuthentication.Errors.InvalidToken.html#summary)Summary

## [Functions](AshAuthentication.Errors.InvalidToken.html#functions)

[exception()](AshAuthentication.Errors.InvalidToken.html#exception/0)

# [](AshAuthentication.Errors.InvalidToken.html#functions)Functions

[](AshAuthentication.Errors.InvalidToken.html#exception/0)

# exception()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/invalid_token.ex#L5)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/missing_secret.ex#L1 "View Source") AshAuthentication.Errors.MissingSecret exception (ash\_authentication v4.4.4)

A secret is now missing.

# [](AshAuthentication.Errors.MissingSecret.html#summary)Summary

## [Functions](AshAuthentication.Errors.MissingSecret.html#functions)

[exception()](AshAuthentication.Errors.MissingSecret.html#exception/0)

# [](AshAuthentication.Errors.MissingSecret.html#functions)Functions

[](AshAuthentication.Errors.MissingSecret.html#exception/0)

# exception()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/missing_secret.ex#L5)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/unconfirmed_user.ex#L1 "View Source") AshAuthentication.Errors.UnconfirmedUser exception (ash\_authentication v4.4.4)

The user is unconfirmed and so the operation cannot be executed.

# [](AshAuthentication.Errors.UnconfirmedUser.html#summary)Summary

## [Functions](AshAuthentication.Errors.UnconfirmedUser.html#functions)

[exception()](AshAuthentication.Errors.UnconfirmedUser.html#exception/0)

# [](AshAuthentication.Errors.UnconfirmedUser.html#functions)Functions

[](AshAuthentication.Errors.UnconfirmedUser.html#exception/0)

# exception()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/errors/unconfirmed_user.ex#L5)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/generate_token_change.ex#L1 "View Source") AshAuthentication.GenerateTokenChange (ash\_authentication v4.4.4)

Given a successful registration or sign-in, generate a token.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/hash_provider.ex#L1 "View Source") AshAuthentication.HashProvider behaviour (ash\_authentication v4.4.4)

A behaviour providing password hashing.

# [](AshAuthentication.HashProvider.html#summary)Summary

## [Callbacks](AshAuthentication.HashProvider.html#callbacks)

[hash(input)](AshAuthentication.HashProvider.html#c:hash/1)

Given some user input as a string, convert it into it's hashed form.

[simulate()](AshAuthentication.HashProvider.html#c:simulate/0)

Attempt to defeat timing attacks by simulating a password hash check.

[valid?(input, hash)](AshAuthentication.HashProvider.html#c:valid?/2)

Check if the user input matches the hash.

# [](AshAuthentication.HashProvider.html#callbacks)Callbacks

[](AshAuthentication.HashProvider.html#c:hash/1)

# hash(input)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/hash_provider.ex#L9)

```
@callback hash(input :: String.t()) :: {:ok, hash :: String.t()} | :error
```

Given some user input as a string, convert it into it's hashed form.

[](AshAuthentication.HashProvider.html#c:simulate/0)

# simulate()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/hash_provider.ex#L21)

```
@callback simulate() :: false
```

Attempt to defeat timing attacks by simulating a password hash check.

See [Bcrypt.no\_user\_verify/1](../bcrypt_elixir/Bcrypt.html#no_user_verify/1) for more information.

[](AshAuthentication.HashProvider.html#c:valid?/2)

# valid?(input, hash)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/hash_provider.ex#L14)

```
@callback valid?(input :: String.t(), hash :: String.t()) :: boolean()
```

Check if the user input matches the hash.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication.ex#L1 "View Source") AshAuthentication (ash\_authentication v4.4.4)

AshAuthentication provides a turn-key authentication solution for folks using [Ash](https://www.ash-hq.org/).

## [](AshAuthentication.html#module-usage)Usage

This package assumes that you have [Ash](https://ash-hq.org/) installed and configured. See the Ash documentation for details.

Once installed you can easily add support for authentication by configuring the [`AshAuthentication`](AshAuthentication.html) extension on your resource:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
    attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
  end

  authentication do
    strategies do
      password :password do
        identity_field :email
        hashed_password_field :hashed_password
      end
    end
  end

  identities do
    identity :unique_email, [:email]
  end
end
```

If you plan on providing authentication via the web, then you will need to define a plug using [`AshAuthentication.Plug`](AshAuthentication.Plug.html) which builds a [`Plug.Router`](../plug/1.16.1/Plug.Router.html) that routes incoming authentication requests to the correct provider and provides callbacks for you to manipulate the conn after success or failure.

If you're using AshAuthentication with Phoenix, then check out [`ash_authentication_phoenix`](https://github.com/team-alembic/ash_authentication_phoenix) which provides route helpers, a controller abstraction and LiveView components for easy set up.

## [](AshAuthentication.html#module-authentication-strategies)Authentication Strategies

Currently supported strategies:

1. [`AshAuthentication.Strategy.Password`](AshAuthentication.Strategy.Password.html)
   
   - authenticate users against your local database using a unique identity (such as username or email address) and a password.
2. [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)
   
   - authenticate using local or remote [OAuth 2.0](https://oauth.net/2/) compatible services.
   - also includes:
     
     - [`AshAuthentication.Strategy.Apple`](AshAuthentication.Strategy.Apple.html)
     - [`AshAuthentication.Strategy.Auth0`](AshAuthentication.Strategy.Auth0.html)
     - [`AshAuthentication.Strategy.Github`](AshAuthentication.Strategy.Github.html)
     - [`AshAuthentication.Strategy.Google`](AshAuthentication.Strategy.Google.html)
     - [`AshAuthentication.Strategy.Oidc`](AshAuthentication.Strategy.Oidc.html)
     - [`AshAuthentication.Strategy.Slack`](AshAuthentication.Strategy.Slack.html)
3. [`AshAuthentication.Strategy.MagicLink`](AshAuthentication.Strategy.MagicLink.html)
   
   - authenticate by sending a single-use link to the user.

### [](AshAuthentication.html#module-http-client-settings)HTTP client settings

Most of the authentication strategies based on `OAuth2` wrap the [`assent`](https://hex.pm/packages/assent) package.

If you needs to customize the behavior of the http client used by `assent`, define a custom `http_adapter` in the application settings:

`config :ash_authentication, :http_adapter, {Assent.HTTPAdapter.Finch, supervisor: MyApp.CustomFinch}`

See [`assent's documentation`](https://hexdocs.pm/assent/README.html#http-client) for more details on the supported http clients and their configuration.

## [](AshAuthentication.html#module-add-ons)Add-ons

Add-ons are like strategies, except that they don't actually provide authentication - they just provide features adjacent to authentication. Current add-ons:

1. [`AshAuthentication.AddOn.Confirmation`](AshAuthentication.AddOn.Confirmation.html)
   
   - allows you to force the user to confirm changes using a confirmation token (eg. sending a confirmation email when a new user registers).

## [](AshAuthentication.html#module-supervisor)Supervisor

Some add-ons or strategies may require processes to be started which manage their state over the lifetime of the application (eg periodically deleting expired token revocations). Because of this you should add `{AshAuthentication.Supervisor, otp_app: :my_app}` to your application's supervision tree. See [the Elixir docs](../elixir/Application.html#module-the-application-callback-module) for more information.

# [](AshAuthentication.html#summary)Summary

## [Types](AshAuthentication.html#types)

[resource\_config()](AshAuthentication.html#t:resource_config/0)

[subject()](AshAuthentication.html#t:subject/0)

## [Functions](AshAuthentication.html#functions)

[authenticated\_resources(otp\_app)](AshAuthentication.html#authenticated_resources/1)

Find all resources which support authentication for a given OTP application.

[authentication(body)](AshAuthentication.html#authentication/1)

[do\_subject\_to\_user(subject, resource, options)](AshAuthentication.html#do_subject_to_user/3)

[subject\_to\_user(subject, resource, options \\\\ \[\])](AshAuthentication.html#subject_to_user/3)

Given a subject string, attempt to retrieve a user record.

[user\_to\_subject(record)](AshAuthentication.html#user_to_subject/1)

Return a subject string for user.

# [](AshAuthentication.html#types)Types

[](AshAuthentication.html#t:resource_config/0)

# resource\_config()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication.ex#L143)

```
@type resource_config() :: %{
  domain: module(),
  providers: [module()],
  resource: module(),
  subject_name: atom()
}
```

[](AshAuthentication.html#t:subject/0)

# subject()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication.ex#L150)

```
@type subject() :: String.t()
```

# [](AshAuthentication.html#functions)Functions

[](AshAuthentication.html#authenticated_resources/1)

# authenticated\_resources(otp\_app)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication.ex#L158)

```
@spec authenticated_resources(atom() | [atom()]) :: [Ash.Resource.t()]
```

Find all resources which support authentication for a given OTP application.

Returns a list of resource modules.

[](AshAuthentication.html#authentication/1)

# authentication(body)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication.ex#L128)(macro)

[](AshAuthentication.html#do_subject_to_user/3)

# do\_subject\_to\_user(subject, resource, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication.ex#L243)

[](AshAuthentication.html#subject_to_user/3)

# subject\_to\_user(subject, resource, options \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication.ex#L208)

```
@spec subject_to_user(subject() | URI.t(), Ash.Resource.t(), keyword()) ::
  {:ok, Ash.Resource.record()} | {:error, any()}
```

Given a subject string, attempt to retrieve a user record.

```
iex> %{id: user_id} = build_user()
...> {:ok, %{id: ^user_id}} = subject_to_user("user?id=#{user_id}", Example.User)
```

Any options passed will be passed to the underlying `Domain.read/2` callback.

[](AshAuthentication.html#user_to_subject/1)

# user\_to\_subject(record)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication.ex#L184)

```
@spec user_to_subject(Ash.Resource.record()) :: subject()
```

Return a subject string for user.

This is done by concatenating the resource's subject name with the resource's primary key field(s) to generate a uri-like string.

Example:

```
iex> build_user(id: "ce7969f9-afa5-474c-bc52-ac23a103cef6") |> user_to_subject()
"user?id=ce7969f9-afa5-474c-bc52-ac23a103cef6"
```

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/igniter.ex#L3 "View Source") AshAuthentication.Igniter (ash\_authentication v4.4.4)

Codemods for working with AshAuthentication

# [](AshAuthentication.Igniter.html#summary)Summary

## [Functions](AshAuthentication.Igniter.html#functions)

[add\_add\_on(igniter, resource, contents)](AshAuthentication.Igniter.html#add_add_on/3)

Adds an add on to the authentication.add\_ons section of a resource

[add\_new\_add\_on(igniter, resource, type, name, contents)](AshAuthentication.Igniter.html#add_new_add_on/5)

Adds a new add\_on to the authentication.strategies section of a resource

[add\_new\_strategy(igniter, resource, type, name, contents)](AshAuthentication.Igniter.html#add_new_strategy/5)

Adds a new strategy to the authentication.strategies section of a resource

[add\_secret\_from\_env(igniter, module, resource, path, env\_key)](AshAuthentication.Igniter.html#add_secret_from_env/5)

Adds a secret to a secret module that reads from application env

[add\_strategy(igniter, resource, contents)](AshAuthentication.Igniter.html#add_strategy/3)

Adds a strategy to the authentication.strategies section of a resource

[defines\_add\_on(igniter, resource, constructor, name)](AshAuthentication.Igniter.html#defines_add_on/4)

Returns true if the given resource defines an authentication add on with the provided name

[defines\_strategy(igniter, resource, constructor, name)](AshAuthentication.Igniter.html#defines_strategy/4)

Returns true if the given resource defines an authentication strategy with the provided name

# [](AshAuthentication.Igniter.html#functions)Functions

[](AshAuthentication.Igniter.html#add_add_on/3)

# add\_add\_on(igniter, resource, contents)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/igniter.ex#L54)

```
@spec add_add_on(
  Igniter.t(),
  Ash.Resource.t(),
  contents :: String.t()
) :: Igniter.t()
```

Adds an add on to the authentication.add\_ons section of a resource

[](AshAuthentication.Igniter.html#add_new_add_on/5)

# add\_new\_add\_on(igniter, resource, type, name, contents)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/igniter.ex#L38)

```
@spec add_new_add_on(
  Igniter.t(),
  Ash.Resource.t(),
  type :: atom(),
  name :: atom(),
  contents :: String.t()
) :: Igniter.t()
```

Adds a new add\_on to the authentication.strategies section of a resource

[](AshAuthentication.Igniter.html#add_new_strategy/5)

# add\_new\_strategy(igniter, resource, type, name, contents)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/igniter.ex#L120)

```
@spec add_new_strategy(
  Igniter.t(),
  Ash.Resource.t(),
  type :: atom(),
  name :: atom(),
  contents :: String.t()
) :: Igniter.t()
```

Adds a new strategy to the authentication.strategies section of a resource

[](AshAuthentication.Igniter.html#add_secret_from_env/5)

# add\_secret\_from\_env(igniter, module, resource, path, env\_key)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/igniter.ex#L9)

```
@spec add_secret_from_env(Igniter.t(), module(), Ash.Resource.t(), [atom()], atom()) ::
  Igniter.t()
```

Adds a secret to a secret module that reads from application env

[](AshAuthentication.Igniter.html#add_strategy/3)

# add\_strategy(igniter, resource, contents)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/igniter.ex#L136)

```
@spec add_strategy(
  Igniter.t(),
  Ash.Resource.t(),
  contents :: String.t()
) :: Igniter.t()
```

Adds a strategy to the authentication.strategies section of a resource

[](AshAuthentication.Igniter.html#defines_add_on/4)

# defines\_add\_on(igniter, resource, constructor, name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/igniter.ex#L86)

```
@spec defines_add_on(
  Igniter.t(),
  Ash.Resource.t(),
  constructor :: atom(),
  name :: atom()
) ::
  {Igniter.t(), true | false}
```

Returns true if the given resource defines an authentication add on with the provided name

[](AshAuthentication.Igniter.html#defines_strategy/4)

# defines\_strategy(igniter, resource, constructor, name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/igniter.ex#L168)

```
@spec defines_strategy(
  Igniter.t(),
  Ash.Resource.t(),
  constructor :: atom(),
  name :: atom()
) ::
  {Igniter.t(), true | false}
```

Returns true if the given resource defines an authentication strategy with the provided name

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L1 "View Source") AshAuthentication.Info (ash\_authentication v4.4.4)

Generated configuration functions based on a resource's DSL configuration.

# [](AshAuthentication.Info.html#summary)Summary

## [Types](AshAuthentication.Info.html#types)

[dsl\_or\_resource()](AshAuthentication.Info.html#t:dsl_or_resource/0)

## [Functions](AshAuthentication.Info.html#functions)

[authentication\_add\_ons(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_add_ons/1)

authentication.add\_ons DSL entities

[authentication\_domain(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_domain/1)

The name of the Ash domain to use to access this resource when doing anything authentication related.

[authentication\_domain!(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_domain!/1)

The name of the Ash domain to use to access this resource when doing anything authentication related.

[authentication\_get\_by\_subject\_action\_name(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_get_by_subject_action_name/1)

The name of the read action used to retrieve records. If the action doesn't exist, one will be generated for you.

[authentication\_get\_by\_subject\_action\_name!(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_get_by_subject_action_name!/1)

The name of the read action used to retrieve records. If the action doesn't exist, one will be generated for you.

[authentication\_options(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_options/1)

authentication DSL options

[authentication\_select\_for\_senders(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_select_for_senders/1)

A list of fields that we will ensure are selected whenever a sender will be invoked. Defaults to `[:email]` if there is an `:email` attribute on the resource, and `[]` otherwise.

[authentication\_select\_for\_senders!(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_select_for_senders!/1)

A list of fields that we will ensure are selected whenever a sender will be invoked. Defaults to `[:email]` if there is an `:email` attribute on the resource, and `[]` otherwise.

[authentication\_strategies(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_strategies/1)

authentication.strategies DSL entities

[authentication\_subject\_name(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_subject_name/1)

The subject name is used anywhere that a short version of your resource name is needed. Must be unique system-wide and will be inferred from the resource name by default (ie `MyApp.Accounts.User` -&gt; `user`).

[authentication\_subject\_name!(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_subject_name!/1)

The subject name is used anywhere that a short version of your resource name is needed. Must be unique system-wide and will be inferred from the resource name by default (ie `MyApp.Accounts.User` -&gt; `user`).

[authentication\_tokens\_enabled?(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_enabled?/1)

Should JWTs be generated by this resource?

[authentication\_tokens\_options(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_options/1)

authentication.tokens DSL options

[authentication\_tokens\_require\_token\_presence\_for\_authentication?(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_require_token_presence_for_authentication?/1)

Require a locally-stored token for authentication. See the [tokens guide](tokens.html) for more.

[authentication\_tokens\_signing\_algorithm(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_signing_algorithm/1)

The algorithm to use for token signing. Available signing algorithms are; EdDSA, Ed448ph, Ed448, Ed25519ph, Ed25519, PS512, PS384, PS256, ES512, ES384, ES256, RS512, RS384, RS256, HS512, HS384 and HS256.

[authentication\_tokens\_signing\_algorithm!(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_signing_algorithm!/1)

The algorithm to use for token signing. Available signing algorithms are; EdDSA, Ed448ph, Ed448, Ed25519ph, Ed25519, PS512, PS384, PS256, ES512, ES384, ES256, RS512, RS384, RS256, HS512, HS384 and HS256.

[authentication\_tokens\_signing\_secret(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_signing_secret/1)

The secret used to sign tokens. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.

[authentication\_tokens\_signing\_secret!(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_signing_secret!/1)

The secret used to sign tokens. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.

[authentication\_tokens\_store\_all\_tokens?(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_store_all_tokens?/1)

Store all tokens in the `token_resource`. See the [tokens guide](tokens.html) for more.

[authentication\_tokens\_token\_lifetime(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_token_lifetime/1)

How long a token should be valid. See [the tokens guide](tokens.html) for more.

[authentication\_tokens\_token\_lifetime!(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_token_lifetime!/1)

How long a token should be valid. See [the tokens guide](tokens.html) for more.

[authentication\_tokens\_token\_resource(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_token_resource/1)

The resource used to store token information, such as in-flight confirmations, revocations, and if `store_all_tokens?` is enabled, authentication tokens themselves.

[authentication\_tokens\_token\_resource!(dsl\_or\_extended)](AshAuthentication.Info.html#authentication_tokens_token_resource!/1)

The resource used to store token information, such as in-flight confirmations, revocations, and if `store_all_tokens?` is enabled, authentication tokens themselves.

[domain(dsl\_or\_resource)](AshAuthentication.Info.html#domain/1)

Retrieve the domain to use for authentication.

[domain!(dsl\_or\_resource)](AshAuthentication.Info.html#domain!/1)

Raising version of [`domain/1`](AshAuthentication.Info.html#domain/1)

[find\_strategy(queryset, context \\\\ %{}, options)](AshAuthentication.Info.html#find_strategy/3)

Find the underlying strategy that required a change/preparation to be used.

[strategy(dsl\_or\_resource, name)](AshAuthentication.Info.html#strategy/2)

Retrieve a named strategy from a resource.

[strategy!(dsl\_or\_resource, name)](AshAuthentication.Info.html#strategy!/2)

Retrieve a named strategy from a resource (raising version).

[strategy\_for\_action(dsl\_or\_resource, action\_name)](AshAuthentication.Info.html#strategy_for_action/2)

Given an action name, retrieve the strategy it is for from the DSL configuration.

[strategy\_for\_action!(dsl\_or\_resource, action\_name)](AshAuthentication.Info.html#strategy_for_action!/2)

Given an action name, retrieve the strategy it is for from the DSL configuration.

# [](AshAuthentication.Info.html#types)Types

[](AshAuthentication.Info.html#t:dsl_or_resource/0)

# dsl\_or\_resource()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L14)

```
@type dsl_or_resource() :: module() | map()
```

# [](AshAuthentication.Info.html#functions)Functions

[](AshAuthentication.Info.html#authentication_add_ons/1)

# authentication\_add\_ons(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_add_ons(dsl_or_extended :: module() | map()) :: [struct()]
```

authentication.add\_ons DSL entities

[](AshAuthentication.Info.html#authentication_domain/1)

# authentication\_domain(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_domain(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The name of the Ash domain to use to access this resource when doing anything authentication related.

[](AshAuthentication.Info.html#authentication_domain!/1)

# authentication\_domain!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_domain!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The name of the Ash domain to use to access this resource when doing anything authentication related.

[](AshAuthentication.Info.html#authentication_get_by_subject_action_name/1)

# authentication\_get\_by\_subject\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_get_by_subject_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the read action used to retrieve records. If the action doesn't exist, one will be generated for you.

[](AshAuthentication.Info.html#authentication_get_by_subject_action_name!/1)

# authentication\_get\_by\_subject\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_get_by_subject_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the read action used to retrieve records. If the action doesn't exist, one will be generated for you.

[](AshAuthentication.Info.html#authentication_options/1)

# authentication\_options(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

authentication DSL options

Returns a map containing the and any configured or default values.

[](AshAuthentication.Info.html#authentication_select_for_senders/1)

# authentication\_select\_for\_senders(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_select_for_senders(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

A list of fields that we will ensure are selected whenever a sender will be invoked. Defaults to `[:email]` if there is an `:email` attribute on the resource, and `[]` otherwise.

[](AshAuthentication.Info.html#authentication_select_for_senders!/1)

# authentication\_select\_for\_senders!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_select_for_senders!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

A list of fields that we will ensure are selected whenever a sender will be invoked. Defaults to `[:email]` if there is an `:email` attribute on the resource, and `[]` otherwise.

[](AshAuthentication.Info.html#authentication_strategies/1)

# authentication\_strategies(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_strategies(dsl_or_extended :: module() | map()) :: [struct()]
```

authentication.strategies DSL entities

[](AshAuthentication.Info.html#authentication_subject_name/1)

# authentication\_subject\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_subject_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The subject name is used anywhere that a short version of your resource name is needed. Must be unique system-wide and will be inferred from the resource name by default (ie `MyApp.Accounts.User` -&gt; `user`).

[](AshAuthentication.Info.html#authentication_subject_name!/1)

# authentication\_subject\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_subject_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The subject name is used anywhere that a short version of your resource name is needed. Must be unique system-wide and will be inferred from the resource name by default (ie `MyApp.Accounts.User` -&gt; `user`).

[](AshAuthentication.Info.html#authentication_tokens_enabled?/1)

# authentication\_tokens\_enabled?(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_enabled?(dsl_or_extended :: module() | map()) :: boolean()
```

Should JWTs be generated by this resource?

[](AshAuthentication.Info.html#authentication_tokens_options/1)

# authentication\_tokens\_options(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

authentication.tokens DSL options

Returns a map containing the and any configured or default values.

[](AshAuthentication.Info.html#authentication_tokens_require_token_presence_for_authentication?/1)

# authentication\_tokens\_require\_token\_presence\_for\_authentication?(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_require_token_presence_for_authentication?(
  dsl_or_extended :: module() | map()
) :: boolean()
```

Require a locally-stored token for authentication. See the [tokens guide](tokens.html) for more.

[](AshAuthentication.Info.html#authentication_tokens_signing_algorithm/1)

# authentication\_tokens\_signing\_algorithm(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_signing_algorithm(dsl_or_extended :: module() | map()) ::
  {:ok, String.t()} | :error
```

The algorithm to use for token signing. Available signing algorithms are; EdDSA, Ed448ph, Ed448, Ed25519ph, Ed25519, PS512, PS384, PS256, ES512, ES384, ES256, RS512, RS384, RS256, HS512, HS384 and HS256.

[](AshAuthentication.Info.html#authentication_tokens_signing_algorithm!/1)

# authentication\_tokens\_signing\_algorithm!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_signing_algorithm!(dsl_or_extended :: module() | map()) ::
  String.t() | no_return()
```

The algorithm to use for token signing. Available signing algorithms are; EdDSA, Ed448ph, Ed448, Ed25519ph, Ed25519, PS512, PS384, PS256, ES512, ES384, ES256, RS512, RS384, RS256, HS512, HS384 and HS256.

[](AshAuthentication.Info.html#authentication_tokens_signing_secret/1)

# authentication\_tokens\_signing\_secret(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_signing_secret(dsl_or_extended :: module() | map()) ::
  {:ok, (module() | tuple() | (any(), any() -> any())) | String.t()} | :error
```

The secret used to sign tokens. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.

[](AshAuthentication.Info.html#authentication_tokens_signing_secret!/1)

# authentication\_tokens\_signing\_secret!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_signing_secret!(dsl_or_extended :: module() | map()) ::
  ((module() | tuple() | (any(), any() -> any())) | String.t()) | no_return()
```

The secret used to sign tokens. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.

[](AshAuthentication.Info.html#authentication_tokens_store_all_tokens?/1)

# authentication\_tokens\_store\_all\_tokens?(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_store_all_tokens?(dsl_or_extended :: module() | map()) ::
  boolean()
```

Store all tokens in the `token_resource`. See the [tokens guide](tokens.html) for more.

[](AshAuthentication.Info.html#authentication_tokens_token_lifetime/1)

# authentication\_tokens\_token\_lifetime(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_token_lifetime(dsl_or_extended :: module() | map()) ::
  {:ok, pos_integer() | {pos_integer(), :seconds | :minutes | :hours | :days}}
  | :error
```

How long a token should be valid. See [the tokens guide](tokens.html) for more.

[](AshAuthentication.Info.html#authentication_tokens_token_lifetime!/1)

# authentication\_tokens\_token\_lifetime!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_token_lifetime!(dsl_or_extended :: module() | map()) ::
  (pos_integer() | {pos_integer(), :seconds | :minutes | :hours | :days})
  | no_return()
```

How long a token should be valid. See [the tokens guide](tokens.html) for more.

[](AshAuthentication.Info.html#authentication_tokens_token_resource/1)

# authentication\_tokens\_token\_resource(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_token_resource(dsl_or_extended :: module() | map()) ::
  {:ok, module() | false} | :error
```

The resource used to store token information, such as in-flight confirmations, revocations, and if `store_all_tokens?` is enabled, authentication tokens themselves.

[](AshAuthentication.Info.html#authentication_tokens_token_resource!/1)

# authentication\_tokens\_token\_resource!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L6)

```
@spec authentication_tokens_token_resource!(dsl_or_extended :: module() | map()) ::
  (module() | false) | no_return()
```

The resource used to store token information, such as in-flight confirmations, revocations, and if `store_all_tokens?` is enabled, authentication tokens themselves.

[](AshAuthentication.Info.html#domain/1)

# domain(dsl\_or\_resource)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L114)

```
@spec domain(dsl_or_resource()) :: {:ok, Ash.Domain.t()} | :error
```

Retrieve the domain to use for authentication.

If the `authentication.domain` DSL option is set, it will be used, otherwise it will default to that configured on the resource.

[](AshAuthentication.Info.html#domain!/1)

# domain!(dsl\_or\_resource)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L129)

Raising version of [`domain/1`](AshAuthentication.Info.html#domain/1)

[](AshAuthentication.Info.html#find_strategy/3)

# find\_strategy(queryset, context \\\\ %{}, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L92)

```
@spec find_strategy(Ash.Query.t() | Ash.Changeset.t(), context, options) ::
  {:ok, AshAuthentication.Strategy.t()} | :error
when context: map(), options: Keyword.t()
```

Find the underlying strategy that required a change/preparation to be used.

This is because the `strategy_name` can be passed on the change options, eg:

```
change {AshAuthentication.Strategy.Password.HashPasswordChange, strategy_name: :banana_custard}
```

Or via the action context, eg:

```
prepare set_context(%{strategy_name: :banana_custard})
prepare AshAuthentication.Strategy.Password.SignInPreparation
```

Or via the passed-in context on calling the action.

[](AshAuthentication.Info.html#strategy/2)

# strategy(dsl\_or\_resource, name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L21)

```
@spec strategy(dsl_or_resource() | module(), atom()) :: {:ok, strategy} | :error
when strategy: struct()
```

Retrieve a named strategy from a resource.

[](AshAuthentication.Info.html#strategy!/2)

# strategy!(dsl\_or\_resource, name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L35)

```
@spec strategy!(dsl_or_resource() | module(), atom()) :: strategy | no_return()
when strategy: struct()
```

Retrieve a named strategy from a resource (raising version).

[](AshAuthentication.Info.html#strategy_for_action/2)

# strategy\_for\_action(dsl\_or\_resource, action\_name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L50)

```
@spec strategy_for_action(dsl_or_resource(), atom()) ::
  {:ok, AshAuthentication.Strategy.t()} | :error
```

Given an action name, retrieve the strategy it is for from the DSL configuration.

[](AshAuthentication.Info.html#strategy_for_action!/2)

# strategy\_for\_action!(dsl\_or\_resource, action\_name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/info.ex#L62)

```
@spec strategy_for_action!(dsl_or_resource(), atom()) ::
  AshAuthentication.Strategy.t() | no_return()
```

Given an action name, retrieve the strategy it is for from the DSL configuration.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt/config.ex#L1 "View Source") AshAuthentication.Jwt.Config (ash\_authentication v4.4.4)

Implementation details JWT generation and validation.

Provides functions to generate token configuration at runtime, based on the resource being signed for and for verifying claims and checking for token revocation.

# [](AshAuthentication.Jwt.Config.html#summary)Summary

## [Functions](AshAuthentication.Jwt.Config.html#functions)

[default\_claims(resource, opts \\\\ \[\])](AshAuthentication.Jwt.Config.html#default_claims/2)

Generate the default claims for a specified resource.

[generate\_audience(vsn)](AshAuthentication.Jwt.Config.html#generate_audience/1)

The generator function used to generate the "aud" claim.

[generate\_issuer(vsn)](AshAuthentication.Jwt.Config.html#generate_issuer/1)

The generator function used to generate the "iss" claim.

[token\_signer(resource, opts \\\\ \[\])](AshAuthentication.Jwt.Config.html#token_signer/2)

The signer used to sign the token on a per-resource basis.

[validate\_audience(claim, \_, \_, vsn)](AshAuthentication.Jwt.Config.html#validate_audience/4)

The validation function used to validate the "aud" claim.

[validate\_issuer(claim, \_, \_)](AshAuthentication.Jwt.Config.html#validate_issuer/3)

The validation function used to validate the "iss" claim.

[validate\_jti(jti, arg2, resource, opts \\\\ \[\])](AshAuthentication.Jwt.Config.html#validate_jti/4)

The validation function used to the validate the "jti" claim.

# [](AshAuthentication.Jwt.Config.html#functions)Functions

[](AshAuthentication.Jwt.Config.html#default_claims/2)

# default\_claims(resource, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt/config.ex#L18)

```
@spec default_claims(
  Ash.Resource.t(),
  keyword()
) :: Joken.token_config()
```

Generate the default claims for a specified resource.

[](AshAuthentication.Jwt.Config.html#generate_audience/1)

# generate\_audience(vsn)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt/config.ex#L76)

```
@spec generate_audience(Version.t()) :: String.t()
```

The generator function used to generate the "aud" claim.

It generates an Elixir-style `~>` version requirement against the current major and minor version numbers of AshAuthentication.

[](AshAuthentication.Jwt.Config.html#generate_issuer/1)

# generate\_issuer(vsn)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt/config.ex#L57)

```
@spec generate_issuer(Version.t()) :: String.t()
```

The generator function used to generate the "iss" claim.

[](AshAuthentication.Jwt.Config.html#token_signer/2)

# token\_signer(resource, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt/config.ex#L119)

```
@spec token_signer(
  Ash.Resource.t(),
  keyword()
) :: Joken.Signer.t()
```

The signer used to sign the token on a per-resource basis.

[](AshAuthentication.Jwt.Config.html#validate_audience/4)

# validate\_audience(claim, \_, \_, vsn)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt/config.ex#L89)

```
@spec validate_audience(String.t(), any(), any(), Version.t()) :: boolean()
```

The validation function used to validate the "aud" claim.

Uses [`Version.match?/2`](../elixir/Version.html#match?/2) to validate the provided claim against the current version. The use of `~>` means that tokens generated by versions of AshAuthentication with the the same major version and at least the same minor version should be compatible.

[](AshAuthentication.Jwt.Config.html#validate_issuer/3)

# validate\_issuer(claim, \_, \_)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt/config.ex#L67)

```
@spec validate_issuer(String.t(), any(), any()) :: boolean()
```

The validation function used to validate the "iss" claim.

It simply verifies that the claim starts with `"AshAuthentication"`

[](AshAuthentication.Jwt.Config.html#validate_jti/4)

# validate\_jti(jti, arg2, resource, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt/config.ex#L101)

```
@spec validate_jti(String.t(), any(), Ash.Resource.t() | any(), Keyword.t()) ::
  boolean()
```

The validation function used to the validate the "jti" claim.

This is done by checking that the token is valid with the token revocation resource. Requires that the subject's resource configuration be passed as the validation context. This is automatically done by calling `Jwt.verify/2`.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L1 "View Source") AshAuthentication.Jwt (ash\_authentication v4.4.4)

Uses the excellent `joken` hex package to generate and sign Json Web Tokens.

## [](AshAuthentication.Jwt.html#module-configuration)Configuration

There are a few things we need to know in order to generate and sign a JWT:

- `signing_algorithm` - the crypographic algorithm used to to sign tokens.
- `token_lifetime` - how long the token is valid for (in hours).
- `signing_secret` - the secret key used to sign the tokens.

These can be configured in your resource's token DSL:

```
defmodule MyApp.Accounts.User do
  # ...

  authentication do
    tokens do
      token_lifetime 32
      signing_secret fn _, _ ->
        System.fetch_env("TOKEN_SIGNING_SECRET")
      end
    end
  end

  # ...
end
```

The signing secret is retrieved using the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, which means that it can be retrieved one of three ways:

1. As a string directly in your resource DSL (please don't do this unless you know why this is a bad idea!), or
2. a two-arity anonymous function which returns `{:ok, secret}`, or
3. the name of a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour.

Available signing algorithms are EdDSA, Ed448ph, Ed448, Ed25519ph, Ed25519, PS512, PS384, PS256, ES512, ES384, ES256, RS512, RS384, RS256, HS512, HS384 or HS256. Defaults to HS256.

We strongly advise against storing the signing secret in your mix config or directly in your resource configuration. We instead suggest you make use of [`runtime.exs`](https://elixir-lang.org/getting-started/mix-otp/config-and-releases.html#configuration) and read it from the system environment or other secret store.

The default token lifetime is 168 and should be specified in integer positive hours.

# [](AshAuthentication.Jwt.html#summary)Summary

## [Types](AshAuthentication.Jwt.html#types)

[claims()](AshAuthentication.Jwt.html#t:claims/0)

"claims" are the decoded contents of a JWT. A map of (short) string keys to string values.

[token()](AshAuthentication.Jwt.html#t:token/0)

A string likely to contain a valid JWT.

## [Functions](AshAuthentication.Jwt.html#functions)

[default\_algorithm()](AshAuthentication.Jwt.html#default_algorithm/0)

The default signing algorithm

[default\_lifetime\_hrs()](AshAuthentication.Jwt.html#default_lifetime_hrs/0)

The default token lifetime

[peek(token)](AshAuthentication.Jwt.html#peek/1)

Given a token, read it's claims without validating.

[supported\_algorithms()](AshAuthentication.Jwt.html#supported_algorithms/0)

Supported signing algorithms

[token\_for\_resource(resource, extra\_claims, opts \\\\ \[\])](AshAuthentication.Jwt.html#token_for_resource/3)

Given a resource, generate a signed JWT with a set of claims.

[token\_for\_user(user, extra\_claims \\\\ %{}, opts \\\\ \[\])](AshAuthentication.Jwt.html#token_for_user/3)

Given a user, generate a signed JWT for use while authenticating.

[token\_to\_resource(token, otp\_app)](AshAuthentication.Jwt.html#token_to_resource/2)

Given a token, find a matching resource configuration.

[verify(token, otp\_app\_or\_resource)](AshAuthentication.Jwt.html#verify/2)

Given a token, verify it's signature and validate it's claims.

# [](AshAuthentication.Jwt.html#types)Types

[](AshAuthentication.Jwt.html#t:claims/0)

# claims()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L71)

```
@type claims() :: %{
  required(String.t()) => String.t() | number() | boolean() | claims()
}
```

"claims" are the decoded contents of a JWT. A map of (short) string keys to string values.

[](AshAuthentication.Jwt.html#t:token/0)

# token()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L65)

```
@type token() :: String.t()
```

A string likely to contain a valid JWT.

# [](AshAuthentication.Jwt.html#functions)Functions

[](AshAuthentication.Jwt.html#default_algorithm/0)

# default\_algorithm()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L75)

```
@spec default_algorithm() :: String.t()
```

The default signing algorithm

[](AshAuthentication.Jwt.html#default_lifetime_hrs/0)

# default\_lifetime\_hrs()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L83)

```
@spec default_lifetime_hrs() :: pos_integer()
```

The default token lifetime

[](AshAuthentication.Jwt.html#peek/1)

# peek(token)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L182)

```
@spec peek(token()) :: {:ok, claims()} | {:error, any()}
```

Given a token, read it's claims without validating.

[](AshAuthentication.Jwt.html#supported_algorithms/0)

# supported\_algorithms()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L79)

```
@spec supported_algorithms() :: [String.t()]
```

Supported signing algorithms

[](AshAuthentication.Jwt.html#token_for_resource/3)

# token\_for\_resource(resource, extra\_claims, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L129)

```
@spec token_for_resource(
  Ash.Resource.t(),
  extra_claims :: map(),
  options :: keyword()
) ::
  {:ok, token(), claims()} | :error
```

Given a resource, generate a signed JWT with a set of claims.

[](AshAuthentication.Jwt.html#token_for_user/3)

# token\_for\_user(user, extra\_claims \\\\ %{}, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L90)

```
@spec token_for_user(
  Ash.Resource.record(),
  extra_claims :: map(),
  options :: keyword()
) ::
  {:ok, token(), claims()} | :error
```

Given a user, generate a signed JWT for use while authenticating.

[](AshAuthentication.Jwt.html#token_to_resource/2)

# token\_to\_resource(token, otp\_app)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L229)

```
@spec token_to_resource(token(), module()) :: {:ok, Ash.Resource.t()} | :error
```

Given a token, find a matching resource configuration.

## [](AshAuthentication.Jwt.html#token_to_resource/2-warning)Warning

This function *does not* validate the token, so don't rely on it for authentication or authorisation.

[](AshAuthentication.Jwt.html#verify/2)

# verify(token, otp\_app\_or\_resource)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/jwt.ex#L188)

```
@spec verify(token(), Ash.Resource.t() | atom()) ::
  {:ok, claims(), Ash.Resource.t()} | :error
```

Given a token, verify it's signature and validate it's claims.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/defaults.ex#L1 "View Source") AshAuthentication.Plug.Defaults (ash\_authentication v4.4.4)

Provides the default implementations of `handle_success/3` and `handle_failure/2` used in generated authentication plugs.

# [](AshAuthentication.Plug.Defaults.html#summary)Summary

## [Functions](AshAuthentication.Plug.Defaults.html#functions)

[handle\_failure(conn, \_, \_)](AshAuthentication.Plug.Defaults.html#handle_failure/3)

The default implementation of `handle_failure/1`.

[handle\_success(conn, activity, user, token)](AshAuthentication.Plug.Defaults.html#handle_success/4)

The default implementation of `handle_success/3`.

# [](AshAuthentication.Plug.Defaults.html#functions)Functions

[](AshAuthentication.Plug.Defaults.html#handle_failure/3)

# handle\_failure(conn, \_, \_)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/defaults.ex#L32)

```
@spec handle_failure(Plug.Conn.t(), {atom(), atom()}, any()) :: Plug.Conn.t()
```

The default implementation of `handle_failure/1`.

Sends a very basic 401 response.

[](AshAuthentication.Plug.Defaults.html#handle_success/4)

# handle\_success(conn, activity, user, token)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/defaults.ex#L20)

```
@spec handle_success(
  Plug.Conn.t(),
  {atom(), atom()},
  Ash.Resource.record() | nil,
  String.t() | nil
) ::
  Plug.Conn.t()
```

The default implementation of `handle_success/3`.

Calls [`AshAuthentication.Plug.Helpers.store_in_session/2`](AshAuthentication.Plug.Helpers.html#store_in_session/2) then sends a basic 200 response.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/dispatcher.ex#L1 "View Source") AshAuthentication.Plug.Dispatcher (ash\_authentication v4.4.4)

Route requests and callbacks to the correct provider plugs.

# [](AshAuthentication.Plug.Dispatcher.html#summary)Summary

## [Types](AshAuthentication.Plug.Dispatcher.html#types)

[config()](AshAuthentication.Plug.Dispatcher.html#t:config/0)

## [Functions](AshAuthentication.Plug.Dispatcher.html#functions)

[call(conn, return\_to)](AshAuthentication.Plug.Dispatcher.html#call/2)

Send the request to the correct strategy and then return the result.

# [](AshAuthentication.Plug.Dispatcher.html#types)Types

[](AshAuthentication.Plug.Dispatcher.html#t:config/0)

# config()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/dispatcher.ex#L11)

```
@type config() :: {atom(), AshAuthentication.Strategy.t(), module()} | module()
```

# [](AshAuthentication.Plug.Dispatcher.html#functions)Functions

[](AshAuthentication.Plug.Dispatcher.html#call/2)

# call(conn, return\_to)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/dispatcher.ex#L25)

```
@spec call(Plug.Conn.t(), config() | any()) :: Plug.Conn.t()
```

Send the request to the correct strategy and then return the result.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L1 "View Source") AshAuthentication.Plug.Helpers (ash\_authentication v4.4.4)

Authentication helpers for use in your router, etc.

# [](AshAuthentication.Plug.Helpers.html#summary)Summary

## [Functions](AshAuthentication.Plug.Helpers.html#functions)

[get\_authentication\_result(conn)](AshAuthentication.Plug.Helpers.html#get_authentication_result/1)

[load\_subjects(subjects, otp\_app, opts \\\\ \[\])](AshAuthentication.Plug.Helpers.html#load_subjects/3)

Given a list of subjects, turn as many as possible into users.

[retrieve\_from\_bearer(conn, otp\_app, opts \\\\ \[\])](AshAuthentication.Plug.Helpers.html#retrieve_from_bearer/3)

Validate authorization header(s).

[retrieve\_from\_session(conn, otp\_app, opts \\\\ \[\])](AshAuthentication.Plug.Helpers.html#retrieve_from_session/3)

Attempt to retrieve all users from the connections' session.

[revoke\_bearer\_tokens(conn, otp\_app)](AshAuthentication.Plug.Helpers.html#revoke_bearer_tokens/2)

Revoke all authorization header(s).

[set\_actor(conn, subject\_name)](AshAuthentication.Plug.Helpers.html#set_actor/2)

Set a subject as the request actor.

[store\_authentication\_result(conn, arg2)](AshAuthentication.Plug.Helpers.html#store_authentication_result/2)

Store result in private.

[store\_in\_session(conn, user)](AshAuthentication.Plug.Helpers.html#store_in_session/2)

Store the user in the connections' session.

# [](AshAuthentication.Plug.Helpers.html#functions)Functions

[](AshAuthentication.Plug.Helpers.html#get_authentication_result/1)

# get\_authentication\_result(conn)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L291)

[](AshAuthentication.Plug.Helpers.html#load_subjects/3)

# load\_subjects(subjects, otp\_app, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L33)

```
@spec load_subjects([AshAuthentication.subject()], module(), opts :: Keyword.t()) ::
  map()
```

Given a list of subjects, turn as many as possible into users.

Opts are forwarded to [`AshAuthentication.subject_to_user/2`](AshAuthentication.html#subject_to_user/2)

[](AshAuthentication.Plug.Helpers.html#retrieve_from_bearer/3)

# retrieve\_from\_bearer(conn, otp\_app, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L139)

```
@spec retrieve_from_bearer(Plug.Conn.t(), module(), keyword()) :: Plug.Conn.t()
```

Validate authorization header(s).

Assumes that your clients are sending a bearer-style authorization header with your request. If a valid bearer token is present then the subject is loaded into the assigns under their subject name (with the prefix `current_`).

If the authentication token is required to be present in the database, it is loaded into the assigns using `current_#{subject_name}_token_record`

If there is no user present for a resource then the assign is set to `nil`.

[](AshAuthentication.Plug.Helpers.html#retrieve_from_session/3)

# retrieve\_from\_session(conn, otp\_app, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L67)

```
@spec retrieve_from_session(Plug.Conn.t(), module(), keyword()) :: Plug.Conn.t()
```

Attempt to retrieve all users from the connections' session.

Iterates through all configured authentication resources for `otp_app` and retrieves any users stored in the session, loads them and stores them in the assigns under their subject name (with the prefix `current_`).

If there is no user present for a resource then the assign is set to `nil`.

[](AshAuthentication.Plug.Helpers.html#revoke_bearer_tokens/2)

# revoke\_bearer\_tokens(conn, otp\_app)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L206)

```
@spec revoke_bearer_tokens(Plug.Conn.t(), module()) :: Plug.Conn.t()
```

Revoke all authorization header(s).

Any bearer-style authorization headers will have their tokens revoked.

[](AshAuthentication.Plug.Helpers.html#set_actor/2)

# set\_actor(conn, subject\_name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L254)

```
@spec set_actor(Plug.Conn.t(), subject_name :: atom()) :: Plug.Conn.t()
```

Set a subject as the request actor.

Presumes that you have already loaded your user resource(s) into the connection's assigns.

Uses [`Ash.PlugHelpers`](../ash/3.4.56/Ash.PlugHelpers.html) to streamline integration with [`AshGraphql`](../ash_graphql/1.5.0/AshGraphql.html) and [`AshJsonApi`](../ash_json_api/1.4.16/AshJsonApi.html).

## [](AshAuthentication.Plug.Helpers.html#set_actor/2-examples)Examples

Setting the actor for a AshGraphql API using [`Plug.Router`](../plug/1.16.1/Plug.Router.html).

```
defmodule MyApp.ApiRouter do
  use Plug.Router
  import MyApp.AuthPlug

  plug :match

  plug :retrieve_from_bearer
  plug :set_actor, :user

  plug :dispatch

  forward "/gql",
    to: Absinthe.Plug,
    init_opts: [schema: MyApp.Schema]
end
```

[](AshAuthentication.Plug.Helpers.html#store_authentication_result/2)

# store\_authentication\_result(conn, arg2)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L279)

```
@spec store_authentication_result(
  Plug.Conn.t(),
  :ok | {:ok, Ash.Resource.record()} | :error | {:error, any()}
) :: Plug.Conn.t()
```

Store result in private.

This is used by authentication plug handlers to store their result for passing back to the dispatcher.

[](AshAuthentication.Plug.Helpers.html#store_in_session/2)

# store\_in\_session(conn, user)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/helpers.ex#L14)

```
@spec store_in_session(Plug.Conn.t(), Ash.Resource.record()) :: Plug.Conn.t()
```

Store the user in the connections' session.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug.ex#L1 "View Source") AshAuthentication.Plug behaviour (ash\_authentication v4.4.4)

Generate an authentication plug.

Use in your app by creating a new module called `AuthPlug` or similar:

```
defmodule MyAppWeb.AuthPlug do
  use AshAuthentication.Plug, otp_app: :my_app

  def handle_success(conn, _activity, user, _token) do
    conn
    |> store_in_session(user)
    |> send_resp(200, "Welcome back #{user.name}")
  end

  def handle_failure(conn, _activity, reason) do
    conn
    |> send_resp(401, "Better luck next time")
  end
end
```

### [](AshAuthentication.Plug.html#module-using-in-phoenix)Using in Phoenix

In your Phoenix router you can add it:

```
scope "/auth" do
  pipe_through :browser
  forward "/", MyAppWeb.AuthPlug
end
```

In order to load any authenticated users for either web or API users you can add the following to your router:

```
import MyAppWeb.AuthPlug

pipeline :session_users do
  plug :load_from_session
end

pipeline :bearer_users do
  plug :load_from_bearer
end

scope "/", MyAppWeb do
  pipe_through [:browser, :session_users]

  live "/", PageLive, :home
end

scope "/api", MyAppWeb do
  pipe_through [:api, :bearer_users]

  get "/" ApiController, :index
end
```

### [](AshAuthentication.Plug.html#module-using-in-a-plug-application)Using in a Plug application

```
use Plug.Router

forward "/auth", to: MyAppWeb.AuthPlug
```

Note that you will need to include a bunch of other plugs in the pipeline to do useful things like session and query param fetching.

# [](AshAuthentication.Plug.html#summary)Summary

## [Types](AshAuthentication.Plug.html#types)

[activity()](AshAuthentication.Plug.html#t:activity/0)

[token()](AshAuthentication.Plug.html#t:token/0)

## [Callbacks](AshAuthentication.Plug.html#callbacks)

[handle\_failure(t, activity, any)](AshAuthentication.Plug.html#c:handle_failure/3)

When there is any failure during authentication this callback is called.

[handle\_success(t, activity, arg3, arg4)](AshAuthentication.Plug.html#c:handle_success/4)

When authentication has been succesful, this callback will be called with the conn, the successful activity, the authenticated resource and a token.

# [](AshAuthentication.Plug.html#types)Types

[](AshAuthentication.Plug.html#t:activity/0)

# activity()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug.ex#L77)

```
@type activity() :: {atom(), atom()}
```

[](AshAuthentication.Plug.html#t:token/0)

# token()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug.ex#L78)

```
@type token() :: String.t()
```

# [](AshAuthentication.Plug.html#callbacks)Callbacks

[](AshAuthentication.Plug.html#c:handle_failure/3)

# handle\_failure(t, activity, any)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug.ex#L102)

```
@callback handle_failure(Plug.Conn.t(), activity(), any()) :: Plug.Conn.t()
```

When there is any failure during authentication this callback is called.

Note that this includes not just authentication failures but potentially route-not-found errors also.

The default implementation simply returns a 401 status with the message "Access denied". You almost definitely want to override this.

[](AshAuthentication.Plug.html#c:handle_success/4)

# handle\_success(t, activity, arg3, arg4)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug.ex#L91)

```
@callback handle_success(
  Plug.Conn.t(),
  activity(),
  Ash.Resource.record() | nil,
  token() | nil
) ::
  Plug.Conn.t()
```

When authentication has been succesful, this callback will be called with the conn, the successful activity, the authenticated resource and a token.

This allows you to choose what action to take as appropriate for your application.

The default implementation calls `store_in_session/2` and returns a simple "Access granted" message to the user. You almost definitely want to override this behaviour.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/macros.ex#L1 "View Source") AshAuthentication.Plug.Macros (ash\_authentication v4.4.4)

Generators used within `use AshAuthentication.Plug`.

# [](AshAuthentication.Plug.Macros.html#summary)Summary

## [Functions](AshAuthentication.Plug.Macros.html#functions)

[define\_load\_from\_bearer(otp\_app)](AshAuthentication.Plug.Macros.html#define_load_from_bearer/1)

Generates the `load_from_bearer/2` plug with the `otp_app` prefilled.

[define\_load\_from\_session(otp\_app)](AshAuthentication.Plug.Macros.html#define_load_from_session/1)

Generates the `load_from_session/2` plug with the `otp_app` prefilled.

[define\_revoke\_bearer\_tokens(otp\_app)](AshAuthentication.Plug.Macros.html#define_revoke_bearer_tokens/1)

Generates the `revoke_bearer_tokens/2` plug with the `otp_app` prefilled.

[validate\_subject\_name\_uniqueness(otp\_app)](AshAuthentication.Plug.Macros.html#validate_subject_name_uniqueness/1)

Generates the subject name validation code for the auth plug.

# [](AshAuthentication.Plug.Macros.html#functions)Functions

[](AshAuthentication.Plug.Macros.html#define_load_from_bearer/1)

# define\_load\_from\_bearer(otp\_app)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/macros.ex#L76)(macro)

```
@spec define_load_from_bearer(atom()) :: Macro.t()
```

Generates the `load_from_bearer/2` plug with the `otp_app` prefilled.

[](AshAuthentication.Plug.Macros.html#define_load_from_session/1)

# define\_load\_from\_session(otp\_app)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/macros.ex#L58)(macro)

```
@spec define_load_from_session(atom()) :: Macro.t()
```

Generates the `load_from_session/2` plug with the `otp_app` prefilled.

[](AshAuthentication.Plug.Macros.html#define_revoke_bearer_tokens/1)

# define\_revoke\_bearer\_tokens(otp\_app)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/macros.ex#L93)(macro)

```
@spec define_revoke_bearer_tokens(atom()) :: Macro.t()
```

Generates the `revoke_bearer_tokens/2` plug with the `otp_app` prefilled.

[](AshAuthentication.Plug.Macros.html#validate_subject_name_uniqueness/1)

# validate\_subject\_name\_uniqueness(otp\_app)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/macros.ex#L15)(macro)

```
@spec validate_subject_name_uniqueness(atom()) :: Macro.t()
```

Generates the subject name validation code for the auth plug.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/plug/router.ex#L1 "View Source") AshAuthentication.Plug.Router (ash\_authentication v4.4.4)

Dynamically generates the authentication router for the authentication requests and callbacks.

Used internally by [`AshAuthentication.Plug`](AshAuthentication.Plug.html).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/preparations/filter_by_subject.ex#L1 "View Source") AshAuthentication.Preparations.FilterBySubject (ash\_authentication v4.4.4)

Filters a user by the identifier in the subject of a JWT.

# [](AshAuthentication.Preparations.FilterBySubject.html#summary)Summary

## [Functions](AshAuthentication.Preparations.FilterBySubject.html#functions)

[init(opts)](AshAuthentication.Preparations.FilterBySubject.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.Preparations.FilterBySubject.html#functions)Functions

[](AshAuthentication.Preparations.FilterBySubject.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/preparations/filter_by_subject.ex#L3)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/secret_function.ex#L1 "View Source") AshAuthentication.SecretFunction (ash\_authentication v4.4.4)

Implements [`AshAuthentication.Secret`](AshAuthentication.Secret.html) for functions that are provided to the DSL instead of modules.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/secret.ex#L1 "View Source") AshAuthentication.Secret behaviour (ash\_authentication v4.4.4)

A module to implement retrieving of secrets.

Allows you to implement secrets access via your method or choice at runtime.

## [](AshAuthentication.Secret.html#module-example)Example

```
defmodule MyApp.GetSecret do
  use AshAuthentication.Secret

  def secret_for([:authentication, :strategies, :oauth2, :client_id], MyApp.User, _opts), do: Application.fetch_env(:my_app, :oauth_client_id)
  def secret_for([:authentication, :strategies, :oauth2, :client_secret], MyApp.User, _opts), do: Application.fetch_env(:my_app, :oauth_client_secret)
end

defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  authentication do
    strategies do
      oauth2 do
        client_id MyApp.GetSecret
        client_secret MyApp.GetSecret
      end
    end
  end
end
```

You can also implement it directly as a function:

```
defmodule MyApp.User do
   use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  authentication do
    strategies do
      oauth2 do
        client_id fn _secret, _resource ->
          Application.fetch_env(:my_app, :oauth_client_id)
        end
      end
    end
  end
end
```

## [](AshAuthentication.Secret.html#module-secret-name)Secret name

Because you may wish to reuse this module for a number of different providers and resources, the first argument passed to the callback is the "secret name", it contains the "path" to the option being set. The path is made up of a list containing the DSL path to the secret.

# [](AshAuthentication.Secret.html#summary)Summary

## [Callbacks](AshAuthentication.Secret.html#callbacks)

[secret\_for(secret\_name, t, keyword)](AshAuthentication.Secret.html#c:secret_for/3)

Secret retrieval callback.

# [](AshAuthentication.Secret.html#callbacks)Callbacks

[](AshAuthentication.Secret.html#c:secret_for/3)

# secret\_for(secret\_name, t, keyword)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/secret.ex#L69)

```
@callback secret_for(secret_name :: [atom()], Ash.Resource.t(), keyword()) ::
  {:ok, String.t()} | :error
```

Secret retrieval callback.

This function will be called with the "secret name", see the module documentation for more info.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/sender_function.ex#L1 "View Source") AshAuthentication.SenderFunction (ash\_authentication v4.4.4)

Implements [`AshAuthentication.Sender`](AshAuthentication.Sender.html) for functions that are provided to the DSL instead of modules.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/sender.ex#L1 "View Source") AshAuthentication.Sender behaviour (ash\_authentication v4.4.4)

A module to implement sending of a token to a user.

Allows you to glue sending of instructions to [swoosh](https://hex.pm/packages/swoosh), [ex\_twilio](https://hex.pm/packages/ex_twilio) or whatever notification system is appropriate for your application.

Note that the return value and any failures are ignored. If you need retry logic, etc, then you should implement it in your sending system.

## [](AshAuthentication.Sender.html#module-example)Example

Implementing as a module:

```
defmodule MyApp.PasswordResetSender do
  use AshAuthentication.Sender
  import Swoosh.Email

  def send(user, reset_token, _opts) do
    new()
    |> to({user.name, user.email})
    |> from({"Doc Brown", "emmet@brown.inc"})
    |> subject("Password reset instructions")
    |> html_body("""
      <h1>Password reset instructions</h1>
      <p>
        Hi #{user.name},<br />

        Someone (maybe you) has requested a password reset for your account.
        If you did not initiate this request then please ignore this email.
      </p>
      <a href="https://example.com/user/password/reset?#{URI.encode_query(reset_token: reset_token)}\">
        Click here to reset
      </a>
    """)
    |> MyApp.Mailer.deliver()
  end
end

defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  authentication do
    strategies do
      password :password do
        resettable do
          sender MyApp.PasswordResetSender
        end
      end
    end
  end
end
```

You can also implement it directly as a function:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  authentication do
    strategies do
      password :password do
        resettable do
          sender fn user, token ->
            MyApp.Mailer.send_password_reset_email(user, token)
          end
        end
      end
    end
  end
end
```

# [](AshAuthentication.Sender.html#summary)Summary

## [Callbacks](AshAuthentication.Sender.html#callbacks)

[send(user, token, opts)](AshAuthentication.Sender.html#c:send/3)

Sending callback.

# [](AshAuthentication.Sender.html#callbacks)Callbacks

[](AshAuthentication.Sender.html#c:send/3)

# send(user, token, opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/sender.ex#L91)

```
@callback send(
  user :: Ash.Resource.record() | String.t(),
  token :: String.t(),
  opts :: list()
) :: :ok
```

Sending callback.

This function will be called with a value representing a user, the token and any options passed to the module in the DSL.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/apple.ex#L1 "View Source") AshAuthentication.Strategy.Apple (ash\_authentication v4.4.4)

Strategy for authenticating using [Apple Sign In](https://developer.apple.com/sign-in-with-apple/)

This strategy builds on-top of [`AshAuthentication.Strategy.Oidc`](AshAuthentication.Strategy.Oidc.html) and [`assent`](https://hex.pm/packages/assent).

In order to use Apple Sign In you need to provide the following minimum configuration:

- `client_id`
- `team_id`
- `private_key_id`
- `private_key_path`
- `redirect_uri`

## [](AshAuthentication.Strategy.Apple.html#module-more-documentation)More documentation:

- The [Apple Sign In Documentation](https://developer.apple.com/documentation/sign_in_with_apple).
- The [OIDC documentation](AshAuthentication.Strategy.Oidc.html)

# [](AshAuthentication.Strategy.Apple.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Apple.html#functions)

[transform(entity, dsl\_state)](AshAuthentication.Strategy.Apple.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.Apple.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.Apple.html#functions)Functions

[](AshAuthentication.Strategy.Apple.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/apple.ex#L27)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.Apple.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/apple.ex#L28)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/apple/verifier.ex#L1 "View Source") AshAuthentication.Strategy.Apple.Verifier (ash\_authentication v4.4.4)

DSL verifier for Apple strategy.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/auth0.ex#L1 "View Source") AshAuthentication.Strategy.Auth0 (ash\_authentication v4.4.4)

Strategy for authenticating using [Auth0](https://auth0.com).

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html) and [`assent`](https://hex.pm/packages/assent).

In order to use Auth0 you need to provide the following minimum configuration:

- `client_id`
- `redirect_uri`
- `client_secret`
- `site`

## [](AshAuthentication.Strategy.Auth0.html#module-more-documentation)More documentation:

- The [Auth0 Tutorial](auth0.html).
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

# [](AshAuthentication.Strategy.Auth0.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Auth0.html#functions)

[transform(entity, dsl\_state)](AshAuthentication.Strategy.Auth0.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.Auth0.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.Auth0.html#functions)Functions

[](AshAuthentication.Strategy.Auth0.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/auth0.ex#L26)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.Auth0.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/auth0.ex#L27)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom/helpers.ex#L1 "View Source") AshAuthentication.Strategy.Custom.Helpers (ash\_authentication v4.4.4)

Helpers for use within custom strategies.

# [](AshAuthentication.Strategy.Custom.Helpers.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Custom.Helpers.html#functions)

[put\_add\_on(dsl\_state, strategy)](AshAuthentication.Strategy.Custom.Helpers.html#put_add_on/2)

Update the add-on in the DSL state by name.

[put\_strategy(dsl\_state, strategy)](AshAuthentication.Strategy.Custom.Helpers.html#put_strategy/2)

Update the strategy in the DSL state by name.

[register\_strategy\_actions(action, dsl\_state, strategy)](AshAuthentication.Strategy.Custom.Helpers.html#register_strategy_actions/3)

If there's any chance that an implementor may try and use actions genrated by your strategy programatically then you should register your actions with Ash Authentication so that it can find the appropriate strategy when needed.

# [](AshAuthentication.Strategy.Custom.Helpers.html#functions)Functions

[](AshAuthentication.Strategy.Custom.Helpers.html#put_add_on/2)

# put\_add\_on(dsl\_state, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom/helpers.ex#L47)

```
@spec put_add_on(dsl_state, AshAuthentication.Strategy.Custom.strategy()) :: dsl_state
when dsl_state: map()
```

Update the add-on in the DSL state by name.

This helper should only be used within transformers.

[](AshAuthentication.Strategy.Custom.Helpers.html#put_strategy/2)

# put\_strategy(dsl\_state, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom/helpers.ex#L38)

```
@spec put_strategy(dsl_state, AshAuthentication.Strategy.Custom.strategy()) ::
  dsl_state
when dsl_state: map()
```

Update the strategy in the DSL state by name.

This helper should only be used within transformers.

[](AshAuthentication.Strategy.Custom.Helpers.html#register_strategy_actions/3)

# register\_strategy\_actions(action, dsl\_state, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom/helpers.ex#L21)

```
@spec register_strategy_actions(
  action_or_actions,
  dsl_state,
  AshAuthentication.Strategy.Custom.strategy()
) :: dsl_state
when dsl_state: map(), action_or_actions: atom() | [atom()]
```

If there's any chance that an implementor may try and use actions genrated by your strategy programatically then you should register your actions with Ash Authentication so that it can find the appropriate strategy when needed.

The strategy can be retrieved again by calling [`AshAuthentication.Info.strategy_for_action/2`](AshAuthentication.Info.html#strategy_for_action/2).

This helper should only be used within transformers.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom.ex#L1 "View Source") AshAuthentication.Strategy.Custom behaviour (ash\_authentication v4.4.4)

Define your own custom authentication strategy.

See [the Custom Strategies guide](custom-strategy.html) for more information.

# [](AshAuthentication.Strategy.Custom.html#summary)Summary

## [Types](AshAuthentication.Strategy.Custom.html#types)

[entity()](AshAuthentication.Strategy.Custom.html#t:entity/0)

A Strategy DSL Entity.

[strategy()](AshAuthentication.Strategy.Custom.html#t:strategy/0)

This is the DSL target for your entity and the struct for which you will implement the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

## [Callbacks](AshAuthentication.Strategy.Custom.html#callbacks)

[transform(strategy, t)](AshAuthentication.Strategy.Custom.html#c:transform/2)

If your strategy needs to modify either the entity or the parent resource then you can implement this callback.

[verify(strategy, t)](AshAuthentication.Strategy.Custom.html#c:verify/2)

If your strategy needs to verify either the entity or the parent resource then you can implement this callback.

## [Functions](AshAuthentication.Strategy.Custom.html#functions)

[set\_defaults(dsl, defaults)](AshAuthentication.Strategy.Custom.html#set_defaults/2)

Sets default values for a DSL schema based on a set of defaults.

# [](AshAuthentication.Strategy.Custom.html#types)Types

[](AshAuthentication.Strategy.Custom.html#t:entity/0)

# entity()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom.ex#L16)

```
@type entity() :: Spark.Dsl.Entity.t()
```

A Strategy DSL Entity.

See [`Spark.Dsl.Entity`](../spark/2.2.40/Spark.Dsl.Entity.html) for more information.

[](AshAuthentication.Strategy.Custom.html#t:strategy/0)

# strategy()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom.ex#L25)

```
@type strategy() :: %{
  :__struct__ => module(),
  :strategy_module => module(),
  :resource => module(),
  optional(atom()) => any()
}
```

This is the DSL target for your entity and the struct for which you will implement the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

The only required field is `strategy_module` which is used to keep track of which custom strategy created which strategy.

# [](AshAuthentication.Strategy.Custom.html#callbacks)Callbacks

[](AshAuthentication.Strategy.Custom.html#c:transform/2)

# transform(strategy, t)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom.ex#L48)

```
@callback transform(strategy(), Spark.Dsl.t()) ::
  {:ok, strategy()} | {:ok, Spark.Dsl.t()} | {:error, Exception.t()}
```

If your strategy needs to modify either the entity or the parent resource then you can implement this callback.

This callback can return one of three results:

- `{:ok, Entity.t}` - an updated DSL entity - useful if you're just changing the entity itself and not changing the wider DSL state of the resource. If this is the response then the transformer will take care of updating the entity in the DSL state.
- `{:ok, Dsl.t}` - an updated DSL state for the entire resource.
- `{:error, Exception.t}` - a compilation-stopping problem was found. Any exception can be returned, but we strongly advise you to return a [`Spark.Error.DslError`](../spark/2.2.40/Spark.Error.DslError.html).

[](AshAuthentication.Strategy.Custom.html#c:verify/2)

# verify(strategy, t)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom.ex#L65)

```
@callback verify(strategy(), Spark.Dsl.t()) :: :ok | {:error, Exception.t()}
```

If your strategy needs to verify either the entity or the parent resource then you can implement this callback.

This is called post-compilation in the `@after_verify` hook - see [`Module`](../elixir/Module.html) for more information.

This callback can return one of the following results:

- `:ok` - everything is A-Okay.
- `{:error, Exception.t}` - a compilation-stopping problem was found. Any exception can be returned, but we strongly advise you to return a [`Spark.Error.DslError`](../spark/2.2.40/Spark.Error.DslError.html).

# [](AshAuthentication.Strategy.Custom.html#functions)Functions

[](AshAuthentication.Strategy.Custom.html#set_defaults/2)

# set\_defaults(dsl, defaults)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom.ex#L121)

Sets default values for a DSL schema based on a set of defaults.

If a given default is in the schema, it can be overriden, so we just set the default and mark it not required.

If not, then we add it to `auto_set_fields`, and the user cannot override it.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom/transformer.ex#L1 "View Source") AshAuthentication.Strategy.Custom.Transformer (ash\_authentication v4.4.4)

Transformer used by custom strategies.

It delegates transformation passes to the individual strategies.

# [](AshAuthentication.Strategy.Custom.Transformer.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Custom.Transformer.html#functions)

[after\_compile?()](AshAuthentication.Strategy.Custom.Transformer.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

# [](AshAuthentication.Strategy.Custom.Transformer.html#functions)Functions

[](AshAuthentication.Strategy.Custom.Transformer.html#after_compile?/0)

# after\_compile?()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom/transformer.ex#L8)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/custom/verifier.ex#L1 "View Source") AshAuthentication.Strategy.Custom.Verifier (ash\_authentication v4.4.4)

Verifier used by custom strategies.

It delegates verification passes to the individual strategies.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/github.ex#L1 "View Source") AshAuthentication.Strategy.Github (ash\_authentication v4.4.4)

Strategy for authenticating using [GitHub](https://github.com)

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html) and [`assent`](https://hex.pm/packages/assent).

In order to use GitHub you need to provide the following minimum configuration:

- `client_id`
- `redirect_uri`
- `client_secret`

## [](AshAuthentication.Strategy.Github.html#module-more-documentation)More documentation:

- The [GitHub Tutorial](github.html).
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

# [](AshAuthentication.Strategy.Github.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Github.html#functions)

[transform(entity, dsl\_state)](AshAuthentication.Strategy.Github.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.Github.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.Github.html#functions)Functions

[](AshAuthentication.Strategy.Github.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/github.ex#L25)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.Github.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/github.ex#L26)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/google.ex#L1 "View Source") AshAuthentication.Strategy.Google (ash\_authentication v4.4.4)

Strategy for authenticating using [Google](https://google.com)

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html) and [`assent`](https://hex.pm/packages/assent).

In order to use Google you need to provide the following minimum configuration:

- `client_id`
- `redirect_uri`
- `client_secret`
- `site`

## [](AshAuthentication.Strategy.Google.html#module-more-documentation)More documentation:

- The [Google OAuth 2.0 Overview](https://developers.google.com/identity/protocols/oauth2).
- The [Google Tutorial](google.html)
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

# [](AshAuthentication.Strategy.Google.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Google.html#functions)

[transform(entity, dsl\_state)](AshAuthentication.Strategy.Google.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.Google.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.Google.html#functions)Functions

[](AshAuthentication.Strategy.Google.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/google.ex#L27)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.Google.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/google.ex#L28)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L1 "View Source") AshAuthentication.Strategy protocol (ash\_authentication v4.4.4)

The protocol used for interacting with authentication strategies.

Any new Authentication strategy must implement this protocol.

# [](AshAuthentication.Strategy.html#summary)Summary

## [Types](AshAuthentication.Strategy.html#types)

[action()](AshAuthentication.Strategy.html#t:action/0)

The name of an individual action supported by the strategy.

[http\_method()](AshAuthentication.Strategy.html#t:http_method/0)

[path()](AshAuthentication.Strategy.html#t:path/0)

A path to match in web requests

[phase()](AshAuthentication.Strategy.html#t:phase/0)

The "phase" of the request.

[route()](AshAuthentication.Strategy.html#t:route/0)

An individual route.

[t()](AshAuthentication.Strategy.html#t:t/0)

All the types that implement this protocol.

## [Functions](AshAuthentication.Strategy.html#functions)

[action(strategy, action\_name, params, options \\\\ \[\])](AshAuthentication.Strategy.html#action/4)

Perform an named action.

[actions(strategy)](AshAuthentication.Strategy.html#actions/1)

Return a list of actions supported by the strategy.

[method\_for\_phase(t, phase)](AshAuthentication.Strategy.html#method_for_phase/2)

Return the HTTP method for a phase.

[name(strategy)](AshAuthentication.Strategy.html#name/1)

The "short name" of the strategy, used for genererating routes, etc.

[phases(strategy)](AshAuthentication.Strategy.html#phases/1)

Return a list of phases supported by the strategy.

[plug(strategy, phase, conn)](AshAuthentication.Strategy.html#plug/3)

Handle requests routed to the strategy.

[routes(strategy)](AshAuthentication.Strategy.html#routes/1)

Used to build the routing table to route web requests to request phases for each strategy.

[tokens\_required?(strategy)](AshAuthentication.Strategy.html#tokens_required?/1)

Indicates that the strategy creates or consumes tokens.

# [](AshAuthentication.Strategy.html#types)Types

[](AshAuthentication.Strategy.html#t:action/0)

# action()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L27)

```
@type action() :: atom()
```

The name of an individual action supported by the strategy.

This maybe not be the action name on the underlying resource, which may be generated, but the name that the strategy itself calls the action.

[](AshAuthentication.Strategy.html#t:http_method/0)

# http\_method()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L36)

```
@type http_method() ::
  :get | :head | :post | :put | :delete | :connect | :options | :trace | :patch
```

[](AshAuthentication.Strategy.html#t:path/0)

# path()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L12)

```
@type path() :: String.t()
```

A path to match in web requests

[](AshAuthentication.Strategy.html#t:phase/0)

# phase()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L19)

```
@type phase() :: atom()
```

The "phase" of the request.

Usually `:request` or `:callback` but can be any atom.

[](AshAuthentication.Strategy.html#t:route/0)

# route()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L34)

```
@type route() :: {path(), phase()}
```

An individual route.

Eg: `{"/user/password/sign_in", :sign_in}`

[](AshAuthentication.Strategy.html#t:t/0)

# t()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L1)

```
@type t() :: term()
```

All the types that implement this protocol.

# [](AshAuthentication.Strategy.html#functions)Functions

[](AshAuthentication.Strategy.html#action/4)

# action(strategy, action\_name, params, options \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L127)

```
@spec action(t(), action(), params :: map(), options :: keyword()) ::
  :ok | {:ok, Ash.Resource.record()} | {:error, any()}
```

Perform an named action.

Different strategies are likely to implement a number of different actions depending on their configuration. Calling them via this function will ensure that the context is correctly set, etc.

See [`actions/1`](AshAuthentication.Strategy.html#actions/1) for a list of actions provided by the strategy.

Any options passed to the action will be passed to the underlying [`Ash.Domain`](../ash/3.4.56/Ash.Domain.html) function.

[](AshAuthentication.Strategy.html#actions/1)

# actions(strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L70)

```
@spec actions(t()) :: [action()]
```

Return a list of actions supported by the strategy.

## [](AshAuthentication.Strategy.html#actions/1-example)Example

```
iex> strategy = Info.strategy!(Example.User, :password)
...> actions(strategy)
[:sign_in_with_token, :register, :sign_in, :reset_request, :reset]
```

[](AshAuthentication.Strategy.html#method_for_phase/2)

# method\_for\_phase(t, phase)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L102)

```
@spec method_for_phase(t(), phase()) :: http_method()
```

Return the HTTP method for a phase.

## [](AshAuthentication.Strategy.html#method_for_phase/2-example)Example

```
iex> strategy = Info.strategy!(Example.User, :oauth2)
...> method_for_phase(strategy, :request)
:get
```

[](AshAuthentication.Strategy.html#name/1)

# name(strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L46)

```
@spec name(t()) :: atom()
```

The "short name" of the strategy, used for genererating routes, etc.

This is most likely the same value that you use for the entity's `name` argument.

[](AshAuthentication.Strategy.html#phases/1)

# phases(strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L58)

```
@spec phases(t()) :: [phase()]
```

Return a list of phases supported by the strategy.

## [](AshAuthentication.Strategy.html#phases/1-example)Example

```
iex> strategy = Info.strategy!(Example.User, :password)
...> phases(strategy)
[:sign_in_with_token, :register, :sign_in, :reset_request, :reset]
```

[](AshAuthentication.Strategy.html#plug/3)

# plug(strategy, phase, conn)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L112)

```
@spec plug(t(), phase(), Plug.Conn.t()) :: Plug.Conn.t()
```

Handle requests routed to the strategy.

Each phase will be an atom (ie the second element in the route tuple).

See [`phases/1`](AshAuthentication.Strategy.html#phases/1) for a list of phases supported by the strategy.

[](AshAuthentication.Strategy.html#routes/1)

# routes(strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L89)

```
@spec routes(t()) :: [route()]
```

Used to build the routing table to route web requests to request phases for each strategy.

## [](AshAuthentication.Strategy.html#routes/1-example)Example

```
iex> strategy = Info.strategy!(Example.User, :password)
...> routes(strategy)
[
  {"/user/password/sign_in_with_token", :sign_in_with_token},
  {"/user/password/register", :register},
  {"/user/password/sign_in", :sign_in},
  {"/user/password/reset_request", :reset_request},
  {"/user/password/reset", :reset}
]
```

[](AshAuthentication.Strategy.html#tokens_required?/1)

# tokens\_required?(strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategy.ex#L133)

```
@spec tokens_required?(t()) :: boolean()
```

Indicates that the strategy creates or consumes tokens.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/actions.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink.Actions (ash\_authentication v4.4.4)

Actions for the magic link strategy.

Provides the code interface for working with user resources for providing magic links.

# [](AshAuthentication.Strategy.MagicLink.Actions.html#summary)Summary

## [Functions](AshAuthentication.Strategy.MagicLink.Actions.html#functions)

[request(strategy, params, options)](AshAuthentication.Strategy.MagicLink.Actions.html#request/3)

Request a magic link for a user.

[sign\_in(strategy, params, options)](AshAuthentication.Strategy.MagicLink.Actions.html#sign_in/3)

Attempt to sign a user in via magic link.

# [](AshAuthentication.Strategy.MagicLink.Actions.html#functions)Functions

[](AshAuthentication.Strategy.MagicLink.Actions.html#request/3)

# request(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/actions.ex#L17)

```
@spec request(AshAuthentication.Strategy.MagicLink.t(), map(), keyword()) ::
  :ok | {:error, any()}
```

Request a magic link for a user.

[](AshAuthentication.Strategy.MagicLink.Actions.html#sign_in/3)

# sign\_in(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/actions.ex#L56)

```
@spec sign_in(AshAuthentication.Strategy.MagicLink.t(), map(), keyword()) ::
  {:ok, Ash.Resource.record()}
  | {:error, AshAuthentication.Errors.AuthenticationFailed.t()}
```

Attempt to sign a user in via magic link.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink (ash\_authentication v4.4.4)

Strategy for authentication using a magic link.

In order to use magic link authentication your resource needs to meet the following minimum requirements:

1. Have a primary key.
2. A uniquely constrained identity field (eg `username` or `email`)
3. Have tokens enabled.

There are other options documented in the DSL.

### [](AshAuthentication.Strategy.MagicLink.html#module-example)Example

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  authentication do
    strategies do
      magic_link do
        identity_field :email
        sender fn user_or_email, token, _opts ->
          # will be a user if the token relates to an existing user
          # will be an email if there is no matching user (such as during sign up)
          # opts will contain the `tenant` key, use this if you need to alter the link based
          # on the tenant that requested the token
          MyApp.Emails.deliver_magic_link(user_or_email, token)
        end
      end
    end
  end

  identities do
    identity :unique_email, [:email]
  end
end
```

## [](AshAuthentication.Strategy.MagicLink.html#module-tenancy)Tenancy

Note that the tenant is provided to the sender in the `opts` key. Use this if you need to modify the url (i.e `tenant.app.com`) based on the tenant that requested the token.

## [](AshAuthentication.Strategy.MagicLink.html#module-actions)Actions

By default the magic link strategy will automatically generate the request and sign-in actions for you, however you're free to define them yourself. If you do, then the action will be validated to ensure that all the needed configuration is present.

If you wish to work with the actions directly from your code you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](AshAuthentication.Strategy.MagicLink.html#module-examples)Examples

Requesting that a magic link token is sent for a user:

```
iex> strategy = Info.strategy!(Example.User, :magic_link)
...> user = build_user()
...> Strategy.action(strategy, :request, %{"username" => user.username})
:ok
```

Signing in using a magic link token:

```
...> {:ok, token} = MagicLink.request_token_for(strategy, user)
...> {:ok, signed_in_user} = Strategy.action(strategy, :sign_in, %{"token" => token})
...> signed_in_user.id == user
true
```

## [](AshAuthentication.Strategy.MagicLink.html#module-plugs)Plugs

The magic link strategy provides plug endpoints for both request and sign-in actions.

If you wish to work with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](AshAuthentication.Strategy.MagicLink.html#module-examples-1)Examples:

Dispatching to plugs directly:

```
iex> strategy = Info.strategy!(Example.User, :magic_link)
...> user = build_user()
...> conn = conn(:post, "/user/magic_link/request", %{"user" => %{"username" => user.username}})
...> conn = Strategy.plug(strategy, :request, conn)
...> {_conn, {:ok, nil}} = Plug.Helpers.get_authentication_result(conn)

...> {:ok, token} = MagicLink.request_token_for(strategy, user)
...> conn = conn(:get, "/user/magic_link", %{"token" => token})
...> conn = Strategy.plug(strategy, :sign_in, conn)
...> {_conn, {:ok, signed_in_user}} = Plug.Helpers.get_authentication_result(conn)
...> signed_in_user.id == user.id
true
```

See the [Magic Link Tutorial](magic-links.html) for more information.

# [](AshAuthentication.Strategy.MagicLink.html#summary)Summary

## [Types](AshAuthentication.Strategy.MagicLink.html#types)

[t()](AshAuthentication.Strategy.MagicLink.html#t:t/0)

## [Functions](AshAuthentication.Strategy.MagicLink.html#functions)

[request\_token\_for(strategy, user)](AshAuthentication.Strategy.MagicLink.html#request_token_for/2)

Generate a magic link token for a user.

[request\_token\_for\_identity(strategy, identity)](AshAuthentication.Strategy.MagicLink.html#request_token_for_identity/2)

Generate a magic link token for an identity field.

[transform(entity, dsl\_state)](AshAuthentication.Strategy.MagicLink.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.MagicLink.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.MagicLink.html#types)Types

[](AshAuthentication.Strategy.MagicLink.html#t:t/0)

# t()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link.ex#L128)

```
@type t() :: %AshAuthentication.Strategy.MagicLink{
  identity_field: atom(),
  lookup_action_name: nil,
  name: atom(),
  prevent_hijacking?: boolean(),
  registration_enabled?: boolean(),
  request_action_name: atom(),
  resource: module(),
  sender: {module(), keyword()},
  sign_in_action_name: atom(),
  single_use_token?: boolean(),
  strategy_module: module(),
  token_lifetime: pos_integer(),
  token_param_name: atom()
}
```

# [](AshAuthentication.Strategy.MagicLink.html#functions)Functions

[](AshAuthentication.Strategy.MagicLink.html#request_token_for/2)

# request\_token\_for(strategy, user)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link.ex#L153)

```
@spec request_token_for(t(), Ash.Resource.record()) :: {:ok, binary()} | :error
```

Generate a magic link token for a user.

Used by [`AshAuthentication.Strategy.MagicLink.RequestPreparation`](AshAuthentication.Strategy.MagicLink.RequestPreparation.html).

[](AshAuthentication.Strategy.MagicLink.html#request_token_for_identity/2)

# request\_token\_for\_identity(strategy, identity)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link.ex#L174)

Generate a magic link token for an identity field.

Used by [`AshAuthentication.Strategy.MagicLink.RequestPreparation`](AshAuthentication.Strategy.MagicLink.RequestPreparation.html).

[](AshAuthentication.Strategy.MagicLink.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link.ex#L144)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.MagicLink.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link.ex#L145)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/plug.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink.Plug (ash\_authentication v4.4.4)

Plugs for the magic link strategy.

Handles requests and sign-ins.

# [](AshAuthentication.Strategy.MagicLink.Plug.html#summary)Summary

## [Functions](AshAuthentication.Strategy.MagicLink.Plug.html#functions)

[request(conn, strategy)](AshAuthentication.Strategy.MagicLink.Plug.html#request/2)

Handle a request for a magic link.

[sign\_in(conn, strategy)](AshAuthentication.Strategy.MagicLink.Plug.html#sign_in/2)

Sign in via magic link.

# [](AshAuthentication.Strategy.MagicLink.Plug.html#functions)Functions

[](AshAuthentication.Strategy.MagicLink.Plug.html#request/2)

# request(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/plug.ex#L27)

```
@spec request(Plug.Conn.t(), AshAuthentication.Strategy.MagicLink.t()) ::
  Plug.Conn.t()
```

Handle a request for a magic link.

Retrieves form parameters from nested within the subject name, eg:

```
%{
  "user" => %{
    "email" => "marty@mcfly.me"
  }
}
```

[](AshAuthentication.Strategy.MagicLink.Plug.html#sign_in/2)

# sign\_in(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/plug.ex#L38)

```
@spec sign_in(Plug.Conn.t(), AshAuthentication.Strategy.MagicLink.t()) ::
  Plug.Conn.t()
```

Sign in via magic link.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/request.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink.Request (ash\_authentication v4.4.4)

Requests a magic link for the given identity field.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/request_preparation.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink.RequestPreparation (ash\_authentication v4.4.4)

Prepare a query for a magic link request.

This preparation performs three jobs, one before the query executes and two after:

1. it constraints the query to match the identity field passed to the action.
2. if there is a user returned by the query, then a. generate a magic link token and b. publish a notification.

Always returns an empty result.

# [](AshAuthentication.Strategy.MagicLink.RequestPreparation.html#summary)Summary

## [Functions](AshAuthentication.Strategy.MagicLink.RequestPreparation.html#functions)

[init(opts)](AshAuthentication.Strategy.MagicLink.RequestPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.Strategy.MagicLink.RequestPreparation.html#functions)Functions

[](AshAuthentication.Strategy.MagicLink.RequestPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/request_preparation.ex#L14)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/sign_in_change.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink.SignInChange (ash\_authentication v4.4.4)

Set up a create action for magic link sign in.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/sign_in_preparation.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink.SignInPreparation (ash\_authentication v4.4.4)

Prepare a query for sign in.

# [](AshAuthentication.Strategy.MagicLink.SignInPreparation.html#summary)Summary

## [Functions](AshAuthentication.Strategy.MagicLink.SignInPreparation.html#functions)

[init(opts)](AshAuthentication.Strategy.MagicLink.SignInPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.Strategy.MagicLink.SignInPreparation.html#functions)Functions

[](AshAuthentication.Strategy.MagicLink.SignInPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/sign_in_preparation.ex#L6)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/transformer.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink.Transformer (ash\_authentication v4.4.4)

DSL transformer for magic links.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/magic_link/verifier.ex#L1 "View Source") AshAuthentication.Strategy.MagicLink.Verifier (ash\_authentication v4.4.4)

DSL verifier for magic links.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/actions.ex#L1 "View Source") AshAuthentication.Strategy.OAuth2.Actions (ash\_authentication v4.4.4)

Actions for the oauth2 strategy.

Provides the code interface for working with resources via an OAuth2 strategy.

# [](AshAuthentication.Strategy.OAuth2.Actions.html#summary)Summary

## [Functions](AshAuthentication.Strategy.OAuth2.Actions.html#functions)

[register(strategy, params, options)](AshAuthentication.Strategy.OAuth2.Actions.html#register/3)

Attempt to register a new user.

[sign\_in(strategy, params, options)](AshAuthentication.Strategy.OAuth2.Actions.html#sign_in/3)

Attempt to sign in a user.

# [](AshAuthentication.Strategy.OAuth2.Actions.html#functions)Functions

[](AshAuthentication.Strategy.OAuth2.Actions.html#register/3)

# register(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/actions.ex#L94)

```
@spec register(AshAuthentication.Strategy.OAuth2.t(), map(), keyword()) ::
  {:ok, Ash.Resource.record()} | {:error, any()}
```

Attempt to register a new user.

[](AshAuthentication.Strategy.OAuth2.Actions.html#sign_in/3)

# sign\_in(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/actions.ex#L15)

```
@spec sign_in(AshAuthentication.Strategy.OAuth2.t(), map(), keyword()) ::
  {:ok, Ash.Resource.record()} | {:error, any()}
```

Attempt to sign in a user.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/dsl.ex#L1 "View Source") AshAuthentication.Strategy.OAuth2.Dsl (ash\_authentication v4.4.4)

Defines the Spark DSL entity for this strategy.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2.ex#L1 "View Source") AshAuthentication.Strategy.OAuth2 (ash\_authentication v4.4.4)

Strategy for authenticating using any OAuth 2.0 server as the source of truth.

This authentication strategy provides registration and sign-in for users using a remote [OAuth 2.0](https://oauth.net/2/) server as the source of truth. You will be required to provide either a "register" or a "sign-in" action depending on your configuration, which the strategy will attempt to validate for common misconfigurations.

This strategy wraps the excellent [`assent`](https://hex.pm/packages/assent) package, which provides OAuth 2.0 capabilities.

In order to use OAuth 2.0 authentication on your resource, it needs to meet the following minimum criteria:

1. Have a primary key.
2. Provide a strategy-specific action, either register or sign-in.
3. Provide configuration for OAuth2 destinations, secrets, etc.

### [](AshAuthentication.Strategy.OAuth2.html#module-example)Example:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  authentication do
    strategies do
      oauth2 :example do
        client_id "OAuth Client ID"
        redirect_uri "https://my.app/"
        client_secret "My Super Secret Secret"
        site "https://auth.example.com/"
      end
    end
  end
end
```

## [](AshAuthentication.Strategy.OAuth2.html#module-secrets-and-runtime-configuration)Secrets and runtime configuration

In order to use OAuth 2.0 you need to provide a varying number of secrets and other configuration which may change based on runtime environment. The [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour is provided to accommodate this. This allows you to provide configuration either directly on the resource (ie as a string), as an anonymous function, or as a module.

### [](AshAuthentication.Strategy.OAuth2.html#module-warning)Warning

We **strongly** urge you not to share actual secrets in your code or repository.

### [](AshAuthentication.Strategy.OAuth2.html#module-examples)Examples:

Providing configuration as an anonymous function:

```
oauth2 do
  client_secret fn _path, resource ->
    Application.fetch_env(:my_app, resource, :oauth2_client_secret)
  end
end
```

Providing configuration as a module:

```
defmodule MyApp.Secrets do
  use AshAuthentication.Secret

  def secret_for([:authentication, :strategies, :example, :client_secret], MyApp.User, _opts), do: Application.fetch_env(:my_app, :oauth2_client_secret)
end

# and in your strategies:

oauth2 :example do
  client_secret MyApp.Secrets
end
```

## [](AshAuthentication.Strategy.OAuth2.html#module-user-identities)User identities

Because your users can be signed in via multiple providers at once, you can specify an `identity_resource` in the DSL configuration which points to a seperate Ash resource which has the [`AshAuthentication.UserIdentity`](AshAuthentication.UserIdentity.html) extension present. This resource will be used to store details of the providers in use by each user and a relationship will be added to the user resource.

Setting the `identity_resource` will cause extra validations to be applied to your resource so that changes are tracked correctly on sign-in or registration.

## [](AshAuthentication.Strategy.OAuth2.html#module-actions)Actions

When using an OAuth 2.0 provider you need to declare either a "register" or "sign-in" action. The reason for this is that it's not possible for us to know ahead of time how you want to manage the link between your user resources and the "user info" provided by the OAuth server.

Both actions receive the following two arguments:

1. `user_info` - a map with string keys containing the [OpenID Successful UserInfo response](https://openid.net/specs/openid-connect-core-1_0.html#UserInfoResponse). Usually this will be used to populate your email, nickname or other identifying field.
2. `oauth_tokens` a map with string keys containing the [OpenID Successful Token response](https://openid.net/specs/openid-connect-core-1_0.html#TokenResponse) (or similar).

The actions themselves can be interacted with directly via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol, but you are more likely to interact with them via the web/plugs.

### [](AshAuthentication.Strategy.OAuth2.html#module-sign-in)Sign-in

The sign-in action is called when a successful OAuth2 callback is received. You should use it to constrain the query to the correct user based on the arguments provided.

This action is only needed when the `registration_enabled?` DSL settings is set to `false`.

### [](AshAuthentication.Strategy.OAuth2.html#module-registration)Registration

The register action is a little more complicated than the sign-in action, because we cannot tell the difference between a new user and a returning user (they all use the same OAuth flow). In order to handle this your register action must be defined as an upsert with a configured `upsert_identity` (see example below).

### [](AshAuthentication.Strategy.OAuth2.html#module-examples-1)Examples:

Providing sign-in to users who already exist in the database (and by extension rejecting new users):

```
defmodule MyApp.Accounts.User do
  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  actions do
    read :sign_in_with_example do
      argument :user_info, :map, allow_nil?: false
      argument :oauth_tokens, :map, allow_nil?: false
      prepare AshAuthentication.Strategy.OAuth2.SignInPreparation

      filter expr(email == get_path(^arg(:user_info), [:email]))
    end
  end

  authentication do
    strategies do
      oauth2 :example do
        registration_enabled? false
      end
    end
  end
end
```

Providing registration or sign-in to all comers:

```
defmodule MyApp.Accounts.User do
  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  actions do
    create :register_with_oauth2 do
      argument :user_info, :map, allow_nil?: false
      argument :oauth_tokens, :map, allow_nil?: false
      upsert? true
      upsert_identity :email

      change AshAuthentication.GenerateTokenChange
      change fn changeset, _ctx ->
        user_info = Ash.Changeset.get_argument(changeset, :user_info)

        changeset
        |> Ash.Changeset.change_attribute(:email, user_info["email"])
      end
    end
  end

  authentication do
    strategies do
      oauth2 :example do
      end
    end
  end
end
```

## [](AshAuthentication.Strategy.OAuth2.html#module-plugs)Plugs

OAuth 2.0 is (usually) a browser-based flow. This means that you're most likely to interact with this strategy via it's plugs. There are two phases to authentication with OAuth 2.0:

1. The request phase, where the user's browser is redirected to the remote authentication provider for authentication.
2. The callback phase, where the provider redirects the user back to your app to create a local database record, session, etc.

# [](AshAuthentication.Strategy.OAuth2.html#summary)Summary

## [Types](AshAuthentication.Strategy.OAuth2.html#types)

[secret()](AshAuthentication.Strategy.OAuth2.html#t:secret/0)

[secret\_list()](AshAuthentication.Strategy.OAuth2.html#t:secret_list/0)

[t()](AshAuthentication.Strategy.OAuth2.html#t:t/0)

## [Functions](AshAuthentication.Strategy.OAuth2.html#functions)

[transform(entity, dsl\_state)](AshAuthentication.Strategy.OAuth2.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.OAuth2.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.OAuth2.html#types)Types

[](AshAuthentication.Strategy.OAuth2.html#t:secret/0)

# secret()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2.ex#L264)

```
@type secret() :: nil | String.t() | {module(), keyword()}
```

[](AshAuthentication.Strategy.OAuth2.html#t:secret_list/0)

# secret\_list()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2.ex#L266)

```
@type secret_list() :: nil | [any()] | {module(), keyword()}
```

[](AshAuthentication.Strategy.OAuth2.html#t:t/0)

# t()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2.ex#L268)

```
@type t() :: %AshAuthentication.Strategy.OAuth2{
  assent_strategy: module(),
  auth_method:
    nil
    | :client_secret_basic
    | :client_secret_post
    | :client_secret_jwt
    | :private_key_jwt,
  authorization_params: keyword(),
  authorize_url: secret(),
  base_url: secret(),
  client_authentication_method: nil | atom(),
  client_id: secret(),
  client_secret: secret(),
  icon: nil | atom(),
  id_token_signed_response_alg: nil | binary(),
  id_token_ttl_seconds: nil | pos_integer(),
  identity_relationship_name: atom(),
  identity_relationship_user_id_attribute: atom(),
  identity_resource: module() | false,
  name: atom(),
  nonce: boolean() | secret(),
  openid_configuration: nil | map(),
  openid_configuration_uri: nil | binary(),
  prevent_hijacking?: boolean(),
  private_key: secret(),
  private_key_id: secret(),
  private_key_path: secret(),
  provider: atom(),
  redirect_uri: secret(),
  register_action_name: atom(),
  registration_enabled?: boolean(),
  resource: module(),
  sign_in_action_name: atom(),
  site: secret(),
  strategy_module: module(),
  team_id: secret(),
  token_url: secret(),
  trusted_audiences: secret_list(),
  user_url: secret()
}
```

# [](AshAuthentication.Strategy.OAuth2.html#functions)Functions

[](AshAuthentication.Strategy.OAuth2.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2.ex#L312)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.OAuth2.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2.ex#L313)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/identity_change.ex#L1 "View Source") AshAuthentication.Strategy.OAuth2.IdentityChange (ash\_authentication v4.4.4)

Updates the identity resource when a user is registered.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/plug.ex#L1 "View Source") AshAuthentication.Strategy.OAuth2.Plug (ash\_authentication v4.4.4)

Handlers for incoming OAuth2 HTTP requests.

# [](AshAuthentication.Strategy.OAuth2.Plug.html#summary)Summary

## [Functions](AshAuthentication.Strategy.OAuth2.Plug.html#functions)

[callback(conn, strategy)](AshAuthentication.Strategy.OAuth2.Plug.html#callback/2)

Perform the callback phase of OAuth2.

[request(conn, strategy)](AshAuthentication.Strategy.OAuth2.Plug.html#request/2)

Perform the request phase of OAuth2.

# [](AshAuthentication.Strategy.OAuth2.Plug.html#functions)Functions

[](AshAuthentication.Strategy.OAuth2.Plug.html#callback/2)

# callback(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/plug.ex#L54)

```
@spec callback(Plug.Conn.t(), AshAuthentication.Strategy.OAuth2.t()) :: Plug.Conn.t()
```

Perform the callback phase of OAuth2.

Responds to a user being redirected back from the remote authentication provider, and validates the passed options, ultimately registering or signing-in a user if the authentication was successful.

[](AshAuthentication.Strategy.OAuth2.Plug.html#request/2)

# request(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/plug.ex#L31)

```
@spec request(Plug.Conn.t(), AshAuthentication.Strategy.OAuth2.t()) :: Plug.Conn.t()
```

Perform the request phase of OAuth2.

Builds a redirection URL based on the provider configuration and redirects the user to that endpoint.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/sign_in_preparation.ex#L1 "View Source") AshAuthentication.Strategy.OAuth2.SignInPreparation (ash\_authentication v4.4.4)

Prepare a query for sign in

Performs three main tasks:

1. Ensures that there is only one matching user record returned, otherwise returns an authentication failed error.
2. Generates an access token if token generation is enabled.
3. Updates the user identity resource, if one is enabled.

# [](AshAuthentication.Strategy.OAuth2.SignInPreparation.html#summary)Summary

## [Functions](AshAuthentication.Strategy.OAuth2.SignInPreparation.html#functions)

[init(opts)](AshAuthentication.Strategy.OAuth2.SignInPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.Strategy.OAuth2.SignInPreparation.html#functions)Functions

[](AshAuthentication.Strategy.OAuth2.SignInPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/sign_in_preparation.ex#L12)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/transformer.ex#L1 "View Source") AshAuthentication.Strategy.OAuth2.Transformer (ash\_authentication v4.4.4)

DSL transformer for oauth2 strategies.

Iterates through any oauth2 strategies and ensures that all the correct actions and settings are in place.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oauth2/verifier.ex#L1 "View Source") AshAuthentication.Strategy.OAuth2.Verifier (ash\_authentication v4.4.4)

DSL verifier for oauth2 strategies.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oidc.ex#L1 "View Source") AshAuthentication.Strategy.Oidc (ash\_authentication v4.4.4)

Strategy for authentication using an [OpenID Connect](https://openid.net/connect/) compatible server as the source of truth.

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html) and [`assent`](https://hex.pm/packages/assent).

In order to use OIDC you need to provide the following minimum configuration:

- `client_id` - The client id, required
- `site` - The OIDC issuer, required
- `openid_configuration_uri` - The URI for OpenID Provider, optional, defaults to `/.well-known/openid-configuration`
- `client_authentication_method` - The Client Authentication method to use, optional, defaults to `client_secret_basic`
- `client_secret` - The client secret, required if `:client_authentication_method` is `:client_secret_basic`, `:client_secret_post`, or `:client_secret_jwt`
- `openid_configuration` - The OpenID configuration, optional, the configuration will be fetched from `:openid_configuration_uri` if this is not defined
- `id_token_signed_response_alg` - The `id_token_signed_response_alg` parameter sent by the Client during Registration, defaults to `RS256`
- `id_token_ttl_seconds` - The number of seconds from `iat` that an ID Token will be considered valid, optional, defaults to nil
- `nonce` - The nonce to use for authorization request, optional, MUST be session based and unguessable.

## [](AshAuthentication.Strategy.Oidc.html#module-nonce)Nonce

`nonce` can be set in the provider config. The `nonce` will be returned in the `session_params` along with `state`. You can use this to store the value in the current session e.g. a httpOnly session cookie.

A random value generator can look like this:

```
16
|> :crypto.strong_rand_bytes()
|> Base.encode64(padding: false)
```

AshAuthentication will dynamically generate one for the session if `nonce` is set to `true`.

## [](AshAuthentication.Strategy.Oidc.html#module-more-documentation)More documentation:

- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

# [](AshAuthentication.Strategy.Oidc.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Oidc.html#functions)

[transform(entity, dsl\_state)](AshAuthentication.Strategy.Oidc.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.Oidc.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.Oidc.html#functions)Functions

[](AshAuthentication.Strategy.Oidc.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oidc.ex#L59)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.Oidc.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oidc.ex#L60)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oidc/nonce_generator.ex#L1 "View Source") AshAuthentication.Strategy.Oidc.NonceGenerator (ash\_authentication v4.4.4)

An implmentation of [`AshAuthentication.Secret`](AshAuthentication.Secret.html) that generates nonces for OpenID Connect strategies.

Defaults to `16` bytes of random data. You can change this by setting the `byte_size` option in your DSL:

```
oidc do
  nonce {AshAuthentication.NonceGenerator, byte_size: 32}
  # ...
end
```

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oidc/transformer.ex#L1 "View Source") AshAuthentication.Strategy.Oidc.Transformer (ash\_authentication v4.4.4)

DSL transformer for oidc strategies.

Adds a nonce generator to the strategy if `nonce` is set to `true`. Delegates to the default OAuth2 transformer.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/oidc/verifier.ex#L1 "View Source") AshAuthentication.Strategy.Oidc.Verifier (ash\_authentication v4.4.4)

DSL verifier for OpenID Connect strategy.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/actions.ex#L1 "View Source") AshAuthentication.Strategy.Password.Actions (ash\_authentication v4.4.4)

Actions for the password strategy

Provides the code interface for working with resources via a password strategy.

# [](AshAuthentication.Strategy.Password.Actions.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Password.Actions.html#functions)

[register(strategy, params, options)](AshAuthentication.Strategy.Password.Actions.html#register/3)

Attempt to register a new user.

[reset(strategy, params, options)](AshAuthentication.Strategy.Password.Actions.html#reset/3)

Attempt to change a user's password using a reset token.

[reset\_request(strategy, params, options)](AshAuthentication.Strategy.Password.Actions.html#reset_request/3)

Request a password reset.

[sign\_in(strategy, params, options)](AshAuthentication.Strategy.Password.Actions.html#sign_in/3)

Attempt to sign in a user.

[sign\_in\_with\_token(strategy, params, options)](AshAuthentication.Strategy.Password.Actions.html#sign_in_with_token/3)

Attempt to sign in a previously-authenticated user with a short-lived sign in token.

# [](AshAuthentication.Strategy.Password.Actions.html#functions)Functions

[](AshAuthentication.Strategy.Password.Actions.html#register/3)

# register(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/actions.ex#L180)

```
@spec register(AshAuthentication.Strategy.Password.t(), map(), keyword()) ::
  {:ok, Ash.Resource.record()} | {:error, any()}
```

Attempt to register a new user.

[](AshAuthentication.Strategy.Password.Actions.html#reset/3)

# reset(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/actions.ex#L276)

```
@spec reset(AshAuthentication.Strategy.Password.t(), map(), keyword()) ::
  {:ok, Ash.Resource.record()} | {:error, any()}
```

Attempt to change a user's password using a reset token.

[](AshAuthentication.Strategy.Password.Actions.html#reset_request/3)

# reset\_request(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/actions.ex#L214)

```
@spec reset_request(AshAuthentication.Strategy.Password.t(), map(), keyword()) ::
  :ok | {:error, any()}
```

Request a password reset.

[](AshAuthentication.Strategy.Password.Actions.html#sign_in/3)

# sign\_in(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/actions.ex#L17)

```
@spec sign_in(AshAuthentication.Strategy.Password.t(), map(), keyword()) ::
  {:ok, Ash.Resource.record()}
  | {:error, AshAuthentication.Errors.AuthenticationFailed.t()}
```

Attempt to sign in a user.

[](AshAuthentication.Strategy.Password.Actions.html#sign_in_with_token/3)

# sign\_in\_with\_token(strategy, params, options)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/actions.ex#L133)

```
@spec sign_in_with_token(AshAuthentication.Strategy.Password.t(), map(), keyword()) ::
  {:ok, Ash.Resource.record()} | {:error, any()}
```

Attempt to sign in a previously-authenticated user with a short-lived sign in token.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/dsl.ex#L1 "View Source") AshAuthentication.Strategy.Password.Dsl (ash\_authentication v4.4.4)

Defines the Spark DSL entity for this strategy.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/hash_password_change.ex#L1 "View Source") AshAuthentication.Strategy.Password.HashPasswordChange (ash\_authentication v4.4.4)

Set the hash based on the password input.

Uses the configured [`AshAuthentication.HashProvider`](AshAuthentication.HashProvider.html) to generate a hash of the user's password input and store it in the changeset.

You can use this change in your actions where you want to change the user's password. If you're not using one of the actions generated by the password strategy then you'll need to manually pass the strategy name in the changeset context. Eg:

```
Changeset.new(user, %{})
|> Changeset.set_context(%{strategy_name: :password})
|> Changeset.for_update(:update, params)
|> Accounts.update()
```

or by adding it statically to your action definition:

```
update :change_password do
  change set_context(%{strategy_name: :password})
  change AshAuthentication.Strategy.Password.HashPasswordChange
end
```

or by adding it as an option to the change definition:

```
update :change_password do
  change {AshAuthentication.Strategy.Password.HashPasswordChange, strategy_name: :password}
end
```

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password.ex#L1 "View Source") AshAuthentication.Strategy.Password (ash\_authentication v4.4.4)

Strategy for authenticating using local resources as the source of truth.

In order to use password authentication your resource needs to meet the following minimum requirements:

1. Have a primary key.
2. A uniquely constrained identity field (eg `username` or `email`).
3. A sensitive string field within which to store the hashed password.

There are other options documented in the DSL.

### [](AshAuthentication.Strategy.Password.html#module-example)Example:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
    attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
  end

  authentication do
    strategies do
      password :password do
        identity_field :email
        hashed_password_field :hashed_password
      end
    end
  end

  identities do
    identity :unique_email, [:email]
  end
end
```

## [](AshAuthentication.Strategy.Password.html#module-actions)Actions

By default the password strategy will automatically generate the register, sign-in, reset-request and reset actions for you, however you're free to define them yourself. If you do, then the action will be validated to ensure that all the needed configuration is present.

If you wish to work with the actions directly from your code you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](AshAuthentication.Strategy.Password.html#module-examples)Examples:

Interacting with the actions directly:

```
iex> strategy = Info.strategy!(Example.User, :password)
...> {:ok, marty} = Strategy.action(strategy, :register, %{"username" => "marty", "password" => "outatime1985", "password_confirmation" => "outatime1985"})
...> marty.username |> to_string()
"marty"

...> {:ok, user} = Strategy.action(strategy, :sign_in, %{"username" => "marty", "password" => "outatime1985"})
...> user.username |> to_string()
"marty"
```

## [](AshAuthentication.Strategy.Password.html#module-plugs)Plugs

The password strategy provides plug endpoints for all four actions, although only sign-in and register will be reported by `Strategy.routes/1` if the strategy is not configured as resettable.

If you wish to work with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](AshAuthentication.Strategy.Password.html#module-examples-1)Examples:

Dispatching to plugs directly:

```
iex> strategy = Info.strategy!(Example.User, :password)
...> conn = conn(:post, "/user/password/register", %{"user" => %{"username" => "marty", "password" => "outatime1985", "password_confirmation" => "outatime1985"}})
...> conn = Strategy.plug(strategy, :register, conn)
...> {_conn, {:ok, marty}} = Plug.Helpers.get_authentication_result(conn)
...> marty.username |> to_string()
"marty"

...> conn = conn(:post, "/user/password/reset_request", %{"user" => %{"username" => "marty"}})
...> conn = Strategy.plug(strategy, :reset_request, conn)
...> {_conn, :ok} = Plug.Helpers.get_authentication_result(conn)
```

## [](AshAuthentication.Strategy.Password.html#module-testing)Testing

See the [Testing guide](testing.html) for tips on testing resources using this strategy.

# [](AshAuthentication.Strategy.Password.html#summary)Summary

## [Types](AshAuthentication.Strategy.Password.html#types)

[t()](AshAuthentication.Strategy.Password.html#t:t/0)

## [Functions](AshAuthentication.Strategy.Password.html#functions)

[reset\_token\_for(strategy, user)](AshAuthentication.Strategy.Password.html#reset_token_for/2)

Generate a reset token for a user.

[transform(entity, dsl\_state)](AshAuthentication.Strategy.Password.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.Password.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.Password.html#types)Types

[](AshAuthentication.Strategy.Password.html#t:t/0)

# t()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password.ex#L131)

```
@type t() :: %AshAuthentication.Strategy.Password{
  confirmation_required?: boolean(),
  hash_provider: module(),
  hashed_password_field: atom(),
  identity_field: atom(),
  name: atom(),
  password_confirmation_field: atom(),
  password_field: atom(),
  provider: atom(),
  register_action_accept: [atom()],
  register_action_name: atom(),
  registration_enabled?: boolean(),
  require_confirmed_with: :atom | nil,
  resettable: nil | AshAuthentication.Strategy.Password.Resettable.t(),
  resource: module(),
  sign_in_action_name: atom(),
  sign_in_enabled?: boolean(),
  sign_in_token_lifetime: pos_integer(),
  sign_in_tokens_enabled?: boolean(),
  sign_in_with_token_action_name: atom(),
  strategy_module: AshAuthentication.Strategy.Password
}
```

# [](AshAuthentication.Strategy.Password.html#functions)Functions

[](AshAuthentication.Strategy.Password.html#reset_token_for/2)

# reset\_token\_for(strategy, user)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password.ex#L165)

```
@spec reset_token_for(t(), Ash.Resource.record()) :: {:ok, String.t()} | :error
```

Generate a reset token for a user.

Used by [`AshAuthentication.Strategy.Password.RequestPasswordResetPreparation`](AshAuthentication.Strategy.Password.RequestPasswordResetPreparation.html).

[](AshAuthentication.Strategy.Password.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password.ex#L156)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.Password.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password.ex#L157)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/password_confirmation_validation.ex#L1 "View Source") AshAuthentication.Strategy.Password.PasswordConfirmationValidation (ash\_authentication v4.4.4)

Validate that the password and password confirmation match.

This check is only performed when the `confirmation_required?` DSL option is set to `true`.

You can use this validation in your own actions where you want to validate that the password and the password confirmation arguments match. If you're not using one of the actions generated by the password strategy then you'll need to manually pass the strategy name in the changeset context. Eg:

```
Changeset.new(user, %{})
|> Changeset.set_context(%{strategy_name: :password})
|> Changeset.for_update(:change_password, params)
|> Accounts.update()
```

or by adding it statically in your action definition:

```
update :change_password do
  change set_context(%{strategy_name: :password})
  change AshAuthentication.Strategy.Password.HashPasswordChange
end
```

# [](AshAuthentication.Strategy.Password.PasswordConfirmationValidation.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Password.PasswordConfirmationValidation.html#functions)

[validate(changeset, options, context)](AshAuthentication.Strategy.Password.PasswordConfirmationValidation.html#validate/3)

Validates that the password and password confirmation fields contain equivalent values - if confirmation is required.

# [](AshAuthentication.Strategy.Password.PasswordConfirmationValidation.html#functions)Functions

[](AshAuthentication.Strategy.Password.PasswordConfirmationValidation.html#validate/3)

# validate(changeset, options, context)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/password_confirmation_validation.ex#L48)

```
@spec validate(Ash.Changeset.t(), keyword(), Ash.Resource.Validation.Context.t()) ::
  :ok | {:error, String.t() | Exception.t()}
```

Validates that the password and password confirmation fields contain equivalent values - if confirmation is required.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/password_validation.ex#L1 "View Source") AshAuthentication.Strategy.Password.PasswordValidation (ash\_authentication v4.4.4)

A convenience validation that checks that the password argument against the hashed password stored in the record.

You can use this validation in your changes where you want the user to enter their current password before being allowed to make a change (eg in a password change flow).

## [](AshAuthentication.Strategy.Password.PasswordValidation.html#module-options)Options:

You can provide these options either in the DSL options, or in the changeset context.

- `strategy_name` - the name of the authentication strategy to use. Required.
- `password_argument` - the name of the argument to check for the current password. If missing this will default to the `password_field` value configured on the strategy.

## [](AshAuthentication.Strategy.Password.PasswordValidation.html#module-examples)Examples

```
defmodule MyApp.Accounts.User do
  # ...

  actions do
    update :change_password do
      accept []
      argument :current_password, :string, sensitive?: true, allow_nil?: false
      argument :password, :string, sensitive?: true, allow_nil?: false
      argument :password_confirmation, :string, sensitive?: true, allow_nil?: false

      validate confirm(:password, :password_confirmation)
      validate {AshAuthentication.Strategy.Password.PasswordValidation, strategy_name: :password, password_argument: :current_password}

      change {AshAuthentication.Strategy.Password.HashPasswordChange, strategy_name: :password}
    end
  end

  # ...
end
```

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/plug.ex#L1 "View Source") AshAuthentication.Strategy.Password.Plug (ash\_authentication v4.4.4)

Plugs for the password strategy.

Handles registration, sign-in and password resets.

# [](AshAuthentication.Strategy.Password.Plug.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Password.Plug.html#functions)

[register(conn, strategy)](AshAuthentication.Strategy.Password.Plug.html#register/2)

Handle a registration request

[reset(conn, strategy)](AshAuthentication.Strategy.Password.Plug.html#reset/2)

Handle a reset request

[reset\_request(conn, strategy)](AshAuthentication.Strategy.Password.Plug.html#reset_request/2)

Handle a reset request request

[sign\_in(conn, strategy)](AshAuthentication.Strategy.Password.Plug.html#sign_in/2)

Handle a sign-in request

[sign\_in\_with\_token(conn, strategy)](AshAuthentication.Strategy.Password.Plug.html#sign_in_with_token/2)

Handle a request to validate a sign in token

# [](AshAuthentication.Strategy.Password.Plug.html#functions)Functions

[](AshAuthentication.Strategy.Password.Plug.html#register/2)

# register(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/plug.ex#L15)

```
@spec register(Plug.Conn.t(), AshAuthentication.Strategy.Password.t()) ::
  Plug.Conn.t()
```

Handle a registration request

[](AshAuthentication.Strategy.Password.Plug.html#reset/2)

# reset(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/plug.ex#L51)

```
@spec reset(Plug.Conn.t(), AshAuthentication.Strategy.Password.t()) :: Plug.Conn.t()
```

Handle a reset request

[](AshAuthentication.Strategy.Password.Plug.html#reset_request/2)

# reset\_request(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/plug.ex#L42)

```
@spec reset_request(Plug.Conn.t(), AshAuthentication.Strategy.Password.t()) ::
  Plug.Conn.t()
```

Handle a reset request request

[](AshAuthentication.Strategy.Password.Plug.html#sign_in/2)

# sign\_in(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/plug.ex#L24)

```
@spec sign_in(Plug.Conn.t(), AshAuthentication.Strategy.Password.t()) :: Plug.Conn.t()
```

Handle a sign-in request

[](AshAuthentication.Strategy.Password.Plug.html#sign_in_with_token/2)

# sign\_in\_with\_token(conn, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/plug.ex#L33)

```
@spec sign_in_with_token(Plug.Conn.t(), AshAuthentication.Strategy.Password.t()) ::
  Plug.Conn.t()
```

Handle a request to validate a sign in token

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/request_password_reset.ex#L1 "View Source") AshAuthentication.Strategy.Password.RequestPasswordReset (ash\_authentication v4.4.4)

Requests a password reset.

This implementation performs three jobs:

1. looks up the user with the given action and field
2. if a matching user is found: a. a reset token is generated b. and the password reset sender is invoked

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/request_password_reset_preparation.ex#L1 "View Source") AshAuthentication.Strategy.Password.RequestPasswordResetPreparation (ash\_authentication v4.4.4)

Prepare a query for a password reset request.

This preparation performs three jobs, one before the query executes and two after:

1. it constraints the query to match the identity field passed to the action.
2. if there is a user returned by the query, then a. generate a reset token and b. publish a notification.

Always returns an empty result.

# [](AshAuthentication.Strategy.Password.RequestPasswordResetPreparation.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Password.RequestPasswordResetPreparation.html#functions)

[init(opts)](AshAuthentication.Strategy.Password.RequestPasswordResetPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.Strategy.Password.RequestPasswordResetPreparation.html#functions)Functions

[](AshAuthentication.Strategy.Password.RequestPasswordResetPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/request_password_reset_preparation.ex#L14)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/resettable.ex#L1 "View Source") AshAuthentication.Strategy.Password.Resettable (ash\_authentication v4.4.4)

The entity used to store password reset information.

# [](AshAuthentication.Strategy.Password.Resettable.html#summary)Summary

## [Types](AshAuthentication.Strategy.Password.Resettable.html#types)

[t()](AshAuthentication.Strategy.Password.Resettable.html#t:t/0)

# [](AshAuthentication.Strategy.Password.Resettable.html#types)Types

[](AshAuthentication.Strategy.Password.Resettable.html#t:t/0)

# t()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/resettable.ex#L11)

```
@type t() :: %AshAuthentication.Strategy.Password.Resettable{
  password_reset_action_name: atom(),
  request_password_reset_action_name: atom(),
  sender: {module(), keyword()},
  token_lifetime: hours :: pos_integer()
}
```

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/reset_token_validation.ex#L1 "View Source") AshAuthentication.Strategy.Password.ResetTokenValidation (ash\_authentication v4.4.4)

Validate that the token is a valid password reset request token.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/sign_in_preparation.ex#L1 "View Source") AshAuthentication.Strategy.Password.SignInPreparation (ash\_authentication v4.4.4)

Prepare a query for sign in

This preparation performs two jobs, one before the query executes and one after.

Firstly, it constrains the query to match the identity field passed to the action.

Secondly, it validates the supplied password using the configured hash provider, and if correct allows the record to be returned, otherwise returns an authentication failed error.

# [](AshAuthentication.Strategy.Password.SignInPreparation.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Password.SignInPreparation.html#functions)

[init(opts)](AshAuthentication.Strategy.Password.SignInPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[user\_confirmed\_if\_needed(user, strategy)](AshAuthentication.Strategy.Password.SignInPreparation.html#user_confirmed_if_needed/2)

# [](AshAuthentication.Strategy.Password.SignInPreparation.html#functions)Functions

[](AshAuthentication.Strategy.Password.SignInPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/sign_in_preparation.ex#L15)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[](AshAuthentication.Strategy.Password.SignInPreparation.html#user_confirmed_if_needed/2)

# user\_confirmed\_if\_needed(user, strategy)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/sign_in_preparation.ex#L157)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/sign_in_with_token_preparation.ex#L1 "View Source") AshAuthentication.Strategy.Password.SignInWithTokenPreparation (ash\_authentication v4.4.4)

Prepare a query for sign in via token.

This preparation first validates the token argument and extracts the subject from it and constrains the query to a matching user.

# [](AshAuthentication.Strategy.Password.SignInWithTokenPreparation.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Password.SignInWithTokenPreparation.html#functions)

[init(opts)](AshAuthentication.Strategy.Password.SignInWithTokenPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.Strategy.Password.SignInWithTokenPreparation.html#functions)Functions

[](AshAuthentication.Strategy.Password.SignInWithTokenPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/sign_in_with_token_preparation.ex#L8)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/transformer.ex#L1 "View Source") AshAuthentication.Strategy.Password.Transformer (ash\_authentication v4.4.4)

DSL transformer for the password strategy.

Iterates through any password authentication strategies and ensures that all the correct actions and settings are in place.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/password/verifier.ex#L1 "View Source") AshAuthentication.Strategy.Password.Verifier (ash\_authentication v4.4.4)

DSL verifier for the password strategy.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/slack.ex#L1 "View Source") AshAuthentication.Strategy.Slack (ash\_authentication v4.4.4)

Strategy for authenticating using [Slack](https://slack.com)

This strategy builds on-top of [`AshAuthentication.Strategy.Oidc`](AshAuthentication.Strategy.Oidc.html) and [`assent`](https://hex.pm/packages/assent).

In order to use GitHub you need to provide the following minimum configuration:

- `client_id`
- `redirect_uri`
- `client_secret`

## [](AshAuthentication.Strategy.Slack.html#module-more-documentation)More documentation:

- The [Slack Tutorial](slack.html).
- The [OIDC documentation](AshAuthentication.Strategy.Oidc.html)

# [](AshAuthentication.Strategy.Slack.html#summary)Summary

## [Functions](AshAuthentication.Strategy.Slack.html#functions)

[transform(entity, dsl\_state)](AshAuthentication.Strategy.Slack.html#transform/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[verify(strategy, dsl\_state)](AshAuthentication.Strategy.Slack.html#verify/2)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

# [](AshAuthentication.Strategy.Slack.html#functions)Functions

[](AshAuthentication.Strategy.Slack.html#transform/2)

# transform(entity, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/slack.ex#L25)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](AshAuthentication.Strategy.Custom.html#c:transform/2).

[](AshAuthentication.Strategy.Slack.html#verify/2)

# verify(strategy, dsl\_state)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/slack.ex#L26)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](AshAuthentication.Strategy.Custom.html#c:verify/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/strategies/slack/verifier.ex#L1 "View Source") AshAuthentication.Strategy.Slack.Verifier (ash\_authentication v4.4.4)

DSL verifier for Slack strategy.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/supervisor.ex#L1 "View Source") AshAuthentication.Supervisor (ash\_authentication v4.4.4)

Starts and manages any processes required by AshAuthentication.

Add to your application supervisor:

## [](AshAuthentication.Supervisor.html#module-example)Example

```
defmodule MyApp.Application do
  use Application

  def start(_type, _args) do
    children = [
      {AshAuthentication.Supervisor, otp_app: :my_app}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: MyApp.Supervisor)
  end
end
```

# [](AshAuthentication.Supervisor.html#summary)Summary

## [Functions](AshAuthentication.Supervisor.html#functions)

[child\_spec(init\_arg)](AshAuthentication.Supervisor.html#child_spec/1)

Returns a specification to start this module under a supervisor.

# [](AshAuthentication.Supervisor.html#functions)Functions

[](AshAuthentication.Supervisor.html#child_spec/1)

# child\_spec(init\_arg)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/supervisor.ex#L24)

Returns a specification to start this module under a supervisor.

See [`Supervisor`](../elixir/Supervisor.html).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/actions.ex#L1 "View Source") AshAuthentication.TokenResource.Actions (ash\_authentication v4.4.4)

The code interface for interacting with the token resource.

# [](AshAuthentication.TokenResource.Actions.html#summary)Summary

## [Functions](AshAuthentication.TokenResource.Actions.html#functions)

[expunge\_expired(resource, opts \\\\ \[\])](AshAuthentication.TokenResource.Actions.html#expunge_expired/2)

Remove all expired records.

[get\_token(resource, params, opts \\\\ \[\])](AshAuthentication.TokenResource.Actions.html#get_token/3)

Retrieve a token by token or JTI optionally filtering by purpose.

[jti\_revoked?(resource, jti, opts \\\\ \[\])](AshAuthentication.TokenResource.Actions.html#jti_revoked?/3)

Has the token been revoked?

[revoke(resource, token, opts \\\\ \[\])](AshAuthentication.TokenResource.Actions.html#revoke/3)

Revoke a token.

[store\_token(resource, params, opts \\\\ \[\])](AshAuthentication.TokenResource.Actions.html#store_token/3)

Store a token.

[token\_revoked?(resource, token, opts \\\\ \[\])](AshAuthentication.TokenResource.Actions.html#token_revoked?/3)

Has the token been revoked?

# [](AshAuthentication.TokenResource.Actions.html#functions)Functions

[](AshAuthentication.TokenResource.Actions.html#expunge_expired/2)

# expunge\_expired(resource, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/actions.ex#L33)

```
@spec expunge_expired(
  Ash.Resource.t(),
  keyword()
) :: :ok | {:error, any()}
```

Remove all expired records.

[](AshAuthentication.TokenResource.Actions.html#get_token/3)

# get\_token(resource, params, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/actions.ex#L233)

```
@spec get_token(Ash.Resource.t(), map(), keyword()) ::
  {:ok, [Ash.Resource.record()]} | {:error, any()}
```

Retrieve a token by token or JTI optionally filtering by purpose.

[](AshAuthentication.TokenResource.Actions.html#jti_revoked?/3)

# jti\_revoked?(resource, jti, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/actions.ex#L120)

```
@spec jti_revoked?(Ash.Resource.t(), String.t(), keyword()) :: boolean()
```

Has the token been revoked?

Similar to `token-revoked?/2..3` except that rather than extracting the JTI from the token, assumes that it's being passed in directly.

[](AshAuthentication.TokenResource.Actions.html#revoke/3)

# revoke(resource, token, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/actions.ex#L174)

```
@spec revoke(Ash.Resource.t(), String.t(), keyword()) :: :ok | {:error, any()}
```

Revoke a token.

Extracts the JTI from the provided token and uses it to generate a revocation record.

[](AshAuthentication.TokenResource.Actions.html#store_token/3)

# store\_token(resource, params, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/actions.ex#L205)

```
@spec store_token(Ash.Resource.t(), map(), keyword()) :: :ok | {:error, any()}
```

Store a token.

Stores a token for any purpose.

[](AshAuthentication.TokenResource.Actions.html#token_revoked?/3)

# token\_revoked?(resource, token, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/actions.ex#L70)

```
@spec token_revoked?(Ash.Resource.t(), String.t(), keyword()) :: boolean()
```

Has the token been revoked?

Similar to `jti_revoked?/2..3` except that it extracts the JTI from the token, rather than relying on it to be passed in.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/expunger.ex#L1 "View Source") AshAuthentication.TokenResource.Expunger (ash\_authentication v4.4.4)

A [`GenServer`](../elixir/GenServer.html) which periodically removes expired token revocations.

Scans all token revocation resources based on their configured expunge interval and removes any expired records.

```
defmodule MyApp.Accounts.Token do
  use Ash.Resource,
    extensions: [AshAuthentication.TokenResource],
    domain: MyApp.Accounts

  token do
    expunge_interval 12
  end
end
```

This GenServer is started by the [`AshAuthentication.Supervisor`](AshAuthentication.Supervisor.html) which should be added to your app's supervision tree.

# [](AshAuthentication.TokenResource.Expunger.html#summary)Summary

## [Functions](AshAuthentication.TokenResource.Expunger.html#functions)

[child\_spec(init\_arg)](AshAuthentication.TokenResource.Expunger.html#child_spec/1)

Returns a specification to start this module under a supervisor.

# [](AshAuthentication.TokenResource.Expunger.html#functions)Functions

[](AshAuthentication.TokenResource.Expunger.html#child_spec/1)

# child\_spec(init\_arg)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/expunger.ex#L24)

Returns a specification to start this module under a supervisor.

See [`Supervisor`](../elixir/Supervisor.html).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/get_confirmation_changes_preparation.ex#L1 "View Source") AshAuthentication.TokenResource.GetConfirmationChangesPreparation (ash\_authentication v4.4.4)

Constrains a query to only records which are confirmations that match the jti argument.

# [](AshAuthentication.TokenResource.GetConfirmationChangesPreparation.html#summary)Summary

## [Functions](AshAuthentication.TokenResource.GetConfirmationChangesPreparation.html#functions)

[init(opts)](AshAuthentication.TokenResource.GetConfirmationChangesPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.TokenResource.GetConfirmationChangesPreparation.html#functions)Functions

[](AshAuthentication.TokenResource.GetConfirmationChangesPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/get_confirmation_changes_preparation.ex#L7)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/get_token_preparation.ex#L1 "View Source") AshAuthentication.TokenResource.GetTokenPreparation (ash\_authentication v4.4.4)

Constrains a query to only records which match the `jti` or `token` argument and optionally by the `purpose` argument.

# [](AshAuthentication.TokenResource.GetTokenPreparation.html#summary)Summary

## [Functions](AshAuthentication.TokenResource.GetTokenPreparation.html#functions)

[init(opts)](AshAuthentication.TokenResource.GetTokenPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.TokenResource.GetTokenPreparation.html#functions)Functions

[](AshAuthentication.TokenResource.GetTokenPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/get_token_preparation.ex#L7)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource.ex#L1 "View Source") AshAuthentication.TokenResource (ash\_authentication v4.4.4)

This is an Ash resource extension which generates the default token resource.

The token resource is used to store information about tokens that should not be shared with the end user. It does not actually contain any tokens.

For example:

- When an authentication token has been revoked
- When a confirmation token has changes to apply

## [](AshAuthentication.TokenResource.html#module-storage)Storage

The information stored in this resource is essentially ephemeral - all tokens have an expiry date, so it doesn't make sense to keep them after that time has passed. However, if you have any tokens with very long expiry times then we suggest you store this resource in a resilient data-layer such as Postgres.

## [](AshAuthentication.TokenResource.html#module-usage)Usage

There is no need to define any attributes or actions (although you can if you want). The extension will wire up everything that's needed for the token system to function.

```
defmodule MyApp.Accounts.Token do
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAuthentication.TokenResource],
    domain: MyApp.Accounts

  postgres do
    table "tokens"
    repo MyApp.Repo
  end
end
```

Whilst it is possible to have multiple token resources, there is no need to do so.

## [](AshAuthentication.TokenResource.html#module-removing-expired-records)Removing expired records

Once a token has expired there's no point in keeping the information it refers to, so expired tokens can be automatically removed by adding the [`AshAuthentication.Supervisor`](AshAuthentication.Supervisor.html) to your application supervision tree. This will start the [`AshAuthentication.TokenResource.Expunger`](AshAuthentication.TokenResource.Expunger.html) [`GenServer`](../elixir/GenServer.html) which periodically scans and removes any expired records.

# [](AshAuthentication.TokenResource.html#summary)Summary

## [Functions](AshAuthentication.TokenResource.html#functions)

[expunge\_expired(resource, opts \\\\ \[\])](AshAuthentication.TokenResource.html#expunge_expired/2)

Remove all expired records.

[jti\_revoked?(resource, jti, opts \\\\ \[\])](AshAuthentication.TokenResource.html#jti_revoked?/3)

Has the token been revoked?

[revoke(resource, token, opts \\\\ \[\])](AshAuthentication.TokenResource.html#revoke/3)

Revoke a token.

[token(body)](AshAuthentication.TokenResource.html#token/1)

[token\_revoked?(resource, token, opts \\\\ \[\])](AshAuthentication.TokenResource.html#token_revoked?/3)

Has the token been revoked?

# [](AshAuthentication.TokenResource.html#functions)Functions

[](AshAuthentication.TokenResource.html#expunge_expired/2)

# expunge\_expired(resource, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource.ex#L181)

```
@spec expunge_expired(
  Ash.Resource.t(),
  keyword()
) :: :ok | {:error, any()}
```

Remove all expired records.

[](AshAuthentication.TokenResource.html#jti_revoked?/3)

# jti\_revoked?(resource, jti, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource.ex#L166)

```
@spec jti_revoked?(Ash.Resource.t(), String.t(), keyword()) :: boolean()
```

Has the token been revoked?

Similar to `token-revoked?/2..3` except that rather than extracting the JTI from the token, assumes that it's being passed in directly.

[](AshAuthentication.TokenResource.html#revoke/3)

# revoke(resource, token, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource.ex#L175)

```
@spec revoke(Ash.Resource.t(), String.t(), keyword()) :: :ok | {:error, any()}
```

Revoke a token.

Extracts the JTI from the provided token and uses it to generate a revocation record.

[](AshAuthentication.TokenResource.html#token/1)

# token(body)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource.ex#L146)(macro)

[](AshAuthentication.TokenResource.html#token_revoked?/3)

# token\_revoked?(resource, token, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource.ex#L157)

```
@spec token_revoked?(Ash.Resource.t(), String.t(), keyword()) :: boolean()
```

Has the token been revoked?

Similar to `jti_revoked?/2..3` except that it extracts the JTI from the token, rather than relying on it to be passed in.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L1 "View Source") AshAuthentication.TokenResource.Info (ash\_authentication v4.4.4)

Introspection functions for the [`AshAuthentication.TokenResource`](AshAuthentication.TokenResource.html) Ash extension.

# [](AshAuthentication.TokenResource.Info.html#summary)Summary

## [Functions](AshAuthentication.TokenResource.Info.html#functions)

[token\_confirmation\_get\_changes\_action\_name(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_confirmation_get_changes_action_name/1)

The name of the action used to get confirmation changes.

[token\_confirmation\_get\_changes\_action\_name!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_confirmation_get_changes_action_name!/1)

The name of the action used to get confirmation changes.

[token\_confirmation\_options(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_confirmation_options/1)

token.confirmation DSL options

[token\_confirmation\_store\_changes\_action\_name(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_confirmation_store_changes_action_name/1)

The name of the action used to store confirmation changes.

[token\_confirmation\_store\_changes\_action\_name!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_confirmation_store_changes_action_name!/1)

The name of the action used to store confirmation changes.

[token\_domain(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_domain/1)

The Ash domain to use to access this resource.

[token\_domain!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_domain!/1)

The Ash domain to use to access this resource.

[token\_expunge\_expired\_action\_name(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_expunge_expired_action_name/1)

The name of the action used to remove expired tokens.

[token\_expunge\_expired\_action\_name!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_expunge_expired_action_name!/1)

The name of the action used to remove expired tokens.

[token\_expunge\_interval(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_expunge_interval/1)

How often to scan this resource for records which have expired, and thus can be removed.

[token\_expunge\_interval!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_expunge_interval!/1)

How often to scan this resource for records which have expired, and thus can be removed.

[token\_get\_token\_action\_name(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_get_token_action_name/1)

The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

[token\_get\_token\_action\_name!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_get_token_action_name!/1)

The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

[token\_options(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_options/1)

token DSL options

[token\_read\_expired\_action\_name(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_read_expired_action_name/1)

The name of the action use to find all expired tokens.

[token\_read\_expired\_action\_name!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_read_expired_action_name!/1)

The name of the action use to find all expired tokens.

[token\_revocation\_is\_revoked\_action\_name(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_revocation_is_revoked_action_name/1)

The name of the action used to check if a token is revoked.

[token\_revocation\_is\_revoked\_action\_name!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_revocation_is_revoked_action_name!/1)

The name of the action used to check if a token is revoked.

[token\_revocation\_options(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_revocation_options/1)

token.revocation DSL options

[token\_revocation\_revoke\_token\_action\_name(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_revocation_revoke_token_action_name/1)

The name of the action used to revoke tokens.

[token\_revocation\_revoke\_token\_action\_name!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_revocation_revoke_token_action_name!/1)

The name of the action used to revoke tokens.

[token\_store\_token\_action\_name(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_store_token_action_name/1)

The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.

[token\_store\_token\_action\_name!(dsl\_or\_extended)](AshAuthentication.TokenResource.Info.html#token_store_token_action_name!/1)

The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.

# [](AshAuthentication.TokenResource.Info.html#functions)Functions

[](AshAuthentication.TokenResource.Info.html#token_confirmation_get_changes_action_name/1)

# token\_confirmation\_get\_changes\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_confirmation_get_changes_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action used to get confirmation changes.

[](AshAuthentication.TokenResource.Info.html#token_confirmation_get_changes_action_name!/1)

# token\_confirmation\_get\_changes\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_confirmation_get_changes_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action used to get confirmation changes.

[](AshAuthentication.TokenResource.Info.html#token_confirmation_options/1)

# token\_confirmation\_options(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_confirmation_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

token.confirmation DSL options

Returns a map containing the and any configured or default values.

[](AshAuthentication.TokenResource.Info.html#token_confirmation_store_changes_action_name/1)

# token\_confirmation\_store\_changes\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_confirmation_store_changes_action_name(
  dsl_or_extended :: module() | map()
) ::
  {:ok, atom()} | :error
```

The name of the action used to store confirmation changes.

[](AshAuthentication.TokenResource.Info.html#token_confirmation_store_changes_action_name!/1)

# token\_confirmation\_store\_changes\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_confirmation_store_changes_action_name!(
  dsl_or_extended :: module() | map()
) ::
  atom() | no_return()
```

The name of the action used to store confirmation changes.

[](AshAuthentication.TokenResource.Info.html#token_domain/1)

# token\_domain(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_domain(dsl_or_extended :: module() | map()) :: {:ok, module()} | :error
```

The Ash domain to use to access this resource.

[](AshAuthentication.TokenResource.Info.html#token_domain!/1)

# token\_domain!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_domain!(dsl_or_extended :: module() | map()) :: module() | no_return()
```

The Ash domain to use to access this resource.

[](AshAuthentication.TokenResource.Info.html#token_expunge_expired_action_name/1)

# token\_expunge\_expired\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_expunge_expired_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action used to remove expired tokens.

[](AshAuthentication.TokenResource.Info.html#token_expunge_expired_action_name!/1)

# token\_expunge\_expired\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_expunge_expired_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action used to remove expired tokens.

[](AshAuthentication.TokenResource.Info.html#token_expunge_interval/1)

# token\_expunge\_interval(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_expunge_interval(dsl_or_extended :: module() | map()) ::
  {:ok, pos_integer()} | :error
```

How often to scan this resource for records which have expired, and thus can be removed.

[](AshAuthentication.TokenResource.Info.html#token_expunge_interval!/1)

# token\_expunge\_interval!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_expunge_interval!(dsl_or_extended :: module() | map()) ::
  pos_integer() | no_return()
```

How often to scan this resource for records which have expired, and thus can be removed.

[](AshAuthentication.TokenResource.Info.html#token_get_token_action_name/1)

# token\_get\_token\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_get_token_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

[](AshAuthentication.TokenResource.Info.html#token_get_token_action_name!/1)

# token\_get\_token\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_get_token_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

[](AshAuthentication.TokenResource.Info.html#token_options/1)

# token\_options(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

token DSL options

Returns a map containing the and any configured or default values.

[](AshAuthentication.TokenResource.Info.html#token_read_expired_action_name/1)

# token\_read\_expired\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_read_expired_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action use to find all expired tokens.

[](AshAuthentication.TokenResource.Info.html#token_read_expired_action_name!/1)

# token\_read\_expired\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_read_expired_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action use to find all expired tokens.

[](AshAuthentication.TokenResource.Info.html#token_revocation_is_revoked_action_name/1)

# token\_revocation\_is\_revoked\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_revocation_is_revoked_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action used to check if a token is revoked.

[](AshAuthentication.TokenResource.Info.html#token_revocation_is_revoked_action_name!/1)

# token\_revocation\_is\_revoked\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_revocation_is_revoked_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action used to check if a token is revoked.

[](AshAuthentication.TokenResource.Info.html#token_revocation_options/1)

# token\_revocation\_options(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_revocation_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

token.revocation DSL options

Returns a map containing the and any configured or default values.

[](AshAuthentication.TokenResource.Info.html#token_revocation_revoke_token_action_name/1)

# token\_revocation\_revoke\_token\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_revocation_revoke_token_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action used to revoke tokens.

[](AshAuthentication.TokenResource.Info.html#token_revocation_revoke_token_action_name!/1)

# token\_revocation\_revoke\_token\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_revocation_revoke_token_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action used to revoke tokens.

[](AshAuthentication.TokenResource.Info.html#token_store_token_action_name/1)

# token\_store\_token\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_store_token_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.

[](AshAuthentication.TokenResource.Info.html#token_store_token_action_name!/1)

# token\_store\_token\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/info.ex#L7)

```
@spec token_store_token_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/is_revoked.ex#L1 "View Source") AshAuthentication.TokenResource.IsRevoked (ash\_authentication v4.4.4)

Checks for the existence of a revocation token for the provided tokenrevocation token for the provided token.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/is_revoked_preparation.ex#L1 "View Source") AshAuthentication.TokenResource.IsRevokedPreparation (ash\_authentication v4.4.4)

Constrains a query to only records which are revocations that match the token or jti argument.

# [](AshAuthentication.TokenResource.IsRevokedPreparation.html#summary)Summary

## [Functions](AshAuthentication.TokenResource.IsRevokedPreparation.html#functions)

[init(opts)](AshAuthentication.TokenResource.IsRevokedPreparation.html#init/1)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

# [](AshAuthentication.TokenResource.IsRevokedPreparation.html#functions)Functions

[](AshAuthentication.TokenResource.IsRevokedPreparation.html#init/1)

# init(opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/is_revoked_preparation.ex#L7)

Callback implementation for [`Ash.Resource.Preparation.init/1`](../ash/3.4.56/Ash.Resource.Preparation.html#c:init/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/revoke_token_change.ex#L1 "View Source") AshAuthentication.TokenResource.RevokeTokenChange (ash\_authentication v4.4.4)

Generates a revocation record for a given token.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/store_confirmation_changes_change.ex#L1 "View Source") AshAuthentication.TokenResource.StoreConfirmationChangesChange (ash\_authentication v4.4.4)

Populates the JTI based on the token argument.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/store_token_change.ex#L1 "View Source") AshAuthentication.TokenResource.StoreTokenChange (ash\_authentication v4.4.4)

Stores an arbitrary token.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/transformer.ex#L1 "View Source") AshAuthentication.TokenResource.Transformer (ash\_authentication v4.4.4)

The token resource transformer.

Sets up the default schema and actions for the token resource.

# [](AshAuthentication.TokenResource.Transformer.html#summary)Summary

## [Functions](AshAuthentication.TokenResource.Transformer.html#functions)

[after\_compile?()](AshAuthentication.TokenResource.Transformer.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

# [](AshAuthentication.TokenResource.Transformer.html#functions)Functions

[](AshAuthentication.TokenResource.Transformer.html#after_compile?/0)

# after\_compile?()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/transformer.ex#L8)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/token_resource/verifier.ex#L1 "View Source") AshAuthentication.TokenResource.Verifier (ash\_authentication v4.4.4)

The token resource verifier.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/transformer.ex#L2 "View Source") AshAuthentication.Transformer (ash\_authentication v4.4.4)

The Authentication transformer

Sets up non-provider-specific configuration for authenticated resources.

# [](AshAuthentication.Transformer.html#summary)Summary

## [Functions](AshAuthentication.Transformer.html#functions)

[after\_compile?()](AshAuthentication.Transformer.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

# [](AshAuthentication.Transformer.html#functions)Functions

[](AshAuthentication.Transformer.html#after_compile?/0)

# after\_compile?()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/transformer.ex#L9)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/transformer/set_select_for_senders.ex#L1 "View Source") AshAuthentication.Transformer.SetSelectForSenders (ash\_authentication v4.4.4)

Sets the `select_for_senders` options to its default value.

# [](AshAuthentication.Transformer.SetSelectForSenders.html#summary)Summary

## [Functions](AshAuthentication.Transformer.SetSelectForSenders.html#functions)

[after\_compile?()](AshAuthentication.Transformer.SetSelectForSenders.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

[before?(\_)](AshAuthentication.Transformer.SetSelectForSenders.html#before?/1)

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:before?/1).

# [](AshAuthentication.Transformer.SetSelectForSenders.html#functions)Functions

[](AshAuthentication.Transformer.SetSelectForSenders.html#after_compile?/0)

# after\_compile?()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/transformer/set_select_for_senders.ex#L6)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

[](AshAuthentication.Transformer.SetSelectForSenders.html#before?/1)

# before?(\_)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/transformer/set_select_for_senders.ex#L6)

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:before?/1).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/actions.ex#L1 "View Source") AshAuthentication.UserIdentity.Actions (ash\_authentication v4.4.4)

Code interface for provider identity actions.

Allows you to interact with UserIdentity resources without having to mess around with changesets, domains, etc. These functions are delegated to from within [`AshAuthentication.UserIdentity`](AshAuthentication.UserIdentity.html).

# [](AshAuthentication.UserIdentity.Actions.html#summary)Summary

## [Functions](AshAuthentication.UserIdentity.Actions.html#functions)

[upsert(resource, attributes)](AshAuthentication.UserIdentity.Actions.html#upsert/2)

Upsert an identity for a user.

# [](AshAuthentication.UserIdentity.Actions.html#functions)Functions

[](AshAuthentication.UserIdentity.Actions.html#upsert/2)

# upsert(resource, attributes)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/actions.ex#L17)

```
@spec upsert(Ash.Resource.t(), map()) ::
  {:ok, Ash.Resource.record()} | {:error, term()}
```

Upsert an identity for a user.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity.ex#L1 "View Source") AshAuthentication.UserIdentity (ash\_authentication v4.4.4)

An Ash extension which generates the default user identities resource.

If you plan to support multiple different strategies at once (eg giving your users the choice of more than one authentication provider, or signing them into multiple services simultaneously) then you will want to create a resource with this extension enabled. It is used to keep track of the links between your local user records and their many remote identities.

The user identities resource is used to store information returned by remote authentication strategies (such as those provided by OAuth2) and maps them to your user resource(s). This provides the following benefits:

1. A user can be signed in to multiple authentication strategies at once.
2. For those providers that support it, AshAuthentication can handle automatic refreshing of tokens.

## [](AshAuthentication.UserIdentity.html#module-storage)Storage

User identities are expected to be relatively long-lived (although they're deleted on log out), so should probably be stored using a permanent data layer sush as `ash_postgres`.

## [](AshAuthentication.UserIdentity.html#module-usage)Usage

There is no need to define any attributes, etc. The extension will generate them all for you. As there is no other use-case for this resource it's unlikely that you will need to customise it.

```
defmodule MyApp.Accounts.UserIdentity do
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAuthentication.UserIdentity],
    domain: MyApp.Accounts

  user_identity do
    user_resource MyApp.Accounts.User
  end

  postgres do
    table "user_identities"
    repo MyApp.Repo
  end
end
```

If you intend to operate with multiple user resources, you will need to define multiple user identity resources.

# [](AshAuthentication.UserIdentity.html#summary)Summary

## [Functions](AshAuthentication.UserIdentity.html#functions)

[user\_identity(body)](AshAuthentication.UserIdentity.html#user_identity/1)

# [](AshAuthentication.UserIdentity.html#functions)Functions

[](AshAuthentication.UserIdentity.html#user_identity/1)

# user\_identity(body)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity.ex#L123)(macro)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L1 "View Source") AshAuthentication.UserIdentity.Info (ash\_authentication v4.4.4)

Introspection functions for the [`AshAuthentication.UserIdentity`](AshAuthentication.UserIdentity.html) Ash extension.

# [](AshAuthentication.UserIdentity.Info.html#summary)Summary

## [Functions](AshAuthentication.UserIdentity.Info.html#functions)

[user\_identity\_access\_token\_attribute\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_access_token_attribute_name/1)

The name of the `access_token` attribute on this resource.

[user\_identity\_access\_token\_attribute\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_access_token_attribute_name!/1)

The name of the `access_token` attribute on this resource.

[user\_identity\_access\_token\_expires\_at\_attribute\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_access_token_expires_at_attribute_name/1)

The name of the `access_token_expires_at` attribute on this resource.

[user\_identity\_access\_token\_expires\_at\_attribute\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_access_token_expires_at_attribute_name!/1)

The name of the `access_token_expires_at` attribute on this resource.

[user\_identity\_destroy\_action\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_destroy_action_name/1)

The name of the action used to destroy records.

[user\_identity\_destroy\_action\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_destroy_action_name!/1)

The name of the action used to destroy records.

[user\_identity\_domain(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_domain/1)

The Ash domain to use to access this resource.

[user\_identity\_domain!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_domain!/1)

The Ash domain to use to access this resource.

[user\_identity\_options(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_options/1)

user\_identity DSL options

[user\_identity\_read\_action\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_read_action_name/1)

The name of the action used to query identities.

[user\_identity\_read\_action\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_read_action_name!/1)

The name of the action used to query identities.

[user\_identity\_refresh\_token\_attribute\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_refresh_token_attribute_name/1)

The name of the `refresh_token` attribute on this resource.

[user\_identity\_refresh\_token\_attribute\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_refresh_token_attribute_name!/1)

The name of the `refresh_token` attribute on this resource.

[user\_identity\_strategy\_attribute\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_strategy_attribute_name/1)

The name of the `strategy` attribute on this resource.

[user\_identity\_strategy\_attribute\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_strategy_attribute_name!/1)

The name of the `strategy` attribute on this resource.

[user\_identity\_uid\_attribute\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_uid_attribute_name/1)

The name of the `uid` attribute on this resource.

[user\_identity\_uid\_attribute\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_uid_attribute_name!/1)

The name of the `uid` attribute on this resource.

[user\_identity\_upsert\_action\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_upsert_action_name/1)

The name of the action used to create and update records.

[user\_identity\_upsert\_action\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_upsert_action_name!/1)

The name of the action used to create and update records.

[user\_identity\_user\_id\_attribute\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_user_id_attribute_name/1)

The name of the `user_id` attribute on this resource.

[user\_identity\_user\_id\_attribute\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_user_id_attribute_name!/1)

The name of the `user_id` attribute on this resource.

[user\_identity\_user\_relationship\_name(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_user_relationship_name/1)

The name of the belongs-to relationship between identities and users.

[user\_identity\_user\_relationship\_name!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_user_relationship_name!/1)

The name of the belongs-to relationship between identities and users.

[user\_identity\_user\_resource(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_user_resource/1)

The user resource to which these identities belong.

[user\_identity\_user\_resource!(dsl\_or\_extended)](AshAuthentication.UserIdentity.Info.html#user_identity_user_resource!/1)

The user resource to which these identities belong.

# [](AshAuthentication.UserIdentity.Info.html#functions)Functions

[](AshAuthentication.UserIdentity.Info.html#user_identity_access_token_attribute_name/1)

# user\_identity\_access\_token\_attribute\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_access_token_attribute_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the `access_token` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_access_token_attribute_name!/1)

# user\_identity\_access\_token\_attribute\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_access_token_attribute_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the `access_token` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_access_token_expires_at_attribute_name/1)

# user\_identity\_access\_token\_expires\_at\_attribute\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_access_token_expires_at_attribute_name(
  dsl_or_extended :: module() | map()
) ::
  {:ok, atom()} | :error
```

The name of the `access_token_expires_at` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_access_token_expires_at_attribute_name!/1)

# user\_identity\_access\_token\_expires\_at\_attribute\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_access_token_expires_at_attribute_name!(
  dsl_or_extended :: module() | map()
) ::
  atom() | no_return()
```

The name of the `access_token_expires_at` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_destroy_action_name/1)

# user\_identity\_destroy\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_destroy_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action used to destroy records.

[](AshAuthentication.UserIdentity.Info.html#user_identity_destroy_action_name!/1)

# user\_identity\_destroy\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_destroy_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action used to destroy records.

[](AshAuthentication.UserIdentity.Info.html#user_identity_domain/1)

# user\_identity\_domain(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_domain(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The Ash domain to use to access this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_domain!/1)

# user\_identity\_domain!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_domain!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The Ash domain to use to access this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_options/1)

# user\_identity\_options(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

user\_identity DSL options

Returns a map containing the and any configured or default values.

[](AshAuthentication.UserIdentity.Info.html#user_identity_read_action_name/1)

# user\_identity\_read\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_read_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action used to query identities.

[](AshAuthentication.UserIdentity.Info.html#user_identity_read_action_name!/1)

# user\_identity\_read\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_read_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action used to query identities.

[](AshAuthentication.UserIdentity.Info.html#user_identity_refresh_token_attribute_name/1)

# user\_identity\_refresh\_token\_attribute\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_refresh_token_attribute_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the `refresh_token` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_refresh_token_attribute_name!/1)

# user\_identity\_refresh\_token\_attribute\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_refresh_token_attribute_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the `refresh_token` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_strategy_attribute_name/1)

# user\_identity\_strategy\_attribute\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_strategy_attribute_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the `strategy` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_strategy_attribute_name!/1)

# user\_identity\_strategy\_attribute\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_strategy_attribute_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the `strategy` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_uid_attribute_name/1)

# user\_identity\_uid\_attribute\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_uid_attribute_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the `uid` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_uid_attribute_name!/1)

# user\_identity\_uid\_attribute\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_uid_attribute_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the `uid` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_upsert_action_name/1)

# user\_identity\_upsert\_action\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_upsert_action_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the action used to create and update records.

[](AshAuthentication.UserIdentity.Info.html#user_identity_upsert_action_name!/1)

# user\_identity\_upsert\_action\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_upsert_action_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the action used to create and update records.

[](AshAuthentication.UserIdentity.Info.html#user_identity_user_id_attribute_name/1)

# user\_identity\_user\_id\_attribute\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_user_id_attribute_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the `user_id` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_user_id_attribute_name!/1)

# user\_identity\_user\_id\_attribute\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_user_id_attribute_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the `user_id` attribute on this resource.

[](AshAuthentication.UserIdentity.Info.html#user_identity_user_relationship_name/1)

# user\_identity\_user\_relationship\_name(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_user_relationship_name(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The name of the belongs-to relationship between identities and users.

[](AshAuthentication.UserIdentity.Info.html#user_identity_user_relationship_name!/1)

# user\_identity\_user\_relationship\_name!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_user_relationship_name!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The name of the belongs-to relationship between identities and users.

[](AshAuthentication.UserIdentity.Info.html#user_identity_user_resource/1)

# user\_identity\_user\_resource(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_user_resource(dsl_or_extended :: module() | map()) ::
  {:ok, module()} | :error
```

The user resource to which these identities belong.

[](AshAuthentication.UserIdentity.Info.html#user_identity_user_resource!/1)

# user\_identity\_user\_resource!(dsl\_or\_extended)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/info.ex#L7)

```
@spec user_identity_user_resource!(dsl_or_extended :: module() | map()) ::
  module() | no_return()
```

The user resource to which these identities belong.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/transformer.ex#L1 "View Source") AshAuthentication.UserIdentity.Transformer (ash\_authentication v4.4.4)

The user identity transformer.

Sets up the default schema and actions for a user identity resource.

# [](AshAuthentication.UserIdentity.Transformer.html#summary)Summary

## [Functions](AshAuthentication.UserIdentity.Transformer.html#functions)

[after\_compile?()](AshAuthentication.UserIdentity.Transformer.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

# [](AshAuthentication.UserIdentity.Transformer.html#functions)Functions

[](AshAuthentication.UserIdentity.Transformer.html#after_compile?/0)

# after\_compile?()

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/transformer.ex#L8)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.40/Spark.Dsl.Transformer.html#c:after_compile?/0).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/upsert_identity_change.ex#L1 "View Source") AshAuthentication.UserIdentity.UpsertIdentityChange (ash\_authentication v4.4.4)

A change which upserts a user's identity into the user identity resource.

Expects the following arguments:

- `user_info` a map with string keys as returned from the OAuth2/OpenID upstream provider.
- `oauth_tokens` a map with string keys containing the OAuth2 token response.
- `user_id` the ID of the user this identity relates to.
- `strategy` the name of the strategy.

This is usually dynamically inserted into a generated action, however you can add it to your own action if needed.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/user_identity/verifier.ex#L1 "View Source") AshAuthentication.UserIdentity.Verifier (ash\_authentication v4.4.4)

The user identity verifier.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L1 "View Source") AshAuthentication.Validations.Action (ash\_authentication v4.4.4)

Validation helpers for Resource actions.

# [](AshAuthentication.Validations.Action.html#summary)Summary

## [Functions](AshAuthentication.Validations.Action.html#functions)

[validate\_action\_argument\_option(action, argument\_name, field, values)](AshAuthentication.Validations.Action.html#validate_action_argument_option/4)

Validate an action's argument has an option set to one of the provided values.

[validate\_action\_exists(dsl\_state, action\_name)](AshAuthentication.Validations.Action.html#validate_action_exists/2)

Validate that a named action actually exists.

[validate\_action\_has\_argument(action, argument\_name)](AshAuthentication.Validations.Action.html#validate_action_has_argument/2)

Validate the presence of an argument on an action.

[validate\_action\_has\_change(action, change\_module)](AshAuthentication.Validations.Action.html#validate_action_has_change/2)

Validate the presence of the named change module on an action.

[validate\_action\_has\_manual(action, manual\_module)](AshAuthentication.Validations.Action.html#validate_action_has_manual/2)

Validate the presence of the named manual module on an action.

[validate\_action\_has\_preparation(action, preparation\_module)](AshAuthentication.Validations.Action.html#validate_action_has_preparation/2)

Validate the presence of the named preparation module on an action.

[validate\_action\_has\_validation(action, validation\_module)](AshAuthentication.Validations.Action.html#validate_action_has_validation/2)

Validate the presence of the named validation module on an action.

[validate\_action\_option(action, field, values)](AshAuthentication.Validations.Action.html#validate_action_option/3)

Validate the action has the provided option.

# [](AshAuthentication.Validations.Action.html#functions)Functions

[](AshAuthentication.Validations.Action.html#validate_action_argument_option/4)

# validate\_action\_argument\_option(action, argument\_name, field, values)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L33)

```
@spec validate_action_argument_option(Ash.Resource.Actions.action(), atom(), atom(), [
  any()
]) ::
  :ok | {:error, Exception.t() | String.t()}
```

Validate an action's argument has an option set to one of the provided values.

[](AshAuthentication.Validations.Action.html#validate_action_exists/2)

# validate\_action\_exists(dsl\_state, action\_name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L14)

```
@spec validate_action_exists(map(), atom()) ::
  {:ok, Ash.Resource.Actions.action()} | {:error, Exception.t() | String.t()}
```

Validate that a named action actually exists.

[](AshAuthentication.Validations.Action.html#validate_action_has_argument/2)

# validate\_action\_has\_argument(action, argument\_name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L94)

```
@spec validate_action_has_argument(Ash.Resource.Actions.action(), atom()) ::
  :ok | {:error, Exception.t()}
```

Validate the presence of an argument on an action.

[](AshAuthentication.Validations.Action.html#validate_action_has_change/2)

# validate\_action\_has\_change(action, change\_module)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L111)

```
@spec validate_action_has_change(Ash.Resource.Actions.action(), module()) ::
  :ok | {:error, Exception.t()}
```

Validate the presence of the named change module on an action.

[](AshAuthentication.Validations.Action.html#validate_action_has_manual/2)

# validate\_action\_has\_manual(action, manual\_module)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L135)

```
@spec validate_action_has_manual(Ash.Resource.Actions.action(), module()) ::
  :ok | {:error, Exception.t()}
```

Validate the presence of the named manual module on an action.

[](AshAuthentication.Validations.Action.html#validate_action_has_preparation/2)

# validate\_action\_has\_preparation(action, preparation\_module)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L183)

```
@spec validate_action_has_preparation(Ash.Resource.Actions.action(), module()) ::
  :ok | {:error, Exception.t()}
```

Validate the presence of the named preparation module on an action.

[](AshAuthentication.Validations.Action.html#validate_action_has_validation/2)

# validate\_action\_has\_validation(action, validation\_module)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L159)

```
@spec validate_action_has_validation(Ash.Resource.Actions.action(), module()) ::
  :ok | {:error, Exception.t()}
```

Validate the presence of the named validation module on an action.

[](AshAuthentication.Validations.Action.html#validate_action_option/3)

# validate\_action\_option(action, field, values)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/action.ex#L206)

```
@spec validate_action_option(Ash.Resource.Actions.action(), atom(), [any()]) ::
  :ok | {:error, Exception.t()}
```

Validate the action has the provided option.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/attribute.ex#L1 "View Source") AshAuthentication.Validations.Attribute (ash\_authentication v4.4.4)

Validation helpers for Resource attributes.

# [](AshAuthentication.Validations.Attribute.html#summary)Summary

## [Functions](AshAuthentication.Validations.Attribute.html#functions)

[validate\_attribute\_option(attribute, resource, field, values)](AshAuthentication.Validations.Attribute.html#validate_attribute_option/4)

Validate that an option is set correctly on an attribute

[validate\_attribute\_unique\_constraint(dsl\_state, fields, resource)](AshAuthentication.Validations.Attribute.html#validate_attribute_unique_constraint/3)

Validate than an attribute has a unique identity applied.

# [](AshAuthentication.Validations.Attribute.html#functions)Functions

[](AshAuthentication.Validations.Attribute.html#validate_attribute_option/4)

# validate\_attribute\_option(attribute, resource, field, values)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/attribute.ex#L14)

```
@spec validate_attribute_option(Ash.Resource.Attribute.t(), module(), atom(), [any()]) ::
  :ok | {:error, Exception.t()}
```

Validate that an option is set correctly on an attribute

[](AshAuthentication.Validations.Attribute.html#validate_attribute_unique_constraint/3)

# validate\_attribute\_unique\_constraint(dsl\_state, fields, resource)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations/attribute.ex#L66)

```
@spec validate_attribute_unique_constraint(map(), [atom()], module()) ::
  :ok | {:error, Exception.t()}
```

Validate than an attribute has a unique identity applied.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L1 "View Source") AshAuthentication.Validations (ash\_authentication v4.4.4)

Common validations shared by several transformers.

# [](AshAuthentication.Validations.html#summary)Summary

## [Functions](AshAuthentication.Validations.html#functions)

[find\_attribute(dsl\_state, attribute\_name)](AshAuthentication.Validations.html#find_attribute/2)

Find and return a named attribute in the DSL state.

[maybe\_build\_attribute(dsl\_state, attribute\_name, builder)](AshAuthentication.Validations.html#maybe_build_attribute/3)

Build an attribute if not present.

[persisted\_option(dsl\_state, option)](AshAuthentication.Validations.html#persisted_option/2)

Find and return a persisted option in the DSL state.

[validate\_behaviour(module, behaviour)](AshAuthentication.Validations.html#validate_behaviour/2)

Ensure that the named module implements a specific behaviour.

[validate\_extension(dsl\_state, extension)](AshAuthentication.Validations.html#validate_extension/2)

Validates that `extension` is present on the resource.

[validate\_field\_in\_values(map, field, values)](AshAuthentication.Validations.html#validate_field_in_values/3)

Given a map validate that the provided field is one of the values provided.

[validate\_field\_with(map, field, predicate, message \\\\ nil)](AshAuthentication.Validations.html#validate_field_with/4)

Given a map, validate that the provided field predicate returns true for the value.

[validate\_secret(strategy, option, allowed\_extras \\\\ \[\])](AshAuthentication.Validations.html#validate_secret/3)

Validate that a "secret" field is configured correctly.

[validate\_token\_generation\_enabled(dsl\_state, message)](AshAuthentication.Validations.html#validate_token_generation_enabled/2)

Ensure that token generation is enabled for the resource.

# [](AshAuthentication.Validations.html#functions)Functions

[](AshAuthentication.Validations.html#find_attribute/2)

# find\_attribute(dsl\_state, attribute\_name)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L80)

```
@spec find_attribute(Spark.Dsl.t(), atom()) ::
  {:ok, Ash.Resource.Attribute.t()} | {:error, Exception.t()}
```

Find and return a named attribute in the DSL state.

[](AshAuthentication.Validations.html#maybe_build_attribute/3)

# maybe\_build\_attribute(dsl\_state, attribute\_name, builder)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L159)

```
@spec maybe_build_attribute(Spark.Dsl.t(), atom(), (Spark.Dsl.t() ->
                                                {:ok,
                                                 Ash.Resource.Attribute.t()})) ::
  {:ok, Spark.Dsl.t()}
```

Build an attribute if not present.

[](AshAuthentication.Validations.html#persisted_option/2)

# persisted\_option(dsl\_state, option)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L104)

```
@spec persisted_option(Spark.Dsl.t(), atom()) ::
  {:ok, any()} | {:error, {:unknown_persisted, atom()}}
```

Find and return a persisted option in the DSL state.

[](AshAuthentication.Validations.html#validate_behaviour/2)

# validate\_behaviour(module, behaviour)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L125)

```
@spec validate_behaviour(module(), module()) :: :ok | {:error, Exception.t()}
```

Ensure that the named module implements a specific behaviour.

[](AshAuthentication.Validations.html#validate_extension/2)

# validate\_extension(dsl\_state, extension)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L141)

```
@spec validate_extension(Spark.Dsl.t(), module()) :: :ok | {:error, Exception.t()}
```

Validates that `extension` is present on the resource.

[](AshAuthentication.Validations.html#validate_field_in_values/3)

# validate\_field\_in\_values(map, field, values)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L14)

```
@spec validate_field_in_values(map(), any(), [any()]) :: :ok | {:error, String.t()}
```

Given a map validate that the provided field is one of the values provided.

[](AshAuthentication.Validations.html#validate_field_with/4)

# validate\_field\_with(map, field, predicate, message \\\\ nil)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L57)

```
@spec validate_field_with(map(), field, (any() -> boolean()), message) ::
  :ok | {:error, message}
when field: any(), message: any()
```

Given a map, validate that the provided field predicate returns true for the value.

[](AshAuthentication.Validations.html#validate_secret/3)

# validate\_secret(strategy, option, allowed\_extras \\\\ \[])

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L172)

Validate that a "secret" field is configured correctly.

[](AshAuthentication.Validations.html#validate_token_generation_enabled/2)

# validate\_token\_generation\_enabled(dsl\_state, message)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/validations.ex#L115)

```
@spec validate_token_generation_enabled(Spark.Dsl.t(), binary()) ::
  :ok | {:error, Exception.t()}
```

Ensure that token generation is enabled for the resource.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/ash_authentication/verifier.ex#L1 "View Source") AshAuthentication.Verifier (ash\_authentication v4.4.4)

The Authentication verifier.

Checks configuration constraints after compile.

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/tutorials/auth0.md#L1 "View Source") Auth0 Tutorial

This is a quick tutorial on how to configure your application to use Auth0 for authentication.

First, you need to configure an application in [the Auth0 dashboard](https://manage.auth0.com/) using the following steps:

1. Click "Create Application".
2. Set your application name to something that identifies it. You will likely need separate applications for development and production environments, so keep that in mind.
3. Select "Regular Web Application" and click "Create".
4. Switch to the "Settings" tab.
5. Copy the "Domain", "Client ID" and "Client Secret" somewhere safe - we'll need them soon.
6. In the "Allowed Callback URLs" section, add your callback URL. The callback URL is generated from the following information:
   
   - The base URL of the application - in development that would be `http://localhost:4000/` but in production will be your application's URL.
   - The mount point of the auth routes in your router - we'll assume `/auth`.
   - The "subject name" of the resource being authenticated - we'll assume `user`.
   - The name of the strategy in your configuration. By default this is `auth0`.
   
   This means that the callback URL should look something like `http://localhost:4000/auth/user/auth0/callback`.
7. Set "Allowed Web Origins" to your application's base URL.
8. Click "Save Changes".

Next we can configure our resource:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  authentication do
    strategies do
      auth0 do
        client_id MyApp.Secrets
        redirect_uri MyApp.Secrets
        client_secret MyApp.Secrets
        base_url MyApp.Secrets
      end
    end
  end
end
```

Because all the configuration values should be kept secret (ie the `client_secret`) or are likely to be different for each environment we use the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour to provide them. In this case we're delegating to the OTP application environment, however you may want to use a system environment variable or some other secret store (eg Vault).

```
defmodule MyApp.Secrets do
  use AshAuthentication.Secret

  def secret_for([:authentication, :strategies, :auth0, :client_id], MyApp.Accounts.User, _) do
    get_config(:client_id)
  end

  def secret_for([:authentication, :strategies, :auth0, :redirect_uri], MyApp.Accounts.User, _) do
    get_config(:redirect_uri)
  end

  def secret_for([:authentication, :strategies, :auth0, :client_secret], MyApp.Accounts.User, _) do
    get_config(:client_secret)
  end

  def secret_for([:authentication, :strategies, :auth0, :base_url], MyApp.Accounts.User, _) do
    get_config(:base_url)
  end

  defp get_config(key) do
    :my_app
    |> Application.fetch_env!(:auth0)
    |> Keyword.fetch!(key)
    |> then(&{:ok, &1})
  end
end
```

The values for this configuration should be:

- `client_id` - the client ID copied from the Auth0 settings page.
- `redirect_uri` - the URL to the generated auth routes in your application (eg `http://localhost:4000/auth`).
- `client_secret` the client secret copied from the Auth0 settings page.
- `base_url` - the "domain" value copied from the Auth0 settings page prefixed with `https://` (eg `https://dev-yu30yo5y4tg2hg0y.us.auth0.com`).

Lastly, we need to add a register action to your user resource. This is defined as an upsert so that it can register new users, or update information for returning users. The default name of the action is `register_with_` followed by the strategy name. In our case that is `register_with_auth0`.

The register action takes two arguments, `user_info` and the `oauth_tokens`.

- `user_info` contains the [`GET /userinfo` response from Auth0](https://auth0.com/docs/api/authentication#get-user-info) which you can use to populate your user attributes as needed.
- `oauth_tokens` contains the [`POST /oauth/token` response from Auth0](https://auth0.com/docs/api/authentication#get-token) - you may want to store these if you intend to call the Auth0 API on behalf of the user.

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  # ...

  actions do
    create :register_with_auth0 do
      argument :user_info, :map, allow_nil?: false
      argument :oauth_tokens, :map, allow_nil?: false
      upsert? true
      upsert_identity :unique_email

      # Required if you have token generation enabled.
      change AshAuthentication.GenerateTokenChange

      # Required if you have the `identity_resource` configuration enabled.
      change AshAuthentication.Strategy.OAuth2.IdentityChange

      change fn changeset, _ ->
        user_info = Ash.Changeset.get_argument(changeset, :user_info)

        Ash.Changeset.change_attributes(changeset, Map.take(user_info, ["email"]))
      end
    end
  end

  # ...

end
```

[← Previous Page Get started with Ash Authentication](get-started.html)

[Next Page → Confirmation Tutorial](confirmation.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/tutorials/auth0.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/tutorials/confirmation.md#L1 "View Source") Confirmation Tutorial

This add-on allows you to confirm changes to a user record by generating and sending them a confirmation token which they must submit before allowing the change to take place.

In this tutorial we'll assume that you have a `User` resource which uses `email` as it's user identifier. We'll show you how to confirm a new user on sign-up and also require them to confirm if they wish to change their email address.

## [](confirmation.html#important-security-notes)Important security notes

If you are using multiple strategies that use emails, where one of the strategy has an upsert registration (like social sign-up, magic link registration), then you *must* use the confirmation add-on to prevent account hijacking, as described below.

Example scenario:

- Attacker signs up with email of their target and a password, but does not confirm their email.
- Their target signs up with google or magic link, etc, which upserts the user, and sets `confirmed_at` to `true`.
- Now, the user has created an account but the attacker has access via the password they originally set.

### [](confirmation.html#how-to-handle-this)How to handle this?

#### Automatic Handling

The confirmation add-on prevents this by default by not allowing an upsert action to set `confirmed_at`, if there is a matching record that has `confirmed_at` that is currently `nil`. This allows you to show a message to the user like "You signed up with a different method. Please sign in with the method you used to sign up."

#### auto\_confirming and clearing the password on upsert

An alternative is to clear the user's password on upsert. To do this, you would want to ensure the following things are true:

- The upsert registration action(s) are in the `auto_confirm_actions` (which you want anyway)
- The upsert registration action(s) set `hashed_password` to `nil`, removing any access an attacker may have had
- The `prevent_hijacking?` option is set to `false` on the confirmation add on and the auth strategies you are using.
- A user cannot access your application or take any action without a confirmed account. For example, redirecting to a "please confirm your account" page.

Why do you have to ensure that no actions can be taken without a confirmed account?

This does technically remove any access that the attacker may have had from the account, but we don't suggest taking this approach unless you are absolutely sure that you know what you are doing. For example, lets say you have an app that shows where the user is in the world, or where their friends are in the world. Lets say you also allow configuring a phone number to receive text notifications when they are near one of their friends. An attacker could sign up with a password, and configure their phone number. Then, their target signs up with Oauth or magic link, adds some friends, but doesn't notice that a phone number is configured.

Now the attacker is getting text messages about where the user and/or their friends are.

#### Opt-out

You can set `prevent_hijacking? false` on either the confirmation add-on, or your strategy to disable the automatic handling described above, and not follow the steps recommended in the section section above. This is not recommended.

## [](confirmation.html#tutorial)Tutorial

Here's the user resource we'll be starting with:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false, public?: true, sensitive?: true
    attribute :hashed_password, :string, allow_nil?: false, public?: false, sensitive?: true
  end

  authentication do
    strategies do
      password :password do
        identity_field :email
        hashed_password_field :hashed_password
      end
    end
  end

  identities do
    identity :unique_email, [:email]
  end
end
```

## [](confirmation.html#confirming-newly-registered-users)Confirming newly registered users

First we start by adding the confirmation add-on to your existing authentication DSL:

```
defmodule MyApp.Accounts.User do
  # ...

  authentication do
    # ...

    add_ons do
      confirmation :confirm_new_user do
        monitor_fields [:email]
        confirm_on_create? true
        confirm_on_update? false
        sender MyApp.Accounts.User.Senders.SendNewUserConfirmationEmail
      end
    end
  end
end
```

Next we will have to generate and run migrations to add confirmed\_at column to user resource

```
mix ash.codegen account_confirmation
```

To make this work we need to create a new module `MyApp.Accounts.User.Senders.SendNewUserConfirmationEmail`:

```
defmodule MyApp.Accounts.User.Senders.SendNewUserConfirmationEmail do
  @moduledoc """
  Sends an email confirmation email
  """
  use AshAuthentication.Sender
  use MyAppWeb, :verified_routes

  @impl AshAuthentication.Sender
  def send(user, token, _opts) do
    MyApp.Accounts.Emails.deliver_email_confirmation_instructions(
      user,
      url(~p"/auth/user/confirm_new_user?#{[confirm: token]}")
    )
  end
end
```

We also need to create a new email template:

```
defmodule Example.Accounts.Emails do
  @moduledoc """
  Delivers emails.
  """

  import Swoosh.Email

  def deliver_email_confirmation_instructions(user, url) do
    if !url do
      raise "Cannot deliver confirmation instructions without a url"
    end

    deliver(user.email, "Confirm your email address", """
      <p>
        Hi #{user.email},
      </p>

      <p>
        Someone has tried to register a new account using this email address.
        If it was you, then please click the link below to confirm your identity. If you did not initiate this request then please ignore this email.
      </p>

      <p>
        <a href="#{url}">Click here to confirm your account</a>
      </p>
    """)
  end

  # For simplicity, this module simply logs messages to the terminal.
  # You should replace it by a proper email or notification tool, such as:
  #
  #   * Swoosh - https://hexdocs.pm/swoosh
  #   * Bamboo - https://hexdocs.pm/bamboo
  #
  defp deliver(to, subject, body) do
    IO.puts("Sending email to #{to} with subject #{subject} and body #{body}")

    new()
    |> from({"Zach", "zach@ash-hq.org"}) # TODO: Replace with your email
    |> to(to_string(to))
    |> subject(subject)
    |> put_provider_option(:track_links, "None")
    |> html_body(body)
    |> MyApp.Mailer.deliver!()
  end
end
```

Provided you have your authentication routes hooked up either via [`AshAuthentication.Plug`](AshAuthentication.Plug.html) or [`AshAuthentication.Phoenix.Router`](../ash_authentication_phoenix/AshAuthentication.Phoenix.Router.html) then the user will be confirmed when the token is submitted.

## [](confirmation.html#blocking-unconfirmed-users-from-logging-in)Blocking unconfirmed users from logging in

The above section explains how to confirm an user account. There's a new directive in the [dsl](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-require_confirmed_with) which can require the user to be confirmed in order to log in.

So:

```
strategies do
  strategy :password do
    ...
    require_confirmed_with :confirmed_at
  end
end
```

this will make impossible for unconfirmed users to log in. Note that at the moment it is developer responsibility to handle the scenario, for example redirecting the user to a page that gives some context and maybe offers the chance to require a new confirmation email in case the previous one is lost.

If the field value is `nil` or if the field itself is not present, no confirmation check will be enforced.

## [](confirmation.html#confirming-changes-to-monitored-fields)Confirming changes to monitored fields

You may want to require a user to perform a confirmation when a certain field changes. For example if a user changes their email address we can send them a new confirmation request.

First, let's start by defining a new confirmation add-on in our resource:

```
defmodule MyApp.Accounts.User do
  # ...

  authentication do
    # ...

    add_ons do
      confirmation :confirm_change do
        monitor_fields [:email]
        confirm_on_create? false
        confirm_on_update? true
        confirm_action_name :confirm_change
        sender MyApp.Accounts.User.Senders.SendEmailChangeConfirmationEmail
      end
    end
  end
end
```

#### Why two confirmation configurations?

While you can perform both of these confirmations with a single confirmation add-on, in general the Ash philosophy is to be more explicit. Each confirmation will have it's own URL (based on the name) and tokens for one will not be able to be used for the other.

Next, let's define our new sender:

```
defmodule MyApp.Accounts.User.Senders.SendEmailChangeConfirmationEmail do
  @moduledoc """
  Sends an email change confirmation email
  """
  use AshAuthentication.Sender
  use MyAppWeb, :verified_routes

  @impl AshAuthentication.Sender
  def send(user, token, _opts) do
    MyApp.Accounts.Emails.deliver_email_change_confirmation_instructions(
      user,
      url(~p"/auth/user/confirm_change?#{[confirm: token]}")
    )
  end
end
```

And our new email template:

```
defmodule MyApp.Accounts.Emails do
  # ...

  def deliver_email_change_confirmation_instructions(user, url) do
    if !url do
      raise "Cannot deliver confirmation instructions without a url"
    end

    deliver(user.email, "Confirm your new email address", """
      <p>
        Hi #{user.email},
      </p>

      <p>
        You recently changed your email address. Please confirm it.
      </p>

      <p>
        <a href="#{url}">Click here to confirm your new email address</a>
      </p>
    """)
  end

  # ...
end
```

#### Inhibiting changes

Depending on whether you want the user's changes to be applied *before* or *after* confirmation, you can enable the [`inhibit_updates?` DSL option](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-inhibit_updates?).

When this option is enabled, then any potential changes to monitored fields are instead temporarily stored in the [token resource](dsl-ashauthentication-tokenresource.html) and applied when the confirmation action is run.

## [](confirmation.html#customising-the-confirmation-action)Customising the confirmation action

By default Ash Authentication will generate an update action for confirmation automatically (named `:confirm` unless you change it). You can manually implement this action in order to change it's behaviour and AshAuthentication will validate that the required changes are also present.

For example, here's an implementation of the `:confirm_change` action mentioned above, which adds a custom change that updates a remote CRM system with the user's new address.

```
defmodule MyApp.Accounts.User do
  # ...

  actions do
    # ...

    update :confirm_change do
      argument :confirm, :string, allow_nil?: false, public?: true
      accept [:email]
      require_atomic? false
      change AshAuthentication.AddOn.Confirmation.ConfirmChange
      change AshAuthentication.GenerateTokenChange
      change MyApp.UpdateCrmSystem, only_when_valid?: true
    end
  end
end
```

[← Previous Page Auth0 Tutorial](auth0.html)

[Next Page → GitHub Tutorial](github.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/tutorials/confirmation.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/topics/custom-strategy.md#L1 "View Source") Defining Custom Authentication Strategies

AshAuthentication allows you to bring your own authentication strategy without having to change the Ash Authentication codebase.

#### Add-on vs Strategy?

There is functionally no difference between "add ons" and "strategies" other than where they appear in the DSL. We invented "add ons" because it felt weird calling "confirmation" an authentication strategy.

There are several moving parts which must all work together so hold on to your hat!

1. A [`Spark.Dsl.Entity`](../spark/2.2.40/Spark.Dsl.Entity.html) struct. This is used to define the strategy DSL inside the `strategies` (or `add_ons`) section of the `authentication` DSL.
2. A strategy struct, which stores information about the strategy as configured on a resource which must comply with a few rules.
3. An optional transformer, which can be used to manipulate the DSL state of the entity and the resource.
4. An optional verifier, which can be used to verify the DSL state of the entity and the resource after compilation.
5. The [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol, which provides the glue needed for everything to wire up and wrappers around the actions needed to run on the resource.

We're going to define an extremely dumb strategy which lets anyone with a name that starts with "Marty" sign in with just their name. Of course you would never do this in real life, but this isn't real life - it's documentation!

## [](custom-strategy.html#dsl-setup)DSL setup

Let's start by defining a module for our strategy to live in. Let's call it `OnlyMartiesAtTheParty`:

```
defmodule OnlyMartiesAtTheParty do
  use AshAuthentication.Strategy.Custom
end
```

Sadly, this isn't enough to make the magic happen. We need to define our DSL entity by adding it to the `use` statement:

```
defmodule OnlyMartiesAtTheParty do
  @entity %Spark.Dsl.Entity{
    name: :only_marty,
    describe: "Strategy which only allows folks whose name starts with \"Marty\" to sign in.",
    examples: [
      """
      only_marty do
        case_sensitive? true
        name_field :name
      end
      """
    ],
    target: __MODULE__,
    args: [{:optional, :name, :marty}],
    schema: [
      name: [
        type: :atom,
        doc: """
        The strategy name.
        """,
        required: true
      ],
      case_sensitive?: [
        type: :boolean,
        doc: """
        Ignore letter case when comparing?
        """,
        required: false,
        default: false
      ],
      name_field: [
        type: :atom,
        doc: """
        The field to check for the users' name.
        """,
        required: true
      ]
    ]
  }

  use AshAuthentication.Strategy.Custom, entity: @entity
end
```

If you haven't you should take a look at the docs for [`Spark.Dsl.Entity`](../spark/2.2.40/Spark.Dsl.Entity.html), but here's a brief overview of what each field we've set does:

- `name` is the name for which the helper function will be generated in the DSL (ie `only_marty do #... end`).
- `describe` and `examples` are used when generating documentation.
- `target` is the name of the module which defines our entity struct. We've set it to `__MODULE__` which means that we'll have to define the struct on this module.
- `schema` is a keyword list that defines an options schema. See [`Spark.Options`](../spark/2.2.40/Spark.Options.html).

> By default the entity is added to the `authentication / strategy` DSL, however if you want it in the `authentication / add_ons` DSL instead you can also pass `style: :add_on` in the `use` statement.

Next up, we need to define our struct. The struct should have *at least* the fields named in the entity schema. Additionally, Ash Authentication requires that it have a `resource` field which will be set to the module of the resource it's attached to during compilation.

```
defmodule OnlyMartiesAtTheParty do
  defstruct name: :marty, case_sensitive?: false, name_field: nil, resource: nil

  # ...

  use AshAuthentication.Strategy.Custom, entity: @entity

  # other code elided ...
end
```

Now it would be theoretically possible to add this custom strategies to your app by adding it to the `extensions` section of your resource:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication, OnlyMartiesAtTheParty],
    domain: MyApp.Accounts

  authentication do
    strategies do
      only_marty do
        name_field :name
      end
    end
  end

  attributes do
    uuid_primary_key
    attribute :name, :string, allow_nil?: false
  end
end
```

## [](custom-strategy.html#implementing-the-ashauthentication-strategy-protocol)Implementing the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol

The Strategy protocol is used to introspect the strategy so that it can seamlessly fit in with the rest of Ash Authentication. Here are the key concepts:

- "phases" - in terms of HTTP, each strategy is likely to have many phases (eg OAuth 2.0's "request" and "callback" phases). Essentially you need one phase for each HTTP endpoint you wish to support with your strategy. In our case we just want one sign in endpoint.
- "actions" - actions are exactly as they sound - Resource actions which can be executed by the strategy, whether generated by the strategy (as in the password strategy) or typed in by the user (as in the OAuth 2.0 strategy). The reason that we wrap the strategy's actions this way is that all the built-in strategies (and we hope yours too) allow the user to customise the name of the actions that it uses. At the very least it should probably append the strategy name to the action. Using `Strategy.action/4` allows us to refer these by a more generic name rather than via the user-specified one (eg `:register` vs `:register_with_password`).
- "routes" - [`AshAuthentication.Plug`](AshAuthentication.Plug.html) (or [`AshAuthentication.Phoenix.Router.html`](../ash_authentication_phoenix/AshAuthentication.Phoenix.Router.html)) will generate routes using [`Plug.Router`](../plug/1.16.1/Plug.Router.html) (or [`Phoenix.Router`](../phoenix/Phoenix.Router.html)) - the `routes/1` callback is used to retrieve this information from the strategy.

Given this information, let's implement the strategy. It's quite long, so I'm going to break it up into smaller chunks.

```
defimpl AshAuthentication.Strategy, for: OnlyMartiesAtTheParty do
```

The `name/1` function is used to uniquely identify the strategy. It *must* be an atom and *should* be the same as the path fragment used in the generated routes.

```
  def name(strategy), do: strategy.name
```

Since our strategy only supports sign-in we only need a single `:sign_in` phase and action.

```
  def phases(_), do: [:sign_in]
  def actions(_), do: [:sign_in]
```

Next we generate the routes for the strategy. Routes *should* contain the subject name of the resource being authenticated in case the implementer is authenticating multiple different resources - eg `User` and `Admin`.

```
  def routes(strategy) do
    subject_name = AshAuthentication.Info.authentication_subject_name!(strategy.resource)

    [
      {"/#{subject_name}/#{strategy.name}", :sign_in}
    ]
  end
```

When generating routes or forms for this phase, what HTTP method should we use?

```
  def method_for_phase(_, :sign_in), do: :post
```

Next up, we write our plug. We take the "name field" from the input params in the conn and pass them to our sign in action. As long as the action returns `{:ok, Ash.Resource.record}` or `{:error, any}` then we can just pass it straight into `store_authentication_result/2` from [`AshAuthentication.Plug.Helpers`](AshAuthentication.Plug.Helpers.html).

```
  import AshAuthentication.Plug.Helpers, only: [store_authentication_result: 2]

  def plug(strategy, :sign_in, conn) do
    params = Map.take(conn.params, [to_string(strategy.name_field)])
    result = action(strategy, :sign_in, params, [])
    store_authentication_result(conn, result)
  end
```

Next, we implement our sign in action. We use [`Ash.Query`](../ash/3.4.56/Ash.Query.html) to find all records whose name field matches the input, then constrain it to only records whose name field starts with "Marty". Depending on whether the name field has a unique identity on it we have to deal with it returning zero or more users, or an error. When it returns a single user we return that user in an ok tuple, otherwise we return an authentication failure.

In this example we're assuming that there is a default `read` action present on the resource.

#### Warning

When it comes to authentication, you never want to reveal to the user what the failure was - this helps prevent [enumeration attacks](https://www.hacksplaining.com/prevention/user-enumeration).

You can use [`AshAuthentication.Errors.AuthenticationFailed`](AshAuthentication.Errors.AuthenticationFailed.html) for this purpose as it will cause `ash_authentication`, `ash_authentication_phoenix`, `ash_graphql` and `ash_json_api` to return the correct HTTP 401 error.

```
  alias AshAuthentication.Errors.AuthenticationFailed
  require Ash.Query
  import Ash.Expr

  def action(strategy, :sign_in, params, options) do
    name_field = strategy.name_field
    name = Map.get(params, to_string(name_field))
    domain = AshAuthentication.Info.domain!(strategy.resource)

    strategy.resource
    |> Ash.Query.filter(expr(^ref(name_field) == ^name))
    |> then(fn query ->
      if strategy.case_sensitive? do
        Ash.Query.filter(query, like(^ref(name_field), "Marty%"))
      else
        Ash.Query.filter(query, ilike(^ref(name_field), "Marty%"))
      end
    end)
    |> Ash.read(options)
    |> case do
      {:ok, [user]} ->
        {:ok, user}

      {:ok, []} ->
        {:error, AuthenticationFailed.exception(caused_by: %{reason: :no_user})}

      {:ok, _users} ->
        {:error, AuthenticationFailed.exception(caused_by: %{reason: :too_many_users})}

      {:error, reason} ->
        {:error, AuthenticationFailed.exception(caused_by: %{reason: reason})}
    end
  end
end
```

Lastly, we have to implement the `tokens_required?/1` function. This function indicates Ash Authentication whether your strategy creates or consumes any tokens. Since our strategy does not, we can simply return false:

```
def tokens_required?(_), do: false
```

## [](custom-strategy.html#bonus-round-transformers-and-verifiers)Bonus round - transformers and verifiers

In some cases it may be required for your strategy to modify it's own configuration or that of the whole resource at compile time. For that you can define the `transform/2` callback on your strategy module.

At the very least it is good practice to call [`AshAuthentication.Strategy.Custom.Helpers.register_strategy_actions/3`](AshAuthentication.Strategy.Custom.Helpers.html#register_strategy_actions/3) so that Ash Authentication can keep track of which actions are related to which strategies and [`AshAuthentication.Strategy.Custom.Helpers`](AshAuthentication.Strategy.Custom.Helpers.html) is automatically imported by `use AshAuthentication.Strategy.Custom` for this purpose.

### [](custom-strategy.html#transformers)Transformers

For simple cases where you're just transforming the strategy you can just return the modified strategy and the DSL will be updated accordingly. For example if you wanted to generate the name of an action if the user hasn't specified it:

```
def transform(strategy, _dsl_state) do
  {:ok, Map.put_new(strategy, :sign_in_action_name, :"sign_in_with_#{strategy.name}")}
end
```

In some cases you may want to modify the strategy and the resources DSL. In this case you can return the newly mutated DSL state in an ok tuple or an error tuple, preferably containing a [`Spark.Error.DslError`](../spark/2.2.40/Spark.Error.DslError.html). For example if we wanted to build a sign in action for `OnlyMartiesAtTheParty` to use:

```
def transform(strategy, dsl_state) do
  strategy = Map.put_new(strategy, :sign_in_action_name, :"sign_in_with_#{strategy.name}")

  sign_in_action =
    Spark.Dsl.Transformer.build_entity(Ash.Resource.Dsl, [:actions], :read,
      name: strategy.sign_in_action_name,
      accept: [strategy.name_field],
      get?: true
    )

  dsl_state =
    dsl_state
    |> Spark.Dsl.Transformer.add_entity([:actions], sign_in_action)
    |> put_strategy(strategy)
    |> then(fn dsl_state ->
      register_strategy_actions([strategy.sign_in_action_name], dsl_state, strategy)
    end)

  {:ok, dsl_state}
end
```

Transformers can also be used to validate user input or even directly add code to the resource. See the docs for [`Spark.Dsl.Transformer`](../spark/2.2.40/Spark.Dsl.Transformer.html) for more information.

### [](custom-strategy.html#verifiers)Verifiers

We also support a variant of transformers which run in the new `@after_verify` compile hook provided by Elixir 1.14. This is a great place to put checks to make sure that the user's configuration makes sense without adding any compile-time dependencies between modules which may cause compiler deadlocks.

For example, verifying that the "name" attribute contains "marty" (why you would do this I don't know but I'm running out of sensible examples):

```
def verify(strategy, _dsl_state) do
  if String.contains?(to_string(strategy.name_field), "marty") do
    :ok
  else
    {:error,
      Spark.Error.DslError.exception(
        path: [:authentication, :strategies, :only_marties],
        message: "Option `name_field` must contain \"marty\""
      )}
  end
end
```

## [](custom-strategy.html#summary)Summary

You should now have all the tools you need to build custom strategies - and in fact the strategies provided by Ash Authentication are built using this system.

If there is functionality or documentation missing please [raise an issue](https://github.com/team-alembic/ash_authentication/issues/new) and we'll take a look at it.

Go forth and strategise!

[← Previous Page Slack Tutorial](slack.html)

[Next Page → Policies on Authenticated Resources](policies-on-authentication-resources.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/topics/custom-strategy.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.AddOn.Confirmation.md#L1 "View Source") AshAuthentication.AddOn.Confirmation

Confirmation support.

Sometimes when creating a new user, or changing a sensitive attribute (such as their email address) you may want to wait for the user to confirm by way of sending them a confirmation token to prove that it was really them that took the action.

In order to add confirmation to your resource, it must been the following minimum requirements:

1. Have a primary key
2. Have at least one attribute you wish to confirm
3. Tokens must be enabled

## [](dsl-ashauthentication-addon-confirmation.html#example)Example

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  authentication do
    add_ons do
      confirmation :confirm do
        monitor_fields [:email]
        sender MyApp.ConfirmationSender
      end
    end

    strategies do
      # ...
    end
  end

  identities do
    identity :email, [:email]
  end
end
```

## [](dsl-ashauthentication-addon-confirmation.html#attributes)Attributes

A `confirmed_at` attribute will be added to your resource if it's not already present (see `confirmed_at_field` in the DSL documentation).

## [](dsl-ashauthentication-addon-confirmation.html#actions)Actions

By default confirmation will add an action which updates the `confirmed_at` attribute as well as retrieving previously stored changes and applying them to the resource.

If you wish to perform the confirm action directly from your code you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](dsl-ashauthentication-addon-confirmation.html#example-1)Example

```
iex> strategy = Info.strategy!(Example.User, :confirm)
...> {:ok, user} = Strategy.action(strategy, :confirm, %{"confirm" => confirmation_token()})
...> user.confirmed_at >= one_second_ago()
true
```

## [](dsl-ashauthentication-addon-confirmation.html#plugs)Plugs

Confirmation provides a single endpoint for the `:confirm` phase. If you wish to interact with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](dsl-ashauthentication-addon-confirmation.html#example-2)Example

```
iex> strategy = Info.strategy!(Example.User, :confirm)
...> conn = conn(:get, "/user/confirm", %{"confirm" => confirmation_token()})
...> conn = Strategy.plug(strategy, :confirm, conn)
...> {_conn, {:ok, user}} = Plug.Helpers.get_authentication_result(conn)
...> user.confirmed_at >= one_second_ago()
true
```

### [](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation)authentication.add\_ons.confirmation

```
confirmation name \\ :confirm
```

User confirmation flow

### [](dsl-ashauthentication-addon-confirmation.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-name)`atom`Uniquely identifies the add-on.

### [](dsl-ashauthentication-addon-confirmation.html#options)Options

NameTypeDefaultDocs[`monitor_fields`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-monitor_fields)`list(atom)`A list of fields to monitor for changes. Confirmation will be sent when one of these fields are changed.[`sender`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-sender)`(any, any, any -> any) | module`How to send the confirmation instructions to the user.[`token_lifetime`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-token_lifetime)`pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}``{3, :days}`How long should the confirmation token be valid. If no unit is provided, then hours is assumed.[`prevent_hijacking?`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-prevent_hijacking?)`boolean``true`Whether or not to prevent upserts over unconfirmed uers. See [the confirmation guide](confirmation.html) for more.[`confirmed_at_field`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-confirmed_at_field)`atom``:confirmed_at`The name of the field to store the time that the last confirmation took place. Created if it does not exist.[`confirm_on_create?`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-confirm_on_create?)`boolean``true`Generate and send a confirmation token when a new resource is created. Triggers when a create action is executed *and* one of the monitored fields is being set.[`confirm_on_update?`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-confirm_on_update?)`boolean``true`Generate and send a confirmation token when a resource is changed. Triggers when an update action is executed *and* one of the monitored fields is being set.[`inhibit_updates?`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-inhibit_updates?)`boolean``true`Whether or not to wait until confirmation is received before actually changing a monitored field. See [the confirmation guide](confirmation.html) for more.[`auto_confirm_actions`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-auto_confirm_actions)`list(atom)`A list of actions that should set confirmed\_at to `true` automatically. For example, you would likely want to place `:sign_in_with_magic_link` in this list if using magic link.[`confirm_action_name`](dsl-ashauthentication-addon-confirmation.html#authentication-add_ons-confirmation-confirm_action_name)`atom`The name of the action to use when performing confirmation. Will be created if it does not already exist. Defaults to confirm\_&lt;String.trim\_leading(strategy\_name, "confirm")&gt;

### [](dsl-ashauthentication-addon-confirmation.html#introspection)Introspection

Target: [`AshAuthentication.AddOn.Confirmation`](AshAuthentication.AddOn.Confirmation.html)

[← Previous Page Upgrading](upgrading.html)

[Next Page → AshAuthentication](dsl-ashauthentication.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.AddOn.Confirmation.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.md#L1 "View Source") AshAuthentication

AshAuthentication provides a turn-key authentication solution for folks using [Ash](https://www.ash-hq.org/).

## [](dsl-ashauthentication.html#usage)Usage

This package assumes that you have [Ash](https://ash-hq.org/) installed and configured. See the Ash documentation for details.

Once installed you can easily add support for authentication by configuring the [`AshAuthentication`](AshAuthentication.html) extension on your resource:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
    attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
  end

  authentication do
    strategies do
      password :password do
        identity_field :email
        hashed_password_field :hashed_password
      end
    end
  end

  identities do
    identity :unique_email, [:email]
  end
end
```

If you plan on providing authentication via the web, then you will need to define a plug using [`AshAuthentication.Plug`](AshAuthentication.Plug.html) which builds a [`Plug.Router`](../plug/1.16.1/Plug.Router.html) that routes incoming authentication requests to the correct provider and provides callbacks for you to manipulate the conn after success or failure.

If you're using AshAuthentication with Phoenix, then check out [`ash_authentication_phoenix`](https://github.com/team-alembic/ash_authentication_phoenix) which provides route helpers, a controller abstraction and LiveView components for easy set up.

## [](dsl-ashauthentication.html#authentication-strategies)Authentication Strategies

Currently supported strategies:

1. [`AshAuthentication.Strategy.Password`](AshAuthentication.Strategy.Password.html)
   
   - authenticate users against your local database using a unique identity (such as username or email address) and a password.
2. [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)
   
   - authenticate using local or remote [OAuth 2.0](https://oauth.net/2/) compatible services.
   - also includes:
     
     - [`AshAuthentication.Strategy.Apple`](AshAuthentication.Strategy.Apple.html)
     - [`AshAuthentication.Strategy.Auth0`](AshAuthentication.Strategy.Auth0.html)
     - [`AshAuthentication.Strategy.Github`](AshAuthentication.Strategy.Github.html)
     - [`AshAuthentication.Strategy.Google`](AshAuthentication.Strategy.Google.html)
     - [`AshAuthentication.Strategy.Oidc`](AshAuthentication.Strategy.Oidc.html)
     - [`AshAuthentication.Strategy.Slack`](AshAuthentication.Strategy.Slack.html)
3. [`AshAuthentication.Strategy.MagicLink`](AshAuthentication.Strategy.MagicLink.html)
   
   - authenticate by sending a single-use link to the user.

### [](dsl-ashauthentication.html#http-client-settings)HTTP client settings

Most of the authentication strategies based on `OAuth2` wrap the [`assent`](https://hex.pm/packages/assent) package.

If you needs to customize the behavior of the http client used by `assent`, define a custom `http_adapter` in the application settings:

`config :ash_authentication, :http_adapter, {Assent.HTTPAdapter.Finch, supervisor: MyApp.CustomFinch}`

See [`assent's documentation`](https://hexdocs.pm/assent/README.html#http-client) for more details on the supported http clients and their configuration.

## [](dsl-ashauthentication.html#add-ons)Add-ons

Add-ons are like strategies, except that they don't actually provide authentication - they just provide features adjacent to authentication. Current add-ons:

1. [`AshAuthentication.AddOn.Confirmation`](AshAuthentication.AddOn.Confirmation.html)
   
   - allows you to force the user to confirm changes using a confirmation token (eg. sending a confirmation email when a new user registers).

## [](dsl-ashauthentication.html#supervisor)Supervisor

Some add-ons or strategies may require processes to be started which manage their state over the lifetime of the application (eg periodically deleting expired token revocations). Because of this you should add `{AshAuthentication.Supervisor, otp_app: :my_app}` to your application's supervision tree. See [the Elixir docs](../elixir/Application.html#module-the-application-callback-module) for more information.

## [](dsl-ashauthentication.html#authentication)authentication

Configure authentication for this resource

### [](dsl-ashauthentication.html#nested-dsls)Nested DSLs

- [tokens](dsl-ashauthentication.html#authentication-tokens)
- [strategies](dsl-ashauthentication.html#authentication-strategies)
- [add\_ons](dsl-ashauthentication.html#authentication-add_ons)

### [](dsl-ashauthentication.html#options)Options

NameTypeDefaultDocs[`subject_name`](dsl-ashauthentication.html#authentication-subject_name)`atom`The subject name is used anywhere that a short version of your resource name is needed. Must be unique system-wide and will be inferred from the resource name by default (ie `MyApp.Accounts.User` -&gt; `user`).[`domain`](dsl-ashauthentication.html#authentication-domain)`module`The name of the Ash domain to use to access this resource when doing anything authentication related.[`get_by_subject_action_name`](dsl-ashauthentication.html#authentication-get_by_subject_action_name)`atom``:get_by_subject`The name of the read action used to retrieve records. If the action doesn't exist, one will be generated for you.[`select_for_senders`](dsl-ashauthentication.html#authentication-select_for_senders)`list(atom)`A list of fields that we will ensure are selected whenever a sender will be invoked. Defaults to `[:email]` if there is an `:email` attribute on the resource, and `[]` otherwise.

### [](dsl-ashauthentication.html#authentication-tokens)authentication.tokens

Configure JWT settings for this resource

### [](dsl-ashauthentication.html#options-1)Options

NameTypeDefaultDocs[`token_resource`](dsl-ashauthentication.html#authentication-tokens-token_resource)`module | false`The resource used to store token information, such as in-flight confirmations, revocations, and if `store_all_tokens?` is enabled, authentication tokens themselves.[`enabled?`](dsl-ashauthentication.html#authentication-tokens-enabled?)`boolean``false`Should JWTs be generated by this resource?[`store_all_tokens?`](dsl-ashauthentication.html#authentication-tokens-store_all_tokens?)`boolean``false`Store all tokens in the `token_resource`. See the [tokens guide](tokens.html) for more.[`require_token_presence_for_authentication?`](dsl-ashauthentication.html#authentication-tokens-require_token_presence_for_authentication?)`boolean``false`Require a locally-stored token for authentication. See the [tokens guide](tokens.html) for more.[`signing_algorithm`](dsl-ashauthentication.html#authentication-tokens-signing_algorithm)`String.t``"HS256"`The algorithm to use for token signing. Available signing algorithms are; EdDSA, Ed448ph, Ed448, Ed25519ph, Ed25519, PS512, PS384, PS256, ES512, ES384, ES256, RS512, RS384, RS256, HS512, HS384 and HS256.[`token_lifetime`](dsl-ashauthentication.html#authentication-tokens-token_lifetime)`pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}``{14, :days}`How long a token should be valid. See [the tokens guide](tokens.html) for more.[`signing_secret`](dsl-ashauthentication.html#authentication-tokens-signing_secret)`(any, any -> any) | module | String.t`The secret used to sign tokens. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.

### [](dsl-ashauthentication.html#authentication-strategies-1)authentication.strategies

Configure authentication strategies on this resource

### [](dsl-ashauthentication.html#authentication-add_ons)authentication.add\_ons

Additional add-ons related to, but not providing authentication

[← Previous Page AshAuthentication.AddOn.Confirmation](dsl-ashauthentication-addon-confirmation.html)

[Next Page → AshAuthentication.Strategy.Apple](dsl-ashauthentication-strategy-apple.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.Apple.md#L1 "View Source") AshAuthentication.Strategy.Apple

Strategy for authenticating using [Apple Sign In](https://developer.apple.com/sign-in-with-apple/)

This strategy builds on-top of [`AshAuthentication.Strategy.Oidc`](AshAuthentication.Strategy.Oidc.html) and [`assent`](https://hex.pm/packages/assent).

In order to use Apple Sign In you need to provide the following minimum configuration:

- `client_id`
- `team_id`
- `private_key_id`
- `private_key_path`
- `redirect_uri`

## [](dsl-ashauthentication-strategy-apple.html#more-documentation)More documentation:

- The [Apple Sign In Documentation](https://developer.apple.com/documentation/sign_in_with_apple).
- The [OIDC documentation](AshAuthentication.Strategy.Oidc.html)

### [](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple)authentication.strategies.apple

```
apple name \\ :apple
```

Provides a pre-configured authentication strategy for [Apple Sign In](https://developer.apple.com/sign-in-with-apple/).

This strategy is built using the `:oidc` strategy, and thus provides all the same configuration options should you need them.

#### More documentation:

- The [Apple Sign In Documentation](https://developer.apple.com/documentation/sign_in_with_apple).
- The [OIDC documentation](AshAuthentication.Strategy.Oidc.html)

###### Strategy defaults:

The following defaults are applied:

- `:base_url` is set to `"https://appleid.apple.com"`.
- `:openid_configuration` is set to `%{"authorization_endpoint" => "https://appleid.apple.com/auth/authorize", "issuer" => "https://appleid.apple.com", "jwks_uri" => "https://appleid.apple.com/auth/keys", "token_endpoint" => "https://appleid.apple.com/auth/token", "token_endpoint_auth_methods_supported" => ["client_secret_post"]}`.
- `:authorization_params` is set to `[scope: "email", response_mode: "form_post"]`.
- `:client_authentication_method` is set to `"client_secret_post"`.
- `:openid_default_scope` is set to `nil`.

### [](dsl-ashauthentication-strategy-apple.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-name)`atom`Uniquely identifies the strategy.

### [](dsl-ashauthentication-strategy-apple.html#options)Options

NameTypeDefaultDocs[`client_id`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-client_id)`(any, any -> any) | module | String.t`The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`redirect_uri`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-redirect_uri)`(any, any -> any) | module | String.t`The callback URI *base*. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`team_id`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-team_id)`(any, any -> any) | module | String.t`The Apple team ID associated with the application.[`private_key_id`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-private_key_id)`(any, any -> any) | module | String.t`The private key ID used for signing the JWT token.[`private_key_path`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-private_key_path)`(any, any -> any) | module | String.t`The path to the private key file used for signing the JWT token.[`site`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-site)`(any, any -> any) | module | String.t`Deprecated: Use `base_url` instead.[`prevent_hijacking?`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-prevent_hijacking?)`boolean``true`Requires a confirmation add\_on to be present if the password strategy is used with the same identity\_field.[`auth_method`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-auth_method)`nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt``:client_secret_post`The authentication strategy used, optional. If not set, no authentication will be used during the access token request.[`client_secret`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-client_secret)`(any, any -> any) | module | String.t`The OAuth2 client secret. Required if :auth\_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`trusted_audiences`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-trusted_audiences)`(any, any -> any) | module | list(any) | nil`A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`private_key`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-private_key)`(any, any -> any) | module | String.t`The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`registration_enabled?`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-registration_enabled?)`boolean``true`If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.[`register_action_name`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-register_action_name)`atom`The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.[`sign_in_action_name`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-sign_in_action_name)`atom`The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.[`identity_resource`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-identity_resource)`module | false``false`The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.[`identity_relationship_name`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-identity_relationship_name)`atom``:identities`Name of the relationship to the provider identities resource[`identity_relationship_user_id_attribute`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-identity_relationship_user_id_attribute)`atom``:user_id`The name of the destination (user\_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.[`openid_configuration_uri`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-openid_configuration_uri)`String.t``"/.well-known/openid-configuration"`The URI for the OpenID provider[`id_token_signed_response_alg`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-id_token_signed_response_alg)`"HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "Ed25519" | "Ed25519ph" | "Ed448" | "Ed448ph" | "EdDSA"``"RS256"`The `id_token_signed_response_alg` parameter sent by the Client during Registration.[`id_token_ttl_seconds`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-id_token_ttl_seconds)`nil | pos_integer`The number of seconds from `iat` that an ID Token will be considered valid.[`nonce`](dsl-ashauthentication-strategy-apple.html#authentication-strategies-apple-nonce)`boolean | (any, any -> any) | module | String.t``true`A function for generating the session nonce, `true` to automatically generate it with [`AshAuthentication.Strategy.Oidc.NonceGenerator`](AshAuthentication.Strategy.Oidc.NonceGenerator.html), or `false` to disable.

### [](dsl-ashauthentication-strategy-apple.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)

[← Previous Page AshAuthentication](dsl-ashauthentication.html)

[Next Page → AshAuthentication.Strategy.Auth0](dsl-ashauthentication-strategy-auth0.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.Apple.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.Auth0.md#L1 "View Source") AshAuthentication.Strategy.Auth0

Strategy for authenticating using [Auth0](https://auth0.com).

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html) and [`assent`](https://hex.pm/packages/assent).

In order to use Auth0 you need to provide the following minimum configuration:

- `client_id`
- `redirect_uri`
- `client_secret`
- `site`

## [](dsl-ashauthentication-strategy-auth0.html#more-documentation)More documentation:

- The [Auth0 Tutorial](auth0.html).
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

### [](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0)authentication.strategies.auth0

```
auth0 name \\ :auth0
```

Provides a pre-configured authentication strategy for [Auth0](https://auth0.com/).

This strategy is built using the `:oauth2` strategy, and thus provides all the same configuration options should you need them.

###### More documentation:

- The [Auth0 Tutorial](auth0.html).
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

###### Strategy defaults:

The following defaults are applied:

- `:authorize_url` is set to `"/authorize"`.
- `:token_url` is set to `"/oauth/token"`.
- `:user_url` is set to `"/userinfo"`.
- `:authorization_params` is set to `[scope: "openid profile email"]`.
- `:auth_method` is set to `:client_secret_post`.

### [](dsl-ashauthentication-strategy-auth0.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-name)`atom`Uniquely identifies the strategy.

### [](dsl-ashauthentication-strategy-auth0.html#options)Options

NameTypeDefaultDocs[`client_id`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-client_id)`(any, any -> any) | module | String.t`The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`redirect_uri`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-redirect_uri)`(any, any -> any) | module | String.t`The callback URI *base*. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`base_url`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-base_url)`(any, any -> any) | module | String.t`The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`site`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-site)`(any, any -> any) | module | String.t`Deprecated: Use `base_url` instead.[`prevent_hijacking?`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-prevent_hijacking?)`boolean``true`Requires a confirmation add\_on to be present if the password strategy is used with the same identity\_field.[`auth_method`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-auth_method)`nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt``:client_secret_post`The authentication strategy used, optional. If not set, no authentication will be used during the access token request.[`client_secret`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-client_secret)`(any, any -> any) | module | String.t`The OAuth2 client secret. Required if :auth\_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorize_url`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-authorize_url)`(any, any -> any) | module | String.t``"/authorize"`The API url to the OAuth2 authorize endpoint, relative to `site`, e.g `authorize_url fn _, _ -> {:ok, "https://exampe.com/authorize"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`token_url`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-token_url)`(any, any -> any) | module | String.t``"/oauth/token"`The API url to access the token endpoint, relative to `site`, e.g `token_url fn _, _ -> {:ok, "https://example.com/oauth_token"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`trusted_audiences`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-trusted_audiences)`(any, any -> any) | module | list(any) | nil`A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`user_url`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-user_url)`(any, any -> any) | module | String.t``"/userinfo"`The API url to access the user endpoint, relative to `site`, e.g `user_url fn _, _ -> {:ok, "https://example.com/userinfo"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`private_key`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-private_key)`(any, any -> any) | module | String.t`The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorization_params`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-authorization_params)`keyword``[scope: "openid profile email"]`Any additional parameters to encode in the request phase. eg: `authorization_params scope: "openid profile email"`[`registration_enabled?`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-registration_enabled?)`boolean``true`If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.[`register_action_name`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-register_action_name)`atom`The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.[`sign_in_action_name`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-sign_in_action_name)`atom`The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.[`identity_resource`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-identity_resource)`module | false``false`The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.[`identity_relationship_name`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-identity_relationship_name)`atom``:identities`Name of the relationship to the provider identities resource[`identity_relationship_user_id_attribute`](dsl-ashauthentication-strategy-auth0.html#authentication-strategies-auth0-identity_relationship_user_id_attribute)`atom``:user_id`The name of the destination (user\_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.

### [](dsl-ashauthentication-strategy-auth0.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)

[← Previous Page AshAuthentication.Strategy.Apple](dsl-ashauthentication-strategy-apple.html)

[Next Page → AshAuthentication.Strategy.Github](dsl-ashauthentication-strategy-github.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.Auth0.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.Github.md#L1 "View Source") AshAuthentication.Strategy.Github

Strategy for authenticating using [GitHub](https://github.com)

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html) and [`assent`](https://hex.pm/packages/assent).

In order to use GitHub you need to provide the following minimum configuration:

- `client_id`
- `redirect_uri`
- `client_secret`

## [](dsl-ashauthentication-strategy-github.html#more-documentation)More documentation:

- The [GitHub Tutorial](github.html).
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

### [](dsl-ashauthentication-strategy-github.html#authentication-strategies-github)authentication.strategies.github

```
github name \\ :github
```

Provides a pre-configured authentication strategy for [GitHub](https://github.com/).

This strategy is built using the `:oauth2` strategy, and thus provides all the same configuration options should you need them.

###### More documentation:

- The [GitHub Tutorial](github.html).
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

###### Strategy defaults:

The following defaults are applied:

- `:base_url` is set to `"https://api.github.com"`.
- `:authorize_url` is set to `"https://github.com/login/oauth/authorize"`.
- `:token_url` is set to `"https://github.com/login/oauth/access_token"`.
- `:user_url` is set to `"/user"`.
- `:user_emails_url` is set to `"/user/emails"`.
- `:authorization_params` is set to `[scope: "read:user,user:email"]`.
- `:auth_method` is set to `:client_secret_post`.

### [](dsl-ashauthentication-strategy-github.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-name)`atom`Uniquely identifies the strategy.

### [](dsl-ashauthentication-strategy-github.html#options)Options

NameTypeDefaultDocs[`client_id`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-client_id)`(any, any -> any) | module | String.t`The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`redirect_uri`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-redirect_uri)`(any, any -> any) | module | String.t`The callback URI *base*. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`base_url`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-base_url)`(any, any -> any) | module | String.t``"https://api.github.com"`The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`site`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-site)`(any, any -> any) | module | String.t`Deprecated: Use `base_url` instead.[`prevent_hijacking?`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-prevent_hijacking?)`boolean``true`Requires a confirmation add\_on to be present if the password strategy is used with the same identity\_field.[`auth_method`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-auth_method)`nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt``:client_secret_post`The authentication strategy used, optional. If not set, no authentication will be used during the access token request.[`client_secret`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-client_secret)`(any, any -> any) | module | String.t`The OAuth2 client secret. Required if :auth\_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorize_url`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-authorize_url)`(any, any -> any) | module | String.t``"https://github.com/login/oauth/authorize"`The API url to the OAuth2 authorize endpoint, relative to `site`, e.g `authorize_url fn _, _ -> {:ok, "https://exampe.com/authorize"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`token_url`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-token_url)`(any, any -> any) | module | String.t``"https://github.com/login/oauth/access_token"`The API url to access the token endpoint, relative to `site`, e.g `token_url fn _, _ -> {:ok, "https://example.com/oauth_token"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`trusted_audiences`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-trusted_audiences)`(any, any -> any) | module | list(any) | nil`A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`user_url`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-user_url)`(any, any -> any) | module | String.t``"/user"`The API url to access the user endpoint, relative to `site`, e.g `user_url fn _, _ -> {:ok, "https://example.com/userinfo"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`private_key`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-private_key)`(any, any -> any) | module | String.t`The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorization_params`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-authorization_params)`keyword``[scope: "read:user,user:email"]`Any additional parameters to encode in the request phase. eg: `authorization_params scope: "openid profile email"`[`registration_enabled?`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-registration_enabled?)`boolean``true`If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.[`register_action_name`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-register_action_name)`atom`The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.[`sign_in_action_name`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-sign_in_action_name)`atom`The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.[`identity_resource`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-identity_resource)`module | false``false`The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.[`identity_relationship_name`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-identity_relationship_name)`atom``:identities`Name of the relationship to the provider identities resource[`identity_relationship_user_id_attribute`](dsl-ashauthentication-strategy-github.html#authentication-strategies-github-identity_relationship_user_id_attribute)`atom``:user_id`The name of the destination (user\_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.

### [](dsl-ashauthentication-strategy-github.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)

[← Previous Page AshAuthentication.Strategy.Auth0](dsl-ashauthentication-strategy-auth0.html)

[Next Page → AshAuthentication.Strategy.Google](dsl-ashauthentication-strategy-google.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.Github.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.Google.md#L1 "View Source") AshAuthentication.Strategy.Google

Strategy for authenticating using [Google](https://google.com)

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html) and [`assent`](https://hex.pm/packages/assent).

In order to use Google you need to provide the following minimum configuration:

- `client_id`
- `redirect_uri`
- `client_secret`
- `site`

## [](dsl-ashauthentication-strategy-google.html#more-documentation)More documentation:

- The [Google OAuth 2.0 Overview](https://developers.google.com/identity/protocols/oauth2).
- The [Google Tutorial](google.html)
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

### [](dsl-ashauthentication-strategy-google.html#authentication-strategies-google)authentication.strategies.google

```
google name \\ :google
```

Provides a pre-configured authentication strategy for [Google](https://google.com/).

This strategy is built using the `:oauth2` strategy, and thus provides all the same configuration options should you need them.

#### More documentation:

- The [Google OAuth 2.0 Overview](https://developers.google.com/identity/protocols/oauth2).
- The [Google Tutorial](google.html)
- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

###### Strategy defaults:

The following defaults are applied:

- `:base_url` is set to `"https://www.googleapis.com"`.
- `:authorize_url` is set to `"https://accounts.google.com/o/oauth2/v2/auth"`.
- `:token_url` is set to `"/oauth2/v4/token"`.
- `:user_url` is set to `"/oauth2/v3/userinfo"`.
- `:authorization_params` is set to `[scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"]`.
- `:auth_method` is set to `:client_secret_post`.

### [](dsl-ashauthentication-strategy-google.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-name)`atom`Uniquely identifies the strategy.

### [](dsl-ashauthentication-strategy-google.html#options)Options

NameTypeDefaultDocs[`client_id`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-client_id)`(any, any -> any) | module | String.t`The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`redirect_uri`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-redirect_uri)`(any, any -> any) | module | String.t`The callback URI *base*. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`base_url`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-base_url)`(any, any -> any) | module | String.t``"https://www.googleapis.com"`The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`site`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-site)`(any, any -> any) | module | String.t`Deprecated: Use `base_url` instead.[`prevent_hijacking?`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-prevent_hijacking?)`boolean``true`Requires a confirmation add\_on to be present if the password strategy is used with the same identity\_field.[`auth_method`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-auth_method)`nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt``:client_secret_post`The authentication strategy used, optional. If not set, no authentication will be used during the access token request.[`client_secret`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-client_secret)`(any, any -> any) | module | String.t`The OAuth2 client secret. Required if :auth\_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorize_url`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-authorize_url)`(any, any -> any) | module | String.t``"https://accounts.google.com/o/oauth2/v2/auth"`The API url to the OAuth2 authorize endpoint, relative to `site`, e.g `authorize_url fn _, _ -> {:ok, "https://exampe.com/authorize"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`token_url`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-token_url)`(any, any -> any) | module | String.t``"/oauth2/v4/token"`The API url to access the token endpoint, relative to `site`, e.g `token_url fn _, _ -> {:ok, "https://example.com/oauth_token"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`trusted_audiences`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-trusted_audiences)`(any, any -> any) | module | list(any) | nil`A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`user_url`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-user_url)`(any, any -> any) | module | String.t``"/oauth2/v3/userinfo"`The API url to access the user endpoint, relative to `site`, e.g `user_url fn _, _ -> {:ok, "https://example.com/userinfo"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`private_key`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-private_key)`(any, any -> any) | module | String.t`The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorization_params`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-authorization_params)`keyword``[scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"]`Any additional parameters to encode in the request phase. eg: `authorization_params scope: "openid profile email"`[`registration_enabled?`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-registration_enabled?)`boolean``true`If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.[`register_action_name`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-register_action_name)`atom`The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.[`sign_in_action_name`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-sign_in_action_name)`atom`The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.[`identity_resource`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-identity_resource)`module | false``false`The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.[`identity_relationship_name`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-identity_relationship_name)`atom``:identities`Name of the relationship to the provider identities resource[`identity_relationship_user_id_attribute`](dsl-ashauthentication-strategy-google.html#authentication-strategies-google-identity_relationship_user_id_attribute)`atom``:user_id`The name of the destination (user\_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.

### [](dsl-ashauthentication-strategy-google.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)

[← Previous Page AshAuthentication.Strategy.Github](dsl-ashauthentication-strategy-github.html)

[Next Page → AshAuthentication.Strategy.MagicLink](dsl-ashauthentication-strategy-magiclink.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.Google.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.MagicLink.md#L1 "View Source") AshAuthentication.Strategy.MagicLink

Strategy for authentication using a magic link.

In order to use magic link authentication your resource needs to meet the following minimum requirements:

1. Have a primary key.
2. A uniquely constrained identity field (eg `username` or `email`)
3. Have tokens enabled.

There are other options documented in the DSL.

### [](dsl-ashauthentication-strategy-magiclink.html#example)Example

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  authentication do
    strategies do
      magic_link do
        identity_field :email
        sender fn user_or_email, token, _opts ->
          # will be a user if the token relates to an existing user
          # will be an email if there is no matching user (such as during sign up)
          # opts will contain the `tenant` key, use this if you need to alter the link based
          # on the tenant that requested the token
          MyApp.Emails.deliver_magic_link(user_or_email, token)
        end
      end
    end
  end

  identities do
    identity :unique_email, [:email]
  end
end
```

## [](dsl-ashauthentication-strategy-magiclink.html#tenancy)Tenancy

Note that the tenant is provided to the sender in the `opts` key. Use this if you need to modify the url (i.e `tenant.app.com`) based on the tenant that requested the token.

## [](dsl-ashauthentication-strategy-magiclink.html#actions)Actions

By default the magic link strategy will automatically generate the request and sign-in actions for you, however you're free to define them yourself. If you do, then the action will be validated to ensure that all the needed configuration is present.

If you wish to work with the actions directly from your code you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](dsl-ashauthentication-strategy-magiclink.html#examples)Examples

Requesting that a magic link token is sent for a user:

```
iex> strategy = Info.strategy!(Example.User, :magic_link)
...> user = build_user()
...> Strategy.action(strategy, :request, %{"username" => user.username})
:ok
```

Signing in using a magic link token:

```
...> {:ok, token} = MagicLink.request_token_for(strategy, user)
...> {:ok, signed_in_user} = Strategy.action(strategy, :sign_in, %{"token" => token})
...> signed_in_user.id == user
true
```

## [](dsl-ashauthentication-strategy-magiclink.html#plugs)Plugs

The magic link strategy provides plug endpoints for both request and sign-in actions.

If you wish to work with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](dsl-ashauthentication-strategy-magiclink.html#examples-1)Examples:

Dispatching to plugs directly:

```
iex> strategy = Info.strategy!(Example.User, :magic_link)
...> user = build_user()
...> conn = conn(:post, "/user/magic_link/request", %{"user" => %{"username" => user.username}})
...> conn = Strategy.plug(strategy, :request, conn)
...> {_conn, {:ok, nil}} = Plug.Helpers.get_authentication_result(conn)

...> {:ok, token} = MagicLink.request_token_for(strategy, user)
...> conn = conn(:get, "/user/magic_link", %{"token" => token})
...> conn = Strategy.plug(strategy, :sign_in, conn)
...> {_conn, {:ok, signed_in_user}} = Plug.Helpers.get_authentication_result(conn)
...> signed_in_user.id == user.id
true
```

See the [Magic Link Tutorial](magic-links.html) for more information.

### [](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link)authentication.strategies.magic\_link

```
magic_link name \\ :magic_link
```

Strategy for authenticating using local users with a magic link

### [](dsl-ashauthentication-strategy-magiclink.html#options)Options

NameTypeDefaultDocs[`sender`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-sender)`(any, any, any -> any) | module`How to send the magic link to the user.[`identity_field`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-identity_field)`atom``:username`The name of the attribute which uniquely identifies the user, usually something like `username` or `email_address`.[`token_lifetime`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-token_lifetime)`pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}``{10, :minutes}`How long the sign in token is valid. If no unit is provided, then `minutes` is assumed.[`prevent_hijacking?`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-prevent_hijacking?)`boolean``true`Requires a confirmation add\_on to be present if the password strategy is used with the same identity\_field.[`request_action_name`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-request_action_name)`atom`The name to use for the request action. Defaults to `request_<strategy_name>`[`lookup_action_name`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-lookup_action_name)`atom`The action to use when looking up a user by their identity. Defaults to `get_by_<identity_field>`[`single_use_token?`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-single_use_token?)`boolean``true`Automatically revoke the token once it's been used for sign in.[`registration_enabled?`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-registration_enabled?)`boolean`Allows registering via magic link. Signing in with magic link becomes an upsert action instead of a read action.[`sign_in_action_name`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-sign_in_action_name)`atom`The name to use for the sign in action. Defaults to `sign_in_with_<strategy_name>`[`token_param_name`](dsl-ashauthentication-strategy-magiclink.html#authentication-strategies-magic_link-token_param_name)`atom``:token`The name of the token parameter in the incoming sign-in request.

### [](dsl-ashauthentication-strategy-magiclink.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.MagicLink`](AshAuthentication.Strategy.MagicLink.html)

[← Previous Page AshAuthentication.Strategy.Google](dsl-ashauthentication-strategy-google.html)

[Next Page → AshAuthentication.Strategy.OAuth2](dsl-ashauthentication-strategy-oauth2.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.MagicLink.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.OAuth2.md#L1 "View Source") AshAuthentication.Strategy.OAuth2

Strategy for authenticating using any OAuth 2.0 server as the source of truth.

This authentication strategy provides registration and sign-in for users using a remote [OAuth 2.0](https://oauth.net/2/) server as the source of truth. You will be required to provide either a "register" or a "sign-in" action depending on your configuration, which the strategy will attempt to validate for common misconfigurations.

This strategy wraps the excellent [`assent`](https://hex.pm/packages/assent) package, which provides OAuth 2.0 capabilities.

In order to use OAuth 2.0 authentication on your resource, it needs to meet the following minimum criteria:

1. Have a primary key.
2. Provide a strategy-specific action, either register or sign-in.
3. Provide configuration for OAuth2 destinations, secrets, etc.

### [](dsl-ashauthentication-strategy-oauth2.html#example)Example:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  authentication do
    strategies do
      oauth2 :example do
        client_id "OAuth Client ID"
        redirect_uri "https://my.app/"
        client_secret "My Super Secret Secret"
        site "https://auth.example.com/"
      end
    end
  end
end
```

## [](dsl-ashauthentication-strategy-oauth2.html#secrets-and-runtime-configuration)Secrets and runtime configuration

In order to use OAuth 2.0 you need to provide a varying number of secrets and other configuration which may change based on runtime environment. The [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour is provided to accommodate this. This allows you to provide configuration either directly on the resource (ie as a string), as an anonymous function, or as a module.

### [](dsl-ashauthentication-strategy-oauth2.html#warning)Warning

We **strongly** urge you not to share actual secrets in your code or repository.

### [](dsl-ashauthentication-strategy-oauth2.html#examples)Examples:

Providing configuration as an anonymous function:

```
oauth2 do
  client_secret fn _path, resource ->
    Application.fetch_env(:my_app, resource, :oauth2_client_secret)
  end
end
```

Providing configuration as a module:

```
defmodule MyApp.Secrets do
  use AshAuthentication.Secret

  def secret_for([:authentication, :strategies, :example, :client_secret], MyApp.User, _opts), do: Application.fetch_env(:my_app, :oauth2_client_secret)
end

# and in your strategies:

oauth2 :example do
  client_secret MyApp.Secrets
end
```

## [](dsl-ashauthentication-strategy-oauth2.html#user-identities)User identities

Because your users can be signed in via multiple providers at once, you can specify an `identity_resource` in the DSL configuration which points to a seperate Ash resource which has the [`AshAuthentication.UserIdentity`](AshAuthentication.UserIdentity.html) extension present. This resource will be used to store details of the providers in use by each user and a relationship will be added to the user resource.

Setting the `identity_resource` will cause extra validations to be applied to your resource so that changes are tracked correctly on sign-in or registration.

## [](dsl-ashauthentication-strategy-oauth2.html#actions)Actions

When using an OAuth 2.0 provider you need to declare either a "register" or "sign-in" action. The reason for this is that it's not possible for us to know ahead of time how you want to manage the link between your user resources and the "user info" provided by the OAuth server.

Both actions receive the following two arguments:

1. `user_info` - a map with string keys containing the [OpenID Successful UserInfo response](https://openid.net/specs/openid-connect-core-1_0.html#UserInfoResponse). Usually this will be used to populate your email, nickname or other identifying field.
2. `oauth_tokens` a map with string keys containing the [OpenID Successful Token response](https://openid.net/specs/openid-connect-core-1_0.html#TokenResponse) (or similar).

The actions themselves can be interacted with directly via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol, but you are more likely to interact with them via the web/plugs.

### [](dsl-ashauthentication-strategy-oauth2.html#sign-in)Sign-in

The sign-in action is called when a successful OAuth2 callback is received. You should use it to constrain the query to the correct user based on the arguments provided.

This action is only needed when the `registration_enabled?` DSL settings is set to `false`.

### [](dsl-ashauthentication-strategy-oauth2.html#registration)Registration

The register action is a little more complicated than the sign-in action, because we cannot tell the difference between a new user and a returning user (they all use the same OAuth flow). In order to handle this your register action must be defined as an upsert with a configured `upsert_identity` (see example below).

### [](dsl-ashauthentication-strategy-oauth2.html#examples-1)Examples:

Providing sign-in to users who already exist in the database (and by extension rejecting new users):

```
defmodule MyApp.Accounts.User do
  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  actions do
    read :sign_in_with_example do
      argument :user_info, :map, allow_nil?: false
      argument :oauth_tokens, :map, allow_nil?: false
      prepare AshAuthentication.Strategy.OAuth2.SignInPreparation

      filter expr(email == get_path(^arg(:user_info), [:email]))
    end
  end

  authentication do
    strategies do
      oauth2 :example do
        registration_enabled? false
      end
    end
  end
end
```

Providing registration or sign-in to all comers:

```
defmodule MyApp.Accounts.User do
  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
  end

  actions do
    create :register_with_oauth2 do
      argument :user_info, :map, allow_nil?: false
      argument :oauth_tokens, :map, allow_nil?: false
      upsert? true
      upsert_identity :email

      change AshAuthentication.GenerateTokenChange
      change fn changeset, _ctx ->
        user_info = Ash.Changeset.get_argument(changeset, :user_info)

        changeset
        |> Ash.Changeset.change_attribute(:email, user_info["email"])
      end
    end
  end

  authentication do
    strategies do
      oauth2 :example do
      end
    end
  end
end
```

## [](dsl-ashauthentication-strategy-oauth2.html#plugs)Plugs

OAuth 2.0 is (usually) a browser-based flow. This means that you're most likely to interact with this strategy via it's plugs. There are two phases to authentication with OAuth 2.0:

1. The request phase, where the user's browser is redirected to the remote authentication provider for authentication.
2. The callback phase, where the provider redirects the user back to your app to create a local database record, session, etc.

### [](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2)authentication.strategies.oauth2

```
oauth2 name \\ :oauth2
```

OAuth2 authentication

### [](dsl-ashauthentication-strategy-oauth2.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-name)`atom`Uniquely identifies the strategy.

### [](dsl-ashauthentication-strategy-oauth2.html#options)Options

NameTypeDefaultDocs[`client_id`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-client_id)`(any, any -> any) | module | String.t`The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorize_url`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-authorize_url)`(any, any -> any) | module | String.t`The API url to the OAuth2 authorize endpoint, relative to `site`, e.g `authorize_url fn _, _ -> {:ok, "https://exampe.com/authorize"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`token_url`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-token_url)`(any, any -> any) | module | String.t`The API url to access the token endpoint, relative to `site`, e.g `token_url fn _, _ -> {:ok, "https://example.com/oauth_token"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`user_url`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-user_url)`(any, any -> any) | module | String.t`The API url to access the user endpoint, relative to `site`, e.g `user_url fn _, _ -> {:ok, "https://example.com/userinfo"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`redirect_uri`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-redirect_uri)`(any, any -> any) | module | String.t`The callback URI *base*. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`base_url`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-base_url)`(any, any -> any) | module | String.t`The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`site`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-site)`(any, any -> any) | module | String.t`Deprecated: Use `base_url` instead.[`prevent_hijacking?`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-prevent_hijacking?)`boolean``true`Requires a confirmation add\_on to be present if the password strategy is used with the same identity\_field.[`auth_method`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-auth_method)`nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt``:client_secret_post`The authentication strategy used, optional. If not set, no authentication will be used during the access token request.[`client_secret`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-client_secret)`(any, any -> any) | module | String.t`The OAuth2 client secret. Required if :auth\_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`trusted_audiences`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-trusted_audiences)`(any, any -> any) | module | list(any) | nil`A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`private_key`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-private_key)`(any, any -> any) | module | String.t`The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorization_params`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-authorization_params)`keyword``[]`Any additional parameters to encode in the request phase. eg: `authorization_params scope: "openid profile email"`[`registration_enabled?`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-registration_enabled?)`boolean``true`If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.[`register_action_name`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-register_action_name)`atom`The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.[`sign_in_action_name`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-sign_in_action_name)`atom`The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.[`identity_resource`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-identity_resource)`module | false``false`The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.[`identity_relationship_name`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-identity_relationship_name)`atom``:identities`Name of the relationship to the provider identities resource[`identity_relationship_user_id_attribute`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-identity_relationship_user_id_attribute)`atom``:user_id`The name of the destination (user\_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.[`icon`](dsl-ashauthentication-strategy-oauth2.html#authentication-strategies-oauth2-icon)`atom``:oauth2`The name of an icon to use in any potential UI. This is a *hint* for UI generators to use, and not in any way canonical.

### [](dsl-ashauthentication-strategy-oauth2.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)

[← Previous Page AshAuthentication.Strategy.MagicLink](dsl-ashauthentication-strategy-magiclink.html)

[Next Page → AshAuthentication.Strategy.Oidc](dsl-ashauthentication-strategy-oidc.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.OAuth2.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.Oidc.md#L1 "View Source") AshAuthentication.Strategy.Oidc

Strategy for authentication using an [OpenID Connect](https://openid.net/connect/) compatible server as the source of truth.

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html) and [`assent`](https://hex.pm/packages/assent).

In order to use OIDC you need to provide the following minimum configuration:

- `client_id` - The client id, required
- `site` - The OIDC issuer, required
- `openid_configuration_uri` - The URI for OpenID Provider, optional, defaults to `/.well-known/openid-configuration`
- `client_authentication_method` - The Client Authentication method to use, optional, defaults to `client_secret_basic`
- `client_secret` - The client secret, required if `:client_authentication_method` is `:client_secret_basic`, `:client_secret_post`, or `:client_secret_jwt`
- `openid_configuration` - The OpenID configuration, optional, the configuration will be fetched from `:openid_configuration_uri` if this is not defined
- `id_token_signed_response_alg` - The `id_token_signed_response_alg` parameter sent by the Client during Registration, defaults to `RS256`
- `id_token_ttl_seconds` - The number of seconds from `iat` that an ID Token will be considered valid, optional, defaults to nil
- `nonce` - The nonce to use for authorization request, optional, MUST be session based and unguessable.

## [](dsl-ashauthentication-strategy-oidc.html#nonce)Nonce

`nonce` can be set in the provider config. The `nonce` will be returned in the `session_params` along with `state`. You can use this to store the value in the current session e.g. a httpOnly session cookie.

A random value generator can look like this:

```
16
|> :crypto.strong_rand_bytes()
|> Base.encode64(padding: false)
```

AshAuthentication will dynamically generate one for the session if `nonce` is set to `true`.

## [](dsl-ashauthentication-strategy-oidc.html#more-documentation)More documentation:

- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

### [](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc)authentication.strategies.oidc

```
oidc name \\ :oidc
```

Provides an OpenID Connect authentication strategy.

This strategy is built using the `:oauth2` strategy, and thus provides all the same configuration options should you need them.

###### More documentation:

- The [OAuth2 documentation](AshAuthentication.Strategy.OAuth2.html)

### [](dsl-ashauthentication-strategy-oidc.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-name)`atom`Uniquely identifies the strategy.

### [](dsl-ashauthentication-strategy-oidc.html#options)Options

NameTypeDefaultDocs[`client_id`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-client_id)`(any, any -> any) | module | String.t`The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`base_url`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-base_url)`(any, any -> any) | module | String.t`The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`redirect_uri`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-redirect_uri)`(any, any -> any) | module | String.t`The callback URI *base*. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`site`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-site)`(any, any -> any) | module | String.t`Deprecated: Use `base_url` instead.[`prevent_hijacking?`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-prevent_hijacking?)`boolean``true`Requires a confirmation add\_on to be present if the password strategy is used with the same identity\_field.[`auth_method`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-auth_method)`nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt``:client_secret_post`The authentication strategy used, optional. If not set, no authentication will be used during the access token request.[`client_secret`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-client_secret)`(any, any -> any) | module | String.t`The OAuth2 client secret. Required if :auth\_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`trusted_audiences`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-trusted_audiences)`(any, any -> any) | module | list(any) | nil`A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`private_key`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-private_key)`(any, any -> any) | module | String.t`The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorization_params`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-authorization_params)`keyword``[]`Any additional parameters to encode in the request phase. eg: `authorization_params scope: "openid profile email"`[`registration_enabled?`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-registration_enabled?)`boolean``true`If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.[`register_action_name`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-register_action_name)`atom`The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.[`sign_in_action_name`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-sign_in_action_name)`atom`The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.[`identity_resource`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-identity_resource)`module | false``false`The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.[`identity_relationship_name`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-identity_relationship_name)`atom``:identities`Name of the relationship to the provider identities resource[`identity_relationship_user_id_attribute`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-identity_relationship_user_id_attribute)`atom``:user_id`The name of the destination (user\_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.[`openid_configuration_uri`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-openid_configuration_uri)`String.t``"/.well-known/openid-configuration"`The URI for the OpenID provider[`client_authentication_method`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-client_authentication_method)`"client_secret_basic" | "client_secret_post" | "client_secret_jwt" | "private_key_jwt"``"client_secret_basic"`The client authentication method to use.[`openid_configuration`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-openid_configuration)`map``%{}`The OpenID configuration. If not set, the configuration will be retrieved from `openid_configuration_uri`.[`id_token_signed_response_alg`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-id_token_signed_response_alg)`"HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "Ed25519" | "Ed25519ph" | "Ed448" | "Ed448ph" | "EdDSA"``"RS256"`The `id_token_signed_response_alg` parameter sent by the Client during Registration.[`id_token_ttl_seconds`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-id_token_ttl_seconds)`nil | pos_integer`The number of seconds from `iat` that an ID Token will be considered valid.[`nonce`](dsl-ashauthentication-strategy-oidc.html#authentication-strategies-oidc-nonce)`boolean | (any, any -> any) | module | String.t``true`A function for generating the session nonce, `true` to automatically generate it with [`AshAuthentication.Strategy.Oidc.NonceGenerator`](AshAuthentication.Strategy.Oidc.NonceGenerator.html), or `false` to disable.

### [](dsl-ashauthentication-strategy-oidc.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)

[← Previous Page AshAuthentication.Strategy.OAuth2](dsl-ashauthentication-strategy-oauth2.html)

[Next Page → AshAuthentication.Strategy.Password](dsl-ashauthentication-strategy-password.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.Oidc.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.Password.md#L1 "View Source") AshAuthentication.Strategy.Password

Strategy for authenticating using local resources as the source of truth.

In order to use password authentication your resource needs to meet the following minimum requirements:

1. Have a primary key.
2. A uniquely constrained identity field (eg `username` or `email`).
3. A sensitive string field within which to store the hashed password.

There are other options documented in the DSL.

### [](dsl-ashauthentication-strategy-password.html#example)Example:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
    attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
  end

  authentication do
    strategies do
      password :password do
        identity_field :email
        hashed_password_field :hashed_password
      end
    end
  end

  identities do
    identity :unique_email, [:email]
  end
end
```

## [](dsl-ashauthentication-strategy-password.html#actions)Actions

By default the password strategy will automatically generate the register, sign-in, reset-request and reset actions for you, however you're free to define them yourself. If you do, then the action will be validated to ensure that all the needed configuration is present.

If you wish to work with the actions directly from your code you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](dsl-ashauthentication-strategy-password.html#examples)Examples:

Interacting with the actions directly:

```
iex> strategy = Info.strategy!(Example.User, :password)
...> {:ok, marty} = Strategy.action(strategy, :register, %{"username" => "marty", "password" => "outatime1985", "password_confirmation" => "outatime1985"})
...> marty.username |> to_string()
"marty"

...> {:ok, user} = Strategy.action(strategy, :sign_in, %{"username" => "marty", "password" => "outatime1985"})
...> user.username |> to_string()
"marty"
```

## [](dsl-ashauthentication-strategy-password.html#plugs)Plugs

The password strategy provides plug endpoints for all four actions, although only sign-in and register will be reported by `Strategy.routes/1` if the strategy is not configured as resettable.

If you wish to work with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

### [](dsl-ashauthentication-strategy-password.html#examples-1)Examples:

Dispatching to plugs directly:

```
iex> strategy = Info.strategy!(Example.User, :password)
...> conn = conn(:post, "/user/password/register", %{"user" => %{"username" => "marty", "password" => "outatime1985", "password_confirmation" => "outatime1985"}})
...> conn = Strategy.plug(strategy, :register, conn)
...> {_conn, {:ok, marty}} = Plug.Helpers.get_authentication_result(conn)
...> marty.username |> to_string()
"marty"

...> conn = conn(:post, "/user/password/reset_request", %{"user" => %{"username" => "marty"}})
...> conn = Strategy.plug(strategy, :reset_request, conn)
...> {_conn, :ok} = Plug.Helpers.get_authentication_result(conn)
```

## [](dsl-ashauthentication-strategy-password.html#testing)Testing

See the [Testing guide](testing.html) for tips on testing resources using this strategy.

### [](dsl-ashauthentication-strategy-password.html#authentication-strategies-password)authentication.strategies.password

```
password name \\ :password
```

Strategy for authenticating using local resources as the source of truth.

### [](dsl-ashauthentication-strategy-password.html#nested-dsls)Nested DSLs

- [resettable](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-resettable)

### [](dsl-ashauthentication-strategy-password.html#examples-2)Examples

```
password :password do
  identity_field :email
  hashed_password_field :hashed_password
  hash_provider AshAuthentication.BcryptProvider
  confirmation_required? true
end
```

### [](dsl-ashauthentication-strategy-password.html#options)Options

NameTypeDefaultDocs[`identity_field`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-identity_field)`atom``:username`The name of the attribute which uniquely identifies the user, usually something like `username` or `email_address`.[`hashed_password_field`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-hashed_password_field)`atom``:hashed_password`The name of the attribute within which to store the user's password once it has been hashed.[`hash_provider`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-hash_provider)`module`[`AshAuthentication.BcryptProvider`](AshAuthentication.BcryptProvider.html)A module which implements the [`AshAuthentication.HashProvider`](AshAuthentication.HashProvider.html) behaviour, to provide cryptographic hashing of passwords.[`confirmation_required?`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-confirmation_required?)`boolean``true`Whether a password confirmation field is required when registering or changing passwords.[`register_action_accept`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-register_action_accept)`list(atom)``[]`A list of additional fields to be accepted in the register action.[`password_field`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-password_field)`atom``:password`The name of the argument used to collect the user's password in plaintext when registering, checking or changing passwords.[`password_confirmation_field`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-password_confirmation_field)`atom``:password_confirmation`The name of the argument used to confirm the user's password in plaintext when registering or changing passwords.[`register_action_name`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-register_action_name)`atom`The name to use for the register action. Defaults to `register_with_<strategy_name>`[`registration_enabled?`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-registration_enabled?)`boolean``true`If you do not want new users to be able to register using this strategy, set this to false.[`sign_in_action_name`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-sign_in_action_name)`atom`The name to use for the sign in action. Defaults to `sign_in_with_<strategy_name>`[`sign_in_enabled?`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-sign_in_enabled?)`boolean``true`If you do not want new users to be able to sign in using this strategy, set this to false.[`sign_in_tokens_enabled?`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-sign_in_tokens_enabled?)`boolean``true`Whether or not to support generating short lived sign in tokens. Requires the resource to have tokens enabled.[`sign_in_token_lifetime`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-sign_in_token_lifetime)`pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}``{60, :seconds}`A lifetime for which a generated sign in token will be valid, if `sign_in_tokens_enabled?`. Unit defaults to `:seconds`.[`require_confirmed_with`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-require_confirmed_with)`atom | nil`Whether a new account must be confirmed in order to log in.

### [](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-resettable)authentication.strategies.password.resettable

Configure password reset options for the resource

### [](dsl-ashauthentication-strategy-password.html#options-1)Options

NameTypeDefaultDocs[`sender`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-resettable-sender)`(any, any, any -> any) | module`The sender to use when sending password reset instructions.[`token_lifetime`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-resettable-token_lifetime)`pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}``{3, :days}`How long should the reset token be valid. If no unit is provided `:hours` is assumed.[`request_password_reset_action_name`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-resettable-request_password_reset_action_name)`atom`The name to use for the action which generates a password reset token. Defaults to `request_password_reset_with_<strategy_name>`.[`password_reset_action_name`](dsl-ashauthentication-strategy-password.html#authentication-strategies-password-resettable-password_reset_action_name)`atom`The name to use for the action which actually resets the user's password. Defaults to `password_reset_with_<strategy_name>`.

### [](dsl-ashauthentication-strategy-password.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.Password.Resettable`](AshAuthentication.Strategy.Password.Resettable.html)

### [](dsl-ashauthentication-strategy-password.html#introspection-1)Introspection

Target: [`AshAuthentication.Strategy.Password`](AshAuthentication.Strategy.Password.html)

[← Previous Page AshAuthentication.Strategy.Oidc](dsl-ashauthentication-strategy-oidc.html)

[Next Page → AshAuthentication.Strategy.Slack](dsl-ashauthentication-strategy-slack.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.Password.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.Strategy.Slack.md#L1 "View Source") AshAuthentication.Strategy.Slack

Strategy for authenticating using [Slack](https://slack.com)

This strategy builds on-top of [`AshAuthentication.Strategy.Oidc`](AshAuthentication.Strategy.Oidc.html) and [`assent`](https://hex.pm/packages/assent).

In order to use GitHub you need to provide the following minimum configuration:

- `client_id`
- `redirect_uri`
- `client_secret`

## [](dsl-ashauthentication-strategy-slack.html#more-documentation)More documentation:

- The [Slack Tutorial](slack.html).
- The [OIDC documentation](AshAuthentication.Strategy.Oidc.html)

### [](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack)authentication.strategies.slack

```
slack name \\ :slack
```

Provides a pre-configured authentication strategy for [Slack](https://slack.com/).

This strategy is built using the `:oauth2` strategy, and thus provides all the same configuration options should you need them.

###### More documentation:

- The [Slack Tutorial](slack.html).
- The [OIDC documentation](AshAuthentication.Strategy.Oidc.html)

###### Strategy defaults:

The following defaults are applied:

- `:base_url` is set to `"https://slack.com"`.
- `:authorization_params` is set to `[scope: "openid email profile"]`.
- `:client_authentication_method` is set to `"client_secret_post"`.

### [](dsl-ashauthentication-strategy-slack.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-name)`atom`Uniquely identifies the strategy.

### [](dsl-ashauthentication-strategy-slack.html#options)Options

NameTypeDefaultDocs[`client_id`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-client_id)`(any, any -> any) | module | String.t`The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`redirect_uri`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-redirect_uri)`(any, any -> any) | module | String.t`The callback URI *base*. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`team_id`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-team_id)`(any, any -> any) | module | String.t`The team id to restrict authorization for.[`base_url`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-base_url)`(any, any -> any) | module | String.t``"https://slack.com"`The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`site`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-site)`(any, any -> any) | module | String.t`Deprecated: Use `base_url` instead.[`prevent_hijacking?`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-prevent_hijacking?)`boolean``true`Requires a confirmation add\_on to be present if the password strategy is used with the same identity\_field.[`auth_method`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-auth_method)`nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt``:client_secret_post`The authentication strategy used, optional. If not set, no authentication will be used during the access token request.[`client_secret`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-client_secret)`(any, any -> any) | module | String.t`The OAuth2 client secret. Required if :auth\_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`trusted_audiences`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-trusted_audiences)`(any, any -> any) | module | list(any) | nil`A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`private_key`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-private_key)`(any, any -> any) | module | String.t`The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour, a 2 arity anonymous function or a string.[`authorization_params`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-authorization_params)`keyword``[scope: "openid email profile"]`Any additional parameters to encode in the request phase. eg: `authorization_params scope: "openid profile email"`[`registration_enabled?`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-registration_enabled?)`boolean``true`If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.[`register_action_name`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-register_action_name)`atom`The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.[`sign_in_action_name`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-sign_in_action_name)`atom`The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.[`identity_resource`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-identity_resource)`module | false``false`The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.[`identity_relationship_name`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-identity_relationship_name)`atom``:identities`Name of the relationship to the provider identities resource[`identity_relationship_user_id_attribute`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-identity_relationship_user_id_attribute)`atom``:user_id`The name of the destination (user\_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.[`openid_configuration_uri`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-openid_configuration_uri)`String.t``"/.well-known/openid-configuration"`The URI for the OpenID provider[`client_authentication_method`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-client_authentication_method)`"client_secret_basic" | "client_secret_post" | "client_secret_jwt" | "private_key_jwt"``"client_secret_post"`The client authentication method to use.[`openid_configuration`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-openid_configuration)`map``%{}`The OpenID configuration. If not set, the configuration will be retrieved from `openid_configuration_uri`.[`id_token_signed_response_alg`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-id_token_signed_response_alg)`"HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "Ed25519" | "Ed25519ph" | "Ed448" | "Ed448ph" | "EdDSA"``"RS256"`The `id_token_signed_response_alg` parameter sent by the Client during Registration.[`id_token_ttl_seconds`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-id_token_ttl_seconds)`nil | pos_integer`The number of seconds from `iat` that an ID Token will be considered valid.[`nonce`](dsl-ashauthentication-strategy-slack.html#authentication-strategies-slack-nonce)`boolean | (any, any -> any) | module | String.t``true`A function for generating the session nonce, `true` to automatically generate it with [`AshAuthentication.Strategy.Oidc.NonceGenerator`](AshAuthentication.Strategy.Oidc.NonceGenerator.html), or `false` to disable.

### [](dsl-ashauthentication-strategy-slack.html#introspection)Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)

[← Previous Page AshAuthentication.Strategy.Password](dsl-ashauthentication-strategy-password.html)

[Next Page → AshAuthentication.TokenResource](dsl-ashauthentication-tokenresource.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.Strategy.Slack.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.TokenResource.md#L1 "View Source") AshAuthentication.TokenResource

This is an Ash resource extension which generates the default token resource.

The token resource is used to store information about tokens that should not be shared with the end user. It does not actually contain any tokens.

For example:

- When an authentication token has been revoked
- When a confirmation token has changes to apply

## [](dsl-ashauthentication-tokenresource.html#storage)Storage

The information stored in this resource is essentially ephemeral - all tokens have an expiry date, so it doesn't make sense to keep them after that time has passed. However, if you have any tokens with very long expiry times then we suggest you store this resource in a resilient data-layer such as Postgres.

## [](dsl-ashauthentication-tokenresource.html#usage)Usage

There is no need to define any attributes or actions (although you can if you want). The extension will wire up everything that's needed for the token system to function.

```
defmodule MyApp.Accounts.Token do
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAuthentication.TokenResource],
    domain: MyApp.Accounts

  postgres do
    table "tokens"
    repo MyApp.Repo
  end
end
```

Whilst it is possible to have multiple token resources, there is no need to do so.

## [](dsl-ashauthentication-tokenresource.html#removing-expired-records)Removing expired records

Once a token has expired there's no point in keeping the information it refers to, so expired tokens can be automatically removed by adding the [`AshAuthentication.Supervisor`](AshAuthentication.Supervisor.html) to your application supervision tree. This will start the [`AshAuthentication.TokenResource.Expunger`](AshAuthentication.TokenResource.Expunger.html) [`GenServer`](../elixir/GenServer.html) which periodically scans and removes any expired records.

## [](dsl-ashauthentication-tokenresource.html#token)token

Configuration options for this token resource

### [](dsl-ashauthentication-tokenresource.html#nested-dsls)Nested DSLs

- [revocation](dsl-ashauthentication-tokenresource.html#token-revocation)
- [confirmation](dsl-ashauthentication-tokenresource.html#token-confirmation)

### [](dsl-ashauthentication-tokenresource.html#options)Options

NameTypeDefaultDocs[`domain`](dsl-ashauthentication-tokenresource.html#token-domain)`module`The Ash domain to use to access this resource.[`expunge_expired_action_name`](dsl-ashauthentication-tokenresource.html#token-expunge_expired_action_name)`atom``:expunge_expired`The name of the action used to remove expired tokens.[`read_expired_action_name`](dsl-ashauthentication-tokenresource.html#token-read_expired_action_name)`atom``:read_expired`The name of the action use to find all expired tokens.[`expunge_interval`](dsl-ashauthentication-tokenresource.html#token-expunge_interval)`pos_integer``12`How often to scan this resource for records which have expired, and thus can be removed.[`store_token_action_name`](dsl-ashauthentication-tokenresource.html#token-store_token_action_name)`atom``:store_token`The name of the action to use to store a token, if `require_tokens_for_authentication?` is enabled in your authentication resource.[`get_token_action_name`](dsl-ashauthentication-tokenresource.html#token-get_token_action_name)`atom``:get_token`The name of the action used to retrieve tokens from the store, if `require_tokens_for_authentication?` is enabled in your authentication resource.

### [](dsl-ashauthentication-tokenresource.html#token-revocation)token.revocation

Configuration options for token revocation

### [](dsl-ashauthentication-tokenresource.html#options-1)Options

NameTypeDefaultDocs[`revoke_token_action_name`](dsl-ashauthentication-tokenresource.html#token-revocation-revoke_token_action_name)`atom``:revoke_token`The name of the action used to revoke tokens.[`is_revoked_action_name`](dsl-ashauthentication-tokenresource.html#token-revocation-is_revoked_action_name)`atom``:revoked?`The name of the action used to check if a token is revoked.

### [](dsl-ashauthentication-tokenresource.html#token-confirmation)token.confirmation

Configuration options for confirmation tokens

### [](dsl-ashauthentication-tokenresource.html#options-2)Options

NameTypeDefaultDocs[`store_changes_action_name`](dsl-ashauthentication-tokenresource.html#token-confirmation-store_changes_action_name)`atom``:store_confirmation_changes`The name of the action used to store confirmation changes.[`get_changes_action_name`](dsl-ashauthentication-tokenresource.html#token-confirmation-get_changes_action_name)`atom``:get_confirmation_changes`The name of the action used to get confirmation changes.

[← Previous Page AshAuthentication.Strategy.Slack](dsl-ashauthentication-strategy-slack.html)

[Next Page → AshAuthentication.UserIdentity](dsl-ashauthentication-useridentity.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.TokenResource.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/dsls/DSL-AshAuthentication.UserIdentity.md#L1 "View Source") AshAuthentication.UserIdentity

An Ash extension which generates the default user identities resource.

If you plan to support multiple different strategies at once (eg giving your users the choice of more than one authentication provider, or signing them into multiple services simultaneously) then you will want to create a resource with this extension enabled. It is used to keep track of the links between your local user records and their many remote identities.

The user identities resource is used to store information returned by remote authentication strategies (such as those provided by OAuth2) and maps them to your user resource(s). This provides the following benefits:

1. A user can be signed in to multiple authentication strategies at once.
2. For those providers that support it, AshAuthentication can handle automatic refreshing of tokens.

## [](dsl-ashauthentication-useridentity.html#storage)Storage

User identities are expected to be relatively long-lived (although they're deleted on log out), so should probably be stored using a permanent data layer sush as `ash_postgres`.

## [](dsl-ashauthentication-useridentity.html#usage)Usage

There is no need to define any attributes, etc. The extension will generate them all for you. As there is no other use-case for this resource it's unlikely that you will need to customise it.

```
defmodule MyApp.Accounts.UserIdentity do
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAuthentication.UserIdentity],
    domain: MyApp.Accounts

  user_identity do
    user_resource MyApp.Accounts.User
  end

  postgres do
    table "user_identities"
    repo MyApp.Repo
  end
end
```

If you intend to operate with multiple user resources, you will need to define multiple user identity resources.

## [](dsl-ashauthentication-useridentity.html#user_identity)user\_identity

Configure identity options for this resource

### [](dsl-ashauthentication-useridentity.html#options)Options

NameTypeDefaultDocs[`user_resource`](dsl-ashauthentication-useridentity.html#user_identity-user_resource)`module`The user resource to which these identities belong.[`domain`](dsl-ashauthentication-useridentity.html#user_identity-domain)`module`The Ash domain to use to access this resource.[`uid_attribute_name`](dsl-ashauthentication-useridentity.html#user_identity-uid_attribute_name)`atom``:uid`The name of the `uid` attribute on this resource.[`strategy_attribute_name`](dsl-ashauthentication-useridentity.html#user_identity-strategy_attribute_name)`atom``:strategy`The name of the `strategy` attribute on this resource.[`user_id_attribute_name`](dsl-ashauthentication-useridentity.html#user_identity-user_id_attribute_name)`atom``:user_id`The name of the `user_id` attribute on this resource.[`access_token_attribute_name`](dsl-ashauthentication-useridentity.html#user_identity-access_token_attribute_name)`atom``:access_token`The name of the `access_token` attribute on this resource.[`access_token_expires_at_attribute_name`](dsl-ashauthentication-useridentity.html#user_identity-access_token_expires_at_attribute_name)`atom``:access_token_expires_at`The name of the `access_token_expires_at` attribute on this resource.[`refresh_token_attribute_name`](dsl-ashauthentication-useridentity.html#user_identity-refresh_token_attribute_name)`atom``:refresh_token`The name of the `refresh_token` attribute on this resource.[`upsert_action_name`](dsl-ashauthentication-useridentity.html#user_identity-upsert_action_name)`atom``:upsert`The name of the action used to create and update records.[`destroy_action_name`](dsl-ashauthentication-useridentity.html#user_identity-destroy_action_name)`atom``:destroy`The name of the action used to destroy records.[`read_action_name`](dsl-ashauthentication-useridentity.html#user_identity-read_action_name)`atom``:read`The name of the action used to query identities.[`user_relationship_name`](dsl-ashauthentication-useridentity.html#user_identity-user_relationship_name)`atom``:user`The name of the belongs-to relationship between identities and users.

[← Previous Page AshAuthentication.TokenResource](dsl-ashauthentication-tokenresource.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/dsls/DSL-AshAuthentication.UserIdentity.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/tutorials/get-started.md#L1 "View Source") Get started with Ash Authentication

If you haven't already, read [the getting started guide for Ash](../ash/get-started.html). This assumes that you already have resources set up, and only gives you the steps to add authentication to your resources and APIs.

### [](get-started.html#using-igniter-recommended)Using Igniter (recommended)

#### Install the extension

```
mix igniter.install ash_authentication --auth-strategy magic_link,password
```

##### Using Phoenix?

Use the following. If you have not yet run the above command, this will prompt you to do so, so you can run both or only this one.

```
mix igniter.install ash_authentication_phoenix --auth-strategy magic_link,password
```

### [](get-started.html#manual)Manual

#### Add to your application's dependencies

Bring in the `ash_authentication` dependency:

```
# mix.exs

defp deps()
  [
    # ...
    {:ash_authentication, "~> 4.0"}
  ]
end
```

And add `ash_authentication` to your `.formatter.exs`:

```
# .formatter.exs
[
  import_deps: [..., :ash_authentication]
]
```

#### Create authentication domain and resources

Let's create an `Accounts` domain in our application which provides a `User` resource and a `Token` resource. This tutorial is assuming that you are using [`AshPostgres`](../ash_postgres/2.5.0/AshPostgres.html).

First, let's define our domain:

```
# lib/my_app/accounts.ex

defmodule MyApp.Accounts do
  use Ash.Domain

  resources do
    resource MyApp.Accounts.User
    resource MyApp.Accounts.Token
  end
end
```

Be sure to add it to the `ash_domains` config in your `config.exs`

```
# in config/config.exs
config :my_app, ash_domains: [..., MyApp.Accounts]
```

Next, let's define our `Token` resource. This resource is needed if token generation is enabled for any resources in your application. Most of the contents are auto-generated, so we just need to provide the data layer configuration and the API to use.

But before we do, we need to install a postgres extension.

```
# lib/my_app/repo.ex

defmodule MyApp.Repo do
  use AshPostgres.Repo, otp_app: :my_app

  def installed_extensions do
    ["ash-functions", "citext"]
  end
end
```

#### Setup Token Resource

```
# lib/my_app/accounts/token.ex
defmodule MyApp.Accounts.Token do
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAuthentication.TokenResource],
    # If using policies, enable the policy authorizer:
    authorizers: [Ash.Policy.Authorizer],
    domain: MyApp.Accounts

  postgres do
    table "tokens"
    repo MyApp.Repo
  end

  policies do
    bypass AshAuthentication.Checks.AshAuthenticationInteraction do
      authorize_if always()
    end
  end
end
```

#### Supervisor

AshAuthentication includes a supervisor which you should add to your application's supervisor tree. This is used to run any periodic jobs related to your authenticated resources (removing expired tokens, for example).

##### Example

```
defmodule MyApp.Application do
  use Application

  def start(_type, _args) do
    children = [
      # ...
      # add this line -->
      {AshAuthentication.Supervisor, otp_app: :my_app}
      # <-- add this line
    ]
    # ...
  end
end
```

Lastly let's define our `User` resource. Note that we aren't defining any authentication strategies here. This setup is used for all strategies. Once you have done this, you can follow one of the strategy specific guides at the bottom of this page.

```
# lib/my_app/accounts/user.ex

defmodule MyApp.Accounts.User do
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAuthentication],
    authorizers: [Ash.Policy.Authorizer],
    domain: MyApp.Accounts

  attributes do
    uuid_primary_key :id
  end

  authentication do
    tokens do
      enabled? true
      token_resource MyApp.Accounts.Token
      signing_secret fn _, _ ->
        # This is a secret key used to sign tokens. See the note below on secrets management
        Application.fetch_env(:my_app, :token_signing_secret)
      end
    end
  end

  postgres do
    table "users"
    repo MyApp.Repo
  end

  # You can customize this if you wish, but this is a safe default that
  # only allows user data to be interacted with via AshAuthentication.
  policies do
    bypass AshAuthentication.Checks.AshAuthenticationInteraction do
      authorize_if always()
    end

    policy always() do
      forbid_if always()
    end
  end
end
```

### [](get-started.html#the-signing-secret-must-not-be-committed-to-source-control)The signing secret must not be committed to source control

Proper management of secrets is outside the scope of this tutorial, but is absolutely crucial to the security of your application.

## [](get-started.html#choose-your-strategies-and-add-ons)Choose your strategies and add-ons

### [](get-started.html#mix-ash_authentication-add_strategy)[`mix ash_authentication.add_strategy`](Mix.Tasks.AshAuthentication.AddStrategy.html)

A mix task is provided to add strategies and add-ons to your application. For now, this only supports the `password` strategy, but more will be added in the future.

```
mix ash_authentication.add_strategy password
```

#### Strategies

- [Password](password.html)
- [Github](github.html)
- [Google](google.html)
- [Magic Links](magic-links.html)
- [Auth0](auth0.html)
- Open ID: [`AshAuthentication.Strategy.Oidc`](AshAuthentication.Strategy.Oidc.html)
- OAuth2: [`AshAuthentication.Strategy.OAuth2`](AshAuthentication.Strategy.OAuth2.html)

#### Add-Ons

- [Confirmation](confirmation.html): confirming changes to user accounts (i.e via email)
- UserIdentity: [`AshAuthentication.UserIdentity`](AshAuthentication.UserIdentity.html): supporting multiple social sign on identities &amp; refreshing tokens

## [](get-started.html#set-up-your-phoenix-or-plug-application)Set up your Phoenix or Plug application

If you're using Phoenix, skip this section and go to [Integrating Ash Authentication and Phoenix](../ash_authentication_phoenix/get-started.html)

In order for your users to be able to sign in, you will likely need to provide an HTTP endpoint to submit credentials or OAuth requests to. Ash Authentication provides [`AshAuthentication.Plug`](AshAuthentication.Plug.html) for this purposes. It provides a `use` macro which handles routing of requests to the correct providers, and defines callbacks for successful and unsuccessful outcomes.

Let's generate our plug:

```
# lib/my_app/auth_plug.ex

defmodule MyApp.AuthPlug do
  use AshAuthentication.Plug, otp_app: :my_app

  def handle_success(conn, _activity, user, token) do
    if is_api_request?(conn) do
      conn
      |> send_resp(200, Jason.encode!(%{
        authentication: %{
          success: true,
          token: token
        }
      }))
    else
      conn
      |> store_in_session(user)
      |> send_resp(200, EEx.eval_string("""
      <h2>Welcome back <%= @user.email %></h2>
      """, user: user))
    end
  end

  def handle_failure(conn, _activity, _reason) do
    if is_api_request?(conn) do
      conn
      |> send_resp(401, Jason.encode!(%{
        authentication: %{
          success: false
        }
      }))
    else
      conn
      |> send_resp(401, "<h2>Incorrect email or password</h2>")
    end
  end

  defp is_api_request?(conn), do: "application/json" in get_req_header(conn, "accept")
end
```

Now that this is done, you can forward HTTP requests to it from your app's main router using `forward "/auth", to: MyApp.AuthPlug` or similar.

Your generated auth plug module will also contain `load_from_session` and `load_from_bearer` function plugs, which can be used to load users into assigns based on the contents of the session store or `Authorization` header.

## [](get-started.html#summary)Summary

In this guide we've learned how to install Ash Authentication, configure resources and handle authentication HTTP requests.

You should now have an Ash application with working user authentication.

Up next, [Using with Phoenix](../ash_authentication_phoenix/get-started.html)

[← Previous Page Change Log](changelog.html)

[Next Page → Auth0 Tutorial](auth0.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/tutorials/get-started.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/tutorials/github.md#L1 "View Source") GitHub Tutorial

This is a quick tutorial on how to configure your application to use GitHub for authentication.

First you need to configure an application in your [GitHub developer settings](https://github.com/settings/developers):

1. Click the "New OAuth App" button.
2. Set your application name to something that identifies it. You will likely need separate applications for development and production environments, so keep that in mind.
3. Set "Homepage URL" appropriately for your application and environment.
4. In the "Authorization callback URL" section, add your callback URL. The callback URL is generated from the following information:
   
   - The base URL of the application - in development that would be `http://localhost:4000/` but in production will be your application's URL.
   - The mount point of the auth routes in your router - we'll assume `/auth`.
   - The "subject name" of the resource being authenticated - we'll assume `user`.
   - The name of the strategy in your configuration. By default this is `github`.
   
   This means that the callback URL should look something like `http://localhost:4000/auth/user/github/callback`.
5. Do not set "Enable Device Flow" unless you know why you want this.
6. Click "Register application".
7. Click "Generate a new client secret".
8. Copy the "Client ID" and "Client secret" somewhere safe, we'll need them soon.
9. Click "Update application".

Next we can configure our resource (assuming you already have everything else set up):

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  authentication do
    strategies do
      github do
        client_id MyApp.Secrets
        redirect_uri MyApp.Secrets
        client_secret MyApp.Secrets
      end
    end
  end
end
```

Because all the configuration values should be kept secret (ie the `client_secret`) or are likely to be different for each environment we use the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour to provide them. In this case we're delegating to the OTP application environment, however you may want to use a system environment variable or some other secret store (eg Vault).

```
defmodule MyApp.Secrets do
  use AshAuthentication.Secret

  def secret_for([:authentication, :strategies, :github, :client_id], MyApp.Accounts.User, _) do
    get_config(:client_id)
  end

  def secret_for([:authentication, :strategies, :github, :redirect_uri], MyApp.Accounts.User, _) do
    get_config(:redirect_uri)
  end

  def secret_for([:authentication, :strategies, :github, :client_secret], MyApp.Accounts.User, _) do
    get_config(:client_secret)
  end

  defp get_config(key) do
    :my_app
    |> Application.get_env(:github, [])
    |> Keyword.fetch(key)
  end
end
```

The values for this configuration should be:

- `client_id` - the client ID copied from the GitHub settings page.
- `redirect_uri` - the URL to the generated auth routes in your application (eg `http://localhost:4000/auth`).
- `client_secret` the client secret copied from the GitHub settings page.

Lastly, we need to add a register action to your user resource. This is defined as an upsert so that it can register new users, or update information for returning users. The default name of the action is `register_with_` followed by the strategy name. In our case that is `register_with_github`.

The register action takes two arguments, `user_info` and the `oauth_tokens`.

- `user_info` contains the [`GET /user` response from GitHub](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user) which you can use to populate your user attributes as needed.
- `oauth_tokens` contains the [`POST /login/oauth/access_token` response from GitHub](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#response)
  
  - you may want to store these if you intend to call the GitHub API on behalf of the user.

```
defmodule MyApp.Accounts.User do
  require Ash.Resource.Change.Builtins
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  # ...

  actions do
    create :register_with_github do
      argument :user_info, :map, allow_nil?: false
      argument :oauth_tokens, :map, allow_nil?: false
      upsert? true
      upsert_identity :unique_email

      # Required if you have token generation enabled.
      change AshAuthentication.GenerateTokenChange

      # Required if you have the `identity_resource` configuration enabled.
      change AshAuthentication.Strategy.OAuth2.IdentityChange

      change fn changeset, _ ->
        user_info = Ash.Changeset.get_argument(changeset, :user_info)

        Ash.Changeset.change_attributes(changeset, Map.take(user_info, ["email"]))
      end

      # Required if you're using the password & confirmation strategies
      upsert_fields []
      change set_attribute(:confirmed_at, &DateTime.utc_now/0)
      change after_action(fn _changeset, user, _context ->
        case user.confirmed_at do
          nil -> {:error, "Unconfirmed user exists already"}
          _ -> {:ok, user}
        end
      end)
    end
  end

  # ...

end
```

Ensure you set the `hashed_password` to `allow_nil?` if you are also using the password strategy.

```
defmodule MyApp.Accounts.User do
  # ...
  attributes do
    # ...
    attribute :hashed_password, :string, allow_nil?: true, sensitive?: true
  end
  # ...
end
```

And generate and run migrations in that case.

```
mix ash.codegen make_hashed_password_nullable
mix ash.migrate
```

[← Previous Page Confirmation Tutorial](confirmation.html)

[Next Page → Google Tutorial](google.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/tutorials/github.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/tutorials/google.md#L1 "View Source") Google Tutorial

This is a quick tutorial on how to configure Google authentication.

First you'll need a registered application in [Google Cloud](https://console.cloud.google.com/welcome), in order to get your OAuth 2.0 Client credentials.

1. On the Cloud's console **Quick access** section select **APIs &amp; Services**, then **Credentials**
2. Click on **+ CREATE CREDENTIALS** and from the dropdown select **OAuth client ID**
3. From the google developers console, we will need: `client_id` &amp; `client_secret`
4. Enter your callback uri under **Authorized redirect URIs**. E.g. `http://localhost:4000/auth/user/google/callback`.

Next we configure our resource to use google credentials:

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  attributes do
    ...
  end

  authentication do
    strategies do
      google do
        client_id MyApp.Secrets
        redirect_uri MyApp.Secrets
        client_secret MyApp.Secrets
      end
    end
  end
end
```

Please check the guide on how to properly configure your Secrets Then we need to define an action that will handle the oauth2 flow, for the google case it is `:register_with_google` it will handle both cases for our resource, user registration &amp; login.

```
defmodule MyApp.Accounts.User do
  require Ash.Resource.Change.Builtins
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  # ...
  actions do
    create :register_with_google do
      argument :user_info, :map, allow_nil?: false
      argument :oauth_tokens, :map, allow_nil?: false
      upsert? true
      upsert_identity :unique_email

      change AshAuthentication.GenerateTokenChange

      # Required if you have the `identity_resource` configuration enabled.
      change AshAuthentication.Strategy.OAuth2.IdentityChange

      change fn changeset, _ ->
        user_info = Ash.Changeset.get_argument(changeset, :user_info)

        Ash.Changeset.change_attributes(changeset, Map.take(user_info, ["email"]))
      end

      # Required if you're using the password & confirmation strategies
      upsert_fields []
      change set_attribute(:confirmed_at, &DateTime.utc_now/0)
      change after_action(fn _changeset, user, _context ->
        case user.confirmed_at do
          nil -> {:error, "Unconfirmed user exists already"}
          _ -> {:ok, user}
        end
      end)
    end
  end

  # ...

end
```

Ensure you set the `hashed_password` to `allow_nil?` if you are also using the password strategy.

```
defmodule MyApp.Accounts.User do
  # ...
  attributes do
    # ...
    attribute :hashed_password, :string, allow_nil?: true, sensitive?: true
  end
  # ...
end
```

And generate and run migrations in that case.

```
mix ash.codegen make_hashed_password_nullable
mix ash.migrate
```

[← Previous Page GitHub Tutorial](github.html)

[Next Page → Magic Links Tutorial](magic-links.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/tutorials/google.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/tutorials/magic-links.md#L1 "View Source") Magic Links Tutorial

## [](magic-links.html#with-a-mix-task)With a mix task

You can use `mix ash_authentication.add_strategy magic_link` to install this strategy. The rest of the guide is in the case that you wish to proceed manually.

## [](magic-links.html#add-the-magic-link-strategy-to-the-user-resource)Add the Magic Link Strategy to the User resource

```
# ...

strategies do
  # add these lines -->
  magic_link do
    identity_field :email
    registration_enabled? true

    sender(Example.Accounts.User.Senders.SendMagicLink)
  end
  # <-- add these lines
end

# ...
```

### [](magic-links.html#registration-enabled)Registration Enabled

When registration is enabled, signing in with magic is a *create* action that upserts the user by email. This allows a user who does not exist to request a magic link and sign up with one action.

### [](magic-links.html#registration-disabled-default)Registration Disabled (default)

When registration is disabled, signing in with magic link is a *read* action.

## [](magic-links.html#create-an-email-sender-and-email-template)Create an email sender and email template

Inside `/lib/example/accounts/user/senders/send_magic_link.ex`

```
defmodule Example.Accounts.User.Senders.SendMagicLink do
  @moduledoc """
  Sends a magic link
  """
  use AshAuthentication.Sender
  use ExampleWeb, :verified_routes

  @impl AshAuthentication.Sender
  def send(user_or_email, token, _) do
    # will be a user if the token relates to an existing user
    # will be an email if there is no matching user (such as during sign up)
    Example.Accounts.Emails.deliver_magic_link(
      user_or_email,
      url(~p"/auth/user/magic_link/?token=#{token}")
    )
  end
end
```

Inside `/lib/example/accounts/emails.ex`

```
# ...

def deliver_magic_link(user, url) do
  if !url do
    raise "Cannot deliver reset instructions without a url"
  end

  email = case user do
    %{email: email} -> email
    email -> email
  end

  deliver(email, "Magic Link", """
  <html>
    <p>
      Hi #{email},
    </p>

    <p>
      <a href="#{url}">Click here</a> to login.
    </p>
  <html>
  """)
end

# ...
```

[← Previous Page Google Tutorial](google.html)

[Next Page → Password Authentication](password.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/tutorials/magic-links.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/mix/tasks/ash_authentication.add_strategy.ex#L3 "View Source") mix ash\_authentication.add\_strategy (ash\_authentication v4.4.4)

Adds the provided strategy or strategies to your user resource

This task will add the provided strategy or strategies to your user resource.

The following strategies are available. For all others, see the relevant documentation for setup

- `password` - Register and sign in with a username/email and a password.
- `magic_link` - Register and sign in with a magic link, sent via email to the user.

## [](Mix.Tasks.AshAuthentication.AddStrategy.html#module-example)Example

```
mix ash_authentication.add_strategy password
```

## [](Mix.Tasks.AshAuthentication.AddStrategy.html#module-options)Options

- `--user`, `-u` - The user resource. Defaults to `YourApp.Accounts.User`
- `--identity-field`, `-i` - The field on the user resource that will be used to identify the user. Defaults to `email`

# [](Mix.Tasks.AshAuthentication.AddStrategy.html#summary)Summary

## [Functions](Mix.Tasks.AshAuthentication.AddStrategy.html#functions)

[igniter(igniter, argv)](Mix.Tasks.AshAuthentication.AddStrategy.html#igniter/2)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.16/Igniter.Mix.Task.html#c:igniter/2).

# [](Mix.Tasks.AshAuthentication.AddStrategy.html#functions)Functions

[](Mix.Tasks.AshAuthentication.AddStrategy.html#igniter/2)

# igniter(igniter, argv)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/mix/tasks/ash_authentication.add_strategy.ex#L63)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.16/Igniter.Mix.Task.html#c:igniter/2).

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/lib/mix/tasks/ash_authentication.install.ex#L3 "View Source") mix ash\_authentication.install (ash\_authentication v4.4.4)

Installs AshAuthentication. Invoke with `mix igniter.install ash_authentication`

## [](Mix.Tasks.AshAuthentication.Install.html#module-example)Example

```
mix igniter.install ash_authentication
```

## [](Mix.Tasks.AshAuthentication.Install.html#module-options)Options

- `--accounts` or `-a` - The domain that contains your resources. Defaults to `YourApp.Accounts`.
- `--user` or `-u` - The resource that represents a user. Defaults to `<accounts>.User`.
- `--token` or `-t` - The resource that represents a token. Defaults to `<accounts>.Token`.
- `--auth-strategy` - The strategy or strategies to use for authentication. None by default, can be specified multiple times for more than one strategy. To add after installation, use `mix ash_authentication.add_strategy password`

# [](Mix.Tasks.AshAuthentication.Install.html#summary)Summary

## [Functions](Mix.Tasks.AshAuthentication.Install.html#functions)

[data\_layer\_args(igniter, opts)](Mix.Tasks.AshAuthentication.Install.html#data_layer_args/2)

[setup\_data\_layer(igniter, repo)](Mix.Tasks.AshAuthentication.Install.html#setup_data_layer/2)

# [](Mix.Tasks.AshAuthentication.Install.html#functions)Functions

[](Mix.Tasks.AshAuthentication.Install.html#data_layer_args/2)

# data\_layer\_args(igniter, opts)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/mix/tasks/ash_authentication.install.ex#L401)

[](Mix.Tasks.AshAuthentication.Install.html#setup_data_layer/2)

# setup\_data\_layer(igniter, repo)

[](https://github.com/team-alembic/ash_authentication/blob/main/lib/mix/tasks/ash_authentication.install.ex#L396)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/tutorials/password.md#L1 "View Source") Password Authentication

## [](password.html#with-a-mix-task)With a mix task

You can use `mix ash_authentication.add_strategy password` to install this strategy. The rest of the guide is in the case that you wish to proceed manually.

## [](password.html#add-bcrypt-to-your-dependencies)Add Bcrypt To your dependencies

This step is not strictly necessary, but in the next major version of [`AshAuthentication`](AshAuthentication.html), [`Bcrypt`](../bcrypt_elixir/3.2.0/Bcrypt.html) will be an optional dependency. This will make that upgrade slightly easier.

```
{:bcrypt_elixir, "~> 3.0"}
```

## [](password.html#add-attributes)Add Attributes

Add an `email` (or `username`) and `hashed_password` attribute to your user resource.

```
# lib/my_app/accounts/user.ex
attributes do
  ...
  attribute :email, :ci_string, allow_nil?: false, public?: true
  attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
end
```

Ensure that the `email` (or username) is unique.

```
# lib/my_app/accounts/user.ex
identities do
  identity :unique_email, [:email]
  # or
  identity :unique_username, [:username]
end
```

## [](password.html#add-the-password-strategy)Add the password strategy

Configure it to use the `:email` or `:username` as the identity field.

```
# lib/my_app/accounts/user.ex
authentication do
  ...
  strategies do
    password :password do
      identity_field :email
      # or
      identity_field :username
    end
  end
end
```

Now we have enough in place to register and sign-in users using the [`AshAuthentication.Strategy`](AshAuthentication.Strategy.html) protocol.

[← Previous Page Magic Links Tutorial](magic-links.html)

[Next Page → Slack Tutorial](slack.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/tutorials/password.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/topics/policies-on-authentication-resources.md#L1 "View Source") Policies on Authenticated Resources

Typically, we want to lock down our `User` resource pretty heavily, which, in Ash, involves writing policies. However, AshAuthentication will be calling actions on your user/token resources. To make this more convenient, all actions run with [`AshAuthentication`](AshAuthentication.html) will set a special context. Additionally a check is provided that will check if that context has been set: [`AshAuthentication.Checks.AshAuthenticationInteraction`](AshAuthentication.Checks.AshAuthenticationInteraction.html). Using this you can write a simple bypass policy on your user/token resources like so:

```
policies do
  bypass always() do
    authorize_if AshAuthentication.Checks.AshAuthenticationInteraction
  end

  # or, pick your poison

  bypass AshAuthentication.Checks.AshAuthenticationInteraction do
    authorize_if always()
  end
end
```

[← Previous Page Defining Custom Authentication Strategies](custom-strategy.html)

[Next Page → Testing](testing.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/topics/policies-on-authentication-resources.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/README.md#L1 "View Source") README

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/team-alembic/ash_authentication/workflows/Elixir%20Library/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_authentication.svg)](https://hex.pm/packages/ash_authentication) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_authentication.html)

# Ash Authentication

Welcome! Here you will find everything you need to know to get started with and use Ash Authentication. This documentation is best viewed on [hexdocs](../ash_authentication.html).

## [](readme.html#about-the-documentation)About the Documentation

[**Tutorials**](readme.html#tutorials) walk you through a series of steps to accomplish a goal. These are **learning-oriented**, and are a great place for beginners to start.

* * *

[**Topics**](readme.html#topics) provide a high level overview of a specific concept or feature. These are **understanding-oriented**, and are perfect for discovering design patterns, features, and tools related to a given topic.

* * *

[**Reference**](readme.html#reference) documentation is produced automatically from our source code. It comes in the form of module documentation and DSL documentation. This documentation is **information-oriented**. Use the sidebar and the search bar to find relevant reference information.

## [](readme.html#tutorials)Tutorials

- [Get Started](get-started.html)

* * *

## [](readme.html#topics)Topics

- [Custom Strategies](custom-strategy.html)
- [Policies on Authenticated Resources](policies-on-authentication-resources.html)
- [Testing](testing.html)
- [Tokens](tokens.html)
- [Upgrade guides](upgrading.html)

* * *

## [](readme.html#tutorials-1)Tutorials

- [Authenticate with Auth0](auth0.html)
- [Authenticate with GitHub](github.html)
- [Authenticate with Google](google.html)
- [Authenticate with Magic Links](magic-links.html)
- [Confirmation](confirmation.html)

* * *

## [](readme.html#reference)Reference

- [AshAuthentication DSL](dsl-ashauthentication.html)
- [AshAuthentication.AddOn.Confirmation DSL](dsl-ashauthentication-addon-confirmation.html)
- [AshAuthentication.Strategy.Auth0](dsl-ashauthentication-strategy-auth0.html)
- [AshAuthentication.Strategy.Github DSL](dsl-ashauthentication-strategy-github.html)
- [AshAuthentication.Strategy.Google DSL](dsl-ashauthentication-strategy-google.html)
- [AshAuthentication.Strategy.MagicLink DSL](dsl-ashauthentication-strategy-magiclink.html)
- [AshAuthentication.Strategy.OAuth2 DSL](dsl-ashauthentication-strategy-oauth2.html)
- [AshAuthentication.Strategy.Oidc DSL](dsl-ashauthentication-strategy-oidc.html)
- [AshAuthentication.Strategy.Password DSL](dsl-ashauthentication-strategy-password.html)
- [AshAuthentication.TokenResource DSL](dsl-ashauthentication-tokenresource.html)
- [AshAuthentication.UserIdentity DSL](dsl-ashauthentication-useridentity.html)
- For other reference documentation, see the sidebar &amp; search bar

## [](readme.html#related-packages)Related packages

- [Ash Framework](../ash.html)
- [Ash Authentication Phoenix](../ash_authentication_phoenix.html) | Integrates Ash Authentication into your Phoenix application

* * *

[![Alembic](https://hexdocs.pm/ash_authentication/logos/alembic.svg)](https://alembic.com.au)

Proudly written and maintained by the team at [Alembic](https://alembic.com.au) for the Ash community.

[← Previous Page API Reference](api-reference.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/README.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/tutorials/slack.md#L1 "View Source") Slack Tutorial

This is a quick tutorial on how to configure your application to use Slack for authentication.

First you need to configure an application in your [Slack app settings](https://api.slack.com/apps):

01. Click the "Create New App" button.
02. Select "From scratch"
03. Set your application name to something that identifies it. You will likely need separate applications for development and production environments, so keep that in mind.
04. Select a "development workspace", which can be used for testing.
05. Browse to the "OAuth &amp; Permissions" page.
06. In the "Redirect URLs" section add your callback URL. The callback URL is generated from the following information:
    
    - The base URL of the application - in development that would be `http://localhost:4000/` but in production will be your application's URL.
    - The mount point of the auth routes in your router - we'll assume `/auth`.
    - The "subject name" of the resource being authenticated - we'll assume `user`.
    - The name of the strategy in your configuration. By default this is `slack`.
    
    This means that the callback URL should look something like `http://localhost:4000/auth/user/slack/callback`.
    
    > # HTTPS Required
    > 
    > Slack won't allow you to register an HTTP URL as the redirect URL, so you will likely have to add a URL for a service like [ngrok](https://ngrok.com/)
07. In the "Scopes" section, add your user token scopes. You must request `openid`, and may request `email` and `profile` as well.
08. In the "OAuth Tokens" section click "Install to :workspace:" where `:workspace:` is the one you selected as the development workspace.
09. Browse back to the "Basic Information".
10. Copy the "Client ID" and "Client secret" somewhere safe, we'll need them soon.

Next we can configure our resource (assuming you already have everything else set up):

```
defmodule MyApp.Accounts.User do
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  authentication do
    strategies do
      slack do
        client_id MyApp.Secrets
        redirect_uri MyApp.Secrets
        client_secret MyApp.Secrets
      end
    end
  end
end
```

Because all the configuration values should be kept secret (ie the `client_secret`) or are likely to be different for each environment we use the [`AshAuthentication.Secret`](AshAuthentication.Secret.html) behaviour to provide them. In this case we're delegating to the OTP application environment, however you may want to use a system environment variable or some other secret store (eg Vault).

```
defmodule MyApp.Secrets do
  use AshAuthentication.Secret

  def secret_for([:authentication, :strategies, :slack, :client_id], MyApp.Accounts.User, _) do
    get_config(:client_id)
  end

  def secret_for([:authentication, :strategies, :slack, :redirect_uri], MyApp.Accounts.User, _) do
    get_config(:redirect_uri)
  end

  def secret_for([:authentication, :strategies, :slack, :client_secret], MyApp.Accounts.User, _) do
    get_config(:client_secret)
  end

  defp get_config(key) do
    :my_app
    |> Application.get_env(:slack, [])
    |> Keyword.fetch(key)
  end
end
```

The values for this configuration should be:

- `client_id` - the client ID copied from the Slack settings page.
- `redirect_uri` - the URL to the generated auth routes in your application (eg `http://localhost:4000/auth`).
- `client_secret` the client secret copied from the Slack settings page.

Lastly, we need to add a register action to your user resource. This is defined as an upsert so that it can register new users, or update information for returning users. The default name of the action is `register_with_` followed by the strategy name. In our case that is `register_with_slack`.

The register action takes two arguments, `user_info` and the `oauth_tokens`.

- `user_info` contains the [`GET /user` response from Slack](https://api.slack.com/authentication/sign-in-with-slack#response) which you can use to populate your user attributes as needed.
- `oauth_tokens` contains the [`POST /login/oauth/access_token` response from Slack](https://api.slack.com/authentication/sign-in-with-slack#response)
  
  - you may want to store these if you intend to call the Slack API on behalf of the user.

```
defmodule MyApp.Accounts.User do
  require Ash.Resource.Change.Builtins
  use Ash.Resource,
    extensions: [AshAuthentication],
    domain: MyApp.Accounts

  # ...

  actions do
    create :register_with_slack do
      argument :user_info, :map, allow_nil?: false
      argument :oauth_tokens, :map, allow_nil?: false
      upsert? true
      upsert_identity :unique_email

      # Required if you have token generation enabled.
      change AshAuthentication.GenerateTokenChange

      # Required if you have the `identity_resource` configuration enabled.
      change AshAuthentication.Strategy.OAuth2.IdentityChange

      change fn changeset, _ ->
        user_info = Ash.Changeset.get_argument(changeset, :user_info)

        Ash.Changeset.change_attributes(changeset, Map.take(user_info, ["email"]))
      end

      # Required if you're using the password & confirmation strategies
      upsert_fields []
      change set_attribute(:confirmed_at, &DateTime.utc_now/0)
      change after_action(fn _changeset, user, _context ->
        case user.confirmed_at do
          nil -> {:error, "Unconfirmed user exists already"}
          _ -> {:ok, user}
        end
      end)
    end
  end

  # ...

end
```

Ensure you set the `hashed_password` to `allow_nil?` if you are also using the password strategy.

```
defmodule MyApp.Accounts.User do
  # ...
  attributes do
    # ...
    attribute :hashed_password, :string, allow_nil?: true, sensitive?: true
  end
  # ...
end
```

And generate and run migrations in that case.

```
mix ash.codegen make_hashed_password_nullable
mix ash.migrate
```

[← Previous Page Password Authentication](password.html)

[Next Page → Defining Custom Authentication Strategies](custom-strategy.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/tutorials/slack.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/topics/testing.md#L1 "View Source") Testing

Tips and tricks to help test your apps.

## [](testing.html#when-using-the-password-strategy)When using the Password strategy

AshAuthentication uses `bcrypt_elixir` for hashing passwords for secure storage, which by design has a high computational cost. To reduce the cost (make hashing faster), you can reduce the number of computation rounds it performs in tests:

```
# in config/test.exs

# Do NOT set this value for production
config :bcrypt_elixir, log_rounds: 1
```

[← Previous Page Policies on Authenticated Resources](policies-on-authentication-resources.html)

[Next Page → Tokens](tokens.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/topics/testing.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_authentication](assets/logo.png)](readme.html)

[ash\_authentication](readme.html)

v4.4.4

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication

Settings

# [View Source](https://github.com/team-alembic/ash_authentication/blob/main/documentation/topics/tokens.md#L1 "View Source") Tokens

## [](tokens.html#token-lifetime)Token Lifetime

Since refresh tokens are not yet included in `ash_authentication`, you should set the token lifetime to a reasonably long time to ensure a good user experience. Alternatively, refresh tokens can be implemented on your own.

## [](tokens.html#requiring-token-storage)Requiring Token Storage

Using `AshAuthentication.Dsl.authentication.tokens.require_token_presence_for_authentication?` inverts the token validation behaviour from requiring that tokens are not revoked to requiring any token presented by a client to be present in the token resource to be considered valid.

Requires `store_all_tokens?` to be `true`.

`store_all_tokens?` instructs [`AshAuthentication`](AshAuthentication.html) to keep track of all tokens issued to any user. This is optional behaviour with `ash_authentication` in order to preserve as much performance as possible.

## [](tokens.html#sign-in-tokens)Sign in Tokens

Enabled with `AshAuthentication.Strategy.Password.authentication.strategies.password.sign_in_tokens_enabled?`

Sign in tokens can be generated on request by setting the `:token_type` context to `:sign_in` when calling the sign in action. You might do this when you need to generate a short lived token to be exchanged for a real token using the `validate_sign_in_token` route. This is used, for example, by `ash_authentication_phoenix` (since 1.7) to support signing in in a liveview, and then redirecting with a valid token to a controller action, allowing the liveview to show invalid username/password errors.

[← Previous Page Testing](testing.html)

[Next Page → Upgrading](upgrading.html)

[Hex Package](https://hex.pm/packages/ash_authentication/4.4.4) [Hex Preview](https://preview.hex.pm/preview/ash_authentication/4.4.4) ([current file](https://preview.hex.pm/preview/ash_authentication/4.4.4/show/documentation/topics/tokens.md)) Search HexDocs [Download ePub version](ash_authentication.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
