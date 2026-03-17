---
title: "What Lamport's 1978 paper tells us about why Nakamoto chose the longest chain rule"
date: "2026-03-17"
excerpt: "Nakamoto built on the foudation laid by Lamport to enable us send money electonically without a central authority, effectively solving the double spend problem."
category: "distributed-systems"
---

Nobody asks me for my house address when I am purchasing an item from a physical store and paying with cash.

But if I were to purchase that same item over the internet, then a trusted third party, typically a financial institution, becomes necessary.  Why? Because trust remains a fundamental issue for online businesses. A merchant doesn’t trust that I haven’t spent that same money on another online shop before coming to theirs. This is the double-spend problem.

While financial institutions - the trusted third party - helped address the double-spend problem, there are still shortcomings of this trust-based model.
 
For example, there is the exposure of too much personal information  - why do I need to input all personal information about myself to make a purchase online or send money electronically?

Nakamoto proposed a solution to the double-spend problem in 2008 without a central authority, when the Bitcoin whitepaper was published. But before 2008, we have to go back to 1978, thirty years before Nakamoto’s solution, to understand that the formal logic required to order events in a distributed system was first defined by a computer scientist named Leslie Lamport.

Lamport proposed the use of logical clocks and event ordering over physical time, to determine the sequence of events in a distributed system. This he referred to as the “happened before” relation, a --> b.
## Lamport laid the foundation for solving the ordering problem in a distributed system
In general, the concept of time is used for referencing the occurrence of events. You can for example, say I walked into a physical shop at 4.16pm to purchase an item. But physical time cannot be used in evaluating the occurrence of events in distributed systems. 

For two reasons.

Firstly, messages take time to travel amongst distributed systems due to latency. Secondly, a synced global clock across all processes would be needed for two computers to perfectly agree on an exact time for a sequence of events.

Lamport defined the occurrence of events using the “happened before” relation --> thus
1. If a and b are events in the same process, and a comes before b, then a --> b. Meaning a happened before b. 

2. If a sends a message and b receives this same message from another process, then a happened before b.

3. If a --> b and b --> c, then a --> c.

Two distinct events a and b are said to be **concurrent** if a never happened before b and b never happened before a. This implies that the two events can exist without a relative order if there has been no communication between them. So we can’t say that a happened before b nor b happened before a. 

These concurrent events, where there is no communication and no clearly defined order is precisely the gap that Lamport’s logical clocks were designed to fill.
## Logical clocks and total ordering
Lamport proposed the assigning of a number to an event occurrence. We call this number time. 

Lamport formalised this with two clock conditions: 
* We define a clock C<sub>i</sub> for each process P<sub>i</sub> to be a function which assigns a number C<sub>i</sub>(a) to any event a in that process.
* The order in which an event occurs is used to reference time here and not physical time. If an event a happen before event b, then a happened at an earlier time than b.

The clock condition is thus for any event a, b:
if a --> b then C<sub>(a)</sub> < C<sub>(b)</sub>

* Clock conditions:
  * C1: if a and b are events in process P<sub>i</sub> and a comes before b, then C<sub>i</sub>(a) < C<sub>i</sub>(b). In a single process, if one event a comes before another event b, then its clock value must be lower.

  * C2: if a sends a message through process P<sub>i</sub> and b is the receipt of that message by process P<sub>j</sub> then C<sub>i</sub>(a) < C<sub>j</sub>(b). Across processes, if a message is sent before it is received, then the sender’s clock value at sending must be lower than the receiver’s clock value at receipt.
## Total ordering of events
While partial ordering is useful for determining which event happened before the other, total ordering defines the relation between two events. And helps in fixing the tiebreaker issue which is left open by partial ordering. 

For total ordering, Lamport used an arbitrary rule like an alphabetical order or a numerical ID of the process to determine which event occurs first, when two events have the same logical time C(a) = C(b). This is what we refer to as using process ID to break ties between two concurrent events within the system.

Lamport viewed distributed systems as a Replicated State Machine (likened to the [Ethereum Virtual Machine](https://ethereum.org/developers/docs/evm/) or the [Solana execution environment](https://solana.com/docs/core/programs/program-execution)) and demonstrated this with a resource allocation algorithm that relies on total ordering to function with no central authority and this is highly connected to blockchain decentralization.

## The limitations of logical clocks - the anomalous behaviour
Let’s say a person makes a request from his process A and calls a friend to make that same request on process B. We may never know that A was supposed to come before B, since the request is based on messages external to the process and B got a lower timestamp. This is the oracle problem we find in modern day blockchains, as blockchains work in closed loops and don’t know what happens outside.

Lamport proposed that we fix this using the physical clock - strong clock condition - that is, we introduce to the distributed processes all necessary information including timestamp about the ordering and the use of a strong clock condition for any event.

Lamport assumed that for every participants, the processes are known and that they will all act in an honest way. But the creation of multiple and infinite IDs is possible, which could lead to sybil attacks.

While this is feasible for a permissioned distributed, what happens in a permissionless distributed system, where nodes are not known, and participants are expected to act in an honest way?

This problem was what Nakamoto attempted to solve thirty years later, when he released the Bitcoin whitepaper.
## 2008 - Nakamoto steps on the scene with the Bitcoin whitepaper
Lamport assumed that the systems will act in a honest manner since they are known and assigned a process ID - think permissioned blockchains. Nakamoto however assumed that there will be actively malicious nodes in a permissionless distributed system. 

To understand why Nakamoto thought about solving this problem using a probabilistic mental model, we take a look at the Byzantine Generals Problem - BGP.

The Byzantine Generals Problem, BGP, is a hypothetical case of generals of several army divisions who are camped outside an enemy’s gate to know what next course of action to take - attack or retreat. Nakamoto used the BGP to solve issues of actively malicious nodes by making dishonesty economically irrational.

Nakamoto proposed the use of these distinct mechanisms:

1. **Timestamp server**: this works by collecting a [hash](https://www.cyfrin.io/glossary/hash) of a block of items - think transactions - to be timestamped and published across the nodes on a decentralized distributed system. This proves that the data existed at the time and each timestamp builds on top of the previous hash’s timestamp in a chronological order. 

   While Lamport used logical clocks ordering and process IDs to determine the order of events, Nakamoto’s timestamp used computational work to show that CPU energy was expended before it was added to the chain. This computational work we refer to as Proof-of-Work.

2. **Proof-of-Work**: in Proof-of-Work a single hash can be used by all nodes to verify that the work was done. 
And once it has been proven - consensus reached, the hash-based transactions are then grouped into a block, added to the ongoing chain to form a [blockchain](https://freeborncharles.com/posts/what-is-blockchain/).
An attacker will therefore have to redo all the works of the blocks chained after that particular block to change the state of the block. 


    It is one CPU, one vote as against Lamport's process ID.

1. **Economic incentive**: Nakamoto applied economic incentives to the Byzantine Generals Problem to ensure that loyalty is a more profitable strategy. That is, there is economic reward for miners supporting the network.

## Nakamoto’s longest chain rule

If two nodes simultaneously do the work and propose a block - a tie, some nodes will receive one before the other. But instead of discarding the other one immediately, they will work on the first one and keep the other as a branch. That’s a tie that needs to be broken - tie-breaking.
This is [forking](https://vitalik.eth.limo/general/2017/03/14/forks_and_markets.html) in blockchain.

This tie is broken when the next Proof-of-Work is found and one branch becomes longer. All nodes then switch to the longer branch. That’s the longest chain rule.
While Lamport uses total ordering in a permissioned way to decide tie-breaking, Nakamoto uses longest chain rule to decide tie-breaking in a permissionless distributed system, where there is a probability of actively malicious nodes.

The longest chain rule thus serves as a living logical clock to Lamport’s static one. It resolves concurrency, forks through energy expenditure, providing a definitive order in a trustless and permissionless distributed system.

Lamport’s tie-breaker lacked Sybil resistance - the creation of multiple process IDs being possible, while Nakamoto’s CPU power invented Sybil resistance.  
## Conclusion
Nakamoto used economic incentive to solve the ordering problem which Lamport solved with formal algorithms. And this is the reason we are able to send money electronically without a trusted third party or a central authority, effectively solving the double-spend problem.

Every serious consensus mechanism built after the Bitcoin whitepaper, whether [Tendermint consensus without mining](https://tendermint.com/static/docs/tendermint.pdf), [Casper](https://medium.com/@jonchoi/ethereum-casper-101-7a851a4f1eb0), or [HotStuff - BFT Consensus](https://tokens-economy.gitbook.io/consensus/chain-based-pbft-and-bft-based-proof-of-stake/hotstuff), is a different answer to the same ordering problem Lamport defined in 1978.

If Lamport’s 1978 paper assumed honest participants through the permissioned process ID, and Nakamoto’s 2008 Bitcoin whitepaper assumed actively malicious nodes, what happens when the economic incentives that keep Nakamoto’s system honest break down?
