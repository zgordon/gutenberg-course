# Gutenberg Block Development Course for WordPress

![Course Banner](https://dzwonsemrish7.cloudfront.net/items/1J3M310N0S1x170k1d0D/Cover%20GB.png)

## A Course from Zac Gordon on JS for WP

[View the course on https://javascriptforwp.com/ >>](https://javascriptforwp.com/product/gutenberg-block-development-course/)

## Course Outline

1. Core Gutenberg Architecture
2. A High Level Overview of Blocks
3. Working with registerBlockType ([See this plugin repo for this section](https://github.com/zgordon/how-to-gutenberg-plugin))
4. HTTP Requests Outside of WordPress
5. Example Block Walkthroughs

## Example File Instructions

1. Download or fork the course repo
2. Install themes and plugins as needed
3. Run `npm install` and `npm run dev` to make changes

## Local Environment

First, you need a WordPress Environment to run the plugin on. The quickest way to get up and running is to use the provided docker setup. Install [docker-ce](https://store.docker.com/search?type=edition&offering=community) and [docker-compose](https://docs.docker.com/compose/install/) by following the most recent instructions on the docker site.

In the folder of your preference, clone this project and enter the working directory:

```
git clone git@github.com:zgordon/gutenberg-course.git
cd gutenberg-course 
```

To bring up this local WordPress instance run:

```
docker-compose up -d
```

The WordPress should be available at http://localhost:9999

To stop this local WordPress instance later run:

```
docker-compose stop
```

To destroy & remove later run:

```
docker-compose down -v
```

