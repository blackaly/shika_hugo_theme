---
title: "What is a Distributed System"
date: 2024-01-02T10:00:00-05:00
image: "/img/technology.jpg"
draft: false
featured: true
tags: ["distributed systems", "computer science", "programming"]
---

# What is a Distributed System

This section was labeled under, or is related to [programming]

I've been reading recently Distributed Systems by Steen, M. v., & Tanenbaum, A. S.{{< cite num="1" authors="Maarten van Steen and Andrew S. Tanenbaum" title="Distributed Systems: Principles and Paradigms" details="4.01 (Maarten van Steen, 2023)" link="https://libgen.li/file.php?md5=d46eeafcf46684d5421d07300af499ed" >}} And it provides a very nice introduction into the topic. Something I liked really from the book, how it starts with distinguishing between convoluted terms like distributed systems and decentralized systems. I experience this issue a lot while talking in an engineering context and I find someone suggesting a distributed approach, however, many of the listeners confuse it with other definitions like service-based architecture and the like.

{{< figure src="/img/distributed-systems.jpg" title="Figure 1.1: The organization of a (a) centralized, (b) decentralized, and (c) distributed system, according to various popular sources. We take a different approach, as figures such as these are really not that meaningful." >}}

In this article I will go quickly over that distinction.

To understand the difference between distributed and decentralized systems, we must first consider how networked systems emerge. There are typically two distinct evolutionary paths that lead to computers being connected together.

The first path, which we might call the integrative approach, starts with independent, often heterogeneous systems that need to communicate. This path naturally leads to what we call "distributed systems" - collections of autonomous computers that appear to users as a single coherent system.

The second path, which could be termed the divisive approach, begins with a single system that, due to scaling requirements, gets physically separated into multiple components while maintaining centralized control. This creates what we commonly refer to as "decentralized systems."

## Key Differences

The primary distinction lies in **control and autonomy**:

1. In distributed systems:
   - Individual nodes operate autonomously
   - Each node has its own computational resources
   - No central controlling authority exists
   - Nodes communicate by message passing

2. In decentralized systems:
   - Components are physically separated but logically unified
   - A central authority or coordination mechanism exists
   - Decision-making may be delegated but ultimate control remains centralized
   - Often designed as a coherent system from the beginning

## Practical Examples

### Distributed Systems Examples
- The Internet itself
- Peer-to-peer networks like BitTorrent
- Blockchain networks
- DNS (Domain Name System)

### Decentralized Systems Examples
- Cloud computing infrastructure
- Content Delivery Networks (CDNs)
- Most microservice architectures
- Traditional client-server applications

## References

1. Maarten van Steen and Andrew S. Tanenbaum, *Distributed Systems: Principles and Paradigms*, 4.01 (Maarten van Steen, 2023) 