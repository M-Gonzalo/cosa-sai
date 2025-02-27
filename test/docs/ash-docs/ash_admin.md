[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin "View Source") API Reference ash\_admin v0.12.6

## [](api-reference.html#modules)Modules

[AshAdmin.CoreComponents](AshAdmin.CoreComponents.html)

Provides core UI components.

[AshAdmin.Domain](AshAdmin.Domain.html)

A domain extension to alter the behavior of a domain in the admin UI.

[AshAdmin.Errors.NotFound](AshAdmin.Errors.NotFound.html)

[AshAdmin.Gettext](AshAdmin.Gettext.html)

A module providing Internationalization with a gettext-based API.

[AshAdmin.Resource](AshAdmin.Resource.html)

A resource extension to alter the behaviour of a resource in the admin UI.

[AshAdmin.Resource.Field](AshAdmin.Resource.Field.html)

The representation of a configured field in the admin UI.

[AshAdmin.Resource.Transformers.ValidateTableColumns](AshAdmin.Resource.Transformers.ValidateTableColumns.html)

Validates that table columns are all either attributes, or `:one` cardinality relationships.

[AshAdmin.Router](AshAdmin.Router.html)

Provides LiveView routing for AshAdmin.

[Demo.Accounts.NestedEmbed](Demo.Accounts.NestedEmbed.html)

[Demo.Accounts.NewUser](Demo.Accounts.NewUser.html)

TODO

[Demo.Accounts.Profile](Demo.Accounts.Profile.html)

[Demo.Accounts.User](Demo.Accounts.User.html)

[Demo.Calculations.Concat](Demo.Calculations.Concat.html)

[Demo.Repo](Demo.Repo.html)

[Demo.Tickets.Comment](Demo.Tickets.Comment.html)

[Demo.Tickets.Customer](Demo.Tickets.Customer.html)

[Demo.Tickets.Organization](Demo.Tickets.Organization.html)

[Demo.Tickets.Representative](Demo.Tickets.Representative.html)

[Demo.Tickets.Ticket](Demo.Tickets.Ticket.html)

[Demo.Tickets.Ticket.Types.BarMetadata](Demo.Tickets.Ticket.Types.BarMetadata.html)

[Demo.Tickets.Ticket.Types.FooMetadata](Demo.Tickets.Ticket.Types.FooMetadata.html)

[Demo.Tickets.Ticket.Types.Metadata](Demo.Tickets.Ticket.Types.Metadata.html)

[Demo.Tickets.TicketLink](Demo.Tickets.TicketLink.html)

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_admin.install](Mix.Tasks.AshAdmin.Install.html)

Installs AshAdmin

[Next Page → README](readme.html)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L1 "View Source") AshAdmin.CoreComponents (ash\_admin v0.12.6)

Provides core UI components.

At the first glance, this module may seem daunting, but its goal is to provide some core building blocks in your application, such as modals, tables, and forms. The components are mostly markup and well documented with doc strings and declarative assigns. You may customize and style them in any way you want, based on your application growth and needs.

The default components use Tailwind CSS, a utility-first CSS framework. See the [Tailwind CSS documentation](https://tailwindcss.com) to learn how to customize them or feel free to swap in another framework altogether.

Icons are provided by [heroicons](https://heroicons.com). See [`icon/1`](AshAdmin.CoreComponents.html#icon/1) for usage.

# [](AshAdmin.CoreComponents.html#summary)Summary

## [Functions](AshAdmin.CoreComponents.html#functions)

[back(assigns)](AshAdmin.CoreComponents.html#back/1)

Renders a back navigation link.

[button(assigns)](AshAdmin.CoreComponents.html#button/1)

Renders a button.

[error(assigns)](AshAdmin.CoreComponents.html#error/1)

Generates a generic error message.

[flash(assigns)](AshAdmin.CoreComponents.html#flash/1)

Renders flash notices.

[flash\_group(assigns)](AshAdmin.CoreComponents.html#flash_group/1)

Shows the flash group with standard titles and content.

[header(assigns)](AshAdmin.CoreComponents.html#header/1)

Renders a header with title.

[hide(js \\\\ %JS{}, selector)](AshAdmin.CoreComponents.html#hide/2)

[hide\_modal(js \\\\ %JS{}, id)](AshAdmin.CoreComponents.html#hide_modal/2)

[icon(assigns)](AshAdmin.CoreComponents.html#icon/1)

Renders a [Heroicon](https://heroicons.com).

[input(assigns)](AshAdmin.CoreComponents.html#input/1)

Renders an input with label and error messages.

[label(assigns)](AshAdmin.CoreComponents.html#label/1)

Renders a label.

[list(assigns)](AshAdmin.CoreComponents.html#list/1)

Renders a data list.

[modal(assigns)](AshAdmin.CoreComponents.html#modal/1)

Renders a modal.

[show(js \\\\ %JS{}, selector)](AshAdmin.CoreComponents.html#show/2)

[show\_modal(js \\\\ %JS{}, id)](AshAdmin.CoreComponents.html#show_modal/2)

[simple\_form(assigns)](AshAdmin.CoreComponents.html#simple_form/1)

Renders a simple form.

[table(assigns)](AshAdmin.CoreComponents.html#table/1)

Renders a table with generic styling.

[translate\_error(arg)](AshAdmin.CoreComponents.html#translate_error/1)

Translates an error message using gettext.

[translate\_errors(errors, field)](AshAdmin.CoreComponents.html#translate_errors/2)

Translates the errors for a field from a keyword list of errors.

# [](AshAdmin.CoreComponents.html#functions)Functions

[](AshAdmin.CoreComponents.html#back/1)

# back(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L550)

Renders a back navigation link.

## [](AshAdmin.CoreComponents.html#back/1-examples)Examples

```
<.back navigate={~p"/posts"}>Back to posts</.back>
```

## [](AshAdmin.CoreComponents.html#back/1-attributes)Attributes

- `navigate` (`:any`) (required)

## [](AshAdmin.CoreComponents.html#back/1-slots)Slots

- `inner_block` (required)

[](AshAdmin.CoreComponents.html#button/1)

# button(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L223)

Renders a button.

## [](AshAdmin.CoreComponents.html#button/1-examples)Examples

```
<.button>Send!</.button>
<.button phx-click="go" class="ml-2">Send!</.button>
```

## [](AshAdmin.CoreComponents.html#button/1-attributes)Attributes

- `type` (`:string`) - Defaults to `nil`.
- `class` (`:string`) - Defaults to `nil`.
- Global attributes are accepted. Supports all globals plus: `["disabled", "form", "name", "value"]`.

## [](AshAdmin.CoreComponents.html#button/1-slots)Slots

- `inner_block` (required)

[](AshAdmin.CoreComponents.html#error/1)

# error(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L403)

Generates a generic error message.

## [](AshAdmin.CoreComponents.html#error/1-slots)Slots

- `inner_block` (required)

[](AshAdmin.CoreComponents.html#flash/1)

# flash(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L108)

Renders flash notices.

## [](AshAdmin.CoreComponents.html#flash/1-examples)Examples

```
<.flash kind={:info} flash={@flash} />
<.flash kind={:info} phx-mounted={show("#flash")}>Welcome Back!</.flash>
```

## [](AshAdmin.CoreComponents.html#flash/1-attributes)Attributes

- `id` (`:string`) - the optional id of flash container. Defaults to `"flash"`.
- `flash` (`:map`) - the map of flash messages to display. Defaults to `%{}`.
- `title` (`:string`) - Defaults to `nil`.
- `kind` (`:atom`) - used for styling and flash lookup.Must be one of `:info`, or `:error`.
- Global attributes are accepted. the arbitrary HTML attributes to add to the flash container.

## [](AshAdmin.CoreComponents.html#flash/1-slots)Slots

- `inner_block` - the optional inner block that renders the flash message.

[](AshAdmin.CoreComponents.html#flash_group/1)

# flash\_group(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L144)

Shows the flash group with standard titles and content.

## [](AshAdmin.CoreComponents.html#flash_group/1-examples)Examples

```
<.flash_group flash={@flash} />
```

## [](AshAdmin.CoreComponents.html#flash_group/1-attributes)Attributes

- `flash` (`:map`) (required) - the map of flash messages.

[](AshAdmin.CoreComponents.html#header/1)

# header(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L421)

Renders a header with title.

## [](AshAdmin.CoreComponents.html#header/1-attributes)Attributes

- `class` (`:string`) - Defaults to `nil`.

## [](AshAdmin.CoreComponents.html#header/1-slots)Slots

- `inner_block` (required)
- `subtitle`
- `actions`

[](AshAdmin.CoreComponents.html#hide/2)

# hide(js \\\\ %JS{}, selector)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L603)

[](AshAdmin.CoreComponents.html#hide_modal/2)

# hide\_modal(js \\\\ %JS{}, id)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L626)

[](AshAdmin.CoreComponents.html#icon/1)

# icon(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L585)

Renders a [Heroicon](https://heroicons.com).

Heroicons come in three styles – outline, solid, and mini. By default, the outline style is used, but solid and mini may be applied by using the `-solid` and `-mini` suffix.

You can customize the size and colors of the icons by setting width, height, and background color classes.

Icons are extracted from your `assets/vendor/heroicons` directory and bundled within your compiled app.css by the plugin in your `assets/tailwind.config.js`.

## [](AshAdmin.CoreComponents.html#icon/1-examples)Examples

```
<.icon name="hero-x-mark-solid" />
<.icon name="hero-arrow-path" class="ml-1 w-3 h-3 animate-spin" />
```

## [](AshAdmin.CoreComponents.html#icon/1-attributes)Attributes

- `name` (`:string`) (required)
- `class` (`:string`) - Defaults to `nil`.

[](AshAdmin.CoreComponents.html#input/1)

# input(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L289)

Renders an input with label and error messages.

A [`Phoenix.HTML.FormField`](../phoenix_html/4.2.0/Phoenix.HTML.FormField.html) may be passed as argument, which is used to retrieve the input name, id, and values. Otherwise all attributes may be passed explicitly.

## [](AshAdmin.CoreComponents.html#input/1-types)Types

This function accepts all HTML input types, considering that:

- You may also set `type="select"` to render a `<select>` tag
- `type="checkbox"` is used exclusively to render boolean values
- For live file uploads, see [`Phoenix.Component.live_file_input/1`](../phoenix_live_view/1.0.1/Phoenix.Component.html#live_file_input/1)

See [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) for more information.

## [](AshAdmin.CoreComponents.html#input/1-examples)Examples

```
<.input field={@form[:email]} type="email" />
<.input name="my-input" errors={["oh no!"]} />
```

## [](AshAdmin.CoreComponents.html#input/1-attributes)Attributes

- `id` (`:any`) - Defaults to `nil`.
- `name` (`:any`)
- `label` (`:string`) - Defaults to `nil`.
- `value` (`:any`)
- `type` (`:string`) - Defaults to `"text"`.
- `field` ([`Phoenix.HTML.FormField`](../phoenix_html/4.2.0/Phoenix.HTML.FormField.html)) - a form field struct retrieved from the form, for example: @form\[:email].
- `errors` (`:list`) - Defaults to `[]`.
- `checked` (`:boolean`) - the checked flag for checkbox inputs.
- `prompt` (`:string`) - the prompt for select inputs. Defaults to `nil`.
- `options` (`:list`) - the options to pass to Phoenix.HTML.Form.options\_for\_select/2.
- `multiple` (`:boolean`) - the multiple flag for select inputs. Defaults to `false`.
- Global attributes are accepted. Supports all globals plus: `["accept", "autocomplete", "capture", "cols", "disabled", "form", "list", "max", "maxlength", "min", "minlength", "multiple", "pattern", "placeholder", "readonly", "required", "rows", "size", "step"]`.

## [](AshAdmin.CoreComponents.html#input/1-slots)Slots

- `inner_block`

[](AshAdmin.CoreComponents.html#label/1)

# label(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L390)

Renders a label.

## [](AshAdmin.CoreComponents.html#label/1-attributes)Attributes

- `for` (`:string`) - Defaults to `nil`.

## [](AshAdmin.CoreComponents.html#label/1-slots)Slots

- `inner_block` (required)

[](AshAdmin.CoreComponents.html#list/1)

# list(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L527)

Renders a data list.

## [](AshAdmin.CoreComponents.html#list/1-examples)Examples

```
<.list>
  <:item title="Title"><%= @post.title %></:item>
  <:item title="Views"><%= @post.views %></:item>
</.list>
```

## [](AshAdmin.CoreComponents.html#list/1-slots)Slots

- `item` (required) - Accepts attributes:
  
  - `title` (`:string`) (required)

[](AshAdmin.CoreComponents.html#modal/1)

# modal(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L44)

Renders a modal.

## [](AshAdmin.CoreComponents.html#modal/1-examples)Examples

```
<.modal id="confirm-modal">
  This is a modal.
</.modal>
```

JS commands may be passed to the `:on_cancel` to configure the closing/cancel event, for example:

```
<.modal id="confirm" on_cancel={JS.navigate(~p"/posts")}>
  This is another modal.
</.modal>
```

## [](AshAdmin.CoreComponents.html#modal/1-attributes)Attributes

- `id` (`:string`) (required)
- `show` (`:boolean`) - Defaults to `false`.
- `on_cancel` ([`Phoenix.LiveView.JS`](../phoenix_live_view/1.0.1/Phoenix.LiveView.JS.html)) - Defaults to `%Phoenix.LiveView.JS{ops: []}`.

## [](AshAdmin.CoreComponents.html#modal/1-slots)Slots

- `inner_block` (required)

[](AshAdmin.CoreComponents.html#show/2)

# show(js \\\\ %JS{}, selector)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L593)

[](AshAdmin.CoreComponents.html#show_modal/2)

# show\_modal(js \\\\ %JS{}, id)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L614)

[](AshAdmin.CoreComponents.html#simple_form/1)

# simple\_form(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L196)

Renders a simple form.

## [](AshAdmin.CoreComponents.html#simple_form/1-examples)Examples

```
<.simple_form for={@form} phx-change="validate" phx-submit="save">
  <.input field={@form[:email]} label="Email"/>
  <.input field={@form[:username]} label="Username" />
  <:actions>
    <.button>Save</.button>
  </:actions>
</.simple_form>
```

## [](AshAdmin.CoreComponents.html#simple_form/1-attributes)Attributes

- `for` (`:any`) (required) - the datastructure for the form.
- `as` (`:any`) - the server side parameter to collect all input under. Defaults to `nil`.
- Global attributes are accepted. the arbitrary HTML attributes to apply to the form tag. Supports all globals plus: `["autocomplete", "name", "rel", "action", "enctype", "method", "novalidate", "target", "multipart"]`.

## [](AshAdmin.CoreComponents.html#simple_form/1-slots)Slots

- `inner_block` (required)
- `actions` - the slot for form actions, such as a submit button.

[](AshAdmin.CoreComponents.html#table/1)

# table(assigns)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L462)

Renders a table with generic styling.

## [](AshAdmin.CoreComponents.html#table/1-examples)Examples

```
<.table id="users" rows={@users}>
  <:col :let={user} label="id"><%= user.id %></:col>
  <:col :let={user} label="username"><%= user.username %></:col>
</.table>
```

## [](AshAdmin.CoreComponents.html#table/1-attributes)Attributes

- `id` (`:string`) (required)
- `rows` (`:list`) (required)
- `row_id` (`:any`) - the function for generating the row id. Defaults to `nil`.
- `row_click` (`:any`) - the function for handling phx-click on each row. Defaults to `nil`.
- `row_item` (`:any`) - the function for mapping each row before calling the :col and :action slots. Defaults to `&Function.identity/1`.

## [](AshAdmin.CoreComponents.html#table/1-slots)Slots

- `col` (required) - Accepts attributes:
  
  - `label` (`:string`)
- `action` - the slot for showing user actions in the last table column.

[](AshAdmin.CoreComponents.html#translate_error/1)

# translate\_error(arg)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L641)

Translates an error message using gettext.

[](AshAdmin.CoreComponents.html#translate_errors/2)

# translate\_errors(errors, field)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/components/core_components.ex#L662)

Translates the errors for a field from a keyword list of errors.

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/domain.ex#L1 "View Source") AshAdmin.Domain (ash\_admin v0.12.6)

A domain extension to alter the behavior of a domain in the admin UI.

# [](AshAdmin.Domain.html#summary)Summary

## [Functions](AshAdmin.Domain.html#functions)

[admin(body)](AshAdmin.Domain.html#admin/1)

[default\_resource\_page(domain)](AshAdmin.Domain.html#default_resource_page/1)

[name(domain)](AshAdmin.Domain.html#name/1)

[resource\_group\_labels(domain)](AshAdmin.Domain.html#resource_group_labels/1)

[show?(domain)](AshAdmin.Domain.html#show?/1)

[show\_resources(domain)](AshAdmin.Domain.html#show_resources/1)

# [](AshAdmin.Domain.html#functions)Functions

[](AshAdmin.Domain.html#admin/1)

# admin(body)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/domain.ex#L36)(macro)

[](AshAdmin.Domain.html#default_resource_page/1)

# default\_resource\_page(domain)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/domain.ex#L56)

[](AshAdmin.Domain.html#name/1)

# name(domain)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/domain.ex#L44)

[](AshAdmin.Domain.html#resource_group_labels/1)

# resource\_group\_labels(domain)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/domain.ex#L60)

[](AshAdmin.Domain.html#show?/1)

# show?(domain)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/domain.ex#L48)

[](AshAdmin.Domain.html#show_resources/1)

# show\_resources(domain)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/domain.ex#L52)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/errors/not_found.ex#L1 "View Source") AshAdmin.Errors.NotFound exception (ash\_admin v0.12.6)

# [](AshAdmin.Errors.NotFound.html#summary)Summary

## [Functions](AshAdmin.Errors.NotFound.html#functions)

[message(error)](AshAdmin.Errors.NotFound.html#message/1)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

# [](AshAdmin.Errors.NotFound.html#functions)Functions

[](AshAdmin.Errors.NotFound.html#message/1)

# message(error)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/errors/not_found.ex#L4)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/gettext.ex#L1 "View Source") AshAdmin.Gettext (ash\_admin v0.12.6)

A module providing Internationalization with a gettext-based API.

By using [Gettext](../gettext.html), your module gains a set of macros for translations, for example:

```
use Gettext, backend: AshAdmin.Gettext

# Simple translation
gettext("Here is the string to translate")

# Plural translation
ngettext("Here is the string to translate",
         "Here are the strings to translate",
         3)

# Domain-based translation
dgettext("errors", "Here is the error message to translate")
```

See the [Gettext Docs](../gettext.html) for detailed usage.

# [](AshAdmin.Gettext.html#summary)Summary

## [Functions](AshAdmin.Gettext.html#functions)

[handle\_missing\_bindings(exception, incomplete)](AshAdmin.Gettext.html#handle_missing_bindings/2)

Callback implementation for [`Gettext.Backend.handle_missing_bindings/2`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_bindings/2).

[handle\_missing\_plural\_translation(locale, domain, msgctxt, msgid, msgid\_plural, n, bindings)](AshAdmin.Gettext.html#handle_missing_plural_translation/7)

Callback implementation for [`Gettext.Backend.handle_missing_plural_translation/7`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_plural_translation/7).

[handle\_missing\_translation(locale, domain, msgctxt, msgid, bindings)](AshAdmin.Gettext.html#handle_missing_translation/5)

Callback implementation for [`Gettext.Backend.handle_missing_translation/5`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_translation/5).

# [](AshAdmin.Gettext.html#functions)Functions

[](AshAdmin.Gettext.html#handle_missing_bindings/2)

# handle\_missing\_bindings(exception, incomplete)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/gettext.ex#L23)

Callback implementation for [`Gettext.Backend.handle_missing_bindings/2`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_bindings/2).

[](AshAdmin.Gettext.html#handle_missing_plural_translation/7)

# handle\_missing\_plural\_translation(locale, domain, msgctxt, msgid, msgid\_plural, n, bindings)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/gettext.ex#L23)

Callback implementation for [`Gettext.Backend.handle_missing_plural_translation/7`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_plural_translation/7).

[](AshAdmin.Gettext.html#handle_missing_translation/5)

# handle\_missing\_translation(locale, domain, msgctxt, msgid, bindings)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/gettext.ex#L23)

Callback implementation for [`Gettext.Backend.handle_missing_translation/5`](../gettext/0.26.2/Gettext.Backend.html#c:handle_missing_translation/5).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/field.ex#L1 "View Source") AshAdmin.Resource.Field (ash\_admin v0.12.6)

The representation of a configured field in the admin UI.

# [](AshAdmin.Resource.Field.html#summary)Summary

## [Functions](AshAdmin.Resource.Field.html#functions)

[schema()](AshAdmin.Resource.Field.html#schema/0)

# [](AshAdmin.Resource.Field.html#functions)Functions

[](AshAdmin.Resource.Field.html#schema/0)

# schema()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/field.ex#L21)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L1 "View Source") AshAdmin.Resource (ash\_admin v0.12.6)

A resource extension to alter the behaviour of a resource in the admin UI.

# [](AshAdmin.Resource.html#summary)Summary

## [Functions](AshAdmin.Resource.html#functions)

[actor?(resource)](AshAdmin.Resource.html#actor?/1)

[admin(body)](AshAdmin.Resource.html#admin/1)

[create\_actions(resource)](AshAdmin.Resource.html#create_actions/1)

[destroy\_actions(resource)](AshAdmin.Resource.html#destroy_actions/1)

[field(resource, name)](AshAdmin.Resource.html#field/2)

[fields(resource)](AshAdmin.Resource.html#fields/1)

[format\_fields(resource)](AshAdmin.Resource.html#format_fields/1)

[generic\_actions(resource)](AshAdmin.Resource.html#generic_actions/1)

[name(resource)](AshAdmin.Resource.html#name/1)

[polymorphic?(resource, domains)](AshAdmin.Resource.html#polymorphic?/2)

[polymorphic\_actions(resource)](AshAdmin.Resource.html#polymorphic_actions/1)

[polymorphic\_tables(resource, domains)](AshAdmin.Resource.html#polymorphic_tables/2)

[read\_actions(resource)](AshAdmin.Resource.html#read_actions/1)

[relationship\_display\_fields(resource)](AshAdmin.Resource.html#relationship_display_fields/1)

[resource\_group(resource)](AshAdmin.Resource.html#resource_group/1)

[show\_action(resource)](AshAdmin.Resource.html#show_action/1)

[show\_calculations(resource)](AshAdmin.Resource.html#show_calculations/1)

[show\_sensitive\_fields(resource)](AshAdmin.Resource.html#show_sensitive_fields/1)

[table\_columns(resource)](AshAdmin.Resource.html#table_columns/1)

[update\_actions(resource)](AshAdmin.Resource.html#update_actions/1)

# [](AshAdmin.Resource.html#functions)Functions

[](AshAdmin.Resource.html#actor?/1)

# actor?(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L158)

[](AshAdmin.Resource.html#admin/1)

# admin(body)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L107)(macro)

[](AshAdmin.Resource.html#create_actions/1)

# create\_actions(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L172)

[](AshAdmin.Resource.html#destroy_actions/1)

# destroy\_actions(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L182)

[](AshAdmin.Resource.html#field/2)

# field(resource, name)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L206)

[](AshAdmin.Resource.html#fields/1)

# fields(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L202)

[](AshAdmin.Resource.html#format_fields/1)

# format\_fields(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L139)

[](AshAdmin.Resource.html#generic_actions/1)

# generic\_actions(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L167)

[](AshAdmin.Resource.html#name/1)

# name(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L143)

[](AshAdmin.Resource.html#polymorphic?/2)

# polymorphic?(resource, domains)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L115)

[](AshAdmin.Resource.html#polymorphic_actions/1)

# polymorphic\_actions(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L126)

[](AshAdmin.Resource.html#polymorphic_tables/2)

# polymorphic\_tables(resource, domains)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L119)

[](AshAdmin.Resource.html#read_actions/1)

# read\_actions(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L162)

[](AshAdmin.Resource.html#relationship_display_fields/1)

# relationship\_display\_fields(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L130)

[](AshAdmin.Resource.html#resource_group/1)

# resource\_group(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L150)

[](AshAdmin.Resource.html#show_action/1)

# show\_action(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L187)

[](AshAdmin.Resource.html#show_calculations/1)

# show\_calculations(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L198)

[](AshAdmin.Resource.html#show_sensitive_fields/1)

# show\_sensitive\_fields(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L154)

[](AshAdmin.Resource.html#table_columns/1)

# table\_columns(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L134)

[](AshAdmin.Resource.html#update_actions/1)

# update\_actions(resource)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/resource.ex#L177)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/transformers/validate_table_columns.ex#L1 "View Source") AshAdmin.Resource.Transformers.ValidateTableColumns (ash\_admin v0.12.6)

Validates that table columns are all either attributes, or `:one` cardinality relationships.

# [](AshAdmin.Resource.Transformers.ValidateTableColumns.html#summary)Summary

## [Functions](AshAdmin.Resource.Transformers.ValidateTableColumns.html#functions)

[after?(arg1)](AshAdmin.Resource.Transformers.ValidateTableColumns.html#after?/1)

Callback implementation for [`Spark.Dsl.Transformer.after?/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:after?/1).

[after\_compile?()](AshAdmin.Resource.Transformers.ValidateTableColumns.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:after_compile?/0).

[before?(\_)](AshAdmin.Resource.Transformers.ValidateTableColumns.html#before?/1)

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:before?/1).

[transform(dsl\_state)](AshAdmin.Resource.Transformers.ValidateTableColumns.html#transform/1)

Callback implementation for [`Spark.Dsl.Transformer.transform/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:transform/1).

# [](AshAdmin.Resource.Transformers.ValidateTableColumns.html#functions)Functions

[](AshAdmin.Resource.Transformers.ValidateTableColumns.html#after?/1)

# after?(arg1)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/transformers/validate_table_columns.ex#L37)

Callback implementation for [`Spark.Dsl.Transformer.after?/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:after?/1).

[](AshAdmin.Resource.Transformers.ValidateTableColumns.html#after_compile?/0)

# after\_compile?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/transformers/validate_table_columns.ex#L3)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:after_compile?/0).

[](AshAdmin.Resource.Transformers.ValidateTableColumns.html#before?/1)

# before?(\_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/transformers/validate_table_columns.ex#L3)

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:before?/1).

[](AshAdmin.Resource.Transformers.ValidateTableColumns.html#transform/1)

# transform(dsl\_state)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/resource/transformers/validate_table_columns.ex#L6)

Callback implementation for [`Spark.Dsl.Transformer.transform/1`](../spark/2.2.36/Spark.Dsl.Transformer.html#c:transform/1).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/router.ex#L1 "View Source") AshAdmin.Router (ash\_admin v0.12.6)

Provides LiveView routing for AshAdmin.

# [](AshAdmin.Router.html#summary)Summary

## [Functions](AshAdmin.Router.html#functions)

[admin\_browser\_pipeline(name \\\\ :browser)](AshAdmin.Router.html#admin_browser_pipeline/1)

Can be used to create a `:browser` pipeline easily if you don't have one.

[ash\_admin(path, opts \\\\ \[\])](AshAdmin.Router.html#ash_admin/2)

Defines an AshAdmin route. It expects the `path` the admin dashboard will be mounted at and a set of options.

# [](AshAdmin.Router.html#functions)Functions

[](AshAdmin.Router.html#admin_browser_pipeline/1)

# admin\_browser\_pipeline(name \\\\ :browser)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/router.ex#L27)(macro)

Can be used to create a `:browser` pipeline easily if you don't have one.

By default it is called `:browser`, but you can rename it by supplying an argument, for example:

```
defmodule MyAppWeb.Router do
  use Phoenix.Router

  import AshAdmin.Router
  admin_browser_pipeline :something

  scope "/" do

    pipe_through [:something]
    ash_admin "/admin"
  end
end
```

[](AshAdmin.Router.html#ash_admin/2)

# ash\_admin(path, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/ash_admin/router.ex#L79)(macro)

Defines an AshAdmin route. It expects the `path` the admin dashboard will be mounted at and a set of options.

## [](AshAdmin.Router.html#ash_admin/2-options)Options

- `:live_socket_path` - Optional override for the socket path. it must match the `socket "/live", Phoenix.LiveView.Socket` in your endpoint. Defaults to `/live`.
- `:on_mount` - Optional list of hooks to attach to the mount lifecycle.
- `:session` - Optional extra session map or MFA tuple to be merged with the session.
- `:csp_nonce_assign_key` - Optional assign key to find the CSP nonce value used for assets Supports either `atom()` or `%{optional(:img) => atom(), optional(:script) => atom(), optional(:style) => atom()}`  
  Defaults to `ash_admin-Ed55GFnX` for backwards compatibility.
- `:live_session_name` - Optional atom to name the `live_session`. Defaults to `:ash_admin`.

## [](AshAdmin.Router.html#ash_admin/2-examples)Examples

```
defmodule MyAppWeb.Router do
  use Phoenix.Router

  scope "/" do
    import AshAdmin.Router

    # Make sure you are piping through the browser pipeline
    # If you don't have one, see `admin_browser_pipeline/1`
    pipe_through [:browser]

    ash_admin "/admin"
    ash_admin "/csp/admin", live_session_name: :ash_admin_csp, csp_nonce_assign_key: :csp_nonce_value
  end
end
```

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L1 "View Source") Demo.Accounts.NestedEmbed (ash\_admin v0.12.6)

# [](Demo.Accounts.NestedEmbed.html#summary)Summary

## [Types](Demo.Accounts.NestedEmbed.html#types)

[t()](Demo.Accounts.NestedEmbed.html#t:t/0)

## [Functions](Demo.Accounts.NestedEmbed.html#functions)

[apply\_constraints\_array(term, constraints)](Demo.Accounts.NestedEmbed.html#apply_constraints_array/2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[cast\_input(input, constraints)](Demo.Accounts.NestedEmbed.html#cast_input/2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[cast\_stored(value, constraints)](Demo.Accounts.NestedEmbed.html#cast_stored/2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[check\_atomic(value, constraints)](Demo.Accounts.NestedEmbed.html#check_atomic/2)

[default\_short\_name()](Demo.Accounts.NestedEmbed.html#default_short_name/0)

[dump\_to\_native(value, \_)](Demo.Accounts.NestedEmbed.html#dump_to_native/2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[fetch\_key(map, atom)](Demo.Accounts.NestedEmbed.html#fetch_key/2)

[get\_rewrites(merged\_load, calculation, path, \_)](Demo.Accounts.NestedEmbed.html#get_rewrites/4)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[handle\_change(old\_value, new\_value, constraints)](Demo.Accounts.NestedEmbed.html#handle_change/3)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[handle\_change?()](Demo.Accounts.NestedEmbed.html#handle_change?/0)

[handle\_change\_array(old\_values, new\_values, constraints)](Demo.Accounts.NestedEmbed.html#handle_change_array/3)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[input(opts)](Demo.Accounts.NestedEmbed.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Accounts.NestedEmbed.html#input/2)

Same as [`input/1`](Demo.Accounts.NestedEmbed.html#input/1), except restricts the keys to values accepted by the action provided.

[load(record, load, constraints, context)](Demo.Accounts.NestedEmbed.html#load/4)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[prepare\_change(old\_value, new\_value, constraints)](Demo.Accounts.NestedEmbed.html#prepare_change/3)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[prepare\_change?()](Demo.Accounts.NestedEmbed.html#prepare_change?/0)

[prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)](Demo.Accounts.NestedEmbed.html#prepare_change_array/3)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[rewrite(value, rewrites, constraints)](Demo.Accounts.NestedEmbed.html#rewrite/3)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[storage\_type(\_)](Demo.Accounts.NestedEmbed.html#storage_type/1)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

# [](Demo.Accounts.NestedEmbed.html#types)Types

[](Demo.Accounts.NestedEmbed.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L1)

```
@type t() :: %Demo.Accounts.NestedEmbed{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  calculations: term(),
  tags: term()
}
```

# [](Demo.Accounts.NestedEmbed.html#functions)Functions

[](Demo.Accounts.NestedEmbed.html#apply_constraints_array/2)

# apply\_constraints\_array(term, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[](Demo.Accounts.NestedEmbed.html#cast_input/2)

# cast\_input(input, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[](Demo.Accounts.NestedEmbed.html#cast_stored/2)

# cast\_stored(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[](Demo.Accounts.NestedEmbed.html#check_atomic/2)

# check\_atomic(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

[](Demo.Accounts.NestedEmbed.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L1)

[](Demo.Accounts.NestedEmbed.html#dump_to_native/2)

# dump\_to\_native(value, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[](Demo.Accounts.NestedEmbed.html#fetch_key/2)

# fetch\_key(map, atom)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

[](Demo.Accounts.NestedEmbed.html#get_rewrites/4)

# get\_rewrites(merged\_load, calculation, path, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[](Demo.Accounts.NestedEmbed.html#handle_change/3)

# handle\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[](Demo.Accounts.NestedEmbed.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L1)

[](Demo.Accounts.NestedEmbed.html#handle_change_array/3)

# handle\_change\_array(old\_values, new\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[](Demo.Accounts.NestedEmbed.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Accounts.NestedEmbed.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Accounts.NestedEmbed.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Accounts.NestedEmbed.html#load/4)

# load(record, load, constraints, context)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[](Demo.Accounts.NestedEmbed.html#prepare_change/3)

# prepare\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[](Demo.Accounts.NestedEmbed.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L1)

[](Demo.Accounts.NestedEmbed.html#prepare_change_array/3)

# prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[](Demo.Accounts.NestedEmbed.html#rewrite/3)

# rewrite(value, rewrites, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[](Demo.Accounts.NestedEmbed.html#storage_type/1)

# storage\_type(\_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/nested_embed.ex#L2)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L1 "View Source") Demo.Accounts.NewUser (ash\_admin v0.12.6)

TODO

# [](Demo.Accounts.NewUser.html#summary)Summary

## [Types](Demo.Accounts.NewUser.html#types)

[t()](Demo.Accounts.NewUser.html#t:t/0)

## [Functions](Demo.Accounts.NewUser.html#functions)

[apply\_constraints\_array(term, constraints)](Demo.Accounts.NewUser.html#apply_constraints_array/2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[cast\_input(input, constraints)](Demo.Accounts.NewUser.html#cast_input/2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[cast\_stored(value, constraints)](Demo.Accounts.NewUser.html#cast_stored/2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[check\_atomic(value, constraints)](Demo.Accounts.NewUser.html#check_atomic/2)

[default\_short\_name()](Demo.Accounts.NewUser.html#default_short_name/0)

[dump\_to\_native(value, \_)](Demo.Accounts.NewUser.html#dump_to_native/2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[fetch\_key(map, atom)](Demo.Accounts.NewUser.html#fetch_key/2)

[get\_rewrites(merged\_load, calculation, path, \_)](Demo.Accounts.NewUser.html#get_rewrites/4)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[handle\_change(old\_value, new\_value, constraints)](Demo.Accounts.NewUser.html#handle_change/3)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[handle\_change?()](Demo.Accounts.NewUser.html#handle_change?/0)

[handle\_change\_array(old\_values, new\_values, constraints)](Demo.Accounts.NewUser.html#handle_change_array/3)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[input(opts)](Demo.Accounts.NewUser.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Accounts.NewUser.html#input/2)

Same as [`input/1`](Demo.Accounts.NewUser.html#input/1), except restricts the keys to values accepted by the action provided.

[load(record, load, constraints, context)](Demo.Accounts.NewUser.html#load/4)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[prepare\_change(old\_value, new\_value, constraints)](Demo.Accounts.NewUser.html#prepare_change/3)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[prepare\_change?()](Demo.Accounts.NewUser.html#prepare_change?/0)

[prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)](Demo.Accounts.NewUser.html#prepare_change_array/3)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[primary\_key\_matches?(left, right)](Demo.Accounts.NewUser.html#primary_key_matches?/2)

[rewrite(value, rewrites, constraints)](Demo.Accounts.NewUser.html#rewrite/3)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[storage\_type(\_)](Demo.Accounts.NewUser.html#storage_type/1)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

# [](Demo.Accounts.NewUser.html#types)Types

[](Demo.Accounts.NewUser.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L1)

```
@type t() :: %Demo.Accounts.NewUser{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  address: term(),
  aggregates: term(),
  calculations: term(),
  email: term(),
  first_name: term(),
  id: term(),
  last_name: term(),
  mobile: term()
}
```

# [](Demo.Accounts.NewUser.html#functions)Functions

[](Demo.Accounts.NewUser.html#apply_constraints_array/2)

# apply\_constraints\_array(term, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[](Demo.Accounts.NewUser.html#cast_input/2)

# cast\_input(input, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[](Demo.Accounts.NewUser.html#cast_stored/2)

# cast\_stored(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[](Demo.Accounts.NewUser.html#check_atomic/2)

# check\_atomic(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

[](Demo.Accounts.NewUser.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L1)

[](Demo.Accounts.NewUser.html#dump_to_native/2)

# dump\_to\_native(value, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[](Demo.Accounts.NewUser.html#fetch_key/2)

# fetch\_key(map, atom)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

[](Demo.Accounts.NewUser.html#get_rewrites/4)

# get\_rewrites(merged\_load, calculation, path, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[](Demo.Accounts.NewUser.html#handle_change/3)

# handle\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[](Demo.Accounts.NewUser.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L1)

[](Demo.Accounts.NewUser.html#handle_change_array/3)

# handle\_change\_array(old\_values, new\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[](Demo.Accounts.NewUser.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Accounts.NewUser.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Accounts.NewUser.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Accounts.NewUser.html#load/4)

# load(record, load, constraints, context)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[](Demo.Accounts.NewUser.html#prepare_change/3)

# prepare\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[](Demo.Accounts.NewUser.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L1)

[](Demo.Accounts.NewUser.html#prepare_change_array/3)

# prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[](Demo.Accounts.NewUser.html#primary_key_matches?/2)

# primary\_key\_matches?(left, right)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L1)

[](Demo.Accounts.NewUser.html#rewrite/3)

# rewrite(value, rewrites, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[](Demo.Accounts.NewUser.html#storage_type/1)

# storage\_type(\_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/new_user.ex#L5)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L1 "View Source") Demo.Accounts.Profile (ash\_admin v0.12.6)

# [](Demo.Accounts.Profile.html#summary)Summary

## [Types](Demo.Accounts.Profile.html#types)

[t()](Demo.Accounts.Profile.html#t:t/0)

## [Functions](Demo.Accounts.Profile.html#functions)

[apply\_constraints\_array(term, constraints)](Demo.Accounts.Profile.html#apply_constraints_array/2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[cast\_input(input, constraints)](Demo.Accounts.Profile.html#cast_input/2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[cast\_stored(value, constraints)](Demo.Accounts.Profile.html#cast_stored/2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[check\_atomic(value, constraints)](Demo.Accounts.Profile.html#check_atomic/2)

[default\_short\_name()](Demo.Accounts.Profile.html#default_short_name/0)

[dump\_to\_native(value, \_)](Demo.Accounts.Profile.html#dump_to_native/2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[fetch\_key(map, atom)](Demo.Accounts.Profile.html#fetch_key/2)

[get\_rewrites(merged\_load, calculation, path, \_)](Demo.Accounts.Profile.html#get_rewrites/4)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[handle\_change(old\_value, new\_value, constraints)](Demo.Accounts.Profile.html#handle_change/3)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[handle\_change?()](Demo.Accounts.Profile.html#handle_change?/0)

[handle\_change\_array(old\_values, new\_values, constraints)](Demo.Accounts.Profile.html#handle_change_array/3)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[input(opts)](Demo.Accounts.Profile.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Accounts.Profile.html#input/2)

Same as [`input/1`](Demo.Accounts.Profile.html#input/1), except restricts the keys to values accepted by the action provided.

[load(record, load, constraints, context)](Demo.Accounts.Profile.html#load/4)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[prepare\_change(old\_value, new\_value, constraints)](Demo.Accounts.Profile.html#prepare_change/3)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[prepare\_change?()](Demo.Accounts.Profile.html#prepare_change?/0)

[prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)](Demo.Accounts.Profile.html#prepare_change_array/3)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[rewrite(value, rewrites, constraints)](Demo.Accounts.Profile.html#rewrite/3)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[storage\_type(\_)](Demo.Accounts.Profile.html#storage_type/1)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

# [](Demo.Accounts.Profile.html#types)Types

[](Demo.Accounts.Profile.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L1)

```
@type t() :: %Demo.Accounts.Profile{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  bio: term(),
  calculations: term(),
  history: term(),
  metadata: term(),
  nested_embed: term(),
  tags: term()
}
```

# [](Demo.Accounts.Profile.html#functions)Functions

[](Demo.Accounts.Profile.html#apply_constraints_array/2)

# apply\_constraints\_array(term, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[](Demo.Accounts.Profile.html#cast_input/2)

# cast\_input(input, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[](Demo.Accounts.Profile.html#cast_stored/2)

# cast\_stored(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[](Demo.Accounts.Profile.html#check_atomic/2)

# check\_atomic(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

[](Demo.Accounts.Profile.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L1)

[](Demo.Accounts.Profile.html#dump_to_native/2)

# dump\_to\_native(value, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[](Demo.Accounts.Profile.html#fetch_key/2)

# fetch\_key(map, atom)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

[](Demo.Accounts.Profile.html#get_rewrites/4)

# get\_rewrites(merged\_load, calculation, path, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[](Demo.Accounts.Profile.html#handle_change/3)

# handle\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[](Demo.Accounts.Profile.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L1)

[](Demo.Accounts.Profile.html#handle_change_array/3)

# handle\_change\_array(old\_values, new\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[](Demo.Accounts.Profile.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Accounts.Profile.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Accounts.Profile.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Accounts.Profile.html#load/4)

# load(record, load, constraints, context)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[](Demo.Accounts.Profile.html#prepare_change/3)

# prepare\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[](Demo.Accounts.Profile.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L1)

[](Demo.Accounts.Profile.html#prepare_change_array/3)

# prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[](Demo.Accounts.Profile.html#rewrite/3)

# rewrite(value, rewrites, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[](Demo.Accounts.Profile.html#storage_type/1)

# storage\_type(\_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/profile.ex#L2)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/user.ex#L1 "View Source") Demo.Accounts.User (ash\_admin v0.12.6)

# [](Demo.Accounts.User.html#summary)Summary

## [Types](Demo.Accounts.User.html#types)

[t()](Demo.Accounts.User.html#t:t/0)

## [Functions](Demo.Accounts.User.html#functions)

[default\_short\_name()](Demo.Accounts.User.html#default_short_name/0)

[input(opts)](Demo.Accounts.User.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Accounts.User.html#input/2)

Same as [`input/1`](Demo.Accounts.User.html#input/1), except restricts the keys to values accepted by the action provided.

[primary\_key\_matches?(left, right)](Demo.Accounts.User.html#primary_key_matches?/2)

# [](Demo.Accounts.User.html#types)Types

[](Demo.Accounts.User.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/user.ex#L1)

```
@type t() :: %Demo.Accounts.User{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  admin: term(),
  aggregates: term(),
  alternate_profiles: term(),
  api_key: term(),
  calculations: term(),
  date_of_birth: term(),
  first_name: term(),
  full_name: term(),
  id: term(),
  inserted_at: term(),
  is_super_admin?: term(),
  last_name: term(),
  metadata: term(),
  multi_arguments: term(),
  nested_embed: term(),
  org: term(),
  profile: term(),
  representative: term(),
  tags: term(),
  type: term(),
  types: term(),
  updated_at: term()
}
```

# [](Demo.Accounts.User.html#functions)Functions

[](Demo.Accounts.User.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/user.ex#L1)

[](Demo.Accounts.User.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/user.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Accounts.User.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/user.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Accounts.User.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Accounts.User.html#primary_key_matches?/2)

# primary\_key\_matches?(left, right)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/resources/user.ex#L1)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/calculations/concat.ex#L1 "View Source") Demo.Calculations.Concat (ash\_admin v0.12.6)

# [](Demo.Calculations.Concat.html#summary)Summary

## [Functions](Demo.Calculations.Concat.html#functions)

[describe(opts)](Demo.Calculations.Concat.html#describe/1)

Callback implementation for [`Ash.Resource.Calculation.describe/1`](../ash/3.4.54/Ash.Resource.Calculation.html#c:describe/1).

[has\_calculate?()](Demo.Calculations.Concat.html#has_calculate?/0)

[has\_expression?()](Demo.Calculations.Concat.html#has_expression?/0)

Callback implementation for [`Ash.Resource.Calculation.has_expression?/0`](../ash/3.4.54/Ash.Resource.Calculation.html#c:has_expression?/0).

[strict\_loads?()](Demo.Calculations.Concat.html#strict_loads?/0)

Callback implementation for [`Ash.Resource.Calculation.strict_loads?/0`](../ash/3.4.54/Ash.Resource.Calculation.html#c:strict_loads?/0).

# [](Demo.Calculations.Concat.html#functions)Functions

[](Demo.Calculations.Concat.html#describe/1)

# describe(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/calculations/concat.ex#L2)

Callback implementation for [`Ash.Resource.Calculation.describe/1`](../ash/3.4.54/Ash.Resource.Calculation.html#c:describe/1).

[](Demo.Calculations.Concat.html#has_calculate?/0)

# has\_calculate?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/calculations/concat.ex#L1)

[](Demo.Calculations.Concat.html#has_expression?/0)

# has\_expression?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/calculations/concat.ex#L1)

Callback implementation for [`Ash.Resource.Calculation.has_expression?/0`](../ash/3.4.54/Ash.Resource.Calculation.html#c:has_expression?/0).

[](Demo.Calculations.Concat.html#strict_loads?/0)

# strict\_loads?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/accounts/calculations/concat.ex#L1)

Callback implementation for [`Ash.Resource.Calculation.strict_loads?/0`](../ash/3.4.54/Ash.Resource.Calculation.html#c:strict_loads?/0).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L1 "View Source") Demo.Repo (ash\_admin v0.12.6)

# [](Demo.Repo.html#summary)Summary

## [Functions](Demo.Repo.html#functions)

[aggregate(queryable, aggregate, opts \\\\ \[\])](Demo.Repo.html#aggregate/3)

Callback implementation for [`Ecto.Repo.aggregate/3`](../ecto/3.12.5/Ecto.Repo.html#c:aggregate/3).

[aggregate(queryable, aggregate, field, opts)](Demo.Repo.html#aggregate/4)

Callback implementation for [`Ecto.Repo.aggregate/4`](../ecto/3.12.5/Ecto.Repo.html#c:aggregate/4).

[all(queryable, opts \\\\ \[\])](Demo.Repo.html#all/2)

Callback implementation for [`Ecto.Repo.all/2`](../ecto/3.12.5/Ecto.Repo.html#c:all/2).

[all\_tenants()](Demo.Repo.html#all_tenants/0)

Callback implementation for [`AshPostgres.Repo.all_tenants/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:all_tenants/0).

[checked\_out?()](Demo.Repo.html#checked_out?/0)

Callback implementation for [`Ecto.Repo.checked_out?/0`](../ecto/3.12.5/Ecto.Repo.html#c:checked_out?/0).

[checkout(fun, opts \\\\ \[\])](Demo.Repo.html#checkout/2)

Callback implementation for [`Ecto.Repo.checkout/2`](../ecto/3.12.5/Ecto.Repo.html#c:checkout/2).

[child\_spec(opts)](Demo.Repo.html#child_spec/1)

[config()](Demo.Repo.html#config/0)

Callback implementation for [`Ecto.Repo.config/0`](../ecto/3.12.5/Ecto.Repo.html#c:config/0).

[create?()](Demo.Repo.html#create?/0)

Callback implementation for [`AshPostgres.Repo.create?/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:create?/0).

[default\_options(operation)](Demo.Repo.html#default_options/1)

Callback implementation for [`Ecto.Repo.default_options/1`](../ecto/3.12.5/Ecto.Repo.html#c:default_options/1).

[default\_prefix()](Demo.Repo.html#default_prefix/0)

Callback implementation for [`AshPostgres.Repo.default_prefix/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:default_prefix/0).

[delete(struct, opts \\\\ \[\])](Demo.Repo.html#delete/2)

Callback implementation for [`Ecto.Repo.delete/2`](../ecto/3.12.5/Ecto.Repo.html#c:delete/2).

[delete!(struct, opts \\\\ \[\])](Demo.Repo.html#delete!/2)

Callback implementation for [`Ecto.Repo.delete!/2`](../ecto/3.12.5/Ecto.Repo.html#c:delete!/2).

[delete\_all(queryable, opts \\\\ \[\])](Demo.Repo.html#delete_all/2)

Callback implementation for [`Ecto.Repo.delete_all/2`](../ecto/3.12.5/Ecto.Repo.html#c:delete_all/2).

[disconnect\_all(interval, opts \\\\ \[\])](Demo.Repo.html#disconnect_all/2)

A convenience function for SQL-based repositories that forces all connections in the pool to disconnect within the given interval.

[drop?()](Demo.Repo.html#drop?/0)

Callback implementation for [`AshPostgres.Repo.drop?/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:drop?/0).

[exists?(queryable, opts \\\\ \[\])](Demo.Repo.html#exists?/2)

Callback implementation for [`Ecto.Repo.exists?/2`](../ecto/3.12.5/Ecto.Repo.html#c:exists?/2).

[explain(operation, queryable, opts \\\\ \[\])](Demo.Repo.html#explain/3)

A convenience function for SQL-based repositories that executes an EXPLAIN statement or similar depending on the adapter to obtain statistics for the given query.

[from\_ecto(other)](Demo.Repo.html#from_ecto/1)

[get(queryable, id, opts \\\\ \[\])](Demo.Repo.html#get/3)

Callback implementation for [`Ecto.Repo.get/3`](../ecto/3.12.5/Ecto.Repo.html#c:get/3).

[get!(queryable, id, opts \\\\ \[\])](Demo.Repo.html#get!/3)

Callback implementation for [`Ecto.Repo.get!/3`](../ecto/3.12.5/Ecto.Repo.html#c:get!/3).

[get\_by(queryable, clauses, opts \\\\ \[\])](Demo.Repo.html#get_by/3)

Callback implementation for [`Ecto.Repo.get_by/3`](../ecto/3.12.5/Ecto.Repo.html#c:get_by/3).

[get\_by!(queryable, clauses, opts \\\\ \[\])](Demo.Repo.html#get_by!/3)

Callback implementation for [`Ecto.Repo.get_by!/3`](../ecto/3.12.5/Ecto.Repo.html#c:get_by!/3).

[get\_dynamic\_repo()](Demo.Repo.html#get_dynamic_repo/0)

Callback implementation for [`Ecto.Repo.get_dynamic_repo/0`](../ecto/3.12.5/Ecto.Repo.html#c:get_dynamic_repo/0).

[in\_transaction?()](Demo.Repo.html#in_transaction?/0)

Callback implementation for [`Ecto.Repo.in_transaction?/0`](../ecto/3.12.5/Ecto.Repo.html#c:in_transaction?/0).

[init(type, config)](Demo.Repo.html#init/2)

Callback implementation for [`Ecto.Repo.init/2`](../ecto/3.12.5/Ecto.Repo.html#c:init/2).

[insert(struct, opts \\\\ \[\])](Demo.Repo.html#insert/2)

Callback implementation for [`Ecto.Repo.insert/2`](../ecto/3.12.5/Ecto.Repo.html#c:insert/2).

[insert!(struct, opts \\\\ \[\])](Demo.Repo.html#insert!/2)

Callback implementation for [`Ecto.Repo.insert!/2`](../ecto/3.12.5/Ecto.Repo.html#c:insert!/2).

[insert\_all(schema\_or\_source, entries, opts \\\\ \[\])](Demo.Repo.html#insert_all/3)

Callback implementation for [`Ecto.Repo.insert_all/3`](../ecto/3.12.5/Ecto.Repo.html#c:insert_all/3).

[insert\_or\_update(changeset, opts \\\\ \[\])](Demo.Repo.html#insert_or_update/2)

Callback implementation for [`Ecto.Repo.insert_or_update/2`](../ecto/3.12.5/Ecto.Repo.html#c:insert_or_update/2).

[insert\_or\_update!(changeset, opts \\\\ \[\])](Demo.Repo.html#insert_or_update!/2)

Callback implementation for [`Ecto.Repo.insert_or_update!/2`](../ecto/3.12.5/Ecto.Repo.html#c:insert_or_update!/2).

[installed\_extensions()](Demo.Repo.html#installed_extensions/0)

Callback implementation for [`AshPostgres.Repo.installed_extensions/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:installed_extensions/0).

[load(schema\_or\_types, data)](Demo.Repo.html#load/2)

Callback implementation for [`Ecto.Repo.load/2`](../ecto/3.12.5/Ecto.Repo.html#c:load/2).

[migrations\_path()](Demo.Repo.html#migrations_path/0)

Callback implementation for [`AshPostgres.Repo.migrations_path/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:migrations_path/0).

[min\_pg\_version()](Demo.Repo.html#min_pg_version/0)

Callback implementation for [`AshPostgres.Repo.min_pg_version/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:min_pg_version/0).

[on\_transaction\_begin(reason)](Demo.Repo.html#on_transaction_begin/1)

Callback implementation for [`AshPostgres.Repo.on_transaction_begin/1`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:on_transaction_begin/1).

[one(queryable, opts \\\\ \[\])](Demo.Repo.html#one/2)

Callback implementation for [`Ecto.Repo.one/2`](../ecto/3.12.5/Ecto.Repo.html#c:one/2).

[one!(queryable, opts \\\\ \[\])](Demo.Repo.html#one!/2)

Callback implementation for [`Ecto.Repo.one!/2`](../ecto/3.12.5/Ecto.Repo.html#c:one!/2).

[override\_migration\_type(type)](Demo.Repo.html#override_migration_type/1)

Callback implementation for [`AshPostgres.Repo.override_migration_type/1`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:override_migration_type/1).

[prefer\_transaction?()](Demo.Repo.html#prefer_transaction?/0)

Callback implementation for [`AshPostgres.Repo.prefer_transaction?/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:prefer_transaction?/0).

[prefer\_transaction\_for\_atomic\_updates?()](Demo.Repo.html#prefer_transaction_for_atomic_updates?/0)

Callback implementation for [`AshPostgres.Repo.prefer_transaction_for_atomic_updates?/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:prefer_transaction_for_atomic_updates?/0).

[preload(struct\_or\_structs\_or\_nil, preloads, opts \\\\ \[\])](Demo.Repo.html#preload/3)

Callback implementation for [`Ecto.Repo.preload/3`](../ecto/3.12.5/Ecto.Repo.html#c:preload/3).

[prepare\_query(operation, query, opts)](Demo.Repo.html#prepare_query/3)

Callback implementation for [`Ecto.Repo.prepare_query/3`](../ecto/3.12.5/Ecto.Repo.html#c:prepare_query/3).

[put\_dynamic\_repo(dynamic)](Demo.Repo.html#put_dynamic_repo/1)

Callback implementation for [`Ecto.Repo.put_dynamic_repo/1`](../ecto/3.12.5/Ecto.Repo.html#c:put_dynamic_repo/1).

[query(sql, params \\\\ \[\], opts \\\\ \[\])](Demo.Repo.html#query/3)

A convenience function for SQL-based repositories that executes the given query.

[query!(sql, params \\\\ \[\], opts \\\\ \[\])](Demo.Repo.html#query!/3)

A convenience function for SQL-based repositories that executes the given query.

[query\_many(sql, params \\\\ \[\], opts \\\\ \[\])](Demo.Repo.html#query_many/3)

A convenience function for SQL-based repositories that executes the given multi-result query.

[query\_many!(sql, params \\\\ \[\], opts \\\\ \[\])](Demo.Repo.html#query_many!/3)

A convenience function for SQL-based repositories that executes the given multi-result query.

[reload(queryable, opts \\\\ \[\])](Demo.Repo.html#reload/2)

Callback implementation for [`Ecto.Repo.reload/2`](../ecto/3.12.5/Ecto.Repo.html#c:reload/2).

[reload!(queryable, opts \\\\ \[\])](Demo.Repo.html#reload!/2)

Callback implementation for [`Ecto.Repo.reload!/2`](../ecto/3.12.5/Ecto.Repo.html#c:reload!/2).

[rollback(value)](Demo.Repo.html#rollback/1)

Callback implementation for [`Ecto.Repo.rollback/1`](../ecto/3.12.5/Ecto.Repo.html#c:rollback/1).

[start\_link(opts \\\\ \[\])](Demo.Repo.html#start_link/1)

Callback implementation for [`Ecto.Repo.start_link/1`](../ecto/3.12.5/Ecto.Repo.html#c:start_link/1).

[stop(timeout \\\\ 5000)](Demo.Repo.html#stop/1)

Callback implementation for [`Ecto.Repo.stop/1`](../ecto/3.12.5/Ecto.Repo.html#c:stop/1).

[stream(queryable, opts \\\\ \[\])](Demo.Repo.html#stream/2)

Callback implementation for [`Ecto.Repo.stream/2`](../ecto/3.12.5/Ecto.Repo.html#c:stream/2).

[tenant\_migrations\_path()](Demo.Repo.html#tenant_migrations_path/0)

Callback implementation for [`AshPostgres.Repo.tenant_migrations_path/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:tenant_migrations_path/0).

[to\_ecto(value)](Demo.Repo.html#to_ecto/1)

[to\_sql(operation, queryable)](Demo.Repo.html#to_sql/2)

A convenience function for SQL-based repositories that translates the given query to SQL.

[transaction(fun\_or\_multi, opts \\\\ \[\])](Demo.Repo.html#transaction/2)

Callback implementation for [`Ecto.Repo.transaction/2`](../ecto/3.12.5/Ecto.Repo.html#c:transaction/2).

[transaction!(fun)](Demo.Repo.html#transaction!/1)

[update(struct, opts \\\\ \[\])](Demo.Repo.html#update/2)

Callback implementation for [`Ecto.Repo.update/2`](../ecto/3.12.5/Ecto.Repo.html#c:update/2).

[update!(struct, opts \\\\ \[\])](Demo.Repo.html#update!/2)

Callback implementation for [`Ecto.Repo.update!/2`](../ecto/3.12.5/Ecto.Repo.html#c:update!/2).

[update\_all(queryable, updates, opts \\\\ \[\])](Demo.Repo.html#update_all/3)

Callback implementation for [`Ecto.Repo.update_all/3`](../ecto/3.12.5/Ecto.Repo.html#c:update_all/3).

# [](Demo.Repo.html#functions)Functions

[](Demo.Repo.html#aggregate/3)

# aggregate(queryable, aggregate, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.aggregate/3`](../ecto/3.12.5/Ecto.Repo.html#c:aggregate/3).

[](Demo.Repo.html#aggregate/4)

# aggregate(queryable, aggregate, field, opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.aggregate/4`](../ecto/3.12.5/Ecto.Repo.html#c:aggregate/4).

[](Demo.Repo.html#all/2)

# all(queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.all/2`](../ecto/3.12.5/Ecto.Repo.html#c:all/2).

[](Demo.Repo.html#all_tenants/0)

# all\_tenants()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.all_tenants/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:all_tenants/0).

[](Demo.Repo.html#checked_out?/0)

# checked\_out?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.checked_out?/0`](../ecto/3.12.5/Ecto.Repo.html#c:checked_out?/0).

[](Demo.Repo.html#checkout/2)

# checkout(fun, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.checkout/2`](../ecto/3.12.5/Ecto.Repo.html#c:checkout/2).

[](Demo.Repo.html#child_spec/1)

# child\_spec(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

[](Demo.Repo.html#config/0)

# config()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.config/0`](../ecto/3.12.5/Ecto.Repo.html#c:config/0).

[](Demo.Repo.html#create?/0)

# create?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.create?/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:create?/0).

[](Demo.Repo.html#default_options/1)

# default\_options(operation)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.default_options/1`](../ecto/3.12.5/Ecto.Repo.html#c:default_options/1).

[](Demo.Repo.html#default_prefix/0)

# default\_prefix()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.default_prefix/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:default_prefix/0).

[](Demo.Repo.html#delete/2)

# delete(struct, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.delete/2`](../ecto/3.12.5/Ecto.Repo.html#c:delete/2).

[](Demo.Repo.html#delete!/2)

# delete!(struct, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.delete!/2`](../ecto/3.12.5/Ecto.Repo.html#c:delete!/2).

[](Demo.Repo.html#delete_all/2)

# delete\_all(queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.delete_all/2`](../ecto/3.12.5/Ecto.Repo.html#c:delete_all/2).

[](Demo.Repo.html#disconnect_all/2)

# disconnect\_all(interval, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L1)

A convenience function for SQL-based repositories that forces all connections in the pool to disconnect within the given interval.

See [`Ecto.Adapters.SQL.disconnect_all/3`](../ecto_sql/3.12.1/Ecto.Adapters.SQL.html#disconnect_all/3) for more information.

[](Demo.Repo.html#drop?/0)

# drop?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.drop?/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:drop?/0).

[](Demo.Repo.html#exists?/2)

# exists?(queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.exists?/2`](../ecto/3.12.5/Ecto.Repo.html#c:exists?/2).

[](Demo.Repo.html#explain/3)

# explain(operation, queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L1)

A convenience function for SQL-based repositories that executes an EXPLAIN statement or similar depending on the adapter to obtain statistics for the given query.

See [`Ecto.Adapters.SQL.explain/4`](../ecto_sql/3.12.1/Ecto.Adapters.SQL.html#explain/4) for more information.

[](Demo.Repo.html#from_ecto/1)

# from\_ecto(other)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

[](Demo.Repo.html#get/3)

# get(queryable, id, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.get/3`](../ecto/3.12.5/Ecto.Repo.html#c:get/3).

[](Demo.Repo.html#get!/3)

# get!(queryable, id, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.get!/3`](../ecto/3.12.5/Ecto.Repo.html#c:get!/3).

[](Demo.Repo.html#get_by/3)

# get\_by(queryable, clauses, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.get_by/3`](../ecto/3.12.5/Ecto.Repo.html#c:get_by/3).

[](Demo.Repo.html#get_by!/3)

# get\_by!(queryable, clauses, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.get_by!/3`](../ecto/3.12.5/Ecto.Repo.html#c:get_by!/3).

[](Demo.Repo.html#get_dynamic_repo/0)

# get\_dynamic\_repo()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.get_dynamic_repo/0`](../ecto/3.12.5/Ecto.Repo.html#c:get_dynamic_repo/0).

[](Demo.Repo.html#in_transaction?/0)

# in\_transaction?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.in_transaction?/0`](../ecto/3.12.5/Ecto.Repo.html#c:in_transaction?/0).

[](Demo.Repo.html#init/2)

# init(type, config)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.init/2`](../ecto/3.12.5/Ecto.Repo.html#c:init/2).

[](Demo.Repo.html#insert/2)

# insert(struct, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.insert/2`](../ecto/3.12.5/Ecto.Repo.html#c:insert/2).

[](Demo.Repo.html#insert!/2)

# insert!(struct, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.insert!/2`](../ecto/3.12.5/Ecto.Repo.html#c:insert!/2).

[](Demo.Repo.html#insert_all/3)

# insert\_all(schema\_or\_source, entries, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.insert_all/3`](../ecto/3.12.5/Ecto.Repo.html#c:insert_all/3).

[](Demo.Repo.html#insert_or_update/2)

# insert\_or\_update(changeset, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.insert_or_update/2`](../ecto/3.12.5/Ecto.Repo.html#c:insert_or_update/2).

[](Demo.Repo.html#insert_or_update!/2)

# insert\_or\_update!(changeset, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.insert_or_update!/2`](../ecto/3.12.5/Ecto.Repo.html#c:insert_or_update!/2).

[](Demo.Repo.html#installed_extensions/0)

# installed\_extensions()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L8)

Callback implementation for [`AshPostgres.Repo.installed_extensions/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:installed_extensions/0).

[](Demo.Repo.html#load/2)

# load(schema\_or\_types, data)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.load/2`](../ecto/3.12.5/Ecto.Repo.html#c:load/2).

[](Demo.Repo.html#migrations_path/0)

# migrations\_path()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.migrations_path/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:migrations_path/0).

[](Demo.Repo.html#min_pg_version/0)

# min\_pg\_version()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L4)

Callback implementation for [`AshPostgres.Repo.min_pg_version/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:min_pg_version/0).

[](Demo.Repo.html#on_transaction_begin/1)

# on\_transaction\_begin(reason)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.on_transaction_begin/1`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:on_transaction_begin/1).

[](Demo.Repo.html#one/2)

# one(queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.one/2`](../ecto/3.12.5/Ecto.Repo.html#c:one/2).

[](Demo.Repo.html#one!/2)

# one!(queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.one!/2`](../ecto/3.12.5/Ecto.Repo.html#c:one!/2).

[](Demo.Repo.html#override_migration_type/1)

# override\_migration\_type(type)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.override_migration_type/1`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:override_migration_type/1).

[](Demo.Repo.html#prefer_transaction?/0)

# prefer\_transaction?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.prefer_transaction?/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:prefer_transaction?/0).

[](Demo.Repo.html#prefer_transaction_for_atomic_updates?/0)

# prefer\_transaction\_for\_atomic\_updates?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.prefer_transaction_for_atomic_updates?/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:prefer_transaction_for_atomic_updates?/0).

[](Demo.Repo.html#preload/3)

# preload(struct\_or\_structs\_or\_nil, preloads, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.preload/3`](../ecto/3.12.5/Ecto.Repo.html#c:preload/3).

[](Demo.Repo.html#prepare_query/3)

# prepare\_query(operation, query, opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.prepare_query/3`](../ecto/3.12.5/Ecto.Repo.html#c:prepare_query/3).

[](Demo.Repo.html#put_dynamic_repo/1)

# put\_dynamic\_repo(dynamic)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.put_dynamic_repo/1`](../ecto/3.12.5/Ecto.Repo.html#c:put_dynamic_repo/1).

[](Demo.Repo.html#query/3)

# query(sql, params \\\\ \[], opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L1)

A convenience function for SQL-based repositories that executes the given query.

See [`Ecto.Adapters.SQL.query/4`](../ecto_sql/3.12.1/Ecto.Adapters.SQL.html#query/4) for more information.

[](Demo.Repo.html#query!/3)

# query!(sql, params \\\\ \[], opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L1)

A convenience function for SQL-based repositories that executes the given query.

See [`Ecto.Adapters.SQL.query!/4`](../ecto_sql/3.12.1/Ecto.Adapters.SQL.html#query!/4) for more information.

[](Demo.Repo.html#query_many/3)

# query\_many(sql, params \\\\ \[], opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L1)

A convenience function for SQL-based repositories that executes the given multi-result query.

See [`Ecto.Adapters.SQL.query_many/4`](../ecto_sql/3.12.1/Ecto.Adapters.SQL.html#query_many/4) for more information.

[](Demo.Repo.html#query_many!/3)

# query\_many!(sql, params \\\\ \[], opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L1)

A convenience function for SQL-based repositories that executes the given multi-result query.

See [`Ecto.Adapters.SQL.query_many!/4`](../ecto_sql/3.12.1/Ecto.Adapters.SQL.html#query_many!/4) for more information.

[](Demo.Repo.html#reload/2)

# reload(queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.reload/2`](../ecto/3.12.5/Ecto.Repo.html#c:reload/2).

[](Demo.Repo.html#reload!/2)

# reload!(queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.reload!/2`](../ecto/3.12.5/Ecto.Repo.html#c:reload!/2).

[](Demo.Repo.html#rollback/1)

# rollback(value)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

```
@spec rollback(term()) :: no_return()
```

Callback implementation for [`Ecto.Repo.rollback/1`](../ecto/3.12.5/Ecto.Repo.html#c:rollback/1).

[](Demo.Repo.html#start_link/1)

# start\_link(opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.start_link/1`](../ecto/3.12.5/Ecto.Repo.html#c:start_link/1).

[](Demo.Repo.html#stop/1)

# stop(timeout \\\\ 5000)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.stop/1`](../ecto/3.12.5/Ecto.Repo.html#c:stop/1).

[](Demo.Repo.html#stream/2)

# stream(queryable, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.stream/2`](../ecto/3.12.5/Ecto.Repo.html#c:stream/2).

[](Demo.Repo.html#tenant_migrations_path/0)

# tenant\_migrations\_path()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`AshPostgres.Repo.tenant_migrations_path/0`](../ash_postgres/2.4.21/AshPostgres.Repo.html#c:tenant_migrations_path/0).

[](Demo.Repo.html#to_ecto/1)

# to\_ecto(value)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

[](Demo.Repo.html#to_sql/2)

# to\_sql(operation, queryable)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L1)

A convenience function for SQL-based repositories that translates the given query to SQL.

See [`Ecto.Adapters.SQL.to_sql/3`](../ecto_sql/3.12.1/Ecto.Adapters.SQL.html#to_sql/3) for more information.

[](Demo.Repo.html#transaction/2)

# transaction(fun\_or\_multi, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.transaction/2`](../ecto/3.12.5/Ecto.Repo.html#c:transaction/2).

[](Demo.Repo.html#transaction!/1)

# transaction!(fun)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

[](Demo.Repo.html#update/2)

# update(struct, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.update/2`](../ecto/3.12.5/Ecto.Repo.html#c:update/2).

[](Demo.Repo.html#update!/2)

# update!(struct, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.update!/2`](../ecto/3.12.5/Ecto.Repo.html#c:update!/2).

[](Demo.Repo.html#update_all/3)

# update\_all(queryable, updates, opts \\\\ \[])

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/repo.ex#L2)

Callback implementation for [`Ecto.Repo.update_all/3`](../ecto/3.12.5/Ecto.Repo.html#c:update_all/3).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/comment.ex#L1 "View Source") Demo.Tickets.Comment (ash\_admin v0.12.6)

# [](Demo.Tickets.Comment.html#summary)Summary

## [Types](Demo.Tickets.Comment.html#types)

[t()](Demo.Tickets.Comment.html#t:t/0)

## [Functions](Demo.Tickets.Comment.html#functions)

[default\_short\_name()](Demo.Tickets.Comment.html#default_short_name/0)

[input(opts)](Demo.Tickets.Comment.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Tickets.Comment.html#input/2)

Same as [`input/1`](Demo.Tickets.Comment.html#input/1), except restricts the keys to values accepted by the action provided.

[primary\_key\_matches?(left, right)](Demo.Tickets.Comment.html#primary_key_matches?/2)

# [](Demo.Tickets.Comment.html#types)Types

[](Demo.Tickets.Comment.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/comment.ex#L1)

```
@type t() :: %Demo.Tickets.Comment{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  calculations: term(),
  comment: term(),
  commenting_customer: term(),
  commenting_customer_id: term(),
  commenting_representative: term(),
  commenting_representative_id: term(),
  id: term(),
  resource_id: term()
}
```

# [](Demo.Tickets.Comment.html#functions)Functions

[](Demo.Tickets.Comment.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/comment.ex#L1)

[](Demo.Tickets.Comment.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/comment.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Tickets.Comment.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/comment.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Tickets.Comment.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Tickets.Comment.html#primary_key_matches?/2)

# primary\_key\_matches?(left, right)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/comment.ex#L1)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/customer.ex#L1 "View Source") Demo.Tickets.Customer (ash\_admin v0.12.6)

# [](Demo.Tickets.Customer.html#summary)Summary

## [Types](Demo.Tickets.Customer.html#types)

[t()](Demo.Tickets.Customer.html#t:t/0)

## [Functions](Demo.Tickets.Customer.html#functions)

[default\_short\_name()](Demo.Tickets.Customer.html#default_short_name/0)

[input(opts)](Demo.Tickets.Customer.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Tickets.Customer.html#input/2)

Same as [`input/1`](Demo.Tickets.Customer.html#input/1), except restricts the keys to values accepted by the action provided.

[primary\_key\_matches?(left, right)](Demo.Tickets.Customer.html#primary_key_matches?/2)

# [](Demo.Tickets.Customer.html#types)Types

[](Demo.Tickets.Customer.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/customer.ex#L1)

```
@type t() :: %Demo.Tickets.Customer{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  calculations: term(),
  first_name: term(),
  id: term(),
  last_name: term(),
  reported_tickets: term(),
  representative: term()
}
```

# [](Demo.Tickets.Customer.html#functions)Functions

[](Demo.Tickets.Customer.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/customer.ex#L1)

[](Demo.Tickets.Customer.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/customer.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Tickets.Customer.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/customer.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Tickets.Customer.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Tickets.Customer.html#primary_key_matches?/2)

# primary\_key\_matches?(left, right)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/customer.ex#L1)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/organization.ex#L1 "View Source") Demo.Tickets.Organization (ash\_admin v0.12.6)

# [](Demo.Tickets.Organization.html#summary)Summary

## [Types](Demo.Tickets.Organization.html#types)

[t()](Demo.Tickets.Organization.html#t:t/0)

## [Functions](Demo.Tickets.Organization.html#functions)

[default\_short\_name()](Demo.Tickets.Organization.html#default_short_name/0)

[input(opts)](Demo.Tickets.Organization.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Tickets.Organization.html#input/2)

Same as [`input/1`](Demo.Tickets.Organization.html#input/1), except restricts the keys to values accepted by the action provided.

[primary\_key\_matches?(left, right)](Demo.Tickets.Organization.html#primary_key_matches?/2)

# [](Demo.Tickets.Organization.html#types)Types

[](Demo.Tickets.Organization.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/organization.ex#L1)

```
@type t() :: %Demo.Tickets.Organization{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  calculations: term(),
  id: term(),
  name: term(),
  tickets: term()
}
```

# [](Demo.Tickets.Organization.html#functions)Functions

[](Demo.Tickets.Organization.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/organization.ex#L1)

[](Demo.Tickets.Organization.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/organization.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Tickets.Organization.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/organization.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Tickets.Organization.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Tickets.Organization.html#primary_key_matches?/2)

# primary\_key\_matches?(left, right)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/organization.ex#L1)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/representative.ex#L1 "View Source") Demo.Tickets.Representative (ash\_admin v0.12.6)

# [](Demo.Tickets.Representative.html#summary)Summary

## [Types](Demo.Tickets.Representative.html#types)

[t()](Demo.Tickets.Representative.html#t:t/0)

## [Functions](Demo.Tickets.Representative.html#functions)

[default\_short\_name()](Demo.Tickets.Representative.html#default_short_name/0)

[input(opts)](Demo.Tickets.Representative.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Tickets.Representative.html#input/2)

Same as [`input/1`](Demo.Tickets.Representative.html#input/1), except restricts the keys to values accepted by the action provided.

[primary\_key\_matches?(left, right)](Demo.Tickets.Representative.html#primary_key_matches?/2)

# [](Demo.Tickets.Representative.html#types)Types

[](Demo.Tickets.Representative.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/representative.ex#L1)

```
@type t() :: %Demo.Tickets.Representative{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  assigned_tickets: term(),
  calculations: term(),
  comments: term(),
  first_name: term(),
  full_name: term(),
  id: term(),
  last_name: term(),
  open_ticket_count: term(),
  representative: term()
}
```

# [](Demo.Tickets.Representative.html#functions)Functions

[](Demo.Tickets.Representative.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/representative.ex#L1)

[](Demo.Tickets.Representative.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/representative.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Tickets.Representative.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/representative.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Tickets.Representative.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Tickets.Representative.html#primary_key_matches?/2)

# primary\_key\_matches?(left, right)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/representative.ex#L1)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/ticket.ex#L1 "View Source") Demo.Tickets.Ticket (ash\_admin v0.12.6)

# [](Demo.Tickets.Ticket.html#summary)Summary

## [Types](Demo.Tickets.Ticket.html#types)

[t()](Demo.Tickets.Ticket.html#t:t/0)

## [Functions](Demo.Tickets.Ticket.html#functions)

[default\_short\_name()](Demo.Tickets.Ticket.html#default_short_name/0)

[input(opts)](Demo.Tickets.Ticket.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Tickets.Ticket.html#input/2)

Same as [`input/1`](Demo.Tickets.Ticket.html#input/1), except restricts the keys to values accepted by the action provided.

[primary\_key\_matches?(left, right)](Demo.Tickets.Ticket.html#primary_key_matches?/2)

# [](Demo.Tickets.Ticket.html#types)Types

[](Demo.Tickets.Ticket.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/ticket.ex#L1)

```
@type t() :: %Demo.Tickets.Ticket{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  calculations: term(),
  comments: term(),
  description: term(),
  destination_links: term(),
  destination_links_join_assoc: term(),
  id: term(),
  inserted_at: term(),
  metadata: term(),
  metadatas: term(),
  organization: term(),
  organization_id: term(),
  reporter: term(),
  reporter_id: term(),
  reporter_name: term(),
  representative: term(),
  representative_id: term(),
  response: term(),
  source_links: term(),
  source_links_join_assoc: term(),
  status: term(),
  subject: term(),
  updated_at: term()
}
```

# [](Demo.Tickets.Ticket.html#functions)Functions

[](Demo.Tickets.Ticket.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/ticket.ex#L1)

[](Demo.Tickets.Ticket.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/ticket.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Tickets.Ticket.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/ticket.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Tickets.Ticket.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Tickets.Ticket.html#primary_key_matches?/2)

# primary\_key\_matches?(left, right)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/ticket.ex#L1)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket_link.ex#L1 "View Source") Demo.Tickets.TicketLink (ash\_admin v0.12.6)

# [](Demo.Tickets.TicketLink.html#summary)Summary

## [Types](Demo.Tickets.TicketLink.html#types)

[t()](Demo.Tickets.TicketLink.html#t:t/0)

## [Functions](Demo.Tickets.TicketLink.html#functions)

[default\_short\_name()](Demo.Tickets.TicketLink.html#default_short_name/0)

[input(opts)](Demo.Tickets.TicketLink.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Tickets.TicketLink.html#input/2)

Same as [`input/1`](Demo.Tickets.TicketLink.html#input/1), except restricts the keys to values accepted by the action provided.

[primary\_key\_matches?(left, right)](Demo.Tickets.TicketLink.html#primary_key_matches?/2)

# [](Demo.Tickets.TicketLink.html#types)Types

[](Demo.Tickets.TicketLink.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket_link.ex#L1)

```
@type t() :: %Demo.Tickets.TicketLink{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  calculations: term(),
  destination: term(),
  destination_id: term(),
  source: term(),
  source_id: term(),
  type: term()
}
```

# [](Demo.Tickets.TicketLink.html#functions)Functions

[](Demo.Tickets.TicketLink.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket_link.ex#L1)

[](Demo.Tickets.TicketLink.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket_link.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Tickets.TicketLink.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket_link.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Tickets.TicketLink.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Tickets.TicketLink.html#primary_key_matches?/2)

# primary\_key\_matches?(left, right)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket_link.ex#L1)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L1 "View Source") Demo.Tickets.Ticket.Types.BarMetadata (ash\_admin v0.12.6)

# [](Demo.Tickets.Ticket.Types.BarMetadata.html#summary)Summary

## [Types](Demo.Tickets.Ticket.Types.BarMetadata.html#types)

[t()](Demo.Tickets.Ticket.Types.BarMetadata.html#t:t/0)

## [Functions](Demo.Tickets.Ticket.Types.BarMetadata.html#functions)

[apply\_constraints\_array(term, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#apply_constraints_array/2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[cast\_input(input, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#cast_input/2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[cast\_stored(value, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#cast_stored/2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[check\_atomic(value, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#check_atomic/2)

[default\_short\_name()](Demo.Tickets.Ticket.Types.BarMetadata.html#default_short_name/0)

[dump\_to\_native(value, \_)](Demo.Tickets.Ticket.Types.BarMetadata.html#dump_to_native/2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[fetch\_key(map, atom)](Demo.Tickets.Ticket.Types.BarMetadata.html#fetch_key/2)

[get\_rewrites(merged\_load, calculation, path, \_)](Demo.Tickets.Ticket.Types.BarMetadata.html#get_rewrites/4)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[handle\_change(old\_value, new\_value, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#handle_change/3)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[handle\_change?()](Demo.Tickets.Ticket.Types.BarMetadata.html#handle_change?/0)

[handle\_change\_array(old\_values, new\_values, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#handle_change_array/3)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[input(opts)](Demo.Tickets.Ticket.Types.BarMetadata.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Tickets.Ticket.Types.BarMetadata.html#input/2)

Same as [`input/1`](Demo.Tickets.Ticket.Types.BarMetadata.html#input/1), except restricts the keys to values accepted by the action provided.

[load(record, load, constraints, context)](Demo.Tickets.Ticket.Types.BarMetadata.html#load/4)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[prepare\_change(old\_value, new\_value, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#prepare_change/3)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[prepare\_change?()](Demo.Tickets.Ticket.Types.BarMetadata.html#prepare_change?/0)

[prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#prepare_change_array/3)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[rewrite(value, rewrites, constraints)](Demo.Tickets.Ticket.Types.BarMetadata.html#rewrite/3)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[storage\_type(\_)](Demo.Tickets.Ticket.Types.BarMetadata.html#storage_type/1)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

# [](Demo.Tickets.Ticket.Types.BarMetadata.html#types)Types

[](Demo.Tickets.Ticket.Types.BarMetadata.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L1)

```
@type t() :: %Demo.Tickets.Ticket.Types.BarMetadata{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  bar: term(),
  calculations: term()
}
```

# [](Demo.Tickets.Ticket.Types.BarMetadata.html#functions)Functions

[](Demo.Tickets.Ticket.Types.BarMetadata.html#apply_constraints_array/2)

# apply\_constraints\_array(term, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#cast_input/2)

# cast\_input(input, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#cast_stored/2)

# cast\_stored(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#check_atomic/2)

# check\_atomic(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

[](Demo.Tickets.Ticket.Types.BarMetadata.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L1)

[](Demo.Tickets.Ticket.Types.BarMetadata.html#dump_to_native/2)

# dump\_to\_native(value, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#fetch_key/2)

# fetch\_key(map, atom)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

[](Demo.Tickets.Ticket.Types.BarMetadata.html#get_rewrites/4)

# get\_rewrites(merged\_load, calculation, path, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#handle_change/3)

# handle\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L1)

[](Demo.Tickets.Ticket.Types.BarMetadata.html#handle_change_array/3)

# handle\_change\_array(old\_values, new\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Tickets.Ticket.Types.BarMetadata.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Tickets.Ticket.Types.BarMetadata.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Tickets.Ticket.Types.BarMetadata.html#load/4)

# load(record, load, constraints, context)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#prepare_change/3)

# prepare\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L1)

[](Demo.Tickets.Ticket.Types.BarMetadata.html#prepare_change_array/3)

# prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#rewrite/3)

# rewrite(value, rewrites, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[](Demo.Tickets.Ticket.Types.BarMetadata.html#storage_type/1)

# storage\_type(\_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/bar_metadata.ex#L2)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L1 "View Source") Demo.Tickets.Ticket.Types.FooMetadata (ash\_admin v0.12.6)

# [](Demo.Tickets.Ticket.Types.FooMetadata.html#summary)Summary

## [Types](Demo.Tickets.Ticket.Types.FooMetadata.html#types)

[t()](Demo.Tickets.Ticket.Types.FooMetadata.html#t:t/0)

## [Functions](Demo.Tickets.Ticket.Types.FooMetadata.html#functions)

[apply\_constraints\_array(term, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#apply_constraints_array/2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[cast\_input(input, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#cast_input/2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[cast\_stored(value, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#cast_stored/2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[check\_atomic(value, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#check_atomic/2)

[default\_short\_name()](Demo.Tickets.Ticket.Types.FooMetadata.html#default_short_name/0)

[dump\_to\_native(value, \_)](Demo.Tickets.Ticket.Types.FooMetadata.html#dump_to_native/2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[fetch\_key(map, atom)](Demo.Tickets.Ticket.Types.FooMetadata.html#fetch_key/2)

[get\_rewrites(merged\_load, calculation, path, \_)](Demo.Tickets.Ticket.Types.FooMetadata.html#get_rewrites/4)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[handle\_change(old\_value, new\_value, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#handle_change/3)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[handle\_change?()](Demo.Tickets.Ticket.Types.FooMetadata.html#handle_change?/0)

[handle\_change\_array(old\_values, new\_values, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#handle_change_array/3)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[input(opts)](Demo.Tickets.Ticket.Types.FooMetadata.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](Demo.Tickets.Ticket.Types.FooMetadata.html#input/2)

Same as [`input/1`](Demo.Tickets.Ticket.Types.FooMetadata.html#input/1), except restricts the keys to values accepted by the action provided.

[load(record, load, constraints, context)](Demo.Tickets.Ticket.Types.FooMetadata.html#load/4)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[prepare\_change(old\_value, new\_value, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#prepare_change/3)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[prepare\_change?()](Demo.Tickets.Ticket.Types.FooMetadata.html#prepare_change?/0)

[prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#prepare_change_array/3)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[rewrite(value, rewrites, constraints)](Demo.Tickets.Ticket.Types.FooMetadata.html#rewrite/3)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[storage\_type(\_)](Demo.Tickets.Ticket.Types.FooMetadata.html#storage_type/1)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

# [](Demo.Tickets.Ticket.Types.FooMetadata.html#types)Types

[](Demo.Tickets.Ticket.Types.FooMetadata.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L1)

```
@type t() :: %Demo.Tickets.Ticket.Types.FooMetadata{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  calculations: term(),
  foo: term()
}
```

# [](Demo.Tickets.Ticket.Types.FooMetadata.html#functions)Functions

[](Demo.Tickets.Ticket.Types.FooMetadata.html#apply_constraints_array/2)

# apply\_constraints\_array(term, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.54/Ash.Type.html#c:apply_constraints_array/2).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#cast_input/2)

# cast\_input(input, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.54/Ash.Type.html#c:cast_input/2).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#cast_stored/2)

# cast\_stored(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.54/Ash.Type.html#c:cast_stored/2).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#check_atomic/2)

# check\_atomic(value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

[](Demo.Tickets.Ticket.Types.FooMetadata.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L1)

[](Demo.Tickets.Ticket.Types.FooMetadata.html#dump_to_native/2)

# dump\_to\_native(value, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.54/Ash.Type.html#c:dump_to_native/2).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#fetch_key/2)

# fetch\_key(map, atom)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

[](Demo.Tickets.Ticket.Types.FooMetadata.html#get_rewrites/4)

# get\_rewrites(merged\_load, calculation, path, \_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.54/Ash.Type.html#c:get_rewrites/4).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#handle_change/3)

# handle\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.54/Ash.Type.html#c:handle_change/3).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L1)

[](Demo.Tickets.Ticket.Types.FooMetadata.html#handle_change_array/3)

# handle\_change\_array(old\_values, new\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.54/Ash.Type.html#c:handle_change_array/3).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L1)

```
@spec input(values :: map() | Keyword.t()) :: map() | no_return()
```

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g

```
Resource
|> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
|> Ash.create()
```

[](Demo.Tickets.Ticket.Types.FooMetadata.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](Demo.Tickets.Ticket.Types.FooMetadata.html#input/1), except restricts the keys to values accepted by the action provided.

[](Demo.Tickets.Ticket.Types.FooMetadata.html#load/4)

# load(record, load, constraints, context)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.54/Ash.Type.html#c:load/4).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#prepare_change/3)

# prepare\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change/3).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L1)

[](Demo.Tickets.Ticket.Types.FooMetadata.html#prepare_change_array/3)

# prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.54/Ash.Type.html#c:prepare_change_array/3).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#rewrite/3)

# rewrite(value, rewrites, constraints)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.54/Ash.Type.html#c:rewrite/3).

[](Demo.Tickets.Ticket.Types.FooMetadata.html#storage_type/1)

# storage\_type(\_)

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/foo_metadata.ex#L2)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.54/Ash.Type.html#c:storage_type/1).

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/metadata.ex#L1 "View Source") Demo.Tickets.Ticket.Types.Metadata (ash\_admin v0.12.6)

# [](Demo.Tickets.Ticket.Types.Metadata.html#summary)Summary

## [Functions](Demo.Tickets.Ticket.Types.Metadata.html#functions)

[handle\_change?()](Demo.Tickets.Ticket.Types.Metadata.html#handle_change?/0)

[prepare\_change?()](Demo.Tickets.Ticket.Types.Metadata.html#prepare_change?/0)

# [](Demo.Tickets.Ticket.Types.Metadata.html#functions)Functions

[](Demo.Tickets.Ticket.Types.Metadata.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/metadata.ex#L1)

[](Demo.Tickets.Ticket.Types.Metadata.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_admin/blob/v0.12.6/dev/resources/tickets/resources/ticket/types/metadata.ex#L1)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/documentation/dsls/DSL-AshAdmin.Domain.md#L1 "View Source") DSL: AshAdmin.Domain

A domain extension to alter the behavior of a domain in the admin UI.

## [](dsl-ashadmin-domain.html#admin)admin

Configure the admin dashboard for a given domain.

### [](dsl-ashadmin-domain.html#options)Options

NameTypeDefaultDocs[`name`](dsl-ashadmin-domain.html#admin-name)`String.t`The name of the domain in the dashboard. Will be derived if not set.[`show?`](dsl-ashadmin-domain.html#admin-show?)`boolean``false`Whether or not this domain and its resources should be included in the admin dashboard.[`show_resources`](dsl-ashadmin-domain.html#admin-show_resources)`atom | list(atom)``:*`List of resources that should be included in the admin dashboard[`default_resource_page`](dsl-ashadmin-domain.html#admin-default_resource_page)`:schema | :primary_read``:schema`Set the default page for the resource to be the primary read action or the resource schema. Schema is the default for backwards compatibility, if a resource doesn't have a primary read action it will fallback to the schema view.[`resource_group_labels`](dsl-ashadmin-domain.html#admin-resource_group_labels)`keyword``[]`Humanized names for each resource group to appear in the admin area. These will be used as labels in the top navigation dropdown and will be shown sorted as given. If a key for a group does not appear in this mapping, the label will not be rendered.

[← Previous Page Contributing to AshAdmin](contributing-to-ash-admin.html)

[Next Page → DSL: AshAdmin.Resource](dsl-ashadmin-resource.html)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) ([current file](https://preview.hex.pm/preview/ash_admin/0.12.6/show/documentation/dsls/DSL-AshAdmin.Domain.md)) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/documentation/dsls/DSL-AshAdmin.Resource.md#L1 "View Source") DSL: AshAdmin.Resource

A resource extension to alter the behaviour of a resource in the admin UI.

## [](dsl-ashadmin-resource.html#admin)admin

Configure the admin dashboard for a given resource.

### [](dsl-ashadmin-resource.html#nested-dsls)Nested DSLs

- [form](dsl-ashadmin-resource.html#admin-form)
  
  - field

### [](dsl-ashadmin-resource.html#options)Options

NameTypeDefaultDocs[`name`](dsl-ashadmin-resource.html#admin-name)`String.t`The proper name to use when this resource appears in the admin interface.[`actor?`](dsl-ashadmin-resource.html#admin-actor?)`boolean`Whether or not this resource can be used as the actor for requests.[`show_action`](dsl-ashadmin-resource.html#admin-show_action)`atom`The action to use when linking to the resource/viewing a single record. Defaults to the primary read action.[`read_actions`](dsl-ashadmin-resource.html#admin-read_actions)`list(atom)`A list of read actions that can be used to show resource details. By default, all actions are included.[`generic_actions`](dsl-ashadmin-resource.html#admin-generic_actions)`list(atom)`A list of generic actions that can be used to show resource details. By default, all actions are included.[`create_actions`](dsl-ashadmin-resource.html#admin-create_actions)`list(atom)`A list of create actions that can create records. By default, all actions are included.[`update_actions`](dsl-ashadmin-resource.html#admin-update_actions)`list(atom)`A list of update actions that can be used to update records. By default, all actions are included.[`destroy_actions`](dsl-ashadmin-resource.html#admin-destroy_actions)`list(atom)`A list of destroy actions that can be used to destroy records. By default, all actions are included.[`polymorphic_tables`](dsl-ashadmin-resource.html#admin-polymorphic_tables)`list(String.t)`For resources that use ash\_postgres' polymorphism capabilities, you can provide a list of tables that should be available to select. These will be added to the list of derivable tables based on scanning all domains and resources provided to ash\_admin.[`polymorphic_actions`](dsl-ashadmin-resource.html#admin-polymorphic_actions)`list(atom)`For resources that use ash\_postgres' polymorphism capabilities, you can provide a list of actions that should require a table to be set. If this is not set, then *all* actions will require tables.[`table_columns`](dsl-ashadmin-resource.html#admin-table_columns)`list(atom)`The list of attributes to render on the table view.[`format_fields`](dsl-ashadmin-resource.html#admin-format_fields)`list(any)`The list of fields and their formats represented as a MFA. For example: `updated_at: {Timex, :format!, ["{0D}-{0M}-{YYYY} {h12}:{m} {AM}"]}`. Datatable pages format all given fields. Show and Update pages format given read-only fields of types [`Ash.Type.Date`](../ash/3.4.54/Ash.Type.Date.html), [`Ash.Type.DateTime`](../ash/3.4.54/Ash.Type.DateTime.html), [`Ash.Type.Time`](../ash/3.4.54/Ash.Type.Time.html), [`Ash.Type.NaiveDatetime`](../ash/3.4.54/Ash.Type.NaiveDatetime.html), [`Ash.Type.UtcDatetime`](../ash/3.4.54/Ash.Type.UtcDatetime.html) and [`Ash.Type.UtcDatetimeUsec`](../ash/3.4.54/Ash.Type.UtcDatetimeUsec.html).[`relationship_display_fields`](dsl-ashadmin-resource.html#admin-relationship_display_fields)`list(atom)`The list of attributes to render when this resource is shown as a relationship on another resource's datatable.[`resource_group`](dsl-ashadmin-resource.html#admin-resource_group)`atom`The group in the top resource dropdown that the resource appears in.[`show_sensitive_fields`](dsl-ashadmin-resource.html#admin-show_sensitive_fields)`list(atom)`The list of fields that should not be redacted in the admin UI even if they are marked as sensitive.[`show_calculations`](dsl-ashadmin-resource.html#admin-show_calculations)`list(atom)`A list of calculation that can be calculate when this resource is shown. By default, all calculations are included.

## [](dsl-ashadmin-resource.html#admin-form)admin.form

Configure the appearance of fields in admin forms.

### [](dsl-ashadmin-resource.html#nested-dsls-1)Nested DSLs

- [field](dsl-ashadmin-resource.html#admin-form-field)

## [](dsl-ashadmin-resource.html#admin-form-field)admin.form.field

```
field name
```

Declare non-default behavior for a specific attribute.

### [](dsl-ashadmin-resource.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashadmin-resource.html#admin-form-field-name)`atom`The name of the field to be modified

### [](dsl-ashadmin-resource.html#options-1)Options

NameTypeDefaultDocs[`type`](dsl-ashadmin-resource.html#admin-form-field-type)`:default | :long_text | :short_text | :markdown`The type of the value in the form. Use `default` if you are just specifying field order

### [](dsl-ashadmin-resource.html#introspection)Introspection

Target: [`AshAdmin.Resource.Field`](AshAdmin.Resource.Field.html)

[← Previous Page DSL: AshAdmin.Domain](dsl-ashadmin-domain.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) ([current file](https://preview.hex.pm/preview/ash_admin/0.12.6/show/documentation/dsls/DSL-AshAdmin.Resource.md)) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/documentation/tutorials/getting-started-with-ash-admin.md#L1 "View Source") Getting Started with AshAdmin

## [](getting-started-with-ash-admin.html#demo)Demo

[https://www.youtube.com/watch?v=aFMLz3cpQ8c](https://www.youtube.com/watch?v=aFMLz3cpQ8c)

## [](getting-started-with-ash-admin.html#installation)Installation

Add the `ash_admin` dependency to your `mix.exs` file:

```
{:ash_admin, "~> 0.11.4"}
```

## [](getting-started-with-ash-admin.html#setup)Setup

### [](getting-started-with-ash-admin.html#with-igniter-recommended)With Igniter (Recommended)

```
mix igniter.install ash_admin
```

### [](getting-started-with-ash-admin.html#manual)Manual

Modify your router to add AshAdmin at whatever path you'd like to serve it at.

```
defmodule MyAppWeb.Router do
  use Phoenix.Router

  import AshAdmin.Router

  # AshAdmin requires a Phoenix LiveView `:browser` pipeline
  # If you DO NOT have a `:browser` pipeline already, then AshAdmin has a `:browser` pipeline
  # Most applications will not need this:
  admin_browser_pipeline :browser

  # NOTE: `scope/2` here does not have a second argument.
  # If it looks like `scope "/", MyAppWeb`, create a *new* scope, don't copy the contents into your scope
  scope "/" do
    # Pipe it through your browser pipeline
    pipe_through [:browser]

    ash_admin "/admin"
  end
end
```

Add the [`AshAdmin.Domain`](AshAdmin.Domain.html) extension to each domain you want to show in the AshAdmin dashboard, and configure it to show. See [DSL: AshAdmin.Domain](dsl-ashadmin-domain.html) for more configuration options.

```
# In your Domain(s)
use Ash.Domain,
  extensions: [AshAdmin.Domain]

admin do
  show? true
end
```

All resources in each Domain will automatically be included in AshAdmin. To configure a resource, use the [`AshAdmin.Resource`](AshAdmin.Resource.html) extension, and then use the [DSL: AshAdmin.Resource](dsl-ashadmin-resource.html) configuration options. Specifically, if your app has an actor you will want to configure that.

```
# In your resource that acts as an actor (e.g. User)
use Ash.Resource,
  domain: YourDomain,
  extensions: [AshAdmin.Resource]

admin do
  actor? true
end
```

#### Warning

There is no builtin security for your AshAdmin (except your app's normal policies). In most cases you will want to secure your AshAdmin routes in some way to prevent them from being publicly accessible.

Start your project (usually by running [`mix phx.server`](../phoenix/1.7.18/Mix.Tasks.Phx.Server.html) in a terminal) and visit `/admin` in your browser (or the path you configured `ash_admin` with in your router).

### [](getting-started-with-ash-admin.html#content-security-policy)Content Security Policy

If your app specifies a content security policy header, eg. via

```
plug :put_secure_browser_headers, %{"content-security-policy" => "default-src 'self'"}
```

in your router, then the stylesheets and JavaScript used to power AshAdmin will be blocked by your browser.

To avoid this, you can add the default AshAdmin nonces to the `default-src` allowlist, ie.

```
plug :put_secure_browser_headers, %{"content-security-policy" => "default-src 'nonce-ash_admin-Ed55GFnX' 'self'"}
```

Alternatively you can supply your own nonces to the `ash_admin` route, by setting a `:csp_nonce_assign_key` in the options list, ie.

```
ash_admin "/admin", csp_nonce_assign_key: :csp_nonce_value
```

This will allow AshAdmin-generated inline CSS and JS blocks to execute normally.

## [](getting-started-with-ash-admin.html#troubleshooting)Troubleshooting

#### UI issues

If your admin UI is not responding as expected, check your browser's developer console for content-security-policy violations (see above).

#### Router issues

If you are seeing the following error `(UndefinedFunctionError) function YourAppWeb.AshAdmin.PageLive.__live__/0 is undefined (module YourAppWeb.AshAdmin.PageLive is not available)` it likely means that you added the ash admin route macro under a scope with a prefix. Make sure that you add it under a scope without any prefixes.

```
  # Incorrect (with YourAppWeb prefix)
  scope "/", YourAppWeb do
    pipe_through [:browser]

    ash_admin "/admin"
  end

  # Correct (without prefix)
  scope "/" do
    pipe_through [:browser]

    ash_admin "/admin"
  end
```

[← Previous Page README](readme.html)

[Next Page → Contributing to AshAdmin](contributing-to-ash-admin.html)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) ([current file](https://preview.hex.pm/preview/ash_admin/0.12.6/show/documentation/tutorials/getting-started-with-ash-admin.md)) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/lib/mix/tasks/ash_admin.install.ex#L26 "View Source") mix ash\_admin.install (ash\_admin v0.12.6)

Installs AshAdmin

## [](Mix.Tasks.AshAdmin.Install.html#module-example)Example

```
mix ash_admin.install --example arg
```

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_admin](assets/logo.png)](https://github.com/ash-project/ash_admin)

[ash\_admin](https://github.com/ash-project/ash_admin)

v0.12.6

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_admin

Settings

# [View Source](https://github.com/ash-project/ash_admin/blob/v0.12.6/README.md#L1 "View Source") README

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_admin/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_admin.svg)](https://hex.pm/packages/ash_admin) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_admin.html)

# AshAdmin

Welcome! This is a super-admin UI dashboard for [Ash Framework](../ash.html) applications, built with Phoenix LiveView.

If you are using Phoenix LiveView 1.0.0 release candidate, you will need to use the live\_view\_1.0 branch of this repo.

## [](readme.html#tutorials)Tutorials

- [Getting Started with AshAdmin](getting-started-with-ash-admin.html)

## [](readme.html#reference)Reference

- [AshAdmin.Domain DSL](dsl-ashadmin-domain.html)
- [AshAdmin.Resource DSL](dsl-ashadmin-resource.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Getting Started with AshAdmin](getting-started-with-ash-admin.html)

[Hex Package](https://hex.pm/packages/ash_admin/0.12.6) [Hex Preview](https://preview.hex.pm/preview/ash_admin/0.12.6) ([current file](https://preview.hex.pm/preview/ash_admin/0.12.6/show/README.md)) Search HexDocs [Download ePub version](ash_admin.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
