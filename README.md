# Weather CLI
A CLI app that gives you the weather forecast.

## Install
Install Node.js, then:
```
$ npx withoutwax-weather-cli
```

## Usage
Run the application with ```weather``` command:
```
$ weather
```
You can use total 4 commands with the weather app:

```
$ weather --help

    Options
        weather [command] <options>
        
        today ................ Show weather for today
        forecast ............. Show 10-day weather forecast
        version .............. Show package version
        help ................. Show help menu for a command
    

```
When writing the command, you must use ```-l``` flag or ```--location``` flag to specify the location:
```
$ weather today -l Chicago

$ weather forecast --location Seoul
```

## License
MIT @ [Will Kim](https://github.com/withoutwax)