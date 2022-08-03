// evawrap by jvbf
// a wrapper for easier use of document.evaluate
class evawrap {
    static evaluate(root, path) {
        return document.evaluate(path, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    static evaluateAll = function (root, path) {
        var evl = document.evaluate(path, root, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        var result = [];
        var node = evl.iterateNext();
        while (node) {
            result.push(node);
            node = evl.iterateNext();
        }
        return result;
    }
}
