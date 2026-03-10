# Workshop paper accepted into ECIR 2026!

At the beginning of April, I’ll be presenting my workshop paper titled "Sensitivity-Aware Retrieval Augmented Intent Clarification" (don’t worry, I’ll explain that below) at the European Conference on Information Retrieval in Delft.

<img src="../images/ecir.png" alt="ecir2026" width="500" style="display: block; margin-left: auto; margin-right: auto;, width: 50%;"/>

## European Conference on Information Retrieval (ECIR)
ECIR is a multi-day conference for researchers and professionals in the field of Information Retrieval—think search engines, ranking, recommendation systems, Generative AI, and RAG. Although it is always organized within Europe, its scope is international. Last year, the conference was held in Lucca, Italy, and we were there with a delegation from the ICAI OpenGov Lab!

## Workshop on Conversational Search for Complex Information Needs
The conference also includes a day dedicated to workshops. These aren't "hands-on" sessions, but rather small, thematic gatherings alongside the main program. They are specific and in-depth, often leaving room for (very) short poster presentations and plenty of discussion and interaction. This makes them particularly interesting for a starting PhD student like myself: there is space for ideas that are still in development.

The workshop I’ll be participating in is about Conversational Search: a way of searching where the interaction feels more like a conversation than a traditional search query. You see this happening a lot now with Generative AI and chatbots. This workshop focuses on "complex information needs": questions or intentions that are not easily answered (for example, "Who is the President of the United States?" is factual and easy, whereas "Which bicycle should I buy?" is not).

## My paper on "Sensitivity-Aware Retrieval Augmented Intent Clarification"
Workshop papers are often not yet full-scale research papers and likely won't end up in my PhD dissertation (final thesis) in this exact form. In this short paper (4 pages), I introduce a "research gap"—a clear formulation of a research problem.

The problem I describe originates from Woo-requests (Dutch Freedom of Information Act requests). These are often formulated very broadly or unclearly, partly because a requester has little insight beforehand into what information is actually available. My goal is to help a requester specify their request in advance and to see if this can be effectively handled by a chatbot.

To specify a request, it is helpful to use (an overview of) the available documents so that you can ask the requester targeted questions about specific topics ("Are you looking for information about X?"). The problem: this information has not yet been made public, and sensitive information has not yet been redacted. The challenge, therefore, is to use information from these documents without leaking any sensitive data in the process.

And here is the breakdown of the title:

- Sensitivity-Aware: The system must be able to account for sensitive information.
- Retrieval Augmented: The system uses a search step (retrieval) to find and use (augment) documents when formulating clarifying questions.
- Intent Clarification: The ultimate goal of the system is to clarify the search intent in advance.

## Read the paper!
Do you find this interesting? The paper I wrote and will be presenting at the workshop can be found [here on arXiv](https://arxiv.org/abs/2603.06025).