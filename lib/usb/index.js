'use strict';
/* USB classes should implement the following methods:
 *   Constructor(options)
 *     options.vendorId
 *     options.productId
 *   .scan(interval)
 *   .disconnect()
 *   .send(arrayBuffer)
 *
 * USB classes should emit the following events:
 *   error: msg
 *   scanning:
 *   device-found:
 *   connect:
 *   message: headers, arrayBuffer
 *   disconnect:
 */

module.exports = {
  Chrome: require('./chrome'),
  Node: require('./node')
}


