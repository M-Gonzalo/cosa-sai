[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac "View Source") API Reference ash\_rbac v0.6.1

## [](api-reference.html#modules)Modules

[AshRbac](AshRbac.html)

[AshRbac.Actions](AshRbac.Actions.html)

Adds the policies for actions to the dsl\_state

[AshRbac.Fields](AshRbac.Fields.html)

Adds the policies for fields to the dsl\_state

[AshRbac.HasRole](AshRbac.HasRole.html)

Check to determine if the actor has a specific role or if the actor has any of the roles in a list

[AshRbac.Info](AshRbac.Info.html)

Introspection functions for the Rbac Extension

[AshRbac.Policies](AshRbac.Policies.html)

Adds the configured policies to the resource

[AshRbac.Role](AshRbac.Role.html)

The Role entity for the DSL of the rbac extension

[Next Page → Getting Started](getting_started.html)

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/actions.ex#L1 "View Source") AshRbac.Actions (ash\_rbac v0.6.1)

Adds the policies for actions to the dsl\_state

# [](AshRbac.Actions.html#summary)Summary

## [Functions](AshRbac.Actions.html#functions)

[after?(\_)](AshRbac.Actions.html#after?/1)

Callback implementation for [`Spark.Dsl.Transformer.after?/1`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after?/1).

[after\_compile?()](AshRbac.Actions.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after_compile?/0).

[before?(\_)](AshRbac.Actions.html#before?/1)

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:before?/1).

# [](AshRbac.Actions.html#functions)Functions

[Link to this function](AshRbac.Actions.html#after?/1 "Link to this function")

# after?(\_)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/actions.ex#L5 "View Source")

Callback implementation for [`Spark.Dsl.Transformer.after?/1`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after?/1).

[Link to this function](AshRbac.Actions.html#after_compile?/0 "Link to this function")

# after\_compile?()

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/actions.ex#L5 "View Source")

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after_compile?/0).

[Link to this function](AshRbac.Actions.html#before?/1 "Link to this function")

# before?(\_)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/actions.ex#L5 "View Source")

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:before?/1).

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/fields/fields.ex#L1 "View Source") AshRbac.Fields (ash\_rbac v0.6.1)

Adds the policies for fields to the dsl\_state

# [](AshRbac.Fields.html#summary)Summary

## [Functions](AshRbac.Fields.html#functions)

[after?(\_)](AshRbac.Fields.html#after?/1)

Callback implementation for [`Spark.Dsl.Transformer.after?/1`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after?/1).

[after\_compile?()](AshRbac.Fields.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after_compile?/0).

[before?(\_)](AshRbac.Fields.html#before?/1)

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:before?/1).

# [](AshRbac.Fields.html#functions)Functions

[Link to this function](AshRbac.Fields.html#after?/1 "Link to this function")

# after?(\_)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/fields/fields.ex#L6 "View Source")

Callback implementation for [`Spark.Dsl.Transformer.after?/1`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after?/1).

[Link to this function](AshRbac.Fields.html#after_compile?/0 "Link to this function")

# after\_compile?()

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/fields/fields.ex#L6 "View Source")

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after_compile?/0).

[Link to this function](AshRbac.Fields.html#before?/1 "Link to this function")

# before?(\_)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/fields/fields.ex#L6 "View Source")

Callback implementation for [`Spark.Dsl.Transformer.before?/1`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:before?/1).

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/has_role.ex#L1 "View Source") AshRbac.HasRole (ash\_rbac v0.6.1)

Check to determine if the actor has a specific role or if the actor has any of the roles in a list

# [](AshRbac.HasRole.html#summary)Summary

## [Functions](AshRbac.HasRole.html#functions)

[prefer\_expanded\_description?()](AshRbac.HasRole.html#prefer_expanded_description?/0)

Callback implementation for [`Ash.Policy.Check.prefer_expanded_description?/0`](../ash/3.4.21/Ash.Policy.Check.html#c:prefer_expanded_description?/0).

[requires\_original\_data?(\_, \_)](AshRbac.HasRole.html#requires_original_data?/2)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](../ash/3.4.21/Ash.Policy.Check.html#c:requires_original_data?/2).

[strict\_check(actor, context, opts)](AshRbac.HasRole.html#strict_check/3)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](../ash/3.4.21/Ash.Policy.Check.html#c:strict_check/3).

[type()](AshRbac.HasRole.html#type/0)

Callback implementation for [`Ash.Policy.Check.type/0`](../ash/3.4.21/Ash.Policy.Check.html#c:type/0).

# [](AshRbac.HasRole.html#functions)Functions

[Link to this function](AshRbac.HasRole.html#prefer_expanded_description?/0 "Link to this function")

# prefer\_expanded\_description?()

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/has_role.ex#L5 "View Source")

Callback implementation for [`Ash.Policy.Check.prefer_expanded_description?/0`](../ash/3.4.21/Ash.Policy.Check.html#c:prefer_expanded_description?/0).

[Link to this function](AshRbac.HasRole.html#requires_original_data?/2 "Link to this function")

# requires\_original\_data?(\_, \_)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/has_role.ex#L5 "View Source")

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](../ash/3.4.21/Ash.Policy.Check.html#c:requires_original_data?/2).

[Link to this function](AshRbac.HasRole.html#strict_check/3 "Link to this function")

# strict\_check(actor, context, opts)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/has_role.ex#L5 "View Source")

Callback implementation for [`Ash.Policy.Check.strict_check/3`](../ash/3.4.21/Ash.Policy.Check.html#c:strict_check/3).

[Link to this function](AshRbac.HasRole.html#type/0 "Link to this function")

# type()

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/has_role.ex#L5 "View Source")

Callback implementation for [`Ash.Policy.Check.type/0`](../ash/3.4.21/Ash.Policy.Check.html#c:type/0).

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac.ex#L1 "View Source") AshRbac (ash\_rbac v0.6.1)

# [](AshRbac.html#summary)Summary

## [Functions](AshRbac.html#functions)

[rbac(body)](AshRbac.html#rbac/1)

# [](AshRbac.html#functions)Functions

[Link to this macro](AshRbac.html#rbac/1 "Link to this macro")

# rbac(body)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac.ex#L177 "View Source") (macro)

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac.ex#L127 "View Source") AshRbac.Info (ash\_rbac v0.6.1)

Introspection functions for the Rbac Extension

# [](AshRbac.Info.html#summary)Summary

## [Functions](AshRbac.Info.html#functions)

[bypass(resource)](AshRbac.Info.html#bypass/1)

[bypass\_roles\_field(resource)](AshRbac.Info.html#bypass_roles_field/1)

[public?(resource)](AshRbac.Info.html#public?/1)

[roles(resource)](AshRbac.Info.html#roles/1)

# [](AshRbac.Info.html#functions)Functions

[Link to this function](AshRbac.Info.html#bypass/1 "Link to this function")

# bypass(resource)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac.ex#L133 "View Source")

[Link to this function](AshRbac.Info.html#bypass_roles_field/1 "Link to this function")

# bypass\_roles\_field(resource)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac.ex#L137 "View Source")

[Link to this function](AshRbac.Info.html#public?/1 "Link to this function")

# public?(resource)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac.ex#L141 "View Source")

[Link to this function](AshRbac.Info.html#roles/1 "Link to this function")

# roles(resource)

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac.ex#L145 "View Source")

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/policies.ex#L1 "View Source") AshRbac.Policies (ash\_rbac v0.6.1)

Adds the configured policies to the resource

# [](AshRbac.Policies.html#summary)Summary

## [Functions](AshRbac.Policies.html#functions)

[after\_compile?()](AshRbac.Policies.html#after_compile?/0)

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after_compile?/0).

# [](AshRbac.Policies.html#functions)Functions

[Link to this function](AshRbac.Policies.html#after_compile?/0 "Link to this function")

# after\_compile?()

[View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/policies.ex#L6 "View Source")

Callback implementation for [`Spark.Dsl.Transformer.after_compile?/0`](../spark/2.2.31/Spark.Dsl.Transformer.html#c:after_compile?/0).

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/lib/ash_rbac/role.ex#L1 "View Source") AshRbac.Role (ash\_rbac v0.6.1)

The Role entity for the DSL of the rbac extension

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/documentation/getting_started.md#L1 "View Source") Getting Started

## [](getting_started.html#installation)Installation

Add the ash\_rbac dependency to your mix.exs

```
defp deps do
  [
    {:ash_rbac, "~> 0.6.1"}
  ]
end
```

## [](getting_started.html#adding-ashrbac-to-your-resource)Adding AshRbac to your resource

First, the authorizer and the extension need to be added.

```
defmodule RootResource do
    @moduledoc false
    use Ash.Resource,
      data_layer: Ash.DataLayer.Ets,
      authorizers: [Ash.Policy.Authorizer], # Add the authorizer
      extensions: [AshRbac] # Add the extension
  ...
end
```

Afterwards, you can add a rbac block to your resource.

```
  rbac do
    role :user do
      fields [:name, :email]
      actions [:read]
    end
  end
```

The options defined in the rbac block are transformed into policies during compile time.

The previous example will generate the following policies:

```
field_policies do
  field_policy [:name, :email], [{AshRbac.HasRole, [role: [:user]]}] do
    authorize_if always()
  end

  # it also adds a policy for all other fields like this
  field_policy [:other_fields, ...] do
    forbid_if always()
  end
end

policies do
  policy [action(:read), {AshRbac.HasRole, [role: [:user]]}] do
    authorize_if always()
  end
end
```

It is possible to add extra conditions to fields and actions:

```
  rbac do
    role :user do
      fields [:name, {:email, actor_attribute_equals(:field, "value")}]
      actions [{:read, accessing_from(RelatedResource, :path)}]
    end
  end
```

The conditions are added to the generated policies as well.

```
field_policies do
  field_policy [:name], [{AshRbac.HasRole, [role: [:user]]}] do
    authorize_if always()
  end

  field_policy [:email], [{AshRbac.HasRole, [role: [:user], actor_attribute_equals(:field, "value")]}] do
    authorize_if always()
  end

  # it also adds a policy for all other fields like this
  field_policy [:other_fields, ...] do
    forbid_if always()
  end
end

policies do
  policy [action(:read), {hAshRbac.HasRole, [role: [:user]]}, accessing_from(RelatedResource, :path)] do
    authorize_if always()
  end
end
```

[← Previous Page API Reference](api-reference.html)

[Next Page → Relationships](relationships.html)

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) ([current file](https://preview.hex.pm/preview/ash_rbac/0.6.1/show/documentation/getting_started.md)) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/README.md#L1 "View Source") AshRbac

A small extension that allows for easier application of policies

```
rbac do
  role :user do
    fields [:fields, :user, :can, :see]
    actions [:actions, :user, :can :use]
  end
end
```

## [](readme.html#installation)Installation

The package can be installed by adding `ash_rbac` to your list of dependencies in `mix.exs`:

```
def deps do
  [
    {:ash_rbac, "~> 0.6.1"},
  ]
end
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc) and published on [HexDocs](../index.html). Once published, the docs can be found at [https://hexdocs.pm/ash\_rbac](../ash_rbac.html).

[← Previous Page Relationships](relationships.html)

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) ([current file](https://preview.hex.pm/preview/ash_rbac/0.6.1/show/README.md)) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_rbac](assets/logo.png)](https://github.com/traveltechdeluxe/ash-rbac)

[ash\_rbac](https://github.com/traveltechdeluxe/ash-rbac)

v0.6.1

- Pages
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_rbac

Settings

# [View Source](https://github.com/traveltechdeluxe/ash-rbac/blob/main/documentation/relationships.md#L1 "View Source") Relationships

As relationships are not part of field policies it is necessary to protect them with an action policy. This can be done by passing a custom condition to the action.

```
# only allow read access if accessed from a parent
rbac do
  role :user do
    actions [
      {:read, accessing_from(Parent, :child)}
    ]
  end
end

# result
policies do
  policy [action(:read), accessing_from(Parent, :child)] do
    authorize_if {AshRbac.HasRole, [role: :user]}
  end
end
```

[← Previous Page Getting Started](getting_started.html)

[Next Page → Readme](readme.html)

[Hex Package](https://hex.pm/packages/ash_rbac/0.6.1) [Hex Preview](https://preview.hex.pm/preview/ash_rbac/0.6.1) ([current file](https://preview.hex.pm/preview/ash_rbac/0.6.1/show/documentation/relationships.md)) Search HexDocs [Download ePub version](ash_rbac.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
