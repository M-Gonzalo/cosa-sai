[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# API Reference ash\_authentication\_phoenix v2.4.5

## [](api-reference.html#modules)Modules

[AshAuthentication.Phoenix](AshAuthentication.Phoenix.html)

Welcome to `AshAuthentication.Pheonix`.

[AshAuthentication.Phoenix.Components.Apple](AshAuthentication.Phoenix.Components.Apple.html)

Generates a sign-in button for Apple.

[AshAuthentication.Phoenix.Components.Banner](AshAuthentication.Phoenix.Components.Banner.html)

Renders a very simple banner at the top of the sign-in component.

[AshAuthentication.Phoenix.Components.Helpers](AshAuthentication.Phoenix.Components.Helpers.html)

Helpers which are commonly needed inside the various components.

[AshAuthentication.Phoenix.Components.HorizontalRule](AshAuthentication.Phoenix.Components.HorizontalRule.html)

A horizontal rule with text.

[AshAuthentication.Phoenix.Components.MagicLink](AshAuthentication.Phoenix.Components.MagicLink.html)

Generates a sign-in for for a resource using the "Magic link" strategy.

[AshAuthentication.Phoenix.Components.OAuth2](AshAuthentication.Phoenix.Components.OAuth2.html)

Generates a sign-in button for OAuth2.

[AshAuthentication.Phoenix.Components.Password](AshAuthentication.Phoenix.Components.Password.html)

Generates sign in, registration and reset forms for a resource.

[AshAuthentication.Phoenix.Components.Password.Input](AshAuthentication.Phoenix.Components.Password.Input.html)

Function components for dealing with form input during password authentication.

[AshAuthentication.Phoenix.Components.Password.RegisterForm](AshAuthentication.Phoenix.Components.Password.RegisterForm.html)

Generates a default registration form.

[AshAuthentication.Phoenix.Components.Password.ResetForm](AshAuthentication.Phoenix.Components.Password.ResetForm.html)

Generates a default password reset form.

[AshAuthentication.Phoenix.Components.Password.SignInForm](AshAuthentication.Phoenix.Components.Password.SignInForm.html)

Generates a default sign in form.

[AshAuthentication.Phoenix.Components.Reset](AshAuthentication.Phoenix.Components.Reset.html)

Renders a password-reset form.

[AshAuthentication.Phoenix.Components.Reset.Form](AshAuthentication.Phoenix.Components.Reset.Form.html)

Generates a default password reset form.

[AshAuthentication.Phoenix.Components.SignIn](AshAuthentication.Phoenix.Components.SignIn.html)

Renders sign in mark-up for an authenticated resource.

[AshAuthentication.Phoenix.Controller](AshAuthentication.Phoenix.Controller.html)

The authentication controller generator.

[AshAuthentication.Phoenix.LiveSession](AshAuthentication.Phoenix.LiveSession.html)

Ensures that any loaded users which are present in a conn's assigns are also present in a live view socket's assigns.

[AshAuthentication.Phoenix.Overrides](AshAuthentication.Phoenix.Overrides.html)

Behaviour for overriding component styles and attributes in your application.

[AshAuthentication.Phoenix.Overrides.Default](AshAuthentication.Phoenix.Overrides.Default.html)

This is the default overrides for our component UI.

[AshAuthentication.Phoenix.Overrides.Info](AshAuthentication.Phoenix.Overrides.Info.html)

Override introspection.

[AshAuthentication.Phoenix.Overrides.Overridable](AshAuthentication.Phoenix.Overrides.Overridable.html)

Auto generates documentation and helpers for components.

[AshAuthentication.Phoenix.Plug](AshAuthentication.Phoenix.Plug.html)

Helper plugs mixed in to your router.

[AshAuthentication.Phoenix.ResetLive](AshAuthentication.Phoenix.ResetLive.html)

A generic, white-label password reset page.

[AshAuthentication.Phoenix.Router](AshAuthentication.Phoenix.Router.html)

Phoenix route generation for AshAuthentication.

[AshAuthentication.Phoenix.SignInLive](AshAuthentication.Phoenix.SignInLive.html)

A generic, white-label sign-in page.

[AshAuthentication.Phoenix.Test.Gettext](AshAuthentication.Phoenix.Test.Gettext.html)

Gettext stub, referenced in AshAuthentication.Phoenix.Test.Router

[AshAuthentication.Phoenix.Utils.Flash](AshAuthentication.Phoenix.Utils.Flash.html)

Utility functions for sending and receiving flash messages.

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_authentication.phoenix.routes](Mix.Tasks.AshAuthentication.Phoenix.Routes.html)

Prints all routes pertaining to AshAuthenticationPhoenix for the default or a given router.

[mix ash\_authentication\_phoenix.install](Mix.Tasks.AshAuthenticationPhoenix.Install.html)

Installs AshAuthenticationPhoenix. Invoke with `mix igniter.install ash_authentication_phoenix`

[Next Page → README](readme.html)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/apple.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Apple (ash\_authentication\_phoenix v2.4.5)

Generates a sign-in button for Apple.

## [](AshAuthentication.Phoenix.Components.Apple.html#module-component-hierarchy)Component hierarchy

This is the top-most strategy-specific component, nested below [`AshAuthentication.Phoenix.Components.SignIn`](AshAuthentication.Phoenix.Components.SignIn.html).

## [](AshAuthentication.Phoenix.Components.Apple.html#module-props)Props

- `strategy` - The strategy configuration as per [`AshAuthentication.Info.strategy/2`](../ash_authentication/4.4.3/AshAuthentication.Info.html#strategy/2). Required.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.Apple.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS classes for the root `div` element.
- `:link_class` - CSS classes for the `a` element.
- `:icon_class` - CSS classes for the icon SVG.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Apple.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.Apple.html#types)

[props()](AshAuthentication.Phoenix.Components.Apple.html#t:props/0)

## [Functions](AshAuthentication.Phoenix.Components.Apple.html#functions)

[icon(assigns)](AshAuthentication.Phoenix.Components.Apple.html#icon/1)

# [](AshAuthentication.Phoenix.Components.Apple.html#types)Types

[](AshAuthentication.Phoenix.Components.Apple.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/apple.ex#L31)

```
@type props() :: %{
  :strategy => AshAuthentication.Strategy.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

# [](AshAuthentication.Phoenix.Components.Apple.html#functions)Functions

[](AshAuthentication.Phoenix.Components.Apple.html#icon/1)

# icon(assigns)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/apple.ex#L66)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/banner.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Banner (ash\_authentication\_phoenix v2.4.5)

Renders a very simple banner at the top of the sign-in component.

Can show either an image or some text, depending on the provided overrides.

## [](AshAuthentication.Phoenix.Components.Banner.html#module-props)Props

- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.Banner.html#module-overrides)Overrides

This component provides the following overrides:

- `:text` - Banner text. Set to `nil` to disable.
- `:root_class` - CSS class for the root `div` element.
- `:href_class` - CSS class for the `a` tag.
- `:href_url` - A URL for the banner image to link to. Set to `nil` to disable.
- `:image_class` - CSS class for the `img` tag.
- `:dark_image_class` - Css class for the `img` tag in dark mode.
- `:image_url` - A URL for the `img` `src` attribute. Set to `nil` to disable.
- `:dark_image_url` - A URL for the `img` `src` attribute in dark mode. Set to `nil` to disable.
- `:text_class` - CSS class for the text `div`.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Banner.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.Banner.html#types)

[props()](AshAuthentication.Phoenix.Components.Banner.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.Banner.html#types)Types

[](AshAuthentication.Phoenix.Components.Banner.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/banner.ex#L29)

```
@type props() :: %{
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/helpers.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Helpers (ash\_authentication\_phoenix v2.4.5)

Helpers which are commonly needed inside the various components.

# [](AshAuthentication.Phoenix.Components.Helpers.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.Components.Helpers.html#functions)

[auth\_path(socket, subject\_name, auth\_routes\_prefix, strategy, phase, params \\\\ %{})](AshAuthentication.Phoenix.Components.Helpers.html#auth_path/6)

[otp\_app\_from\_socket(socket)](AshAuthentication.Phoenix.Components.Helpers.html#otp_app_from_socket/1)

The LiveView `Socket` contains a reference to the Phoenix endpoint, and from there we can extract the `otp_app` of the current request.

[route\_helpers(socket)](AshAuthentication.Phoenix.Components.Helpers.html#route_helpers/1)

The LiveView `Socket` contains a refererence to the Phoenix router, and from there we can generate the name of the route helpers module.

# [](AshAuthentication.Phoenix.Components.Helpers.html#functions)Functions

[](AshAuthentication.Phoenix.Components.Helpers.html#auth_path/6)

# auth\_path(socket, subject\_name, auth\_routes\_prefix, strategy, phase, params \\\\ %{})

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/helpers.ex#L21)

[](AshAuthentication.Phoenix.Components.Helpers.html#otp_app_from_socket/1)

# otp\_app\_from\_socket(socket)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/helpers.ex#L15)

```
@spec otp_app_from_socket(Phoenix.LiveView.Socket.t()) :: atom()
```

The LiveView `Socket` contains a reference to the Phoenix endpoint, and from there we can extract the `otp_app` of the current request.

This is pulled from `assigns[:otp_app]`, or inferred from the socket if that is not set.

[](AshAuthentication.Phoenix.Components.Helpers.html#route_helpers/1)

# route\_helpers(socket)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/helpers.ex#L53)

```
@spec route_helpers(Phoenix.LiveView.Socket.t()) :: module()
```

The LiveView `Socket` contains a refererence to the Phoenix router, and from there we can generate the name of the route helpers module.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/horizontal_rule.ex#L1 "View Source") AshAuthentication.Phoenix.Components.HorizontalRule (ash\_authentication\_phoenix v2.4.5)

A horizontal rule with text.

This component is pretty tailwind-specific, but I (@jimsynz) really wanted a certain look. If you think I'm wrong then please let me know.

## [](AshAuthentication.Phoenix.Components.HorizontalRule.html#module-overrides)Overrides

This component provides the following overrides:

- `:text` - Text to display in front of the horizontal rule.
- `:root_class` - CSS class for the root `div` element.
- `:hr_outer_class` - CSS class for the outer `div` element of the horizontal rule.
- `:hr_inner_class` - CSS class for the inner `div` element of the horizontal rule.
- `:text_outer_class` - CSS class for the outer `div` element of the text area.
- `:text_inner_class` - CSS class for the inner `div` element of the text area.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

## [](AshAuthentication.Phoenix.Components.HorizontalRule.html#module-props)Props

```
* `overrides` - A list of override modules.
```

# [](AshAuthentication.Phoenix.Components.HorizontalRule.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.HorizontalRule.html#types)

[props()](AshAuthentication.Phoenix.Components.HorizontalRule.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.HorizontalRule.html#types)Types

[](AshAuthentication.Phoenix.Components.HorizontalRule.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/horizontal_rule.ex#L26)

```
@type props() :: %{optional(:overrides) => [module()]}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/magic_link.ex#L1 "View Source") AshAuthentication.Phoenix.Components.MagicLink (ash\_authentication\_phoenix v2.4.5)

Generates a sign-in for for a resource using the "Magic link" strategy.

## [](AshAuthentication.Phoenix.Components.MagicLink.html#module-component-hierarchy)Component hierarchy

This is the top-most strategy-specific component, nested below [`AshAuthentication.Phoenix.Components.SignIn`](AshAuthentication.Phoenix.Components.SignIn.html).

Children:

- [`AshAuthentication.Phoenix.Components.Password.Input.identity_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#identity_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1)

## [](AshAuthentication.Phoenix.Components.MagicLink.html#module-props)Props

- `strategy` - the strategy configuration as per [`AshAuthentication.Info.strategy/2`](../ash_authentication/4.4.3/AshAuthentication.Info.html#strategy/2). Required.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.MagicLink.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:label_class` - CSS class for the `h2` element.
- `:form_class` - CSS class for the `form` element.
- `:disable_button_text` - Text for the submit button when the request is happening.
- `:request_flash_text` - Text for the flash message when a request is received. Set to `nil` to disable.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.MagicLink.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.MagicLink.html#types)

[props()](AshAuthentication.Phoenix.Components.MagicLink.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.MagicLink.html#types)Types

[](AshAuthentication.Phoenix.Components.MagicLink.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/magic_link.ex#L41)

```
@type props() :: %{
  :strategy => AshAuthentication.Strategy.t(),
  optional(:current_tenant) => String.t(),
  optional(:context) => map(),
  optional(:auth_routes_prefix) => String.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/oauth2.ex#L1 "View Source") AshAuthentication.Phoenix.Components.OAuth2 (ash\_authentication\_phoenix v2.4.5)

Generates a sign-in button for OAuth2.

## [](AshAuthentication.Phoenix.Components.OAuth2.html#module-component-hierarchy)Component hierarchy

This is the top-most strategy-specific component, nested below [`AshAuthentication.Phoenix.Components.SignIn`](AshAuthentication.Phoenix.Components.SignIn.html).

## [](AshAuthentication.Phoenix.Components.OAuth2.html#module-props)Props

- `strategy` - The strategy configuration as per [`AshAuthentication.Info.strategy/2`](../ash_authentication/4.4.3/AshAuthentication.Info.html#strategy/2). Required.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.OAuth2.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS classes for the root `div` element.
- `:link_class` - CSS classes for the `a` element.
- `:icon_class` - CSS classes for the icon SVG.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.OAuth2.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.OAuth2.html#types)

[props()](AshAuthentication.Phoenix.Components.OAuth2.html#t:props/0)

## [Functions](AshAuthentication.Phoenix.Components.OAuth2.html#functions)

[icon(assigns)](AshAuthentication.Phoenix.Components.OAuth2.html#icon/1)

# [](AshAuthentication.Phoenix.Components.OAuth2.html#types)Types

[](AshAuthentication.Phoenix.Components.OAuth2.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/oauth2.ex#L32)

```
@type props() :: %{
  :strategy => AshAuthentication.Strategy.t(),
  optional(:auth_routes_prefix) => String.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

# [](AshAuthentication.Phoenix.Components.OAuth2.html#functions)Functions

[](AshAuthentication.Phoenix.Components.OAuth2.html#icon/1)

# icon(assigns)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/oauth2.ex#L63)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Password (ash\_authentication\_phoenix v2.4.5)

Generates sign in, registration and reset forms for a resource.

## [](AshAuthentication.Phoenix.Components.Password.html#module-component-hierarchy)Component hierarchy

This is the top-most strategy-specific component, nested below [`AshAuthentication.Phoenix.Components.SignIn`](AshAuthentication.Phoenix.Components.SignIn.html).

Children:

- [`AshAuthentication.Phoenix.Components.Password.SignInForm`](AshAuthentication.Phoenix.Components.Password.SignInForm.html)
- [`AshAuthentication.Phoenix.Components.Password.RegisterForm`](AshAuthentication.Phoenix.Components.Password.RegisterForm.html)
- [`AshAuthentication.Phoenix.Components.Password.ResetForm`](AshAuthentication.Phoenix.Components.Password.ResetForm.html)

## [](AshAuthentication.Phoenix.Components.Password.html#module-props)Props

- `strategy` - The strategy configuration as per [`AshAuthentication.Info.strategy/2`](../ash_authentication/4.4.3/AshAuthentication.Info.html#strategy/2). Required.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.Password.html#module-slots)Slots

- `sign_in_extra` - rendered inside the sign-in form with the form passed as a slot argument.
- `register_extra` - rendered inside the registration form with the form passed as a slot argument.
- `reset_extra` - rendered inside the reset form with the form passed as a slot argument.
- `path` - used as the base for links to other pages.
- `reset_path` - the path to use for reset links.
- `register_path` - the path to use for register links.

```
<.live_component
  module={AshAuthentication.Phoenix.Components.Password}
  strategy={AshAuthentication.Info.strategy!(Example.User, :password)}
  id="user-with-password"
  socket={@socket}
  overrides={[AshAuthentication.Phoenix.Overrides.Default]}>

  <:sign_in_extra :let={form}>
    <.input field={form[:capcha]} />
  </:sign_in_extra>

  <:register_extra :let={form}>
    <.input field={form[:name]} />
  </:register_extra>

  <:reset_extra :let={form}>
    <.input field={form[:capcha]} />
  </:reset_extra>
</.live_component>
```

## [](AshAuthentication.Phoenix.Components.Password.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:hide_class` - CSS class to apply to hide an element.
- `:show_first` - The form to show on first load. Either `:sign_in` or `:register`. Only relevant if paths aren't set for them in the router.
- `:interstitial_class` - CSS class for the `div` element between the form and the button.
- `:sign_in_toggle_text` - Toggle text to display when the sign in form is not showing (or `nil` to disable).
- `:register_toggle_text` - Toggle text to display when the register form is not showing (or `nil` to disable).
- `:reset_toggle_text` - Toggle text to display when the reset form is not showing (or `nil` to disable).
- `:toggler_class` - CSS class for the toggler `a` element.
- `:slot_class` - CSS class for the `div` surrounding the slot.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Password.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.Password.html#types)

[props()](AshAuthentication.Phoenix.Components.Password.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.Password.html#types)Types

[](AshAuthentication.Phoenix.Components.Password.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password.ex#L82)

```
@type props() :: %{
  :strategy => AshAuthentication.Strategy.t(),
  optional(:live_action) => :sign_in | :register,
  optional(:path) => String.t(),
  optional(:current_tenant) => String.t(),
  optional(:context) => map(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/input.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Password.Input (ash\_authentication\_phoenix v2.4.5)

Function components for dealing with form input during password authentication.

## [](AshAuthentication.Phoenix.Components.Password.Input.html#module-component-hierarchy)Component hierarchy

These function components are consumed by [`AshAuthentication.Phoenix.Components.Password.SignInForm`](AshAuthentication.Phoenix.Components.Password.SignInForm.html), [`AshAuthentication.Phoenix.Components.Password.RegisterForm`](AshAuthentication.Phoenix.Components.Password.RegisterForm.html) and `AshAuthentication.Phoenix.Components.ResetForm`.

## [](AshAuthentication.Phoenix.Components.Password.Input.html#module-overrides)Overrides

This component provides the following overrides:

- `:label_class` - CSS class for `label` elements.
- `:field_class` - CSS class for `div` elements surrounding the fields.
- `:input_class` - CSS class for text/password `input` elements.
- `:identity_input_label` - Label for identity field.
- `:identity_input_placeholder` - Placeholder for identity field.
- `:password_input_label` - Label for password field.
- `:password_confirmation_input_label` - Label for password confirmation field.
- `:input_class_with_error` - CSS class for text/password `input` elements when there is a validation error.
- `:submit_class` - CSS class for the form submit `input` element.
- `:error_ul` - CSS class for the `ul` element on error lists.
- `:error_li` - CSS class for the `li` elements on error lists.
- `:input_debounce` - Number of milliseconds to debounce input by (or `nil` to disable).

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Password.Input.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.Components.Password.Input.html#functions)

[error(assigns)](AshAuthentication.Phoenix.Components.Password.Input.html#error/1)

Generate a list of errors for a field (if there are any).

[identity\_field(assigns)](AshAuthentication.Phoenix.Components.Password.Input.html#identity_field/1)

Generate a form field for the configured identity field.

[password\_confirmation\_field(assigns)](AshAuthentication.Phoenix.Components.Password.Input.html#password_confirmation_field/1)

Generate a form field for the configured password confirmation entry field.

[password\_field(assigns)](AshAuthentication.Phoenix.Components.Password.Input.html#password_field/1)

Generate a form field for the configured password entry field.

[submit(assigns)](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1)

Generate an form submit button.

# [](AshAuthentication.Phoenix.Components.Password.Input.html#functions)Functions

[](AshAuthentication.Phoenix.Components.Password.Input.html#error/1)

# error(assigns)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/input.ex#L302)

```
@spec error(%{
  :socket => Phoenix.LiveView.Socket.t(),
  :form => AshPhoenix.Form.t(),
  :field => atom(),
  optional(:field_label) => String.Chars.t(),
  optional(:errors) => [{atom(), String.t()}],
  optional(:gettext_fn) => {module(), atom()}
}) :: Phoenix.LiveView.Rendered.t() | no_return()
```

Generate a list of errors for a field (if there are any).

## [](AshAuthentication.Phoenix.Components.Password.Input.html#error/1-props)Props

- `socket` - Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
- `form` - An [`AshPhoenix.Form`](../ash_phoenix/2.1.14/AshPhoenix.Form.html). Required.
- `field` - The field for which to retrieve the errors. Required.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

[](AshAuthentication.Phoenix.Components.Password.Input.html#identity_field/1)

# identity\_field(assigns)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/input.ex#L64)

```
@spec identity_field(%{
  :socket => Phoenix.LiveView.Socket.t(),
  :strategy => AshAuthentication.Strategy.t(),
  :form => AshPhoenix.Form.t(),
  optional(:input_type) => :text | :email,
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}) :: Phoenix.LiveView.Rendered.t() | no_return()
```

Generate a form field for the configured identity field.

## [](AshAuthentication.Phoenix.Components.Password.Input.html#identity_field/1-props)Props

- `socket` - Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
- `strategy` - The configuration map as per [`AshAuthentication.authenticated_resources/1`](../ash_authentication/4.4.3/AshAuthentication.html#authenticated_resources/1). Required.
- `form` - An [`AshPhoenix.Form`](../ash_phoenix/2.1.14/AshPhoenix.Form.html). Required.
- `input_type` - Either `:text` or `:email`. If not set it will try and guess based on the name of the identity field.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

[](AshAuthentication.Phoenix.Components.Password.Input.html#password_confirmation_field/1)

# password\_confirmation\_field(assigns)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/input.ex#L177)

```
@spec password_confirmation_field(%{
  :socket => Phoenix.LiveView.Socket.t(),
  :strategy => AshAuthentication.Strategy.t(),
  :form => AshPhoenix.Form.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}) :: Phoenix.LiveView.Rendered.t() | no_return()
```

Generate a form field for the configured password confirmation entry field.

## [](AshAuthentication.Phoenix.Components.Password.Input.html#password_confirmation_field/1-props)Props

- `socket` - Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
- `strategy` - The configuration map as per [`AshAuthentication.authenticated_resources/1`](../ash_authentication/4.4.3/AshAuthentication.html#authenticated_resources/1). Required.
- `form` - An [`AshPhoenix.Form`](../ash_phoenix/2.1.14/AshPhoenix.Form.html). Required.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

[](AshAuthentication.Phoenix.Components.Password.Input.html#password_field/1)

# password\_field(assigns)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/input.ex#L126)

```
@spec password_field(%{
  :socket => Phoenix.LiveView.Socket.t(),
  :strategy => AshAuthentication.Strategy.t(),
  :form => AshPhoenix.Form.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}) :: Phoenix.LiveView.Rendered.t() | no_return()
```

Generate a form field for the configured password entry field.

## [](AshAuthentication.Phoenix.Components.Password.Input.html#password_field/1-props)Props

- `socket` - Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
- `strategy` - The configuration map as per [`AshAuthentication.authenticated_resources/1`](../ash_authentication/4.4.3/AshAuthentication.html#authenticated_resources/1). Required.
- `form` - An [`AshPhoenix.Form`](../ash_phoenix/2.1.14/AshPhoenix.Form.html). Required.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

[](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1)

# submit(assigns)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/input.ex#L236)

```
@spec submit(%{
  :socket => Phoenix.LiveView.Socket.t(),
  :strategy => AshAuthentication.Strategy.t(),
  :form => AshPhoenix.Form.t(),
  :action => :sign_in | :register | :request_reset | :reset,
  optional(:label) => String.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}) :: Phoenix.LiveView.Rendered.t() | no_return()
```

Generate an form submit button.

## [](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1-props)Props

- `socket` - Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
- `strategy` - The configuration map as per [`AshAuthentication.authenticated_resources/1`](../ash_authentication/4.4.3/AshAuthentication.html#authenticated_resources/1). Required.
- `form` - An [`AshPhoenix.Form`](../ash_phoenix/2.1.14/AshPhoenix.Form.html). Required.
- `action` - Either `:sign_in`, `:register`, `:request_reset` or `:reset`. Required.
- `label` - The text to show in the submit label. Generated from the configured action name (via [`Phoenix.Naming.humanize/1`](../phoenix/1.7.18/Phoenix.Naming.html#humanize/1)) if not supplied.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/register_form.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Password.RegisterForm (ash\_authentication\_phoenix v2.4.5)

Generates a default registration form.

## [](AshAuthentication.Phoenix.Components.Password.RegisterForm.html#module-component-hierarchy)Component hierarchy

This is a child of [`AshAuthentication.Phoenix.Components.Password`](AshAuthentication.Phoenix.Components.Password.html).

Children:

- [`AshAuthentication.Phoenix.Components.Password.Input.identity_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#identity_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.password_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#password_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.password_confirmation_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#password_confirmation_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1)

## [](AshAuthentication.Phoenix.Components.Password.RegisterForm.html#module-props)Props

- `strategy` - The strategy configuration as per [`AshAuthentication.Info.strategy/2`](../ash_authentication/4.4.3/AshAuthentication.Info.html#strategy/2). Required.
- `socket` - Needed to infer the otp-app from the Phoenix endpoint.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.Password.RegisterForm.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:label_class` - CSS class for the `h2` element.
- `:form_class` - CSS class for the `form` element.
- `:disable_button_text` - Text for the submit button when the request is happening.
- `:slot_class` - CSS class for the `div` surrounding the slot.
- `:button_text` - Text for the submit button.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Password.RegisterForm.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.Password.RegisterForm.html#types)

[props()](AshAuthentication.Phoenix.Components.Password.RegisterForm.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.Password.RegisterForm.html#types)Types

[](AshAuthentication.Phoenix.Components.Password.RegisterForm.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/register_form.ex#L45)

```
@type props() :: %{
  :strategy => AshAuthentication.Strategy.t(),
  optional(:live_action) => :sign_in | :register,
  optional(:current_tenant) => String.t(),
  optional(:context) => map(),
  optional(:auth_routes_prefix) => String.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/reset_form.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Password.ResetForm (ash\_authentication\_phoenix v2.4.5)

Generates a default password reset form.

## [](AshAuthentication.Phoenix.Components.Password.ResetForm.html#module-component-hierarchy)Component hierarchy

This is a child of [`AshAuthentication.Phoenix.Components.Password`](AshAuthentication.Phoenix.Components.Password.html).

Children:

- [`AshAuthentication.Phoenix.Components.Password.Input.identity_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#identity_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1)

## [](AshAuthentication.Phoenix.Components.Password.ResetForm.html#module-props)Props

- `strategy` - The configuration map as per [`AshAuthentication.Info.strategy/2`](../ash_authentication/4.4.3/AshAuthentication.Info.html#strategy/2). Required.
- `label` - The text to show in the submit label. Generated from the configured action name (via [`Phoenix.Naming.humanize/1`](../phoenix/1.7.18/Phoenix.Naming.html#humanize/1)) if not supplied. Set to `false` to disable.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.Password.ResetForm.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:label_class` - CSS class for the `h2` element.
- `:form_class` - CSS class for the `form` element.
- `:disable_button_text` - Text for the submit button when the request is happening.
- `:slot_class` - CSS class for the `div` surrounding the slot.
- `:button_text` - Tex for the submit button.
- `:reset_flash_text` - Text for the flash message when a request is received. Set to `nil` to disable.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Password.ResetForm.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.Password.ResetForm.html#types)

[props()](AshAuthentication.Phoenix.Components.Password.ResetForm.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.Password.ResetForm.html#types)Types

[](AshAuthentication.Phoenix.Components.Password.ResetForm.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/reset_form.ex#L46)

```
@type props() :: %{
  :strategy => AshAuthentication.Strategy.t(),
  optional(:label) => String.t() | false,
  optional(:current_tenant) => String.t(),
  optional(:context) => map(),
  optional(:auth_routes_prefix) => String.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/sign_in_form.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Password.SignInForm (ash\_authentication\_phoenix v2.4.5)

Generates a default sign in form.

## [](AshAuthentication.Phoenix.Components.Password.SignInForm.html#module-component-hierarchy)Component hierarchy

This is a child of [`AshAuthentication.Phoenix.Components.Password`](AshAuthentication.Phoenix.Components.Password.html).

Children:

- [`AshAuthentication.Phoenix.Components.Password.Input.identity_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#identity_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.password_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#password_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1)

## [](AshAuthentication.Phoenix.Components.Password.SignInForm.html#module-props)Props

- `strategy` - The configuration map as per [`AshAuthentication.Info.strategy/2`](../ash_authentication/4.4.3/AshAuthentication.Info.html#strategy/2). Required.
- `label` - The text to show in the submit label. Generated from the configured action name (via [`Phoenix.Naming.humanize/1`](../phoenix/1.7.18/Phoenix.Naming.html#humanize/1)) if not supplied. Set to `false` to disable.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.Password.SignInForm.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:label_class` - CSS class for the `h2` element.
- `:form_class` - CSS class for the `form` element.
- `:disable_button_text` - Text for the submit button when the request is happening.
- `:slot_class` - CSS class for the `div` surrounding the slot.
- `:button_text` - Text for the submit button.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Password.SignInForm.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.Password.SignInForm.html#types)

[props()](AshAuthentication.Phoenix.Components.Password.SignInForm.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.Password.SignInForm.html#types)Types

[](AshAuthentication.Phoenix.Components.Password.SignInForm.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/password/sign_in_form.ex#L47)

```
@type props() :: %{
  :strategy => AshAuthentication.Strategy.t(),
  optional(:label) => String.t() | false,
  optional(:current_tenant) => String.t(),
  optional(:context) => map(),
  optional(:auth_routes_prefix) => String.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/reset/form.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Reset.Form (ash\_authentication\_phoenix v2.4.5)

Generates a default password reset form.

## [](AshAuthentication.Phoenix.Components.Reset.Form.html#module-component-hierarchy)Component hierarchy

This is a child of [`AshAuthentication.Phoenix.Components.Reset`](AshAuthentication.Phoenix.Components.Reset.html).

Children:

- [`AshAuthentication.Phoenix.Components.Password.Input.identity_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#identity_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.password_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#password_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.error/1`](AshAuthentication.Phoenix.Components.Password.Input.html#error/1)

## [](AshAuthentication.Phoenix.Components.Reset.Form.html#module-props)Props

- `token` - The reset token.
- `socket` - Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
- `strategy` - The configuration map as per [`AshAuthentication.Info.strategy/2`](../ash_authentication/4.4.3/AshAuthentication.Info.html#strategy/2). Required.
- `label` - The text to show in the submit label. Generated from the configured action name (via [`Phoenix.Naming.humanize/1`](../phoenix/1.7.18/Phoenix.Naming.html#humanize/1)) if not supplied. Set to `false` to disable.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

## [](AshAuthentication.Phoenix.Components.Reset.Form.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:label_class` - CSS class for the `h2` element.
- `:form_class` - CSS class for the `form` element.
- `:spacer_class` - CSS classes for space between the password input and submit elements.
- `:disable_button_text` - Text for the submit button when the request is happening.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Reset.Form.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.Reset.Form.html#types)

[props()](AshAuthentication.Phoenix.Components.Reset.Form.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.Reset.Form.html#types)Types

[](AshAuthentication.Phoenix.Components.Reset.Form.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/reset/form.ex#L47)

```
@type props() :: %{
  :socket => Phoenix.LiveView.Socket.t(),
  :strategy => AshAuthentication.Strategy.t(),
  :token => String.t(),
  optional(:label) => String.t() | false,
  optional(:auth_routes_prefix) => String.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/reset.ex#L1 "View Source") AshAuthentication.Phoenix.Components.Reset (ash\_authentication\_phoenix v2.4.5)

Renders a password-reset form.

## [](AshAuthentication.Phoenix.Components.Reset.html#module-component-hierarchy)Component hierarchy

Children:

- [`AshAuthentication.Phoenix.Components.Password.Input.password_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#password_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.password_confirmation_field/1`](AshAuthentication.Phoenix.Components.Password.Input.html#password_confirmation_field/1)
- [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](AshAuthentication.Phoenix.Components.Password.Input.html#submit/1)

## [](AshAuthentication.Phoenix.Components.Reset.html#module-props)Props

- `token` - The reset token.
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.
- `otp_app` - The otp app to look for authenticated resources in

## [](AshAuthentication.Phoenix.Components.Reset.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:strategy_class` - CSS class for a `div` surrounding each strategy component.
- `:show_banner` - Whether or not to show the banner.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

# [](AshAuthentication.Phoenix.Components.Reset.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.Reset.html#types)

[props()](AshAuthentication.Phoenix.Components.Reset.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.Reset.html#types)Types

[](AshAuthentication.Phoenix.Components.Reset.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/reset.ex#L33)

```
@type props() :: %{
  :token => String.t(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/sign_in.ex#L1 "View Source") AshAuthentication.Phoenix.Components.SignIn (ash\_authentication\_phoenix v2.4.5)

Renders sign in mark-up for an authenticated resource.

This means that it will render sign-in UI for all of the authentication strategies for a resource.

For each strategy configured on the resource a component name is inferred (e.g. [`AshAuthentication.Strategy.Password`](../ash_authentication/4.4.3/AshAuthentication.Strategy.Password.html) becomes [`AshAuthentication.Phoenix.Components.Password`](AshAuthentication.Phoenix.Components.Password.html)) and is rendered into the output.

## [](AshAuthentication.Phoenix.Components.SignIn.html#module-component-hierarchy)Component hierarchy

This is the top-most authentication component.

Children:

- [`AshAuthentication.Phoenix.Components.Password`](AshAuthentication.Phoenix.Components.Password.html).
- [`AshAuthentication.Phoenix.Components.OAuth2`](AshAuthentication.Phoenix.Components.OAuth2.html).

## [](AshAuthentication.Phoenix.Components.SignIn.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:strategy_class` - CSS class for a `div` surrounding each strategy component.
- `:show_banner` - Whether or not to show the banner.
- `:authentication_error_container_class` - CSS class for the container for the text of the authentication error.
- `:authentication_error_text_class` - CSS class for the authentication error text.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

## [](AshAuthentication.Phoenix.Components.SignIn.html#module-props)Props

- `otp_app` - The otp app to look for authenticated resources in
- `live_action` - The live\_action being routed to
- `path` - The path to use as the base for links
- `reset_path` - The path to use for reset links
- `register_path` - The path to use for register links
- `overrides` - A list of override modules.
- `gettext_fn` - Optional text translation function.

# [](AshAuthentication.Phoenix.Components.SignIn.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Components.SignIn.html#types)

[props()](AshAuthentication.Phoenix.Components.SignIn.html#t:props/0)

# [](AshAuthentication.Phoenix.Components.SignIn.html#types)Types

[](AshAuthentication.Phoenix.Components.SignIn.html#t:props/0)

# props()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/components/sign_in.ex#L49)

```
@type props() :: %{
  optional(:path) => String.t(),
  optional(:reset_path) => String.t(),
  optional(:register_path) => String.t(),
  optional(:current_tenant) => String.t(),
  optional(:context) => map(),
  optional(:overrides) => [module()],
  optional(:gettext_fn) => {module(), atom()}
}
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/controller.ex#L1 "View Source") AshAuthentication.Phoenix.Controller behaviour (ash\_authentication\_phoenix v2.4.5)

The authentication controller generator.

Since authentication often requires explicit HTTP requests to do things like set cookies or return Authorization headers, use this module to create an `AuthController` in your Phoenix application.

## [](AshAuthentication.Phoenix.Controller.html#module-example)Example

Handling the registration or authentication of a normal web-based user.

```
defmodule MyAppWeb.AuthController do
  use MyAppWeb, :controller
  use AshAuthentication.Phoenix.Controller

  def success(conn, _activity, user, _token) do
    conn
    |> store_in_session(user)
    |> assign(:current_user, user)
    |> redirect(to: Routes.page_path(conn, :index))
  end

  def failure(conn, _activity, _reason) do
    conn
    |> put_status(401)
    |> render("failure.html")
  end

  def sign_out(conn, _params) do
    conn
    |> clear_session()
    |> render("sign_out.html")
  end
end
```

Handling registration or authentication of an API user.

```
defmodule MyAppWeb.ApiAuthController do
  use MyAppWeb, :controller
  use AshAuthentication.Phoenix.Controller
  alias AshAuthentication.TokenRevocation

  def success(conn, _activity, _user, token) do
    conn
    |> put_status(200)
    |> json(%{
      authentication: %{
        status: :success,
        bearer: token}
    })
  end

  def failure(conn, _activity, _reason) do
    conn
    |> put_status(401)
    |> json(%{
      authentication: %{
        status: :failed
      }
    })
  end

  def sign_out(conn, _params) do
    conn
    |> revoke_bearer_tokens()
    |> json(%{
      status: :ok
    })
  end
end
```

# [](AshAuthentication.Phoenix.Controller.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Controller.html#types)

[activity()](AshAuthentication.Phoenix.Controller.html#t:activity/0)

[t()](AshAuthentication.Phoenix.Controller.html#t:t/0)

[token()](AshAuthentication.Phoenix.Controller.html#t:token/0)

[user()](AshAuthentication.Phoenix.Controller.html#t:user/0)

## [Callbacks](AshAuthentication.Phoenix.Controller.html#callbacks)

[failure(t, activity, reason)](AshAuthentication.Phoenix.Controller.html#c:failure/3)

Called when authentication fails.

[sign\_out(t, params)](AshAuthentication.Phoenix.Controller.html#c:sign_out/2)

Called when a request to sign out is received.

[success(t, activity, user, token)](AshAuthentication.Phoenix.Controller.html#c:success/4)

Called when authentication (or registration, depending on the provider) has been successful.

# [](AshAuthentication.Phoenix.Controller.html#types)Types

[](AshAuthentication.Phoenix.Controller.html#t:activity/0)

# activity()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/controller.ex#L84)

```
@type activity() :: {strategy_name :: atom(), phase :: atom()}
```

[](AshAuthentication.Phoenix.Controller.html#t:t/0)

# t()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/controller.ex#L82)

```
@type t() :: module()
```

[](AshAuthentication.Phoenix.Controller.html#t:token/0)

# token()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/controller.ex#L86)

```
@type token() :: String.t() | nil
```

[](AshAuthentication.Phoenix.Controller.html#t:user/0)

# user()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/controller.ex#L85)

```
@type user() :: Ash.Resource.record() | nil
```

# [](AshAuthentication.Phoenix.Controller.html#callbacks)Callbacks

[](AshAuthentication.Phoenix.Controller.html#c:failure/3)

# failure(t, activity, reason)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/controller.ex#L96)

```
@callback failure(Plug.Conn.t(), activity(), reason :: any()) :: Plug.Conn.t()
```

Called when authentication fails.

[](AshAuthentication.Phoenix.Controller.html#c:sign_out/2)

# sign\_out(t, params)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/controller.ex#L101)

```
@callback sign_out(Plug.Conn.t(), params :: map()) :: Plug.Conn.t()
```

Called when a request to sign out is received.

[](AshAuthentication.Phoenix.Controller.html#c:success/4)

# success(t, activity, user, token)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/controller.ex#L91)

```
@callback success(Plug.Conn.t(), activity(), user(), token()) :: Plug.Conn.t()
```

Called when authentication (or registration, depending on the provider) has been successful.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix.ex#L1 "View Source") AshAuthentication.Phoenix (ash\_authentication\_phoenix v2.4.5)

Welcome to `AshAuthentication.Pheonix`.

The `ash_authentication_phoenix` package extends [`ash_authentication`](https://github.com/team-alembic/ash_authentication) by adding router helpers, plugs and behaviours that makes adding authentication to an existing Ash-based Phoenix application dead easy.

## [](AshAuthentication.Phoenix.html#module-where-to-start)Where to start.

Presuming that you already have [Phoenix](https://phoenixframework.org/), [Ash](https://ash-hq.org/) and [AshAuthentication](https://github.com/team-alembic/ash_authentication) installed and configured, start by adding plugs and routes to your router using [`AshAuthentication.Phoenix.Router`](AshAuthentication.Phoenix.Router.html) and customising your sign-in page as needed.

### [](AshAuthentication.Phoenix.html#module-customisation)Customisation

There are several methods of customisation available depending on the level of control you would like:

1. Use the generic sign-in liveview - [`AshAuthentication.Phoenix.SignInLive`](AshAuthentication.Phoenix.SignInLive.html).
2. Apply overrides using [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) to set your own CSS classes for all components.
3. Build your own sign-in pages using the pre-defined components.
4. Build your own sign-in pages using the generated `auth` routes.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/live_session.ex#L1 "View Source") AshAuthentication.Phoenix.LiveSession (ash\_authentication\_phoenix v2.4.5)

Ensures that any loaded users which are present in a conn's assigns are also present in a live view socket's assigns.

Typical usage is via the [`ash_authentication_live_session/2`](AshAuthentication.Phoenix.LiveSession.html#ash_authentication_live_session/2) macro, but can also manually called like so:

```
scope "/", ExampleWeb do
  pipe_through(:browser)

  live_session :authenticated, on_mount: LiveSession, session: {LiveSession, :generate_session, []} do
    live "/", ExampleLive
  end
end
```

# [](AshAuthentication.Phoenix.LiveSession.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.LiveSession.html#functions)

[ash\_authentication\_live\_session(session\_name \\\\ :ash\_authentication, opts \\\\ \[\], list)](AshAuthentication.Phoenix.LiveSession.html#ash_authentication_live_session/3)

Generate a live session wherein all subject assigns are copied from the conn into the socket.

[generate\_session(conn, otp\_app \\\\ nil, additional\_hooks \\\\ \[\])](AshAuthentication.Phoenix.LiveSession.html#generate_session/3)

Supplements the session with any `current_X` assigns which are authenticated resource records from the conn.

[on\_mount(arg1, params, session, socket)](AshAuthentication.Phoenix.LiveSession.html#on_mount/4)

Inspects the incoming session for any subject\_name -&gt; subject values and loads them into the socket's assigns.

# [](AshAuthentication.Phoenix.LiveSession.html#functions)Functions

[](AshAuthentication.Phoenix.LiveSession.html#ash_authentication_live_session/3)

# ash\_authentication\_live\_session(session\_name \\\\ :ash\_authentication, opts \\\\ \[], list)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/live_session.ex#L37)(macro)

Generate a live session wherein all subject assigns are copied from the conn into the socket.

Options:

- `:otp_app` - Set the otp app in which to search for authenticated resources.

All other options are passed through to `live_session`, but with session and on\_mount hooks added to set assigns for authenticated resources. Unlike `live_session`, this supports multiple MFAs provided for the `session` option. The produced sessions will be merged.

[](AshAuthentication.Phoenix.LiveSession.html#generate_session/3)

# generate\_session(conn, otp\_app \\\\ nil, additional\_hooks \\\\ \[])

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/live_session.ex#L145)

```
@spec generate_session(Plug.Conn.t(), atom() | [atom()], additional_hooks :: [mfa()]) ::
  %{
    required(String.t()) => String.t()
  }
```

Supplements the session with any `current_X` assigns which are authenticated resource records from the conn.

[](AshAuthentication.Phoenix.LiveSession.html#on_mount/4)

# on\_mount(arg1, params, session, socket)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/live_session.ex#L97)

```
@spec on_mount(
  atom() | {:set_otp_app, atom()},
  %{required(String.t()) => any()},
  %{required(String.t()) => any()},
  Phoenix.LiveView.Socket.t()
) :: {:cont | :halt, Phoenix.LiveView.Socket.t()}
```

Inspects the incoming session for any subject\_name -&gt; subject values and loads them into the socket's assigns.

For example a session containing `{"user", "user?id=aa6c179c-ee75-4d49-8796-528c2981b396"}` becomes an assign called `current_user` with the loaded user as the value.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides/default.ex#L1 "View Source") AshAuthentication.Phoenix.Overrides.Default (ash\_authentication\_phoenix v2.4.5)

This is the default overrides for our component UI.

The CSS styles are based on [TailwindCSS](https://tailwindcss.com/).

# [](AshAuthentication.Phoenix.Overrides.Default.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.Overrides.Default.html#functions)

[overrides()](AshAuthentication.Phoenix.Overrides.Default.html#overrides/0)

# [](AshAuthentication.Phoenix.Overrides.Default.html#functions)Functions

[](AshAuthentication.Phoenix.Overrides.Default.html#overrides/0)

# overrides()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides/default.ex#L1)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides.ex#L1 "View Source") AshAuthentication.Phoenix.Overrides (ash\_authentication\_phoenix v2.4.5)

Behaviour for overriding component styles and attributes in your application.

The default implementation is [`AshAuthentication.Phoenix.Overrides.Default`](AshAuthentication.Phoenix.Overrides.Default.html) which uses [TailwindCSS](https://tailwindcss.com/) to generate a fairly generic looking user interface.

You can override this by adding your own override modules to the [`AshAuthentication.Phoenix.Router.sign_in_route/1`](AshAuthentication.Phoenix.Router.html#sign_in_route/1) macro in your router:

```
sign_in_route overrides: [MyAppWeb.AuthOverrides, AshAuthentication.Phoenix.Overrides.Default]
```

and defining `lib/my_app_web/auth_overrides.ex` within which you can set any overrides.

The `use` macro defines overridable versions of all callbacks which return `nil`, so you only need to define the functions that you care about.

Each of the override modules specified in the config will be called in the order that they're specified, so you can still use the defaults if you just override some properties.

```
defmodule MyAppWeb.AuthOverrides do
  use AshAuthentication.Phoenix.Overrides
  alias AshAuthentication.Phoenix.Components

  override Components.Banner do
    set :image_url, "/images/sign_in_logo.png"
  end
end
```

# [](AshAuthentication.Phoenix.Overrides.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.Overrides.html#functions)

[override(component, list)](AshAuthentication.Phoenix.Overrides.html#override/2)

Define overrides for a specific component.

[set(selector, value)](AshAuthentication.Phoenix.Overrides.html#set/2)

Override a setting within a component.

# [](AshAuthentication.Phoenix.Overrides.html#functions)Functions

[](AshAuthentication.Phoenix.Overrides.html#override/2)

# override(component, list)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides.ex#L54)(macro)

```
@spec override(component :: module(), [{:do, Macro.t()}]) :: Macro.t()
```

Define overrides for a specific component.

[](AshAuthentication.Phoenix.Overrides.html#set/2)

# set(selector, value)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides.ex#L65)(macro)

```
@spec set(atom(), any()) :: Macro.t()
```

Override a setting within a component.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides/info.ex#L1 "View Source") AshAuthentication.Phoenix.Overrides.Info (ash\_authentication\_phoenix v2.4.5)

Override introspection.

# [](AshAuthentication.Phoenix.Overrides.Info.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.Overrides.Info.html#functions)

[all\_overridable\_modules()](AshAuthentication.Phoenix.Overrides.Info.html#all_overridable_modules/0)

Returns a map of all known overridable modules and their overrides.

# [](AshAuthentication.Phoenix.Overrides.Info.html#functions)Functions

[](AshAuthentication.Phoenix.Overrides.Info.html#all_overridable_modules/0)

# all\_overridable\_modules()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides/info.ex#L10)

```
@spec all_overridable_modules() :: %{
  required(module()) => %{required(atom()) => binary()}
}
```

Returns a map of all known overridable modules and their overrides.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides/overridable.ex#L1 "View Source") AshAuthentication.Phoenix.Overrides.Overridable behaviour (ash\_authentication\_phoenix v2.4.5)

Auto generates documentation and helpers for components.

# [](AshAuthentication.Phoenix.Overrides.Overridable.html#summary)Summary

## [Callbacks](AshAuthentication.Phoenix.Overrides.Overridable.html#callbacks)

[\_\_overrides\_\_()](AshAuthentication.Phoenix.Overrides.Overridable.html#c:__overrides__/0)

## [Functions](AshAuthentication.Phoenix.Overrides.Overridable.html#functions)

[override\_for(overrides, selector, default \\\\ nil)](AshAuthentication.Phoenix.Overrides.Overridable.html#override_for/3)

Retrieve configuration for a potentially overriden value.

# [](AshAuthentication.Phoenix.Overrides.Overridable.html#callbacks)Callbacks

[](AshAuthentication.Phoenix.Overrides.Overridable.html#c:__overrides__/0)

# \_\_overrides\_\_()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides/overridable.ex#L8)

```
@callback __overrides__() :: %{required(atom()) => binary()}
```

# [](AshAuthentication.Phoenix.Overrides.Overridable.html#functions)Functions

[](AshAuthentication.Phoenix.Overrides.Overridable.html#override_for/3)

# override\_for(overrides, selector, default \\\\ nil)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/overrides/overridable.ex#L65)(macro)

```
@spec override_for([module()], atom(), any()) :: any()
```

Retrieve configuration for a potentially overriden value.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/plug.ex#L1 "View Source") AshAuthentication.Phoenix.Plug (ash\_authentication\_phoenix v2.4.5)

Helper plugs mixed in to your router.

When you `use AshAuthentication.Phoenix.Router` this module is included, so that you can use these plugs in your pipelines.

# [](AshAuthentication.Phoenix.Plug.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.Plug.html#functions)

[load\_from\_bearer(conn, opts)](AshAuthentication.Phoenix.Plug.html#load_from_bearer/2)

Attempt to retrieve actors from the `Authorization` header(s).

[load\_from\_session(conn, opts)](AshAuthentication.Phoenix.Plug.html#load_from_session/2)

Attempt to retrieve all actors from the connections' session.

[revoke\_bearer\_tokens(conn, opts)](AshAuthentication.Phoenix.Plug.html#revoke_bearer_tokens/2)

Revoke all token(s) in the `Authorization` header(s).

[store\_in\_session(conn, actor)](AshAuthentication.Phoenix.Plug.html#store_in_session/2)

Store the actor in the connections' session.

# [](AshAuthentication.Phoenix.Plug.html#functions)Functions

[](AshAuthentication.Phoenix.Plug.html#load_from_bearer/2)

# load\_from\_bearer(conn, opts)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/plug.ex#L33)

```
@spec load_from_bearer(
  Plug.Conn.t(),
  keyword()
) :: Plug.Conn.t()
```

Attempt to retrieve actors from the `Authorization` header(s).

A wrapper around [`AshAuthentication.Plug.Helpers.retrieve_from_bearer/2`](../ash_authentication/4.4.3/AshAuthentication.Plug.Helpers.html#retrieve_from_bearer/2) with the `otp_app` as extracted from the endpoint.

[](AshAuthentication.Phoenix.Plug.html#load_from_session/2)

# load\_from\_session(conn, opts)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/plug.ex#L19)

```
@spec load_from_session(
  Plug.Conn.t(),
  keyword()
) :: Plug.Conn.t()
```

Attempt to retrieve all actors from the connections' session.

A wrapper around [`AshAuthentication.Plug.Helpers.retrieve_from_session/2`](../ash_authentication/4.4.3/AshAuthentication.Plug.Helpers.html#retrieve_from_session/2) with the `otp_app` as extracted from the endpoint.

[](AshAuthentication.Phoenix.Plug.html#revoke_bearer_tokens/2)

# revoke\_bearer\_tokens(conn, opts)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/plug.ex#L47)

```
@spec revoke_bearer_tokens(Plug.Conn.t(), any()) :: Plug.Conn.t()
```

Revoke all token(s) in the `Authorization` header(s).

A wrapper around [`AshAuthentication.Plug.Helpers.revoke_bearer_tokens/2`](../ash_authentication/4.4.3/AshAuthentication.Plug.Helpers.html#revoke_bearer_tokens/2) with the `otp_app` as extracted from the endpoint.

[](AshAuthentication.Phoenix.Plug.html#store_in_session/2)

# store\_in\_session(conn, actor)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/plug.ex#L56)

```
@spec store_in_session(Plug.Conn.t(), Ash.Resource.record()) :: Plug.Conn.t()
```

Store the actor in the connections' session.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/reset_live.ex#L1 "View Source") AshAuthentication.Phoenix.ResetLive (ash\_authentication\_phoenix v2.4.5)

A generic, white-label password reset page.

This live-view can be rendered into your app using the [`AshAuthentication.Phoenix.Router.reset_route/1`](AshAuthentication.Phoenix.Router.html#reset_route/1) macro in your router (or by using [`Phoenix.LiveView.Controller.live_render/3`](../phoenix_live_view/1.0.2/Phoenix.LiveView.Controller.html#live_render/3) directly in your markup).

This live-view looks for the `token` URL parameter, and if found passes it to [`AshAuthentication.Phoenix.Components.Reset`](AshAuthentication.Phoenix.Components.Reset.html).

## [](AshAuthentication.Phoenix.ResetLive.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:reset_id` - Element ID for the `Reset` LiveComponent.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L1 "View Source") AshAuthentication.Phoenix.Router (ash\_authentication\_phoenix v2.4.5)

Phoenix route generation for AshAuthentication.

Using this module imports the macros in this module and the plug functions from [`AshAuthentication.Phoenix.Plug`](AshAuthentication.Phoenix.Plug.html).

## [](AshAuthentication.Phoenix.Router.html#module-usage)Usage

Adding authentication to your live-view router is very simple:

```
defmodule MyAppWeb.Router do
  use MyAppWeb, :router
  use AshAuthentication.Phoenix.Router

  pipeline :browser do
    # ...
    plug(:load_from_session)
  end

  pipeline :api do
    # ...
    plug(:load_from_bearer)
  end

  scope "/", MyAppWeb do
    pipe_through :browser
    sign_in_route auth_routes_prefix: "/auth"
    sign_out_route AuthController
    auth_routes_for MyApp.Accounts.User, to: AuthController
    reset_route auth_routes_prefix: "/auth"
  end
```

# [](AshAuthentication.Phoenix.Router.html#summary)Summary

## [Types](AshAuthentication.Phoenix.Router.html#types)

[auth\_route\_options()](AshAuthentication.Phoenix.Router.html#t:auth_route_options/0)

Options that can be passed to `auth_routes_for`.

[path\_option()](AshAuthentication.Phoenix.Router.html#t:path_option/0)

A sub-path if required. Defaults to `/auth`.

[scope\_opts\_option()](AshAuthentication.Phoenix.Router.html#t:scope_opts_option/0)

Any options which should be passed to the generated scope.

[to\_option()](AshAuthentication.Phoenix.Router.html#t:to_option/0)

The controller which will handle success and failure.

## [Functions](AshAuthentication.Phoenix.Router.html#functions)

[auth\_routes(auth\_controller, resource\_or\_resources, opts \\\\ \[\])](AshAuthentication.Phoenix.Router.html#auth_routes/3)

Generates the routes needed for the various strategies for a given AshAuthentication resource.

[auth\_routes\_for(resource, opts)](AshAuthentication.Phoenix.Router.html#auth_routes_for/2)

Generates the routes needed for the various strategies for a given AshAuthentication resource.

[reset\_route(opts \\\\ \[\])](AshAuthentication.Phoenix.Router.html#reset_route/1)

Generates a generic, white-label password reset page using LiveView and the components in `AshAuthentication.Phoenix.Components`. This is the page that allows a user to actually change his password, after requesting a reset token via the sign-in (`/reset`) route.

[sign\_in\_route(opts \\\\ \[\])](AshAuthentication.Phoenix.Router.html#sign_in_route/1)

Generates a generic, white-label sign-in page using LiveView and the components in `AshAuthentication.Phoenix.Components`.

[sign\_out\_route(auth\_controller, path \\\\ "/sign-out", opts \\\\ \[\])](AshAuthentication.Phoenix.Router.html#sign_out_route/3)

Generates a sign-out route which points to the `sign_out` action in your auth controller.

# [](AshAuthentication.Phoenix.Router.html#types)Types

[](AshAuthentication.Phoenix.Router.html#t:auth_route_options/0)

# auth\_route\_options()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L40)

```
@type auth_route_options() :: [path_option() | to_option() | scope_opts_option()]
```

Options that can be passed to `auth_routes_for`.

[](AshAuthentication.Phoenix.Router.html#t:path_option/0)

# path\_option()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L43)

```
@type path_option() :: {:path, String.t()}
```

A sub-path if required. Defaults to `/auth`.

[](AshAuthentication.Phoenix.Router.html#t:scope_opts_option/0)

# scope\_opts\_option()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L49)

```
@type scope_opts_option() :: {:scope_opts, keyword()}
```

Any options which should be passed to the generated scope.

[](AshAuthentication.Phoenix.Router.html#t:to_option/0)

# to\_option()

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L46)

```
@type to_option() :: {:to, AshAuthentication.Phoenix.Controller.t()}
```

The controller which will handle success and failure.

# [](AshAuthentication.Phoenix.Router.html#functions)Functions

[](AshAuthentication.Phoenix.Router.html#auth_routes/3)

# auth\_routes(auth\_controller, resource\_or\_resources, opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L155)(macro)

```
@spec auth_routes(
  auth_controller :: module(),
  Ash.Resource.t() | [Ash.Resource.t()],
  auth_route_options()
) :: Macro.t()
```

Generates the routes needed for the various strategies for a given AshAuthentication resource.

This matches *all* routes at the provided `path`, which defaults to `/auth`. This means that if you have any other routes that begin with `/auth`, you will need to make sure this appears after them.

## [](AshAuthentication.Phoenix.Router.html#auth_routes/3-upgrading-from-auth_routes_for-2)Upgrading from [`auth_routes_for/2`](AshAuthentication.Phoenix.Router.html#auth_routes_for/2)

If you are using route helpers anywhere in your application, typically looks like `Routes.auth_path/3` or `Helpers.auth_path/3` you will need to update them to use verified routes. To see what routes are available to you, use [`mix ash_authentication.phoenix.routes`](Mix.Tasks.AshAuthentication.Phoenix.Routes.html).

If you are using any of the components provided by `AshAuthenticationPhoenix`, you will need to supply them with the `auth_routes_prefix` assign, set to the `path` you provide here (set to `/auth` by default).

You also will need to set `auth_routes_prefix` on the `reset_route`, i.e `reset_route(auth_routes_prefix: "/auth")`

## [](AshAuthentication.Phoenix.Router.html#auth_routes/3-options)Options

- `path` - the path to mount auth routes at. Defaults to `/auth`. If changed, you will also want to change the `auth_routes_prefix` option in `sign_in_route` to match. routes.
- `not_found_plug` - a plug to call if no route is found. By default, it renders a simple JSON response with a 404 status code.
- `as` - the alias to use for the generated scope. Defaults to `:auth`.

[](AshAuthentication.Phoenix.Router.html#auth_routes_for/2)

# auth\_routes\_for(resource, opts)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L88)(macro)

```
@spec auth_routes_for(Ash.Resource.t(), auth_route_options()) :: Macro.t()
```

Generates the routes needed for the various strategies for a given AshAuthentication resource.

This is required if you wish to use authentication.

## [](AshAuthentication.Phoenix.Router.html#auth_routes_for/2-options)Options

- `to` - a module which implements the [`AshAuthentication.Phoenix.Controller`](AshAuthentication.Phoenix.Controller.html) behaviour. This is required.
- `path` - a string (starting with "/") wherein to mount the generated routes.
- `scope_opts` - any options to pass to the generated scope.

## [](AshAuthentication.Phoenix.Router.html#auth_routes_for/2-example)Example

```
scope "/", DevWeb do
  auth_routes_for(MyApp.Accounts.User,
    to: AuthController,
    path: "/authentication",
    scope_opts: [host: "auth.example.com"]
  )
end
```

[](AshAuthentication.Phoenix.Router.html#reset_route/1)

# reset\_route(opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L381)(macro)

```
@spec reset_route(
  opts :: [
    {:path, String.t()}
    | {:live_view, module()}
    | {:as, atom()}
    | {:overrides, [module()]}
    | {:gettext_fn, {module(), atom()}}
    | {:gettext_backend, {module(), String.t()}}
    | {:on_mount, [module()]}
    | {atom(), any()}
  ]
) :: Macro.t()
```

Generates a generic, white-label password reset page using LiveView and the components in `AshAuthentication.Phoenix.Components`. This is the page that allows a user to actually change his password, after requesting a reset token via the sign-in (`/reset`) route.

Available options are:

- `path` the path under which to mount the live-view. Defaults to `/password-reset`.
- `live_view` the name of the live view to render. Defaults to [`AshAuthentication.Phoenix.ResetLive`](AshAuthentication.Phoenix.ResetLive.html).
- `as` which is passed to the generated `live` route. Defaults to `:auth`.
- `overrides` specify any override modules for customisation. See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.
- `gettext_fn` as a `{module :: module, function :: atom}` tuple pointing to a `(msgid :: String.t(), bindings :: keyword) :: String.t()` typed function that will be called to translate each output text of the live view.
- `gettext_backend` as a `{module :: module, domain :: String.t()}` tuple pointing to a Gettext backend module and specifying the Gettext domain. This is basically a convenience wrapper around `gettext_fn`.

All other options are passed to the generated `scope`.

[](AshAuthentication.Phoenix.Router.html#sign_in_route/1)

# sign\_in\_route(opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L225)(macro)

```
@spec sign_in_route(
  opts :: [
    {:path, String.t()}
    | {:live_view, module()}
    | {:as, atom()}
    | {:on_mount, [module()]}
    | {:overrides, [module()]}
    | {:gettext_fn, {module(), atom()}}
    | {:gettext_backend, {module(), String.t()}}
    | {atom(), any()}
  ]
) :: Macro.t()
```

Generates a generic, white-label sign-in page using LiveView and the components in `AshAuthentication.Phoenix.Components`.

This is completely optional.

Available options are:

- `path` the path under which to mount the sign-in live-view. Defaults to `/sign-in` within the current router scope.
- `auth_routes_prefix` if set, this will be used instead of route helpers when determining routes. Allows disabling `helpers: true`. If a tuple {:unscoped, path} is provided, the path prefix will not inherit the current route scope.
- `register_path` - the path under which to mount the password strategy's registration live-view. If not set, and registration is supported, registration will use a dynamic toggle and will not be routeable to. If a tuple {:unscoped, path} is provided, the registration path will not inherit the current route scope.
- `reset_path` - the path under which to mount the password strategy's password reset live-view, for a user to request a reset token by email. If not set, and password reset is supported, password reset will use a dynamic toggle and will not be routeable to. If a tuple {:unscoped, path} is provided, the reset path will not inherit the current route scope.
- `live_view` the name of the live view to render. Defaults to [`AshAuthentication.Phoenix.SignInLive`](AshAuthentication.Phoenix.SignInLive.html).
- `auth_routes_prefix` the prefix to use for the auth routes. Defaults to `/auth`.
- `as` which is used to prefix the generated `live_session` and `live` route name. Defaults to `:auth`.
- `otp_app` the otp app or apps to find authentication resources in. Pulls from the socket by default.
- `overrides` specify any override modules for customisation. See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.
- `gettext_fn` as a `{module :: module, function :: atom}` tuple pointing to a `(msgid :: String.t(), bindings :: keyword) :: String.t()` typed function that will be called to translate each output text of the live view.
- `gettext_backend` as a `{module :: module, domain :: String.t()}` tuple pointing to a Gettext backend module and specifying the Gettext domain. This is basically a convenience wrapper around `gettext_fn`.

All other options are passed to the generated `scope`.

[](AshAuthentication.Phoenix.Router.html#sign_out_route/3)

# sign\_out\_route(auth\_controller, path \\\\ "/sign-out", opts \\\\ \[])

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/router.ex#L337)(macro)

```
@spec sign_out_route(AshAuthentication.Phoenix.Controller.t(), path :: String.t(), [
  {:as, atom()} | {atom(), any()}
]) :: Macro.t()
```

Generates a sign-out route which points to the `sign_out` action in your auth controller.

This is optional, but you probably want it.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/sign_in_live.ex#L1 "View Source") AshAuthentication.Phoenix.SignInLive (ash\_authentication\_phoenix v2.4.5)

A generic, white-label sign-in page.

This live-view can be rendered into your app using the [`AshAuthentication.Phoenix.Router.sign_in_route/1`](AshAuthentication.Phoenix.Router.html#sign_in_route/1) macro in your router (or by using [`Phoenix.LiveView.Controller.live_render/3`](../phoenix_live_view/1.0.2/Phoenix.LiveView.Controller.html#live_render/3) directly in your markup).

This live-view finds all Ash resources with an authentication configuration (via [`AshAuthentication.authenticated_resources/1`](../ash_authentication/4.4.3/AshAuthentication.html#authenticated_resources/1)) and renders the appropriate UI for their providers using [`AshAuthentication.Phoenix.Components.SignIn`](AshAuthentication.Phoenix.Components.SignIn.html).

## [](AshAuthentication.Phoenix.SignInLive.html#module-overrides)Overrides

This component provides the following overrides:

- `:root_class` - CSS class for the root `div` element.
- `:sign_in_id` - Element ID for the `SignIn` LiveComponent.

See [`AshAuthentication.Phoenix.Overrides`](AshAuthentication.Phoenix.Overrides.html) for more information.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/test/support/gettext.ex#L1 "View Source") AshAuthentication.Phoenix.Test.Gettext (ash\_authentication\_phoenix v2.4.5)

Gettext stub, referenced in AshAuthentication.Phoenix.Test.Router

# [](AshAuthentication.Phoenix.Test.Gettext.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.Test.Gettext.html#functions)

[handle\_missing\_bindings(exception, incomplete)](AshAuthentication.Phoenix.Test.Gettext.html#handle_missing_bindings/2)

Callback implementation for [`Gettext.Backend.handle_missing_bindings/2`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_bindings/2).

[handle\_missing\_plural\_translation(locale, domain, msgctxt, msgid, msgid\_plural, n, bindings)](AshAuthentication.Phoenix.Test.Gettext.html#handle_missing_plural_translation/7)

Callback implementation for [`Gettext.Backend.handle_missing_plural_translation/7`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_plural_translation/7).

[translate\_test(msgid, bindings)](AshAuthentication.Phoenix.Test.Gettext.html#translate_test/2)

# [](AshAuthentication.Phoenix.Test.Gettext.html#functions)Functions

[](AshAuthentication.Phoenix.Test.Gettext.html#handle_missing_bindings/2)

# handle\_missing\_bindings(exception, incomplete)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/test/support/gettext.ex#L6)

Callback implementation for [`Gettext.Backend.handle_missing_bindings/2`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_bindings/2).

[](AshAuthentication.Phoenix.Test.Gettext.html#handle_missing_plural_translation/7)

# handle\_missing\_plural\_translation(locale, domain, msgctxt, msgid, msgid\_plural, n, bindings)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/test/support/gettext.ex#L6)

Callback implementation for [`Gettext.Backend.handle_missing_plural_translation/7`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_plural_translation/7).

[](AshAuthentication.Phoenix.Test.Gettext.html#translate_test/2)

# translate\_test(msgid, bindings)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/test/support/gettext.ex#L9)

```
@spec translate_test(
  String.t(),
  keyword()
) :: String.t()
```

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/utils/flash.ex#L1 "View Source") AshAuthentication.Phoenix.Utils.Flash (ash\_authentication\_phoenix v2.4.5)

Utility functions for sending and receiving flash messages.

# [](AshAuthentication.Phoenix.Utils.Flash.html#summary)Summary

## [Functions](AshAuthentication.Phoenix.Utils.Flash.html#functions)

[on\_mount(name, params, session, socket)](AshAuthentication.Phoenix.Utils.Flash.html#on_mount/4)

Attach a hook to receive flash messages sent from components, for rendering in the top-level liveview.

[put\_flash!(socket, type, message)](AshAuthentication.Phoenix.Utils.Flash.html#put_flash!/3)

Send flash messages from components, to be rendered in their parent liveview.

# [](AshAuthentication.Phoenix.Utils.Flash.html#functions)Functions

[](AshAuthentication.Phoenix.Utils.Flash.html#on_mount/4)

# on\_mount(name, params, session, socket)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/utils/flash.ex#L12)

Attach a hook to receive flash messages sent from components, for rendering in the top-level liveview.

[](AshAuthentication.Phoenix.Utils.Flash.html#put_flash!/3)

# put\_flash!(socket, type, message)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/ash_authentication_phoenix/utils/flash.ex#L25)

Send flash messages from components, to be rendered in their parent liveview.

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/documentation/tutorials/get-started.md#L1 "View Source") Getting Started Ash Authentication Phoenix

### [](get-started.html#with-igniter)With Igniter

This will also install `ash_authentication` if you haven't run that installer.

```
mix igniter.install ash_authentication_phoenix
```

If you'd like to see only the changes that `ash_authentication_phoenix` makes, you can run:

```
mix igniter.install ash_authentication
# and then run
mix igniter.install ash_authentication_phoenix
```

See the [AshAuthentication getting started guide](../ash_authentication/get-started.html) for information on how to add strategies and configure [`AshAuthentication`](../ash_authentication/4.4.3/AshAuthentication.html) if you have not already.

### [](get-started.html#manual)Manual

#### Router Setup

`ash_authentication_phoenix` includes several helper macros which can generate Phoenix routes for you. For that you need to add 6 lines in the router module or just replace the whole file with the following code:

**lib/example\_web/router.ex**

```
defmodule ExampleWeb.Router do
  use ExampleWeb, :router

  use AshAuthentication.Phoenix.Router # <-------- Add this line

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {ExampleWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :load_from_session # <-------- Add this line
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :load_from_bearer # <--------- Add this line
  end

  scope "/", ExampleWeb do
    pipe_through :browser

    get "/", PageController, :home

    # add these lines -->

    # Standard controller-backed routes
    auth_routes AuthController, Example.Accounts.User, path: "/auth"
    sign_out_route AuthController

    # Prebuilt LiveViews for signing in, registration, resetting, etc.
    # Leave out `register_path` and `reset_path` if you don't want to support
    # user registration and/or password resets respectively.
    sign_in_route(register_path: "/register", reset_path: "/reset", auth_routes_prefix: "/auth")
    reset_route [auth_routes_prefix: "/auth"]

    # <-- add these lines
  end

  ...
end
```

#### AuthController

While running [`mix phx.routes`](../phoenix/1.7.18/Mix.Tasks.Phx.Routes.html) you probably saw the warning message that the `ExampleWeb.AuthController.init/1 is undefined`. Let's fix that by creating a new controller:

**lib/example\_web/controllers/auth\_controller.ex**

```
defmodule ExampleWeb.AuthController do
  use ExampleWeb, :controller
  use AshAuthentication.Phoenix.Controller

  def success(conn, _activity, user, _token) do
    return_to = get_session(conn, :return_to) || ~p"/"

    conn
    |> delete_session(:return_to)
    |> store_in_session(user)
    # If your resource has a different name, update the assign name here (i.e :current_admin)
    |> assign(:current_user, user)
    |> redirect(to: return_to)
  end

  def failure(conn, _activity, _reason) do
    conn
    |> put_flash(:error, "Incorrect email or password")
    |> redirect(to: ~p"/sign-in")
  end

  def sign_out(conn, _params) do
    return_to = get_session(conn, :return_to) || ~p"/"

    conn
    |> clear_session()
    |> redirect(to: return_to)
  end
end
```

## [](get-started.html#generated-routes)Generated routes

Given the above configuration you should see the following in your routes:

```
# mix phx.routes

Generated example app
          auth_path  GET  /sign-in                               AshAuthentication.Phoenix.SignInLive :sign_in
          auth_path  GET  /sign-out                              ExampleWeb.AuthController :sign_out
          auth_path  *    /auth/user/password/register           ExampleWeb.AuthController {:user, :password, :register}
          auth_path  *    /auth/user/password/sign_in            ExampleWeb.AuthController {:user, :password, :sign_in}
          page_path  GET  /                                      ExampleWeb.PageController :home
...
```

### [](get-started.html#customizing-the-generated-routes)Customizing the generated routes

If you're integrating AshAuthentication into an existing app, you probably already have existing HTML layouts you want to use, to wrap the provided sign in/forgot password/etc. forms.

Liveviews provided by AshAuthentication.Phoenix will use the same root layout configured in your router's `:browser` pipeline, but it includes its own layout file primarily for rendering flash messages.

If you would like to use your own layout file instead, you can specify this as an option to the route helpers, eg.

```
reset_route(layout: {MyAppWeb, :live}, auth_routes_prefix: "/auth")
```

## [](get-started.html#tailwind)Tailwind

If you plan on using our default [Tailwind](https://tailwindcss.com/)-based components without overriding them you will need to modify your `assets/tailwind.config.js` to include the `ash_authentication_phoenix` dependency:

**assets/tailwind.config.js**

```
// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./js/**/*.js",
    "../lib/*_web.ex",
    "../lib/*_web/**/*.*ex",
    "../deps/ash_authentication_phoenix/**/*.*ex", // <-- Add this line
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FD4F00",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(({ addVariant }) =>
      addVariant("phx-no-feedback", [
        ".phx-no-feedback&",
        ".phx-no-feedback &",
      ]),
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-click-loading", [
        ".phx-click-loading&",
        ".phx-click-loading &",
      ]),
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-submit-loading", [
        ".phx-submit-loading&",
        ".phx-submit-loading &",
      ]),
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-change-loading", [
        ".phx-change-loading&",
        ".phx-change-loading &",
      ]),
    ),
  ],
};
```

## [](get-started.html#example-home-html-heex)Example home.html.heex

If you've just created your application, you can replace the default Phoenix `home.html.eex` with a minimal example which has a top navbar. On the right side it shows the `@current_user` and a sign out button. If you are not signed in you will see a sign in button.

**lib/example\_web/controllers/page\_html/home.html.heex**

```
<nav class="bg-gray-800">
  <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div
        class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
      >
        <div class="block ml-6">
          <div class="flex space-x-4">
            <div class="px-3 py-2 text-xl font-medium text-white ">
              Ash Demo
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <%= if @current_user do %>
        <span class="px-3 py-2 text-sm font-medium text-white rounded-md">
          <%= @current_user.email %>
        </span>
        <a
          href="/sign-out"
          class="rounded-lg bg-zinc-100 px-2 py-1 text-[0.8125rem] font-semibold leading-6 text-zinc-900 hover:bg-zinc-200/80 active:text-zinc-900/70"
        >
          Sign out
        </a>
        <% else %>
        <a
          href="/sign-in"
          class="rounded-lg bg-zinc-100 px-2 py-1 text-[0.8125rem] font-semibold leading-6 text-zinc-900 hover:bg-zinc-200/80 active:text-zinc-900/70"
        >
          Sign In
        </a>
        <% end %>
      </div>
    </div>
  </div>
</nav>

<div class="py-10">
  <header>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
        Demo
      </h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-8 sm:px-0">
        <div
          class="border-4 border-gray-200 border-dashed rounded-lg h-96"
        ></div>
      </div>
    </div>
  </main>
</div>
```

### [](get-started.html#if-you-are-using-liveview)If you are using LiveView

If you are using LiveView, jump over to the [Use AshAuthentication with LiveView](liveview.html) section and set up your LiveView routes for [`AshAuthentication`](../ash_authentication/4.4.3/AshAuthentication.html). Once that is done, you can proceed with the following steps.

### [](get-started.html#configure-strategies)Configure strategies

By default, no strategies are included. See the [getting started guide](../ash_authentication/get-started.html) in [`AshAuthentication`](../ash_authentication/4.4.3/AshAuthentication.html) for more on setting up individual authentication strategies.

### [](get-started.html#start-phoenix)Start Phoenix

You can now start Phoenix and visit [`localhost:4000`](http://localhost:4000) from your browser.

```
$ mix phx.server
```

### [](get-started.html#sign-in)Sign In

Visit [`localhost:4000/sign-in`](http://localhost:4000/sign-in) from your browser.

The sign in page shows a link to register a new account.

### [](get-started.html#sign-out)Sign Out

Visit [`localhost:4000/sign-out`](http://localhost:4000/sign-out) from your browser.

### [](get-started.html#debugging-the-authentication-flow)Debugging the Authentication flow

The default authentication view shows a generic error message to users if their sign-in fails, like "Email or password was incorrect". This is for security purposes - you don't want potentially malicious people to know if an email address definitively exists in your system.

However, if you're having issues setting up AshAuthentication, or trying to debug issues with your implementation, that error message isn't super useful to figure out what's going wrong.

To that end, AshAuthentication comes with debug functionality that can be enabled in dev:

**config/dev.exs**

```
config :ash_authentication, debug_authentication_failures?: true
```

#### Don't enable debugging outside `dev` environments!

This could leak users' personally-identifiable information (PII) into your logs on failed sign-in attempts - a security issue!

Once the config is added, you can restart your dev server and test what happens when you visit the sign-in page and submit invalid credentials. You should see log messages like -

```
[timestamp] [warning] Authentication failed: Query returned no users

Details: %AshAuthentication.Errors.AuthenticationFailed{
  field: nil,
  strategy: %AshAuthentication.Strategy.Password{
    confirmation_required?: true,
    ...
```

## [](get-started.html#reset-password)Reset Password

In this section we add a reset password functionality. Which is triggered by adding `resettable` in the `User` resource. Please replace the `strategies` block in `lib/example/accounts/user.ex` with the following code:

**lib/example/accounts/user.ex**

```
# [...]
strategies do
  password :password do
    identity_field :email

    resettable do
      sender Example.Accounts.User.Senders.SendPasswordResetEmail
    end
  end
end
# [...]
```

To make this work we need to create a new module `Example.Accounts.User.Senders.SendPasswordResetEmail`:

**lib/example/accounts/user/senders/send\_password\_reset\_email.ex**

```
defmodule Example.Accounts.User.Senders.SendPasswordResetEmail do
  @moduledoc """
  Sends a password reset email
  """
  use AshAuthentication.Sender
  use ExampleWeb, :verified_routes

  @impl AshAuthentication.Sender
  def send(user, token, _) do
    Example.Accounts.Emails.deliver_reset_password_instructions(
      user,
      url(~p"/password-reset/#{token}")
    )
  end
end
```

We also need to create a new email template:

**lib/example/accounts/emails.ex**

```
defmodule Example.Accounts.Emails do
  @moduledoc """
  Delivers emails.
  """

  import Swoosh.Email

  def deliver_reset_password_instructions(user, url) do
    if !url do
      raise "Cannot deliver reset instructions without a url"
    end

    deliver(user.email, "Reset Your Password", """
    <html>
      <p>
        Hi #{user.email},
      </p>

      <p>
        <a href="#{url}">Click here</a> to reset your password.
      </p>

      <p>
        If you didn't request this change, please ignore this.
      </p>
    <html>
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
    |> Example.Mailer.deliver!()
  end
end
```

Your new reset password functionality is active. Visit [`localhost:4000/sign-in`](http://localhost:4000/sign-in) with your browser and click on the `Forgot your password?` link to trigger the reset password workflow.

[← Previous Page README](readme.html)

[Next Page → LiveView Routes](liveview.html)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) ([current file](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5/show/documentation/tutorials/get-started.md)) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/documentation/tutorials/liveview.md#L1 "View Source") Setting up your routes for LiveView

A built in live session wrapper is provided that will set the user assigns for you. To use it, wrap your live routes like so:

```
ash_authentication_live_session :session_name do
  live "/route", ProjectLive.Index, :index
end
```

There are two problems with the above, however.

1. If there is no user present, it will not set `current_user: nil`.
2. You may want a way to require that a user is present for some routes, and not for others.

## [](liveview.html#authentication-helper)Authentication helper

To accomplish this, we use standard Phoenix [`on_mount` hooks](../phoenix_live_view/Phoenix.LiveView.html#on_mount/1-examples). Lets define a hook that gives us three potential behaviors, one for optionally having a user signed in, one for requiring a signed in user, and one for requiring that there is no signed in user.

```
# lib/my_app_web/live_user_auth.ex
defmodule MyAppWeb.LiveUserAuth do
  @moduledoc """
  Helpers for authenticating users in LiveViews.
  """

  import Phoenix.Component
  use MyAppWeb, :verified_routes

  def on_mount(:live_user_optional, _params, _session, socket) do
    if socket.assigns[:current_user] do
      {:cont, socket}
    else
      {:cont, assign(socket, :current_user, nil)}
    end
  end

  def on_mount(:live_user_required, _params, _session, socket) do
    if socket.assigns[:current_user] do
      {:cont, socket}
    else
      {:halt, Phoenix.LiveView.redirect(socket, to: ~p"/sign-in")}
    end
  end

  def on_mount(:live_no_user, _params, _session, socket) do
    if socket.assigns[:current_user] do
      {:halt, Phoenix.LiveView.redirect(socket, to: ~p"/")}
    else
      {:cont, assign(socket, :current_user, nil)}
    end
  end
end
```

And we can use this as follows:

```
# lib/my_app_web/router.ex
  # ...
  scope "/", MyAppWeb do
    # ...
    ash_authentication_live_session :authentication_required,
      on_mount: {MyAppWeb.LiveUserAuth, :live_user_required} do
      live "/protected_route", ProjectLive.Index, :index
    end

    ash_authentication_live_session :authentication_optional,
      on_mount: {MyAppWeb.LiveUserAuth, :live_user_optional} do
      live "/", ProjectLive.Index, :index
    end
  end
  # ...
```

You can also use this to prevent users from visiting the auto generated `sign_in` route:

```
sign_in_route(on_mount: [{MyAppWeb.LiveUserAuth, :live_no_user}])
```

[← Previous Page Get Started](get-started.html)

[Next Page → UI Overrides](ui-overrides.html)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) ([current file](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5/show/documentation/tutorials/liveview.md)) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/mix/tasks/ash_authentication_phoenix.install.ex#L4 "View Source") mix ash\_authentication\_phoenix.install (ash\_authentication\_phoenix v2.4.5)

Installs AshAuthenticationPhoenix. Invoke with `mix igniter.install ash_authentication_phoenix`

## [](Mix.Tasks.AshAuthenticationPhoenix.Install.html#module-example)Example

```
mix igniter.install ash_authentication_phoenix
```

## [](Mix.Tasks.AshAuthenticationPhoenix.Install.html#module-options)Options

- `--accounts` or `-a` - The domain that contains your resources. Defaults to `YourApp.Accounts`.
- `--user` or `-u` - The resource that represents a user. Defaults to `<accounts>.User`.
- `--token` or `-t` - The resource that represents a token. Defaults to `<accounts>.Token`.

# [](Mix.Tasks.AshAuthenticationPhoenix.Install.html#summary)Summary

## [Functions](Mix.Tasks.AshAuthenticationPhoenix.Install.html#functions)

[igniter(igniter, argv)](Mix.Tasks.AshAuthenticationPhoenix.Install.html#igniter/2)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.16/Igniter.Mix.Task.html#c:igniter/2).

# [](Mix.Tasks.AshAuthenticationPhoenix.Install.html#functions)Functions

[](Mix.Tasks.AshAuthenticationPhoenix.Install.html#igniter/2)

# igniter(igniter, argv)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/mix/tasks/ash_authentication_phoenix.install.ex#L48)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.16/Igniter.Mix.Task.html#c:igniter/2).

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/mix/tasks/ash_authentication.phoenix.routes.ex#L1 "View Source") mix ash\_authentication.phoenix.routes (ash\_authentication\_phoenix v2.4.5)

Prints all routes pertaining to AshAuthenticationPhoenix for the default or a given router.

This task can be called directly, accepting the same options as [`mix phx.routes`](../phoenix/1.7.18/Mix.Tasks.Phx.Routes.html), except for `--info`.

Alternatively, you can modify your aliases task to run them back to back it.

```
aliases: ["phx.routes": ["do", "phx.routes,", "ash_authentication.phx.routes"]]
```

# [](Mix.Tasks.AshAuthentication.Phoenix.Routes.html#summary)Summary

## [Functions](Mix.Tasks.AshAuthentication.Phoenix.Routes.html#functions)

[get\_url\_info(url, arg)](Mix.Tasks.AshAuthentication.Phoenix.Routes.html#get_url_info/2)

# [](Mix.Tasks.AshAuthentication.Phoenix.Routes.html#functions)Functions

[](Mix.Tasks.AshAuthentication.Phoenix.Routes.html#get_url_info/2)

# get\_url\_info(url, arg)

[](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/lib/mix/tasks/ash_authentication.phoenix.routes.ex#L96)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/README.md#L1 "View Source") README

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/team-alembic/ash_authentication_phoenix/workflows/Elixir%20Library/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_authentication_phoenix.svg)](https://hex.pm/packages/ash_authentication_phoenix) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_authentication_phoenix.html)

# Ash Authentication Phoenix

Welcome! Here you will find everything you need to know to get started with Ash Authentication and Phoenix. This documentation is best viewed on [hexdocs](../ash_authentication_phoenix.html)

## [](readme.html#about-the-documentation)About the Documentation

[**Tutorials**](readme.html#tutorials) walk you through a series of steps to accomplish a goal. These are **learning-oriented**, and are a great place for beginners to start.

* * *

[**Topics**](readme.html#topics) provide a high level overview of a specific concept or feature. These are **understanding-oriented**, and are perfect for discovering design patterns, features, and tools related to a given topic.

* * *

[**How-to**](readme.html#how-to) guides are **goal-oriented** recipes for accomplishing specific tasks. These are also good to browse to get an idea of how Ash Authentication works and what is possible with it.

* * *

[**Reference**](readme.html#reference) documentation is produced automatically from our source code. It comes in the form of module documentation and DSL documentation. This documentation is **information-oriented**. Use the sidebar and the search bar to find relevant reference information.

## [](readme.html#tutorials)Tutorials

- [Get Started](get-started.html)
- [Using with LiveView](liveview.html)
- [Overriding UI](ui-overrides.html)

## [](readme.html#related-packages)Related packages

- [Ash Framework](../ash.html)
- [Ash Authentication](../ash_authentication.html)

* * *

[![Alembic](https://hexdocs.pm/ash_authentication_phoenix/logos/alembic.png)](https://alembic.com.au)

Proudly written and maintained by the team at [Alembic](https://alembic.com.au) for the Ash community.

[← Previous Page API Reference](api-reference.html)

[Next Page → Get Started](get-started.html)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) ([current file](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5/show/README.md)) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[ash\_authentication\_phoenix](readme.html)

v2.4.5

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_authentication\_phoenix

Settings

# [View Source](https://github.com/team-alembic/ash_authentication_phoenix/blob/main/documentation/tutorials/ui-overrides.md#L1 "View Source") Overriding Ash Authentication Phoenix's default UI

Ash Authentication Phoenix provides a default UI implementation to get you started, however we wanted there to be a middle road between "you gets what you gets" and "¯\\*(ツ)*/¯ make your own". Thus AAP's system of UI overrides were born.

Each of our LiveView components has a number of hooks where you can override either the CSS styles, text or images.

In addition you have the option to provide a `gettext/2` compatible function through which all output text will be run.

## [](ui-overrides.html#defining-overrides)Defining Overrides

You override these components by defining an "overrides module", which you will then provide in your router when setting up your routes.

For example, if we wanted to change the default banner used on the sign-in page:

```
defmodule MyAppWeb.AuthOverrides do
  use AshAuthentication.Phoenix.Overrides

  # Override a property per component
  override AshAuthentication.Phoenix.Components.Banner do
    # include any number of properties you want to override
    set :image_url, "/images/rickroll.gif"
  end
end
```

You only need to define the overrides you want to change. Unspecified overrides will use their default value.

## [](ui-overrides.html#internationalisation)Internationalisation

Plug in your Gettext backend and have all display text translated automagically, see next section for an example.

The package includes Gettext templates for the untranslated messages and a growing number of translations. You might want to

```
cp -rv deps/ash_authentication_phoenix/i18n/gettext/* priv/gettext
```

For other i18n libraries you have the option to provide a gettext-like handler function, see [`AshAuthentication.Phoenix.Router.sign_in_route/1`](AshAuthentication.Phoenix.Router.html#sign_in_route/1) for details.

## [](ui-overrides.html#telling-ashauthentication-about-your-overrides)Telling AshAuthentication about your overrides

To do this, you modify your `sign_in_route` calls to contain the `overrides` option. Be sure to put the [`AshAuthentication.Phoenix.Overrides.Default`](AshAuthentication.Phoenix.Overrides.Default.html) override last, as it contains the default values for all components!

The same way you may add a `gettext_backend` option to specify your Gettext backend and domain.

```
defmodule MyAppWeb.Router do
  use MyAppWeb, :router
  use AshAuthentication.Phoenix.Router

  # ...

  scope "/", MyAppWeb do
    sign_in_route overrides: [MyAppWeb.AuthOverrides, AshAuthentication.Phoenix.Overrides.Default],
                  gettext_backend: {MyAppWeb.Gettext, "auth"}
  end
end
```

## [](ui-overrides.html#reference)Reference

The below documentation is autogenerated from the components that support overrides. All available overrides are listed here. If you are looking to override something not in this list, please open an issue, or even better a PR!

Looking at the source of the components can be enlightening to see exactly how an override is used. If you click on the name of component you are interested in, and then look in the top right (if you are on hexdocs), you will see a `</>` button that will take you to the source for that component. In that code, look for calls to `override_for/3` to see specifically how each override is used.

## [](ui-overrides.html#sign-in)Sign In

### [](ui-overrides.html#ashauthentication-phoenix-signinlive)[`AshAuthentication.Phoenix.SignInLive`](AshAuthentication.Phoenix.SignInLive.html)

A generic, white-label sign-in page.

- `:root_class` - CSS class for the root `div` element.
- `:sign_in_id` - Element ID for the `SignIn` LiveComponent.

### [](ui-overrides.html#ashauthentication-phoenix-components-signin)[`AshAuthentication.Phoenix.Components.SignIn`](AshAuthentication.Phoenix.Components.SignIn.html)

Renders sign in mark-up for an authenticated resource.

- `:authentication_error_container_class` - CSS class for the container for the text of the authentication error.
- `:authentication_error_text_class` - CSS class for the authentication error text.
- `:root_class` - CSS class for the root `div` element.
- `:show_banner` - Whether or not to show the banner.
- `:strategy_class` - CSS class for a `div` surrounding each strategy component.

## [](ui-overrides.html#password-sign-in)Password Sign-in

### [](ui-overrides.html#ashauthentication-phoenix-components-password)[`AshAuthentication.Phoenix.Components.Password`](AshAuthentication.Phoenix.Components.Password.html)

Generates sign in, registration and reset forms for a resource.

- `:hide_class` - CSS class to apply to hide an element.
- `:interstitial_class` - CSS class for the `div` element between the form and the button.
- `:register_toggle_text` - Toggle text to display when the register form is not showing (or `nil` to disable).
- `:reset_toggle_text` - Toggle text to display when the reset form is not showing (or `nil` to disable).
- `:root_class` - CSS class for the root `div` element.
- `:show_first` - The form to show on first load. Either `:sign_in` or `:register`. Only relevant if paths aren't set for them in the router.
- `:sign_in_toggle_text` - Toggle text to display when the sign in form is not showing (or `nil` to disable).
- `:slot_class` - CSS class for the `div` surrounding the slot.
- `:toggler_class` - CSS class for the toggler `a` element.

### [](ui-overrides.html#ashauthentication-phoenix-components-password-registerform)[`AshAuthentication.Phoenix.Components.Password.RegisterForm`](AshAuthentication.Phoenix.Components.Password.RegisterForm.html)

Generates a default registration form.

- `:button_text` - Text for the submit button.
- `:disable_button_text` - Text for the submit button when the request is happening.
- `:form_class` - CSS class for the `form` element.
- `:label_class` - CSS class for the `h2` element.
- `:root_class` - CSS class for the root `div` element.
- `:slot_class` - CSS class for the `div` surrounding the slot.

### [](ui-overrides.html#ashauthentication-phoenix-components-password-signinform)[`AshAuthentication.Phoenix.Components.Password.SignInForm`](AshAuthentication.Phoenix.Components.Password.SignInForm.html)

Generates a default sign in form.

- `:button_text` - Text for the submit button.
- `:disable_button_text` - Text for the submit button when the request is happening.
- `:form_class` - CSS class for the `form` element.
- `:label_class` - CSS class for the `h2` element.
- `:root_class` - CSS class for the root `div` element.
- `:slot_class` - CSS class for the `div` surrounding the slot.

## [](ui-overrides.html#password-reset)Password Reset

### [](ui-overrides.html#ashauthentication-phoenix-resetlive)[`AshAuthentication.Phoenix.ResetLive`](AshAuthentication.Phoenix.ResetLive.html)

A generic, white-label password reset page.

- `:reset_id` - Element ID for the `Reset` LiveComponent.
- `:root_class` - CSS class for the root `div` element.

### [](ui-overrides.html#ashauthentication-phoenix-components-reset)[`AshAuthentication.Phoenix.Components.Reset`](AshAuthentication.Phoenix.Components.Reset.html)

Renders a password-reset form.

- `:root_class` - CSS class for the root `div` element.
- `:show_banner` - Whether or not to show the banner.
- `:strategy_class` - CSS class for a `div` surrounding each strategy component.

### [](ui-overrides.html#ashauthentication-phoenix-components-reset-form)[`AshAuthentication.Phoenix.Components.Reset.Form`](AshAuthentication.Phoenix.Components.Reset.Form.html)

Generates a default password reset form.

- `:disable_button_text` - Text for the submit button when the request is happening.
- `:form_class` - CSS class for the `form` element.
- `:label_class` - CSS class for the `h2` element.
- `:root_class` - CSS class for the root `div` element.
- `:spacer_class` - CSS classes for space between the password input and submit elements.

### [](ui-overrides.html#ashauthentication-phoenix-components-password-resetform)[`AshAuthentication.Phoenix.Components.Password.ResetForm`](AshAuthentication.Phoenix.Components.Password.ResetForm.html)

Generates a default password reset form.

- `:button_text` - Tex for the submit button.
- `:disable_button_text` - Text for the submit button when the request is happening.
- `:form_class` - CSS class for the `form` element.
- `:label_class` - CSS class for the `h2` element.
- `:reset_flash_text` - Text for the flash message when a request is received. Set to `nil` to disable.
- `:root_class` - CSS class for the root `div` element.
- `:slot_class` - CSS class for the `div` surrounding the slot.

## [](ui-overrides.html#password)Password

### [](ui-overrides.html#ashauthentication-phoenix-components-password-input)[`AshAuthentication.Phoenix.Components.Password.Input`](AshAuthentication.Phoenix.Components.Password.Input.html)

Function components for dealing with form input during password authentication.

- `:error_li` - CSS class for the `li` elements on error lists.
- `:error_ul` - CSS class for the `ul` element on error lists.
- `:field_class` - CSS class for `div` elements surrounding the fields.
- `:identity_input_label` - Label for identity field.
- `:identity_input_placeholder` - Placeholder for identity field.
- `:input_class` - CSS class for text/password `input` elements.
- `:input_class_with_error` - CSS class for text/password `input` elements when there is a validation error.
- `:input_debounce` - Number of milliseconds to debounce input by (or `nil` to disable).
- `:label_class` - CSS class for `label` elements.
- `:password_confirmation_input_label` - Label for password confirmation field.
- `:password_input_label` - Label for password field.
- `:submit_class` - CSS class for the form submit `input` element.

## [](ui-overrides.html#magic-link)Magic Link

### [](ui-overrides.html#ashauthentication-phoenix-components-magiclink)[`AshAuthentication.Phoenix.Components.MagicLink`](AshAuthentication.Phoenix.Components.MagicLink.html)

Generates a sign-in for for a resource using the "Magic link" strategy.

- `:disable_button_text` - Text for the submit button when the request is happening.
- `:form_class` - CSS class for the `form` element.
- `:label_class` - CSS class for the `h2` element.
- `:request_flash_text` - Text for the flash message when a request is received. Set to `nil` to disable.
- `:root_class` - CSS class for the root `div` element.

## [](ui-overrides.html#oauth2)OAuth2

### [](ui-overrides.html#ashauthentication-phoenix-components-apple)[`AshAuthentication.Phoenix.Components.Apple`](AshAuthentication.Phoenix.Components.Apple.html)

Generates a sign-in button for Apple.

- `:icon_class` - CSS classes for the icon SVG.
- `:link_class` - CSS classes for the `a` element.
- `:root_class` - CSS classes for the root `div` element.

### [](ui-overrides.html#ashauthentication-phoenix-components-oauth2)[`AshAuthentication.Phoenix.Components.OAuth2`](AshAuthentication.Phoenix.Components.OAuth2.html)

Generates a sign-in button for OAuth2.

- `:icon_class` - CSS classes for the icon SVG.
- `:link_class` - CSS classes for the `a` element.
- `:root_class` - CSS classes for the root `div` element.

## [](ui-overrides.html#miscellaneous)Miscellaneous

### [](ui-overrides.html#ashauthentication-phoenix-components-horizontalrule)[`AshAuthentication.Phoenix.Components.HorizontalRule`](AshAuthentication.Phoenix.Components.HorizontalRule.html)

A horizontal rule with text.

- `:hr_inner_class` - CSS class for the inner `div` element of the horizontal rule.
- `:hr_outer_class` - CSS class for the outer `div` element of the horizontal rule.
- `:root_class` - CSS class for the root `div` element.
- `:text` - Text to display in front of the horizontal rule.
- `:text_inner_class` - CSS class for the inner `div` element of the text area.
- `:text_outer_class` - CSS class for the outer `div` element of the text area.

### [](ui-overrides.html#ashauthentication-phoenix-components-banner)[`AshAuthentication.Phoenix.Components.Banner`](AshAuthentication.Phoenix.Components.Banner.html)

Renders a very simple banner at the top of the sign-in component.

- `:dark_image_class` - Css class for the `img` tag in dark mode.
- `:dark_image_url` - A URL for the `img` `src` attribute in dark mode. Set to `nil` to disable.
- `:href_class` - CSS class for the `a` tag.
- `:href_url` - A URL for the banner image to link to. Set to `nil` to disable.
- `:image_class` - CSS class for the `img` tag.
- `:image_url` - A URL for the `img` `src` attribute. Set to `nil` to disable.
- `:root_class` - CSS class for the root `div` element.
- `:text` - Banner text. Set to `nil` to disable.
- `:text_class` - CSS class for the text `div`.

[← Previous Page LiveView Routes](liveview.html)

[Hex Package](https://hex.pm/packages/ash_authentication_phoenix/2.4.5) [Hex Preview](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5) ([current file](https://preview.hex.pm/preview/ash_authentication_phoenix/2.4.5/show/documentation/tutorials/ui-overrides.md)) Search HexDocs

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
