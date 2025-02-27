[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix "View Source") API Reference ash\_phoenix v2.1.14

## [](api-reference.html#modules)Modules

[AshPhoenix](AshPhoenix.html)

An extension to add form builders to the code interface.

[AshPhoenix.FilterForm](AshPhoenix.FilterForm.html)

A module to help you create complex forms that generate Ash filters.

[AshPhoenix.FilterForm.Arguments](AshPhoenix.FilterForm.Arguments.html)

Represents the arguments to a calculation being filtered on

[AshPhoenix.FilterForm.Predicate](AshPhoenix.FilterForm.Predicate.html)

Represents an individual predicate appearing in a filter form.

[AshPhoenix.Form](AshPhoenix.Form.html)

A module to allow you to fluidly use resources with Phoenix forms.

[AshPhoenix.Form.Auto](AshPhoenix.Form.Auto.html)

A tool to automatically generate available nested forms based on a resource and action.

[AshPhoenix.Form.InvalidPath](AshPhoenix.Form.InvalidPath.html)

Raised when an invalid path is used to find, update or remove a form

[AshPhoenix.Form.NoActionConfigured](AshPhoenix.Form.NoActionConfigured.html)

Raised when a form action should happen but no action of the appropriate type has been configured

[AshPhoenix.Form.NoDataLoaded](AshPhoenix.Form.NoDataLoaded.html)

Raised when a data needed to be used but the required data was not loaded

[AshPhoenix.Form.NoFormConfigured](AshPhoenix.Form.NoFormConfigured.html)

Raised when attempting to refer to a form but no nested form with that name was configured.

[AshPhoenix.Form.NoResourceConfigured](AshPhoenix.Form.NoResourceConfigured.html)

Raised when a form needed to be constructed but the resource for that form could not be determined

[AshPhoenix.Form.WrappedValue](AshPhoenix.Form.WrappedValue.html)

A sentinal value used when editing a union that has non-map values

[AshPhoenix.FormData.Error](AshPhoenix.FormData.Error.html)

A protocol for allowing errors to be rendered into a form.

[AshPhoenix.LiveView](AshPhoenix.LiveView.html)

Utilities for keeping Ash query results up to date in a LiveView.

[AshPhoenix.SubdomainPlug](AshPhoenix.SubdomainPlug.html)

This is a basic plug that loads the current tenant assign from a given value set on subdomain.

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_phoenix.gen.html](Mix.Tasks.AshPhoenix.Gen.Html.html)

This task renders .ex and .heex templates and copies them to specified directories.

[mix ash\_phoenix.gen.live](Mix.Tasks.AshPhoenix.Gen.Live.html)

Generates liveviews for a given domain and resource.

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/arguments.ex#L1 "View Source") AshPhoenix.FilterForm.Arguments (ash\_phoenix v2.1.14)

Represents the arguments to a calculation being filtered on

# [](AshPhoenix.FilterForm.Arguments.html#summary)Summary

## [Functions](AshPhoenix.FilterForm.Arguments.html#functions)

[errors(arguments, transform\_errors)](AshPhoenix.FilterForm.Arguments.html#errors/2)

[new(params, arguments)](AshPhoenix.FilterForm.Arguments.html#new/2)

[validate\_arguments(arguments, params)](AshPhoenix.FilterForm.Arguments.html#validate_arguments/2)

# [](AshPhoenix.FilterForm.Arguments.html#functions)Functions

[](AshPhoenix.FilterForm.Arguments.html#errors/2)

# errors(arguments, transform\_errors)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/arguments.ex#L56)

[](AshPhoenix.FilterForm.Arguments.html#new/2)

# new(params, arguments)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/arguments.ex#L6)

[](AshPhoenix.FilterForm.Arguments.html#validate_arguments/2)

# validate\_arguments(arguments, params)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/arguments.ex#L15)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L1 "View Source") AshPhoenix.FilterForm (ash\_phoenix v2.1.14)

A module to help you create complex forms that generate Ash filters.

```
# Create a FilterForm
filter_form = AshPhoenix.FilterForm.new(MyApp.Payroll.Employee)
```

FilterForm's comprise 2 concepts, predicates and groups. Predicates are the simple boolean expressions you can use to build a query (`name == "Joe"`), and groups can be used to group predicates and more groups together. Groups can apply `and` or `or` operators to its nested components.

```
# Add a predicate to the root of the form (which is itself a group)
filter_form = AshPhoenix.add_predicate(filter_form, :some_field, :eq, "Some Value")

# Add a group and another predicate to that group
{filter_form, group_id} = AshPhoenix.add_group(filter_form, operator: :or, return_id?: true)
filter_form = AshPhoenix.add_predicate(filter_form, :another, :eq, "Other", to: group_id)
```

[`validate/1`](AshPhoenix.FilterForm.html#validate/1) is used to merge the submitted form params into the filter form, and one of the provided filter functions to apply the filter as a query, or generate an expression map, depending on your requirements:

```
filter_form = AshPhoenix.validate(socket.assigns.filter_form, params)

# Generate a query and pass it to the Domain
query = AshPhoenix.FilterForm.filter!(MyApp.Payroll.Employee, filter_form)
filtered_employees = MyApp.Payroll.read!(query)

# Or use one of the other filter functions
AshPhoenix.FilterForm.to_filter_expression(filter_form)
AshPhoenix.FilterForm.to_filter_map(filter_form)
```

## [](AshPhoenix.FilterForm.html#module-liveview-example)LiveView Example

You can build a form and handle adding and removing nested groups and predicates with the following:

```
alias MyApp.Payroll.Employee

@impl true
def render(assigns) do
  ~H"""
  <.simple_form
    :let={filter_form}
    for={@filter_form}
    phx-change="filter_validate"
    phx-submit="filter_submit"
  >
    <.filter_form_component component={filter_form} />
    <:actions>
      <.button>Submit</.button>
    </:actions>
  </.simple_form>
  <.table id="employees" rows={@employees}>
    <:col :let={employee} label="Payroll ID"><%= employee.employee_id %></:col>
    <:col :let={employee} label="Name"><%= employee.name %></:col>
    <:col :let={employee} label="Position"><%= employee.position %></:col>
  </.table>
  """
end

attr :component, :map, required: true, doc: "Could be a FilterForm (group) or a Predicate"

defp filter_form_component(%{component: %{source: %AshPhoenix.FilterForm{}}} = assigns) do
  ~H"""
  <div class="border-gray-50 border-8 p-4 rounded-xl mt-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-row gap-2 items-center">Filter</div>
      <div class="flex flex-row gap-2 items-center">
        <.input type="select" field={@component[:operator]} options={["and", "or"]} />
        <.button phx-click="add_filter_group" phx-value-component-id={@component.source.id} type="button">
          Add Group
        </.button>
        <.button
          phx-click="add_filter_predicate"
          phx-value-component-id={@component.source.id}
          type="button"
        >
          Add Predicate
        </.button>
        <.button
          phx-click="remove_filter_component"
          phx-value-component-id={@component.source.id}
          type="button"
        >
          Remove Group
        </.button>
      </div>
    </div>
    <.inputs_for :let={component} field={@component[:components]}>
      <.filter_form_component component={component} />
    </.inputs_for>
  </div>
  """
end

defp filter_form_component(
       %{component: %{source: %AshPhoenix.FilterForm.Predicate{}}} = assigns
     ) do
  ~H"""
  <div class="flex flex-row gap-2 mt-4">
    <.input
      type="select"
      options={AshPhoenix.FilterForm.fields(Employee)}
      field={@component[:field]}
    />
    <.input
      type="select"
      options={AshPhoenix.FilterForm.predicates(Employee)}
      field={@component[:operator]}
    />
    <.input field={@component[:value]} />
    <.button
      phx-click="remove_filter_component"
      phx-value-component-id={@component.source.id}
      type="button"
    >
      Remove
    </.button>
  </div>
  """
end

@impl true
def mount(_params, _session, socket) do
  socket =
    socket
    |> assign(:filter_form, AshPhoenix.FilterForm.new(Employee))
    |> assign(:employees, Employee.read_all!())

  {:ok, socket}
end

@impl true
def handle_event("filter_validate", %{"filter" => params}, socket) do
  {:noreply,
   assign(socket,
     filter_form: AshPhoenix.FilterForm.validate(socket.assigns.filter_form, params)
   )}
end

def handle_event("filter_submit", %{"filter" => params}, socket) do
  filter_form = AshPhoenix.FilterForm.validate(socket.assigns.filter_form, params)

  case AshPhoenix.FilterForm.filter(Employee, filter_form) do
    {:ok, query} ->
      {:noreply,
       socket
       |> assign(:employees, Employee.read_all!(query: query))
       |> assign(:filter_form, filter_form)}

    {:error, filter_form} ->
      {:noreply, assign(socket, filter_form: filter_form)}
  end
end

def handle_event("remove_filter_component", %{"component-id" => component_id}, socket) do
  {:noreply,
   assign(socket,
     filter_form:
       AshPhoenix.FilterForm.remove_component(socket.assigns.filter_form, component_id)
   )}
end

def handle_event("add_filter_group", %{"component-id" => component_id}, socket) do
  {:noreply,
   assign(socket,
     filter_form: AshPhoenix.FilterForm.add_group(socket.assigns.filter_form, to: component_id)
   )}
end

def handle_event("add_filter_predicate", %{"component-id" => component_id}, socket) do
  {:noreply,
   assign(socket,
     filter_form:
       AshPhoenix.FilterForm.add_predicate(socket.assigns.filter_form, :name, :contains, nil,
         to: component_id
       )
   )}
end
```

# [](AshPhoenix.FilterForm.html#summary)Summary

## [Functions](AshPhoenix.FilterForm.html#functions)

[add\_group(form, opts \\\\ \[\])](AshPhoenix.FilterForm.html#add_group/2)

Add a group to the filter. A group can contain predicates and other groups, allowing you to build quite complex nested filters.

[add\_predicate(form, field, operator\_or\_function, value, opts \\\\ \[\])](AshPhoenix.FilterForm.html#add_predicate/5)

Add a predicate to the filter.

[errors(form, opts \\\\ \[\])](AshPhoenix.FilterForm.html#errors/2)

Returns a flat list of all errors on all predicates in the filter, made safe for display in a form.

[fields(resource)](AshPhoenix.FilterForm.html#fields/1)

Returns the list of available fields, which may be attributes, calculations, or aggregates.

[filter(query, form)](AshPhoenix.FilterForm.html#filter/2)

Converts the form into a filter, and filters the provided query or resource with that filter.

[filter!(query, form)](AshPhoenix.FilterForm.html#filter!/2)

Same as [`filter/2`](AshPhoenix.FilterForm.html#filter/2) but raises on errors.

[new(resource, opts \\\\ \[\])](AshPhoenix.FilterForm.html#new/2)

Create a new filter form.

[params\_for\_query(predicate)](AshPhoenix.FilterForm.html#params_for_query/1)

Returns the minimal set of params (at the moment just strips ids) for use in a query string.

[predicates(resource)](AshPhoenix.FilterForm.html#predicates/1)

Returns the list of available predicates for the given resource, which may be functions or operators.

[raw\_errors(predicate)](AshPhoenix.FilterForm.html#raw_errors/1)

Returns a flat list of all errors on all predicates in the filter, without transforming.

[remove\_component(form, group\_or\_predicate\_id)](AshPhoenix.FilterForm.html#remove_component/2)

Removes the group *or* predicate with the given id

[remove\_group(form, group\_id)](AshPhoenix.FilterForm.html#remove_group/2)

Remove the group with the given id

[remove\_predicate(form, id)](AshPhoenix.FilterForm.html#remove_predicate/2)

Remove the predicate with the given id

[to\_filter!(form)](AshPhoenix.FilterForm.html#to_filter!/1) deprecated

[to\_filter\_expression(form)](AshPhoenix.FilterForm.html#to_filter_expression/1)

Returns a filter expression that can be provided to Ash.Query.filter/2

[to\_filter\_expression!(form)](AshPhoenix.FilterForm.html#to_filter_expression!/1)

Same as [`to_filter_expression/1`](AshPhoenix.FilterForm.html#to_filter_expression/1) but raises on errors.

[to\_filter\_map(form)](AshPhoenix.FilterForm.html#to_filter_map/1)

Returns a filter map that can be provided to `Ash.Filter.parse`

[update\_predicate(form, id, func)](AshPhoenix.FilterForm.html#update_predicate/3)

Update the predicate with the given id

[validate(form, params \\\\ %{}, opts \\\\ \[\])](AshPhoenix.FilterForm.html#validate/3)

Updates the filter with the provided input and validates it.

# [](AshPhoenix.FilterForm.html#functions)Functions

[](AshPhoenix.FilterForm.html#add_group/2)

# add\_group(form, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L1124)

Add a group to the filter. A group can contain predicates and other groups, allowing you to build quite complex nested filters.

Options:

- `:to` ([`String.t/0`](../elixir/String.html#t:t/0)) - The nested group id to add the group to.
- `:operator` - The operator that the group should have internally. Valid values are :and, :or The default value is `:and`.
- `:return_id?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If set to `true`, the function returns `{form, predicate_id}` The default value is `false`.

[](AshPhoenix.FilterForm.html#add_predicate/5)

# add\_predicate(form, field, operator\_or\_function, value, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L961)

Add a predicate to the filter.

Options:

- `:to` ([`String.t/0`](../elixir/String.html#t:t/0)) - The group id to add the predicate to. If not set, will be added to the top level group.
- `:return_id?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If set to `true`, the function returns `{form, predicate_id}` The default value is `false`.
- `:path` - The relationship path to apply the predicate to

[](AshPhoenix.FilterForm.html#errors/2)

# errors(form, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L468)

Returns a flat list of all errors on all predicates in the filter, made safe for display in a form.

Only errors that implement the [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) protocol are displayed.

[](AshPhoenix.FilterForm.html#fields/1)

# fields(resource)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L929)

Returns the list of available fields, which may be attributes, calculations, or aggregates.

[](AshPhoenix.FilterForm.html#filter/2)

# filter(query, form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L623)

Converts the form into a filter, and filters the provided query or resource with that filter.

[](AshPhoenix.FilterForm.html#filter!/2)

# filter!(query, form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L636)

Same as [`filter/2`](AshPhoenix.FilterForm.html#filter/2) but raises on errors.

[](AshPhoenix.FilterForm.html#new/2)

# new(resource, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L251)

Create a new filter form.

Options:

- `:params` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Initial parameters to create the form with The default value is `%{}`.
- `:as` ([`String.t/0`](../elixir/String.html#t:t/0)) - Set the parameter name for the form. The default value is `"filter"`.
- `:transform_errors` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Allows for manual manipulation and transformation of errors.  
  If possible, try to implement [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the predicate and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`
- `:warn_on_unhandled_errors?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Whether or not to emit warning log on unhandled form errors The default value is `true`.
- `:remove_empty_groups?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If true (the default), then any time a group would be made empty by removing a group or predicate, it is removed instead.  
  An empty form can still be added, this only affects a group if its last component is removed. The default value is `false`.

[](AshPhoenix.FilterForm.html#params_for_query/1)

# params\_for\_query(predicate)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L849)

Returns the minimal set of params (at the moment just strips ids) for use in a query string.

[](AshPhoenix.FilterForm.html#predicates/1)

# predicates(resource)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L911)

Returns the list of available predicates for the given resource, which may be functions or operators.

[](AshPhoenix.FilterForm.html#raw_errors/1)

# raw\_errors(predicate)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L483)

Returns a flat list of all errors on all predicates in the filter, without transforming.

[](AshPhoenix.FilterForm.html#remove_component/2)

# remove\_component(form, group\_or\_predicate\_id)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L1187)

Removes the group *or* predicate with the given id

[](AshPhoenix.FilterForm.html#remove_group/2)

# remove\_group(form, group\_id)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L1166)

Remove the group with the given id

[](AshPhoenix.FilterForm.html#remove_predicate/2)

# remove\_predicate(form, id)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L1027)

Remove the predicate with the given id

[](AshPhoenix.FilterForm.html#to_filter!/1)

# to\_filter!(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L461)

This function is deprecated. Use to\_filter\_expression!/1 instead.

[](AshPhoenix.FilterForm.html#to_filter_expression/1)

# to\_filter\_expression(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L422)

Returns a filter expression that can be provided to Ash.Query.filter/2

To add this to a query, remember to use `^`, for example:

```
filter = AshPhoenix.FilterForm.to_filter_expression(form)

Ash.Query.filter(MyApp.Post, ^filter)
```

Alternatively, you can use the shorthand: [`filter/2`](AshPhoenix.FilterForm.html#filter/2) to apply the expression directly to a query.

[](AshPhoenix.FilterForm.html#to_filter_expression!/1)

# to\_filter\_expression!(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L442)

Same as [`to_filter_expression/1`](AshPhoenix.FilterForm.html#to_filter_expression/1) but raises on errors.

[](AshPhoenix.FilterForm.html#to_filter_map/1)

# to\_filter\_map(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L324)

Returns a filter map that can be provided to `Ash.Filter.parse`

This allows for things like saving a stored filter. Does not currently support parameterizing calculations or functions.

[](AshPhoenix.FilterForm.html#update_predicate/3)

# update\_predicate(form, id, func)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L1048)

Update the predicate with the given id

[](AshPhoenix.FilterForm.html#validate/3)

# validate(form, params \\\\ %{}, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/filter_form.ex#L295)

Updates the filter with the provided input and validates it.

At present, no validation actually occurs, but this will eventually be added.

Passing `reset_on_change?: false` into `opts` will prevent predicates to reset the `value` and `operator` fields to `nil` if the predicate `field` changes.

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/predicate.ex#L1 "View Source") AshPhoenix.FilterForm.Predicate (ash\_phoenix v2.1.14)

Represents an individual predicate appearing in a filter form.

Predicates are grouped up in an [`AshPhoenix.FilterForm`](AshPhoenix.FilterForm.html) to create boolean filter statements.

# [](AshPhoenix.FilterForm.Predicate.html#summary)Summary

## [Functions](AshPhoenix.FilterForm.Predicate.html#functions)

[errors(predicate, transform\_errors)](AshPhoenix.FilterForm.Predicate.html#errors/2)

# [](AshPhoenix.FilterForm.Predicate.html#functions)Functions

[](AshPhoenix.FilterForm.Predicate.html#errors/2)

# errors(predicate, transform\_errors)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/filter_form/predicate.ex#L23)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/auto.ex#L1 "View Source") AshPhoenix.Form.Auto (ash\_phoenix v2.1.14)

A tool to automatically generate available nested forms based on a resource and action.

To use this, specify `forms: [auto?: true]` when creating the form.

Keep in mind, you can always specify these manually when creating a form by simply specifying the `forms` option.

There are two things that this builds forms for:

1. Attributes/arguments who's type is an embedded resource.
2. Arguments that have a corresponding `change manage_relationship(..)` configured.

For more on relationships see the documentation for [`Ash.Changeset.manage_relationship/4`](../ash/3.4.55/Ash.Changeset.html#manage_relationship/4).

When building forms, you can switch on the action type and/or resource of the form, in order to have different fields depending on the form. For example, if you have a simple relationship called `:comments` with `on_match: :update` and `on_no_match: :create`, there are two types of forms that can be in `inputs_for(form, :comments)`.

In which case you may have something like this:

```
<%= for comment_form <- inputs_for(f, :comments) do %>
  <%= hidden_inputs_for(comment_form) %>
  <%= if comment_form.source.type == :create do %>
    <%= text_input comment_form, :text %>
    <%= text_input comment_form, :on_create_field %>
  <% else %>
    <%= text_input comment_form, :text %>
    <%= text_input comment_form, :on_update_field %>
  <% end %>

  <button phx-click="remove_form" phx-value-path="<%= comment_form.name %>">Remove Comment</button>
  <button phx-click="add_form" phx-value-path="<%= comment_form.name %>">Add Comment</button>
<% end %>
```

This also applies to adding forms of different types manually. For instance, if you had a "search" field to allow them to search for a record (e.g in a liveview), and you had an `on_lookup` read action, you could render a search form for that read action, and once they've selected a record, you could render the fields to update that record (in the case of `on_lookup: :relate_and_update` configurations).

## [](AshPhoenix.Form.Auto.html#module-options)Options

- `:relationship_fetcher` ([`term/0`](../elixir/typespecs.html#built-in-types)) - A two argument function that receives the parent data, the relationship to fetch. The default simply fetches the relationship value, and if it isn't loaded, it uses `[]` or `nil`.
- `:sparse_lists?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Sets all list type forms to `sparse?: true` by default. Has no effect on forms derived for embedded resources. The default value is `false`.
- `:include_non_map_types?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Creates form for non map or array of map type inputs The default value is `false`.

## [](AshPhoenix.Form.Auto.html#module-special-considerations)Special Considerations

### [](AshPhoenix.Form.Auto.html#module-on_lookup-relate_and_update)`on_lookup: :relate_and_update`

For `on_lookup: :relate_and_update` configurations, the "read" form for that relationship will use the appropriate read action. However, you may also want to include the relevant fields for the update that would subsequently occur. To that end, a special nested form called `:_update` is created, that uses an empty instance of that resource as the base of its changeset. This may require some manual manipulation of that data before rendering the relevant form because it assumes all the default values. To solve for this, if you are using liveview, you could actually look up the record using the input from the read action, and then use [`AshPhoenix.Form.update_form/3`](AshPhoenix.Form.html#update_form/3) to set that looked up record as the data of the `_update` form.

### [](AshPhoenix.Form.Auto.html#module-many-to-many-relationships)Many to Many Relationships

In the case that a manage\_change option points to a join relationship, that form is presented via a special nested form called `_join`. So the first form in `inputs_for(form, :relationship)` would be for the destination, and then inside of that you could say `inputs_for(nested_form, :_join)`. The parameters are merged together during submission.

# [](AshPhoenix.Form.Auto.html#summary)Summary

## [Functions](AshPhoenix.Form.Auto.html#functions)

[auto(resource, action, opts \\\\ \[\])](AshPhoenix.Form.Auto.html#auto/3)

[embedded(resource, action, auto\_opts)](AshPhoenix.Form.Auto.html#embedded/3)

[related(resource, action, auto\_opts)](AshPhoenix.Form.Auto.html#related/3)

[unions(resource, action, auto\_opts)](AshPhoenix.Form.Auto.html#unions/3)

# [](AshPhoenix.Form.Auto.html#functions)Functions

[](AshPhoenix.Form.Auto.html#auto/3)

# auto(resource, action, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/auto.ex#L88)

[](AshPhoenix.Form.Auto.html#embedded/3)

# embedded(resource, action, auto\_opts)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/auto.ex#L803)

[](AshPhoenix.Form.Auto.html#related/3)

# related(resource, action, auto\_opts)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/auto.ex#L362)

[](AshPhoenix.Form.Auto.html#unions/3)

# unions(resource, action, auto\_opts)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/auto.ex#L97)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form_data/error.ex#L1 "View Source") AshPhoenix.FormData.Error protocol (ash\_phoenix v2.1.14)

A protocol for allowing errors to be rendered into a form.

To implement, define a [`to_form_error/1`](AshPhoenix.FormData.Error.html#to_form_error/1) and return a single error or list of errors of the following shape:

`{:field_name, message, replacements}`

Replacements is a keyword list to allow for translations, by extracting out the constants like numbers from the message.

# [](AshPhoenix.FormData.Error.html#summary)Summary

## [Types](AshPhoenix.FormData.Error.html#types)

[t()](AshPhoenix.FormData.Error.html#t:t/0)

All the types that implement this protocol.

## [Functions](AshPhoenix.FormData.Error.html#functions)

[to\_form\_error(exception)](AshPhoenix.FormData.Error.html#to_form_error/1)

# [](AshPhoenix.FormData.Error.html#types)Types

[](AshPhoenix.FormData.Error.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form_data/error.ex#L1)

```
@type t() :: term()
```

All the types that implement this protocol.

# [](AshPhoenix.FormData.Error.html#functions)Functions

[](AshPhoenix.FormData.Error.html#to_form_error/1)

# to\_form\_error(exception)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form_data/error.ex#L12)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L1 "View Source") AshPhoenix.Form (ash\_phoenix v2.1.14)

A module to allow you to fluidly use resources with Phoenix forms.

### [](AshPhoenix.Form.html#module-life-cycle)Life cycle

The general workflow is, with either LiveView or Phoenix forms:

1. Create a form with [`AshPhoenix.Form`](AshPhoenix.Form.html)
2. Render the form with `Phoenix.Component.form` (or `CoreComponents.simple_form`), or, if using Surface, `<Form>`
3. To validate the form (e.g with `phx-change` for liveview), pass the submitted params to [`AshPhoenix.Form.validate/3`](AshPhoenix.Form.html#validate/3)
4. On form submission, pass the params to [`AshPhoenix.Form.submit/2`](AshPhoenix.Form.html#submit/2)
5. On success, use the result to redirect or assign. On failure, reassign the provided form.

The following keys exist on the form to show where in the lifecycle you are:

- `submitted_once?` - If the form has ever been submitted. Useful for not showing any errors on the first attempt to fill out a form.
- `just_submitted?` - If the form has just been submitted and *no validation* has happened since. Useful for things like triggering a UI effect that should stop when the form is modified again.
- `.changed?` - If something about the form is different than it originally was. Note that in some cases this can yield a false positive, specifically if a nested form is removed and then a new one is added with the exact same values.
- `.touched_forms` - A MapSet containing all keys in the form that have been modified. When submitting a form, only these keys are included in the parameters.

### [](AshPhoenix.Form.html#module-forms-in-the-code-interface)Forms in the code interface

Throughout this documentation you will see forms created with [`AshPhoenix.Form.for_create/3`](AshPhoenix.Form.html#for_create/3) and other functions like it. This is perfectly fine to do, however there is a way to use [`AshPhoenix.Form`](AshPhoenix.Form.html) in a way that adds clarity to its usage and makes it easier to find usage of each action. Code interfaces allow us to do this for standard action calls, i.e:

```
resources do
  resource MyApp.Accounts.User do
    define :register_with_password, args: [:email, :password]
    define :update_user, action: :update, args: [:email, :password]
  end
end
```

Adding the [`AshPhoenix`](AshPhoenix.html) extension to our domains and resources, like so:

```
use Ash.Domain,
  extensions: [AshPhoenix]
```

will cause another function to be generated for each definition, beginning with `form_to_`.

With this extension, the standard setup for forms looks something like this:

```
def render(assigns) do
  ~H"""
  <.form for={@form} phx-change="validate" phx-submit="submit">
    <.input field={@form[:email]} />
    <.input field={@form[:password]} />
    <.button type="submit" />
  </.form>
  """
end

def mount(_params, _session, socket) do
  # Here we call our new generated function to create the form
  {:ok, assign(socket, form: MyApp.Accounts.form_to_register_with_password())}
end

def handle_event(socket, "validate", %{"form" => params}) do
  form = AshPhoenix.Form.validate(socket.assigns.form, params)
  {:noreply, assign(socket, :form, form)}
end

def handle_event(socket, "submit", %{"form" => params}) do
  case AshPhoenix.Form.submit(socket.assigns.form, params: params) do
    {:ok, _user} ->
      socket =
        socket
        |> put_flash(:success, "User registered successfully")
        |> push_navigate(to: ~p"/")

      {:noreply, socket}

    {:error, form} ->
      socket =
        socket
        |> put_flash(:error, "Something went wrong")
        |> assign(:form, form)

      {:noreply, socket}
  end
end
```

## [](AshPhoenix.Form.html#module-working-with-related-or-embedded-data)Working with related or embedded data

See the [nested forms guide](nested-forms.html)

## [](AshPhoenix.Form.html#module-working-with-compound-types)Working with compound types

Compound types, such as `Ash.Money`, will need some extra work to make it work.

For instance, when working with the `Transfer` type in `AshDoubleEntry.Transfer`, it will have the `Ash.Money` type for `amount`. When rendering the forms, you should do as follows:

```
<.input
    name={@form[:amount].name <> "[amount]"}
    id={@form[:amount].id <> "_amount"}
    label="Amount"
    value={if(@form[:amount].value, do: @form[:amount].value.amount)}
  />
  <.input
    type="select"
    name={@form[:amount].name <> "[currency]"}
    id={@form[:amount].id <> "_currency"}
    options={[:USD, :HKD, :EUR]}
    label="Currency"
    value={if(@form[:amount].value, do: @form[:amount].value.currency)}
  />
```

The above will allow the fields to be used by the [`AshPhoenix.Form`](AshPhoenix.Form.html) when creating or updating a Transfer. You can follow the same style with other compound types.

# [](AshPhoenix.Form.html#summary)Summary

## [Types](AshPhoenix.Form.html#types)

[path()](AshPhoenix.Form.html#t:path/0)

[source()](AshPhoenix.Form.html#t:source/0)

[t()](AshPhoenix.Form.html#t:t/0)

## [Functions](AshPhoenix.Form.html#functions)

[add\_error(form, error, opts \\\\ \[\])](AshPhoenix.Form.html#add_error/3)

Adds an error to the source underlying the form.

[add\_form(form, path, opts \\\\ \[\])](AshPhoenix.Form.html#add_form/3)

Adds a new form at the provided path.

[arguments(form)](AshPhoenix.Form.html#arguments/1)

A utility to get the list of arguments the action underlying the form accepts

[ash\_errors(form, opts \\\\ \[\])](AshPhoenix.Form.html#ash_errors/2)

[attributes(form)](AshPhoenix.Form.html#attributes/1)

A utility to get the list of attributes the action underlying the form accepts

[can\_submit?(form)](AshPhoenix.Form.html#can_submit?/1)

[clear\_value(form, field\_or\_fields)](AshPhoenix.Form.html#clear_value/2)

Clears a given input's value on a form.

[ensure\_can\_submit!(form)](AshPhoenix.Form.html#ensure_can_submit!/1)

[errors(form, opts \\\\ \[\])](AshPhoenix.Form.html#errors/2)

Returns the errors on the form.

[for\_action(resource\_or\_data, action, opts \\\\ \[\])](AshPhoenix.Form.html#for_action/3)

Creates a form corresponding to any given action on a resource.

[for\_create(resource, action, opts \\\\ \[\])](AshPhoenix.Form.html#for_create/3)

Creates a form corresponding to a create action on a resource.

[for\_destroy(data, action, opts \\\\ \[\])](AshPhoenix.Form.html#for_destroy/3)

Creates a form corresponding to a destroy action on a record.

[for\_read(resource, action, opts \\\\ \[\])](AshPhoenix.Form.html#for_read/3)

Creates a form corresponding to a read action on a resource.

[for\_update(data, action, opts \\\\ \[\])](AshPhoenix.Form.html#for_update/3)

Creates a form corresponding to an update action on a record.

[get\_form(form, path)](AshPhoenix.Form.html#get_form/2)

Gets the form at the specified path

[has\_form?(form, path)](AshPhoenix.Form.html#has_form?/2)

Returns true if a given form path exists in the form

[hidden\_fields(form)](AshPhoenix.Form.html#hidden_fields/1)

Returns the hidden fields for a form as a keyword list

[ignore(form)](AshPhoenix.Form.html#ignore/1)

Toggles the form to be ignored or not ignored.

[ignored?(form)](AshPhoenix.Form.html#ignored?/1)

Returns true if the form is ignored

[merge\_options(form, opts)](AshPhoenix.Form.html#merge_options/2)

Merge the new options with the saved options on a form. See [`update_options/2`](AshPhoenix.Form.html#update_options/2) for more.

[params(form, opts \\\\ \[\])](AshPhoenix.Form.html#params/2)

Returns the parameters from the form that would be submitted to the action.

[parse\_path!(form, original\_path, opts \\\\ \[\])](AshPhoenix.Form.html#parse_path!/3)

A utility for parsing paths of nested forms in query encoded format.

[remove\_form(form, path, opts \\\\ \[\])](AshPhoenix.Form.html#remove_form/3)

Removes a form at the provided path.

[set\_data(form, data)](AshPhoenix.Form.html#set_data/2)

Sets the data of the form, in addition to the data of the underlying source, if applicable.

[sort\_forms(form, path, instruction)](AshPhoenix.Form.html#sort_forms/3)

Sorts nested forms at the given path.

[submit(form, opts \\\\ \[\])](AshPhoenix.Form.html#submit/2)

Submits the form.

[submit!(form, opts \\\\ \[\])](AshPhoenix.Form.html#submit!/2)

Same as [`submit/2`](AshPhoenix.Form.html#submit/2), but raises an error if the submission fails.

[touch(form, fields)](AshPhoenix.Form.html#touch/2)

Mark a field or fields as touched

[update\_form(form, path, func, opts \\\\ \[\])](AshPhoenix.Form.html#update_form/4)

Updates the form at the provided path using the given function.

[update\_forms\_at\_path(form, path, func, opts \\\\ \[\])](AshPhoenix.Form.html#update_forms_at_path/4)

Updates the list of forms matching a given path. Does not validate that the path points at a single form like [`update_form/4`](AshPhoenix.Form.html#update_form/4).

[update\_options(form, fun)](AshPhoenix.Form.html#update_options/2)

Update the saved options on a form.

[update\_params(form, func, validate\_opts \\\\ \[\])](AshPhoenix.Form.html#update_params/3)

Update the previous params provided to the form, and revalidate.

[validate(form, new\_params, opts \\\\ \[\])](AshPhoenix.Form.html#validate/3)

Validates the parameters against the form.

[value(form, field)](AshPhoenix.Form.html#value/2)

Gets the value for a given field in the form.

# [](AshPhoenix.Form.html#types)Types

[](AshPhoenix.Form.html#t:path/0)

# path()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L182)

```
@type path() :: String.t() | atom() | [String.t() | atom() | integer()]
```

[](AshPhoenix.Form.html#t:source/0)

# source()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L156)

```
@type source() :: Ash.Changeset.t() | Ash.Query.t() | Ash.Resource.record()
```

[](AshPhoenix.Form.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L158)

```
@type t() :: %AshPhoenix.Form{
  action: atom(),
  added?: term(),
  any_removed?: term(),
  changed?: term(),
  data: nil | Ash.Resource.record(),
  domain: term(),
  errors: boolean(),
  form_keys: Keyword.t(),
  forms: map(),
  id: term(),
  just_submitted?: boolean(),
  method: String.t(),
  name: term(),
  opts: Keyword.t(),
  original_data: term(),
  params: map(),
  prepare_params: term(),
  prepare_source: nil | (source() -> source()),
  raw_params: term(),
  resource: Ash.Resource.t(),
  source: source(),
  submit_errors: Keyword.t() | nil,
  submitted_once?: boolean(),
  touched_forms: term(),
  transform_errors:
    nil
    | (source(), error :: Ash.Error.t() ->
         [
           {field :: atom(), message :: String.t(),
            substituations :: Keyword.t()}
         ]),
  transform_params: nil | (map() -> term()),
  type: :create | :update | :destroy | :read,
  valid?: boolean(),
  warn_on_unhandled_errors?: term()
}
```

# [](AshPhoenix.Form.html#functions)Functions

[](AshPhoenix.Form.html#add_error/3)

# add\_error(form, error, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L3399)

Adds an error to the source underlying the form.

This can be used for adding errors from different sources to a form. Keep in mind, if they don't match a field on the form (typically extracted via the `field` key in the error), they won't be displayed by default. Ensure that the `errors` field of the form is set to `true` if you want the errors to be visible.

See [`Ash.Error.to_ash_error/3`](../ash/3.4.55/Ash.Error.html#to_ash_error/3) for more on supported values for `error`.

# Options

- `:path` - The path to add the error to. If the error(s) already have a path, don't specify a path yourself.

[](AshPhoenix.Form.html#add_form/3)

# add\_form(form, path, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L3455)

```
@spec add_form(t(), path(), Keyword.t()) :: t()
```

```
@spec add_form(Phoenix.HTML.Form.t(), path(), Keyword.t()) :: Phoenix.HTML.Form.t()
```

Adds a new form at the provided path.

Doing this requires that the form has a `create_action` and a `resource` configured.

`path` can be one of two things:

1. A list of atoms and integers that lead to a form in the `forms` option provided. `[:posts, 0, :comments]` to add a comment to the first post.
2. The html name of the form, e.g `form[posts][0][comments]` to mimic the above

If you pass parameters to this function, keep in mind that, unless they are string keyed in the same shape they might come from your form, then the result of [`params/1`](AshPhoenix.Form.html#params/1) will reflect that, i.e `add_form(form, "foo", params: %{bar: 10})`, could produce params like `%{"field" => value, "foo" => [%{bar: 10}]}`. Notice how they are not string keyed as you would expect. However, once the form is changed (in liveview) and a call to [`validate/2`](AshPhoenix.Form.html#validate/2) is made with that input, then the parameters would become what you'd expect. In this way, if you are using `add_form` with not string keys/values you may not be able to depend on the shape of the `params` map (which you should ideally not depend on anyway).

- `:prepend` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If specified, the form is placed at the beginning of the list instead of the end of the list The default value is `false`.
- `:params` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The initial parameters to add the form with. The default value is `%{}`.
- `:validate?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Validates the new full form. The default value is `true`.
- `:validate_opts` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Options to pass to `validate`. Only used if `validate?` is set to `true` (the default) The default value is `[]`.
- `:type` - If `type` is set to `:read`, the form will be created for a read action. A hidden field will be set in the form called `_form_type` to track this information. Valid values are :read, :create, :update, :destroy The default value is `:create`.
- `:data` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The data to set backing the form. Generally you'd only want to do this if you are adding a form with `type: :read` additionally.

[](AshPhoenix.Form.html#arguments/1)

# arguments(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L1021)

A utility to get the list of arguments the action underlying the form accepts

[](AshPhoenix.Form.html#ash_errors/2)

# ash\_errors(form, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2726)

[](AshPhoenix.Form.html#attributes/1)

# attributes(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L1015)

A utility to get the list of attributes the action underlying the form accepts

[](AshPhoenix.Form.html#can_submit?/1)

# can\_submit?(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L705)

```
@spec can_submit?(t()) :: boolean()
```

```
@spec can_submit?(Phoenix.HTML.Form.t()) :: boolean()
```

[](AshPhoenix.Form.html#clear_value/2)

# clear\_value(form, field\_or\_fields)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2912)

```
@spec clear_value(t(), atom() | [atom()]) :: t()
```

Clears a given input's value on a form.

Accepts a field (atom) or a list of fields (atoms) as a second argument.

[](AshPhoenix.Form.html#ensure_can_submit!/1)

# ensure\_can\_submit!(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L715)

```
@spec ensure_can_submit!(t()) :: t()
```

```
@spec ensure_can_submit!(Phoenix.HTML.Form.t()) :: Phoenix.HTML.Form.t()
```

[](AshPhoenix.Form.html#errors/2)

# errors(form, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2698)

```
@spec errors(t() | Phoenix.HTML.Form.t(), Keyword.t()) ::
  ([{atom(), {String.t(), Keyword.t()}}]
   | [String.t()]
   | [{atom(), String.t()}])
  | %{
      required(list()) =>
        [{atom(), {String.t(), Keyword.t()}}]
        | [String.t()]
        | [{atom(), String.t()}]
    }
```

Returns the errors on the form.

By default, only errors on the form being passed in (not nested forms) are provided. Use `for_path` to get errors for nested forms.

- `:format` - Values:
  
  ```
  - `:raw` - `[field:, {message, substitutions}}]` (for translation)
- `:simple` - `[field: "message w/ variables substituted"]`
- `:plaintext` - `["field: message w/ variables substituted"]`
  ```
  
  Valid values are :simple, :raw, :plaintext The default value is `:simple`.
- `:for_path` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The path of the form you want errors for, either as a list or as a string, e.g `[:comments, 0]` or `form[comments][0]` Passing `:all` will cause this function to return a map of path to its errors, like so:  
  `%{[:comments, 0] => [body: "is invalid"], ...}` The default value is `[]`.

[](AshPhoenix.Form.html#for_action/3)

# for\_action(resource\_or\_data, action, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L383)

Creates a form corresponding to any given action on a resource.

If given a create, read, update, or destroy action, the appropriate `for_*` function will be called instead. So use this function when you don't know the type of the action, or it is a generic action.

## [](AshPhoenix.Form.html#for_action/3-options)Options

- `:actor` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The actor performing the action. Passed through to the underlying action.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Nested form configurations. See [`for_create/3`](AshPhoenix.Form.html#for_create/3) "Nested Form Options" docs for more.
- `:warn_on_unhandled_errors?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) protocol. The default value is `true`.
- `:domain` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The domain to use when calling the action.
- `:as` ([`String.t/0`](../elixir/String.html#t:t/0)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.
- `:id` ([`String.t/0`](../elixir/String.html#t:t/0)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"
- `:transform_errors` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Allows for manual manipulation and transformation of errors.  
  If possible, try to implement [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`
- `:prepare_source` - A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like:
  
  - Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](../ash/3.4.55/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](../ash/3.4.55/Ash.Changeset.html#set_argument/3)
  - Set changeset context
  - Do any other pre-processing on the changeset
- `:prepare_params` - A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.
- `:transform_params` - A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](AshPhoenix.Form.html) struct.
- `:method` ([`String.t/0`](../elixir/String.html#t:t/0)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.
- `:exclude_fields_if_empty` - These fields will be ignored if they are empty strings.  
  This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow\_nil or those that have default values.
- `:tenant` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current tenant. Passed through to the underlying action.

Any *additional* options will be passed to the underlying call to build the source, i.e [`Ash.ActionInput.for_action/4`](../ash/3.4.55/Ash.ActionInput.html#for_action/4), or `Ash.Changeset.for_*`. This means you can set things like the tenant/actor. These will be retained, and provided again when `Form.submit/3` is called.

## [](AshPhoenix.Form.html#for_action/3-nested-form-options)Nested Form Options

- `:type` - The cardinality of the nested form - `:list` or `:single`. Valid values are :list, :single The default value is `:single`.
- `:sparse?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If the nested form is `sparse`, the form won't expect all inputs for all forms to be present.  
  Has no effect if the type is `:single`.  
  Normally, if you leave some forms out of a list of nested forms, they are removed from the parameters passed to the action. For example, if you had a `post` with two comments `[%Comment{id: 1}, %Comment{id: 2}]` and you passed down params like `comments[0][id]=1&comments[1][text]=new_text`, we would remove the second comment from the input parameters, resulting in the following being passed into the action: `%{"comments" => [%{"id" => 1, "text" => "new"}]}`. By setting it to sparse, you have to explicitly use `remove_form` for that removal to happen. So in the same scenario above, the parameters that would be sent would actually be `%{"comments" => [%{"id" => 1, "text" => "new"}, %{"id" => 2}]}`.  
  One major difference with `sparse?` is that the form actually ignores the *index* provided, e.g `comments[0]...`, and instead uses the primary key e.g `comments[0][id]` to match which form is being updated. This prevents you from having to find the index of the specific item you want to update. Which could be very gnarly on deeply nested forms. If there is no primary key, or the primary key does not match anything, it is treated as a new form.  
  REMEMBER: You need to use `Phoenix.Components.inputs_for` to render the nested forms, or manually add hidden inputs using `hidden_inputs_for` (or `HiddenInputs` if using Surface) for the id to be automatically placed into the form.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Forms nested inside the current nesting level in all cases.
- `:for_type` - What action types the form applies for. Leave blank for it to apply to all action types. Valid values are :read, :create, :update
- `:merge?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - When building parameters, this input will be merged with its parent input. This allows for combining multiple forms into a single input. The default value is `false`.
- `:for` ([`atom/0`](../elixir/typespecs.html#basic-types)) - When creating parameters for the action, the key that the forms should be gathered into. Defaults to the key used to configure the nested form. Ignored if `merge?` is `true`.
- `:resource` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The resource of the nested forms. Unnecessary if you are providing the `data` key, and not adding additional forms to this path.
- `:create_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The create action to use when building new forms. Only necessary if you want to use [`add_form/3`](AshPhoenix.Form.html#add_form/3) with this path.
- `:update_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The update action to use when building forms for data. Only necessary if you supply the `data` key.
- `:data` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current value or values that should have update forms built by default.  
  You can also provide a single argument function that will return the data based on the data of the parent form. This is important for multiple nesting levels of `:list` type forms, because the data depends on which parent is being rendered.

[](AshPhoenix.Form.html#for_create/3)

# for\_create(resource, action, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L533)

```
@spec for_create(Ash.Resource.t(), action :: atom(), opts :: Keyword.t()) :: t()
```

Creates a form corresponding to a create action on a resource.

## [](AshPhoenix.Form.html#for_create/3-options)Options

Options not listed below are passed to the underlying call to build the changeset/query, i.e [`Ash.Changeset.for_create/4`](../ash/3.4.55/Ash.Changeset.html#for_create/4)

- `:actor` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The actor performing the action. Passed through to the underlying action.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Nested form configurations. See [`for_create/3`](AshPhoenix.Form.html#for_create/3) "Nested Form Options" docs for more.
- `:warn_on_unhandled_errors?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) protocol. The default value is `true`.
- `:domain` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The domain to use when calling the action.
- `:as` ([`String.t/0`](../elixir/String.html#t:t/0)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.
- `:id` ([`String.t/0`](../elixir/String.html#t:t/0)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"
- `:transform_errors` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Allows for manual manipulation and transformation of errors.  
  If possible, try to implement [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`
- `:prepare_source` - A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like:
  
  - Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](../ash/3.4.55/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](../ash/3.4.55/Ash.Changeset.html#set_argument/3)
  - Set changeset context
  - Do any other pre-processing on the changeset
- `:prepare_params` - A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.
- `:transform_params` - A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](AshPhoenix.Form.html) struct.
- `:method` ([`String.t/0`](../elixir/String.html#t:t/0)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.
- `:exclude_fields_if_empty` - These fields will be ignored if they are empty strings.  
  This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow\_nil or those that have default values.
- `:tenant` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current tenant. Passed through to the underlying action.

## [](AshPhoenix.Form.html#for_create/3-nested-form-options)Nested Form Options

[`AshPhoenix.Form`](AshPhoenix.Form.html) automatically determines the nested forms available based on an action's usage of `change manage_relationship(...)`. See the [Related Forms](nested-forms.html) for more.

- `:type` - The cardinality of the nested form - `:list` or `:single`. Valid values are :list, :single The default value is `:single`.
- `:sparse?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If the nested form is `sparse`, the form won't expect all inputs for all forms to be present.  
  Has no effect if the type is `:single`.  
  Normally, if you leave some forms out of a list of nested forms, they are removed from the parameters passed to the action. For example, if you had a `post` with two comments `[%Comment{id: 1}, %Comment{id: 2}]` and you passed down params like `comments[0][id]=1&comments[1][text]=new_text`, we would remove the second comment from the input parameters, resulting in the following being passed into the action: `%{"comments" => [%{"id" => 1, "text" => "new"}]}`. By setting it to sparse, you have to explicitly use `remove_form` for that removal to happen. So in the same scenario above, the parameters that would be sent would actually be `%{"comments" => [%{"id" => 1, "text" => "new"}, %{"id" => 2}]}`.  
  One major difference with `sparse?` is that the form actually ignores the *index* provided, e.g `comments[0]...`, and instead uses the primary key e.g `comments[0][id]` to match which form is being updated. This prevents you from having to find the index of the specific item you want to update. Which could be very gnarly on deeply nested forms. If there is no primary key, or the primary key does not match anything, it is treated as a new form.  
  REMEMBER: You need to use `Phoenix.Components.inputs_for` to render the nested forms, or manually add hidden inputs using `hidden_inputs_for` (or `HiddenInputs` if using Surface) for the id to be automatically placed into the form.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Forms nested inside the current nesting level in all cases.
- `:for_type` - What action types the form applies for. Leave blank for it to apply to all action types. Valid values are :read, :create, :update
- `:merge?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - When building parameters, this input will be merged with its parent input. This allows for combining multiple forms into a single input. The default value is `false`.
- `:for` ([`atom/0`](../elixir/typespecs.html#basic-types)) - When creating parameters for the action, the key that the forms should be gathered into. Defaults to the key used to configure the nested form. Ignored if `merge?` is `true`.
- `:resource` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The resource of the nested forms. Unnecessary if you are providing the `data` key, and not adding additional forms to this path.
- `:create_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The create action to use when building new forms. Only necessary if you want to use [`add_form/3`](AshPhoenix.Form.html#add_form/3) with this path.
- `:update_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The update action to use when building forms for data. Only necessary if you supply the `data` key.
- `:data` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current value or values that should have update forms built by default.  
  You can also provide a single argument function that will return the data based on the data of the parent form. This is important for multiple nesting levels of `:list` type forms, because the data depends on which parent is being rendered.

[](AshPhoenix.Form.html#for_destroy/3)

# for\_destroy(data, action, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L759)

```
@spec for_destroy(Ash.Resource.record(), action :: atom(), opts :: Keyword.t()) :: t()
```

Creates a form corresponding to a destroy action on a record.

Options:

- `:actor` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The actor performing the action. Passed through to the underlying action.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Nested form configurations. See [`for_create/3`](AshPhoenix.Form.html#for_create/3) "Nested Form Options" docs for more.
- `:warn_on_unhandled_errors?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) protocol. The default value is `true`.
- `:domain` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The domain to use when calling the action.
- `:as` ([`String.t/0`](../elixir/String.html#t:t/0)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.
- `:id` ([`String.t/0`](../elixir/String.html#t:t/0)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"
- `:transform_errors` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Allows for manual manipulation and transformation of errors.  
  If possible, try to implement [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`
- `:prepare_source` - A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like:
  
  - Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](../ash/3.4.55/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](../ash/3.4.55/Ash.Changeset.html#set_argument/3)
  - Set changeset context
  - Do any other pre-processing on the changeset
- `:prepare_params` - A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.
- `:transform_params` - A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](AshPhoenix.Form.html) struct.
- `:method` ([`String.t/0`](../elixir/String.html#t:t/0)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.
- `:exclude_fields_if_empty` - These fields will be ignored if they are empty strings.  
  This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow\_nil or those that have default values.
- `:tenant` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current tenant. Passed through to the underlying action.

Any *additional* options will be passed to the underlying call to [`Ash.Changeset.for_destroy/4`](../ash/3.4.55/Ash.Changeset.html#for_destroy/4). This means you can set things like the tenant/actor. These will be retained, and provided again when `Form.submit/3` is called.

## [](AshPhoenix.Form.html#for_destroy/3-nested-form-options)Nested Form Options

[`AshPhoenix.Form`](AshPhoenix.Form.html) automatically determines the nested forms available based on an action's usage of `change manage_relationship(...)`. See the [Related Forms](nested-forms.html) for more.

- `:type` - The cardinality of the nested form - `:list` or `:single`. Valid values are :list, :single The default value is `:single`.
- `:sparse?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If the nested form is `sparse`, the form won't expect all inputs for all forms to be present.  
  Has no effect if the type is `:single`.  
  Normally, if you leave some forms out of a list of nested forms, they are removed from the parameters passed to the action. For example, if you had a `post` with two comments `[%Comment{id: 1}, %Comment{id: 2}]` and you passed down params like `comments[0][id]=1&comments[1][text]=new_text`, we would remove the second comment from the input parameters, resulting in the following being passed into the action: `%{"comments" => [%{"id" => 1, "text" => "new"}]}`. By setting it to sparse, you have to explicitly use `remove_form` for that removal to happen. So in the same scenario above, the parameters that would be sent would actually be `%{"comments" => [%{"id" => 1, "text" => "new"}, %{"id" => 2}]}`.  
  One major difference with `sparse?` is that the form actually ignores the *index* provided, e.g `comments[0]...`, and instead uses the primary key e.g `comments[0][id]` to match which form is being updated. This prevents you from having to find the index of the specific item you want to update. Which could be very gnarly on deeply nested forms. If there is no primary key, or the primary key does not match anything, it is treated as a new form.  
  REMEMBER: You need to use `Phoenix.Components.inputs_for` to render the nested forms, or manually add hidden inputs using `hidden_inputs_for` (or `HiddenInputs` if using Surface) for the id to be automatically placed into the form.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Forms nested inside the current nesting level in all cases.
- `:for_type` - What action types the form applies for. Leave blank for it to apply to all action types. Valid values are :read, :create, :update
- `:merge?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - When building parameters, this input will be merged with its parent input. This allows for combining multiple forms into a single input. The default value is `false`.
- `:for` ([`atom/0`](../elixir/typespecs.html#basic-types)) - When creating parameters for the action, the key that the forms should be gathered into. Defaults to the key used to configure the nested form. Ignored if `merge?` is `true`.
- `:resource` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The resource of the nested forms. Unnecessary if you are providing the `data` key, and not adding additional forms to this path.
- `:create_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The create action to use when building new forms. Only necessary if you want to use [`add_form/3`](AshPhoenix.Form.html#add_form/3) with this path.
- `:update_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The update action to use when building forms for data. Only necessary if you supply the `data` key.
- `:data` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current value or values that should have update forms built by default.  
  You can also provide a single argument function that will return the data based on the data of the parent form. This is important for multiple nesting levels of `:list` type forms, because the data depends on which parent is being rendered.

[](AshPhoenix.Form.html#for_read/3)

# for\_read(resource, action, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L855)

```
@spec for_read(Ash.Resource.t(), action :: atom(), opts :: Keyword.t()) :: t()
```

Creates a form corresponding to a read action on a resource.

Options:

- `:actor` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The actor performing the action. Passed through to the underlying action.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Nested form configurations. See [`for_create/3`](AshPhoenix.Form.html#for_create/3) "Nested Form Options" docs for more.
- `:warn_on_unhandled_errors?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) protocol. The default value is `true`.
- `:domain` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The domain to use when calling the action.
- `:as` ([`String.t/0`](../elixir/String.html#t:t/0)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.
- `:id` ([`String.t/0`](../elixir/String.html#t:t/0)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"
- `:transform_errors` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Allows for manual manipulation and transformation of errors.  
  If possible, try to implement [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`
- `:prepare_source` - A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like:
  
  - Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](../ash/3.4.55/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](../ash/3.4.55/Ash.Changeset.html#set_argument/3)
  - Set changeset context
  - Do any other pre-processing on the changeset
- `:prepare_params` - A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.
- `:transform_params` - A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](AshPhoenix.Form.html) struct.
- `:method` ([`String.t/0`](../elixir/String.html#t:t/0)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.
- `:exclude_fields_if_empty` - These fields will be ignored if they are empty strings.  
  This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow\_nil or those that have default values.
- `:tenant` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current tenant. Passed through to the underlying action.

Any *additional* options will be passed to the underlying call to [`Ash.Query.for_read/4`](../ash/3.4.55/Ash.Query.html#for_read/4). This means you can set things like the tenant/actor. These will be retained, and provided again when `Form.submit/3` is called.

Keep in mind that the `source` of the form in this case is a query, not a changeset. This means that, very likely, you would not want to use nested forms here. However, it could make sense if you had a query argument that was an embedded resource, so the capability remains.

## [](AshPhoenix.Form.html#for_read/3-nested-form-options)Nested Form Options

- `:type` - The cardinality of the nested form - `:list` or `:single`. Valid values are :list, :single The default value is `:single`.
- `:sparse?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If the nested form is `sparse`, the form won't expect all inputs for all forms to be present.  
  Has no effect if the type is `:single`.  
  Normally, if you leave some forms out of a list of nested forms, they are removed from the parameters passed to the action. For example, if you had a `post` with two comments `[%Comment{id: 1}, %Comment{id: 2}]` and you passed down params like `comments[0][id]=1&comments[1][text]=new_text`, we would remove the second comment from the input parameters, resulting in the following being passed into the action: `%{"comments" => [%{"id" => 1, "text" => "new"}]}`. By setting it to sparse, you have to explicitly use `remove_form` for that removal to happen. So in the same scenario above, the parameters that would be sent would actually be `%{"comments" => [%{"id" => 1, "text" => "new"}, %{"id" => 2}]}`.  
  One major difference with `sparse?` is that the form actually ignores the *index* provided, e.g `comments[0]...`, and instead uses the primary key e.g `comments[0][id]` to match which form is being updated. This prevents you from having to find the index of the specific item you want to update. Which could be very gnarly on deeply nested forms. If there is no primary key, or the primary key does not match anything, it is treated as a new form.  
  REMEMBER: You need to use `Phoenix.Components.inputs_for` to render the nested forms, or manually add hidden inputs using `hidden_inputs_for` (or `HiddenInputs` if using Surface) for the id to be automatically placed into the form.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Forms nested inside the current nesting level in all cases.
- `:for_type` - What action types the form applies for. Leave blank for it to apply to all action types. Valid values are :read, :create, :update
- `:merge?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - When building parameters, this input will be merged with its parent input. This allows for combining multiple forms into a single input. The default value is `false`.
- `:for` ([`atom/0`](../elixir/typespecs.html#basic-types)) - When creating parameters for the action, the key that the forms should be gathered into. Defaults to the key used to configure the nested form. Ignored if `merge?` is `true`.
- `:resource` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The resource of the nested forms. Unnecessary if you are providing the `data` key, and not adding additional forms to this path.
- `:create_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The create action to use when building new forms. Only necessary if you want to use [`add_form/3`](AshPhoenix.Form.html#add_form/3) with this path.
- `:update_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The update action to use when building forms for data. Only necessary if you supply the `data` key.
- `:data` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current value or values that should have update forms built by default.  
  You can also provide a single argument function that will return the data based on the data of the parent form. This is important for multiple nesting levels of `:list` type forms, because the data depends on which parent is being rendered.

[](AshPhoenix.Form.html#for_update/3)

# for\_update(data, action, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L624)

```
@spec for_update(Ash.Resource.record(), action :: atom(), opts :: Keyword.t()) :: t()
```

Creates a form corresponding to an update action on a record.

Options:

- `:actor` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The actor performing the action. Passed through to the underlying action.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Nested form configurations. See [`for_create/3`](AshPhoenix.Form.html#for_create/3) "Nested Form Options" docs for more.
- `:warn_on_unhandled_errors?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Warns on any errors that don't match the form pattern of `{:field, "message", [replacement: :vars]}` or implement the [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) protocol. The default value is `true`.
- `:domain` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The domain to use when calling the action.
- `:as` ([`String.t/0`](../elixir/String.html#t:t/0)) - The name of the form in the submitted params. You will need to pull the form params out using this key. The default value is `"form"`.
- `:id` ([`String.t/0`](../elixir/String.html#t:t/0)) - The html id of the form. Defaults to the value of `:as` if provided, otherwise "form"
- `:transform_errors` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Allows for manual manipulation and transformation of errors.  
  If possible, try to implement [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) for the error (if it as a custom one, for example). If that isn't possible, you can provide this function which will get the changeset and the error, and should return a list of ash phoenix formatted errors, e.g `[{field :: atom, message :: String.t(), substituations :: Keyword.t()}]`
- `:prepare_source` - A 1-argument function the receives the initial changeset (or query) and makes any relevant changes to it. This can be used to do things like:
  
  - Set default argument values before the validations are run using [`Ash.Changeset.set_arguments/2`](../ash/3.4.55/Ash.Changeset.html#set_arguments/2) or [`Ash.Changeset.set_argument/3`](../ash/3.4.55/Ash.Changeset.html#set_argument/3)
  - Set changeset context
  - Do any other pre-processing on the changeset
- `:prepare_params` - A 2-argument function that receives the params map and the :validate atom and should return prepared params. Called before the form is validated.
- `:transform_params` - A function for post-processing the form parameters before they are used for changeset validation/submission. Use a 3-argument function to pattern match on the [`AshPhoenix.Form`](AshPhoenix.Form.html) struct.
- `:method` ([`String.t/0`](../elixir/String.html#t:t/0)) - The http method to associate with the form. Defaults to `post` for creates, and `put` for everything else.
- `:exclude_fields_if_empty` - These fields will be ignored if they are empty strings.  
  This list of fields supports dead view forms. When a form is submitted from dead view empty fields are submitted as empty strings. This is problematic for fields that allow\_nil or those that have default values.
- `:tenant` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current tenant. Passed through to the underlying action.

Any *additional* options will be passed to the underlying call to [`Ash.Changeset.for_update/4`](../ash/3.4.55/Ash.Changeset.html#for_update/4). This means you can set things like the tenant/actor. These will be retained, and provided again when `Form.submit/3` is called.

## [](AshPhoenix.Form.html#for_update/3-nested-form-options)Nested Form Options

[`AshPhoenix.Form`](AshPhoenix.Form.html) automatically determines the nested forms available based on an action's usage of `change manage_relationship(...)`. See the [Related Forms](nested-forms.html) for more.

- `:type` - The cardinality of the nested form - `:list` or `:single`. Valid values are :list, :single The default value is `:single`.
- `:sparse?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If the nested form is `sparse`, the form won't expect all inputs for all forms to be present.  
  Has no effect if the type is `:single`.  
  Normally, if you leave some forms out of a list of nested forms, they are removed from the parameters passed to the action. For example, if you had a `post` with two comments `[%Comment{id: 1}, %Comment{id: 2}]` and you passed down params like `comments[0][id]=1&comments[1][text]=new_text`, we would remove the second comment from the input parameters, resulting in the following being passed into the action: `%{"comments" => [%{"id" => 1, "text" => "new"}]}`. By setting it to sparse, you have to explicitly use `remove_form` for that removal to happen. So in the same scenario above, the parameters that would be sent would actually be `%{"comments" => [%{"id" => 1, "text" => "new"}, %{"id" => 2}]}`.  
  One major difference with `sparse?` is that the form actually ignores the *index* provided, e.g `comments[0]...`, and instead uses the primary key e.g `comments[0][id]` to match which form is being updated. This prevents you from having to find the index of the specific item you want to update. Which could be very gnarly on deeply nested forms. If there is no primary key, or the primary key does not match anything, it is treated as a new form.  
  REMEMBER: You need to use `Phoenix.Components.inputs_for` to render the nested forms, or manually add hidden inputs using `hidden_inputs_for` (or `HiddenInputs` if using Surface) for the id to be automatically placed into the form.
- `:forms` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Forms nested inside the current nesting level in all cases.
- `:for_type` - What action types the form applies for. Leave blank for it to apply to all action types. Valid values are :read, :create, :update
- `:merge?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - When building parameters, this input will be merged with its parent input. This allows for combining multiple forms into a single input. The default value is `false`.
- `:for` ([`atom/0`](../elixir/typespecs.html#basic-types)) - When creating parameters for the action, the key that the forms should be gathered into. Defaults to the key used to configure the nested form. Ignored if `merge?` is `true`.
- `:resource` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The resource of the nested forms. Unnecessary if you are providing the `data` key, and not adding additional forms to this path.
- `:create_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The create action to use when building new forms. Only necessary if you want to use [`add_form/3`](AshPhoenix.Form.html#add_form/3) with this path.
- `:update_action` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The update action to use when building forms for data. Only necessary if you supply the `data` key.
- `:data` ([`term/0`](../elixir/typespecs.html#built-in-types)) - The current value or values that should have update forms built by default.  
  You can also provide a single argument function that will return the data based on the data of the parent form. This is important for multiple nesting levels of `:list` type forms, because the data depends on which parent is being rendered.

[](AshPhoenix.Form.html#get_form/2)

# get\_form(form, path)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2577)

```
@spec get_form(t() | Phoenix.HTML.Form.t(), path()) :: t() | nil
```

Gets the form at the specified path

[](AshPhoenix.Form.html#has_form?/2)

# has\_form?(form, path)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2565)

```
@spec has_form?(t(), path()) :: boolean()
```

Returns true if a given form path exists in the form

[](AshPhoenix.Form.html#hidden_fields/1)

# hidden\_fields(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L3668)

```
@spec hidden_fields(t() | Phoenix.HTML.Form.t()) :: Keyword.t()
```

Returns the hidden fields for a form as a keyword list

[](AshPhoenix.Form.html#ignore/1)

# ignore(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L3114)

```
@spec ignore(t()) :: t()
```

Toggles the form to be ignored or not ignored.

To set this manually in an html form, use the field `:_ignored` and set it to the string "true". Any other value will not result in the form being ignored.

[](AshPhoenix.Form.html#ignored?/1)

# ignored?(form)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L3132)

```
@spec ignored?(t() | Phoenix.HTML.Form.t()) :: boolean()
```

Returns true if the form is ignored

[](AshPhoenix.Form.html#merge_options/2)

# merge\_options(form, opts)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L1333)

```
@spec merge_options(t(), Keyword.t()) :: t()
```

```
@spec merge_options(Phoenix.HTML.Form.t(), Keyword.t()) :: Phoenix.HTML.Form.t()
```

Merge the new options with the saved options on a form. See [`update_options/2`](AshPhoenix.Form.html#update_options/2) for more.

[](AshPhoenix.Form.html#params/2)

# params(form, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L3144)

Returns the parameters from the form that would be submitted to the action.

This can be useful if you want to get the parameters and manipulate them/build a custom changeset afterwards.

[](AshPhoenix.Form.html#parse_path!/3)

# parse\_path!(form, original\_path, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L4540)

```
@spec parse_path!(t() | Phoenix.HTML.Form.t(), path(), opts :: Keyword.t()) ::
  [atom() | integer()] | no_return()
```

A utility for parsing paths of nested forms in query encoded format.

For example:

```
parse_path!(form, "post[comments][0][sub_comments][0])

[:comments, 0, :sub_comments, 0]
```

[](AshPhoenix.Form.html#remove_form/3)

# remove\_form(form, path, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L3509)

```
@spec remove_form(t(), path(), Keyword.t()) :: t()
```

```
@spec remove_form(Phoenix.HTML.Form.t(), path(), Keyword.t()) :: Phoenix.HTML.Form.t()
```

Removes a form at the provided path.

See [`add_form/3`](AshPhoenix.Form.html#add_form/3) for more information on the `path` argument.

If you are not using liveview, and you want to support removing forms that were created based on the `data` option from the browser, you'll need to include in the form submission a custom list of strings to remove, and then manually iterate over them in your controller, for example:

```
Enum.reduce(removed_form_paths, form, &AshPhoenix.Form.remove_form(&2, &1))
```

- `:validate?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Validates the new full form. The default value is `true`.
- `:validate_opts` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Options to pass to `validate`. Only used if `validate?` is set to `true` (the default) The default value is `[]`.

[](AshPhoenix.Form.html#set_data/2)

# set\_data(form, data)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2887)

Sets the data of the form, in addition to the data of the underlying source, if applicable.

Queries do not track data (because that wouldn't make sense), so this will not update the data for read actions

[](AshPhoenix.Form.html#sort_forms/3)

# sort\_forms(form, path, instruction)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2312)

Sorts nested forms at the given path.

The following items can be given:

- `{:replace, path_without_index, [0, 1, 2]}` - indices can be strings or integers.
- `{:increment, path_to_form}` - increment the index of a specific form (swapping it with the next)
- `{:decrement, path_to_form}` - decrement the index of a specific form (swapping it with the previous)

[](AshPhoenix.Form.html#submit/2)

# submit(form, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L1940)

```
@spec submit(t(), Keyword.t()) ::
  {:ok, Ash.Resource.record() | nil | [Ash.Notifier.Notification.t()]}
  | {:ok, Ash.Resource.record(), [Ash.Notifier.Notification.t()]}
  | :ok
  | {:error, t()}
```

```
@spec submit(Phoenix.HTML.Form.t(), Keyword.t()) ::
  {:ok, Ash.Resource.record() | nil | [Ash.Notifier.Notification.t()]}
  | {:ok, Ash.Resource.record(), [Ash.Notifier.Notification.t()]}
  | :ok
  | {:error, Phoenix.HTML.Form.t()}
```

Submits the form.

If the submission returns an error, the resulting form can be rerendered. Any nested errors will be passed down to the corresponding form for that input.

Options:

- `:force?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Submit the form even if it is invalid in its current state. The default value is `false`.
- `:action_opts` ([`keyword/0`](../elixir/typespecs.html#built-in-types)) - Opts to pass to the call to Ash when calling the action. The default value is `[]`.
- `:errors` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Wether or not to show errors after submitting. The default value is `true`.
- `:override_params` ([`term/0`](../elixir/typespecs.html#built-in-types)) - If specified, then the params are not extracted from the form.  
  How this different from `params`: providing `params` is simply results in calling `validate(form, params)` before proceeding. The values that are passed into the action are then extracted from the form using [`params/2`](AshPhoenix.Form.html#params/2). With `override_params`, the form is not validated again, and the `override_params` are passed directly into the action.
- `:params` ([`term/0`](../elixir/typespecs.html#built-in-types)) - If specified, [`validate/3`](AshPhoenix.Form.html#validate/3) is called with the new params before submitting the form.  
  This is a shortcut to avoid needing to explicitly validate before every submit.  
  For example:
  
  ```
  form
|> AshPhoenix.Form.validate(params)
|> AshPhoenix.Form.submit()
  ```
  
  Is the same as:
  
  ```
  form
|> AshPhoenix.Form.submit(params: params)
  ```
- `:read_one?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If submitting a read form, a single result will be returned (via read\_one) instead of a list of results.  
  Ignored for non-read forms. The default value is `false`.
- `:before_submit` (function of arity 1) - A function to apply to the source (changeset or query) just before submitting the action. Must return the modified changeset.

[](AshPhoenix.Form.html#submit!/2)

# submit!(form, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2267)

```
@spec submit!(t(), Keyword.t()) :: Ash.Resource.record() | :ok | no_return()
```

Same as [`submit/2`](AshPhoenix.Form.html#submit/2), but raises an error if the submission fails.

[](AshPhoenix.Form.html#touch/2)

# touch(form, fields)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2296)

Mark a field or fields as touched

To mark nested fields as touched use with [`update_form/4`](AshPhoenix.Form.html#update_form/4) or [`update_forms_at_path/4`](AshPhoenix.Form.html#update_forms_at_path/4)

[](AshPhoenix.Form.html#update_form/4)

# update\_form(form, path, func, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2490)

Updates the form at the provided path using the given function.

Marks all forms along the path as touched by default. To prevent it, provide `mark_as_touched?: false`.

This can be useful if you have a button that should modify a nested form in some way, for example.

[](AshPhoenix.Form.html#update_forms_at_path/4)

# update\_forms\_at\_path(form, path, func, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2400)

Updates the list of forms matching a given path. Does not validate that the path points at a single form like [`update_form/4`](AshPhoenix.Form.html#update_form/4).

Additionally, if it gets to a list of child forms and the next part of the path is not an integer, it will update all of the forms at that path.

[](AshPhoenix.Form.html#update_options/2)

# update\_options(form, fun)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L1351)

Update the saved options on a form.

When a form is created, options like `actor` and `authorize?` are stored in the `opts` key. If you have a case where these options change over time, for example a select box that determines the actor, use this function to override those opts.

You may want to validate again after this has been changed if it can change the results of your form validation.

[](AshPhoenix.Form.html#update_params/3)

# update\_params(form, func, validate\_opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L1087)

```
@spec update_params(t(), fun :: (map() -> map()), validate_opts :: Keyword.t()) :: t()
```

```
@spec update_params(
  Phoenix.HTML.Form.t(),
  params :: (map() -> map()),
  validate_opts :: Keyword.t()
) ::
  Phoenix.HTML.Form.t()
```

Update the previous params provided to the form, and revalidate.

Accepts the same options as [`validate/2`](AshPhoenix.Form.html#validate/2), passing them through directly.

You should prefer to use [`validate/2`](AshPhoenix.Form.html#validate/2) when you have all of the params from the form. This is meant for cases when some event has occured that should modify the params, not as a replacement for [`validate/2`](AshPhoenix.Form.html#validate/2).

This can be useful for things like customized inputs or buttons, that have special handlers in your live view. For example, if you have an appointment that expresses a list of available times in the UI, but the action just takes a single `time` argument, you can make each available time a button, like so:

```
<.button phx-click="time-selected" phx-value-time="<%= time %>" />
```

and then have an event handler like this:

```
def handle_event("time-selected", %{"time" => time}, socket) do
  form = AshPhoenix.Form.update_params(socket.assigns.form, &Map.put(&1, "time", time))
  {:noreply, assign(socket, :form, form)}
end
```

[](AshPhoenix.Form.html#validate/3)

# validate(form, new\_params, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L1112)

```
@spec validate(t(), map(), Keyword.t()) :: t()
```

```
@spec validate(Phoenix.HTML.Form.t(), map(), Keyword.t()) :: Phoenix.HTML.Form.t()
```

Validates the parameters against the form.

Options:

- `:errors` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Set to false to hide errors after validation. The default value is `true`.
- `:target` (list of [`String.t/0`](../elixir/String.html#t:t/0)) - The `_target` param provided by phoenix. Used to support the `only_touched?` option.
- `:only_touched?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If set to true, only fields that have been marked as touched will be used  
  If you use this for validation you likely want to use it when submitting as well. The default value is `false`.

[](AshPhoenix.Form.html#value/2)

# value(form, field)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/form.ex#L2969)

```
@spec value(t() | Phoenix.HTML.Form.t(), atom()) :: any()
```

Gets the value for a given field in the form.

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/invalid_path.ex#L1 "View Source") AshPhoenix.Form.InvalidPath exception (ash\_phoenix v2.1.14)

Raised when an invalid path is used to find, update or remove a form

# [](AshPhoenix.Form.InvalidPath.html#summary)Summary

## [Functions](AshPhoenix.Form.InvalidPath.html#functions)

[message(map)](AshPhoenix.Form.InvalidPath.html#message/1)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

# [](AshPhoenix.Form.InvalidPath.html#functions)Functions

[](AshPhoenix.Form.InvalidPath.html#message/1)

# message(map)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/invalid_path.ex#L9)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/no_action_configured.ex#L1 "View Source") AshPhoenix.Form.NoActionConfigured exception (ash\_phoenix v2.1.14)

Raised when a form action should happen but no action of the appropriate type has been configured

# [](AshPhoenix.Form.NoActionConfigured.html#summary)Summary

## [Functions](AshPhoenix.Form.NoActionConfigured.html#functions)

[message(map)](AshPhoenix.Form.NoActionConfigured.html#message/1)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

# [](AshPhoenix.Form.NoActionConfigured.html#functions)Functions

[](AshPhoenix.Form.NoActionConfigured.html#message/1)

# message(map)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/no_action_configured.ex#L9)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/no_data_loaded.ex#L1 "View Source") AshPhoenix.Form.NoDataLoaded exception (ash\_phoenix v2.1.14)

Raised when a data needed to be used but the required data was not loaded

# [](AshPhoenix.Form.NoDataLoaded.html#summary)Summary

## [Functions](AshPhoenix.Form.NoDataLoaded.html#functions)

[message(map)](AshPhoenix.Form.NoDataLoaded.html#message/1)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

# [](AshPhoenix.Form.NoDataLoaded.html#functions)Functions

[](AshPhoenix.Form.NoDataLoaded.html#message/1)

# message(map)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/no_data_loaded.ex#L9)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/no_form_configured.ex#L1 "View Source") AshPhoenix.Form.NoFormConfigured exception (ash\_phoenix v2.1.14)

Raised when attempting to refer to a form but no nested form with that name was configured.

# [](AshPhoenix.Form.NoFormConfigured.html#summary)Summary

## [Functions](AshPhoenix.Form.NoFormConfigured.html#functions)

[message(error)](AshPhoenix.Form.NoFormConfigured.html#message/1)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

# [](AshPhoenix.Form.NoFormConfigured.html#functions)Functions

[](AshPhoenix.Form.NoFormConfigured.html#message/1)

# message(error)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/no_form_configured.ex#L15)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/no_resource_configured.ex#L1 "View Source") AshPhoenix.Form.NoResourceConfigured exception (ash\_phoenix v2.1.14)

Raised when a form needed to be constructed but the resource for that form could not be determined

# [](AshPhoenix.Form.NoResourceConfigured.html#summary)Summary

## [Functions](AshPhoenix.Form.NoResourceConfigured.html#functions)

[message(map)](AshPhoenix.Form.NoResourceConfigured.html#message/1)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

# [](AshPhoenix.Form.NoResourceConfigured.html#functions)Functions

[](AshPhoenix.Form.NoResourceConfigured.html#message/1)

# message(map)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/no_resource_configured.ex#L9)

Callback implementation for [`Exception.message/1`](../elixir/Exception.html#c:message/1).

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L1 "View Source") AshPhoenix.Form.WrappedValue (ash\_phoenix v2.1.14)

A sentinal value used when editing a union that has non-map values

# [](AshPhoenix.Form.WrappedValue.html#summary)Summary

## [Types](AshPhoenix.Form.WrappedValue.html#types)

[t()](AshPhoenix.Form.WrappedValue.html#t:t/0)

## [Functions](AshPhoenix.Form.WrappedValue.html#functions)

[apply\_constraints\_array(term, constraints)](AshPhoenix.Form.WrappedValue.html#apply_constraints_array/2)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.55/Ash.Type.html#c:apply_constraints_array/2).

[cast\_input(input, constraints)](AshPhoenix.Form.WrappedValue.html#cast_input/2)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.55/Ash.Type.html#c:cast_input/2).

[cast\_stored(value, constraints)](AshPhoenix.Form.WrappedValue.html#cast_stored/2)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.55/Ash.Type.html#c:cast_stored/2).

[check\_atomic(value, constraints)](AshPhoenix.Form.WrappedValue.html#check_atomic/2)

[default\_short\_name()](AshPhoenix.Form.WrappedValue.html#default_short_name/0)

[dump\_to\_native(value, \_)](AshPhoenix.Form.WrappedValue.html#dump_to_native/2)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.55/Ash.Type.html#c:dump_to_native/2).

[fetch\_key(map, atom)](AshPhoenix.Form.WrappedValue.html#fetch_key/2)

[get\_rewrites(merged\_load, calculation, path, \_)](AshPhoenix.Form.WrappedValue.html#get_rewrites/4)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.55/Ash.Type.html#c:get_rewrites/4).

[handle\_change(old\_value, new\_value, constraints)](AshPhoenix.Form.WrappedValue.html#handle_change/3)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.55/Ash.Type.html#c:handle_change/3).

[handle\_change?()](AshPhoenix.Form.WrappedValue.html#handle_change?/0)

[handle\_change\_array(old\_values, new\_values, constraints)](AshPhoenix.Form.WrappedValue.html#handle_change_array/3)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.55/Ash.Type.html#c:handle_change_array/3).

[input(opts)](AshPhoenix.Form.WrappedValue.html#input/1)

Validates that the keys in the provided input are valid for at least one action on the resource.

[input(opts, action)](AshPhoenix.Form.WrappedValue.html#input/2)

Same as [`input/1`](AshPhoenix.Form.WrappedValue.html#input/1), except restricts the keys to values accepted by the action provided.

[load(record, load, constraints, context)](AshPhoenix.Form.WrappedValue.html#load/4)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.55/Ash.Type.html#c:load/4).

[prepare\_change(old\_value, new\_value, constraints)](AshPhoenix.Form.WrappedValue.html#prepare_change/3)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.55/Ash.Type.html#c:prepare_change/3).

[prepare\_change?()](AshPhoenix.Form.WrappedValue.html#prepare_change?/0)

[prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)](AshPhoenix.Form.WrappedValue.html#prepare_change_array/3)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.55/Ash.Type.html#c:prepare_change_array/3).

[rewrite(value, rewrites, constraints)](AshPhoenix.Form.WrappedValue.html#rewrite/3)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.55/Ash.Type.html#c:rewrite/3).

[storage\_type(\_)](AshPhoenix.Form.WrappedValue.html#storage_type/1)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.55/Ash.Type.html#c:storage_type/1).

# [](AshPhoenix.Form.WrappedValue.html#types)Types

[](AshPhoenix.Form.WrappedValue.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L1)

```
@type t() :: %AshPhoenix.Form.WrappedValue{
  __lateral_join_source__: term(),
  __meta__: term(),
  __metadata__: term(),
  __order__: term(),
  aggregates: term(),
  calculations: term(),
  value: term()
}
```

# [](AshPhoenix.Form.WrappedValue.html#functions)Functions

[](AshPhoenix.Form.WrappedValue.html#apply_constraints_array/2)

# apply\_constraints\_array(term, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](../ash/3.4.55/Ash.Type.html#c:apply_constraints_array/2).

[](AshPhoenix.Form.WrappedValue.html#cast_input/2)

# cast\_input(input, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.cast_input/2`](../ash/3.4.55/Ash.Type.html#c:cast_input/2).

[](AshPhoenix.Form.WrappedValue.html#cast_stored/2)

# cast\_stored(value, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.cast_stored/2`](../ash/3.4.55/Ash.Type.html#c:cast_stored/2).

[](AshPhoenix.Form.WrappedValue.html#check_atomic/2)

# check\_atomic(value, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

[](AshPhoenix.Form.WrappedValue.html#default_short_name/0)

# default\_short\_name()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L1)

[](AshPhoenix.Form.WrappedValue.html#dump_to_native/2)

# dump\_to\_native(value, \_)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.dump_to_native/2`](../ash/3.4.55/Ash.Type.html#c:dump_to_native/2).

[](AshPhoenix.Form.WrappedValue.html#fetch_key/2)

# fetch\_key(map, atom)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

[](AshPhoenix.Form.WrappedValue.html#get_rewrites/4)

# get\_rewrites(merged\_load, calculation, path, \_)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.get_rewrites/4`](../ash/3.4.55/Ash.Type.html#c:get_rewrites/4).

[](AshPhoenix.Form.WrappedValue.html#handle_change/3)

# handle\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.handle_change/3`](../ash/3.4.55/Ash.Type.html#c:handle_change/3).

[](AshPhoenix.Form.WrappedValue.html#handle_change?/0)

# handle\_change?()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L1)

[](AshPhoenix.Form.WrappedValue.html#handle_change_array/3)

# handle\_change\_array(old\_values, new\_values, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.handle_change_array/3`](../ash/3.4.55/Ash.Type.html#c:handle_change_array/3).

[](AshPhoenix.Form.WrappedValue.html#input/1)

# input(opts)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L1)

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

[](AshPhoenix.Form.WrappedValue.html#input/2)

# input(opts, action)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L1)

```
@spec input(values :: map() | Keyword.t(), action :: atom()) :: map() | no_return()
```

Same as [`input/1`](AshPhoenix.Form.WrappedValue.html#input/1), except restricts the keys to values accepted by the action provided.

[](AshPhoenix.Form.WrappedValue.html#load/4)

# load(record, load, constraints, context)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.load/4`](../ash/3.4.55/Ash.Type.html#c:load/4).

[](AshPhoenix.Form.WrappedValue.html#prepare_change/3)

# prepare\_change(old\_value, new\_value, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.prepare_change/3`](../ash/3.4.55/Ash.Type.html#c:prepare_change/3).

[](AshPhoenix.Form.WrappedValue.html#prepare_change?/0)

# prepare\_change?()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L1)

[](AshPhoenix.Form.WrappedValue.html#prepare_change_array/3)

# prepare\_change\_array(old\_values, new\_uncasted\_values, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.prepare_change_array/3`](../ash/3.4.55/Ash.Type.html#c:prepare_change_array/3).

[](AshPhoenix.Form.WrappedValue.html#rewrite/3)

# rewrite(value, rewrites, constraints)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.rewrite/3`](../ash/3.4.55/Ash.Type.html#c:rewrite/3).

[](AshPhoenix.Form.WrappedValue.html#storage_type/1)

# storage\_type(\_)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/form/wrapped_value.ex#L3)

Callback implementation for [`Ash.Type.storage_type/1`](../ash/3.4.55/Ash.Type.html#c:storage_type/1).

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix.ex#L1 "View Source") AshPhoenix (ash\_phoenix v2.1.14)

An extension to add form builders to the code interface.

There is currently no DSL for this extension.

This defines a `form_to_<name>` function for each code interface function. Positional arguments are ignored, given that in forms, all input typically comes from the `params` map.

The generated function passes all options through to [`AshPhoenix.Form.for_action/3`](AshPhoenix.Form.html#for_action/3)

Update and destroy actions take the record being updated/destroyed as the first argument.

For example, given this code interface definition on a domain called `MyApp.Accounts`:

```
resources do
  resource MyApp.Accounts.User do
    define :register_with_password, args: [:email, :password]
    define :update_user, action: :update, args: [:email, :password]
  end
end
```

Adding the [`AshPhoenix`](AshPhoenix.html) extension would define `form_to_register_with_password/2`.

## [](AshPhoenix.html#module-usage)Usage

Without options:

```
MyApp.Accounts.form_to_register_with_password()
#=> %AshPhoenix.Form{}
```

With options:

```
MyApp.Accounts.form_to_register_with_password(params: %{"email" => "placeholder@email"})
#=> %AshPhoenix.Form{}
```

With

```
MyApp.Accounts.form_to_update_user(params: %{"email" => "placeholder@email"})
#=> %AshPhoenix.Form{}
```

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L1 "View Source") AshPhoenix.LiveView (ash\_phoenix v2.1.14)

Utilities for keeping Ash query results up to date in a LiveView.

# [](AshPhoenix.LiveView.html#summary)Summary

## [Types](AshPhoenix.LiveView.html#types)

[assign()](AshPhoenix.LiveView.html#t:assign/0)

[assigns()](AshPhoenix.LiveView.html#t:assigns/0)

[callback()](AshPhoenix.LiveView.html#t:callback/0)

[callback\_result()](AshPhoenix.LiveView.html#t:callback_result/0)

[liveness\_options()](AshPhoenix.LiveView.html#t:liveness_options/0)

[socket()](AshPhoenix.LiveView.html#t:socket/0)

[topic()](AshPhoenix.LiveView.html#t:topic/0)

## [Functions](AshPhoenix.LiveView.html#functions)

[can\_link\_to\_page?(page, target)](AshPhoenix.LiveView.html#can_link_to_page?/2)

[change\_page(socket, assign, target)](AshPhoenix.LiveView.html#change_page/3)

[handle\_live(socket, notification, assigns, refetch\_info \\\\ \[\])](AshPhoenix.LiveView.html#handle_live/4)

Incorporates an [`Ash.Notifier.Notification`](../ash/3.4.55/Ash.Notifier.Notification.html) into the query results, based on the liveness configuration.

[keep\_live(socket, assign, callback, opts \\\\ \[\])](AshPhoenix.LiveView.html#keep_live/4)

Runs the callback, and stores the information required to keep it live in the socket assigns.

[last\_page(arg1)](AshPhoenix.LiveView.html#last_page/1)

[next\_page?(page)](AshPhoenix.LiveView.html#next_page?/1)

[on\_page?(page, num)](AshPhoenix.LiveView.html#on_page?/2)

[page\_from\_params(params, default\_limit, count? \\\\ false)](AshPhoenix.LiveView.html#page_from_params/3)

[page\_link\_params(offset, target)](AshPhoenix.LiveView.html#page_link_params/2)

[page\_number(arg1)](AshPhoenix.LiveView.html#page_number/1)

[page\_params(keyset)](AshPhoenix.LiveView.html#page_params/1)

[prev\_page?(page)](AshPhoenix.LiveView.html#prev_page?/1)

# [](AshPhoenix.LiveView.html#types)Types

[](AshPhoenix.LiveView.html#t:assign/0)

# assign()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L7)

```
@type assign() :: atom()
```

[](AshPhoenix.LiveView.html#t:assigns/0)

# assigns()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L8)

```
@type assigns() :: map()
```

[](AshPhoenix.LiveView.html#t:callback/0)

# callback()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L131)

```
@type callback() ::
  (socket() -> callback_result())
  | (socket(), Keyword.t() | nil -> callback_result())
```

[](AshPhoenix.LiveView.html#t:callback_result/0)

# callback\_result()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L130)

```
@type callback_result() :: struct() | [struct()] | Ash.Page.page() | nil
```

[](AshPhoenix.LiveView.html#t:liveness_options/0)

# liveness\_options()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L10)

```
@type liveness_options() :: Keyword.t()
```

[](AshPhoenix.LiveView.html#t:socket/0)

# socket()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L6)

```
@type socket() :: term()
```

[](AshPhoenix.LiveView.html#t:topic/0)

# topic()

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L9)

```
@type topic() :: String.t()
```

# [](AshPhoenix.LiveView.html#functions)Functions

[](AshPhoenix.LiveView.html#can_link_to_page?/2)

# can\_link\_to\_page?(page, target)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L352)

[](AshPhoenix.LiveView.html#change_page/3)

# change\_page(socket, assign, target)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L194)

[](AshPhoenix.LiveView.html#handle_live/4)

# handle\_live(socket, notification, assigns, refetch\_info \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L402)

Incorporates an [`Ash.Notifier.Notification`](../ash/3.4.55/Ash.Notifier.Notification.html) into the query results, based on the liveness configuration.

You will want to match on receiving a notification from Ash, and the easiest way to do that is to match on the payload like so:

```
  @impl true
def handle_info(%{topic: topic, payload: %Ash.Notifier.Notification{}}, socket) do
  {:noreply, handle_live(socket, topic, [:query1, :query2, :query3])}
end
```

Feel free to intercept notifications and do your own logic to respond to events. Ultimately, all that matters is that you also call [`handle_live/3`](AshPhoenix.LiveView.html#handle_live/3) if you want it to update your query results.

The assign or list of assigns passed as the third argument must be the same names passed into `keep_live`. If you only want some queries to update based on some events, you can define multiple matches on events, and only call [`handle_live/3`](AshPhoenix.LiveView.html#handle_live/3) with the assigns that should be updated for that notification.

[](AshPhoenix.LiveView.html#keep_live/4)

# keep\_live(socket, assign, callback, opts \\\\ \[])

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L134)

```
@spec keep_live(socket(), assign(), callback(), liveness_options()) :: socket()
```

Runs the callback, and stores the information required to keep it live in the socket assigns.

The data will be assigned to the provided key, e.g `keep_live(socket, :me, ...)` would assign the results to `:me` (accessed as `@me` in the template).

Additionally, you'll need to define a `handle_info/2` callback for your liveview to receive any notifications, and pass that notification into [`handle_live/3`](AshPhoenix.LiveView.html#handle_live/3). See [`handle_live/3`](AshPhoenix.LiveView.html#handle_live/3) for more.

## [](AshPhoenix.LiveView.html#keep_live/4-important)Important

The logic for handling events to keep data live is currently very limited. It will simply rerun the query every time. To this end, you should feel free to intercept individual events and handle them yourself for more optimized liveness.

## [](AshPhoenix.LiveView.html#keep_live/4-pagination)Pagination

To make paginated views convenient, as well as making it possible to keep those views live, Ash does not simply rerun the query when it gets an update, as that could involve shuffling the records around on the page. Eventually this will be configurable, but for now, Ash simply adjusts the query to only include the records that are on the page. If a record would be removed from a page due to a data change, it will simply be left there. For the best performance, use `keyset` pagination. If you *need* the ability to jump to a page by number, you'll want to use `offset` pagination, but keep in mind that it performs worse on large tables.

To support this, accept a second parameter to your callback function, which will be the options to use in `page_opts`

## [](AshPhoenix.LiveView.html#keep_live/4-options)Options:

- `:subscribe` - A topic or list of topics that should cause this data to update.
- `:refetch?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - A boolean flag indicating whether a refetch is allowed to happen. Defaults to `true`
- `:after_fetch` ([`term/0`](../elixir/typespecs.html#built-in-types)) - A two argument function that takes the results, and the socket, and returns the new socket. Can be used to set assigns based on the result of the query.
- `:results` - For list and page queries, by default the records shown are never changed (unless the page changes) Valid values are :keep, :lose The default value is `:keep`.
- `:load_until_connected?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - If the socket is not connected, then the value of the provided assign is set to `:loading`. Has no effect if `initial` is provided.
- `:initial` ([`term/0`](../elixir/typespecs.html#built-in-types)) - Results to use instead of running the query immediately.
- `:refetch_interval` ([`non_neg_integer/0`](../elixir/typespecs.html#basic-types)) - An interval (in ms) to periodically refetch the query
- `:refetch_window` ([`non_neg_integer/0`](../elixir/typespecs.html#basic-types)) - The minimum time (in ms) between refetches, including refetches caused by notifications.

A great way to get readable millisecond values is to use the functions in erlang's `:timer` module, like [`:timer.hours/1`](https://www.erlang.org/doc/apps/stdlib/timer.html#hours/1), [`:timer.minutes/1`](https://www.erlang.org/doc/apps/stdlib/timer.html#minutes/1), and [`:timer.seconds/1`](https://www.erlang.org/doc/apps/stdlib/timer.html#seconds/1)

#### refetch\_interval

If this option is set, a message is sent as `{:refetch, assign_name, opts}` on that interval. You can then match on that event, like so:

```
def handle_info({:refetch, assign, opts}, socket) do
  {:noreply, handle_live(socket, :refetch, assign, opts)}
end
```

This is the equivalent of `:timer.send_interval(interval, {:refetch, assign, opts})`, so feel free to roll your own solution if you have complex refetching requirements.

#### refetch\_window

Normally, when a pubsub message is received the query is rerun. This option will cause the query to wait at least this amount of time before doing a refetch. This is accomplished with [`Process.send_after/4`](../elixir/Process.html#send_after/4), and recording the last time each query was refetched. For example if a refetch happens at time `0`, and the `refetch_window` is 10,000 ms, we would refetch, and record the time. Then if another refetch should happen 5,000 ms later, we would look and see that we need to wait another 5,000ms. So we use [`Process.send_after/4`](../elixir/Process.html#send_after/4) to send a `{:refetch, assign, opts}` message in 5,000ms. The time that a refetch was requested is tracked, so if the data has since been refetched, it won't be refetched again.

#### Future Plans

One interesting thing here is that, given that we know the scope of data that a resource cares about, we should be able to make optimizations to this code, to support partial refetches, or even just updating the data directly. However, this will need to be carefully considered, as the risks involve showing users data they could be unauthorized to see, or having state in the socket that is inconsistent.

[](AshPhoenix.LiveView.html#last_page/1)

# last\_page(arg1)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L356)

[](AshPhoenix.LiveView.html#next_page?/1)

# next\_page?(page)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L281)

[](AshPhoenix.LiveView.html#on_page?/2)

# on\_page?(page, num)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L366)

[](AshPhoenix.LiveView.html#page_from_params/3)

# page\_from\_params(params, default\_limit, count? \\\\ false)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L228)

[](AshPhoenix.LiveView.html#page_link_params/2)

# page\_link\_params(offset, target)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L285)

[](AshPhoenix.LiveView.html#page_number/1)

# page\_number(arg1)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L370)

[](AshPhoenix.LiveView.html#page_params/1)

# page\_params(keyset)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L248)

[](AshPhoenix.LiveView.html#prev_page?/1)

# prev\_page?(page)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/live_view.ex#L277)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/plug/subdomain_plug.ex#L1 "View Source") AshPhoenix.SubdomainPlug (ash\_phoenix v2.1.14)

This is a basic plug that loads the current tenant assign from a given value set on subdomain.

This was copied from `Triplex.SubdomainPlug`, here: [https://github.com/ateliware/triplex/blob/master/lib/triplex/plugs/subdomain\_plug.ex](https://github.com/ateliware/triplex/blob/master/lib/triplex/plugs/subdomain_plug.ex)

Options:

- `:endpoint` ([`atom/0`](../elixir/typespecs.html#basic-types)) - Required. The endpoint that the plug is in, used for deterining the host
- `:assign` ([`atom/0`](../elixir/typespecs.html#basic-types)) - The key to use when assigning the current tenant The default value is `:current_tenant`.
- `:handle_subdomain` - An mfa to call with the conn and a subdomain value. Can be used to do something like fetch the current user given the tenant. Must return the new conn.

To plug it on your router, you can use:

```
plug AshPhoenix.SubdomainPlug,
  endpoint: MyApp.Endpoint
```

An additional helper here can be used for determining the host in your liveview, and/or using the host that was already assigned to the conn.

For example:

```
def handle_params(params, uri, socket) do
  socket =
    assign_new(socket, :current_tenant, fn ->
      AshPhoenix.SubdomainPlug.live_tenant(socket, uri)
    end)

  socket =
    assign_new(socket, :current_organization, fn ->
      if socket.assigns[:current_tenant] do
        MyApp.Accounts.Ash.get!(MyApp.Accounts.Organization,
          subdomain: socket.assigns[:current_tenant]
        )
      end
    end)

  {:noreply, socket}
end
```

# [](AshPhoenix.SubdomainPlug.html#summary)Summary

## [Functions](AshPhoenix.SubdomainPlug.html#functions)

[live\_tenant(socket, url)](AshPhoenix.SubdomainPlug.html#live_tenant/2)

# [](AshPhoenix.SubdomainPlug.html#functions)Functions

[](AshPhoenix.SubdomainPlug.html#live_tenant/2)

# live\_tenant(socket, url)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/ash_phoenix/plug/subdomain_plug.ex#L73)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/documentation/dsls/DSL-AshPhoenix.md#L1 "View Source") DSL: AshPhoenix

An extension to add form builders to the code interface.

There is currently no DSL for this extension.

This defines a `form_to_<name>` function for each code interface function. Positional arguments are ignored, given that in forms, all input typically comes from the `params` map.

The generated function passes all options through to [`AshPhoenix.Form.for_action/3`](AshPhoenix.Form.html#for_action/3)

Update and destroy actions take the record being updated/destroyed as the first argument.

For example, given this code interface definition on a domain called `MyApp.Accounts`:

```
resources do
  resource MyApp.Accounts.User do
    define :register_with_password, args: [:email, :password]
    define :update_user, action: :update, args: [:email, :password]
  end
end
```

Adding the [`AshPhoenix`](AshPhoenix.html) extension would define `form_to_register_with_password/2`.

## [](dsl-ashphoenix.html#usage)Usage

Without options:

```
MyApp.Accounts.form_to_register_with_password()
#=> %AshPhoenix.Form{}
```

With options:

```
MyApp.Accounts.form_to_register_with_password(params: %{"email" => "placeholder@email"})
#=> %AshPhoenix.Form{}
```

With

```
MyApp.Accounts.form_to_update_user(params: %{"email" => "placeholder@email"})
#=> %AshPhoenix.Form{}
```

[← Previous Page Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) ([current file](https://preview.hex.pm/preview/ash_phoenix/2.1.14/show/documentation/dsls/DSL-AshPhoenix.md)) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/documentation/tutorials/getting-started-with-ash-and-phoenix.md#L1 "View Source") Get Started with Ash and Phoenix

## [](getting-started-with-ash-and-phoenix.html#goals)Goals

In this guide we will:

1. Create a new Phoenix project
2. Setup Ash, AshPhoenix and AshPostgres as dependencies
3. Create a basic `Blog.Post` resource
4. Create and migrate the database
5. Learn how to interact with your resource
6. Integrate a minimal Phoenix LiveView with Ash

## [](getting-started-with-ash-and-phoenix.html#preparation)Preparation

- [Install Elixir](https://elixir-lang.org/install.html)
- [Phoenix - Up and Running Guide](../phoenix/up_and_running.html)
- [Design Principles](../ash/design-principles.html)

## [](getting-started-with-ash-and-phoenix.html#requirements)Requirements

If you want to follow along yourself, you will need the following things:

1. Elixir (1.12 or later) and Erlang (22 or later) installed
2. PostgreSQL installed
3. A text editor
4. A terminal to run the examples

## [](getting-started-with-ash-and-phoenix.html#setup)Setup

### [](getting-started-with-ash-and-phoenix.html#create-a-new-phoenix-project)Create a New Phoenix Project

### [](getting-started-with-ash-and-phoenix.html#install-phoenix)Install Phoenix

*This section is based on the [Phoenix installation docs](../phoenix/installation.html). For more details go there.*

First we need to install the Phoenix project generator, then we'll run the generator to create our new project.

```
# install Phoenix project generator
$ mix archive.install hex phx_new

# generate Phoenix project
$ mix igniter.new my_ash_phoenix_app --install ash,ash_phoenix,ash_postgres --with phx.new

# cd into project
$ cd my_ash_phoenix_app
```

### [](getting-started-with-ash-and-phoenix.html#don-t-run-mix-ecto-create)Don't run [`mix ecto.create`](../ecto/3.12.5/Mix.Tasks.Ecto.Create.html)

Do *not* run [`mix ecto.create`](../ecto/3.12.5/Mix.Tasks.Ecto.Create.html), (as it asks you to) we will do this the Ash way later.

### [](getting-started-with-ash-and-phoenix.html#edit-config)Edit Config

We need to specify the Ash domains that our application uses.

Add this to your config:

```
# config/config.exs

import Config

config :my_ash_phoenix_app,
  ash_domains: [MyAshPhoenixApp.Blog]
```

### [](getting-started-with-ash-and-phoenix.html#create-the-domain-and-add-resources)Create the Domain and add Resources

An Ash domain can be thought of as a [Bounded Context](https://martinfowler.com/bliki/BoundedContext.html) in Domain Driven Design terms and can seen as analogous to a Phoenix context. Put simply, its a way of grouping related resources together. In our case our domain will be called `MyAshPhoenixApp.Blog`.

An Ash domain points to Ash resources. An Ash domain can point to one or more resources. In our case we will only have a single resource `MyAshPhoenixApp.Blog.Post`. We'll be taking a deeper look into that in the next section.

For now take a look at the `Blog` domain and the associated resources:

```
# lib/my_ash_phoenix_app/blog/blog.ex

defmodule MyAshPhoenixApp.Blog do
  use Ash.Domain

  resources do
    resource MyAshPhoenixApp.Blog.Post do
      # Define an interface for calling resource actions.
      define :create_post, action: :create
      define :list_posts, action: :read
      define :destroy_post, action: :destroy
      define :get_post, args: [:id], action: :by_id
    end
  end
end
```

## [](getting-started-with-ash-and-phoenix.html#creating-resources)Creating Resources

### [](getting-started-with-ash-and-phoenix.html#creating-the-post-resource)Creating the `Post` Resource

A resource is a central concept in Ash. In short, a resource is a domain model object in your system. A resource defines the data it holds and defines the actions that can operate on that data.

When we create `Post` we will place it in `lib/my_ash_phoenix_app/blog/post.ex`. So the structure after making the resource should look like so:

```
lib/
├─ my_ash_phoenix_app/
│  ├─ blog/
│  │  ├─ blog.ex
│  │  ├─ post.ex
```

Below is the resource module. Read the comments carefully, every line is explained:

```
# lib/my_ash_phoenix_app/blog/post.ex

defmodule MyAshPhoenixApp.Blog.Post do
  # Using Ash.Resource turns this module into an Ash resource.
  use Ash.Resource,
    # Tells Ash where the generated code interface belongs
    domain: MyAshPhoenixApp.Blog,
    # Tells Ash you want this resource to store its data in Postgres.
    data_layer: AshPostgres.DataLayer

  # The Postgres keyword is specific to the AshPostgres module.
  postgres do
    # Tells Postgres what to call the table
    table "posts"
    # Tells Ash how to interface with the Postgres table
    repo MyAshPhoenixApp.Repo
  end

  actions do
    # Exposes default built in actions to manage the resource
    defaults [:read, :destroy]

    create :create do
      primary? true
      # accept title as input
      accept [:title]
    end

    update :update do
      primary? true
      # accept content as input
      accept [:content]
    end

    # Defines custom read action which fetches post by id.
    read :by_id do
      # This action has one argument :id of type :uuid
      argument :id, :uuid, allow_nil?: false
      # Tells us we expect this action to return a single result
      get? true
      # Filters the `:id` given in the argument
      # against the `id` of each element in the resource
      filter expr(id == ^arg(:id))
    end
  end

  # Attributes are simple pieces of data that exist in your resource
  attributes do
    # Add an autogenerated UUID primary key called `:id`.
    uuid_primary_key :id
    # Add a string type attribute called `:title`
    attribute :title, :string do
      # We don't want the title to ever be `nil`
      allow_nil? false
    end

    # Add a string type attribute called `:content`
    # If allow_nil? is not specified, then content can be nil
    attribute :content, :string
  end
end
```

### [](getting-started-with-ash-and-phoenix.html#creating-and-migrating-the-database)Creating and Migrating the Database

We have specified the resource in Ash. But we have yet to create it in our data layer (in our case Postgres).

First we need to create our database:

```
$ mix ash.setup

Running setup for AshPostgres.DataLayer...
The database for MyAshPhoenixApp.Repo has been created

01:23:45.678 [info] Migrations already up
```

Now we need to populate our database. We do this by generating and performing a migration.

We can use a generator to produce a migration for us. Ash can deduce what needs to go into the migration and do the hard work for us, to do this use the command below:

```
$ mix ash.codegen initial_migration

# ... don't worry about other files it creates

Generating Migrations:
* creating priv/repo/migrations/20230208045101_initial_migration.exs
```

Here is the migration file commented in detail:

```
# priv/repo/migrations/20230208045101_initial_migration.exs

defmodule MyAshPhoenixApp.Repo.Migrations.InitialMigration do
  use Ecto.Migration

  # This function runs when migrating forward
  def up do
    # Creates the `:posts` table
    create table(:posts, primary_key: false) do
      # Adds primary key attribute `:id` of type `:uuid`
      # null values are not allowed
      add :id, :uuid, null: false, default: fragment("gen_random_uuid()"), primary_key: true

      # Adds attribute `:title` of type `:text`, null values are not allowed
      add :title, :text, null: false
      # Adds attribute `:content` of type `:text`, null values are allowed
      add :content, :text
    end
  end

  # This is the function that runs if you want to rollback the migration.
  def down do
    # Deletes the `:posts` table
    drop table(:posts)
  end
end
```

We can run the `up/0` function which will perform the desired operations on the Postgres database. We do this with the migrate command:

```
$ mix ash.migrate
```

> In case you want to drop the database and start over again during development you can use [`mix ash.reset`](../ash/3.4.55/Mix.Tasks.Ash.Reset.html).

## [](getting-started-with-ash-and-phoenix.html#interacting-with-your-resources)Interacting with your Resources

**All interaction with your resource attributes always occur through an action**. In our resource we are using the default actions for `:create, :read, :update, :destroy` along with a custom action `:by_id`.

`:create` and `:update` and `:destroy` actions require a changeset. Ash changesets are conceptually similar to [Ecto changesets](https://hexdocs.pm/ecto/Ecto.Changeset.html). They're data structures which represent an intended change to an Ash resource and provide validation.

The `:read` action takes a query instead of a changeset.

Below is the most verbose way of calling your resource. All other ways of interaction are some kind of shorthand of these. This means at some point a changeset is being created and passed to the domain, even if it's encapsulated within another function.

```
# create post
new_post =
  MyAshPhoenixApp.Blog.Post
  |> Ash.Changeset.for_create(:create, %{title: "hello world"})
  |> Ash.create!()

# read all posts
MyAshPhoenixApp.Blog.Post
|> Ash.Query.for_read(:read)
|> Ash.read!()

# get single post by id
MyAshPhoenixApp.Blog.Post
|> Ash.Query.for_read(:by_id, %{id: new_post.id})
|> Ash.read_one!()

# update post
updated_post =
  new_post
  |> Ash.Changeset.for_update(:update, %{content: "hello to you too!"})
  |> Ash.update!()

# delete post
new_post
|> Ash.Changeset.for_destroy(:destroy)
|> Ash.destroy!()
```

As stated above, this is verbose so Ash has a built in shortcut - The `code_interface`. You may notice this has already been done in your `Post` resource inside of the domain module.

### [](getting-started-with-ash-and-phoenix.html#you-can-call-code-interfaces-whatever-you-like)you can call code interfaces whatever you like

The function name doesn't have to match the action name in any way. You could also write:

```
define :make_post, action: :create
```

That's perfectly valid and could be called via `Blog.make_post/2`.

Now we can call our resource like so:

```
# create post
new_post = MyAshPhoenixApp.Blog.create_post!(%{title: "hello world"})

# read post
MyAshPhoenixApp.Blog.list_posts!()

# get post by id
MyAshPhoenixApp.Blog.get_post!(new_post.id)

# update post
updated_post = MyAshPhoenixApp.Blog.update_post!(new_post, %{content: "hello to you too!"})

# delete post
MyAshPhoenixApp.Blog.destroy_post!(updated_post)
```

Now isn't that more convenient?

### [](getting-started-with-ash-and-phoenix.html#raising-and-non-raising-functions)raising and non-raising functions

All functions that interact with an Ash resource have a raising and non-raising version. For example there are two create functions `create/2` and `create!/2`. `create/2` returns `{:ok, resource}` or `{:error, reason}`. `create!/2` will return just the record on success and will raise an error on failure.

## [](getting-started-with-ash-and-phoenix.html#connecting-your-resource-to-a-phoenix-liveview)Connecting your Resource to a Phoenix LiveView

Now we know how to interact with our resource, we can generate a liveview for it! let's run [`mix ash_phoenix.gen.live`](Mix.Tasks.AshPhoenix.Gen.Live.html) to generate a liveview! Run the following command, declining to name your actor, accepting any other default values, and following the instructions listed at the end for adding the liveview to your router.

```
mix ash_phoenix.gen.live --domain MyAshPhoenixApp.Blog --resource MyAshPhoenixApp.Blog.Post --resourceplural posts
```

Now, start the web server by running [`mix phx.server`](../phoenix/1.7.18/Mix.Tasks.Phx.Server.html). Then, visit the posts route that you added in your browser to see what we have just created.

You can see how using functions created by our `code_interface` makes it easy to integrate Ash with Phoenix.

You may also notice this is the first time we've used the AshPhoenix library. The AshPhoenix library contains utilities to help Ash integrate with Phoenix and LiveView Seamlessly. One of these utilities is [`AshPhoenix.Form`](AshPhoenix.Form.html) which can automatically produce changesets to be used in the forms.

That's it for this guide. We've gone from 0 to a fully working Phoenix App using Ash. To get a closer look, see the accompanying repo [here](https://github.com/team-alembic/my_ash_phoenix_project).

## [](getting-started-with-ash-and-phoenix.html#where-to-next)Where to Next?

We are really just scratching the surface of what can be done in Ash. Look below for what to look at next.

### [](getting-started-with-ash-and-phoenix.html#continue-learning)Continue Learning

There's a few places you can go to learn more about how to use ash:

- Read more about how to query the data in your resources - [`Ash.Query`](../ash/3.4.55/Ash.Query.html)
- [Dig deeper into actions.](../ash/actions.html)
- [Study resource relationship management](https://hexdocs.pm/ash/managing-relationships.html)

### [](getting-started-with-ash-and-phoenix.html#ash-authentication-ash-authentication-phoenix)Ash Authentication &amp; Ash Authentication Phoenix

See the power Ash can bring to your web app or API. [Get authentication working in minutes](../ash_authentication_phoenix/get-started.html).

### [](getting-started-with-ash-and-phoenix.html#add-an-api-or-two)Add an API (or two)

Check out the [AshJsonApi](../ash_json_api/getting-started-with-ash-json-api.html) and [AshGraphql](../ash_graphql/getting-started-with-graphql.html) extensions to effortlessly build APIs around your resources.

[← Previous Page Home](readme.html)

[Next Page → Union Forms](union-forms.html)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) ([current file](https://preview.hex.pm/preview/ash_phoenix/2.1.14/show/documentation/tutorials/getting-started-with-ash-and-phoenix.md)) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/mix/tasks/ash_phoenix.gen.html.ex#L1 "View Source") mix ash\_phoenix.gen.html (ash\_phoenix v2.1.14)

This task renders .ex and .heex templates and copies them to specified directories.

## [](Mix.Tasks.AshPhoenix.Gen.Html.html#module-positional-arguments)Positional Arguments

- `domain` - The domain (e.g. "Shop").
- `resource` - The resource (e.g. "Product").

## [](Mix.Tasks.AshPhoenix.Gen.Html.html#module-options)Options

- `--resource-plural` - The plural resource name (e.g. "products")

mix ash\_phoenix.gen.html MyApp.Shop MyApp.Shop.Product --plural-name products

# [](Mix.Tasks.AshPhoenix.Gen.Html.html#summary)Summary

## [Functions](Mix.Tasks.AshPhoenix.Gen.Html.html#functions)

[run(args)](Mix.Tasks.AshPhoenix.Gen.Html.html#run/1)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

# [](Mix.Tasks.AshPhoenix.Gen.Html.html#functions)Functions

[](Mix.Tasks.AshPhoenix.Gen.Html.html#run/1)

# run(args)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/mix/tasks/ash_phoenix.gen.html.ex#L14)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/mix/tasks/ash_phoenix.gen.live.ex#L2 "View Source") mix ash\_phoenix.gen.live (ash\_phoenix v2.1.14)

Generates liveviews for a given domain and resource.

The domain and resource must already exist, this task does not define them.

## [](Mix.Tasks.AshPhoenix.Gen.Live.html#module-example)Example

```
mix ash_phoenix.gen.live --domain ExistingDomainName --resource ExistingResourceName --resourceplural ExistingResourceNames
```

## [](Mix.Tasks.AshPhoenix.Gen.Live.html#module-options)Options

- `--domain` - Existing domain
- `--resource` - Existing resource
- `--resourceplural` - Plural resource name

# [](Mix.Tasks.AshPhoenix.Gen.Live.html#summary)Summary

## [Functions](Mix.Tasks.AshPhoenix.Gen.Live.html#functions)

[igniter(igniter, argv)](Mix.Tasks.AshPhoenix.Gen.Live.html#igniter/2)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.9/Igniter.Mix.Task.html#c:igniter/2).

# [](Mix.Tasks.AshPhoenix.Gen.Live.html#functions)Functions

[](Mix.Tasks.AshPhoenix.Gen.Live.html#igniter/2)

# igniter(igniter, argv)

[](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/lib/mix/tasks/ash_phoenix.gen.live.ex#L43)

Callback implementation for [`Igniter.Mix.Task.igniter/2`](../igniter/0.5.9/Igniter.Mix.Task.html#c:igniter/2).

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/documentation/topics/nested-forms.md#L1 "View Source") Nested Forms

Make sure you're familiar with the basics of [`AshPhoenix.Form`](AshPhoenix.Form.html) before reading this guide.

When we talk about "nested" or "related" forms, we mean sets of form inputs that are for resource actions for related or embedded resources.

For example, you might have a form for creating a "business" that can also include multiple "locations". In some cases, you may have buttons to add or remove from a list of nested forms, you may be able to drag and drop to reorder forms, etc. In other cases, the form may just be for one related thing, think a form for updating a "user" that also contains inputs for its associated "profile".

## [](nested-forms.html#defining-the-structure)Defining the structure

### [](nested-forms.html#inferring-from-the-action)Inferring from the action

[`AshPhoenix.Form`](AshPhoenix.Form.html) automatically infers what "nested forms" are available, based on introspecting actions which use `change manage_relationship`. For example, in the following action:

```
# on a `MyApp.Operations.Business` resource
create :create do
  accept [:name]

  argument :locations, {:array, :map}

  change manage_relationship(:locations, type: :create)
end
```

With this action, you could submit an input like so:

```
%{name: "Wally World", locations: [%{name: "HQ", address: "1 hq street"}]}
```

[`AshPhoenix.Form`](AshPhoenix.Form.html) will look at the action, allowing you to use [`Phoenix`](../phoenix/1.7.18/Phoenix.html)'s `<.inputs_for` component for `locations`. Here is what it might look like in practice:

```
<.simple_form for={@form} phx-change="validate" phx-submit="submit">
  <.input field={@form[:email]} />

  <.inputs_for :let={location} field={@form[:locations]}>
    <.input field={location[:name]} />
  </.inputs_for>
</.form>
```

To turn this automatic behavior off, you can specify `forms: [auto?: false]` when creating the form.

### [](nested-forms.html#manually-defining-nested-forms)Manually defining nested forms

You can manually specify nested form configurations using the `forms` option.

For example:

```
AshPhoenix.Form.for_create(
  MyApp.Operations.Business, 
  :create, 
  forms: [
    locations: [
      type: :list,
      resource: MyApp.Operations.Location,
      create_action: :create
    ]
  ]
)
```

You should prefer to use the automatic form definition wherever possible, but this exists as an escape hatch to customize configuration.

## [](nested-forms.html#updating-existing-data)Updating existing data

You should be sure to load any relationships that are necessary for your `manage_relationship`s when you want to update the nested items. For example, if the form above was for an update action, you may want to allow updating the existing locations all in a single form. [`AshPhoenix.Form`](AshPhoenix.Form.html) will show a form for each existing location, but only if the locations are loaded on the business already. For example:

```
business = Ash.load!(business, :locations)

form = AshPhoenix.Form.for_update(business, :update)
```

### [](nested-forms.html#not-using-tailwind)Not using tailwind?

If you're not using tailwind, you'll need to replace `class="hidden"` in the examples below with something else. In standard HTML, you'd do `<input .... hidden />`. As long as the checkbox is hidden, you're good!

## [](nested-forms.html#adding-nested-forms)Adding nested forms

There are two ways to add nested forms.

### [](nested-forms.html#the-_add_-checkbox)The `_add_*` checkbox

```
<.simple_form for={@form} phx-change="validate" phx-submit="submit">
  <.input field={@form[:email]} />

  <.inputs_for :let={location} field={@form[:locations]}>
    <.input field={location[:name]} />
  </.inputs_for>

  <label>
    <input
      type="checkbox"
      name={"#{@form.name}[_add_locations]"}
      value="end"
      class="hidden"
    />
    <.icon name="hero-plus" />
  </label>
</.form>
```

This checkbox, when checked, will add a parameter like `form[_add_locations]=end`. When [`AshPhoenix.Form`](AshPhoenix.Form.html) is handling nested forms, it will see that and append an empty form at the end. Valid values are `"start"`, `"end"` and an index, i.e `"3"`, in which case the new form will be inserted at that index.

### [](nested-forms.html#but-the-checkbox-is-hidden-what-gives)But the checkbox is hidden, what gives?

If you're anything like me, the label + checkbox combo above may confuse you at first sight. When you have a checkbox inside of a label, clicking on the label [counts as clicking the checkbox itself](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#providing_a_bigger_hit_area_for_your_checkboxes)!

### [](nested-forms.html#ashphoenix-form-add_form)`AshPhoenix.Form.add_form`

In some cases, you may want to add a form either in a way that can't be triggered by a checkbox or that requires some additional data (like non-empty starting params). In those cases, you can use a button and a `handle_event` For example:

```
<.simple_form for={@form} phx-change="validate" phx-submit="submit">
  <.input field={@form[:email]} />

  <.inputs_for :let={location} field={@form[:locations]}>
    <.input field={location[:name]} />
  </.inputs_for>

  <.button type="button" phx-click="add-form" phx-value-path={@form.name <> "[locations]"}>
    <.icon name="hero-plus" />
  </.button>
</.form>
```

### [](nested-forms.html#whats-with-form-name-locations)whats with `@form.name <> "[locations]"`

By always using a path "relative" to the root form, we can handle cases where we are adding a form to a multiply-nested form. So the path could be somethign like locations\[0]\[addresses]\[1]. The event handler has to know exactly where we are adding a form. In the example above, we *could* just say `add_form(form, :locations)`. It would be simpler, but we want to highlight how to work with potentially deeply nested data.

```
def handle_event("add-form", %{"path" => path}, socket) do
  form = AshPhoenix.Form.add_form(socket.assigns.form, path, params: %{
    address: "Put your address here!"
  })

  {:noreply, assign(socket, :form, form)}
end
```

## [](nested-forms.html#removing-nested-forms)Removing nested forms

Just like adding nested forms, there are two ways to *remove* nested forms.

### [](nested-forms.html#using-the-_drop_-checkbox)Using the `_drop_*` checkbox

The `_drop_*` checkbox uses checkboxes which add form indices to a list that should be *removed* from the list. For example, given the following:

```
<.simple_form for={@form} phx-change="validate" phx-submit="submit">
  <.input field={@form[:email]} />

  <.inputs_for :let={location} field={@form[:locations]}>
    <.input field={location[:name]} />

    <label>
      <input
        type="checkbox"
        name={"#{@form.name}[_drop_locations][]"}
        value={location_form.index}
        class="hidden"
      />

      <.icon name="hero-x-mark" />
    </label>
  </.inputs_for>
</.form>
```

When the checkbox is checked, the server sees:

```
%{"form" => %{"_drop_locations" => ["0"]}}
```

We use this information to automatically remove the item at that index on validate.

### [](nested-forms.html#using-ashphoenix-form-remove_form)Using `AshPhoenix.Form.remove_form`

Just like adding forms, there is a manual way to remove forms. In this case we pass the full path to the form being removed.

```
<.simple_form for={@form} phx-change="validate" phx-submit="submit">
  <.input field={@form[:email]} />

  <.inputs_for :let={location} field={@form[:locations]}>
    <.input field={location[:name]} />

    <.button type="button" phx-click="remove-form" phx-value-path={location.name}>
      <.icon name="hero-x-mark" />
    </.button>
  </.inputs_for>
</.form>
```

```
def handle_event("remove-form", %{"path" => path}, socket) do
  form = AshPhoenix.Form.remove_form(socket.assigns.form, path)

  {:noreply, assign(socket, :form, form)}
end
```

## [](nested-forms.html#sorting-nested-forms)Sorting nested forms

Just like adding and removing forms, there are two ways to *sort* nested forms too!

### [](nested-forms.html#using-_sort_-checkboxes)Using `_sort_*` checkboxes

This method is useful when combined with something like [`sortable.js`](https://sortablejs.github.io/Sortable/) to allow for dragging and dropping on the front end.

### [](nested-forms.html#the-order_is_key-option)the `order_is_key` option

If you are working with a sorted relationship, you will likely want to couple it with the `order_is_key` option of `managed_relationships`. This writes the order of items in the list of inputs into each input, as if it was provided as an input

`change manage_relationship(:locations, type: :direct_control, order_is_key: :position)` In the above example, if you provided a list of inputs like `[%{address: "foo"}, %{address: "bar"}]`, it would first be converted into `[%{address: "foo, order: 0}, %{address: "bar", order: 1}]` before being processed.

Lets say you had the following `Sortable` hook in your `app.js`

```
import Sortable from "sortablejs"

export const Sortable = {
  mounted() {
    new Sortable(this.el, {
      animation: 150,
      draggable: '[data-sortable="true"]',
      ghostClass: "bg-yellow-100",
      dragClass: "shadow-2xl",
      onEnd: (evt) => {
        this.el.closest("form").querySelector("input").dispatchEvent(new Event("input", {bubbles: true}))
      }
    })
  }
}
...

let Hooks = {}

Hooks.Sortable = Sortable
```

You could use the `_sort_*` checkbox in each nested form like so:

```
<.simple_form for={@form} phx-change="validate" phx-submit="submit">
  <.input field={@form[:email]} />

  <div id="location-list" phx-hook="Sortable">
    <.inputs_for :let={location} field={@form[:locations]}>
      <div data-sortable="true">
        <input
          type="hidden"
          name={"#{@form.name}[_sort_locations][]"}
          value={location_form.index}
        />

        <.input field={location[:name]} />
      </div>
    </.inputs_for>
</.form>
```

In this case you'd drag the entire div. `sortable.js` supports all kinds of useful features, like drag handles. See [their docs](https://sortablejs.github.io/Sortable/) for more.

Now, lets say you were to drag the second form above the first form, the server would see the params as:

```
%{"form" => %{"_sort_locations" => ["1", "0"]}}
```

[`AshPhoenix.Form`](AshPhoenix.Form.html) would then sort the nested forms accordingly.

### [](nested-forms.html#using-ashphoenix-form-sort_forms-3)Using [`AshPhoenix.Form.sort_forms/3`](AshPhoenix.Form.html#sort_forms/3)

The manual way is using [`AshPhoenix.Form.sort_forms/3`](AshPhoenix.Form.html#sort_forms/3). This can be used to move a specific element up or down, or to sort all forms. `sortable.js` can be used in such a way that it provides the full sorting back to your server.

#### Providing a full sort order

This could be used to send a `handle_event` that gives you a list of indices in a new order. An example of that setup can be seen [here](https://fullstackphoenix.com/tutorials/sortable-js-phoenix-liveview). Keep in mind that you'll want to adjust the method to extract a field from each element of the current index, using something like `data-current-index={location_form.index}` to store the index.

`indices` might look something like this: `["0", "1", "3", "2"]`

```
def handle_event("update-sorting", %{"path" => path, "indices" => indices}, socket) do
  form = AshPhoenix.Form.sort_forms(socket, path, indices)
  {:noreply, assign(socket, form: form)}
end
```

#### Moving a specific form up

If you wanted up/down buttons, you could use event handlers like the following.

```
def handle_event("move-up", %{"path" => form_to_move}, socket) do
  # decrement typically means "move up" visually
  # because forms are rendered down the page ascending
  form = AshPhoenix.Form.sort_forms(socket, form_to_move, :decrement)
  {:noreply, assign(socket, form: form)}
end

def handle_event("move-down", %{"path" => form_to_move}, socket) do
  # increment typically means "move down" visually
  # because forms are rendered down the page ascending
  form = AshPhoenix.Form.sort_forms(socket, form_to_move, :increment)
  {:noreply, assign(socket, form: form)}
end
```

## [](nested-forms.html#putting-it-all-together)Putting it all together

Lets look at what it looks like with all of the checkbox-based features in one:

```
defmodule MyApp.MyForm do
  use MyAppWeb, :live_view

  def render(assigns) do
    ~H"""
    <.simple_form for={@form} phx-change="validate" phx-submit="submit">
      <.input field={@form[:email]} />

      <!-- Use sortable.js to allow sorting nested input -->
      <div id="location-list" phx-hook="Sortable">
        <.inputs_for :let={location} field={@form[:locations]}>
          <!-- inputs each nested location -->
          <div data-sortable="true">
            <!-- AshPhoenix.Form automatically applies this sort -->
            <input
              type="hidden"
              name={"#{@form.name}[_sort_locations][]"}
              value={location_form.index}
            />

            <.input field={location[:name]} />

            <!-- AshPhoenix.Form automatically removes items when checked -->
            <label>
              <input
                type="checkbox"
                name={"#{@form.name}[_drop_locations][]"}
                value={location_form.index}
                class="hidden"
              />

              <.icon name="hero-x-mark" />
            </label>
          </div>
        </.inputs_for>

        <!-- AshPhoenix.Form automatically appends a new item when checked -->
        <label>
          <input
            type="checkbox"
            name={"#{@form.name}[_add_locations]"}
            value="end"
            class="hidden"
          />
          <.icon name="hero-plus" />
        </label>
      </div>
    </.form>
    """
  end

  def mount(_params, _session, socket) do
    {:ok, assign(socket, form: MyApp.Operations.form_to_create_business())}
  end

  def handle_event(socket, "validate", %{"form" => params}) do
    {:noreply, assign(socket, :form, AshPhoenix.Form.validate(socket.assigns.form, params))}
  end

  def handle_event(socket, "submit", %{"form" => params}) do
    case AshPhoenix.Form.submit(socket.assigns.form, params: params) do
      {:ok, business} ->
        socket =
          socket
          |> put_flash(:success, "Business created successfully")
          |> push_navigate(to: ~p"/businesses/#{business.id}")

        {:noreply, socket}

      {:error, form} ->
        {:noreply, assign(socket, :form, form)}
    end
  end
end
```

[← Previous Page Union Forms](union-forms.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) ([current file](https://preview.hex.pm/preview/ash_phoenix/2.1.14/show/documentation/topics/nested-forms.md)) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_phoenix/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_phoenix.svg)](https://hex.pm/packages/ash_phoenix) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_phoenix.html)

# AshPhoenix

Welcome! This is the package for integrating [Phoenix Framework](https://www.phoenixframework.org) and [Ash Framework](../ash.html). It provides tools for integrating with Phoenix forms ([`AshPhoenix.Form`](AshPhoenix.Form.html)), Phoenix LiveViews ([`AshPhoenix.LiveView`](AshPhoenix.LiveView.html)) and more.

## [](readme.html#installation)Installation

Add `ash_phoenix` to your list of dependencies in `mix.exs`:

```
{:ash_phoenix, "~> 2.1.14"}
```

## [](readme.html#whats-in-the-box)Whats in the box?

- [`AshPhoenix.Form`](AshPhoenix.Form.html) - A form data structure for using resource actions with phoenix forms
- [`AshPhoenix.Form.Auto`](AshPhoenix.Form.Auto.html) - Tools to automatically determine nested form structures based on calls to `manage_relationship` for an action.
- [`AshPhoenix.FilterForm`](AshPhoenix.FilterForm.html) - A form data structure for building filter statements
- [`AshPhoenix.LiveView`](AshPhoenix.LiveView.html) - Helpers for querying data and integrating changes
- [`AshPhoenix.SubdomainPlug`](AshPhoenix.SubdomainPlug.html) - A plug to determine a tenant using subdomains for multitenancy
- [`AshPhoenix.FormData.Error`](AshPhoenix.FormData.Error.html) - A protocol to allow errors to be rendered in forms
- [`Phoenix.HTML.Safe`](../phoenix_html/4.2.0/Phoenix.HTML.Safe.html) implementations for [`Ash.CiString`](../ash/3.4.55/Ash.CiString.html), [`Ash.NotLoaded`](../ash/3.4.55/Ash.NotLoaded.html) and [`Decimal`](../decimal/2.3.0/Decimal.html)
- [`mix ash_phoenix.gen.live`](Mix.Tasks.AshPhoenix.Gen.Live.html) for generating liveview modules
- [`mix ash_phoenix.gen.html`](Mix.Tasks.AshPhoenix.Gen.Html.html) for generating controllers and views

## [](readme.html#tutorials)Tutorials

- [Getting Started with Ash and Phoenix](getting-started-with-ash-and-phoenix.html)

## [](readme.html#topics)Topics

- [Union Forms](union-forms.html)
- [Nested Forms](nested-forms.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Get Started with Ash and Phoenix](getting-started-with-ash-and-phoenix.html)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) ([current file](https://preview.hex.pm/preview/ash_phoenix/2.1.14/show/README.md)) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_phoenix](assets/logo.png)](https://github.com/ash-project/ash_phoenix)

[ash\_phoenix](https://github.com/ash-project/ash_phoenix)

v2.1.14

- Pages
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_phoenix

Settings

# [View Source](https://github.com/ash-project/ash_phoenix/blob/v2.1.14/documentation/topics/union-forms.md#L1 "View Source") Union Forms

When building a form for a union, you use `inputs_for` as normal, but a few things are done for you under the hood.

Lets take this example union:

```
defmodule NormalContent do
  use Ash.Resource, data_layer: :embedded

  attributes do
    attribute :body, :string, allow_nil?: false
  end

  actions do
    defaults [:read, create: [:body], update: [:body]]
  end
end

defmodule SpecialContent do
  use Ash.Resource, data_layer: :embedded

  attributes do
    attribute :text, :string, allow_nil?: false
  end

  actions do
    defaults [:read, create: [:text], update: [:text]]
  end
end

defmodule Content do
  use Ash.Type.NewType,
    subtype_of: :union,
    constraints: [
      types: [
        normal: [
          type: NormalContent,
          tag: :type,
          tag_value: :normal
        ],
        special: [
          type: SpecialContent,
          tag: :type,
          tag_value: :special
        ]
      ]
    ]
end
```

## [](union-forms.html#determining-the-type-for-a-union-form)Determining the type for a union form

We track the type of the value in a hidden param called `_union_type`. You can use this to show a different form depending on the type of thing.

## [](union-forms.html#changing-the-type-of-a-union-form)Changing the type of a union form

If you want to let the user *change* the union type, you would use [`AshPhoenix.Form.remove_form/3`](AshPhoenix.Form.html#remove_form/3) and [`AshPhoenix.Form.add_form/3`](AshPhoenix.Form.html#add_form/3). See the example below for the template, and here is an example event handler

```
def handle_event("type-changed", %{"_target" => path} = params, socket) do
  new_type = get_in(params, path)
  # The last part of the path in this case is the field name
  path = :lists.droplast(path)

  form =
    socket.assigns.form
    |> AshPhoenix.Form.remove_form(path)
    |> AshPhoenix.Form.add_form(path, params: %{"_union_type" => new_type})

  {:noreply, assign(socket, :form, form)}
end
```

## [](union-forms.html#non-embedded-types)Non-embedded types

If one of your union values is a *non* embedded type, like `:integer`, it will still be a nested form, but you would access the single value with `<.input field={nested_form[:value]} .../>`

## [](union-forms.html#example)Example

We might have a form like this:

```
<.inputs_for :let={fc} field={@form[:content]}>
  <!-- Dropdown for setting the union type -->
  <.input
    field={fc[:_union_type]}
    phx-change="type-changed"
    type="select"
    options={[Normal: "normal", Special: "special"]}
  />

  <!-- switch on the union type to display a form -->
  <%= case fc.params["_union_type"] do %>
    <% "normal" -> %>
      <.input  type="text" field={fc[:body]} />
    <% "special" -> %>
      <.input type="text" field={fc[:text]} />
  <% end %>
</.inputs_for>
```

[← Previous Page Get Started with Ash and Phoenix](getting-started-with-ash-and-phoenix.html)

[Next Page → Nested Forms](nested-forms.html)

[Hex Package](https://hex.pm/packages/ash_phoenix/2.1.14) [Hex Preview](https://preview.hex.pm/preview/ash_phoenix/2.1.14) ([current file](https://preview.hex.pm/preview/ash_phoenix/2.1.14/show/documentation/topics/union-forms.md)) Search HexDocs [Download ePub version](ash_phoenix.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.36.1) for the [Elixir programming language](https://elixir-lang.org "Elixir")
