# Magento JQueryUIDecomposer Plugin

This is a hack that you probably shouldn't use in production, because I've only accounted for the home page. But it represents a change Magento core needs to make at some point: decomposing monolithic libraries down to their individual pieces.

Similar work should be done for Knockout bindings and utilities.

![before and after](luma-homepage.png)

## Stats
Collected using `2.3-develop` branch, with Luma and `magento2-sample-data`, on the homepage of the store.

**Before**
- Compressed (gzip): 125kb
- Uncompressed: 497kb

**After**
- Compressed (gzip): 63.2kb
- Uncompressed: 281kb
