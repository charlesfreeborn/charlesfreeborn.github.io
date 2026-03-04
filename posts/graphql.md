---
title: "What is GraphQL? — A High Level Overview"
date: "2020-04-23"
excerpt: "A simplified overview of GraphQL — what it is, how it differs from REST, and when it's the right tool."
category: "graphql"
---

If you've been following web development trends, you've probably heard of GraphQL. It keeps coming up in conversations about APIs, and for good reason. But what actually *is* it?

## The Short Version

GraphQL is a query language for APIs and a runtime for executing those queries. It was developed internally at Facebook in 2012 and open-sourced in 2015.

Instead of having the server decide what data to send back, GraphQL lets the **client specify exactly what data it needs**.

## The Problem with REST

With a traditional REST API, you might have endpoints like:

```
GET /users/1
GET /users/1/posts
GET /users/1/followers
```

Two common problems arise:

**Over-fetching** — The server returns more data than you need. You ask for a user and get 20 fields when you only need 3.

**Under-fetching** — One request isn't enough. To build a profile page, you need to hit three different endpoints and stitch the data together yourself.

## How GraphQL Solves This

With GraphQL, there's typically one endpoint (e.g., `/graphql`), and you write a *query* that describes exactly what you want:

```graphql
query {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}
```

The server responds with exactly that shape of data — no more, no less.

## Key Concepts

- **Schema** — GraphQL APIs are strongly typed. The schema defines all the types and relationships in your data.
- **Queries** — For reading data.
- **Mutations** — For creating, updating, or deleting data.
- **Resolvers** — Functions on the server that return the data for each field.

## When Should You Use GraphQL?

GraphQL shines when:

- Your frontend has complex, varied data requirements
- You have multiple clients (web, mobile) with different needs
- You want to reduce over- and under-fetching
- You're building a developer-facing API and want a self-documenting schema

It may be overkill for simple CRUD apps with straightforward data shapes.

## Wrapping Up

GraphQL is a powerful alternative to REST that puts the client in control of the data it receives. It's worth understanding even if you don't reach for it on every project.

In future posts, I'll get into how Gatsby uses GraphQL at build time to pull data into your React components — which is where I first really started appreciating it.
