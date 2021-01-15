## `assemblyai-to-dpe`

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

Node module to convert from assemblyAI STT json to [DPE json format](https://github.com/bbc/digital-paper-edit).
It can convert AssemblyAI results, with or without speaker `utterances`.
If speaker `utterances` are not present, it uses punctuation to create the paragraphs.

## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:pietrop/assemblyai-to-dpe.git
```

```
cd assemblyai-to-dpe
```

```
npm install
```

## Usage

```
npm install @pietrop/assemblyai-to-dpe
```

```js
const convert = require('@pietrop/assemblyai-to-dpe');
const sampleJson = require('./sample/assemblyai-speakers-sample.json');

const json = convert(sampleJson);

console.log(json);
```

<details>
  <summary>Example of output in DPE format</summary>
 
 ```json
{
  "words": [
    {
      "id": 0,
      "text": "Good",
      "start": 0,
      "end": 0.44
    },
    {
      "id": 1,
      "text": "day,",
      "start": 0.4,
      "end": 0.54
    },
    ...
  ],
  "paragraphs": [
    {
      "end": 101.18,
      "start": 0,
      "speaker": "SPEAKER_A"
    },
    ...
  ]
}
```
</details>

<!-- ## System Architecture -->

<!-- _High level overview of system architecture_ -->

<!-- ## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

## Development env

 <!-- _How to run the development environment_ -->

- npm > `6.1.0`
- [Node 10 - dubnium](https://scotch.io/tutorials/whats-new-in-node-10-dubnium)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build

<!-- _How to run build_ -->

_NA_

## Tests

<!-- _How to carry out tests_ -->

_NA_

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

```
npm run publish:public
```
