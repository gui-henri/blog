---
title: "We need to fight for ZDR (and the case with OpenCode Go)"
createdAt: 2026-08-02
trigger: trend
tags: [opencode, deepseek, zdr]
source: "https://opencode.ai/br/go"
pubDate: 2026-08-04
draft: false
---

## The fact

Opencode Go is a subscription service that allows you to use low-cost models for cheap. Up until this point, all models had a Zero Data Retention (ZDR) policy, giving you the assurance that your data would not be used to train new models. This is good especially if you use the models to manage private things, like I used to ask the models to make PRs on my behalf on GitHub. For this to be possible, I would provide it access to my GitHub account and a special token just for that. Needless to say, I don't want my GitHub tokens being baked into the training data of any model.

But recently, DeepSeek V4 Flash 0731 launched, and with it the ZDR policy was softened on the service. Now, the data is not only retained but can be used to train new models.

*Edit: DeepSeek V4 Flash 0731 is now on ZDR again, though it needs to be renewed monthly by the OpenCode team.*

## Consequences

As a Brazilian, I don't care if my data is sent to China or to the U.S. Both are foreign countries caring only for their own sake, so I can just choose the one that will cost less. Despite this, having my data being used to train models takes away the possibility of using this on anything other than personal projects, since I can't just send the code I make at work to a foreign lab. It's not about U.S. or China, it's about the safety of the data the model is able to see. What if it sees something that can be used to harm me? What if it leaks customer data? This is unacceptable, and wouldn't recommend any professional to risk themselves using a non-ZDR'ed model to do serious work.

## Solution

For this moment, OpenRouter seems to be the default solution in the short term. Yes, the DeepSeek official API (used by OpenCode Go) will retain your data, but others hosting the models will not. The only losing side on this is DeepSeek, and I would strongly encourage them to review this policy in the future. Data retention is not a good thing and we should not tolerate this practice. It's unacceptable.

This is a good example of how Open Weights models are important, and will guide us to a fairer market. We, as clients, need to have options, or else we risk being forced to content ourselves with bad practices enforced by the biggest players.

Lastly, the OpenCode Go team was a little non-transparent about the changes, and trust is something they can't lose right now. They are able to protect their users against these kinds of situations just by changing providers, but they didn't yet. For now, if you're planning on using the model in anything sensitive, you may think twice.

*Edit: they were clearer about the ZDR later. It seems they really tried to solve the situation as soon as it was possible. I still think they could have handled it better, but I give them credit for acknowledging the problem and fixing it quick.*
