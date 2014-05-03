# &lt;unicodecoder-polymer&gt;

> Unicode Character Reverse Lookup

## Demo

[Check it live!](http://jimlyndon.github.io/unicodecoder-polymer)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install unicodecoder-polymer --save
```

Or [download as ZIP](https://github.com/jimlyndon/unicodecoder-polymer/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/unicodecoder-polymer/dist/unicodecoder.html">
    ```

3. Start using it!

    ```html
    <unicodecoder></unicodecoder>
    ```

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [gulp](http://gulpjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ gulp
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/jimlyndon/unicodecoder-polymer/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
