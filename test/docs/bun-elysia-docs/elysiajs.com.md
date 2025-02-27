=== bun-elysia-docs/elysiajs.com/at-glance.html ===
[Skip to content](at-glance.html#VPContent)

[![](assets/elysia.svg)ElysiaJS](index.html)

Search`K`

Main Navigation [Cheat Sheet](integrations/cheat-sheet.html)[Plugins](plugins/overview.html)[Blog](blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](at-glance.html)

[Quick Start](quick-start.html)

[Tutorial](tutorial.html)

[Key Concept](key-concept.html)

[Table of Content](table-of-content.html)

## Essential

[Route](essential/route.html)

[Handler](essential/handler.html)

[Life Cycle](essential/life-cycle.html)

[Validation](essential/validation.html)

[Plugin](essential/plugin.html)

[Best Practice](essential/best-practice.html)

## Patterns

[Macro](patterns/macro.html)

[Configuration](patterns/configuration.html)

[Cookie](patterns/cookie.html)

[Web Socket](patterns/websocket.html)

[Unit Test](patterns/unit-test.html)

[Mount](patterns/mount.html)

[Trace](patterns/trace.html)

## Recipe

[OpenAPI](recipe/openapi.html)

[Opentelemetry](recipe/opentelemetry.html)

[Drizzle](recipe/drizzle.html)

[React Email](recipe/react-email.html)

[Better Auth](recipe/better-auth.html)

## Eden

[Overview](eden/overview.html)

[Installation](eden/installation.html)

### Eden Treaty

[Overview](eden/treaty/overview.html)

[Parameters](eden/treaty/parameters.html)

[Response](eden/treaty/response.html)

[Web Socket](eden/treaty/websocket.html)

[Config](eden/treaty/config.html)

[Unit Test](eden/treaty/unit-test.html)

[Legacy (Treaty 1)](eden/treaty/legacy.html)

[Eden Fetch](eden/fetch.html)

## Plugins

[Overview](plugins/overview.html)

[Bearer](plugins/bearer.html)

[CORS](plugins/cors.html)

[Cron](plugins/cron.html)

[GraphQL Apollo](plugins/graphql-apollo.html)

[GraphQL Yoga](plugins/graphql-yoga.html)

[HTML](plugins/html.html)

[JWT](plugins/jwt.html)

[OpenTelemetry](plugins/opentelemetry.html)

[Server Timing](plugins/server-timing.html)

[Static](plugins/static.html)

[Stream](plugins/stream.html)

[Swagger](plugins/swagger.html)

[trpc](plugins/trpc.html)

## Integration

[Nextjs](integrations/nextjs.html)

[Expo](integrations/expo.html)

[Astro](integrations/astro.html)

[SvelteKit](integrations/sveltekit.html)

Outline

# At glance [​](at-glance.html#at-glance)

Elysia is an ergonomic web framework for building backend servers with Bun.

Designed with simplicity and type-safety in mind, Elysia has a familiar API with extensive support for TypeScript, optimized for Bun.

Here's a simple hello world in Elysia.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/', 'Hello Elysia')

    .

get






('/user/:id', ({ 

params






: { 

id






 }}) => 

id






)

    .

post






('/form', ({ 

body






 }) => 

body






)

    .

listen






(3000)
```

Navigate to [localhost:3000](http://localhost:3000/) and it should show 'Hello Elysia' as a result.

localhost//user/1/form

GET

TIP

Hover over the code snippet to see the type definition.

In the mock browser, click on the path highlighted in blue to change paths and preview the response.

Elysia can run in the browser, and the results you see are actually run using Elysia.

## Performance [​](at-glance.html#performance)

Building on Bun and extensive optimization like Static Code Analysis allows Elysia to generate optimized code on the fly.

Elysia can outperform most of the web frameworks available today[\[1\]](at-glance.html#ref-1), and even match the performance of Golang and Rust frameworks[\[2\]](at-glance.html#ref-2).

FrameworkRuntimeAveragePlain TextDynamic ParametersJSON Bodybunbun262,660.433326,375.76237,083.18224,522.36elysiabun255,574.717313,073.64241,891.57211,758.94hyper-expressnode234,395.837311,775.43249,675141,737.08honobun203,937.883239,229.82201,663.43170,920.4h3node96,515.027114,971.8787,935.9486,637.27oakdeno46,569.85355,174.2448,260.3636,274.96fastifybun65,897.04392,856.7181,604.6623,229.76fastifynode60,322.41371,150.5762,060.2647,756.41koanode39,594.1446,219.6440,961.7231,601.06expressbun29,715.53739,455.4634,700.8514,990.3expressnode15,913.15317,736.9217,128.712,873.84

## TypeScript [​](at-glance.html#typescript)

Elysia is designed to help you write less TypeScript.

Elysia's Type System is fine-tuned to infer your code into types automatically, without needing to write explicit TypeScript, while providing type-safety at both runtime and compile time to provide you with the most ergonomic developer experience.

Take a look at this example:

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/user/:id', ({ 

params






: { 

id






 } }) => 

id






)

    .

listen






(3000)
```

The above code creates a path parameter "id". The value that replaces `:id` will be passed to `params.id` both at runtime and in types without manual type declaration.

localhost/user/123/user/abc

GET

123

Elysia's goal is to help you write less TypeScript and focus more on business logic. Let the complex types be handled by the framework.

TypeScript is not needed to use Elysia, but it's recommended to use Elysia with TypeScript.

## Type Integrity [​](at-glance.html#type-integrity)

To take a step further, Elysia provides **Elysia.t**, a schema builder to validate types and values at both runtime and compile-time to create a single source of truth for your data-type.

Let's modify the previous code to accept only a numeric value instead of a string.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

get






('/user/:id', ({ 

params






: { 

id






 } }) => 

id






, {

        

params






: 

t






.

Object






({

            

id






: 

t






.

Numeric






()
        })
    })

    .

listen






(3000)
```

This code ensures that our path parameter **id** will always be a numeric string and then transforms it into a number automatically at both runtime and compile-time (type-level).

TIP

Hover over "id" in the above code snippet to see a type definition.

With Elysia's schema builder, we can ensure type safety like a strongly-typed language with a single source of truth.

## Standard [​](at-glance.html#standard)

Elysia adopts many standards by default, like OpenAPI, and WinterCG compliance, allowing you to integrate with most of the industry standard tools or at least easily integrate with tools you are familiar with.

For instance, because Elysia adopts OpenAPI by default, generating documentation with Swagger is as easy as adding a one-liner:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


new 

Elysia






()

    .

use






(

swagger






())

    .

get






('/user/:id', ({ 

params






: { 

id






 } }) => 

id






, {

        

params






: 

t






.

Object






({

            

id






: 

t






.

Number






()
        })
    })

    .

listen






(3000)
```

With the Swagger plugin, you can seamlessly generate a Swagger page without additional code or specific config and share it with your team effortlessly.

## End-to-end Type Safety [​](at-glance.html#end-to-end-type-safety)

With Elysia, type safety is not limited to server-side only.

With Elysia, you can synchronize your types with your frontend team automatically like tRPC, with Elysia's client library, "Eden".

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

get






('/user/:id', ({ 

params






: { 

id






 } }) => 

id






, {

        

params






: 

t






.

Object






({

            

id






: 

t






.

Number






()
        })
    })

    .

listen






(3000)


export type 

App






 = typeof 

app






```

And on your client-side:

typescript

```
// client.ts

import { 

treaty






 } from '@elysiajs/eden'

import type { 

App






 } from './server'


const 

app






 = 

treaty






<

App






>('localhost:3000')

// Get data from /user/617

const { 

data






 } = await 

app






.

user






({ 

id






: 617 }).

get






()




console






.

log






(

data






)
```

With Eden, you can use the existing Elysia types to query an Elysia server **without code generation** and synchronize types for both frontend and backend automatically.

Elysia is not only about helping you create a confident backend but for all that is beautiful in this world.

## Platform Agnostic [​](at-glance.html#platform-agnostic)

Elysia was designed for Bun, but is **not limited to Bun**. Being [WinterCG compliant](https://wintercg.org/) allows you to deploy Elysia servers on Cloudflare Workers, Vercel Edge Functions, and most other runtimes that support Web Standard Requests.

## Our Community [​](at-glance.html#our-community)

If you have questions or get stuck regarding Elysia, feel free to ask our community on GitHub Discussions, Discord, and Twitter.

[**Discord**  
\
Official ElysiaJS discord community server](https://discord.gg/eaFJ2KDJck)

[**Twitter**  
\
Track update and status of Elysia](https://twitter.com/elysiajs)

[**GitHub**  
\
Source code and development](https://github.com/elysiajs)

* * *

1\. Measured in requests/second. The benchmark for parsing query, path parameter and set response header on Debian 11, Intel i7-13700K tested on Bun 0.7.2 on 6 Aug 2023. See the benchmark condition [here](https://github.com/SaltyAom/bun-http-framework-benchmark/tree/c7e26fe3f1bfee7ffbd721dbade10ad72a0a14ab#results).

2\. Based on [TechEmpower Benchmark round 22](https://www.techempower.com/benchmarks/#section=data-r22&hw=ph&test=composite).

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/at-glance.md)

Last updated:

Pager

[Next pageQuick Start](quick-start.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-02.html ===
[Skip to content](elysia-02.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 0.2 - The Blessing

![saltyaom](authors/aris.webp)

### saltyaom

29 Jan 2023ー[@saltyaom](https://twitter.com/saltyaom)

![blue to purple aurora in the night sky above of snow mountain](elysia-02/blessing.webp)

「[Blessing](https://youtu.be/3eytpBOkOFA)」brings more improvement, mainly on TypeScript performance, type-inference, and better auto-completion and some new features to reduce boilerplate.

Named after YOASOBI's song「祝福」, an opening for Witch from "Mobile Suit Gundam: The Witch from Mercury".

## Defers / Lazy Loading Module [​](elysia-02.html#defers-lazy-loading-module)

With Elysia 0.2 now add support for the lazy loading module and async plugin.

This made it possible to defer plugin registration and incrementally apply after the Elysia server is started to achieve the fastest possible start-up time in Serverless/Edge environments.

To create defers module, simply mark the plugin as async:

typescript

```
const plugin = async (app: Elysia) => {
    const stuff = await doSomeHeavyWork()

    return app.get('/heavy', stuff)
}

app.use(plugin)
```

### Lazy Loading [​](elysia-02.html#lazy-loading)

Some modules might be heavy and importing before starting the server might not be a good idea.

We can tell Elysia to skip the module then register the module later, and register the module when finish loading by using `import` statement in `use`:

typescript

```
app.use(import('./some-heavy-module'))
```

This will register the module after the import is finished making the module lazy-load.

Defers Plugin and lazy loading module will have all type-inference available right out of the box.

## Reference Model [​](elysia-02.html#reference-model)

Now Elysia can memorize schema and reference the schema directly in Schema fields, without creating an import file via `Elysia.setModel`

This list of schema available, brings auto-completion, complete type-inference, and validation as you expected from inline schema.

To use a reference model, first, register the model with `setModel`, then write a model name to reference a model in `schema`

typescript

```
const app = new Elysia()
    .setModel({
        sign: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
    .post('/sign', ({ body }) => body, {
        schema: {
            body: 'sign',
            response: 'sign'
        }
    })
```

This will bring auto-completion of known models. ![Screenshot 2566-01-23 at 13 24 28](https://user-images.githubusercontent.com/35027979/213980696-8f20a934-c500-4f97-884c-ff2dd2efadfe.png)

And type reference stopping you from accidentally returning invalid type. ![Screenshot 2566-01-23 at 13 26 00](https://user-images.githubusercontent.com/35027979/213980738-0e99cb25-a50f-4888-8879-f00d4ad04363.png)

Using `@elysiajs/swagger` will also create a separate `Model` section for listing available models. ![Screenshot 2566-01-23 at 13 23 41](https://user-images.githubusercontent.com/35027979/213980936-5857e30b-fd4b-4fc3-8aff-fdb9054980d3.png)

Reference also handles validation as you expected.

In short, it's as same as inline schema but now you only need to type the name of the schema to handle validation and typing instead of a long list of imports.

## OpenAPI Detail field [​](elysia-02.html#openapi-detail-field)

Introducing new field `schema.detail` for customizing detail for the route following the standard of OpenAPI Schema V2 with auto-completion.

![Screenshot 2566-01-23 at 13 54 11](https://user-images.githubusercontent.com/35027979/213981321-5717e514-aa4b-492a-b45a-9e69099dc8a8.png)

This allows you to write better documentation and fully editable Swagger as you want: ![Screenshot 2566-01-23 at 13 23 41](https://user-images.githubusercontent.com/35027979/213981545-46efc6cc-34bc-4db2-86ed-530d27d7ba97.png)

## Union Type [​](elysia-02.html#union-type)

The previous version of Elysia sometime has a problem with distinct Union types, as Elysia tries to catch the response to create a full type reference for Eden.

Results in invalidation of possible types,

## Union Response [​](elysia-02.html#union-response)

Made possible by Union Type, now returning multiple response status for `schema` now available using `schema.response[statusCode]`

typescript

```
app
    .post(
        '/json/:id',
        ({ body, params: { id } }) => ({
            ...body,
            id
        }),
        {
            schema: {
                body: 'sign',
                response: {
                    200: t.Object({
                        username: t.String(),
                        password: t.String(),
                        id: t.String()
                    }),
                    400: t.Object({
                        error: t.String()
                    })
                }
            }
        }
    )
```

Elysia will try to validate all schema in `response` allowing one of the types to be returned.

Return types are also supported report in Swagger's response.

## Faster Type Inference [​](elysia-02.html#faster-type-inference)

As Elysia 0.1 explore the possibility of using type inference for improving better Developer Experience, we found that sometimes it takes a long time to update type inference because of heavy type inference and in-efficient custom generic.

With Elysia 0.2 now optimized for faster type-inference, preventing duplication of heavy type unwrap, results in better performance for updating type and inference.

## Ecosystem [​](elysia-02.html#ecosystem)

With Elysia 0.2 enabling async plugin and deferred module many new plugins that isn't possible before became reality.

Like:

- Elysia Static plugin with the non-blocking capability
- Eden with union-type inference for multiple responses
- New Elysia Apollo Plugin for Elysia

### Notable Improvement: [​](elysia-02.html#notable-improvement)

- `onRequest` and `onParse` now can access `PreContext`
- Support `application/x-www-form-urlencoded` by default
- body parser now parse `content-type` with extra attribute eg. `application/json;charset=utf-8`
- Decode URI parameter path parameter
- Eden now reports an error if Elysia is not installed
- Skip declaration of existing model and decorators

### Breaking Changes: [​](elysia-02.html#breaking-changes)

- `onParse` now accepts `(context: PreContext, contentType: string)` instead of `(request: Request, contentType: string)`
  
  - To migrate, add `.request` to context to access `Request`

### Afterward [​](elysia-02.html#afterward)

Thank you for supporting Elysia and being interested in this project.

This release brings better DX and hopefully all you need to write great software with Bun.

Now we have [Discord server](https://discord.gg/eaFJ2KDJck) where you can ask any questions about Elysia or just hang out and chill around is also welcome.

With the wonderful tools, we are happy to see what wonderful software you will build.

> Not to be part of those images someone paints
> 
> Not advancing in that show chosen by someone else
> 
> You and I, alive to write our story
> 
> Will never let you be lone and be gone from your side

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-03.html ===
[Skip to content](elysia-03.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 0.3 - 大地の閾を探して \[Looking for Edge of Ground]

![saltyaom](authors/aris.webp)

### saltyaom

17 Mar 2023ー[@saltyaom](https://twitter.com/saltyaom)

![shattered glass pieces floating in the abyss](elysia-03/edge-of-ground.webp)

Named after Camellia's song[「大地の閾を探して \[Looking for Edge of Ground\]」](https://youtu.be/oyJf72je2U0)ft. Hatsune Miku, is the last track of my most favorite's Camellia album,「U.U.F.O」. This song has a high impact on me personally, so I'm not taking the name lightly.

This is the most challenging update, bringing the biggest release of Elysia yet, with rethinking and redesigning of Elysia architecture to be highly scalable while making less breaking change as possible.

I'm pleased to announce the release candidate of Elysia 0.3 with exciting new features coming right up.

## Elysia Fn [​](elysia-03.html#elysia-fn)

Introducing Elysia Fn, run any backend function on the frontend with full auto-completion and full type support.

For rapid development, Elysia Fn allows you to "expose" backend code to call from the frontend with full type-safety, autocompletion, original code comment, and "click-to-definition", allowing you to speed up the development.

You can use Elysia Fn with Eden for full-type safety via Eden Fn.

### Permission [​](elysia-03.html#permission)

You can limit allow or deny scopes of the function, check for authorization header and other headers' fields, validate parameters, or limit keys access programmatically.

Keys checking supports type-safety and auto-completion of all possible functions, so you're not missing out on some function or accidentally typing down the wrong name. ![Narrowed Key](elysia-03/narrowed-key.webp)

And narrowing the scope of property programmatically also narrow down the type of parameters, or in other words, full type-safety. ![Narrowed Params](elysia-03/narrowed-param.webp)

### Technical detail [​](elysia-03.html#technical-detail)

In technical detail, Elysia Fn uses JavaScript's Proxy to capture object property, and parameters to create batched requests to the server to handle and returns the value across the network. Elysia Fn extends superjson, allowing native type in JavaScript like Error, Map, Set, and undefined to parse across JSON data.

Elysia Fn supports multiple use-cases, for example accessing Prisma on the client-side Nextjs app. Theoretically, it's possible to use Redis, Sequelize, RabbitMQ, and more. As Elysia is running on Bun, Elysia Fn can run over 1.2 million operation/second concurrently (tested on M1 Max).

Learn more about Elysia Fn at [Eden Fn](https://elysiajs.com/plugins/eden/fn.html).

## Type Rework [​](elysia-03.html#type-rework)

Over 6.5-9x faster for type checking, and uncountable type's LoC reduction.

Elysia 0.3, over 80% of Elysia, and Eden types have been rewritten to focus on performance, type-inference, and fast auto-completion.

Testing for over 350 routes with complex types, Elysia uses only 0.22 seconds to generate a type declaration to use with Eden.

As the Elysia route now compile directly to literal object instead of Typebox reference, Elysia type declaration is much smaller than it used to be on 0.2 and is easier to be consumed by Eden. And by much smaller, it means 50-99% smaller.

Not only Elysia integration with TypeScript is significantly faster, but Elysia is better at understanding TypeScript and your code better.

For example, with 0.3, Elysia will be less strict with plugin registration, allowing you to register the plugin without full type-completion of Elysia Instance. Inlining `use` function now infers the parent type, and the nested guard can reference types of models from the parent more accurately.

Type Declaration is now also can be built, and exported.

With the rewrite of type, Elysia understands TypeScript far better than it used to, type-completion will be significantly faster than it was, and we encourage you to try it out to see how fast it is. For more detail, see this [thread on Twitter](https://twitter.com/saltyAom/status/1629876280517869568?s=20)

## File Upload [​](elysia-03.html#file-upload)

Thanks to Bun 0.5.7, Form Data is implemented and enabled by default in Elysia 0.3 with `multipart/formdata`.

To define type completion and validation for uploading a file, `Elysia.t` now extends TypeBox with `File` and `Files` for file validation.

The validation includes checking for file type with auto-completion of standard file size, the minimum and maximum size of the file, and the total of files per field.

Elysia 0.3 also features `schema.contentType` to explicitly validate incoming request type to strictly check headers before validating the data.

## OpenAPI Schema 3.0.x [​](elysia-03.html#openapi-schema-3-0-x)

With Elysia 0.3, Elysia now uses OpenAPI schema 3.0.x by default for better stating API definitions, and better support for multiple types based on content-type.

`schema.details` are now updated to OpenAPI 3.0.x, and Elysia also updates the Swagger plugin to match the OpenAPI 3.0.x to take advantage of new features in OpenAPI 3 and Swagger, especially with file uploading.

## Eden Rework [​](elysia-03.html#eden-rework)

To support more demand for Elysia, supporting Elysia Fn, Rest all together, Eden has been reworked to scale with the new architecture.

Eden now exports 3 types of function.

- [Eden Treaty](https://elysiajs.com/plugins/eden/treaty.html) `eden/treaty`: Original Eden syntax you know and love
- [Eden Fn](https://elysiajs.com/plugins/eden/fn.html) `eden/fn`: Access to Eden Fn
- [Eden Fetch](https://elysiajs.com/plugins/eden/fetch.html) `eden/fetch`: Fetch-like syntax, for highly complex Elysia type (&gt; 1,000 route / Elysia instance)

With the rework of type definitions and support for Elysia Eden, Eden is now much faster and better at inference type from the server.

Auto-completion and faster and use fewer resources than it used to, in fact, Eden's type declaration has been almost 100% reworked to reduce the size and inference time, making it support over 350 routes of auto-completion in a blink of an eye (~0.26 seconds).

To make Elysia Eden, fully type-safe, with Elysia's better understanding of TypeScript, Eden can now narrow down the type based on response status, allowing you to capture the type correctly in any matter of condition. ![Narrowed error.webp](elysia-03/narrowed-error.webp)

### Notable Improvement: [​](elysia-03.html#notable-improvement)

- Add string format: 'email', 'uuid', 'date', 'date-time'
- Update @sinclair/typebox to 0.25.24
- Update Raikiri to 0.2.0-beta.0 (ei)
- Add file upload test thanks to #21 (@amirrezamahyari)
- Pre compile lowercase method for Eden
- Reduce complex instruction for most Elysia types
- Compile `ElysiaRoute` type to literal
- Optimize type compliation, type inference and auto-completion
- Improve type compilation speed
- Improve TypeScript inference between plugin registration
- Optimize TypeScript inference size
- Context creation optimization
- Use Raikiri router by default
- Remove unused function
- Refactor `registerSchemaPath` to support OpenAPI 3.0.3
- Add `error` inference for Eden
- Mark `@sinclair/typebox` as optional `peerDenpendencies`

Fix:

- Raikiri 0.2 thrown error on not found
- Union response with `t.File` is not working
- Definitions isn't defined on Swagger
- details are missing on group plugin
- group plugin, isn't unable to compile schema
- group is not exportable because EXPOSED is a private property
- Multiple cookies doesn't set `content-type` to `application/json`
- `EXPOSED` is not export when using `fn.permission`
- Missing merged return type for `.ws`
- Missing nanoid
- context side-effects
- `t.Files` in swagger is referring to single file
- Eden response type is unknown
- Unable to type `setModel` inference definition via Eden
- Handle error thrown in non permission function
- Exported variable has or is using name 'SCHEMA' from external module
- Exported variable has or is using name 'DEFS' from external module
- Possible errors for building Elysia app with `declaration: true` in `tsconfig.json`

Breaking Change:

- Rename `inject` to `derive`
- Depreacate `ElysiaRoute`, changed to inline
- Remove `derive`
- Update from OpenAPI 2.x to OpenAPI 3.0.3
- Move context.store\[SYMBOL] to meta\[SYMBOL]

## Afterward [​](elysia-03.html#afterward)

With the introduction of Elysia Fn, I'm personally excited to see how it will be adopted in frontend development, removing the line between frontend and backend. And Type Rework of Elysia, making type-checking and auto-completion much faster.

I'm excited to see how you will use Elysia to create the wonderful things you are going to build.

We have [Discord server](https://discord.gg/eaFJ2KDJck) dedicated to Elysia. Feel free to say hi or just chill and hang out.

Thank you for supporting Elysia.

> Under a celestial map that never have ends
> 
> On a cliff that never have name
> 
> I just holwed
> 
> Hoping the neverending reverberation will reach you
> 
> And I believe someday, I will stand on edge of the ground
> 
> (Until the day I can be back to you to tell it)

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-04.html ===
[Skip to content](elysia-04.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 0.4 - 月夜の音楽会 (Moonlit Night Concert)

![saltyaom](authors/aris.webp)

### saltyaom

30 Mar 2023ー[@saltyaom](https://twitter.com/saltyaom)

![shattered glass pieces floating in the abyss](elysia-04/moonlit-night-concert.webp)

Named after the opening music of ["The Liar Princess and the Blind Prince" trailer](https://youtu.be/UdBespMvxaA), [「月夜の音楽会」(Moonlit Night Concert)](https://youtu.be/o8b-IQulh1c) composed and sang by Akiko Shikata.

This version doesn't introduce an exciting new feature, later but a foundation for more solid ground, and internal improvement for the future of Elysia.

## Ahead of Time Complie [​](elysia-04.html#ahead-of-time-complie)

By default, Elysia has to deal with conditional checking in various situations, for example, checking if the life-cycle of the route existed before performing, or unwrapping validation schema if provided.

This introduces a minimal overhead to Elysia and overall because even if the route doesn't have a life-cycle event attached to it, it needs to be runtime checked.

Since every function is checked on compile time, it's not possible to have a conditional async, for example, a simple route that returns a file should be synced, but since it's compile-time checking, some routes might be async thus making the same simple route async too.

An async function introduces an additional tick to the function, making it a bit slower. But since Elysia is a foundation for web servers, we want to optimize every part to make sure that you don't run into performance problems.

We fix this small overhead by introducing Ahead Time Compilation.

As the name suggests, instead of checking dynamic life-cycle and validation on the runtime, Elysia checks life-cycle, validation, and the possibility of an async function and generates a compact function, removing an unnecessary part like an un-used life-cycle and validation.

Making conditional async function possible, since instead of using a centralized function for handling, we compose a new function especially created for each route instead. Elysia then checks all life-cycle functions and handlers to see if there's an async, and if not, the function will be synced to reduce additional overhead.

## TypeBox 0.26 [​](elysia-04.html#typebox-0-26)

TypeBox is a library that powered Elysia's validation and type provider to create a type-level single source of truth, re-exported as **Elysia.t**.

In this update, we update TypeBox from 0.25.4 to 0.26.

This brings a lot of improvement and new features, for example, a `Not` type and `Convert` for `coercion` value which we might support in some next version of Elysia.

But the one benefit for Elysia would be, `Error.First()` which allows us to get the first error of type instead of using Iterator, this reduces overhead in creating a new Error to send back to the client.

There are some changes to **TypeBox** and **Elysia.t** that normally wouldn't have much effect on your end, but you can see what's a new feature in [TypeBox release here.](https://github.com/sinclairzx81/typebox/blob/master/changelog/0.26.0.md)

## Validate response per status [​](elysia-04.html#validate-response-per-status)

Previously, Elysia's response validate multiple status responses using union type.

This might have unexpected results for highly dynamic apps with a strict response for status. For example if you have a route like:

ts

```
app.post('/strict-status', process, {
    schema: {
        response: {
            200: t.String(),
            400: t.Number()
        }
    }
})
```

It's expected that if 200 response is not a string, then it should throw a validation error, but in reality, it wouldn't throw an error because response validation is using union. This might leave an unexpected value to the end user and a type error for Eden Treaty.

With this release, a response is validated per status instead of union, which means that it will strictly validate based on response status instead of unioned type.

## Separation of Elysia Fn [​](elysia-04.html#separation-of-elysia-fn)

Elysia Fn is a great addition to Elysia, with Eden, it breaks the boundary between client and server allowing you to use any server-side function in your client, fully type-safe and even with primitive types like Error, Set, and Map.

But with the primitive type support, Elysia Fn depends on "superjson" which is around 38% of Elysia's dependency size.

In this release, to use Elysia Fn, you're required to explicitly install `@elysiajs/fn` to use Elysia Fn. This approach is like installing an additional feature same as `cargo add --feature`.

This makes Elysia lighter for servers that don't use Elysia Fn, Following our philosophy, **To ensure that you have what you actually need**

However, if you forgot to install Elysia Fn and accidentally use Elysia Fn, there will be a type warning reminding you to install Elysia Fn before usage, and a runtime error telling the same thing.

For migration, besides a breaking change of installing `@elysiajs/fn` explicitly, there's no migration need.

## Conditional Route [​](elysia-04.html#conditional-route)

This release introduces `.if` method for registering a conditional route or plugin.

This allows you to declaratively for a specific conditional, for example excluding Swagger documentation from the production environment.

ts

```
const isProduction = process.env.NODE_ENV === 'production'

const app = new Elysia().if(!isProduction, (app) =>
    app.use(swagger())
)
```

Eden Treaty will be able to recognize the route as if it's a normal route/plugin.

## Custom Validation Error [​](elysia-04.html#custom-validation-error)

Big thanks to amirrezamahyari on [#31](https://github.com/elysiajs/elysia/pull/31) which allows Elysia to access TypeBox's error property, for a better programmatically error response.

ts

```
new Elysia()
    .onError(({ code, error, set }) => {
        if (code === 'NOT_FOUND') {
            set.status = 404

            return 'Not Found :('
        }

        if (code === 'VALIDATION') {
            set.status = 400

            return {
                fields: error.all()
            }
        }
    })
    .post('/sign-in', () => 'hi', {
        schema: {
            body: t.Object({
                username: t.String(),
                password: t.String()
            })
        }
    })
    .listen(3000)
```

Now you can create a validation error for your API not limited to only the first error.

* * *

### Notable Improvement: [​](elysia-04.html#notable-improvement)

- Update TypeBox to 0.26.8
- Inline a declaration for response type
- Refactor some type for faster response
- Use Typebox `Error().First()` instead of iteration
- Add `innerHandle` for returning an actual response (for benchmark)

### Breaking Change: [​](elysia-04.html#breaking-change)

- Separate `.fn` to `@elysiajs/fn`

## Afterward [​](elysia-04.html#afterward)

This release might not be a big release with a new exciting feature, but this improve a solid foundation, and Proof of Concept for planned I have for Elysia in the future, and making Elysia even faster and more versatile than it was.

I'm really excited for what will be unfold in the future.

Thank you for your continuous support for Elysia~

> the moonlit night concert, our secret
> 
> let’s start again without letting go of this hand

> the moonlit night concert, our bonds
> 
> I want to tell you, “you are not a liar”

> the memories in my heart is like flower that keeps blooming
> 
> no matter what you look like, you are my songstress
> 
> be by my side tonight

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-05.html ===
[Skip to content](elysia-05.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 0.5 - Radiant

![saltyaom](authors/aris.webp)

### saltyaom

15 May 2023ー[@saltyaom](https://twitter.com/saltyaom)

![Radiant](elysia-05/radiant.webp)

Named after Arknights' original music, 「[Radiant](https://youtu.be/QhUjD--UUV4)」composed by Monster Sirent Records.

Radiant push the boundary of performance with more stability improvement especially types, and dynamic routes.

## Static Code Analysis [​](elysia-05.html#static-code-analysis)

With Elysia 0.4 introducing Ahead of Time compliation, allowing Elysia to optimize function calls, and eliminate many over head we previously had.

Today we are expanding Ahead of Time compliation to be even faster wtih Static Code Analysis, to be the fastest Bun web framework.

Static Code Analysis allow Elysia to read your function, handlers, life-cycle and schema, then try to adjust fetch handler compile the handler ahead of time, and eliminating any unused code and optimize where possible.

For example, if you're using `schema` with body type of Object, Elysia expect that this route is JSON first, and will parse the body as JSON instead of relying on dynamic checking with Content-Type header:

ts

```
app.post('/sign-in', ({ body }) => signIn(body), {
    schema: {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    }
})
```

This allows us to improve performance of body parsing by almost 2.5x.

With Static Code Analysis, instead of relying on betting if you will use expensive properties or not.

Elysia can read your code and detect what you will be using, and adjust itself ahead of time to fits your need.

This means that if you're not using expensive property like `query`, or `body`, Elysia will skip the parsing entirely to improve the performance.

ts

```
// Body is not used, skip body parsing
app.post('/id/:id', ({ params: { id } }) => id, {
    schema: {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    }
})
```

With Static Code Analysis, and Ahead of Time compilation, you can rest assure that Elysia is very good at reading your code and adjust itself to maximize the performance automatically.

Static Code Analysis allows us to improve Elysia performance beyond we have imagined, here's a notable mention:

- overall improvement by ~15%
- static router fast ~33%
- empty query parsing ~50%
- strict type body parsing faster by ~100%
- empty body parsing faster by ~150%

With this improvement, we are able to surpass **Stricjs** in term of performance, compared using Elysia 0.5.0-beta.0 and Stricjs 2.0.4

We intent to explain this in more detail with our research paper to explain this topic and how we improve the performance with Static Code Analysis to be published in the future.

## New Router, "Memoirist" [​](elysia-05.html#new-router-memoirist)

Since 0.2, we have been building our own Router, "Raikiri".

Raikiri served it purposed, it's build on the ground up to be fast with our custom Radix Tree implementation.

But as we progress, we found that Raikiri doesn't perform well complex recoliation with of Radix Tree, which cause developers to report many bugs especially with dynamic route which usually solved by re-ordering routees.

We understand, and patched many area in Raikiri's Radix Tree reconcilation algorithm, however our algorithm is complex, and getting more expensive as we patch the router until it doesn't fits our purpose anymore.

That's why we introduce a new router, "Memoirist".

Memoirist is a stable Raix Tree router to fastly handle dynamic path based on Medley Router's algorithm, while on the static side take advantage of Ahead of Time compilation.

With this release, we will be migrating from Raikiri to Memoirist for stability improvement and even faster path mapping than Raikiri.

We hope that any problems you have encountered with Raikiri will be solved with Memoirist and we encourage you to give it a try.

## TypeBox 0.28 [​](elysia-05.html#typebox-0-28)

TypeBox is a core library that powered Elysia's strict type system known as **Elysia.t**.

In this update, we update TypeBox from 0.26 to 0.28 to make even more fine-grained Type System near strictly typed language.

We update Typebox to improve Elysia typing system to match new TypeBox feature with newer version of TypeScript like **Constant Generic**

ts

```
new Elysia()
    .decorate('version', 'Elysia Radiant')
    .model(
        'name',
        Type.TemplateLiteral([
            Type.Literal('Elysia '),
            Type.Union([
                Type.Literal('The Blessing'),
                Type.Literal('Radiant')
            ])
        ])
    )
    // Strictly check for template literal
    .get('/', ({ version }) => version)
```

This allows us to strictly check for template literal, or a pattern of string/number to validate for your on both runtime and development process all at once.

### Ahead of Time &amp; Type System [​](elysia-05.html#ahead-of-time-type-system)

And with Ahead of Time compilation, Elysia can adjust itself to optimize and match schema defined type to reduce overhead.

That's why we introduced a new Type, **URLEncoded**.

As we previously mentioned before, Elysia now can take an advantage of schema and optimize itself Ahead of Time, body parsing is one of more expensive area in Elysia, that's why we introduce a dedicated type for parsing body like URLEncoded.

By default, Elysia will parse body based on body's schema type as the following:

- t.URLEncoded -&gt; `application/x-www-form-urlencoded`
- t.Object -&gt; `application/json`
- t.File -&gt; `multipart/form-data`
- the rest -&gt; `text/plain`

However, you can explictly tells Elysia to parse body with the specific method using `type` as the following:

ts

```
app.post('/', ({ body }) => body, {
    type: 'json'
})
```

`type` may be one of the following:

ts

```
type ContentType = |
    // Shorthand for 'text/plain'
    | 'text'
    // Shorthand for 'application/json'
    | 'json'
    // Shorthand for 'multipart/form-data'
    | 'formdata'
    // Shorthand for 'application/x-www-form-urlencoded'\
    | 'urlencoded'
    | 'text/plain'
    | 'application/json'
    | 'multipart/form-data'
    | 'application/x-www-form-urlencoded'
```

You can find more detail at the [explicit body](https://elysiajs.com/life-cycle/parse.html#explicit-body) page in concept.

### Numeric Type [​](elysia-05.html#numeric-type)

We found that one of the redundant task our developers found using Elysia is to parse numeric string.

That's we introduce a new **Numeric** Type.

Previously on Elysia 0.4, to parse numeric string, we need to use `transform` to manually parse the string ourself.

ts

```
app.get('/id/:id', ({ params: { id } }) => id, {
    schema: {
        params: t.Object({
            id: t.Number()
        })
    },
    transform({ params }) {
        const id = +params.id

        if(!Number.isNaN(id))
            params.id = id
    }
})
```

We found that this step is redundant, and full of boiler-plate, we want to tap into this problem and solve it in a declarative way.

Thanks to Static Code Analysis, Numeric type allow you to defined a numeric string and parse it to number automatically.

Once validated, a numeric type will be parsed as number automatically both on runtime and type level to fits our need.

ts

```
app.get('/id/:id', ({ params: { id } }) => id, {
    params: t.Object({
        id: t.Numeric()
    })
})
```

You can use numeric type on any property that support schema typing, including:

- params
- query
- headers
- body
- response

We hope that you will find this new Numeric type useful in your server.

You can find more detail at [numeric type](https://elysiajs.com/validation/elysia-type.html#numeric) page in concept.

With TypeBox 0.28, we are making Elysia type system we more complete, and we excited to see how it play out on your end.

## Inline Schema [​](elysia-05.html#inline-schema)

You might have notice already that our example are not using a `schema.type` to create a type anymore, because we are making a **breaking change** to move schema and inline it to hook statement instead.

ts

```
// ? From
app.get('/id/:id', ({ params: { id } }) => id, {
    schema: {
        params: t.Object({
            id: t.Number()
        })
    },
})

// ? To
app.get('/id/:id', ({ params: { id } }) => id, {
    params: t.Object({
        id: t.Number()
    })
})
```

We think a lot when making a breaking change especially to one of the most important part of Elysia.

Based on a lot of tinkering and real-world usage, we try to suggest this new change for our community with a vote, and found that around 60% of Elysia developer are happy with migrating to the inline schema.

But we also listen the the rest of our community, and try to get around with the argument against this decision:

### Clear separation [​](elysia-05.html#clear-separation)

With the old syntax, you have to explicitly tells Elysia that the part you are creating are a schema using `Elysia.t`.

Creating a clear separation between life-cycle and schema are more clear and has a better readability.

But from our intense test, we found that most people don't have any problem struggling reading a new syntax, separating life-cycle hook from schema type, we found that it still has clear separation with `t.Type` and function, and a different syntax highlight when reviewing the code, although not as good as clear as explicit schema, but people can get used to the new syntax very quickly especially if they are familiar the Elysia.

### Auto completion [​](elysia-05.html#auto-completion)

One of the other area that people are concerned about are reading auto-completion.

Merging schema and life-cycle hook caused the auto-completion to have around 10 properties for auto-complete to suggest, and based on many proven general User Experience research, it can be frastating for user to that many options to choose from, and can cause a steeper learning curve.

However, we found that the schema property name of Elysia is quite predictable to get over this problem once developer are used to Elysia type.

For example, if you want to access a headers, you can acceess `headers` in Context, and to type a `headers`, you can type a header in a hook, both shared a same name for predictability.

With this, Elysia might have a little more learning curve, however it's a trade-off that we are willing to take for better developer experience.

## "headers" fields [​](elysia-05.html#headers-fields)

Previously, you can get headers field by accessing `request.headers.get`, and you might wonder why we don't ship headers by default.

ts

```
app.post('/headers', ({ request: { headers } }) => {
    return headers.get('content-type')
})
```

Because parsing a headers has it own overhead, and we found that many developers doesn't access headers often, so we decided to leave headers un-implemented.

But that has changed with Static Code Analysis, Elysia can read your code if you intend to use a header or, and then dynamically parse headers based on your code.

Static Code Analysis allows us to more new new features without any overhead.

ts

```
app.post('/headers', ({ headers }) => headers['content-type'])
```

Parsed headers will be available as plain object with a lower-case key of the header name.

## State, Decorate, Model rework [​](elysia-05.html#state-decorate-model-rework)

One of the main feature of Elysia is able to customize Elysia to your need.

We revisits `state`, `decorate`, and `setModel`, and we saw that api is not consistant, and can be improved.

We found that many have been using `state`, and `decorate` repeatly for when setting multiple value, and want to set them all at once as same as `setModel`, and we want to unified API specification of `setModel` to be used the same way as `state` and `decorate` to be more predictable.

So we renamed `setModel` to `model`, and add support for setting single and multiple value for `state`, `decorate`, and `model` with function overloading.

ts

```
import { Elysia, t } from 'elysia'

const app = new Elysia()
	// ? set model using label
	.model('string', t.String())
	.model({
		number: t.Number()
	})
	.state('visitor', 1)
	// ? set model using object
	.state({
		multiple: 'value',
		are: 'now supported!'
	})
	.decorate('visitor', 1)
	// ? set model using object
	.decorate({
		name: 'world',
		number: 2
	})
```

And as we raised minimum support of TypeScript to 5.0 to improve strictly typed with **Constant Generic**.

`state`, `decorate`, and `model` now support literal type, and template string to strictly validate type both runtime and type-level.

ts

```
	// ? state, decorate, now support literal
app.get('/', ({ body }) => number, {
		body: t.Literal(1),
		response: t.Literal(2)
	})
```

### Group and Guard [​](elysia-05.html#group-and-guard)

We found that many developers often use `group` with `guard`, we found that nesting them can be later redundant and maybe boilerplate full.

Starting with Elysia 0.5, we add a guard scope for `.group` as an optional second parameter.

ts

```
// ✅ previously, you need to nest guard inside a group
app.group('/v1', (app) =>
    app.guard(
        {
            body: t.Literal()
        },
        (app) => app.get('/student', () => 'Rikuhachima Aru')
    )
)

// ✅ new, compatible with old syntax
app.group(
    '/v1', {
        body: t.Literal('Rikuhachima Aru')
    }, 
    app => app.get('/student', () => 'Rikuhachima Aru')
)

// ✅ compatible with function overload
app.group('/v1', app => app.get('/student', () => 'Rikuhachima Aru'))
```

We hope that you will find all these new revisited API more useful and fits more to your use-case.

## Type Stability [​](elysia-05.html#type-stability)

Elysia Type System is complex.

We can declare variable on type-level, reference type by name, apply multiple Elysia instance, and even have support for clousure-like at type level, which is really complex to make you have the best developer experience especially with Eden.

But sometime type isn't working as intent when we update Elysia version, because we have to manually check it before every release, and can caused human error.

With Elysia 0.5, we add unit-test for testing at type-level to prevent possible bugs in the future, these tests will run before every release and if error happens will prevent us for publishing the package, forcing us to fix the type problem.

Which means that you can now rely on us to check for type integrity for every release, and confident that there will be less bug in regard of type reference.

* * *

### Notable Improvement: [​](elysia-05.html#notable-improvement)

- Add CommonJS support for running Elysia with Node adapter
- Remove manual fragment mapping to speed up path extraction
- Inline validator in `composeHandler` to improve performance
- Use one time context assignment
- Add support for lazy context injection via Static Code Analysis
- Ensure response non nullability
- Add unioned body validator check
- Set default object handler to inherits
- Using `constructor.name` mapping instead of `instanceof` to improve speed
- Add dedicated error constructor to improve performance
- Conditional literal fn for checking onRequest iteration
- improve WebSocket type

Breaking Change:

- Rename `innerHandle` to `fetch`
  
  - to migrate: rename `.innerHandle` to `fetch`
- Rename `.setModel` to `.model`
  
  - to migrate: rename `setModel` to `model`
- Remove `hook.schema` to `hook`
  
  - to migrate: remove schema and curly brace `schema.type`:
  
  ts
  
  ```
  // from
app.post('/', ({ body }) => body, {
    schema: {
        body: t.Object({
            username: t.String()
        })
    }
})

// to
app.post('/', ({ body }) => body, {
    body: t.Object({
        username: t.String()
    })
})
  ```
- remove `mapPathnameRegex` (internal)

## Afterward [​](elysia-05.html#afterward)

Pushing performance boundary of JavaScript with Bun is what we really excited!

Even with the new features every release, Elysia keeps getting faster, with an improved reliabilty and stability, we hope that Elysia will become one of the choice for the next generation TypeScript framework.

We're glad to see many talent open-source developers bring Elysia to life with their outstanding work like [Bogeychan's Elysia Node](https://github.com/bogeychan/elysia-polyfills) and Deno adapter, Rayriffy's Elysia rate limit, and we hope to see yours in the future too!

Thanks for your continuous support for Elysia, and we hope to see you on the next release.

> I won't let the people down, gonna raise them high
> 
> We're getting louder everyday, yeah, we're amplified
> 
> Stunning with the light
> 
> You're gonna want to be on my side
> 
> Yeah, you know it's **full speed ahead**

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-06.html ===
[Skip to content](elysia-06.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 0.6 - This Game

![saltyaom](authors/aris.webp)

### saltyaom

6 Aug 2023ー[@saltyaom](https://twitter.com/saltyaom)

![Crystal Knight Piece](elysia-06/this-game.webp)

Named after the opening of the legendary anime, **"No Game No Life"**, 「[This Game](https://youtu.be/kJ04dMmimn8)」composed by Konomi Suzuki.

This Game push the boundary of medium-size project to large-scale app with re-imagined plugin model, dynamic mode, pushing developer experience with declarative custom error, collecting more metric with 'onResponse', customizable loose and strict path mapping, TypeBox 0.30 and WinterCG framework interlop.

###### (We are still waiting for No Game No Life season 2) [​](elysia-06.html#we-are-still-waiting-for-no-game-no-life-season-2)

## New Plugin Model [​](elysia-06.html#new-plugin-model)

This Game introduce a new syntax for plugin registration, and come up with a new plugin model internally.

Previously you can register plugin by defining a callback function for Elysia instance like this:

ts

```
const plugin = (app: Elysia) => app.get('/', () => 'hello')
```

With the new plugin, you can now turns and Elysia instance into a plugin:

ts

```
const plugin = new Elysia()
    .get('/', () => 'hello')
```

This allows any Elysia instance and even existing one to be used across application, removing any possible addition callback and tab spacing.

This improved Developer Experience significantly when working and nested group

ts

```
// < 0.6
const group = (app: Elysia) => app
    .group('/v1', (app) => app
        .get('/hello', () => 'Hello World')
    )

// >= 0.6
const group = new Elysia({ prefix: '/v1' })
    .get('/hello', () => 'Hello World')
```

We encourage you to use the new model of Elysia plugin instance, as we can take advantage of Plugin Checksum and new possible features in the future.

However, we are **NOT deprecating** the callback function method as there's some case function model is useful like:

- Inline function
- Plugins that required an information of main instance (for example accessing OpenAPI schema)

With this new plugin model, we hope that you can make your codebase even easier to maintain.

## Plugin Checksum [​](elysia-06.html#plugin-checksum)

By default, Elysia plugin use function callback to register plugin.

This means that if you register a plugin for type declaration, it will duplicate itself for just providing a type support, leading to duplication of plugin used in production.

Which is why Plugin Checksum is introduced, to de-duplicated plugin registered for type declaration.

To opt-in to Plugin Checksum, you need to use a new plugin model, and provide a `name` property to tell Elysia to prevent the plugin from being deduplicate

ts

```
const plugin = new Elysia({
    name: 'plugin'
})
```

This allows Elysia to identify the plugin and deduplicated based on name.

Any duplicated name will be registered only once but type-safety will be provided after registration even if the plugin is deduplicated.

In case your plugin needs configuration, you can provide the configuration into a **seed** property to generate a checksum for deduplicating the plugin.

ts

```
const plugin = (config) = new Elysia({
    name: 'plugin',
    seed: config
})
```

Name and seed will be used to generate a checksum to de-duplicated registration, which leads to even better performance improvement.

This update also fixed the deduplication of the plugin's lifecycle accidentally inline lifecycle when Elysia is not sure if plugin is local and global event.

As always, means performance improvement for an app that's larger than "Hello World".

## Mount and WinterCG Compliance [​](elysia-06.html#mount-and-wintercg-compliance)

WinterCG is a standard for web-interoperable runtimes supports by Cloudflare, Deno, Vercel Edge Runtime, Netlify Function and various more.

WinterCG is a standard to allows web server to runs interoperable across runtime, which use Web Standard definitions like Fetch, Request, and Response.

By this, Elysia is partially follows WinterCG compliance as we are optimized to Bun but also openly support other runtime if possible.

This allows any framework and code that is WinterCG compliance to be run together in theory, an implementation is proved by [Hono](https://honojs.dev) which introduce the **.mount** method to [runs multiple framework together in one codebase](https://twitter.com/honojs/status/1684839623355490304), including Remix, Elysia, Itty Router, and Hono itself in a simple function.

By this, we implemented the same logic for Elysia by introducing `.mount` method to runs any framework or code that is WinterCG compliant.

To use `.mount`, [simply pass a `fetch` function](https://twitter.com/saltyAom/status/1684786233594290176):

ts

```
const app = new Elysia()
    .get('/', () => 'Hello from Elysia')
    .mount('/hono', hono.fetch)
```

A **fetch** function is a function that accept Web Standard Request and return Web Standard Response as the definition of:

ts

```
// Web Standard Request-like object
// Web Standard Response
type fetch = (request: RequestLike) => Response
```

By default, this declaration is used by:

- Bun
- Deno
- Vercel Edge Runtime
- Cloudflare Worker
- Netlify Edge Function
- Remix Function Handler

Which means you can run all of the above code to interlop with Elysia all in a single server, or re-used and existing function all in one deployment, no need to setting up Reverse Proxy for handling multiple server.

If the framework also support a **.mount** function, you can deeply nested a framework that support it infinitely.

ts

```
const elysia = new Elysia()
    .get('/Hello from Elysia inside Hono inside Elysia')

const hono = new Hono()
    .get('/', (c) => c.text('Hello from Hono!'))
    .mount('/elysia', elysia.fetch)

const main = new Elysia()
    .get('/', () => 'Hello from Elysia')
    .mount('/hono', hono.fetch)
    .listen(3000)
```

You can even re-used multiple existing Elysia project in your server.

ts

```
import A from 'project-a/elysia'
import B from 'project-b/elysia'
import C from 'project-c/elysia'

new Elysia()
    .mount(A)
    .mount(B)
    .mount(C)
```

If an instance passed to mount is an Elysia instance, it will resolve to `use` automatically, providing type-safety and support for Eden by default.

This made the possibility of interlopable framework and runtime to a reality.

## Improved starts up time [​](elysia-06.html#improved-starts-up-time)

Starts up time is an important metric in a serverless environment which Elysia excels it incredibly, but we have taken it even further.

By default, Elysia generates OpenAPI schema for every route automatically and stored it internally when if not used.

In this version, Elysia defers the compilation and moved to `@elysiajs/swagger` instead allowing Elysia starts up time to be even faster.

And with various micro-optimization, and made possible by new Plugin model, starts up time is now up to 35% faster.

## Dynamic Mode [​](elysia-06.html#dynamic-mode)

Elysia introduces Static Code Analysis and Ahead of Time compilation to push the boundary of performance.

Static Code Analysis allow Elysia to read your code then produce the most optimized version code, allowing Elysia to push the performance to its limit.

Even if Elysia is WinterCG compliance, environment like Cloudflare worker doesn't support function composition.

This means that Ahead of Time Compliation isn't possible, leading us to create a dynamic mode which use JIT compilation instead of AoT, allowing Elysia to run in Cloudflare Worker as well.

To enable dynamic mode, set `aot` to false.

ts

```
new Elysia({
    aot: false
})
```

Dynamic Mode is enabled by default in cloudflare worker.

#### It's worth noting that, enabling Dynamic Mode will disable some feature like dynamic injected code like `t.Numeric` which parse strings to numbers automatically. [​](elysia-06.html#it-s-worth-noting-that-enabling-dynamic-mode-will-disable-some-feature-like-dynamic-injected-code-like-t-numeric-which-parse-strings-to-numbers-automatically)

Ahead of Time compilation can read, detect and optimize your code in exchange for startup time in exchange for extra performance gain, while dynamic mode uses JIT compilation, allowing start up time to be even faster up to 6x.

But it should be noted that startup time in Elysia is fast enough by default.

Elysia is able to register 10,000 routes in just 78ms which means in an average of 0.0079 ms/route

That being said, we are leaving a choice for you to decided yourself.

## Declarative Custom Error [​](elysia-06.html#declarative-custom-error)

This update adds support for adding type support for handling custom error.

ts

```
class CustomError extends Error {
    constructor(public message: string) {
        super(message)
    }
}

new Elysia()
    .addError({
        MyError: CustomError
    })
    .onError(({ code, error }) => {
        switch(code) {
            // With auto-completion
            case 'MyError':
                // With type narrowing
                // Error is typed as CustomError
                return error
        }
    })
```

This allows us to handle custom types with type narrowing for handling custom errors and auto-completion for error codes to narrow down the correct types, fully type-safe declaratively.

This fulfills one of our main philosophies is focused on Developer Experience especially with types.

Elysia Type System is complex, yet we try to refrained our users need to write a custom type or passing a custom generic, retaining all the code to look just like JavaScript.

It just works, and all the code looks just like JavaScript.

## TypeBox 0.30 [​](elysia-06.html#typebox-0-30)

TypeBox is a core library that powers Elysia's strict type system known as **Elysia.t**.

In this update, we update TypeBox from 0.28 to 0.30 to make even more fine-grained Type System nearly strictly typed language.

These updates introduce new features and many interesting changes, for example **Iterator** type, reducing packages size, TypeScript code generation.

And with support for Utility Types like:

- `t.Awaited`
- `t.Uppercase`
- `t.Capitlized`

## Strict Path [​](elysia-06.html#strict-path)

We got a lot of requests for handling loose path.

By default, Elysia handle path strictly, which means that if you have to support path with or without optional `/` , it will not be resolved and you have to duplicate the pathname twice.

ts

```
new Elysia()
    .group('/v1', (app) => app
        // Handle /v1
        .get('', handle)
        // Handle /v1/
        .get('/', handle)
    )
```

By this, many have been requesting that `/v1/` should also resolved `/v1` as well.

With this update, we add support for loose path matching by default, to opt-in into this feature automatically.

ts

```
new Elysia()
    .group('/v1', (app) => app
        // Handle /v1 and /v1/
        .get('/', handle)
    )
```

To disable loosePath mapping, you can set `strictPath` to true to used the previous behavior:

ts

```
new Elysia({
    strictPath: false
})
```

We hope that this will clear any questions regards to path matching and its expected behavior

## onResponse [​](elysia-06.html#onresponse)

This update introduce a new lifecycle hook called `onResponse`.

This is a proposal proposed by [elysia#67](https://github.com/elysiajs/elysia/issues/67)

Previously Elysia life-cycle works as illustrated in this diagram. ![Elysia life-cycle diagram](elysia-06/lifecycle-05.webp)

For any metric, data-collection or logging purpose, you can use `onAfterHandle` to run the function to collect metrics, however, this lifecycle isn't executed when handler runs into an error, whether it's a routing error or a custom error provided.

Which is why we introduced `onResponse` to handle all cases of Response.

You can use `onRequest`, and `onResponse` together to measure a metric of performance or any required logging.

Quoted

> However, the onAfterHandle function only fires on successful responses. For instance, if the route is not found, or the body is invalid, or an error is thrown, it is not fired. How can I listen to both successful and non-successful requests? This is why I suggested onResponse.
> 
> Based on the drawing, I would suggest the following: ![Elysia life-cycle diagram with onResponse hook](elysia-06/lifecycle-06.webp)

* * *

### Notable Improvement: [​](elysia-06.html#notable-improvement)

- Added an error field to the Elysia type system for adding custom error messages
- Support Cloudflare worker with Dynamic Mode (and ENV)
- AfterHandle now automatically maps the value
- Using bun build to target Bun environment, improving the overall performance by 5-10%
- Deduplicated inline lifecycle when using plugin registration
- Support for setting `prefix`
- Recursive path typing
- Slightly improved type checking speed
- Recursive schema collision causing infinite types

### Change: [​](elysia-06.html#change)

- Moved **registerSchemaPath** to @elysiajs/swagger
- \[Internal] Add qi (queryIndex) to context

### Breaking Change: [​](elysia-06.html#breaking-change)

- \[Internal] Removed Elysia Symbol
- \[Internal] Refactored `getSchemaValidator`, `getResponseSchemaValidator` to named parameters
- \[Internal] Moved `registerSchemaPath` to `@elysiajs/swagger`

## Afterward [​](elysia-06.html#afterward)

We have just passed a one year milestone, and really excited how Elysia and Bun have improved over the year!

Pushing the performance boundaries of JavaScript with Bun, and developer experience with Elysia, we are thrilled to have kept in touch with you and our community.

Every updates, keeps making Elysia even more stable, and gradually providing a better developer experience without a drop in performance and features.

We're thrilled to see our community of open-source developers bringing Elysia to life with their projects like.

- [Elysia Vite Plugin SSR](https://github.com/timnghg/elysia-vite-plugin-ssr) allowing us to use Vite Server Side Rendering using Elysia as the server.
- [Elysia Connect](https://github.com/timnghg/elysia-connect) which made Connect's plugin compatible with Elysia

And much more developers that choose Elysia for their next big project.

With our commitment, we also recently introduced [Mobius](https://github.com/saltyaom/mobius), and open-source TypeScript library to parse GraphQL to TypeScript type without relying on code generation by using TypeScript template literal type entirely to be the very first framework to achieve end-to-end type safety without relying on code generation.

We incredibly thankful for your overwhelming continous support for Elysia, and we hope to see you pushing the boundaries together in the next release.

> As this whole new world cheers my name
> 
> I will never leave it to fate
> 
> and when I see a chance, I will pave the way
> 
> I calls checkmate
> 
> This is the time to breakthrough
> 
> So I will rewrite the story and finally change all the rule
> 
> We are maverick
> 
> We won't give in, until we win this game
> 
> Though I don't know what tomorrow holds
> 
> I'll make a bet any play my cards to win this game
> 
> Unlike the rest, I'll do my best, and I won't ever lose
> 
> To give up this chance would be a deadly since, so let's bet it all
> 
> I put all my fate in used let **the game begin**

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-07.html ===
[Skip to content](elysia-07.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 0.7 - Stellar Stellar

![saltyaom](authors/aris.webp)

### saltyaom

20 Sep 2023ー[@saltyaom](https://twitter.com/saltyaom)

![Landscape of wild and mountain in the night full of star](elysia-07/stellar-stellar.webp)

Name after our never giving up spirit, our beloved Virtual YouTuber, Suicopath Hoshimachi Suisei, and her brilliance voice: 「[Stellar Stellar](https://youtu.be/AAsRtnbDs-0)」from her first album:「Still Still Stellar」

For once being forgotten, she really is a star that truly shine in the dark.

**Stellar Stellar** brings many exciting new update to help Elysia solid the foundation, and handle complexity with ease, featuring:

- Entirely rewrite type, up to 13x faster type inference.
- "Trace" for declarative telemetry and better performance audit.
- Reactive Cookie model and cookie valiation to simplify cookie handling.
- TypeBox 0.31 with a custom decoder support.
- Rewritten Web Socket for even better support.
- Definitions remapping, and declarative affix for preventing name collision.
- Text based status

## Rewritten Type [​](elysia-07.html#rewritten-type)

Core feature of Elysia about developer experience.

Type is one of the most important aspect of Elysia, as it allows us to do many amazing thing like unified type, syncing your business logic, typing, documentation and frontend.

We want you to have an outstanding experience with Elysia, focusing on your business logic part, and let's Elysia handle the rest whether it's type-inference with unified type, and Eden connector for syncing type with backend.

To achieve that, we put our effort on creating a unified type system for to synchronize all of the type, but as the feature grow, we found that our type inference might not be fast enough from our lack of TypeScript experience we have year ago.

With our experience we made along the way of handling complex type system, various optimization and many project like [Mobius](https://github.com/saltyaom/mobius). We challenge our self to speed up our type system once again, making this a second type rewrite for Elysia.

We delete and rewrite every Elysia type from ground up to make Elysia type to be magnitude faster.

Here's a comparison between 0.6 and 0.7 on a simple `Elysia.get` code:

![Elysia 0.6](elysia-07/type-0-6.webp)![Elysia 0.7](elysia-07/type-0-7.webp)

With our new found experience, and newer TypeScript feature like const generic, we are able to simplify a lot of our code, reducing our codebase over a thousand line in type.

Allowing us to refine our type system to be even faster, and even more stable.

![Comparison between Elysia 0.6 and 0.7 on complex project with our 300 routes, and 3,500 lines of type declaration](elysia-07/inference-comparison.webp)

Using Perfetto and TypeScript CLI to generate trace on a large-scale and complex app, we measure up to 13x inference speed.

And if you might wonder if we might break type inference with 0.6 or not, we do have a unit test in type-level to make sure most of the case, there's no breaking change for type.

We hope this improvement will help you with even faster type inference like faster auto-completion, and load time from your IDE to be near instant to help your development to be even more faster and more fluent than ever before.

## Trace [​](elysia-07.html#trace)

Performance is another one of important aspect for Elysia.

We don't want to be fast for benchmarking purpose, we want you to have a real fast server in real-world scenario, not just benchmarking.

There are many factor that can slow down your app, and it's hard to identifying one, that's why we introduce **"Trace"**.

**Trace** allow us to take tap into a life-cycle event and identifying performance bottleneck for our app.

![Example of usage of Trace](elysia-07/trace.webp)

This example code allow us tap into all **beforeHandle** event, and extract the execution time one-by-one before setting the Server-Timing API to inspect the performance bottleneck.

And this is not limited to only `beforeHandle`, and event can be trace even the `handler` itself. The naming convention is name after life-cycle event you are already familiar with.

This API allows us to effortlessly auditing performance bottleneck of your Elysia server and integrate with the report tools of your choice.

By default, Trace use AoT compilation and Dynamic Code injection to conditionally report and even that you actually use automatically, which means there's no performance impact at all.

## Reactive Cookie [​](elysia-07.html#reactive-cookie)

We merged our cookie plugin into Elysia core.

Same as Trace, Reactive Cookie use AoT compilation and Dynamic Code injection to conditionally inject the cookie usage code, leading to no performance impact if you don't use one.

Reactive Cookie take a more modern approach like signal to handle cookie with an ergonomic API.

![Example of usage of Reactive Cookie](elysia-07/cookie.webp)

There's no `getCookie`, `setCookie`, everything is just a cookie object.

When you want to use cookie, you just extract the name get/set its value like:

typescript

```
app.get('/', ({ cookie: { name } }) => {
    // Get
    name.value

    // Set
    name.value = "New Value"
})
```

Then cookie will be automatically sync the value with headers, and the cookie jar, making the `cookie` object a single source of truth for handling cookie.

The Cookie Jar is reactive, which means that if you don't set the new value for the cookie, the `Set-Cookie` header will not be send to keep the same cookie value and reduce performance bottleneck.

### Cookie Schema [​](elysia-07.html#cookie-schema)

With the merge of cookie into the core of Elysia, we introduce a new **Cookie Schema** for validating cookie value.

This is useful when you have to strictly validate cookie session or want to have a strict type or type inference for handling cookie.

typescript

```
app.get('/', ({ cookie: { name } }) => {
    // Set
    name.value = {
        id: 617,
        name: 'Summoning 101'
    }
}, {
    cookie: t.Cookie({
        value: t.Object({
            id: t.Numeric(),
            name: t.String()
        })
    })
})
```

Elysia encode and decode cookie value for you automatically, so if you want to store JSON in a cookie like decoded JWT value, or just want to make sure if the value is a numeric string, you can do that effortlessly.

### Cookie Signature [​](elysia-07.html#cookie-signature)

And lastly, with an introduction of Cookie Schema, and `t.Cookie` type. We are able to create a unified type for handling sign/verify cookie signature automatically.

Cookie signature is a cryptographic hash appended to a cookie's value, generated using a secret key and the content of the cookie to enhance security by adding a signature to the cookie.

This make sure that the cookie value is not modified by malicious actor, helps in verifying the authenticity and integrity of the cookie data.

To handle cookie signature in Elysia, it's a simple as providing a `secert` and `sign` property:

typescript

```
new Elysia({
    cookie: {
        secret: 'Fischl von Luftschloss Narfidort'
    }
})
    .get('/', ({ cookie: { profile } }) => {
        profile.value = {
            id: 617,
            name: 'Summoning 101'
        }
    }, {
        cookie: t.Cookie({
            profile: t.Object({
                id: t.Numeric(),
                name: t.String()
            })
        }, {
            sign: ['profile']
        })
    })
```

By provide a cookie secret, and `sign` property to indicate which cookie should have a signature verification.

Elysia then sign and unsign cookie value automatically, eliminate the need of **sign** / **unsign** function manually.

Elysia handle Cookie's secret rotation automatically, so if you have to migrate to a new cookie secret, you can just append the secret, and Elysia will use the first value to sign a new cookie, while trying to unsign cookie with the rest of the secret if match.

typescript

```
new Elysia({
    cookie: {
        secrets: ['Vengeance will be mine', 'Fischl von Luftschloss Narfidort']
    }
})
```

The Reactive Cookie API is declarative and straigth forward, and there's some magical thing about the ergonomic it provide, and we really looking forward for you to try it.

## TypeBox 0.31 [​](elysia-07.html#typebox-0-31)

With the release of 0.7, we are updating to TypeBox 0.31 to brings even more feature to Elysia.

This brings new exciting feature like support for TypeBox's `Decode` in Elysia natively.

Previously, a custom type like `Numeric` require a dynamic code injection to convert numeric string to number, but with the use of TypeBox's decode, we are allow to define a custom function to encode and decode the value of a type automatically.

Allowing us to simplify type to:

typescript

```
Numeric: (property?: NumericOptions<number>) =>
    Type.Transform(Type.Union([Type.String(), Type.Number(property)]))
        .Decode((value) => {
            const number = +value
            if (isNaN(number)) return value

            return number
        })
        .Encode((value) => value) as any as TNumber,
```

Instead of relying on an extensive check and code injection, it's simplified by a `Decode` function in TypeBox.

We have rewrite all type that require Dynamic Code Injection to use `Transform` for easier code maintainance.

Not only limited to that, with `t.Transform` you can now also define a custom type to with a custom function to Encode and Decode manually, allowing you to write a more expressive code than ever before.

We can't wait to see what you will brings with the introduction of `t.Transform`.

### New Type [​](elysia-07.html#new-type)

With an introduction **Transform**, we have add a new type like `t.ObjectString` to automatically decode a value of Object in request.

This is useful when you have to use **multipart/formdata** for handling file uploading but doesn't support object. You can now just use `t.ObjectString()` to tells Elysia that the field is a stringified JSON, so Elysia can decode it automatically.

typescript

```
new Elysia({
    cookie: {
        secret: 'Fischl von Luftschloss Narfidort'
    }
})
    .post('/', ({ body: { data: { name } } }) => name, {
        body: t.Object({
            image: t.File(),
            data: t.ObjectString({
                name: t.String()
            })
        })
    })
```

We hope that this will simplify the need for JSON with **multipart**.

## Rewritten Web Socket [​](elysia-07.html#rewritten-web-socket)

Aside from entirely rewritten type, we also entirely rewritten Web Socket as well.

Previously, we found that Web Socket has 3 major problem:

1. Schema is not strictly validated
2. Slow type inference
3. The need for `.use(ws())` in every plugin

With this new update, solve all of problem above and while improving the performance of Web Socket.

1. Now, Elysia's Web Socket is strictly validated, and type is synced automatically.
2. We remove the need for `.use(ws())` for using WebSocket in every plugin.

And we bring a performance improvement to already fast Web Socket.

Previously, Elysia Web Socket needs to handle routing for every incoming request to unified the data and context, but with the new model. Web Socket now can infers the data for its route without relying on router.

Bringing the performance to near Bun native Web Socket performance.

Thanks to [Bogeychan](https://github.com/bogeychan) for providing the test case for Elysia Web Socket, helping us to rewrite Web Socket with confidence.

## Definitions Remap [​](elysia-07.html#definitions-remap)

Proposed on [#83](https://github.com/elysiajs/elysia/issues/83) by [Bogeychan](https://github.com/bogeychan)

To summarize, Elysia allows us to decorate and request and store with any value we desire, however some plugin might a duplicate name with the value we have, and sometime plugin has a name collision but we can't rename the property at all.

### Remapping [​](elysia-07.html#remapping)

As the name suggest, this allow us to remap existing `state`, `decorate`, `model`, `derive` to anything we like to prevent name collision, or just wanting to rename a property.

By providing a function as a first parameters, the callback will accept current value, allowing us to remap the value to anything we like.

typescript

```
new Elysia()
    .state({
        a: "a",
        b: "b"
    })
    // Exclude b state
    .state(({ b, ...rest }) => rest)
```

This is useful when you have to deal with a plugin that has some duplicate name, allowing you to remap the name of the plugin:

typescript

```
new Elysia()
    .use(
        plugin
            .decorate(({ logger, ...rest }) => ({
                pluginLogger: logger,
                ...rest
            }))
    )
```

Remap function can be use with `state`, `decorate`, `model`, `derive` to helps you define a correct property name and preventing name collision.

### Affix [​](elysia-07.html#affix)

To provide a smoother experience, some plugins might have a lot of property value which can be overwhelming to remap one-by-one.

The **Affix** function, which consists of a **prefix** and **suffix**, allows us to remap all properties of an instance, preventing the name collision of the plugin.

typescript

```
const setup = new Elysia({ name: 'setup' })
    .decorate({
        argon: 'a',
        boron: 'b',
        carbon: 'c'
    })

const app = new Elysia()
    .use(
        setup
            .prefix('decorator', 'setup')
    )
    .get('/', ({ setupCarbon }) => setupCarbon)
```

Allowing us to bulk remap a property of the plugin effortlessly, preventing the name collision of the plugin.

By default, **affix** will handle both runtime, type-level code automatically, remapping the property to camelCase as naming convention.

In some condition, you can also remap `all` property of the plugin:

typescript

```
const app = new Elysia()
    .use(
        setup
            .prefix('all', 'setup')
    )
    .get('/', ({ setupCarbon }) => setupCarbon)
```

We hope that remapping and affix will provide a powerful API for you to handle multiple complex plugin with ease.

## True Encapsulation Scope [​](elysia-07.html#true-encapsulation-scope)

With the introduction of Elysia 0.7, Elysia can now truly encapsulate an instance by treating a scoped instance as another instance.

The new scope model can even prevent event like `onRequest` to be resolve on a main instance which is not possible.

typescript

```
const plugin = new Elysia({ scoped: true, prefix: '/hello' })
    .onRequest(() => {
        console.log('In Scoped')
    })
    .get('/', () => 'hello')

const app = new Elysia()
    .use(plugin)
    // 'In Scoped' will not log
    .get('/', () => 'Hello World')
```

Further more, scoped is now truly scoped down both in runtime, and type level which is not possible without the type rewrite mentioned before.

This is exciting from maintainer side because previously, it's almost impossible to truly encapsulate the scope the an instance, but using `mount` and WinterCG compilance, we are finally able to truly encapsulate the instance of the plugin while providing a soft link with main instance property like `state`, `decorate`.

## Text based status [​](elysia-07.html#text-based-status)

There are over 64 standard HTTP status codes to remember, and I admit that sometime we also forget the status we want to use.

This is why we ship 64 HTTP Status codes in text-based form with autocompletion for you.

![Example of using text-base status code](elysia-07/teapot.webp)

Text will then resolved to status code automatically as expected.

As you type, there should be auto-completion for text popup automatically for your IDE, whether it's NeoVim or VSCode, as it's a built-in TypeScript feature.

![Text-base status code showing auto-completion](elysia-07/teapot-autocompletion.webp)

This is a small ergonomic feature to helps you develop your server without switching between IDE and MDN to search for a correct status code.

## Notable Improvement [​](elysia-07.html#notable-improvement)

Improvement:

- `onRequest` can now be async
- add `Context` to `onError`
- lifecycle hook now accept array function
- static Code Analysis now support rest parameter
- breakdown dynamic router into single pipeline instead of inlining to static router to reduce memory usage
- set `t.File` and `t.Files` to `File` instead of `Blob`
- skip class instance merging
- handle `UnknownContextPassToFunction`
- [#157](https://github.com/elysiajs/elysia/pull/179) WebSocket - added unit tests and fixed example &amp; api by @bogeychan
- [#179](https://github.com/elysiajs/elysia/pull/179) add github action to run bun test by @arthurfiorette

Breaking Change:

- remove `ws` plugin, migrate to core
- rename `addError` to `error`

Change:

- using single findDynamicRoute instead of inlining to static map
- remove `mergician`
- remove array routes due to problem with TypeScript
- rewrite Type.ElysiaMeta to use TypeBox.Transform

Bug fix:

- strictly validate response by default
- `t.Numeric` not working on headers / query / params
- `t.Optional(t.Object({ [name]: t.Numeric }))` causing error
- add null check before converting `Numeric`
- inherits store to instance plugin
- handle class overlapping
- [#187](https://github.com/elysiajs/elysia/pull/187) InternalServerError message fixed to "INTERNAL\_SERVER\_ERROR" instead of "NOT\_FOUND" by @bogeychan
- [#167](https://github.com/elysiajs/elysia/pull/167) mapEarlyResponse with aot on after handle

## Afterward [​](elysia-07.html#afterward)

Since the latest release, we have gained over 2,000 stars on GitHub!

Taking a look back, we have progressed more than we have ever imagined back then.

Pushing the boundary of TypeScript, and developer experience even to the point that we are doing something we feels truly profound.

With every release, we are gradually one step closer to brings the future we drawn long time ago.

A future where we can freely create anything we want with an astonishing developer experience.

We feels truly thanksful to be loved by you and lovely community of TypeScript and Bun.

It's exciting to see Elysia is bring to live with amazing developer like:

- [Ethan Niser with his amazing BETH Stack](https://youtu.be/aDYYn9R-JyE?si=hgvGgbywu_-jsmhR)
- Being mentioned by [Fireship](https://youtu.be/dWqNgzZwVJQ?si=AeCmcMsTZtNwmhm2)
- Having official integration for [Lucia Auth](https://github.com/pilcrowOnPaper/lucia)

And much more developers that choose Elysia for their next project.

Our goal is simple, to brings an eternal paradise where you can persue your dream and everyone can live happily.

Thanks you and your love and overwhelming support for Elysia, we hope we can paint the future to persue our dream a reality one day.

**May all the beauty be blessed**

> Stretch out that hand as if to reach someone
> 
> I'm just like you, nothing special
> 
> That's right, I'll sing the song of the night
> 
> Stellar Stellar
> 
> In the middle of the world, the universe
> 
> The music won't ever, ever stop tonight
> 
> That's right, I'd always longed to be
> 
> Not Cinderella, forever waiting
> 
> But the prince that came to for her
> 
> Cause I'm a star, that's why
> 
> Stellar Stellar

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-08.html ===
[Skip to content](elysia-08.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 0.8 - Gate of Steiner

![saltyaom](authors/aris.webp)

### saltyaom

23 Dec 2023ー[@saltyaom](https://twitter.com/saltyaom)

![Satellite floating in space before the vast world](elysia-08/gate-of-steiner.webp)

Named after the ending song of Steins;Gate Zero, [**"Gate of Steiner"**](https://youtu.be/S5fnglcM5VI).

Gate of Steiner isn't focused on new exciting APIs and features but on API stability and a solid foundation to make sure that the API will be stable once Elysia 1.0 is released.

However, we do bring improvement and new features including:

- [Macro API](elysia-08.html#macro-api)
- [New Lifecycle: resolve, mapResponse](elysia-08.html#new-life-cycle)
- [Error Function](elysia-08.html#error-function)
- [Static Content](elysia-08.html#static-content)
- [Default Property](elysia-08.html#default-property)
- [Default Header](elysia-08.html#default-header)
- [Performance and Notable Improvement](elysia-08.html#performance-and-notable-improvement)

## Macro API [​](elysia-08.html#macro-api)

Macro allows us to define a custom field to hook and guard by exposing full control of the life cycle event stack.

Allowing us to compose custom logic into a simple configuration with full type safety.

Suppose we have an authentication plugin to restrict access based on role, we can define a custom **role** field.

typescript

```
import { Elysia } from 'elysia'
import { auth } from '@services/auth'

const app = new Elysia()
    .use(auth)
    .get('/', ({ user }) => user.profile, {
        role: 'admin'
    })
```

Macro has full access to the life cycle stack, allowing us to add, modify, or delete existing events directly for each route.

typescript

```
const plugin = new Elysia({ name: 'plugin' }).macro(({ beforeHandle }) => {
    return {
        role(type: 'admin' | 'user') {
            beforeHandle(
                { insert: 'before' },
                async ({ cookie: { session } }) => {
                  const user = await validateSession(session.value)
                  await validateRole('admin', user)
}
            )
        }
    }
})
```

We hope that with this macro API, plugin maintainers will be able to customize Elysia to their heart's content opening a new way to interact better with Elysia, and Elysia users will be able to enjoy even more ergonomic API Elysia could provide.

The documentation of [Macro API](../patterns/macro.html) is now available in **pattern** section.

The next generation of customizability is now only a reach away from your keyboard and imagination.

## New Life Cycle [​](elysia-08.html#new-life-cycle)

Elysia introduced a new life cycle to fix an existing problem and highly requested API including **Resolve** and **MapResponse**: resolve: a safe version of **derive**. Execute in the same queue as **beforeHandle** mapResponse: Execute just after **afterResponse** for providing transform function from primitive value to Web Standard Response

### Resolve [​](elysia-08.html#resolve)

A "safe" version of [derive](https://elysiajs.com/essential/context.html#derive).

Designed to append new value to context after validation process storing in the same stack as **beforeHandle**.

Resolve syntax is identical to [derive](https://elysiajs.com/life-cycle/before-handle.html#derive), below is an example of retrieving a bearer header from Authorization plugin.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .guard(
        {
            headers: t.Object({
                authorization: t.TemplateLiteral('Bearer ${string}')
            })
        },
        (app) =>
            app
                .resolve(({ headers: { authorization } }) => {
                    return {
                        bearer: authorization.split(' ')[1]
                    }
                })
                .get('/', ({ bearer }) => bearer)
    )
    .listen(3000)
```

### MapResponse [​](elysia-08.html#mapresponse)

Executed just after **"afterHandle"**, designed to provide custom response mapping from primitive value into a Web Standard Response.

Below is an example of using mapResponse to provide Response compression.

typescript

```
import { Elysia, mapResponse } from 'elysia'
import { gzipSync } from 'bun'

new Elysia()
    .mapResponse(({ response }) => {
        return new Response(
            gzipSync(
                typeof response === 'object'
                    ? JSON.stringify(response)
                    : response.toString()
            )
        )
    })
    .listen(3000)
```

Why not use **afterHandle** but introduce a new API?

Because **afterHandle** is designed to read and modify a primitive value. Storing plugins like HTML, and Compression which depends on creating Web Standard Response.

This means that plugins registered after this type of plugin will be unable to read a value or modify the value making the plugin behavior incorrect.

This is why we introduce a new life-cycle run after **afterHandle** dedicated to providing a custom response mapping instead of mixing the response mapping and primitive value mutation in the same queue.

## Error Function [​](elysia-08.html#error-function)

We can set the status code by using either **set.status** or returning a new Response.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ set }) => {
        set.status = 418

        return "I'm a teapot"
    })
    .listen(3000)
```

This aligns with our goal, to just the literal value to the client instead of worrying about how the server should behave.

However, this is proven to have a challenging integration with Eden. Since we return a literal value, we can't infer the status code from the response making Eden unable to differentiate the response from the status code.

This results in Eden not being able to use its full potential, especially in error handling as it cannot infer type without declaring explicit response type for each status.

Along with many requests from our users wanting to have a more explicit way to return the status code directly with the value, not wanting to rely on **set.status**, and **new Response** for verbosity or returning a response from utility function declared outside handler function.

This is why we introduce an **error** function to return a status code alongside with value back to the client.

typescript

```
import { Elysia, error } from 'elysia'

new Elysia()
    .get('/', () => error(418, "I'm a teapot")) 
    .listen(3000)
```

Which is an equivalent to:

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ set }) => {
        set.status = 418

        return "I'm a teapot"
    })
    .listen(3000)
```

The difference is that using an **error** function, Elysia will automatically differentiate from the status code into a dedicated response type, helping Eden to infer a response based on status correctly.

This means that by using **error**, we don't have to include the explicit response schema to make Eden infers type correctly for each status code.

typescript

```
import { Elysia, error, t } from 'elysia'

new Elysia()
    .get('/', ({ set }) => {
        set.status = 418
        return "I'm a teapot"
    }, { 
        response: { 
            418: t.String() 
        } 
    }) 
    .listen(3000)
```

We recommended using `error` function to return a response with the status code for the correct type inference, however, we do not intend to remove the usage of **set.status** from Elysia to keep existing servers working.

## Static Content [​](elysia-08.html#static-content)

Static Content refers to a response that almost always returns the same value regardless of the incoming request.

This type of resource on the server is usually something like a public **File**, **video** or hardcode value that is rarely changed unless the server is updated.

By far, most content in Elysia is static content. But we also found that many cases like serving a static file or serving an HTML page using a template engine are usually static content.

This is why Elysia introduced a new API to optimize static content by determining the Response Ahead of Time.

typescript

```
new Elysia()
    .get('/', () => Bun.file('video/kyuukurarin.mp4')) 
    .get('/', Bun.file('video/kyuukurarin.mp4')) 
    .listen(3000)
```

Notice that the handler now isn't a function but is an inline value instead.

This will improve the performance by around 20-25% by compiling the response ahead of time.

## Default Property [​](elysia-08.html#default-property)

Elysia 0.8 updates to [TypeBox to 0.32](https://github.com/sinclairzx81/typebox/blob/index/changelog/0.32.0.md) which introduces many new features including dedicated RegEx, Deref but most importantly the most requested feature in Elysia, **default** field support.

Now defining a default field in Type Builder, Elysia will provide a default value if the value is not provided, supporting schema types from type to body.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ query: { name } }) => name, {
        query: t.Object({
            name: t.String({
                default: 'Elysia'
            })
        })
    })
    .listen(3000)
```

This allows us to provide a default value from schema directly, especially useful when using reference schema.

## Default Header [​](elysia-08.html#default-header)

We can set headers using **set.headers**, which Elysia always creates a default empty object for every request.

Previously we could use **onRequest** to append desired values into set.headers, but this will always have some overhead because a function is called.

Stacking functions to mutate an object can be a little slower than having the desired value set in the first hand if the value is always the same for every request like CORS or cache header.

This is why we now support setting default headers out of the box instead of creating an empty object for every new request.

typescript

```
new Elysia()
    .headers({
        'X-Powered-By': 'Elysia'
    })
```

Elysia CORS plugin also has an update to use this new API to improve this performance.

## Performance and notable improvement [​](elysia-08.html#performance-and-notable-improvement)

As usual, we found a way to optimize Elysia even more to make sure you have the best performance out of the box.

### Removable of bind [​](elysia-08.html#removable-of-bind)

We found that **.bind** is slowing down the path lookup by around ~5%, with the removal of bind from our codebase we can speed up that process a little bit.

### Static Query Analysis [​](elysia-08.html#static-query-analysis)

Elysia Static Code Analysis is now able to infer a query if the query name is referenced in the code.

This usually results in a speed-up of 15-20% by default.

### Video Stream [​](elysia-08.html#video-stream)

Elysia now adds **content-range** header to File and Blob by default to fix problems with large files like videos that require to be sent by chunk.

To fix this, Elysia now adds **content-range** header to by default.

Elysia will not send the **content-range** if the status code is set to 206, 304, 412, 416, or if the headers explicitly provide the **content-range**.

It's recommended to use [ETag plugin](https://github.com/bogeychan/elysia-etag) to handle the correct status code to avoid **content-range** collision from the cache.

This is an initial support for **content-range** header, we have created a discussion to implement more accurate behavior based on [RPC-7233](https://datatracker.ietf.org/doc/html/rfc7233#section-4.2) in the future. Feels free to join the discussion to propose a new behavior for Elysia with **content-range** and **etag generation** at [Discussion 371](https://github.com/elysiajs/elysia/discussions/371).

### Runtime Memory improvement [​](elysia-08.html#runtime-memory-improvement)

Elysia now reuses the return value of the life cycle event instead of declaring a new dedicated value.

This reduces the memory usage of Elysia by a little bit better for peak concurrent requests a little better.

### Plugins [​](elysia-08.html#plugins)

Most official plugins now take advantage of newer **Elysia.headers**, Static Content, **MapResponse** ,and revised code to comply with static code analysis even more to improve the overall performance.

Plugins that are improved by this are the following: Static, HTML, and CORS.

### Validation Error [​](elysia-08.html#validation-error)

Elysia now returns validation error as JSON instead of text.

Showing current errors and all errors and expected values instead, to help you identify an error easier.

Example:

json

```
{
  "type": "query",
  "at": "password",
  "message": "Required property",
  "expected": {
    "email": "[email protected]",
    "password": ""
  },
  "found": {
    "email": "[email protected]"
  },
  "errors": [
    {
      "type": 45,
      "schema": {
        "type": "string"
      },
      "path": "/password",
      "message": "Required property"
    },
    {
      "type": 54,
      "schema": {
        "type": "string"
      },
      "path": "/password",
      "message": "Expected string"
    }
  ]
}
```

**expect**, and **errors** fields are removed by default on the production environment to prevent an attacker from identifying a model for further attack.

## Notable Improvement [​](elysia-08.html#notable-improvement)

**Improvement**

- lazy query reference
- add content-range header to `Blob` by default
- update TypeBox to 0.32
- override lifecycle response of `be` and `af`

**Breaking Change**

- `afterHandle` no longer early return

**Change**

- change validation response to JSON
- differentiate derive from `decorator['request']` as `decorator['derive']`
- `derive` now don't show infer type in onRequest

**Bug fix**

- remove `headers`, `path` from `PreContext`
- remove `derive` from `PreContext`
- Elysia type doesn't output custom `error`

## Afterword [​](elysia-08.html#afterword)

It has been a great journey since the first release.

Elysia evolved from a generic REST API framework to an ergonomic framework to support End-to-end type safety, OpenAPI documentation generation, we we would like to keep introduce more exciting features in the future.

We are happy to have you, and the developers to build amazing stuff with Elysia and your overwhelming continuous support for Elysia encourages us to keep going.

It's exciting to see Elysia grow more as a community:

- [Scalar's Elysia theme](https://x.com/saltyAom/status/1737468941696421908?s=20) for new documentation instead of Swagger UI.
- [pkgx](https://pkgx.dev/) supports Elysia out of the box.
- Community submitted Elysia to [TechEmpower](https://www.techempower.com/benchmarks/#section=data-r22&hw=ph&test=composite) ranking at 32 out of all frameworks in composite score, even surpassing Go's Gin and Echo.

We are now trying to provide more support for each runtime, plugin, and integration to return the kindness you have given us, starting with the rewrite of the documentation with more detailed and beginner-friendliness, [Integration with Nextjs](https://elysiajs.com/integrations/nextj.html), [Astro](../integrations/astro.html) and more to come in the future.

And since the release of 0.7, we have seen fewer issues compared to the previous releases.

Now **we are preparing for the first stable release of Elysia**, Elysia 1.0 aiming to release **in Q1 2024** to repay your kindness. Elysia will now enter soft API lockdown mode, to prevent an API change and make sure that there will be no or less breaking change once the stable release arrives.

So you can expect your Elysia app to work starting from 0.7 with no or minimal change to support the stable release of Elysia.

We again thank your continuous support for Elysia, and we hope to see you again on the stable release day.

*Keep fighting for all that is beautiful in this world*.

Until then, *El Psy Congroo*.

> A drop in the darkness 小さな命
> 
> Unique and precious forever
> 
> Bittersweet memories 夢幻の刹那
> 
> Make this moment last, last forever
> 
> We drift through the heavens 果てない想い
> 
> Filled with the love from up above
> 
> He guides my travels せまる刻限
> 
> Shed a tear and leap to a new world

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-10.html ===
[Skip to content](elysia-10.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 1.0 - Lament of the Fallen

![saltyaom](authors/aris.webp)

### saltyaom

16 Mar 2024ー[@saltyaom](https://twitter.com/saltyaom)

![Dreamy Euphony landscape of floating bubble](elysia-10/lament-of-the-fallen.webp)

Elysia 1.0 is the first stable release after development for 1.8 years.

Since started, we have always waiting for a framework that focuses on developer experience, velocity, and how to make writing code for humans, not a machine.

We battle-test Elysia in various situations, simulate medium and large-scale projects, shipping code to clients and this is the first version that we felt confident enough to ship.

Elysia 1.0 introduces significant improvements and contains 1 necessary breaking change.

- [Sucrose](elysia-10.html#sucrose) - Rewritten pattern matching static analysis instead of RegEx
- [Improved startup time](elysia-10.html#improved-startup-time) up to 14x
- [Remove ~40 routes/instance TypeScript limitation](elysia-10.html#remove-40-routesinstance-limit)
- [Faster type inference](elysia-10.html#type-inference-improvement) up to ~3.8x
- [Treaty 2](elysia-10.html#treaty-2)
- [Hook type](elysia-10.html#hook-type-breaking-change) (breaking changes)
- [Inline error](elysia-10.html#inline-error) for strict error check

* * *

It's a tradition that Elysia's release note have a version named after a song or media.

This important version is named after ["Lament of the Fallen"](https://youtu.be/v1sd5CzR504).

Animated short from **"Honkai Impact 3rd"** from my favorite arc, and my favorite character, **"Raiden Mei"** featuring her theme song, ["Honkai World Diva"](https://youtu.be/s_ZLfaZMpe0).

It's a very good game, and you should check it out.

ー SaltyAom

Also known as Raiden Mei from Gun Girl Z, Honkai Impact 3rd, Honkai Star Rail. And her "variation", Raiden Shogun from Genshin Impact, and possibly Acheron from Honkai Star Rail (since she's likely a bad-end herrscher form mentioned in Star Rail 2.1).

TIP

Remember, ElysiaJS is an open source library maintain by volunteers, and isn't associate with Mihoyo nor Hoyoverse. But we are a huge fan of Honkai series, alright?

## Sucrose [​](elysia-10.html#sucrose)

Elysia is optimized to have an excellent performance proven in various benchmarks, one of the main factors is thanks to Bun, and our custom JIT static code analysis.

If you are not aware, Elysia has some sort of "compiler" embedded that reads your code and produces an optimized way to handle functions.

The process is fast and happens on the fly without a need for a build step. However, it's challenging to maintain as it's written mostly in many complex RegEx, and can be slow at times if recursion happens.

That's why we rewrote our static analysis part to separate the code injection phase using a hybrid approach between partial AST-based and pattern-matching name **"Sucrose"**.

Instead of using full AST-based which is more accurate, we choose to implement only a subset of rules that is needed to improve performance as it needs to be fast on runtime.

Sucrose is good at inferring the recursive property of the handler function accurately with low memory usage, resulting in up to 37% faster inference time and significantly reduced memory usage.

Sucrose is shipped to replace RegEx-based to partial AST, and pattern matching starting from Elysia 1.0.

## Improved Startup time [​](elysia-10.html#improved-startup-time)

Thanks to Sucrose, and separation from the dynamic injection phase, we can defer the analysis time JIT instead of AOT.

In other words, the "compile" phase can be lazily evaluated.

Offloading the evaluation phase from AOT to JIT when a route is matched for the first time and caching the result to compile on demand instead of all routes before server start.

In a runtime performance, a single compilation is usually fast and takes no longer than 0.01-0.03 ms (millisecond not second).

In a medium-sized application and stress test, we measure up to between ~6.5-14x faster start-up time.

## Remove ~40 routes/instance limit [​](elysia-10.html#remove-40-routes-instance-limit)

Previously you could only stack up to ~40 routes / 1 Elysia instance since Elysia 0.1.

This is the limitation of TypeScript that each queue that has a limited memory and if exceeded, TypeScript will think that **"Type instantiation is excessively deep and possibly infinite"**.

typescript

```
const main = new Elysia()
    .get('/1', () => '1')
    .get('/2', () => '2')
    .get('/3', () => '3')
    // repeat for 40 times
    .get('/42', () => '42')
    // Type instantiation is excessively deep and possibly infinite
```

As a workaround, we need to separate an instance into a controller to overcome the limit and remerge the type to offload the queue like this.

typescript

```
const controller1 = new Elysia()
    .get('/42', () => '42')
    .get('/43', () => '43')

const main = new Elysia()
    .get('/1', () => '1')
    .get('/2', () => '2')
    // repeat for 40 times
    .use(controller1)
```

However, starting from Elysia 1.0, we have overcome the limit after a year after optimizing for type-performance, specifically Tail Call Optimization, and variances.

This means theoretically, we can stack an unlimited amount of routes and methods until TypeScript breaks.

(spoiler: we have done that and it's around 558 routes/instance before TypeScript CLI and language server because of JavaScript memory limit per stack/queue)

typescript

```
const main = new Elysia()
    .get('/1', () => '1')
    .get('/2', () => '2')
    .get('/3', () => '42')
    // repeat for n times
    .get('/550', () => '550')
```

So we increase the limit of ~40 routes to JavaScript memory limit instead, so try not to stack more than ~558 routes/instance, and separate into a plugin if necessary.

![TypeScript breaks on 558 routes](elysia-10/558-ts-limit.webp)

The blocker that made us feel like Elysia is not ready for production has been finally resolved.

## Type Inference improvement [​](elysia-10.html#type-inference-improvement)

Thanks to the effort we put into optimization, we measure **up to ~82%** in most Elysia servers.

Thanks to the removed limitation of stack, and improved type performance, we can expect almost instant type check and auto-completion even after 500 routes stacks.

**Up to 13x faster for Eden Treaty**, type inference performance by precomputing the type instead offload type remap to Eden.

Overall, Elysia, and Eden Treaty performing together would be **up to ~3.9x faster**.

Here's a comparison between the Elysia + Eden Treaty on 0.8 and 1.0 for 450 routes.

![Type performance comparison between Elysia Eden 0.8 and 1.0, the graph shows that Elysia 0.8 took ~1500ms while Elysia 1.0 took ~400ms](elysia-10/ely-comparison.webp)

Stress test with 450 routes for Elysia with Eden Treaty, result as follows:

- Elysia 0.8 took ~1500ms
- Elysia 1.0 took ~400ms

And thanks to the removal of stack limitation, and remapping process, it's now possible to stack up to over 1,000 routes for a single Eden Treaty instance.

## Treaty 2 [​](elysia-10.html#treaty-2)

We ask you for feedback on Eden Treaty what you like and what could have been improved. and you have given us some flaws in Treaty design and several proposals to improvement.

That's why today, we introduce Eden Treaty 2, an overhaul to a more ergonomic design.

As much as we dislike breaking change, Treaty 2 is a successor to Treaty 1.

**What's new in Treaty 2**:

- More ergonomic syntax
- End-to-end type safety for Unit Test
- Interceptor
- No "$" prefix and property

Our favorite one is end-to-end type safety for Unit tests.

So instead of starting a mock server and sending a fetch request, we can use Eden Treaty 2 to write unit tests with auto-completion and type safety instead.

typescript

```
// test/index.test.ts
import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia().get('/hello', () => 'hi')
const api = treaty(app)

describe('Elysia', () => {
    it('return a response', async () => {
        const { data } = await api.hello.get()

        expect(data).toBe('hi')
    })
})
```

The difference between the two is that **Treaty 2 is a successor to Treaty 1.**

We don't intend to introduce any breaking change to Treaty 1 nor force you to update to Treaty 2.

You can choose to continue using Treaty 1 for your current project without updating to Treaty 2, and we maintain it in a maintenance mode.

- You can import `treaty` to use Treaty 2.
- And import `edenTreaty` for Treaty 1.

The documentation for the new Treaty can be found in [Treaty overview](../eden/treaty/overview.html), and for Treaty 1 in [Treaty legacy](../eden/treaty/legacy.html)

## Hook type (breaking change) [​](elysia-10.html#hook-type-breaking-change)

We hate breaking changes, and this is the first time we do it in large-scale.

We put a lot of effort into API design to reduce changes made to Elysia, but this is necessary to fix a flawed design.

Previously when we added a hook with **"on"** like `onTransform`, or `onBeforeHandle`, it would become a global hook.

This is great for creating something like a plugin but is not ideal for a local instance like a controller.

typescript

```
const plugin = new Elysia()
    .onBeforeHandle(() => {
        console.log('Hi')
    })
    // log Hi
    .get('/hi', () => 'in plugin')

const app = new Elysia()
    .use(plugin)
    // will also log hi
    .get('/no-hi-please', () => 'oh no')
```

However, we found several problems arise from this behavior.

- We found that many developers have a lot of nested guards even on the new instance. Guard is almost used as a way to start a new instance to avoid side effects.
- global by default may cause unpredictable (side-effect) behavior if not careful, especially in a team with inexperienced developers.
- We asked many developers both familiar and not familiar with Elysia, and found that most expected hook to be local at first.
- Following the previous point, we found that making hook global by default can easily cause accidental bugs (side-effect) if not reviewed carefully and hard to debug and observe.

* * *

To fix this, we introduce a hook type to specify how the hook should be inherited by introducing a **"hook-type"**.

Hook types can be classified as follows:

- local (default) - apply to only current instance and descendant only
- scoped - apply to only 1 ascendant, current instance, and descendants
- global (old behavior) - apply to all instances that apply the plugin (all ascendants, current, and descendants)

To specify the hook's type, simply add a `{ as: hookType }` to the hook.

typescript

```
const plugin = new Elysia()
    .onBeforeHandle(() => { 
    .onBeforeHandle({ as: 'global' }, () => { 
        console.log('hi')
    })
    .get('/child', () => 'log hi')

const main = new Elysia()
    .use(plugin)
    .get('/parent', () => 'log hi')
```

This API is designed to fix the **guard nesting problem** for Elysia, where developers are afraid to introduce a hook on root instances because of fear of side effects.

For example, to create an authentication check for an entire instance, we need to wrap a route in a guard.

typescript

```
const plugin = new Elysia()
    .guard((app) =>
        app
            .onBeforeHandle(checkAuthSomehow)
            .get('/profile', () => 'log hi')
    )
```

However, with the introduction of hook type, we can remove the nesting guard boilerplate.

typescript

```
const plugin = new Elysia()
    .guard((app) =>
        app 
            .onBeforeHandle(checkAuthSomehow)
            .get('/profile', () => 'log hi')
    ) 
```

Hook type will specify how the hook should be inherited, let's create a plugin to illustrate how hook type works.

typescript

```
// ? Value based on table value provided below
const type = 'local'

const child = new Elysia()
    .get('/child', () => 'hello')

const current = new Elysia()
    .onBeforeHandle({ as: type }, () => {
        console.log('hi')
    })
    .use(child)
    .get('/current', () => 'hello')

const parent = new Elysia()
    .use(current)
    .get('/parent', () => 'hello')

const main = new Elysia()
    .use(parent)
    .get('/main', () => 'hello')
```

By changing the `type` value, the result should be as follows:

typechildcurrentparentmain'local'✅✅❌❌'scope'✅✅✅❌'global'✅✅✅✅

Migrating from Elysia 0.8, if you want make a hook global, you have to specify that hook is global.

typescript

```
// From Elysia 0.8
new Elysia()
    .onBeforeHandle(() => "A")
    .derive(() => {})

// Into Elysia 1.0
new Elysia()
    .onBeforeHandle({ as: 'global' }, () => "A")
    .derive({ as: 'global' }, () => {})
```

As much as we hate breaking change and migration, we think this is an important fix that will happen sooner or later to fix problems.

Most of the server might not need to apply migration yourself but **heavily depends on plugin authors**, or should migration required, it usually take no longer than 5-15 minutes.

For a complete migration note, see [Elysia#513](https://github.com/elysiajs/elysia/issues/513).

For the documentation of hook type, see [Lifecycle#hook-type](https://beta.elysiajs.com/essential/scope.html#hook-type)

## Inline error [​](elysia-10.html#inline-error)

Starting from Elysia 0.8, we can use the `error` function to return a response with a status code for Eden inference.

However, this has some flaws.

If you specify a response schema for a route, Elysia will be unable to provide an accurate auto-completion for the status code.

For example, narrowing down an available status code. ![Using import error in Elysia](elysia-10/error-fn.webp)

Inline error can be destructured from handler as follows:

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/hello', ({ error }) => {
        if(Math.random() > 0.5) return error(418, 'Nagisa')

        return 'Azusa'
    }, {
        response: t.Object({
            200: t.Literal('Azusa'),
            418: t.Literal('Nagisa')
        })
    })
```

Inline error can produce a fine-grained type from a schema, providing type narrowing, auto-completion, and type checking to the accuracy of value, underlining red squiggly at a value instead of an entire function.

![Using inline error function from Elysia with an auto-completion that shows narrowed down status code](elysia-10/inline-error-fn.webp)

We recommended using inline error instead of import error for more accurate type safety.

## What does it mean for v1, and what's next [​](elysia-10.html#what-does-it-mean-for-v1-and-what-s-next)

Reaching stable release means we believe that Elysia is stable enough and ready to be used in production.

Maintaining backward compatibility is now one of our goals, putting effort into not introducing breaking changes to Elysia except for security.

Our goal is to make backend development feel easy, fun, and intuitive while making sure that the product built with Elysia will have a solid foundation.

After this, we will be focusing on refining our ecosystem and plugins. Introducing an ergonomic way to handle redundant and mundane tasks, starting some internal plugin rewrite, authentication, synchronize behavior between JIT and non-JIT mode, and **universal runtime support.**

Bun works excellently in both runtime, package manager and all the toolings they offers, and we believe that Bun is going to be a future of JavaScript.

We believe that by opening Elysia to more runtime and offers interesting Bun specific feature (or at-least easy to config, eg. [Bun Loaders API](https://bun.sh/docs/bundler/loaders)) will eventually gets people to try Bun more than Elysia choosing to support only Bun.

> Bun was right, the best way to migrate people from Node is to have compatibility layer and offers better DX, and performance on Bun
> 
> — SaltyAom (@saltyAom)[March 14, 2024](https://twitter.com/saltyAom/status/1768303850858143887?ref_src=twsrc%5Etfw)

Elysia core itself partially WinterCG compatible, but not all the official plugin works with WinterCG, there are some with Bun specific features, and we want to fix that.

We don't have a specific date or version for universal runtime supports yet as we will gradually adopting and test until we make sure that it would works without unexpected behavior.

You can looks forward for the following runtime to support:

- Node
- Deno
- Cloudflare Worker

We also want to support the following:

- Vercel Edge Function
- Netlify Function
- AWS Lambda / LLRT

More over, we also support, and test Elysia on the following frameworks that support Server Side Rendering or Edge Function:

- Nextjs
- Expo
- Astro
- SvelteKit

In the meantime, there's an [Elysia Polyfills](https://github.com/bogeychan/elysia-polyfills) maintained by Bogeychan, one of an active contributor to Elysia.

Additionally, we have rewrote [Eden documentation](../eden/overview.html) to explain more in depth details about Eden and we think you should check it out.

We also improve several pages, and remove redundant part of the documentation, You can check the affected pages on [Elysia 1.0 documentation PR](https://github.com/elysiajs/documentation/pull/282/files).

And finally, if you have problems with migration and additional questions related to Elysia, feels free to ask one in Elysia's Discord server.

## Notable Improvement [​](elysia-10.html#notable-improvement)

### Improvement: [​](elysia-10.html#improvement)

- fine-grained reactive cookie
- using single source of truth for cookie
- macro support for websocket
- add `mapResolve`
- add `{ as: 'global' | 'scoped' | 'local' }` to lifecycle event
- add ephemeral type
- inline `error` to handler
- inline `error` has auto-completion and type checking based on status code
- handler now check return type of `error` based on status code
- utility `Elysia._types` for types inference
- [#495](https://github.com/elysiajs/elysia/issues/495) Provide user friendly error for failed parse
- handler now infers return type for error status for Treaty
- `t.Date` now allow stringified date
- improves type test case
- add test case for all life-cycle
- resolve, mapResolve, derive, mapDerive use ephemeral type to scope down accurately
- inference query dynamic variable

### Breaking Change: [​](elysia-10.html#breaking-change)

- [#513](https://github.com/elysiajs/elysia/issues/513) lifecycle is now local first

### Change: [​](elysia-10.html#change)

- group private API property
- move `Elysia.routes` to `Elysia.router.history`
- detect possible json before return
- unknown response now return as-is instead of JSON.stringify()
- change Elysia validation error to JSON instead of string

### Bug fix: [​](elysia-10.html#bug-fix)

- [#466](https://github.com/elysiajs/elysia/issues/466) Async Derive leaks request context to other requests if `aot: true`
- [#505](https://github.com/elysiajs/elysia/issues/505) Empty ObjectString missing validation inside query schema
- [#503](https://github.com/elysiajs/elysia/issues/503) Beta: undefined class when using decorate and derive
- onStop callback called twice when calling .stop
- mapDerive now resolve to `Singleton['derive']` instead of `Singleton['store']`
- `ValidationError` doesn't return `content-type` as `application/json`
- validate `error(status, value)` validate per status
- derive/resolve always scoped to Global
- duplicated onError call if not handled
- [#516](https://github.com/elysiajs/elysia/issues/516) server timing breaks beforeHandle guards
- cookie.remove() doesn't set correct cookie path

## Afterword [​](elysia-10.html#afterword)

TIP

The following contains personal feeling, possibly venting, ranting, possibly cringe and unprofessionalism that shouldn't be written in software release note. You may choose to not continue reading as we have stated all the necessary content for the release.

2 years ago, I have a tragic memory.

It's easily one of the most painful memory I have, working days and nights to keeps up with unfair tasks that take advantage from loose contract we had with some software house.

It took more than 6 months, and I have to work since I woke up until I sleep (15 hours) on repeat, **without doing anything else not even 5 minutes break for a day**, no time for relax, nothing beside coding for almost 2 months, not even a single break day, not even weekdays that I knocked out and almost have to work in hospital bed.

I was souless, no purpose in life at all, my only wish is to make it a dream.

At the time, there are so many breaking changes, uncountable new features introduced from loop hole of loose requirement and contract.

Keeping track of it is almost impossible, and we even got scammed not even getting the pay we deserved because of "not satisfied", and we couldn't do anything with it.

It took me a month to recover from a fear of writing code, being unprofessional I couldn't even do my job properly in trauma and consults my manager that I suffered burn out.

That's why we hate breaking change so much, and want to design Elysia to handle changes easily with TypeScript soundness even if it's not good but it's all we have.

I don't want anyone to ever experienced something like that.

We designed a framework to encounter all the flaws that we had from that contract.

The technical flaws I saw in there doesn't have any JavaScript based solution that could satisfies me, yet so I experiment with one.

I could just move on as I could avoid loose contract like this in the future, and make money and not spending most of my free time creating a framework but I didn't.

There's a my favorite part, [a quote in the animated short](https://youtu.be/v1sd5CzR504?t=128) where Mei is against Kiana of the idea that she would sacrifice herself for the world, and Mei replies:

&gt; Yet you shoulder everything alone, at the cost of your life.

&gt; Maybe this is for the greater good...

&gt; But how can I pretend this is the right thing?

&gt; I only know that deep down...

&gt; the world means nothing to me...

&gt; without you

It's depiction of a duality between the person who would sacrifice themself for the world, and the person who would sacrifice themself to save who they love.

If we saw a problem and move on, how can we know that the person who came after us will not stumble upon the same problem we had, someone need to do something.

That someone would sacrifice themself to save the others but then who would save the sacrified one?

The name **"Lament of the Fallen"** describe that, and why we create Elysia.

\*Despite everything about it being my favorite, and I might relate myself personally a bit too much.

* * *

Despite being build from the bad memory, and tragic event. It's a privilege to see that Elysia grew into something with so much love. And to see what you built are loved, and well received by others.

Elysia is a work of Open Source developer, and not backed by any company.

We have to do something for living, and build Elysia in free time.

At one point I chose not to not looking for a job straight away just to work on Elysia for several months.

We would love to spent our time to improve Elysia continously, and you could help us with [GitHub sponsors](https://github.com/sponsors/SaltyAom) to reduce the work we need to support ourself, and have more free time to work on Elysia.

We are just makers that wants to create something to solve problems we have.

* * *

We have been creating and experimented a lot with Elysia, shipping real code to clients, and use Elysia in real projects to power tools behind our local community, [CreatorsGarten](https://creatorsgarten.org) (local tech community, not organization).

It took a lot of time, preparation, and courage to make sure that Elysia is ready for production. Of course, there will be bugs, but we are willing to listen, and fix it.

It's a start of a something new.

And it's possible **because of you**.

ー SaltyAom

> All the incandescent stars of heaven will die at the end of days,
> 
> Your gentle soul given to damnation.
> 
> "Crimson moon shines upon a town that is smeared in blood"
> 
> Cried the diva given into lament.
> 
> All those sweeet little dreams buried deep in memories until the very end.
> 
> [**If rescuing you is a sin, I’ll gladly become a sinner.**](https://youtu.be/v1sd5CzR504?t=260)

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-11.html ===
[Skip to content](elysia-11.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 1.1 - Grown-up's Paradise

![saltyaom](authors/aris.webp)

### saltyaom

16 Jul 2024ー[@saltyaom](https://twitter.com/saltyaom)

![Blue-purple tint of Elysia 1.1 logo](elysia-11/elysia-11.webp)

Named after a song by Mili, [**"Grown-up's Paradise"**](https://youtu.be/KawV_oK6lIc), and used as opening for [commercial announcement of Arknights TV animation season 3](https://youtu.be/sZ1OD0cL6Qw).

As a day one Arknights player and long time Mili's fan, never once I would thought Mili would do a song for Arknights, you should check them out as they are the goat.

Elysia 1.1 focus on several improvement to Developer Experience as follows:

- [OpenTelemetry](elysia-11.html#opentelemetry)
- [Trace v2 (breaking change)](elysia-11.html#trace-v2)
- [Normalization](elysia-11.html#normalization)
- [Data coercion](elysia-11.html#data-type-coercion)
- [Guard as](elysia-11.html#guard-as)
- [Bulk `as` cast](elysia-11.html#bulk-cast)
- [Response status reconcilation](elysia-11.html#response-reconcilation)
- [Optional path parameter](elysia-11.html#optional-path-parameter)
- [Generator response stream](elysia-11.html#generator-response-stream)

## OpenTelemetry [​](elysia-11.html#opentelemetry)

Observability is one of an important aspect for production.

It allows us to understand how our server works on production, identifying problems and bottlenecks.

One of the most popular tools for observability is **OpenTelemetry**. However, we acknowledge that it's hard and take time to setup and instrument your server correctly.

It's hard to integrate OpenTelemetry to most existing framework and library.

Most revolve around hacky solution, monkey patching, prototype pollution, or manual instrumentation as the framework is not designed for observability from the start.

That's why we introduce **first party support** for OpenTelemetry on Elysia

To start using OpenTelemetry, install `@elysiajs/opentelemetry` and apply plugin to any instance.

typescript

```
import { Elysia } from 'elysia'
import { opentelemetry } from '@elysiajs/opentelemetry'

import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'

new Elysia()
	.use(
		opentelemetry({
			spanProcessors: [
				new BatchSpanProcessor(
					new OTLPTraceExporter()
				)
			]
		})
	)
```

![jaeger showing collected trace automatically](elysia-11/jaeger.webp)

Elysia OpenTelemetry is will **collect span of any library compatible OpenTelemetry standard**, and will apply parent and child span automatically.

In the code above, we apply `Prisma` to trace how long each query took.

By applying OpenTelemetry, Elysia will then:

- collect telemetry data
- Grouping relevant lifecycle together
- Measure how long each function took
- Instrument HTTP request and response
- Collect error and exception

You can export telemetry data to Jaeger, Zipkin, New Relic, Axiom or any other OpenTelemetry compatible backend.

Here's an example of exporting telemetry to [Axiom](https://axiom.co)

typescript

```
import { Elysia } from 'elysia'
import { opentelemetry } from '@elysiajs/opentelemetry'

import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'

new Elysia()
	.use(
		opentelemetry({
			spanProcessors: [
				new BatchSpanProcessor(
					new OTLPTraceExporter({
						url: 'https://api.axiom.co/v1/traces', 
						headers: { 
						    Authorization: `Bearer ${Bun.env.AXIOM_TOKEN}`, 
						    'X-Axiom-Dataset': Bun.env.AXIOM_DATASET
						} 
					})
				)
			]
		})
	)
```

![axiom showing collected trace from OpenTelemetry](elysia-11/axiom.webp)

Elysia OpenTelemetry is for applying OpenTelemetry to Elysia server only.

You can use OpenTelemetry SDK normally, and the span is run under Elysia's request span, it will be automatically appear in Elysia trace.

However, we also provide a `getTracer`, and `record` utility to collect span from any part of your application.

typescript

```
import { Elysia } from 'elysia'
import { record } from '@elysiajs/opentelemetry'

export const plugin = new Elysia()
	.get('', () => {
		return record('database.query', () => {
			return db.query('SELECT * FROM users')
		})
	})
```

`record` is an equivalent to OpenTelemetry's `startActiveSpan` but it will handle auto-closing and capture exception automatically.

You may think of `record` as a label for your code that will be shown in trace.

### Prepare your codebase for observability [​](elysia-11.html#prepare-your-codebase-for-observability)

Elysia OpenTelemetry will group lifecycle and read the **function name** of each hook as the name of the span.

It's a good time to **name your function**.

If your hook handler is an arrow function, you may refactor it to named function to understand the trace better otherwise, your trace span will be named as `anonymous`.

typescript

```
const bad = new Elysia()
	// ⚠️ span name will be anonymous
	.derive(async ({ cookie: { session } }) => {
		return {
			user: await getProfile(session)
		}
	})

const good = new Elysia()
	// ✅ span name will be getProfile
	.derive(async function getProfile({ cookie: { session } }) {
		return {
			user: await getProfile(session)
		}
	})
```

## Trace v2 [​](elysia-11.html#trace-v2)

Elysia OpenTelemetry is built on Trace v2, replacing Trace v1.

Trace v2 allows us to trace any part of our server with 100% synchronous behavior, instead of relying on parallel event listener bridge (goodbye dead lock)

It's entirely rewritten to not only be faster, but also reliable, and accurate down to microsecond by relying on Elysia's ahead of time compilation and code injection.

Trace v2 use a callback listener instead of Promise to ensure that callback is finished before moving on to the next lifecycle event.

Here's an example usage of Trace v2:

typescript

```
import { Elysia } from 'elysia'

new Elysia()
	.trace(({ onBeforeHandle, set }) => {
		// Listen to before handle event
		onBeforeHandle(({ onEvent }) => {
			// Listen to all child event in order
			onEvent(({ onStop, name }) => {
				// Execute something after a child event is finished
				onStop(({ elapsed }) => {
					console.log(name, 'took', elapsed, 'ms')

					// callback is executed synchronously before next event
					set.headers['x-trace'] = 'true'
				})
			})
		})
	})
```

You may also use `async` inside trace, Elysia will block and event before proceeding to the next event until the callback is finished.

Trace v2 is a breaking change to Trace v1, please check out [trace api](https://elysiajs.com/life-cycle/trace.html) documentation for more information.

## Normalization [​](elysia-11.html#normalization)

Elysia 1.1 now normalize data before it's being processed.

To ensure that data is consistent and safe, Elysia will try to coerce data into an exact data shape defined in schema, removing additional fields, and normalizing data into a consistent format.

For example if you have a schema like this:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

treaty






 } from '@elysiajs/eden'


const 

app






 = new 

Elysia






()

	.

post






('/', ({ 

body






 }) => 

body






, {

		

body






: 

t






.

Object






({

			

name






: 

t






.

String






(),

			

point






: 

t






.

Number






()
		}),

		

response






: 

t






.

Object






({

			

name






: 

t






.

String






()
		})
	})


const { 

data






 } = await 

treaty






(

app






).

index






.

post






({

	

name






: 'SaltyAom',

	

point






: 9001,
	// ⚠️ additional field
	title: 'maintainer'
Object literal may only specify known properties, and 'title' does not exist in type '{ name: string; point: number; }'.})

// 'point' is removed as defined in response



console






.

log






(

data






) // { name: 'SaltyAom' }
```

This code does 2 thing:

- Remove `title` from body before it's being used on the server
- Remove `point` from response before it's being sent to the client

This is useful to prevent data inconsistency, and ensure that data is always in the correct format, and not leaking any sensitive information.

## Data type coercion [​](elysia-11.html#data-type-coercion)

Previously Elysia is using an exact data type without coercion unless explicitly specified to.

For example, to parse a query parameter as a number, you need to explicitly cast it as `t.Numeric` instead of `t.Number`.

typescript

```
import { Elysia, t } from 'elysia'

const app = new Elysia()
	.get('/', ({ query }) => query, {
		query: t.Object({
			page: t.Numeric()
		})
	})
```

However, in Elysia 1.1, we introduce data type coercion, which will automatically coerce data into the correct data type if possible.

Allowing us to simply set `t.Number` instead of `t.Numeric` to parse a query parameter as a number.

typescript

```
import { Elysia, t } from 'elysia'

const app = new Elysia()
	.get('/', ({ query }) => query, {
		query: t.Object({
			// ✅ page will be coerced into a number automatically
			page: t.Number()
		})
	})
```

This also apply to `t.Boolean`, `t.Object`, and `t.Array`.

This is done by swapping schema with possible coercion counterpart during compilation phase ahead of time, and has the same as using `t.Numeric` or other coercion counterpart.

## Guard as [​](elysia-11.html#guard-as)

Previously, `guard` will only apply to the current instance only.

typescript

```
import { Elysia } from 'elysia'

const plugin = new Elysia()
	.guard({
		beforeHandle() {
			console.log('called')
		}
	})
	.get('/plugin', () => 'ok')

const main = new Elysia()
	.use(plugin)
	.get('/', () => 'ok')
```

Using this code, `onBeforeHandle` will only be called when accessing `/plugin` but not `/`.

In Elysia 1.1, we add `as` property to `guard` allowing us to apply guard as `scoped` or `global` as same as adding event listener.

typescript

```
import { Elysia } from 'elysia'

const plugin1 = new Elysia()
	.guard({
		as: 'scoped', 
		beforeHandle() {
			console.log('called')
		}
	})
	.get('/plugin', () => 'ok')

// Same as
const plugin2 = new Elysia()
	.onBeforeHandle({ as: 'scoped' }, () => {
		console.log('called')
	})
	.get('/plugin', () => 'ok')
```

This will ensure that `onBeforeHandle` will be called on parent as well, and follow scoping mechanism.

Adding `as` to guard is useful, because it allow us to apply multiple hooks respecting scoping mechanism all at once.

However, it also allows us to apply `schema` to ensure type safety for all the routes at once.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

	.

guard






({

		

as






: 'scoped',

		

response






: 

t






.

String






()
	})

	.

get






('/ok', () => 'ok')

	.

get






('/not-ok', () => 1)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, TModule<{}, {}>, "/not-ok">, MergeSchema<{}, MergeSchema<{ body: unknown; headers: unknown; query: unknown; params: {}; cookie: unknown; response: { 200: string; }; }, {}, "">, "">, "">, { ...; } & { ...; }, "/not-ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.

const 

instance






 = new 

Elysia






()

	.

use






(

plugin






)

	.

get






('/no-ok-parent', () => 2)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>, "/no-ok-parent">, MergeSchema<...>, "">, { ...; } & { ...; }, "/no-ok-parent">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.

const 

parent






 = new 

Elysia






()

	.

use






(

instance






)
	// This is fine because response is defined as scoped

	.

get






('/ok', () => 3)
```

## Bulk cast [​](elysia-11.html#bulk-cast)

Continue from code above, sometimes we want to reapply plugin to parent instance as well but as it's limited by `scoped` mechanism, it's limited to 1 parent only.

To apply to the parent instance, we need to **"lift the scope up** to the parent instance.

We can achieve this by casting it \`**as('plugin')**.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

	.

guard






({

		

as






: 'scoped',

		

response






: 

t






.

String






()
	})

	.

get






('/ok', () => 'ok')

	.

get






('/not-ok', () => 1)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, TModule<{}, {}>, "/not-ok">, MergeSchema<{}, MergeSchema<{ body: unknown; headers: unknown; query: unknown; params: {}; cookie: unknown; response: { 200: string; }; }, {}, "">, "">, "">, { ...; } & { ...; }, "/not-ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.

const 

instance






 = new 

Elysia






()

	.

use






(

plugin






)

	.

as






('plugin') 

	.

get






('/no-ok-parent', () => 2)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>, "/no-ok-parent">, MergeSchema<...>, "">, { ...; } & { ...; }, "/no-ok-parent">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.

const 

parent






 = new 

Elysia






()

	.

use






(

instance






)
	// This now error because `scoped` is lifted up to parent

	.

get






('/ok', () => 3)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>>, "/ok">, MergeSchema<...>, "">, { ...; } & { ...; }, "/ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
```

The `as` cast will lift all an instance's scope up.

How it work is that, it read all hooks and schema scope, and lift it up to the parent instance.

Which means if you have `local` scope, and want to apply it to the parent instance, you can use `as('plugin')` to lift it up.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

	.

guard






({

		

response






: 

t






.

String






()
	})

	.

onBeforeHandle






(() => { 

console






.

log






('called') })

	.

get






('/ok', () => 'ok')

	.

get






('/not-ok', () => 1)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, TModule<{}, {}>, "/not-ok">, MergeSchema<{ body: unknown; headers: unknown; query: unknown; params: {}; cookie: unknown; response: { 200: string; }; }, MergeSchema<...>, "">, "">, { ...; } & { ...; }, "/not-ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
	.

as






('plugin') 


const 

instance






 = new 

Elysia






()

	.

use






(

plugin






)

	.

get






('/no-ok-parent', () => 2)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>, "/no-ok-parent">, MergeSchema<...>, "">, { ...; } & { ...; }, "/no-ok-parent">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
	.

as






('plugin') 


const 

parent






 = new 

Elysia






()

	.

use






(

instance






)
	// This now error because `scoped` is lifted up to parent

	.

get






('/ok', () => 3)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>>, "/ok">, MergeSchema<...>, "">, { ...; } & { ...; }, "/ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
```

This will cast **guard's response** and **onBeforeHandle** as `scoped` thus lifting it up to the parent instance.

**as** accept two possible arguments:

- `plugin` cast event to **scoped**
- `global` cast event to **global**

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

	.

guard






({

		

response






: 

t






.

String






()
	})

	.

onBeforeHandle






(() => { 

console






.

log






('called') })

	.

get






('/ok', () => 'ok')

	.

get






('/not-ok', () => 1)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, TModule<{}, {}>, "/not-ok">, MergeSchema<{ body: unknown; headers: unknown; query: unknown; params: {}; cookie: unknown; response: { 200: string; }; }, MergeSchema<...>, "">, "">, { ...; } & { ...; }, "/not-ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
	.

as






('global') 


const 

instance






 = new 

Elysia






()

	.

use






(

plugin






)

	.

get






('/no-ok-parent', () => 2)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>, "/no-ok-parent">, MergeSchema<...>, "">, { ...; } & { ...; }, "/no-ok-parent">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.

const 

parent






 = new 

Elysia






()

	.

use






(

instance






)
	// This now error because `scoped` is lifted up to parent

	.

get






('/ok', () => 3)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>>, "/ok">, MergeSchema<...>, "">, { ...; } & { ...; }, "/ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
```

This allow us to cast multiple hook scope all at once without adding `as` to each hook or applying it to guard, or lifting and existing plugin scope up.

typescript

```
import { Elysia, t } from 'elysia'

// On 1.0
const from = new Elysia()
	// Not possible to apply guard to parent on 1.0
	.guard({
		response: t.String()
	})
	.onBeforeHandle({ as: 'scoped' }, () => { console.log('called') })
	.onAfterHandle({ as: 'scoped' }, () => { console.log('called') })
	.onParse({ as: 'scoped' }, () => { console.log('called') })

// On 1.1
const to = new Elysia()
	.guard({
		response: t.String()
	})
	.onBeforeHandle(() => { console.log('called') })
	.onAfterHandle(() => { console.log('called') })
	.onParse(() => { console.log('called') })
	.as('plugin')
```

## Response reconcilation [​](elysia-11.html#response-reconcilation)

In Elysia 1.0, Elysia will prefers either one of the schema from the scope, and will not merge them together.

However, on Elysia 1.1, Elysia will try to reconcile response schema from all scope from each status code and merge them together.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

	.

guard






({

		

as






: 'global',

		

response






: {

			200: 

t






.

Literal






('ok'),

			418: 

t






.

Literal






('Teapot')
		}
	})

	.

get






('/ok', ({ 

error






 }) => 

error






(418, 'Teapot'))


const 

instance






 = new 

Elysia






()

	.

use






(

plugin






)

	.

guard






({

		

response






: {

			418: 

t






.

String






()
		}
	})
	// This is fine because local response override

	.

get






('/ok', ({ 

error






 }) => 

error






(418, 'ok'))


const 

parent






 = new 

Elysia






()

	.

use






(

instance






)
	// Error because global response

	.

get






('/not-ok', ({ 

error






 }) => 

error






(418, 'ok'))
Argument of type '"ok"' is not assignable to parameter of type '"Teapot"'.
```

We can see that:

- on instance: the response schema from the global scope is merged with the local scope, allowing us to override the global response schema in this instance
- on parent: the response schema from the global scope is used, local scoped from **instance** is not applied because of scoping mechanism

This is handled in both type-level and runtime, providing us with a better type-integrity.

## Optional Path Parameter [​](elysia-11.html#optional-path-parameter)

Elysia now support optional path parameter by adding `?` to the end of path parameter.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
	.get('/ok/:id?', ({ params: { id } }) => id)
	.get('/ok/:id/:name?', ({ params: { id, name } }) => name)
```

In the example above, if we access: `/ok/1` will return `1/ok` will return `undefined`

By default, accessing the optional path parameter will return `undefined` if it's not provided.

You can provide a default value by either using JavaScript default value or schema default value.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
	.get('/ok/:id?', ({ params: { id } }) => id, {
		params: t.Object({
			id: t.Number({
				default: 1
			})
		})
	})
```

In this example, if we access: `/ok/2` will return `1/ok` will return `1`

## Generator response stream [​](elysia-11.html#generator-response-stream)

Previously, you can stream a response by using `@elysiajs/stream` package.

However, there's a limitation:

- Doesn't provide inference type safety for Eden
- Not as straightforward way to stream response

Now, Elysia support response streaming out of the box by using a generator function.

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
	.get('/ok', function* () {
		yield 1
		yield 2
		yield 3
	})
```

This this example, we can stream a response by using `yield` keyword.

Using generator function, we can now infers return type from the generator function and provide it to Eden directly.

Eden will now infer the response type from the generator function as `AsyncGenerator`

typescript

```
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
	.get('/ok', function* () {
		yield 1
		yield 2
		yield 3
	})

const { data, error } = await treaty(app).ok.get()
if (error) throw error

for await (const chunk of data)
	console.log(chunk)
```

While streaming a response, it's common that request may be cancelled before the response is fully streamed, In that case, Elysia will automatically stop the generator function when the request is cancelled.

We recommended migrating from `@elysiajs/stream` to generator function for streaming response, as it's more straightforward and provide better type inference.

As the stream plugin will be in maintainance mode and will be deprecated in the future.

## Breaking Change [​](elysia-11.html#breaking-change)

- Parse value as string for all validators unless explicitly specified.
  
  - See [50a5d92](https://github.com/elysiajs/elysia/commit/50a5d92ea3212c5f95f94552e4cb7d31b2c253ad), [44bf279](https://github.com/elysiajs/elysia/commit/44bf279c3752c6909533d19c83b24413d19d27fa).
  - Remove objects auto-parsing in query unless explicitly specified via query
  - Except query string as defined in RFC 3986, TLDR; query string could be either string or array of string.
- Rename `onResponse` to `onAfterResponse`
- \[Internal] Remove $passthrough in favor of toResponse
- \[Internal] UnwrapRoute type now always resolve with status code

### Notable Change: [​](elysia-11.html#notable-change)

- Add auto-complete for `set.headers`
- Remove prototype poluation from hook
- remove static analysis for query name
- remove query replace '+' in favor removing static query analysis
- Add `server` property
- mapResponse is now called in error event
- reconcilation decorator in type level
- `onError` supports array function
- Parse query object with and without schema
- Deprecated `ObjectString` for parsing array
- Sucrose: improve isContextPassToFunction, and extractMainParameter stability
- Add `replaceSchemaType`
- Add `route` to `context`
- Optimize recursive MacroToProperty type
- Parse query array and object
- Optimize code path for `composeGeneralHandler`
- Add debug report on compiler panic
- Using `Cookie<unknown>` instead of `Cookie<any>` if schema is not defined
- Reduce memory usage of route registration ~36% on large codebase
  
  - Reduce compilation code path
  - Remove trace inference
  - Reduce router compilation code path
  - removing route handler compilation cache (st${index}, stc${index})
- Add undefined union to cookie in case if cookie is not present
- Optimize response status resolve type inference

### Bug fix: [​](elysia-11.html#bug-fix)

- Normalize headers accidentally use query validator check instead
- `onError` missing trace symbol
- Headers validator compilation is not cached
- Deduplicate macro propagation
- Websocket in nested group now work
- Error response is not check unless successful status code is provided

## Afterword [​](elysia-11.html#afterword)

Hi, SaltyAom here again and thanks you for supporting Elysia for the past 2 years.

It has been a lovely journey, and to see so many overwhelming support for Elysia make me feels so happy so much that I don't know how to express it.

I'm still very happy to work on Elysia and looking forward for a long journey with you and Elysia.

However, working alone on Elysia is not easy, that's why I need your help to support Elysia by reporting a bug, creating a PR (we are opensource after all), or share anything you like about Elysia or even just say hi.

Past 2 years, I know that Elysia is not perfect, and sometime I might not have all the time to respond to issues but I'm trying my best to make it better and have a vision of what it could be.

That's why in the future, we will have more maintainers to help maintain Elysia plugins, currently Bogeychan and Fecony are doing great on helping maintain community server.

* * *

As you may or may not know, orginally ElysiaJS is named as "KingWorld" before chaning name to "Elysia".

Same as Elysia naming convention, both are inspired by anime/game/vtuber subculture.

KingWorld is name after the song [KINGWORLD](https://youtu.be/yVaQpUUAzik?si=Dmto2PgA0uDxNi3D) by Shirakami Fubuki and Sasakure.uk, both are my favorite vtuber and music producer.

That's **why logo is designed in the style of Arctic fox** after Fubuki.

While Elysia is obviously name after [Elysia](https://honkai-impact-3rd-archives.fandom.com/wiki/Elysia), my favorite character from game Honkai Impact 3rd which I also name my cat after her as well.

Also I have a little gift, as you may know I'm also a cosplayer in my spare time, and I have a cosplay of Honkai 3rd Elysia as well.

![Elysia maintainer](elysia-11/ely.webp)

So uh, Elysia maintaining Elysia I guess?

I'm planning to do a photoshoot of Elysia cosplay and share it with you in the future, as I like her so much, I want to make it perfect.

That being said, I'm looking forward to see you on the next release, and thank you for supporting Elysia.

> We were so easily satisfied and happy
> 
> Even if I break your favorite teddy bear
> 
> A "sorry" could fix everything
> 
> When did it change? When did we forget?
> 
> Why is it now so hard to forgive?
> 
> Do we advance, never stopping our steps
> 
> Because we are scared to look back on what we did?

> Truth is, I know as long as we live
> 
> Our ideals dye rivers scarlet
> 
> Answer me, my sinking ship
> 
> Where's our tomorrow?
> 
> Where does our future go?
> 
> Does our hope have to be sown upon somebody's sorrow?

**ขอให้โลกใจดีกับเธอบ้างนะ**

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-12.html ===
[Skip to content](elysia-12.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia 1.2 - You and Me

![saltyaom](authors/aris.webp)

### saltyaom

23 Dec 2024ー[@saltyaom](https://twitter.com/saltyaom)

![Blue-purple tint background with white text label Elysia 1.2 in the middle](elysia-12/elysia-12.webp)

Named after the song [Φ²](https://youtu.be/b9IkzWO63Fg) from album "At the Fingertip of the Sea" by HoyoMix as used in as in [**"You and Me"**](https://youtu.be/nz_Ra4G57A4).

Elysia 1.2 focus on commitment to expand universal runtime support and developer experience:

- [Adapter](elysia-12.html#adapter)
- [Macro with resolve](elysia-12.html#macro-with-resolve)
- [Parser](elysia-12.html#parser)
- [WebSocket](elysia-12.html#websocket)
- [Typebox 0.34](elysia-12.html#typebox)
- [Reduced Memory usage](elysia-12.html#reduced-memory-usage)

## Adapter [​](elysia-12.html#adapter)

One of the most requested features is to support more runtimes.

Elysia 1.2 introduces **adapter** to allow Elysia to run on different runtimes.

ts

```
import { node } from '@elysiajs/node'

new Elysia({ adapter: node() })
	.get('/', 'Hello Node')
	.listen(3000)
```

Elysia is designed to be run on Bun and will continue to have Bun as the primary runtime and prioritize feature on Bun first.

However, we are giving you more choice to try Elysia on different environment that fits your need, eg. serverless like AWS Lambda, Supabase Function, etc.

The goal of Elysia's adapter is to provide a consistent API across different runtime while maintaining the best performance with the same code or with minimal changes for each runtime.

### Performance [​](elysia-12.html#performance)

Performance is one of Elysia's strength. We do not compromise on performance.

Instead of relying on a bridge to convert Web Standard's request to Node Request/Response. Elysia use the native Node API directly to achieve the best performance while providing Web Standard compatibility if needed.

By utilizing Sucrose static code analysis, it allows Elysia to be faster than most Web-Standard frameworks like Hono, h3, and even native Node framework like Fastify, Express.

![Node Benchmark](elysia-12/node-benchmark.webp)

As usual, you may find the benchmark in [Bun HTTP framework benchmark](https://github.com/saltyaom/bun-http-framework-benchmark).

Elysia now has supports runtime adapter for:

- Bun
- Web Standard (WinterCG) eg. Deno, Browser
- Node (beta)

Although Node adapter is still in beta, it has the most features you expected from returning Generator Stream to WebSocket. We recommended you to try it out.

We will continue to expand support for more runtimes in the future starting with:

- Cloudflare Worker
- AWS Lambda
- uWebSocket.js

### Universal runtime API [​](elysia-12.html#universal-runtime-api)

To be comaptible with different runtime, Elysia now wrap over a hand-picked utility function to provide a consistent API across different runtime.

For example, in Bun you may use `Bun.file` to return a file response which is not available in Node.

ts

```
import { Elysia } from 'elysia'
import { Elysia, file } from 'elysia'

new Elysia()
	.get('/', () => Bun.file('./public/index.html')) 
	.get('/', () => file('./public/index.html')) 
```

These utility functions are a replicated of Bun's utility function designed to be compatible with runtime that Elysia has supports for which will be expanded in the future.

Currently, Elysia has supports for:

- `file` - Return a file response
- `form` - Return a formdata response
- `server` - A port of Bun's `Server` type declaration

## Macro with resolve [​](elysia-12.html#macro-with-resolve)

Starting with Elysia 1.2, you can now use `resolve` in macro.

ts

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

	.

macro






({

		

user






: (

enabled






: true) => ({

			

resolve






: ({ 

cookie






: { 

session






 } }) => ({

				

user






: 

session






.

value






!
			})
		})
	})

	.

get






('/', ({ 

user






 }) => 

user






, {

		

user






: true
	})
```

With the new macro object syntax, instead of retriving lifecycle you can now return it instead to reduce boilerplate.

Here's a comparison between the old and new syntax:

ts

```
// ✅ Object Macro
new Elysia()
	.macro({
		role: (role: 'admin' | 'user') => ({
			beforeHandle: ({ cookie: { session } }) => ({
				user: session.value!
			})
		})
	})

// ⚠️ Function Macro
new Elysia()
	.macro(({ onBeforeHandle }) => {
		role(role: 'admin' | 'user') {
			onBeforeHandle(({ cookie: { session } }) => ({
				user: session.value!
			})
		}
	})
```

Both syntax are supported but the new object syntax is recommended. We don't have plan to remove the previous syntax but we will focus on the new object syntax with new features.

INFO

Due to TypeScript limitation, macro's `resolve` only works with the new object syntax but not with previous one.

## Name Parser [​](elysia-12.html#name-parser)

Elysia 1.2 introduce a parser with a custom name, allowing you to specify which parser should be used for decoding request body.

ts

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

	.

parser






('custom', ({ 

contentType






 }) => {

		if(

contentType






 === "application/kivotos")
			return 'nagisa'
	})

	.

post






('/', ({ 

body






 }) => 

body






, {

		

parse






: 'custom'
	})
```

`parser` has a similar API to `onParse` but with a custom name allowing you to reference it in a route.

You may also reference Elysia's built-in parser or provide multiple parsers to be used in order.

ts

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

	.

parser






('custom', ({ 

contentType






 }) => {

		if(

contentType






 === "application/kivotos")
			return 'nagisa'
	})

	.

post






('/', ({ 

body






 }) => 

body






, {

		

type






: 'json',

		

parse






: ['custom', 'json']
	})
```

Parsers will be call in order, if the parser does not return a value, it will move to the next parser until one of the parser returns a value.

## WebSocket [​](elysia-12.html#websocket)

We have rewrite WebSocket to be more performant and match the API and behavior with the latest Bun's WebSocket API while maintaining compatibility with each runtime.

ts

```
new Elysia()
	.ws('/ws', {
		ping: (message) => message,
		pong: (message) => message
	})
```

WebSocket now has a more consistent API with HTTP route and has a similar lifecycle as HTTP route.

## TypeBox 0.34 [​](elysia-12.html#typebox-0-34)

Elysia 1.2 now has support for TypeBox 0.34.

With this update, Elysia now use TypeBox's `t.Module` to handle reference model to support circular recursive type.

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

model






({

		

a






: 

t






.

Object






({

			

a






: 

t






.

Optional






(

t






.

Ref






('a'))
		})
	})

	.

post






('/recursive', ({ 

body






 }) => 

body






, {

		

body






: 'a'
	})
```

## Reduced Memory usage [​](elysia-12.html#reduced-memory-usage)

We have refactor Sucrose's generated code for a swappable code generation process.

By refactoring for a better code duplication, router optimization, and unnecessary code removal.

This allows Elysia to reuse code from several parts and reduce large portion of memory usage.

For our project, by simply upgrading to Elysia 1.2, we seen up to 2x memory reduction from 1.1.

![Memory comparison between 1.1 and 1.2](elysia-12/memory.webp)

This memory optimization is scaled with the number of routes and the complexity of the route. So you may see reduced memory usage exponentially.

## Notable update [​](elysia-12.html#notable-update)

Below are some of the notable improvement that are made in Elysia 1.2.

### Eden validation error [​](elysia-12.html#eden-validation-error)

Eden also now automatically infers `422` status code if validation model is provided.

ts

```
import { treaty } from '@elysiajs/eden'
import type { App } from './app'

const api = treaty<App>('localhost:3000')

const { data, error } = await api.user.put({
	name: 'saltyaom'
})

if(error)
	switch(error.status) {
		case 422:
			console.log(error.summary)
			break

		default:
			console.error(error)
	}
```

### Router [​](elysia-12.html#router)

We have updated route registration deduplication to be more optimized.

Previously Elysia will check all of the possible route to prevent route deduplication. Now Elysia use a checksum hash map to check if the route is already registered and merged routing and code generation process loop for static route registration to improve performance.

### Changes [​](elysia-12.html#changes)

- Event Listener now infers path parameter automatically based on scope
- Add ‘scoped’ to bulk `as` for casting type to ‘scoped’ similar to ‘plugin’
- Update `cookie` to 1.0.1
- Update TypeBox to 0.33
- `content-length` now accept number
- use 16-degit hexadecimals for `id` in `trace`
- disable `minify` in production build for better debugging/error reporting

## Breaking Change [​](elysia-12.html#breaking-change)

There should be minor required changes to your codebase to adapt to upgrade to Elysia 1.2.

However, these are all the changes that you need to be aware of.

### parse [​](elysia-12.html#parse)

`type` is now merged with `parse` to allow control over order of custom and built-in parser.

ts

```
import { Elysia, form, file } from 'elysia'

new Elysia()
	.post('/', ({ body }) => body, {
		type: 'json'
		parse: 'json'
	})
```

### formdata [​](elysia-12.html#formdata)

Starting from 1.2, you now have to explicitly return `form` if the response is a formdata instead of automatically detect if file is present in 1-level deep object.

ts

```
import { Elysia, form, file } from 'elysia'

new Elysia()
	.post('/', ({ file }) => ({ 
	.post('/', ({ file }) => form({ 
		a: file('./public/kyuukurarin.mp4')
	}))
```

### WebSocket [​](elysia-12.html#websocket-1)

WebSocket method now return thier respective value instead of returning `WebSocket`.

Thus removing the ability to do method chaining.

This is to make WebSocket match the same API with Bun's WebSocket API for better compatibility and migration.

ts

```
import { Elysia } from 'elysia'

new Elysia()
	.ws('/', {
		message(ws) {
			ws 
				.send('hello') 
				.send('world') 

			ws.send('hello') 
			ws.send('world') 
		}
	})
```

### scoped [​](elysia-12.html#scoped)

Elysia now removed the `constructor scoped` as it might be confused with `scope's scoped/global`

ts

```
import { Elysia } from 'elysia'

new Elysia({ scoped: false }) 

const scoped = new Elysia() 

const main = new Elysia() 
	.mount(scoped) 
```

### Internal breaking changes [​](elysia-12.html#internal-breaking-changes)

- Remove router internal property static.http.staticHandlers
- Router history compile now link with history composed

## Afterword [​](elysia-12.html#afterword)

Elysia 1.2 is an ambitious update that we have been working on for a while.

A gambit to expand Elysia's reach to more developer and more runtime but there are something else I want to say as well.

### Let's start this again. [​](elysia-12.html#let-s-start-this-again)

Hi, how are you? I hope you are doing well.

I still love doing this, writing blog post about Elysia. It's has been a while since then.

You may noticed that it has been a while since the last update, and it's not a long one. I'm sorry for that.

I hope you understand that we also have our own life to take care of. We are not a robot, we are human. Sometime about life, sometime about work, sometime about family, sometime financially.

### I want to be with you all the time. [​](elysia-12.html#i-want-to-be-with-you-all-the-time)

Doing what I love, keep updating Elysia, keep writing blog post, keep making art but you know that I have something to take care of too.

I have to bring food to table, I have take care of a lot of things financially. I have to take care of myself too.

I hope you are doing well, I hope you are happy, I hope you are healthy, I hope you are safe.

Even if I'm not here. A part of me known as Elysia will be with you.

Thanks for being with me.

> Here I feel the touch brought by the real number solution.
> 
> Ripples of two souls now have reached our double slits.
> 
> Casting stripes of light and dark in the world as days and nights.
> 
> You set me free under the sun.
> 
> I fly your cradle dreams to the moon and back.
> 
> A worm will turn into a butterfly,
> 
> before one can answer "who am I".
> 
> After the ice turns into water,
> 
> the sea I hang upside down will be your sky.

> And we finally met again, Seele.

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/elysia-supabase.html ===
[Skip to content](elysia-supabase.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Elysia with Supabase. Your next backend at sonic speed

![saltyaom](authors/aris.webp)

### saltyaom

10 Mar 2023ー[@saltyaom](https://twitter.com/saltyaom)

![Elysia and Supabase resembance as a CPU place closely together](elysia-supabase/elysia-supabase.webp)

Supabase, an Open Source alternative to Firebase, has become one of the developers' favorite toolkits known for rapid development.

Featuring PostgreSQL, ready-to-use user authentication, Serverless Edge function, Cloud Storage, and more, ready to use.

Because Supabase already has pre-built and composed the situation where you find yourself redoing the same feature for the 100th time into less than 10 lines of code.

For example, authentication, which would take require you to rewrite a hundred lines of code for every project you did to just:

ts

```
supabase.auth.signUp(body)

supabase.auth.signInWithPassword(body)
```

Then Supabase will handle the rest, confirming email by sending a confirmation link, or authentication with a magic link or OTP, securing your database with row-level authentication, you name it.

Things that take many hours to redo in every project are now a matter of a minute to accomplish.

## Elysia [​](elysia-supabase.html#elysia)

If you haven't heard, Elysia is a Bun-first web framework built with speed and Developer Experience in mind.

Elysia outperforms Express by nearly ~20x faster, while having almost the same syntax as Express and Fastify.

###### (Performance may vary per machine, we recommended you run [the benchmark](https://github.com/SaltyAom/bun-http-framework-benchmark) on your machine before deciding the performance) [​](elysia-supabase.html#performance-may-vary-per-machine-we-recommended-you-run-the-benchmark-on-your-machine-before-deciding-the-performance)

Elysia has a very snappy Developer Experience. Not only that you can define a single source of truth for type, but also detects and warns when you accidentally create a change in data.

All done in a declaratively small line of code.

## Setting things up [​](elysia-supabase.html#setting-things-up)

You can use Supabase Cloud for a quick start.

Supabase Cloud will handle setting up the database, scaling, and all things you need in the Cloud in a single click.

![Supabase landing page](elysia-supabase/supabase-web.webp)

Creating a project, you should see something like this, fill all the requests you need, and if you're in Asia, Supabase has a server in Singapore and Tokyo

##### (sometimes this is a tie-breaker for developers living in Asia because of latency) [​](elysia-supabase.html#sometimes-this-is-a-tie-breaker-for-developers-living-in-asia-because-of-latency)

![Creating new Supabase project](elysia-supabase/supabase-create-project.webp)

After creating a project, you should greet with a welcome screen where you can copy the project URL and service role.

Both are use to indicate which Supabase project you're using in your project.

And if you missed the welcome page, you navigate to **Settings &gt; API**, copy **Project URL** and **Project API keys**

![Supabase Config Page](elysia-supabase/supabase-config.webp)

Now in your command line, you can start creating the Elysia project by running:

bash

```
bun create elysia elysia-supabase
```

The last argument is our folder name for Bun to create, feel free to change the name to anything you like.

Now, **cd** into our folder, as we are going to use a newer feature in Elysia 0.3 (RC), we need to install the Elysia RC channel first, and let's grab a cookie plugin and Supabase client that we are going to use later here too.

bash

```
bun add elysia@rc @elysiajs/cookie@rc @supabase/supabase-js
```

Let's create a **.env** file to load our Supabase service load as a secret.

bash

```
# .env
supabase_url=https://********************.supabase.co
supabase_service_role=**** **** **** ****
```

You don't have to install any plugin to load the env file as Bun load **.env** file by default

Now let's open our project in our favorite IDE, and create a file inside `src/libs/supabase.ts`

ts

```
// src/libs/supabase.ts
import { createClient } from '@supabase/supabase-js'

const { supabase_url, supabase_service_role } = process.env

export const supabase = createClient(supabase_url!, supabase_service_role!)
```

And that's it! That's all you need to set up Supabase and a Elysia project.

Now let's dive into implementation!

## Authentication [​](elysia-supabase.html#authentication)

Now let's create authentication routes separated from the main file.

Inside `src/modules/authen.ts`, let's create an outline for our routes first.

ts

```
// src/modules/authen.ts
import { Elysia } from 'elysia'

const authen = (app: Elysia) =>
    app.group('/auth', (app) =>
        app
            .post('/sign-up', () => {
                return 'This route is expected to sign up a user'
            })
            .post('/sign-in', () => {
                return 'This route is expected to sign in a user'
            })
    )
```

And now, let's apply Supabase to authenticate our user.

ts

```
// src/modules/authen.ts
import { Elysia } from 'elysia'
import { supabase } from '../../libs'

const authen = (app: Elysia) =>
    app.group('/auth', (app) =>
        app
            .post('/sign-up', async ({ body }) => {
                const { data, error } = await supabase.auth.signUp(body) 

                if (error) return error 

                return data.user 
                return 'This route is expected to sign up a user'
            })
            .post('/sign-in', async ({ body }) => {
                const { data, error } = await supabase.auth.signInWithPassword( 
                    body 
                ) 

                if (error) return error 

                return data.user 
                return 'This route is expected to sign in a user'
            })
    )
```

And- done! That's all it needs to create **sign-in** and **sign-up** route for our user.

But we have a little problem here, you see, our route can accept **any** body and put it into a Supabase parameter, even an invalid one.

So, to make sure that we put the correct data, we can define a schema for our body.

ts

```
// src/modules/authen.ts
import { Elysia, t } from 'elysia'
import { supabase } from '../../libs'

const authen = (app: Elysia) =>
    app.group('/auth', (app) =>
        app
            .post(
                '/sign-up',
                async ({ body }) => {
                    const { data, error } = await supabase.auth.signUp(body)

                    if (error) return error

                    return data.user
                },
                { 
                    schema: { 
                        body: t.Object({ 
                            email: t.String({ 
                                format: 'email'
                            }), 
                            password: t.String({ 
                                minLength: 8
                            }) 
                        }) 
                    } 
                } 
            )
            .post(
                '/sign-in',
                async ({ body }) => {
                    const { data, error } =
                        await supabase.auth.signInWithPassword(body)

                    if (error) return error

                    return data.user
                },
                { 
                    schema: { 
                        body: t.Object({ 
                            email: t.String({ 
                                format: 'email'
                            }), 
                            password: t.String({ 
                                minLength: 8
                            }) 
                        }) 
                    } 
                } 
            )
    )
```

And now we declare a schema in both **sign-in** and **sign-up**, Elysia is going to make sure that an incoming body is going to have the same form as we declare, preventing an invalid argument from passing into `supabase.auth`.

Elysia also understands the schema, so instead of declaring TypeScript's type separately, Elysia types the `body` automatically as the schema you defined.

So if you accidentally create a breaking change in the future, Elysia going to warn you about the data type.

The code we have are great, it did the job that we expected, but we can step it up a little bit further.

You see, both **sign-in** and **sign-up** accept the same shape of data, in the future, you might also find yourself duplicating a long schema in multiple routes.

We can fix that by telling Elysia to memorize our schema, then we can use by telling Elysia the name of the schema we want to use.

ts

```
// src/modules/authen.ts
import { Elysia, t } from 'elysia'
import { supabase } from '../../libs'

const authen = (app: Elysia) =>
    app.group('/auth', (app) =>
        app
            .setModel({ 
                sign: t.Object({ 
                    email: t.String({ 
                        format: 'email'
                    }), 
                    password: t.String({ 
                        minLength: 8
                    }) 
                }) 
            }) 
            .post(
                '/sign-up',
                async ({ body }) => {
                    const { data, error } = await supabase.auth.signUp(body)

                    if (error) return error
                    return data.user
                },
                {
                    schema: {
                        body: 'sign', 
                        body: t.Object({ 
                            email: t.String({ 
                                format: 'email'
                            }), 
                            password: t.String({ 
                                minLength: 8
                            }) 
                        }) 
                    }
                }
            )
            .post(
                '/sign-in',
                async ({ body }) => {
                    const { data, error } =
                        await supabase.auth.signInWithPassword(body)

                    if (error) return error

                    return data.user
                },
                {
                    schema: {
                        body: 'sign', 
                        body: t.Object({ 
                            email: t.String({ 
                                format: 'email'
                            }), 
                            password: t.String({ 
                                minLength: 8
                            }) 
                        }) 
                    }
                }
            )
    )
```

Great! We have just used name reference on our route!

TIP

If you found yourself with a long schema, you can declare them in a separate file and re-use them in any Elysia route to put the focus back on business logic instead.

## Storing user session [​](elysia-supabase.html#storing-user-session)

Great, now the last thing we need to do to complete the authentication system is to store the user session, after a user is signed in, the token is known as `access_token` and `refresh_token` in Supabase.

access\_token is a short live JWT access token. Use to authenticate a user in a short amount of time. refresh\_token is a one-time-used never-expired token to renew access\_token. So as long as we have this token, we can create a new access token to extend our user session.

We can store both values inside a cookie.

Now, some might not like the idea of storing the access token inside a cookie and might use Bearer instead. but for simplicity, we are going to use a cookie here.

TIP

We can set a cookie as **HttpOnly** to prevent XSS, **Secure**, **Same-Site**, and also encrypt a cookie to prevent a man-in-the-middle attack.

ts

```
// src/modules/authen.ts
import { Elysia, t } from 'elysia'
import { cookie } from '@elysiajs/cookie'

import { supabase } from '../../libs'

const authen = (app: Elysia) =>
    app.group('/auth', (app) =>
        app
            .use( 
                cookie({ 
                    httpOnly: true, 
                    // If you need cookie to deliver via https only
                    // secure: true,
                    //
                    // If you need a cookie to be available for same-site only
                    // sameSite: "strict",
                    //
                    // If you want to encrypt a cookie
                    // signed: true,
                    // secret: process.env.COOKIE_SECRET,
                }) 
            ) 
            .setModel({
                sign: t.Object({
                    email: t.String({
                        format: 'email'
                    }),
                    password: t.String({
                        minLength: 8
                    })
                })
            })
            // rest of the code
    )
```

And-- That's all it takes to create a **sign-in** and **sign-up** route for Elysia and Supabase!

![Using Rest Client to sign in](elysia-supabase/lagrange-sign-in.webp)

## Refreshing a token [​](elysia-supabase.html#refreshing-a-token)

Now, as mentioned, access\_token is short-lived, and we might need to renew the token now and then.

Luckily, we can do that with a one-liner from Supabase.

ts

```
// src/modules/authen.ts
import { Elysia, t } from 'elysia'
import { supabase } from '../../libs'

const authen = (app: Elysia) =>
    app.group('/auth', (app) =>
        app
            .setModel({
                sign: t.Object({
                    email: t.String({
                        format: 'email'
                    }),
                    password: t.String({
                        minLength: 8
                    })
                })
            })
            .post(
                '/sign-up',
                async ({ body }) => {
                    const { data, error } = await supabase.auth.signUp(body)

                    if (error) return error
                    return data.user
                },
                {
                    schema: {
                        body: 'sign'
                    }
                }
            )
            .post(
                '/sign-in',
                async ({ body }) => {
                    const { data, error } =
                        await supabase.auth.signInWithPassword(body)

                    if (error) return error

                    return data.user
                },
                {
                    schema: {
                        body: 'sign'
                    }
                }
            )
            .get( 
                '/refresh', 
                async ({ setCookie, cookie: { refresh_token } }) => { 
                    const { data, error } = await supabase.auth.refreshSession({ 
                        refresh_token 
                    }) 

                    if (error) return error 

                    setCookie('refresh_token', data.session!.refresh_token) 

                    return data.user 
                } 
            ) 
    )
```

Finally, add routes to the main server.

ts

```
import { Elysia, t } from 'elysia'

import { auth } from './modules'

const app = new Elysia()
    .use(auth) 
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

And that's it!

## Authorization route [​](elysia-supabase.html#authorization-route)

We have just implemented user authentication which is fun and game, but now you might find yourself in need of authorization for each route, and duplicating the same code to check for cookies all over the place.

Luckily, we can re-use the function in Elysia.

Let's paint the example by saying that we might want a user to create a simple blog post that can have the database schema as the following:

Inside the Supabse console, we are going to create a Postgres table name 'post' as the following: ![Creating table using Supabase UI, in the public table with the name of 'post', and a columns of 'id' with type of 'int8' as a primary value, 'created_at' with type of 'timestamp' with default value of 'now()', 'user_id' linked to Supabase's user schema linked as 'user.id', and 'post' with type of 'text'](elysia-supabase/supabase-create-table.webp)

**user\_id** is linked to Supabase's generated **auth** table linked as **user.id**, using this relation, we can create row-level security to only allow the owner of the post to modify the data.

![Linking the 'user_id' field with Supabase's user schema as 'user.id'](elysia-supabase/supabase-create-table-link.webp)

Now, let's create a new separated Elysia route in another folder to separate the code from auth route, inside `src/modules/post/index.ts`

ts

```
// src/modules/post/index.ts
import { Elysia, t } from 'elysia'

import { supabase } from '../../libs'

export const post = (app: Elysia) =>
    app.group('/post', (app) =>
        app.put(
            '/create',
            async ({ body }) => {
                const { data, error } = await supabase
                    .from('post')
                    .insert({
                        // Add user_id somehow
                        // user_id: userId,
                        ...body
                    })
                    .select('id')

                if (error) throw error

                return data[0]
            },
            {
                schema: {
                    body: t.Object({
                        detail: t.String()
                    })
                }
            }
        )
    )
```

Now, this route can accept the body and put it into the database, the only thing we are left to do is handle authorization and extract the `user_id`.

Luckily we can do that easily, thanks to Supabase, and our cookies.

ts

```
import { Elysia, t } from 'elysia'
import { cookie } from '@elysiajs/cookie'

import { supabase } from '../../libs'

export const post = (app: Elysia) =>
    app.group('/post', (app) =>
        app.put(
            '/create',
            async ({ body }) => {
                let userId: string

                const { data, error } = await supabase.auth.getUser( 
                    access_token 
                ) 

                if(error) { 
                    const { data, error } = await supabase.auth.refreshSession({ 
                        refresh_token 
                    }) 

                    if (error) throw error 

                    userId = data.user!.id 
                } 

                const { data, error } = await supabase
                    .from('post')
                    .insert({
                        // Add user_id somehow
                        // user_id: userId,
                        ...body
                    })
                    .select('id')

                if (error) throw error

                return data[0]
            },
            {
                schema: {
                    body: t.Object({
                        detail: t.String()
                    })
                }
            }
        )
    )
```

Great! Now we can extract `user_id` from our cookie using **supabase.auth.getUser**

## Derive [​](elysia-supabase.html#derive)

Our code work fine for now, but let's paint a little picture.

Let's say you have so many routes that require authorization like this, requiring you to extract the `userId`, it means that you will have a lot of duplicated code here, right?

Luckily, Elysia is specially designed to tackle this problem.

* * *

In Elysia, we have something called a **scope**.

Imagine it's like a **closure** where only a variable can only be used inside a scope, or ownership if you're from Rust.

Any life-cycle declared in scope like **group**, **guard** is going to be only available in scope.

This means that you can declare a specific life cycle to specific routes inside the scope.

For example, a scope of routes that need authorization while others are not.

So, instead of reusing all that code, we defined it once and applied it to all the routes you need.

* * *

Now, let's move this retrieving **user\_id** into a plugin and apply it to all routes in the scope.

Let's put this plugin inside `src/libs/authen.ts`

ts

```
import { Elysia } from 'elysia'
import { cookie } from '@elysiajs/cookie'

import { supabase } from './supabase'

export const authen = (app: Elysia) =>
    app
        .use(cookie())
        .derive(
            async ({ setCookie, cookie: { access_token, refresh_token } }) => {
                const { data, error } = await supabase.auth.getUser(
                    access_token
                )

                if (data.user)
                    return {
                        userId: data.user.id
                    }

                const { data: refreshed, error: refreshError } =
                    await supabase.auth.refreshSession({
                        refresh_token
                    })

                if (refreshError) throw error

                return {
                    userId: refreshed.user!.id
                }
            }
        )
```

This code attempts to extract userId, and add `userId` to `Context` of the route, otherwise, it will throw an error and skip the handler, preventing an invalid error to be put into our business logic, aka **supabase.from.insert**.

TIP

We can also use **onBeforeHandle** to create a custom validation before entering the main handler too, **.derive** also does the same but any returned from **derived** will be added to **Context** while **onBeforeHandle** don't.

Technically, **derive** use **transform** under the hood.

And with a single line, we apply all routes inside the scope into authorized-only routes, with type-safe access to **userId**.

ts

```
import { Elysia, t } from 'elysia'

import { authen, supabase } from '../../libs'

export const post = (app: Elysia) =>
    app.group('/post', (app) =>
        app
            .use(authen) 
            .put(
                '/create',
                async ({ body, userId }) => { 
                    let userId: string

                    const { data, error } = await supabase.auth.getUser( 
                        access_token 
                    ) 

                    if(error) { 
                        const { data, error } = await supabase.auth.refreshSession({ 
                            refresh_token 
                        }) 

                        if (error) throw error 

                        userId = data.user!.id 
                    } 

                    const { data, error } = await supabase
                        .from('post')
                        .insert({
                            user_id: userId, 
                            ...body
                        })
                        .select('id')

                    if (error) throw error

                    return data[0]
                },
                {
                    schema: {
                        body: t.Object({
                            detail: t.String()
                        })
                    }
                }
            )
    )
```

Great right? We don't even see that we handled the authorization by looking at the code like magic.

Putting our focus back on our core business logic instead.

![Using Rest Client to create post](elysia-supabase/lagrange-create-post.webp)

## Non-authorized scope [​](elysia-supabase.html#non-authorized-scope)

Now let's create one more route to fetch the post from the database.

ts

```
import { Elysia, t } from 'elysia'

import { authen, supabase } from '../../libs'

export const post = (app: Elysia) =>
    app.group('/post', (app) =>
        app
            .get('/:id', async ({ params: { id } }) => { 
                const { data, error } = await supabase 
                    .from('post') 
                    .select() 
                    .eq('id', id) 

                if (error) return error 

                return { 
                    success: !!data[0], 
                    data: data[0] ?? null
                } 
            }) 
            .use(authen)
            .put(
                '/create',
                async ({ body, userId }) => {
                    const { data, error } = await supabase
                        .from('post')
                        .insert({
                            // Add user_id somehow
                            // user_id: userId,
                            ...body
                        })
                        .select('id')

                    if (error) throw error

                    return data[0]
                },
                {
                    schema: {
                        body: t.Object({
                            detail: t.String()
                        })
                    }
                }
            )
    )
```

We are using success to indicate if the post is existed or not. ![Using Rest Client to get post by id](elysia-supabase/lagrange-get-post-success.webp)

If not, we are going to return `success: false` and `data: null` instead. ![Using Rest Client to get post by id but failed](elysia-supabase/lagrange-get-post-failed.webp)

As we mentioned before, the `.use(authen)` is applied to the scoped **but** with only the one declared after itself, which means that anything before isn't affected, and what came after is now authorized only route.

And one last thing, don't forget to add routes to the main server.

ts

```
import { Elysia, t } from 'elysia'

import { auth, post } from './modules'

const app = new Elysia()
    .use(auth)
    .use(post) 
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

## Bonus: Documentation [​](elysia-supabase.html#bonus-documentation)

As a bonus, after all of what we create, instead of telling exactly route by route, we can create documentation for our frontend devs in 1 line.

With the Swagger plugin, we can install:

bash

```
bun add @elysiajs/swagger@rc
```

And then just add the plugin:

ts

```
import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

import { auth, post } from './modules'

const app = new Elysia()
    .use(swagger()) 
    .use(auth)
    .use(post)
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

Tada 🎉 We got well-defined documentation for our API.

![Swagger documentation generated by Elysia](elysia-supabase/elysia-swagger.webp)

And if anything more, you don't have to worry that you might forget a specification of OpenAPI Schema 3.0, we have auto-completion and type-safety too.

We can define our route detail with `schema.detail` that also follows OpenAPI Schema 3.0, so you can properly create documentation. ![Using auto-completion with `schema.detail`](elysia-supabase/swagger-auto-complete.webp)

## What's next [​](elysia-supabase.html#what-s-next)

For the next step, we encourage you to try out and explore more with the [code we have just written in this article](https://github.com/saltyaom/elysia-supabase-example) and try adding an image-uploading post, to see explore both Supabase and Elysia ecosystems.

As we can see, it's super easy to create a production-ready web server with Supabase, many things are just one-liners and handy for rapid development.

Especially when paired with Elysia, you get excellent Developer Experience, declarative schema as a single source of truth, and a very well-thought design choice for creating an API, high-performance server while using TypeScript, and as a bonus, we can create documentation in just one line.

Elysia is on a journey for creating a Bun-first web framework with new technology, and a new approach.

If you're interested in Elysia, feel free to check out our [Discord server](https://discord.gg/eaFJ2KDJck) or see [Elysia on GitHub](https://github.com/elysiajs/elysia)

Also, you might want to checkout out [Elysia Eden](../eden/overview.html), a fully type-safe, no-code-gen fetch client like tRPC for Elysia server.

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/integrate-trpc-with-elysia.html ===
[Skip to content](integrate-trpc-with-elysia.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Integrate tRPC server to Bun with Elysia

![saltyaom](authors/aris.webp)

### saltyaom

4 Feb 2023ー[@saltyaom](https://twitter.com/saltyaom)

![Logo of Elysia connect with a plus sign with tRPC](integrate-trpc-with-elysia/elysia-trpc.webp)

tRPC has been a popular choice for web development recently, thanks to its end-to-end type-safety approach to accelerate development by blurring the line between front and backend, and inferring types from the backend automatically.

Helping developers develop faster and safer code, knowing instantly when things break while migrating data structure, and removing redundant steps of re-creating type for frontend once again.

But we can when extending tRPC more.

## Elysia [​](integrate-trpc-with-elysia.html#elysia)

Elysia is a web framework optimized for Bun, inspired by many frameworks including tRPC. Elysia supports end-to-end type safety by default, but unlike tRPC, Elysia uses Express-like syntax that many already know, removing the learning curve of tRPC.

With Bun being the runtime for Elysia, the speed and throughput for Elysia server are fast and even outperforming [Express up to 21x and Fastify up to 12x on mirroring JSON body (see benchmark)](https://github.com/SaltyAom/bun-http-framework-benchmark/tree/655fe7f87f0f4f73f2121433f4741a9d6cf00de4).

The ability to combine the existing tRPC server into Elysia has been one of the very first objectives of Elysia since its start.

The reason why you might want to switch from tRPC to Bun:

- Significantly faster, even outperform many popular web frameworks running in Nodejs without changing a single piece of code.
- Extend tRPC with RESTful or GraphQL, both co-existing in the same server.
- Elysia has end-to-end type-safety like tRPC but with almost no-learning curve for most developer.
- Using Elysia is the great first start experimenting/investing in Bun runtime.

## Creating Elysia Server [​](integrate-trpc-with-elysia.html#creating-elysia-server)

To get started, let's create a new Elysia server, make sure you have [Bun](https://bun.sh) installed first, then run this command to scaffold Elysia project.

```
bun create elysia elysia-trpc && cd elysia-trpc && bun add elysia
```

TIP

Sometimes Bun doesn't resolve the latest field correctly, so we are using `bun add elysia` to specify the latest version of Elysia instead

This should create a folder name **"elysia-trpc"** with Elysia pre-configured.

Let's start a development server by running the dev command:

```
bun run dev
```

This command should start a development server on port :3000

## Elysia tRPC plugin [​](integrate-trpc-with-elysia.html#elysia-trpc-plugin)

Building on top of the tRPC Web Standard adapter, Elysia has a plugin for integrating the existing tRPC server into Elysia.

bash

```
bun add @trpc/server zod @elysiajs/trpc @elysiajs/cors
```

Suppose that this is an existing tRPC server:

typescript

```
import { initTRPC } from '@trpc/server'
import { observable } from '@trpc/server/observable'

import { z } from 'zod'

const t = initTRPC.create()

export const router = t.router({
    mirror: t.procedure.input(z.string()).query(({ input }) => input),
})

export type Router = typeof router
```

Normally all we need to use tRPC is to export the type of router, but to integrate tRPC with Elysia, we need to export the instance of router too.

Then in the Elysia server, we import the router and register tRPC router with `.use(trpc)`

typescript

```
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { trpc } from '@elysiajs/trpc'

import { router } from './trpc'

const app = new Elysia()
    .use(cors()) 
    .get('/', () => 'Hello Elysia')
    .use( 
        trpc(router) 
    ) 
    .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
```

And that's it! 🎉

That's all it takes to integrate tRPC with Elysia, making tRPC run on Bun.

## tRPC config and Context [​](integrate-trpc-with-elysia.html#trpc-config-and-context)

To create context, `trpc` can accept 2nd parameters that can configure tRPC as same as `createHTTPServer`.

For example, adding `createContext` into tRPC server:

typescript

```
// trpc.ts
import { initTRPC } from '@trpc/server'
import { observable } from '@trpc/server/observable'
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
import { z } from 'zod'

export const createContext = async (opts: FetchCreateContextFnOptions) => { 
    return { 
        name: 'elysia'
    } 
} 

const t = initTRPC.context<Awaited<ReturnType<typeof createContext>>>().create() 

export const router = t.router({ 
    mirror: t.procedure.input(z.string()).query(({ input }) => input),
})

export type Router = typeof router
```

And in the Elysia server

typescript

```
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import '@elysiajs/trpc'

import { router, createContext } from './trpc'

const app = new Elysia()
    .use(cors())
    .get('/', () => 'Hello Elysia')
    .use(
        trpc(router, { 
            createContext 
        }) 
    )
    .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
```

And we can specify a custom endpoint of tRPC by using `endpoint`:

typescript

```
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { trpc } from '@elysiajs/trpc'

import { router, createContext } from './trpc'

const app = new Elysia()
    .use(cors())
    .get('/', () => 'Hello Elysia')
    .use(
        trpc(router, {
            createContext,
            endpoint: '/v2/trpc'
        })
    )
    .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
```

## Subscription [​](integrate-trpc-with-elysia.html#subscription)

By default, tRPC uses WebSocketServer to support `subscription`, but unfortunately as Bun 0.5.4 doesn't support WebSocketServer yet, we can't directly use WebSocket Server.

However, Bun does support Web Socket using `Bun.serve`, and with Elysia tRPC plugin has wired all the usage of tRPC's Web Socket into `Bun.serve`, you can directly use tRPC's `subscription` with Elysia Web Socket plugin directly:

Start by installing the Web Socket plugin:

bash

```
bun add @elysiajs/websocket
```

Then inside tRPC server:

typescript

```
import { initTRPC } from '@trpc/server'
import { observable } from '@trpc/server/observable'
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'

import { EventEmitter } from 'stream'

import { zod } from 'zod'

export const createContext = async (opts: FetchCreateContextFnOptions) => {
    return {
        name: 'elysia'
    }
}

const t = initTRPC.context<Awaited<ReturnType<typeof createContext>>>().create()
const ee = new EventEmitter() 

export const router = t.router({
    mirror: t.procedure.input(z.string()).query(({ input }) => {
        ee.emit('listen', input) 

        return input
    }),
    listen: t.procedure.subscription(() =>
        observable<string>((emit) => { 
            ee.on('listen', (input) => { 
                emit.next(input) 
            }) 
        }) 
    ) 
})

export type Router = typeof router
```

And then we register:

typescript

```
import { Elysia, ws } from 'elysia'
import { cors } from '@elysiajs/cors'
import '@elysiajs/trpc'

import { router, createContext } from './trpc'

const app = new Elysia()
    .use(cors())
    .use(ws()) 
    .get('/', () => 'Hello Elysia')
    .trpc(router, {
        createContext
    })
    .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
```

And that's all it takes to integrate the existing fully functional tRPC server to Elysia Server thus making tRPC run on Bun 🥳.

Elysia is excellent when you need both tRPC and REST API, as they can co-exist together in one server.

## Bonus: Type-Safe Elysia with Eden [​](integrate-trpc-with-elysia.html#bonus-type-safe-elysia-with-eden)

As Elysia is inspired by tRPC, Elysia also supports end-to-end type-safety like tRPC by default using **"Eden"**.

This means that you can use Express-like syntax to create RESTful API with full-type support on a client like tRPC.

To get started, let's export the app type.

typescript

```
import { Elysia, ws } from 'elysia'
import { cors } from '@elysiajs/cors'
import { trpc } from '@elysiajs/trpc'

import { router, createContext } from './trpc'

const app = new Elysia()
    .use(cors())
    .use(ws())
    .get('/', () => 'Hello Elysia')
    .use(
        trpc(router, {
            createContext
        })
    )
    .listen(3000)

export type App = typeof app 

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
```

And on the client side:

bash

```
bun add @elysia/eden && bun add -d elysia
```

And in the code:

typescript

```
import { edenTreaty } from '@elysiajs/eden'
import type { App } from '../server'

// This now has all type inference from the server
const app = edenTreaty<App>('http://localhost:3000')

// data will have a value of 'Hello Elysia' and has a type of 'string'
const data = await app.index.get()
```

Elysia is a good start when you want end-to-end type-safety like tRPC but need to support more standard patterns like REST, and still have to support tRPC or need to migrate from one.

## Bonus: Extra tip for Elysia [​](integrate-trpc-with-elysia.html#bonus-extra-tip-for-elysia)

An additional thing you can do with Elysia is not only that it has support for tRPC and end-to-end type-safety, but also has a variety of support for many essential plugins configured especially for Bun.

For example, you can generate documentation with Swagger only in 1 line using [Swagger plugin](../plugins/swagger.html).

typescript

```
import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
    .use(swagger()) 
    .setModel({
        sign: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
    .get('/', () => 'Hello Elysia')
    .post('/typed-body', ({ body }) => body, {
        schema: {
            body: 'sign',
            response: 'sign'
        }
    })
    .listen(3000)

export type App = typeof app

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
```

Or when you want to use [GraphQL Apollo](../plugins/graphql-apollo.html) on Bun.

typescript

```
import { Elysia } from 'elysia'
import { apollo, gql } from '@elysiajs/apollo'

const app = new Elysia()
    .use( 
        apollo({ 
            typeDefs: gql`
                type Book {
                    title: String
                    author: String
                }

                type Query {
                    books: [Book]
                }
            `, 
            resolvers: { 
                Query: { 
                    books: () => { 
                        return [ 
                            { 
                                title: 'Elysia', 
                                author: 'saltyAom'
                            } 
                        ] 
                    } 
                } 
            } 
        }) 
    ) 
    .get('/', () => 'Hello Elysia')
    .listen(3000)

export type App = typeof app

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
```

Or supporting OAuth 2.0 with a [community OAuth plugin](https://github.com/bogeychan/elysia-oauth2).

Nonetheless, Elysia is a great place to start learning/using Bun and the ecosystem around Bun.

If you like to learn more about Elysia, [Elysia documentation](../index.html) is a great start to start exploring the concept and patterns, and if you are stuck or need help, feel free to reach out in [Elysia Discord](https://discord.gg/eaFJ2KDJck).

The repository for all of the code is available at [https://github.com/saltyaom/elysia-trpc-demo](https://github.com/saltyaom/elysia-trpc-demo), feels free to experiment and reach out.

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog/with-prisma.html ===
[Skip to content](with-prisma.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

Outline

# Accelerate your next Prisma server with Elysia

![saltyaom](authors/aris.webp)

### saltyaom

4 Jun 2023ー[@saltyaom](https://twitter.com/saltyaom)

![Triangular Prism placing in the center](with-prisma/prism.webp)

Prisma is a renowned TypeScript ORM for its developer experience.

With type-safe and intuitive API that allows us to interact with databases using a fluent and natural syntax.

Writing a database query is as simple as writing a shape of data with TypeScript auto-completion, then Prisma takes care of the rest by generating efficient SQL queries and handling database connections in the background.

One of the standout features of Prisma is its seamless integration with popular databases like:

- PostgreSQL
- MySQL
- SQLite
- SQL Server
- MongoDB
- CockroachDB

So we have the flexibility to choose the database that best suits our project's needs, without compromising on the power and performance that Prisma brings to the table.

This means you can focus on what really matters: building your application logic.

Prisma is one of an inspiration for Elysia, its declarative API, fluent developer experience is an absolute joy to work with.

Now we can bring the long-awaited imagination to life with [the release of Bun 0.6.7](https://bun.sh/blog/bun-v0.6.7), Bun now support Prisma out of the box.

## Elysia [​](with-prisma.html#elysia)

Elysia is one of the answer that would come to mind when you asked what framework should I use with Bun.

Although, you can use Express with Bun, but with Elysia is built specifically for Bun.

Elysia can outperforms Express by nearly ~19x faster supercharged with declarative API for creating a unified type system and end-to-end type safety

Elysia also known for having a fluent Developer Experience especially as Elysia is designed to be used with Prisma since its early day.

With Elysia's strict-type validation, we can integrate Elysia and Prisma with ease using declarative API.

In other word, Elysia will ensure that runtime type and TypeScript's type will be always in sync, making it behave like Type Strict Language where you can completely trust the type system and looks ahead for any type error, and easier debugging errors relating to type.

## Setting up [​](with-prisma.html#setting-up)

All we need to get start is to run `bun create` to setup an Elysia server

bash

```
bun create elysia elysia-prisma
```

Where `elysia-prisma` is our project name (folder destination), feels free to change the name to anything you like.

Now in our folder, and let's install Prisma CLI as dev dependency.

ts

```
bun add -d prisma
```

Then we can setup prisma project with `prisma init`

ts

```
bunx prisma init
```

`bunx` is a bun command equivalent to `npx`, which allows us to execute package bin.

Once setup, we can see that Prisma will update `.env` file and generate a folder named **prisma** with **schema.prisma** as a file inside.

**schema.prisma** is an database model defined with Prisma's schema language.

Let's update our **schema.prisma** file like this for a demonstration:

ts

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int     @id @default(autoincrement())
  username  String  @unique
  password  String
}
```

Telling Prisma that we want to create a table name **User** with column as:

ColumnTypeConstraintidNumberPrimary Key with auto incrementusernameStringUniquepasswordString-

Prisma will then read the schema, and DATABASE\_URL from an `.env` file, so before syncing our database we need to define the `DATABASE_URL` first.

Since we don't have any database running, we can setup one using docker:

bash

```
docker run -p 5432:5432 -e POSTGRES_PASSWORD=12345678 -d postgres
```

Now go into `.env` file at the root of our project then edit:

```
DATABASE_URL="postgresql://postgres:12345678@localhost:5432/db?schema=public"
```

Then we can run `prisma migrate` to sync our database with Prisma schema:

bash

```
bunx prisma migrate dev --name init
```

Prisma then generate a strongly-typed Prisma Client code based on our schema.

This means we get autocomplete and type checking in our code editor, catching potential errors at compile time rather than runtime.

## Into the code [​](with-prisma.html#into-the-code)

In our **src/index.ts**, let's update our Elysia server to create a simple user sign-up endpoint.

ts

```
import { Elysia } from 'elysia'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient() 

const app = new Elysia()
    .post( 
        '/sign-up', 
        async ({ body }) => db.user.create({ 
            data: body 
        }) 
    ) 
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

We have just created a simple endpoint to insert new user into our database using Elysia and Prisma.

TIP

**It's important** that when returning Prisma function, you should always marked a callback function as async.

As Prisma function doesn't return native Promise, Elysia can not dynamically handle the custom promise type, but with Static Code Analysis, by marking callback function as async, Elysia will try to await the return type of a function thus allowing us to map Prisma result.

Now the problem is that the body could be anything, not limited to our expected defined type.

We can improve that by using Elysia's type system.

ts

```
import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const app = new Elysia()
    .post(
        '/sign-up', 
        async ({ body }) => db.user.create({
            data: body
        }),
        { 
            body: t.Object({ 
                username: t.String(), 
                password: t.String({ 
                    minLength: 8
                }) 
            }) 
        } 
    )
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

This tells Elysia to validate the body of an incoming request to match the shape, and update TypeScript's type of the `body` inside the callback to match the exact same type:

ts

```
// 'body' is now typed as the following:
{
    username: string
    password: string
}
```

This means that if you the shape doesn't interlop with database table, it would warn you immediately.

Which is effective when you need to edit a table or perform a migration, Elysia can log the error immediately line by line because of a type conflict before reaching the production.

## Error Handling [​](with-prisma.html#error-handling)

Since our `username` field is unique, sometime Prisma can throw an error there could be an accidental duplication of `username` when trying to sign up like this:

ts

```
Invalid `prisma.user.create()` invocation:

Unique constraint failed on the fields: (`username`)
```

Default Elysia's error handler can handle the case automatically but we can improve that by specifying a custom error using Elysia's local `onError` hook:

ts

```
import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const app = new Elysia()
    .post(
        '/',
        async ({ body }) => db.user.create({
            data: body
        }),
        {
            error({ code }) {  
                switch (code) {  
                    // Prisma P2002: "Unique constraint failed on the {constraint}"
                    case 'P2002':  
                        return {  
                            error: 'Username must be unique'
                        }  
                }  
            },  
            body: t.Object({
                username: t.String(),
                password: t.String({
                    minLength: 8
                })
            })
        }
    )
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

Using `error` hook, any error thown inside a callback will be populate to `error` hook, allowing us to define a custom error handler.

According to [Prisma documentation](https://www.prisma.io/docs/reference/api-reference/error-reference#p2002), error code 'P2002' means that by performing the query, it will failed a unique constraint.

Since this table only a single `username` field that is unique, we can imply that the error is caused because username is not unique, so we return a custom erorr message of:

ts

```
{
    error: 'Username must be unique'
}
```

This will return a JSON equivalent of our custom error message when a unique constraints failed.

Allowing us to seemlessly define any custom error from Prisma error.

## Bonus: Reference Schema [​](with-prisma.html#bonus-reference-schema)

When our server grow complex and type becoming more redundant and become a boilerplate, inlining an Elysia type can be improved by using **Reference Schema**.

To put it simply, we can named our schema and reference the type by using the name.

ts

```
import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const app = new Elysia()
    .model({ 
        'user.sign': t.Object({ 
            username: t.String(), 
            password: t.String({ 
                minLength: 8
            }) 
        }) 
    }) 
    .post(
        '/',
        async ({ body }) => db.user.create({
            data: body
        }),
        {
            error({ code }) {
                switch (code) {
                    // Prisma P2002: "Unique constraint failed on the {constraint}"
                    case 'P2002':
                        return {
                            error: 'Username must be unique'
                        }
                }
            },
            body: 'user.sign', 
            body: t.Object({ 
                username: t.String(), 
                password: t.String({ 
                    minLength: 8
                }) 
            }) 
        }
    )
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

This works as same as using an inline but instead you defined it once and refers to the schema by name to remove redundant validation codes.

TypeScript and validation code will works as expected.

## Bonus: Documentation [​](with-prisma.html#bonus-documentation)

As a bonus, Elysia type system is also OpenAPI Schema 3.0 compliance, which means that it can generate documentation with tools that support OpenAPI Schema like Swagger.

We can use Elysia Swagger plugin to generate an API documentation in a single line.

bash

```
bun add @elysiajs/swagger
```

And then just add the plugin:

ts

```
import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'
import { swagger } from '@elysiajs/swagger'

const db = new PrismaClient()

const app = new Elysia()
    .use(swagger()) 
    .post(
        '/',
        async ({ body }) =>
            db.user.create({
                data: body,
                select: { 
                    id: true, 
                    username: true
                } 
            }),
        {
            error({ code }) {
                switch (code) {
                    // Prisma P2002: "Unique constraint failed on the {constraint}"
                    case 'P2002':
                        return {
                            error: 'Username must be unique'
                        }
                }
            },
            body: t.Object({
                username: t.String(),
                password: t.String({
                    minLength: 8
                })
            }),
            response: t.Object({ 
                id: t.Number(), 
                username: t.String() 
            }) 
        }
    )
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
```

And that's all it takes to create a well-defined documentation for our API.

![Swagger documentation generated by Elysia](with-prisma/swagger.webp)

And thanks to defining a strict type for the documentation, we found that we accidentally return `password` field from our API which is not a good idea to return a private information.

Thanks to Elysia's type system, we define that response shouldn't contains `password` which automatically warn us that our Prisma query are returning a password allows us to fix that a head of time.

And if anything more, we don't have to worry that we might forget a specification of OpenAPI Schema 3.0, as we have auto-completion and type safety too.

We can define our route detail with `detail` that also follows OpenAPI Schema 3.0, so we can properly create documentation effortlessly.

## What's next [​](with-prisma.html#what-s-next)

With the support of Prisma with Bun and Elysia, we are entering a new era of a new level of developer experience.

For Prisma we can accelerate our interaction with database, Elysia accelerate our creation of backend web server in term of both developer experience and performance.

> It's an absolute joy to work with.

Elysia is on a journey to create a new standard for a better developer experience with Bun for high performance TypeScript server that can match the performance of Go and Rust.

If you're looking for a place to start learning about out Bun, consider take a look for what Elysia can offer especially with an [end-to-end type safety](../eden/overview.html) like tRPC but built on REST standard without any code generation.

If you're interested in Elysia, feel free to check out our [Discord server](https://discord.gg/eaFJ2KDJck) or see [Elysia on GitHub](https://github.com/elysiajs/elysia)

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/blog.html ===
[Skip to content](blog.html#VPContent)

[![](assets/elysia.svg)ElysiaJS](index.html)

Search`K`

Main Navigation [Cheat Sheet](integrations/cheat-sheet.html)[Plugins](plugins/overview.html)[Blog](blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

# Latest Updates

Update of ElysiaJS from core maintainers

[**Elysia 1.2 - You and Me**  
\
Introducing Adapter for universal runtime suppport, Object macro with resolve, Parser with custom name, WebSocket with lifecycle, TypeBox 0.34 with recursive type, and Eden validation inference.](blog/elysia-12.html)

[**Elysia 1.1 - Grown-up's Paradise**  
\
Introducing OpenTelemetry, and Trace v2. Data coercion and normalization. Guard plugin and bulk cast. Optional path parameter. Decorator and Response status reconcilation. Generator response stream.](blog/elysia-11.html)

[**Elysia 1.0 - Lament of the Fallen**  
\
Introducing Sucrose, a better static code analysis engine, improved starts up time up to 14x, remove 40 routes/instance limitation, faster type inference up to ~3.8x, Eden Treaty 2, Hook type (breaking change), and inline error for strict type check.](blog/elysia-10.html)

[**Introducing Elysia 0.8 - Gate of Steiner**  
\
Introducing Macro API, a new way to interact with Elysia. New Lifecycle, resolve, and mapResponse to interact with Elysia even more. Static Content to compile static resource ahead of time. Default Property, Default Header and several improvement.](blog/elysia-08.html)

[**Introducing Elysia 0.7 - Stellar Stellar**  
\
Introducing up to 13x faster type inference. Declarative telemetry with trace. Reactive cookie model, and cookie validation. TypeBox 0.31 and custom decoder support. Rewritten Web Socket. Definitions remapping and custom affix. Leading more solid foundation for Elysia for a brighter future.](blog/elysia-07.html)

[**Introducing Elysia 0.6 - This Game**  
\
Introducing re-imagined plugin model, dynamic mode, better developer experience with declarative custom error, customizable loose and strict path mapping, TypeBox 0.30 and WinterCG framework interlop. Pushing the boundary of what is possible once again](blog/elysia-06.html)

[**Accelerate your next Prisma server with Elysia**  
\
With the support of Prisma with Bun and Elysia, we are entering a new era of a new level of developer experience. For Prisma we can accelerate our interaction with database, Elysia accelerate our creation of backend web server in term of both developer experience and performance.](blog/with-prisma.html)

[**Introducing Elysia 0.5 - Radiant**  
\
Introducing Static Code Analysis, New router Memoirist, TypeBox 0.28, Numeric type, inline schema, state/decorate/model/group rework, and type stability.](blog/elysia-05.html)

[**Introducing Elysia 0.4 - 月夜の音楽会 (Moonlit Night Concert)**  
\
Introducing Ahead of Time Compilation, TypeBox 0.26, Response validation per status, and Separation of Elysia Fn.](blog/elysia-04.html)

[**Elysia with Supabase. Your next backend at sonic speed**  
\
Elysia, and Supabase are a great match for rapidly developing prototype in less than a hour, let's take a look of how we can take advantage of both.](blog/elysia-supabase.html)

[**Introducing Elysia 0.3 - 大地の閾を探して \[Looking for Edge of Ground\]**  
\
Introducing Elysia Fn, Type Rework for highly scalable TypeScript performance, File Upload support and validation, Reworked Eden Treaty.](blog/elysia-03.html)

[**Integrate existing tRPC server to Bun with Elysia**  
\
Learn how to integrate existing tRPC to Elysia and Bun with Elysia tRPC plugin and more about Eden end-to-end type-safety for Elysia.](blog/integrate-trpc-with-elysia.html)

[**Introducing Elysia 0.2 - The Blessing**  
\
Introducing Elysia 0.2, bringing more improvement, mainly on TypeScript performance, type-inference, and better auto-completion and some new features to reduce boilerplate.](blog/elysia-02.html)


=== bun-elysia-docs/elysiajs.com/cdn-cgi/l/email-protection.html ===
Please enable cookies.

# Email Protection

## You are unable to access this email address elysiajs.com

The website from which you got to this page is protected by Cloudflare. Email addresses on that page have been hidden in order to keep them from being accessed by malicious bots. **You must enable Javascript in your browser in order to decode the e-mail address**.

If you have a website and are interested in protecting it in a similar way, you can [sign up for Cloudflare](https://www.cloudflare.com/sign-up?utm_source=email_protection).

- [How does Cloudflare protect email addresses on website from spammers?](https://support.cloudflare.com/hc/en-us/articles/200170016-What-is-Email-Address-Obfuscation-)
- [Can I sign up for Cloudflare?](https://support.cloudflare.com/hc/en-us/categories/200275218-Getting-Started)

Cloudflare Ray ID: **90883642bf49c472** • Your IP: Click to reveal 38.62.224.84 • Performance &amp; security by [Cloudflare](https://www.cloudflare.com/5xx-error-landing)


=== bun-elysia-docs/elysiajs.com/eden/fetch.html ===
[Skip to content](fetch.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](overview.html)

[Installation](installation.html)

### Eden Treaty

[Overview](treaty/overview.html)

[Parameters](treaty/parameters.html)

[Response](treaty/response.html)

[Web Socket](treaty/websocket.html)

[Config](treaty/config.html)

[Unit Test](treaty/unit-test.html)

[Legacy (Treaty 1)](treaty/legacy.html)

[Eden Fetch](fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Eden Fetch [​](fetch.html#eden-fetch)

A fetch-like alternative to Eden Treaty .

With Eden Fetch can interact with Elysia server in a type-safe manner using Fetch API.

* * *

First export your existing Elysia server type:

typescript

```
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/hi', () => 'Hi Elysia')
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            id: t.Number(),
            name: t.String()
        })
    })
    .listen(3000)

export type App = typeof app
```

Then import the server type, and consume the Elysia API on client:

typescript

```
import { edenFetch } from '@elysiajs/eden'
import type { App } from './server'

const fetch = edenFetch<App>('http://localhost:3000')

// response type: 'Hi Elysia'
const pong = await fetch('/hi', {})

// response type: 1895
const id = await fetch('/id/:id', {
    params: {
        id: '1895'
    }
})

// response type: { id: 1895, name: 'Skadi' }
const nendoroid = await fetch('/mirror', {
    method: 'POST',
    body: {
        id: 1895,
        name: 'Skadi'
    }
})
```

## Error Handling [​](fetch.html#error-handling)

You can handle errors the same way as Eden Treaty:

typescript

```
import { edenFetch } from '@elysiajs/eden'
import type { App } from './server'

const fetch = edenFetch<App>('http://localhost:3000')

// response type: { id: 1895, name: 'Skadi' }
const { data: nendoroid, error } = await fetch('/mirror', {
    method: 'POST',
    body: {
        id: 1895,
        name: 'Skadi'
    }
})

if(error) {
    switch(error.status) {
        case 400:
        case 401:
            throw error.value
            break

        case 500:
        case 502:
            throw error.value
            break

        default:
            throw error.value
            break
    }
}

const { id, name } = nendoroid
```

## When should I use Eden Fetch over Eden Treaty [​](fetch.html#when-should-i-use-eden-fetch-over-eden-treaty)

Unlike Elysia &lt; 1.0, Eden Fetch is not faster than Eden Treaty anymore.

The preference is base on you and your team agreement, however we recommend to use [Eden Treaty](treaty/overview.html) instead.

For Elysia &lt; 1.0:

Using Eden Treaty requires a lot of down-level iteration to map all possible types in a single go, while in contrast, Eden Fetch can be lazily executed until you pick a route.

With complex types and a lot of server routes, using Eden Treaty on a low-end development device can lead to slow type inference and auto-completion.

But as Elysia has tweaked and optimized a lot of types and inference, Eden Treaty can perform very well in the considerable amount of routes.

If your single process contains **more than 500 routes**, and you need to consume all of the routes **in a single frontend codebase**, then you might want to use Eden Fetch as it has a significantly better TypeScript performance than Eden Treaty.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/fetch.md)

Last updated:

Pager

[Previous pageLegacy (Treaty 1)](treaty/legacy.html)

[Next pageOverview](../plugins/overview.html)


=== bun-elysia-docs/elysiajs.com/eden/installation.html ===
[Skip to content](installation.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](overview.html)

[Installation](installation.html)

### Eden Treaty

[Overview](treaty/overview.html)

[Parameters](treaty/parameters.html)

[Response](treaty/response.html)

[Web Socket](treaty/websocket.html)

[Config](treaty/config.html)

[Unit Test](treaty/unit-test.html)

[Legacy (Treaty 1)](treaty/legacy.html)

[Eden Fetch](fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Eden Installation [​](installation.html#eden-installation)

Start by installing Eden on your frontend:

bash

```
bun add @elysiajs/eden
bun add -d elysia

# If you use Bun specific feature, eg. `Bun.file`
bun add -d @types/bun
```

TIP

Eden needs Elysia to infer utilities type.

Make sure to install Elysia with the version matching on the server.

First, export your existing Elysia server type:

typescript

```
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hi Elysia')
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            id: t.Number(),
            name: t.String()
        })
    })
    .listen(3000)

export type App = typeof app 
```

Then consume the Elysia API on client side:

typescript

```
// client.ts

import { 

treaty






 } from '@elysiajs/eden'

import type { 

App






 } from './server'


const 

client






 = 

treaty






<

App






>('localhost:3000') 

// response: Hi Elysia

const { 

data






: 

index






 } = await 

client






.

index






.

get






()

// response: 1895

const { 

data






: 

id






 } = await 

client






.

id






({ 

id






: 1895 }).

get






()

// response: { id: 1895, name: 'Skadi' }

const { 

data






: 

nendoroid






 } = await 

client






.

mirror






.

post






({

    

id






: 1895,

    

name






: 'Skadi'
})




client








.








```

## Gotcha [​](installation.html#gotcha)

Sometimes Eden may not infer type from Elysia correctly, the following are the most common workaround to fix Eden type inference.

### Type Strict [​](installation.html#type-strict)

Make sure to enable strict mode in **tsconfig.json**

json

```
{
  "compilerOptions": {
    "strict": true
  }
}
```

### Unmatch Elysia version [​](installation.html#unmatch-elysia-version)

Eden depends Elysia class to import Elysia instance and infers type correctly.

Make sure that both client and server have a matching Elysia version.

You can check it with [`npm why`](https://docs.npmjs.com/cli/v10/commands/npm-explain) command:

bash

```
npm why elysia
```

And output should contain only one elysia version on top-level:

```
[email protected]
node_modules/elysia
  elysia@"1.1.25" from the root project
  peer elysia@">= 1.1.0" from @elysiajs/[email protected]
  node_modules/@elysiajs/html
    dev @elysiajs/html@"1.1.1" from the root project
  peer elysia@">= 1.1.0" from @elysiajs/[email protected]
  node_modules/@elysiajs/opentelemetry
    dev @elysiajs/opentelemetry@"1.1.7" from the root project
  peer elysia@">= 1.1.0" from @elysiajs/[email protected]
  node_modules/@elysiajs/swagger
    dev @elysiajs/swagger@"1.1.6" from the root project
  peer elysia@">= 1.1.0" from @elysiajs/[email protected]
  node_modules/@elysiajs/eden
    dev @elysiajs/eden@"1.1.3" from the root project
```

### TypeScript version [​](installation.html#typescript-version)

Elysia uses newer features and syntax of TypeScript to infer types in a the most performant way. Features like Const Generic and Template Literal are heavily used.

Make sure your client has a **minimum TypeScript version if &gt;= 5.0**

### Method Chaining [​](installation.html#method-chaining)

To make Eden works, Elysia must be using **method chaining**

Elysia's type system is complex, methods usually introduce a new type to the instance.

Using method chaining will help save that new type reference.

For example:

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

state






('build', 1)
    // Store is strictly typed

    .

get






('/', ({ 

store






: { 

build






 } }) => 

build






)

    .

listen






(3000)
```

Using this, **state** now returns a new **ElysiaInstance** type, introducing **build** into store and replace the current one.

Without using method chaining, Elysia doesn't save the new type when introduced, leading to no type inference.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()




app






.

state






('build', 1)




app






.

get






('/', ({ 

store






: { build } }) => 

build






)
Property 'build' does not exist on type '{}'.



app






.

listen






(3000)
```

### Type Definitions [​](installation.html#type-definitions)

Sometimes, if you are using a Bun specific feature like `Bun.file` or similar API, you may need to install Bun type definitions to the client as well.

bash

```
bun add -d @types/bun
```

### Path alias (monorepo) [​](installation.html#path-alias-monorepo)

If you are using path alias in your monorepo, make sure that frontend are able to resolve the path as same as backend.

For example, if you have the following path alias for your backend in **tsconfig.json**:

json

```
{
  "compilerOptions": {
  	"baseUrl": ".",
	"paths": {
	  "@/*": ["./src/*"]
	}
  }
}
```

And your backend code is like this:

typescript

```
import { Elysia } from 'elysia'
import { a, b } from '@/controllers'

const app = new Elysia()
	.use(a)
	.use(b)
	.listen(3000)

export type app = typeof app
```

You **must** make sure that your frontend code is able to resolve the same path alias otherwise type inference will be resolved as any.

typescript

```
import { treaty } from '@elysiajs/eden'
import type { app } from '@/index'

const client = treaty<app>('localhost:3000')

// This should be able to resolve the same module both frontend and backend, and not `any`
import { a, b } from '@/controllers'
```

To fix this, you must make sure that path alias is resolved to the same file in both frontend and backend.

So you must change the path alias in **tsconfig.json** to:

json

```
{
  "compilerOptions": {
  	"baseUrl": ".",
	"paths": {
	  "@/*": ["../apps/backend/src/*"]
	}
  }
}
```

If configured correctly, you should be able to resolve the same module in both frontend and backend.

typescript

```
// This should be able to resolve the same module both frontend and backend, and not `any`
import { a, b } from '@/controllers'
```

#### Scope [​](installation.html#scope)

We recommended to add a **scope** prefix for each modules in your monorepo to avoid any confusion and conflict that may happen.

json

```
{
  "compilerOptions": {
  	"baseUrl": ".",
	"paths": {
	  "@frontend/*": ["./apps/frontend/src/*"],
	  "@backend/*": ["./apps/backend/src/*"]
	}
  }
}
```

Then you can import the module like this:

typescript

```
// Should work in both frontend and backend and not return `any`
import { a, b } from '@backend/controllers'
```

We recommended creating a **single tsconfig.json** that define a `baseUrl` as the root of your repo, provide a path according to the module location, and create a **tsconfig.json** for each module that inherits the root **tsconfig.json** which has the path alias.

You may find a working example of in this [path alias example repo](https://github.com/SaltyAom/elysia-monorepo-path-alias).

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/installation.md)

Last updated:

Pager

[Previous pageOverview](overview.html)

[Next pageOverview](treaty/overview.html)


=== bun-elysia-docs/elysiajs.com/eden/overview.html ===
[Skip to content](overview.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](overview.html)

[Installation](installation.html)

### Eden Treaty

[Overview](treaty/overview.html)

[Parameters](treaty/parameters.html)

[Response](treaty/response.html)

[Web Socket](treaty/websocket.html)

[Config](treaty/config.html)

[Unit Test](treaty/unit-test.html)

[Legacy (Treaty 1)](treaty/legacy.html)

[Eden Fetch](fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# End-to-End Type Safety [​](overview.html#end-to-end-type-safety)

Imagine you have a toy train set.

Each piece of the train track has to fit perfectly with the next one, like puzzle pieces.

End-to-end type safety is like making sure all the pieces of the track match up correctly so the train doesn't fall off or get stuck.

For a framework to have end-to-end type safety means you can connect client and server in a type-safe manner.

Elysia provide end-to-end type safety **without code generation** out of the box with RPC-like connector, **Eden**

Something went wrong trying to load video

Others framework that support e2e type safety:

- tRPC
- Remix
- SvelteKit
- Nuxt
- TS-Rest

Elysia allows you to change the type on the server and it will be instantly reflected on the client, helping with auto-completion and type-enforcement.

## Eden [​](overview.html#eden)

Eden is a RPC-like client to connect Elysia **end-to-end type safety** using only TypeScript's type inference instead of code generation.

Allowing you to sync client and server types effortlessly, weighing less than 2KB.

Eden is consists of 2 modules:

1. Eden Treaty **(recommended)**: an improved version RFC version of Eden Treaty
2. Eden Fetch: Fetch-like client with type safety.

Below is an overview, use-case and comparison for each module.

## Eden Treaty (Recommended) [​](overview.html#eden-treaty-recommended)

Eden Treaty is an object-like representation of an Elysia server providing end-to-end type safety and a significantly improved developer experience.

With Eden Treaty we can connect interact Elysia server with full-type support and auto-completion, error handling with type narrowing, and creating type safe unit test.

Example usage of Eden Treaty:

typescript

```

import { 

treaty






 } from '@elysiajs/eden'

import type { 

App






 } from './server'


const 

app






 = 

treaty






<

App






>('localhost:3000')




app








.












// Call [GET] at '/'

const { data } = await 

app






.

index






.

get






()

// Call [POST] at '/nendoroid/:id'

const { 

data






: 

nendoroid






, 

error






 } = await 

app






.

nendoroid






({ 

id






: 1895 }).

put






({

    

name






: 'Skadi',

    

from






: 'Arknights'
})
```

## Eden Fetch [​](overview.html#eden-fetch)

A fetch-like alternative to Eden Treaty for developers that prefers fetch syntax.

typescript

```
import { edenFetch } from '@elysiajs/eden'
import type { App } from './server'

const fetch = edenFetch<App>('http://localhost:3000')

const { data } = await fetch('/name/:name', {
    method: 'POST',
    params: {
        name: 'Saori'
    },
    body: {
        branch: 'Arius',
        type: 'Striker'
    }
})
```

NOTE

Unlike Eden Treaty, Eden Fetch doesn't provide Web Socket implementation for Elysia server

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/overview.md)

Last updated:

Pager

[Previous pageBetter Auth](../recipe/better-auth.html)

[Next pageInstallation](installation.html)


=== bun-elysia-docs/elysiajs.com/eden/treaty/config.html ===
[Skip to content](config.html#VPContent)

[![](../../assets/elysia.svg)ElysiaJS](../../index.html)

Search`K`

Main Navigation [Cheat Sheet](../../integrations/cheat-sheet.html)[Plugins](../../plugins/overview.html)[Blog](../../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../../at-glance.html)

[Quick Start](../../quick-start.html)

[Tutorial](../../tutorial.html)

[Key Concept](../../key-concept.html)

[Table of Content](../../table-of-content.html)

## Essential

[Route](../../essential/route.html)

[Handler](../../essential/handler.html)

[Life Cycle](../../essential/life-cycle.html)

[Validation](../../essential/validation.html)

[Plugin](../../essential/plugin.html)

[Best Practice](../../essential/best-practice.html)

## Patterns

[Macro](../../patterns/macro.html)

[Configuration](../../patterns/configuration.html)

[Cookie](../../patterns/cookie.html)

[Web Socket](../../patterns/websocket.html)

[Unit Test](../../patterns/unit-test.html)

[Mount](../../patterns/mount.html)

[Trace](../../patterns/trace.html)

## Recipe

[OpenAPI](../../recipe/openapi.html)

[Opentelemetry](../../recipe/opentelemetry.html)

[Drizzle](../../recipe/drizzle.html)

[React Email](../../recipe/react-email.html)

[Better Auth](../../recipe/better-auth.html)

## Eden

[Overview](../overview.html)

[Installation](../installation.html)

### Eden Treaty

[Overview](overview.html)

[Parameters](parameters.html)

[Response](response.html)

[Web Socket](websocket.html)

[Config](config.html)

[Unit Test](unit-test.html)

[Legacy (Treaty 1)](legacy.html)

[Eden Fetch](../fetch.html)

## Plugins

[Overview](../../plugins/overview.html)

[Bearer](../../plugins/bearer.html)

[CORS](../../plugins/cors.html)

[Cron](../../plugins/cron.html)

[GraphQL Apollo](../../plugins/graphql-apollo.html)

[GraphQL Yoga](../../plugins/graphql-yoga.html)

[HTML](../../plugins/html.html)

[JWT](../../plugins/jwt.html)

[OpenTelemetry](../../plugins/opentelemetry.html)

[Server Timing](../../plugins/server-timing.html)

[Static](../../plugins/static.html)

[Stream](../../plugins/stream.html)

[Swagger](../../plugins/swagger.html)

[trpc](../../plugins/trpc.html)

## Integration

[Nextjs](../../integrations/nextjs.html)

[Expo](../../integrations/expo.html)

[Astro](../../integrations/astro.html)

[SvelteKit](../../integrations/sveltekit.html)

Outline

# Config [​](config.html#config)

Eden Treaty accepts 2 parameters:

- **urlOrInstance** - URL endpoint or Elysia instance
- **options** (optional) - Customize fetch behavior

## urlOrInstance [​](config.html#urlorinstance)

Accept either URL endpoint as string or a literal Elysia instance.

Eden will change the behavior based on type as follows:

### URL Endpoint (string) [​](config.html#url-endpoint-string)

If URL endpoint is passed, Eden Treaty will use `fetch` or `config.fetcher` to create a network request to an Elysia instance.

typescript

```
import { treaty } from '@elysiajs/eden'
import type { App } from './server'

const api = treaty<App>('localhost:3000')
```

You may or may not specified a protocol for URL endpoint.

Elysia will appends the endpoints automatically as follows:

1. If protocol is specified, use the URL directly
2. If the URL is localhost and ENV is not production, use http
3. Otherwise use https

This also apply to Web Socket as well for determining between **ws://** or **wss://**.

* * *

### Elysia Instance [​](config.html#elysia-instance)

If Elysia instance is passed, Eden Treaty will create a `Request` class and pass to `Elysia.handle` directly without creating a network request.

This allows us to interact with Elysia server directly without request overhead, or the need start a server.

typescript

```
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
    .get('/hi', 'Hi Elysia')
    .listen(3000)

const api = treaty(app)
```

If an instance is passed, generic is not needed to be pass as Eden Treaty can infers the type from a parameter directly.

This patterns is recommended for performing unit tests, or creating a type-safe reverse proxy server or micro-services.

## Options [​](config.html#options)

2nd optional parameters for Eden Treaty to customize fetch behavior, accepting parameters as follows:

- [fetch](config.html#fetch) - add default parameters to fetch intialization (RequestInit)
- [headers](config.html#headers) - define default headers
- [fetcher](config.html#fetcher) - custom fetch function eg. Axios, unfetch
- [onRequest](config.html#onrequest) - Intercept and modify fetch request before firing
- [onResponse](config.html#onresponse) - Intercept and modify fetch's response

## Fetch [​](config.html#fetch)

Default parameters append to 2nd parameters of fetch extends type of **Fetch.RequestInit**.

typescript

```
export type App = typeof app 
import { treaty } from '@elysiajs/eden'
// ---cut---
treaty<App>('localhost:3000', {
    fetch: {
        credentials: 'include'
    }
})
```

All parameters that passed to fetch, will be passed to fetcher, which is an equivalent to:

typescript

```
fetch('http://localhost:3000', {
    credentials: 'include'
})
```

## Headers [​](config.html#headers)

Provide an additional default headers to fetch, a shorthand of `options.fetch.headers`.

typescript

```
treaty<App>('localhost:3000', {
    headers: {
        'X-Custom': 'Griseo'
    }
})
```

All parameters that passed to fetch, will be passed to fetcher, which is an equivalent to:

typescript

```



fetch






('localhost:3000', {

    

headers






: {
        'X-Custom': 'Griseo'
    }
})
```

headers may accepts the following as parameters:

- Object
- Function

### Headers Object [​](config.html#headers-object)

If object is passed, then it will be passed to fetch directly

typescript

```
treaty<App>('localhost:3000', {
    headers: {
        'X-Custom': 'Griseo'
    }
})
```

### Function [​](config.html#function)

You may specify a headers as a function to return custom headers based on condition

typescript

```
treaty<App>('localhost:3000', {
    headers(path, options) {
        if(path.startsWith('user'))
            return {
                authorization: 'Bearer 12345'
            }
    }
})
```

You may return object to append its value to fetch headers.

headers function accepts 2 parameters:

- path `string` - path which will be sent to parameter
  
  - note: hostname will be **exclude** eg. (/user/griseo)
- options `RequestInit`: Parameters that passed through 2nd parameter of fetch

### Array [​](config.html#array)

You may define a headers function as an array if multiple conditions are need.

typescript

```
treaty<App>('localhost:3000', {
    headers: [
      (path, options) => {
        if(path.startsWith('user'))
            return {
                authorization: 'Bearer 12345'
            }
        }
    ]
})
```

Eden Treaty will **run all functions** even if the value is already returned.

## Headers Priority [​](config.html#headers-priority)

Eden Treaty will prioritize the order headers if duplicated as follows:

1. Inline method - Passed in method function directly
2. headers - Passed in `config.headers`

<!--THE END-->

- If `config.headers` is array, parameters that come after will be prioritize

<!--THE END-->

3. fetch - Passed in `config.fetch.headers`

For example, for the following example:

typescript

```
const api = treaty<App>('localhost:3000', {
    headers: {
        authorization: 'Bearer Aponia'
    }
})

api.profile.get({
    headers: {
        authorization: 'Bearer Griseo'
    }
})
```

This will be results in:

typescript

```
fetch('http://localhost:3000', {
    headers: {
        authorization: 'Bearer Griseo'
    }
})
```

If inline function doesn't specified headers, then the result will be "**Bearer Aponia**" instead.

## Fetcher [​](config.html#fetcher)

Provide a custom fetcher function instead of using an environment's default fetch.

typescript

```
treaty<App>('localhost:3000', {
    fetcher(url, options) {
        return fetch(url, options)
    }
})
```

It's recommended to replace fetch if you want to use other client other than fetch, eg. Axios, unfetch.

## OnRequest [​](config.html#onrequest)

Intercept and modify fetch request before firing.

You may return object to append the value to **RequestInit**.

typescript

```
treaty<App>('localhost:3000', {
    onRequest(path, options) {
        if(path.startsWith('user'))
            return {
                headers: {
                    authorization: 'Bearer 12345'
                }
            }
    }
})
```

If value is returned, Eden Treaty will perform a **shallow merge** for returned value and `value.headers`.

**onRequest** accepts 2 parameters:

- path `string` - path which will be sent to parameter
  
  - note: hostname will be **exclude** eg. (/user/griseo)
- options `RequestInit`: Parameters that passed through 2nd parameter of fetch

### Array [​](config.html#array-1)

You may define an onRequest function as an array if multiples conditions are need.

typescript

```
treaty<App>('localhost:3000', {
    onRequest: [
      (path, options) => {
        if(path.startsWith('user'))
            return {
                headers: {
                    authorization: 'Bearer 12345'
                }
            }
        }
    ]
})
```

Eden Treaty will **run all functions** even if the value is already returned.

## onResponse [​](config.html#onresponse)

Intercept and modify fetch's response or return a new value.

typescript

```
treaty<App>('localhost:3000', {
    onResponse(response) {
        if(response.ok)
            return response.json()
    }
})
```

**onRequest** accepts 1 parameter:

- response `Response` - Web Standard Response normally returned from `fetch`

### Array [​](config.html#array-2)

You may define an onResponse function as an array if multiple conditions are need.

typescript

```
treaty<App>('localhost:3000', {
    onResponse: [
        (response) => {
            if(response.ok)
                return response.json()
        }
    ]
})
```

Unlike [headers](config.html#headers) and [onRequest](config.html#onrequest), Eden Treaty will loop through functions until a returned value is found or error thrown, the returned value will be use as a new response.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/treaty/config.md)

Last updated:

Pager

[Previous pageWeb Socket](websocket.html)

[Next pageUnit Test](unit-test.html)


=== bun-elysia-docs/elysiajs.com/eden/treaty/legacy.html ===
[Skip to content](legacy.html#VPContent)

[![](../../assets/elysia.svg)ElysiaJS](../../index.html)

Search`K`

Main Navigation [Cheat Sheet](../../integrations/cheat-sheet.html)[Plugins](../../plugins/overview.html)[Blog](../../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../../at-glance.html)

[Quick Start](../../quick-start.html)

[Tutorial](../../tutorial.html)

[Key Concept](../../key-concept.html)

[Table of Content](../../table-of-content.html)

## Essential

[Route](../../essential/route.html)

[Handler](../../essential/handler.html)

[Life Cycle](../../essential/life-cycle.html)

[Validation](../../essential/validation.html)

[Plugin](../../essential/plugin.html)

[Best Practice](../../essential/best-practice.html)

## Patterns

[Macro](../../patterns/macro.html)

[Configuration](../../patterns/configuration.html)

[Cookie](../../patterns/cookie.html)

[Web Socket](../../patterns/websocket.html)

[Unit Test](../../patterns/unit-test.html)

[Mount](../../patterns/mount.html)

[Trace](../../patterns/trace.html)

## Recipe

[OpenAPI](../../recipe/openapi.html)

[Opentelemetry](../../recipe/opentelemetry.html)

[Drizzle](../../recipe/drizzle.html)

[React Email](../../recipe/react-email.html)

[Better Auth](../../recipe/better-auth.html)

## Eden

[Overview](../overview.html)

[Installation](../installation.html)

### Eden Treaty

[Overview](overview.html)

[Parameters](parameters.html)

[Response](response.html)

[Web Socket](websocket.html)

[Config](config.html)

[Unit Test](unit-test.html)

[Legacy (Treaty 1)](legacy.html)

[Eden Fetch](../fetch.html)

## Plugins

[Overview](../../plugins/overview.html)

[Bearer](../../plugins/bearer.html)

[CORS](../../plugins/cors.html)

[Cron](../../plugins/cron.html)

[GraphQL Apollo](../../plugins/graphql-apollo.html)

[GraphQL Yoga](../../plugins/graphql-yoga.html)

[HTML](../../plugins/html.html)

[JWT](../../plugins/jwt.html)

[OpenTelemetry](../../plugins/opentelemetry.html)

[Server Timing](../../plugins/server-timing.html)

[Static](../../plugins/static.html)

[Stream](../../plugins/stream.html)

[Swagger](../../plugins/swagger.html)

[trpc](../../plugins/trpc.html)

## Integration

[Nextjs](../../integrations/nextjs.html)

[Expo](../../integrations/expo.html)

[Astro](../../integrations/astro.html)

[SvelteKit](../../integrations/sveltekit.html)

Outline

# Eden Treaty Legacy [​](legacy.html#eden-treaty-legacy)

NOTE

This is a documentation for Eden Treaty 1 or (edenTreaty)

For a new project, we recommended starting with Eden Treaty 2 (treaty) instead.

Eden Treaty is an object-like representation of an Elysia server.

Providing accessor like a normal object with type directly from the server, helping us to move faster, and make sure that nothing break

* * *

To use Eden Treaty, first export your existing Elysia server type:

typescript

```
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hi Elysia')
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            id: t.Number(),
            name: t.String()
        })
    })
    .listen(3000)

export type App = typeof app 
```

Then import the server type, and consume the Elysia API on client:

typescript

```
// client.ts
import { edenTreaty } from '@elysiajs/eden'
import type { App } from './server'

const app = edenTreaty<App>('http://localhost:')

// response type: 'Hi Elysia'
const { data: pong, error } = app.get()

// response type: 1895
const { data: id, error } = app.id['1895'].get()

// response type: { id: 1895, name: 'Skadi' }
const { data: nendoroid, error } = app.mirror.post({
    id: 1895,
    name: 'Skadi'
})
```

TIP

Eden Treaty is fully type-safe with auto-completion support.

## Anatomy [​](legacy.html#anatomy)

Eden Treaty will transform all existing paths to object-like representation, that can be described as:

typescript

```
EdenTreaty.<1>.<2>.<n>.<method>({
    ...body,
    $query?: {},
    $fetch?: RequestInit
})
```

### Path [​](legacy.html#path)

Eden will transform `/` into `.` which can be called with a registered `method`, for example:

- **/path** -&gt; .path
- **/nested/path** -&gt; .nested.path

### Path parameters [​](legacy.html#path-parameters)

Path parameters will be mapped automatically by their name in the URL.

- **/id/:id** -&gt; .id.`<anyThing>`
- eg: .id.hi
- eg: .id\['123']

TIP

If a path doesn't support path parameters, TypeScript will show an error.

### Query [​](legacy.html#query)

You can append queries to path with `$query`:

typescript

```
app.get({
    $query: {
        name: 'Eden',
        code: 'Gold'
    }
})
```

### Fetch [​](legacy.html#fetch)

Eden Treaty is a fetch wrapper, you can add any valid [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) parameters to Eden by passing it to `$fetch`:

typescript

```
app.post({
    $fetch: {
        headers: {
            'x-organization': 'MANTIS'
        }
    }
})
```

## Error Handling [​](legacy.html#error-handling)

Eden Treaty will return a value of `data` and `error` as a result, both fully typed.

typescript

```
// response type: { id: 1895, name: 'Skadi' }
const { data: nendoroid, error } = app.mirror.post({
    id: 1895,
    name: 'Skadi'
})

if(error) {
    switch(error.status) {
        case 400:
        case 401:
            warnUser(error.value)
            break

        case 500:
        case 502:
            emergencyCallDev(error.value)
            break

        default:
            reportError(error.value)
            break
    }

    throw error
}

const { id, name } = nendoroid
```

Both **data**, and **error** will be typed as nullable until you can confirm their statuses with a type guard.

To put it simply, if fetch is successful, data will have a value and error will be null, and vice-versa.

TIP

Error is wrapped with an `Error` with its value return from the server can be retrieve from `Error.value`

### Error type based on status [​](legacy.html#error-type-based-on-status)

Both Eden Treaty and Eden Fetch can narrow down an error type based on status code if you explicitly provided an error type in the Elysia server.

typescript

```
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .model({
        nendoroid: t.Object({
            id: t.Number(),
            name: t.String()
        }),
        error: t.Object({
            message: t.String()
        })
    })
    .get('/', () => 'Hi Elysia')
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/mirror', ({ body }) => body, {
        body: 'nendoroid',
        response: {
            200: 'nendoroid', 
            400: 'error', 
            401: 'error'
        }
    })
    .listen(3000)

export type App = typeof app
```

An on the client side:

typescript

```
const { data: nendoroid, error } = app.mirror.post({
    id: 1895,
    name: 'Skadi'
})

if(error) {
    switch(error.status) {
        case 400:
        case 401:
            // narrow down to type 'error' described in the server
            warnUser(error.value)
            break

        default:
            // typed as unknown
            reportError(error.value)
            break
    }

    throw error
}
```

## WebSocket [​](legacy.html#websocket)

Eden supports WebSocket using the same API as a normal route.

typescript

```
// Server
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .ws('/chat', {
        message(ws, message) {
            ws.send(message)
        },
        body: t.String(),
        response: t.String()
    })
    .listen(3000)

type App = typeof app
```

To start listening to real-time data, call the `.subscribe` method:

typescript

```
// Client
import { edenTreaty } from '@elysiajs/eden'
const app = edenTreaty<App>('http://localhost:')

const chat = app.chat.subscribe()

chat.subscribe((message) => {
    console.log('got', message)
})

chat.send('hello from client')
```

We can use [schema](../../integrations/cheat-sheet.html#schema) to enforce type-safety on WebSockets, just like a normal route.

* * *

**Eden.subscribe** returns **EdenWebSocket** which extends the [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) class with type-safety. The syntax is identical with the WebSocket

If more control is need, **EdenWebSocket.raw** can be accessed to interact with the native WebSocket API.

## File Upload [​](legacy.html#file-upload)

You may either pass one of the following to the field to attach file:

- **File**
- **FileList**
- **Blob**

Attaching a file will results **content-type** to be **multipart/form-data**

Suppose we have the server as the following:

typescript

```
// server.ts
import { Elysia } from 'elysia'

const app = new Elysia()
    .post('/image', ({ body: { image, title } }) => title, {
        body: t.Object({
            title: t.String(),
            image: t.Files(),
        })
    })
    .listen(3000)

export type App = typeof app
```

We may use the client as follows:

typescript

```
// client.ts
import { edenTreaty } from '@elysia/eden'
import type { Server } from './server'

export const client = edenTreaty<Server>('http://localhost:3000')

const id = <T extends HTMLElement = HTMLElement>(id: string) =>
    document.getElementById(id)! as T

const { data } = await client.image.post({
    title: "Misono Mika",
    image: id<HTMLInputElement>('picture').files!,
})
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/treaty/legacy.md)

Last updated:

Pager

[Previous pageUnit Test](unit-test.html)

[Next pageEden Fetch](../fetch.html)


=== bun-elysia-docs/elysiajs.com/eden/treaty/overview.html ===
[Skip to content](overview.html#VPContent)

[![](../../assets/elysia.svg)ElysiaJS](../../index.html)

Search`K`

Main Navigation [Cheat Sheet](../../integrations/cheat-sheet.html)[Plugins](../../plugins/overview.html)[Blog](../../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../../at-glance.html)

[Quick Start](../../quick-start.html)

[Tutorial](../../tutorial.html)

[Key Concept](../../key-concept.html)

[Table of Content](../../table-of-content.html)

## Essential

[Route](../../essential/route.html)

[Handler](../../essential/handler.html)

[Life Cycle](../../essential/life-cycle.html)

[Validation](../../essential/validation.html)

[Plugin](../../essential/plugin.html)

[Best Practice](../../essential/best-practice.html)

## Patterns

[Macro](../../patterns/macro.html)

[Configuration](../../patterns/configuration.html)

[Cookie](../../patterns/cookie.html)

[Web Socket](../../patterns/websocket.html)

[Unit Test](../../patterns/unit-test.html)

[Mount](../../patterns/mount.html)

[Trace](../../patterns/trace.html)

## Recipe

[OpenAPI](../../recipe/openapi.html)

[Opentelemetry](../../recipe/opentelemetry.html)

[Drizzle](../../recipe/drizzle.html)

[React Email](../../recipe/react-email.html)

[Better Auth](../../recipe/better-auth.html)

## Eden

[Overview](../overview.html)

[Installation](../installation.html)

### Eden Treaty

[Overview](overview.html)

[Parameters](parameters.html)

[Response](response.html)

[Web Socket](websocket.html)

[Config](config.html)

[Unit Test](unit-test.html)

[Legacy (Treaty 1)](legacy.html)

[Eden Fetch](../fetch.html)

## Plugins

[Overview](../../plugins/overview.html)

[Bearer](../../plugins/bearer.html)

[CORS](../../plugins/cors.html)

[Cron](../../plugins/cron.html)

[GraphQL Apollo](../../plugins/graphql-apollo.html)

[GraphQL Yoga](../../plugins/graphql-yoga.html)

[HTML](../../plugins/html.html)

[JWT](../../plugins/jwt.html)

[OpenTelemetry](../../plugins/opentelemetry.html)

[Server Timing](../../plugins/server-timing.html)

[Static](../../plugins/static.html)

[Stream](../../plugins/stream.html)

[Swagger](../../plugins/swagger.html)

[trpc](../../plugins/trpc.html)

## Integration

[Nextjs](../../integrations/nextjs.html)

[Expo](../../integrations/expo.html)

[Astro](../../integrations/astro.html)

[SvelteKit](../../integrations/sveltekit.html)

Outline

# Eden Treaty [​](overview.html#eden-treaty)

Eden Treaty is an object representation to interact with a server and features type safety, auto-completion, and error handling.

To use Eden Treaty, first export your existing Elysia server type:

typescript

```
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/hi', () => 'Hi Elysia')
    .get('/id/:id', ({ params: { id } }) => id)
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            id: t.Number(),
            name: t.String()
        })
    })
    .listen(3000)

export type App = typeof app 
```

Then import the server type and consume the Elysia API on the client:

typescript

```
// client.ts

import { 

treaty






 } from '@elysiajs/eden'

import type { 

App






 } from './server'


const 

app






 = 

treaty






<

App






>('localhost:3000')

// response type: 'Hi Elysia'

const { 

data






, 

error






 } = await 

app






.

hi






.

get






()
```

## Tree like syntax [​](overview.html#tree-like-syntax)

HTTP Path is a resource indicator for a file system tree.

File system consists of multiple levels of folders, for example:

- /documents/elysia
- /documents/kalpas
- /documents/kelvin

Each level is separated by **/** (slash) and a name.

However in JavaScript, instead of using **"/"** (slash) we use **"."** (dot) to access deeper resources.

Eden Treaty turns an Elysia server into a tree-like file system that can be accessed in the JavaScript frontend instead.

PathTreaty/.index/hi.hi/deep/nested.deep.nested

Combined with the HTTP method, we can interact with the Elysia server.

PathMethodTreaty/GET.index.get()/hiGET.hi.get()/deep/nestedGET.deep.nested.get()/deep/nestedPOST.deep.nested.post()

## Dynamic path [​](overview.html#dynamic-path)

However, dynamic path parameters cannot be expressed using notation. If they are fully replaced, we don't know what the parameter name is supposed to be.

typescript

```
// ❌ Unclear what the value is supposed to represent?
treaty.item['skadi'].get()
```

To handle this, we can specify a dynamic path using a function to provide a key value instead.

typescript

```
// ✅ Clear that value is dynamic path is 'name'
treaty.item({ name: 'Skadi' }).get()
```

PathTreaty/item.item/item/:name.item({ name: 'Skadi' })/item/:name/id.item({ name: 'Skadi' }).id

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/treaty/overview.md)

Last updated:

Pager

[Previous pageInstallation](../installation.html)

[Next pageParameters](parameters.html)


=== bun-elysia-docs/elysiajs.com/eden/treaty/parameters.html ===
[Skip to content](parameters.html#VPContent)

[![](../../assets/elysia.svg)ElysiaJS](../../index.html)

Search`K`

Main Navigation [Cheat Sheet](../../integrations/cheat-sheet.html)[Plugins](../../plugins/overview.html)[Blog](../../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../../at-glance.html)

[Quick Start](../../quick-start.html)

[Tutorial](../../tutorial.html)

[Key Concept](../../key-concept.html)

[Table of Content](../../table-of-content.html)

## Essential

[Route](../../essential/route.html)

[Handler](../../essential/handler.html)

[Life Cycle](../../essential/life-cycle.html)

[Validation](../../essential/validation.html)

[Plugin](../../essential/plugin.html)

[Best Practice](../../essential/best-practice.html)

## Patterns

[Macro](../../patterns/macro.html)

[Configuration](../../patterns/configuration.html)

[Cookie](../../patterns/cookie.html)

[Web Socket](../../patterns/websocket.html)

[Unit Test](../../patterns/unit-test.html)

[Mount](../../patterns/mount.html)

[Trace](../../patterns/trace.html)

## Recipe

[OpenAPI](../../recipe/openapi.html)

[Opentelemetry](../../recipe/opentelemetry.html)

[Drizzle](../../recipe/drizzle.html)

[React Email](../../recipe/react-email.html)

[Better Auth](../../recipe/better-auth.html)

## Eden

[Overview](../overview.html)

[Installation](../installation.html)

### Eden Treaty

[Overview](overview.html)

[Parameters](parameters.html)

[Response](response.html)

[Web Socket](websocket.html)

[Config](config.html)

[Unit Test](unit-test.html)

[Legacy (Treaty 1)](legacy.html)

[Eden Fetch](../fetch.html)

## Plugins

[Overview](../../plugins/overview.html)

[Bearer](../../plugins/bearer.html)

[CORS](../../plugins/cors.html)

[Cron](../../plugins/cron.html)

[GraphQL Apollo](../../plugins/graphql-apollo.html)

[GraphQL Yoga](../../plugins/graphql-yoga.html)

[HTML](../../plugins/html.html)

[JWT](../../plugins/jwt.html)

[OpenTelemetry](../../plugins/opentelemetry.html)

[Server Timing](../../plugins/server-timing.html)

[Static](../../plugins/static.html)

[Stream](../../plugins/stream.html)

[Swagger](../../plugins/swagger.html)

[trpc](../../plugins/trpc.html)

## Integration

[Nextjs](../../integrations/nextjs.html)

[Expo](../../integrations/expo.html)

[Astro](../../integrations/astro.html)

[SvelteKit](../../integrations/sveltekit.html)

Outline

# Parameters [​](parameters.html#parameters)

We need to send a payload to server eventually.

To handle this, Eden Treaty's methods accept 2 parameters to send data to server.

Both parameters is type safe and will be guided by TypeScript automatically:

1. body
2. additional parameters
   
   - query
   - headers
   - fetch

typescript

```
import { Elysia, t } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
    .post('/user', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })
    .listen(3000)

const api = treaty<typeof app>('localhost:3000')

// ✅ works
api.user.post({
    name: 'Elysia'
})

// ✅ also works
api.user.post({
    name: 'Elysia'
}, {
    // This is optional as not specified in schema
    headers: {
        authorization: 'Bearer 12345'
    },
    query: {
        id: 2
    }
})
```

Unless if the method doesn't accept body, then body will be omitted and left with single parameter only.

If the method **"GET"** or **"HEAD"**:

1. Additional parameters
   
   - query
   - headers
   - fetch

typescript

```
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
    .get('/hello', () => 'hi')
    .listen(3000)

const api = treaty<typeof app>('localhost:3000')

// ✅ works
api.hello.get({
    // This is optional as not specified in schema
    headers: {
        hello: 'world'
    }
})
```

## Empty body [​](parameters.html#empty-body)

If body is optional or not need but query or headers is required, you may pass the body as `null` or `undefined` instead.

typescript

```
import { Elysia, t } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
    .post('/user', () => 'hi', {
        query: t.Object({
            name: t.String()
        })
    })
    .listen(3000)

const api = treaty<typeof app>('localhost:3000')

api.user.post(null, {
    query: {
        name: 'Ely'
    }
})
```

## Fetch parameters [​](parameters.html#fetch-parameters)

Eden Treaty is a fetch wrapper, we may add any valid [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) parameters to Eden by passing it to `$fetch`:

typescript

```
import { Elysia, t } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
    .get('/hello', () => 'hi')
    .listen(3000)

const api = treaty<typeof app>('localhost:3000')

const controller = new AbortController()

const cancelRequest = setTimeout(() => {
    controller.abort()
}, 5000)

await api.hello.get({
    fetch: {
        signal: controller.signal
    }
})

clearTimeout(cancelRequest)
```

## File Upload [​](parameters.html#file-upload)

We may either pass one of the following to attach file(s):

- **File**
- **File\[]**
- **FileList**
- **Blob**

Attaching a file will results **content-type** to be **multipart/form-data**

Suppose we have the server as the following:

typescript

```
import { Elysia, t } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
    .post('/image', ({ body: { image, title } }) => title, {
        body: t.Object({
            title: t.String(),
            image: t.Files()
        })
    })
    .listen(3000)

export const api = treaty<typeof app>('localhost:3000')

const images = document.getElementById('images') as HTMLInputElement

const { data } = await api.image.post({
    title: "Misono Mika",
    image: images.files!,
})
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/treaty/parameters.md)

Last updated:

Pager

[Previous pageOverview](overview.html)

[Next pageResponse](response.html)


=== bun-elysia-docs/elysiajs.com/eden/treaty/response.html ===
[Skip to content](response.html#VPContent)

[![](../../assets/elysia.svg)ElysiaJS](../../index.html)

Search`K`

Main Navigation [Cheat Sheet](../../integrations/cheat-sheet.html)[Plugins](../../plugins/overview.html)[Blog](../../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../../at-glance.html)

[Quick Start](../../quick-start.html)

[Tutorial](../../tutorial.html)

[Key Concept](../../key-concept.html)

[Table of Content](../../table-of-content.html)

## Essential

[Route](../../essential/route.html)

[Handler](../../essential/handler.html)

[Life Cycle](../../essential/life-cycle.html)

[Validation](../../essential/validation.html)

[Plugin](../../essential/plugin.html)

[Best Practice](../../essential/best-practice.html)

## Patterns

[Macro](../../patterns/macro.html)

[Configuration](../../patterns/configuration.html)

[Cookie](../../patterns/cookie.html)

[Web Socket](../../patterns/websocket.html)

[Unit Test](../../patterns/unit-test.html)

[Mount](../../patterns/mount.html)

[Trace](../../patterns/trace.html)

## Recipe

[OpenAPI](../../recipe/openapi.html)

[Opentelemetry](../../recipe/opentelemetry.html)

[Drizzle](../../recipe/drizzle.html)

[React Email](../../recipe/react-email.html)

[Better Auth](../../recipe/better-auth.html)

## Eden

[Overview](../overview.html)

[Installation](../installation.html)

### Eden Treaty

[Overview](overview.html)

[Parameters](parameters.html)

[Response](response.html)

[Web Socket](websocket.html)

[Config](config.html)

[Unit Test](unit-test.html)

[Legacy (Treaty 1)](legacy.html)

[Eden Fetch](../fetch.html)

## Plugins

[Overview](../../plugins/overview.html)

[Bearer](../../plugins/bearer.html)

[CORS](../../plugins/cors.html)

[Cron](../../plugins/cron.html)

[GraphQL Apollo](../../plugins/graphql-apollo.html)

[GraphQL Yoga](../../plugins/graphql-yoga.html)

[HTML](../../plugins/html.html)

[JWT](../../plugins/jwt.html)

[OpenTelemetry](../../plugins/opentelemetry.html)

[Server Timing](../../plugins/server-timing.html)

[Static](../../plugins/static.html)

[Stream](../../plugins/stream.html)

[Swagger](../../plugins/swagger.html)

[trpc](../../plugins/trpc.html)

## Integration

[Nextjs](../../integrations/nextjs.html)

[Expo](../../integrations/expo.html)

[Astro](../../integrations/astro.html)

[SvelteKit](../../integrations/sveltekit.html)

Outline

# Response [​](response.html#response)

Once the fetch method is called, Eden Treaty return a promise containing an object with the following properties:

- data - returned value of the response (2xx)
- error - returned value from the response (&gt;= 3xx)
- response `Response` - Web Standard Response class
- status `number` - HTTP status code
- headers `FetchRequestInit['headers']` - response headers

Once returned, you must provide error handling to ensure that the response data value is unwrapped, otherwise the value will be nullable. Elysia provides a `error()` helper function to handle the error, and Eden will provide type narrowing for the error value.

typescript

```
import { Elysia, t } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia()
    .post('/user', ({ body: { name }, error }) => {
        if(name === 'Otto')
            return error(400, 'Bad Request')

        return name
    }, {
        body: t.Object({
            name: t.String()
        })
    })
    .listen(3000)

const api = treaty<typeof app>('localhost:3000')

const submit = async (name: string) => {
    const { data, error } = await api.user.post({
        name
    })

    // type: string | null
    console.log(data)

    if (error)
        switch(error.status) {
            case 400:
                // Error type will be narrow down
                throw error.value

            default:
                throw error.value
        }

    // Once the error is handled, type will be unwrapped
    // type: string
    return data
}
```

By default, Elysia infers `error` and `response` type to TypeScript automatically, and Eden will be providing auto-completion and type narrowing for accurate behavior.

TIP

If the server responds with an HTTP status &gt;= 300, then value will be always be null, and `error` will have a returned value instead.

Otherwise, response will be passed to data.

## Stream response [​](response.html#stream-response)

Eden will interpret a stream response as `AsyncGenerator` allowing us to use `for await` loop to consume the stream.

typescript

```

import { 

Elysia






 } from 'elysia'

import { 

treaty






 } from '@elysiajs/eden'


const 

app






 = new 

Elysia






()

	.

get






('/ok', function* () {
		yield 1
		yield 2
		yield 3
	})


const { 

data






, 

error






 } = await 

treaty






(

app






).

ok






.

get






()

if (

error






) throw 

error









for await (const 

chunk






 of 

data






)

	

console






.

log






(

chunk






)
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/treaty/response.md)

Last updated:

Pager

[Previous pageParameters](parameters.html)

[Next pageWeb Socket](websocket.html)


=== bun-elysia-docs/elysiajs.com/eden/treaty/unit-test.html ===
[Skip to content](unit-test.html#VPContent)

[![](../../assets/elysia.svg)ElysiaJS](../../index.html)

Search`K`

Main Navigation [Cheat Sheet](../../integrations/cheat-sheet.html)[Plugins](../../plugins/overview.html)[Blog](../../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../../at-glance.html)

[Quick Start](../../quick-start.html)

[Tutorial](../../tutorial.html)

[Key Concept](../../key-concept.html)

[Table of Content](../../table-of-content.html)

## Essential

[Route](../../essential/route.html)

[Handler](../../essential/handler.html)

[Life Cycle](../../essential/life-cycle.html)

[Validation](../../essential/validation.html)

[Plugin](../../essential/plugin.html)

[Best Practice](../../essential/best-practice.html)

## Patterns

[Macro](../../patterns/macro.html)

[Configuration](../../patterns/configuration.html)

[Cookie](../../patterns/cookie.html)

[Web Socket](../../patterns/websocket.html)

[Unit Test](../../patterns/unit-test.html)

[Mount](../../patterns/mount.html)

[Trace](../../patterns/trace.html)

## Recipe

[OpenAPI](../../recipe/openapi.html)

[Opentelemetry](../../recipe/opentelemetry.html)

[Drizzle](../../recipe/drizzle.html)

[React Email](../../recipe/react-email.html)

[Better Auth](../../recipe/better-auth.html)

## Eden

[Overview](../overview.html)

[Installation](../installation.html)

### Eden Treaty

[Overview](overview.html)

[Parameters](parameters.html)

[Response](response.html)

[Web Socket](websocket.html)

[Config](config.html)

[Unit Test](unit-test.html)

[Legacy (Treaty 1)](legacy.html)

[Eden Fetch](../fetch.html)

## Plugins

[Overview](../../plugins/overview.html)

[Bearer](../../plugins/bearer.html)

[CORS](../../plugins/cors.html)

[Cron](../../plugins/cron.html)

[GraphQL Apollo](../../plugins/graphql-apollo.html)

[GraphQL Yoga](../../plugins/graphql-yoga.html)

[HTML](../../plugins/html.html)

[JWT](../../plugins/jwt.html)

[OpenTelemetry](../../plugins/opentelemetry.html)

[Server Timing](../../plugins/server-timing.html)

[Static](../../plugins/static.html)

[Stream](../../plugins/stream.html)

[Swagger](../../plugins/swagger.html)

[trpc](../../plugins/trpc.html)

## Integration

[Nextjs](../../integrations/nextjs.html)

[Expo](../../integrations/expo.html)

[Astro](../../integrations/astro.html)

[SvelteKit](../../integrations/sveltekit.html)

Outline

# Unit Test [​](unit-test.html#unit-test)

According to [Eden Treaty config](config.html#urlorinstance) and [Unit Test](../../patterns/unit-test.html), we may pass an Elysia instance to Eden Treaty directly to interact with Elysia server directly without sending a network request.

We may use this patterns to create a unit test with end-to-end type safety and type-level test all at once.

typescript

```
// test/index.test.ts

import { 

describe






, 

expect






, 

it






 } from 'bun:test'

import { 

Elysia






 } from 'elysia'

import { 

treaty






 } from '@elysiajs/eden'


const 

app






 = new 

Elysia






().

get






('/hello', 'hi')

const 

api






 = 

treaty






(

app






)




describe






('Elysia', () => {

    

it






('return a response', async () => {

        const { 

data






 } = await 

api






.

hello






.

get






()


        

expect






(

data






).

toBe






('hi')

    })
})
```

## Type safety test [​](unit-test.html#type-safety-test)

To perform a type safety test, simply run **tsc** to test folders.

bash

```
tsc --noEmit test/**/*.ts
```

This is useful to ensure type integrity for both client and server, especially during migrations.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/treaty/unit-test.md)

Last updated:

Pager

[Previous pageConfig](config.html)

[Next pageLegacy (Treaty 1)](legacy.html)


=== bun-elysia-docs/elysiajs.com/eden/treaty/websocket.html ===
[Skip to content](websocket.html#VPContent)

[![](../../assets/elysia.svg)ElysiaJS](../../index.html)

Search`K`

Main Navigation [Cheat Sheet](../../integrations/cheat-sheet.html)[Plugins](../../plugins/overview.html)[Blog](../../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../../at-glance.html)

[Quick Start](../../quick-start.html)

[Tutorial](../../tutorial.html)

[Key Concept](../../key-concept.html)

[Table of Content](../../table-of-content.html)

## Essential

[Route](../../essential/route.html)

[Handler](../../essential/handler.html)

[Life Cycle](../../essential/life-cycle.html)

[Validation](../../essential/validation.html)

[Plugin](../../essential/plugin.html)

[Best Practice](../../essential/best-practice.html)

## Patterns

[Macro](../../patterns/macro.html)

[Configuration](../../patterns/configuration.html)

[Cookie](../../patterns/cookie.html)

[Web Socket](../../patterns/websocket.html)

[Unit Test](../../patterns/unit-test.html)

[Mount](../../patterns/mount.html)

[Trace](../../patterns/trace.html)

## Recipe

[OpenAPI](../../recipe/openapi.html)

[Opentelemetry](../../recipe/opentelemetry.html)

[Drizzle](../../recipe/drizzle.html)

[React Email](../../recipe/react-email.html)

[Better Auth](../../recipe/better-auth.html)

## Eden

[Overview](../overview.html)

[Installation](../installation.html)

### Eden Treaty

[Overview](overview.html)

[Parameters](parameters.html)

[Response](response.html)

[Web Socket](websocket.html)

[Config](config.html)

[Unit Test](unit-test.html)

[Legacy (Treaty 1)](legacy.html)

[Eden Fetch](../fetch.html)

## Plugins

[Overview](../../plugins/overview.html)

[Bearer](../../plugins/bearer.html)

[CORS](../../plugins/cors.html)

[Cron](../../plugins/cron.html)

[GraphQL Apollo](../../plugins/graphql-apollo.html)

[GraphQL Yoga](../../plugins/graphql-yoga.html)

[HTML](../../plugins/html.html)

[JWT](../../plugins/jwt.html)

[OpenTelemetry](../../plugins/opentelemetry.html)

[Server Timing](../../plugins/server-timing.html)

[Static](../../plugins/static.html)

[Stream](../../plugins/stream.html)

[Swagger](../../plugins/swagger.html)

[trpc](../../plugins/trpc.html)

## Integration

[Nextjs](../../integrations/nextjs.html)

[Expo](../../integrations/expo.html)

[Astro](../../integrations/astro.html)

[SvelteKit](../../integrations/sveltekit.html)

Outline

# WebSocket [​](websocket.html#websocket)

Eden Treaty supports WebSocket using `subscribe` method.

typescript

```

import { 

Elysia






, 

t






 } from "elysia";

import { 

treaty






 } from "@elysiajs/eden";


const 

app






 = new 

Elysia






()

  .

ws






("/chat", {

    

body






: 

t






.

String






(),

    

response






: 

t






.

String






(),

    

message






(

ws






, 

message






) {

      

ws






.

send






(

message






);
    },
  })

  .

listen






(3000);


const 

api






 = 

treaty






<typeof 

app






>("localhost:3000");


const 

chat






 = 

api






.

chat






.

subscribe






();




chat






.

subscribe






((

message






) => {

  

console






.

log






("got", 

message






);
});




chat






.

on






("open", () => {

  

chat






.

send






("hello from client");
});
```

**.subscribe** accepts the same parameter as `get` and `head`.

## Response [​](websocket.html#response)

**Eden.subscribe** returns **EdenWS** which extends the [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) results in identical syntax.

If more control is need, **EdenWebSocket.raw** can be accessed to interact with the native WebSocket API.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/eden/treaty/websocket.md)

Last updated:

Pager

[Previous pageResponse](response.html)

[Next pageConfig](config.html)


=== bun-elysia-docs/elysiajs.com/essential/best-practice.html ===
[Skip to content](best-practice.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](route.html)

[Handler](handler.html)

[Life Cycle](life-cycle.html)

[Validation](validation.html)

[Plugin](plugin.html)

[Best Practice](best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Best Practice [​](best-practice.html#best-practice)

Elysia is a pattern-agnostic framework, leaving the decision of which coding patterns to use up to you and your team.

However, there are several concern from trying to adapt an MVC pattern [(Model-View-Controller)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) with Elysia, and found it's hard to decouple and handle types.

This page is a guide to on how to follows Elysia structure best practice combined with MVC pattern but can be adapted to any coding pattern you like.

## Method Chaining [​](best-practice.html#method-chaining)

Elysia code should always use **method chaining**.

As Elysia type system is complex, every methods in Elysia returns a new type reference.

**This is important** to ensure type integrity and inference.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

state






('build', 1)
    // Store is strictly typed

    .

get






('/', ({ 

store






: { 

build






 } }) => 

build






)

    .

listen






(3000)
```

In the code above **state** returns a new **ElysiaInstance** type, adding a `build` type.

### ❌ Don't: Use Elysia without method chaining [​](best-practice.html#%E2%9D%8C-don-t-use-elysia-without-method-chaining)

Without using method chaining, Elysia doesn't save these new types, leading to no type inference.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()




app






.

state






('build', 1)




app






.

get






('/', ({ 

store






: { build } }) => 

build






)
Property 'build' does not exist on type '{}'.



app






.

listen






(3000)
```

We recommend to **always use method chaining** to provide an accurate type inference.

## Controller [​](best-practice.html#controller)

> 1 Elysia instance = 1 controller

Elysia does a lot to ensure type integrity, if you pass an entire `Context` type to a controller, these might be the problems:

1. Elysia type is complex and heavily depends on plugin and multiple level of chaining.
2. Hard to type, Elysia type could change at anytime, especially with decorators, and store
3. Type casting may lead to a loss of type integrity or an inability to ensure consistency between types and runtime code.
4. This makes it more challenging for [Sucrose](../blog/elysia-10.html#sucrose) *(Elysia's "kind of" compiler)* to statically analyze your code

### ❌ Don't: Create a separate controller [​](best-practice.html#%E2%9D%8C-don-t-create-a-separate-controller)

Don't create a separate controller, use Elysia itself as a controller instead:

typescript

```
import { Elysia, t, type Context } from 'elysia'

abstract class Controller {
    static root(context: Context) {
        return Service.doStuff(context.stuff)
    }
}

// ❌ Don't
new Elysia()
    .get('/', Controller.hi)
```

By passing an entire `Controller.method` to Elysia is an equivalent of having 2 controllers passing data back and forth. It's against the design of framework and MVC pattern itself.

### ✅ Do: Use Elysia as a controller [​](best-practice.html#%E2%9C%85-do-use-elysia-as-a-controller)

Instead treat an Elysia instance as a controller itself instead.

typescript

```
import { Elysia } from 'elysia'
import { Service } from './service'

new Elysia()
    .get('/', ({ stuff }) => {
        Service.doStuff(stuff)
    })
```

### Testing [​](best-practice.html#testing)

You can test your controller using `handle` to directly call a function (and it's lifecycle)

typescript

```
import { Elysia } from 'elysia'
import { Service } from './service'

import { describe, it, should } from 'bun:test'

const app = new Elysia()
    .get('/', ({ stuff }) => {
        Service.doStuff(stuff)

        return 'ok'
    })

describe('Controller', () => {
	it('should work', async () => {
		const response = await app
			.handle(new Request('http://localhost/'))
			.then((x) => x.text())

		expect(response).toBe('ok')
	})
})
```

You may find more information about testing in [Unit Test](../patterns/unit-test.html).

## Service [​](best-practice.html#service)

Service is a set of utility/helper functions decoupled as a business logic to use in a module/controller, in our case, an Elysia instance.

Any technical logic that can be decoupled from controller may live inside a **Service**.

There're 2 types of service in Elysia:

1. Non-request dependent service
2. Request dependent service

### ✅ Do: Non-request dependent service [​](best-practice.html#%E2%9C%85-do-non-request-dependent-service)

This kind of service doesn't need to access any property from the request or `Context`, and can be initiated as a static class same as usual MVC service pattern.

typescript

```
import { Elysia, t } from 'elysia'

abstract class Service {
    static fibo(number: number): number {
        if(number < 2)
            return number

        return Service.fibo(number - 1) + Service.fibo(number - 2)
    }
}

new Elysia()
    .get('/fibo', ({ body }) => {
        return Service.fibo(body)
    }, {
        body: t.Numeric()
    })
```

If your service doesn't need to store a property, you may use `abstract class` and `static` instead to avoid allocating class instance.

### Request Dependent Service [​](best-practice.html#request-dependent-service)

This kind of service may require some property from the request, and should be **initiated as an Elysia instance**.

### ❌ Don't: Pass entire `Context` to a service [​](best-practice.html#%E2%9D%8C-don-t-pass-entire-context-to-a-service)

**Context is a highly dynamic type** that can be inferred from Elysia instance.

Do not pass an entire `Context` to a service, instead use object destructuring to extract what you need and pass it to the service.

typescript

```
import type { Context } from 'elysia'

class AuthService {
	constructor() {}

	// ❌ Don't do this
	isSignIn({ cookie: { session } }: Context) {
		if (session.value)
			return error(401)
	}
}
```

As Elysia type is complex, and heavily depends on plugin and multiple level of chaining, it can be challenging to manually type as it's highly dynamic.

### ✅ Do: Use Elysia instance as a service [​](best-practice.html#%E2%9C%85-do-use-elysia-instance-as-a-service)

We recommended to use Elysia instance as a service to ensure type integrity and inference:

typescript

```
import { Elysia } from 'elysia'

// ✅ Do
const AuthService = new Elysia({ name: 'Service.Auth' })
    .derive({ as: 'scoped' }, ({ cookie: { session } }) => ({
    	// This is equivalent to dependency injection
        Auth: {
            user: session.value
        }
    }))
    .macro(({ onBeforeHandle }) => ({
     	// This is declaring a service method
        isSignIn(value: boolean) {
            onBeforeHandle(({ Auth, error }) => {
                if (!Auth?.user || !Auth.user) return error(401)
            })
        }
    }))

const UserController = new Elysia()
    .use(AuthService)
    .get('/profile', ({ Auth: { user } }) => user, {
    	isSignIn: true
    })
```

TIP

Elysia handle [plugin deduplication](plugin.html#plugin-deduplication) by default so you don't have to worry about performance, as it's going to be Singleton if you specified a **"name"** property.

### ⚠️ Infers Context from Elysia instance [​](best-practice.html#%E2%9A%A0%EF%B8%8F-infers-context-from-elysia-instance)

In case of **absolute necessity**, you may infer the `Context` type from the Elysia instance itself:

typescript

```
import { Elysia, type InferContext } from 'elysia'

const setup = new Elysia()
	.state('a', 'a')
	.decorate('b', 'b')

class AuthService {
	constructor() {}

	// ✅ Do
	isSignIn({ cookie: { session } }: InferContext<typeof setup>) {
		if (session.value)
			return error(401)
	}
}
```

However we recommend to avoid this if possible, and use [Elysia as a service](best-practice.html#%E2%9C%85-do-use-elysia-as-a-controller) instead.

You may find more about [InferContext](handler.html#infercontext) in [Essential: Handler](handler.html).

## Model [​](best-practice.html#model)

Model or [DTO (Data Transfer Object)](https://en.wikipedia.org/wiki/Data_transfer_object) is handle by [Elysia.t (Validation)](validation.html#elysia-type).

Elysia has a validation system built-in which can infers type from your code and validate it at runtime.

### ❌ Don't: Declare a class instance as a model [​](best-practice.html#%E2%9D%8C-don-t-declare-a-class-instance-as-a-model)

Do not declare a class instance as a model:

typescript

```
// ❌ Don't
class CustomBody {
	username: string
	password: string

	constructor(username: string, password: string) {
		this.username = username
		this.password = password
	}
}

// ❌ Don't
interface ICustomBody {
	username: string
	password: string
}
```

### ✅ Do: Use Elysia's validation system [​](best-practice.html#%E2%9C%85-do-use-elysia-s-validation-system)

Instead of declaring a class or interface, use Elysia's validation system to define a model:

typescript

```
// ✅ Do

import { 

Elysia






, 

t






 } from 'elysia'


const 

customBody






 = 

t






.

Object






({

	

username






: 

t






.

String






(),

	

password






: 

t






.

String






()
})

// Optional if you want to get the type of the model
// Usually if we didn't use the type, as it's already inferred by Elysia

type 

CustomBody






 = typeof 

customBody






.

static











export { 

customBody






 }
```

We can get type of model by using `typeof` with `.static` property from the model.

Then you can use the `CustomBody` type to infer the type of the request body.

typescript

```
// ✅ Do

new 

Elysia






()

	.

post






('/login', ({ 

body






 }) => {

		return 

body







	}, {

		

body






: 

customBody







	})
```

### ❌ Don't: Declare type separate from the model [​](best-practice.html#%E2%9D%8C-don-t-declare-type-separate-from-the-model)

Do not declare a type separate from the model, instead use `typeof` with `.static` property to get the type of the model.

typescript

```
// ❌ Don't
import { Elysia, t } from 'elysia'

const customBody = t.Object({
	username: t.String(),
	password: t.String()
})

type CustomBody = {
	username: string
	password: string
}

// ✅ Do
const customBody = t.Object({
	username: t.String(),
	password: t.String()
})

type customBody = typeof customBody.static
```

### Group [​](best-practice.html#group)

You can group multiple models into a single object to make it more organized.

typescript

```
import { Elysia, t } from 'elysia'

export const AuthModel = {
	sign: t.Object({
		username: t.String(),
		password: t.String()
	})
}

const models = AuthModel.models
```

### Model Injection [​](best-practice.html#model-injection)

Though this is optional, if you are strictly following MVC pattern, you may want to inject like a service into a controller. We recommended using [Elysia reference model](validation.html#reference-model)

Using Elysia's model reference

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

customBody






 = 

t






.

Object






({

	

username






: 

t






.

String






(),

	

password






: 

t






.

String






()
})


const 

AuthModel






 = new 

Elysia






()

    .

model






({

        'auth.sign': 

customBody







    })


const 

models






 = 

AuthModel






.

models









const 

UserController






 = new 

Elysia






({ 

prefix






: '/auth' })

    .

use






(

AuthModel






)

    .

post






('/sign-in', async ({ 

body






, 

cookie






: { 

session






 } }) => {

        return true
    }, {

        

body






: 'auth.sign'
    })
```

This approach provide several benefits:

1. Allow us to name a model and provide auto-completion.
2. Modify schema for later usage, or perform a [remap](handler.html#remap).
3. Show up as "models" in OpenAPI compliance client, eg. Swagger.
4. Improve TypeScript inference speed as model type will be cached during registration.

## Reuse a plugin [​](best-practice.html#reuse-a-plugin)

It's ok to reuse plugins multiple time to provide type inference.

Elysia handle plugin deduplication automatically by default, and the performance is negligible.

To create a unique plugin, you may provide a **name** or optional **seed** to an Elysia instance.

typescript

```
import { Elysia } from 'elysia'

const plugin = new Elysia({ name: 'my-plugin' })
	.decorate("type", "plugin")

const app = new Elysia()
    .use(plugin)
    .use(plugin)
    .use(plugin)
    .use(plugin)
    .listen(3000)
```

This allows Elysia to improve performance by reusing the registered plugins instead of processing the plugin over and over again.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/essential/best-practice.md)

Last updated:

Pager

[Previous pagePlugin](plugin.html)

[Next pageMacro](../patterns/macro.html)


=== bun-elysia-docs/elysiajs.com/essential/handler.html ===
[Skip to content](handler.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](route.html)

[Handler](handler.html)

[Life Cycle](life-cycle.html)

[Validation](validation.html)

[Plugin](plugin.html)

[Best Practice](best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Handler [​](handler.html#handler)

Handler is a function that responds to the request for each route.

Accepting request information and returning a response to the client.

Altenatively, handler is also known as a **Controller** in other frameworks.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    // the function `() => 'hello world'` is a handler
    .get('/', () => 'hello world')
    .listen(3000)
```

Handler maybe a literal value, and can be inlined.

typescript

```
import { Elysia, file } from 'elysia'

new Elysia()
    .get('/', 'Hello Elysia')
    .get('/video', file('kyuukurarin.mp4'))
    .listen(3000)
```

Using an inline value always returns the same value which is useful to optimize performance for static resource like file.

This allows Elysia to compile the response ahead of time to optimize performance.

TIP

Providing an inline value is not a cache.

Static Resource value, headers and status can be mutate dynamically using lifecycle.

## Context [​](handler.html#context)

**Context** contains a request information which unique for each request, and is not shared except for `store` (global mutable state).

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

	.

get






('/', (

context






) => 

context






.

path






)
            // ^ This is a context
```

**Context** can be only retrieve in a route handler, consists of:

- **path** - Pathname of the request
- **body** - [HTTP message](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages), form or file upload.
- **query** - [Query String](https://en.wikipedia.org/wiki/Query_string), include additional parameters for search query as JavaScript Object. (Query is extracted from a value after pathname starting from '?' question mark sign)
- **params** - Elysia's path parameters parsed as JavaScript object
- **headers** - [HTTP Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers), additional information about the request like User-Agent, Content-Type, Cache Hint.
- **request** - [Web Standard Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
- **redirect** - A function to redirect a response
- **store** - A global mutable store for Elysia instance
- **cookie** - A global mutable signal store for interacting with Cookie (including get/set)
- **set** - Property to apply to Response:
  
  - **status** - [HTTP status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), defaults to 200 if not set.
  - **headers** - Response headers
  - **redirect** - Response as a path to redirect to
- **error** - A function to return custom status code
- **server** - Bun server instance

## Set [​](handler.html#set)

**set** is a mutable property that form a response accessible via `Context.set`.

- **set.status** - Set custom status code
- **set.headers** - Append custom headers
- **set.redirect** - Append redirect

ts

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

	.

get






('/', ({ 

set






, 

error






 }) => {

		

set






.

headers






 = { 'X-Teapot': 'true' }


		return 

error






(418, 'I am a teapot')
	})

	.

listen






(3000)
```

### status [​](handler.html#status)

We can return a custom status code by using either:

- **error** function (recommended)
- **set.status** (legacy)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
	.get('/error', ({ error }) => error(418, 'I am a teapot'))
	.get('/set.status', ({ set }) => {
		set.status = 418
		return 'I am a teapot'
	})
	.listen(3000)
```

### set.error [​](handler.html#set-error)

A dedicated `error` function for returning status code with response.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ error }) => error(418, "Kirifuji Nagisa"))
    .listen(3000)
```

localhost/

GET

It's recommend to use `error` inside main handler as it has better inference:

- allows TypeScript to check if a return value is correctly type to response schema
- autocompletion for type narrowing base on status code
- type narrowing for error handling using End-to-end type safety ([Eden](../eden/overview.html))

### set.status [​](handler.html#set-status)

Set a default status code if not provided.

It's recommended to use this in a plugin that only needs to return a specific status code while allowing the user to return a custom value. For example, HTTP 201/206 or 403/405, etc.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

onBeforeHandle






(({ 

set






 }) => {

        

set






.

status






 = 418

        return 'Kirifuji Nagisa'
    })

    .

get






('/', () => 'hi')

    .

listen






(3000)
```

Unlike `error` function, `set.status` cannot infer the return value type, therefore it can't check if the return value is correctly type to response schema.

TIP

HTTP Status indicates the type of response. If the route handler is executed successfully without error, Elysia will return the status code 200.

You can also set a status code using the common name of the status code instead of using a number.

typescript

```
// @errors 2322

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/', ({ 

set






 }) => {

        

set






.

status








        return 'Kirifuji Nagisa'
    })

    .

listen






(3000)
```

### set.headers [​](handler.html#set-headers)

Allowing us to append or delete a response headers represent as Object.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/', ({ 

set






 }) => {

        

set






.

headers






['x-powered-by'] = 'Elysia'

        return 'a mimir'
    })

    .

listen






(3000)
```

WARNING

The names of headers should be lowercase to force case-sensitivity consistency for HTTP headers and auto-completion, eg. use `set-cookie` rather than `Set-Cookie`.

### redirect [​](handler.html#redirect)

Redirect a request to another resource.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/', ({ 

redirect






 }) => {

        return 

redirect






('https://youtu.be/whpVWVWBW4U?&t=8')
    })

    .

get






('/custom-status', ({ 

redirect






 }) => {
        // You can also set custom status to redirect

        return 

redirect






('https://youtu.be/whpVWVWBW4U?&t=8', 302)
    })

    .

listen






(3000)
```

When using redirect, returned value is not required and will be ignored. As response will be from another resource.

## Server [​](handler.html#server)

Server instance is accessible via `Context.server` to interact with the server.

Server could be nullable as it could be running in a different environment (test).

If server is running (allocating) using Bun, `server` will be available (not null).

typescript

```
import { Elysia } from 'elysia'

new Elysia()
	.get('/port', ({ server }) => {
		return server?.port
	})
	.listen(3000)
```

### Request IP [​](handler.html#request-ip)

We can get request IP by using `server.requestIP` method

typescript

```
import { Elysia } from 'elysia'

new Elysia()
	.get('/ip', ({ server, request }) => {
		return server?.requestIP(request)
	})
	.listen(3000)
```

## Response [​](handler.html#response)

Elysia is built on top of Web Standard Request/Response.

To comply with the Web Standard, a value returned from route handler will be mapped into a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) by Elysia.

Letting you focus on business logic rather than boilerplate code.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    // Equivalent to "new Response('hi')"
    .get('/', () => 'hi')
    .listen(3000)
```

If you prefer an explicit Response class, Elysia also handles that automatically.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', () => new Response('hi'))
    .listen(3000)
```

TIP

Using a primitive value or `Response` has near identical performance (+- 0.1%), so pick the one you prefer, regardless of performance.

## Formdata [​](handler.html#formdata)

We may return a `FormData` by using returning `form` utility directly from the handler.

typescript

```
import { Elysia, form, file } from 'elysia'

new Elysia()
	.get('/', () => form({
		name: 'Tea Party',
		images: [file('nagi.web'), file('mika.webp')]
	}))
	.listen(3000)
```

This pattern is useful if even need to return a file or multipart form data.

### Return a single file [​](handler.html#return-a-single-file)

Or alternatively, you can return a single file by returning `file` directly without `form`.

typescript

```
import { Elysia, file } from 'elysia'

new Elysia()
	.get('/', file('nagi.web'))
	.listen(3000)
```

## Handle [​](handler.html#handle)

As Elysia is built on top of Web Standard Request, we can programmatically test it using `Elysia.handle`.

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => 'hello')
    .post('/hi', () => 'hi')
    .listen(3000)

app.handle(new Request('http://localhost/')).then(console.log)
```

**Elysia.handle** is a function to process an actual request sent to the server.

TIP

Unlike unit test's mock, **you can expect it to behave like an actual request** sent to the server.

But also useful for simulating or creating unit tests.

## Stream [​](handler.html#stream)

To return a response streaming out of the box by using a generator function with `yield` keyword.

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
	.get('/ok', function* () {
		yield 1
		yield 2
		yield 3
	})
```

This this example, we may stream a response by using `yield` keyword.

### Set headers [​](handler.html#set-headers-1)

Elysia will defers returning response headers until the first chunk is yielded.

This allows us to set headers before the response is streamed.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()

	.

get






('/ok', function* ({ 

set






 }) {
		// This will set headers

		

set






.

headers






['x-name'] = 'Elysia'
		yield 1
		yield 2

		// This will do nothing

		

set






.

headers






['x-id'] = '1'
		yield 3
	})
```

Once the first chunk is yielded, Elysia will send the headers and the first chunk in the same response.

Setting headers after the first chunk is yielded will do nothing.

### Conditional Stream [​](handler.html#conditional-stream)

If the response is returned without yield, Elysia will automatically convert stream to normal response instead.

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
	.get('/ok', function* () {
		if (Math.random() > 0.5) return 'ok'

		yield 1
		yield 2
		yield 3
	})
```

This allows us to conditionally stream a response or return a normal response if necessary.

### Abort [​](handler.html#abort)

While streaming a response, it's common that request may be cancelled before the response is fully streamed.

Elysia will automatically stop the generator function when the request is cancelled.

### Eden [​](handler.html#eden)

[Eden](../eden/overview.html) will will interpret a stream response as `AsyncGenerator` allowing us to use `for await` loop to consume the stream.

typescript

```

import { 

Elysia






 } from 'elysia'

import { 

treaty






 } from '@elysiajs/eden'


const 

app






 = new 

Elysia






()

	.

get






('/ok', function* () {
		yield 1
		yield 2
		yield 3
	})


const { 

data






, 

error






 } = await 

treaty






(

app






).

ok






.

get






()

if (

error






) throw 

error









for await (const 

chunk






 of 

data






)

	

console






.

log






(

chunk






)
```

## Extending context [​](handler.html#extending-context)

As Elysia only provides essential information, we can customize Context for our specific need for instance:

- extracting user ID as variable
- inject a common pattern repository
- add a database connection

We may extend Elysia's context by using the following APIs to customize the Context:

- [state](handler.html#state) - a global mutable state
- [decorate](handler.html#decorate) - additional property assigned to **Context**
- [derive](handler.html#derive) / [resolve](handler.html#resolve) - create a new value from existing property

### When to extend context [​](handler.html#when-to-extend-context)

You should only extend context when:

- A property is a global mutable state, and shared across multiple routes using [state](handler.html#state)
- A property is associated with a request or response using [decorate](handler.html#decorate)
- A property is derived from an existing property using [derive](handler.html#derive) / [resolve](handler.html#resolve)

Otherwise, we recommend defining a value or function separately than extending the context.

TIP

It's recommended to assign properties related to request and response, or frequently used functions to Context for separation of concerns.

## State [​](handler.html#state)

**State** is a global mutable object or state shared across the Elysia app.

Once **state** is called, value will be added to **store** property **once at call time**, and can be used in handler.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

state






('version', 1)

    .

get






('/a', ({ 

store






: { 

version






 } }) => 

version






)

    .

get






('/b', ({ 

store






 }) => 

store






)

    .

get






('/c', () => 'still ok')

    .

listen






(3000)
```

localhost/a/b/c

GET

### When to use [​](handler.html#when-to-use)

- When you need to share a primitive mutable value across multiple routes
- If you want to use a non-primitive or a `wrapper` value or class that mutate an internal state, use [decorate](handler.html#decorate) instead.

### Key takeaway [​](handler.html#key-takeaway)

- **store** is a representation of a single-source-of-truth global mutable object for the entire Elysia app.
- **state** is a function to assign an initial value to **store**, which could be mutated later.
- Make sure to assign a value before using it in a handler.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()
    // ❌ TypeError: counter doesn't exist in store

    .

get






('/error', ({ 

store






 }) => 

store






.counter)
Property 'counter' does not exist on type '{}'.
    .

state






('counter', 0)
    // ✅ Because we assigned a counter before, we can now access it

    .

get






('/', ({ 

store






 }) => 

store






.

counter






)
```

localhost/error/

GET

TIP

Beware that we cannot use a state value before assign.

Elysia registers state values into the store automatically without explicit type or additional TypeScript generic needed.

## Decorate [​](handler.html#decorate)

**decorate** assigns an additional property to **Context** directly **at call time**.

typescript

```

import { 

Elysia






 } from 'elysia'


class 

Logger






 {

    

log






(

value






: string) {

        

console






.

log






(

value






)
    }
}


new 

Elysia






()

    .

decorate






('logger', new 

Logger






())
    // ✅ defined from the previous line

    .

get






('/', ({ 

logger






 }) => {

        

logger






.

log






('hi')

        return 'hi'
    })
```

### When to use [​](handler.html#when-to-use-1)

- A constant or readonly value object to **Context**
- Non primitive value or class that may contain internal mutable state
- Additional functions, singleton, or immutable property to all handlers.

### Key takeaway [​](handler.html#key-takeaway-1)

- Unlike **state**, decorated value **SHOULD NOT** be mutated although it's possible
- Make sure to assign a value before using it in a handler.

## Derive [​](handler.html#derive)

Retrieve values from existing properties in **Context** and assign new properties.

Derive assigns when request happens **at transform lifecycle** allowing us to "derive" (create new properties from existing properties).

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

derive






(({ 

headers






 }) => {

        const 

auth






 = 

headers






['authorization']

        return {

            

bearer






: 

auth






?.

startsWith






('Bearer ') ? 

auth






.

slice






(7) : null
        }
    })

    .

get






('/', ({ 

bearer






 }) => 

bearer






)
```

localhost/

GET

Because **derive** is assigned once a new request starts, **derive** can access request properties like **headers**, **query**, **body** where **store**, and **decorate** can't.

### When to use [​](handler.html#when-to-use-2)

- Create a new property from existing properties in **Context** without validation or type checking
- When you need to access request properties like **headers**, **query**, **body** without validation

### Key takeaway [​](handler.html#key-takeaway-2)

- Unlike **state** and **decorate** instead of assign **at call time**, **derive** is assigned once a new request starts.
- **derive is called at transform, or before validation** happens, Elysia cannot safely confirm the type of request property resulting in as **unknown**. If you want to assign a new value from typed request properties, you may want to use [resolve](handler.html#resolve) instead.

## Resolve [​](handler.html#resolve)

Same as [derive](handler.html#derive), resolve allow us to assign a new property to context.

Resolve is called at **beforeHandle** lifecycle or **after validation**, allowing us to **derive** request properties safely.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

guard






({

		

headers






: 

t






.

Object






({

			

bearer






: 

t






.

String






({

				

pattern






: '^Bearer .+$'
			})
		})
	})

	.

resolve






(({ 

headers






 }) => {
		return {

			

bearer






: 

headers






.

bearer






.

slice






(7)
		}
	})

	.

get






('/', ({ 

bearer






 }) => 

bearer






)
```

### When to use [​](handler.html#when-to-use-3)

- Create a new property from existing properties in **Context** with type integrity (type checked)
- When you need to access request properties like **headers**, **query**, **body** with validation

### Key takeaway [​](handler.html#key-takeaway-3)

- **resolve is called at beforeHandle, or after validation** happens. Elysia can safely confirm the type of request property resulting in as **typed**.

### Error from resolve/derive [​](handler.html#error-from-resolve-derive)

As resolve and derive is based on **transform** and **beforeHandle** lifecycle, we can return an error from resolve and derive. If error is returned from **derive**, Elysia will return early exit and return the error as response.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

derive






(({ 

headers






, 

error






 }) => {

        const 

auth






 = 

headers






['authorization']


        if(!

auth






) return 

error






(400)

        return {

            

bearer






: 

auth






?.

startsWith






('Bearer ') ? 

auth






.

slice






(7) : null
        }
    })

    .

get






('/', ({ 

bearer






 }) => 

bearer






)
```

## Pattern [​](handler.html#pattern)

**state**, **decorate** offers a similar APIs pattern for assigning property to Context as the following:

- key-value
- object
- remap

Where **derive** can be only used with **remap** because it depends on existing value.

### key-value [​](handler.html#key-value)

We can use **state**, and **decorate** to assign a value using a key-value pattern.

typescript

```
import { Elysia } from 'elysia'

class Logger {
    log(value: string) {
        console.log(value)
    }
}

new Elysia()
    .state('counter', 0)
    .decorate('logger', new Logger())
```

This pattern is great for readability for setting a single property.

### Object [​](handler.html#object)

Assigning multiple properties is better contained in an object for a single assignment.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .decorate({
        logger: new Logger(),
        trace: new Trace(),
        telemetry: new Telemetry()
    })
```

The object offers a less repetitive API for setting multiple values.

### Remap [​](handler.html#remap)

Remap is a function reassignment.

Allowing us to create a new value from existing value like renaming or removing a property.

By providing a function, and returning an entirely new object to reassign the value.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

state






('counter', 0)

    .

state






('version', 1)

    .

state






(({ 

version






, ...

store






 }) => ({

        ...

store






,

        

elysiaVersion






: 1
    }))
    // ✅ Create from state remap

    .

get






('/elysia-version', ({ 

store






 }) => 

store






.

elysiaVersion






)
    // ❌ Excluded from state remap

    .

get






('/version', ({ 

store






 }) => 

store






.version)
Property 'version' does not exist on type '{ elysiaVersion: number; counter: number; }'.
```

localhost/elysia-version/version

GET

It's a good idea to use state remap to create a new initial value from the existing value.

However, it's important to note that Elysia doesn't offer reactivity from this approach, as remap only assigns an initial value.

TIP

Using remap, Elysia will treat a returned object as a new property, removing any property that is missing from the object.

## Affix [​](handler.html#affix)

To provide a smoother experience, some plugins might have a lot of property value which can be overwhelming to remap one-by-one.

The **Affix** function which consists of **prefix** and **suffix**, allowing us to remap all property of an instance.

ts

```

import { 

Elysia






 } from 'elysia'


const 

setup






 = new 

Elysia






({ 

name






: 'setup' })

    .

decorate






({

        

argon






: 'a',

        

boron






: 'b',

        

carbon






: 'c'
    })


const 

app






 = new 

Elysia






()

    .

use






(

        

setup








            .

prefix






('decorator', 'setup')
    )

    .

get






('/', ({ 

setupCarbon






, ...

rest






 }) => 

setupCarbon






)
```

localhost/

GET

Allowing us to bulk remap a property of the plugin effortlessly, preventing the name collision of the plugin.

By default, **affix** will handle both runtime, type-level code automatically, remapping the property to camelCase as naming convention.

In some condition, we can also remap `all` property of the plugin:

ts

```

import { 

Elysia






 } from 'elysia'


const 

setup






 = new 

Elysia






({ 

name






: 'setup' })

    .

decorate






({

        

argon






: 'a',

        

boron






: 'b',

        

carbon






: 'c'
    })


const 

app






 = new 

Elysia






()

    .

use






(

setup






.

prefix






('all', 'setup')) 

    .

get






('/', ({ 

setupCarbon






, ...

rest






 }) => 

setupCarbon






)
```

## Reference and value [​](handler.html#reference-and-value)

To mutate the state, it's recommended to use **reference** to mutate rather than using an actual value.

When accessing the property from JavaScript, if we define a primitive value from an object property as a new value, the reference is lost, the value is treated as new separate value instead.

For example:

typescript

```
const store = {
    counter: 0
}

store.counter++
console.log(store.counter) // ✅ 1
```

We can use **store.counter** to access and mutate the property.

However, if we define a counter as a new value

typescript

```
const store = {
    counter: 0
}

let counter = store.counter

counter++
console.log(store.counter) // ❌ 0
console.log(counter) // ✅ 1
```

Once a primitive value is redefined as a new variable, the reference **"link"** will be missing, causing unexpected behavior.

This can apply to `store`, as it's a global mutable object instead.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .state('counter', 0)
    // ✅ Using reference, value is shared
    .get('/', ({ store }) => store.counter++)
    // ❌ Creating a new variable on primitive value, the link is lost
    .get('/error', ({ store: { counter } }) => counter)
```

localhost//error

GET

## TypeScript [​](handler.html#typescript)

Elysia automatically type context base on various of factors like store, decorators, schema.

It's recommended to leave Elysia to type context instead of manually define one.

However, Elysia also offers some utility type to help you define a handler type.

- [InferContext](handler.html#infercontext)
- [InferHandle](handler.html#inferhandler)

### InferContext [​](handler.html#infercontext)

Infer context is a utility type to help you define a context type based on Elysia instance.

typescript

```

import { 

Elysia






, type 

InferContext






 } from 'elysia'


const 

setup






 = new 

Elysia






()

	.

state






('a', 'a')

	.

decorate






('b', 'b')


type 

Context






 = 

InferContext






<typeof 

setup






>


const 

handler






 = ({ 

store






 }: 

Context






) => 

store






.

a






```

### InferHandler [​](handler.html#inferhandler)

Infer handler is a utility type to help you define a handler type based on Elysia instance, path, and schema.

typescript

```

import { 

Elysia






, type 

InferHandler






 } from 'elysia'


const 

setup






 = new 

Elysia






()

	.

state






('a', 'a')

	.

decorate






('b', 'b')


type 

Handler






 = 

InferHandler






<
	// Elysia instance to based on

	typeof 

setup






,
	// path
	'/path',
	// schema
	{

		

body






: string

		

response






: {
			200: string
		}
	}
>


const 

handler






: 

Handler






 = ({ 

body






 }) => 

body









const 

app






 = new 

Elysia






()

	.

get






('/', 

handler






)
```

Unlike `InferContext`, `InferHandler` requires a path and schema to define a handler type and can safely ensure type safety of a return type.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/essential/handler.md)

Last updated:

Pager

[Previous pageRoute](route.html)

[Next pageLife Cycle](life-cycle.html)


=== bun-elysia-docs/elysiajs.com/essential/life-cycle.html ===
[Skip to content](life-cycle.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](route.html)

[Handler](handler.html)

[Life Cycle](life-cycle.html)

[Validation](validation.html)

[Plugin](plugin.html)

[Best Practice](best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Lifecycle [​](life-cycle.html#lifecycle)

Life Cycle allows us to intercept an important event at the predefined point allowing us to customize the behavior of our server as needed.

Elysia's Life Cycle event can be illustrated as the following. ![Elysia Life Cycle Graph](../assets/lifecycle.webp)

Below are the request life cycle available in Elysia:

[**Request**  
\
Notify new event is received](life-cycle.html#request)

[**Parse**  
\
Parse body into **Context.body**](life-cycle.html#parse)

[**Transform**  
\
Modify **Context** before validation](life-cycle.html#transform)

[**Before Handle**  
\
Custom validation before route handler](life-cycle.html#before-handle)

[**After Handle**  
\
Transform returned value into a new value](life-cycle.html#after-handle)

[**Map Response**  
\
Map returned value into a response](life-cycle.html#map-response)

[**On Error (Error Handling)**  
\
Handle error thrown in life-cycle](life-cycle.html#on-error-error-handling)

[**After Response**  
\
Executed after response sent to the client](life-cycle.html#after-response)

[**Trace**  
\
Audit and capture timespan of each event](../patterns/trace.html)

## Why [​](life-cycle.html#why)

Imagine we want to return some HTML.

We need to set **"Content-Type"** headers as **"text/html"** for the browser to render HTML.

Explicitly specifying that the response is HTML could be repetitive if there are a lot of handlers, say ~200 endpoints.

This can lead to a lot of duplicated code just to specify the **"text/html"** **"Content-Type"**

But what if after we send a response, we could detect that the response is an HTML string then append the header automatically?

That's when the concept of Life Cycle comes into play.

## Hook [​](life-cycle.html#hook)

We refer to each function that intercepts the life cycle event as **"hook"**, as the function hooks into the lifecycle event.

Hooks can be categorized into 2 types:

1. Local Hook: Execute on a specific route
2. Interceptor Hook: Execute on every route

TIP

The hook will accept the same Context as a handler, you can imagine adding a route handler but at a specific point.

## Local Hook [​](life-cycle.html#local-hook)

The local hook is executed on a specific route.

To use a local hook, you can inline hook into a route handler:

typescript

```
import { Elysia } from 'elysia'
import { isHtml } from '@elysiajs/html'

new Elysia()
    .get('/', () => '<h1>Hello World</h1>', {
        afterHandle({ response, set }) {
            if (isHtml(response))
                set.headers['Content-Type'] = 'text/html; charset=utf8'
        }
    })
    .get('/hi', () => '<h1>Hello World</h1>')
    .listen(3000)
```

The response should be listed as follows:

PathContent-Type/text/html; charset=utf8/hitext/plain; charset=utf8

## Interceptor Hook [​](life-cycle.html#interceptor-hook)

Register hook into every handler **of the current instance** that came after.

To add an interceptor hook, you can use `.on` followed by a life cycle event in camelCase:

typescript

```
import { Elysia } from 'elysia'
import { isHtml } from '@elysiajs/html'

new Elysia()
    .get('/none', () => '<h1>Hello World</h1>')
    .onAfterHandle(({ response, set }) => {
        if (isHtml(response))
            set.headers['Content-Type'] = 'text/html; charset=utf8'
    })
    .get('/', () => '<h1>Hello World</h1>')
    .get('/hi', () => '<h1>Hello World</h1>')
    .listen(3000)
```

The response should be listed as follows:

PathContent-Type/text/html; charset=utf8/hitext/html; charset=utf8/nonetext/plain; charset=utf8

Events from other plugins are also applied to the route so the order of code is important.

TIP

The code above will only apply to the current instance, not applying to parent.

See [scope](plugin.html#scope) to find out why

## Order of code [​](life-cycle.html#order-of-code)

The order of Elysia's life-cycle code is very important.

Elysia's life-cycle event is stored as a queue, aka first-in first-out. So Elysia will **always** respect the order of code from top-to-bottom followed by the order of life-cycle events.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .onBeforeHandle(() => {
        console.log('1')
    })
    .onAfterHandle(() => {
        console.log('3')
    })
    .get('/', () => 'hi', {
        beforeHandle() {
            console.log('2')
        }
    })
    .listen(3000)
```

Console should log the following:

bash

```
1
2
3
```

## Request [​](life-cycle.html#request)

The first life-cycle event to get executed for every new request is recieved.

As `onRequest` is designed to provide only the most crucial context to reduce overhead, it is recommended to use in the following scenario:

- Caching
- Rate Limiter / IP/Region Lock
- Analytic
- Provide custom header, eg. CORS

#### Example [​](life-cycle.html#example)

Below is a pseudo code to enforce rate-limit on a certain IP address.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .use(rateLimiter)
    .onRequest(({ rateLimiter, ip, set, error }) => {
        if (rateLimiter.check(ip)) return error(420, 'Enhance your calm')
    })
    .get('/', () => 'hi')
    .listen(3000)
```

If a value is returned from `onRequest`, it will be used as the response and the rest of the life-cycle will be skipped.

### Pre Context [​](life-cycle.html#pre-context)

Context's onRequest is typed as `PreContext`, a minimal representation of `Context` with the attribute on the following: request: `Request`

- set: `Set`
- store
- decorators

Context doesn't provide `derived` value because derive is based on `onTransform` event.

## Parse [​](life-cycle.html#parse)

Parse is an equivalent of **body parser** in Express.

A function to parse body, the return value will be append to `Context.body`, if not, Elysia will continue iterating through additional parser functions assigned by `onParse` until either body is assigned or all parsers have been executed.

By default, Elysia will parse the body with content-type of:

- `text/plain`
- `application/json`
- `multipart/form-data`
- `application/x-www-form-urlencoded`

It's recommended to use the `onParse` event to provide a custom body parser that Elysia doesn't provide.

#### Example [​](life-cycle.html#example-1)

Below is an example code to retrieve value based on custom headers.

typescript

```
import { Elysia } from 'elysia'

new Elysia().onParse(({ request, contentType }) => {
    if (contentType === 'application/custom-type') return request.text()
})
```

The returned value will be assigned to Context.body. If not, Elysia will continue iterating through additional parser functions from **onParse** stack until either body is assigned or all parsers have been executed.

### Context [​](life-cycle.html#context)

`onParse` Context is extends from `Context` with additional properties of the following:

- contentType: Content-Type header of the request

All of the context is based on normal context and can be used like normal context in route handler.

### Parser [​](life-cycle.html#parser)

By default, Elysia will try to determine body parsing function ahead of time and pick the most suitable function to speed up the process.

Elysia is able to determine that body function by reading `body`.

Take a look at this example:

typescript

```
import { Elysia, t } from 'elysia'

new Elysia().post('/', ({ body }) => body, {
    body: t.Object({
        username: t.String(),
        password: t.String()
    })
})
```

Elysia read the body schema and found that, the type is entirely an object, so it's likely that the body will be JSON. Elysia then picks the JSON body parser function ahead of time and tries to parse the body.

Here's a criteria that Elysia uses to pick up type of body parser

- `application/json`: body typed as `t.Object`
- `multipart/form-data`: body typed as `t.Object`, and is 1 level deep with `t.File`
- `application/x-www-form-urlencoded`: body typed as `t.URLEncoded`
- `text/plain`: other primitive type

This allows Elysia to optimize body parser ahead of time, and reduce overhead in compile time.

### Explicit Parser [​](life-cycle.html#explicit-parser)

However, in some scenario if Elysia fails to pick the correct body parser function, we can explicitly tell Elysia to use a certain function by specifying `type`

typescript

```
import { Elysia } from 'elysia'

new Elysia().post('/', ({ body }) => body, {
    // Short form of application/json
    parse: 'json'
})
```

Allowing us to control Elysia behavior for picking body parser function to fit our needs in a complex scenario.

`type` may be one of the following:

typescript

```
type ContentType = |
    // Shorthand for 'text/plain'
    | 'text'
    // Shorthand for 'application/json'
    | 'json'
    // Shorthand for 'multipart/form-data'
    | 'formdata'
    // Shorthand for 'application/x-www-form-urlencoded'\
    | 'urlencoded'
    | 'text/plain'
    | 'application/json'
    | 'multipart/form-data'
    | 'application/x-www-form-urlencoded'
```

### Custom Parser [​](life-cycle.html#custom-parser)

You can provide register a custom parser with `parser`:

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .parser('custom', ({ request, contentType }) => {
        if (contentType === 'application/elysia') return request.text()
    })
    .post('/', ({ body }) => body, {
        parse: ['custom', 'json']
    })
```

## Transform [​](life-cycle.html#transform)

Executed just before **Validation** process, designed to mutate context to conform with the validation or appending new value.

It's recommended to use transform for the following:

- Mutate existing context to conform with validation.
- `derive` is based on `onTransform` with support for providing type.

#### Example [​](life-cycle.html#example-2)

Below is an example of using transform to mutate params to be numeric values.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
    .get('/id/:id', ({ params: { id } }) => id, {
        params: t.Object({
            id: t.Number()
        }),
        transform({ params }) {
            const id = +params.id

            if (!Number.isNaN(id)) params.id = id
        }
    })
    .listen(3000)
```

## Derive [​](life-cycle.html#derive)

Append new value to context directly **before validation**. It's stored in the same stack as **transform**.

Unlike **state** and **decorate** that assigned value before the server started. **derive** assigns a property when each request happens. Allowing us to extract a piece of information into a property instead.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .derive(({ headers }) => {
        const auth = headers['Authorization']

        return {
            bearer: auth?.startsWith('Bearer ') ? auth.slice(7) : null
        }
    })
    .get('/', ({ bearer }) => bearer)
```

Because **derive** is assigned once a new request starts, **derive** can access Request properties like **headers**, **query**, **body** where **store**, and **decorate** can't.

Unlike **state**, and **decorate**. Properties which assigned by **derive** is unique and not shared with another request.

### Queue [​](life-cycle.html#queue)

`derive` and `transform` is stored in the same queue.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .onTransform(() => {
        console.log(1)
    })
    .derive(() => {
        console.log(2)

        return {}
    })
```

The console should log as the following:

bash

```
1
2
```

## Before Handle [​](life-cycle.html#before-handle)

Execute after validation and before the main route handler.

Designed to provide a custom validation to provide a specific requirement before running the main handler.

If a value is returned, the route handler will be skipped.

It's recommended to use Before Handle in the following situations:

- Restricted access check: authorization, user sign-in
- Custom request requirement over data structure

#### Example [​](life-cycle.html#example-3)

Below is an example of using the before handle to check for user sign-in.

typescript

```
import { Elysia } from 'elysia'
import { validateSession } from './user'

new Elysia()
    .get('/', () => 'hi', {
        beforeHandle({ set, cookie: { session }, error }) {
            if (!validateSession(session.value)) return error(401)
        }
    })
    .listen(3000)
```

The response should be listed as follows:

Is signed inResponse❌Unauthorized✅Hi

### Guard [​](life-cycle.html#guard)

When we need to apply the same before handle to multiple routes, we can use `guard` to apply the same before handle to multiple routes.

typescript

```
import { Elysia } from 'elysia'
import { signUp, signIn, validateSession, isUserExists } from './user'

new Elysia()
    .guard(
        {
            beforeHandle({ set, cookie: { session }, error }) {
                if (!validateSession(session.value)) return error(401)
            }
        },
        (app) =>
            app
                .get('/user/:id', ({ body }) => signUp(body))
                .post('/profile', ({ body }) => signIn(body), {
                    beforeHandle: isUserExists
                })
    )
    .get('/', () => 'hi')
    .listen(3000)
```

## Resolve [​](life-cycle.html#resolve)

Append new value to context **after validation**. It's stored in the same stack as **beforeHandle**.

Resolve syntax is identical to [derive](life-cycle.html#derive), below is an example of retrieving a bearer header from the Authorization plugin.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
    .guard(
        {
            headers: t.Object({
                authorization: t.TemplateLiteral('Bearer ${string}')
            })
        },
        (app) =>
            app
                .resolve(({ headers: { authorization } }) => {
                    return {
                        bearer: authorization.split(' ')[1]
                    }
                })
                .get('/', ({ bearer }) => bearer)
    )
    .listen(3000)
```

Using `resolve` and `onBeforeHandle` is stored in the same queue.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .onBeforeHandle(() => {
        console.log(1)
    })
    .resolve(() => {
        console.log(2)

        return {}
    })
    .onBeforeHandle(() => {
        console.log(3)
    })
```

The console should log as the following:

bash

```
1
2
3
```

Same as **derive**, properties which assigned by **resolve** is unique and not shared with another request.

### Guard resolve [​](life-cycle.html#guard-resolve)

As resolve is not available in local hook, it's recommended to use guard to encapsulate the **resolve** event.

typescript

```
import { Elysia } from 'elysia'
import { isSignIn, findUserById } from './user'

new Elysia()
    .guard(
        {
            beforeHandle: isSignIn
        },
        (app) =>
            app
                .resolve(({ cookie: { session } }) => ({
                    userId: findUserById(session.value)
                }))
                .get('/profile', ({ userId }) => userId)
    )
    .listen(3000)
```

## After Handle [​](life-cycle.html#after-handle)

Execute after the main handler, for mapping a returned value of **before handle** and **route handler** into a proper response.

It's recommended to use After Handle in the following situations:

- Transform requests into a new value, eg. Compression, Event Stream
- Add custom headers based on the response value, eg. **Content-Type**

#### Example [​](life-cycle.html#example-4)

Below is an example of using the after handle to add HTML content type to response headers.

typescript

```
import { Elysia } from 'elysia'
import { isHtml } from '@elysiajs/html'

new Elysia()
    .get('/', () => '<h1>Hello World</h1>', {
        afterHandle({ response, set }) {
            if (isHtml(response))
                set.headers['content-type'] = 'text/html; charset=utf8'
        }
    })
    .get('/hi', () => '<h1>Hello World</h1>')
    .listen(3000)
```

The response should be listed as follows:

PathContent-Type/text/html; charset=utf8/hitext/plain; charset=utf8

### Returned Value [​](life-cycle.html#returned-value)

If a value is returned After Handle will use a return value as a new response value unless the value is **undefined**

The above example could be rewritten as the following:

typescript

```
import { Elysia } from 'elysia'
import { isHtml } from '@elysiajs/html'

new Elysia()
    .get('/', () => '<h1>Hello World</h1>', {
        afterHandle({ response, set }) {
            if (isHtml(response)) {
                set.headers['content-type'] = 'text/html; charset=utf8'
                return new Response(response)
            }
        }
    })
    .get('/hi', () => '<h1>Hello World</h1>')
    .listen(3000)
```

Unlike **beforeHandle**, after a value is returned from **afterHandle**, the iteration of afterHandle **will NOT be skipped.**

### Context [​](life-cycle.html#context-1)

`onAfterHandle` context extends from `Context` with the additional property of `response`, which is the response to return to the client.

The `onAfterHandle` context is based on the normal context and can be used like the normal context in route handlers.

## Map Response [​](life-cycle.html#map-response)

Executed just after **"afterHandle"**, designed to provide custom response mapping.

It's recommended to use transform for the following:

- Compression
- Map value into a Web Standard Response

#### Example [​](life-cycle.html#example-5)

Below is an example of using mapResponse to provide Response compression.

typescript

```
import { Elysia } from 'elysia'

const encoder = new TextEncoder()

new Elysia()
    .mapResponse(({ response, set }) => {
        const isJson = typeof response === 'object'

        const text = isJson
            ? JSON.stringify(response)
            : (response?.toString() ?? '')

        set.headers['Content-Encoding'] = 'gzip'

        return new Response(Bun.gzipSync(encoder.encode(text)), {
            headers: {
                'Content-Type': `${
                    isJson ? 'application/json' : 'text/plain'
                }; charset=utf-8`
            }
        })
    })
    .get('/text', () => 'mapResponse')
    .get('/json', () => ({ map: 'response' }))
    .listen(3000)
```

Like **parse** and **beforeHandle**, after a value is returned, the next iteration of **mapResponse** will be skipped.

Elysia will handle the merging process of **set.headers** from **mapResponse** automatically. We don't need to worry about appending **set.headers** to Response manually.

## On Error (Error Handling) [​](life-cycle.html#on-error-error-handling)

Designed for error-handling. It will be executed when an error is thrown in any life-cycle.

Its recommended to use on Error in the following situation:

- To provide custom error message
- Fail safe or an error handler or retrying a request
- Logging and analytic

#### Example [​](life-cycle.html#example-6)

Elysia catches all the errors thrown in the handler, classifies the error code, and pipes them to `onError` middleware.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .onError(({ code, error }) => {
        return new Response(error.toString())
    })
    .get('/', () => {
        throw new Error('Server is during maintenance')

        return 'unreachable'
    })
```

With `onError` we can catch and transform the error into a custom error message.

TIP

It's important that `onError` must be called before the handler we want to apply it to.

### Custom 404 message [​](life-cycle.html#custom-404-message)

For example, returning custom 404 messages:

typescript

```
import { Elysia, NotFoundError } from 'elysia'

new Elysia()
    .onError(({ code, error, set }) => {
        if (code === 'NOT_FOUND') return error(404, 'Not Found :(')
    })
    .post('/', () => {
        throw new NotFoundError()
    })
    .listen(3000)
```

### Context [​](life-cycle.html#context-2)

`onError` Context is extends from `Context` with additional properties of the following:

- **error**: A value that was thrown
- **code**: *Error Code*

### Error Code [​](life-cycle.html#error-code)

Elysia error code consists of:

- **NOT\_FOUND**
- **INTERNAL\_SERVER\_ERROR**
- **VALIDATION**
- **PARSE**
- **UNKNOWN**
- **number** (based on HTTP Status)

By default, the thrown error code is `UNKNOWN`.

TIP

If no error response is returned, the error will be returned using `error.name`.

### To Throw or To Return [​](life-cycle.html#to-throw-or-to-return)

`Elysia.error` is a shorthand for returning an error with a specific HTTP status code.

It could either be **return** or **throw** based on your specific needs.

- If an `error` is **throw**, it will be caught by `onError` middleware.
- If an `error` is **return**, it will be **NOT** caught by `onError` middleware.

See the following code:

typescript

```
import { Elysia, file } from 'elysia'

new Elysia()
    .onError(({ code, error, path }) => {
        if (code === 418) return 'caught'
    })
    .get('/throw', ({ error }) => {
        // This will be caught by onError
        throw error(418)
    })
    .get('/return', () => {
        // This will NOT be caught by onError
        return error(418)
    })
```

localhost/throw/return

GET

### Custom Error [​](life-cycle.html#custom-error)

Elysia supports custom error both in the type-level and implementation level.

To provide a custom error code, we can use `Elysia.error` to add a custom error code, helping us to easily classify and narrow down the error type for full type safety with auto-complete as the following:

typescript

```

import { 

Elysia






 } from 'elysia'


class 

MyError






 extends 

Error






 {

    constructor(public 

message






: string) {

        super(

message






)
    }
}


new 

Elysia






()

    .

error






({

        

MyError







    })

    .

onError






(({ 

code






, 

error






 }) => {

        switch (

code






) {
            // With auto-completion
            case 'MyError':
                // With type narrowing
                // Hover to see error is typed as `CustomError`

                return 

error







        }
    })

    .

get






('/', () => {

        throw new 

MyError






('Hello Error')
    })
```

Properties of `error` code is based on the properties of `error`, the said properties will be used to classify the error code.

### Local Error [​](life-cycle.html#local-error)

Same as others life-cycle, we provide an error into an [scope](plugin.html#scope) using guard:

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', () => 'Hello', {
        beforeHandle({ set, request: { headers }, error }) {
            if (!isSignIn(headers)) throw error(401)
        },
        error({ error }) {
            return 'Handled'
        }
    })
    .listen(3000)
```

## After Response [​](life-cycle.html#after-response)

Executed after the response sent to the client.

It's recommended to use **After Response** in the following situations:

- Clean up response
- Logging and analytics

#### Example [​](life-cycle.html#example-7)

Below is an example of using the response handle to check for user sign-in.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .onAfterResponse(() => {
        console.log('Response', performance.now())
    })
    .listen(3000)
```

Console should log as the following:

bash

```
Response 0.0000
Response 0.0001
Response 0.0002
```

### Response [​](life-cycle.html#response)

Similar to [Map Response](life-cycle.html#map-resonse), `afterResponse` also accept a `response` value.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
	.onAfterResponse(({ response }) => {
		console.log(response)
	})
	.get('/', () => 'Hello')
	.listen(3000)
```

`response` from `onAfterResponse`, is not a Web-Standard's `Response` but is a value that is returned from the handler.

To get a headers, and status returned from the handler, we can access `set` from the context.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
	.onAfterResponse(({ set }) => {
		console.log(set.status, set.headers)
	})
	.get('/', () => 'Hello')
	.listen(3000)
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/essential/life-cycle.md)

Last updated:

Pager

[Previous pageHandler](handler.html)

[Next pageValidation](validation.html)


=== bun-elysia-docs/elysiajs.com/essential/plugin.html ===
[Skip to content](plugin.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](route.html)

[Handler](handler.html)

[Life Cycle](life-cycle.html)

[Validation](validation.html)

[Plugin](plugin.html)

[Best Practice](best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Plugin [​](plugin.html#plugin)

Plugin is a pattern that decouples functionality into smaller parts. Creating reusable components for our web server.

Defining a plugin is to define a separate instance.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

    .

decorate






('plugin', 'hi')

    .

get






('/plugin', ({ 

plugin






 }) => 

plugin






)


const 

app






 = new 

Elysia






()

    .

use






(

plugin






)

    .

get






('/', ({ 

plugin






 }) => 

plugin






)

    .

listen






(3000)
```

We can use the plugin by passing an instance to **Elysia.use**.

localhost//plugin

GET

The plugin will inherit all properties of the plugin instance, including **state**, **decorate**, **derive**, **route**, **lifecycle**, etc.

Elysia will also handle the type inference automatically as well, so you can imagine as if you call all of the other instances on the main one.

TIP

Notice that the plugin doesn't contain **.listen**, because **.listen** will allocate a port for the usage, and we only want the main instance to allocate the port.

## Plugin [​](plugin.html#plugin-1)

Every Elysia instance can be a plugin.

We can decouple our logic into a new separate Elysia instance and use it as a plugin.

First, we define an instance in a difference file:

typescript

```
// plugin.ts

import { 

Elysia






 } from 'elysia'


export const 

plugin






 = new 

Elysia






()

    .

get






('/plugin', () => 'hi')
```

And then we import the instance into the main file:

typescript

```
import { Elysia } from 'elysia'
import { plugin } from './plugin'

const app = new Elysia()
    .use(plugin)
    .listen(3000)
```

### Config [​](plugin.html#config)

To make the plugin more useful, allowing customization via config is recommended.

You can create a function that accepts parameters that may change the behavior of the plugin to make it more reusable.

typescript

```
import { Elysia } from 'elysia'

const version = (version = 1) => new Elysia()
        .get('/version', version)

const app = new Elysia()
    .use(version(1))
    .listen(3000)
```

### Functional callback [​](plugin.html#functional-callback)

It's recommended to define a new plugin instance instead of using a function callback.

Functional callback allows us to access the existing property of the main instance. For example, checking if specific routes or stores existed.

To define a functional callback, create a function that accepts Elysia as a parameter.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

plugin






 = (

app






: 

Elysia






) => 

app








    .

state






('counter', 0)

    .

get






('/plugin', () => 'Hi')


const 

app






 = new 

Elysia






()

    .

use






(

plugin






)

    .

get






('/counter', ({ 

store






: { 

counter






 } }) => 

counter






)

    .

listen






(3000)
```

localhost/plugin/counter

GET

Once passed to `Elysia.use`, functional callback behaves as a normal plugin except the property is assigned directly to

TIP

You shall not worry about the performance difference between a functional callback and creating an instance.

Elysia can create 10k instances in a matter of milliseconds, the new Elysia instance has even better type inference performance than the functional callback.

## Plugin Deduplication [​](plugin.html#plugin-deduplication)

By default, Elysia will register any plugin and handle type definitions.

Some plugins may be used multiple times to provide type inference, resulting in duplication of setting initial values or routes.

Elysia avoids this by differentiating the instance by using **name** and **optional seeds** to help Elysia identify instance duplication:

typescript

```
import { Elysia } from 'elysia'

const plugin = <T extends string>(config: { prefix: T }) =>
    new Elysia({
        name: 'my-plugin', 
        seed: config, 
    })
    .get(`${config.prefix}/hi`, () => 'Hi')

const app = new Elysia()
    .use(
        plugin({
            prefix: '/v2'
        })
    )
    .listen(3000)
```

localhost/v2/hi

GET

Elysia will use **name** and **seed** to create a checksum to identify if the instance has been registered previously or not, if so, Elysia will skip the registration of the plugin.

If seed is not provided, Elysia will only use **name** to differentiate the instance. This means that the plugin is only registered once even if you registered it multiple times.

typescript

```
import { Elysia } from 'elysia'

const plugin = new Elysia({ name: 'plugin' })

const app = new Elysia()
    .use(plugin)
    .use(plugin)
    .use(plugin)
    .use(plugin)
    .listen(3000)
```

This allows Elysia to improve performance by reusing the registered plugins instead of processing the plugin over and over again.

TIP

Seed could be anything, varying from a string to a complex object or class.

If the provided value is class, Elysia will then try to use the `.toString` method to generate a checksum.

### Service Locator [​](plugin.html#service-locator)

When you apply multiple state and decorators plugin to an instance, the instance will gain type safety.

However, you may notice that when you are trying to use the decorated value in another instance without decorator, the type is missing.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

child






 = new 

Elysia






()
    // ❌ 'a' is missing

    .

get






('/', ({ a }) => 

a






)
Property 'a' does not exist on type '{ body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends number | keyof StatusMap, const T = Code extends 100 | ... 58 more ... | 511 ? { ...; }[Code] : Code>(cod...'.

const 

main






 = new 

Elysia






()

    .

decorate






('a', 'a')

    .

use






(

child






)
```

This is a TypeScript limitation; Elysia can only refer to the current instance.

Elysia introduces the **Service Locator** pattern to counteract this.

To put it simply, Elysia will lookup the plugin checksum and get the value or register a new one. Infer the type from the plugin.

Simply put, we need to provide the plugin reference for Elysia to find the service.

typescript

```

import { 

Elysia






 } from 'elysia'

// setup.ts

const 

setup






 = new 

Elysia






({ 

name






: 'setup' })

    .

decorate






('a', 'a')

// index.ts

const 

error






 = new 

Elysia






()

    .

get






('/', ({ a }) => 

a






)
Property 'a' does not exist on type '{ body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends number | keyof StatusMap, const T = Code extends 100 | ... 58 more ... | 511 ? { ...; }[Code] : Code>(cod...'.

const 

main






 = new 

Elysia






()

    .

use






(

setup






)

    .

get






('/', ({ 

a






 }) => 

a






)
```

localhost/

GET

## Guard [​](plugin.html#guard)

Guard allows us to apply hook and schema into multiple routes all at once.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

guard






(
        { 

            

body






: 

t






.

Object






({ 

                

username






: 

t






.

String






(), 

                

password






: 

t






.

String






() 
            }) 
        }, 

        (

app






) =>

            

app








                .

post






('/sign-up', ({ 

body






 }) => 

signUp






(

body






))

                .

post






('/sign-in', ({ 

body






 }) => 

signIn






(

body






), {

                    

beforeHandle






: 

isUserExists







                })
    )

    .

get






('/', 'hi')

    .

listen






(3000)
```

This code applies validation for `body` to both '/sign-in' and '/sign-up' instead of inlining the schema one by one but applies not to '/'.

We can summarize the route validation as the following:

PathHas validation/sign-up✅/sign-in✅/❌

Guard accepts the same parameter as inline hook, the only difference is that you can apply hook to multiple routes in the scope.

This means that the code above is translated into:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

post






('/sign-up', ({ 

body






 }) => 

signUp






(

body






), {

        

body






: 

t






.

Object






({

            

username






: 

t






.

String






(),

            

password






: 

t






.

String






()
        })
    })

    .

post






('/sign-in', ({ 

body






 }) => 

body






, {

        

beforeHandle






: 

isUserExists






,

        

body






: 

t






.

Object






({

            

username






: 

t






.

String






(),

            

password






: 

t






.

String






()
        })
    })

    .

get






('/', () => 'hi')

    .

listen






(3000)
```

### Grouped Guard [​](plugin.html#grouped-guard)

We can use a group with prefixes by providing 3 parameters to the group.

1. Prefix - Route prefix
2. Guard - Schema
3. Scope - Elysia app callback

With the same API as guard apply to the 2nd parameter, instead of nesting group and guard together.

Consider the following example:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

group






('/v1', (

app






) =>

        

app






.

guard






(
            {

                

body






: 

t






.

Literal






('Rikuhachima Aru')
            },

            (

app






) => 

app






.

post






('/student', ({ 

body






 }) => 

body






)
        )
    )

    .

listen






(3000)
```

From nested groupped guard, we may merge group and guard together by providing guard scope to 2nd parameter of group:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

group






(
        '/v1',

        (

app






) => 

app






.

guard






( 
        {

            

body






: 

t






.

Literal






('Rikuhachima Aru')
        },

        (

app






) => 

app






.

post






('/student', ({ 

body






 }) => 

body






)
        ) 
    )

    .

listen






(3000)
```

Which results in the follows syntax:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

group






(
        '/v1',
        {

            

body






: 

t






.

Literal






('Rikuhachima Aru')
        },

        (

app






) => 

app






.

post






('/student', ({ 

body






 }) => 

body






)
    )

    .

listen






(3000)
```

localhost/student

POST

## Scope [​](plugin.html#scope)

By default, hook and schema will apply to **current instance only**.

Elysia has an encapsulation scope for to prevent unintentional side effects.

Scope type is to specify the scope of hook whether is should be encapsulated or global.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

    .

derive






(() => {

        return { 

hi






: 'ok' }
    })

    .

get






('/child', ({ 

hi






 }) => 

hi






)


const 

main






 = new 

Elysia






()

    .

use






(

plugin






)
    // ⚠️ Hi is missing

    .

get






('/parent', ({ hi }) => 

hi






)
Property 'hi' does not exist on type '{ body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends number | keyof StatusMap, const T = Code extends 100 | ... 58 more ... | 511 ? { ...; }[Code] : Code>(cod...'.
```

From the above code, we can see that `hi` is missing from the parent instance because the scope is local by default if not specified, and will not apply to parent.

To apply the hook to the parent instance, we can use the `as` to specify scope of the hook.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

    .

derive






({ 

as






: 'scoped' }, () => { 

        return { 

hi






: 'ok' }
    })

    .

get






('/child', ({ 

hi






 }) => 

hi






)


const 

main






 = new 

Elysia






()

    .

use






(

plugin






)
    // ✅ Hi is now available

    .

get






('/parent', ({ 

hi






 }) => 

hi






)
```

### Scope level [​](plugin.html#scope-level)

Elysia has 3 levels of scope as the following: Scope type are as the following:

- **local** (default) - apply to only current instance and descendant only
- **scoped** - apply to parent, current instance and descendants
- **global** - apply to all instance that apply the plugin (all parents, current, and descendants)

Let's review what each scope type does by using the following example:

typescript

```
import { Elysia } from 'elysia'

// ? Value base on table value provided below
const type = 'local'

const child = new Elysia()
    .get('/child', 'hi')

const current = new Elysia()
    .onBeforeHandle({ as: type }, () => { 
        console.log('hi')
    })
    .use(child)
    .get('/current', 'hi')

const parent = new Elysia()
    .use(current)
    .get('/parent', 'hi')

const main = new Elysia()
    .use(parent)
    .get('/main', 'hi')
```

By changing the `type` value, the result should be as follows:

typechildcurrentparentmain'local'✅✅❌❌'scoped'✅✅✅❌'global'✅✅✅✅

### Scope cast [​](plugin.html#scope-cast)

To apply hook to parent may use one of the following:

1. `inline as` apply only to a single hook
2. `guard as` apply to all hook in a guard
3. `instance as` apply to all hook in an instance

### 1. Inline as [​](plugin.html#_1-inline-as)

Every event listener will accept `as` parameter to specify the scope of the hook.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

    .

derive






({ 

as






: 'scoped' }, () => { 

        return { 

hi






: 'ok' }
    })

    .

get






('/child', ({ 

hi






 }) => 

hi






)


const 

main






 = new 

Elysia






()

    .

use






(

plugin






)
    // ✅ Hi is now available

    .

get






('/parent', ({ 

hi






 }) => 

hi






)
```

However, this method is apply to only a single hook, and may not be suitable for multiple hooks.

### 2. Guard as [​](plugin.html#_2-guard-as)

Every event listener will accept `as` parameter to specify the scope of the hook.

typescript

```
import { Elysia, t } from 'elysia'

const plugin = new Elysia()
	.guard({
		as: 'scoped', 
		response: t.String(),
		beforeHandle() {
			console.log('ok')
		}
	})
    .get('/child', 'ok')

const main = new Elysia()
    .use(plugin)
    .get('/parent', 'hello')
```

Guard alllowing us to apply `schema` and `hook` to multiple routes all at once while specifying the scope.

However, it doesn't support `derive` and `resolve` method.

### 3. Instance as [​](plugin.html#_3-instance-as)

`as` will read all hooks and schema scope of the current instance, modify.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

    .

derive






(() => { 

        return { 

hi






: 'ok' }
    })

    .

get






('/child', ({ 

hi






 }) => 

hi






)

    .

as






('plugin')


const 

main






 = new 

Elysia






()

    .

use






(

plugin






)
    // ✅ Hi is now available

    .

get






('/parent', ({ 

hi






 }) => 

hi






)
```

Sometimes we want to reapply plugin to parent instance as well but as it's limited by `scoped` mechanism, it's limited to 1 parent only.

To apply to the parent instance, we need to **lift the scope up** to the parent instance, and `as` is the perfect method to do so.

Which means if you have `local` scope, and want to apply it to the parent instance, you can use `as('plugin')` to lift it up.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

plugin






 = new 

Elysia






()

	.

guard






({

		

response






: 

t






.

String






()
	})

	.

onBeforeHandle






(() => { 

console






.

log






('called') })

	.

get






('/ok', () => 'ok')

	.

get






('/not-ok', () => 1)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, TModule<{}, {}>, "/not-ok">, MergeSchema<{ body: unknown; headers: unknown; query: unknown; params: {}; cookie: unknown; response: { 200: string; }; }, MergeSchema<...>, "">, "">, { ...; } & { ...; }, "/not-ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
	.

as






('plugin') 


const 

instance






 = new 

Elysia






()

	.

use






(

plugin






)

	.

get






('/no-ok-parent', () => 2)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>, "/no-ok-parent">, MergeSchema<...>, "">, { ...; } & { ...; }, "/no-ok-parent">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
	.

as






('plugin') 


const 

parent






 = new 

Elysia






()

	.

use






(

instance






)
	// This now error because `scoped` is lifted up to parent

	.

get






('/ok', () => 3)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, MergeTypeModule<TModule<{}, {}>, MergeTypeModule<TModule<{}, {}>, TModule<{}, {}>>>, "/ok">, MergeSchema<...>, "">, { ...; } & { ...; }, "/ok">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.
```

### Descendant [​](plugin.html#descendant)

By default plugin will **apply hook to itself and descendants** only.

If the hook is registered in a plugin, instances that inherit the plugin will **NOT** inherit hooks and schema.

typescript

```
import { Elysia } from 'elysia'

const plugin = new Elysia()
    .onBeforeHandle(() => {
        console.log('hi')
    })
    .get('/child', 'log hi')

const main = new Elysia()
    .use(plugin)
    .get('/parent', 'not log hi')
```

To apply hook to globally, we need to specify hook as global.

typescript

```
import { Elysia } from 'elysia'

const plugin = new Elysia()
    .onBeforeHandle(() => {
        return 'hi'
    })
    .get('/child', 'child')
    .as('plugin')

const main = new Elysia()
    .use(plugin)
    .get('/parent', 'parent')
```

localhost/plugin/parent

GET

## Lazy Load [​](plugin.html#lazy-load)

Modules are eagerly loaded by default.

Elysia loads all modules then registers and indexes all of them before starting the server. This enforces that all the modules have loaded before it starts accepting requests.

While this is fine for most applications, it may become a bottleneck for a server running in a serverless environment or an edge function, in which the startup time is important.

Lazy-loading can help decrease startup time by deferring modules to be gradually indexed after the server start.

Lazy-loading modules are a good option when some modules are heavy and importing startup time is crucial.

By default, any async plugin without await is treated as a deferred module and the import statement as a lazy-loading module.

Both will be registered after the server is started.

### Deferred Module [​](plugin.html#deferred-module)

The deferred module is an async plugin that can be registered after the server is started.

typescript

```
// plugin.ts
import { Elysia, file } from 'elysia'
import { loadAllFiles } from './files'

export const loadStatic = async (app: Elysia) => {
    const files = await loadAllFiles()

    files.forEach((asset) => app
        .get(asset, file(file))
    )

    return app
}
```

And in the main file:

typescript

```
import { Elysia } from 'elysia'
import { loadStatic } from './plugin'

const app = new Elysia()
    .use(loadStatic)
```

Elysia static plugin is also a deferred module, as it loads files and registers files path asynchronously.

### Lazy Load Module [​](plugin.html#lazy-load-module)

Same as the async plugin, the lazy-load module will be registered after the server is started.

A lazy-load module can be both sync or async function, as long as the module is used with `import` the module will be lazy-loaded.

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .use(import('./plugin'))
```

Using module lazy-loading is recommended when the module is computationally heavy and/or blocking.

To ensure module registration before the server starts, we can use `await` on the deferred module.

### Testing [​](plugin.html#testing)

In a test environment, we can use `await app.modules` to wait for deferred and lazy-loading modules.

typescript

```
import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'

describe('Modules', () => {
    it('inline async', async () => {
        const app = new Elysia()
              .use(async (app) =>
                  app.get('/async', () => 'async')
              )

        await app.modules

        const res = await app
            .handle(new Request('http://localhost/async'))
            .then((r) => r.text())

        expect(res).toBe('async')
    })
})
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/essential/plugin.md)

Last updated:

Pager

[Previous pageValidation](validation.html)

[Next pageBest Practice](best-practice.html)


=== bun-elysia-docs/elysiajs.com/essential/route.html ===
[Skip to content](route.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](route.html)

[Handler](handler.html)

[Life Cycle](life-cycle.html)

[Validation](validation.html)

[Plugin](plugin.html)

[Best Practice](best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Routing [​](route.html#routing)

Web servers use the request's **path and HTTP method** to look up the correct resource, refers as **"routing"**.

We can define a route by calling a **method named after HTTP verbs**, passing a path and a function to execute when matched.

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', 'hello')
    .get('/hi', 'hi')
    .listen(3000)
```

We can access the web server by going to [**http://localhost:3000**](http://localhost:3000)

By default, web browsers will send a GET method when visiting a page.

localhost//hi

GET

TIP

Using an interactive browser above, hover on a blue highlight area to see difference result between each path

## Path type [​](route.html#path-type)

Path in Elysia can be grouped into 3 types:

- **static paths** - static string to locate the resource
- **dynamic paths** - segment can be any value
- **wildcards** - path until a specific point can be anything

You can use all of the path types together to compose a behavior for your web server.

The priorities are as follows:

1. static paths
2. dynamic paths
3. wildcards

If the path is resolved as the static wild dynamic path is presented, Elysia will resolve the static path rather than the dynamic path

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/id/1', 'static path')
    .get('/id/:id', 'dynamic path')
    .get('/id/*', 'wildcard path')
    .listen(3000)
```

localhost/id/1/id/2/id/2/a

GET

Here the server will respond as follows:

PathResponse/id/1static path/id/2dynamic path/id/2/awildcard path

## Static Path [​](route.html#static-path)

A path or pathname is an identifier to locate resources of a server.

bash

```
http://localhost:/path/page
```

Elysia uses the path and method to look up the correct resource.

![URL Representation](url-object.svg)

A path starts after the origin. Prefix with **/** and ends before search query **(?)**

We can categorize the URL and path as follows:

URLPath[http://site.com/](https://site.com/)/[http://site.com/hello](https://site.com/hello)/hello[http://site.com/hello/world](https://site.com/hello/world)/hello/world[http://site.com/hello?name=salt](https://site.com/hello?name=salt)/hello[http://site.com/hello#title](https://site.com/hello#title)/hello

TIP

If the path is not specified, the browser and web server will treat the path as '/' as a default value.

Elysia will look up each request for [route](route.html) and response using [handler](handler.html) function.

## Dynamic path [​](route.html#dynamic-path)

URLs can be both static and dynamic.

Static paths are hardcoded strings that can be used to locate resources of the server, while dynamic paths match some part and captures the value to extract extra information.

For instance, we can extract the user ID from the pathname. For example:

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/id/:id', ({ 

params






: { 

id






 } }) => 

id






)

    .

listen






(3000)
```

Here dynamic path is created with `/id/:id` which tells Elysia to match any path up until `/id`. What comes after that is then stored as **params** object.

localhost/id/1/id/123/id/anything/id/id/anything/test

GET

1

When requested, the server should return the response as follows:

PathResponse/id/11/id/123123/id/anythinganything/id/anything?name=saltanything/idNot Found/id/anything/restNot Found

Dynamic paths are great to include things like IDs, which then can be used later.

We refer to the named variable path as **path parameter** or **params** for short.

## Segment [​](route.html#segment)

URL segments are each path that is composed into a full path.

Segments are separated by `/`. ![Representation of URL segments](url-segment.webp)

Path parameters in Elysia are represented by prefixing a segment with ':' followed by a name. ![Representation of path parameter](path-parameter.webp)

Path parameters allow Elysia to capture a specific segment of a URL.

The named path parameter will then be stored in `Context.params`.

RoutePathParams/id/:id/id/1id=1/id/:id/id/hiid=hi/id/:name/id/hiname=hi

## Multiple path parameters [​](route.html#multiple-path-parameters)

You can have as many path parameters as you like, which will then be stored into a `params` object.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/id/:id', ({ 

params






: { 

id






 } }) => 

id






)

    .

get






('/id/:id/:name', ({ 

params






: { 

id






, 

name






 } }) => 

id






 + ' ' + 

name






)

    .

listen






(3000)
```

localhost/id/1/id/123/id/anything/id/id/anything/rest

GET

1

The server will respond as follows:

PathResponse/id/11/id/123123/id/anythinganything/id/anything?name=saltanything/idNot Found/id/anything/restanything rest

## Optional path parameters [​](route.html#optional-path-parameters)

Sometime we might want a static and dynamic path to resolve the same handler.

We can make a path parameter optional by adding a question mark `?` after the parameter name.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/id/:id?', ({ 

params






: { 

id






 } }) => `id ${

id






}`)

    .

listen






(3000)
```

localhost/id/id/1

GET

The server will respond as follows:

PathResponse/idid undefined/id/1id 1

## Wildcards [​](route.html#wildcards)

Dynamic paths allow capturing certain segments of the URL.

However, when you need a value of the path to be more dynamic and want to capture the rest of the URL segment, a wildcard can be used.

Wildcards can capture the value after segment regardless of amount by using "\*".

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/id/*', ({ 

params






 }) => 

params






['*'])

    .

listen






(3000)
```

localhost/id/1/id/123/id/anything/id/id/anything/rest

GET

1

In this case the server will respond as follows:

PathResponse/id/11/id/123123/id/anythinganything/id/anything?name=saltanything/idNot Found/id/anything/restanything/rest

Wildcards are useful for capturing a path until a specific point.

TIP

You can use a wildcard with a path parameter.

## HTTP Verb [​](route.html#http-verb)

HTTP defines a set of request methods to indicate the desired action to be performed for a given resource

There are several HTTP verbs, but the most common ones are:

### GET [​](route.html#get)

Requests using GET should only retrieve data.

### POST [​](route.html#post)

Submits a payload to the specified resource, often causing state change or side effect.

### PUT [​](route.html#put)

Replaces all current representations of the target resource using the request's payload.

### PATCH [​](route.html#patch)

Applies partial modifications to a resource.

### DELETE [​](route.html#delete)

Deletes the specified resource.

* * *

To handle each of the different verbs, Elysia has a built-in API for several HTTP verbs by default, similar to `Elysia.get`

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', 'hello')
    .post('/hi', 'hi')
    .listen(3000)
```

localhost//hi

GET

Elysia HTTP methods accepts the following parameters:

- **path**: Pathname
- **function**: Function to respond to the client
- **hook**: Additional metadata

You can read more about the HTTP methods on [HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

## Custom Method [​](route.html#custom-method)

We can accept custom HTTP Methods with `Elysia.route`.

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/get', 'hello')
    .post('/post', 'hi')
    .route('M-SEARCH', '/m-search', 'connect') 
    .listen(3000)
```

localhost/get/post/m-search

GET

**Elysia.route** accepts the following:

- **method**: HTTP Verb
- **path**: Pathname
- **function**: Function to response to the client
- **hook**: Additional metadata

When navigating to each method, you should see the results as the following:

PathMethodResult/GEThello/POSThi/M-SEARCHconnect

TIP

Based on [RFC 7231](https://www.rfc-editor.org/rfc/rfc7231#section-4.1), HTTP Verb is case-sensitive.

It's recommended to use the UPPERCASE convention for defining a custom HTTP Verb with Elysia.

## Elysia.all [​](route.html#elysia-all)

Elysia provides an `Elysia.all` for handling any HTTP method for a specified path using the same API like **Elysia.get** and **Elysia.post**

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .all('/', 'hi')
    .listen(3000)
```

localhost//

GET

Any HTTP method that matches the path, will be handled as follows:

PathMethodResult/GEThi/POSThi/DELETEhi

## Handle [​](route.html#handle)

Most developers use REST clients like Postman, Insomnia or Hoppscotch to test their API.

However, Elysia can be programmatically test using `Elysia.handle`.

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', 'hello')
    .post('/hi', 'hi')
    .listen(3000)

app.handle(new Request('http://localhost/')).then(console.log)
```

**Elysia.handle** is a function to process an actual request sent to the server.

TIP

Unlike unit test's mock, **you can expect it to behave like an actual request** sent to the server.

But also useful for simulating or creating unit tests.

## 404 [​](route.html#_404)

If no path matches the defined routes, Elysia will pass the request to [error](life-cycle.html#on-error) life cycle before returning a **"NOT\_FOUND"** with an HTTP status of 404.

We can handle a custom 404 error by returning a value from `error` life cycle like this:

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

get






('/', 'hi')

    .

onError






(({ 

code






 }) => {

        if (

code






 === 'NOT_FOUND') {
            return 'Route not found :('
        }
    })

    .

listen






(3000)
```

localhost//hi

GET

When navigating to your web server, you should see the result as follows:

PathMethodResult/GEThi/POSTRoute not found :(/hiGETRoute not found :(

You can learn more about life cycle and error handling in [Life Cycle Events](life-cycle.html#events) and [Error Handling](life-cycle.html#on-error).

TIP

HTTP Status is used to indicate the type of response. By default if everything is correct, the server will return a '200 OK' status code (If a route matches and there is no error, Elysia will return 200 as default)

If the server fails to find any route to handle, like in this case, then the server shall return a '404 NOT FOUND' status code.

## Group [​](route.html#group)

When creating a web server, you would often have multiple routes sharing the same prefix:

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .post('/user/sign-in', 'Sign in')
    .post('/user/sign-up', 'Sign up')
    .post('/user/profile', 'Profile')
    .listen(3000)
```

localhost/user/sign-in/user/sign-up/user/profile

POST

This can be improved with `Elysia.group`, allowing us to apply prefixes to multiple routes at the same time by grouping them together:

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

group






('/user', (

app






) =>

        

app








            .

post






('/sign-in', 'Sign in')

            .

post






('/sign-up', 'Sign up')

            .

post






('/profile', 'Profile')
    )

    .

listen






(3000)
```

localhost/user/sign-in/user/sign-up/user/profile

POST

This code behaves the same as our first example and should be structured as follows:

PathResult/user/sign-inSign in/user/sign-upSign up/user/profileProfile

`.group()` can also accept an optional guard parameter to reduce boilerplate of using groups and guards together:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

group






(
        '/user',
        {

            

body






: 

t






.

Literal






('Rikuhachima Aru')
        },

        (

app






) => 

app








            .

post






('/sign-in', 'Sign in')

            .

post






('/sign-up', 'Sign up')

            .

post






('/profile', 'Profile')
    )

    .

listen






(3000)
```

You may find more information about grouped guards in [scope](plugin.html#scope).

### Prefix [​](route.html#prefix)

We can separate a group into a separate plugin instance to reduce nesting by providing a **prefix** to the constructor.

typescript

```
import { Elysia } from 'elysia'

const users = new Elysia({ prefix: '/user' })
    .post('/sign-in', 'Sign in')
    .post('/sign-up', 'Sign up')
    .post('/profile', 'Profile')

new Elysia()
    .use(users)
    .get('/', 'hello world')
    .listen(3000)
```

localhost//user/sign-in/user/sign-up/user/profile

GET

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/essential/route.md)

Last updated:

Pager

[Previous pageTable of Content](../table-of-content.html)

[Next pageHandler](handler.html)


=== bun-elysia-docs/elysiajs.com/essential/structure.html ===
[Skip to content](structure.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](route.html)

[Handler](handler.html)

[Life Cycle](life-cycle.html)

[Validation](validation.html)

[Plugin](plugin.html)

[Best Practice](best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

#### This page has been moved to [best practice](best-practice.html) [​](structure.html#this-page-has-been-moved-to-best-practice)

# Structure [​](structure.html#structure)

Elysia is a pattern-agnostic framework, leaving the decision of which coding patterns to use up to you and your team.

However, there are several concern from trying to adapt an MVC pattern [(Model-View-Controller)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) with Elysia, and found it's hard to decouple and handle types.

This page is a guide to on how to follows Elysia structure best practice combined with MVC pattern but can be adapted to any coding pattern you like.

## Method Chaining [​](structure.html#method-chaining)

Elysia code should always use **method chaining**.

As Elysia type system is complex, every methods in Elysia returns a new type reference.

**This is important** to ensure type integrity and inference.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

state






('build', 1)
    // Store is strictly typed

    .

get






('/', ({ 

store






: { 

build






 } }) => 

build






)

    .

listen






(3000)
```

In the code above **state** returns a new **ElysiaInstance** type, adding a `build` type.

### ❌ Don't: Use without method chaining [​](structure.html#%E2%9D%8C-don-t-use-without-method-chaining)

Without using method chaining, Elysia doesn't save these new types, leading to no type inference.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()




app






.

state






('build', 1)




app






.

get






('/', ({ 

store






: { build } }) => 

build






)
Property 'build' does not exist on type '{}'.



app






.

listen






(3000)
```

We recommend to **always use method chaining** to provide an accurate type inference.

## Controller [​](structure.html#controller)

> 1 Elysia instance = 1 controller

Elysia does a lot to ensure type integrity, if you pass an entire `Context` type to a controller, these might be the problems:

1. Elysia type is complex and heavily depends on plugin and multiple level of chaining.
2. Hard to type, Elysia type could change at anytime, especially with decorators, and store
3. Type casting may lead to a loss of type integrity or an inability to ensure consistency between types and runtime code.
4. This makes it more challenging for [Sucrose](../blog/elysia-10.html#sucrose) *(Elysia's "kind of" compiler)* to statically analyze your code

### ❌ Don't: Create a separate controller [​](structure.html#%E2%9D%8C-don-t-create-a-separate-controller)

Don't create a separate controller, use Elysia itself as a controller instead:

typescript

```
import { Elysia, t, type Context } from 'elysia'

abstract class Controller {
    static root(context: Context) {
        return Service.doStuff(context.stuff)
    }
}

// ❌ Don't
new Elysia()
    .get('/', Controller.hi)
```

By passing an entire `Controller.method` to Elysia is an equivalent of having 2 controllers passing data back and forth. It's against the design of framework and MVC pattern itself.

### ✅ Do: Use Elysia as a controller [​](structure.html#%E2%9C%85-do-use-elysia-as-a-controller)

Instead treat an Elysia instance as a controller itself instead.

typescript

```
import { Elysia } from 'elysia'
import { Service } from './service'

new Elysia()
    .get('/', ({ stuff }) => {
        Service.doStuff(stuff)
    })
```

## Service [​](structure.html#service)

Service is a set of utility/helper functions decoupled as a business logic to use in a module/controller, in our case, an Elysia instance.

Any technical logic that can be decoupled from controller may live inside a **Service**.

There're 2 types of service in Elysia:

1. Non-request dependent service
2. Request dependent service

### ✅ Do: Non-request dependent service [​](structure.html#%E2%9C%85-do-non-request-dependent-service)

This kind of service doesn't need to access any property from the request or `Context`, and can be initiated as a static class same as usual MVC service pattern.

typescript

```
import { Elysia, t } from 'elysia'

abstract class Service {
    static fibo(number: number): number {
        if(number < 2)
            return number

        return Service.fibo(number - 1) + Service.fibo(number - 2)
    }
}

new Elysia()
    .get('/fibo', ({ body }) => {
        return Service.fibo(body)
    }, {
        body: t.Numeric()
    })
```

If your service doesn't need to store a property, you may use `abstract class` and `static` instead to avoid allocating class instance.

### Request Dependent Service [​](structure.html#request-dependent-service)

This kind of service may require some property from the request, and should be **initiated as an Elysia instance**.

### ❌ Don't: Pass entire `Context` to a service [​](structure.html#%E2%9D%8C-don-t-pass-entire-context-to-a-service)

**Context is a highly dynamic type** that can be inferred from Elysia instance.

Do not pass an entire `Context` to a service, instead use object destructuring to extract what you need and pass it to the service.

typescript

```
import type { Context } from 'elysia'

class AuthService {
	constructor() {}

	// ❌ Don't do this
	isSignIn({ cookie: { session } }: Context) {
		if (session.value)
			return error(401)
	}
}
```

As Elysia type is complex, and heavily depends on plugin and multiple level of chaining, it can be challenging to manually type as it's highly dynamic.

### ✅ Do: Use Elysia instance as a service [​](structure.html#%E2%9C%85-do-use-elysia-instance-as-a-service)

We recommended to use Elysia instance as a service to ensure type integrity and inference:

typescript

```
import { Elysia } from 'elysia'

// ✅ Do
const AuthService = new Elysia({ name: 'Service.Auth' })
    .derive({ as: 'scoped' }, ({ cookie: { session } }) => ({
    	// This is equivalent to dependency injection
        Auth: {
            user: session.value
        }
    }))
    .macro(({ onBeforeHandle }) => ({
     	// This is declaring a service method
        isSignIn(value: boolean) {
            onBeforeHandle(({ Auth, error }) => {
                if (!Auth?.user || !Auth.user) return error(401)
            })
        }
    }))

const UserController = new Elysia()
    .use(AuthService)
    .get('/profile', ({ Auth: { user } }) => user, {
    	isSignIn: true
    })
```

TIP

Elysia handle [plugin deduplication](plugin.html#plugin-deduplication) by default so you don't have to worry about performance, as it's going to be Singleton if you specified a **"name"** property.

### ⚠️ Infers Context from Elysia instance [​](structure.html#%E2%9A%A0%EF%B8%8F-infers-context-from-elysia-instance)

In case of **absolute necessity**, you may infer the `Context` type from the Elysia instance itself:

typescript

```
import { Elysia, type InferContext } from 'elysia'

const setup = new Elysia()
	.state('a', 'a')
	.decorate('b', 'b')

class AuthService {
	constructor() {}

	// ✅ Do
	isSignIn({ cookie: { session } }: InferContext<typeof setup>) {
		if (session.value)
			return error(401)
	}
}
```

However we recommend to avoid this if possible, and use [Elysia as a service](https://elysiajs.com/essential/%E2%9C%85-do-use-elysia-instance-as-a-service.html) instead.

You may find more about [InferContext](handler.html#infercontext) in [Essential: Handler](handler.html).

## Model [​](structure.html#model)

Model or [DTO (Data Transfer Object)](https://en.wikipedia.org/wiki/Data_transfer_object) is handle by [Elysia.t (Validation)](https://elysiajs.com/validation/overview.html#data-validation).

Elysia has a validation system built-in which can infers type from your code and validate it at runtime.

### ❌ Don't: Declare a class instance as a model [​](structure.html#%E2%9D%8C-don-t-declare-a-class-instance-as-a-model)

Do not declare a class instance as a model:

typescript

```
// ❌ Don't
class CustomBody {
	username: string
	password: string

	constructor(username: string, password: string) {
		this.username = username
		this.password = password
	}
}

// ❌ Don't
interface ICustomBody {
	username: string
	password: string
}
```

### ✅ Do: Use Elysia's validation system [​](structure.html#%E2%9C%85-do-use-elysia-s-validation-system)

Instead of declaring a class or interface, use Elysia's validation system to define a model:

typescript

```
// ✅ Do

import { 

Elysia






, 

t






 } from 'elysia'


const 

customBody






 = 

t






.

Object






({

	

username






: 

t






.

String






(),

	

password






: 

t






.

String






()
})

// Optional if you want to get the type of the model
// Usually if we didn't use the type, as it's already inferred by Elysia

type 

CustomBody






 = typeof 

customBody






.

static











export { 

customBody






 }
```

We can get type of model by using `typeof` with `.static` property from the model.

Then you can use the `CustomBody` type to infer the type of the request body.

typescript

```
// ✅ Do

new 

Elysia






()

	.

post






('/login', ({ 

body






 }) => {

		return 

body







	}, {

		

body






: 

customBody







	})
```

### ❌ Don't: Declare type separate from the model [​](structure.html#%E2%9D%8C-don-t-declare-type-separate-from-the-model)

Do not declare a type separate from the model, instead use `typeof` with `.static` property to get the type of the model.

typescript

```
// ❌ Don't
import { Elysia, t } from 'elysia'

const customBody = t.Object({
	username: t.String(),
	password: t.String()
})

type CustomBody = {
	username: string
	password: string
}

// ✅ Do
const customBody = t.Object({
	username: t.String(),
	password: t.String()
})

type customBody = typeof customBody.static
```

### Group [​](structure.html#group)

You can group multiple models into a single object to make it more organized.

typescript

```
import { Elysia, t } from 'elysia'

export const AuthModel = {
	sign: t.Object({
		username: t.String(),
		password: t.String()
	})
}
```

### Model Injection [​](structure.html#model-injection)

Though this is optional, if you are strictly following MVC pattern, you may want to inject like a service into a controller. We recommended using [Elysia reference model](https://elysiajs.com/validation/reference-model.html#reference-model)

Using Elysia's model reference

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

customBody






 = 

t






.

Object






({

	

username






: 

t






.

String






(),

	

password






: 

t






.

String






()
})


const 

AuthModel






 = new 

Elysia






()

    .

model






({

        'auth.sign': 

customBody







    })


const 

UserController






 = new 

Elysia






({ 

prefix






: '/auth' })

    .

use






(

AuthModel






)

    .

post






('/sign-in', async ({ 

body






, 

cookie






: { 

session






 } }) => {

        return true
    }, {

        

body






: 'auth.sign'
    })
```

This approach provide several benefits:

1. Allow us to name a model and provide auto-completion.
2. Modify schema for later usage, or perform [remapping](https://elysiajs.com/patterns/remapping.html#remapping).
3. Show up as "models" in OpenAPI compliance client, eg. Swagger.
4. Improve TypeScript inference speed as model type will be cached during registration.

* * *

As mentioned, Elysia is a pattern-agnostic framework, and we only provide a recommendation guide for handling Elysia with the MVC pattern.

It’s entirely up to you and your team whether to follow this recommendation based on your preferences and agreement.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/essential/structure.md)

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/essential/validation.html ===
[Skip to content](validation.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](route.html)

[Handler](handler.html)

[Life Cycle](life-cycle.html)

[Validation](validation.html)

[Plugin](plugin.html)

[Best Practice](best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Validation [​](validation.html#validation)

The point of creating an API server is to take an input and process it.

JavaScript allow any data to be any type. Elysia provide a tool to validate data out of to box to ensure that the data is in the correct format.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

get






('/id/:id', ({ 

params






: { 

id






 } }) => 

id






, {

        

params






: 

t






.

Object






({

            

id






: 

t






.

Number






()
        })
    })

    .

listen






(3000)
```

### TypeBox [​](validation.html#typebox)

**Elysia.t**, a schema builder based on [TypeBox](https://github.com/sinclairzx81/typebox) that provide type-safety on both runtime, compile-time, and OpenAPI schema for generating OpenAPI/Swagger documentation.

TypeBox is a very fast, lightweight, and type-safe runtime validation library for TypeScript. Elysia extends and customize the default behavior of TypeBox to match for server-side validation.

We believe that an integration like this should take care of the framework by default instead of relying on the user end to set up a custom type on every project.

## Schema type [​](validation.html#schema-type)

Elysia supports declarative schema with the following types:

[**Body**  
\
Validate an incoming HTTP Message](validation.html#body)

[**Query**  
\
Query string or URL parameter](validation.html#query)

[**Params**  
\
Path parameters](validation.html#params)

[**Headers**  
\
Headers of the request](validation.html#headers)

[**Cookie**  
\
Cookie of the request](validation.html#cookie)

[**Response**  
\
Response of the request](validation.html#response)

* * *

These properties should be provided as the third argument of the route handler to validate the incoming request.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
    .get('/id/:id', () => 'Hello World!', {
        query: t.Object({
            name: t.String()
        }),
        params: t.Object({
            id: t.Number()
        })
    })
    .listen(3000)
```

localhost/none/query

GET

The response should as follows:

URLQueryParams/id/a❌❌/id/1?name=Elysia✅✅/id/1?alias=Elysia❌✅/id/a?name=Elysia✅❌/id/a?alias=Elysia❌❌

When schema is provided, the type will be inferred from the schema automatically, and generate an OpenAPI type for Swagger documentation generation, leaving out the redundant task of providing type manually.

## Body [​](validation.html#body)

An incoming [HTTP Message](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) is the data sent to the server. It can be in the form of JSON, form-data, or any other format.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

post






('/body', ({ 

body






 }) => 

body






, {





		

body






: 

t






.

Object






({

			

name






: 

t






.

String






()
		})
	})

	.

listen






(3000)
```

The validation should be as follows:

BodyValidation{ name: 'Elysia' }✅{ name: 1 }❌{ alias: 'Elysia' }❌`undefined`❌

Elysia disabled body-parser for **GET** and **HEAD** message by default, following the specs of HTTP/1.1 [RFC2616](https://www.rfc-editor.org/rfc/rfc2616#section-4.3)

> If the request method does not include defined semantics for an entity-body, then the message-body SHOULD be ignored when handling the request.

Most browsers disable the attachment of the body by default for **GET** and **HEAD** method.

### Specs [​](validation.html#specs)

Validate an incoming [HTTP Message](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) (or body).

These messages are additional messages for the webserver to process.

The body is provided as same as `body` in `fetch` API. The content type should be set accordingly to the defined body.

typescript

```
fetch('https://elysiajs.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'Elysia'
    })
})
```

### File [​](validation.html#file)

File is a special type of body that can be used to upload files.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

post






('/body', ({ 

body






 }) => 

body






, {






		

body






: 

t






.

Object






({

			

file






: 

t






.

File






(),

			

multipleFiles






: 

t






.

Files






()
		})
	})

	.

listen






(3000)
```

By providing a file type, Elysia will automatically assume that content-type is `multipart/form-data`.

## Query [​](validation.html#query)

Query is the data sent through the URL. It can be in the form of `?key=value`.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

get






('/query', ({ 

query






 }) => 

query






, {





		

query






: 

t






.

Object






({

			

name






: 

t






.

String






()
		})
	})

	.

listen






(3000)
```

Query must be provided in the form of an object.

The validation should be as follows:

QueryValidation/?name=Elysia✅/?name=1✅/?alias=Elysia❌/?name=ElysiaJS&amp;alias=Elysia✅/❌

### Specs [​](validation.html#specs-1)

A query string is a part of the URL that starts with **?** and can contain one or more query parameters, which are key-value pairs used to convey additional information to the server, usually for customized behavior like filter or search.

![URL Object](url-object.svg)

Query is provided after the **?** in Fetch API.

typescript

```
fetch('https://elysiajs.com/?name=Elysia')
```

When specifying query parameters, it's crucial to understand that all query parameter values must be represented as strings. This is due to how they are encoded and appended to the URL.

## Params [​](validation.html#params)

Params or path parameters are the data sent through the URL path.

It can be in the form of `/key`.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

get






('/id/:id', ({ 

params






 }) => 

params






, {





		

params






: 

t






.

Object






({

			

id






: 

t






.

Number






()
		})
	})
```

localhost/id/1/id/a

GET

Params must be provided in the form of an object.

The validation should be as follows:

URLValidation/id/1✅/id/a❌

### Specs [​](validation.html#specs-2)

Path parameter (not to confused with querystring or query parameter).

**This field is usually not needed as Elysia can infer types from path parameters automatically**, unless a need for specific value pattern is need, for example numeric value or template literal pattern.

typescript

```
fetch('https://elysiajs.com/id/1')
```

### Params type inference [​](validation.html#params-type-inference)

If params schema is not provided, Elysia will automatically infer type as string automatically.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

get






('/id/:id', ({ 

params






 }) => 

params






)
```

## Headers [​](validation.html#headers)

Header is the data sent through the request's header.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

get






('/headers', ({ 

headers






 }) => 

headers






, {





		

headers






: 

t






.

Object






({

			

authorization






: 

t






.

String






()
		})
	})
```

Unlike other types, headers has `additionalProperties` set to `true` by default.

This means that headers can have any key-value pair, but the value must match the schema.

### Specs [​](validation.html#specs-3)

HTTP headers let the client and the server pass additional information with an HTTP request or response, usually treated as metadata.

This field is usually used to enforce some specific header field, for example, `Authorization`.

Headers are provided as same as `body` in `fetch` API.

typescript

```
fetch('https://elysiajs.com/', {
    headers: {
        authorization: 'Bearer 12345'
    }
})
```

TIP

Elysia will parse headers as a lower-case key only.

Please make sure that you are using a lower-case field name when using header validation.

## Cookie [​](validation.html#cookie)

Cookie is the data sent through the request's cookie.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

get






('/cookie', ({ 

cookie






 }) => 

cookie






, {




		

cookie






: 

t






.

Cookie






({

			

cookieName






: 

t






.

String






()
		})
	})
```

Cookie must be provided in the form of `t.Cookie` or `t.Object`.

Same as `headers`, header has `additionalProperties` set to `true` by default.

### Specs [​](validation.html#specs-4)

An HTTP cookie is a small piece of data that a server sends to the client, it's data that is sent with every visit to the same web server to let the server remember client information.

In simpler terms, a stringified state that sent with every request.

This field is usually used to enforce some specific cookie field.

A cookie is a special header field that Fetch API doesn't accept a custom value but is managed by the browser. To send a cookie, you must use a `credentials` field instead:

typescript

```
fetch('https://elysiajs.com/', {
    credentials: 'include'
})
```

### t.Cookie [​](validation.html#t-cookie)

`t.Cookie` is a special type that is equivalent to `t.Object` but allow to set cookie specific options.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

get






('/cookie', ({ 

cookie






 }) => 

cookie






.

name






.

value






, {





		

cookie






: 

t






.

Cookie






({

			

name






: 

t






.

String






()
		}, {

			

secure






: true,

			

httpOnly






: true
		})
	})
```

## Response [​](validation.html#response)

Response is the data returned from the handler.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
	.get('/response', () => {
		return {
			name: 'Jane Doe'
		}
	}, {
		response: t.Object({
			name: t.String()
		})
	})
```

### Response per status [​](validation.html#response-per-status)

Response can be set per status code.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
	.get('/response', ({ error }) => {
		if (Math.random() > 0.5)
			return error(400, {
				error: 'Something went wrong'
			})

		return {
			name: 'Jane Doe'
		}
	}, {
		response: {
			200: t.Object({
				name: t.String()
			}),
			400: t.Object({
				error: t.String()
			})
		}
	})
```

## Optional [​](validation.html#optional)

To make a field optional, we may use `t.Optional`.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

get






('/optional', ({ 

query






 }) => 

query






, {





		

query






: 

t






.

Optional






(

			

t






.

Object






({

				

name






: 

t






.

String






()
			})
		)
	})
```

This is an Elysia specific feature, allowing us to make a field optional.

## Guard [​](validation.html#guard)

Guard can be used to apply schema to multiple handlers.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

get






('/none', ({ 

query






 }) => 'hi')


    .

guard






({ 

        

query






: 

t






.

Object






({ 

            

name






: 

t






.

String






() 
        }) 
    }) 

    .

get






('/query', ({ 

query






 }) => 

query






)

    .

listen






(3000)
```

This code ensures that the query must have **name** with a string value for every handler after it. The response should be listed as follows:

localhost/none/query

GET

The response should be listed as follows:

PathResponse/nonehi/none?name=ahi/queryerror/query?name=aa

If multiple global schemas are defined for same property, the latest one will have the preference. If both local and global schemas are defined, the local one will have the preference.

## Normalize [​](validation.html#normalize)

You can use the Elysia constructor to set the behavior for unknown fields on outgoing and incoming bodies via the `normalize` option. By default, elysia will raise an error in case a request or response contains fields which are not explicitly allowed in the schema of the respective handler.

You can change this by setting `normalize` to true when constructing your elysia instance.

ts

```
import { Elysia, t } from 'elysia'

new Elysia({
    normalize: true
})
```

## Primitive Type [​](validation.html#primitive-type)

TypeBox API is designed around and similar to TypeScript type.

There are a lot of familiar names and behaviors that intersect with TypeScript counter-parts like: **String**, **Number**, **Boolean**, and **Object** as well as more advanced features like **Intersect**, **KeyOf**, **Tuple** for versatility.

If you are familiar with TypeScript, creating a TypeBox schema has the same behavior as writing a TypeScript type except it provides an actual type validation in runtime.

To create your first schema, import `Elysia.t` from Elysia and start with the most basic type:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

post






('/', ({ 

body






 }) => `Hello ${

body






}`, {

		

body






: 

t






.

String






()
	})

	.

listen






(3000)
```

This code tells Elysia to validate an incoming HTTP body, make sure that the body is String, and if it is String, then allow it to flow through the request pipeline and handler.

If the shape doesn't match, then it will throw an error, into [Error Life Cycle](life-cycle.html#on-error).

![Elysia Life Cycle](../assets/lifecycle.webp)

### Basic Type [​](validation.html#basic-type)

TypeBox provides a basic primitive type with the same behavior as same as TypeScript type.

The following table lists the most common basic type:

TypeBoxTypeScript

typescript

```
t.String()
```

typescript

```
string
```

typescript

```
t.Number()
```

typescript

```
number
```

typescript

```
t.Boolean()
```

typescript

```
boolean
```

typescript

```
t.Array(
    t.Number()
)
```

typescript

```
number[]
```

typescript

```
t.Object({
    x: t.Number()
})
```

typescript

```
{
    x: number
}
```

typescript

```
t.Null()
```

typescript

```
null
```

typescript

```
t.Literal(42)
```

typescript

```
42
```

Elysia extends all types from TypeBox allowing you to reference most of the API from TypeBox to use in Elysia.

See [TypeBox's Type](https://github.com/sinclairzx81/typebox#json-types) for additional types that are supported by TypeBox.

### Attribute [​](validation.html#attribute)

TypeBox can accept an argument for more comprehensive behavior based on JSON Schema 7 specification.

TypeBoxTypeScript

typescript

```
t.String({
    format: 'email'
})
```

typescript

```
[email protected]
```

typescript

```
t.Number({
    minimum: 10,
    maximum: 100
})
```

typescript

```
10
```

typescript

```
t.Array(
    t.Number(),
    {
        /**
         * Minimum number of items
         */
        minItems: 1,
        /**
         * Maximum number of items
         */
        maxItems: 5
    }
)
```

typescript

```
[1, 2, 3, 4, 5]
```

typescript

```
t.Object(
    {
        x: t.Number()
    },
    {
        /**
         * @default false
         * Accept additional properties
         * that not specified in schema
         * but still match the type
         */
        additionalProperties: true
    }
)
```

typescript

```
x: 100
y: 200
```

See [JSON Schema 7 specification](https://json-schema.org/draft/2020-12/json-schema-validation) For more explanation for each attribute.

## Honorable Mention [​](validation.html#honorable-mention)

The following are common patterns that are often found useful when creating a schema.

### Union [​](validation.html#union)

Allow multiple types via union.

TypeBoxTypeScriptValue

typescript

```
t.Union([
    t.String(),
    t.Number()
])
```

typescript

```
string | number
```

```
Hello
123
```

### Optional [​](validation.html#optional-1)

Provided in a property of `t.Object`, allowing the field to be undefined or optional.

TypeBoxTypeScriptValue

typescript

```
t.Object({
    x: t.Number(),
    y: t.Optional(t.Number())
})
```

typescript

```
{
    x: number,
    y?: number
}
```

typescript

```
{
    x: 123
}
```

### Partial [​](validation.html#partial)

Allowing all of the fields in `t.Object` to be optional.

TypeBoxTypeScriptValue

typescript

```
t.Partial(
    t.Object({
        x: t.Number(),
        y: t.Number()
    })
)
```

typescript

```
{
    x?: number,
    y?: number
}
```

typescript

```
{
    y: 123
}
```

## Custom Error [​](validation.html#custom-error)

TypeBox offers an additional "**error**" property, allowing us to return a custom error message if the field is invalid.

TypeBoxError

typescript

```
t.String({
    format: 'email',
    error: 'Invalid email :('
})
```

```
Invalid Email :(
```

typescript

```
t.Object({
    x: t.Number()
}, {
    error: 'Invalid object UwU'
})
```

```
Invalid object UwU
```

## Elysia Type [​](validation.html#elysia-type)

`Elysia.t` is based on TypeBox with pre-configuration for usage on the server while providing additional types commonly found on server-side validation.

You can find all of the source code of Elysia type in `elysia/type-system`.

The following are types provided by Elysia:

[**Numeric**  
\
Accepts a numeric string or number and then transforms the value into a number](validation.html#numeric)

[**File**  
\
A singular file. Often useful for **file upload** validation](validation.html#file)

### [Files](validation.html#files)

[Extends from](validation.html#files) [File](validation.html#file), but adds support for an array of files in a single field

[**Cookie**  
\
Object-like representation of a Cookie Jar extended from Object type](validation.html#cookie)

[**Nullable**  
\
Allow the value to be null but not undefined](validation.html#nullable)

[**Maybe Empty**  
\
Accepts empty string or null value](validation.html#maybeempty)

### Numeric (legacy) [​](validation.html#numeric-legacy)

Numeric accepts a numeric string or number and then transforms the value into a number.

typescript

```
t.Numeric()
```

This is useful when an incoming value is a numeric string for example path parameter or query string.

Numeric accepts the same attribute as [Numeric Instance](https://json-schema.org/draft/2020-12/json-schema-validation#name-validation-keywords-for-num)

TIP

This is not need as Elysia type already transform Number to Numeric automatically

### File [​](validation.html#file-1)

A singular file. Often useful for **file upload** validation.

typescript

```
t.File()
```

File extends attribute of base schema, with additional property as follows:

#### type [​](validation.html#type)

A format of the file like image, video, audio.

If an array is provided, will attempt to validate if any of the format is valid.

typescript

```
type?: MaybeArray<string>
```

#### minSize [​](validation.html#minsize)

Minimum size of the file.

Accept number in byte or suffix of file unit:

typescript

```
minSize?: number | `${number}${'k' | 'm'}`
```

#### maxSize [​](validation.html#maxsize)

Maximum size of the file.

Accept number in byte or suffix of file unit:

typescript

```
maxSize?: number | `${number}${'k' | 'm'}`
```

#### File Unit Suffix: [​](validation.html#file-unit-suffix)

The following are the specifications of the file unit: m: MegaByte (1048576 byte) k: KiloByte (1024 byte)

### Files [​](validation.html#files)

Extends from [File](validation.html#file), but adds support for an array of files in a single field.

typescript

```
t.Files()
```

File extends attributes of base schema, array, and File.

### Cookie [​](validation.html#cookie-1)

Object-like representation of a Cookie Jar extended from Object type.

typescript

```
t.Cookie({
    name: t.String()
})
```

Cookie extends attributes of [Object](https://json-schema.org/draft/2020-12/json-schema-validation#name-validation-keywords-for-obj) and [Cookie](https://github.com/jshttp/cookie#options-1) with additional properties follows:

#### secrets [​](validation.html#secrets)

The secret key for signing cookies.

Accepts a string or an array of string

typescript

```
secrets?: string | string[]
```

If an array is provided, [Key Rotation](https://crypto.stackexchange.com/questions/41796/whats-the-purpose-of-key-rotation) will be used, the newly signed value will use the first secret as the key.

### Nullable [​](validation.html#nullable)

Allow the value to be null but not undefined.

typescript

```
t.Nullable(t.String())
```

### MaybeEmpty [​](validation.html#maybeempty)

Allow the value to be null and undefined.

typescript

```
t.MaybeEmpty(t.String())
```

For additional information, you can find the full source code of the type system in [`elysia/type-system`](https://github.com/elysiajs/elysia/blob/main/src/type-system.ts).

## Error Provider [​](validation.html#error-provider)

There are 2 ways to provide a custom error message when the validation fails:

1. inline `error` property
2. Using [onError](life-cycle.html#on-error) event

### Error Property [​](validation.html#error-property)

Elysia's offers an additional "**error**" property, allowing us to return a custom error message if the field is invalid.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
    .post('/', () => 'Hello World!', {
        body: t.Object({
            x: t.Number({
               	error: 'x must be a number'
            })
        })
    })
    .listen(3000)
```

The following is an example of usage of the error property on various types:

TypeBoxError

typescript

```
t.String({
    format: 'email',
    error: 'Invalid email :('
})
```

```
Invalid Email :(
```

typescript

```
t.Array(
    t.String(),
    {
        error: 'All members must be a string'
    }
)
```

```
All members must be a string
```

typescript

```
t.Object({
    x: t.Number()
}, {
    error: 'Invalid object UwU'
})
```

```
Invalid object UwU
```

typescript

```
t.Object({
    x: t.Number({
        error({ errors, type, validation, value }) {
            return 'Expected x to be a number'
        }
    })
})
```

```
Expected x to be a number
```

### Error message as function [​](validation.html#error-message-as-function)

Over a string, Elysia type's error can also accepts a function to programatically return custom error for each property.

The error function accepts same argument as same as `ValidationError`

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
    .post('/', () => 'Hello World!', {
        body: t.Object({
            x: t.Number({
                error() {
                    return 'Expected x to be a number'
                }
            })
        })
    })
    .listen(3000)
```

TIP

Hover over the `error` to see the type

### Error is called per field [​](validation.html#error-is-called-per-field)

Please be cautious that the error function will only be called if the field is invalid.

Please consider the following table:

CodeBodyError

typescript

```
t.Object({
    x: t.Number({
        error() {
            return 'Expected x to be a number'
        }
    })
})
```

json

```
{
    x: "hello"
}
```

Expected x to be a number

typescript

```
t.Object({
    x: t.Number({
        error() {
            return 'Expected x to be a number'
        }
    })
})
```

json

```
"hello"
```

(default error, \`t.Number.error\` is not called)

typescript

```
t.Object(
    {
        x: t.Number({
            error() {
                return 'Expected x to be a number'
            }
        })
    }, {
        error() {
            return 'Expected value to be an object'
        }
    }
)
```

json

```
"hello"
```

Expected value to be an object

### onError [​](validation.html#onerror)

We can customize the behavior of validation based on [onError](life-cycle.html#on-error) event by narrowing down the error code call "**VALIDATION**".

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

onError






(({ 

code






, 

error






 }) => {

		if (

code






 === 'VALIDATION')

		    return 

error






.

message







	})

	.

listen






(3000)
```

Narrowed down error type, will be typed as `ValidationError` imported from 'elysia/error'.

**ValidationError** exposed a property name **validator** typed as [TypeCheck](https://github.com/sinclairzx81/typebox#typecheck), allowing us to interact with TypeBox functionality out of the box.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

onError






(({ 

code






, 

error






 }) => {

        if (

code






 === 'VALIDATION')

            return 

error






.

validator






.

Errors






(

error






.

value






).First().message
    })

    .

listen






(3000)
```

### Error list [​](validation.html#error-list)

**ValidationError** provides a method `ValidatorError.all`, allowing us to list all of the error causes.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

	.

post






('/', ({ 

body






 }) => 

body






, {

		

body






: 

t






.

Object






({

			

name






: 

t






.

String






(),

			

age






: 

t






.

Number






()
		}),

		

error






({ 

code






, 

error






 }) {

			switch (

code






) {
				case 'VALIDATION':

                    

console






.

log






(

error






.

all






)

                    // Find a specific error name (path is OpenAPI Schema compliance)

                    const 

name






 = 

error






.

all






.

find






(

						(

x






) => 

x






.

summary






 && 

x






.

path






 === '/name'
					)

                    // If has a validation error, then log it

                    if(

name






)

    					

console






.

log






(

name






)
			}
		}
	})

	.

listen






(3000)
```

For more information about TypeBox's validator, see [TypeCheck](https://github.com/sinclairzx81/typebox#typecheck).

## Reference Model [​](validation.html#reference-model)

Sometimes you might find yourself declaring duplicated models, or re-using the same model multiple times.

With reference model, we can name our model and reuse them by referencing with name.

Let's start with a simple scenario.

Suppose we have a controller that handles sign-in with the same model.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

app






 = new 

Elysia






()

    .

post






('/sign-in', ({ 

body






 }) => 

body






, {

        

body






: 

t






.

Object






({

            

username






: 

t






.

String






(),

            

password






: 

t






.

String






()
        }),

        

response






: 

t






.

Object






({

            

username






: 

t






.

String






(),

            

password






: 

t






.

String






()
        })
    })
```

We can refactor the code by extracting the model as a variable, and reference them.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

// Maybe in a different file eg. models.ts

const 

SignDTO






 = 

t






.

Object






({

    

username






: 

t






.

String






(),

    

password






: 

t






.

String






()
})


const 

app






 = new 

Elysia






()

    .

post






('/sign-in', ({ 

body






 }) => 

body






, {

        

body






: 

SignDTO






,

        

response






: 

SignDTO







    })
```

This method of separating the concerns is an effective approach but we might find ourselves reusing multiple models with different controllers as the app gets more complex.

We can resolve that by creating a "reference model"  allowing us to name the model and use auto-completion to reference it directly in `schema` by registering the models with `model`.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

app






 = new 

Elysia






()

    .

model






({

        

sign






: 

t






.

Object






({

            

username






: 

t






.

String






(),

            

password






: 

t






.

String






()
        })
    })

    .

post






('/sign-in', ({ 

body






 }) => 

body






, {
        // with auto-completion for existing model name

        

body






: 'sign',

        

response






: 'sign'
    })
```

When we want to access the model's group, we can separate a `model` into a plugin which when registered will provide a set of models instead of multiple import.

typescript

```
// auth.model.ts
import { Elysia, t } from 'elysia'

export const authModel = new Elysia()
    .model({
        sign: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
```

Then in an instance file:

typescript

```
// index.ts

import { 

Elysia






 } from 'elysia'

import { 

authModel






 } from './auth.model'


const 

app






 = new 

Elysia






()

    .

use






(

authModel






)

    .

post






('/sign-in', ({ 

body






 }) => 

body






, {
        // with auto-completion for existing model name

        

body






: 'sign',

        

response






: 'sign'
    })
```

This not only allows us to separate the concerns but also allows us to reuse the model in multiple places while reporting the model into Swagger documentation.

### Multiple Models [​](validation.html#multiple-models)

`model` accepts an object with the key as a model name and value as the model definition, multiple models are supported by default.

typescript

```
// auth.model.ts
import { Elysia, t } from 'elysia'

export const authModel = new Elysia()
    .model({
        number: t.Number(),
        sign: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
```

### Naming Convention [​](validation.html#naming-convention)

Duplicated model names will cause Elysia to throw an error. To prevent declaring duplicate model names, we can use the following naming convention.

Let's say that we have all models stored at `models/<name>.ts`, and declare the prefix of the model as a namespace.

typescript

```
import { Elysia, t } from 'elysia'

// admin.model.ts
export const adminModels = new Elysia()
    .model({
        'admin.auth': t.Object({
            username: t.String(),
            password: t.String()
        })
    })

// user.model.ts
export const userModels = new Elysia()
    .model({
        'user.auth': t.Object({
            username: t.String(),
            password: t.String()
        })
    })
```

This can prevent naming duplication at some level, but in the end, it's best to let the naming convention decision up to your team's agreement is the best option.

Elysia provides an opinionated option for you to decide to prevent decision fatigue.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/essential/validation.md)

Last updated:

Pager

[Previous pageLife Cycle](life-cycle.html)

[Next pagePlugin](plugin.html)


=== bun-elysia-docs/elysiajs.com/index.html ===
[Skip to content](index.html#VPContent)

[![](assets/elysia.svg)ElysiaJS](index.html)

Search`K`

Main Navigation [Cheat Sheet](integrations/cheat-sheet.html)[Plugins](plugins/overview.html)[Blog](blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Return to top

![Curved text logo saying 'Elysia JS'](assets/elysia_v.webp)

## Ergonomic Framework for Humans

### TypeScript with End-to-End Type Safety, type integrity, and exceptional developer experience. Supercharged by Bun.

[Get Started](at-glance.html)

`bun create elysia app`

See why developers love Elysia

## The first production ready, and most loved Bun framework

### Our Principle

## Design for Humans

Our goal is to design an ergonomic, sensible, and productive framework that even beginners can use easily

Designed to avoid unnecessary complexity and type complexity for you to focus on building

A framework that feels just like JavaScript

typescript

```
import { Elysia, file } from 'elysia'

new Elysia()
	.get('/', 'Hello World')
	.get('/image', file('mika.webp'))
	.get('/stream', function* () {
		yield 'Hello'
		yield 'World'
	})
	.ws('/realtime', {
		message(ws, message) {
			ws.send('got:' + message)
		}
	})
	.listen(3000)
```

#### Just return

A string, number, or complex JSON

All we need to do is return

#### File support built-in

To send a file or image, just return

Nothing more or less

#### Stream response

Use yield to stream a response

All we need to do is return

#### Data in real-time

With µWebSocket built-in

Send live data in just 3 lines

# The Next Level of Type Safety

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

	.

get






('/id/:id', ({ 

params






, 

set






 }) => {





		

set






.

headers






.

a










		return 'Su'
	})


	.

get






('/optional/:name?', ({ 

params






: { 

name






 } }) => {

        return 

name






 ?? 'Pardofelis'
	})

	.

listen






(3000)
```

Type Inference

Enforce Type

Return Type

Bring your own

## Your own documentation in 1 line

It's not magic

With deep integration with OpenAPI schema  
Elysia can generate Swagger documentation for your API out of the box

![Scalar documentation generated by Elysia using Elysia Swagger plugin](assets/scalar-preview-light.webp)

typescript

```
import { Elysia } from 'elysia'
import swagger from '@elysiajs/swagger'

new Elysia()
	.use(swagger())
	.use(character)
	.use(auth)
	.listen(3000)
```

11.88ms

POST /character/:id/chat

Playback

Request

Validation

Transaction

Upload

Sync

##### For DevOps

## OpenTelemetry

Elysia has 1st party support for OpenTelemetry. Instrumentation is built-in, so you can easily monitor your services on regardless of the platform.

typescript

```

import { 

treaty






 } from '@elysiajs/eden'

import type { 

App






 } from './server'


const 

api






 = 

treaty






<

App






>('api.elysiajs.com')


const { 

data






 } = await 

api






.

profile






.

patch






({

    

age






: 21
})
```

##### For Frontend

## End-to-end Type Safety

Like tRPC, Elysia provides type-safety from the backend to the frontend without code generation. The interaction between frontend and backend is type-checked at compile time.

### 21x

faster than Express

### 6x

faster than Fastify

1. ###### Elysia Bun
   
   2,454,631 reqs/s
2. ###### Gin Go
   
   676,019
3. ###### Spring Java
   
   506,087
4. ###### Fastify Node
   
   415,600
5. ###### Express Node
   
   113,117
6. ###### Nest Node
   
   105,064

Measured in requests/second. Result from [TechEmpower Benchmark](https://www.techempower.com/benchmarks/#hw=ph&test=plaintext&section=data-r22) Round 22 (2023-10-17) in PlainText

## Test with Confidence

### Type safe with auto-completion

Elysia provides a type-safe layer to interact with and test your server, from routes to parameters.

With auto-completion, you can easily write tests for the server without any hassle.

typescript

```

import { 

treaty






 } from '@elysiajs/eden'

import { 

app






 } from './index'

import { 

test






, 

expect






 } from 'bun:test'


const 

server






 = 

treaty






(

app






)




test






('should handle duplicated user', async () => {

	const { 

error






 } = await 

server






.

user






.

put






({
Argument of type '{ username: string; }' is not assignable to parameter of type '{ username: string; password: string; }'.
  Property 'password' is missing in type '{ username: string; }' but required in type '{ username: string; password: string; }'.
	    

username






: 'mika',
	})


	

expect






(

error






?.

value






).

toEqual






({

		

success






: false,

		

message






: 'Username already taken'
	})
})
```

## Powered by love from the community

[![](tweets/aqueel.webp)
\
Aqueel
\
@AqueelMiq
\
Jetfuel on bun at X! @shlomiatar who built the framework has an eye for picking the right tools for the job.](https://x.com/AqueelMiq/status/1822380943279296832)

[![](tweets/shlomi.webp)
\
Shlomi Atar
\
@shlomiatar
\
also a shoutout to @saltyAom and the phenomenal Elysia js that is powering our server driven UI. Incredible work.](https://x.com/shlomiatar/status/1822381556142362734)

[![](tweets/htmx.webp)
\
htmx.org
\
@htmx\_org
\
htmx works great w/ @bunjavascript, @elysiaJS and @tursodatabase btw](https://x.com/htmx_org/status/1792949584769224897)

[![](tweets/marc.webp)
\
Marc Laventure
\
@MarcLaventure
\
both engineering+monetary contributions are paramount for OSS we proudly sponsor dozens of projects: @elysiaJS @LitestarAPI @honojs @daveshanley @kevin\_jahns @MarijnJH &amp; help maintain repos+contribute to OSS at blistering cadence. it's @scalar's ethos to be a catalyst for OSS](https://x.com/MarcLaventure/status/1773751085792174246)

[![](tweets/jarred.webp)
\
Jarred Sumner
\
@jarredsumner
\
You can use Express with Bun, but often we see people using Elysia, Hono, or Bun.serve() directly.](https://x.com/jarredsumner/status/1781132294692233609)

[![](tweets/runyasak.webp)
\
Runyasak Ch. 💚
\
@runyasak
\
Started using @elysiaJS to create a Discord Bot and found the type system beautifully easy. DX is fantastic and coding is fun! Use @DrizzleORM with PostgreSQL. So much easier than I've used before. ElysiaJS has proved to me that great performance and DX can live together. 😎](https://x.com/runyasak/status/1797618641648968117)

[![](tweets/herrington.webp)
\
Herrington Darkholme
\
@hd\_nvim
\
Was introduced to @elysiaJS today and it looks pretty solid. end-to-end type safety/guard/swapper are killer features of the modern web! (and it's fast)](https://x.com/hd_nvim/status/1735182378036027650)

[![](tweets/scalar.webp)
\
scalar.com
\
@scalar
\
so excited to be part of the amazing @elysiaJS community!](https://x.com/scalar/status/1744024831014920403)

[![](tweets/josedonato.webp)
\
José Donato 🦋
\
@josedonato\__
\
handling tables with ~350k rows like it's nothing. Working on allowing @ag\_grid server side row model when connecting a custom backend to @openbb\_finance Terminal Pro. Backend in @elysiaJS + @bunjsproject.](https://x.com/josedonato__/status/1815706393367703890)

[![](tweets/pilcrow.webp)
\
pilcrowonpaper
\
@pilcrow
\
Just in time for Bun 1.0 - Lucia 2.5 now supports @elysiajs out of the box!! You can also use Bun.serve() directly as well. This release also comes with 2 new OAuth providers, Strava and AWS Cognito!](https://x.com/pilcrowonpaper/status/1699766618665181308)

[![](tweets/mikroorm.webp)
\
MikroORM
\
@MikroORM
\
I've been playing a bit with @bunjavascript and @elysiaJS, need to do a few more tweaks before the release, but next version should work more natively with bun when it comes to TS support detection, e.g. the CLI works without ts-node installed.](https://x.com/MikroORM/status/1821993062114967711)

## Made possible by you

Elysia is not owned by an organization, but is driven by the community.  
Elysia development is only possible thanks to your support.

[Become a sponsor](https://github.com/sponsors/saltyaom)

Thank you for making Elysia possible

- [![Sponsor avatar](https://avatars.githubusercontent.com/u/140343870?v=4)
  \
  San Francisco Compute Company
  \
  for 6 months](https://github.com/sfcompute)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/301879?v=4)
  \
  Scalar
  \
  for a year](https://github.com/scalar)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/709451?u=c72c2dd8b0368dc63bf2278e0f4f2ff290449cfb&v=4)
  \
  Jarred Sumner
  \
  for a year](https://github.com/Jarred-Sumner)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/93230643?u=006693af8214b0ed24cd89092662a26dd1c2a2e5&v=4)
  \
  \_typedev
  \
  for a year](https://github.com/pauldvu)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/322569?u=ca72b45a3f83abb9d33184d06d47de71cdc029fc&v=4)
  \
  DOM CHAROENYOS
  \
  for a year](https://github.com/dome)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/3455147?u=551a910065e6ccd3f9a9b2654cce915dbce11b39&v=4)
  \
  Naoki Takahashi
  \
  for 9 months](https://github.com/Lazialize)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/69711778?v=4)
  \
  PandoSoft
  \
  for 4 months](https://github.com/Pando-Soft)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/20393?u=7604cd5a50f166089d48528cc5353ec32f55ee44&v=4)
  \
  Christian Rishøj
  \
  for a year](https://github.com/crishoj)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/22091713?u=80ac13717cb73b278e4e687a2de9fc2b3491e0e1&v=4)
  \
  Khyber Sen
  \
  for a year](https://github.com/kkysen)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/45877979?v=4)
  \
  MeCode
  \
  for a year](https://github.com/mecode-asia)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/14046637?v=4)
  \
  yoyismee
  \
  for a year](https://github.com/yoyoismee)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/17550955?u=401bc7e086493f0bac5c0ec4d79fa0cc1b9d1cbb&v=4)
  \
  kubilay
  \
  for 10 months](https://github.com/kubilaysalih)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/121352331?u=144aec43501a662f597a23cd461cb8275d004972&v=4)
  \
  RiestelX
  \
  for 7 months](https://github.com/RiestelX)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/87086734?v=4)
  \
  Huly® Platform™
  \
  for 5 months](https://github.com/hcengineering)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/112161022?v=4)
  \
  Vallaris Maps Platforms
  \
  for 5 months](https://github.com/VallarisMapsPlatforms)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/25407276?u=d1b805421a82e32d2a1f8a43a14d30c7f58a8478&v=4)
  \
  Firat Özcan
  \
  for 4 months](https://github.com/firatoezcan)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/45320122?u=64d35f7be6ca172e68e73596ec85ba674503754d&v=4)
  \
  Florent Drousset
  \
  for 9 hours](https://github.com/florentdrousset)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/6111610?u=cfcf8ea90b009ab3bfafc5834e178d7f34b57507&v=4)
  \
  Thanatat Tamtan
  \
  for 2 years](https://github.com/acoshift)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/14276975?u=ebf6f721f374c444de66b7bd576c60329168219b&v=4)
  \
  Ronald Dijks
  \
  for 10 months](https://github.com/RonaldDijks)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/8999086?v=4)
  \
  gabriel-peracio
  \
  for 5 months](https://github.com/gabriel-peracio)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/82351571?u=ed701a7ecae3e4de5908e4f35af974a6c402f6f1&v=4)
  \
  hsnmkls
  \
  for 2 years](https://github.com/hazelnutcloud)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/57401?v=4)
  \
  Jittat Fakcharoenphol
  \
  for a year](https://github.com/jittat)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/64778698?u=2c4cfac16f8451f722e6baa235c07a1c6a111213&v=4)
  \
  \[object Object\]
  \
  for a year](https://github.com/data-stack404)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/900881?u=f4ec43433a02c3e0b0a284a83fb4cf8ddce8ed4e&v=4)
  \
  Louis Gentil
  \
  for a year](https://github.com/lomithrani)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/42383060?u=dc5a50b11441931717219af1f0a61c97a09fb365&v=4)
  \
  David L. Bowman
  \
  for a year](https://github.com/davidlbowman)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/17266375?u=5ff3bd41e46e88d1a4afcdc63314aca2b618b113&v=4)
  \
  stanley
  \
  for a year](https://github.com/stanleykerr)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/13967523?u=d25e724abb3fc6c7160a10ebd3a52ed2307555c2&v=4)
  \
  Nemanja
  \
  for a year](https://github.com/devstojko)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/45042736?u=ffaefd04eb752668555b3bc8be9c85044e5ddb85&v=4)
  \
  ✦ freddie
  \
  for a year](https://github.com/fredericoo)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/71082921?u=5a7ea255cf6a240ba69b69154a40666107caf4c2&v=4)
  \
  Kira Kitsune
  \
  for 10 months](https://github.com/Kira-Kitsune)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/16902309?u=29ab12ed14212a3ab9679d5ebe75ad361ac45bf0&v=4)
  \
  Ricardo Devis Agullo
  \
  for 10 months](https://github.com/ricardo-devis-agullo)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/31898900?u=bc5c8dcf8ef4e00a7ee96336967e721fb7fff376&v=4)
  \
  4ndrs
  \
  for 10 months](https://github.com/4ndrs)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/11384864?v=4)
  \
  drsmile1001
  \
  for 8 months](https://github.com/drsmile1001)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/173217700?u=c9b21db1adf9a1ece22bea1d132b6003f457dc91&v=4)
  \
  Merlinz-dev
  \
  for 5 months](https://github.com/Merlinz-dev)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/49203200?u=1a06d2922702ce20ff6f1871778dd06b7314a091&v=4)
  \
  0xYok
  \
  for 5 months](https://github.com/Yokk1e)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/7573868?u=71757d2070b6ef754d77e86cbeeb356808ad83c8&v=4)
  \
  Jason Dubaniewicz
  \
  for 5 months](https://github.com/bc-jasond)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/82723928?u=7b25fceb1c9b6ff8eb8b5ac9f11a440c27a1d7c0&v=4)
  \
  Martini
  \
  for 4 months](https://github.com/Martiinii)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/125385398?u=ad891f6cf1b2014d50286cdaa8bce2207e2c5ec0&v=4)
  \
  Samir Bioud
  \
  for 3 months](https://github.com/KronsyC)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/58871222?u=ae23694f508c8d39f63494dc4c8ef58fbb7db3ef&v=4)
  \
  Hadrian de Oliveira
  \
  for 2 months](https://github.com/hd-o)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/741390?u=249b771356cc5d534d9489f04b93bf3f83086c3a&v=4)
  \
  Terrance Niechciol
  \
  for 15 days](https://github.com/TerranceN)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/8537579?u=733259d611357215ba1e2c1e527614443201a76c&v=4)
  \
  Freek
  \
  for 5 months](https://github.com/frzi)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/59821765?u=4908bd0fe5e12f7f98c578e7f3a13a3e2c7af601&v=4)
  \
  Nutthapat Pongtanyavichai
  \
  for 2 years](https://github.com/leomotors)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/248741?u=8f90363bcaaba12ba6db76d7211bc628aff76abe&v=4)
  \
  Manassarn "Noom" Manoonchai
  \
  for 2 years](https://github.com/narze)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/68165621?u=67f37a7a2001b9e7f34ce5617e53bb6ae5ca7da2&v=4)
  \
  Phawit Pornwattanakul
  \
  for 2 years](https://github.com/HelloYeew)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/47938031?u=69ab0b6dadeb4ad5c96dd839f3a9eda8a9ff9dab&v=4)
  \
  Vorrapong Kertnat
  \
  for 2 years](https://github.com/iceman951)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/4945174?u=b59b4dca111f4067759d3b2eefca9f187fbbd2bc&v=4)
  \
  First Sutham
  \
  for a year](https://github.com/heyfirst)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/80222346?u=7ce0220b4fec1e674178502590f7c6f63ba972c2&v=4)
  \
  Diego Ordoñez
  \
  for a year](https://github.com/DiegoOrdonezBecerril)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/12775942?u=76a23e8290e182b45ed34b2149cee9f0850c46d1&v=4)
  \
  Dominik Seger
  \
  for a year](https://github.com/dominikseger)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/10226442?u=3fb4420b075cbec9b16cbd62261dbd6c442a2eda&v=4)
  \
  Marcello
  \
  for a year](https://github.com/marcellocurto)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/392876?u=998b0d1d7cd64795d0511478dc7944ecac85a7f0&v=4)
  \
  Hassadee Pimsuwan
  \
  for a year](https://github.com/hassadee)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/69802296?u=9ff7d0083a2223d9683fc9780ff445fdd46cb04c&v=4)
  \
  Nayuki
  \
  for 10 months](https://github.com/Kuuuuuuuu)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/63049327?u=21283950ed82f8ffdfda9f00eb3dad8326578560&v=4)
  \
  Altin Thaci
  \
  for 10 months](https://github.com/altinthaqi)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/16751535?u=5f44d1a587fdb6c8bfe97646e95c75f770c92d61&v=4)
  \
  白田 連大
  \
  for 10 months](https://github.com/ReoHakase)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/112365626?u=e6711d7000f42c8adc1b59610f2f6d3036d55d4f&v=4)
  \
  Kyle
  \
  for 9 months](https://github.com/imkylecat)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/110802304?u=3b25d122e170bc040270e87b9b63623a411470b1&v=4)
  \
  suchai-foundnerds
  \
  for 8 months](https://github.com/suchai-foundnerds)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/143787892?u=bd6ef9640db2f4398bf246c3e68d5ac328be3692&v=4)
  \
  Chanon Mee-Iam
  \
  for 8 months](https://github.com/tonchanon)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/25749290?u=eb5ecdda8551a723879d303311b85d670def11a5&v=4)
  \
  Surachet Sangasaeng
  \
  for 8 months](https://github.com/Basone01)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/4032071?u=7e29ea6c61dde08184a8e885419d842d487d01f9&v=4)
  \
  Nathan Chapman
  \
  for 7 months](https://github.com/nathanchapman)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/6391776?u=9c4fff402bc3862bda963fca6b62e9c37df3b7c6&v=4)
  \
  Nikita
  \
  for 7 months](https://github.com/nikitavoloboev)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/31657298?u=c8e49087e3d10e631e475ac32171b121e06b92d5&v=4)
  \
  Sunghyun Cho
  \
  for 6 months](https://github.com/anaclumos)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/14953122?u=430106658079b179b4ac91a5f0a28f75ac2a2f53&v=4)
  \
  Yuzuki Aida
  \
  for 6 months](https://github.com/nzws)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/52304876?u=ebaf60d4857b91110639af77d0d53a0b2255f3fd&v=4)
  \
  TAKZOBYE
  \
  for 5 months](https://github.com/takzobye)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/29666817?u=d2a3162595fd8bf7163f98be216b0318bea6e602&v=4)
  \
  S. Srisuk
  \
  for 5 months](https://github.com/unixxcorn)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/20911264?u=ed3be085ed06f70a12cd9bbb0982723376b971f4&v=4)
  \
  l2D
  \
  for 5 months](https://github.com/l2D)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/68412704?u=67944baddc907f9ae00f28ea132fad2d12321da1&v=4)
  \
  Nopdanai Dejvorakul (孙贤德)
  \
  for 5 months](https://github.com/benzerer)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/102378082?u=d84e1f5dcb8b0b14e82c58d8d19c4a411554e1a6&v=4)
  \
  Alan Reis
  \
  for 5 months](https://github.com/Hoyasumii)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/1466279?v=4)
  \
  Piti Pitiaunchamroen
  \
  for 5 months](https://github.com/nocommenz)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/6960101?u=a450a80fa46d732e4836f7706781eebe73b2e7f0&v=4)
  \
  Sergen Tanguc
  \
  for 5 months](https://github.com/tanguc)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/81029660?u=17f8d8b7420226fb8e4d4927b689b18458168c9b&v=4)
  \
  Từ Thắng Phát
  \
  for 4 months](https://github.com/phatdev12)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/84713269?u=8ed8f94581a5bbda8d3658817b777abe6fa8d5c3&v=4)
  \
  Yuzu
  \
  for 4 months](https://github.com/YuzuZensai)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/142619525?u=e3603b3ae9edaa7bb7510c7f939f5cb439a5f99a&v=4)
  \
  hadth-rook
  \
  for 3 months](https://github.com/hadth-rook)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/68649893?u=eacebdee5b11489303285b21dbe3cdf37f957dee&v=4)
  \
  arda662
  \
  for 3 months](https://github.com/OyuNet)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/173619310?v=4)
  \
  MikanDev
  \
  for 2 months](https://github.com/mikndotdev)
- [![Sponsor avatar](https://avatars.githubusercontent.com/u/7936962?u=41e34bb816ad09323e1650f3efc0bec4fb2bc5dd&v=4)
  \
  Laurensius Jeffrey
  \
  for 18 days](https://github.com/arcestia)
- [And you](https://github.com/sponsors/saltyaom)

## To summarize Only the best for the bold

For builders, inventors, and visionaries  
We spent years studying the strengths and weaknesses of JavaScript frameworks, all to deliver an exceptional experience

### At the speed of light

#### Up to 21x faster than Express

Supercharged by Bun,

Elysia is one of top performing JavaScript frameworks

### Maximum Type Safety

#### Dynamic type safety

Built from type to runtime

Elysia learns from your codebase, adapts, and enforces your types

### Productive in a reach

#### The best experience of today

Ergonomically designed for humans, prioritizing DX. No technical nonsense

##### These are the pillars we built Elysia upon, to deliver the best experience yet

### Build the future, together

[Get started](at-glance.html)[Tutorial](tutorial.html)

Built with 💖 for Elysia


=== bun-elysia-docs/elysiajs.com/integrations/astro.html ===
[Skip to content](astro.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](nextjs.html)

[Expo](expo.html)

[Astro](astro.html)

[SvelteKit](sveltekit.html)

Outline

# Integration with Astro [​](astro.html#integration-with-astro)

With [Astro Endpoint](https://docs.astro.build/en/core-concepts/endpoints/), we can run Elysia on Astro directly.

1. Set **output** to **server** in **astro.config.mjs**

javascript

```
// astro.config.mjs
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    output: 'server'
})
```

2. Create **pages/\[...slugs].ts**
3. Create or import an existing Elysia server in **\[...slugs].ts**
4. Export the handler with the name of method you want to expose

typescript

```
// pages/[...slugs].ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/api', () => 'hi')
    .post('/api', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

const handle = ({ request }: { request: Request }) => app.handle(request) 

export const GET = handle 
export const POST = handle 
```

Elysia will work normally as expected because of WinterCG compliance.

We recommended running [Astro on Bun](https://docs.astro.build/en/recipes/bun) as Elysia is designed to be run on Bun

TIP

You can run Elysia server without running Astro on Bun thanks to WinterCG support.

However some plugins like **Elysia Static** may not work if you are running Astro on Node.

With this approach, you can have co-location of both frontend and backend in a single repository and have End-to-end type-safety with Eden.

Please refer to [Astro Endpoint](https://docs.astro.build/en/core-concepts/endpoints/) for more information.

## Prefix [​](astro.html#prefix)

If you place an Elysia server not in the root directory of the app router, you need to annotate the prefix to the Elysia server.

For example, if you place Elysia server in **pages/api/\[...slugs].ts**, you need to annotate prefix as **/api** to Elysia server.

typescript

```
// pages/api/[...slugs].ts
import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' }) 
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

const handle = ({ request }: { request: Request }) => app.handle(request) 

export const GET = handle 
export const POST = handle 
```

This will ensure that Elysia routing will work properly in any location you place it.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/integrations/astro.md)

Last updated:

Pager

[Previous pageExpo](expo.html)

[Next pageSvelteKit](sveltekit.html)


=== bun-elysia-docs/elysiajs.com/integrations/cheat-sheet.html ===
[Skip to content](cheat-sheet.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](nextjs.html)

[Expo](expo.html)

[Astro](astro.html)

[SvelteKit](sveltekit.html)

Outline

# Cheat Sheet [​](cheat-sheet.html#cheat-sheet)

Here are a quick overview for a common Elysia patterns

## Hello World [​](cheat-sheet.html#hello-world)

A simple hello world

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', () => 'Hello World')
    .listen(3000)
```

## Custom HTTP Method [​](cheat-sheet.html#custom-http-method)

Define route using custom HTTP methods/verbs

See [Route](../essential/route.html#custom-method)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/hi', () => 'Hi')
    .post('/hi', () => 'From Post')
    .put('/hi', () => 'From Put')
    .route('M-SEARCH', '/hi', () => 'Custom Method')
    .listen(3000)
```

## Path Parameter [​](cheat-sheet.html#path-parameter)

Using dynamic path parameter

See [Path](../essential/route.html#path-type)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/id/:id', ({ params: { id } }) => id)
    .get('/rest/*', () => 'Rest')
    .listen(3000)
```

## Return JSON [​](cheat-sheet.html#return-json)

Elysia converts response to JSON automatically

See [Handler](../essential/handler.html)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/json', () => {
        return {
            hello: 'Elysia'
        }
    })
    .listen(3000)
```

## Return a file [​](cheat-sheet.html#return-a-file)

A file can be return in as formdata response

The response must be a 1-level deep object

typescript

```
import { Elysia, file } from 'elysia'

new Elysia()
    .get('/json', () => {
        return {
            hello: 'Elysia',
            image: file('public/cat.jpg')
        }
    })
    .listen(3000)
```

## Header and status [​](cheat-sheet.html#header-and-status)

Set a custom header and a status code

See [Handler](../essential/handler.html)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ set, error }) => {
        set.headers['x-powered-by'] = 'Elysia'

        return error(418, "I'm a teapot")
    })
    .listen(3000)
```

## Group [​](cheat-sheet.html#group)

Define a prefix once for sub routes

See [Group](../essential/route.html#group)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get("/", () => "Hi")
    .group("/auth", app => {
        return app
            .get("/", () => "Hi")
            .post("/sign-in", ({ body }) => body)
            .put("/sign-up", ({ body }) => body)
    })
    .listen(3000)
```

## Schema [​](cheat-sheet.html#schema)

Enforce a data type of a route

See [Validation](../essential/validation.html)

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
    .post('/mirror', ({ body: { username } }) => username, {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
    .listen(3000)
```

## Lifecycle Hook [​](cheat-sheet.html#lifecycle-hook)

Intercept an Elysia event in order

See [Lifecycle](../essential/life-cycle.html)

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
    .onRequest(() => {
        console.log('On request')
    })
    .on('beforeHandle', () => {
        console.log('Before handle')
    })
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            username: t.String(),
            password: t.String()
        }),
        afterHandle: () => {
            console.log("After handle")
        }
    })
    .listen(3000)
```

## Guard [​](cheat-sheet.html#guard)

Enforce a data type of sub routes

See [Scope](../essential/plugin.html#scope)

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

guard






({

        

response






: 

t






.

String






()

    }, (

app






) => 

app








        .

get






('/', () => 'Hi')
        // Invalid: will throws error, and TypeScript will report error

        .

get






('/invalid', () => 1)
Argument of type '() => number' is not assignable to parameter of type 'InlineHandler<MergeSchema<UnwrapRoute<InputSchema<never>, TModule<{}, {}>, "/invalid">, MergeSchema<{}, MergeSchema<{}, { body: unknown; headers: unknown; query: unknown; params: {}; cookie: unknown; response: { 200: string; }; }, "">, "">, "">, { ...; } & { ...; }, "/invalid">'.
  Type '() => number' is not assignable to type '(context: { body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends "OK" | 200, const T extends Code extends 200 ? { ...; }[Code] : Code extends "Continue" | ... 5...'.
    Type 'number' is not assignable to type 'Response | MaybePromise<string | { 200: string; } | ElysiaCustomStatusResponse<200, string, 200>>'.    )

    .

listen






(3000)
```

## Customize context [​](cheat-sheet.html#customize-context)

Add custom variable to route context

See [Context](../essential/handler.html#context)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .state('version', 1)
    .decorate('getDate', () => Date.now())
    .get('/version', ({
        getDate,
        store: { version }
    }) => `${version} ${getDate()}`)
    .listen(3000)
```

## Redirect [​](cheat-sheet.html#redirect)

Redirect a response

See [Handler](../essential/handler.html#redirect)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', () => 'hi')
    .get('/redirect', ({ redirect }) => {
        return redirect('/')
    })
    .listen(3000)
```

## Plugin [​](cheat-sheet.html#plugin)

Create a separate instance

See [Plugin](../essential/plugin.html)

typescript

```
import { Elysia } from 'elysia'

const plugin = new Elysia()
    .state('plugin-version', 1)
    .get('/hi', () => 'hi')

new Elysia()
    .use(plugin)
    .get('/version', ({ store }) => store['plugin-version'])
    .listen(3000)
```

## Web Socket [​](cheat-sheet.html#web-socket)

Create a realtime connection using Web Socket

See [Web Socket](../patterns/websocket.html)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .ws('/ping', {
        message(ws, message) {
            ws.send('hello ' + message)
        }
    })
    .listen(3000)
```

## OpenAPI documentation [​](cheat-sheet.html#openapi-documentation)

Create interactive documentation using Scalar (or optionally Swagger)

See [swagger](../plugins/swagger.html)

typescript

```
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
    .use(swagger())
    .listen(3000)

console.log(`View documentation at "${app.server!.url}swagger" in your browser`);
```

## Unit Test [​](cheat-sheet.html#unit-test)

Write a unit test of your Elysia app

See [Unit Test](../patterns/unit-test.html)

typescript

```
// test/index.test.ts
import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'

describe('Elysia', () => {
    it('return a response', async () => {
        const app = new Elysia().get('/', () => 'hi')

        const response = await app
            .handle(new Request('http://localhost/'))
            .then((res) => res.text())

        expect(response).toBe('hi')
    })
})
```

## Custom body parser [​](cheat-sheet.html#custom-body-parser)

Create custom logic for parsing body

See [Parse](../essential/life-cycle.html#parse)

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .onParse(({ request, contentType }) => {
        if (contentType === 'application/custom-type')
            return request.text()
    })
```

## GraphQL [​](cheat-sheet.html#graphql)

Create a custom GraphQL server using GraphQL Yoga or Apollo

See [GraphQL Yoga](../plugins/graphql-yoga.html)

typescript

```
import { Elysia } from 'elysia'
import { yoga } from '@elysiajs/graphql-yoga'

const app = new Elysia()
    .use(
        yoga({
            typeDefs: /* GraphQL */`
                type Query {
                    hi: String
                }
            `,
            resolvers: {
                Query: {
                    hi: () => 'Hello from Elysia'
                }
            }
        })
    )
    .listen(3000)
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/integrations/cheat-sheet.md)

Last updated:

Pager

[Next pageAt Glance](../at-glance.html)


=== bun-elysia-docs/elysiajs.com/integrations/expo.html ===
[Skip to content](expo.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](nextjs.html)

[Expo](expo.html)

[Astro](astro.html)

[SvelteKit](sveltekit.html)

Outline

# Integration with Expo [​](expo.html#integration-with-expo)

Starting from Expo SDK 50, and App Router v3, Expo allows us to create API route directly in an Expo app.

1. Create an Expo app if it doesn't exist with:

typescript

```
bun create expo-app --template tabs
```

2. Create **app/\[...slugs]+api.ts**
3. In **\[...slugs]+api.ts**, create or import an existing Elysia server
4. Export the handler with the name of method you want to expose

typescript

```
// app/[...slugs]+api.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/', () => 'hello Next')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.handle 
export const POST = app.handle 
```

Elysia will work normally as expected because of WinterCG compliance, however, some plugins like **Elysia Static** may not work if you are running Expo on Node.

You can treat the Elysia server as if normal Expo API route.

With this approach, you can have co-location of both frontend and backend in a single repository and have [End-to-end type safety with Eden](../eden/overview.html) with both client-side and server action.

Please refer to [API route](https://docs.expo.dev/router/reference/api-routes/) for more information.

## Prefix [​](expo.html#prefix)

If you place an Elysia server not in the root directory of the app router, you need to annotate the prefix to the Elysia server.

For example, if you place Elysia server in **app/api/\[...slugs]+api.ts**, you need to annotate prefix as **/api** to Elysia server.

typescript

```
// app/api/[...slugs]+api.ts
import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.handle
export const POST = app.handle
```

This will ensure that Elysia routing will work properly in any location you place in.

## Deployment [​](expo.html#deployment)

You can either directly use API route using Elysia and deploy as normal Elysia app normally if need or using [experimental Expo server runtime](https://docs.expo.dev/router/reference/api-routes/#deployment).

If you are using Expo server runtime, you may use `expo export` command to create optimized build for your expo app, this will include an Expo function which is using Elysia at **dist/server/\_expo/functions/\[...slugs]+api.js**

TIP

Please note that Expo Functions are treated as Edge functions instead of normal server, so running the Edge function directly will not allocate any port.

You may use the Expo function adapter provided by Expo to deploy your Edge Function.

Currently Expo support the following adapter:

- [Express](https://docs.expo.dev/router/reference/api-routes/#express)
- [Netlify](https://docs.expo.dev/router/reference/api-routes/#netlify)
- [Vercel](https://docs.expo.dev/router/reference/api-routes/#vercel)

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/integrations/expo.md)

Last updated:

Pager

[Previous pageNextjs](nextjs.html)

[Next pageAstro](astro.html)


=== bun-elysia-docs/elysiajs.com/integrations/nextjs.html ===
[Skip to content](nextjs.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](nextjs.html)

[Expo](expo.html)

[Astro](astro.html)

[SvelteKit](sveltekit.html)

Outline

# Integration with Nextjs [​](nextjs.html#integration-with-nextjs)

With Nextjs App Router, we can run Elysia on Nextjs route.

1. Create **api/\[\[...slugs]]/route.ts** inside app router
2. In **route.ts**, create or import an existing Elysia server
3. Export the handler with the name of method you want to expose

typescript

```
// app/api/[[...slugs]]/route.ts
import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'hello Next')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.handle 
export const POST = app.handle 
```

Elysia will work normally as expected because of WinterCG compliance, however, some plugins like **Elysia Static** may not work if you are running Nextjs on Node.

You can treat the Elysia server as a normal Nextjs API route.

With this approach, you can have co-location of both frontend and backend in a single repository and have [End-to-end type safety with Eden](../eden/overview.html) with both client-side and server action

Please refer to [Nextjs Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#static-route-handlers) for more information.

## Prefix [​](nextjs.html#prefix)

Because our Elysia server is not in the root directory of the app router, you need to annotate the prefix to the Elysia server.

For example, if you place Elysia server in **app/user/\[\[...slugs]]/route.ts**, you need to annotate prefix as **/user** to Elysia server.

typescript

```
// app/api/[[...slugs]]/route.ts
import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/user' }) 
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.handle
export const POST = app.handle
```

This will ensure that Elysia routing will work properly in any location you place it.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/integrations/nextjs.md)

Last updated:

Pager

[Previous pagetrpc](../plugins/trpc.html)

[Next pageExpo](expo.html)


=== bun-elysia-docs/elysiajs.com/integrations/sveltekit.html ===
[Skip to content](sveltekit.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](nextjs.html)

[Expo](expo.html)

[Astro](astro.html)

[SvelteKit](sveltekit.html)

Outline

# Integration with SvelteKit [​](sveltekit.html#integration-with-sveltekit)

With SvelteKit, you can run Elysia on server routes.

1. Create **src/routes/\[...slugs]/+server.ts**.
2. In **+server.ts**, create or import an existing Elysia server
3. Export the handler with the name of method you want to expose

typescript

```
// src/routes/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';

const app = new Elysia()
    .get('/', () => 'hello SvelteKit')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const GET: RequestHandler = ({ request }) => app.handle(request)
export const POST: RequestHandler = ({ request }) => app.handle(request)
```

You can treat the Elysia server as a normal SvelteKit server route.

With this approach, you can have co-location of both frontend and backend in a single repository and have [End-to-end type-safety with Eden](../eden/overview.html) with both client-side and server action

Please refer to [SvelteKit Routing](https://kit.svelte.dev/docs/routing#server) for more information.

## Prefix [​](sveltekit.html#prefix)

If you place an Elysia server not in the root directory of the app router, you need to annotate the prefix to the Elysia server.

For example, if you place Elysia server in **src/routes/api/\[...slugs]/+server.ts**, you need to annotate prefix as **/api** to Elysia server.

typescript

```
// src/routes/api/[...slugs]/+server.ts

import { 

Elysia






, 

t






 } from 'elysia';


const 

app






 = new 

Elysia






({ 

prefix






: '/api' }) 

    .

get






('/', () => 'hi')

    .

post






('/', ({ 

body






 }) => 

body






, {

        

body






: 

t






.

Object






({

            

name






: 

t






.

String






()
        })
    })


type 

RequestHandler






 = (

v






: { 

request






: Request }) => Response | 

Promise






<Response>


export const 

GET






: 

RequestHandler






 = ({ 

request






 }) => 

app






.

handle






(

request






)

export const 

POST






: 

RequestHandler






 = ({ 

request






 }) => 

app






.

handle






(

request






)
```

This will ensure that Elysia routing will work properly in any location you place it.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/integrations/sveltekit.md)

Last updated:

Pager

[Previous pageAstro](astro.html)


=== bun-elysia-docs/elysiajs.com/key-concept.html ===
[Skip to content](key-concept.html#VPContent)

[![](assets/elysia.svg)ElysiaJS](index.html)

Search`K`

Main Navigation [Cheat Sheet](integrations/cheat-sheet.html)[Plugins](plugins/overview.html)[Blog](blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](at-glance.html)

[Quick Start](quick-start.html)

[Tutorial](tutorial.html)

[Key Concept](key-concept.html)

[Table of Content](table-of-content.html)

## Essential

[Route](essential/route.html)

[Handler](essential/handler.html)

[Life Cycle](essential/life-cycle.html)

[Validation](essential/validation.html)

[Plugin](essential/plugin.html)

[Best Practice](essential/best-practice.html)

## Patterns

[Macro](patterns/macro.html)

[Configuration](patterns/configuration.html)

[Cookie](patterns/cookie.html)

[Web Socket](patterns/websocket.html)

[Unit Test](patterns/unit-test.html)

[Mount](patterns/mount.html)

[Trace](patterns/trace.html)

## Recipe

[OpenAPI](recipe/openapi.html)

[Opentelemetry](recipe/opentelemetry.html)

[Drizzle](recipe/drizzle.html)

[React Email](recipe/react-email.html)

[Better Auth](recipe/better-auth.html)

## Eden

[Overview](eden/overview.html)

[Installation](eden/installation.html)

### Eden Treaty

[Overview](eden/treaty/overview.html)

[Parameters](eden/treaty/parameters.html)

[Response](eden/treaty/response.html)

[Web Socket](eden/treaty/websocket.html)

[Config](eden/treaty/config.html)

[Unit Test](eden/treaty/unit-test.html)

[Legacy (Treaty 1)](eden/treaty/legacy.html)

[Eden Fetch](eden/fetch.html)

## Plugins

[Overview](plugins/overview.html)

[Bearer](plugins/bearer.html)

[CORS](plugins/cors.html)

[Cron](plugins/cron.html)

[GraphQL Apollo](plugins/graphql-apollo.html)

[GraphQL Yoga](plugins/graphql-yoga.html)

[HTML](plugins/html.html)

[JWT](plugins/jwt.html)

[OpenTelemetry](plugins/opentelemetry.html)

[Server Timing](plugins/server-timing.html)

[Static](plugins/static.html)

[Stream](plugins/stream.html)

[Swagger](plugins/swagger.html)

[trpc](plugins/trpc.html)

## Integration

[Nextjs](integrations/nextjs.html)

[Expo](integrations/expo.html)

[Astro](integrations/astro.html)

[SvelteKit](integrations/sveltekit.html)

Outline

# Key Concept [​](key-concept.html#key-concept)

### We **highly recommended** you to read this page before start using Elysia. [​](key-concept.html#we-highly-recommended-you-to-read-this-page-before-start-using-elysia)

Although Elysia is a simple library, it has some key concepts that you need to understand to use it effectively.

This page covers most important concepts of Elysia that you should to know.

## Everything is a component [​](key-concept.html#everything-is-a-component)

Every Elysia instance is a component.

A component is a plugin that could plug into other instances.

It could be a router, a store, a service, or anything else.

ts

```

import { 

Elysia






 } from 'elysia'


const 

store






 = new 

Elysia






()

	.

state






({ 

visitor






: 0 })


const 

router






 = new 

Elysia






()

	.

use






(

store






)

	.

get






('/increase', ({ 

store






 }) => 

store






.

visitor






++)


const 

app






 = new 

Elysia






()

	.

use






(

router






)

	.

get






('/', ({ 

store






 }) => 

store






)

	.

listen






(3000)
```

This force you to break down your application into small pieces, making it to add or remove features easily.

Learn more about this in [plugin](essential/plugin.html).

## Scope [​](key-concept.html#scope)

By default, event/life-cycle in each instance is isolated from each other.

ts

```

import { 

Elysia






 } from 'elysia'


const 

ip






 = new 

Elysia






()

	.

derive






(({ 

server






, 

request






 }) => ({

		

ip






: 

server






?.

requestIP






(

request






)
	}))

	.

get






('/ip', ({ 

ip






 }) => 

ip






)


const 

server






 = new 

Elysia






()

	.

use






(

ip






)

	.

get






('/ip', ({ ip }) => 

ip






)
Property 'ip' does not exist on type '{ body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends number | keyof StatusMap, const T = Code extends 100 | ... 58 more ... | 511 ? { ...; }[Code] : Code>(cod...'.
	.

listen






(3000)
```

In this example, the `ip` property is only share in it's own instance but not in the `server` instance.

To share the lifecycle, in our case, an `ip` property with `server` instance, we need to **explicitly says it** could be shared.

ts

```

import { 

Elysia






 } from 'elysia'


const 

ip






 = new 

Elysia






()

	.

derive






(

		{ 

as






: 'global' }, 

		({ 

server






, 

request






 }) => ({

			

ip






: 

server






?.

requestIP






(

request






)
		})
	)

	.

get






('/ip', ({ 

ip






 }) => 

ip






)


const 

server






 = new 

Elysia






()

	.

use






(

ip






)

	.

get






('/ip', ({ 

ip






 }) => 

ip






)

	.

listen






(3000)
```

In this example, `ip` property is shared between `ip` and `server` instance because we define it as `global`.

This force you to think about the scope of each property preventing you from accidentally sharing the property between instances.

Learn more about this in [scope](essential/plugin.html#scope).

## Method Chaining [​](key-concept.html#method-chaining)

Elysia code should always use **method chaining**.

As Elysia type system is complex, every methods in Elysia returns a new type reference.

**This is important** to ensure type integrity and inference.

typescript

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

    .

state






('build', 1)
    // Store is strictly typed

    .

get






('/', ({ 

store






: { 

build






 } }) => 

build






)

    .

listen






(3000)
```

In the code above **state** returns a new **ElysiaInstance** type, adding a `build` type.

### ❌ Don't: Use Elysia without method chaining [​](key-concept.html#%E2%9D%8C-don-t-use-elysia-without-method-chaining)

Without using method chaining, Elysia doesn't save these new types, leading to no type inference.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()




app






.

state






('build', 1)




app






.

get






('/', ({ 

store






: { build } }) => 

build






)
Property 'build' does not exist on type '{}'.



app






.

listen






(3000)
```

We recommend to **always use method chaining** to provide an accurate type inference.

## Dependency [​](key-concept.html#dependency)

By default, each instance will be re-execute everytime it's applied to another instance.

This can cause a duplication of the same method being applied multiple times but some methods should be called once like **lifecycle** or **routes**.

To prevent lifecycle methods from being duplicated, we can add **an unique identifier** to the instance.

ts

```

import { 

Elysia






 } from 'elysia'


const 

ip






 = new 

Elysia






({ 

name






: 'ip' })

	.

derive






(

		{ 

as






: 'global' },

		({ 

server






, 

request






 }) => ({

			

ip






: 

server






?.

requestIP






(

request






)
		})
	)

	.

get






('/ip', ({ 

ip






 }) => 

ip






)


const 

router1






 = new 

Elysia






()

	.

use






(

ip






)

	.

get






('/ip-1', ({ 

ip






 }) => 

ip






)


const 

router2






 = new 

Elysia






()

	.

use






(

ip






)

	.

get






('/ip-2', ({ 

ip






 }) => 

ip






)


const 

server






 = new 

Elysia






()

	.

use






(

router1






)

	.

use






(

router2






)
```

This will prevent the `ip` property from being call multiple time by applying deduplication using an unique name.

Once `name` is provided, the instance will become a **singleton**. Allowing Elysia to apply plugin deduplication.

Allowing us to reuse the same instance multiple time without performance penalty.

This force you to think about the dependency of each instance, allowing for easily applying migration or refactoring.

Learn more about this in [plugin deduplication](essential/plugin.html#plugin-deduplication).

## Type Inference [​](key-concept.html#type-inference)

Elysia has a complex type system that allows you to infer types from the instance.

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


const 

app






 = new 

Elysia






()

	.

post






('/', ({ 

body






 }) => 

body






, {





		

body






: 

t






.

Object






({

			

name






: 

t






.

String






()
		})
	})
```

If possible, **always use an inline function** to provide an accurate type inference.

If you need to apply a separate function, eg. MVC's controller pattern. It's recommended to destructure properties from inline function to prevent unnecessary type inference.

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


abstract class 

Controller






 {

	static 

greet






({ 

name






 }: { 

name






: string }) {

		return 'hello ' + 

name







	}
}


const 

app






 = new 

Elysia






()

	.

post






('/', ({ 

body






 }) => 

Controller






.

greet






(

body






), {

		

body






: 

t






.

Object






({

			

name






: 

t






.

String






()
		})
	})
```

Learn more about this in [Best practice: MVC Controller](essential/best-practice.html#controller).

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/key-concept.md)

Last updated:

Pager

[Previous pageTutorial](tutorial.html)

[Next pageTable of Content](table-of-content.html)


=== bun-elysia-docs/elysiajs.com/patterns/configuration.html ===
[Skip to content](configuration.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](macro.html)

[Configuration](configuration.html)

[Cookie](cookie.html)

[Web Socket](websocket.html)

[Unit Test](unit-test.html)

[Mount](mount.html)

[Trace](trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Configuration [​](configuration.html#configuration)

We can configure Elysia behavior by passing an object to the constructor.

ts

```
import { Elysia } from 'elysia'

new Elysia({
	prefix: '/group'
})
```

Above is an example of configuring Elysia to use `/group` as the path prefix.

## Max body size [​](configuration.html#max-body-size)

We can set the maximum body size by setting [`serve.maxRequestBodySize`](configuration.html#maxrequestbodysize) in the `serve` configuration.

ts

```
import { Elysia } from 'elysia'

new Elysia({
	serve: {
		maxRequestBodySize: 1024 * 1024 * 256 // 256MB
	}
})
```

By default the maximum request body size is 128MB (1024 * 1024 * 128).

## TLS [​](configuration.html#tls)

We can enable TLS (known as successor of SSL) by passing in a value for key and cert; both are required to enable TLS.

ts

```
import { Elysia, file } from 'elysia'

new Elysia({
	serve: {
		tls: {
			cert: file('cert.pem'),
			key: file('key.pem')
		}
	}
})
```

Elysia extends Bun configuration which supports TLS out of the box, powered by BoringSSL.

See [TLS Options](configuration.html#tls-options) for available configuration.

## Config [​](configuration.html#config)

Below is a config accepted by Elysia:

### prefix [​](configuration.html#prefix)

@default `""`

Path prefix of the instance

### name [​](configuration.html#name)

Name of the instance for debugging, and plugin deduplication purpose

### seed [​](configuration.html#seed)

Seed for generating checksum for [plugin deduplication](../essential/plugin.html#plugin-deduplication)

### detail [​](configuration.html#detail)

OpenAPI documentation for documentation generation

This configuration extends [Swagger Specification](https://swagger.io/specification).

@see [Swagger Specification](https://swagger.io/specification)

### tags [​](configuration.html#tags)

OpenAPI tags for documentation generation

Decorate all instance routes with tags

This configuration extends [Tag Object](https://swagger.io/specification/#tag-object)

@see [Tag Object](https://swagger.io/specification/#tag-object)

### precompile [​](configuration.html#precompile)

@default `false`

Warm up Elysia before starting the server

This will perform Ahead of Time compilation and generate code for route handlers

If set to false, Elysia will perform Just in Time compilation

Only required for root instance (instance which use listen) to effect

### aot [​](configuration.html#aot)

@default `false`

Ahead of Time compliation

Reduced performance but faster startup time

## strictPath [​](configuration.html#strictpath)

@default `false`

Whether should Elysia tolerate suffix `/` or vice-versa

#### Example [​](configuration.html#example)

If `strictPath` is set to `true`, Elysia will match `/id` and not `/id/`

ts

```
import { Elysia } from 'elysia'

new Elysia({
	strictPath: true
})
	.get('/id', 'work')
```

Normally, both `/id` and `/id/` will match the route handler (default is `false`)

## cookie [​](configuration.html#cookie)

Set default cookie options

## normalize [​](configuration.html#normalize)

@default `true`

If enabled, the handlers will run a [clean](https://github.com/sinclairzx81/typebox?tab=readme-ov-file#clean) on incoming and outgoing bodies instead of failing directly.

This allows for sending unknown or disallowed properties in the bodies. These will simply be filtered out instead of failing the request.

This has no effect when the schemas allow additional properties.

Since this uses dynamic schema it may have an impact on performance.

## nativeStaticResponse [​](configuration.html#nativestaticresponse)

@default `true` @since 1.1.11

Enable Bun static response.

Whether Elysia should use Bun's static response.

This allows Elysia to improve static content performance and reduce memory significantly.

#### Example [​](configuration.html#example-1)

Elysia will use Bun's static response for static content

ts

```
import { Elysia } from 'elysia'

new Elysia()
	.get('/static', 'work')
```

Above is an equivalent to:

ts

```
Bun.serve({
	static: {
		'static': 'work',
		'/static': '/work'
	}
})
```

TIP

This configuration will only work if using Bun &gt; 1.1.27 as the server

## websocket [​](configuration.html#websocket)

Override websocket configuration

Recommended to leave this as default as Elysia will generate suitable configuration for handling WebSocket automatically

This configuration extends [Bun WebSocket API](https://bun.sh/docs/api/websockets)

## serve [​](configuration.html#serve)

Bun serve configuration.

ts

```
import { Elysia } from 'elysia'

new Elysia({
	serve: {
		hostname: 'elysiajs.com',
		tls: {
			cert: Bun.file('cert.pem'),
			key: Bun.file('key.pem')
		}
	},
})
```

This configuration extends [Bun Serve API](https://bun.sh/docs/api/http) and [Bun TLS](https://bun.sh/docs/api/http#tls)

The following is ported from Bun JSDoc and Bun documentation:

### port [​](configuration.html#port)

@default `3000`

Port to listen on

### unix [​](configuration.html#unix)

If set, the HTTP server will listen on a unix socket instead of a port.

(Cannot be used with hostname+port)

### hostname [​](configuration.html#hostname)

@default `0.0.0.0`

Set the hostname which the server listens on

### maxRequestBodySize [​](configuration.html#maxrequestbodysize)

@default `1024 * 1024 * 128` (128MB)

Set the maximum size of a request body (in bytes)

### reusePort [​](configuration.html#reuseport)

@default `true`

If the `SO_REUSEPORT` flag should be set

This allows multiple processes to bind to the same port, which is useful for load balancing

This configuration is override and turns on by default by Elysia

### id [​](configuration.html#id)

Uniquely identify a server instance with an ID

This string will be used to hot reload the server without interrupting pending requests or websockets. If not provided, a value will be generated. To disable hot reloading, set this value to `null`.

### rejectUnauthorized [​](configuration.html#rejectunauthorized)

@default `NODE_TLS_REJECT_UNAUTHORIZED` environment variable

If set to `false`, any certificate is accepted.

## TLS options [​](configuration.html#tls-options)

This configuration extends [Bun TLS API](https://bun.sh/docs/api/http#tls)

ts

```
import { Elysia } from 'elysia'

new Elysia({
	tls: {
		cert: Bun.file('cert.pem'),
		key: Bun.file('key.pem')
	}
})
```

### cert [​](configuration.html#cert)

Cert chains in PEM format. One cert chain should be provided per private key.

Each cert chain should consist of the PEM formatted certificate for a provided private key, followed by the PEM formatted intermediate certificates (if any), in order, and not including the root CA (the root CA must be pre-known to the peer, see ca).

When providing multiple cert chains, they do not have to be in the same order as their private keys in key.

If the intermediate certificates are not provided, the peer will not be able to validate the certificate, and the handshake will fail.

### key [​](configuration.html#key)

Private keys in PEM format. PEM allows the option of private keys being encrypted. Encrypted keys will be decrypted with options.passphrase.

Multiple keys using different algorithms can be provided either as an array of unencrypted key strings or buffers, or an array of objects in the form .

The object form can only occur in an array.

**object.passphrase** is optional. Encrypted keys will be decrypted with

**object.passphrase** if provided, or **options.passphrase** if it is not.

### ca [​](configuration.html#ca)

Optionally override the trusted CA certificates. Default is to trust the well-known CAs curated by Mozilla.

Mozilla's CAs are completely replaced when CAs are explicitly specified using this option.

### passphrase [​](configuration.html#passphrase)

Shared passphrase for a single private key and/or a PFX.

### dhParamsFile [​](configuration.html#dhparamsfile)

File path to a .pem file custom Diffie Helman parameters

### requestCert [​](configuration.html#requestcert)

@default `false`

If set to `true`, the server will request a client certificate.

### secureOptions [​](configuration.html#secureoptions)

Optionally affect the OpenSSL protocol behavior, which is not usually necessary.

This should be used carefully if at all!

Value is a numeric bitmask of the SSL\_OP\_* options from OpenSSL Options

### serverName [​](configuration.html#servername)

Explicitly set a server name

### lowMemoryMode [​](configuration.html#lowmemorymode)

@default `false`

This sets `OPENSSL_RELEASE_BUFFERS` to 1.

It reduces overall performance but saves some memory.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/patterns/configuration.md)

Last updated:

Pager

[Previous pageMacro](macro.html)

[Next pageCookie](cookie.html)


=== bun-elysia-docs/elysiajs.com/patterns/cookie.html ===
[Skip to content](cookie.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](macro.html)

[Configuration](configuration.html)

[Cookie](cookie.html)

[Web Socket](websocket.html)

[Unit Test](unit-test.html)

[Mount](mount.html)

[Trace](trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Cookie [​](cookie.html#cookie)

To use Cookie, you can extract the cookie property and access its name and value directly.

There's no get/set, you can extract the cookie name and retrieve or update its value directly.

ts

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ cookie: { name } }) => {
        // Get
        name.value

        // Set
        name.value = "New Value"
    })
```

By default, Reactive Cookie can encode/decode type of object automatically allowing us to treat cookie as an object without worrying about the encoding/decoding. **It just works**.

## Reactivity [​](cookie.html#reactivity)

The Elysia cookie is reactive. This means that when you change the cookie value, the cookie will be updated automatically based on approach like signal.

A single source of truth for handling cookies is provided by Elysia cookies, which have the ability to automatically set headers and sync cookie values.

Since cookies are Proxy-dependent objects by default, the extract value can never be **undefined**; instead, it will always be a value of `Cookie<unknown>`, which can be obtained by invoking the **.value** property.

We can treat the cookie jar as a regular object, iteration over it will only iterate over an already-existing cookie value.

## Cookie Attribute [​](cookie.html#cookie-attribute)

To use Cookie attribute, you can either use one of the following:

1. Setting the property directly
2. Using `set` or `add` to update cookie property.

See [cookie attribute config](cookie.html#config) for more information.

### Assign Property [​](cookie.html#assign-property)

You can get/set the property of a cookie like any normal object, the reactivity model synchronizes the cookie value automatically.

ts

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ cookie: { name } }) => {
        // get
        name.domain

        // set
        name.domain = 'millennium.sh'
        name.httpOnly = true
    })
```

## set [​](cookie.html#set)

**set** permits updating multiple cookie properties all at once through **reset all property** and overwrite the property with a new value.

ts

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ cookie: { name } }) => {
        name.set({
            domain: 'millennium.sh',
            httpOnly: true
        })
    })
```

## add [​](cookie.html#add)

Like **set**, **add** allow us to update multiple cookie properties at once, but instead, will only overwrite the property defined instead of resetting.

## remove [​](cookie.html#remove)

To remove a cookie, you can use either:

1. name.remove
2. delete cookie.name

ts

```
import { Elysia } from 'elysia'

new Elysia()
    .get('/', ({ cookie, cookie: { name } }) => {
        name.remove()

        delete cookie.name
    })
```

## Cookie Schema [​](cookie.html#cookie-schema)

You can strictly validate cookie type and providing type inference for cookie by using cookie schema with `t.Cookie`.

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

get






('/', ({ 

cookie






: { 

name






 } }) => {
        // Set

        

name






.

value






 = {

            

id






: 617,

            

name






: 'Summoning 101'
        }
    }, {

        

cookie






: 

t






.

Cookie






({

            

name






: 

t






.

Object






({

                

id






: 

t






.

Numeric






(),

                

name






: 

t






.

String






()
            })
        })
    })
```

## Nullable Cookie [​](cookie.html#nullable-cookie)

To handle nullable cookie value, you can use `t.Optional` on the cookie name you want to be nullable.

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

get






('/', ({ 

cookie






: { 

name






 } }) => {
        // Set

        

name






.

value






 = {

            

id






: 617,

            

name






: 'Summoning 101'
        }
    }, {

        

cookie






: 

t






.

Cookie






({

            

name






: 

t






.

Optional






(

                

t






.

Object






({

                    

id






: 

t






.

Numeric






(),

                    

name






: 

t






.

String






()
                })
            )
        })
    })
```

## Cookie Signature [​](cookie.html#cookie-signature)

With an introduction of Cookie Schema, and `t.Cookie` type, we can create a unified type for handling sign/verify cookie signature automatically.

Cookie signature is a cryptographic hash appended to a cookie's value, generated using a secret key and the content of the cookie to enhance security by adding a signature to the cookie.

This make sure that the cookie value is not modified by malicious actor, helps in verifying the authenticity and integrity of the cookie data.

## Using Cookie Signature [​](cookie.html#using-cookie-signature)

By provide a cookie secret, and `sign` property to indicate which cookie should have a signature verification.

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






()

    .

get






('/', ({ 

cookie






: { 

profile






 } }) => {

        

profile






.

value






 = {

            

id






: 617,

            

name






: 'Summoning 101'
        }
    }, {

        

cookie






: 

t






.

Cookie






({

            

profile






: 

t






.

Object






({

                

id






: 

t






.

Numeric






(),

                

name






: 

t






.

String






()
            })
        }, {

            

secrets






: 'Fischl von Luftschloss Narfidort',

            

sign






: ['profile']
        })
    })
```

Elysia then sign and unsign cookie value automatically.

## Constructor [​](cookie.html#constructor)

You can use Elysia constructor to set global cookie `secret`, and `sign` value to apply to all route globally instead of inlining to every route you need.

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


new 

Elysia






({

    

cookie






: {

        

secrets






: 'Fischl von Luftschloss Narfidort',

        

sign






: ['profile']
    }
})

    .

get






('/', ({ 

cookie






: { 

profile






 } }) => {

        

profile






.

value






 = {

            

id






: 617,

            

name






: 'Summoning 101'
        }
    }, {

        

cookie






: 

t






.

Cookie






({

            

profile






: 

t






.

Object






({

                

id






: 

t






.

Numeric






(),

                

name






: 

t






.

String






()
            })
        })
    })
```

## Cookie Rotation [​](cookie.html#cookie-rotation)

Elysia handle Cookie's secret rotation automatically.

Cookie Rotation is a migration technique to sign a cookie with a newer secret, while also be able to verify the old signature of the cookie.

ts

```
import { Elysia } from 'elysia'

new Elysia({
    cookie: {
        secrets: ['Vengeance will be mine', 'Fischl von Luftschloss Narfidort']
    }
})
```

## Config [​](cookie.html#config)

Below is a cookie config accepted by Elysia.

### secret [​](cookie.html#secret)

The secret key for signing/un-signing cookies.

If an array is passed, will use Key Rotation.

Key rotation is when an encryption key is retired and replaced by generating a new cryptographic key.

* * *

Below is a config that extends from [cookie](https://npmjs.com/package/cookie)

### domain [​](cookie.html#domain)

Specifies the value for the [Domain Set-Cookie attribute](https://tools.ietf.org/html/rfc6265#section-5.2.3).

By default, no domain is set, and most clients will consider the cookie to apply to only the current domain.

### encode [​](cookie.html#encode)

@default `encodeURIComponent`

Specifies a function that will be used to encode a cookie's value.

Since the value of a cookie has a limited character set (and must be a simple string), this function can be used to encode a value into a string suited for a cookie's value.

The default function is the global `encodeURIComponent`, which will encode a JavaScript string into UTF-8 byte sequences and then URL-encode any that fall outside of the cookie range.

### expires [​](cookie.html#expires)

Specifies the Date object to be the value for the [Expires Set-Cookie attribute](https://tools.ietf.org/html/rfc6265#section-5.2.1).

By default, no expiration is set, and most clients will consider this a "non-persistent cookie" and will delete it on a condition like exiting a web browser application.

TIP

The [cookie storage model specification](https://tools.ietf.org/html/rfc6265#section-5.3) states that if both `expires` and `maxAge` are set, then `maxAge` takes precedence, but not all clients may obey this, so if both are set, they should point to the same date and time.

### httpOnly [​](cookie.html#httponly)

@default `false`

Specifies the boolean value for the [HttpOnly Set-Cookie attribute](https://tools.ietf.org/html/rfc6265#section-5.2.6).

When truthy, the HttpOnly attribute is set, otherwise, it is not.

By default, the HttpOnly attribute is not set.

TIP

be careful when setting this to true, as compliant clients will not allow client-side JavaScript to see the cookie in `document.cookie`.

### maxAge [​](cookie.html#maxage)

@default `undefined`

Specifies the number (in seconds) to be the value for the [Max-Age Set-Cookie attribute](https://tools.ietf.org/html/rfc6265#section-5.2.2).

The given number will be converted to an integer by rounding down. By default, no maximum age is set.

TIP

The [cookie storage model specification](https://tools.ietf.org/html/rfc6265#section-5.3) states that if both `expires` and `maxAge` are set, then `maxAge` takes precedence, but not all clients may obey this, so if both are set, they should point to the same date and time.

### path [​](cookie.html#path)

Specifies the value for the [Path Set-Cookie attribute](https://tools.ietf.org/html/rfc6265#section-5.2.4).

By default, the path handler is considered the default path.

### priority [​](cookie.html#priority)

Specifies the string to be the value for the [Priority Set-Cookie attribute](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1). `low` will set the Priority attribute to Low. `medium` will set the Priority attribute to Medium, the default priority when not set. `high` will set the Priority attribute to High.

More information about the different priority levels can be found in [the specification](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).

TIP

This is an attribute that has not yet been fully standardized and may change in the future. This also means many clients may ignore this attribute until they understand it.

### sameSite [​](cookie.html#samesite)

Specifies the boolean or string to be the value for the [SameSite Set-Cookie attribute](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7). `true` will set the SameSite attribute to Strict for strict same-site enforcement. `false` will not set the SameSite attribute. `'lax'` will set the SameSite attribute to Lax for lax same-site enforcement. `'none'` will set the SameSite attribute to None for an explicit cross-site cookie. `'strict'` will set the SameSite attribute to Strict for strict same-site enforcement. More information about the different enforcement levels can be found in [the specification](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).

TIP

This is an attribute that has not yet been fully standardized and may change in the future. This also means many clients may ignore this attribute until they understand it.

### secure [​](cookie.html#secure)

Specifies the boolean value for the [Secure Set-Cookie attribute](https://tools.ietf.org/html/rfc6265#section-5.2.5). When truthy, the Secure attribute is set, otherwise, it is not. By default, the Secure attribute is not set.

TIP

Be careful when setting this to true, as compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/patterns/cookie.md)

Last updated:

Pager

[Previous pageConfiguration](configuration.html)

[Next pageWeb Socket](websocket.html)


=== bun-elysia-docs/elysiajs.com/patterns/macro.html ===
[Skip to content](macro.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](macro.html)

[Configuration](configuration.html)

[Cookie](cookie.html)

[Web Socket](websocket.html)

[Unit Test](unit-test.html)

[Mount](mount.html)

[Trace](trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Macro [​](macro.html#macro)

Macro allows us to define a custom field to the hook.

Macro v2Macro v1

## Macro v2

Macro v2 use an object syntax with return lifecycle like inline hook.

**Elysia.macro** allows us to compose custom heavy logic into a simple configuration available in hook, and **guard** with full type safety.

typescript

```

import { 

Elysia






 } from 'elysia'


const 

plugin






 = new 

Elysia






({ 

name






: 'plugin' })

    .

macro






({

        

hi






(

word






: string) {
            return {

	            

beforeHandle






() {

	                

console






.

log






(

word






)
	            }
            }
        }
    })


const 

app






 = new 

Elysia






()

    .

use






(

plugin






)

    .

get






('/', () => 'hi', {

        

hi






: 'Elysia'
    })
```

Accessing the path should log **"Elysia"** as the results.

### API [​](macro.html#api-1)

**macro** has the same API as hook.

In previous example, we create a **hi** macro accepting a **string**.

We then assigned **hi** to **"Elysia"**, the value was then sent back to the **hi** function, and then the function added a new event to **beforeHandle** stack.

Which is an equivalent of pushing function to **beforeHandle** as the following:

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => 'hi', {
        beforeHandle() {
            console.log('Elysia')
        }
    })
```

**macro** shine when a logic is more complex than accepting a new function, for example creating an authorization layer for each route.

typescript

```

import { 

Elysia






 } from 'elysia'

import { 

auth






 } from './auth'


const 

app






 = new 

Elysia






()

    .

use






(

auth






)

    .

get






('/', ({ 

user






 }) => 

user






, {

        

isAuth






: true,

        

role






: 'admin'
    })
```

Macro v2 can also register a new property to the context, allowing us to access the value directly from the context.

The field can accept anything ranging from string to function, allowing us to create a custom life cycle event.

**macro** will be executed in order from top-to-bottom according to definition in hook, ensure that the stack is handled in the correct order.

## Resolve [​](macro.html#resolve)

You add a property to the context by returning an object with a [**resolve**](../essential/life-cycle.html#resolve) function.

ts

```

import { 

Elysia






 } from 'elysia'


new 

Elysia






()

	.

macro






({

		

user






: (

enabled






: true) => ({

			

resolve






: () => ({

				

user






: 'Pardofelis'
			})
		})
	})

	.

get






('/', ({ 

user






 }) => 

user






, {

		

user






: true
	})
```

In the example above, we add a new property **user** to the context by returning an object with a **resolve** function.

Here's an example that macro resolve could be useful:

- perform authentication and add user to the context
- run an additional database query and add data to the context
- add a new property to the context

## Property shorthand [​](macro.html#property-shorthand)

Starting from Elysia 1.2.10, each property in the macro object can be a function or an object.

If the property is an object, it will be translated to a function that accept a boolean parameter, and will be executed if the parameter is true.

typescript

```
import { Elysia } from 'elysia'

export const auth = new Elysia()
    .macro({
    	// This property shorthand
    	isAuth: {
      		resolve() {
     			return {
         			user: 'saltyaom'
          		}
      		}
        },
        // is equivalent to
        isAuth(enabled: boolean) {
        	if(!enabled) return

        	return {
				resolve() {
					return {
						user
					}
				}
         	}
        }
    })
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/patterns/macro.md)

Last updated:

Pager

[Previous pageBest Practice](../essential/best-practice.html)

[Next pageConfiguration](configuration.html)


=== bun-elysia-docs/elysiajs.com/patterns/mount.html ===
[Skip to content](mount.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](macro.html)

[Configuration](configuration.html)

[Cookie](cookie.html)

[Web Socket](websocket.html)

[Unit Test](unit-test.html)

[Mount](mount.html)

[Trace](trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Mount [​](mount.html#mount)

WinterCG is a standard for web-interoperable runtimes. Supported by Cloudflare, Deno, Vercel Edge Runtime, Netlify Function, and various others, it allows web servers to run interoperably across runtimes that use Web Standard definitions like `Fetch`, `Request`, and `Response`.

Elysia is WinterCG compliant. We are optimized to run on Bun but also openly support other runtimes if possible.

In theory, this allows any framework or code that is WinterCG compliant to be run together, allowing frameworks like Elysia, Hono, Remix, Itty Router to run together in a simple function.

Adhering to this, we implemented the same logic for Elysia by introducing `.mount` method to run with any framework or code that is WinterCG compliant.

## Mount [​](mount.html#mount-1)

To use **.mount**, [simply pass a `fetch` function](https://twitter.com/saltyAom/status/1684786233594290176):

ts

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hello from Elysia')
    .mount('/hono', hono.fetch)
```

A **fetch** function is a function that accepts a Web Standard Request and returns a Web Standard Response with the definition of:

ts

```
// Web Standard Request-like object
// Web Standard Response
type fetch = (request: RequestLike) => Response
```

By default, this declaration is used by:

- Bun
- Deno
- Vercel Edge Runtime
- Cloudflare Worker
- Netlify Edge Function
- Remix Function Handler
- etc.

This allows you to execute all the aforementioned code in a single server environment, making it possible to interact seamlessly with Elysia. You can also reuse existing functions within a single deployment, eliminating the need for a reverse proxy to manage multiple servers.

If the framework also supports a **.mount** function, you can deeply nest a framework that supports it.

ts

```
import { Elysia } from 'elysia'
import { Hono } from 'hono'

const elysia = new Elysia()
    .get('/', () => 'Hello from Elysia inside Hono inside Elysia')

const hono = new Hono()
    .get('/', (c) => c.text('Hello from Hono!'))
    .mount('/elysia', elysia.fetch)

const main = new Elysia()
    .get('/', () => 'Hello from Elysia')
    .mount('/hono', hono.fetch)
    .listen(3000)
```

## Reusing Elysia [​](mount.html#reusing-elysia)

Moreover, you can re-use multiple existing Elysia projects on your server.

ts

```
import { Elysia } from 'elysia'

import A from 'project-a/elysia'
import B from 'project-b/elysia'
import C from 'project-c/elysia'

new Elysia()
    .mount(A)
    .mount(B)
    .mount(C)
```

If an instance passed to `mount` is an Elysia instance, it will be resolved with `use` automatically, providing type-safety and support for Eden by default.

This makes the possibility of an interoperable framework and runtime a reality.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/patterns/mount.md)

Last updated:

Pager

[Previous pageUnit Test](unit-test.html)

[Next pageTrace](trace.html)


=== bun-elysia-docs/elysiajs.com/patterns/trace.html ===
[Skip to content](trace.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](macro.html)

[Configuration](configuration.html)

[Cookie](cookie.html)

[Web Socket](websocket.html)

[Unit Test](unit-test.html)

[Mount](mount.html)

[Trace](trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Trace [​](trace.html#trace)

Performance is an important aspect for Elysia.

We don't want to be fast for benchmarking purposes, we want you to have a real fast server in real-world scenario.

There are many factors that can slow down our app - and it's hard to identify them, but **trace** can helps solve that problem by injecting start and stop code to each life-cycle.

Trace allows us to inject code to before and after of each life-cycle event, block and interact with the execution of the function.

## Trace [​](trace.html#trace-1)

Trace use a callback listener to ensure that callback function is finished before moving on to the next lifecycle event.

To use `trace`, you need to call `trace` method on the Elysia instance, and pass a callback function that will be executed for each life-cycle event.

You may listen to each lifecycle by adding `on` prefix follows by life-cycle name, for example `onHandle` to listen to `handle` event.

ts

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()

    .

trace






(async ({ 

onHandle






 }) => {

	    

onHandle






(({ 

begin






, 

onStop






 }) => {

			

onStop






(({ 

end






 }) => {

        		

console






.

log






('handle took', 

end






 - 

begin






, 'ms')
			})
	    })
    })

    .

get






('/', () => 'Hi')

    .

listen






(3000)
```

Please refer to [Life Cycle Events](../essential/life-cycle.html#events) for more information:

![Elysia Life Cycle](../assets/lifecycle.webp)

## Children [​](trace.html#children)

Every events except `handle` have a children, which is an array of events that are executed inside for each life-cycle event.

You can use `onEvent` to listen to each child event in order

ts

```

import { 

Elysia






 } from 'elysia'


const 

sleep






 = (

time






 = 1000) =>

    new 

Promise






((

resolve






) => 

setTimeout






(

resolve






, 

time






))


const 

app






 = new 

Elysia






()

    .

trace






(async ({ 

onBeforeHandle






 }) => {

        

onBeforeHandle






(({ 

total






, 

onEvent






 }) => {

            

console






.

log






('total children:', 

total






)


            

onEvent






(({ 

onStop






 }) => {

                

onStop






(({ 

elapsed






 }) => {

                    

console






.

log






('child took', 

elapsed






, 'ms')
                })
            })
        })
    })

    .

get






('/', () => 'Hi', {

        

beforeHandle






: [

            function 

setup






() {},

            async function 

delay






() {

                await 

sleep






()
            }
        ]
    })

    .

listen






(3000)
```

In this example, total children will be `2` because there are 2 children in the `beforeHandle` event.

Then we listen to each child event by using `onEvent` and print the duration of each child event.

## Trace Parameter [​](trace.html#trace-parameter)

When each lifecycle is called

ts

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()
	// This is trace parameter
	// hover to view the type

	.

trace






((

parameter






) => {
	})

	.

get






('/', () => 'Hi')

	.

listen






(3000)
```

`trace` accept the following parameters:

### id - `number` [​](trace.html#id-number)

Randomly generated unique id for each request

### context - `Context` [​](trace.html#context-context)

Elysia's [Context](../essential/handler.html#context), eg. `set`, `store`, `query`, `params`

### set - `Context.set` [​](trace.html#set-context-set)

Shortcut for `context.set`, to set a headers or status of the context

### store - `Singleton.store` [​](trace.html#store-singleton-store)

Shortcut for `context.store`, to access a data in the context

### time - `number` [​](trace.html#time-number)

Timestamp of when request is called

### on\[Event] - `TraceListener` [​](trace.html#on-event-tracelistener)

An event listener for each life-cycle event.

You may listen to the following life-cycle:

- **onRequest** - get notified of every new request
- **onParse** - array of functions to parse the body
- **onTransform** - transform request and context before validation
- **onBeforeHandle** - custom requirement to check before the main handler, can skip the main handler if response returned.
- **onHandle** - function assigned to the path
- **onAfterHandle** - interact with the response before sending it back to the client
- **onMapResponse** - map returned value into a Web Standard Response
- **onError** - handle error thrown during processing request
- **onAfterResponse** - cleanup function after response is sent

## Trace Listener [​](trace.html#trace-listener)

A listener for each life-cycle event

ts

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()

	.

trace






(({ 

onBeforeHandle






 }) => {
		// This is trace listener
		// hover to view the type

		

onBeforeHandle






((

parameter






) => {

		})
	})

	.

get






('/', () => 'Hi')

	.

listen






(3000)
```

Each lifecycle listener accept the following

### name - `string` [​](trace.html#name-string)

The name of the function, if the function is anonymous, the name will be `anonymous`

### begin - `number` [​](trace.html#begin-number)

The time when the function is started

### end - `Promise<number>` [​](trace.html#end-promise-number)

The time when the function is ended, will be resolved when the function is ended

### error - `Promise<Error | null>` [​](trace.html#error-promise-error-null)

Error that was thrown in the lifecycle, will be resolved when the function is ended

### onStop - `callback?: (detail: TraceEndDetail) => any` [​](trace.html#onstop-callback-detail-traceenddetail-any)

A callback that will be executed when the lifecycle is ended

ts

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()

	.

trace






(({ 

onBeforeHandle






, 

set






 }) => {

		

onBeforeHandle






(({ 

onStop






 }) => {

			

onStop






(({ 

elapsed






 }) => {

				

set






.

headers






['X-Elapsed'] = 

elapsed






.

toString






()
			})
		})
	})

	.

get






('/', () => 'Hi')

	.

listen






(3000)
```

It's recommended to mutate context in this function as there's a lock mechanism to ensure the context is mutate successfully before moving on to the next lifecycle event

## TraceEndDetail [​](trace.html#traceenddetail)

A parameter that passed to `onStop` callback

### end - `number` [​](trace.html#end-number)

The time when the function is ended

### error - `Error | null` [​](trace.html#error-error-null)

Error that was thrown in the lifecycle

### elapsed - `number` [​](trace.html#elapsed-number)

Elapsed time of the lifecycle or `end - begin`

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/patterns/trace.md)

Last updated:

Pager

[Previous pageMount](mount.html)

[Next pageOpenAPI](../recipe/openapi.html)


=== bun-elysia-docs/elysiajs.com/patterns/unit-test.html ===
[Skip to content](unit-test.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](macro.html)

[Configuration](configuration.html)

[Cookie](cookie.html)

[Web Socket](websocket.html)

[Unit Test](unit-test.html)

[Mount](mount.html)

[Trace](trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Unit Test [​](unit-test.html#unit-test)

Being WinterCG compliant, we can use Request / Response classes to test an Elysia server.

Elysia provides the **Elysia.handle** method, which accepts a Web Standard [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) and returns [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response), simulating an HTTP Request.

Bun includes a built-in [test runner](https://bun.sh/docs/cli/test) that offers a Jest-like API through the `bun:test` module, facilitating the creation of unit tests.

Create **test/index.test.ts** in the root of project directory with the following:

typescript

```
// test/index.test.ts
import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'

describe('Elysia', () => {
    it('return a response', async () => {
        const app = new Elysia().get('/', () => 'hi')

        const response = await app
            .handle(new Request('http://localhost/'))
            .then((res) => res.text())

        expect(response).toBe('hi')
    })
})
```

Then we can perform tests by running **bun test**

bash

```
bun test
```

New requests to an Elysia server must be a fully valid URL, **NOT** a part of a URL.

The request must provide URL as the following:

URLValid[http://localhost/user](http://localhost/user)✅/user❌

We can also use other testing libraries like Jest to create Elysia unit tests.

## Eden Treaty test [​](unit-test.html#eden-treaty-test)

We may use Eden Treaty to create an end-to-end type safety test for Elysia server as follows:

typescript

```
// test/index.test.ts

import { 

describe






, 

expect






, 

it






 } from 'bun:test'

import { 

Elysia






 } from 'elysia'

import { 

treaty






 } from '@elysiajs/eden'


const 

app






 = new 

Elysia






().

get






('/hello', 'hi')


const 

api






 = 

treaty






(

app






)




describe






('Elysia', () => {

    

it






('return a response', async () => {

        const { 

data






, 

error






 } = await 

api






.

hello






.

get






()


        

expect






(

data






).

toBe






('hi')
    })
})
```

See [Eden Treaty Unit Test](../eden/treaty/unit-test.html) for setup and more information.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/patterns/unit-test.md)

Last updated:

Pager

[Previous pageWeb Socket](websocket.html)

[Next pageMount](mount.html)


=== bun-elysia-docs/elysiajs.com/patterns/websocket.html ===
[Skip to content](websocket.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](macro.html)

[Configuration](configuration.html)

[Cookie](cookie.html)

[Web Socket](websocket.html)

[Unit Test](unit-test.html)

[Mount](mount.html)

[Trace](trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# WebSocket [​](websocket.html#websocket)

WebSocket is a realtime protocol for communication between your client and server.

Unlike HTTP where our client repeatedly asking the website for information and waiting for a reply each time, WebSocket sets up a direct line where our client and server can send messages back and forth directly, making the conversation quicker and smoother without having to start over each message.

SocketIO is a popular library for WebSocket, but it is not the only one. Elysia uses [uWebSocket](https://github.com/uNetworking/uWebSockets) which Bun uses under the hood with the same API.

To use websocket, simply call `Elysia.ws()`:

typescript

```
import { Elysia } from 'elysia'

new Elysia()
    .ws('/ws', {
        message(ws, message) {
            ws.send(message)
        }
    })
    .listen(3000)
```

## WebSocket message validation: [​](websocket.html#websocket-message-validation)

Same as normal route, WebSockets also accepts a **schema** object to strictly type and validate requests.

typescript

```
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .ws('/ws', {
        // validate incoming message
        body: t.Object({
            message: t.String()
        }),
        query: t.Object({
            id: t.String()
        }),
        message(ws, { message }) {
            // Get schema from `ws.data`
            const { id } = ws.data.query
            ws.send({
                id,
                message,
                time: Date.now()
            })
        }
    })
    .listen(3000)
```

WebSocket schema can validate the following:

- **message** - An incoming message.
- **query** - Query string or URL parameters.
- **params** - Path parameters.
- **header** - Request's headers.
- **cookie** - Request's cookie
- **response** - Value returned from handler

By default Elysia will parse incoming stringified JSON message as Object for validation.

## Configuration [​](websocket.html#configuration)

You can set Elysia constructor to set the Web Socket value.

ts

```
import { Elysia } from 'elysia'

new Elysia({
    websocket: {
        idleTimeout: 30
    }
})
```

Elysia's WebSocket implementation extends Bun's WebSocket configuration, please refer to [Bun's WebSocket documentation](https://bun.sh/docs/api/websockets) for more information.

The following are a brief configuration from [Bun WebSocket](https://bun.sh/docs/api/websockets#create-a-websocket-server)

### perMessageDeflate [​](websocket.html#permessagedeflate)

@default `false`

Enable compression for clients that support it.

By default, compression is disabled.

### maxPayloadLength [​](websocket.html#maxpayloadlength)

The maximum size of a message.

### idleTimeout [​](websocket.html#idletimeout)

@default `120`

After a connection has not received a message for this many seconds, it will be closed.

### backpressureLimit [​](websocket.html#backpressurelimit)

@default `16777216` (16MB)

The maximum number of bytes that can be buffered for a single connection.

### closeOnBackpressureLimit [​](websocket.html#closeonbackpressurelimit)

@default `false`

Close the connection if the backpressure limit is reached.

## Methods [​](websocket.html#methods)

Below are the new methods that are available to the WebSocket route

## ws [​](websocket.html#ws)

Create a websocket handler

Example:

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .ws('/ws', {
        message(ws, message) {
            ws.send(message)
        }
    })
    .listen(3000)
```

Type:

typescript

```
.ws(endpoint: path, options: Partial<WebSocketHandler<Context>>): this
```

- **endpoint** - A path to exposed as websocket handler
- **options** - Customize WebSocket handler behavior

## WebSocketHandler [​](websocket.html#websockethandler)

WebSocketHandler extends config from [config](websocket.html#configuration).

Below is a config which is accepted by `ws`.

## open [​](websocket.html#open)

Callback function for new websocket connection.

Type:

typescript

```
open(ws: ServerWebSocket<{
    // uid for each connection
    id: string
    data: Context
}>): this
```

## message [​](websocket.html#message)

Callback function for incoming websocket message.

Type:

typescript

```
message(
    ws: ServerWebSocket<{
        // uid for each connection
        id: string
        data: Context
    }>,
    message: Message
): this
```

`Message` type based on `schema.message`. Default is `string`.

## close [​](websocket.html#close)

Callback function for closing websocket connection.

Type:

typescript

```
close(ws: ServerWebSocket<{
    // uid for each connection
    id: string
    data: Context
}>): this
```

## drain [​](websocket.html#drain)

Callback function for the server is ready to accept more data.

Type:

typescript

```
drain(
    ws: ServerWebSocket<{
        // uid for each connection
        id: string
        data: Context
    }>,
    code: number,
    reason: string
): this
```

## parse [​](websocket.html#parse)

`Parse` middleware to parse the request before upgrading the HTTP connection to WebSocket.

## beforeHandle [​](websocket.html#beforehandle)

`Before Handle` middleware which execute before upgrading the HTTP connection to WebSocket.

Ideal place for validation.

## transform [​](websocket.html#transform)

`Transform` middleware which execute before validation.

## transformMessage [​](websocket.html#transformmessage)

Like `transform`, but execute before validation of WebSocket message

## header [​](websocket.html#header)

Additional headers to add before upgrade connection to WebSocket.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/patterns/websocket.md)

Last updated:

Pager

[Previous pageCookie](cookie.html)

[Next pageUnit Test](unit-test.html)


=== bun-elysia-docs/elysiajs.com/plugins/bearer.html ===
[Skip to content](bearer.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Bearer Plugin [​](bearer.html#bearer-plugin)

Plugin for [elysia](https://github.com/elysiajs/elysia) for retrieving the Bearer token.

Install with:

bash

```
bun add @elysiajs/bearer
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { bearer } from '@elysiajs/bearer'

const app = new Elysia()
    .use(bearer())
    .get('/sign', ({ bearer }) => bearer, {
        beforeHandle({ bearer, set }) {
            if (!bearer) {
                set.status = 400
                set.headers[
                    'WWW-Authenticate'
                ] = `Bearer realm='sign', error="invalid_request"`

                return 'Unauthorized'
            }
        }
    })
    .listen(3000)
```

This plugin is for retrieving a Bearer token specified in [RFC6750](https://www.rfc-editor.org/rfc/rfc6750#section-2).

This plugin DOES NOT handle authentication validation for your server. Instead, the plugin leaves the decision to developers to apply logic for handling validation check themselves.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/bearer.md)

Last updated:

Pager

[Previous pageOverview](overview.html)

[Next pageCORS](cors.html)


=== bun-elysia-docs/elysiajs.com/plugins/cors.html ===
[Skip to content](cors.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# CORS Plugin [​](cors.html#cors-plugin)

This plugin adds support for customizing [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) behavior.

Install with:

bash

```
bun add @elysiajs/cors
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'

new Elysia()
    .use(cors())
    .listen(3000)
```

This will set Elysia to accept requests from any origin.

## Config [​](cors.html#config)

Below is a config which is accepted by the plugin

### origin [​](cors.html#origin)

@default `true`

Indicates whether the response can be shared with the requesting code from the given origins.

Value can be one of the following:

- **string** - Name of origin which will directly assign to [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) header.
- **boolean** - If set to true, [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) will be set to `*` (any origins)
- **RegExp** - Pattern to match request's URL, allowed if matched.
- **Function** - Custom logic to allow resource sharing, allow if `true` is returned.
  
  - Expected to have the type of:
  
  typescript
  
  ```
  cors(context: Context) => boolean | void
  ```
- **Array&lt;string | RegExp | Function&gt;** - iterate through all cases above in order, allowed if any of the values are `true`.

* * *

### methods [​](cors.html#methods)

@default `*`

Allowed methods for cross-origin requests.

Assign [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) header.

Value can be one of the following:

- **undefined | null | ''** - Ignore all methods.
- **\*** - Allows all methods.
- **string** - Expects either a single method or a comma-delimited string
  
  - (eg: `'GET, PUT, POST'`)
- **string\[]** - Allow multiple HTTP methods.
  
  - eg: `['GET', 'PUT', 'POST']`

* * *

### allowedHeaders [​](cors.html#allowedheaders)

@default `*`

Allowed headers for an incoming request.

Assign [Access-Control-Allow-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) header.

Value can be one of the following:

- **string** - Expects either a single header or a comma-delimited string
  
  - eg: `'Content-Type, Authorization'`.
- **string\[]** - Allow multiple HTTP headers.
  
  - eg: `['Content-Type', 'Authorization']`

* * *

### exposeHeaders [​](cors.html#exposeheaders)

@default `*`

Response CORS with specified headers.

Assign [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) header.

Value can be one of the following:

- **string** - Expects either a single header or a comma-delimited string.
  
  - eg: `'Content-Type, X-Powered-By'`.
- **string\[]** - Allow multiple HTTP headers.
  
  - eg: `['Content-Type', 'X-Powered-By']`

* * *

### credentials [​](cors.html#credentials)

@default `true`

The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to the frontend JavaScript code when the request's credentials mode [Request.credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials) is `include`.

When a request's credentials mode [Request.credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials) is `include`, browsers will only expose the response to the frontend JavaScript code if the Access-Control-Allow-Credentials value is true.

Credentials are cookies, authorization headers, or TLS client certificates.

Assign [Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) header.

* * *

### maxAge [​](cors.html#maxage)

@default `5`

Indicates how long the results of a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) (that is the information contained in the [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) and [Access-Control-Allow-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) headers) can be cached.

Assign [Access-Control-Max-Age](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) header.

* * *

### preflight [​](cors.html#preflight)

The preflight request is a request sent to check if the CORS protocol is understood and if a server is aware of using specific methods and headers.

Response with **OPTIONS** request with 3 HTTP request headers:

- **Access-Control-Request-Method**
- **Access-Control-Request-Headers**
- **Origin**

This config indicates if the server should respond to preflight requests.

## Pattern [​](cors.html#pattern)

Below you can find the common patterns to use the plugin.

## Allow CORS by top-level domain [​](cors.html#allow-cors-by-top-level-domain)

typescript

```
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
    .use(cors({
        origin: /.*\.saltyaom\.com$/
    }))
    .get('/', () => 'Hi')
    .listen(3000)
```

This will allow requests from top-level domains with `saltyaom.com`

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/cors.md)

Last updated:

Pager

[Previous pageBearer](bearer.html)

[Next pageCron](cron.html)


=== bun-elysia-docs/elysiajs.com/plugins/cron.html ===
[Skip to content](cron.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Cron Plugin [​](cron.html#cron-plugin)

This plugin adds support for running cronjob in the Elysia server.

Install with:

bash

```
bun add @elysiajs/cron
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { cron } from '@elysiajs/cron'

new Elysia()
    .use(
        cron({
            name: 'heartbeat',
            pattern: '*/10 * * * * *',
            run() {
                console.log('Heartbeat')
            }
        })
    )
    .listen(3000)
```

The above code will log `heartbeat` every 10 seconds.

## cron [​](cron.html#cron)

Create a cronjob for the Elysia server.

type:

```
cron(config: CronConfig, callback: (Instance['store']) => void): this
```

`CronConfig` accepts the parameters specified below:

### name [​](cron.html#name)

Job name to register to `store`.

This will register the cron instance to `store` with a specified name, which can be used to reference in later processes eg. stop the job.

### pattern [​](cron.html#pattern)

Time to run the job as specified by [cron syntax](https://en.wikipedia.org/wiki/Cron) specified as below:

```
┌────────────── second (optional)
│ ┌──────────── minute
│ │ ┌────────── hour
│ │ │ ┌──────── day of the month
│ │ │ │ ┌────── month
│ │ │ │ │ ┌──── day of week
│ │ │ │ │ │
* * * * * *
```

This can be generated by tools like [Crontab Guru](https://crontab.guru/)

* * *

This plugin extends the cron method to Elysia using [cronner](https://github.com/hexagon/croner).

Below are the configs accepted by cronner.

### timezone [​](cron.html#timezone)

Time zone in Europe/Stockholm format

### startAt [​](cron.html#startat)

Schedule start time for the job

### stopAt [​](cron.html#stopat)

Schedule stop time for the job

### maxRuns [​](cron.html#maxruns)

Maximum number of executions

### catch [​](cron.html#catch)

Continue execution even if an unhandled error is thrown by a triggered function.

### interval [​](cron.html#interval)

The minimum interval between executions, in seconds.

## Pattern [​](cron.html#pattern-1)

Below you can find the common patterns to use the plugin.

## Stop cronjob [​](cron.html#stop-cronjob)

You can stop cronjob manually by accessing the cronjob name registered to `store`.

typescript

```
import { Elysia } from 'elysia'
import { cron } from '@elysiajs/cron'

const app = new Elysia()
    .use(
        cron({
            name: 'heartbeat',
            pattern: '*/1 * * * * *',
            run() {
                console.log("Heartbeat")
            }
        })
    )
    .get('/stop', ({ store: { cron: { heartbeat } } }) => {
        heartbeat.stop()

        return 'Stop heartbeat'
    })
    .listen(3000)
```

## Predefined patterns [​](cron.html#predefined-patterns)

You can use predefined patterns from `@elysiajs/cron/schedule`

typescript

```
import { Elysia } from 'elysia'
import { cron, Patterns } from '@elysiajs/cron'

const app = new Elysia()
    .use(
        cron({
            name: 'heartbeat',
            pattern: Patterns.everySecond(),
            run() {
                console.log("Heartbeat")
            }
        })
    )
    .get('/stop', ({ store: { cron: { heartbeat } } }) => {
        heartbeat.stop()

        return 'Stop heartbeat'
    })
    .listen(3000)
```

### Functions [​](cron.html#functions)

FunctionDescription`.everySeconds(2)`Run the task every 2 seconds`.everyMinutes(5)`Run the task every 5 minutes`.everyHours(3)`Run the task every 3 hours`.everyHoursAt(3, 15)`Run the task every 3 hours at 15 minutes`.everyDayAt('04:19')`Run the task every day at 04:19`.everyWeekOn(Patterns.MONDAY, '19:30')`Run the task every Monday at 19:30`.everyWeekdayAt('17:00')`Run the task every day from Monday to Friday at 17:00`.everyWeekendAt('11:00')`Run the task on Saturday and Sunday at 11:00

### Function aliases to constants [​](cron.html#function-aliases-to-constants)

FunctionConstant`.everySecond()`EVERY\_SECOND`.everyMinute()`EVERY\_MINUTE`.hourly()`EVERY\_HOUR`.daily()`EVERY\_DAY\_AT\_MIDNIGHT`.everyWeekday()`EVERY\_WEEKDAY`.everyWeekend()`EVERY\_WEEKEND`.weekly()`EVERY\_WEEK`.monthly()`EVERY\_1ST\_DAY\_OF\_MONTH\_AT\_MIDNIGHT`.everyQuarter()`EVERY\_QUARTER`.yearly()`EVERY\_YEAR

### Constants [​](cron.html#constants)

ConstantPattern`.EVERY_SECOND``* * * * * *``.EVERY_5_SECONDS``*/5 * * * * *``.EVERY_10_SECONDS``*/10 * * * * *``.EVERY_30_SECONDS``*/30 * * * * *``.EVERY_MINUTE``*/1 * * * *``.EVERY_5_MINUTES``0 */5 * * * *``.EVERY_10_MINUTES``0 */10 * * * *``.EVERY_30_MINUTES``0 */30 * * * *``.EVERY_HOUR``0 0-23/1 * * *``.EVERY_2_HOURS``0 0-23/2 * * *``.EVERY_3_HOURS``0 0-23/3 * * *``.EVERY_4_HOURS``0 0-23/4 * * *``.EVERY_5_HOURS``0 0-23/5 * * *``.EVERY_6_HOURS``0 0-23/6 * * *``.EVERY_7_HOURS``0 0-23/7 * * *``.EVERY_8_HOURS``0 0-23/8 * * *``.EVERY_9_HOURS``0 0-23/9 * * *``.EVERY_10_HOURS``0 0-23/10 * * *``.EVERY_11_HOURS``0 0-23/11 * * *``.EVERY_12_HOURS``0 0-23/12 * * *``.EVERY_DAY_AT_1AM``0 01 * * *``.EVERY_DAY_AT_2AM``0 02 * * *``.EVERY_DAY_AT_3AM``0 03 * * *``.EVERY_DAY_AT_4AM``0 04 * * *``.EVERY_DAY_AT_5AM``0 05 * * *``.EVERY_DAY_AT_6AM``0 06 * * *``.EVERY_DAY_AT_7AM``0 07 * * *``.EVERY_DAY_AT_8AM``0 08 * * *``.EVERY_DAY_AT_9AM``0 09 * * *``.EVERY_DAY_AT_10AM``0 10 * * *``.EVERY_DAY_AT_11AM``0 11 * * *``.EVERY_DAY_AT_NOON``0 12 * * *``.EVERY_DAY_AT_1PM``0 13 * * *``.EVERY_DAY_AT_2PM``0 14 * * *``.EVERY_DAY_AT_3PM``0 15 * * *``.EVERY_DAY_AT_4PM``0 16 * * *``.EVERY_DAY_AT_5PM``0 17 * * *``.EVERY_DAY_AT_6PM``0 18 * * *``.EVERY_DAY_AT_7PM``0 19 * * *``.EVERY_DAY_AT_8PM``0 20 * * *``.EVERY_DAY_AT_9PM``0 21 * * *``.EVERY_DAY_AT_10PM``0 22 * * *``.EVERY_DAY_AT_11PM``0 23 * * *``.EVERY_DAY_AT_MIDNIGHT``0 0 * * *``.EVERY_WEEK``0 0 * * 0``.EVERY_WEEKDAY``0 0 * * 1-5``.EVERY_WEEKEND``0 0 * * 6,0``.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT``0 0 1 * *``.EVERY_1ST_DAY_OF_MONTH_AT_NOON``0 12 1 * *``.EVERY_2ND_HOUR``0 */2 * * *``.EVERY_2ND_HOUR_FROM_1AM_THROUGH_11PM``0 1-23/2 * * *``.EVERY_2ND_MONTH``0 0 1 */2 *``.EVERY_QUARTER``0 0 1 */3 *``.EVERY_6_MONTHS``0 0 1 */6 *``.EVERY_YEAR``0 0 1 1 *``.EVERY_30_MINUTES_BETWEEN_9AM_AND_5PM``0 */30 9-17 * * *``.EVERY_30_MINUTES_BETWEEN_9AM_AND_6PM``0 */30 9-18 * * *``.EVERY_30_MINUTES_BETWEEN_10AM_AND_7PM``0 */30 10-19 * * *`

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/cron.md)

Last updated:

Pager

[Previous pageCORS](cors.html)

[Next pageGraphQL Apollo](graphql-apollo.html)


=== bun-elysia-docs/elysiajs.com/plugins/graphql-apollo.html ===
[Skip to content](graphql-apollo.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# GraphQL Apollo Plugin [​](graphql-apollo.html#graphql-apollo-plugin)

Plugin for [elysia](https://github.com/elysiajs/elysia) for using GraphQL Apollo.

Install with:

bash

```
bun add graphql @elysiajs/apollo @apollo/server
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { apollo, gql } from '@elysiajs/apollo'

const app = new Elysia()
    .use(
        apollo({
            typeDefs: gql`
                type Book {
                    title: String
                    author: String
                }

                type Query {
                    books: [Book]
                }
            `,
            resolvers: {
                Query: {
                    books: () => {
                        return [
                            {
                                title: 'Elysia',
                                author: 'saltyAom'
                            }
                        ]
                    }
                }
            }
        })
    )
    .listen(3000)
```

Accessing `/graphql` should show Apollo GraphQL playground work with.

## Context [​](graphql-apollo.html#context)

Because Elysia is based on Web Standard Request and Response which is different from Node's `HttpRequest` and `HttpResponse` that Express uses, results in `req, res` being undefined in context.

Because of this, Elysia replaces both with `context` like route parameters.

typescript

```
const app = new Elysia()
    .use(
        apollo({
            typeDefs,
            resolvers,
            context: async ({ request }) => {
                const authorization = request.headers.get('Authorization')

                return {
                    authorization
                }
            }
        })
    )
    .listen(3000)
```

## Config [​](graphql-apollo.html#config)

This plugin extends Apollo's [ServerRegistration](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#options) (which is `ApolloServer`'s' constructor parameter).

Below are the extended parameters for configuring Apollo Server with Elysia.

### path [​](graphql-apollo.html#path)

@default `"/graphql"`

Path to expose Apollo Server.

### enablePlayground [​](graphql-apollo.html#enableplayground)

@default `process.env.ENV !== 'production'`

Determine whether should Apollo should provide Apollo Playground.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/graphql-apollo.md)

Last updated:

Pager

[Previous pageCron](cron.html)

[Next pageGraphQL Yoga](graphql-yoga.html)


=== bun-elysia-docs/elysiajs.com/plugins/graphql-yoga.html ===
[Skip to content](graphql-yoga.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# GraphQL Yoga Plugin [​](graphql-yoga.html#graphql-yoga-plugin)

This plugin integrates GraphQL yoga with Elysia

Install with:

bash

```
bun add @elysiajs/graphql-yoga
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { yoga } from '@elysiajs/graphql-yoga'

const app = new Elysia()
    .use(
        yoga({
            typeDefs: /* GraphQL */`
                type Query {
                    hi: String
                }
            `,
            resolvers: {
                Query: {
                    hi: () => 'Hello from Elysia'
                }
            }
        })
    )
    .listen(3000)
```

Accessing `/graphql` in the browser (GET request) would show you a GraphiQL instance for the GraphQL-enabled Elysia server.

optional: you can install a custom version of optional peer dependencies as well:

bash

```
bun add graphql graphql-yoga
```

## Resolver [​](graphql-yoga.html#resolver)

Elysia uses [Mobius](https://github.com/saltyaom/mobius) to infer type from **typeDefs** field automatically, allowing you to get full type-safety and auto-complete when typing **resolver** types.

## Context [​](graphql-yoga.html#context)

You can add custom context to the resolver function by adding **context**

ts

```
import { Elysia } from 'elysia'
import { yoga } from '@elysiajs/graphql-yoga'

const app = new Elysia()
    .use(
        yoga({
            typeDefs: /* GraphQL */`
                type Query {
                    hi: String
                }
            `,
            context: {
                name: 'Mobius'
            },
            // If context is a function on this doesn't present
            // for some reason it won't infer context type
            useContext(_) {},
            resolvers: {
                Query: {
                    hi: async (parent, args, context) => context.name
                }
            }
        })
    )
    .listen(3000)
```

## Config [​](graphql-yoga.html#config)

This plugin extends [GraphQL Yoga's createYoga options, please refer to the GraphQL Yoga documentation](https://the-guild.dev/graphql/yoga-server/docs) with inlining `schema` config to root.

Below is a config which is accepted by the plugin

### path [​](graphql-yoga.html#path)

@default `/graphql`

Endpoint to expose GraphQL handler

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/graphql-yoga.md)

Last updated:

Pager

[Previous pageGraphQL Apollo](graphql-apollo.html)

[Next pageHTML](html.html)


=== bun-elysia-docs/elysiajs.com/plugins/html.html ===
[Skip to content](html.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# HTML Plugin [​](html.html#html-plugin)

Allows you to use [JSX](html.html#jsx) and HTML with proper headers and support.

Install with:

bash

```
bun add @elysiajs/html
```

Then use it:

tsx

```
import { Elysia } from 'elysia'
import { html, Html } from '@elysiajs/html'

new Elysia()
    .use(html())
    .get(
        '/html',
        () => `
            <html lang='en'>
                <head>
                    <title>Hello World</title>
                </head>
                <body>
                    <h1>Hello World</h1>
                </body>
            </html>`
    )
    .get('/jsx', () => (
        <html lang='en'>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    ))
    .listen(3000)
```

This plugin will automatically add `Content-Type: text/html; charset=utf8` header to the response, add `<!doctype html>`, and convert it into a Response object.

## JSX [​](html.html#jsx)

Elysia HTML is based on [@kitajs/html](https://github.com/kitajs/html) allowing us to define JSX to string in compile time to achieve high performance.

Name your file that needs to use JSX to end with affix **"x"**:

- .js -&gt; .jsx
- .ts -&gt; .tsx

To register the TypeScript type, please append the following to **tsconfig.json**:

jsonc

```
// tsconfig.json
{
    "compilerOptions": {
        "jsx": "react",
        "jsxFactory": "Html.createElement",
        "jsxFragmentFactory": "Html.Fragment"
    }
}
```

That's it, now you can use JSX as your template engine:

tsx

```
import { Elysia } from 'elysia'
import { html, Html } from '@elysiajs/html'

new Elysia()
    .use(html()) 
    .get('/', () => (
        <html lang="en">
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    ))
    .listen(3000)
```

If the error `Cannot find name 'Html'. Did you mean 'html'?` occurs, this import must be added to the JSX template:

tsx

```
import { Html } from '@elysiajs/html'
```

It is important that it is written in uppercase.

## XSS [​](html.html#xss)

Elysia HTML is based use of the Kita HTML plugin to detect possible XSS attacks in compile time.

You can use a dedicated `safe` attribute to sanitize user value to prevent XSS vulnerability.

tsx

```
import { Elysia, t } from 'elysia'
import { html, Html } from '@elysiajs/html'

new Elysia()
    .use(html())
    .post('/', ({ body }) => (
        <html lang="en">
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1 safe>{body}</h1>
            </body>
        </html>
    ), {
        body: t.String()
    })
    .listen(3000)
```

However, when are building a large-scale app, it's best to have a type reminder to detect possible XSS vulnerabilities in your codebase.

To add a type-safe reminder, please install:

sh

```
bun add @kitajs/ts-html-plugin
```

Then appends the following **tsconfig.json**

jsonc

```
// tsconfig.json
{
    "compilerOptions": {
        "jsx": "react",
        "jsxFactory": "Html.createElement",
        "jsxFragmentFactory": "Html.Fragment",
        "plugins": [{ "name": "@kitajs/ts-html-plugin" }]
    }
}
```

## Options [​](html.html#options)

### contentType [​](html.html#contenttype)

- Type: `string`
- Default: `'text/html; charset=utf8'`

The content-type of the response.

### autoDetect [​](html.html#autodetect)

- Type: `boolean`
- Default: `true`

Whether to automatically detect HTML content and set the content-type.

### autoDoctype [​](html.html#autodoctype)

- Type: `boolean | 'full'`
- Default: `true`

Whether to automatically add `<!doctype html>` to a response starting with `<html>`, if not found.

Use `full` to also automatically add doctypes on responses returned without this plugin

ts

```
// without the plugin
app.get('/', () => '<html></html>')

// With the plugin
app.get('/', ({ html }) => html('<html></html>'))
```

### isHtml [​](html.html#ishtml)

- Type: `(value: string) => boolean`
- Default: `isHtml` (exported function)

The function is used to detect if a string is a html or not. Default implementation if length is greater than 7, starts with `<` and ends with `>`.

Keep in mind there's no real way to validate HTML, so the default implementation is a best guess.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/html.md)

Last updated:

Pager

[Previous pageGraphQL Yoga](graphql-yoga.html)

[Next pageJWT](jwt.html)


=== bun-elysia-docs/elysiajs.com/plugins/jwt.html ===
[Skip to content](jwt.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# JWT Plugin [​](jwt.html#jwt-plugin)

This plugin adds support for using JWT in Elysia handler

Install with:

bash

```
bun add @elysiajs/jwt
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { jwt } from '@elysiajs/jwt'

const app = new Elysia()
    .use(
        jwt({
            name: 'jwt',
            secret: 'Fischl von Luftschloss Narfidort'
        })
    )
    .get('/sign/:name', async ({ jwt, cookie: { auth }, params }) => {
        auth.set({
            value: await jwt.sign(params),
            httpOnly: true,
            maxAge: 7 * 86400,
            path: '/profile',
        })

        return `Sign in as ${auth.value}`
    })
    .get('/profile', async ({ jwt, set, cookie: { auth } }) => {
        const profile = await jwt.verify(auth.value)

        if (!profile) {
            set.status = 401
            return 'Unauthorized'
        }

        return `Hello ${profile.name}`
    })
    .listen(3000)
```

## Config [​](jwt.html#config)

This plugin extends config from [jose](https://github.com/panva/jose).

Below is a config that is accepted by the plugin.

### name [​](jwt.html#name)

Name to register `jwt` function as.

For example, `jwt` function will be registered with a custom name.

typescript

```
app
    .use(
        jwt({
            name: 'myJWTNamespace',
            secret: process.env.JWT_SECRETS!
        })
    )
    .get('/sign/:name', ({ myJWTNamespace, params }) => {
        return myJWTNamespace.sign(params)
    .use(
        jwt({
            name: 'jwt',
            secret: 'kunikuzushi',
            exp: '7d'
        })
    )
    .get('/sign/:name', async ({ jwt, params }) => jwt.sign(params))
```

This will sign JWT with an expiration date of the next 7 days.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/jwt.md)

Last updated:

Pager

[Previous pageHTML](html.html)

[Next pageOpenTelemetry](opentelemetry.html)


=== bun-elysia-docs/elysiajs.com/plugins/opentelemetry.html ===
[Skip to content](opentelemetry.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# OpenTelemetry [​](opentelemetry.html#opentelemetry)

To start using OpenTelemetry, install `@elysiajs/opentelemetry` and apply plugin to any instance.

typescript

```
import { Elysia } from 'elysia'
import { opentelemetry } from '@elysiajs/opentelemetry'

import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'

new Elysia()
	.use(
		opentelemetry({
			spanProcessors: [
				new BatchSpanProcessor(
					new OTLPTraceExporter()
				)
			]
		})
	)
```

![jaeger showing collected trace automatically](../blog/elysia-11/jaeger.webp)

Elysia OpenTelemetry is will **collect span of any library compatible OpenTelemetry standard**, and will apply parent and child span automatically.

## Usage [​](opentelemetry.html#usage)

See [opentelemetry](../recipe/opentelemetry.html) for usage and utilities

## Config [​](opentelemetry.html#config)

This plugin extends OpenTelemetry SDK parameters options.

Below is a config which is accepted by the plugin

### autoDetectResources - boolean [​](opentelemetry.html#autodetectresources-boolean)

Detect resources automatically from the environment using the default resource detectors.

default: `true`

### contextManager - ContextManager [​](opentelemetry.html#contextmanager-contextmanager)

Use a custom context manager.

default: `AsyncHooksContextManager`

### textMapPropagator - TextMapPropagator [​](opentelemetry.html#textmappropagator-textmappropagator)

Use a custom propagator.

default: `CompositePropagator` using W3C Trace Context and Baggage

### metricReader - MetricReader [​](opentelemetry.html#metricreader-metricreader)

Add a MetricReader that will be passed to the MeterProvider.

### views - View\[] [​](opentelemetry.html#views-view)

A list of views to be passed to the MeterProvider.

Accepts an array of View-instances. This parameter can be used to configure explicit bucket sizes of histogram metrics.

### instrumentations - (Instrumentation | Instrumentation\[])\[] [​](opentelemetry.html#instrumentations-instrumentation-instrumentation)

Configure instrumentations.

By default `getNodeAutoInstrumentations` is enabled, if you want to enable them you can use either metapackage or configure each instrumentation individually.

default: `getNodeAutoInstrumentations()`

### resource - IResource [​](opentelemetry.html#resource-iresource)

Configure a resource.

Resources may also be detected by using the autoDetectResources method of the SDK.

### resourceDetectors - Array&lt;Detector | DetectorSync&gt; [​](opentelemetry.html#resourcedetectors-array-detector-detectorsync)

Configure resource detectors. By default, the resource detectors are \[envDetector, processDetector, hostDetector]. NOTE: In order to enable the detection, the parameter autoDetectResources has to be true.

If resourceDetectors was not set, you can also use the environment variable OTEL\_NODE\_RESOURCE\_DETECTORS to enable only certain detectors, or completely disable them:

- env
- host
- os
- process
- serviceinstance (experimental)
- all - enable all resource detectors above
- none - disable resource detection

For example, to enable only the env, host detectors:

bash

```
export OTEL_NODE_RESOURCE_DETECTORS="env,host"
```

### sampler - Sampler [​](opentelemetry.html#sampler-sampler)

Configure a custom sampler. By default, all traces will be sampled.

### serviceName - string [​](opentelemetry.html#servicename-string)

Namespace to be identify as.

### spanProcessors - SpanProcessor\[] [​](opentelemetry.html#spanprocessors-spanprocessor)

An array of span processors to register to the tracer provider.

### traceExporter - SpanExporter [​](opentelemetry.html#traceexporter-spanexporter)

Configure a trace exporter. If an exporter is configured, it will be used with a `BatchSpanProcessor`.

If an exporter OR span processor is not configured programmatically, this package will auto setup the default otlp exporter with http/protobuf protocol with a BatchSpanProcessor.

### spanLimits - SpanLimits [​](opentelemetry.html#spanlimits-spanlimits)

Configure tracing parameters. These are the same trace parameters used to configure a tracer.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/opentelemetry.md)

Last updated:

Pager

[Previous pageJWT](jwt.html)

[Next pageServer Timing](server-timing.html)


=== bun-elysia-docs/elysiajs.com/plugins/overview.html ===
[Skip to content](overview.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Overview [​](overview.html#overview)

Elysia is designed to be modular and lightweight.

Following the same idea as Arch Linux (btw, I use Arch):

> Design decisions are made on a case-by-case basis through developer consensus

This is to ensure developers end up with a performant web server they intend to create. By extension, Elysia includes pre-built common pattern plugins for convenient developer usage:

## Official plugins: [​](overview.html#official-plugins)

- [Bearer](bearer.html) - retrieve [Bearer](https://swagger.io/docs/specification/authentication/bearer-authentication/) token automatically
- [CORS](cors.html) - set up [Cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Cron](cron.html) - set up [cron](https://en.wikipedia.org/wiki/Cron) job
- [Eden](../eden/overview.html) - end-to-end type safety client for Elysia
- [GraphQL Apollo](graphql-apollo.html) - run [Apollo GraphQL](https://www.apollographql.com/) on Elysia
- [GraphQL Yoga](graphql-yoga.html) - run [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga) on Elysia
- [HTML](html.html) - handle HTML responses
- [JWT](jwt.html) - authenticate with [JWTs](https://jwt.io/)
- [OpenTelemetry](opentelemetry.html) - add support for OpenTelemetry
- [Server Timing](server-timing.html) - audit performance bottlenecks with the [Server-Timing API](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)
- [Static](static.html) - serve static files/folders
- [Stream](stream.html) - integrate response streaming and [server-sent events (SSEs)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [Swagger](swagger.html) - generate [Swagger](https://swagger.io/) documentation
- [tRPC](trpc.html) - support [tRPC](https://trpc.io/)
- [WebSocket](../patterns/websocket.html) - support [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

## Community plugins: [​](overview.html#community-plugins)

- [BunSai](https://github.com/nikiskaarup/bunsai2) - full-stack agnostic framework for the web, built upon Bun and Elysia
- [Create ElysiaJS](https://github.com/kravetsone/create-elysiajs) - scaffolding your Elysia project with the environment with easy (help with ORM, Linters and Plugins)!
- [Lucia Auth](https://github.com/pilcrowOnPaper/lucia) - authentication, simple and clean
- [Elysia Clerk](https://github.com/wobsoriano/elysia-clerk) - unofficial Clerk authentication plugin
- [Elysia Polyfills](https://github.com/bogeychan/elysia-polyfills) - run Elysia ecosystem on Node.js and Deno
- [Vite server](https://github.com/kravetsone/elysia-vite-server) - plugin which start and decorate [`vite`](https://vitejs.dev/) dev server in `development` and in `production` mode serve static (if it needed)
- [Vite](https://github.com/timnghg/elysia-vite) - serve entry HTML file with Vite's scripts injected
- [Nuxt](https://github.com/trylovetom/elysiajs-nuxt) - easily integrate elysia with nuxt!
- [Remix](https://github.com/kravetsone/elysia-remix) - use [Remix](https://remix.run/) with `HMR` support (powered by [`vite`](https://vitejs.dev/))! Close a really long-standing plugin request [#12](https://github.com/elysiajs/elysia/issues/12)
- [Connect middleware](https://github.com/kravetsone/elysia-connect-middleware) - plugin which allows you to use [`express`](https://www.npmjs.com/package/express)/[`connect`](https://www.npmjs.com/package/connect) middleware directly in Elysia!
- [Elysia Helmet](https://github.com/DevTobias/elysia-helmet) - secure Elysia apps with various HTTP headers
- [Vite Plugin SSR](https://github.com/timnghg/elysia-vite-plugin-ssr) - Vite SSR plugin using Elysia server
- [OAuth 2.0](https://github.com/kravetsone/elysia-oauth2) - a plugin for [OAuth 2.0](https://en.wikipedia.org/wiki/OAuth) Authorization Flow with more than **42** providers and **type-safety**!
- [OAuth2](https://github.com/bogeychan/elysia-oauth2) - handle OAuth 2.0 authorization code flow
- [Elysia OpenID Client](https://github.com/macropygia/elysia-openid-client) - OpenID client based on [openid-client](https://github.com/panva/node-openid-client)
- [Rate Limit](https://github.com/rayriffy/elysia-rate-limit) - simple, lightweight rate limiter
- [Logysia](https://github.com/tristanisham/logysia) - classic logging middleware
- [Logestic](https://github.com/cybercoder-naj/logestic) - an advanced and customisable logging library for ElysiaJS
- [Logger](https://github.com/bogeychan/elysia-logger) - [pino](https://github.com/pinojs/pino)-based logging middleware
- [Elylog](https://github.com/eajr/elylog) - simple stdout logging library with some customization
- [Logify for Elysia.js](https://github.com/0xrasla/logify) - a beautiful, fast, and type-safe logging middleware for Elysia.js applications
- [Nice Logger](https://github.com/tanishqmanuja/nice-logger) - not the nicest, but a pretty nice and sweet logger for Elysia.
- [Sentry](https://github.com/johnny-woodtke/elysiajs-sentry) - capture traces and errors with this [Sentry](https://docs.sentry.io/) plugin
- [Elysia Lambda](https://github.com/TotalTechGeek/elysia-lambda) - deploy on AWS Lambda
- [Decorators](https://github.com/gaurishhs/elysia-decorators) - use TypeScript decorators
- [Autoload](https://github.com/kravetsone/elysia-autoload) - filesystem router based on a directory structure that generates types for [Eden](../eden/overview.html) with [`Bun.build`](https://github.com/kravetsone/elysia-autoload?tab=readme-ov-file#bun-build-usage) support
- [Msgpack](https://github.com/kravetsone/elysia-msgpack) - allows you to work with [MessagePack](https://msgpack.org)[XML](https://github.com/kravetsone/elysia-xml) - allows you to work with XML
- [Autoroutes](https://github.com/wobsoriano/elysia-autoroutes) - filesystem routes
- [Group Router](https://github.com/itsyoboieltr/elysia-group-router) - filesystem and folder-based router for groups
- [Basic Auth](https://github.com/itsyoboieltr/elysia-basic-auth) - basic HTTP authentication
- [ETag](https://github.com/bogeychan/elysia-etag) - automatic HTTP [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) generation
- [Basic Auth](https://github.com/eelkevdbos/elysia-basic-auth) - basic HTTP authentication (using `request` event)
- [i18n](https://github.com/eelkevdbos/elysia-i18next) - [i18n](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n) wrapper based on [i18next](https://www.i18next.com/)
- [Elysia Request ID](https://github.com/gtramontina/elysia-requestid) - add/forward request IDs (`X-Request-ID` or custom)
- [Elysia HTMX](https://github.com/gtramontina/elysia-htmx) - context helpers for [HTMX](https://htmx.org/)
- [Elysia HMR HTML](https://github.com/gtrabanco/elysia-hmr-html) - reload HTML files when changing any file in a directory
- [Elysia Inject HTML](https://github.com/gtrabanco/elysia-inject-html) - inject HTML code in HTML files
- [Elysia HTTP Error](https://github.com/yfrans/elysia-http-error) - return HTTP errors from Elysia handlers
- [Elysia Http Status Code](https://github.com/sylvain12/elysia-http-status-code) - integrate HTTP status codes
- [NoCache](https://github.com/gaurishhs/elysia-nocache) - disable caching
- [Elysia Tailwind](https://github.com/gtramontina/elysia-tailwind) - compile [Tailwindcss](https://tailwindcss.com/) in a plugin.
- [Elysia Compression](https://github.com/gusb3ll/elysia-compression) - compress response
- [Elysia IP](https://github.com/gaurishhs/elysia-ip) - get the IP Address
- [OAuth2 Server](https://github.com/myazarc/elysia-oauth2-server) - developing an OAuth2 Server with Elysia
- [Elysia Flash Messages](https://github.com/gtramontina/elysia-flash-messages) - enable flash messages
- [Elysia AuthKit](https://github.com/gtramontina/elysia-authkit) - unnoficial [WorkOS' AuthKit](https://www.authkit.com/) authentication
- [Elysia Error Handler](https://github.com/gtramontina/elysia-error-handler) - simpler error handling
- [Elysia env](https://github.com/yolk-oss/elysia-env) - typesafe environment variables with typebox
- [Elysia Drizzle Schema](https://github.com/Edsol/elysia-drizzle-schema) - helps to use Drizzle ORM schema inside elysia swagger model.
- [Unify-Elysia](https://github.com/qlaffont/unify-elysia) - unify error code for Elysia
- [Unify-Elysia-GQL](https://github.com/qlaffont/unify-elysia-gql) - unify error code for Elysia GraphQL Server (Yoga &amp; Apollo)
- [Elysia Auth Drizzle](https://github.com/qlaffont/elysia-auth-drizzle) - library who handle authentification with JWT (Header/Cookie/QueryParam).
- [graceful-server-elysia](https://github.com/qlaffont/graceful-server-elysia) - library inspired by [graceful-server](https://github.com/gquittet/graceful-server).
- [Logixlysia](https://github.com/PunGrumpy/logixlysia) - a beautiful and simple logging middleware for ElysiaJS with colors and timestamps.
- [Elysia Fault](https://github.com/vitorpldev/elysia-fault) - a simple and customizable error handling middleware with the possibility of creating your own HTTP errors
- [Elysia Compress](https://github.com/vermaysha/elysia-compress) - ElysiaJS plugin to compress responses inspired by [@fastify/compress](https://github.com/fastify/fastify-compress)
- [@labzzhq/compressor](https://github.com/labzzhq/compressor/) - Compact Brilliance, Expansive Results: HTTP Compressor for Elysia and Bunnyhop with gzip, deflate and brotli support.
- [Elysia Accepts](https://github.com/morigs/elysia-accepts) - Elysia plugin for accept headers parsing and content negotiation
- [Elysia Compression](https://github.com/chneau/elysia-compression) - Elysia plugin for compressing responses
- [Elysia Logger](https://github.com/chneau/elysia-logger) - Elysia plugin for logging HTTP requests and responses inspired by [hono/logger](https://hono.dev/docs/middleware/builtin/logger)
- [Elysia CQRS](https://github.com/jassix/elysia-cqrs) - Elysia plugin for CQRS pattern
- [Elysia Supabase](https://github.com/mastermakrela/elysia-supabase) - Seamlessly integrate [Supabase](https://supabase.com/) authentication and database functionality into Elysia, allowing easy access to authenticated user data and Supabase client instance. Especially useful for [Edge Functions](https://supabase.com/docs/guides/functions).
- [Elysia XSS](https://www.npmjs.com/package/elysia-xss) - a plugin for Elysia.js that provides XSS (Cross-Site Scripting) protection by sanitizing request body data.
- [Elysiajs Helmet](https://www.npmjs.com/package/elysiajs-helmet) - a comprehensive security middleware for Elysia.js applications that helps secure your apps by setting various HTTP headers.
- [Decorators for Elysia.js](https://github.com/Ateeb-Khan-97/better-elysia) - seamlessly develop and integrate APIs, Websocket and Streaming APIs with this small library.

## Complementary projects: [​](overview.html#complementary-projects)

- [prismabox](https://github.com/m1212e/prismabox) - Generator for typebox schemes based on your database models, works well with elysia

* * *

If you have a plugin written for Elysia, feel free to add your plugin to the list by **clicking *Edit this page on GitHub*** below 👇

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/overview.md)

Last updated:

Pager

[Previous pageEden Fetch](../eden/fetch.html)

[Next pageBearer](bearer.html)


=== bun-elysia-docs/elysiajs.com/plugins/server-timing.html ===
[Skip to content](server-timing.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Server Timing Plugin [​](server-timing.html#server-timing-plugin)

This plugin adds support for auditing performance bottlenecks with Server Timing API

Install with:

bash

```
bun add @elysiajs/server-timing
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { serverTiming } from '@elysiajs/server-timing'

new Elysia()
    .use(serverTiming())
    .get('/', () => 'hello')
    .listen(3000)
```

Server Timing then will append header 'Server-Timing' with log duration, function name, and detail for each life-cycle function.

To inspect, open browser developer tools &gt; Network &gt; \[Request made through Elysia server] &gt; Timing.

![Developer tools showing Server Timing screenshot](../assets/server-timing.webp)

Now you can effortlessly audit the performance bottleneck of your server.

## Config [​](server-timing.html#config)

Below is a config which is accepted by the plugin

### enabled [​](server-timing.html#enabled)

@default `NODE_ENV !== 'production'`

Determine whether or not Server Timing should be enabled

### allow [​](server-timing.html#allow)

@default `undefined`

A condition whether server timing should be log

### trace [​](server-timing.html#trace)

@default `undefined`

Allow Server Timing to log specified life-cycle events:

Trace accepts objects of the following:

- request: capture duration from request
- parse: capture duration from parse
- transform: capture duration from transform
- beforeHandle: capture duration from beforeHandle
- handle: capture duration from the handle
- afterHandle: capture duration from afterHandle
- total: capture total duration from start to finish

## Pattern [​](server-timing.html#pattern)

Below you can find the common patterns to use the plugin.

- [Allow Condition](server-timing.html#allow-condition)

## Allow Condition [​](server-timing.html#allow-condition)

You may disable Server Timing on specific routes via `allow` property

ts

```
import { Elysia } from 'elysia'
import { serverTiming } from '@elysiajs/server-timing'

new Elysia()
    .use(
        serverTiming({
            allow: ({ request }) => {
                return new URL(request.url).pathname !== '/no-trace'
            }
        })
    )
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/server-timing.md)

Last updated:

Pager

[Previous pageOpenTelemetry](opentelemetry.html)

[Next pageStatic](static.html)


=== bun-elysia-docs/elysiajs.com/plugins/static.html ===
[Skip to content](static.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Static Plugin [​](static.html#static-plugin)

This plugin can serve static files/folders for Elysia Server

Install with:

bash

```
bun add @elysiajs/static
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

new Elysia()
    .use(staticPlugin())
    .listen(3000)
```

By default, the static plugin default folder is `public`, and registered with `/public` prefix.

Suppose your project structure is:

```
| - src
  | - index.ts
| - public
  | - takodachi.png
  | - nested
    | - takodachi.png
```

The available path will become:

- /public/takodachi.png
- /public/nested/takodachi.png

## Config [​](static.html#config)

Below is a config which is accepted by the plugin

### assets [​](static.html#assets)

@default `"public"`

Path to the folder to expose as static

### prefix [​](static.html#prefix)

@default `"/public"`

Path prefix to register public files

### ignorePatterns [​](static.html#ignorepatterns)

@default `[]`

List of files to ignore from serving as static files

### staticLimit [​](static.html#staticlimit)

@default `1024`

By default, the static plugin will register paths to the Router with a static name, if the limits are exceeded, paths will be lazily added to the Router to reduce memory usage. Tradeoff memory with performance.

### alwaysStatic [​](static.html#alwaysstatic)

@default `false`

If set to true, static files path will be registered to Router skipping the `staticLimits`.

### headers [​](static.html#headers)

@default `{}`

Set response headers of files

### indexHTML [​](static.html#indexhtml)

@default `false`

If set to true, the `index.html` file from the static directory will be served for any request that is matching neither a route nor any existing static file.

## Pattern [​](static.html#pattern)

Below you can find the common patterns to use the plugin.

- [Single File](static.html#single-file)

## Single file [​](static.html#single-file)

Suppose you want to return just a single file, you can use `file` instead of using the static plugin

typescript

```
import { Elysia, file } from 'elysia'

new Elysia()
    .get('/file', () => file('public/takodachi.png'))
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/static.md)

Last updated:

Pager

[Previous pageServer Timing](server-timing.html)

[Next pageStream](stream.html)


=== bun-elysia-docs/elysiajs.com/plugins/stream.html ===
[Skip to content](stream.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Stream Plugin [​](stream.html#stream-plugin)

WARNING

This plugin is in maintenance mode and will not receive new features. We recommend using the [Generator Stream instead](../essential/handler.html#stream)

This plugin adds support for streaming response or sending Server-Sent Event back to the client.

Install with:

bash

```
bun add @elysiajs/stream
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { Stream } from '@elysiajs/stream'

new Elysia()
    .get('/', () => new Stream(async (stream) => {
        stream.send('hello')

        await stream.wait(1000)
        stream.send('world')

        stream.close()
    }))
    .listen(3000)
```

By default, `Stream` will return `Response` with `content-type` of `text/event-stream; charset=utf8`.

## Constructor [​](stream.html#constructor)

Below is the constructor parameter accepted by `Stream`:

1. Stream:
   
   - Automatic: Automatically stream response from a provided value
     
     - Iterable
     - AsyncIterable
     - ReadableStream
     - Response
   - Manual: Callback of `(stream: this) => unknown` or `undefined`
2. Options: `StreamOptions`
   
   - [event](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event): A string identifying the type of event described
   - [retry](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#retry): The reconnection time in milliseconds

## Method [​](stream.html#method)

Below is the method provided by `Stream`:

### send [​](stream.html#send)

Enqueue data to stream to send back to the client

### close [​](stream.html#close)

Close the stream

### wait [​](stream.html#wait)

Return a promise that resolves in the provided value in ms

### value [​](stream.html#value)

Inner value of the `ReadableStream`

## Pattern [​](stream.html#pattern)

Below you can find the common patterns to use the plugin.

- [OpenAI](stream.html#openai)
- [Fetch Stream](stream.html#fetch-stream)
- [Server Sent Event](stream.html#server-sent-event)

## OpenAI [​](stream.html#openai)

Automatic mode is triggered when the parameter is either `Iterable` or `AsyncIterable` streaming the response back to the client automatically.

Below is an example of integrating ChatGPT into Elysia.

ts

```
new Elysia()
    .get(
        '/ai',
        ({ query: { prompt } }) =>
            new Stream(
                openai.chat.completions.create({
                    model: 'gpt-3.5-turbo',
                    stream: true,
                    messages: [{
                        role: 'user',
                        content: prompt
                    }]
                })
            )
    )
```

By default [openai](https://npmjs.com/package/openai) chatGPT completion returns `AsyncIterable` so you should be able to wrap the OpenAI in `Stream`.

## Fetch Stream [​](stream.html#fetch-stream)

You can pass a fetch from an endpoint that returns the stream to proxy a stream.

This is useful for those endpoints that use AI text generation since you can proxy it directly, eg. [Cloudflare AI](https://developers.cloudflare.com/workers-ai/models/llm/#examples---chat-style-with-system-prompt-preferred).

ts

```
const model = '@cf/meta/llama-2-7b-chat-int8'
const endpoint = `https://api.cloudflare.com/client/v4/accounts/${process.env.ACCOUNT_ID}/ai/run/${model}`

new Elysia()
    .get('/ai', ({ query: { prompt } }) =>
        fetch(endpoint, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${API_TOKEN}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: 'You are a friendly assistant' },
                    { role: 'user', content: prompt }
                ]
            })
        })
    )
```

## Server Sent Event [​](stream.html#server-sent-event)

Manual mode is triggered when the parameter is either `callback` or `undefined`, allowing you to control the stream.

### callback-based [​](stream.html#callback-based)

Below is an example of creating a Server-Sent Event endpoint using a constructor callback

ts

```
new Elysia()
    .get('/source', () =>
        new Stream((stream) => {
            const interval = setInterval(() => {
                stream.send('hello world')
            }, 500)

            setTimeout(() => {
                clearInterval(interval)
                stream.close()
            }, 3000)
        })
    )
```

### value-based [​](stream.html#value-based)

Below is an example of creating a Server-Sent Event endpoint using a value-based

ts

```
new Elysia()
    .get('/source', () => {
        const stream = new Stream()

        const interval = setInterval(() => {
            stream.send('hello world')
        }, 500)

        setTimeout(() => {
            clearInterval(interval)
            stream.close()
        }, 3000)

        return stream
    })
```

Both callback-based and value-based streams work in the same way but with different syntax for your preference.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/stream.md)

Last updated:

Pager

[Previous pageStatic](static.html)

[Next pageSwagger](swagger.html)


=== bun-elysia-docs/elysiajs.com/plugins/swagger.html ===
[Skip to content](swagger.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Swagger Plugin [​](swagger.html#swagger-plugin)

This plugin generates a Swagger endpoint for an Elysia server

Install with:

bash

```
bun add @elysiajs/swagger
```

Then use it:

typescript

```
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

new Elysia()
    .use(swagger())
    .get('/', () => 'hi')
    .post('/hello', () => 'world')
    .listen(3000)
```

Accessing `/swagger` would show you a Scalar UI with the generated endpoint documentation from the Elysia server. You can also access the raw OpenAPI spec at `/swagger/json`.

## Config [​](swagger.html#config)

Below is a config which is accepted by the plugin

### provider [​](swagger.html#provider)

@default `scalar`

UI Provider for documentation. Default to Scalar.

### scalar [​](swagger.html#scalar)

Configuration for customizing Scalar.

Please refer to the [Scalar config](https://github.com/scalar/scalar/blob/main/documentation/configuration.md)

### swagger [​](swagger.html#swagger)

Configuration for customizing Swagger.

Please refer to the [Swagger specification](https://swagger.io/specification/v2/).

### excludeStaticFile [​](swagger.html#excludestaticfile)

@default `true`

Determine if Swagger should exclude static files.

### path [​](swagger.html#path)

@default `/swagger`

Endpoint to expose Swagger

### exclude [​](swagger.html#exclude)

Paths to exclude from Swagger documentation.

Value can be one of the following:

- **string**
- **RegExp**
- **Array&lt;string | RegExp&gt;**

## Pattern [​](swagger.html#pattern)

Below you can find the common patterns to use the plugin.

## Change Swagger Endpoint [​](swagger.html#change-swagger-endpoint)

You can change the swagger endpoint by setting [path](swagger.html#path) in the plugin config.

typescript

```
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

new Elysia()
    .use(
        swagger({
            path: '/v2/swagger'
        })
    )
    .listen(3000)
```

## Customize Swagger info [​](swagger.html#customize-swagger-info)

typescript

```
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

new Elysia()
    .use(
        swagger({
            documentation: {
                info: {
                    title: 'Elysia Documentation',
                    version: '1.0.0'
                }
            }
        })
    )
    .listen(3000)
```

## Using Tags [​](swagger.html#using-tags)

Elysia can separate the endpoints into groups by using the Swaggers tag system

Firstly define the available tags in the swagger config object

typescript

```
app.use(
    swagger({
        documentation: {
            tags: [
                { name: 'App', description: 'General endpoints' },
                { name: 'Auth', description: 'Authentication endpoints' }
            ]
        }
    })
)
```

Then use the details property of the endpoint configuration section to assign that endpoint to the group

typescript

```
app.get('/', () => 'Hello Elysia', {
    detail: {
        tags: ['App']
    }
})

app.group('/auth', (app) =>
    app.post(
        '/sign-up',
        async ({ body }) =>
            db.user.create({
                data: body,
                select: {
                    id: true,
                    username: true
                }
            }),
        {
            detail: {
                tags: ['Auth']
            }
        }
    )
)
```

Which will produce a swagger page like the following ![image](../assets/swagger-demo.webp)

## Security Configuration [​](swagger.html#security-configuration)

To secure your API endpoints, you can define security schemes in the Swagger configuration. The example below demonstrates how to use Bearer Authentication (JWT) to protect your endpoints:

typescript

```
app.use(
    swagger({
        documentation: {
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT'
                    }
                }
            }
        }
    })
)

export const addressController = new Elysia({
    prefix: '/address',
    detail: {
        tags: ['Address'],
        security: [
            {
                bearerAuth: []
            }
        ]
    }
})
```

This configuration ensures that all endpoints under the `/address` prefix require a valid JWT token for access.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/swagger.md)

Last updated:

Pager

[Previous pageStream](stream.html)

[Next pagetrpc](trpc.html)


=== bun-elysia-docs/elysiajs.com/plugins/trpc.html ===
[Skip to content](trpc.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](../recipe/openapi.html)

[Opentelemetry](../recipe/opentelemetry.html)

[Drizzle](../recipe/drizzle.html)

[React Email](../recipe/react-email.html)

[Better Auth](../recipe/better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](overview.html)

[Bearer](bearer.html)

[CORS](cors.html)

[Cron](cron.html)

[GraphQL Apollo](graphql-apollo.html)

[GraphQL Yoga](graphql-yoga.html)

[HTML](html.html)

[JWT](jwt.html)

[OpenTelemetry](opentelemetry.html)

[Server Timing](server-timing.html)

[Static](static.html)

[Stream](stream.html)

[Swagger](swagger.html)

[trpc](trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# tRPC Plugin [​](trpc.html#trpc-plugin)

This plugin adds support for using [tRPC](https://trpc.io/)

Install with:

bash

```
bun add @elysiajs/trpc @trpc/server @elysiajs/websocket
```

Then use it:

typescript

```
import { compile as c, trpc } from "@elysiajs/trpc";
import { initTRPC } from "@trpc/server";
import { Elysia, t as T } from "elysia";

const t = initTRPC.create();
const p = t.procedure;

const router = t.router({
  greet: p

    // 💡 Using Zod
    //.input(z.string())
    // 💡 Using Elysia's T
    .input(c(T.String()))
    .query(({ input }) => input),
});

export type Router = typeof router;

const app = new Elysia().use(trpc(router)).listen(3000);
```

## trpc [​](trpc.html#trpc)

Accept the tRPC router and register to Elysia's handler.

type:

```
trpc(router: Router, option?: {
    endpoint?: string
}): this
```

`Router` is the TRPC Router instance.

### endpoint [​](trpc.html#endpoint)

The path to the exposed TRPC endpoint.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/plugins/trpc.md)

Last updated:

Pager

[Previous pageSwagger](swagger.html)

[Next pageNextjs](../integrations/nextjs.html)


=== bun-elysia-docs/elysiajs.com/quick-start.html ===
[Skip to content](quick-start.html#VPContent)

[![](assets/elysia.svg)ElysiaJS](index.html)

Search`K`

Main Navigation [Cheat Sheet](integrations/cheat-sheet.html)[Plugins](plugins/overview.html)[Blog](blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](at-glance.html)

[Quick Start](quick-start.html)

[Tutorial](tutorial.html)

[Key Concept](key-concept.html)

[Table of Content](table-of-content.html)

## Essential

[Route](essential/route.html)

[Handler](essential/handler.html)

[Life Cycle](essential/life-cycle.html)

[Validation](essential/validation.html)

[Plugin](essential/plugin.html)

[Best Practice](essential/best-practice.html)

## Patterns

[Macro](patterns/macro.html)

[Configuration](patterns/configuration.html)

[Cookie](patterns/cookie.html)

[Web Socket](patterns/websocket.html)

[Unit Test](patterns/unit-test.html)

[Mount](patterns/mount.html)

[Trace](patterns/trace.html)

## Recipe

[OpenAPI](recipe/openapi.html)

[Opentelemetry](recipe/opentelemetry.html)

[Drizzle](recipe/drizzle.html)

[React Email](recipe/react-email.html)

[Better Auth](recipe/better-auth.html)

## Eden

[Overview](eden/overview.html)

[Installation](eden/installation.html)

### Eden Treaty

[Overview](eden/treaty/overview.html)

[Parameters](eden/treaty/parameters.html)

[Response](eden/treaty/response.html)

[Web Socket](eden/treaty/websocket.html)

[Config](eden/treaty/config.html)

[Unit Test](eden/treaty/unit-test.html)

[Legacy (Treaty 1)](eden/treaty/legacy.html)

[Eden Fetch](eden/fetch.html)

## Plugins

[Overview](plugins/overview.html)

[Bearer](plugins/bearer.html)

[CORS](plugins/cors.html)

[Cron](plugins/cron.html)

[GraphQL Apollo](plugins/graphql-apollo.html)

[GraphQL Yoga](plugins/graphql-yoga.html)

[HTML](plugins/html.html)

[JWT](plugins/jwt.html)

[OpenTelemetry](plugins/opentelemetry.html)

[Server Timing](plugins/server-timing.html)

[Static](plugins/static.html)

[Stream](plugins/stream.html)

[Swagger](plugins/swagger.html)

[trpc](plugins/trpc.html)

## Integration

[Nextjs](integrations/nextjs.html)

[Expo](integrations/expo.html)

[Astro](integrations/astro.html)

[SvelteKit](integrations/sveltekit.html)

Outline

# Quick Start [​](quick-start.html#quick-start)

Elysia is a TypeScript backend framework with multiple runtime support but optimized for Bun.

However, you can use Elysia with other runtimes like Node.js.

BunNode.jsWeb Standard

## Bun

Elysia is optimized for Bun which is a JavaScript runtime that aims to be a drop-in replacement for Node.js.

You can install Bun with the command below:

MacOS/LinuxWindows

bash

```
curl -fsSL https://bun.sh/install | bash
```

bash

```
powershell -c "irm bun.sh/install.ps1 | iex"
```

Auto InstallationManual Installation

## Auto Installation

We recommend starting a new Elysia server using `bun create elysia`, which sets up everything automatically.

bash

```
bun create elysia app
```

Once done, you should see the folder name `app` in your directory.

bash

```
cd app
```

Start a development server by:

bash

```
bun dev
```

Navigate to [localhost:3000](http://localhost:3000) should greet you with "Hello Elysia".

TIP

Elysia ships you with `dev` command to automatically reload your server on file change.

## Next Steps [​](quick-start.html#next-steps)

We recommend checking out the either one of the following:

[**Key Concept (5 minutes)**  
\
The core concept of Elysia and how to use it.](key-concept.html)

[**Tutorial (15 minutes)**  
\
A step-by-step guide walkthrough Elysia's features.](tutorial.html)

If you have any questions, feel free to ask in our [Discord](https://discord.gg/elysia) community.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/quick-start.md)

Last updated:

Pager

[Previous pageAt Glance](at-glance.html)

[Next pageTutorial](tutorial.html)


=== bun-elysia-docs/elysiajs.com/recipe/better-auth.html ===
[Skip to content](better-auth.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](openapi.html)

[Opentelemetry](opentelemetry.html)

[Drizzle](drizzle.html)

[React Email](react-email.html)

[Better Auth](better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Better Auth [​](better-auth.html#better-auth)

Better Auth is framework-agnostic authentication (and authorization) framework for TypeScript. It provides a comprehensive set of features out of the box and includes a plugin ecosystem that simplifies adding advanced functionalities.

Better Auth has a cli tool to generate auth schema and migrate our database as well. It currently has 3 database adapters:

- [Prisma](https://www.prisma.io/)
- [Drizzle](https://orm.drizzle.team/)
- [Mongoose](https://mongoosejs.com/)

## Better Auth CLI [​](better-auth.html#better-auth-cli)

Better Auth has a cli tool to generate auth schema with the following core tables in our database: `user`, `session`, `account`, and `verification`. More information about the core schema can be found in [Better Auth Core Schema](https://www.better-auth.com/docs/concepts/database#core-schema).

To read more on configuring your database, please refer to [Better Auth Database](https://www.better-auth.com/docs/concepts/database).

To read more on how to use the cli, please refer to [Better Auth CLI](https://www.better-auth.com/docs/concepts/cli).

## Installation [​](better-auth.html#installation)

To install Better Auth, run the following command:

bash

```
bun add better-auth
```

Make sure to set your environment variables for better auth secret `BETTER_AUTH_SECRET=` and other enviroment variables such as Github and Google client id and secret.

In your project inside the `src` folder, create a `libs/auth` or `utils/auth` folder, and create a `auth.ts` file inside it and copy the following code:

## Better Auth Instance [​](better-auth.html#better-auth-instance)

ts

```
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../../database";
import { account, session, user, verification } from "../../database/schema";
export const auth = betterAuth({
  database: drizzleAdapter(db, { // We're using Drizzle as our database
    provider: "pg",
    /*
    * Map your schema into a better-auth schema
    */
    schema: {
      user,
      session,
      verification,
      account,
    },
  }),
  emailAndPassword: {  
    enabled: true // If you want to use email and password auth
  },
  socialProviders: {
    /*
    * We're using Google and Github as our social provider, 
    * make sure you have set your environment variables
    */
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
```

Now just run to generate an auth schema with the necessary tables.

bash

```
bunx @better-auth/cli generate --config ./src/libs/auth/auth.ts
```

Additionally you can use the `--output` option to specify the output directory for the generated files. We can then use the drizzle migrate command to migrate our database `drizzle-kit migrate`.

## Better Auth View [​](better-auth.html#better-auth-view)

We need to setup a view to handle contexts for better auth. Create a file inside `src/utils/auth-view.ts` or `src/libs/auth/auth-view.ts` and copy the following code:

ts

```
import { Context } from "elysia";
import { auth } from "./auth";

const betterAuthView = (context: Context) => {
    const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
    if(BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
      console.log(context.request)
      return auth.handler(context.request);
    }
    else {
      context.error(405)
    }
  }

export default betterAuthView;
```

## Better Auth Middleware [​](better-auth.html#better-auth-middleware)

We can setup a simple middleware to handle better auth. Create a file inside `src/middlewares/auth-middleware.ts` and copy the following code:

ts

```
import { Session, User } from "better-auth/types";
import { auth } from "../../utils/auth/auth";
import { Context } from "elysia";
 
export const userMiddleware = async (c: Context) => {
  const session = await auth.api.getSession({ headers: c.request.headers });
 
  if (!session) {
    c.set.status = 401;
    return { success: 'error', message: "Unauthorized Access: Token is missing" };
  }
 
  return {
    user: session.user,
    session: session.session
  }
}

export const userInfo = (user: User | null, session: Session | null) => {
  return {
    user: user,
    session: session
  }
}
```

## Attaching Better Auth Into Our Elysia App [​](better-auth.html#attaching-better-auth-into-our-elysia-app)

Inside our index.ts file, we can attach the auth view so that it listens to our auth routes and add the following code:

ts

```
const app = new Elysia()
.use(cors()).use(swagger()).all("/api/auth/*", betterAuthView);

app.listen(process.env.BACKEND_PORT || 8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
```

Our Auth Should now be working as expected! We can then just access our auth routes from our frontend as such:

ts

```
import { createAuthClient } from "better-auth/client"
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL! 
})

export const signinGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  
  return data;
};
```

For a detailed client side guide do check out [Better Auth Frontend](https://www.better-auth.com/docs/concepts/client)

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/recipe/better-auth.md)

Last updated:

Pager

[Previous pageReact Email](react-email.html)

[Next pageOverview](../eden/overview.html)


=== bun-elysia-docs/elysiajs.com/recipe/drizzle.html ===
[Skip to content](drizzle.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](openapi.html)

[Opentelemetry](opentelemetry.html)

[Drizzle](drizzle.html)

[React Email](react-email.html)

[Better Auth](better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# Drizzle [​](drizzle.html#drizzle)

Drizzle ORM is a headless TypeScript ORM with a focus on type safety and developer experience.

We may convert Drizzle schema to Elysia validation models using `drizzle-typebox`

### Drizzle Typebox [​](drizzle.html#drizzle-typebox)

[Elysia.t](../essential/validation.html#elysia-type) is a fork of TypeBox, allowing us to use any TypeBox type in Elysia directly.

We can convert Drizzle schema into TypeBox schema using ["drizzle-typebox"](https://npmjs.org/package/drizzle-typebox), and use it directly on Elysia's schema validation.

### Here's how it works: [​](drizzle.html#here-s-how-it-works)

1. Define your database schema in Drizzle.
2. Convert Drizzle schema into Elysia validation models using `drizzle-typebox`.
3. Use the converted Elysia validation models to ensure type validation.
4. OpenAPI schema is generated from Elysia validation models.
5. Add [Eden Treaty](../eden/overview.html) to add type-safety to your frontend.

```
                                                    * ——————————————— *
                                                    |                 |
                                               | -> |  Documentation  |
* ————————— *             * ———————— * OpenAPI |    |                 |
|           |   drizzle-  |          | ——————— |    * ——————————————— *
|  Drizzle  | —————————-> |  Elysia  |
|           |  -typebox   |          | ——————— |    * ——————————————— *
* ————————— *             * ———————— *   Eden  |    |                 |
                                               | -> |  Frontend Code  |
												    |                 |
												    * ——————————————— *
```

## Installation [​](drizzle.html#installation)

To install Drizzle, run the following command:

bash

```
bun add drizzle-orm drizzle-typebox
```

Then you need to pin `@sinclair/typebox` as there might be a mismatch version between `drizzle-typebox` and `Elysia`, this may cause conflict of Symbols between two versions.

We recommend pinning the version of `@sinclair/typebox` to the **minimum version** used by `elysia` by using:

bash

```
grep "@sinclair/typebox" node_modules/elysia/package.json
```

We may use `override` field in `package.json` to pin the version of `@sinclair/typebox`:

json

```
{
  "override": {
  	"@sinclair/typebox": "0.32.4"
  }
}
```

## Drizzle schema [​](drizzle.html#drizzle-schema)

Assuming we have a `user` table in our codebase as follows:

src/database/schema.ts

ts

```
import { relations } from 'drizzle-orm'
import {
    pgTable,
    varchar,
    timestamp
} from 'drizzle-orm/pg-core'

import { createId } from '@paralleldrive/cuid2'

export const user = pgTable(
    'user',
    {
        id: varchar('id')
            .$defaultFn(() => createId())
            .primaryKey(),
        username: varchar('username').notNull().unique(),
        password: varchar('password').notNull(),
        email: varchar('email').notNull().unique(),
        salt: varchar('salt', { length: 64 }).notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    }
)

export const table = {
	user
} as const

export type Table = typeof table
```

## drizzle-typebox [​](drizzle.html#drizzle-typebox-1)

We may convert the `user` table into TypeBox models by using `drizzle-typebox`:

src/index.ts

ts

```
import { createInsertSchema } from 'drizzle-typebox'
import { Table } from './database/schema'

const _createUser = createInsertSchema(table.user, {
	// Replace email with Elysia's email type
	email: t.String({ format: 'email' })
})

new Elysia()
	.post('/sign-up', ({ body }) => {
		// Create a new user
	}, {
		body: t.Omit(
			_createUser,
			['id', 'salt', 'createdAt']
		)
	})
```

This allows us to reuse the database schema in Elysia validation models

## Type instantiation is possibly infinite [​](drizzle.html#type-instantiation-is-possibly-infinite)

If you got an error like **Type instantiation is possibly infinite** this is because of the circular reference between `drizzle-typebox` and `Elysia`.

If we nested a type from drizzle-typebox into Elysia schema, it will cause an infinite loop of type instantiation.

To prevent this, we need to **explicitly define a type between `drizzle-typebox` and `Elysia`** schema:

ts

```
import { t } from 'elysia'
import { createInsertSchema } from 'drizzle-typebox'

import { table } from './database/schema'

const _createUser = createInsertSchema(table.user, {
	email: t.String({ format: 'email' })
})

// ✅ This works, by referencing the type from `drizzle-typebox`
const createUser = t.Omit(
	_createUser,
	['id', 'salt', 'createdAt']
)

// ❌ This will cause an infinite loop of type instantiation
const createUser = t.Omit(
	createInsertSchema(table.user, {
		email: t.String({ format: 'email' })
	}),
	['id', 'salt', 'createdAt']
)
```

Always declare a variable for `drizzle-typebox` and reference it if you want to use Elysia type

## Utility [​](drizzle.html#utility)

As we are likely going to use `t.Pick` and `t.Omit` to exclude or include certain fields, it may be cumbersome to repeat the process:

We recommend using these utility functions **(copy as-is)** to simplify the process:

src/database/utils.ts

ts

```
/**
 * @lastModified 2024-10-10
 * @see https://elysiajs.com/recipe/drizzle.html#utility
 */

import { Kind, type TObject } from '@sinclair/typebox'
import {
    createInsertSchema,
    createSelectSchema,
    type BuildInsertSchema,
    type BuildSelectSchema
} from 'drizzle-typebox'

import { table } from './schema'
import type { Table } from 'drizzle-orm'

type Spread<
    T extends TObject | Table,
    Mode extends 'select' | 'insert' | undefined
> =
    T extends TObject<infer Fields>
        ? {
            [K in keyof Fields]: Fields[K]
        }
        : T extends Table
        ? Mode extends 'select'
            ? BuildSelectSchema<T, {}>
            : Mode extends 'insert'
                ? BuildInsertSchema<T, {}>
                : {}
        : {}

/**
* Spread a Drizzle schema into a plain object
*/
export const spread = <
    T extends TObject | Table,
    Mode extends 'select' | 'insert' | undefined
>(
    schema: T,
    mode?: Mode
): Spread<T, Mode> => {
    const newSchema: Record<string, unknown> = {}
    let table

    switch (mode) {
	    case 'insert':
	    case 'select':
	        if (Kind in schema) {
	            table = schema
	            break
	        }

	        table =
	            mode === 'insert'
	                ? createInsertSchema(schema)
	                : createSelectSchema(schema)

	        break

        default:
            if (!(Kind in schema)) throw new Error('Expect a schema')
            table = schema
    }

    for (const key of Object.keys(table.properties))
        newSchema[key] = table.properties[key]

    return newSchema as any
}

const a = spread(table.user, 'insert')

/**
* Spread a Drizzle Table into a plain object
*
* If `mode` is 'insert', the schema will be refined for insert
* If `mode` is 'select', the schema will be refined for select
* If `mode` is undefined, the schema will be spread as is, models will need to be refined manually
*/
export const spreads = <
    T extends Record<string, TObject | Table>,
    Mode extends 'select' | 'insert' | undefined
>(
    models: T,
    mode?: Mode
): {
    [K in keyof T]: Spread<T[K], Mode>
} => {
    const newSchema: Record<string, unknown> = {}
    const keys = Object.keys(models)

    for (const key of keys) newSchema[key] = spread(models[key], mode)

    return newSchema as any
}
```

This utility function will convert Drizzle schema into a plain object, which can pick by property name as plain object:

ts

```
// ✅ Using spread utility function
const user = spread(table.user, 'insert')

const createUser = t.Object({
	id: user.id, // { type: 'string' }
	username: user.username, // { type: 'string' }
	password: user.password // { type: 'string' }
})

// ⚠️ Using t.Pick
const _createUser = createInsertSchema(table.user)

const createUser = t.Pick(
	_createUser,
	['id', 'username', 'password']
)
```

### Table Singleton [​](drizzle.html#table-singleton)

We recommend using a singleton pattern to store the table schema, this will allow us to access the table schema from anywhere in the codebase:

src/database/model.ts

ts

```
import { table } from './schema'
import { spreads } from './utils'

export const db = {
	insert: spreads({
		user: table.user,
	}, 'insert'),
	select: spreads({
		user: table.user,
	}, 'select')
} as const
```

This will allow us to access the table schema from anywhere in the codebase:

src/index.ts

ts

```
import { Elysia } from 'elysia'
import { db } from './database/model'

const { user } = db.insert

new Elysia()
	.post('/sign-up', ({ body }) => {
		// Create a new user
	}, {
		body: t.Object({
			id: user.username,
			username: user.username,
			password: user.password
		})
	})
```

### Refinement [​](drizzle.html#refinement)

If type refinement is needed, you may use `createInsertSchema` and `createSelectSchema` to refine the schema directly.

src/database/model.ts

ts

```
import { t } from 'elysia'
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox'

import { table } from './schema'
import { spreads } from './utils'

export const db = {
	insert: spreads({
		user: createInsertSchema(table.user, {
			email: t.String({ format: 'email' })
		}),
	}, 'insert')),
	select: spreads({
		user: createSelectSchema(table.user, {
			email: t.String({ format: 'email' })
		})
	}, 'select')
} as const
```

In the code above, we refine a `user.email` schema to include a `format` property

The `spread` utility function will skip a refined schema, so you can use it as is.

* * *

For more information, please refer to the [Drizzle ORM](https://orm.drizzle.team) and [Drizzle TypeBox](https://orm.drizzle.team/docs/typebox) documentation.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/recipe/drizzle.md)

Last updated:

Pager

[Previous pageOpentelemetry](opentelemetry.html)

[Next pageReact Email](react-email.html)


=== bun-elysia-docs/elysiajs.com/recipe/openapi.html ===
[Skip to content](openapi.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](openapi.html)

[Opentelemetry](opentelemetry.html)

[Drizzle](drizzle.html)

[React Email](react-email.html)

[Better Auth](better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# OpenAPI [​](openapi.html#openapi)

Elysia has first-class support and follows OpenAPI schema by default.

Elysia can automatically generate an API documentation page by providing a Swagger plugin.

To generate the Swagger page, install the plugin:

bash

```
bun add @elysiajs/swagger
```

And register the plugin to the server:

typescript

```
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
    .use(swagger())
```

By default, Elysia use OpenAPI V3 schema and [Scalar UI](http://scalar.com) by default

For Swagger plugin configuration, see the [Swagger plugin page](../plugins/swagger.html).

## Route definitions [​](openapi.html#route-definitions)

We add route information by providing a schema type.

However, sometime defining a type only isn't clear what the route might work. You can use `schema.detail` fields to explictly define what the route is all about.

typescript

```
import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

new Elysia()
    .use(swagger())
    .post('/sign-in', ({ body }) => body, {
        body: t.Object(
            {
                username: t.String(),
                password: t.String({
                	minLength: 8,
                	description: 'User password (at least 8 characters)'
                })
            },
            { 
                description: 'Expected an username and password'
            } 
        ),
        detail: { 
            summary: 'Sign in the user', 
            tags: ['authentication'] 
        } 
    })
```

The detail fields follows an OpenAPI V3 definition with auto-completion and type-safety by default.

Detail is then passed to Swagger to put the description to Swagger route.

### detail [​](openapi.html#detail)

`detail` extends the [OpenAPI Operation Object](https://swagger.io/specification#operation-object)

The detail field is an object that can be use to describe information about the route for API documentation.

Which may contains the following fields:

### tags [​](openapi.html#tags)

An array of tags for the operation. Tags can be used for logical grouping of operations by resources or any other qualifier.

### summary [​](openapi.html#summary)

A short summary of what the operation does.

### description [​](openapi.html#description)

A verbose explanation of the operation behavior.

### externalDocs [​](openapi.html#externaldocs)

Additional external documentation for this operation.

### operationId [​](openapi.html#operationid)

A unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive.

### deprecated [​](openapi.html#deprecated)

Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is `false`.

### security [​](openapi.html#security)

A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement (`{}`) can be included in the array.

## Hide [​](openapi.html#hide)

You can hide the route from the Swagger page by setting `detail.hide` to `true`

typescript

```
import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

new Elysia()
    .use(swagger())
    .post('/sign-in', ({ body }) => body, {
        body: t.Object(
            {
                username: t.String(),
                password: t.String()
            },
            {
                description: 'Expected an username and password'
            }
        ),
        detail: { 
        	hide: true
        } 
    })
```

## Tags group [​](openapi.html#tags-group)

Elysia may accept tags to add an entire instance or group of routes to a specific tag.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia({
	tags: ['user']
})
	.get('/user', 'user')
	.get('/admin', 'admin')
```

## Guard [​](openapi.html#guard)

Alternatively, Elysia may accept guards to add an entire instance or group of routes to a specific guard.

typescript

```
import { Elysia, t } from 'elysia'

new Elysia()
	.guard({
		detail: {
			description: 'Require user to be logged in'
		}
	})
	.get('/user', 'user')
	.get('/admin', 'admin')
```

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/recipe/openapi.md)

Last updated:

Pager

[Previous pageTrace](../patterns/trace.html)

[Next pageOpentelemetry](opentelemetry.html)


=== bun-elysia-docs/elysiajs.com/recipe/opentelemetry.html ===
[Skip to content](opentelemetry.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](openapi.html)

[Opentelemetry](opentelemetry.html)

[Drizzle](drizzle.html)

[React Email](react-email.html)

[Better Auth](better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# OpenTelemetry [​](opentelemetry.html#opentelemetry)

To start using OpenTelemetry, install `@elysiajs/opentelemetry` and apply plugin to any instance.

typescript

```
import { Elysia } from 'elysia'
import { opentelemetry } from '@elysiajs/opentelemetry'

import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'

new Elysia()
	.use(
		opentelemetry({
			spanProcessors: [
				new BatchSpanProcessor(
					new OTLPTraceExporter()
				)
			]
		})
	)
```

![jaeger showing collected trace automatically](../blog/elysia-11/jaeger.webp)

Elysia OpenTelemetry is will **collect span of any library compatible OpenTelemetry standard**, and will apply parent and child span automatically.

In the code above, we apply `Prisma` to trace how long each query took.

By applying OpenTelemetry, Elysia will then:

- collect telemetry data
- Grouping relevant lifecycle together
- Measure how long each function took
- Instrument HTTP request and response
- Collect error and exception

You may export telemetry data to Jaeger, Zipkin, New Relic, Axiom or any other OpenTelemetry compatible backend.

![axiom showing collected trace from OpenTelemetry](../blog/elysia-11/axiom.webp)

Here's an example of exporting telemetry to [Axiom](https://axiom.co)

typescript

```
import { Elysia } from 'elysia'
import { opentelemetry } from '@elysiajs/opentelemetry'

import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'

new Elysia()
	.use(
		opentelemetry({
			spanProcessors: [
				new BatchSpanProcessor(
					new OTLPTraceExporter({
						url: 'https://api.axiom.co/v1/traces', 
						headers: { 
						    Authorization: `Bearer ${Bun.env.AXIOM_TOKEN}`, 
						    'X-Axiom-Dataset': Bun.env.AXIOM_DATASET
						} 
					})
				)
			]
		})
	)
```

## OpenTelemetry SDK [​](opentelemetry.html#opentelemetry-sdk)

Elysia OpenTelemetry is for applying OpenTelemetry to Elysia server only.

You may use OpenTelemetry SDK normally, and the span is run under Elysia's request span, it will be automatically appear in Elysia trace.

However, we also provide a `getTracer`, and `record` utility to collect span from any part of your application.

typescript

```
import { Elysia } from 'elysia'
import { record } from '@elysiajs/opentelemetry'

export const plugin = new Elysia()
	.get('', () => {
		return record('database.query', () => {
			return db.query('SELECT * FROM users')
		})
	})
```

## Record utility [​](opentelemetry.html#record-utility)

`record` is an equivalent to OpenTelemetry's `startActiveSpan` but it will handle auto-closing and capture exception automatically.

You may think of `record` as a label for your code that will be shown in trace.

### Prepare your codebase for observability [​](opentelemetry.html#prepare-your-codebase-for-observability)

Elysia OpenTelemetry will group lifecycle and read the **function name** of each hook as the name of the span.

It's a good time to **name your function**.

If your hook handler is an arrow function, you may refactor it to named function to understand the trace better, otherwise your trace span will be named as `anonymous`.

typescript

```
const bad = new Elysia()
	// ⚠️ span name will be anonymous
	.derive(async ({ cookie: { session } }) => {
		return {
			user: await getProfile(session)
		}
	})

const good = new Elysia()
	// ✅ span name will be getProfile
	.derive(async function getProfile({ cookie: { session } }) {
		return {
			user: await getProfile(session)
		}
	})
```

## getCurrentSpan [​](opentelemetry.html#getcurrentspan)

`getCurrentSpan` is a utility to get the current span of the current request when you are outside of the handler.

typescript

```
import { getCurrentSpan } from '@elysiajs/opentelemetry'

function utility() {
	const span = getCurrentSpan()
	span.setAttributes({
		'custom.attribute': 'value'
	})
}
```

This works outside of the handler by retriving current span from `AsyncLocalStorage`

## setAttribute [​](opentelemetry.html#setattribute)

`setAttribute` is a utility to set attribute to the current span.

typescript

```
import { setAttribute } from '@elysiajs/opentelemetry'

function utility() {
	setAttribute('custom.attribute', 'value')
}
```

This is a syntax sugar for `getCurrentSpan().setAttributes`

## Configuration [​](opentelemetry.html#configuration)

See [opentelemetry plugin](../plugins/opentelemetry.html) for configuration option and definition.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/recipe/opentelemetry.md)

Last updated:

Pager

[Previous pageOpenAPI](openapi.html)

[Next pageDrizzle](drizzle.html)


=== bun-elysia-docs/elysiajs.com/recipe/react-email.html ===
[Skip to content](react-email.html#VPContent)

[![](../assets/elysia.svg)ElysiaJS](../index.html)

Search`K`

Main Navigation [Cheat Sheet](../integrations/cheat-sheet.html)[Plugins](../plugins/overview.html)[Blog](../blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](../at-glance.html)

[Quick Start](../quick-start.html)

[Tutorial](../tutorial.html)

[Key Concept](../key-concept.html)

[Table of Content](../table-of-content.html)

## Essential

[Route](../essential/route.html)

[Handler](../essential/handler.html)

[Life Cycle](../essential/life-cycle.html)

[Validation](../essential/validation.html)

[Plugin](../essential/plugin.html)

[Best Practice](../essential/best-practice.html)

## Patterns

[Macro](../patterns/macro.html)

[Configuration](../patterns/configuration.html)

[Cookie](../patterns/cookie.html)

[Web Socket](../patterns/websocket.html)

[Unit Test](../patterns/unit-test.html)

[Mount](../patterns/mount.html)

[Trace](../patterns/trace.html)

## Recipe

[OpenAPI](openapi.html)

[Opentelemetry](opentelemetry.html)

[Drizzle](drizzle.html)

[React Email](react-email.html)

[Better Auth](better-auth.html)

## Eden

[Overview](../eden/overview.html)

[Installation](../eden/installation.html)

### Eden Treaty

[Overview](../eden/treaty/overview.html)

[Parameters](../eden/treaty/parameters.html)

[Response](../eden/treaty/response.html)

[Web Socket](../eden/treaty/websocket.html)

[Config](../eden/treaty/config.html)

[Unit Test](../eden/treaty/unit-test.html)

[Legacy (Treaty 1)](../eden/treaty/legacy.html)

[Eden Fetch](../eden/fetch.html)

## Plugins

[Overview](../plugins/overview.html)

[Bearer](../plugins/bearer.html)

[CORS](../plugins/cors.html)

[Cron](../plugins/cron.html)

[GraphQL Apollo](../plugins/graphql-apollo.html)

[GraphQL Yoga](../plugins/graphql-yoga.html)

[HTML](../plugins/html.html)

[JWT](../plugins/jwt.html)

[OpenTelemetry](../plugins/opentelemetry.html)

[Server Timing](../plugins/server-timing.html)

[Static](../plugins/static.html)

[Stream](../plugins/stream.html)

[Swagger](../plugins/swagger.html)

[trpc](../plugins/trpc.html)

## Integration

[Nextjs](../integrations/nextjs.html)

[Expo](../integrations/expo.html)

[Astro](../integrations/astro.html)

[SvelteKit](../integrations/sveltekit.html)

Outline

# React Email [​](react-email.html#react-email)

React Email is a library that allows you to use React components to create emails.

As Elysia is using Bun as runtime environment, we can directly write a React Email component and import the JSX directly to our code to send emails.

## Installation [​](react-email.html#installation)

To install React Email, run the following command:

bash

```
bun add -d react-email
bun add @react-email/components react react-dom
```

Then add this script to `package.json`:

json

```
{
  "scripts": {
    "email": "email dev --dir src/emails"
  }
}
```

We recommend adding email templates into the `src/emails` directory as we can directly import the JSX files.

### TypeScript [​](react-email.html#typescript)

If you are using TypeScript, you may need to add the following to your `tsconfig.json`:

json

```
{
  "compilerOptions": {
	"jsx": "react"
  }
}
```

## Your first email [​](react-email.html#your-first-email)

Create file `src/emails/otp.tsx` with the following code:

tsx

```
import * as React from 'react'
import { Tailwind, Section, Text } from '@react-email/components'

export default function OTPEmail({ otp }: { otp: number }) {
    return (
        <Tailwind>
            <Section className="flex justify-center items-center w-full min-h-screen font-sans">
                <Section className="flex flex-col items-center w-76 rounded-2xl px-6 py-1 bg-gray-50">
                    <Text className="text-xs font-medium text-violet-500">
                        Verify your Email Address
                    </Text>
                    <Text className="text-gray-500 my-0">
                        Use the following code to verify your email address
                    </Text>
                    <Text className="text-5xl font-bold pt-2">{otp}</Text>
                    <Text className="text-gray-400 font-light text-xs pb-4">
                        This code is valid for 10 minutes
                    </Text>
                    <Text className="text-gray-600 text-xs">
                        Thank you joining us
                    </Text>
                </Section>
            </Section>
        </Tailwind>
    )
}

OTPEmail.PreviewProps = {
    otp: 123456
}
```

You may notice that we are using `@react-email/components` to create the email template.

This library provides a set of components including **styling with Tailwind** that are compatible with email clients like Gmail, Outlook, etc.

We also added a `PreviewProps` to the `OTPEmail` function. This is only apply when previewing the email on our playground.

## Preview your email [​](react-email.html#preview-your-email)

To preview your email, run the following command:

bash

```
bun email
```

This will open a browser window with the preview of your email.

![React Email playground showing an OTP email we have just written](react-email/email-preview.webp)

## Sending email [​](react-email.html#sending-email)

To send an email, we can use `react-dom/server` to render the the email then submit using a preferred provider:

NodemailerResendAWS SESSendgrid

tsx

```
import { Elysia, t } from 'elysia'

import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import OTPEmail from './emails/otp'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({ 
  	host: 'smtp.gehenna.sh', 
  	port: 465, 
  	auth: { 
  		user: 'makoto', 
  		pass: '12345678'
  	} 
}) 

new Elysia()
	.get('/otp', ({ body }) => {
		// Random between 100,000 and 999,999
  		const otp = ~~(Math.random() * (900_000 - 1)) + 100_000

		const html = renderToStaticMarkup(<OTPEmail otp={otp} />)

        await transporter.sendMail({ 
        	from: '[email protected]', 
           	to: body, 
           	subject: 'Verify your email address', 
            html, 
        }) 

        return { success: true }
	}, {
		body: t.String({ format: 'email' })
	})
	.listen(3000)
```

tsx

```
import { Elysia, t } from 'elysia'

import OTPEmail from './emails/otp'

import Resend from 'resend'

const resend = new Resend('re_123456789') 

new Elysia()
	.get('/otp', ({ body }) => {
		// Random between 100,000 and 999,999
  		const otp = ~~(Math.random() * (900_000 - 1)) + 100_000

        await resend.emails.send({ 
        	from: '[email protected]', 
           	to: body, 
           	subject: 'Verify your email address', 
            html: <OTPEmail otp={otp} />, 
        }) 

        return { success: true }
	}, {
		body: t.String({ format: 'email' })
	})
	.listen(3000)
```

tsx

```
import { Elysia, t } from 'elysia'

import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import OTPEmail from './emails/otp'

import { type SendEmailCommandInput, SES } from '@aws-sdk/client-ses'
import { fromEnv } from '@aws-sdk/credential-providers'

const ses = new SES({ 
    credentials: 
        process.env.NODE_ENV === 'production' ? fromEnv() : undefined
}) 

new Elysia()
	.get('/otp', ({ body }) => {
		// Random between 100,000 and 999,999
  		const otp = ~~(Math.random() * (900_000 - 1)) + 100_000

		const html = renderToStaticMarkup(<OTPEmail otp={otp} />)

        await ses.sendEmail({ 
            Source: '[email protected]', 
            Destination: { 
                ToAddresses: [body] 
            }, 
            Message: { 
                Body: { 
                    Html: { 
                        Charset: 'UTF-8', 
                        Data: html 
                    } 
                }, 
                Subject: { 
                    Charset: 'UTF-8', 
                    Data: 'Verify your email address'
                } 
            } 
        } satisfies SendEmailCommandInput) 

        return { success: true }
	}, {
		body: t.String({ format: 'email' })
	})
	.listen(3000)
```

tsx

```
import { Elysia, t } from 'elysia'

import OTPEmail from './emails/otp'

import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY) 

new Elysia()
	.get('/otp', ({ body }) => {
		// Random between 100,000 and 999,999
  		const otp = ~~(Math.random() * (900_000 - 1)) + 100_000

    	const html = renderToStaticMarkup(<OTPEmail otp={otp} />)

        await sendgrid.send({ 
        	from: '[email protected]', 
           	to: body, 
           	subject: 'Verify your email address', 
            html 
        }) 

        return { success: true }
	}, {
		body: t.String({ format: 'email' })
	})
	.listen(3000)
```

TIP

Notice that we can directly import the email component out of the box thanks to Bun

You may see all of the available integration with React Email in the [React Email Integration](https://react.email/docs/integrations/overview), and learn more about React Email in [React Email documentation](https://react.email/docs)

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/recipe/react-email.md)

Last updated:

Pager

[Previous pageDrizzle](drizzle.html)

[Next pageBetter Auth](better-auth.html)


=== bun-elysia-docs/elysiajs.com/table-of-content.html ===
[Skip to content](table-of-content.html#VPContent)

[![](assets/elysia.svg)ElysiaJS](index.html)

Search`K`

Main Navigation [Cheat Sheet](integrations/cheat-sheet.html)[Plugins](plugins/overview.html)[Blog](blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](at-glance.html)

[Quick Start](quick-start.html)

[Tutorial](tutorial.html)

[Key Concept](key-concept.html)

[Table of Content](table-of-content.html)

## Essential

[Route](essential/route.html)

[Handler](essential/handler.html)

[Life Cycle](essential/life-cycle.html)

[Validation](essential/validation.html)

[Plugin](essential/plugin.html)

[Best Practice](essential/best-practice.html)

## Patterns

[Macro](patterns/macro.html)

[Configuration](patterns/configuration.html)

[Cookie](patterns/cookie.html)

[Web Socket](patterns/websocket.html)

[Unit Test](patterns/unit-test.html)

[Mount](patterns/mount.html)

[Trace](patterns/trace.html)

## Recipe

[OpenAPI](recipe/openapi.html)

[Opentelemetry](recipe/opentelemetry.html)

[Drizzle](recipe/drizzle.html)

[React Email](recipe/react-email.html)

[Better Auth](recipe/better-auth.html)

## Eden

[Overview](eden/overview.html)

[Installation](eden/installation.html)

### Eden Treaty

[Overview](eden/treaty/overview.html)

[Parameters](eden/treaty/parameters.html)

[Response](eden/treaty/response.html)

[Web Socket](eden/treaty/websocket.html)

[Config](eden/treaty/config.html)

[Unit Test](eden/treaty/unit-test.html)

[Legacy (Treaty 1)](eden/treaty/legacy.html)

[Eden Fetch](eden/fetch.html)

## Plugins

[Overview](plugins/overview.html)

[Bearer](plugins/bearer.html)

[CORS](plugins/cors.html)

[Cron](plugins/cron.html)

[GraphQL Apollo](plugins/graphql-apollo.html)

[GraphQL Yoga](plugins/graphql-yoga.html)

[HTML](plugins/html.html)

[JWT](plugins/jwt.html)

[OpenTelemetry](plugins/opentelemetry.html)

[Server Timing](plugins/server-timing.html)

[Static](plugins/static.html)

[Stream](plugins/stream.html)

[Swagger](plugins/swagger.html)

[trpc](plugins/trpc.html)

## Integration

[Nextjs](integrations/nextjs.html)

[Expo](integrations/expo.html)

[Astro](integrations/astro.html)

[SvelteKit](integrations/sveltekit.html)

Outline

# Table of Content [​](table-of-content.html#table-of-content)

There's no correct way to learn Elysia, but we recommended **completing the essential chapter first** as the chapter briefly covers most of Elysia's features and foundation before jumping to other topics that interest you.

[**Cheat sheet**  
\
A quick overview of Elysia](integrations/cheat-sheet.html)

[**Structure**  
\
Understand how to structure your code](essential/structure.html)

[**Validation**  
\
Enforce data type and create a unified type](essential/validation.html)

[**Life Cycle**  
\
Intercept events and customize behaviors](essential/life-cycle.html)

[**Plugin and Scope**  
\
Understand how to separate Elysia, and scope](essential/plugin.html)

[**Eden**  
\
End-to-end type safety client for Elysia](eden/overview.html)

* * *

Once you've completed the essential chapter, you may jump to any topic that interests you. We have organized a recommended chapter in order as it may reference to previous chapter.

### Prerequisite Knowledge [​](table-of-content.html#prerequisite-knowledge)

Although Elysia's documentation is designed to be beginner-friendly, we need to establish a baseline so that the docs can stay focused on Elysia's functionality. We will provide links to relevant documentation whenever we introduce a new concept.

To get the most out of our documentation, it's recommended that you have a basic understanding of Node.js and basic HTTP.

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/table-of-content.md)

Last updated:

Pager

[Previous pageKey Concept](key-concept.html)

[Next pageRoute](essential/route.html)


=== bun-elysia-docs/elysiajs.com/tutorial.html ===
[Skip to content](tutorial.html#VPContent)

[![](assets/elysia.svg)ElysiaJS](index.html)

Search`K`

Main Navigation [Cheat Sheet](integrations/cheat-sheet.html)[Plugins](plugins/overview.html)[Blog](blog.html)

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Appearance

[](https://github.com/elysiajs/elysia)[](https://twitter.com/elysiajs)[](https://discord.gg/eaFJ2KDJck)

Menu

Return to top

Sidebar Navigation

## Getting Started

[At Glance](at-glance.html)

[Quick Start](quick-start.html)

[Tutorial](tutorial.html)

[Key Concept](key-concept.html)

[Table of Content](table-of-content.html)

## Essential

[Route](essential/route.html)

[Handler](essential/handler.html)

[Life Cycle](essential/life-cycle.html)

[Validation](essential/validation.html)

[Plugin](essential/plugin.html)

[Best Practice](essential/best-practice.html)

## Patterns

[Macro](patterns/macro.html)

[Configuration](patterns/configuration.html)

[Cookie](patterns/cookie.html)

[Web Socket](patterns/websocket.html)

[Unit Test](patterns/unit-test.html)

[Mount](patterns/mount.html)

[Trace](patterns/trace.html)

## Recipe

[OpenAPI](recipe/openapi.html)

[Opentelemetry](recipe/opentelemetry.html)

[Drizzle](recipe/drizzle.html)

[React Email](recipe/react-email.html)

[Better Auth](recipe/better-auth.html)

## Eden

[Overview](eden/overview.html)

[Installation](eden/installation.html)

### Eden Treaty

[Overview](eden/treaty/overview.html)

[Parameters](eden/treaty/parameters.html)

[Response](eden/treaty/response.html)

[Web Socket](eden/treaty/websocket.html)

[Config](eden/treaty/config.html)

[Unit Test](eden/treaty/unit-test.html)

[Legacy (Treaty 1)](eden/treaty/legacy.html)

[Eden Fetch](eden/fetch.html)

## Plugins

[Overview](plugins/overview.html)

[Bearer](plugins/bearer.html)

[CORS](plugins/cors.html)

[Cron](plugins/cron.html)

[GraphQL Apollo](plugins/graphql-apollo.html)

[GraphQL Yoga](plugins/graphql-yoga.html)

[HTML](plugins/html.html)

[JWT](plugins/jwt.html)

[OpenTelemetry](plugins/opentelemetry.html)

[Server Timing](plugins/server-timing.html)

[Static](plugins/static.html)

[Stream](plugins/stream.html)

[Swagger](plugins/swagger.html)

[trpc](plugins/trpc.html)

## Integration

[Nextjs](integrations/nextjs.html)

[Expo](integrations/expo.html)

[Astro](integrations/astro.html)

[SvelteKit](integrations/sveltekit.html)

Outline

# Elysia Tutorial [​](tutorial.html#elysia-tutorial)

We will be building a small CRUD note-taking API server.

There's no database or other "production ready" features. This tutorial is going to only focus on Elysia feature and how to use Elysia only.

We expected it to take around 15-20 minutes if you follow along.

* * *

### Not a fan of tutorial? [​](tutorial.html#not-a-fan-of-tutorial)

If you prefers to a more try-it-yourself approach, you can skip this tutorial and go straight to the [key concept](key-concept.html) page to get a good understanding of how Elysia works.

[**Key Concept (5 minutes)**  
\
The core concept of Elysia and how to use it.](key-concept.html)

## Setup [​](tutorial.html#setup)

Elysia is built on [Bun](https://bun.sh), an alternative runtime to Node.js.

Install Bun if you haven't already.

MacOS/LinuxWindows

bash

```
curl -fsSL https://bun.sh/install | bash
```

bash

```
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Create a new project [​](tutorial.html#create-a-new-project)

bash

```
# Create a new product
bun create elysia hi-elysia

# cd into the project
cd hi-elysia

# Install dependencies
bun install
```

This will create a barebone project with Elysia and basic TypeScript config.

### Start the development server [​](tutorial.html#start-the-development-server)

bash

```
bun dev
```

Open your browser and go to [**http://localhost:3000**](http://localhost:3000), you should see **Hello Elysia** message on the screen.

Elysia use Bun with `--watch` flag to automatically reload the server when you make changes.

## Route [​](tutorial.html#route)

To add a new route, we specify an HTTP method, a pathname, and a value.

Let's start by opening the `src/index.ts` file as follows:

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hello Elysia')
    .get('/hello', 'Do you miss me?') 
    .listen(3000)
```

Open [**http://localhost:3000/hello**](http://localhost:3000/hello), you should see **Do you miss me?**.

There are several HTTP methods we can use, but we will use the following for this tutorial:

- get
- post
- put
- patch
- delete

Other methods are available, use the same syntax as `get`

typescript

```
import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hello Elysia')
    .get('/hello', 'Do you miss me?') 
    .post('/hello', 'Do you miss me?') 
    .listen(3000)
```

Elysia accepts both value and function as a response.

However, we can use function to access `Context` (route and instance information).

typescript

```

import { 

Elysia






 } from 'elysia'


const 

app






 = new 

Elysia






()

    .

get






('/', () => 'Hello Elysia') 

    .

get






('/', ({ 

path






 }) => 

path






) 

    .

post






('/hello', 'Do you miss me?')

    .

listen






(3000)
```

## Swagger [​](tutorial.html#swagger)

Entering a URL to the browser can only interact with the GET method. To interact with other methods, we need a REST Client like Postman or Insomnia.

Luckily, Elysia comes with a **OpenAPI Schema** with [Scalar](https://scalar.com) to interact with our API.

bash

```
# Install the Swagger plugin
bun add @elysiajs/swagger
```

Then apply the plugin to the Elysia instance.

typescript

```
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
    // Apply the swagger plugin
    .use(swagger()) 
    .get('/', ({ path }) => path)
    .post('/hello', 'Do you miss me?')
    .listen(3000)
```

Navigate to [**http://localhost:3000/swagger**](http://localhost:3000/swagger), you should see the documentation like this: ![Scalar Documentation landing](tutorial/scalar-landing.webp)

Now we can interact with all the routes we have created.

Scroll to **/hello** and click a blue **Test Request** button to show the form.

We can see the result by clicking the black **Send** button. ![Scalar Documentation landing](tutorial/scalar-request.webp)

## Decorate [​](tutorial.html#decorate)

However, for more complex data we may want to use class for complex data as it allows us to define custom methods and properties.

Now, let's create a singleton class to store our notes.

typescript

```

import { 

Elysia






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


class 

Note






 { 

    constructor(public 

data






: string[] = ['Moonhalo']) {} 
} 


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

decorate






('note', new 

Note






()) 

    .

get






('/note', ({ 

note






 }) => 

note






.

data






) 

    .

listen






(3000)
```

`decorate` allows us to inject a singleton class into the Elysia instance, allowing us to access it in the route handler.

Open [**http://localhost:3000/note**](http://localhost:3000/note), we should see **\["Moonhalo"]** on the screen.

For Scalar documentation, we may need to reload the page to see the new changes. ![Scalar Documentation landing](tutorial/scalar-moonhalo.webp)

## Path parameter [​](tutorial.html#path-parameter)

Now let's retrieve a note by its index.

We can define a path parameter by prefixing it with a colon.

typescript

```

import { 

Elysia






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


class 

Note






 {

    constructor(public 

data






: string[] = ['Moonhalo']) {}
}


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

decorate






('note', new 

Note






())

    .

get






('/note', ({ 

note






 }) => 

note






.

data






)

    .

get






('/note/:index', ({ 

note






, 

params






: { 

index






 } }) => { 

        return 

note






.

data






[index] 
Element implicitly has an 'any' type because index expression is not of type 'number'.    }) 

    .

listen






(3000)
```

Let's ignore the error for now.

Open [**http://localhost:3000/note/0**](http://localhost:3000/note/0), we should see **Moonhalo** on the screen.

The path parameter allows us to retrieve a specific part from the URL. In our case, we retrieve a **"0"** from **/note/0** put into a variable named **index**.

## Validation [​](tutorial.html#validation)

The error above is a warning that the path parameter can be any string, while an array index should be a number.

For example, **/note/0** is valid, but **/note/zero** is not.

We can enforce and validate type by declaring a schema:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


class 

Note






 {

    constructor(public 

data






: string[] = ['Moonhalo']) {}
}


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

decorate






('note', new 

Note






())

    .

get






('/note', ({ 

note






 }) => 

note






.

data






)

    .

get






(
        '/note/:index',

        ({ 

note






, 

params






: { 

index






 } }) => {

            return 

note






.

data






[

index






]
        },
        { 

            

params






: 

t






.

Object






({ 

                

index






: 

t






.

Number






() 
            }) 
        } 
    )

    .

listen






(3000)
```

We import **t** from Elysia to define a schema for the path parameter.

Now, if we try to access [**http://localhost:3000/note/abc**](http://localhost:3000/note/abc), we should see an error message.

This code resolves the error we saw earlier because of a **TypeScript warning**.

Elysia schema doesn't only enforce validation on the runtime, but it also infers a TypeScript type for auto-completion and checking error ahead of time, and a Scalar documentation.

Most frameworks provide only one of these features or provide them separately requiring us to update each one separately, but Elysia provides all of them as a **Single Source of Truth**.

### Validation type [​](tutorial.html#validation-type)

Elysia provides validation for the following properties:

- params - path parameter
- query - URL querystring
- body - request body
- headers - request headers
- cookie - cookie
- response - response body

All of them share the same syntax as the example above.

## Status code [​](tutorial.html#status-code)

By default, Elysia will return a status code of 200 for all routes even if the response is an error.

For example, if we try to access [**http://localhost:3000/note/1**](http://localhost:3000/note/1), we should see **undefined** on the screen which shouldn't be a 200 status code (OK).

We can change the status code by returning an error

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


class 

Note






 {

    constructor(public 

data






: string[] = ['Moonhalo']) {}
}


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

decorate






('note', new 

Note






())

    .

get






('/note', ({ 

note






 }) => 

note






.

data






)

    .

get






(
        '/note/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => { 

            return 

note






.

data






[

index






] ?? 

error






(404) 
        },
        {

            

params






: 

t






.

Object






({

                

index






: 

t






.

Number






()
            })
        }
    )

    .

listen






(3000)
```

Now, if we try to access [**http://localhost:3000/note/1**](http://localhost:3000/note/1), we should see **Not Found** on the screen with a status code of 404.

We can also return a custom message by passing a string to the error function.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


class 

Note






 {

    constructor(public 

data






: string[] = ['Moonhalo']) {}
}


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

decorate






('note', new 

Note






())

    .

get






('/note', ({ 

note






 }) => 

note






.

data






)

    .

get






(
        '/note/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

            return 

note






.

data






[

index






] ?? 

error






(404, 'oh no :(') 
        },
        {

            

params






: 

t






.

Object






({

                

index






: 

t






.

Number






()
            })
        }
    )

    .

listen






(3000)
```

## Plugin [​](tutorial.html#plugin)

The main instance is starting to get crowded, we can move the route handler to a separate file and import it as a plugin.

Create a new file named **note.ts**:

note.ts

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


class 

Note






 {

    constructor(public 

data






: string[] = ['Moonhalo']) {}
}


export const 

note






 = new 

Elysia






()

    .

decorate






('note', new 

Note






())

    .

get






('/note', ({ 

note






 }) => 

note






.

data






)

    .

get






(
        '/note/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

            return 

note






.

data






[

index






] ?? 

error






(404, 'oh no :(')
        },
        {

            

params






: 

t






.

Object






({

                

index






: 

t






.

Number






()
            })
        }
    )
```

Then on the **index.ts**, apply **note** into the main instance:

index.ts

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


import { 

note






 } from './note'


class 

Note






 { 

    constructor(public 

data






: string[] = ['Moonhalo']) {} 
} 


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

use






(

note






) 

    .

decorate






('note', new 

Note






()) 

    .

get






('/note', ({ 

note






 }) => 

note






.

data






) 

    .

get






( 
        '/note/:index', 

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => { 

            return 

note






.

data






[

index






] ?? 

error






(404, 'oh no :(') 
        }, 
        { 

            

params






: 

t






.

Object






({ 

                

index






: 

t






.

Number






() 
            }) 
        } 
    ) 

    .

listen






(3000)
```

Open [**http://localhost:3000/note/1**](http://localhost:3000/note/1) and you should see **oh no :(** again like before.

We have just created a **note** plugin, by declaring a new Elysia instance.

Each plugin is a separate instance of Elysia which has its own routes, middlewares, and decorators which can be applied to other instances.

## Applying CRUD [​](tutorial.html#applying-crud)

We can apply the same pattern to create, update, and delete routes.

note.tsnote.ts

typescript

```
import { Elysia, t } from 'elysia'

class Note {
    constructor(public data: string[] = ['Moonhalo']) {}

    add(note: string) { 
        this.data.push(note) 

        return this.data 
    } 

    remove(index: number) { 
        return this.data.splice(index, 1) 
    } 

    update(index: number, note: string) { 
        return (this.data[index] = note) 
    } 
}

export const note = new Elysia()
    .decorate('note', new Note())
    .get('/note', ({ note }) => note.data)
    .put('/note', ({ note, body: { data } }) => note.add(data), { 
        body: t.Object({ 
            data: t.String() 
        }) 
    }) 
    .get(
        '/note/:index',
        ({ note, params: { index }, error }) => {
            return note.data[index] ?? error(404, 'Not Found :(')
        },
        {
            params: t.Object({
                index: t.Number()
            })
        }
    )
    .delete( 
        '/note/:index', 
        ({ note, params: { index }, error }) => { 
            if (index in note.data) return note.remove(index) 

            return error(422) 
        }, 
        { 
            params: t.Object({ 
                index: t.Number() 
            }) 
        } 
    ) 
    .patch( 
        '/note/:index', 
        ({ note, params: { index }, body: { data }, error }) => { 
            if (index in note.data) return note.update(index, data) 

            return error(422) 
        }, 
        { 
            params: t.Object({ 
                index: t.Number() 
            }), 
            body: t.Object({ 
                data: t.String() 
            }) 
        } 
    ) 
```

Now let's open [**http://localhost:3000/swagger**](http://localhost:3000/swagger) and try playing around with CRUD operations.

## Group [​](tutorial.html#group)

If we look closely, all of the routes in the **note** plugin share a **/note** prefix.

We can simplify this by declaring **prefix**

note.ts

typescript

```

export const 

note






 = new 

Elysia






({ 

prefix






: '/note' }) 

    .

decorate






('note', new 

Note






())

    .

get






('/', ({ 

note






 }) => 

note






.

data






) 

    .

put






('/', ({ 

note






, 

body






: { 

data






 } }) => 

note






.

add






(

data






), {

        

body






: 

t






.

Object






({

            

data






: 

t






.

String






()
        })
    })

    .

get






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

            return 

note






.

data






[

index






] ?? 

error






(404, 'Not Found :(')
        },
        {

            

params






: 

t






.

Object






({

                

index






: 

t






.

Number






()
            })
        }
    )

    .

delete






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

            if (

index






 in 

note






.

data






) return 

note






.

remove






(

index






)


            return 

error






(422)
        },
        {

            

params






: 

t






.

Object






({

                

index






: 

t






.

Number






()
            })
        }
    )

    .

patch






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

body






: { 

data






 }, 

error






 }) => {

            if (

index






 in 

note






.

data






) return 

note






.

update






(

index






, 

data






)


            return 

error






(422)
        },
        {

            

params






: 

t






.

Object






({

                

index






: 

t






.

Number






()
            }),

            

body






: 

t






.

Object






({

                

data






: 

t






.

String






()
            })
        }
    )
```

## Guard [​](tutorial.html#guard)

Now we may notice that there are several routes in plugin that has **params** validation.

We may define a **guard** to apply validation to routes in the plugin.

note.ts

typescript

```

export const 

note






 = new 

Elysia






({ 

prefix






: '/note' })

    .

decorate






('note', new 

Note






())

    .

get






('/', ({ 

note






 }) => 

note






.

data






)

    .

put






('/', ({ 

note






, 

body






: { 

data






 } }) => 

note






.

add






(

data






), {

        

body






: 

t






.

Object






({

            

data






: 

t






.

String






()
        })
    })

    .

guard






({ 

        

params






: 

t






.

Object






({ 

            

index






: 

t






.

Number






() 
        }) 
    }) 

    .

get






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

            return 

note






.

data






[

index






] ?? 

error






(404, 'Not Found :(')
        },
        { 

            

params






: 

t






.

Object






({ 

                

index






: 

t






.

Number






() 
            }) 
        } 
    )

    .

delete






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

            if (

index






 in 

note






.

data






) return 

note






.

remove






(

index






)


            return 

error






(422)
        },
        { 

            

params






: 

t






.

Object






({ 

                

index






: 

t






.

Number






() 
            }) 
        } 
    )

    .

patch






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

body






: { 

data






 }, 

error






 }) => {

            if (

index






 in 

note






.

data






) return 

note






.

update






(

index






, 

data






)


            return 

error






(422)
        },
        {

            

params






: 

t






.

Object






({ 

                

index






: 

t






.

Number






() 
            }), 

            

body






: 

t






.

Object






({

                

data






: 

t






.

String






()
            })
        }
    )
```

Validation will be applied to all routes **after guard** is called and tied to the plugin.

## Lifecycle [​](tutorial.html#lifecycle)

Now in real-world usage, we may want to do something like logging before the request is processed.

Instead of inline `console.log` for each route, we may apply a **lifecycle** that intercepts the request before/after it is processed.

There are several lifecycles that we can use, but in this case we will be using `onTransform`.

note.ts

typescript

```

export const 

note






 = new 

Elysia






({ 

prefix






: '/note' })

    .

decorate






('note', new 

Note






())

    .

onTransform






(function 

log






({ 

body






, 

params






, 

path






, 

request






: { 

method






 } }) { 

        

console






.

log






(`${

method






} ${

path






}`, { 

            

body






, 

            

params






 
        }) 
    }) 

    .

get






('/', ({ 

note






 }) => 

note






.

data






)

    .

put






('/', ({ 

note






, 

body






: { 

data






 } }) => 

note






.

add






(

data






), {

        

body






: 

t






.

Object






({

            

data






: 

t






.

String






()
        })
    })

    .

guard






({

        

params






: 

t






.

Object






({

            

index






: 

t






.

Number






()
        })
    })

    .

get






('/:index', ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

        return 

note






.

data






[

index






] ?? 

error






(404, 'Not Found :(')
    })

    .

delete






('/:index', ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

        if (

index






 in 

note






.

data






) return 

note






.

remove






(

index






)


        return 

error






(422)
    })

    .

patch






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

body






: { 

data






 }, 

error






 }) => {

            if (

index






 in 

note






.

data






) return 

note






.

update






(

index






, 

data






)


            return 

error






(422)
        },
        {

            

body






: 

t






.

Object






({

                

data






: 

t






.

String






()
            })
        }
    )
```

`onTransform` is called after **routing but before validation**, so we can do something like logging the request that is defined without triggering the **404 Not found** route.

This allows us to log the request before it is processed, and we can see the request body and path parameters.

### Scope [​](tutorial.html#scope)

By default, the **lifecycle hook is encapsulated**. Hook is applied to routes in the same instance, and is not applied to other plugins (routes that are not defined in the same plugin).

This means the log function, in the `onTransform` hook, will not be called on other instances, unless we explicitly defined it as `scoped` or `global`.

## Authentication [​](tutorial.html#authentication)

Now we may want to add restrictions to our routes, so only the owner of the note can update or delete it.

Let's create a `user.ts` file that will handle the user authentication:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


export const 

user






 = new 

Elysia






({ 

prefix






: '/user' })

    .

state






({

        

user






: {} as 

Record






<string, string>,

        

session






: {} as 

Record






<number, string>
    })

    .

put






(
        '/sign-up',

        async ({ 

body






: { 

username






, 

password






 }, 

store






, 

error






 }) => {

            if (

store






.

user






[

username






])

                return 

error






(400, {

                    

success






: false,

                    

message






: 'User already exists'
                })


            

store






.

user






[

username






] = await 

Bun






.

password






.

hash






(

password






)

            return {

                

success






: true,

                

message






: 'User created'
            }
        },
        {

            

body






: 

t






.

Object






({

                

username






: 

t






.

String






({ 

minLength






: 1 }),

                

password






: 

t






.

String






({ 

minLength






: 8 })
            })
        }
    )

    .

post






(
        '/sign-in',
        async ({

            

store






: { 

user






, 

session






 },

            

error






,

            

body






: { 

username






, 

password






 },

            

cookie






: { 

token






 }
        }) => {
            if (

                !

user






[

username






] ||

                !(await 

Bun






.

password






.

verify






(

password






, 

user






[

username






]))
            )

                return 

error






(400, {

                    

success






: false,

                    

message






: 'Invalid username or password'
                })


            const 

key






 = 

crypto






.

getRandomValues






(new 

Uint32Array






(1))[0]

            

session






[

key






] = 

username








            

token






.

value






 = 

key








            return {

                

success






: true,

                

message






: `Signed in as ${

username






}`
            }
        },
        {

            

body






: 

t






.

Object






({

                

username






: 

t






.

String






({ 

minLength






: 1 }),

                

password






: 

t






.

String






({ 

minLength






: 8 })
            }),

            

cookie






: 

t






.

Cookie






(
                {

                    

token






: 

t






.

Number






()
                },
                {

                    

secrets






: 'seia'
                }
            )
        }
    )
```

Now there are a lot of things to unwrap here:

1. We create a new instance with 2 routes for sign up and sign in.
2. In the instance, we define an in-memory store `user` and `session`
   
   - 2.1 `user` will hold key-value of `username` and `password`
   - 2.2 `session` will hold a key-value of `session` and `username`
3. In `/sign-up` we insert a username and hashed password with argon2id
4. In `/sign-in` we do the following:
   
   - 4.1 We check if user exists and verify the password
   - 4.2 If the password matches, then we generate a new session into `session`
   - 4.3 We set cookie `token` with the value of session
   - 4.4 We append `secret` to cookie to add hash and block an attacker from tampering with the cookie

TIP

As we are using an in-memory store, the data are wiped out every reload or every time we edit the code.

We will fix that in the later part of the tutorial.

Now if we want to check if a user is signed in, we could check for value of `token` cookie and check with the `session` store.

## Reference Model [​](tutorial.html#reference-model)

However, we can recognize that both `/sign-in` and `/sign-up` both share the same `body` model.

Instead of copy-pasting the model all over the place, we could use a **reference model** to reuse the model by specifying a name.

To create a **reference model**, we may use `.model` and pass the name and the value of models:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


export const 

user






 = new 

Elysia






({ 

prefix






: '/user' })

    .

state






({

        

user






: {} as 

Record






<string, string>,

        

session






: {} as 

Record






<number, string>
    })

    .

model






({ 

    	

signIn






: 

t






.

Object






({ 

    		

username






: 

t






.

String






({ 

minLength






: 1 }), 

    		

password






: 

t






.

String






({ 

minLength






: 8 }) 
    	}), 

     	

session






: 

t






.

Cookie






( 
	     	{ 

	     		

token






: 

t






.

Number






() 
	     	}, 
	     	{ 

		     	

secrets






: 'seia'
	     	} 
	    ), 

      	

optionalSession






: 

t






.

Optional






(

t






.

Ref






('session')) 
    }) 

    .

put






(
        '/sign-up',

        async ({ 

body






: { 

username






, 

password






 }, 

store






, 

error






 }) => {

            if (

store






.

user






[

username






])

                return 

error






(400, {

                    

success






: false,

                    

message






: 'User already exists'
                })

            

store






.

user






[

username






] = await 

Bun






.

password






.

hash






(

password






)

            return {

                

success






: true,

                

message






: 'User created'
            }
        },
        {

           	

body






: 'signIn'
        }
    )

    .

post






(
        '/sign-in',
        async ({

            

store






: { 

user






, 

session






 },

            

error






,

            

body






: { 

username






, 

password






 },

            

cookie






: { 

token






 }
        }) => {
            if (

                !

user






[

username






] ||

                !(await 

Bun






.

password






.

verify






(

password






, 

user






[

username






]))
            )

                return 

error






(400, {

                    

success






: false,

                    

message






: 'Invalid username or password'
                })


            const 

key






 = 

crypto






.

getRandomValues






(new 

Uint32Array






(1))[0]

            

session






[

key






] = 

username








            

token






.

value






 = 

key








            return {

                

success






: true,

                

message






: `Signed in as ${

username






}`
            }
        },
        {

           	

body






: 'signIn', 

           	

cookie






: 'session', 
        }
    )
```

After adding a model/models, we can reuse them by referencing their name in the schema instead of providing a literal type while providing the same functionality and type safety.

`Elysia.model` could accept multiple overloads:

1. Providing an object, the register all key-value as models
2. Providing a function, then access all previous models then return new models

Finally, we could add the `/profile` and `/sign-out` routes as follows:

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


export const 

user






 = new 

Elysia






({ 

prefix






: '/user' })

    .

state






({

        

user






: {} as 

Record






<string, string>,

        

session






: {} as 

Record






<number, string>
    })

    .

model






({

        

signIn






: 

t






.

Object






({

            

username






: 

t






.

String






({ 

minLength






: 1 }),

            

password






: 

t






.

String






({ 

minLength






: 8 })
        }),

        

session






: 

t






.

Cookie






(
            {

                

token






: 

t






.

Number






()
            },
            {

                

secrets






: 'seia'
            }
        ),

        

optionalSession






: 

t






.

Optional






(

t






.

Ref






('session'))
    })

    .

put






(
        '/sign-up',

        async ({ 

body






: { 

username






, 

password






 }, 

store






, 

error






 }) => {

            if (

store






.

user






[

username






])

                return 

error






(400, {

                    

success






: false,

                    

message






: 'User already exists'
                })


            

store






.

user






[

username






] = await 

Bun






.

password






.

hash






(

password






)

            return {

                

success






: true,

                

message






: 'User created'
            }
        },
        {

            

body






: 'signIn'
        }
    )

    .

post






(
        '/sign-in',
        async ({

            

store






: { 

user






, 

session






 },

            

error






,

            

body






: { 

username






, 

password






 },

            

cookie






: { 

token






 }
        }) => {
            if (

                !

user






[

username






] ||

                !(await 

Bun






.

password






.

verify






(

password






, 

user






[

username






]))
            )

                return 

error






(400, {

                    

success






: false,

                    

message






: 'Invalid username or password'
                })


            const 

key






 = 

crypto






.

getRandomValues






(new 

Uint32Array






(1))[0]

            

session






[

key






] = 

username








            

token






.

value






 = 

key








            return {

                

success






: true,

                

message






: `Signed in as ${

username






}`
            }
        },
        {

            

body






: 'signIn',

            

cookie






: 'optionalSession'
        }
    )

    .

get






( 
        '/sign-out', 

        ({ 

cookie






: { 

token






 } }) => { 

            

token






.

remove






() 

            return { 

                

success






: true, 

                

message






: 'Signed out'
            } 
        }, 
        { 

            

cookie






: 'optionalSession'
        } 
    ) 

    .

get






( 
        '/profile', 

        ({ 

cookie






: { 

token






 }, 

store






: { 

session






 }, 

error






 }) => { 

            const 

username






 = 

session






[

token






.

value






] 


            if (!

username






) 

                return 

error






(401, { 

                    

success






: false, 

                    

message






: 'Unauthorized'
                }) 

            return { 

                

success






: true, 

                

username






 
            } 
        }, 
        { 

            

cookie






: 'session'
        } 
    ) 
```

As we are going to apply `authorization` in the `note`, we are going to need to repeat two things:

1. Checking if user exists
2. Getting user id (in our case 'username')

For **1.** instead of using guard, we could use a **macro**.

## Plugin deduplication [​](tutorial.html#plugin-deduplication)

As we are going to reuse this hook in multiple modules (user, and note), let's extract the service (utility) part out and apply it to both modules. // @errors: 2538 // @filename: user.ts import { Elysia, t } from 'elysia'

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


export const 

userService






 = new 

Elysia






({ 

name






: 'user/service' }) 

	.

state






({ 

        

user






: {} as 

Record






<string, string>, 

        

session






: {} as 

Record






<number, string> 
    }) 

    .

model






({ 

        

signIn






: 

t






.

Object






({ 

            

username






: 

t






.

String






({ 

minLength






: 1 }), 

            

password






: 

t






.

String






({ 

minLength






: 8 }) 
        }), 

        

session






: 

t






.

Cookie






( 
            { 

                

token






: 

t






.

Number






() 
            }, 
            { 

                

secrets






: 'seia'
            } 
        ), 

        

optionalSession






: 

t






.

Optional






(

t






.

Ref






('session')) 
    }) 


export const 

user






 = new 

Elysia






({ 

prefix






: '/user' })

	.

use






(

userService






) 

	.

state






({ 

        

user






: {} as 

Record






<string, string>, 

        

session






: {} as 

Record






<number, string> 
    }) 

    .

model






({ 

        

signIn






: 

t






.

Object






({ 

            

username






: 

t






.

String






({ 

minLength






: 1 }), 

            

password






: 

t






.

String






({ 

minLength






: 8 }) 
        }), 

        

session






: 

t






.

Cookie






( 
            { 

                

token






: 

t






.

Number






() 
            }, 
            { 

                

secrets






: 'seia'
            } 
        ), 

  		

optionalSession






: 

t






.

Optional






(

t






.

Ref






('session')) 
    }) 
```

The `name` property here is very important, as it's a unique identifier for the plugin to prevent duplicate instances (like a singleton).

If we were to define the instance without the plugin, hook/lifecycle and routes are going to be registered every time the plugin is used.

Our intention is to apply this plugin (service) to multiple modules to provide utility function, this make deduplication very important as life-cycle shouldn't be registered twice.

## Macro [​](tutorial.html#macro)

Macro allows us to define a custom hook with custom life-cycle management.

To define a macro, we could use `.macro` as follows:

ts

```

import { 

Elysia






, 

t






 } from 'elysia'


export const 

userService






 = new 

Elysia






({ 

name






: 'user/service' })

    .

state






({

        

user






: {} as 

Record






<string, string>,

        

session






: {} as 

Record






<number, string>
    })

    .

model






({

        

signIn






: 

t






.

Object






({

            

username






: 

t






.

String






({ 

minLength






: 1 }),

            

password






: 

t






.

String






({ 

minLength






: 8 })
        }),

        

session






: 

t






.

Cookie






(
            {

                

token






: 

t






.

Number






()
            },
            {

                

secrets






: 'seia'
            }
        ),

        

optionalSession






: 

t






.

Optional






(

t






.

Ref






('session'))
    })

    .

macro






({

        

isSignIn






(

enabled






: boolean) { 

            if (!

enabled






) return

			return {

	            

beforeHandle






({ 

error






, 

cookie






: { 

token






 }, 

store






: { 

session






 } }) { 

                    if (!

token






.

value






) 

                        return 

error






(401, { 

                            

success






: false, 

                            

message






: 'Unauthorized'
                        }) 


                    const 

username






 = 

session






[

token






.

value






 as unknown as number] 


                    if (!

username






) 

                        return 

error






(401, { 

                            

success






: false, 

                            

message






: 'Unauthorized'
                        }) 
                } 
			} 
        } 
    }) 
```

We have just created a new macro name `isSignIn` that accepts a `boolean` value, if it is true, then we add an `onBeforeHandle` event that executes **after validation but before the main handler**, allowing us to extract authentication logic here.

To use the macro, simply specify `isSignIn: true` as follows: // @errors: 2538 // @filename: user.ts import { Elysia, t } from 'elysia'

ts

```

    .

get






(
        '/profile',

        ({ 

cookie






: { 

token






 }, 

store






: { 

session






 }, 

error






 }) => {

            const 

username






 = 

session






[

token






.

value






]


            if (!

username






) 

                return 

error






(401, { 

                    

success






: false, 

                    

message






: 'Unauthorized'
                }) 

            return {

                

success






: true,

                

username







            }
        },
        {

            

isSignIn






: true, 

            

cookie






: 'session'
        }
    )
```

As we specified `isSignIn`, we can extract the imperative checking part, and reuse the same logic on multiple routes without copy-pasting the same code all over again.

TIP

This may seem like a small code change to trade for a larger boilerplate, but as the server grows more complex, the user-checking could also grow to be a very complex mechanism.

## Resolve [​](tutorial.html#resolve)

Our last objective is to get the username (id) from the token. We could use `resolve` to define a new property into the same context as `store` but only execute it per request.

Unlike `decorate` and `store`, resolve is defined at the `beforeHandle` stage or the value will be available **after validation**.

This ensures that the property like `cookie: 'session'` exists before creating a new property.

// @errors: 2538 // @filename: user.ts import { Elysia, t } from 'elysia'

ts

```

export const 

getUserId






 = new 

Elysia






() 

    .

use






(

userService






) 

    .

guard






({ 

        

cookie






: 'session'
    }) 

    .

resolve






(({ 

store






: { 

session






 }, 

cookie






: { 

token






 } }) => ({ 

        

username






: 

session






[

token






.

value






] 
    })) 
```

In this instance, we define a new property `username` by using `resolve`, allowing us to reduce the getting `username` logic into a property instead.

We don't define a name in this `getUserId` instance because we want `guard` and `resolve` to reapply into multiple instances.

TIP

Same as macro, `resolve` plays well if the logic for getting the property is complex and might not be worth it for a small operation like this. But since in the real-world we are going to need database-connection, caching, and queuing it might make it fit the narrative.

## Scope [​](tutorial.html#scope-1)

Now if we try to apply the use of the `getUserId`, we might notice that the property `username` and `guard` isn't applied.

ts

```

export const 

getUserId






 = new 

Elysia






()

    .

use






(

userService






)

    .

guard






({

       	

isSignIn






: true,

        

cookie






: 'session'
    })

    .

resolve






(({ 

store






: { 

session






 }, 

cookie






: { 

token






 } }) => ({

        

username






: 

session






[

token






.

value






]
    }))


export const 

user






 = new 

Elysia






({ 

prefix






: '/user' })

	.

use






(

getUserId






)

	.

get






('/profile', ({ username }) => ({
Property 'username' does not exist on type '{ body: unknown; query: Record<string, string | undefined>; params: {}; headers: Record<string, string | undefined>; cookie: Record<string, Cookie<string | undefined>>; ... 8 more ...; error: <const Code extends number | keyof StatusMap, const T = Code extends 100 | ... 58 more ... | 511 ? { ...; }[Code] : Code>(cod...'.
        

success






: true,

        

username







    }))
```

This is because the Elysia **encapsulate lifecycle** does this by default as mentioned in [lifecycle](tutorial.html#lifecycle)

This is intentional by design, as we don't want each module to have a side-effect to other modules. Having a side-effect can be very difficult to debug especially in a large codebase with multiple (Elysia) dependencies.

If we want lifecycle to be applied to the parent, we can explicitly annotate that it could be applied to the parent by using either:

1. scoped - only apply to parent at 1-level above and not any further
2. global - apply to all parent levels

In our case, we want to use **scoped** as it will apply to the controller that uses the service only.

To do this, we need to annotate that life-cycle as `scoped`:

typescript

```

export const 

getUserId






 = new 

Elysia






()

    .

use






(

userService






)

    .

guard






({

    	

as






: 'scoped', 

    	

isSignIn






: true,

        

cookie






: 'session'
    })

    .

resolve






(

    	{ 

as






: 'scoped' }, 

     	({ 

store






: { 

session






 }, 

cookie






: { 

token






 } }) => ({

        	

username






: 

session






[token.value]
Type 'undefined' cannot be used as an index type.      	})
    )


export const 

user






 = new 

Elysia






({ 

prefix






: '/user' })

	.

use






(

getUserId






)

	.

get






('/profile', ({ 

username






 }) => ({

        

success






: true,

        

username







    }))
```

Alternatively, if we have multiple `scoped` defined, we could use `as` to cast multiple life-cycles instead.

// @errors: 2538 // @filename: user.ts import { Elysia, t } from 'elysia'

ts

```

export const 

getUserId






 = new 

Elysia






()

    .

use






(

userService






)

    .

guard






({

    	

as






: 'scoped', 

    	

isSignIn






: true,

        

cookie






: 'session'
    })

    .

resolve






(

   		{ 

as






: 'scoped' }, 

    	({ 

store






: { 

session






 }, 

cookie






: { 

token






 } }) => ({

    	   	

username






: 

session






[token.value]
Type 'undefined' cannot be used as an index type.    	})
    )

    .

as






('plugin') 


export const 

user






 = new 

Elysia






({ 

prefix






: '/user' })

	.

use






(

getUserId






)

	.

get






('/profile', ({ 

username






 }) => ({

        

success






: true,

        

username







    }))
```

Both achieve the same effect, the only difference is single or multiple cast instances.

TIP

Encapsulation happens in both runtime, and type-level. This allows us to catch the error ahead of time.

Lastly, we can reuse `userService` and `getUserId` to help with authorization in our **note** controller.

But first, don't forget to import the `user` in the `index.ts` file:

index.ts

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


import { 

note






 } from './note'

import { 

user






 } from './user'


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

use






(

user






) 

    .

use






(

note






)

    .

listen






(3000)
```

## Authorization [​](tutorial.html#authorization)

First, let's modify the `Note` class to store the user who created the note.

But instead of defining the `Memo` type, we can define a memo schema and infer the type from it, allowing us to sync runtime and type-level.

typescript

```
import { Elysia, t } from 'elysia'

const memo = t.Object({ 
	data: t.String(), 
	author: t.String() 
}) 

type Memo = typeof memo.static 

class Note {
    constructor(public data: string[] = ['Moonhalo']) {} 
    constructor( 
		public data: Memo[] = [ 
			{ 
				data: 'Moonhalo', 
				author: 'saltyaom'
			} 
		] 
	) {} 

    add(note: string) { 
    add(note: Memo) { 
        this.data.push(note)

        return this.data
    }

    remove(index: number) {
        return this.data.splice(index, 1)
    }

    update(index: number, note: string) { 
        return (this.data[index] = note) 
    } 
    update(index: number, note: Partial<Memo>) { 
        return (this.data[index] = { ...this.data[index], ...note }) 
    } 
}

export const note = new Elysia({ prefix: '/note' })
    .decorate('note', new Note())
    .model({ 
    	memo: t.Omit(memo, ['author']) 
    }) 
    .onTransform(function log({ body, params, path, request: { method } }) {
        console.log(`${method} ${path}`, {
            body,
            params
        })
    })
    .get('/', ({ note }) => note.data)
    .put('/', ({ note, body: { data } }) => note.add(data), { 
        body: t.Object({ 
            data: t.String() 
        }), 
    }) 
    .put('/', ({ note, body: { data }, username }) =>
    	note.add({ data, author: username }),
     	{ 
     		body: 'memo'
      	}
    ) 
    .guard({
        params: t.Object({
            index: t.Number()
        })
    })
    .get(
        '/:index',
        ({ note, params: { index }, error }) => {
            return note.data[index] ?? error(404, 'Not Found :(')
        }
    )
    .delete(
        '/:index',
        ({ note, params: { index }, error }) => {
            if (index in note.data) return note.remove(index)

            return error(422)
        }
    )
    .patch(
        '/:index',
        ({ note, params: { index }, body: { data }, error }) => { 
            if (index in note.data) return note.update(index, data) 
        ({ note, params: { index }, body: { data }, error, username }) => { 
        	if (index in note.data) 
         		return note.update(index, { data, author: username })) 

            return error(422)
        },
        {
            body: t.Object({ 
                data: t.String() 
            }), 
            body: 'memo'
        }
    )
```

Now let's import, and use `userService`, `getUserId` to apply authorization to the **note** controller.

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

getUserId






, 

userService






 } from './user'


const 

memo






 = 

t






.

Object






({

	

data






: 

t






.

String






(),

	

author






: 

t






.

String






()
})


type 

Memo






 = typeof 

memo






.

static









class 

Note






 {
    constructor(

		public 

data






: 

Memo






[] = [
			{

				

data






: 'Moonhalo',

				

author






: 'saltyaom'
			}
		]
	) {}


    

add






(

note






: 

Memo






) {

        this.

data






.

push






(

note






)


        return this.

data







    }


    

remove






(

index






: number) {

        return this.

data






.

splice






(

index






, 1)
    }


    

update






(

index






: number, 

note






: 

Partial






<

Memo






>) {

        return (this.

data






[

index






] = { ...this.

data






[

index






], ...

note






 })
    }
}


export const 

note






 = new 

Elysia






({ 

prefix






: '/note' })

	.

use






(

userService






) 

    .

decorate






('note', new 

Note






())

    .

model






({

        

memo






: 

t






.

Omit






(

memo






, ['author'])
    })

    .

onTransform






(function 

log






({ 

body






, 

params






, 

path






, 

request






: { 

method






 } }) {

        

console






.

log






(`${

method






} ${

path






}`, {

            

body






,

            

params







        })
    })

    .

get






('/', ({ 

note






 }) => 

note






.

data






)

    .

use






(

getUserId






) 

    .

put






(
        '/',

        ({ 

note






, 

body






: { 

data






 }, 

username






 }) =>

            

note






.

add






({ 

data






, 

author






: 

username






 }),
        {

            

body






: 'memo'
        }
    )

    .

get






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

            return 

note






.

data






[

index






] ?? 

error






(404, 'Not Found :(')
        },
        {

            

params






: 

t






.

Object






({

                

index






: 

t






.

Number






()
            })
        }
    )

    .

guard






({

        

params






: 

t






.

Object






({

            

index






: 

t






.

Number






()
        })
    })

    .

delete






('/:index', ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

        if (

index






 in 

note






.

data






) return 

note






.

remove






(

index






)


        return 

error






(422)
    })

    .

patch






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

body






: { 

data






 }, 

error






, 

username






 }) => {

            if (

index






 in 

note






.

data






)

                return 

note






.

update






(

index






, { 

data






, 

author






: 

username






 })


            return 

error






(422)
        },
        {

            

isSignIn






: true,

            

body






: 'memo'
        }
    )
```

And that's it 🎉

We have just implemented authorization by reusing the service we created earlier.

## Error handling [​](tutorial.html#error-handling)

One of the most important aspects of an API is to make sure nothing goes wrong, and if it does, we need to handle it properly.

We use use the `onError` lifecycle to catch any error that is thrown in the server.

index.ts

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


import { 

note






 } from './note'

import { 

user






 } from './user'


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

onError






(({ 

error






, 

code






 }) => { 

        if (

code






 === 'NOT_FOUND') return


        

console






.

error






(

error






) 
    }) 

    .

use






(

user






)

    .

use






(

note






)

    .

listen






(3000)
```

We have just added an error listener that will catch any error that is thrown in the server, excluding **404 Not Found** and log it to the console.

TIP

Notice that `onError` is used before `use(note)`. This is important as Elysia applies the method from top-to-bottom. The listener has to be applied before the route.

And as `onError` is applied on the root instance, it doesn't need to define a scope as it will apply to all children instances.

Returning a truthy value will override a default error response, so we can return a custom error response which inherits the status code.

index.ts

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'


import { 

note






 } from './note'


const 

app






 = new 

Elysia






()

    .

use






(

swagger






())

    .

onError






(({ 

error






, 

code






 }) => { 

        if (

code






 === 'NOT_FOUND') return 'Not Found :('


        

console






.

error






(

error






) 
    }) 

    .

use






(

note






)

    .

listen






(3000)
```

### Observability [​](tutorial.html#observability)

Now we have a working API, a final touch is to make sure everything is working after we deployed our server.

Elysia supports OpenTelemetry by default with the `@elysiajs/opentelemetry` plugin.

bash

```
bun add @elysiajs/opentelemetry
```

Make sure to have an OpenTelemetry collector running otherwise we will be using Jaeger from docker.

bash

```
docker run --name jaeger \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -e COLLECTOR_OTLP_ENABLED=true \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 14250:14250 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 9411:9411 \
  jaegertracing/all-in-one:latest
```

Now let's apply the OpenTelemetry plugin to our server.

index.ts

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

opentelemetry






 } from '@elysiajs/opentelemetry'

import { 

swagger






 } from '@elysiajs/swagger'


import { 

note






 } from './note'

import { 

user






 } from './user'


const 

app






 = new 

Elysia






()

    .

use






(

opentelemetry






()) 

    .

use






(

swagger






())

    .

onError






(({ 

error






, 

code






 }) => {

        if (

code






 === 'NOT_FOUND') return 'Not Found :('


        

console






.

error






(

error






)
    })

    .

use






(

note






)

    .

use






(

user






)

    .

listen






(3000)
```

Now try out some more requests and open [http://localhost:16686](http://localhost:16686) to see traces.

Select service **Elysia** and click on **Find Traces**, we should be able to see a list of requests that we have made.

![Jaeger showing list of requests](tutorial/jaeger-list.webp)

Click on any of the requests to see how long each lifecycle hook takes to process the request. ![Jaeger showing request span](tutorial/jaeger-span.webp)

Click on the root parent span to see the request details, this will show you the request and response payload, and errors if have any. ![Jaeger showing request detail](tutorial/jaeger-detail.webp)

Elysia supports OpenTelemetry out of the box, it automatically integrates with other JavaScript libraries that support OpenTelemetry like Prisma, GraphQL Yoga, Effect, etc.

You can also use other OpenTelemetry plugins to send traces to other services like Zipkin, Prometheus, etc.

## Codebase recap [​](tutorial.html#codebase-recap)

If you are following along, you should have a codebase that looks like this:

index.tsuser.tsnote.ts

typescript

```

import { 

Elysia






 } from 'elysia'

import { 

swagger






 } from '@elysiajs/swagger'

import { 

opentelemetry






 } from '@elysiajs/opentelemetry'


import { 

note






 } from './note'

import { 

user






 } from './user'


const 

app






 = new 

Elysia






()

    .

use






(

opentelemetry






())

    .

use






(

swagger






())

    .

onError






(({ 

error






, 

code






 }) => {

        if (

code






 === 'NOT_FOUND') return 'Not Found :('


        

console






.

error






(

error






)
    })

    .

use






(

user






)

    .

use






(

note






)

    .

listen






(3000)
```

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'


export const 

userService






 = new 

Elysia






({ 

name






: 'user/service' })

    .

state






({

        

user






: {} as 

Record






<string, string>,

        

session






: {} as 

Record






<number, string>
    })

    .

model






({

        

signIn






: 

t






.

Object






({

            

username






: 

t






.

String






({ 

minLength






: 1 }),

            

password






: 

t






.

String






({ 

minLength






: 8 })
        }),

        

session






: 

t






.

Cookie






(
            {

                

token






: 

t






.

Number






()
            },
            {

                

secrets






: 'seia'
            }
        ),

        

optionalSession






: 

t






.

Optional






(

t






.

Ref






('session'))
    })

    .

macro






({

        

isSignIn






(

enabled






: boolean) {

            if (!

enabled






) return

            return {

            	

beforeHandle






({ 

error






, 

cookie






: { 

token






 }, 

store






: { 

session






 } }) {

                    if (!

token






.

value






)

                        return 

error






(401, {

                            

success






: false,

                            

message






: 'Unauthorized'
                        })


                    const 

username






 = 

session






[

token






.

value






 as unknown as number]


                    if (!

username






)

                        return 

error






(401, {

                            

success






: false,

                            

message






: 'Unauthorized'
                        })
                }
            }
        }
    })


export const 

getUserId






 = new 

Elysia






()

    .

use






(

userService






)

    .

guard






({

    	

isSignIn






: true,

        

cookie






: 'session'
    })

    .

resolve






(({ 

store






: { 

session






 }, 

cookie






: { 

token






 } }) => ({

        

username






: 

session






[

token






.

value






]
    }))

    .

as






('plugin')


export const 

user






 = new 

Elysia






({ 

prefix






: '/user' })

    .

use






(

userService






)

    .

put






(
        '/sign-up',

        async ({ 

body






: { 

username






, 

password






 }, 

store






, 

error






 }) => {

            if (

store






.

user






[

username






])

                return 

error






(400, {

                    

success






: false,

                    

message






: 'User already exists'
                })


            

store






.

user






[

username






] = await 

Bun






.

password






.

hash






(

password






)

            return {

                

success






: true,

                

message






: 'User created'
            }
        },
        {

            

body






: 'signIn'
        }
    )

    .

post






(
        '/sign-in',
        async ({

            

store






: { 

user






, 

session






 },

            

error






,

            

body






: { 

username






, 

password






 },

            

cookie






: { 

token






 }
        }) => {
            if (

                !

user






[

username






] ||

                !(await 

Bun






.

password






.

verify






(

password






, 

user






[

username






]))
            )

                return 

error






(400, {

                    

success






: false,

                    

message






: 'Invalid username or password'
                })


            const 

key






 = 

crypto






.

getRandomValues






(new 

Uint32Array






(1))[0]

            

session






[

key






] = 

username








            

token






.

value






 = 

key








            return {

                

success






: true,

                

message






: `Signed in as ${

username






}`
            }
        },
        {

            

body






: 'signIn',

            

cookie






: 'optionalSession'
        }
    )

    .

get






(
        '/sign-out',

        ({ 

cookie






: { 

token






 } }) => {

            

token






.

remove






()

            return {

                

success






: true,

                

message






: 'Signed out'
            }
        },
        {

            

cookie






: 'optionalSession'
        }
    )

    .

use






(

getUserId






)

    .

get






('/profile', ({ 

username






 }) => ({

        

success






: true,

        

username







    }))
```

typescript

```

import { 

Elysia






, 

t






 } from 'elysia'

import { 

getUserId






, 

userService






 } from './user'


const 

memo






 = 

t






.

Object






({

    

data






: 

t






.

String






(),

    

author






: 

t






.

String






()
})


type 

Memo






 = typeof 

memo






.

static









class 

Note






 {
    constructor(

        public 

data






: 

Memo






[] = [
            {

                

data






: 'Moonhalo',

                

author






: 'saltyaom'
            }
        ]
    ) {}


    

add






(

note






: 

Memo






) {

        this.

data






.

push






(

note






)


        return this.

data







    }


    

remove






(

index






: number) {

        return this.

data






.

splice






(

index






, 1)
    }


    

update






(

index






: number, 

note






: 

Partial






<

Memo






>) {

        return (this.

data






[

index






] = { ...this.

data






[

index






], ...

note






 })
    }
}


export const 

note






 = new 

Elysia






({ 

prefix






: '/note' })

    .

use






(

userService






)

    .

decorate






('note', new 

Note






())

    .

model






({

        

memo






: 

t






.

Omit






(

memo






, ['author'])
    })

    .

onTransform






(function 

log






({ 

body






, 

params






, 

path






, 

request






: { 

method






 } }) {

        

console






.

log






(`${

method






} ${

path






}`, {

            

body






,

            

params







        })
    })

    .

get






('/', ({ 

note






 }) => 

note






.

data






)

    .

use






(

getUserId






)

    .

put






(
        '/',

        ({ 

note






, 

body






: { 

data






 }, 

username






 }) =>

            

note






.

add






({ 

data






, 

author






: 

username






 }),
        {

            

body






: 'memo'
        }
    )

    .

get






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

            return 

note






.

data






[

index






] ?? 

error






(404, 'Not Found :(')
        },
        {

            

params






: 

t






.

Object






({

                

index






: 

t






.

Number






()
            })
        }
    )

    .

guard






({

        

params






: 

t






.

Object






({

            

index






: 

t






.

Number






()
        })
    })

    .

delete






('/:index', ({ 

note






, 

params






: { 

index






 }, 

error






 }) => {

        if (

index






 in 

note






.

data






) return 

note






.

remove






(

index






)


        return 

error






(422)
    })

    .

patch






(
        '/:index',

        ({ 

note






, 

params






: { 

index






 }, 

body






: { 

data






 }, 

error






, 

username






 }) => {

            if (

index






 in 

note






.

data






)

                return 

note






.

update






(

index






, { 

data






, 

author






: 

username






 })


            return 

error






(422)
        },
        {

            

isSignIn






: true,

            

body






: 'memo'
        }
    )
```

## Build for production [​](tutorial.html#build-for-production)

Finally we can bundle our server into a binary for production using `bun build`:

bash

```
bun build \
	--compile \
	--minify-whitespace \
	--minify-syntax \
	--target bun \
	--outfile server \
	./src/index.ts
```

This command is a bit long, so let's break it down:

1. `--compile` - Compile TypeScript to binary
2. `--minify-whitespace` - Remove unnecessary whitespace
3. `--minify-syntax` - Minify JavaScript syntax to reduce file size
4. `--target bun` - Target the `bun` platform, this can optimize the binary for the target platform
5. `--outfile server` - Output the binary as `server`
6. `./src/index.ts` - The entry file of our server (codebase)

Now we can run the binary using `./server` and it will start the server on port 3000 same as using `bun dev`.

bash

```
./server
```

Open your browser and navigate to `http://localhost:3000/swagger`, you should see the same result as using the dev command.

By minifying the binary not only have we made our server small and portable, we also significantly reduced the memory usage of it.

TIP

Bun does have the `--minify` flag that will minify the binary, however it includes `--minify-identifiers`, and as we are using OpenTelemetry, it's going to rename function names and make tracing harder than it should.

WARNING

Exercise: Try to run the development server and production server, and compare the memory usage.

The development server will use a process named 'bun', while the production server will use the name 'server'.

## Wrapping up [​](tutorial.html#wrapping-up)

And- that's it 🎉

We have created a simple API using Elysia, we have learned how to create a simple API, how to handle errors, and how to observe our server using OpenTelemetry.

You could to take a step further by trying to connect to a real database, connect to a real frontend or implement real-time communication with WebSocket.

This tutorial covered most of the concepts we need to know to create an Elysia server, however there are other several useful concepts you might want to know.

### If you are stuck [​](tutorial.html#if-you-are-stuck)

If you have any further questions, feel free to ask our community on GitHub Discussions, Discord, and Twitter.

[**Discord**  
\
Official ElysiaJS discord community server](https://discord.gg/eaFJ2KDJck)

[**Twitter**  
\
Track updates and status of Elysia](https://twitter.com/elysiajs)

[**GitHub**  
\
Source code and development](https://github.com/elysiajs)

We wish you well on your journey with Elysia ❤️

[Edit this page on GitHub](https://github.com/elysiajs/documentation/edit/main/docs/tutorial.md)

Last updated:

Pager

[Previous pageQuick Start](quick-start.html)

[Next pageKey Concept](key-concept.html)


