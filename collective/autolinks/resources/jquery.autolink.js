var url_regexp = /(https?:\/\/[　-熙ぁ-ヴーA-Za-z0-9~\/._\?\&=\-%#\+:\;,\@\']+)/;
jQuery.fn.autolink = function() {
    return this.each(function(){
        var desc = jQuery(this);
        desc.textNodes().each(function(){
            var text = jQuery(this);
            if(text.parent().get(0).nodeName != 'A') {
                text.replaceWith(this.data.replace(url_regexp, function($0, $1) {
                    return '<a href="' + $1 +'">' + $1 + '</a>';
                }));
            }
        });
    });
}
jQuery.fn.textNodes = function() {
    var ret = [];
    (function(el) {
        if (!el) return;
        if ((el.nodeType == 3)) {
            ret.push(el);
        } else {
            for (var i=0; i < el.childNodes.length; ++i) {
                arguments.callee(el.childNodes[i]);
            }
        }
    })(this[0]);
    return jQuery(ret);
}
