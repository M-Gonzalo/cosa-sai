[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban "View Source") API Reference ash\_oban v0.2.6

## [](api-reference.html#modules)Modules

[AshOban](AshOban.html)

Tools for working with AshOban triggers.

[AshOban.ActorPersister](AshOban.ActorPersister.html)

A behaviour for storing and retrieving an actor from oban job arguments

[AshOban.Changes.BuiltinChanges](AshOban.Changes.BuiltinChanges.html)

Builtin changes for [`AshOban`](AshOban.html)

[AshOban.Changes.RunObanTrigger](AshOban.Changes.RunObanTrigger.html)

Runs an oban trigger by name.

[AshOban.Checks.AshObanInteraction](AshOban.Checks.AshObanInteraction.html)

This check is true if the context `private.ash_oban?` is set to true.

[AshOban.Errors.TriggerNoLongerApplies](AshOban.Errors.TriggerNoLongerApplies.html)

Used when an invalid value is provided for an action argument

[AshOban.Info](AshOban.Info.html)

Introspection for AshOban

[AshOban.Schedule](AshOban.Schedule.html)

A configured scheduled action.

[AshOban.Test](AshOban.Test.html)

Helpers for testing ash\_oban triggers

[AshOban.Trigger](AshOban.Trigger.html)

A configured trigger.

[Next Page → Home](readme.html)

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/actor_persister.ex#L1 "View Source") AshOban.ActorPersister behaviour (ash\_oban v0.2.6)

A behaviour for storing and retrieving an actor from oban job arguments

# [](AshOban.ActorPersister.html#summary)Summary

## [Types](AshOban.ActorPersister.html#types)

[actor()](AshOban.ActorPersister.html#t:actor/0)

[actor\_json()](AshOban.ActorPersister.html#t:actor_json/0)

## [Callbacks](AshOban.ActorPersister.html#callbacks)

[lookup(actor\_json)](AshOban.ActorPersister.html#c:lookup/1)

[store(actor)](AshOban.ActorPersister.html#c:store/1)

# [](AshOban.ActorPersister.html#types)Types

[Link to this type](AshOban.ActorPersister.html#t:actor/0 "Link to this type")

# actor()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/actor_persister.ex#L6 "View Source")

```
@type actor() :: any()
```

[Link to this type](AshOban.ActorPersister.html#t:actor_json/0 "Link to this type")

# actor\_json()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/actor_persister.ex#L5 "View Source")

```
@type actor_json() :: any()
```

# [](AshOban.ActorPersister.html#callbacks)Callbacks

[Link to this callback](AshOban.ActorPersister.html#c:lookup/1 "Link to this callback")

# lookup(actor\_json)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/actor_persister.ex#L9 "View Source")

```
@callback lookup(actor_json :: actor_json() | nil) ::
  {:ok, actor() | nil} | {:error, Ash.Error.t()}
```

[Link to this callback](AshOban.ActorPersister.html#c:store/1 "Link to this callback")

# store(actor)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/actor_persister.ex#L8 "View Source")

```
@callback store(actor :: actor()) :: actor_json :: actor_json()
```

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/changes/builtin_changes.ex#L1 "View Source") AshOban.Changes.BuiltinChanges (ash\_oban v0.2.6)

Builtin changes for [`AshOban`](AshOban.html)

# [](AshOban.Changes.BuiltinChanges.html#summary)Summary

## [Functions](AshOban.Changes.BuiltinChanges.html#functions)

[run\_oban\_trigger(trigger\_name, oban\_job\_opts \\\\ \[\])](AshOban.Changes.BuiltinChanges.html#run_oban_trigger/2)

# [](AshOban.Changes.BuiltinChanges.html#functions)Functions

[Link to this function](AshOban.Changes.BuiltinChanges.html#run_oban_trigger/2 "Link to this function")

# run\_oban\_trigger(trigger\_name, oban\_job\_opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/changes/builtin_changes.ex#L4 "View Source")

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/changes/run_oban_trigger.ex#L1 "View Source") AshOban.Changes.RunObanTrigger (ash\_oban v0.2.6)

Runs an oban trigger by name.

# [](AshOban.Changes.RunObanTrigger.html#summary)Summary

## [Functions](AshOban.Changes.RunObanTrigger.html#functions)

[change(changeset, opts, context)](AshOban.Changes.RunObanTrigger.html#change/3)

Callback implementation for [`Ash.Resource.Change.change/3`](../ash/3.4.37/Ash.Resource.Change.html#c:change/3).

# [](AshOban.Changes.RunObanTrigger.html#functions)Functions

[Link to this function](AshOban.Changes.RunObanTrigger.html#change/3 "Link to this function")

# change(changeset, opts, context)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/changes/run_oban_trigger.ex#L8 "View Source")

Callback implementation for [`Ash.Resource.Change.change/3`](../ash/3.4.37/Ash.Resource.Change.html#c:change/3).

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/checks/ash_oban_interaction.ex#L1 "View Source") AshOban.Checks.AshObanInteraction (ash\_oban v0.2.6)

This check is true if the context `private.ash_oban?` is set to true.

This context will only ever be set in code that is called internally by `ash_oban`, allowing you to create a bypass in your policies on your user/user\_token resources.

```
policies do
  bypass AshObanInteraction do
    authorize_if always()
  end
end
```

# [](AshOban.Checks.AshObanInteraction.html#summary)Summary

## [Functions](AshOban.Checks.AshObanInteraction.html#functions)

[eager\_evaluate?()](AshOban.Checks.AshObanInteraction.html#eager_evaluate?/0)

Callback implementation for [`Ash.Policy.Check.eager_evaluate?/0`](../ash/3.4.37/Ash.Policy.Check.html#c:eager_evaluate?/0).

[prefer\_expanded\_description?()](AshOban.Checks.AshObanInteraction.html#prefer_expanded_description?/0)

Callback implementation for [`Ash.Policy.Check.prefer_expanded_description?/0`](../ash/3.4.37/Ash.Policy.Check.html#c:prefer_expanded_description?/0).

[requires\_original\_data?(\_, \_)](AshOban.Checks.AshObanInteraction.html#requires_original_data?/2)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](../ash/3.4.37/Ash.Policy.Check.html#c:requires_original_data?/2).

[strict\_check(actor, context, opts)](AshOban.Checks.AshObanInteraction.html#strict_check/3)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](../ash/3.4.37/Ash.Policy.Check.html#c:strict_check/3).

[type()](AshOban.Checks.AshObanInteraction.html#type/0)

Callback implementation for [`Ash.Policy.Check.type/0`](../ash/3.4.37/Ash.Policy.Check.html#c:type/0).

# [](AshOban.Checks.AshObanInteraction.html#functions)Functions

[Link to this function](AshOban.Checks.AshObanInteraction.html#eager_evaluate?/0 "Link to this function")

# eager\_evaluate?()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/checks/ash_oban_interaction.ex#L17 "View Source")

Callback implementation for [`Ash.Policy.Check.eager_evaluate?/0`](../ash/3.4.37/Ash.Policy.Check.html#c:eager_evaluate?/0).

[Link to this function](AshOban.Checks.AshObanInteraction.html#prefer_expanded_description?/0 "Link to this function")

# prefer\_expanded\_description?()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/checks/ash_oban_interaction.ex#L17 "View Source")

Callback implementation for [`Ash.Policy.Check.prefer_expanded_description?/0`](../ash/3.4.37/Ash.Policy.Check.html#c:prefer_expanded_description?/0).

[Link to this function](AshOban.Checks.AshObanInteraction.html#requires_original_data?/2 "Link to this function")

# requires\_original\_data?(\_, \_)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/checks/ash_oban_interaction.ex#L17 "View Source")

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](../ash/3.4.37/Ash.Policy.Check.html#c:requires_original_data?/2).

[Link to this function](AshOban.Checks.AshObanInteraction.html#strict_check/3 "Link to this function")

# strict\_check(actor, context, opts)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/checks/ash_oban_interaction.ex#L17 "View Source")

Callback implementation for [`Ash.Policy.Check.strict_check/3`](../ash/3.4.37/Ash.Policy.Check.html#c:strict_check/3).

[Link to this function](AshOban.Checks.AshObanInteraction.html#type/0 "Link to this function")

# type()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/checks/ash_oban_interaction.ex#L17 "View Source")

Callback implementation for [`Ash.Policy.Check.type/0`](../ash/3.4.37/Ash.Policy.Check.html#c:type/0).

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/errors/trigger_no_longer_applies.ex#L1 "View Source") AshOban.Errors.TriggerNoLongerApplies exception (ash\_oban v0.2.6)

Used when an invalid value is provided for an action argument

# [](AshOban.Errors.TriggerNoLongerApplies.html#summary)Summary

## [Functions](AshOban.Errors.TriggerNoLongerApplies.html#functions)

[exception()](AshOban.Errors.TriggerNoLongerApplies.html#exception/0)

# [](AshOban.Errors.TriggerNoLongerApplies.html#functions)Functions

[Link to this function](AshOban.Errors.TriggerNoLongerApplies.html#exception/0 "Link to this function")

# exception()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/errors/trigger_no_longer_applies.ex#L3 "View Source")

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L1 "View Source") AshOban (ash\_oban v0.2.6)

Tools for working with AshOban triggers.

# [](AshOban.html#summary)Summary

## [Types](AshOban.html#types)

[result()](AshOban.html#t:result/0)

[triggerable()](AshOban.html#t:triggerable/0)

## [Functions](AshOban.html#functions)

[authorize?()](AshOban.html#authorize?/0)

[build\_trigger(record, trigger, opts \\\\ \[\])](AshOban.html#build_trigger/3)

Builds a specific trigger for the record provided, but does not insert it into the database.

[config(domains, base, opts \\\\ \[\])](AshOban.html#config/3)

Alters your oban configuration to include the required AshOban configuration.

[do\_schedule\_and\_run\_triggers(resources\_or\_domains\_or\_otp\_apps, opts)](AshOban.html#do_schedule_and_run_triggers/2)

[lookup\_actor(actor\_json)](AshOban.html#lookup_actor/1)

[oban(body)](AshOban.html#oban/1)

[run\_trigger(record, trigger, opts \\\\ \[\])](AshOban.html#run_trigger/3)

Runs a specific trigger for the record provided.

[schedule(resource, trigger, opts \\\\ \[\])](AshOban.html#schedule/3)

Schedules all relevant jobs for the provided trigger or scheduled action

[schedule\_and\_run\_triggers(resources\_or\_domains\_or\_otp\_apps, opts \\\\ \[\])](AshOban.html#schedule_and_run_triggers/2)

Runs the schedulers for the given resource, domain, or otp\_app, or list of resources, domains, or otp\_apps.

[stacktrace(arg1)](AshOban.html#stacktrace/1)

[store\_actor(args, actor)](AshOban.html#store_actor/2)

# [](AshOban.html#types)Types

[Link to this type](AshOban.html#t:result/0 "Link to this type")

# result()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L372 "View Source")

```
@type result() :: %{
  discard: non_neg_integer(),
  cancelled: non_neg_integer(),
  success: non_neg_integer(),
  failure: non_neg_integer(),
  snoozed: non_neg_integer(),
  queues_not_drained: [atom()]
}
```

[Link to this type](AshOban.html#t:triggerable/0 "Link to this type")

# triggerable()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L371 "View Source")

```
@type triggerable() ::
  Ash.Resource.t() | {Ash.Resource.t(), atom()} | Ash.Domain.t() | atom()
```

# [](AshOban.html#functions)Functions

[Link to this function](AshOban.html#authorize?/0 "Link to this function")

# authorize?()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L416 "View Source")

```
@spec authorize?() :: boolean()
```

[Link to this function](AshOban.html#build_trigger/3 "Link to this function")

# build\_trigger(record, trigger, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L474 "View Source")

Builds a specific trigger for the record provided, but does not insert it into the database.

## [](AshOban.html#build_trigger/3-options)Options

- `:actor` - the actor to set on the job. Requires configuring an actor persister.
- `:action_arguments` - additional arguments to merge into the action invocation's arguments map. affects the uniqueness checks for the job.
- `:args` - additional arguments to merge into the job's arguments map. the action will not use these arguments, it can only be used to affect the job uniqueness checks. you likely are looking for the `:action_arguments` job.

All other options are passed through to [`Oban.Worker.new/2`](../oban/2.18.3/Oban.Worker.html#c:new/2)

[Link to this function](AshOban.html#config/3 "Link to this function")

# config(domains, base, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L542 "View Source")

Alters your oban configuration to include the required AshOban configuration.

# Options

- `:require?` ([`boolean/0`](../elixir/typespecs.html#built-in-types)) - Whether to require queues and plugins to be defined in your oban config. This can be helpful to allow the ability to split queues between nodes. See [https://hexdocs.pm/oban/splitting-queues.html](../oban/splitting-queues.html) The default value is `true`.

[Link to this function](AshOban.html#do_schedule_and_run_triggers/2 "Link to this function")

# do\_schedule\_and\_run\_triggers(resources\_or\_domains\_or\_otp\_apps, opts)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L802 "View Source")

[Link to this function](AshOban.html#lookup_actor/1 "Link to this function")

# lookup\_actor(actor\_json)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L434 "View Source")

```
@spec lookup_actor(actor_json :: any()) :: any()
```

[Link to this macro](AshOban.html#oban/1 "Link to this macro")

# oban(body)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L362 "View Source") (macro)

[Link to this function](AshOban.html#run_trigger/3 "Link to this function")

# run\_trigger(record, trigger, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L454 "View Source")

Runs a specific trigger for the record provided.

## [](AshOban.html#run_trigger/3-options)Options

- `:actor` - the actor to set on the job. Requires configuring an actor persister.
- `:args` - additional arguments to merge into the job's arguments map.

All other options are passed through to [`Oban.Worker.new/2`](../oban/2.18.3/Oban.Worker.html#c:new/2)

[Link to this function](AshOban.html#schedule/3 "Link to this function")

# schedule(resource, trigger, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L388 "View Source")

Schedules all relevant jobs for the provided trigger or scheduled action

## [](AshOban.html#schedule/3-options)Options

`:actor` - the actor to set on the job. Requires configuring an actor persister.

[Link to this function](AshOban.html#schedule_and_run_triggers/2 "Link to this function")

# schedule\_and\_run\_triggers(resources\_or\_domains\_or\_otp\_apps, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L791 "View Source")

```
@spec schedule_and_run_triggers(
  triggerable() | [triggerable()],
  keyword()
) :: result()
```

Runs the schedulers for the given resource, domain, or otp\_app, or list of resources, domains, or otp\_apps.

Options:

- `drain_queues?` - Defaults to false, drains the queues after scheduling. This is primarily for testing
- `queue`, `with_limit`, `with_recursion`, `with_safety`, `with_scheduled` - passed through to [`Oban.drain_queue/2`](../oban/2.18.3/Oban.html#drain_queue/2), if it is called
- `scheduled_actions?` - Defaults to false, unless a scheduled action name was explicitly provided. Schedules all applicable scheduled actions.
- `triggers?` - Defaults to true, schedules all applicable scheduled actions.
- `actor` - The actor to schedule and run the triggers with
- `oban` - The oban module to use. Defaults to [`Oban`](../oban/2.18.3/Oban.html)

If the input is:

- a list - each item is passed into [`schedule_and_run_triggers/1`](AshOban.html#schedule_and_run_triggers/1), and the results are merged together.
- an otp\_app - each domain configured in the `ash_domains` of that otp\_app is passed into [`schedule_and_run_triggers/1`](AshOban.html#schedule_and_run_triggers/1), and the results are merged together.
- a domain - each reosurce configured in that domain is passed into [`schedule_and_run_triggers/1`](AshOban.html#schedule_and_run_triggers/1), and the results are merged together.
- a tuple of {resource, :trigger\_name} - that trigger is scheduled, and the results are merged together.
- a resource - each trigger configured in that resource is scheduled, and the results are merged together.

[Link to this function](AshOban.html#stacktrace/1 "Link to this function")

# stacktrace(arg1)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L765 "View Source")

[Link to this function](AshOban.html#store_actor/2 "Link to this function")

# store\_actor(args, actor)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L421 "View Source")

```
@spec store_actor(args :: map(), actor :: any()) :: any()
```

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L1 "View Source") AshOban.Info (ash\_oban v0.2.6)

Introspection for AshOban

# [](AshOban.Info.html#summary)Summary

## [Functions](AshOban.Info.html#functions)

[oban\_domain(dsl\_or\_extended)](AshOban.Info.html#oban_domain/1)

The Domain to use when calling actions on this resource. Defaults to the resource's domain.

[oban\_domain!(dsl\_or\_extended)](AshOban.Info.html#oban_domain!/1)

The Domain to use when calling actions on this resource. Defaults to the resource's domain.

[oban\_options(dsl\_or\_extended)](AshOban.Info.html#oban_options/1)

oban DSL options

[oban\_scheduled\_action(resource, name)](AshOban.Info.html#oban_scheduled_action/2)

[oban\_scheduled\_actions(dsl\_or\_extended)](AshOban.Info.html#oban_scheduled_actions/1)

oban.scheduled\_actions DSL entities

[oban\_trigger(resource, name)](AshOban.Info.html#oban_trigger/2)

[oban\_triggers(dsl\_or\_extended)](AshOban.Info.html#oban_triggers/1)

oban.triggers DSL entities

[oban\_triggers\_and\_scheduled\_actions(resource)](AshOban.Info.html#oban_triggers_and_scheduled_actions/1)

[pro?()](AshOban.Info.html#pro?/0)

# [](AshOban.Info.html#functions)Functions

[Link to this function](AshOban.Info.html#oban_domain/1 "Link to this function")

# oban\_domain(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L4 "View Source")

```
@spec oban_domain(dsl_or_extended :: module() | map()) :: {:ok, module()} | :error
```

The Domain to use when calling actions on this resource. Defaults to the resource's domain.

[Link to this function](AshOban.Info.html#oban_domain!/1 "Link to this function")

# oban\_domain!(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L4 "View Source")

```
@spec oban_domain!(dsl_or_extended :: module() | map()) :: module() | no_return()
```

The Domain to use when calling actions on this resource. Defaults to the resource's domain.

[Link to this function](AshOban.Info.html#oban_options/1 "Link to this function")

# oban\_options(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L4 "View Source")

```
@spec oban_options(dsl_or_extended :: module() | map()) :: %{
  required(atom()) => any()
}
```

oban DSL options

Returns a map containing the and any configured or default values.

[Link to this function](AshOban.Info.html#oban_scheduled_action/2 "Link to this function")

# oban\_scheduled\_action(resource, name)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L18 "View Source")

```
@spec oban_scheduled_action(Ash.Resource.t() | Spark.Dsl.t(), atom()) ::
  nil | AshOban.Schedule.t()
```

[Link to this function](AshOban.Info.html#oban_scheduled_actions/1 "Link to this function")

# oban\_scheduled\_actions(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L4 "View Source")

```
@spec oban_scheduled_actions(dsl_or_extended :: module() | map()) :: [struct()]
```

oban.scheduled\_actions DSL entities

[Link to this function](AshOban.Info.html#oban_trigger/2 "Link to this function")

# oban\_trigger(resource, name)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L10 "View Source")

```
@spec oban_trigger(Ash.Resource.t() | Spark.Dsl.t(), atom()) ::
  nil | AshOban.Trigger.t()
```

[Link to this function](AshOban.Info.html#oban_triggers/1 "Link to this function")

# oban\_triggers(dsl\_or\_extended)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L4 "View Source")

```
@spec oban_triggers(dsl_or_extended :: module() | map()) :: [struct()]
```

oban.triggers DSL entities

[Link to this function](AshOban.Info.html#oban_triggers_and_scheduled_actions/1 "Link to this function")

# oban\_triggers\_and\_scheduled\_actions(resource)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L28 "View Source")

```
@spec oban_triggers_and_scheduled_actions(Ash.Resource.t() | Spark.Dsl.t()) :: [
  AshOban.Trigger.t() | AshOban.Schedule.t()
]
```

[Link to this function](AshOban.Info.html#pro?/0 "Link to this function")

# pro?()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/info.ex#L7 "View Source")

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L211 "View Source") AshOban.Schedule (ash\_oban v0.2.6)

A configured scheduled action.

# [](AshOban.Schedule.html#summary)Summary

## [Types](AshOban.Schedule.html#types)

[t()](AshOban.Schedule.html#t:t/0)

# [](AshOban.Schedule.html#types)Types

[Link to this type](AshOban.Schedule.html#t:t/0 "Link to this type")

# t()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L216 "View Source")

```
@type t() :: %AshOban.Schedule{
  __identifier__: term(),
  action: atom(),
  action_input: map(),
  cron: String.t(),
  debug: term(),
  debug?: boolean(),
  max_attempts: non_neg_integer(),
  name: atom(),
  priority: non_neg_integer(),
  queue: atom(),
  state: :active | :paused | :deleted,
  worker: module()
}
```

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/test.ex#L1 "View Source") AshOban.Test (ash\_oban v0.2.6)

Helpers for testing ash\_oban triggers

# [](AshOban.Test.html#summary)Summary

## [Functions](AshOban.Test.html#functions)

[schedule\_and\_run\_triggers(resources\_or\_domains\_or\_otp\_apps, opts \\\\ \[\])](AshOban.Test.html#schedule_and_run_triggers/2)

Calls [`AshOban.schedule_and_run_triggers/2`](AshOban.html#schedule_and_run_triggers/2) with `drain_queues?: true`.

# [](AshOban.Test.html#functions)Functions

[Link to this function](AshOban.Test.html#schedule_and_run_triggers/2 "Link to this function")

# schedule\_and\_run\_triggers(resources\_or\_domains\_or\_otp\_apps, opts \\\\ \[])

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/test.ex#L7 "View Source")

Calls [`AshOban.schedule_and_run_triggers/2`](AshOban.html#schedule_and_run_triggers/2) with `drain_queues?: true`.

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L4 "View Source") AshOban.Trigger (ash\_oban v0.2.6)

A configured trigger.

# [](AshOban.Trigger.html#summary)Summary

## [Types](AshOban.Trigger.html#types)

[t()](AshOban.Trigger.html#t:t/0)

## [Functions](AshOban.Trigger.html#functions)

[transform(trigger)](AshOban.Trigger.html#transform/1)

# [](AshOban.Trigger.html#types)Types

[Link to this type](AshOban.Trigger.html#t:t/0 "Link to this type")

# t()

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L9 "View Source")

```
@type t() :: %AshOban.Trigger{
  __identifier__: atom(),
  action: atom(),
  action_input: map(),
  debug?: boolean(),
  lock_for_update?: boolean(),
  log_errors?: boolean(),
  log_final_error?: boolean(),
  max_attempts: pos_integer(),
  max_scheduler_attempts: pos_integer(),
  name: atom(),
  on_error: atom(),
  queue: atom(),
  read_action: atom(),
  read_metadata: (Ash.Resource.record() -> map()),
  record_limit: pos_integer(),
  scheduler: module() | nil,
  scheduler_cron: String.t(),
  scheduler_priority: non_neg_integer(),
  scheduler_queue: atom(),
  state: :active | :paused | :deleted,
  stream_batch_size: pos_integer(),
  where: Ash.Expr.t(),
  worker: module(),
  worker_priority: non_neg_integer(),
  worker_read_action: term()
}
```

# [](AshOban.Trigger.html#functions)Functions

[Link to this function](AshOban.Trigger.html#transform/1 "Link to this function")

# transform(trigger)

[View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/lib/ash_oban.ex#L64 "View Source")

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/documentation/dsls/DSL-AshOban.md#L1 "View Source") DSL: AshOban

Tools for working with AshOban triggers.

## [](dsl-ashoban.html#oban)oban

### [](dsl-ashoban.html#nested-dsls)Nested DSLs

- [triggers](dsl-ashoban.html#oban-triggers)
  
  - trigger
- [scheduled\_actions](dsl-ashoban.html#oban-scheduled_actions)
  
  - schedule

### [](dsl-ashoban.html#examples)Examples

```
oban do
  triggers do
    trigger :process do
      action :process
      where expr(processed != true)
      worker_read_action(:read)
    end
  end
end
```

### [](dsl-ashoban.html#options)Options

NameTypeDefaultDocs[`domain`](dsl-ashoban.html#oban-domain)`module`The Domain to use when calling actions on this resource. Defaults to the resource's domain.

## [](dsl-ashoban.html#oban-triggers)oban.triggers

### [](dsl-ashoban.html#nested-dsls-1)Nested DSLs

- [trigger](dsl-ashoban.html#oban-triggers-trigger)

### [](dsl-ashoban.html#examples-1)Examples

```
triggers do
  trigger :process do
    action :process
    where expr(processed != true)
    worker_read_action(:read)
  end
end
```

## [](dsl-ashoban.html#oban-triggers-trigger)oban.triggers.trigger

```
trigger name
```

### [](dsl-ashoban.html#examples-2)Examples

```
trigger :process do
  action :process
  where expr(processed != true)
  worker_read_action(:read)
end
```

### [](dsl-ashoban.html#arguments)Arguments

NameTypeDefaultDocs[`name`](dsl-ashoban.html#oban-triggers-trigger-name)`atom`A unique identifier for this trigger.

### [](dsl-ashoban.html#options-1)Options

NameTypeDefaultDocs[`action`](dsl-ashoban.html#oban-triggers-trigger-action)`atom`The action to be triggered. Defaults to the identifier of the resource plus the name of the trigger[`action_input`](dsl-ashoban.html#oban-triggers-trigger-action_input)`map`Static inputs to supply to the update/destroy action when it is called. Any metadata produced by `read_metadata` will overwrite these values.[`scheduler_queue`](dsl-ashoban.html#oban-triggers-trigger-scheduler_queue)`atom`The queue to place the scheduler job in. The same queue as job is used by default (but with a priority of 1 so schedulers run first).[`debug?`](dsl-ashoban.html#oban-triggers-trigger-debug?)`boolean``false`If set to `true`, detailed debug logging will be enabled for this trigger. You can also set `config :ash_oban, debug_all_triggers?: true` to enable debug logging for all triggers. If the action has `transaction?: false` this is automatically false.[`lock_for_update?`](dsl-ashoban.html#oban-triggers-trigger-lock_for_update?)`boolean``true`If `true`, a transaction will be started before looking up the record, and it will be locked for update. Typically you should leave this on unless you have before/after/around transaction hooks.[`scheduler_cron`](dsl-ashoban.html#oban-triggers-trigger-scheduler_cron)`String.t | false``"* * * * *"`A crontab configuration for when the job should run. Defaults to once per minute (" \*"). Use `false` to disable the scheduler entirely.[`stream_batch_size`](dsl-ashoban.html#oban-triggers-trigger-stream_batch_size)`pos_integer`The batch size to pass when streaming records from using [`Ash.stream!/2`](../ash/3.4.37/Ash.html#stream!/2). No batch size is passed if none is provided here, so the default is used.[`queue`](dsl-ashoban.html#oban-triggers-trigger-queue)`atom`The queue to place the worker job in. The trigger name is used by default.[`record_limit`](dsl-ashoban.html#oban-triggers-trigger-record_limit)`pos_integer`If set, any given run of the scheduler will only ever schedule this many items maximum[`log_errors?`](dsl-ashoban.html#oban-triggers-trigger-log_errors?)`boolean``true`Whether or not to log errors that occur when performing an action.[`log_final_error?`](dsl-ashoban.html#oban-triggers-trigger-log_final_error?)`boolean``true`If true, logs that an error occurred on the final attempt to perform an action even if `log_errors?` is set to false.[`worker_priority`](dsl-ashoban.html#oban-triggers-trigger-worker_priority)`non_neg_integer``2`A number from 0 to 3, where 0 is the highest priority and 3 is the lowest.[`scheduler_priority`](dsl-ashoban.html#oban-triggers-trigger-scheduler_priority)`non_neg_integer``3`A number from 0 to 3, where 0 is the highest priority and 3 is the lowest.[`max_scheduler_attempts`](dsl-ashoban.html#oban-triggers-trigger-max_scheduler_attempts)`pos_integer``1`How many times to attempt scheduling of the triggered action.[`max_attempts`](dsl-ashoban.html#oban-triggers-trigger-max_attempts)`pos_integer``1`How many times to attempt the job. After all attempts have been exhausted, the scheduler may just reschedule it. Use the `on_error` action to update the record to make the scheduler no longer apply.[`read_metadata`](dsl-ashoban.html#oban-triggers-trigger-read_metadata)`(any -> any)`Takes a record, and returns metadata to be given to the update action as an argument called `metadata`.[`state`](dsl-ashoban.html#oban-triggers-trigger-state)`:active | :paused | :deleted``:active`Describes the state of the cron job. See the getting started guide for more information. The most important thing is that you *do not remove a trigger from a resource if you are using oban pro*.[`read_action`](dsl-ashoban.html#oban-triggers-trigger-read_action)`atom`The read action to use when querying records. Defaults to the primary read. This action *must* support keyset pagination.[`worker_read_action`](dsl-ashoban.html#oban-triggers-trigger-worker_read_action)`atom`The read action to use when fetching the individual records for the trigger. Defaults to `read_action`. If you customize this, ensure your action handles scenarios where the trigger is no longer relevant.[`where`](dsl-ashoban.html#oban-triggers-trigger-where)`any`The filter expression to determine if something should be triggered[`on_error`](dsl-ashoban.html#oban-triggers-trigger-on_error)`atom`An update action to call after the last attempt has failed. See the getting started guide for more.

### [](dsl-ashoban.html#introspection)Introspection

Target: [`AshOban.Trigger`](AshOban.Trigger.html)

## [](dsl-ashoban.html#oban-scheduled_actions)oban.scheduled\_actions

A section for configured scheduled actions. Supports generic and create actions.

### [](dsl-ashoban.html#nested-dsls-2)Nested DSLs

- [schedule](dsl-ashoban.html#oban-scheduled_actions-schedule)

### [](dsl-ashoban.html#examples-3)Examples

```
scheduled_actions do
  schedule :import, "0 */6 * * *", action: :import
end
```

## [](dsl-ashoban.html#oban-scheduled_actions-schedule)oban.scheduled\_actions.schedule

```
schedule name, cron
```

### [](dsl-ashoban.html#arguments-1)Arguments

NameTypeDefaultDocs[`name`](dsl-ashoban.html#oban-scheduled_actions-schedule-name)`atom`A unique identifier for this scheduled action.[`cron`](dsl-ashoban.html#oban-scheduled_actions-schedule-cron)`String.t`The schedule in crontab notation

### [](dsl-ashoban.html#options-2)Options

NameTypeDefaultDocs[`action_input`](dsl-ashoban.html#oban-scheduled_actions-schedule-action_input)`map`Inputs to supply to the action when it is called.[`action`](dsl-ashoban.html#oban-scheduled_actions-schedule-action)`atom`The generic or create action to call when the schedule is triggered.[`queue`](dsl-ashoban.html#oban-scheduled_actions-schedule-queue)`atom`The queue to place the job in. Defaults to the resources short name plus the name of the scheduled action (not the action name).[`state`](dsl-ashoban.html#oban-scheduled_actions-schedule-state)`:active | :paused | :deleted``:active`Describes the state of the cron job. See the getting started guide for more information. The most important thing is that you *do not remove a scheduled action from a resource if you are using oban pro*.[`max_attempts`](dsl-ashoban.html#oban-scheduled_actions-schedule-max_attempts)`pos_integer``1`How many times to attempt the job. The action will receive a `last_oban_attempt?` argument on the last attempt, and you should handle errors accordingly.[`priority`](dsl-ashoban.html#oban-scheduled_actions-schedule-priority)`non_neg_integer``3`A number from 0 to 3, where 0 is the highest priority and 3 is the lowest.[`debug?`](dsl-ashoban.html#oban-scheduled_actions-schedule-debug?)`boolean``false`If set to `true`, detailed debug logging will be enabled for this trigger. You can also set `config :ash_oban, debug_all_triggers?: true` to enable debug logging for all triggers.

### [](dsl-ashoban.html#introspection-1)Introspection

Target: [`AshOban.Schedule`](AshOban.Schedule.html)

[← Previous Page Getting Started With Ash Oban](getting-started-with-ash-oban.html)

[Next Page → Change Log](changelog.html)

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) ([current file](https://preview.hex.pm/preview/ash_oban/0.2.6/show/documentation/dsls/DSL-AshOban.md)) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/documentation/tutorials/getting-started-with-ash-oban.md#L1 "View Source") Getting Started With Ash Oban

AshOban will likely grow to provide many more oban-related features, but for now the primary focus is on "triggers".

A trigger describes an action that is run periodically.

## [](getting-started-with-ash-oban.html#get-familiar-with-ash-resources)Get familiar with Ash resources

If you haven't already, read the [Ash Getting Started Guide](../ash/get-started.html), and familiarize yourself with Ash and Ash resources.

## [](getting-started-with-ash-oban.html#bring-in-the-ash_oban-dependency)Bring in the `ash_oban` dependency

```
{:ash_oban, "~> 0.2.6"}
```

## [](getting-started-with-ash-oban.html#setup)Setup

First, follow the [Oban setup guide](../oban/installation.html).

### [](getting-started-with-ash-oban.html#oban-pro)Oban Pro

If you are using Oban Pro, set the following configuration:

```
config :ash_oban, :pro?, true
```

Oban Pro lives in a separate hex repository, and therefore we, unfortunately, cannot have an explicit version dependency on it. What this means is that any version you use in hex will technically be accepted, and if you don't have the oban pro package installed and you use the above configuration, you will get compile time errors/warnings.

### [](getting-started-with-ash-oban.html#setting-up-ashoban)Setting up AshOban

Next, allow AshOban to alter your configuration in your Application module:

```
# Replace this
{Oban, your_oban_config}

# With this
{Oban, AshOban.config(Application.fetch_env!(:my_app, :ash_domains), your_oban_config)}
# OR this, to selectively enable AshOban only for specific domains
{Oban, AshOban.config([YourDomain, YourOtherDomain], your_oban_config)}
```

## [](getting-started-with-ash-oban.html#usage)Usage

Finally, configure your triggers in your resources.

Add the [`AshOban`](AshOban.html) extension:

```
use Ash.Resource, domain: MyDomain, extensions: [AshOban]
```

For example:

```
oban do
  triggers do
    # add a trigger called `:process`
    trigger :process do
      # this trigger calls the `process` action
      action :process
      # for any record that has `processed != true`
      where expr(processed != true)
      # checking for matches every minute
      scheduler_cron "* * * * *"
      on_error :errored
    end
  end
end
```

See the DSL documentation for more: [`AshOban`](dsl-ashoban.html)

## [](getting-started-with-ash-oban.html#handling-errors)Handling Errors

Error handling is done by adding an `on_error` to your trigger. This is an update action that will get the error as an argument called `:error`. The error will be an Ash error class. These error classes can contain many kinds of errors, so you will need to figure out handling specific errors on your own. Be sure to add the `:error` argument to the action if you want to receive the error.

This is *not* foolproof. You want to be sure that your `on_error` action is as simple as possible, because if an exception is raised during the `on_error` action, the oban job will fail. If you are relying on your `on_error` logic to alter the resource to make it no longer apply to a trigger, consider making your action do *only that*. Then you can add another trigger watching for things in an errored state to do more rich error handling behavior.

## [](getting-started-with-ash-oban.html#changing-triggers-when-using-oban-pro)Changing Triggers when using Oban Pro

To remove or disable triggers, *do not just remove them from your resource*. Due to the way that Oban Pro implements cron jobs, if you just remove them from your resource, the cron will attempt to continue scheduling jobs. Instead, set `paused true` or `delete true` on the trigger. See the oban docs for more: [https://getoban.pro/docs/pro/0.14.1/Oban.Pro.Plugins.DynamicCron.html#module-using-and-configuring](https://getoban.pro/docs/pro/0.14.1/Oban.Pro.Plugins.DynamicCron.html#module-using-and-configuring)

PS: `delete true` is also indempotent, so there is no issue with deploying with that flag set to true multiple times. After you have deployed once with `delete true` you can safely delete the trigger.

When not using Oban Pro, all crons are simply loaded on boot time and there is no side effects to simply deleting an unused trigger.

## [](getting-started-with-ash-oban.html#transactions)Transactions

AshOban adds two new transaction reasons, as it uses explicit transactions to ensure that each triggered record is properly locked and executed in serially.

```
%{
  type: :ash_oban_trigger,
  metadata: %{
    resource: Resource,
    trigger: :trigger_name,
    primary_key: %{primary_key_fields: value}
  }
}
```

and

```
%{
  type: :ash_oban_trigger_error,
  metadata: %{
    resource: Resource
    trigger: :trigger_name,
    primary_key: %{primary_key_fields: value},
    error: <the error (this will be an ash error class)>
  }
}
```

## [](getting-started-with-ash-oban.html#authorizing-actions)Authorizing actions

As of v0.2, `authorize?: true` is passed into every action that is called. This may be a breaking change for some users that are using policies. There are two ways to get around this:

1. you can set `config :ash_oban, authorize?: false` (easiest, reverts to old behavior, but not recommended)
2. you can install the bypass at the top of your policies in any resource that you have triggers on that has policies:

```
policies do
  bypass AshOban.Checks.AshObanInteraction do
    authorize_if always()
  end

  ...the rest of your policies
end
```

## [](getting-started-with-ash-oban.html#persisting-the-actor-along-with-a-job)Persisting the actor along with a job

Create a module that is responsible for translating the current user to a value that will be JSON encoded, and for turning that encoded value back into an actor.

```
defmodule MyApp.AshObanActorPersister do
  use AshOban.PersistActor

  def store(%MyApp.User{id: id}), do: %{"type" => "user", "id" => id}

  def lookup(%{"type" => "user", "id" => id}), do: MyApp.Accounts.get(MyApp.User, id)

  # This allows you to set a default actor
  # in cases where no actor was present
  # when scheduling.
  def lookup(nil), do: {:ok, nil}
end
```

Then, configure this in application config.

```
config :ash_oban, :actor_persister, MyApp.AshObanActorPersister
```

### [](getting-started-with-ash-oban.html#considerations)Considerations

There are a few things that are important to keep in mind:

1. The actor could be deleted or otherwise unavailable when you look it up. You very likely want your `lookup/1` to return an error in that scenario.
2. The actor can have changed between when the job was scheduled and when the trigger is executing. It can even change across retries. If you are trying to authorize access for a given trigger's update action to a given actor, keep in mind that just because the trigger is running for a given action, does *not* mean that the conditions that allowed them to originally *schedule* that action are still true.

[← Previous Page Home](readme.html)

[Next Page → DSL: AshOban](dsl-ashoban.html)

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) ([current file](https://preview.hex.pm/preview/ash_oban/0.2.6/show/documentation/tutorials/getting-started-with-ash-oban.md)) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
[![ash_oban](assets/logo.png)](https://github.com/ash-project/ash_oban)

[ash\_oban](https://github.com/ash-project/ash_oban)

v0.2.6

- GUIDES
- Modules

<!--THE END-->

<!--THE END-->

Search documentation of ash\_oban

Settings

# [View Source](https://github.com/ash-project/ash_oban/blob/v0.2.6/README.md#L1 "View Source") Home

![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-black-text.png?raw=true#gh-light-mode-only) ![Logo](https://github.com/ash-project/ash/blob/main/logos/cropped-for-header-white-text.png?raw=true#gh-dark-mode-only)

![Elixir CI](https://github.com/ash-project/ash_oban/workflows/CI/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hex version badge](https://img.shields.io/hexpm/v/ash_oban.svg)](https://hex.pm/packages/ash_oban) [![Hexdocs badge](https://img.shields.io/badge/docs-hexdocs-purple)](../ash_oban.html)

# AshOban

Welcome! This is the extension for integrating [Ash](../ash.html) resources with [Oban](../oban.html). This extension allows you to easily execute resource actions in the background, and trigger actions based on data conditions.

## [](readme.html#tutorials)Tutorials

- [Getting Started with AshOban](getting-started-with-ash-oban.html)

## [](readme.html#reference)Reference

- [AshOban DSL](dsl-ashoban.html)

[← Previous Page API Reference](api-reference.html)

[Next Page → Getting Started With Ash Oban](getting-started-with-ash-oban.html)

[Hex Package](https://hex.pm/packages/ash_oban/0.2.6) [Hex Preview](https://preview.hex.pm/preview/ash_oban/0.2.6) ([current file](https://preview.hex.pm/preview/ash_oban/0.2.6/show/README.md)) Search HexDocs [Download ePub version](ash_oban.epub "ePub version")

Built using [ExDoc](https://github.com/elixir-lang/ex_doc "ExDoc") (v0.34.2) for the [Elixir programming language](https://elixir-lang.org "Elixir")
