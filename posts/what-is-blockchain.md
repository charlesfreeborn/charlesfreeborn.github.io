---
title: "What is Blockchain? A Simplified Introduction"
date: "2022-08-02"
excerpt: "Breaking down the fundamentals of blockchain in plain language — how it works, why it's different, and what it enables."
category: "web3"
---

Blockchain is one of those terms that gets thrown around constantly but rarely explained clearly. Let me try to change that.

## The Basic Idea

A blockchain is a **distributed ledger** — a record of transactions (or data) that is shared and synchronized across many computers simultaneously, with no central authority controlling it.

Think of it like a Google Doc that:
- Thousands of computers all have a copy of
- Everyone can read
- No one can secretly edit — any change must be agreed upon by the network

## How It Actually Works

### Blocks

Data is grouped into **blocks**. Each block contains:
- A set of transactions or data
- A timestamp
- A cryptographic hash (a unique fingerprint of the block's contents)
- The hash of the *previous* block

That last point is the key. By including the previous block's hash, each block is chained to the one before it. Change any block, and its hash changes — which breaks every subsequent block. The chain is tamper-evident by design.

### The Chain

These blocks link together in chronological order, forming a **chain**. The full chain is the complete history of all transactions, going all the way back to the very first block (called the "genesis block").

### The Network

This chain doesn't live on one server. It's replicated across thousands of **nodes** — computers around the world running the blockchain software. When a new block is proposed, the nodes validate it according to the rules of the network before accepting it.

## Why Does This Matter?

Traditional systems rely on trusted intermediaries — banks, governments, companies — to maintain records and validate transactions. Blockchain removes the need for that intermediary by distributing trust across the network itself.

This enables:

- **Permissionless transactions** — anyone can participate without needing approval
- **Censorship resistance** — no single party can block or reverse transactions
- **Transparency** — the full history is publicly verifiable
- **Programmability** — smart contracts let you encode logic directly on the chain

## What Blockchain Is Not

Blockchain is not magic, and it's not the right solution to every problem. It trades efficiency for decentralization. A regular database is faster and cheaper for most applications. Blockchain makes sense when you need trustlessness — when the parties involved don't (or can't) trust a central authority.

## Wrapping Up

At its core, blockchain is a way of recording data that is transparent, tamper-resistant, and doesn't require a central authority. That's a powerful primitive, even if it's not a universal solution.

In my next post, I'll look at Web3 — the broader vision of what gets built on top of blockchains.
