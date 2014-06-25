function limitTextLength(config) {
    if (!config.element) {
        throw new Error("No element provided");
    }
    if(!config.maxLength) {
        throw new Error("No maxLength provided");
    }
    element = jQuery(config.element);
    var originalText = element.text(),
        trimmedText = originalText.substring(0, config.maxLength),
        trimmedText = trimmedText.substring(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" "))),
        leftOut = originalText.substring(trimmedText.length),
        hoverCTA = jQuery("<span>...</span>");
    if (config.class) {
        hoverCTA.addClass(config.class);
    }
    if (config.css) {
        hoverCTA.css(config.css);
    }
    if (typeof config.enter !== "function") {
        config.enter = function () {
            jQuery(this).text(leftOut);
        }
    }
    if (typeof config.leave !== "function") {
        config.leave = function () {
            jQuery(this).text("...");
        }
    }

    hoverCTA.on("mouseenter", function () {
        config.enter.apply(this, [leftOut, originalText]);
    });

    hoverCTA.on("mouseleave", function () {
        config.leave.apply(this, [leftOut, originalText]);
    });

    element.text(trimmedText).append(hoverCTA);
}
