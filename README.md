# Actn.io

Highly experimental backend as a service, under heavy development. 
Sorry, no documentation at the moment but you can play with demo app

Core: http://demo.core.actn.io  

- user: demo@actn.io
- pass: password 

Cors: http://demo.api.actn.io  

Ui: http://api.actn.io

## Apis

### Core
Core API provides overall administration on actn.io

#### Managable Modules

##### Client
Rest and Cors Client to consume Cors API

##### Model
Provides dynamic/abstract database modelling to use in Cors API.
Uses json schemas for design and validations, uses PL/V8
Provides indexing and callbacks aka hooks

###### Hook
Background jobs firing on create, update and destroy events on models. 
Uses Postgresql Listen/Notify API
Currently there is only one hook, webhook which makes http requests with giving options

##### Template  

Frontend Models of UI API

#### Tools
- Live 
See and Query data in real time

- Search
Query your data in ease. Uses HTTP Stream method so you can get millions of rows without any problem and rapidly filter results even with tens of millions. 
Data visualisation are on the way via D3

### Cors
Abstract backend api with cross domain support
- Database I/O
- Background Jobs through Hooks

### UI
Template management api  

- Templates
  - Views
  - Layouts
  - Css  
  - Javascript
  - Data Binding

### Deployment
Designed to run on CoreOS clusters, see platform directory for development environment.
  
### Thanks
Many thanks to all open source community. Actn.io uses excellent technology from top to bottom all open source.
