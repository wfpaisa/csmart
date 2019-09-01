'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  async create(ctx) {
    const data = await strapi.services.bakery.create(ctx.request.body);
    
    // Send 201 `created`
    ctx.created(data);
    console.log('controler', ctx.request.body);
    // NEW LINE: call our method emitToAllUsers and pass it body request
    strapi.emitToAllUsers({name: data.name, rating: index});
  },
};
