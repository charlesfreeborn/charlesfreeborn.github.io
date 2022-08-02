---
title: What is Blockchain? A simplified introduction to Blockchain
date: 2022-08-02
description: "I am sharing my learnings on the blockchain technology."
featuredImage: ./chains.jpeg
---
# Introduction - What is a blockchain?

In its simplest terms, blockchain is a distributed database - an unchangeable record (or ledger) of asset ownership.

Blockchain enables the peer-to-peer transfer of digital assets without intermediaries, in a decentralized network. With blockchain, trust is established amongst unknown individuals. Blockchain was originally created to support cryptocurrencies like Bitcoin.

From a high level perspective, we can say that blockchain is a Decentralized Ledger Technology - DLT, comprising a triple-entry ledger. Blockchain contains debits, credits, and an immutable link to all past debits and credits.

Most blockchain projects are built around - 
    a. Decentralization
    b. Scalability
    c. Security

The three items listed above is what the [blockchain trilemma](<https://twitter.com/charliecodes/status/1547211026160123906>) is hinged on. The blockchain trilemma is a widely held belief that decentralized networks can only provide two of the three - decentralization, scalability, and security - benefits of blockchain at any given time.

Establishing trust on the blockchain entails -

   1. Validation
   2. Verification
   3. Consensus
   4. Immutable recording

In summary, blockchain technology supports methods for a decentralized peer-to-peer system, a collective trust model, and a distributed immutable ledger of transaction records.

## Blockcahin and decentralized systems
As a DLT, one of the benefits of the blockchain is the decentralized model. Blockchain operate in a trustless environment and with the decentralization model, there is no single point of failure.

And herein lies the strength of blockchains.

So we can say that a blockchain is just a database that is maintained by a network of users and secured via cryptography.

In the decentralized model, every node - computer - on the blockchain is part of the network. You can think of a blockchain as a truly shared data infrastructure. New transactions are broadcast to and recorded by the network and every node will update their local copy of the blockchain.

How then is trust implemented, if we say that blockchain operates in a trustless environment? Trust in a blockchain is implemented via algorithms and mechanisms like consensus. And this is possible, thanks to decentralization.

Blockchain is about securing, validating, verifying, and making sure resources needed for transaction execution are available.

To establish trust in a blockchain thus include:

   1. Securing chain using protocols
   2. Validating transactions and blocks for tampering
   3. Verifying availability of resources for transactions
   4. Executing and confirming transactions.

## The blockchain structure

A blockchain is a digital, append-only list of data records, and a type of distributed database. Records on a blockchain are called blocks, which are organized in a chronological order and are linked and secured using cryptography.

A block consists of the header information about the block and a set of valid transactions.

On the Bitcoin blockchain, transaction is the basic element. Transactions are validated and broadcast across the nodes on a blockchain. Many transactions form a block and these blocks are added to the blockchain through consensus.


## Types of blockchains

1. Public blockchain
2. Private blockchain
3. Hybrid or consortium blockchain
4. Sidechains

## Basic oprations in a blockchain
The main operations in a blockchain are transaction validation and block creation with the consensus of the participants - miners.

Two major roles for participants - miners in a blockchain -

1. Participants that initiate a transfer of value by creating a transaction.
2. Participants that work as miners who take on added work to verify transactions, broadcast transactions, compete to create a block, and reach consensus to validate the transactions. These participants are compensated with cryptocurrency like BTC.

### Rules of blockchains
1. If a record has been created and recorded, it can't be changed.
2. Data written into a blockchain is a historical and immutable record.
3. Data on the blockchain must be validated and proven that it has not been tampered.
4. All nodes - computers - running on a blockchain must agree on all data stored in it. And that is consensus.

## Algorithms and techniques in a blockchain

Consensus provides the technical infrastructure layer for blockchains. It does two things:
   a. It ensures that the next block in a blockchain is the one and only version of truth.
   b. It keeps powerful adversaries from taking over the system.

Consensus is the heart of blockchain. And an example of this consensus is Proof of Work and Proof of Stake. 

This leads to the two techniques for securing the blockchain - validation and verification - includes:
1. Hashing
2. Asymmetric key encryption

### Hashing
A hash function or hashing transforms and maps an arbitrary length of input data value to a fixed length value. The input data can be a document data of any length, tree data or block data.

This implies that hashing is taking an input of any length and producing an output of a fixed length.

The hashing requirements stipulate that algorithm should be one-way function and it should be collision-free.

### Six properties to consider a hash as secured

These six properties can be used to consider that a cryptographic hash function is secured:

1. Deterministic
2. Quick computation
3. Pre-image resistance
4. A small change in input changes the output
5. Collision resistant
6. Puzzle friendly.

## Pros of blockchain

1. Tokenization - You can create your own coins or tokens that have real-world value.
2. Publicly verifiable transactions.
3. Secured
4. Lower transaction costs as a result of removing intermediaries.
5. With smart contracts, we can achieve business process automation.

## Cons of blockchain

1. Blockchain is still a relatively new technology. So expect more evolution of the technology.
2. Scalability needs to be addressed for blockchain to achieve mass adoption.
3. Keeping data in blocks is still significantly high.

## Blockchain use cases
1. Background check - education credetnails and criminal records.
2. Secure document storage like home deeds, and will.
3. Birth registries
4. Land registries
5. Tokenized economy
6. Payment channels 
   
## Summary/Conclusion

A blockchain is a globally shared, transactional database. This means everyone can read entries in the database by participating in the network or protocol.

Blockchain is a state-based machine. It maintains a state until something happens. The mechanism for operating and determining the true state of the network is consensus. 

The blockchain is secured by a combination of decentralization, hashing, and encryption.

You can think of a block as a group of data that’s packaged into one artifact. And we create an immutable link between blocks via cryptography.

Changing data on any block will result in a different hash.

Consensus mechanisms are the nuts and bolts of validation.

In our next article, we will take a look at the Ethereum blockchain.

And if you find this article interesting, kindly click here to share it.