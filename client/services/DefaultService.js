/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Search for financial institutions
*
* searchRequest SearchRequest 
* returns SearchResponse
* */
const searchInstitutions = ({ searchRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        searchRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  searchInstitutions,
};
