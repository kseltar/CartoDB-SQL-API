'use strict';

var UserDatabaseMetadataService = require('./user_database_metadata_service');
var UsernameQueue = require('./username_queue');
var JobService = require('./job_service');
var JobCounterService = require('./job_counter_service');
var BatchManager = require('./batch_manager');

module.exports = function (metadataBackend ,maxJobsPerHost) {
    var usernameQueue = new UsernameQueue(metadataBackend);
    var userDatabaseMetadataService = new UserDatabaseMetadataService(metadataBackend);
    var jobService = new JobService(metadataBackend);
    var jobCounterService = new JobCounterService(maxJobsPerHost, metadataBackend);
    var batchManager = new BatchManager(usernameQueue, userDatabaseMetadataService, jobService, jobCounterService);

    return batchManager;
};
