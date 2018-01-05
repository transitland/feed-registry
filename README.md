# Feed Registry

The Transitland Feed Registry is a directory of public-transit operators and their authoriative data feeds. The directory is a view into Transitland's Datastore API; it lets users browse operators and their feeds, as well as view the license restrictions on each feed. The Feed Registry also lets users contribute additional operators and feeds.

* [Browse the Feed Registry](https://transit.land/feed-registry/)
* [How the Feed Registry fits into the Transitland ecosystem](https://transit.land/documentation/)
* [Get started with contributing to the Feed Registry](https://transit.land/news/2016/02/19/get-started-add-feeds.html)

The Feed Registry was built using Ember, with the Ember CLI. 
* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)

It uses the Ember CLI pod structure, configured by setting `"usePods": true` in `feed-registry/.ember-cli`.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/transitland/feed-registry.git`
* change into the new directory
* `npm install`
* `bower install`

## Configuration
To change the configuration, edit the config/environment.js file in the following ways:
* The Feed Registry connects to the [Transitland Datastore API](https://github.com/transitland/transitland-datastore/). By default, it connects to the Datastore API instance running at https://transit.land. To override, change the `datastoreHost` setting. For example: `datastoreHost = 'http://localhost:3000';`.
* By default, the Feed Registry is served at `/`. To change the path for deployment, edit the `baseURL` setting. For example: `baseURL = '/feed-registry';`.

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).


