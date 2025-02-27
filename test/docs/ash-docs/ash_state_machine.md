[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine "View Source") API Reference ash\_state\_machine v0.2.7

## [](api-reference.html#modules)Modules

[AshStateMachine](AshStateMachine.html)

Provides tools for defining and working with resource-backed state machines.

[AshStateMachine.BuiltinChanges](AshStateMachine.BuiltinChanges.html)

Changes for working with AshStateMachine resources.

[AshStateMachine.Charts](AshStateMachine.Charts.html)

Returns a mermaid flow chart of a given state machine resource.

[AshStateMachine.Checks.ValidNextState](AshStateMachine.Checks.ValidNextState.html)

A policy for pre\_flight checking if a state transition is allowed.

[AshStateMachine.Errors.InvalidInitialState](AshStateMachine.Errors.InvalidInitialState.html)

Used when an initial state is set that is not a valid initial state

[AshStateMachine.Errors.NoMatchingTransition](AshStateMachine.Errors.NoMatchingTransition.html)

Used when a state change occurs in an action with no matching transition

[AshStateMachine.Info](AshStateMachine.Info.html)

Introspection helpers for [`AshStateMachine`](AshStateMachine.html)

[AshStateMachine.Transition](AshStateMachine.Transition.html)

The configuration for an transition.

## [](api-reference.html#mix-tasks)Mix Tasks

[mix ash\_state\_machine.generate\_flow\_charts](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html)

Generates a Mermaid Flow Chart for each [`Ash.Resource`](../ash/3.4.43/Ash.Resource.html) with the [`AshStateMachine`](AshStateMachine.html) extension alongside the resource.

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/builtin_changes/builtin_changes.ex#L1 "View Source") AshStateMachine.BuiltinChanges (ash\_state\_machine v0.2.7)

Changes for working with AshStateMachine resources.

# [](AshStateMachine.BuiltinChanges.html#summary)Summary

## [Functions](AshStateMachine.BuiltinChanges.html#functions)

[next\_state()](AshStateMachine.BuiltinChanges.html#next_state/0)

Try and transition to the next state. Must be only one possible next state.

[transition\_state(target)](AshStateMachine.BuiltinChanges.html#transition_state/1)

Changes the state to the target state, validating the transition

# [](AshStateMachine.BuiltinChanges.html#functions)Functions

[](AshStateMachine.BuiltinChanges.html#next_state/0)

# next\_state()

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/builtin_changes/builtin_changes.ex#L16)

Try and transition to the next state. Must be only one possible next state.

[](AshStateMachine.BuiltinChanges.html#transition_state/1)

# transition\_state(target)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/builtin_changes/builtin_changes.ex#L9)

Changes the state to the target state, validating the transition

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/charts.ex#L1 "View Source") AshStateMachine.Charts (ash\_state\_machine v0.2.7)

Returns a mermaid flow chart of a given state machine resource.

# [](AshStateMachine.Charts.html#summary)Summary

## [Functions](AshStateMachine.Charts.html#functions)

[mermaid\_flowchart(resource)](AshStateMachine.Charts.html#mermaid_flowchart/1)

[mermaid\_state\_diagram(resource)](AshStateMachine.Charts.html#mermaid_state_diagram/1)

# [](AshStateMachine.Charts.html#functions)Functions

[](AshStateMachine.Charts.html#mermaid_flowchart/1)

# mermaid\_flowchart(resource)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/charts.ex#L18)

```
@spec mermaid_flowchart(Ash.Resource.t()) :: String.t()
```

[](AshStateMachine.Charts.html#mermaid_state_diagram/1)

# mermaid\_state\_diagram(resource)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/charts.ex#L7)

```
@spec mermaid_state_diagram(Ash.Resource.t()) :: String.t()
```

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L1 "View Source") AshStateMachine.Checks.ValidNextState (ash\_state\_machine v0.2.7)

A policy for pre\_flight checking if a state transition is allowed.

# [](AshStateMachine.Checks.ValidNextState.html#summary)Summary

## [Functions](AshStateMachine.Checks.ValidNextState.html#functions)

[auto\_filter(actor, authorizer, opts)](AshStateMachine.Checks.ValidNextState.html#auto_filter/3)

Callback implementation for [`Ash.Policy.Check.auto_filter/3`](../ash/3.4.43/Ash.Policy.Check.html#c:auto_filter/3).

[auto\_filter\_not(actor, authorizer, opts)](AshStateMachine.Checks.ValidNextState.html#auto_filter_not/3)

[check(actor, data, authorizer, opts)](AshStateMachine.Checks.ValidNextState.html#check/4)

Callback implementation for [`Ash.Policy.Check.check/4`](../ash/3.4.43/Ash.Policy.Check.html#c:check/4).

[describe(\_)](AshStateMachine.Checks.ValidNextState.html#describe/1)

Callback implementation for [`Ash.Policy.Check.describe/1`](../ash/3.4.43/Ash.Policy.Check.html#c:describe/1).

[eager\_evaluate?()](AshStateMachine.Checks.ValidNextState.html#eager_evaluate?/0)

Callback implementation for [`Ash.Policy.Check.eager_evaluate?/0`](../ash/3.4.43/Ash.Policy.Check.html#c:eager_evaluate?/0).

[expand\_description(actor, authorizer, opts)](AshStateMachine.Checks.ValidNextState.html#expand_description/3)

Callback implementation for [`Ash.Policy.Check.expand_description/3`](../ash/3.4.43/Ash.Policy.Check.html#c:expand_description/3).

[filter(actor, context, options)](AshStateMachine.Checks.ValidNextState.html#filter/3)

Callback implementation for [`Ash.Policy.FilterCheck.filter/3`](../ash/3.4.43/Ash.Policy.FilterCheck.html#c:filter/3).

[prefer\_expanded\_description?()](AshStateMachine.Checks.ValidNextState.html#prefer_expanded_description?/0)

Callback implementation for [`Ash.Policy.Check.prefer_expanded_description?/0`](../ash/3.4.43/Ash.Policy.Check.html#c:prefer_expanded_description?/0).

[reject(actor, authorizer, opts)](AshStateMachine.Checks.ValidNextState.html#reject/3)

Callback implementation for [`Ash.Policy.FilterCheck.reject/3`](../ash/3.4.43/Ash.Policy.FilterCheck.html#c:reject/3).

[requires\_original\_data?(\_, \_)](AshStateMachine.Checks.ValidNextState.html#requires_original_data?/2)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](../ash/3.4.43/Ash.Policy.Check.html#c:requires_original_data?/2).

[strict\_check(actor, authorizer, opts)](AshStateMachine.Checks.ValidNextState.html#strict_check/3)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](../ash/3.4.43/Ash.Policy.Check.html#c:strict_check/3).

[strict\_check\_context(opts)](AshStateMachine.Checks.ValidNextState.html#strict_check_context/1)

[type()](AshStateMachine.Checks.ValidNextState.html#type/0)

Callback implementation for [`Ash.Policy.Check.type/0`](../ash/3.4.43/Ash.Policy.Check.html#c:type/0).

# [](AshStateMachine.Checks.ValidNextState.html#functions)Functions

[](AshStateMachine.Checks.ValidNextState.html#auto_filter/3)

# auto\_filter(actor, authorizer, opts)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.Check.auto_filter/3`](../ash/3.4.43/Ash.Policy.Check.html#c:auto_filter/3).

[](AshStateMachine.Checks.ValidNextState.html#auto_filter_not/3)

# auto\_filter\_not(actor, authorizer, opts)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

[](AshStateMachine.Checks.ValidNextState.html#check/4)

# check(actor, data, authorizer, opts)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.Check.check/4`](../ash/3.4.43/Ash.Policy.Check.html#c:check/4).

[](AshStateMachine.Checks.ValidNextState.html#describe/1)

# describe(\_)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L7)

Callback implementation for [`Ash.Policy.Check.describe/1`](../ash/3.4.43/Ash.Policy.Check.html#c:describe/1).

[](AshStateMachine.Checks.ValidNextState.html#eager_evaluate?/0)

# eager\_evaluate?()

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.Check.eager_evaluate?/0`](../ash/3.4.43/Ash.Policy.Check.html#c:eager_evaluate?/0).

[](AshStateMachine.Checks.ValidNextState.html#expand_description/3)

# expand\_description(actor, authorizer, opts)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.Check.expand_description/3`](../ash/3.4.43/Ash.Policy.Check.html#c:expand_description/3).

[](AshStateMachine.Checks.ValidNextState.html#filter/3)

# filter(actor, context, options)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L11)

Callback implementation for [`Ash.Policy.FilterCheck.filter/3`](../ash/3.4.43/Ash.Policy.FilterCheck.html#c:filter/3).

[](AshStateMachine.Checks.ValidNextState.html#prefer_expanded_description?/0)

# prefer\_expanded\_description?()

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.Check.prefer_expanded_description?/0`](../ash/3.4.43/Ash.Policy.Check.html#c:prefer_expanded_description?/0).

[](AshStateMachine.Checks.ValidNextState.html#reject/3)

# reject(actor, authorizer, opts)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.FilterCheck.reject/3`](../ash/3.4.43/Ash.Policy.FilterCheck.html#c:reject/3).

[](AshStateMachine.Checks.ValidNextState.html#requires_original_data?/2)

# requires\_original\_data?(\_, \_)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](../ash/3.4.43/Ash.Policy.Check.html#c:requires_original_data?/2).

[](AshStateMachine.Checks.ValidNextState.html#strict_check/3)

# strict\_check(actor, authorizer, opts)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](../ash/3.4.43/Ash.Policy.Check.html#c:strict_check/3).

[](AshStateMachine.Checks.ValidNextState.html#strict_check_context/1)

# strict\_check\_context(opts)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

[](AshStateMachine.Checks.ValidNextState.html#type/0)

# type()

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/checks/valid_next_state.ex#L5)

Callback implementation for [`Ash.Policy.Check.type/0`](../ash/3.4.43/Ash.Policy.Check.html#c:type/0).

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/errors/invalid_initial_state.ex#L1 "View Source") AshStateMachine.Errors.InvalidInitialState exception (ash\_state\_machine v0.2.7)

Used when an initial state is set that is not a valid initial state

# [](AshStateMachine.Errors.InvalidInitialState.html#summary)Summary

## [Functions](AshStateMachine.Errors.InvalidInitialState.html#functions)

[exception()](AshStateMachine.Errors.InvalidInitialState.html#exception/0)

# [](AshStateMachine.Errors.InvalidInitialState.html#functions)Functions

[](AshStateMachine.Errors.InvalidInitialState.html#exception/0)

# exception()

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/errors/invalid_initial_state.ex#L5)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/errors/no_matching_event.ex#L1 "View Source") AshStateMachine.Errors.NoMatchingTransition exception (ash\_state\_machine v0.2.7)

Used when a state change occurs in an action with no matching transition

# [](AshStateMachine.Errors.NoMatchingTransition.html#summary)Summary

## [Functions](AshStateMachine.Errors.NoMatchingTransition.html#functions)

[exception()](AshStateMachine.Errors.NoMatchingTransition.html#exception/0)

# [](AshStateMachine.Errors.NoMatchingTransition.html#functions)Functions

[](AshStateMachine.Errors.NoMatchingTransition.html#exception/0)

# exception()

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/errors/no_matching_event.ex#L3)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/ash_state_machine.ex#L1 "View Source") AshStateMachine (ash\_state\_machine v0.2.7)

Provides tools for defining and working with resource-backed state machines.

# [](AshStateMachine.html#summary)Summary

## [Functions](AshStateMachine.html#functions)

[possible\_next\_states(record)](AshStateMachine.html#possible_next_states/1)

A reusable helper which returns all possible next states for a record (regardless of action).

[possible\_next\_states(record, action\_name)](AshStateMachine.html#possible_next_states/2)

A reusable helper which returns all possible next states for a record given a specific action.

[state\_machine(body)](AshStateMachine.html#state_machine/1)

[transition\_state(changeset, target)](AshStateMachine.html#transition_state/2)

A utility to transition the state of a changeset, honoring the rules of the resource.

# [](AshStateMachine.html#functions)Functions

[](AshStateMachine.html#possible_next_states/1)

# possible\_next\_states(record)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/ash_state_machine.ex#L233)

```
@spec possible_next_states(Ash.Resource.record()) :: [atom()]
```

A reusable helper which returns all possible next states for a record (regardless of action).

[](AshStateMachine.html#possible_next_states/2)

# possible\_next\_states(record, action\_name)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/ash_state_machine.ex#L251)

```
@spec possible_next_states(Ash.Resource.record(), atom()) :: [atom()]
```

A reusable helper which returns all possible next states for a record given a specific action.

[](AshStateMachine.html#state_machine/1)

# state\_machine(body)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/ash_state_machine.ex#L111)(macro)

[](AshStateMachine.html#transition_state/2)

# transition\_state(changeset, target)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/ash_state_machine.ex#L129)

A utility to transition the state of a changeset, honoring the rules of the resource.

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L1 "View Source") AshStateMachine.Info (ash\_state\_machine v0.2.7)

Introspection helpers for [`AshStateMachine`](AshStateMachine.html)

# [](AshStateMachine.Info.html#summary)Summary

## [Functions](AshStateMachine.Info.html#functions)

[state\_machine\_all\_states(resource\_or\_dsl)](AshStateMachine.Info.html#state_machine_all_states/1)

[state\_machine\_default\_initial\_state(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_default_initial_state/1)

The default initial state

[state\_machine\_default\_initial\_state!(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_default_initial_state!/1)

The default initial state

[state\_machine\_deprecated\_states(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_deprecated_states/1)

A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.

[state\_machine\_deprecated\_states!(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_deprecated_states!/1)

A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.

[state\_machine\_extra\_states(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_extra_states/1)

A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.

[state\_machine\_extra\_states!(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_extra_states!/1)

A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.

[state\_machine\_initial\_states(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_initial_states/1)

The allowed starting states of this state machine.

[state\_machine\_initial\_states!(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_initial_states!/1)

The allowed starting states of this state machine.

[state\_machine\_options(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_options/1)

state\_machine DSL options

[state\_machine\_state\_attribute(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_state_attribute/1)

The attribute to store the state in.

[state\_machine\_state\_attribute!(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_state_attribute!/1)

The attribute to store the state in.

[state\_machine\_transitions(dsl\_or\_extended)](AshStateMachine.Info.html#state_machine_transitions/1)

state\_machine.transitions DSL entities

[state\_machine\_transitions(resource\_or\_dsl, name)](AshStateMachine.Info.html#state_machine_transitions/2)

# [](AshStateMachine.Info.html#functions)Functions

[](AshStateMachine.Info.html#state_machine_all_states/1)

# state\_machine\_all\_states(resource\_or\_dsl)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L14)

```
@spec state_machine_all_states(Ash.Resource.t() | map()) :: [atom()]
```

[](AshStateMachine.Info.html#state_machine_default_initial_state/1)

# state\_machine\_default\_initial\_state(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_default_initial_state(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The default initial state

[](AshStateMachine.Info.html#state_machine_default_initial_state!/1)

# state\_machine\_default\_initial\_state!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_default_initial_state!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The default initial state

[](AshStateMachine.Info.html#state_machine_deprecated_states/1)

# state\_machine\_deprecated\_states(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_deprecated_states(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.

[](AshStateMachine.Info.html#state_machine_deprecated_states!/1)

# state\_machine\_deprecated\_states!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_deprecated_states!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.

[](AshStateMachine.Info.html#state_machine_extra_states/1)

# state\_machine\_extra\_states(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_extra_states(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.

[](AshStateMachine.Info.html#state_machine_extra_states!/1)

# state\_machine\_extra\_states!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_extra_states!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.

[](AshStateMachine.Info.html#state_machine_initial_states/1)

# state\_machine\_initial\_states(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_initial_states(dsl_or_extended :: module() | map()) ::
  {:ok, [atom()]} | :error
```

The allowed starting states of this state machine.

[](AshStateMachine.Info.html#state_machine_initial_states!/1)

# state\_machine\_initial\_states!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_initial_states!(dsl_or_extended :: module() | map()) ::
  [atom()] | no_return()
```

The allowed starting states of this state machine.

[](AshStateMachine.Info.html#state_machine_options/1)

# state\_machine\_options(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

state\_machine DSL options

Returns a map containing the and any configured or default values.

[](AshStateMachine.Info.html#state_machine_state_attribute/1)

# state\_machine\_state\_attribute(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_state_attribute(dsl_or_extended :: module() | map()) ::
  {:ok, atom()} | :error
```

The attribute to store the state in.

[](AshStateMachine.Info.html#state_machine_state_attribute!/1)

# state\_machine\_state\_attribute!(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_state_attribute!(dsl_or_extended :: module() | map()) ::
  atom() | no_return()
```

The attribute to store the state in.

[](AshStateMachine.Info.html#state_machine_transitions/1)

# state\_machine\_transitions(dsl\_or\_extended)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L3)

```
@spec state_machine_transitions(dsl_or_extended :: module() | map()) :: [struct()]
```

state\_machine.transitions DSL entities

[](AshStateMachine.Info.html#state_machine_transitions/2)

# state\_machine\_transitions(resource\_or\_dsl, name)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/info.ex#L7)

```
@spec state_machine_transitions(Ash.Resource.t() | map(), name :: atom()) :: [
  AshStateMachine.Transition.t()
]
```

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/ash_state_machine.ex#L2 "View Source") AshStateMachine.Transition (ash\_state\_machine v0.2.7)

The configuration for an transition.

# [](AshStateMachine.Transition.html#summary)Summary

## [Types](AshStateMachine.Transition.html#types)

[t()](AshStateMachine.Transition.html#t:t/0)

# [](AshStateMachine.Transition.html#types)Types

[](AshStateMachine.Transition.html#t:t/0)

# t()

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/ash_state_machine.ex#L6)

```
@type t() :: %AshStateMachine.Transition{
  __identifier__: any(),
  action: atom(),
  from: [atom()],
  to: [atom()]
}
```

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/documentation/topics/charts.md#L1 "View Source") Charts

Run [`mix ash_state_machine.generate_flow_charts`](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html) to generate flow charts for your resources. See the task documentation for more. Here is an example:

```
stateDiagram-v2
pending --> confirmed: confirm
confirmed --> on_its_way: begin_delivery
on_its_way --> arrived: package_arrived
on_its_way --> error: error
confirmed --> error: error
pending --> error: error
```

[← Previous Page What is AshStateMachine?](what-is-ash-state-machine.html)

[Next Page → Working with Ash.can?](working-with-ash-can.html)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) ([current file](https://preview.hex.pm/preview/ash_state_machine/0.2.7/show/documentation/topics/charts.md)) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/documentation/dsls/DSL-AshStateMachine.md#L1 "View Source") DSL: AshStateMachine

Provides tools for defining and working with resource-backed state machines.

## [](dsl-ashstatemachine.html#state_machine)state\_machine

### [](dsl-ashstatemachine.html#nested-dsls)Nested DSLs

- [transitions](dsl-ashstatemachine.html#state_machine-transitions)
  
  - transition

### [](dsl-ashstatemachine.html#options)Options

NameTypeDefaultDocs[`initial_states`](dsl-ashstatemachine.html#state_machine-initial_states)`list(atom)`The allowed starting states of this state machine.[`deprecated_states`](dsl-ashstatemachine.html#state_machine-deprecated_states)`list(atom)``[]`A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.[`extra_states`](dsl-ashstatemachine.html#state_machine-extra_states)`list(atom)``[]`A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.[`state_attribute`](dsl-ashstatemachine.html#state_machine-state_attribute)`atom``:state`The attribute to store the state in.[`default_initial_state`](dsl-ashstatemachine.html#state_machine-default_initial_state)`atom`The default initial state

## [](dsl-ashstatemachine.html#state_machine-transitions)state\_machine.transitions

### [](dsl-ashstatemachine.html#wildcards)Wildcards

Use `:*` to represent "any action" when used in place of an action, or "any state" when used in place of a state.

For example:

```
transition :*, from: :*, to: :*
```

The full list of states is derived at compile time from the transitions. Use the `extra_states` to express that certain types should be included in that list even though no transitions go to/from that state explicitly. This is necessary for cases where there are states that use `:*` and no transition explicitly leads to that transition.

### [](dsl-ashstatemachine.html#nested-dsls-1)Nested DSLs

- [transition](dsl-ashstatemachine.html#state_machine-transitions-transition)

## [](dsl-ashstatemachine.html#state_machine-transitions-transition)state\_machine.transitions.transition

```
transition action
```

### [](dsl-ashstatemachine.html#arguments)Arguments

NameTypeDefaultDocs[`action`](dsl-ashstatemachine.html#state_machine-transitions-transition-action)`atom`The corresponding action that is invoked for the transition. Use `:*` to allow any update action to perform this transition.

### [](dsl-ashstatemachine.html#options-1)Options

NameTypeDefaultDocs[`from`](dsl-ashstatemachine.html#state_machine-transitions-transition-from)`list(atom) | atom`The states in which this action may be called. If not specified, then any state is accepted. Use `:*` to refer to all states.[`to`](dsl-ashstatemachine.html#state_machine-transitions-transition-to)`list(atom) | atom`The states that this action may move to. If not specified, then any state is accepted. Use `:*` to refer to all states.

### [](dsl-ashstatemachine.html#introspection)Introspection

Target: [`AshStateMachine.Transition`](AshStateMachine.Transition.html)

[← Previous Page Working with Ash.can?](working-with-ash-can.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) ([current file](https://preview.hex.pm/preview/ash_state_machine/0.2.7/show/documentation/dsls/DSL-AshStateMachine.md)) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/documentation/tutorials/getting-started-with-ash-state-machine.md#L1 "View Source") Getting Started with State Machines

## [](getting-started-with-ash-state-machine.html#get-familiar-with-ash-resources)Get familiar with Ash resources

If you haven't already, read the [Ash Getting Started Guide](../ash/get-started.html), and familiarize yourself with Ash and Ash resources.

## [](getting-started-with-ash-state-machine.html#bring-in-the-ash_state_machine-dependency)Bring in the ash\_state\_machine dependency

```
{:ash_state_machine, "~> 0.2.7"}
```

## [](getting-started-with-ash-state-machine.html#add-the-extension-to-your-resource)Add the extension to your resource

```
use Ash.Resource,
  extensions: [AshStateMachine]
```

## [](getting-started-with-ash-state-machine.html#add-initial-states-and-a-default-initial-state)Add initial states, and a default initial state

```
use Ash.Resource,
  extensions: [AshStateMachine]

...

state_machine do
  initial_states [:pending]
  default_initial_state :pending
end
```

## [](getting-started-with-ash-state-machine.html#add-allowed-transitions)Add allowed transitions

```
state_machine do
  initial_states [:pending]
  default_initial_state :pending

  transitions do
    # `:begin` action can move state from `:pending` to `:started`/`:aborted`
    transition :begin, from: :pending, to: [:started, :aborted]
  end
end
```

## [](getting-started-with-ash-state-machine.html#use-transition_state-in-your-actions)Use `transition_state` in your actions

### [](getting-started-with-ash-state-machine.html#for-simple-static-state-transitions)For simple/static state transitions

```
actions do
  update :begin do
    # for a static state transition
    change transition_state(:started)
  end
end
```

### [](getting-started-with-ash-state-machine.html#for-dynamic-conditional-state-transitions)For dynamic/conditional state transitions

```
defmodule Start do
  use Ash.Resource.Change

  def change(changeset, _, _) do
    if ready_to_start?(changeset) do
      AshStateMachine.transition_state(changeset, :started)
    else
      AshStateMachine.transition_state(changeset, :aborted)
    end
  end
end

actions do
  update :begin do
    # for a dynamic state transition
    change Start
  end
end
```

## [](getting-started-with-ash-state-machine.html#declaring-a-custom-state-attribute)Declaring a custom state attribute

By default, a `:state` attribute is created on the resource that looks like this:

```
attribute :state, :atom do
  allow_nil? false
  default AshStateMachine.Info.state_machine_initial_default_state(dsl_state)
  public? true
  constraints one_of: [
    AshStateMachine.Info.state_machine_all_states(dsl_state)
  ]
end
```

You can change the name of this attribute, without declaring an attribute yourself, like so:

```
state_machine do
  initial_states([:pending])
  default_initial_state(:pending)
  state_attribute(:alternative_state) # <-- save state in an attribute named :alternative_state
end
```

If you need more control, you can declare the attribute yourself on the resource:

```
attributes do
  attribute :alternative_state, :atom do
    allow_nil? false
    default :issued
    public? true
    constraints one_of: [:issued, :sold, :reserved, :retired]
  end
end
```

Be aware that the type of this attribute needs to be `:atom` or a type created with [`Ash.Type.Enum`](../ash/3.4.43/Ash.Type.Enum.html). Both the `default` and list of values need to be correct!

## [](getting-started-with-ash-state-machine.html#making-a-resource-into-a-state-machine)Making a resource into a state machine

The concept of a state machine (in this case a "Finite State Machine"), essentially involves a single `state`, with specified transitions between states. For example, you might have an order state machine with states `[:pending, :on_its_way, :delivered]`. However, you can't go from `:pending` to `:delivered` (probably), and so you want to only allow certain transitions in certain circumstances, i.e `:pending -> :on_its_way -> :delivered`.

This extension's goal is to help you write clear and clean state machines, with all of the extensibility and power of Ash resources and actions.

[← Previous Page Home](readme.html)

[Next Page → What is AshStateMachine?](what-is-ash-state-machine.html)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) ([current file](https://preview.hex.pm/preview/ash_state_machine/0.2.7/show/documentation/tutorials/getting-started-with-ash-state-machine.md)) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/mix/generate_flow_charts.ex#L1 "View Source") mix ash\_state\_machine.generate\_flow\_charts (ash\_state\_machine v0.2.7)

Generates a Mermaid Flow Chart for each [`Ash.Resource`](../ash/3.4.43/Ash.Resource.html) with the [`AshStateMachine`](AshStateMachine.html) extension alongside the resource.

## [](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html#module-prerequisites)Prerequisites

This mix task requires the Mermaid CLI to be installed on your system.

See [https://github.com/mermaid-js/mermaid-cli](https://github.com/mermaid-js/mermaid-cli)

## [](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html#module-command-line-options)Command line options

- `--type` - generates a given type. Valid values are `"state_diagram"` and `"flow_chart"`. Defaults to `"state_diagram"`.
- `--only` - only generates the given Flow file
- `--format` - Can be set to one of either:
  
  - `plain` - Prints just the mermaid output as text. This is the default.
  - `md` - Prints the mermaid diagram in a markdown code block.
  - `svg` - Generates an SVG
  - `pdf` - Generates a PDF
  - `png` - Generates a PNG

# [](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html#summary)Summary

## [Functions](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html#functions)

[run(argv)](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html#run/1)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

# [](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html#functions)Functions

[](Mix.Tasks.AshStateMachine.GenerateFlowCharts.html#run/1)

# run(argv)

[](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/lib/mix/generate_flow_charts.ex#L29)

Callback implementation for [`Mix.Task.run/1`](../mix/Mix.Task.html#c:run/1).

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_state_machine/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_state_machine.svg)](https://hex.pm/packages/ash_state_machine) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_state_machine.html)

# AshStateMachine

Welcome! This is the extension for building state machines with [Ash](../ash_state_machine.html) resources.

## [](readme.html#tutorials)Tutorials

- [Getting Started with AshStateMachine](getting-started-with-ash-state-machine.html)

## [](readme.html#topics)Topics

- [What is AshStateMachine?](what-is-ash-state-machine.html)
- [Charts](charts.html)
- [Working with `Ash.can?`](working-with-ash-can.html)

## [](readme.html#reference)Reference

- [AshStateMachine DSL](dsl-ashstatemachine.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Getting Started with State Machines](getting-started-with-ash-state-machine.html)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) ([current file](https://preview.hex.pm/preview/ash_state_machine/0.2.7/show/README.md)) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/documentation/topics/what-is-ash-state-machine.md#L1 "View Source") What is AshStateMachine?

## [](what-is-ash-state-machine.html#what-is-a-state-machine)What is a State Machine?

A state machine is a program who's purpose is to manage an internal "state". The simplest example of a state machine could be a program representing a light switch. A light switch might have two states, "on" and "off". You can transition from "on" to "off", and back.

```
classDiagram

class Switch {
  state on | off
  turnOn() off -> on
  turnOff() on -> off
}
```

To build state machines with [`Ash.Resource`](../ash/3.4.43/Ash.Resource.html), we use [`AshStateMachine`](../ash_state_machine.html).

When we refer to "state machines" in AshStateMachine, we're referring to a specific type of state machine known as a "Finite State Machine". It is "finite", because there are a statically known list of states that the machine may be in at any time, just like the `Switch` example above.

### [](what-is-ash-state-machine.html#why-should-we-use-state-machines)Why should we use state machines?

#### Flexible

State machines are a *simple* and *powerful* way to represent complex workflows. They are flexible to modifications over time by adding new states, or new transitions between states.

#### Migrateable

State machines typically contain additional data about the state that they are in, or past states that they have been in, and this state must be migrated over time. When representing data as state machines, it becomes simple to do things like "update all `package` records that are in the `pending_shipment` state".

#### Easy to reason about for humans

State machines, when compared to things like workflows, are easy for people to reason about. We have an intuition for things like "the package is currently `on_its_way`, with a `current_location` of New York, New York", or "your package is now `out_for_delivery` with an ETA of 6PM".

#### Compatible with any storage mechanism

Since state machines are backed by simple state, you can often avoid any fancy workflow runners or complex storage mechanisms. You can store them in a database table, a json blob, a CSV file, at the end of the day its just a `:state` field and accompanying additional fields.

## [](what-is-ash-state-machine.html#what-does-ashstatemachine-do-differently-than-other-implementations)What does AshStateMachine do differently than other implementations?

AshStateMachine is an [`Ash.Resource`](../ash/Ash.Resource.html) extension, meaning it *enhances a resource* with state machine capabilities. In [`Ash`](../ash/3.4.43/Ash.html), all modifications go through [*actions*](https://hexdocs.pm/ash_state_machine/actions.html). In accordance with this, [`AshStateMachine`](AshStateMachine.html) offers a DSL for declaring *valid states and transitions*, but does not, itself, *perform* those transitions. You will use a change called `transition_state/1` in an action to move from one state to the other. For more, check out the [CookBook](../ash/readme.html#cookbook)

[← Previous Page Getting Started with State Machines](getting-started-with-ash-state-machine.html)

[Next Page → Charts](charts.html)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) ([current file](https://preview.hex.pm/preview/ash_state_machine/0.2.7/show/documentation/topics/what-is-ash-state-machine.md)) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_state_machine](assets/logo.png)](https://github.com/ash-project/ash_state_machine)

[ash\_state\_machine](https://github.com/ash-project/ash_state_machine)

v0.2.7

- GUIDES
- Modules
- Mix Tasks

<!--THE END-->

<!--THE END-->

<!--THE END-->

Search documentation of ash\_state\_machine

Settings

# [View Source](https://github.com/ash-project/ash_state_machine/blob/v0.2.7/documentation/topics/working-with-ash-can.md#L1 "View Source") Working with `Ash.can?`

Using [`Ash.can?/3`](../ash/3.4.43/Ash.html#can?/3) won't return `false` if a given state machine transition is invalid. This is because [`Ash.can?/3`](../ash/3.4.43/Ash.html#can?/3) is only concerned with policies, not changes/validations. However, many folks use [`Ash.can?/3`](../ash/3.4.43/Ash.html#can?/3) in their UI to determine whether a given button/form/etc should be shown. To help with this you can add the following to your resource:

```
policies do
  policy always() do
    authorize_if AshStateMachine.Checks.ValidNextState
  end
end
```

This check is only used in *pre\_flight* authorization checks (i.e calling [`Ash.can?/3`](../ash/3.4.43/Ash.html#can?/3)), but it will return `true` in all cases when running real authorization checks. This is because the change is validated when you use the `transition_state/1` change and [`AshStateMachine.transition_state/2`](AshStateMachine.html#transition_state/2), and so you would be doing extra work for no reason.

[← Previous Page Charts](charts.html)

[Next Page → DSL: AshStateMachine](dsl-ashstatemachine.html)

[Hex Package](https://hex.pm/packages/ash_state_machine/0.2.7) [Hex Preview](https://preview.hex.pm/preview/ash_state_machine/0.2.7) ([current file](https://preview.hex.pm/preview/ash_state_machine/0.2.7/show/documentation/topics/working-with-ash-can.md)) Search HexDocs [Download ePub version](ash_state_machine.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
