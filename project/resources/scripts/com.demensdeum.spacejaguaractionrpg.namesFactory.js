function NamesFactory() {
    this.generateSpaceStationName = function() {
        var dictionary = ["NA", "SA", "ZO", "RU", "VI"];
        var name = "";
        for (var i = 0; i < 4; i++) {
            name += dictionary[Math.randInt(0, dictionary.length - 1)];
        };
        return name;
    };
    this.generateShipName = function() {
        var dictionary = ["VA", "HU", "DO", "NO", "SI"];
        var name = "";
        for (var i = 0; i < 4; i++) {
            name += dictionary[Math.randInt(0, dictionary.length - 1)];
        };
        if (Math.randInt(0, 400) == 310) {
          name = "CALEPEP";
        }
        return name;
    };
};
