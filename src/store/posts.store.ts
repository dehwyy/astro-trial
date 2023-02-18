import { atom } from "nanostores"

export const posts = atom<IPost[]>([
  {
    id: 1,
    title: "Cyberpunk: EDGERUNNERS",
    author: "dehwyy",
    authorId: 1,
    date: new Date().toDateString().split(" ").slice(1).join(" "),
    authorImage: "https://sun9-42.userapi.com/impg/QiH9W0PobEjVjZsuDwGX5iKnDFuuyI7fGVx_5A/VZxGwaA_u1k.jpg?size=850x1185&quality=95&sign=b515481bffd26e100e8256f7ba4e2b79&type=album",
    previewImage: "https://sun9-54.userapi.com/impg/2eWcvyPtxZTMHF4OyMbesa-ioaNPhlQfAA2Qtw/5avOSPSO9As.jpg?size=2560x1440&quality=95&sign=84f0362b3934f3f2f420dd857ee6a643&type=album",
    previewText: "some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text",
    theme: "code",
    content: "# Nano Stores\n" +
        "\n" +
        "<img align=\"right\" width=\"92\" height=\"92\" title=\"Nano Stores logo\"\n" +
        "     src=\"https://nanostores.github.io/nanostores/logo.svg\">\n" +
        "\n" +
        "A tiny state manager for **React**, **React Native**, **Preact**, **Vue**,\n" +
        "**Svelte**, **Solid**, **Lit**, **Angular**, and vanilla JS.\n" +
        "It uses **many atomic stores** and direct manipulation.\n" +
        "\n" +
        "* **Small.** Between 334 and 1064 bytes (minified and gzipped).\n" +
        "  Zero dependencies. It uses [Size Limit] to control size.\n" +
        "* **Fast.** With small atomic and derived stores, you do not need to call\n" +
        "  the selector function for all components on every store change.\n" +
        "* **Tree Shakable.** The chunk contains only stores used by components\n" +
        "  in the chunk.\n" +
        "* Was designed to move logic from components to stores.\n" +
        "* It has good **TypeScript** support.\n" +
        "\n" +
        "```ts\n" +
        "// store/users.ts\n" +
        "import { atom } from 'nanostores'\n" +
        "export const users = atom<User[]>([])\n" +
        "export function addUser(user: User) {\n" +
        "  users.set([...users.get(), user]);\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "```ts\n" +
        "// store/admins.ts\n" +
        "import { computed } from 'nanostores'\n" +
        "import { users } from './users.js'\n" +
        "export const admins = computed(users, allUsers =>\n" +
        "  allUsers.filter(user => user.isAdmin)\n" +
        ")\n" +
        "```\n" +
        "\n" +
        "```tsx\n" +
        "// components/admins.tsx\n" +
        "import { useStore } from '@nanostores/react'\n" +
        "import { admins } from '../stores/admins.js'\n" +
        "export const Admins = () => {\n" +
        "  const list = useStore(admins)\n" +
        "  return (\n" +
        "    <ul>\n" +
        "      {list.map(user => <UserItem user={user} />)}\n" +
        "    </ul>\n" +
        "  )\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "<a href=\"https://evilmartians.com/?utm_source=nanostores\">\n" +
        "  <img src=\"https://evilmartians.com/badges/sponsored-by-evil-martians.svg\"\n" +
        "       alt=\"Sponsored by Evil Martians\" width=\"236\" height=\"54\">\n" +
        "</a>\n" +
        "\n" +
        "[Size Limit]: https://github.com/ai/size-limit\n" +
        "\n" +
        "## Table of Contents\n" +
        "\n" +
        "* [Smart Stores](#smart-stores)\n" +
        "* [Guide](#guide)\n" +
        "* Integration\n" +
        "  * [React & Preact](#react--preact)\n" +
        "  * [Vue](#vue)\n" +
        "  * [Svelte](#svelte)\n" +
        "  * [Solid](#solid)\n" +
        "  * [Lit](#lit)\n" +
        "  * [Angular](#angular)\n" +
        "  * [Vanilla JS](#vanilla-js)\n" +
        "  * [Server-Side Rendering](#server-side-rendering)\n" +
        "  * [Tests](#tests)\n" +
        "* [Best Practices](#best-practices)\n" +
        "* [Known Issues](#known-issues)\n" +
        "\n" +
        "\n" +
        "## Install\n" +
        "\n" +
        "```sh\n" +
        "npm install nanostores\n" +
        "```\n" +
        "\n" +
        "## Smart Stores\n" +
        "\n" +
        "* [Persistent](https://github.com/nanostores/persistent) store to save data\n" +
        "  to `localStorage` and synchronize changes between browser tabs.\n" +
        "* [Router](https://github.com/nanostores/router) store to parse URL\n" +
        "  and implements SPA navigation.\n" +
        "* [I18n](https://github.com/nanostores/i18n) library based on stores\n" +
        "  to make application translatable.\n" +
        "* [Logux Client](https://github.com/logux/client): stores with WebSocket\n" +
        "  sync and CRDT conflict resolution.\n" +
        "\n" +
        "\n" +
        "## Guide\n" +
        "\n" +
        "### Atoms\n" +
        "\n" +
        "Atom store can be used to store strings, numbers, arrays.\n" +
        "\n" +
        "You can use it for objects too if you want to prohibit key changes\n" +
        "and allow only replacing the whole object (like we do in [router]).\n" +
        "\n" +
        "To create it call `atom(initial)` and pass initial value as a first argument.\n" +
        "\n" +
        "```ts\n" +
        "import { atom } from 'nanostores'\n" +
        "export const counter = atom(0)\n" +
        "```\n" +
        "\n" +
        "In TypeScript, you can optionally pass value type as type parameter.\n" +
        "\n" +
        "```ts\n" +
        "export type LoadingStateValue = 'empty' | 'loading' | 'loaded'\n" +
        "export const loadingState = atom<LoadingStateValue>('empty')\n" +
        "```\n" +
        "\n" +
        "`store.get()` will return store’s current value.\n" +
        "`store.set(nextValue)` will change value.\n" +
        "\n" +
        "```ts\n" +
        "counter.set(counter.get() + 1)\n" +
        "```\n" +
        "\n" +
        "`store.subscribe(cb)` and `store.listen(cb)` can be used to subscribe\n" +
        "for the changes in vanilla JS. For React/Vue we have extra special helpers\n" +
        "to re-render the component on any store changes.\n" +
        "\n" +
        "```ts\n" +
        "const unbindListener = counter.subscribe(value => {\n" +
        "  console.log('counter value:', value)\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "`store.subscribe(cb)` in contrast with `store.listen(cb)` also call listeners\n" +
        "immediately during the subscription.\n" +
        "\n" +
        "[router]: https://github.com/nanostores/router\n" +
        "\n" +
        "\n" +
        "### Maps\n" +
        "\n" +
        "Map store can be used to store objects and change keys in this object.\n" +
        "\n" +
        "To create map store call `map(initial)` function with initial object.\n" +
        "\n" +
        "```ts\n" +
        "import { map } from 'nanostores'\n" +
        "export const profile = map({\n" +
        "  name: 'anonymous'\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "In TypeScript you can pass type parameter with store’s type:\n" +
        "\n" +
        "```ts\n" +
        "export interface ProfileValue {\n" +
        "  name: string,\n" +
        "  email?: string\n" +
        "}\n" +
        "export const profile = map<ProfileValue>({\n" +
        "  name: 'anonymous'\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "`store.set(object)` or `store.setKey(key, value)` methods will change the store.\n" +
        "\n" +
        "```ts\n" +
        "profile.setKey('name', 'Kazimir Malevich')\n" +
        "```\n" +
        "\n" +
        "Store’s listeners will receive second argument with changed key.\n" +
        "\n" +
        "```ts\n" +
        "profile.listen((value, changed) => {\n" +
        "  console.log(`${changed} new value ${value[changed]}`)\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "\n" +
        "### Maps Templates\n" +
        "\n" +
        "Map templates was created for similar stores like for the store\n" +
        "for each post in the blog where you have many posts.\n" +
        "It is like class in ORM frameworks.\n" +
        "\n" +
        "This is advanced tool, which could be too complicated to be used\n" +
        "on every case. But it will be very useful for creating libraries\n" +
        "like `react-query`. See [Logux Client] for example.\n" +
        "\n" +
        "Nano Stores has map templates, to use a separated store\n" +
        "for each item because of:\n" +
        "\n" +
        "1. Performance: components can subscribe to the changes on specific post.\n" +
        "2. Lists can’t reflect that only specific subset of posts was loaded\n" +
        "   from the server.\n" +
        "\n" +
        "`mapTemplate(init)` creates template. `init` callback will receive item’s\n" +
        "store and ID.\n" +
        "\n" +
        "```ts\n" +
        "import { mapTemplate } from 'nanostores'\n" +
        "export interface PostValue {\n" +
        "  id: string\n" +
        "  title: string\n" +
        "  updatedAt: number\n" +
        "}\n" +
        "export const Post = mapTemplate<PostValue>((newPost, id) => {\n" +
        "  newPost.setKey('title', 'New post')\n" +
        "  newPost.setKey('updatedAt', Date.now())\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "Each item of the template must have `value.id`.\n" +
        "\n" +
        "```ts\n" +
        "let post1 = Post('1')\n" +
        "post1.get().id //=> '1'\n" +
        "```\n" +
        "\n" +
        "[Logux Client]: https://github.com/logux/client\n" +
        "\n" +
        "\n" +
        "### Lazy Stores\n" +
        "\n" +
        "Nano Stores unique feature is that every state have 2 modes:\n" +
        "\n" +
        "* **Mount:** when one or more listeners was mount to the store.\n" +
        "* **Disabled:** when store has no listeners.\n" +
        "\n" +
        "Nano Stores was created to move logic from components to the store.\n" +
        "Stores can listen URL changes or establish network connections.\n" +
        "Mount/disabled modes allow you to create lazy stores, which will use resources\n" +
        "only if store is really used in the UI.\n" +
        "\n" +
        "`onMount` sets callback for mount and disabled states.\n" +
        "\n" +
        "```ts\n" +
        "import { onMount } from 'nanostores'\n" +
        "onMount(profile, () => {\n" +
        "  // Mount mode\n" +
        "  return () => {\n" +
        "    // Disabled mode\n" +
        "  }\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "For performance reasons, store will move to disabled mode with 1 second delay\n" +
        "after last listener unsubscribing.\n" +
        "\n" +
        "Map templates can use `init` callback for code for mount and disabled modes:\n" +
        "\n" +
        "```ts\n" +
        "mapTemplate((post, id) => {\n" +
        "  // Mount mode\n" +
        "  let unsubscribe = loadDataAndSubscribe(`/posts/${id}`, data => {\n" +
        "    post.set(data)\n" +
        "  })\n" +
        "  return () => {\n" +
        "    // Disabled mode\n" +
        "    unsubscribe()\n" +
        "  }\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "Call `keepMount()` to test store’s lazy initializer in tests and `cleanStores`\n" +
        "to unmount them after test.\n" +
        "\n" +
        "```js\n" +
        "import { cleanStores, keepMount } from 'nanostores'\n" +
        "import { Post } from './profile.js'\n" +
        "afterEach(() => {\n" +
        "  cleanStores(Post)\n" +
        "})\n" +
        "it('is anonymous from the beginning', () => {\n" +
        "  let post = Post(1)\n" +
        "  keepMount(post)\n" +
        "  // Checks\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "Map template will keep cache of all mount stores:\n" +
        "\n" +
        "```ts\n" +
        "postA = Post('same ID')\n" +
        "postB = Post('same ID')\n" +
        "postA === postB //=> true\n" +
        "```\n" +
        "\n" +
        "### Computed Stores\n" +
        "\n" +
        "Computed store is based on other store’s value.\n" +
        "\n" +
        "```ts\n" +
        "import { computed } from 'nanostores'\n" +
        "import { users } from './users.js'\n" +
        "export const admins = computed(users, usersValue => {\n" +
        "  // This callback will be called on every `users` changes\n" +
        "  return usersValue.filter(user => user.isAdmin)\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "You can combine a value from multiple stores:\n" +
        "\n" +
        "```ts\n" +
        "import { lastVisit } from './lastVisit.js'\n" +
        "import { posts } from './posts.js'\n" +
        "export const newPosts = computed([lastVisit, posts], (when, allPosts) => {\n" +
        "  return allPosts.filter(post => post.publishedAt > when)\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "### Actions\n" +
        "\n" +
        "Action is a function that changes a store. It is a good place to move\n" +
        "business logic like validation or network operations.\n" +
        "\n" +
        "Wrapping functions with `action()` can track who changed the store\n" +
        "in the [logger](https://github.com/nanostores/logger).\n" +
        "\n" +
        "```ts\n" +
        "import { action } from 'nanostores'\n" +
        "export const increase = action(counter, 'increase', (store, add) => {\n" +
        "  if (validateMax(store.get() + add)) {\n" +
        "    store.set(store.get() + add)\n" +
        "  }\n" +
        "  return store.get()\n" +
        "})\n" +
        "increase(1) //=> 1\n" +
        "increase(5) //=> 6\n" +
        "```\n" +
        "\n" +
        "Actions for map template can be created with `actionFor()`:\n" +
        "\n" +
        "```ts\n" +
        "import { actionFor } from 'nanostores'\n" +
        "export const rename = actionFor(Post, 'rename', async (store, newTitle) => {\n" +
        "  await api.updatePost({\n" +
        "    id: store.get().id,\n" +
        "    title: newTitle\n" +
        "  })\n" +
        "  store.setKey('title', newTitle)\n" +
        "  store.setKey('updatedAt', Date.now())\n" +
        "})\n" +
        "await rename(post, 'New title')\n" +
        "```\n" +
        "\n" +
        "All running async actions are tracked by `allTasks()`. It can simplify\n" +
        "tests with chains of actions.\n" +
        "\n" +
        "```ts\n" +
        "import { allTasks } from 'nanostores'\n" +
        "renameAllPosts()\n" +
        "await allTasks()\n" +
        "```\n" +
        "\n" +
        "### Tasks\n" +
        "\n" +
        "`startTask()` and `task()` can be used to mark all async operations\n" +
        "during store initialization.\n" +
        "\n" +
        "```ts\n" +
        "import { task } from 'nanostores'\n" +
        "onMount(post, () => {\n" +
        "  task(async () => {\n" +
        "    post.set(await loadPost())\n" +
        "  })\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "You can wait for all ongoing tasks end in tests or SSR with `await allTasks()`.\n" +
        "\n" +
        "```jsx\n" +
        "import { allTasks } from 'nanostores'\n" +
        "post.listen(() => {}) // Move store to active mode to start data loading\n" +
        "await allTasks()\n" +
        "const html = ReactDOMServer.renderToString(<App />)\n" +
        "```\n" +
        "\n" +
        "Async actions will be wrapped to `task()` automatically.\n" +
        "\n" +
        "```ts\n" +
        "rename(post1, 'New title')\n" +
        "rename(post2, 'New title')\n" +
        "await allTasks()\n" +
        "```\n" +
        "\n" +
        "\n" +
        "### Store Events\n" +
        "\n" +
        "Each store has a few events, which you listen:\n" +
        "\n" +
        "* `onStart(store, cb)`: first listener was subscribed.\n" +
        "* `onStop(store, cb)`: last listener was unsubscribed.\n" +
        "* `onMount(store, cb)`: shortcut to use both `onStart` and `onStop`.\n" +
        "  We recommend to always use `onMount` instead of `onStart + onStop`,\n" +
        "  because it has a short delay to prevent flickering behavior.\n" +
        "* `onSet(store, cb)`: before applying any changes to the store.\n" +
        "* `onNotify(store, cb)`: before notifying store’s listeners about changes.\n" +
        "\n" +
        "`onSet` and `onNotify` events has `abort()` function to prevent changes\n" +
        "or notification.\n" +
        "\n" +
        "```ts\n" +
        "import { onSet } from 'nanostores'\n" +
        "onSet(store, ({ newValue, abort }) => {\n" +
        "  if (!validate(newValue)) {\n" +
        "    abort()\n" +
        "  }\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "Same event listeners can communicate with `payload.shared` object.\n" +
        "\n" +
        "\n" +
        "## Integration\n" +
        "\n" +
        "### React & Preact\n" +
        "\n" +
        "Use [`@nanostores/react`] or [`@nanostores/preact`] package\n" +
        "and `useStore()` hook to get store’s value and re-render component\n" +
        "on store’s changes.\n" +
        "\n" +
        "```tsx\n" +
        "import { useStore } from '@nanostores/react' // or '@nanostores/preact'\n" +
        "import { profile } from '../stores/profile.js'\n" +
        "import { Post } from '../stores/post.js'\n" +
        "export const Header = ({ postId }) => {\n" +
        "  const user = useStore(profile)\n" +
        "  const post = useStore(Post(postId))\n" +
        "  return <header>{post.title} for {user.name}</header>\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "[`@nanostores/preact`]: https://github.com/nanostores/preact\n" +
        "[`@nanostores/react`]: https://github.com/nanostores/react\n" +
        "\n" +
        "\n" +
        "### Vue\n" +
        "\n" +
        "Use [`@nanostores/vue`] and `useStore()` composable function\n" +
        "to get store’s value and re-render component on store’s changes.\n" +
        "\n" +
        "```vue\n" +
        "<script setup>\n" +
        "import { useStore } from '@nanostores/vue'\n" +
        "import { profile } from '../stores/profile.js'\n" +
        "import { Post } from '../stores/post.js'\n" +
        "const props = defineProps(['postId'])\n" +
        "const user = useStore(profile)\n" +
        "const post = useStore(Post(props.postId))\n" +
        "</script>\n" +
        "<template>\n" +
        "  <header>{{ post.title }} for {{ user.name }}</header>\n" +
        "</template>\n" +
        "```\n" +
        "\n" +
        "[`@nanostores/vue`]: https://github.com/nanostores/vue\n" +
        "\n" +
        "\n" +
        "### Svelte\n" +
        "\n" +
        "Every store implements\n" +
        "[Svelte's store contract](https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values-store-contract).\n" +
        "Put `$` before store variable to get store’s\n" +
        "value and subscribe for store’s changes.\n" +
        "\n" +
        "```svelte\n" +
        "<script>\n" +
        "  import { profile } from '../stores/profile.js'\n" +
        "  import { Post } from '../stores/post.js'\n" +
        "  export let postId\n" +
        "  const post = Post(postId)\n" +
        "</script>\n" +
        "<header>{$post.title} for {$profile.name}</header>\n" +
        "```\n" +
        "\n" +
        "\n" +
        "### Solid\n" +
        "\n" +
        "Use [`@nanostores/solid`] and `useStore()` composable function\n" +
        "to get store’s value and re-render component on store’s changes.\n" +
        "\n" +
        "```js\n" +
        "import { useStore } from '@nanostores/solid'\n" +
        "import { profile } from '../stores/profile.js'\n" +
        "import { Post } from '../stores/post.js'\n" +
        "export function Header({ postId }) {\n" +
        "  const user = useStore(profile)\n" +
        "  const post = useStore(Post(postId))\n" +
        "  return <header>{post().title} for {user().name}</header>\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "[`@nanostores/solid`]: https://github.com/nanostores/solid\n" +
        "\n" +
        "### Lit\n" +
        "\n" +
        "Use [`@nanostores/lit`] and `StoreController` reactive controller\n" +
        "to get store’s value and re-render component on store’s changes.\n" +
        "\n" +
        "```ts\n" +
        "import { StoreController } from '@nanostores/lit'\n" +
        "import { profile } from '../stores/profile.js'\n" +
        "import { Post } from '../stores/post.js'\n" +
        "@customElement('my-header')\n" +
        "class MyElement extends LitElement {\n" +
        "  @property()\n" +
        "  postId = '1'\n" +
        "  private userController = new StoreController(this, profile)\n" +
        "  private postController = new StoreController(this, Post(this.postId))\n" +
        "  render() {\n" +
        "    const user = userController.value\n" +
        "    const post = postController.value\n" +
        "    return html\\`<header>${post.title} for ${user.name}</header>`\n" +
        "  }\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "[`@nanostores/lit`]: https://github.com/nanostores/lit\n" +
        "\n" +
        "### Angular\n" +
        "\n" +
        "Use [`@nanostores/angular`] and `NanostoresService` with `useStore()`\n" +
        "method to get store’s value and subscribe for store’s changes.\n" +
        "\n" +
        "```ts\n" +
        "// NgModule:\n" +
        "import { NANOSTORES, NanostoresService } from '@nanostores/angular';\n" +
        "@NgModule({ providers: [{ provide: NANOSTORES, useClass: NanostoresService }], ... })\n" +
        "```\n" +
        "\n" +
        "```tsx\n" +
        "// Component:\n" +
        "import { Component } from '@angular/core';\n" +
        "import { NanostoresService } from '@nanostores/angular';\n" +
        "import { Observable, switchMap } from 'rxjs';\n" +
        "import { profile } from '../stores/profile';\n" +
        "import { IUser, User } from '../stores/user';\n" +
        "@Component({\n" +
        "  selector: \"app-root\",\n" +
        "  template: '<p *ngIf=\"(currentUser$ | async) as user\">{{ user.name }}</p>'\n" +
        "})\n" +
        "export class AppComponent {\n" +
        "  currentUser$: Observable<IUser> = this.nanostores.useStore(profile)\n" +
        "    .pipe(switchMap(({ userId }) => this.nanostores.useStore(User(userId))));\n" +
        "  constructor(private nanostores: NanostoresService) { }\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "[`@nanostores/angular`]: https://github.com/nanostores/angular\n" +
        "\n" +
        "### Vanilla JS\n" +
        "\n" +
        "`Store#subscribe()` calls callback immediately and subscribes to store changes.\n" +
        "It passes store’s value to callback.\n" +
        "\n" +
        "```js\n" +
        "import { profile } from '../stores/profile.js'\n" +
        "import { Post } from '../stores/post.js'\n" +
        "const post = Post(postId)\n" +
        "function render () {\n" +
        "  console.log(`${post.title} for ${profile.name}`)\n" +
        "}\n" +
        "profile.listen(render)\n" +
        "post.listen(render)\n" +
        "render()\n" +
        "```\n" +
        "\n" +
        "See also `listenKeys(store, keys, cb)` to listen for specific keys changes\n" +
        "in the map.\n" +
        "\n" +
        "\n" +
        "### Server-Side Rendering\n" +
        "\n" +
        "Nano Stores support SSR. Use standard strategies.\n" +
        "\n" +
        "```js\n" +
        "if (isServer) {\n" +
        "  settings.set(initialSettings)\n" +
        "  router.open(renderingPageURL)\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "You can wait for async operations (for instance, data loading\n" +
        "via isomorphic `fetch()`) before rendering the page:\n" +
        "\n" +
        "```jsx\n" +
        "import { allTasks } from 'nanostores'\n" +
        "post.listen(() => {}) // Move store to active mode to start data loading\n" +
        "await allTasks()\n" +
        "const html = ReactDOMServer.renderToString(<App />)\n" +
        "```\n" +
        "\n" +
        "\n" +
        "### Tests\n" +
        "\n" +
        "Adding an empty listener by `keepMount(store)` keeps the store\n" +
        "in active mode during the test. `cleanStores(store1, store2, …)` cleans\n" +
        "stores used in the test.\n" +
        "\n" +
        "```ts\n" +
        "import { cleanStores, keepMount } from 'nanostores'\n" +
        "import { profile } from './profile.js'\n" +
        "afterEach(() => {\n" +
        "  cleanStores(profile)\n" +
        "})\n" +
        "it('is anonymous from the beginning', () => {\n" +
        "  keepMount(profile)\n" +
        "  expect(profile.get()).toEqual({ name: 'anonymous' })\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "You can use `allTasks()` to wait all async operations in stores.\n" +
        "\n" +
        "```ts\n" +
        "import { allTasks } from 'nanostores'\n" +
        "it('saves user', async () => {\n" +
        "  saveUser()\n" +
        "  await allTasks()\n" +
        "  expect(analyticsEvents.get()).toEqual(['user:save'])\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "\n" +
        "## Best Practices\n" +
        "\n" +
        "### Move Logic from Components to Stores\n" +
        "\n" +
        "Stores are not only to keep values. You can use them to track time, to load data\n" +
        "from server.\n" +
        "\n" +
        "```ts\n" +
        "import { atom, onMount } from 'nanostores'\n" +
        "export const currentTime = atom<number>(Date.now())\n" +
        "onMount(currentTime, () => {\n" +
        "  currentTime.set(Date.now())\n" +
        "  const updating = setInterval(() => {\n" +
        "    currentTime.set(Date.now())\n" +
        "  }, 1000)\n" +
        "  return () => {\n" +
        "    clearInterval(updating)\n" +
        "  }\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "Use derived stores to create chains of reactive computations.\n" +
        "\n" +
        "```ts\n" +
        "import { computed } from 'nanostores'\n" +
        "import { currentTime } from './currentTime.js'\n" +
        "const appStarted = Date.now()\n" +
        "export const userInApp = computed(currentTime, now => {\n" +
        "  return now - appStarted\n" +
        "})\n" +
        "```\n" +
        "\n" +
        "We recommend moving all logic, which is not highly related to UI, to the stores.\n" +
        "Let your stores track URL routing, validation, sending data to a server.\n" +
        "\n" +
        "With application logic in the stores, it is much easier to write and run tests.\n" +
        "It is also easy to change your UI framework. For instance, add React Native\n" +
        "version of the application.\n" +
        "\n" +
        "\n" +
        "### Separate changes and reaction\n" +
        "\n" +
        "Use a separated listener to react on new store’s value, not an action where you\n" +
        "change this store.\n" +
        "\n" +
        "```diff\n" +
        "  const increase = action(counter, 'increase', store => {\n" +
        "    store.set(store.get() + 1)\n" +
        "-   printCounter(store.get())\n" +
        "  }\n" +
        "+ counter.listen(value => {\n" +
        "+   printCounter(value)\n" +
        "+ })\n" +
        "```\n" +
        "\n" +
        "An action is not the only way for store to a get new value.\n" +
        "For instance, persistent store could get the new value from another browser tab.\n" +
        "\n" +
        "With this separation your UI will be ready to any source of store’s changes.\n" +
        "\n" +
        "\n" +
        "### Reduce `get()` usage outside of tests\n" +
        "\n" +
        "`get()` returns current value and it is a good solution for tests.\n" +
        "\n" +
        "But it is better to use `useStore()`, `$store`, or `Store#subscribe()` in UI\n" +
        "to subscribe to store changes and always render the actual data.\n" +
        "\n" +
        "```diff\n" +
        "- const { userId } = profile.get()\n" +
        "+ const { userId } = useStore(profile)\n" +
        "```\n" +
        "\n" +
        "\n" +
        "## Known Issues\n" +
        "\n" +
        "### ESM\n" +
        "\n" +
        "Nano Stores use ESM-only package. You need to use ES modules\n" +
        "in your application to import Nano Stores.\n" +
        "\n" +
        "In Next.js ≥11.1 you can alternatively use the [`esmExternals`] config option.\n" +
        "\n" +
        "For old Next.js you need to use [`next-transpile-modules`] to fix\n" +
        "lack of ESM support in Next.js.\n" +
        "\n" +
        "[`next-transpile-modules`]: https://www.npmjs.com/package/next-transpile-modules\n" +
        "[`esmExternals`]: https://nextjs.org/blog/next-11-1#es-modules-support",
    tags: ["anime", "japanese"]
  },
  {
    id: 2,
    title: "Some random title",
    author: "dehwyy",
    authorId: 1,
    date: new Date().toDateString().split(" ").slice(1).join(" "),
    authorImage: "https://sun9-42.userapi.com/impg/QiH9W0PobEjVjZsuDwGX5iKnDFuuyI7fGVx_5A/VZxGwaA_u1k.jpg?size=850x1185&quality=95&sign=b515481bffd26e100e8256f7ba4e2b79&type=album",
    previewImage: "https://sun9-9.userapi.com/impg/O5RLIfvVYZ9FXeseX8mTeG_IjICSaYgXYnLI7g/xh3vgMFMY_o.jpg?size=756x884&quality=95&sign=89d5d24866f5991cb2b1ae3cb3d6b804&type=album",
    previewText: "some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text",
    theme: "games",
    content: "aslmkdakskjda adjasjd",
    tags: ["sci-fi", "osu!"]
  },
])