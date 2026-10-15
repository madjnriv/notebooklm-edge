# NotebookLM Edge

An offline-first, local AI knowledge system. Import documents, transcripts, and web content, and query them with retrieval-augmented Q&A, summaries, contradiction detection, and flashcard generation — with no cloud dependency.

## Overview

NotebookLM Edge is a personal knowledge engine that runs entirely on the user's own machine. Content is parsed, chunked, embedded, and indexed locally, and every query is answered by retrieving relevant context from the user's own library before generating a response. Nothing leaves the device by default.

## Core Features

- Import PDFs, notes, transcripts, and webpages
- Local parsing, chunking, embedding, and indexing — no cloud dependency
- Ask questions across the full knowledge base
- Generate summaries from imported content
- Surface contradictions between sources
- Generate flashcards from stored knowledge

## Architecture Overview

NotebookLM Edge is built as a microservice architecture on Node.js with NestJS. The system separates the ingestion path (parsing, chunking, embedding, and writing to storage) from the retrieval path (embedding a query, running similarity search, and generating a response), so each can be reasoned about and scaled independently.

### System Design Diagram

System design diagram will be added soon.

### Services

Service breakdown will be added soon.

## Folder Structure

Folder structure will be added soon.

## Tech Stack

- Runtime: Bun
- Framework: Express + TypeScript
- Architecture: Microservices

Additional stack details (message broker, vector store, metadata store) will be added once finalized.

## Status

Actively in development.

## License

To be determined.
